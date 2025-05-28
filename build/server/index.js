import { x as x$1, F as F$1, _ as _$1, g as g$1, w, r as r$1, t, s, a, n, m, b as g$2, c as b, d as w$1, o as o$1, S, C as C$1 } from './chunks/exports-WEytBQE0.js';

let o="",i=o;const r="_app",d={base:o,assets:i};function l(t){o=t.base,i=t.assets;}function c(){o=d.base,i=d.assets;}let p={},f={};function u(t){p=t;}function v(t){f=t;}let g=null;function _(t){g=t;}const x={app_template_contains_nonce:false,csp:{mode:"auto",directives:{"upgrade-insecure-requests":false,"block-all-mixed-content":false},reportOnly:{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},csrf_check_origin:true,embedded:false,env_public_prefix:"PUBLIC_",env_private_prefix:"",hash_routing:false,hooks:null,preload_strategy:"modulepreload",root:x$1(((t,o,i,r)=>{let d,l,{stores:c}=o,{page:m}=o,{constructors:p}=o,{components:f=[]}=o,{form:h}=o,{data_0:u=null}=o,{data_1:v=null}=o;F$1("__svelte__",c),_$1(c.page.notify),void 0===o.stores&&i.stores&&void 0!==c&&i.stores(c),void 0===o.page&&i.page&&void 0!==m&&i.page(m),void 0===o.constructors&&i.constructors&&void 0!==p&&i.constructors(p),void 0===o.components&&i.components&&void 0!==f&&i.components(f),void 0===o.form&&i.form&&void 0!==h&&i.form(h),void 0===o.data_0&&i.data_0&&void 0!==u&&i.data_0(u),void 0===o.data_1&&i.data_1&&void 0!==v&&i.data_1(v);let g=t.head;do{d=true,t.head=g,c.page.set(m),l=`  ${p[1]?`${g$1(p[0]||w,"svelte:component").$$render(t,{data:u,this:f[0]},{this:t=>{f[0]=t,d=false;}},{default:()=>`${g$1(p[1]||w,"svelte:component").$$render(t,{data:v,form:h,this:f[1]},{this:t=>{f[1]=t,d=false;}},{})}`})}`:`${g$1(p[0]||w,"svelte:component").$$render(t,{data:u,form:h,this:f[0]},{this:t=>{f[0]=t,d=false;}},{})}`} `;}while(!d);return l})),service_worker:false,templates:{app:({head:t,body:n,assets:e,nonce:s,env:a})=>'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <link rel="icon" href="'+e+'/favicon.png">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    '+t+"\n  </head>\n\n  <body>\n    <div>"+n+"</div>\n  </body>\n\n  <script async>\n    WebFontConfig = {\n      typekit: { id: 'hlv0kmc' },\n      classes: true,\n      events: false,\n    };\n\n    (function (d) {\n      var wf = d.createElement('script'),\n        s = d.scripts[0];\n      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';\n      wf.async = true;\n      s.parentNode.insertBefore(wf, s);\n    })(document);\n  <\/script>\n</html>\n",error:({status:t,message:n})=>'<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<title>'+n+"</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">"+t+'</span>\n\t\t\t<div class="message">\n\t\t\t\t<h1>'+n+"</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"},version_hash:"19cw1qy"};async function $(){let t,n,e,s;return ({handle:t,handleFetch:n,handleError:e,init:s}=await Promise.resolve().then((()=>j))),{handle:t,handleFetch:n,handleError:e,init:s,reroute:undefined,transport:undefined}}const j=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

/** @type {Record<string, string>} */
const escaped = {
	'<': '\\u003C',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t',
	'\u2028': '\\u2028',
	'\u2029': '\\u2029'
};

class DevalueError extends Error {
	/**
	 * @param {string} message
	 * @param {string[]} keys
	 */
	constructor(message, keys) {
		super(message);
		this.name = 'DevalueError';
		this.path = keys.join('');
	}
}

/** @param {any} thing */
function is_primitive(thing) {
	return Object(thing) !== thing;
}

const object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
	Object.prototype
)
	.sort()
	.join('\0');

/** @param {any} thing */
function is_plain_object(thing) {
	const proto = Object.getPrototypeOf(thing);

	return (
		proto === Object.prototype ||
		proto === null ||
		Object.getOwnPropertyNames(proto).sort().join('\0') === object_proto_names
	);
}

/** @param {any} thing */
function get_type(thing) {
	return Object.prototype.toString.call(thing).slice(8, -1);
}

/** @param {string} char */
function get_escaped_char(char) {
	switch (char) {
		case '"':
			return '\\"';
		case '<':
			return '\\u003C';
		case '\\':
			return '\\\\';
		case '\n':
			return '\\n';
		case '\r':
			return '\\r';
		case '\t':
			return '\\t';
		case '\b':
			return '\\b';
		case '\f':
			return '\\f';
		case '\u2028':
			return '\\u2028';
		case '\u2029':
			return '\\u2029';
		default:
			return char < ' '
				? `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`
				: '';
	}
}

/** @param {string} str */
function stringify_string(str) {
	let result = '';
	let last_pos = 0;
	const len = str.length;

	for (let i = 0; i < len; i += 1) {
		const char = str[i];
		const replacement = get_escaped_char(char);
		if (replacement) {
			result += str.slice(last_pos, i) + replacement;
			last_pos = i + 1;
		}
	}

	return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

/** @param {Record<string | symbol, any>} object */
function enumerable_symbols(object) {
	return Object.getOwnPropertySymbols(object).filter(
		(symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
	);
}

const is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

/** @param {string} key */
function stringify_key(key) {
	return is_identifier.test(key) ? '.' + key : '[' + JSON.stringify(key) + ']';
}

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
const reserved =
	/^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;

/**
 * Turn a value into the JavaScript that creates an equivalent value
 * @param {any} value
 * @param {(value: any) => string | void} [replacer]
 */
function uneval(value, replacer) {
	const counts = new Map();

	/** @type {string[]} */
	const keys = [];

	const custom = new Map();

	/** @param {any} thing */
	function walk(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (!is_primitive(thing)) {
			if (counts.has(thing)) {
				counts.set(thing, counts.get(thing) + 1);
				return;
			}

			counts.set(thing, 1);

			if (replacer) {
				const str = replacer(thing);

				if (typeof str === 'string') {
					custom.set(thing, str);
					return;
				}
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'BigInt':
				case 'String':
				case 'Boolean':
				case 'Date':
				case 'RegExp':
					return;

				case 'Array':
					/** @type {any[]} */ (thing).forEach((value, i) => {
						keys.push(`[${i}]`);
						walk(value);
						keys.pop();
					});
					break;

				case 'Set':
					Array.from(thing).forEach(walk);
					break;

				case 'Map':
					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive$1(key) : '...'})`
						);
						walk(value);
						keys.pop();
					}
					break;
				
				case "Int8Array":
				case "Uint8Array":
				case "Uint8ClampedArray":
				case "Int16Array":
				case "Uint16Array":
				case "Int32Array":
				case "Uint32Array":
				case "Float32Array":
				case "Float64Array":
				case "BigInt64Array":
				case "BigUint64Array":
					return;
				
				case "ArrayBuffer":
					return;

				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (enumerable_symbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					for (const key in thing) {
						keys.push(stringify_key(key));
						walk(thing[key]);
						keys.pop();
					}
			}
		}
	}

	walk(value);

	const names = new Map();

	Array.from(counts)
		.filter((entry) => entry[1] > 1)
		.sort((a, b) => b[1] - a[1])
		.forEach((entry, i) => {
			names.set(entry[0], get_name(i));
		});

	/**
	 * @param {any} thing
	 * @returns {string}
	 */
	function stringify(thing) {
		if (names.has(thing)) {
			return names.get(thing);
		}

		if (is_primitive(thing)) {
			return stringify_primitive$1(thing);
		}

		if (custom.has(thing)) {
			return custom.get(thing);
		}

		const type = get_type(thing);

		switch (type) {
			case 'Number':
			case 'String':
			case 'Boolean':
				return `Object(${stringify(thing.valueOf())})`;

			case 'RegExp':
				return `new RegExp(${stringify_string(thing.source)}, "${
					thing.flags
				}")`;

			case 'Date':
				return `new Date(${thing.getTime()})`;

			case 'Array':
				const members = /** @type {any[]} */ (thing).map((v, i) =>
					i in thing ? stringify(v) : ''
				);
				const tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
				return `[${members.join(',')}${tail}]`;

			case 'Set':
			case 'Map':
				return `new ${type}([${Array.from(thing).map(stringify).join(',')}])`;
			
			case "Int8Array":
			case "Uint8Array":
			case "Uint8ClampedArray":
			case "Int16Array":
			case "Uint16Array":
			case "Int32Array":
			case "Uint32Array":
			case "Float32Array":
			case "Float64Array":
			case "BigInt64Array":
			case "BigUint64Array": {
				/** @type {import("./types.js").TypedArray} */
				const typedArray = thing;
				return `new ${type}([${typedArray.toString()}])`;
			}
				
			case "ArrayBuffer": {
				const ui8 = new Uint8Array(thing);
				return `new Uint8Array([${ui8.toString()}]).buffer`;
			}

			default:
				const obj = `{${Object.keys(thing)
					.map((key) => `${safe_key(key)}:${stringify(thing[key])}`)
					.join(',')}}`;
				const proto = Object.getPrototypeOf(thing);
				if (proto === null) {
					return Object.keys(thing).length > 0
						? `Object.assign(Object.create(null),${obj})`
						: `Object.create(null)`;
				}

				return obj;
		}
	}

	const str = stringify(value);

	if (names.size) {
		/** @type {string[]} */
		const params = [];

		/** @type {string[]} */
		const statements = [];

		/** @type {string[]} */
		const values = [];

		names.forEach((name, thing) => {
			params.push(name);

			if (custom.has(thing)) {
				values.push(/** @type {string} */ (custom.get(thing)));
				return;
			}

			if (is_primitive(thing)) {
				values.push(stringify_primitive$1(thing));
				return;
			}

			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					values.push(`Object(${stringify(thing.valueOf())})`);
					break;

				case 'RegExp':
					values.push(thing.toString());
					break;

				case 'Date':
					values.push(`new Date(${thing.getTime()})`);
					break;

				case 'Array':
					values.push(`Array(${thing.length})`);
					/** @type {any[]} */ (thing).forEach((v, i) => {
						statements.push(`${name}[${i}]=${stringify(v)}`);
					});
					break;

				case 'Set':
					values.push(`new Set`);
					statements.push(
						`${name}.${Array.from(thing)
							.map((v) => `add(${stringify(v)})`)
							.join('.')}`
					);
					break;

				case 'Map':
					values.push(`new Map`);
					statements.push(
						`${name}.${Array.from(thing)
							.map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`)
							.join('.')}`
					);
					break;

				default:
					values.push(
						Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}'
					);
					Object.keys(thing).forEach((key) => {
						statements.push(
							`${name}${safe_prop(key)}=${stringify(thing[key])}`
						);
					});
			}
		});

		statements.push(`return ${str}`);

		return `(function(${params.join(',')}){${statements.join(
			';'
		)}}(${values.join(',')}))`;
	} else {
		return str;
	}
}

/** @param {number} num */
function get_name(num) {
	let name = '';

	do {
		name = chars[num % chars.length] + name;
		num = ~~(num / chars.length) - 1;
	} while (num >= 0);

	return reserved.test(name) ? `${name}0` : name;
}

/** @param {string} c */
function escape_unsafe_char(c) {
	return escaped[c] || c;
}

/** @param {string} str */
function escape_unsafe_chars(str) {
	return str.replace(unsafe_chars, escape_unsafe_char);
}

/** @param {string} key */
function safe_key(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? key
		: escape_unsafe_chars(JSON.stringify(key));
}

/** @param {string} key */
function safe_prop(key) {
	return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key)
		? `.${key}`
		: `[${escape_unsafe_chars(JSON.stringify(key))}]`;
}

/** @param {any} thing */
function stringify_primitive$1(thing) {
	if (typeof thing === 'string') return stringify_string(thing);
	if (thing === void 0) return 'void 0';
	if (thing === 0 && 1 / thing < 0) return '-0';
	const str = String(thing);
	if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
	if (typeof thing === 'bigint') return thing + 'n';
	return str;
}

/**
 * Base64 Encodes an arraybuffer
 * @param {ArrayBuffer} arraybuffer
 * @returns {string}
 */
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";

  for (let i = 0; i < arraybuffer.byteLength; i++) {
    binaryString += String.fromCharCode(dv.getUint8(i));
  }

  return binaryToAscii(binaryString);
}

const KEY_STRING =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * Substitute for btoa since it's deprecated in node.
 * Does not do any input validation.
 *
 * @see https://github.com/jsdom/abab/blob/master/lib/btoa.js
 *
 * @param {string} str
 * @returns {string}
 */
function binaryToAscii(str) {
  let out = "";
  for (let i = 0; i < str.length; i += 3) {
    /** @type {[number, number, number, number]} */
    const groupsOfSix = [undefined, undefined, undefined, undefined];
    groupsOfSix[0] = str.charCodeAt(i) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i) & 0x03) << 4;
    if (str.length > i + 1) {
      groupsOfSix[1] |= str.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i + 1) & 0x0f) << 2;
    }
    if (str.length > i + 2) {
      groupsOfSix[2] |= str.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i + 2) & 0x3f;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j]];
      }
    }
  }
  return out;
}

const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;

/**
 * Turn a value into a JSON string that can be parsed with `devalue.parse`
 * @param {any} value
 * @param {Record<string, (value: any) => any>} [reducers]
 */
function stringify(value, reducers) {
	/** @type {any[]} */
	const stringified = [];

	/** @type {Map<any, number>} */
	const indexes = new Map();

	/** @type {Array<{ key: string, fn: (value: any) => any }>} */
	const custom = [];
	if (reducers) {
		for (const key of Object.getOwnPropertyNames(reducers)) {
			custom.push({ key, fn: reducers[key] });
		}
	}

	/** @type {string[]} */
	const keys = [];

	let p = 0;

	/** @param {any} thing */
	function flatten(thing) {
		if (typeof thing === 'function') {
			throw new DevalueError(`Cannot stringify a function`, keys);
		}

		if (indexes.has(thing)) return indexes.get(thing);

		if (thing === undefined) return UNDEFINED;
		if (Number.isNaN(thing)) return NAN;
		if (thing === Infinity) return POSITIVE_INFINITY;
		if (thing === -Infinity) return NEGATIVE_INFINITY;
		if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;

		const index = p++;
		indexes.set(thing, index);

		for (const { key, fn } of custom) {
			const value = fn(thing);
			if (value) {
				stringified[index] = `["${key}",${flatten(value)}]`;
				return index;
			}
		}

		let str = '';

		if (is_primitive(thing)) {
			str = stringify_primitive(thing);
		} else {
			const type = get_type(thing);

			switch (type) {
				case 'Number':
				case 'String':
				case 'Boolean':
					str = `["Object",${stringify_primitive(thing)}]`;
					break;

				case 'BigInt':
					str = `["BigInt",${thing}]`;
					break;

				case 'Date':
					const valid = !isNaN(thing.getDate());
					str = `["Date","${valid ? thing.toISOString() : ''}"]`;
					break;

				case 'RegExp':
					const { source, flags } = thing;
					str = flags
						? `["RegExp",${stringify_string(source)},"${flags}"]`
						: `["RegExp",${stringify_string(source)}]`;
					break;

				case 'Array':
					str = '[';

					for (let i = 0; i < thing.length; i += 1) {
						if (i > 0) str += ',';

						if (i in thing) {
							keys.push(`[${i}]`);
							str += flatten(thing[i]);
							keys.pop();
						} else {
							str += HOLE;
						}
					}

					str += ']';

					break;

				case 'Set':
					str = '["Set"';

					for (const value of thing) {
						str += `,${flatten(value)}`;
					}

					str += ']';
					break;

				case 'Map':
					str = '["Map"';

					for (const [key, value] of thing) {
						keys.push(
							`.get(${is_primitive(key) ? stringify_primitive(key) : '...'})`
						);
						str += `,${flatten(key)},${flatten(value)}`;
						keys.pop();
					}

					str += ']';
					break;

				case "Int8Array":
				case "Uint8Array":
				case "Uint8ClampedArray":
				case "Int16Array":
				case "Uint16Array":
				case "Int32Array":
				case "Uint32Array":
				case "Float32Array":
				case "Float64Array":
				case "BigInt64Array":
				case "BigUint64Array": {
					/** @type {import("./types.js").TypedArray} */
					const typedArray = thing;
					const base64 = encode64(typedArray.buffer);
					str = '["' + type + '","' + base64 + '"]';
					break;
				}
					
				case "ArrayBuffer": {
					/** @type {ArrayBuffer} */
					const arraybuffer = thing;
					const base64 = encode64(arraybuffer);
					
					str = `["ArrayBuffer","${base64}"]`;
					break;
				}
				
				default:
					if (!is_plain_object(thing)) {
						throw new DevalueError(
							`Cannot stringify arbitrary non-POJOs`,
							keys
						);
					}

					if (enumerable_symbols(thing).length > 0) {
						throw new DevalueError(
							`Cannot stringify POJOs with symbolic keys`,
							keys
						);
					}

					if (Object.getPrototypeOf(thing) === null) {
						str = '["null"';
						for (const key in thing) {
							keys.push(stringify_key(key));
							str += `,${stringify_string(key)},${flatten(thing[key])}`;
							keys.pop();
						}
						str += ']';
					} else {
						str = '{';
						let started = false;
						for (const key in thing) {
							if (started) str += ',';
							started = true;
							keys.push(stringify_key(key));
							str += `${stringify_string(key)}:${flatten(thing[key])}`;
							keys.pop();
						}
						str += '}';
					}
			}
		}

		stringified[index] = str;
		return index;
	}

	const index = flatten(value);

	// special case — value is represented as a negative index
	if (index < 0) return `${index}`;

	return `[${stringified.join(',')}]`;
}

/**
 * @param {any} thing
 * @returns {string}
 */
function stringify_primitive(thing) {
	const type = typeof thing;
	if (type === 'string') return stringify_string(thing);
	if (thing instanceof String) return stringify_string(thing.toString());
	if (thing === void 0) return UNDEFINED.toString();
	if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
	if (type === 'bigint') return `["BigInt","${thing}"]`;
	return String(thing);
}

var cookie = {};

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredCookie;

function requireCookie () {
	if (hasRequiredCookie) return cookie;
	hasRequiredCookie = 1;

	/**
	 * Module exports.
	 * @public
	 */

	cookie.parse = parse;
	cookie.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var __toString = Object.prototype.toString;

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */

	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {};
	  var opt = options || {};
	  var dec = opt.decode || decode;

	  var index = 0;
	  while (index < str.length) {
	    var eqIdx = str.indexOf('=', index);

	    // no more cookie pairs
	    if (eqIdx === -1) {
	      break
	    }

	    var endIdx = str.indexOf(';', index);

	    if (endIdx === -1) {
	      endIdx = str.length;
	    } else if (endIdx < eqIdx) {
	      // backtrack on prior semicolon
	      index = str.lastIndexOf(';', eqIdx - 1) + 1;
	      continue
	    }

	    var key = str.slice(index, eqIdx).trim();

	    // only assign once
	    if (undefined === obj[key]) {
	      var val = str.slice(eqIdx + 1, endIdx).trim();

	      // quoted values
	      if (val.charCodeAt(0) === 0x22) {
	        val = val.slice(1, -1);
	      }

	      obj[key] = tryDecode(val, dec);
	    }

	    index = endIdx + 1;
	  }

	  return obj;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;

	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;

	    if (isNaN(maxAge) || !isFinite(maxAge)) {
	      throw new TypeError('option maxAge is invalid')
	    }

	    str += '; Max-Age=' + Math.floor(maxAge);
	  }

	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    var expires = opt.expires;

	    if (!isDate(expires) || isNaN(expires.valueOf())) {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.partitioned) {
	    str += '; Partitioned';
	  }

	  if (opt.priority) {
	    var priority = typeof opt.priority === 'string'
	      ? opt.priority.toLowerCase()
	      : opt.priority;

	    switch (priority) {
	      case 'low':
	        str += '; Priority=Low';
	        break
	      case 'medium':
	        str += '; Priority=Medium';
	        break
	      case 'high':
	        str += '; Priority=High';
	        break
	      default:
	        throw new TypeError('option priority is invalid')
	    }
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      case 'none':
	        str += '; SameSite=None';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * URL-decode string value. Optimized to skip native call when no %.
	 *
	 * @param {string} str
	 * @returns {string}
	 */

	function decode (str) {
	  return str.indexOf('%') !== -1
	    ? decodeURIComponent(str)
	    : str
	}

	/**
	 * URL-encode value.
	 *
	 * @param {string} val
	 * @returns {string}
	 */

	function encode (val) {
	  return encodeURIComponent(val)
	}

	/**
	 * Determine if value is a Date.
	 *
	 * @param {*} val
	 * @private
	 */

	function isDate (val) {
	  return __toString.call(val) === '[object Date]' ||
	    val instanceof Date
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}
	return cookie;
}

var cookieExports = requireCookie();

var setCookie = {exports: {}};

var hasRequiredSetCookie;

function requireSetCookie () {
	if (hasRequiredSetCookie) return setCookie.exports;
	hasRequiredSetCookie = 1;

	var defaultParseOptions = {
	  decodeValues: true,
	  map: false,
	  silent: false,
	};

	function isNonEmptyString(str) {
	  return typeof str === "string" && !!str.trim();
	}

	function parseString(setCookieValue, options) {
	  var parts = setCookieValue.split(";").filter(isNonEmptyString);

	  var nameValuePairStr = parts.shift();
	  var parsed = parseNameValuePair(nameValuePairStr);
	  var name = parsed.name;
	  var value = parsed.value;

	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  try {
	    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
	  } catch (e) {
	    console.error(
	      "set-cookie-parser encountered an error while decoding a cookie with value '" +
	        value +
	        "'. Set options.decodeValues to false to disable this feature.",
	      e
	    );
	  }

	  var cookie = {
	    name: name,
	    value: value,
	  };

	  parts.forEach(function (part) {
	    var sides = part.split("=");
	    var key = sides.shift().trimLeft().toLowerCase();
	    var value = sides.join("=");
	    if (key === "expires") {
	      cookie.expires = new Date(value);
	    } else if (key === "max-age") {
	      cookie.maxAge = parseInt(value, 10);
	    } else if (key === "secure") {
	      cookie.secure = true;
	    } else if (key === "httponly") {
	      cookie.httpOnly = true;
	    } else if (key === "samesite") {
	      cookie.sameSite = value;
	    } else if (key === "partitioned") {
	      cookie.partitioned = true;
	    } else {
	      cookie[key] = value;
	    }
	  });

	  return cookie;
	}

	function parseNameValuePair(nameValuePairStr) {
	  // Parses name-value-pair according to rfc6265bis draft

	  var name = "";
	  var value = "";
	  var nameValueArr = nameValuePairStr.split("=");
	  if (nameValueArr.length > 1) {
	    name = nameValueArr.shift();
	    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
	  } else {
	    value = nameValuePairStr;
	  }

	  return { name: name, value: value };
	}

	function parse(input, options) {
	  options = options
	    ? Object.assign({}, defaultParseOptions, options)
	    : defaultParseOptions;

	  if (!input) {
	    if (!options.map) {
	      return [];
	    } else {
	      return {};
	    }
	  }

	  if (input.headers) {
	    if (typeof input.headers.getSetCookie === "function") {
	      // for fetch responses - they combine headers of the same type in the headers array,
	      // but getSetCookie returns an uncombined array
	      input = input.headers.getSetCookie();
	    } else if (input.headers["set-cookie"]) {
	      // fast-path for node.js (which automatically normalizes header names to lower-case
	      input = input.headers["set-cookie"];
	    } else {
	      // slow-path for other environments - see #25
	      var sch =
	        input.headers[
	          Object.keys(input.headers).find(function (key) {
	            return key.toLowerCase() === "set-cookie";
	          })
	        ];
	      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
	      if (!sch && input.headers.cookie && !options.silent) {
	        console.warn(
	          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
	        );
	      }
	      input = sch;
	    }
	  }
	  if (!Array.isArray(input)) {
	    input = [input];
	  }

	  if (!options.map) {
	    return input.filter(isNonEmptyString).map(function (str) {
	      return parseString(str, options);
	    });
	  } else {
	    var cookies = {};
	    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
	      var cookie = parseString(str, options);
	      cookies[cookie.name] = cookie;
	      return cookies;
	    }, cookies);
	  }
	}

	/*
	  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
	  that are within a single set-cookie field-value, such as in the Expires portion.

	  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
	  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
	  React Native's fetch does this for *every* header, including set-cookie.

	  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
	  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
	*/
	function splitCookiesString(cookiesString) {
	  if (Array.isArray(cookiesString)) {
	    return cookiesString;
	  }
	  if (typeof cookiesString !== "string") {
	    return [];
	  }

	  var cookiesStrings = [];
	  var pos = 0;
	  var start;
	  var ch;
	  var lastComma;
	  var nextStart;
	  var cookiesSeparatorFound;

	  function skipWhitespace() {
	    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
	      pos += 1;
	    }
	    return pos < cookiesString.length;
	  }

	  function notSpecialChar() {
	    ch = cookiesString.charAt(pos);

	    return ch !== "=" && ch !== ";" && ch !== ",";
	  }

	  while (pos < cookiesString.length) {
	    start = pos;
	    cookiesSeparatorFound = false;

	    while (skipWhitespace()) {
	      ch = cookiesString.charAt(pos);
	      if (ch === ",") {
	        // ',' is a cookie separator if we have later first '=', not ';' or ','
	        lastComma = pos;
	        pos += 1;

	        skipWhitespace();
	        nextStart = pos;

	        while (pos < cookiesString.length && notSpecialChar()) {
	          pos += 1;
	        }

	        // currently special character
	        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
	          // we found cookies separator
	          cookiesSeparatorFound = true;
	          // pos is inside the next cookie, so back up and return it.
	          pos = nextStart;
	          cookiesStrings.push(cookiesString.substring(start, lastComma));
	          start = pos;
	        } else {
	          // in param ',' or param separator ';',
	          // we continue from that comma
	          pos = lastComma + 1;
	        }
	      } else {
	        pos += 1;
	      }
	    }

	    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
	      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
	    }
	  }

	  return cookiesStrings;
	}

	setCookie.exports = parse;
	setCookie.exports.parse = parse;
	setCookie.exports.parseString = parseString;
	setCookie.exports.splitCookiesString = splitCookiesString;
	return setCookie.exports;
}

var setCookieExports = requireSetCookie();

const A=false,P=["GET","POST","PUT","PATCH","DELETE","OPTIONS","HEAD"],H=["GET","POST","HEAD"];function U(e,t){const r=[];let s;e.split(",").forEach(((e,t)=>{const s=/([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(e);if(s){const[,e,n,o="1"]=s;r.push({type:e,subtype:n,q:+o,i:t});}})),r.sort(((e,t)=>e.q!==t.q?t.q-e.q:"*"===e.subtype!=("*"===t.subtype)?"*"===e.subtype?1:-1:"*"===e.type!=("*"===t.type)?"*"===e.type?1:-1:e.i-t.i));let n=1/0;for(const o of t){const[e,t]=o.split("/"),a=r.findIndex((r=>!(r.type!==e&&"*"!==r.type||r.subtype!==t&&"*"!==r.subtype)));-1!==a&&a<n&&(s=o,n=a);}return s}function C(e){return function(e,...t){const r=e.headers.get("content-type")?.split(";",1)[0].trim()??"";return t.includes(r.toLowerCase())}(e,"application/x-www-form-urlencoded","multipart/form-data","text/plain")}let N,L=null;function W(e,t){try{return L=e,N?N.run(e,t):t()}finally{L=null;}}import('node:async_hooks').then((e=>N=new e.AsyncLocalStorage)).catch((()=>{}));class z{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`};}toString(){return JSON.stringify(this.body)}}class D{constructor(e,t){this.status=e,this.location=t;}}class I extends Error{constructor(e,t,r){super(r),this.status=e,this.text=t;}}class F{constructor(e,t){this.status=e,this.data=t;}}const J="/__data.json",G=".html__data.json";function M(e){return e.endsWith(".html")?e.replace(/\.html$/,G):e.replace(/\/$/,"")+J}const B="/__route.js";function V(e){return e.replace(/\/$/,"")+B}function K(e,t){const r=JSON.stringify(e),s=new Headers(t?.headers);return s.has("content-length")||s.set("content-length",Q.encode(r).byteLength.toString()),s.has("content-type")||s.set("content-type","application/json"),new Response(r,{...t,headers:s})}const Q=new TextEncoder;function X(e,t){const r=new Headers(t?.headers);if(!r.has("content-length")){const s=Q.encode(e);return r.set("content-length",s.byteLength.toString()),new Response(s,{...t,headers:r})}return new Response(e,{...t,headers:r})}function Y(e){return e instanceof z||e instanceof I?e.status:500}const Z={"&":"&amp;",'"':"&quot;"},ee={"&":"&amp;","<":"&lt;"},te="[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]",re=new RegExp(`[${Object.keys(Z).join("")}]|`+te,"g"),se=new RegExp(`[${Object.keys(ee).join("")}]|`+te,"g");function ne(e,t){const r=t?Z:ee;return e.replace(t?re:se,(e=>2===e.length?e:r[e]??`&#${e.charCodeAt(0)};`))}function oe(e,t){return X(`${t} method not allowed`,{status:405,headers:{allow:ae(e).join(", ")}})}function ae(e){const t=P.filter((t=>t in e));return ("GET"in e||"HEAD"in e)&&t.push("HEAD"),t}function ie(e,t,r){return X(e.templates.error({status:t,message:ne(r)}),{headers:{"content-type":"text/html; charset=utf-8"},status:t})}async function ce(e,t,r){var s;const n=Y(r=r instanceof z?r:(s=r)instanceof Error||s&&s.name&&s.message?s:new Error(JSON.stringify(s))),o=await le(e,t,r),a=U(e.request.headers.get("accept")||"text/html",["application/json","text/html"]);return e.isDataRequest||"application/json"===a?K(o,{status:n}):ie(t,n,o.message)}async function le(e,t,r){if(r instanceof z)return r.body;const s=Y(r),n=function(e){return e instanceof I?e.text:"Internal Error"}(r);return await W(e,(()=>t.hooks.handleError({error:r,event:e,status:s,message:n})))??{message:n}}function ue(e,t){return new Response(void 0,{status:e,headers:{location:t}})}function de(e,t){return t.path?`Data returned from \`load\` while rendering ${e.route.id} is not serializable: ${t.message} (${t.path})`:""===t.path?`Data returned from \`load\` while rendering ${e.route.id} is not a plain object`:t.message}function pe(e){const t={};return e.uses&&e.uses.dependencies.size>0&&(t.dependencies=Array.from(e.uses.dependencies)),e.uses&&e.uses.search_params.size>0&&(t.search_params=Array.from(e.uses.search_params)),e.uses&&e.uses.params.size>0&&(t.params=Array.from(e.uses.params)),e.uses?.parent&&(t.parent=1),e.uses?.route&&(t.route=1),e.uses?.url&&(t.url=1),t}function he(e,t){return e._.prerendered_routes.has(t)||"/"===t.at(-1)&&e._.prerendered_routes.has(t.slice(0,-1))}function fe(e){return e.filter((e=>null!=e))}function me(e){return "application/json"===U(e.request.headers.get("accept")??"*/*",["application/json","text/html"])&&"POST"===e.request.method}function _e(e){return e instanceof F?new Error('Cannot "throw fail()". Use "return fail()"'):e}function ye(e){return ge({type:"redirect",status:e.status,location:e.location})}function ge(e,t){return K(e,t)}function we(e){if(e.default&&Object.keys(e).length>1)throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions")}async function ve(e,t){const r=new URL(e.request.url);let s="default";for(const o of r.searchParams)if(o[0].startsWith("/")){if(s=o[0].slice(1),"default"===s)throw new Error('Cannot use reserved action name "default"');break}const n=t[s];if(!n)throw new I(404,"Not Found",`No action with name '${s}' found`);if(!C(e.request))throw new I(415,"Unsupported Media Type",`Form actions expect form-encoded data — received ${e.request.headers.get("content-type")}`);return W(e,(()=>n(e)))}function $e(e,t,r){const s=Object.fromEntries(Object.entries(r).map((([e,t])=>[e,t.encode])));return be(e,(e=>stringify(e,s)),t)}function be(e,t,r){try{return t(e)}catch(s){const t=s;if(e instanceof Response)throw new Error(`Data returned from action inside ${r} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`);if("path"in t){let e=`Data returned from action inside ${r} is not serializable: ${t.message}`;throw ""!==t.path&&(e+=` (data.${t.path})`),new Error(e)}throw t}}const ke="x-sveltekit-invalidated",xe="x-sveltekit-trailing-slash";async function je({event:e,state:t,node:r,parent:s}){if(!r?.server)return null;let n=true;const o={dependencies:new Set,params:new Set,parent:false,route:false,url:false,search_params:new Set},a$1=r.server.load,i=r.server.trailingSlash;if(!a$1)return {type:"data",data:null,uses:o,slash:i};const c=o$1(e.url,(()=>{n&&(o.url=true);}),(e=>{n&&o.search_params.add(e);}));t.prerendering&&a(c);const u=await W(e,(()=>a$1.call(null,{...e,fetch:(t,r)=>{new URL(t instanceof Request?t.url:t,e.url);return e.fetch(t,r)},depends:(...t)=>{for(const r of t){const{href:t}=new URL(r,e.url);A,o.dependencies.add(t);}},params:new Proxy(e.params,{get:(e,t)=>(n&&o.params.add(t),e[t])}),parent:async()=>(n&&(o.parent=!0),s()),route:new Proxy(e.route,{get:(e,t)=>(n&&(o.route=!0),e[t])}),url:c,untrack(e){n=!1;try{return e()}finally{n=!0;}}})));return {type:"data",data:u??null,uses:o,slash:i}}async function Ee({event:e,fetched:t,node:r,parent:s,server_data_promise:n,state:o,resolve_opts:a,csr:i}){const c=await n;if(!r?.universal?.load)return c?.data??null;return await r.universal.load.call(null,{url:e.url,params:e.params,data:c?.data??null,route:e.route,fetch:Re(e,o,t,i,a),setHeaders:e.setHeaders,depends:()=>{},parent:s,untrack:e=>e()})??null}function Re(e,t,r,s,n){const o=async(o,a)=>{const i=o instanceof Request&&o.body?o.clone().body:null,c=o instanceof Request&&[...o.headers].length?new Headers(o.headers):a?.headers;let l=await e.fetch(o,a);const u=new URL(o instanceof Request?o.url:o,e.url),d=u.origin===e.url.origin;let p;if(d)t.prerendering&&(p={response:l,body:null},t.prerendering.dependencies.set(u.pathname,p));else if("https:"===u.protocol||"http:"===u.protocol){if("no-cors"===(o instanceof Request?o.mode:a?.mode??"cors"))l=new Response("",{status:l.status,statusText:l.statusText,headers:l.headers});else {const t=l.headers.get("access-control-allow-origin");if(!t||t!==e.url.origin&&"*"!==t)throw new Error(`CORS error: ${t?"Incorrect":"No"} 'Access-Control-Allow-Origin' header is present on the requested resource`)}}const h=new Proxy(l,{get(t,s,n){async function l(s,n){const l=Number(t.status);if(isNaN(l))throw new Error(`response.status is not a number. value: "${t.status}" type: ${typeof t.status}`);r.push({url:d?u.href.slice(e.url.origin.length):u.href,method:e.request.method,request_body:o instanceof Request&&i?await Se(i):a?.body,request_headers:c,response_body:s,response:t,is_b64:n});}if("arrayBuffer"===s)return async()=>{const e=await t.arrayBuffer();return p&&(p.body=new Uint8Array(e)),e instanceof ArrayBuffer&&await l(function(e){if(globalThis.Buffer)return Buffer.from(e).toString("base64");const t=new Uint8Array(new Uint16Array([1]).buffer)[0]>0;return btoa(new TextDecoder(t?"utf-16le":"utf-16be").decode(new Uint16Array(new Uint8Array(e))))}(e),true),e};async function h(){const e=await t.text();return e&&"string"!=typeof e||await l(e,false),p&&(p.body=e),e}return "text"===s?h:"json"===s?async()=>JSON.parse(await h()):Reflect.get(t,s,t)}});if(s){const t=l.headers.get;l.headers.get=r=>{const s=r.toLowerCase(),o=t.call(l.headers,s);if(o&&!s.startsWith("x-sveltekit-")){if(!n.filterSerializedResponseHeaders(s,o))throw new Error(`Failed to get response header "${s}" — it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${e.route.id})`)}return o};}return h};return (e,t)=>{const r=o(e,t);return r.catch((()=>{})),r}}async function Se(e){let t="";const r=e.getReader(),s=new TextDecoder;for(;;){const{done:e,value:n}=await r.read();if(e)break;t+=s.decode(n);}return t}function Oe(...e){let t=5381;for(const r of e)if("string"==typeof r){let e=r.length;for(;e;)t=33*t^r.charCodeAt(--e);}else {if(!ArrayBuffer.isView(r))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=e.length;for(;s;)t=33*t^e[--s];}}return (t>>>0).toString(36)}const Te={"<":"\\u003C","\u2028":"\\u2028","\u2029":"\\u2029"},qe=new RegExp(`[${Object.keys(Te).join("")}]`,"g");const Ae=JSON.stringify,Pe=new TextEncoder;function He(e){Ce[0]||function(){function e(e){return 4294967296*(e-Math.floor(e))}let t=2;for(let r=0;r<64;t++){let s=true;for(let e=2;e*e<=t;e++)if(t%e===0){s=false;break}s&&(r<8&&(Ue[r]=e(t**.5)),Ce[r]=e(t**(1/3)),r++);}}();const t=Ue.slice(0),r=function(e){const t=Pe.encode(e),r=8*t.length,s=512*Math.ceil((r+65)/512),n=new Uint8Array(s/8);n.set(t),n[t.length]=128,Ne(n);const o=new Uint32Array(n.buffer);return o[o.length-2]=Math.floor(r/4294967296),o[o.length-1]=r,o}(e);for(let n=0;n<r.length;n+=16){const e=r.subarray(n,n+16);let s,o,a,i=t[0],c=t[1],l=t[2],u=t[3],d=t[4],p=t[5],h=t[6],f=t[7];for(let t=0;t<64;t++)t<16?s=e[t]:(o=e[t+1&15],a=e[t+14&15],s=e[15&t]=(o>>>7^o>>>18^o>>>3^o<<25^o<<14)+(a>>>17^a>>>19^a>>>10^a<<15^a<<13)+e[15&t]+e[t+9&15]|0),s=s+f+(d>>>6^d>>>11^d>>>25^d<<26^d<<21^d<<7)+(h^d&(p^h))+Ce[t],f=h,h=p,p=d,d=u+s|0,u=l,l=c,c=i,i=s+(c&l^u&(c^l))+(c>>>2^c>>>13^c>>>22^c<<30^c<<19^c<<10)|0;t[0]=t[0]+i|0,t[1]=t[1]+c|0,t[2]=t[2]+l|0,t[3]=t[3]+u|0,t[4]=t[4]+d|0,t[5]=t[5]+p|0,t[6]=t[6]+h|0,t[7]=t[7]+f|0;}const s=new Uint8Array(t.buffer);return Ne(s),We(s)}const Ue=new Uint32Array(8),Ce=new Uint32Array(64);function Ne(e){for(let t=0;t<e.length;t+=4){const r=e[t+0],s=e[t+1],n=e[t+2],o=e[t+3];e[t+0]=o,e[t+1]=n,e[t+2]=s,e[t+3]=r;}}const Le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");function We(e){const t=e.length;let r,s="";for(r=2;r<t;r+=3)s+=Le[e[r-2]>>2],s+=Le[(3&e[r-2])<<4|e[r-1]>>4],s+=Le[(15&e[r-1])<<2|e[r]>>6],s+=Le[63&e[r]];return r===t+1&&(s+=Le[e[r-2]>>2],s+=Le[(3&e[r-2])<<4],s+="=="),r===t&&(s+=Le[e[r-2]>>2],s+=Le[(3&e[r-2])<<4|e[r-1]>>4],s+=Le[(15&e[r-1])<<2],s+="="),s}const ze=new Uint8Array(16);const De=new Set(["self","unsafe-eval","unsafe-hashes","unsafe-inline","none","strict-dynamic","report-sample","wasm-unsafe-eval","script"]),Ie=/^(nonce|sha\d\d\d)-/;class Fe{#e;#t;#r;#s;#n;#o;#a;#i;#c;#l;#u;#d;#p;#h;#f;constructor(e,t,r){this.#e=e,this.#c=t;const s=this.#c;this.#l=[],this.#u=[],this.#d=[],this.#p=[],this.#h=[];const n=s["script-src"]||s["default-src"],o=s["script-src-elem"],a=s["style-src"]||s["default-src"],i=s["style-src-attr"],c=s["style-src-elem"],l=e=>!!e&&!e.some((e=>"unsafe-inline"===e));this.#r=l(n),this.#s=l(o),this.#o=l(a),this.#a=l(i),this.#i=l(c),this.#t=this.#r||this.#s,this.#n=this.#o||this.#a||this.#i,this.script_needs_nonce=this.#t&&!this.#e,this.style_needs_nonce=this.#n&&!this.#e,this.#f=r;}add_script(e){if(!this.#t)return;const t=this.#e?`sha256-${He(e)}`:`nonce-${this.#f}`;this.#r&&this.#l.push(t),this.#s&&this.#u.push(t);}add_style(e){if(!this.#n)return;const t=this.#e?`sha256-${He(e)}`:`nonce-${this.#f}`;if(this.#o&&this.#d.push(t),this.#a&&this.#p.push(t),this.#i){const e="sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=",r=this.#c;!r["style-src-elem"]||r["style-src-elem"].includes(e)||this.#h.includes(e)||this.#h.push(e),t!==e&&this.#h.push(t);}}get_header(e=false){const t=[],r={...this.#c};this.#d.length>0&&(r["style-src"]=[...r["style-src"]||r["default-src"]||[],...this.#d]),this.#p.length>0&&(r["style-src-attr"]=[...r["style-src-attr"]||[],...this.#p]),this.#h.length>0&&(r["style-src-elem"]=[...r["style-src-elem"]||[],...this.#h]),this.#l.length>0&&(r["script-src"]=[...r["script-src"]||r["default-src"]||[],...this.#l]),this.#u.length>0&&(r["script-src-elem"]=[...r["script-src-elem"]||[],...this.#u]);for(const s in r){if(e&&("frame-ancestors"===s||"report-uri"===s||"sandbox"===s))continue;const n=r[s];if(!n)continue;const o=[s];Array.isArray(n)&&n.forEach((e=>{De.has(e)||Ie.test(e)?o.push(`'${e}'`):o.push(e);})),t.push(o.join(" "));}return t.join("; ")}}class Je extends Fe{get_meta(){const e=this.get_header(true);if(e)return `<meta http-equiv="content-security-policy" content="${ne(e,true)}">`}}class Ge extends Fe{constructor(e,t,r){if(super(e,t,r),Object.values(t).filter((e=>!!e)).length>0){const e=t["report-to"]?.length??false,r=t["report-uri"]?.length??false;if(!e&&!r)throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both")}}}class Me{nonce=function(){return crypto.getRandomValues(ze),We(ze)}();csp_provider;report_only_provider;constructor({mode:e,directives:t,reportOnly:r},{prerender:s}){const n="hash"===e||"auto"===e&&s;this.csp_provider=new Je(n,t,this.nonce),this.report_only_provider=new Ge(n,r,this.nonce);}get script_needs_nonce(){return this.csp_provider.script_needs_nonce||this.report_only_provider.script_needs_nonce}get style_needs_nonce(){return this.csp_provider.style_needs_nonce||this.report_only_provider.style_needs_nonce}add_script(e){this.csp_provider.add_script(e),this.report_only_provider.add_script(e);}add_style(e){this.csp_provider.add_style(e),this.report_only_provider.add_style(e);}}function Be(){let e,t;return {promise:new Promise(((r,s)=>{e=r,t=s;})),fulfil:e,reject:t}}function Ve(){const e=[Be()];return {iterator:{[Symbol.asyncIterator]:()=>({next:async()=>{const t=await e[0].promise;return t.done||e.shift(),t}})},push:t=>{e[e.length-1].fulfil({value:t,done:false}),e.push(Be());},done:()=>{e[e.length-1].fulfil({done:true});}}}function Ke(e,t,r){const s={},n=e.slice(1),o=n.filter((e=>void 0!==e));let a=0;for(let i=0;i<t.length;i+=1){const e=t[i];let c=n[i-a];if(e.chained&&e.rest&&a&&(c=n.slice(i-a,i+1).filter((e=>e)).join("/"),a=0),void 0!==c)if(e.matcher&&!r[e.matcher](c)){if(!e.optional||!e.chained)return;a++;}else {s[e.name]=c;const r=t[i+1],l=n[i+1];r&&!r.rest&&r.optional&&l&&e.chained&&(a=0),r||l||Object.keys(s).length!==o.length||(a=0);}else e.rest&&(s[e.name]="");}if(!a)return s}function Qe(e,t,r){const{errors:s,layouts:n,leaf:o}=e,a=[...s,...n.map((e=>e?.[1])),o[1]].filter((e=>"number"==typeof e)).map((e=>`'${e}': () => ${Xe(r._.client.nodes?.[e],t)}`)).join(",\n\t\t");return [`{\n\tid: ${Ae(e.id)}`,`errors: ${Ae(e.errors)}`,`layouts: ${Ae(e.layouts)}`,`leaf: ${Ae(e.leaf)}`,`nodes: {\n\t\t${a}\n\t}\n}`].join(",\n\t")}function Xe(r,s){if(!r)return "Promise.resolve({})";if("/"===r[0])return `import('${r}')`;if(""!==i)return `import('${i}/${r}')`;let n=function(e,t){const r=e.split(/[/\\]/),s=t.split(/[/\\]/);for(r.pop();r[0]===s[0];)r.shift(),s.shift();let n=r.length;for(;n--;)r[n]="..";return r.concat(s).join("/")}(s.pathname,`${o}/${r}`);return "."!==n[0]&&(n=`./${n}`),`import('${n}')`}function Ye(r,s,n,o$1){const a=new Headers({"content-type":"application/javascript; charset=utf-8"});if(r){const i$1=Qe(r,n,o$1),c=`${function(r,s,n){const{errors:o$1,layouts:a,leaf:i$1}=r;let c="";for(const l of [...o$1,...a.map((e=>e?.[1])),i$1[1]]){if("number"!=typeof l)continue;const r=n._.client.css?.[l];for(const s of r??[])c+=`'${i||o}/${s}',`;}return c?`${Xe(n._.client.start,s)}.then(x => x.load_css([${c}]));`:""}(r,n,o$1)}\nexport const route = ${i$1}; export const params = ${JSON.stringify(s)};`;return {response:X(c,{headers:a}),body:c}}return {response:X("",{headers:a}),body:""}}const Ze={...S(false),check:()=>false},et=new TextEncoder;async function tt({branch:i$1,fetched:c$1,options:l$1,manifest:u,state:d,page_config:p$1,status:h,error:f$1=null,event:_,resolve_opts:y,action_result:g}){if(d.prerendering){if("nonce"===l$1.csp.mode)throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');if(l$1.app_template_contains_nonce)throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%")}const{client:w}=u._,v=new Set(w.imports),$=new Set(w.stylesheets),b=new Set(w.fonts),k=new Set,x=new Map;let j;const E="success"===g?.type||"failure"===g?.type?g.data??null:null;let R=o,O=i,T=Ae(o);if(d.prerendering?.fallback)l$1.hash_routing&&(T="new URL('.', location).pathname.slice(0, -1)");else {R=_.url.pathname.slice(o.length).split("/").slice(2).map((()=>"..")).join("/")||".",T=`new URL(${Ae(R)}, location).pathname.slice(0, -1)`,(!i||"/"===i[0]&&"/_svelte_kit_assets"!==i)&&(O=R);}if(p$1.ssr){const e={stores:{page:C$1(null),navigating:C$1(null),updated:Ze},constructors:await Promise.all(i$1.map((({node:e})=>{if(!e.component)throw new Error(`Missing +page.svelte component for route ${_.route.id}`);return e.component()}))),form:E};let t={};for(let s=0;s<i$1.length;s+=1)t={...t,...i$1[s].data},e[`data_${s}`]=t;e.page={error:f$1,params:_.params,route:_.route,status:h,url:_.url,data:t,form:E,state:{}},l({base:R,assets:O});const r={context:new Map([["__request__",{page:e.page}]])};try{j=l$1.root.render(e,r);}finally{c();}for(const{node:s}of i$1){for(const e of s.imports)v.add(e);for(const e of s.stylesheets)$.add(e);for(const e of s.fonts)b.add(e);s.inline_styles&&!w.inline&&Object.entries(await s.inline_styles()).forEach((([e,t])=>x.set(e,t)));}}else j={head:"",html:"",css:{code:"",map:null}};let q="",A=j.html;const P=new Me(l$1.csp,{prerender:!!d.prerendering}),H=e=>e.startsWith("/")?o+e:`${O}/${e}`,U=w.inline?w.inline?.style:Array.from(x.values()).join("\n");if(U){const e=[];P.style_needs_nonce&&e.push(` nonce="${P.nonce}"`),P.add_style(U),q+=`\n\t<style${e.join("")}>${U}</style>`;}for(const e of $){const t=H(e),r=['rel="stylesheet"'];if(x.has(e))r.push("disabled",'media="(max-width: 0)"');else if(y.preload({type:"css",path:t})){const e=['rel="preload"','as="style"'];k.add(`<${encodeURI(t)}>; ${e.join(";")}; nopush`);}q+=`\n\t\t<link href="${t}" ${r.join(" ")}>`;}for(const e of b){const t=H(e);if(y.preload({type:"font",path:t})){q+=`\n\t\t<link ${['rel="preload"','as="font"',`type="font/${e.slice(e.lastIndexOf(".")+1)}"`,`href="${t}"`,"crossorigin"].join(" ")}>`;}}const C=`__sveltekit_${l$1.version_hash}`,{data:N,chunks:L}=function(e,t,r,s,n){let o=1,a=0;const{iterator:i,push:c,done:l}=Ve();function u(r){if("function"==typeof r?.then){const i=o++;return a+=1,r.then((e=>({data:e}))).catch((async r=>({error:await le(e,t,r)}))).then((async({data:r,error:o})=>{let d;a-=1;try{d=uneval({id:i,data:r,error:o},u);}catch{o=await le(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`)),r=void 0,d=uneval({id:i,data:r,error:o},u);}const p=s.script_needs_nonce?` nonce="${s.nonce}"`:"";c(`<script${p}>${n}.resolve(${d})<\/script>\n`),0===a&&l();})),`${n}.defer(${i})`}for(const e in t.hooks.transport){const s=t.hooks.transport[e].encode(r);if(s)return `app.decode('${e}', ${uneval(s,u)})`}}try{return {data:`[${r.map((e=>{if(!e)return "null";const t={type:"data",data:e.data,uses:pe(e)};return e.slash&&(t.slash=e.slash),uneval(t,u)})).join(",")}]`,chunks:a>0?i:null}}catch(d){throw d.path=d.path.slice(1),new Error(de(e,d))}}(_,l$1,i$1.map((e=>e.server_data)),P,C);if(p$1.ssr&&p$1.csr&&(A+=`\n\t\t\t${c$1.map((e=>function(e,t,r=false){const s={};let n=null,o=null,a=false;for(const[u,d]of e.response.headers)t(u,d)&&(s[u]=d),"cache-control"===u?n=d:"age"===u?o=d:"vary"===u&&"*"===d.trim()&&(a=true);const i={status:e.response.status,statusText:e.response.statusText,headers:s,body:e.response_body},c=JSON.stringify(i).replace(qe,(e=>Te[e])),l=['type="application/json"',"data-sveltekit-fetched",`data-url="${ne(e.url,true)}"`];if(e.is_b64&&l.push("data-b64"),e.request_headers||e.request_body){const t=[];e.request_headers&&t.push([...new Headers(e.request_headers)].join(",")),e.request_body&&t.push(e.request_body),l.push(`data-hash="${Oe(...t)}"`);}if(!r&&"GET"===e.method&&n&&!a){const e=/s-maxage=(\d+)/g.exec(n)??/max-age=(\d+)/g.exec(n);if(e){const t=+e[1]-+(o??"0");l.push(`data-ttl="${t}"`);}}return `<script ${l.join(" ")}>${c}<\/script>`}(e,y.filterSerializedResponseHeaders,!!d.prerendering))).join("\n\t\t\t")}`),p$1.csr){const t=u._.client.routes?.find((e=>e.id===_.route.id))??null;if(w.uses_env_dynamic_public&&d.prerendering&&v.add(`${r}/env.js`),!w.inline){const e=Array.from(v,(e=>H(e))).filter((e=>y.preload({type:"js",path:e})));for(const t of e)k.add(`<${encodeURI(t)}>; rel="modulepreload"; nopush`),"modulepreload"!==l$1.preload_strategy?q+=`\n\t\t<link rel="preload" as="script" crossorigin="anonymous" href="${t}">`:d.prerendering&&(q+=`\n\t\t<link rel="modulepreload" href="${t}">`);}if(u._.client.routes&&d.prerendering&&!d.prerendering.fallback){const e=V(_.url.pathname);d.prerendering.dependencies.set(e,Ye(t,_.params,new URL(e,_.url),u));}const n=[],o=w.uses_env_dynamic_public&&d.prerendering,a=[`base: ${T}`];i&&a.push(`assets: ${Ae(i)}`),w.uses_env_dynamic_public&&a.push(`env: ${o?"null":Ae(p)}`),L&&(n.push("const deferred = new Map();"),a.push("defer: (id) => new Promise((fulfil, reject) => {\n\t\t\t\t\t\t\tdeferred.set(id, { fulfil, reject });\n\t\t\t\t\t\t})"),a.push("resolve: ({ id, data, error }) => {\n\t\t\t\t\t\t\tconst try_to_resolve = () => {\n\t\t\t\t\t\t\t\tif (!deferred.has(id)) {\n\t\t\t\t\t\t\t\t\tsetTimeout(try_to_resolve, 0);\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tconst { fulfil, reject } = deferred.get(id);\n\t\t\t\t\t\t\t\tdeferred.delete(id);\n\t\t\t\t\t\t\t\tif (error) reject(error);\n\t\t\t\t\t\t\t\telse fulfil(data);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\ttry_to_resolve();\n\t\t\t\t\t\t}")),n.push(`${C} = {\n\t\t\t\t\t\t${a.join(",\n\t\t\t\t\t\t")}\n\t\t\t\t\t};`);const c=["element"];if(n.push("const element = document.currentScript.parentElement;"),p$1.ssr){const e={form:"null",error:"null"};E&&(e.form=function(e,t,r){const s=e=>{for(const t in r){const n=r[t].encode(e);if(n)return `app.decode('${t}', ${uneval(n,s)})`}};return be(e,(e=>uneval(e,s)),t)}(E,_.route.id,l$1.hooks.transport)),f$1&&(e.error=uneval(f$1));const r=[`node_ids: [${i$1.map((({node:e})=>e.index)).join(", ")}]`,`data: ${N}`,`form: ${e.form}`,`error: ${e.error}`];if(200!==h&&r.push(`status: ${h}`),u._.client.routes){if(t){const e=Qe(t,_.url,u).replaceAll("\n","\n\t\t\t\t\t\t\t");r.push(`params: ${uneval(_.params)}`,`server_route: ${e}`);}}else l$1.embedded&&r.push(`params: ${uneval(_.params)}`,`route: ${Ae(_.route)}`);const s="\t".repeat(o?7:6);c.push(`{\n${s}\t${r.join(`,\n${s}\t`)}\n${s}}`);}const g=w.inline?`${w.inline.script}\n\n\t\t\t\t\t__sveltekit_${l$1.version_hash}.app.start(${c.join(", ")});`:w.app?`Promise.all([\n\t\t\t\t\t\timport(${Ae(H(w.start))}),\n\t\t\t\t\t\timport(${Ae(H(w.app))})\n\t\t\t\t\t]).then(([kit, app]) => {\n\t\t\t\t\t\tkit.start(app, ${c.join(", ")});\n\t\t\t\t\t});`:`import(${Ae(H(w.start))}).then((app) => {\n\t\t\t\t\t\tapp.start(${c.join(", ")})\n\t\t\t\t\t});`;if(o?n.push(`import(${Ae(`${R}/${r}/env.js`)}).then(({ env }) => {\n\t\t\t\t\t\t${C}.env = env;\n\n\t\t\t\t\t\t${g.replace(/\n/g,"\n\t")}\n\t\t\t\t\t});`):n.push(g),l$1.service_worker){const e="";n.push(`if ('serviceWorker' in navigator) {\n\t\t\t\t\t\taddEventListener('load', function () {\n\t\t\t\t\t\t\tnavigator.serviceWorker.register('${H("service-worker.js")}'${e});\n\t\t\t\t\t\t});\n\t\t\t\t\t}`);}const $=`\n\t\t\t\t{\n\t\t\t\t\t${n.join("\n\n\t\t\t\t\t")}\n\t\t\t\t}\n\t\t\t`;P.add_script($),A+=`\n\t\t\t<script${P.script_needs_nonce?` nonce="${P.nonce}"`:""}>${$}<\/script>\n\t\t`;}const W=new Headers({"x-sveltekit-page":"true","content-type":"text/html"});if(d.prerendering){const e=[],t=P.csp_provider.get_meta();t&&e.push(t),d.prerendering.cache&&e.push(`<meta http-equiv="cache-control" content="${d.prerendering.cache}">`),e.length>0&&(q=e.join("\n")+q);}else {const e=P.csp_provider.get_header();e&&W.set("content-security-policy",e);const t=P.report_only_provider.get_header();t&&W.set("content-security-policy-report-only",t),k.size&&W.set("link",Array.from(k).join(", "));}q+=j.head;const z=l$1.templates.app({head:q,body:A,assets:O,nonce:P.nonce,env:f}),D=await y.transformPageChunk({html:z,done:true})||"";return L||W.set("etag",`"${Oe(D)}"`),L?new Response(new ReadableStream({async start(e){e.enqueue(et.encode(D+"\n"));for await(const t of L)e.enqueue(et.encode(t));e.close();},type:"bytes"}),{headers:W}):X(D,{status:h,headers:W})}class rt{data;constructor(e){this.data=e;}layouts(){return this.data.slice(0,-1)}page(){return this.data.at(-1)}validate(){for(const t of this.layouts())t&&(m(t.server,t.server_id),g$2(t.universal,t.universal_id));const e=this.page();e&&(b(e.server,e.server_id),w$1(e.universal,e.universal_id));}#m(e){return this.data.reduce(((t,r)=>r?.universal?.[e]??r?.server?.[e]??t),void 0)}csr(){return this.#m("csr")??true}ssr(){return this.#m("ssr")??true}prerender(){return this.#m("prerender")??false}trailing_slash(){return this.#m("trailingSlash")??"never"}get_config(){let e={};for(const t of this.data)(t?.universal?.config||t?.server?.config)&&(e={...e,...t?.universal?.config,...t?.server?.config});return Object.keys(e).length?e:void 0}should_prerender_data(){return this.data.some((e=>e?.server?.load||void 0!==e?.server?.trailingSlash))}}async function st({event:e,options:t,manifest:r,state:s,status:n,error:o,resolve_opts:a}){if(e.request.headers.get("x-sveltekit-error"))return ie(t,n,o.message);const i=[];try{const c=[],l=await r._.nodes[0](),u=new rt([l]),d=u.ssr(),p=u.csr();if(d){s.error=!0;const t=je({event:e,state:s,node:l,parent:async()=>({})}),n=await t,o=await Ee({event:e,fetched:i,node:l,parent:async()=>({}),resolve_opts:a,server_data_promise:t,state:s,csr:p});c.push({node:l,server_data:n,data:o},{node:await r._.nodes[1](),data:null,server_data:null});}return await tt({options:t,manifest:r,state:s,page_config:{ssr:d,csr:p},status:n,error:await le(e,t,o),branch:c,fetched:i,event:e,resolve_opts:a})}catch(c){return c instanceof D?ue(c.status,c.location):ie(t,Y(c),(await le(e,t,c)).message)}}const nt=new TextEncoder;function ot(e,t=200){return X("string"==typeof e?e:JSON.stringify(e),{status:t,headers:{"content-type":"application/json","cache-control":"private, no-store"}})}function at(e){return ot({type:"redirect",location:e.location})}function it(e,t,r){let s=1,n=0;const{iterator:o,push:a,done:i}=Ve(),c={...Object.fromEntries(Object.entries(t.hooks.transport).map((([e,t])=>[e,t.encode]))),Promise:r=>{if("function"==typeof r?.then){const o=s++;n+=1;let l="data";return r.catch((async r=>(l="error",le(e,t,r)))).then((async r=>{let s;try{s=stringify(r,c);}catch{const r=await le(e,t,new Error(`Failed to serialize promise while rendering ${e.route.id}`));l="error",s=stringify(r,c);}n-=1,a(`{"type":"chunk","id":${o},"${l}":${s}}\n`),0===n&&i();})),o}}};try{return {data:`{"type":"data","nodes":[${r.map((e=>e?"error"===e.type||"skip"===e.type?JSON.stringify(e):`{"type":"data","data":${stringify(e.data,c)},"uses":${JSON.stringify(pe(e))}${e.slash?`,"slash":${JSON.stringify(e.slash)}`:""}}`:"null")).join(",")}]}\n`,chunks:n>0?o:null}}catch(l){throw l.path="data"+l.path,new Error(de(e,l))}}async function ct(e,t,r,s,n,o,a){if(n.depth>10)return X(`Not found: ${e.url.pathname}`,{status:404});if(me(e)){const n=await s._.nodes[t.leaf]();return async function(e,t,r){const s=r?.actions;if(!s){const r=new I(405,"Method Not Allowed","POST method not allowed. No form actions exist for this page");return ge({type:"error",error:await le(e,t,r)},{status:r.status,headers:{allow:"GET"}})}we(s);try{const r=await ve(e,s);return ge(r instanceof F?{type:"failure",status:r.status,data:$e(r.data,e.route.id,t.hooks.transport)}:{type:"success",status:r?200:204,data:$e(r,e.route.id,t.hooks.transport)})}catch(n){const r=n;return r instanceof D?ye(r):ge({type:"error",error:await le(e,t,_e(r))},{status:Y(r)})}}(e,r,n?.server)}try{const c=o.page();let l,u=200;if(function(e){return "POST"===e.request.method}(e)){if(l=await async function(e,t){const r=t?.actions;if(!r)return e.setHeaders({allow:"GET"}),{type:"error",error:new I(405,"Method Not Allowed","POST method not allowed. No form actions exist for this page")};we(r);try{const t=await ve(e,r);return t instanceof F?{type:"failure",status:t.status,data:t.data}:{type:"success",status:200,data:t}}catch(s){const e=s;return e instanceof D?{type:"redirect",status:e.status,location:e.location}:{type:"error",error:_e(e)}}}(e,c.server),"redirect"===l?.type)return ue(l.status,l.location);"error"===l?.type&&(u=Y(l.error)),"failure"===l?.type&&(u=l.status);}const d=o.prerender();if(d){const e=c.server;if(e?.actions)throw new Error("Cannot prerender pages with actions")}else if(n.prerendering)return new Response(void 0,{status:204});n.prerender_default=d;const p=o.should_prerender_data(),h=M(e.url.pathname),f=[],m=o.ssr(),_=o.csr();if(!(!1!==m||n.prerendering&&p))return await tt({branch:[],fetched:f,page_config:{ssr:!1,csr:_},status:u,error:null,event:e,options:r,manifest:s,state:n,resolve_opts:a});const y=[];let g=null;const w=o.data.map(((t,r)=>{if(g)throw g;return Promise.resolve().then((async()=>{try{if(t===c&&"error"===l?.type)throw l.error;return await je({event:e,state:n,node:t,parent:async()=>{const e={};for(let t=0;t<r;t+=1){const r=await w[t];r&&Object.assign(e,r.data);}return e}})}catch(s){throw g=s,g}}))})),v=o.data.map(((t,r)=>{if(g)throw g;return Promise.resolve().then((async()=>{try{return await Ee({event:e,fetched:f,node:t,parent:async()=>{const e={};for(let t=0;t<r;t+=1)Object.assign(e,await v[t]);return e},resolve_opts:a,server_data_promise:w[r],state:n,csr:_})}catch(s){throw g=s,g}}))}));for(const e of w)e.catch((()=>{}));for(const e of v)e.catch((()=>{}));for(let $=0;$<o.data.length;$+=1){const c=o.data[$];if(c)try{const e=await w[$],t=await v[$];y.push({node:c,server_data:e,data:t});}catch(i){const o=i;if(o instanceof D){if(n.prerendering&&p){const e=JSON.stringify({type:"redirect",location:o.location});n.prerendering.dependencies.set(h,{response:X(e),body:e});}return ue(o.status,o.location)}const c=Y(o),l=await le(e,r,o);for(;$--;)if(t.errors[$]){const o=t.errors[$],i=await s._.nodes[o]();let u=$;for(;!y[u];)u-=1;const d=fe(y.slice(0,u+1)),p=new rt(d.map((e=>e.node)));return await tt({event:e,options:r,manifest:s,state:n,resolve_opts:a,page_config:{ssr:p.ssr(),csr:p.csr()},status:c,error:l,branch:d.concat({node:i,data:null,server_data:null}),fetched:f})}return ie(r,c,l.message)}else y.push(null);}if(n.prerendering&&p){let{data:t,chunks:s}=it(e,r,y.map((e=>e?.server_data)));if(s)for await(const e of s)t+=e;n.prerendering.dependencies.set(h,{response:X(t),body:t});}return await tt({event:e,options:r,manifest:s,state:n,resolve_opts:a,page_config:{csr:_,ssr:m},status:u,error:null,branch:!1===m?[]:fe(y),action_result:l,fetched:f})}catch(i){return await st({event:e,options:r,manifest:s,state:n,status:500,error:i,resolve_opts:a})}}const lt=/[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;function ut(e){if(void 0===e?.path)throw new Error("You must specify a `path` when setting, deleting or serializing cookies")}function dt(e,t){if(!t)return  true;const r="."===t[0]?t.slice(1):t;return e===r||e.endsWith("."+r)}function pt(e,t){if(!t)return  true;const r=t.endsWith("/")?t.slice(0,-1):t;return e===r||e.startsWith(r+"/")}function ht(e,t){for(const r of t){const{name:t,value:s,options:n}=r;if(e.append("set-cookie",cookieExports.serialize(t,s,n)),n.path.endsWith(".html")){const r=M(n.path);e.append("set-cookie",cookieExports.serialize(t,s,{...n,path:r}));}}}function ft({event:r,options:s,manifest:n,state:o$1,get_cookie_header:a,set_internal:c}){return (l,u)=>{const d=(async(l,u)=>{const d=mt(l,u,r.url);let p=(l instanceof Request?l.mode:u?.mode)??"cors",h=(l instanceof Request?l.credentials:u?.credentials)??"same-origin";return s.hooks.handleFetch({event:r,request:d,fetch:async(l,u)=>{const f=mt(l,u,r.url),m=new URL(f.url);if(f.headers.has("origin")||f.headers.set("origin",r.url.origin),l!==d&&(p=(l instanceof Request?l.mode:u?.mode)??"cors",h=(l instanceof Request?l.credentials:u?.credentials)??"same-origin"),"GET"!==f.method&&"HEAD"!==f.method||("no-cors"!==p||m.origin===r.url.origin)&&m.origin!==r.url.origin||f.headers.delete("origin"),m.origin!==r.url.origin){if(`.${m.hostname}`.endsWith(`.${r.url.hostname}`)&&"omit"!==h){const e=a(m,f.headers.get("cookie"));e&&f.headers.set("cookie",e);}return fetch(f)}const _=i||o,y=decodeURIComponent(m.pathname),g$1=(y.startsWith(_)?y.slice(_.length):y).slice(1),w=`${g$1}/index.html`,v=n.assets.has(g$1)||g$1 in n._.server_assets,$=n.assets.has(w)||w in n._.server_assets;if(v||$){const e=v?g$1:w;if(o$1.read){const t=v?n.mimeTypes[g$1.slice(g$1.lastIndexOf("."))]:"text/html";return new Response(o$1.read(e),{headers:t?{"content-type":t}:{}})}if(g&&e in n._.server_assets){const t=n._.server_assets[e],r=n.mimeTypes[e.slice(e.lastIndexOf("."))];return new Response(g(e),{headers:{"Content-Length":""+t,"Content-Type":r}})}return await fetch(f)}if(he(n,o+y))return await fetch(f);if("omit"!==h){const e=a(m,f.headers.get("cookie"));e&&f.headers.set("cookie",e);const t=r.request.headers.get("authorization");t&&!f.headers.has("authorization")&&f.headers.set("authorization",t);}f.headers.has("accept")||f.headers.set("accept","*/*"),f.headers.has("accept-language")||f.headers.set("accept-language",r.request.headers.get("accept-language"));const b=await xt(f,s,n,{...o$1,depth:o$1.depth+1}),k=b.headers.get("set-cookie");if(k)for(const e of setCookieExports.splitCookiesString(k)){const{name:t,value:r,...s}=setCookieExports.parseString(e,{decodeValues:false}),n=s.path??(m.pathname.split("/").slice(0,-1).join("/")||"/");c(t,r,{path:n,encode:e=>e,...s});}return b}})})(l,u);return d.catch((()=>{})),d}}function mt(e,t,r){return e instanceof Request?e:new Request("string"==typeof e?new URL(e,r):e,t)}let _t,yt,gt;const wt=({html:e})=>e,vt=()=>false,$t=({type:e})=>"js"===e||"css"===e,bt=new Set(["GET","HEAD","POST"]),kt=new Set(["GET","HEAD","OPTIONS"]);async function xt(e,n$1,o$1,a$1){const i=new URL(e.url);if(n$1.csrf_check_origin){if(C(e)&&("POST"===e.method||"PUT"===e.method||"PATCH"===e.method||"DELETE"===e.method)&&e.headers.get("origin")!==i.origin){const t=new z(403,`Cross-site ${e.method} form submissions are forbidden`);return "application/json"===e.headers.get("accept")?K(t.body,{status:t.status}):X(t.body.message,{status:t.status})}}if(n$1.hash_routing&&i.pathname!==o+"/"&&"/[fallback]"!==i.pathname)return X("Not found",{status:404});let c;const l=i.pathname.endsWith(B);const u=function(e){return e.endsWith(J)||e.endsWith(G)}(i.pathname);l?i.pathname=function(e){return e.slice(0,-11)}(i.pathname):u&&(i.pathname=function(e){return e.endsWith(G)?e.slice(0,-16)+".html":e.slice(0,-12)}(i.pathname)+("1"===i.searchParams.get(xe)?"/":"")||"/",i.searchParams.delete(xe),c=i.searchParams.get(ke)?.split("").map((e=>"1"===e)),i.searchParams.delete(ke));const d={},{cookies:p$1,new_cookies:h,get_cookie_header:f,set_internal:m,set_trailing_slash:_}=function(e,t){const r=e.headers.get("cookie")??"",s=cookieExports.parse(r,{decode:e=>e});let n$1;const o={},a={httpOnly:true,sameSite:"lax",secure:"localhost"!==t.hostname||"http:"!==t.protocol},i={get(e,s){const n=o[e];return n&&dt(t.hostname,n.options.domain)&&pt(t.pathname,n.options.path)?n.value:cookieExports.parse(r,{decode:s?.decode})[e]},getAll(e){const s=cookieExports.parse(r,{decode:e?.decode});for(const r of Object.values(o))dt(t.hostname,r.options.domain)&&pt(t.pathname,r.options.path)&&(s[r.name]=r.value);return Object.entries(s).map((([e,t])=>({name:e,value:t})))},set(e,t,r){const s=e.match(lt);s&&console.warn(`The cookie name "${e}" will be invalid in SvelteKit 3.0 as it contains ${s.join(" and ")}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`),ut(r),l(e,t,{...a,...r});},delete(e,t){ut(t),i.set(e,"",{...t,maxAge:0});},serialize(e,r,s){ut(s);let o=s.path;if(!s.domain||s.domain===t.hostname){if(!n$1)throw new Error("Cannot serialize cookies until after the route is determined");o=n(n$1,o);}return cookieExports.serialize(e,r,{...a,...s,path:o})}},c=[];function l(e,r,s){if(!n$1)return void c.push((()=>l(e,r,s)));let a=s.path;s.domain&&s.domain!==t.hostname||(a=n(n$1,a)),o[e]={name:e,value:r,options:{...s,path:a}};}return {cookies:i,new_cookies:o,get_cookie_header:function(e,t){const r={...s};for(const s in o){const t=o[s];if(!dt(e.hostname,t.options.domain))continue;if(!pt(e.pathname,t.options.path))continue;const n=t.options.encode||encodeURIComponent;r[t.name]=n(t.value);}if(t){const e=cookieExports.parse(t,{decode:e=>e});for(const t in e)r[t]=e[t];}return Object.entries(r).map((([e,t])=>`${e}=${t}`)).join("; ")},set_internal:l,set_trailing_slash:function(e){n$1=r$1(t.pathname,e),c.forEach((e=>e()));}}}(e,i),w={cookies:p$1,fetch:null,getClientAddress:a$1.getClientAddress||(()=>{throw new Error("@sveltejs/adapter-node does not specify getClientAddress. Please raise an issue")}),locals:{},params:{},platform:a$1.platform,request:e,route:{id:null},setHeaders:e=>{for(const t in e){const r=t.toLowerCase(),s=e[t];if("set-cookie"===r)throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");if(r in d)throw new Error(`"${t}" header is already set`);d[r]=s,a$1.prerendering&&"cache-control"===r&&(a$1.prerendering.cache=s);}},url:i,isDataRequest:u,isSubRequest:a$1.depth>0};let v;w.fetch=ft({event:w,options:n$1,manifest:o$1,state:a$1,get_cookie_header:f,set_internal:m}),a$1.emulator?.platform&&(w.platform=await a$1.emulator.platform({config:{},prerender:!!a$1.prerendering?.fallback}));const $=a$1.prerendering?.inside_reroute;try{a$1.prerendering&&(a$1.prerendering.inside_reroute=!0),v=await n$1.hooks.reroute({url:new URL(i),fetch:w.fetch})??i.pathname;}catch{return X("Internal Server Error",{status:500})}finally{a$1.prerendering&&(a$1.prerendering.inside_reroute=$);}try{v=t(v);}catch{return X("Malformed URI",{status:400})}if(v!==i.pathname&&!a$1.prerendering?.fallback&&he(o$1,v)){const t=new URL(e.url);t.pathname=u?M(v):l?V(v):v;const r=await fetch(t,e),s=new Headers(r.headers);return s.has("content-encoding")&&(s.delete("content-encoding"),s.delete("content-length")),new Response(r.body,{headers:s,status:r.status,statusText:r.statusText})}let b=null;if(o&&!a$1.prerendering?.fallback){if(!v.startsWith(o))return X("Not found",{status:404});v=v.slice(o.length)||"/";}if(l)return async function(e,t,r){if(!r._.client.routes)return X("Server-side route resolution disabled",{status:400});let s$1=null,n={};const o=await r._.matchers();for(const a of r._.client.routes){const t=a.pattern.exec(e);if(!t)continue;const r=Ke(t,a.params,o);if(r){s$1=a,n=s(r);break}}return Ye(s$1,n,t,r).response}(v,new URL(e.url),o$1);if(v===`/${r}/env.js`)return function(e){return _t??=`export const env=${JSON.stringify(p)}`,yt??=`W/${Date.now()}`,gt??=new Headers({"content-type":"application/javascript; charset=utf-8",etag:yt}),e.headers.get("if-none-match")===yt?new Response(void 0,{status:304,headers:gt}):new Response(_t,{headers:gt})}(e);if(v.startsWith(`/${r}`)){const e=new Headers;return e.set("cache-control","public, max-age=0, must-revalidate"),X("Not found",{status:404,headers:e})}if(!a$1.prerendering?.fallback){const e=await o$1._.matchers();for(const t of o$1._.routes){const r=t.pattern.exec(v);if(!r)continue;const s$1=Ke(r,t.params,e);if(s$1){b=t,w.route={id:b.id},w.params=s(s$1);break}}}let E={transformPageChunk:wt,filterSerializedResponseHeaders:vt,preload:$t},R="never";try{const r=b?.page?new rt(await function(e,t){return Promise.all([...e.layouts.map((e=>null==e?e:t._.nodes[e]())),t._.nodes[e.leaf]()])}(b.page,o$1)):void 0;if(b){if(i.pathname===o||i.pathname===o+"/")R="always";else if(r)R=r.trailing_slash();else if(b.endpoint){const e=await b.endpoint();R=e.trailingSlash??"never";}if(!u){const e=r$1(i.pathname,R);if(e!==i.pathname&&!a$1.prerendering?.fallback)return new Response(void 0,{status:308,headers:{"x-sveltekit-normalize":"1",location:(e.startsWith("//")?i.origin+e:e)+("?"===i.search?"":i.search)}})}if(a$1.before_handle||a$1.emulator?.platform){let e={},t=!1;if(b.endpoint){const r=await b.endpoint();e=r.config??e,t=r.prerender??t;}else r&&(e=r.get_config()??e,t=r.prerender());a$1.before_handle&&a$1.before_handle(w,e,t),a$1.emulator?.platform&&(w.platform=await a$1.emulator.platform({config:e,prerender:t}));}}_(R),!a$1.prerendering||a$1.prerendering.fallback||a$1.prerendering.inside_reroute||a(i);const s=await W(w,(()=>n$1.hooks.handle({event:w,resolve:(t,s)=>W(null,(()=>async function(t,r,s){try{if(s&&(E={transformPageChunk:s.transformPageChunk||wt,filterSerializedResponseHeaders:s.filterSerializedResponseHeaders||vt,preload:s.preload||$t}),n$1.hash_routing||a$1.prerendering?.fallback)return await tt({event:t,options:n$1,manifest:o$1,state:a$1,page_config:{ssr:!1,csr:!0},status:200,error:null,branch:[],fetched:[],resolve_opts:E});if(b){const s=t.request.method;let i;if(u)i=await async function(e,t,r,s,n,o,a){if(!t.page)return new Response(void 0,{status:404});try{const i=[...t.page.layouts,t.page.leaf],c=o??i.map((()=>!0));let l=!1;const u=new URL(e.url);u.pathname=r$1(u.pathname,a);const d={...e,url:u},p=i.map(((e,t)=>function(e){let t,r=!1;return ()=>r?t:(r=!0,t=e())}((async()=>{try{if(l)return {type:"skip"};const r=null==e?e:await s._.nodes[e]();return je({event:d,state:n,node:r,parent:async()=>{const e={};for(let r=0;r<t;r+=1){const t=await p[r]();t&&Object.assign(e,t.data);}return e}})}catch(r){throw l=!0,r}})))),h=p.map((async(e,t)=>c[t]?e():{type:"skip"}));let f=h.length;const m=await Promise.all(h.map(((t,s)=>t.catch((async t=>{if(t instanceof D)throw t;return f=Math.min(f,s+1),{type:"error",error:await le(e,r,t),status:t instanceof z||t instanceof I?t.status:void 0}}))))),{data:_,chunks:y}=it(e,r,m);return y?new Response(new ReadableStream({async start(e){e.enqueue(nt.encode(_));for await(const t of y)e.enqueue(nt.encode(t));e.close();},type:"bytes"}),{headers:{"content-type":"text/sveltekit-data","cache-control":"private, no-store"}}):ot(_)}catch(i){const t=i;return t instanceof D?at(t):ot(await le(e,r,t),500)}}(t,b,n$1,o$1,a$1,c,R);else if(!b.endpoint||b.page&&!function(e){const{method:t,headers:r}=e.request;return !(!P.includes(t)||H.includes(t))||("POST"!==t||"true"!==r.get("x-sveltekit-action"))&&"text/html"!==U(e.request.headers.get("accept")??"*/*",["*","text/html"])}(t)){if(!b.page)throw new Error("Route is neither page nor endpoint. This should never happen");if(!r)throw new Error("page_nodes not found. This should never happen");if(bt.has(s))i=await ct(t,b.page,n$1,o$1,a$1,r,E);else {const e=new Set(kt),t=await o$1._.nodes[b.page.leaf]();if(t?.server?.actions&&e.add("POST"),"OPTIONS"===s)i=new Response(null,{status:204,headers:{allow:Array.from(e.values()).join(", ")}});else {i=oe([...e].reduce(((e,t)=>(e[t]=!0,e)),{}),s);}}}else i=await async function(e,t,r){const s=e.request.method;let n=t[s]||t.fallback;if("HEAD"===s&&!t.HEAD&&t.GET&&(n=t.GET),!n)return oe(t,s);const o=t.prerender??r.prerender_default;if(o&&(t.POST||t.PATCH||t.PUT||t.DELETE))throw new Error("Cannot prerender endpoints that have mutative methods");if(r.prerendering&&!r.prerendering.inside_reroute&&!o){if(r.depth>0)throw new Error(`${e.route.id} is not prerenderable`);return new Response(void 0,{status:204})}try{const t=await W(e,(()=>n(e)));if(!(t instanceof Response))throw new Error(`Invalid response from route ${e.url.pathname}: handler should return a Response object`);if(r.prerendering&&(!r.prerendering.inside_reroute||o)){const s=new Response(t.clone().body,{status:t.status,statusText:t.statusText,headers:new Headers(t.headers)});if(s.headers.set("x-sveltekit-prerender",String(o)),!r.prerendering.inside_reroute||!o)return s;s.headers.set("x-sveltekit-routeid",encodeURI(e.route.id)),r.prerendering.dependencies.set(e.url.pathname,{response:s,body:null});}return t}catch(a){if(a instanceof D)return new Response(void 0,{status:a.status,headers:{location:a.location}});throw a}}(t,await b.endpoint(),a$1);if("GET"===e.method&&b.page&&b.endpoint){const e=i.headers.get("vary")?.split(",")?.map((e=>e.trim().toLowerCase()));e?.includes("accept")||e?.includes("*")||(i=new Response(i.body,{status:i.status,statusText:i.statusText,headers:new Headers(i.headers)}),i.headers.append("Vary","Accept"));}return i}if(a$1.error&&t.isSubRequest){const t=new Headers(e.headers);return t.set("x-sveltekit-error","true"),await fetch(e,{headers:t})}return a$1.error?X("Internal Server Error",{status:500}):0===a$1.depth?await st({event:t,options:n$1,manifest:o$1,state:a$1,status:404,error:new I(404,"Not Found",`Not found: ${t.url.pathname}`),resolve_opts:E}):a$1.prerendering?X("not found",{status:404}):await fetch(e)}catch(i){return await ce(t,n$1,i)}finally{t.cookies.set=()=>{throw new Error("Cannot use `cookies.set(...)` after the response has been generated")},t.setHeaders=()=>{throw new Error("Cannot use `setHeaders(...)` after the response has been generated")};}}(t,r,s).then((e=>{for(const t in d){const r=d[t];e.headers.set(t,r);}return ht(e.headers,Object.values(h)),a$1.prerendering&&null!==t.route.id&&e.headers.set("x-sveltekit-routeid",encodeURI(t.route.id)),e}))))})));if(200===s.status&&s.headers.has("etag")){let t=e.headers.get("if-none-match");t?.startsWith('W/"')&&(t=t.substring(2));const r=s.headers.get("etag");if(t===r){const e=new Headers({etag:r});for(const t of ["cache-control","content-location","date","expires","vary","set-cookie"]){const r=s.headers.get(t);r&&e.set(t,r);}return new Response(void 0,{status:304,headers:e})}}if(u&&s.status>=300&&s.status<=308){const e=s.headers.get("location");if(e)return at(new D(s.status,e))}return s}catch(S){if(S instanceof D){const e=u?at(S):b?.page&&me(w)?ye(S):ue(S.status,S.location);return ht(e.headers,Object.values(h)),e}return await ce(w,n$1,S)}}let Et;class Rt{#_;#y;constructor(e){this.#_=x,this.#y=e;}async init({env:e,read:t}){const r={public_prefix:this.#_.env_public_prefix,private_prefix:this.#_.env_private_prefix};(function(e,{public_prefix:t,private_prefix:r}){return Object.fromEntries(Object.entries(e).filter((([e])=>e.startsWith(r)&&(""===t||!e.startsWith(t)))))})(e,r);const n=function(e,{public_prefix:t,private_prefix:r}){return Object.fromEntries(Object.entries(e).filter((([e])=>e.startsWith(t)&&(""===r||!e.startsWith(r)))))}(e,r);u(n),v(n),t&&_(t),await(Et??=(async()=>{try{const e=await $();this.#_.hooks={handle:e.handle||(({event:e,resolve:t})=>t(e)),handleError:e.handleError||(({error:e})=>console.error(e)),handleFetch:e.handleFetch||(({request:e,fetch:t})=>t(e)),reroute:e.reroute||(()=>{}),transport:e.transport||{}},e.init&&await e.init();}catch(e){throw e}})());}async respond(e,t){return xt(e,this.#_,this.#y,{...t,error:false,depth:0})}}

export { Rt as Server };
//# sourceMappingURL=index.js.map
