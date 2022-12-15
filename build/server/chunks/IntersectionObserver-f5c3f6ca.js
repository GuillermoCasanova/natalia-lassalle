import { c as create_ssr_component, e as each, v as validate_component, m as missing_component, k as createEventDispatcher, f as escape } from './index-7de6220d.js';

const ReportError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "error" } = $$props;
  let { ignoreUnknownTypes = true } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.ignoreUnknownTypes === void 0 && $$bindings.ignoreUnknownTypes && ignoreUnknownTypes !== void 0)
    $$bindings.ignoreUnknownTypes(ignoreUnknownTypes);
  {
    if (ignoreUnknownTypes) {
      console.info(`[PortableText] ${message}`);
    } else {
      throw `[PortableText] ${message}`;
    }
  }
  return ``;
});
const BlockSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let span;
  let block;
  let serializers;
  let allMarks;
  let currentMark;
  let nestedSpan;
  let nestedProps;
  let customComponent;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  span = portableText.span;
  block = portableText.block;
  serializers = portableText.serializers;
  allMarks = span.marks || [];
  currentMark = ((block === null || block === void 0 ? void 0 : block.markDefs) || []).find((def) => def._key === allMarks[0]) || allMarks[0];
  nestedSpan = { ...span, marks: allMarks.slice(1) };
  nestedProps = { ...portableText, span: nestedSpan };
  customComponent = (serializers === null || serializers === void 0 ? void 0 : serializers.marks) ? typeof currentMark === "string" ? serializers.marks[currentMark] : serializers.marks[currentMark === null || currentMark === void 0 ? void 0 : currentMark._type] : void 0;
  return `${!currentMark ? `
  ${slots.default ? slots.default({}) : ``}` : `${customComponent ? `${validate_component(customComponent || missing_component, "svelte:component").$$render(
    $$result,
    {
      portableText: { ...portableText, mark: currentMark }
    },
    {},
    {
      default: () => {
        return `
    ${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        })}`;
      }
    }
  )}` : `${currentMark === "strong" ? `<strong>${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</strong>` : `${currentMark === "em" ? `<em>${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</em>` : `${currentMark === "code" ? `<code>${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</code>` : `${currentMark === "underline" ? `<u>${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</u>` : `${currentMark === "strike-through" ? `<s>${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</s>` : `${validate_component(ReportError, "ReportError").$$render(
    $$result,
    {
      message: "Mark of type " + (typeof currentMark === "string" ? currentMark : currentMark._type) + " has no compatible renderer or is missing markDefs (block " + block._key + ", child " + span._key + ")",
      ignoreUnknownTypes: portableText.ignoreUnknownTypes || !!(serializers == null ? void 0 : serializers.unknownMark)
    },
    {},
    {}
  )}
  ${(serializers == null ? void 0 : serializers.unknownMark) ? `${validate_component(serializers.unknownMark || missing_component, "svelte:component").$$render(
    $$result,
    {
      portableText: { ...portableText, mark: currentMark }
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}` : `
    ${validate_component(BlockSpan, "svelte:self").$$render($$result, { portableText: nestedProps }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`}`}`}`}`}`}`}`}`;
});
function getRandomKey() {
  return Math.random().toFixed(5).split(".")[1];
}
function assertSpanKey(span) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  };
}
function assertBlockKey(block) {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...block._type === "block" && Array.isArray(block.children) ? {
      children: block.children.map(assertSpanKey)
    } : {}
  };
}
const LIST_TYPE = "__internal_pt-list";
const BLOCK_LIST_ITEMS = "__internal_pt-listChildren";
function assertListItem(block) {
  return block._type === "block" && typeof block.level === "number" && ["bullet", "number"].includes(block.listItem);
}
function nestLists(blocks, level = 1) {
  return blocks.reduce((normalizedBlocks, entry, curIndex) => {
    if (!assertListItem(entry)) {
      return [...normalizedBlocks, assertBlockKey(entry)];
    }
    const curBlock = entry;
    if (curBlock.level !== level) {
      return normalizedBlocks;
    }
    const followingBlocks = blocks.slice(curIndex + 1);
    const firstNonNested = followingBlocks.findIndex(
      (block) => !assertListItem(block) || block.listItem !== curBlock.listItem || block.level <= curBlock.level
    );
    const nestedBlocks = followingBlocks.slice(
      0,
      firstNonNested >= 0 ? firstNonNested : void 0
    );
    const listChildren = nestLists(nestedBlocks, level + 1);
    const parsedBlock = assertBlockKey({
      ...curBlock,
      ...(listChildren === null || listChildren === void 0 ? void 0 : listChildren.length) > 0 ? { [BLOCK_LIST_ITEMS]: listChildren } : {}
    });
    const previousBlock = normalizedBlocks.slice(-1)[0];
    if ((previousBlock === null || previousBlock === void 0 ? void 0 : previousBlock._type) === LIST_TYPE && previousBlock.listItem === curBlock.listItem) {
      const parentBlock = previousBlock;
      return [
        ...normalizedBlocks.slice(0, -1),
        {
          ...parentBlock,
          children: [...parentBlock.children, parsedBlock]
        }
      ];
    }
    const finalBlock = level === 1 ? assertBlockKey({
      _key: curBlock._key,
      _type: LIST_TYPE,
      listItem: curBlock.listItem,
      children: [parsedBlock]
    }) : parsedBlock;
    return [...normalizedBlocks, finalBlock];
  }, []);
}
const BlockWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let block;
  let style;
  let customStyle;
  var _a, _b;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  block = portableText.block;
  style = (block === null || block === void 0 ? void 0 : block._type) === "block" ? assertListItem(block) ? `listItem_${block.listItem}` : block.style || "normal" : `list_${block.listItem}`;
  customStyle = ((_b = (_a = portableText.serializers) === null || _a === void 0 ? void 0 : _a.blockStyles) === null || _b === void 0 ? void 0 : _b[style]) || void 0;
  return `${customStyle ? `${validate_component(customStyle || missing_component, "svelte:component").$$render($$result, { portableText }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${style === "h1" ? `<h1>${slots.default ? slots.default({}) : ``}</h1>` : `${style === "h2" ? `<h2>${slots.default ? slots.default({}) : ``}</h2>` : `${style === "h3" ? `<h3>${slots.default ? slots.default({}) : ``}</h3>` : `${style === "h4" ? `<h4>${slots.default ? slots.default({}) : ``}</h4>` : `${style === "h5" ? `<h5>${slots.default ? slots.default({}) : ``}</h5>` : `${style === "h6" ? `<h6>${slots.default ? slots.default({}) : ``}</h6>` : `${style === "blockquote" ? `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>` : `${style === "normal" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${style === "list_bullet" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${style === "list_number" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${style === "listItem_bullet" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${style === "listItem_number" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${validate_component(ReportError, "ReportError").$$render(
    $$result,
    {
      message: "Style " + style + " has no compatible renderer (block " + block._key + ")"
    },
    {},
    {}
  )}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const BlockRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let block;
  let serializers;
  let { portableText } = $$props;
  if ($$props.portableText === void 0 && $$bindings.portableText && portableText !== void 0)
    $$bindings.portableText(portableText);
  block = portableText.block;
  serializers = portableText.serializers;
  return `${validate_component(BlockWrapper, "BlockWrapper").$$render($$result, { portableText }, {}, {
    default: () => {
      var _a;
      return `${block._type === "block" ? `${each(block.children, (child) => {
        var _a2;
        return `${((_a2 = serializers == null ? void 0 : serializers.types) == null ? void 0 : _a2[child._type]) ? `
        ${validate_component(serializers.types[child._type] || missing_component, "svelte:component").$$render(
          $$result,
          {
            portableText: {
              ...portableText,
              parentBlock: block,
              block: child
            }
          },
          {},
          {}
        )}` : `${child._type === "span" ? `
        ${validate_component(BlockSpan, "BlockSpan").$$render(
          $$result,
          {
            portableText: {
              block,
              serializers,
              ignoreUnknownTypes: portableText.ignoreUnknownTypes,
              span: child,
              context: portableText.context
            }
          },
          {},
          {
            default: () => {
              return `${escape(child.text)}`;
            }
          }
        )}` : `${validate_component(ReportError, "ReportError").$$render(
          $$result,
          {
            message: "Block child of type " + child._type + " has no compatible renderer (child " + child._key + " in block " + block._key + ")"
          },
          {},
          {}
        )}`}`}`;
      })}

    
    ${((_a = block[BLOCK_LIST_ITEMS]) == null ? void 0 : _a.length) ? `${validate_component(BlockRenderer, "svelte:self").$$render(
        $$result,
        {
          portableText: {
            ...portableText,
            block: {
              _type: LIST_TYPE,
              _key: block._key,
              listItem: block.listItem,
              children: block[BLOCK_LIST_ITEMS]
            }
          }
        },
        {},
        {}
      )}` : ``}` : `${block._type === LIST_TYPE ? `${each(block.children, (child, nestedIndex) => {
        return `${validate_component(BlockRenderer, "svelte:self").$$render(
          $$result,
          {
            portableText: {
              ...portableText,
              index: nestedIndex,
              block: child
            }
          },
          {},
          {}
        )}`;
      })}` : ``}`}`;
    }
  })}`;
});
const PortableText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let normalizedBlocks;
  let { blocks = [] } = $$props;
  let { serializers = void 0 } = $$props;
  let { ignoreUnknownTypes = true } = $$props;
  let { context = {} } = $$props;
  if ($$props.blocks === void 0 && $$bindings.blocks && blocks !== void 0)
    $$bindings.blocks(blocks);
  if ($$props.serializers === void 0 && $$bindings.serializers && serializers !== void 0)
    $$bindings.serializers(serializers);
  if ($$props.ignoreUnknownTypes === void 0 && $$bindings.ignoreUnknownTypes && ignoreUnknownTypes !== void 0)
    $$bindings.ignoreUnknownTypes(ignoreUnknownTypes);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  normalizedBlocks = nestLists(blocks);
  return `${each(normalizedBlocks, (block, index) => {
    var _a;
    return `${((_a = serializers == null ? void 0 : serializers.types) == null ? void 0 : _a[block._type]) ? `
    ${validate_component(serializers.types[block._type] || missing_component, "svelte:component").$$render(
      $$result,
      {
        portableText: {
          _rawBlocks: blocks,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          serializers,
          context
        }
      },
      {},
      {}
    )}` : `${block._type === "block" || block._type === LIST_TYPE ? `${validate_component(BlockRenderer, "BlockRenderer").$$render(
      $$result,
      {
        portableText: {
          _rawBlocks: blocks,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          serializers,
          context
        }
      },
      {},
      {}
    )}` : `${validate_component(ReportError, "ReportError").$$render(
      $$result,
      {
        message: "Block of type " + block._type + " has no compatible renderer (block " + block._key + ")",
        ignoreUnknownTypes: ignoreUnknownTypes || !!(serializers == null ? void 0 : serializers.unknownType)
      },
      {},
      {}
    )}
    ${(serializers == null ? void 0 : serializers.unknownType) ? `${validate_component(serializers.unknownType || missing_component, "svelte:component").$$render(
      $$result,
      {
        portableText: {
          _rawBlocks: blocks,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          serializers,
          context
        }
      },
      {},
      {}
    )}` : ``}`}`}`;
  })}`;
});
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element = null } = $$props;
  let { once = false } = $$props;
  let { intersecting = false } = $$props;
  let { root = null } = $$props;
  let { rootMargin = "0px" } = $$props;
  let { threshold = 0 } = $$props;
  let { entry = null } = $$props;
  let { observer = null } = $$props;
  createEventDispatcher();
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.intersecting === void 0 && $$bindings.intersecting && intersecting !== void 0)
    $$bindings.intersecting(intersecting);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.rootMargin === void 0 && $$bindings.rootMargin && rootMargin !== void 0)
    $$bindings.rootMargin(rootMargin);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  if ($$props.observer === void 0 && $$bindings.observer && observer !== void 0)
    $$bindings.observer(observer);
  return `${slots.default ? slots.default({ intersecting, entry, observer }) : ``}`;
});

export { IntersectionObserver_1 as I, PortableText as P };
//# sourceMappingURL=IntersectionObserver-f5c3f6ca.js.map
