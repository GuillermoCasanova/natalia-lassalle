import { x as x$1, j as j$1, E as E$1, f as d, $, y as y$1, e as n, g, p, w as w$1 } from './exports-WEytBQE0.js';
import { r } from './stores-i0QuXd1Z.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function isPortableTextSpan(node) {
  return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every(mark => typeof mark == "string"));
}
function isPortableTextBlock(node) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type == "string" &&
    // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && (
    // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    !("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) &&
    // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every(def => typeof def._key == "string")) &&
    // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) &&
    // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every(child => typeof child == "object" && "_type" in child)
  );
}
function isPortableTextListItemBlock(block) {
  return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (typeof block.level > "u" || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
  return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
  return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
  return node._type === "@text";
}
const knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
function sortMarksByOccurences(span, index, blockChildren) {
  if (!isPortableTextSpan(span) || !span.marks) return [];
  if (!span.marks.length) return [];
  const marks = span.marks.slice(),
    occurences = {};
  return marks.forEach(mark => {
    occurences[mark] = 1;
    for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
      const sibling = blockChildren[siblingIndex];
      if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;else break;
    }
  }), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
  const aOccurences = occurences[markA],
    bOccurences = occurences[markB];
  if (aOccurences !== bOccurences) return bOccurences - aOccurences;
  const aKnownPos = knownDecorators.indexOf(markA),
    bKnownPos = knownDecorators.indexOf(markB);
  return aKnownPos !== bKnownPos ? aKnownPos - bKnownPos : markA.localeCompare(markB);
}
function buildMarksTree(block) {
  var _a, _b;
  const {
      children
    } = block,
    markDefs = (_a = block.markDefs) != null ? _a : [];
  if (!children || !children.length) return [];
  const sortedMarks = children.map(sortMarksByOccurences),
    rootNode = {
      _type: "@span",
      children: [],
      markType: "<unknown>"
    };
  let nodeStack = [rootNode];
  for (let i = 0; i < children.length; i++) {
    const span = children[i];
    if (!span) continue;
    const marksNeeded = sortedMarks[i] || [];
    let pos = 1;
    if (nodeStack.length > 1) for (pos; pos < nodeStack.length; pos++) {
      const mark = ((_b = nodeStack[pos]) == null ? void 0 : _b.markKey) || "",
        index = marksNeeded.indexOf(mark);
      if (index === -1) break;
      marksNeeded.splice(index, 1);
    }
    nodeStack = nodeStack.slice(0, pos);
    let currentNode = nodeStack[nodeStack.length - 1];
    if (currentNode) {
      for (const markKey of marksNeeded) {
        const markDef = markDefs == null ? void 0 : markDefs.find(def => def._key === markKey),
          markType = markDef ? markDef._type : markKey,
          node = {
            _type: "@span",
            _key: span._key,
            children: [],
            markDef,
            markType,
            markKey
          };
        currentNode.children.push(node), nodeStack.push(node), currentNode = node;
      }
      if (isPortableTextSpan(span)) {
        const lines = span.text.split(`
`);
        for (let line = lines.length; line-- > 1;) lines.splice(line, 0, `
`);
        currentNode.children = currentNode.children.concat(lines.map(text => ({
          _type: "@text",
          text
        })));
      } else currentNode.children = currentNode.children.concat(span);
    }
  }
  return rootNode.children;
}
function nestLists(blocks, mode) {
  const tree = [];
  let currentList;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block) {
      if (!isPortableTextListItemBlock(block)) {
        tree.push(block), currentList = void 0;
        continue;
      }
      if (!currentList) {
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }
      if ((block.level || 1) > currentList.level) {
        const newList = listFromBlock(block, i, mode);
        {
          const lastListItem = currentList.children[currentList.children.length - 1],
            newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
              children: [...lastListItem.children, newList]
            });
          currentList.children[currentList.children.length - 1] = newLastChild;
        }
        currentList = newList;
        continue;
      }
      if ((block.level || 1) < currentList.level) {
        const matchingBranch = tree[tree.length - 1],
          match = matchingBranch && findListMatching(matchingBranch, block);
        if (match) {
          currentList = match, currentList.children.push(block);
          continue;
        }
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (block.listItem !== currentList.listItem) {
        const matchingBranch = tree[tree.length - 1],
          match = matchingBranch && findListMatching(matchingBranch, {
            level: block.level || 1
          });
        if (match && match.listItem === block.listItem) {
          currentList = match, currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block, i, mode), tree.push(currentList);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", block), tree.push(block);
    }
  }
  return tree;
}
function blockMatchesList(block, list) {
  return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
  return {
    _type: "@list",
    _key: `${block._key || `${index}`}-parent`,
    mode,
    level: block.level || 1,
    listItem: block.listItem,
    children: [block]
  };
}
function findListMatching(rootNode, matching) {
  const level = matching.level || 1,
    style = matching.listItem || "normal",
    filterOnType = typeof matching.listItem == "string";
  if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
  if (!("children" in rootNode)) return;
  const node = rootNode.children[rootNode.children.length - 1];
  return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
  let text = "";
  return span.children.forEach(current => {
    isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
  }), text;
}
const LIST_NEST_MODE_HTML = "html";

const x=x$1(((e,i,r,d$1)=>{let s,{title:p=""}=i,{titleTemplate:$$1=""}=i,{noindex:c=false}=i,{nofollow:m=false}=i,{robotsProps:v}=i,{description:u}=i,{mobileAlternate:g}=i,{languageAlternates:f}=i,{twitter:b}=i,{facebook:k}=i,{openGraph:x}=i,{canonical:h}=i,{additionalMetaTags:y}=i,{additionalLinkTags:A}=i,w="";if(v){const{nosnippet:e,maxSnippet:t,maxImagePreview:o,maxVideoPreview:n,noarchive:a,noimageindex:l,notranslate:i,unavailableAfter:r}=v;w=`${e?",nosnippet":""}${t?`,max-snippet:${t}`:""}${o?`,max-image-preview:${o}`:""}${a?",noarchive":""}${r?`,unavailable_after:${r}`:""}${l?",noimageindex":""}${n?`,max-video-preview:${n}`:""}${i?",notranslate":""}`;}return void 0===i.title&&r.title&&void 0!==p&&r.title(p),void 0===i.titleTemplate&&r.titleTemplate&&void 0!==$$1&&r.titleTemplate($$1),void 0===i.noindex&&r.noindex&&void 0!==c&&r.noindex(c),void 0===i.nofollow&&r.nofollow&&void 0!==m&&r.nofollow(m),void 0===i.robotsProps&&r.robotsProps&&void 0!==v&&r.robotsProps(v),void 0===i.description&&r.description&&void 0!==u&&r.description(u),void 0===i.mobileAlternate&&r.mobileAlternate&&void 0!==g&&r.mobileAlternate(g),void 0===i.languageAlternates&&r.languageAlternates&&void 0!==f&&r.languageAlternates(f),void 0===i.twitter&&r.twitter&&void 0!==b&&r.twitter(b),void 0===i.facebook&&r.facebook&&void 0!==k&&r.facebook(k),void 0===i.openGraph&&r.openGraph&&void 0!==x&&r.openGraph(x),void 0===i.canonical&&r.canonical&&void 0!==h&&r.canonical(h),void 0===i.additionalMetaTags&&r.additionalMetaTags&&void 0!==y&&r.additionalMetaTags(y),void 0===i.additionalLinkTags&&r.additionalLinkTags&&void 0!==A&&r.additionalLinkTags(A),s=$$1?$$1.replace(/%s/g,p):p,""+(e.head+=`\x3c!-- HEAD_svelte-1h7w4y4_START --\x3e${e.title=`<title>${d(s)}</title>`,""}<meta name="robots"${j$1("content",`${c?"noindex":"index"},${m?"nofollow":"follow"}${w}`,0)}><meta name="googlebot"${j$1("content",`${c?"noindex":"index"},${m?"nofollow":"follow"}${w}`,0)}>${u?`<meta name="description"${j$1("content",u,0)}>`:""}${h?`<link rel="canonical"${j$1("href",h,0)}>`:""}${g?`<link rel="alternate"${j$1("media",g.media,0)}${j$1("href",g.href,0)}>`:""}${f&&f.length>0?`${E$1(f,(e=>`<link rel="alternate"${j$1("hreflang",e.hrefLang,0)}${j$1("href",e.href,0)}>`))}`:""}${b?`${b.cardType?`<meta name="twitter:card"${j$1("content",b.cardType,0)}>`:""} ${b.site?`<meta name="twitter:site"${j$1("content",b.site,0)}>`:""} ${b.handle?`<meta name="twitter:creator"${j$1("content",b.handle,0)}>`:""} ${b.title?`<meta name="twitter:title"${j$1("content",b.title,0)}>`:""} ${b.description?`<meta name="twitter:description"${j$1("content",b.description,0)}>`:""} ${b.image?`<meta name="twitter:image"${j$1("content",b.image,0)}>`:""} ${b.imageAlt?`<meta name="twitter:image:alt"${j$1("content",b.imageAlt,0)}>`:""}`:""}${k?`<meta property="fb:app_id"${j$1("content",k.appId,0)}>`:""}${x?`${x.url||h?`<meta property="og:url"${j$1("content",x.url||h,0)}>`:""} ${x.type?`<meta property="og:type"${j$1("content",x.type.toLowerCase(),0)}> ${"profile"===x.type.toLowerCase()&&x.profile?`${x.profile.firstName?`<meta property="profile:first_name"${j$1("content",x.profile.firstName,0)}>`:""} ${x.profile.lastName?`<meta property="profile:last_name"${j$1("content",x.profile.lastName,0)}>`:""} ${x.profile.username?`<meta property="profile:username"${j$1("content",x.profile.username,0)}>`:""} ${x.profile.gender?`<meta property="profile:gender"${j$1("content",x.profile.gender,0)}>`:""}`:""+("book"===x.type.toLowerCase()&&x.book?`${x.book.authors&&x.book.authors.length?`${E$1(x.book.authors,(e=>`<meta property="book:author"${j$1("content",e,0)}>`))}`:""} ${x.book.isbn?`<meta property="book:isbn"${j$1("content",x.book.isbn,0)}>`:""} ${x.book.releaseDate?`<meta property="book:release_date"${j$1("content",x.book.releaseDate,0)}>`:""} ${x.book.tags&&x.book.tags.length?`${E$1(x.book.tags,(e=>`<meta property="book:tag"${j$1("content",e,0)}>`))}`:""}`:""+("article"===x.type.toLowerCase()&&x.article?`${x.article.publishedTime?`<meta property="article:published_time"${j$1("content",x.article.publishedTime,0)}>`:""} ${x.article.modifiedTime?`<meta property="article:modified_time"${j$1("content",x.article.modifiedTime,0)}>`:""} ${x.article.expirationTime?`<meta property="article:expiration_time"${j$1("content",x.article.expirationTime,0)}>`:""} ${x.article.authors&&x.article.authors.length?`${E$1(x.article.authors,(e=>`<meta property="article:author"${j$1("content",e,0)}>`))}`:""} ${x.article.section?`<meta property="article:section"${j$1("content",x.article.section,0)}>`:""} ${x.article.tags&&x.article.tags.length?`${E$1(x.article.tags,(e=>`<meta property="article:tag"${j$1("content",e,0)}>`))}`:""}`:""+("video.movie"===x.type.toLowerCase()||"video.episode"===x.type.toLowerCase()||"video.tv_show"===x.type.toLowerCase()||"video.other"===x.type.toLowerCase()&&x.video?`${x.video.actors&&x.video.actors.length?`${E$1(x.video.actors,(e=>`${e.profile?`<meta property="video:actor"${j$1("content",e.profile,0)}>`:""} ${e.role?`<meta property="video:actor:role"${j$1("content",e.role,0)}>`:""}`))}`:""} ${x.video.directors&&x.video.directors.length?`${E$1(x.video.directors,(e=>`<meta property="video:director"${j$1("content",e,0)}>`))}`:""} ${x.video.writers&&x.video.writers.length?`${E$1(x.video.writers,(e=>`<meta property="video:writer"${j$1("content",e,0)}>`))}`:""} ${x.video.duration?`<meta property="video:duration"${j$1("content",x.video.duration.toString(),0)}>`:""} ${x.video.releaseDate?`<meta property="video:release_date"${j$1("content",x.video.releaseDate,0)}>`:""} ${x.video.tags&&x.video.tags.length?`${E$1(x.video.tags,(e=>`<meta property="video:tag"${j$1("content",e,0)}>`))}`:""} ${x.video.series?`<meta property="video:series"${j$1("content",x.video.series,0)}>`:""}`:"")))}`:""} ${x.title||s?`<meta property="og:title"${j$1("content",x.title||s,0)}>`:""} ${x.description||u?`<meta property="og:description"${j$1("content",x.description||u,0)}>`:""} ${x.images&&x.images.length?`${E$1(x.images,(e=>`<meta property="og:image"${j$1("content",e.url,0)}> ${e.alt?`<meta property="og:image:alt"${j$1("content",e.alt,0)}>`:""} ${e.width?`<meta property="og:image:width"${j$1("content",e.width.toString(),0)}>`:""} ${e.height?`<meta property="og:image:height"${j$1("content",e.height.toString(),0)}>`:""}`))}`:""} ${x.videos&&x.videos.length?`${E$1(x.videos,(e=>`<meta property="og:video"${j$1("content",e.url,0)}> ${e.alt?`<meta property="og:video:alt"${j$1("content",e.alt,0)}>`:""} ${e.width?`<meta property="og:video:width"${j$1("content",e.width.toString(),0)}>`:""} ${e.height?`<meta property="og:video:height"${j$1("content",e.height.toString(),0)}>`:""} ${e.secureUrl?`<meta property="og:video:secure_url"${j$1("content",e.secureUrl.toString(),0)}>`:""} ${e.type?`<meta property="og:video:type"${j$1("content",e.type.toString(),0)}>`:""}`))}`:""} ${x.locale?`<meta property="og:locale"${j$1("content",x.locale,0)}>`:""} ${x.site_name?`<meta property="og:site_name"${j$1("content",x.site_name,0)}>`:""}`:""}${y&&y.length>0?`${E$1(y,(e=>`<meta${$([y$1(e)],{})}>`))}`:""}${A?.length?`${E$1(A,(e=>`<link${$([y$1(e)],{})}>`))}`:""}\x3c!-- HEAD_svelte-1h7w4y4_END --\x3e`,"")}));function h(){return Math.random().toFixed(5).split(".")[1]}function y(e){return {_key:e._key||h(),...e}}function A(e){return {_key:e._key||h(),...e,..."block"===e._type&&Array.isArray(e.children)?{children:e.children.map(y)}:{}}}const w=x$1(((e,t,o,n)=>{let a,{portableText:l}=t;return void 0===t.portableText&&o.portableText&&void 0!==l&&o.portableText(l),({markType:a}=l),""+("strong"===a?`<strong>${n.default?n.default({}):""}</strong>`:""+("em"===a?`<em>${n.default?n.default({}):""}</em>`:""+("code"===a?`<code>${n.default?n.default({}):""}</code>`:""+("underline"===a?`<span style="text-decoration:underline;">${n.default?n.default({}):""}</span>`:""+("strike-through"===a?`<del>${n.default?n.default({}):""}</del>`:`${n.default?n.default({}):""}`)))))})),T=x$1(((e,o,n,a)=>{let l,i,{portableText:r}=o;return void 0===o.portableText&&n.portableText&&void 0!==r&&n.portableText(r),({value:l}=r),i=l?.href||l?.url||l?.link||l?.value,""+("string"==typeof i?`<a${j$1("href",i,0)}>${a.default?a.default({}):""}</a>`:`${a.default?a.default({}):""}`)})),I=x$1(((e,t,o,n)=>{let a,l,{portableText:r}=t;return void 0===t.portableText&&o.portableText&&void 0!==r&&o.portableText(r),({value:a}=r),l=a.style||"normal",""+(["h1","h2","h3","h4","h5","h6","blockquote"].includes(l)?""+((d=l)?`<${l}>${p(d)?"":`${n.default?n.default({}):""}`}${p(d)?"":`</${d}>`}`:""):""+("normal"===l?`<p>${n.default?n.default({}):""}</p>`:`${n.default?n.default({}):""}`));var d;})),C=x$1(((e,t,o,n)=>{let a,l,{portableText:i}=t;return void 0===t.portableText&&o.portableText&&void 0!==i&&o.portableText(i),({value:a}=i),({listItem:l}=a),""+("number"===l?`<ol>${n.default?n.default({}):""}</ol>`:`<ul>${n.default?n.default({}):""}</ul>`)})),P=x$1(((e,t,o,n)=>`<li>${n.default?n.default({}):""}</li>`)),B={marks:{"strike-through":w,code:w,em:w,strong:w,underline:w,link:T},block:{blockquote:I,h1:I,h2:I,h3:I,h4:I,h5:I,h6:I,normal:I},list:{bullet:C,number:C},listItem:{bullet:P,number:P},types:{},hardBreak:x$1(((e,t,o,n)=>"<br>")),unknownBlockStyle:I,unknownList:C,unknownListItem:P,unknownMark:w,unknownType:x$1(((e,t,o,n)=>`${n.default?n.default({}):""}`))};function _(e,t,o){const n=t[o],a=e[o];return "function"==typeof n||n&&"function"==typeof a?n:n?{...a,...n}:a}const L=x$1(((e,t,o,n)=>{let a,l,i,s,{global:p}=t,{node:$}=t,{indexInParent:c}=t;return void 0===t.global&&o.global&&void 0!==p&&o.global(p),void 0===t.node&&o.node&&void 0!==$&&o.node($),void 0===t.indexInParent&&o.indexInParent&&void 0!==c&&o.indexInParent(c),({components:a}=p),({style:l="normal"}=$),i="function"==typeof a.block?a.block:a.block[l],i||p.missingComponentHandler(l,"blockStyle"),s=(()=>({global:p,indexInParent:c,value:$}))(),`${g(i||a.unknownBlockStyle||w$1,"svelte:component").$$render(e,{portableText:s},{},{default:()=>`${n.default?n.default({}):""}`})}`})),S=x$1(((e,t,o,n)=>{let a,l,i,s,{global:p}=t,{node:$}=t,{parentBlock:c}=t,{indexInParent:m}=t,{isInline:v=false}=t;return void 0===t.global&&o.global&&void 0!==p&&o.global(p),void 0===t.node&&o.node&&void 0!==$&&o.node($),void 0===t.parentBlock&&o.parentBlock&&void 0!==c&&o.parentBlock(c),void 0===t.indexInParent&&o.indexInParent&&void 0!==m&&o.indexInParent(m),void 0===t.isInline&&o.isInline&&void 0!==v&&o.isInline(v),({components:a}=p),({_type:l}=$),i=a.types[l],i||p.missingComponentHandler(l,"block"),s=(()=>({global:p,value:$,indexInParent:m,parentBlock:c,isInline:v}))(),`${g(i||a.unknownType||w$1,"svelte:component").$$render(e,{portableText:s},{},{})}`})),M=x$1(((e,t,o,n)=>{let a,l,i,s,p,{global:$}=t,{indexInParent:c}=t,{node:m}=t;return void 0===t.global&&o.global&&void 0!==$&&o.global($),void 0===t.indexInParent&&o.indexInParent&&void 0!==c&&o.indexInParent(c),void 0===t.node&&o.node&&void 0!==m&&o.node(m),({components:a}=$),({listItem:l}=m),i="function"==typeof a.list?a.list:a.list[l],s=i,s||$.missingComponentHandler(l,"listStyle"),p=(()=>({global:$,value:m,indexInParent:c}))(),`${g(s||a.unknownList||w$1,"svelte:component").$$render(e,{portableText:p},{},{default:()=>`${n.default?n.default({}):""}`})}`})),j=x$1(((e,t,o,n)=>{let a,l,i,s,p,{global:$}=t,{indexInParent:c}=t,{node:m}=t;return void 0===t.global&&o.global&&void 0!==$&&o.global($),void 0===t.indexInParent&&o.indexInParent&&void 0!==c&&o.indexInParent(c),void 0===t.node&&o.node&&void 0!==m&&o.node(m),({components:a}=$),({style:l="normal"}=m),i="function"==typeof a.listItem?a.listItem:a.listItem[l],i||$.missingComponentHandler(l,"listItemStyle"),s="normal"!==l?a.block[l]:void 0,p=(()=>({global:$,value:m,indexInParent:c}))(),`${g(i||a.unknownListItem||w$1,"svelte:component").$$render(e,{portableText:p},{},{default:()=>""+(s?`${g(s||w$1,"svelte:component").$$render(e,{portableText:{...p,value:{...m,listItem:void 0}}},{},{default:()=>`${n.default?n.default({}):""}`})}`:`${n.default?n.default({}):""}`)})}`})),E=x$1(((e,t,o,n)=>{let a,l,i,s,{global:$}=t,{node:c}=t,{parentBlock:m}=t;return void 0===t.global&&o.global&&void 0!==$&&o.global($),void 0===t.node&&o.node&&void 0!==c&&o.node(c),void 0===t.parentBlock&&o.parentBlock&&void 0!==m&&o.parentBlock(m),({components:a}=$),({markType:l}=c),i=a.marks[l],i||$.missingComponentHandler(l,"mark"),s={global:$,parentBlock:m,markType:l,value:c.markDef,markKey:c.markKey,plainTextContent:spanToPlainText(c)},`${g(i||a.unknownMark||w$1,"svelte:component").$$render(e,{portableText:s},{},{default:()=>`${n.default?n.default({}):""}`})}`})),R=x$1(((e,t,o,a)=>{let l,i,{global:s}=t,{node:p}=t;return void 0===t.global&&o.global&&void 0!==s&&o.global(s),void 0===t.node&&o.node&&void 0!==p&&o.node(p),({components:l}=s),({text:i}=p),""+("\n"===i?""+("function"==typeof l.hardBreak?`${g(l.hardBreak||w$1,"svelte:component").$$render(e,{},{},{})}`:`${d(i)}`):`${d(i)}`)})),D=x$1(((e,t,n,a)=>{let l,i,d,s,{global:p}=t,{options:f}=t;return void 0===t.global&&n.global&&void 0!==p&&n.global(p),void 0===t.options&&n.options&&void 0!==f&&n.options(f),({node:l,indexInParent:i,parentBlock:d,isInline:s}=f),""+(isPortableTextToolkitList(l)?`${g(M,"RenderList").$$render(e,{node:l,indexInParent:i,global:p},{},{default:()=>`${E$1(l.children,((t,o)=>`${g(D,"svelte:self").$$render(e,{options:{node:t,indexInParent:o,parentBlock:void 0,isInline:void 0},global:p},{},{})}`))}`})}`:""+(isPortableTextListItemBlock(l)?`${g(j,"RenderListItem").$$render(e,{node:l,indexInParent:i,global:p},{},{default:()=>`${E$1(buildMarksTree(l),((t,o)=>`${g(D,"svelte:self").$$render(e,{options:{parentBlock:l,node:t,isInline:true,indexInParent:o},global:p},{},{})}`))}`})}`:""+(isPortableTextToolkitSpan(l)?`${g(E,"RenderSpan").$$render(e,{node:l,parentBlock:d,global:p},{},{default:()=>`${E$1(l.children,((t,o)=>`${g(D,"svelte:self").$$render(e,{options:{parentBlock:d,node:t,isInline:true,indexInParent:o},global:p},{},{})}`))}`})}`:""+(isPortableTextBlock(l)?`${g(L,"RenderBlock").$$render(e,{node:l,indexInParent:i,global:p},{},{default:()=>`${E$1(buildMarksTree(l),((t,o)=>`${g(D,"svelte:self").$$render(e,{options:{parentBlock:l,node:t,isInline:true,indexInParent:o},global:p},{},{})}`))}`})}`:""+(isPortableTextToolkitTextNode(l)?`${g(R,"RenderText").$$render(e,{node:l,global:p},{},{})}`:""+(l?`${g(S,"RenderCustomBlock").$$render(e,{node:l,parentBlock:d,indexInParent:i,isInline:s,global:p},{},{})}`:""))))))})),H=(e,t)=>`Unknown ${e}, specify a component for it in the \`components${t?".":""}${t}\` prop`;const O=x$1(((e,t,n,a)=>{let l,i,d,s,{value:p=[]}=t,{components:$}=t,{context:c={}}=t,{onMissingComponent:m=true}=t;return void 0===t.value&&n.value&&void 0!==p&&n.value(p),void 0===t.components&&n.components&&void 0!==$&&n.components($),void 0===t.context&&n.context&&void 0!==c&&n.context(c),void 0===t.onMissingComponent&&n.onMissingComponent&&void 0!==m&&n.onMissingComponent(m),l=function(e,t={}){return {...e,...t,block:_(e,t,"block"),list:_(e,t,"list"),listItem:_(e,t,"listItem"),marks:_(e,t,"marks"),types:_(e,t,"types")}}(B,$),i=(Array.isArray(p)?p:[p]).map(A),d=nestLists(i,LIST_NEST_MODE_HTML),s=(e,t)=>{if(false===m)return;const o=((e,t)=>{switch(t){case "block":return H(`block type "${e}"`,"types");case "blockStyle":return H(`block style "${e}"`,"block");case "listItemStyle":return H(`list item style "${e}"`,"listItem");case "listStyle":return H(`list style "${e}"`,"list");case "mark":return H(`mark type "${e}"`,"marks");default:return H("type")}})(e,t);"function"!=typeof m?function(e){console.warn(e);}(o):m(o,{type:e,nodeType:t});},`${E$1(d,((t,o)=>`${g(D,"RenderNode").$$render(e,{global:{components:l,missingComponentHandler:s,context:c,ptBlocks:d,ptRawValue:p},options:{node:t,isInline:false,indexInParent:o}},{},{})}`))}`})),K=x$1(((e,t,o,a)=>{let l,i,r,d$1,{portableText:s}=t;return void 0===t.portableText&&o.portableText&&void 0!==s&&o.portableText(s),({value:l}=s),i=l.page?._type,r=l.page?.title||l.name,d$1=l.page?.slug,console.log("Internal Link Value:",{value:l,type:i,page_title:r,handle:d$1}),""+(d$1?""+("project"===i?`<a href="${"/work/"+d(d$1,true)}" rel="internal" title="${"View "+d(r||"Untitled",true)+" Case Study"}">${a.default?a.default({}):""}</a>`:`<a href="${"/"+d(d$1,true)}" rel="internal" title="${"Go to "+d(r||"Untitled",true)+" page"}">${a.default?a.default({}):""}</a>`):`<span title="Missing link destination">${a.default?a.default({}):""}</span>`)})),N={code:".external-link-icon.svelte-1fd6ajc.svelte-1fd6ajc{width:0.75rem;height:0.75rem;display:inline-block;margin-right:var(--level1)}.external-link-icon.svelte-1fd6ajc svg.svelte-1fd6ajc{width:100%;height:100%}",map:'{"version":3,"file":"external-link.svelte","sources":["external-link.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let portableText;\\n$: ({ value } = portableText);\\n$: newWindow = value.blank;\\n$: href = value.href;\\n<\/script>\\n\\n<a {href} rel=\\"external\\" target={newWindow ? \\"_blank\\" : null}>\\n  <slot />\\n  {#if newWindow}\\n    <span class=\\"external-link-icon\\">\\n      <svg>\\n        <use xlink:href=\\"#icon-external-link\\" />\\n      </svg>\\n    </span>\\n  {/if}\\n</a>\\n\\n<style>\\n.external-link-icon {\\n  width: 0.75rem;\\n  height: 0.75rem;\\n  display: inline-block;\\n  margin-right: var(--level1);\\n}\\n\\n.external-link-icon svg {\\n  width: 100%;\\n  height: 100%;\\n}\\n</style>\\n"],"names":[],"mappings":"AAkBA,iDAAoB,CAClB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,YAAY,CACrB,YAAY,CAAE,IAAI,QAAQ,CAC5B,CAEA,kCAAmB,CAAC,kBAAI,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}'},G=x$1(((e,o,n,a)=>{let l,i,r,{portableText:d}=o;return void 0===o.portableText&&n.portableText&&void 0!==d&&n.portableText(d),e.css.add(N),({value:l}=d),i=l.blank,r=l.href,`<a${j$1("href",r,0)} rel="external"${j$1("target",i?"_blank":null,0)}>${a.default?a.default({}):""} ${i?'<span class="external-link-icon svelte-1fd6ajc" data-svelte-h="svelte-i1r7ct"><svg class="svelte-1fd6ajc"><use xlink:href="#icon-external-link"></use></svg></span>':""} </a>`})),U=x$1(((e,t,o,a)=>{let l,i,{portableText:r}=t;return void 0===t.portableText&&o.portableText&&void 0!==r&&o.portableText(r),({value:l}=r),i=l.mailto,`<a href="${"mailto:"+d(i,true)}" title="${"Open email service to email "+d(i,true)}">${a.default?a.default({}):""}</a>`})),V=x$1(((e,t,o,n$1)=>{let a,l;l=n(r,(e=>a=e));let{text:i}=t;a.data.language;const d={marks:{internalLink:K,link:G,mailtoLink:U}};return void 0===t.text&&o.text&&void 0!==i&&o.text(i),l(),""+(i?`${g(O,"PortableText").$$render(e,{value:i,components:d},{},{})}`:"")}));

export { V, x };
//# sourceMappingURL=rich-text-DlSggbEO.js.map
