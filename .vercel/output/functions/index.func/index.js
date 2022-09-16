globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component4) {
  current_component = component4;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component4, name) {
  if (!component4 || !component4.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component4;
}
function create_ssr_component(fn) {
  function $$render(result2, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result2, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result2 = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result2, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result2.css).map((css) => css.code).join("\n"),
          map: null
        },
        head: result2.title + result2.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index4 = 0;
      while (index4 < str.length) {
        var eqIdx = str.indexOf("=", index4);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index4);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index4, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index4 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// .svelte-kit/output/server/chunks/index2.js
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
var HttpError, Redirect, ValidationError;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    HttpError = class {
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ValidationError = class {
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module2) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie2 = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie2.secure = true;
        } else if (key2 === "httponly") {
          cookie2.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key2] = value2;
        }
      });
      return cookie2;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie2 = parseString2(str, options);
          cookies2[cookie2.name] = cookie2;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
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
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
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
    module2.exports = parse3;
    module2.exports.parse = parse3;
    module2.exports.parseString = parseString2;
    module2.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module2) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root2 = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root2, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root2, createExporter(module2.exports)));
      } else {
        factory(createExporter(root2));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root2) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __2() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__2.prototype = b.prototype, new __2());
      };
      __assign2 = Object.assign || function(t) {
        for (var s2, i = 1, n = arguments.length; i < n; i++) {
          s2 = arguments[i];
          for (var p in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p))
              t[p] = s2[p];
        }
        return t;
      };
      __rest2 = function(s2, e) {
        var t = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
            t[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
              t[p[i]] = s2[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key2, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key2, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
        return c > 3 && r && Object.defineProperty(target, key2, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key2) {
          decorator(target, key2, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result2) {
            result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o[s2], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error2) {
          e = { error: error2 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s2 = 0, i = 0, il = arguments.length; i < il; i++)
          s2 += arguments[i].length;
        for (var r = Array(s2), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result2 = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result2, mod, k);
        }
        __setModuleDefault(result2, mod);
        return result2;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/tslib/modules/index.js
var import_tslib, __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn;
var init_modules = __esm({
  "node_modules/tslib/modules/index.js"() {
    import_tslib = __toESM(require_tslib(), 1);
    ({
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __exportStar,
      __createBinding,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn
    } = import_tslib.default);
  }
});

// node_modules/ts-invariant/lib/invariant.js
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
function setVerbosity(level) {
  var old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}
var genericMessage, _a, setPrototypeOf, InvariantError, verbosityLevels, verbosityLevel;
var init_invariant = __esm({
  "node_modules/ts-invariant/lib/invariant.js"() {
    init_modules();
    genericMessage = "Invariant Violation";
    _a = Object.setPrototypeOf;
    setPrototypeOf = _a === void 0 ? function(obj, proto) {
      obj.__proto__ = proto;
      return obj;
    } : _a;
    InvariantError = function(_super) {
      __extends(InvariantError2, _super);
      function InvariantError2(message) {
        if (message === void 0) {
          message = genericMessage;
        }
        var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError2.prototype);
        return _this;
      }
      return InvariantError2;
    }(Error);
    verbosityLevels = ["debug", "log", "warn", "error", "silent"];
    verbosityLevel = verbosityLevels.indexOf("log");
    (function(invariant3) {
      invariant3.debug = wrapConsoleMethod("debug");
      invariant3.log = wrapConsoleMethod("log");
      invariant3.warn = wrapConsoleMethod("warn");
      invariant3.error = wrapConsoleMethod("error");
    })(invariant || (invariant = {}));
  }
});

// node_modules/@apollo/client/utilities/globals/maybe.js
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a5) {
  }
}
var init_maybe = __esm({
  "node_modules/@apollo/client/utilities/globals/maybe.js"() {
  }
});

// node_modules/@apollo/client/utilities/globals/global.js
var global_default;
var init_global = __esm({
  "node_modules/@apollo/client/utilities/globals/global.js"() {
    init_maybe();
    global_default = maybe(function() {
      return globalThis;
    }) || maybe(function() {
      return window;
    }) || maybe(function() {
      return self;
    }) || maybe(function() {
      return global;
    }) || maybe(function() {
      return maybe.constructor("return this")();
    });
  }
});

// node_modules/@apollo/client/utilities/globals/DEV.js
function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a5) {
    Object.defineProperty(global_default, GLOBAL_KEY, {
      value: maybe(function() {
        return "development";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global_default[GLOBAL_KEY];
  }
}
var __, GLOBAL_KEY, DEV_default;
var init_DEV = __esm({
  "node_modules/@apollo/client/utilities/globals/DEV.js"() {
    init_global();
    init_maybe();
    __ = "__";
    GLOBAL_KEY = [__, __].join("DEV");
    DEV_default = getDEV();
  }
});

// node_modules/ts-invariant/process/index.js
function maybe2(thunk) {
  try {
    return thunk();
  } catch (_) {
  }
}
function install() {
  if (safeGlobal && !maybe2(function() {
    return "development";
  }) && !maybe2(function() {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          NODE_ENV: "production"
        }
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
}
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}
var safeGlobal, needToRemove;
var init_process = __esm({
  "node_modules/ts-invariant/process/index.js"() {
    safeGlobal = maybe2(function() {
      return globalThis;
    }) || maybe2(function() {
      return window;
    }) || maybe2(function() {
      return self;
    }) || maybe2(function() {
      return global;
    }) || maybe2(function() {
      return maybe2.constructor("return this")();
    });
    needToRemove = false;
    install();
  }
});

// node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
var init_devAssert = __esm({
  "node_modules/graphql/jsutils/devAssert.mjs"() {
  }
});

// node_modules/graphql/jsutils/isObjectLike.mjs
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
var init_isObjectLike = __esm({
  "node_modules/graphql/jsutils/isObjectLike.mjs"() {
  }
});

// node_modules/graphql/jsutils/invariant.mjs
function invariant2(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : "Unexpected invariant triggered."
    );
  }
}
var init_invariant2 = __esm({
  "node_modules/graphql/jsutils/invariant.mjs"() {
  }
});

// node_modules/graphql/language/location.mjs
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant2(false);
    if (match.index >= position) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}
var LineRegExp;
var init_location = __esm({
  "node_modules/graphql/language/location.mjs"() {
    init_invariant2();
    LineRegExp = /\r\n|[\n\r]/g;
  }
});

// node_modules/graphql/language/printLocation.mjs
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
var init_printLocation = __esm({
  "node_modules/graphql/language/printLocation.mjs"() {
    init_location();
  }
});

// node_modules/graphql/error/GraphQLError.mjs
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
function undefinedIfEmpty(array2) {
  return array2 === void 0 || array2.length === 0 ? void 0 : array2;
}
var GraphQLError;
var init_GraphQLError = __esm({
  "node_modules/graphql/error/GraphQLError.mjs"() {
    init_isObjectLike();
    init_location();
    init_printLocation();
    GraphQLError = class extends Error {
      constructor(message, ...rawArgs) {
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : void 0;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
        this.nodes = undefinedIfEmpty(
          Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
        );
        const nodeLocations = undefinedIfEmpty(
          (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
        );
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
        this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
        const originalExtensions = isObjectLike(
          originalError === null || originalError === void 0 ? void 0 : originalError.extensions
        ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
        Object.defineProperties(this, {
          message: {
            writable: true,
            enumerable: true
          },
          name: {
            enumerable: false
          },
          nodes: {
            enumerable: false
          },
          source: {
            enumerable: false
          },
          positions: {
            enumerable: false
          },
          originalError: {
            enumerable: false
          }
        });
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
          Object.defineProperty(this, "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
        } else if (Error.captureStackTrace) {
          Error.captureStackTrace(this, GraphQLError);
        } else {
          Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
          });
        }
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let output = this.message;
        if (this.nodes) {
          for (const node of this.nodes) {
            if (node.loc) {
              output += "\n\n" + printLocation(node.loc);
            }
          }
        } else if (this.source && this.locations) {
          for (const location of this.locations) {
            output += "\n\n" + printSourceLocation(this.source, location);
          }
        }
        return output;
      }
      toJSON() {
        const formattedError = {
          message: this.message
        };
        if (this.locations != null) {
          formattedError.locations = this.locations;
        }
        if (this.path != null) {
          formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
          formattedError.extensions = this.extensions;
        }
        return formattedError;
      }
    };
  }
});

// node_modules/graphql/error/syntaxError.mjs
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}
var init_syntaxError = __esm({
  "node_modules/graphql/error/syntaxError.mjs"() {
    init_GraphQLError();
  }
});

// node_modules/graphql/language/ast.mjs
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var Location, Token, QueryDocumentKeys, kindValues, OperationTypeNode;
var init_ast = __esm({
  "node_modules/graphql/language/ast.mjs"() {
    Location = class {
      constructor(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      }
    };
    Token = class {
      constructor(kind, start, end, line, column, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = null;
        this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      }
    };
    QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    kindValues = new Set(Object.keys(QueryDocumentKeys));
    (function(OperationTypeNode2) {
      OperationTypeNode2["QUERY"] = "query";
      OperationTypeNode2["MUTATION"] = "mutation";
      OperationTypeNode2["SUBSCRIPTION"] = "subscription";
    })(OperationTypeNode || (OperationTypeNode = {}));
  }
});

// node_modules/graphql/language/directiveLocation.mjs
var DirectiveLocation;
var init_directiveLocation = __esm({
  "node_modules/graphql/language/directiveLocation.mjs"() {
    (function(DirectiveLocation2) {
      DirectiveLocation2["QUERY"] = "QUERY";
      DirectiveLocation2["MUTATION"] = "MUTATION";
      DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
      DirectiveLocation2["FIELD"] = "FIELD";
      DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
      DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
      DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
      DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
      DirectiveLocation2["SCHEMA"] = "SCHEMA";
      DirectiveLocation2["SCALAR"] = "SCALAR";
      DirectiveLocation2["OBJECT"] = "OBJECT";
      DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
      DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
      DirectiveLocation2["INTERFACE"] = "INTERFACE";
      DirectiveLocation2["UNION"] = "UNION";
      DirectiveLocation2["ENUM"] = "ENUM";
      DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
      DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
      DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
    })(DirectiveLocation || (DirectiveLocation = {}));
  }
});

// node_modules/graphql/language/kinds.mjs
var Kind;
var init_kinds = __esm({
  "node_modules/graphql/language/kinds.mjs"() {
    (function(Kind2) {
      Kind2["NAME"] = "Name";
      Kind2["DOCUMENT"] = "Document";
      Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
      Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
      Kind2["SELECTION_SET"] = "SelectionSet";
      Kind2["FIELD"] = "Field";
      Kind2["ARGUMENT"] = "Argument";
      Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
      Kind2["INLINE_FRAGMENT"] = "InlineFragment";
      Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
      Kind2["VARIABLE"] = "Variable";
      Kind2["INT"] = "IntValue";
      Kind2["FLOAT"] = "FloatValue";
      Kind2["STRING"] = "StringValue";
      Kind2["BOOLEAN"] = "BooleanValue";
      Kind2["NULL"] = "NullValue";
      Kind2["ENUM"] = "EnumValue";
      Kind2["LIST"] = "ListValue";
      Kind2["OBJECT"] = "ObjectValue";
      Kind2["OBJECT_FIELD"] = "ObjectField";
      Kind2["DIRECTIVE"] = "Directive";
      Kind2["NAMED_TYPE"] = "NamedType";
      Kind2["LIST_TYPE"] = "ListType";
      Kind2["NON_NULL_TYPE"] = "NonNullType";
      Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
      Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
      Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
      Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
      Kind2["FIELD_DEFINITION"] = "FieldDefinition";
      Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
      Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
      Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
      Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
      Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
      Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
      Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
      Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
      Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
      Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
      Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
      Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
      Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
      Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
    })(Kind || (Kind = {}));
  }
});

// node_modules/graphql/language/characterClasses.mjs
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
var init_characterClasses = __esm({
  "node_modules/graphql/language/characterClasses.mjs"() {
  }
});

// node_modules/graphql/language/blockString.mjs
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result2 = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result2 += "\n";
  }
  result2 += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result2 += "\n";
  }
  return '"""' + result2 + '"""';
}
var init_blockString = __esm({
  "node_modules/graphql/language/blockString.mjs"() {
    init_characterClasses();
  }
});

// node_modules/graphql/language/tokenKind.mjs
var TokenKind;
var init_tokenKind = __esm({
  "node_modules/graphql/language/tokenKind.mjs"() {
    (function(TokenKind2) {
      TokenKind2["SOF"] = "<SOF>";
      TokenKind2["EOF"] = "<EOF>";
      TokenKind2["BANG"] = "!";
      TokenKind2["DOLLAR"] = "$";
      TokenKind2["AMP"] = "&";
      TokenKind2["PAREN_L"] = "(";
      TokenKind2["PAREN_R"] = ")";
      TokenKind2["SPREAD"] = "...";
      TokenKind2["COLON"] = ":";
      TokenKind2["EQUALS"] = "=";
      TokenKind2["AT"] = "@";
      TokenKind2["BRACKET_L"] = "[";
      TokenKind2["BRACKET_R"] = "]";
      TokenKind2["BRACE_L"] = "{";
      TokenKind2["PIPE"] = "|";
      TokenKind2["BRACE_R"] = "}";
      TokenKind2["NAME"] = "Name";
      TokenKind2["INT"] = "Int";
      TokenKind2["FLOAT"] = "Float";
      TokenKind2["STRING"] = "String";
      TokenKind2["BLOCK_STRING"] = "BlockString";
      TokenKind2["COMMENT"] = "Comment";
    })(TokenKind || (TokenKind = {}));
  }
});

// node_modules/graphql/language/lexer.mjs
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position;
        continue;
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 35:
        return readComment(lexer, position);
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape2 = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape2.value;
      position += escape2.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}
var Lexer;
var init_lexer = __esm({
  "node_modules/graphql/language/lexer.mjs"() {
    init_syntaxError();
    init_ast();
    init_blockString();
    init_characterClasses();
    init_tokenKind();
    Lexer = class {
      constructor(source) {
        const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
      }
      get [Symbol.toStringTag]() {
        return "Lexer";
      }
      advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
      }
      lookahead() {
        let token = this.token;
        if (token.kind !== TokenKind.EOF) {
          do {
            if (token.next) {
              token = token.next;
            } else {
              const nextToken = readNextToken(this, token.end);
              token.next = nextToken;
              nextToken.prev = token;
              token = nextToken;
            }
          } while (token.kind === TokenKind.COMMENT);
        }
        return token;
      }
    };
  }
});

// node_modules/graphql/jsutils/inspect.mjs
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key2, value]) => key2 + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array2, seenValues) {
  if (array2.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array2.length);
  const remaining = array2.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array2[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
var MAX_ARRAY_LENGTH, MAX_RECURSIVE_DEPTH;
var init_inspect = __esm({
  "node_modules/graphql/jsutils/inspect.mjs"() {
    MAX_ARRAY_LENGTH = 10;
    MAX_RECURSIVE_DEPTH = 2;
  }
});

// node_modules/graphql/jsutils/instanceOf.mjs
var instanceOf;
var init_instanceOf = __esm({
  "node_modules/graphql/jsutils/instanceOf.mjs"() {
    init_inspect();
    instanceOf = false ? function instanceOf2(value, constructor) {
      return value instanceof constructor;
    } : function instanceOf3(value, constructor) {
      if (value instanceof constructor) {
        return true;
      }
      if (typeof value === "object" && value !== null) {
        var _value$constructor;
        const className = constructor.prototype[Symbol.toStringTag];
        const valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
          const stringifiedValue = inspect(value);
          throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return false;
    };
  }
});

// node_modules/graphql/language/source.mjs
function isSource(source) {
  return instanceOf(source, Source);
}
var Source;
var init_source = __esm({
  "node_modules/graphql/language/source.mjs"() {
    init_devAssert();
    init_inspect();
    init_instanceOf();
    Source = class {
      constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
      }) {
        typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || devAssert(
          false,
          "line in locationOffset is 1-indexed and must be positive."
        );
        this.locationOffset.column > 0 || devAssert(
          false,
          "column in locationOffset is 1-indexed and must be positive."
        );
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    };
  }
});

// node_modules/graphql/language/parser.mjs
function parse2(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
var Parser;
var init_parser = __esm({
  "node_modules/graphql/language/parser.mjs"() {
    init_syntaxError();
    init_ast();
    init_directiveLocation();
    init_kinds();
    init_lexer();
    init_source();
    init_tokenKind();
    Parser = class {
      constructor(source, options = {}) {
        const sourceObj = isSource(source) ? source : new Source(source);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
      }
      parseName() {
        const token = this.expectToken(TokenKind.NAME);
        return this.node(token, {
          kind: Kind.NAME,
          value: token.value
        });
      }
      parseDocument() {
        return this.node(this._lexer.token, {
          kind: Kind.DOCUMENT,
          definitions: this.many(
            TokenKind.SOF,
            this.parseDefinition,
            TokenKind.EOF
          )
        });
      }
      parseDefinition() {
        if (this.peek(TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        }
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition();
          }
          if (hasDescription) {
            throw syntaxError(
              this._lexer.source,
              this._lexer.token.start,
              "Unexpected description, descriptions are supported only on type definitions."
            );
          }
          switch (keywordToken.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "extend":
              return this.parseTypeSystemExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(TokenKind.BRACE_L)) {
          return this.node(start, {
            kind: Kind.OPERATION_DEFINITION,
            operation: OperationTypeNode.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(TokenKind.NAME)) {
          name = this.parseName();
        }
        return this.node(start, {
          kind: Kind.OPERATION_DEFINITION,
          operation,
          name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      parseOperationType() {
        const operationToken = this.expectToken(TokenKind.NAME);
        switch (operationToken.value) {
          case "query":
            return OperationTypeNode.QUERY;
          case "mutation":
            return OperationTypeNode.MUTATION;
          case "subscription":
            return OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
      }
      parseVariableDefinitions() {
        return this.optionalMany(
          TokenKind.PAREN_L,
          this.parseVariableDefinition,
          TokenKind.PAREN_R
        );
      }
      parseVariableDefinition() {
        return this.node(this._lexer.token, {
          kind: Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
          directives: this.parseConstDirectives()
        });
      }
      parseVariable() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return this.node(start, {
          kind: Kind.VARIABLE,
          name: this.parseName()
        });
      }
      parseSelectionSet() {
        return this.node(this._lexer.token, {
          kind: Kind.SELECTION_SET,
          selections: this.many(
            TokenKind.BRACE_L,
            this.parseSelection,
            TokenKind.BRACE_R
          )
        });
      }
      parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      }
      parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }
        return this.node(start, {
          kind: Kind.FIELD,
          alias,
          name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
        });
      }
      parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
      }
      parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
          kind: Kind.ARGUMENT,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      parseConstArgument() {
        return this.parseArgument(true);
      }
      parseFragment() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
          return this.node(start, {
            kind: Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
          });
        }
        return this.node(start, {
          kind: Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword("fragment");
        if (this._options.allowLegacyFragmentVariables === true) {
          return this.node(start, {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        return this.node(start, {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      parseFragmentName() {
        if (this._lexer.token.value === "on") {
          throw this.unexpected();
        }
        return this.parseName();
      }
      parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch (token.kind) {
          case TokenKind.BRACKET_L:
            return this.parseList(isConst);
          case TokenKind.BRACE_L:
            return this.parseObject(isConst);
          case TokenKind.INT:
            this.advanceLexer();
            return this.node(token, {
              kind: Kind.INT,
              value: token.value
            });
          case TokenKind.FLOAT:
            this.advanceLexer();
            return this.node(token, {
              kind: Kind.FLOAT,
              value: token.value
            });
          case TokenKind.STRING:
          case TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();
          case TokenKind.NAME:
            this.advanceLexer();
            switch (token.value) {
              case "true":
                return this.node(token, {
                  kind: Kind.BOOLEAN,
                  value: true
                });
              case "false":
                return this.node(token, {
                  kind: Kind.BOOLEAN,
                  value: false
                });
              case "null":
                return this.node(token, {
                  kind: Kind.NULL
                });
              default:
                return this.node(token, {
                  kind: Kind.ENUM,
                  value: token.value
                });
            }
          case TokenKind.DOLLAR:
            if (isConst) {
              this.expectToken(TokenKind.DOLLAR);
              if (this._lexer.token.kind === TokenKind.NAME) {
                const varName = this._lexer.token.value;
                throw syntaxError(
                  this._lexer.source,
                  token.start,
                  `Unexpected variable "$${varName}" in constant value.`
                );
              } else {
                throw this.unexpected(token);
              }
            }
            return this.parseVariable();
          default:
            throw this.unexpected();
        }
      }
      parseConstValueLiteral() {
        return this.parseValueLiteral(true);
      }
      parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.STRING,
          value: token.value,
          block: token.kind === TokenKind.BLOCK_STRING
        });
      }
      parseList(isConst) {
        const item = () => this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
          kind: Kind.LIST,
          values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
        });
      }
      parseObject(isConst) {
        const item = () => this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
          kind: Kind.OBJECT,
          fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
        });
      }
      parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
          kind: Kind.OBJECT_FIELD,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      parseDirectives(isConst) {
        const directives = [];
        while (this.peek(TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }
        return directives;
      }
      parseConstDirectives() {
        return this.parseDirectives(true);
      }
      parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return this.node(start, {
          kind: Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst)
        });
      }
      parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
          const innerType = this.parseTypeReference();
          this.expectToken(TokenKind.BRACKET_R);
          type = this.node(start, {
            kind: Kind.LIST_TYPE,
            type: innerType
          });
        } else {
          type = this.parseNamedType();
        }
        if (this.expectOptionalToken(TokenKind.BANG)) {
          return this.node(start, {
            kind: Kind.NON_NULL_TYPE,
            type
          });
        }
        return type;
      }
      parseNamedType() {
        return this.node(this._lexer.token, {
          kind: Kind.NAMED_TYPE,
          name: this.parseName()
        });
      }
      peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
      }
      parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      }
      parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(
          TokenKind.BRACE_L,
          this.parseOperationTypeDefinition,
          TokenKind.BRACE_R
        );
        return this.node(start, {
          kind: Kind.SCHEMA_DEFINITION,
          description,
          directives,
          operationTypes
        });
      }
      parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
          kind: Kind.OPERATION_TYPE_DEFINITION,
          operation,
          type
        });
      }
      parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.SCALAR_TYPE_DEFINITION,
          description,
          name,
          directives
        });
      }
      parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: Kind.OBJECT_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
      }
      parseFieldsDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseFieldDefinition,
          TokenKind.BRACE_R
        );
      }
      parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.FIELD_DEFINITION,
          description,
          name,
          arguments: args,
          type,
          directives
        });
      }
      parseArgumentDefs() {
        return this.optionalMany(
          TokenKind.PAREN_L,
          this.parseInputValueDef,
          TokenKind.PAREN_R
        );
      }
      parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(TokenKind.EQUALS)) {
          defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.INPUT_VALUE_DEFINITION,
          description,
          name,
          type,
          defaultValue,
          directives
        });
      }
      parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: Kind.INTERFACE_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
          kind: Kind.UNION_TYPE_DEFINITION,
          description,
          name,
          directives,
          types
        });
      }
      parseUnionMemberTypes() {
        return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
      }
      parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
          kind: Kind.ENUM_TYPE_DEFINITION,
          description,
          name,
          directives,
          values
        });
      }
      parseEnumValuesDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseEnumValueDefinition,
          TokenKind.BRACE_R
        );
      }
      parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.ENUM_VALUE_DEFINITION,
          description,
          name,
          directives
        });
      }
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
          throw syntaxError(
            this._lexer.source,
            this._lexer.token.start,
            `${getTokenDesc(
              this._lexer.token
            )} is reserved and cannot be used for an enum value.`
          );
        }
        return this.parseName();
      }
      parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
          kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields
        });
      }
      parseInputFieldsDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseInputValueDef,
          TokenKind.BRACE_R
        );
      }
      parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(
          TokenKind.BRACE_L,
          this.parseOperationTypeDefinition,
          TokenKind.BRACE_R
        );
        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.SCHEMA_EXTENSION,
          directives,
          operationTypes
        });
      }
      parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.SCALAR_TYPE_EXTENSION,
          name,
          directives
        });
      }
      parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.OBJECT_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.INTERFACE_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.UNION_TYPE_EXTENSION,
          name,
          directives,
          types
        });
      }
      parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.ENUM_TYPE_EXTENSION,
          name,
          directives,
          values
        });
      }
      parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name,
          directives,
          fields
        });
      }
      parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
          kind: Kind.DIRECTIVE_DEFINITION,
          description,
          name,
          arguments: args,
          repeatable,
          locations
        });
      }
      parseDirectiveLocations() {
        return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
      }
      parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
          return name;
        }
        throw this.unexpected(start);
      }
      node(startToken, node) {
        if (this._options.noLocation !== true) {
          node.loc = new Location(
            startToken,
            this._lexer.lastToken,
            this._lexer.source
          );
        }
        return node;
      }
      peek(kind) {
        return this._lexer.token.kind === kind;
      }
      expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this.advanceLexer();
          return token;
        }
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
        );
      }
      expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this.advanceLexer();
          return true;
        }
        return false;
      }
      expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
          this.advanceLexer();
        } else {
          throw syntaxError(
            this._lexer.source,
            token.start,
            `Expected "${value}", found ${getTokenDesc(token)}.`
          );
        }
      }
      expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
          this.advanceLexer();
          return true;
        }
        return false;
      }
      unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(
          this._lexer.source,
          token.start,
          `Unexpected ${getTokenDesc(token)}.`
        );
      }
      any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }
        return nodes;
      }
      optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          const nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        return [];
      }
      many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (this.expectOptionalToken(delimiterKind));
        return nodes;
      }
      advanceLexer() {
        const { maxTokens } = this._options;
        const token = this._lexer.advance();
        if (maxTokens !== void 0 && token.kind !== TokenKind.EOF) {
          ++this._tokenCounter;
          if (this._tokenCounter > maxTokens) {
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Document contains more that ${maxTokens} tokens. Parsing aborted.`
            );
          }
        }
      }
    };
  }
});

// node_modules/graphql/language/printString.mjs
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
var escapedRegExp, escapeSequences;
var init_printString = __esm({
  "node_modules/graphql/language/printString.mjs"() {
    escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    escapeSequences = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F"
    ];
  }
});

// node_modules/graphql/language/visitor.mjs
function visit(root2, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root2);
  let keys = [root2];
  let index4 = -1;
  let edits = [];
  let node = root2;
  let key2 = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index4++;
    const isLeaving = index4 === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key2 = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node)
          );
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index4 = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key2 = inArray ? index4 : keys[index4];
      node = parent[key2];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key2);
    }
    let result2;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result2 = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key2, parent, path, ancestors);
      if (result2 === BREAK) {
        break;
      }
      if (result2 === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result2 !== void 0) {
        edits.push([key2, result2]);
        if (!isLeaving) {
          if (isNode(result2)) {
            node = result2;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result2 === void 0 && isEdited) {
      edits.push([key2, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index: index4,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index4 = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root2;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
var BREAK;
var init_visitor = __esm({
  "node_modules/graphql/language/visitor.mjs"() {
    init_devAssert();
    init_inspect();
    init_ast();
    init_kinds();
    BREAK = Object.freeze({});
  }
});

// node_modules/graphql/language/printer.mjs
function print(ast) {
  return visit(ast, printDocASTReducer);
}
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array2) {
  return wrap("{\n", indent(join(array2, "\n")), "\n}");
}
function wrap(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
var MAX_LINE_LENGTH, printDocASTReducer;
var init_printer = __esm({
  "node_modules/graphql/language/printer.mjs"() {
    init_blockString();
    init_printString();
    init_visitor();
    MAX_LINE_LENGTH = 80;
    printDocASTReducer = {
      Name: {
        leave: (node) => node.value
      },
      Variable: {
        leave: (node) => "$" + node.name
      },
      Document: {
        leave: (node) => join(node.definitions, "\n\n")
      },
      OperationDefinition: {
        leave(node) {
          const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
          const prefix = join(
            [
              node.operation,
              join([node.name, varDefs]),
              join(node.directives, " ")
            ],
            " "
          );
          return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
      },
      VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
      },
      SelectionSet: {
        leave: ({ selections }) => block(selections)
      },
      Field: {
        leave({ alias, name, arguments: args, directives, selectionSet }) {
          const prefix = wrap("", alias, ": ") + name;
          let argsLine = prefix + wrap("(", join(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH) {
            argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
          }
          return join([argsLine, join(directives, " "), selectionSet], " ");
        }
      },
      Argument: {
        leave: ({ name, value }) => name + ": " + value
      },
      FragmentSpread: {
        leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
      },
      InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet }) => join(
          [
            "...",
            wrap("on ", typeCondition),
            join(directives, " "),
            selectionSet
          ],
          " "
        )
      },
      FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
      },
      IntValue: {
        leave: ({ value }) => value
      },
      FloatValue: {
        leave: ({ value }) => value
      },
      StringValue: {
        leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
      },
      BooleanValue: {
        leave: ({ value }) => value ? "true" : "false"
      },
      NullValue: {
        leave: () => "null"
      },
      EnumValue: {
        leave: ({ value }) => value
      },
      ListValue: {
        leave: ({ values }) => "[" + join(values, ", ") + "]"
      },
      ObjectValue: {
        leave: ({ fields }) => "{" + join(fields, ", ") + "}"
      },
      ObjectField: {
        leave: ({ name, value }) => name + ": " + value
      },
      Directive: {
        leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
      },
      NamedType: {
        leave: ({ name }) => name
      },
      ListType: {
        leave: ({ type }) => "[" + type + "]"
      },
      NonNullType: {
        leave: ({ type }) => type + "!"
      },
      SchemaDefinition: {
        leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
      },
      OperationTypeDefinition: {
        leave: ({ operation, type }) => operation + ": " + type
      },
      ScalarTypeDefinition: {
        leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
          [
            "type",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
      },
      InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
          [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
          " "
        )
      },
      InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
          [
            "interface",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      UnionTypeDefinition: {
        leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
          ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
          " "
        )
      },
      EnumTypeDefinition: {
        leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
      },
      EnumValueDefinition: {
        leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
      },
      InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
      },
      DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
      },
      SchemaExtension: {
        leave: ({ directives, operationTypes }) => join(
          ["extend schema", join(directives, " "), block(operationTypes)],
          " "
        )
      },
      ScalarTypeExtension: {
        leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(
          [
            "extend type",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(
          [
            "extend interface",
            name,
            wrap("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      UnionTypeExtension: {
        leave: ({ name, directives, types }) => join(
          [
            "extend union",
            name,
            join(directives, " "),
            wrap("= ", join(types, " | "))
          ],
          " "
        )
      },
      EnumTypeExtension: {
        leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
      },
      InputObjectTypeExtension: {
        leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
      }
    };
  }
});

// node_modules/graphql/language/index.mjs
var init_language = __esm({
  "node_modules/graphql/language/index.mjs"() {
    init_source();
    init_parser();
    init_printer();
    init_visitor();
  }
});

// node_modules/graphql/index.mjs
var init_graphql = __esm({
  "node_modules/graphql/index.mjs"() {
    init_language();
  }
});

// node_modules/@apollo/client/utilities/globals/fix-graphql.js
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}
var init_fix_graphql = __esm({
  "node_modules/@apollo/client/utilities/globals/fix-graphql.js"() {
    init_process();
    init_graphql();
  }
});

// node_modules/@apollo/client/utilities/globals/index.js
function checkDEV() {
  __DEV__ ? invariant("boolean" === typeof DEV_default, DEV_default) : invariant("boolean" === typeof DEV_default, 36);
}
var init_globals = __esm({
  "node_modules/@apollo/client/utilities/globals/index.js"() {
    init_invariant();
    init_DEV();
    init_fix_graphql();
    init_maybe();
    init_global();
    removeTemporaryGlobals();
    checkDEV();
  }
});

// node_modules/@apollo/client/utilities/graphql/directives.js
function shouldInclude(_a5, variables) {
  var directives = _a5.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a6) {
    var directive = _a6.directive, ifArgument = _a6.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant(evaledValue !== void 0, 37);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function getDirectiveNames(root2) {
  var names = [];
  visit(root2, {
    Directive: function(node) {
      names.push(node.name.value);
    }
  });
  return names;
}
function hasDirectives(names, root2) {
  return getDirectiveNames(root2).some(function(name) {
    return names.indexOf(name) > -1;
  });
}
function hasClientExports(document) {
  return document && hasDirectives(["client"], document) && hasDirectives(["export"], document);
}
function isInclusionDirective(_a5) {
  var value = _a5.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result2 = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant(directiveArguments && directiveArguments.length === 1, 38);
      var ifArgument = directiveArguments[0];
      __DEV__ ? invariant(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @".concat(directiveName, " directive.")) : invariant(ifArgument.name && ifArgument.name.value === "if", 39);
      var ifValue = ifArgument.value;
      __DEV__ ? invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 40);
      result2.push({ directive, ifArgument });
    });
  }
  return result2;
}
var init_directives = __esm({
  "node_modules/@apollo/client/utilities/graphql/directives.js"() {
    init_globals();
    init_graphql();
  }
});

// node_modules/@apollo/client/utilities/graphql/fragments.js
function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw __DEV__ ? new InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(41);
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    __DEV__ ? invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant(fragments.length === 1, 42);
    actualFragmentName = fragments[0].name.value;
  }
  var query2 = __assign(__assign({}, document), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document.definitions, true) });
  return query2;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragment = fragmentMap && fragmentMap[selection.name.value];
      __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : invariant(fragment, 43);
      return fragment;
    }
    default:
      return null;
  }
}
var init_fragments = __esm({
  "node_modules/@apollo/client/utilities/graphql/fragments.js"() {
    init_modules();
    init_globals();
  }
});

// node_modules/@apollo/client/utilities/common/objects.js
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
var init_objects = __esm({
  "node_modules/@apollo/client/utilities/common/objects.js"() {
  }
});

// node_modules/@apollo/client/utilities/graphql/storeUtils.js
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new InvariantError('The inline argument "'.concat(name.value, '" of kind "').concat(value.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new InvariantError(52);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a5) {
          var name = _a5.name, value = _a5.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a5) {
      var name = _a5.name, value = _a5.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key2) {
      copy[key2] = value[key2];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a5) {
      var name = _a5.name, value = _a5.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result2, selectionSet, fragmentMap) {
  if (typeof result2.__typename === "string") {
    return result2.__typename;
  }
  for (var _i = 0, _a5 = selectionSet.selections; _i < _a5.length; _i++) {
    var selection = _a5[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result2[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result2, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
var KNOWN_DIRECTIVES, getStoreKeyName, stringify;
var init_storeUtils = __esm({
  "node_modules/@apollo/client/utilities/graphql/storeUtils.js"() {
    init_globals();
    init_objects();
    init_fragments();
    KNOWN_DIRECTIVES = [
      "connection",
      "include",
      "skip",
      "client",
      "rest",
      "export"
    ];
    getStoreKeyName = Object.assign(function(fieldName, args, directives) {
      if (args && directives && directives["connection"] && directives["connection"]["key"]) {
        if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
          var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
          filterKeys.sort();
          var filteredArgs_1 = {};
          filterKeys.forEach(function(key2) {
            filteredArgs_1[key2] = args[key2];
          });
          return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
        } else {
          return directives["connection"]["key"];
        }
      }
      var completeFieldName = fieldName;
      if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
      }
      if (directives) {
        Object.keys(directives).forEach(function(key2) {
          if (KNOWN_DIRECTIVES.indexOf(key2) !== -1)
            return;
          if (directives[key2] && Object.keys(directives[key2]).length) {
            completeFieldName += "@".concat(key2, "(").concat(stringify(directives[key2]), ")");
          } else {
            completeFieldName += "@".concat(key2);
          }
        });
      }
      return completeFieldName;
    }, {
      setStringify: function(s2) {
        var previous = stringify;
        stringify = s2;
        return previous;
      }
    });
    stringify = function defaultStringify(value) {
      return JSON.stringify(value, stringifyReplacer);
    };
  }
});

// node_modules/@apollo/client/utilities/graphql/getFromAST.js
function checkDocument(doc) {
  __DEV__ ? invariant(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc && doc.kind === "Document", 44);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "'.concat(definition.kind, '"')) : new InvariantError(45);
    }
    return definition;
  });
  __DEV__ ? invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant(operations.length <= 1, 46);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? invariant(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant(queryDef && queryDef.operation === "query", 47);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? invariant(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc.kind === "Document", 48);
  __DEV__ ? invariant(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant(doc.definitions.length <= 1, 49);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? invariant(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant(fragmentDef.kind === "FragmentDefinition", 50);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a5 = queryDoc.definitions; _i < _a5.length; _i++) {
    var definition = _a5[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(51);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}
var init_getFromAST = __esm({
  "node_modules/@apollo/client/utilities/graphql/getFromAST.js"() {
    init_globals();
    init_storeUtils();
  }
});

// node_modules/@apollo/client/utilities/common/filterInPlace.js
function filterInPlace(array2, test, context) {
  var target = 0;
  array2.forEach(function(elem, i) {
    if (test.call(this, elem, i, array2)) {
      array2[target++] = elem;
    }
  }, context);
  array2.length = target;
  return array2;
}
var init_filterInPlace = __esm({
  "node_modules/@apollo/client/utilities/common/filterInPlace.js"() {
  }
});

// node_modules/@apollo/client/utilities/graphql/transform.js
function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function(selection) {
    return selection.kind === "FragmentSpread" && isEmpty(fragments[selection.name.value], fragments);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function(dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = /* @__PURE__ */ Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = /* @__PURE__ */ Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
    Variable: {
      enter: function(node, _key, parent) {
        if (parent.kind !== "VariableDefinition") {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function(node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function(directive) {
            return directive.remove;
          });
          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function(arg) {
                if (arg.value.kind === "Variable") {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }
            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }
            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function(node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function(node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));
  if (modifiedDoc && filterInPlace(variablesToRemove, function(v) {
    return !!v.name && !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }
  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }
  return modifiedDoc;
}
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function(aConfig) {
      return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}
function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(visit(doc, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
          return !config.some(function(arg) {
            return arg.name === varDef.variable.name.value;
          });
        }) : [] });
      }
    },
    Field: {
      enter: function(node) {
        var shouldRemoveField = config.some(function(argConfig) {
          return argConfig.remove;
        });
        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          if (node.arguments) {
            node.arguments.forEach(function(arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }
          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function(node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function(def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }
  return nullIfDocIsEmpty(visit(doc, {
    FragmentSpread: { enter },
    FragmentDefinition: { enter }
  }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function(selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === "FragmentSpread") {
      allFragments.push(selection);
    }
  });
  return allFragments;
}
function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document;
  }
  var modifiedDoc = visit(document, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document);
  if (modifiedDoc) {
    modifiedDoc = visit(modifiedDoc, {
      FragmentDefinition: {
        enter: function(node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
              return isField(selection) && selection.name.value === "__typename";
            });
            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }
  return modifiedDoc;
}
var TYPENAME_FIELD, addTypenameToDocument, connectionRemoveConfig;
var init_transform = __esm({
  "node_modules/@apollo/client/utilities/graphql/transform.js"() {
    init_modules();
    init_globals();
    init_graphql();
    init_getFromAST();
    init_filterInPlace();
    init_storeUtils();
    init_fragments();
    TYPENAME_FIELD = {
      kind: "Field",
      name: {
        kind: "Name",
        value: "__typename"
      }
    };
    addTypenameToDocument = Object.assign(function(doc) {
      return visit(doc, {
        SelectionSet: {
          enter: function(node, _key, parent) {
            if (parent && parent.kind === "OperationDefinition") {
              return;
            }
            var selections = node.selections;
            if (!selections) {
              return;
            }
            var skip = selections.some(function(selection) {
              return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
            });
            if (skip) {
              return;
            }
            var field = parent;
            if (isField(field) && field.directives && field.directives.some(function(d) {
              return d.name.value === "export";
            })) {
              return;
            }
            return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
          }
        }
      });
    }, {
      added: function(field) {
        return field === TYPENAME_FIELD;
      }
    });
    connectionRemoveConfig = {
      test: function(directive) {
        var willRemove = directive.name.value === "connection";
        if (willRemove) {
          if (!directive.arguments || !directive.arguments.some(function(arg) {
            return arg.name.value === "key";
          })) {
            __DEV__ && invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
          }
        }
        return willRemove;
      }
    };
  }
});

// node_modules/@apollo/client/utilities/common/mergeDeep.js
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var hasOwnProperty, defaultReconciler, DeepMerger;
var init_mergeDeep = __esm({
  "node_modules/@apollo/client/utilities/common/mergeDeep.js"() {
    init_modules();
    init_objects();
    hasOwnProperty = Object.prototype.hasOwnProperty;
    defaultReconciler = function(target, source, property) {
      return this.merge(target[property], source[property]);
    };
    DeepMerger = function() {
      function DeepMerger2(reconciler) {
        if (reconciler === void 0) {
          reconciler = defaultReconciler;
        }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = /* @__PURE__ */ new Set();
      }
      DeepMerger2.prototype.merge = function(target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
          Object.keys(source).forEach(function(sourceKey) {
            if (hasOwnProperty.call(target, sourceKey)) {
              var targetValue = target[sourceKey];
              if (source[sourceKey] !== targetValue) {
                var result2 = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
                if (result2 !== targetValue) {
                  target = _this.shallowCopyForMerge(target);
                  target[sourceKey] = result2;
                }
              }
            } else {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = source[sourceKey];
            }
          });
          return target;
        }
        return source;
      };
      DeepMerger2.prototype.shallowCopyForMerge = function(value) {
        if (isNonNullObject(value)) {
          if (!this.pastCopies.has(value)) {
            if (Array.isArray(value)) {
              value = value.slice(0);
            } else {
              value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
          }
        }
        return value;
      };
      return DeepMerger2;
    }();
  }
});

// node_modules/zen-observable-ts/module.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function getMethod(obj, key2) {
  var value = obj[key2];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x) {
  return x instanceof Observable;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m)
          m.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m)
          m.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m)
          m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var hasSymbols, hasSymbol, getSymbol, SymbolIterator, SymbolObservable, SymbolSpecies, Subscription, SubscriptionObserver, Observable;
var init_module = __esm({
  "node_modules/zen-observable-ts/module.js"() {
    hasSymbols = function() {
      return typeof Symbol === "function";
    };
    hasSymbol = function(name) {
      return hasSymbols() && Boolean(Symbol[name]);
    };
    getSymbol = function(name) {
      return hasSymbol(name) ? Symbol[name] : "@@" + name;
    };
    if (hasSymbols() && !hasSymbol("observable")) {
      Symbol.observable = Symbol("observable");
    }
    SymbolIterator = getSymbol("iterator");
    SymbolObservable = getSymbol("observable");
    SymbolSpecies = getSymbol("species");
    Subscription = /* @__PURE__ */ function() {
      function Subscription2(observer, subscriber) {
        this._cleanup = void 0;
        this._observer = observer;
        this._queue = void 0;
        this._state = "initializing";
        var subscriptionObserver = new SubscriptionObserver(this);
        try {
          this._cleanup = subscriber.call(void 0, subscriptionObserver);
        } catch (e) {
          subscriptionObserver.error(e);
        }
        if (this._state === "initializing")
          this._state = "ready";
      }
      var _proto = Subscription2.prototype;
      _proto.unsubscribe = function unsubscribe() {
        if (this._state !== "closed") {
          closeSubscription(this);
          cleanupSubscription(this);
        }
      };
      _createClass(Subscription2, [{
        key: "closed",
        get: function() {
          return this._state === "closed";
        }
      }]);
      return Subscription2;
    }();
    SubscriptionObserver = /* @__PURE__ */ function() {
      function SubscriptionObserver2(subscription) {
        this._subscription = subscription;
      }
      var _proto2 = SubscriptionObserver2.prototype;
      _proto2.next = function next(value) {
        onNotify(this._subscription, "next", value);
      };
      _proto2.error = function error2(value) {
        onNotify(this._subscription, "error", value);
      };
      _proto2.complete = function complete() {
        onNotify(this._subscription, "complete");
      };
      _createClass(SubscriptionObserver2, [{
        key: "closed",
        get: function() {
          return this._subscription._state === "closed";
        }
      }]);
      return SubscriptionObserver2;
    }();
    Observable = /* @__PURE__ */ function() {
      function Observable2(subscriber) {
        if (!(this instanceof Observable2))
          throw new TypeError("Observable cannot be called as a function");
        if (typeof subscriber !== "function")
          throw new TypeError("Observable initializer must be a function");
        this._subscriber = subscriber;
      }
      var _proto3 = Observable2.prototype;
      _proto3.subscribe = function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          observer = {
            next: observer,
            error: arguments[1],
            complete: arguments[2]
          };
        }
        return new Subscription(observer, this._subscriber);
      };
      _proto3.forEach = function forEach2(fn) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (typeof fn !== "function") {
            reject(new TypeError(fn + " is not a function"));
            return;
          }
          function done() {
            subscription.unsubscribe();
            resolve();
          }
          var subscription = _this.subscribe({
            next: function(value) {
              try {
                fn(value, done);
              } catch (e) {
                reject(e);
                subscription.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
        });
      };
      _proto3.map = function map(fn) {
        var _this2 = this;
        if (typeof fn !== "function")
          throw new TypeError(fn + " is not a function");
        var C = getSpecies(this);
        return new C(function(observer) {
          return _this2.subscribe({
            next: function(value) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
              observer.next(value);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              observer.complete();
            }
          });
        });
      };
      _proto3.filter = function filter(fn) {
        var _this3 = this;
        if (typeof fn !== "function")
          throw new TypeError(fn + " is not a function");
        var C = getSpecies(this);
        return new C(function(observer) {
          return _this3.subscribe({
            next: function(value) {
              try {
                if (!fn(value))
                  return;
              } catch (e) {
                return observer.error(e);
              }
              observer.next(value);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              observer.complete();
            }
          });
        });
      };
      _proto3.reduce = function reduce(fn) {
        var _this4 = this;
        if (typeof fn !== "function")
          throw new TypeError(fn + " is not a function");
        var C = getSpecies(this);
        var hasSeed = arguments.length > 1;
        var hasValue = false;
        var seed = arguments[1];
        var acc = seed;
        return new C(function(observer) {
          return _this4.subscribe({
            next: function(value) {
              var first = !hasValue;
              hasValue = true;
              if (!first || hasSeed) {
                try {
                  acc = fn(acc, value);
                } catch (e) {
                  return observer.error(e);
                }
              } else {
                acc = value;
              }
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              if (!hasValue && !hasSeed)
                return observer.error(new TypeError("Cannot reduce an empty sequence"));
              observer.next(acc);
              observer.complete();
            }
          });
        });
      };
      _proto3.concat = function concat() {
        var _this5 = this;
        for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }
        var C = getSpecies(this);
        return new C(function(observer) {
          var subscription;
          var index4 = 0;
          function startNext(next) {
            subscription = next.subscribe({
              next: function(v) {
                observer.next(v);
              },
              error: function(e) {
                observer.error(e);
              },
              complete: function() {
                if (index4 === sources.length) {
                  subscription = void 0;
                  observer.complete();
                } else {
                  startNext(C.from(sources[index4++]));
                }
              }
            });
          }
          startNext(_this5);
          return function() {
            if (subscription) {
              subscription.unsubscribe();
              subscription = void 0;
            }
          };
        });
      };
      _proto3.flatMap = function flatMap(fn) {
        var _this6 = this;
        if (typeof fn !== "function")
          throw new TypeError(fn + " is not a function");
        var C = getSpecies(this);
        return new C(function(observer) {
          var subscriptions = [];
          var outer = _this6.subscribe({
            next: function(value) {
              if (fn) {
                try {
                  value = fn(value);
                } catch (e) {
                  return observer.error(e);
                }
              }
              var inner = C.from(value).subscribe({
                next: function(value2) {
                  observer.next(value2);
                },
                error: function(e) {
                  observer.error(e);
                },
                complete: function() {
                  var i = subscriptions.indexOf(inner);
                  if (i >= 0)
                    subscriptions.splice(i, 1);
                  completeIfDone();
                }
              });
              subscriptions.push(inner);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              completeIfDone();
            }
          });
          function completeIfDone() {
            if (outer.closed && subscriptions.length === 0)
              observer.complete();
          }
          return function() {
            subscriptions.forEach(function(s2) {
              return s2.unsubscribe();
            });
            outer.unsubscribe();
          };
        });
      };
      _proto3[SymbolObservable] = function() {
        return this;
      };
      Observable2.from = function from(x) {
        var C = typeof this === "function" ? this : Observable2;
        if (x == null)
          throw new TypeError(x + " is not an object");
        var method = getMethod(x, SymbolObservable);
        if (method) {
          var observable = method.call(x);
          if (Object(observable) !== observable)
            throw new TypeError(observable + " is not an object");
          if (isObservable(observable) && observable.constructor === C)
            return observable;
          return new C(function(observer) {
            return observable.subscribe(observer);
          });
        }
        if (hasSymbol("iterator")) {
          method = getMethod(x, SymbolIterator);
          if (method) {
            return new C(function(observer) {
              enqueue(function() {
                if (observer.closed)
                  return;
                for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
                  var item = _step.value;
                  observer.next(item);
                  if (observer.closed)
                    return;
                }
                observer.complete();
              });
            });
          }
        }
        if (Array.isArray(x)) {
          return new C(function(observer) {
            enqueue(function() {
              if (observer.closed)
                return;
              for (var i = 0; i < x.length; ++i) {
                observer.next(x[i]);
                if (observer.closed)
                  return;
              }
              observer.complete();
            });
          });
        }
        throw new TypeError(x + " is not observable");
      };
      Observable2.of = function of() {
        for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          items[_key2] = arguments[_key2];
        }
        var C = typeof this === "function" ? this : Observable2;
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var i = 0; i < items.length; ++i) {
              observer.next(items[i]);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      };
      _createClass(Observable2, null, [{
        key: SymbolSpecies,
        get: function() {
          return this;
        }
      }]);
      return Observable2;
    }();
    if (hasSymbols()) {
      Object.defineProperty(Observable, Symbol("extensions"), {
        value: {
          symbol: SymbolObservable,
          hostReportError
        },
        configurable: true
      });
    }
  }
});

// node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root2) {
  var result2;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result2 = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result2 = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result2 = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result2;
      } catch (err) {
      }
    }
  } else {
    result2 = "@@observable";
  }
  return result2;
}
var init_ponyfill = __esm({
  "node_modules/symbol-observable/es/ponyfill.js"() {
  }
});

// node_modules/symbol-observable/es/index.js
var root, result;
var init_es = __esm({
  "node_modules/symbol-observable/es/index.js"() {
    init_ponyfill();
    if (typeof self !== "undefined") {
      root = self;
    } else if (typeof window !== "undefined") {
      root = window;
    } else if (typeof global !== "undefined") {
      root = global;
    } else if (typeof module !== "undefined") {
      root = module;
    } else {
      root = Function("return this")();
    }
    result = symbolObservablePonyfill(root);
  }
});

// node_modules/@apollo/client/utilities/observables/Observable.js
var prototype, fakeObsSymbol;
var init_Observable = __esm({
  "node_modules/@apollo/client/utilities/observables/Observable.js"() {
    init_module();
    init_es();
    prototype = Observable.prototype;
    fakeObsSymbol = "@@observable";
    if (!prototype[fakeObsSymbol]) {
      prototype[fakeObsSymbol] = function() {
        return this;
      };
    }
  }
});

// node_modules/@apollo/client/utilities/common/cloneDeep.js
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key2) {
        copy_2[key2] = cloneDeepHelper(val[key2], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
var toString;
var init_cloneDeep = __esm({
  "node_modules/@apollo/client/utilities/common/cloneDeep.js"() {
    toString = Object.prototype.toString;
  }
});

// node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }
  return obj;
}
var init_maybeDeepFreeze = __esm({
  "node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js"() {
    init_globals();
    init_objects();
  }
});

// node_modules/@apollo/client/utilities/observables/iteration.js
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
var init_iteration = __esm({
  "node_modules/@apollo/client/utilities/observables/iteration.js"() {
  }
});

// node_modules/@apollo/client/utilities/observables/asyncMap.js
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error2 = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result2) {
            --activeCallbackCount;
            next && next.call(observer, result2);
            if (completed) {
              handler.complete();
            }
          }, function(error3) {
            --activeCallbackCount;
            throw error3;
          }).catch(function(caught) {
            error2 && error2.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error2),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}
var init_asyncMap = __esm({
  "node_modules/@apollo/client/utilities/observables/asyncMap.js"() {
    init_Observable();
  }
});

// node_modules/@apollo/client/utilities/common/canUse.js
var canUseWeakMap, canUseWeakSet, canUseSymbol, canUseDOM, usingJSDOM;
var init_canUse = __esm({
  "node_modules/@apollo/client/utilities/common/canUse.js"() {
    init_globals();
    canUseWeakMap = typeof WeakMap === "function" && maybe(function() {
      return navigator.product;
    }) !== "ReactNative";
    canUseWeakSet = typeof WeakSet === "function";
    canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
    canUseDOM = typeof maybe(function() {
      return window.document.createElement;
    }) === "function";
    usingJSDOM = maybe(function() {
      return navigator.userAgent.indexOf("jsdom") >= 0;
    }) || false;
  }
});

// node_modules/@apollo/client/utilities/observables/subclassing.js
function fixObservableSubclass(subclass) {
  function set(key2) {
    Object.defineProperty(subclass, key2, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}
var init_subclassing = __esm({
  "node_modules/@apollo/client/utilities/observables/subclassing.js"() {
    init_Observable();
    init_canUse();
  }
});

// node_modules/@apollo/client/utilities/observables/Concast.js
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast;
var init_Concast = __esm({
  "node_modules/@apollo/client/utilities/observables/Concast.js"() {
    init_modules();
    init_Observable();
    init_iteration();
    init_subclassing();
    Concast = function(_super) {
      __extends(Concast2, _super);
      function Concast2(sources) {
        var _this = _super.call(this, function(observer) {
          _this.addObserver(observer);
          return function() {
            return _this.removeObserver(observer);
          };
        }) || this;
        _this.observers = /* @__PURE__ */ new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function(resolve, reject) {
          _this.resolve = resolve;
          _this.reject = reject;
        });
        _this.handlers = {
          next: function(result2) {
            if (_this.sub !== null) {
              _this.latest = ["next", result2];
              iterateObserversSafely(_this.observers, "next", result2);
            }
          },
          error: function(error2) {
            var sub = _this.sub;
            if (sub !== null) {
              if (sub)
                setTimeout(function() {
                  return sub.unsubscribe();
                });
              _this.sub = null;
              _this.latest = ["error", error2];
              _this.reject(error2);
              iterateObserversSafely(_this.observers, "error", error2);
            }
          },
          complete: function() {
            var sub = _this.sub;
            if (sub !== null) {
              var value = _this.sources.shift();
              if (!value) {
                if (sub)
                  setTimeout(function() {
                    return sub.unsubscribe();
                  });
                _this.sub = null;
                if (_this.latest && _this.latest[0] === "next") {
                  _this.resolve(_this.latest[1]);
                } else {
                  _this.resolve();
                }
                iterateObserversSafely(_this.observers, "complete");
              } else if (isPromiseLike(value)) {
                value.then(function(obs) {
                  return _this.sub = obs.subscribe(_this.handlers);
                });
              } else {
                _this.sub = value.subscribe(_this.handlers);
              }
            }
          }
        };
        _this.cancel = function(reason) {
          _this.reject(reason);
          _this.sources = [];
          _this.handlers.complete();
        };
        _this.promise.catch(function(_) {
        });
        if (typeof sources === "function") {
          sources = [new Observable(sources)];
        }
        if (isPromiseLike(sources)) {
          sources.then(function(iterable) {
            return _this.start(iterable);
          }, _this.handlers.error);
        } else {
          _this.start(sources);
        }
        return _this;
      }
      Concast2.prototype.start = function(sources) {
        if (this.sub !== void 0)
          return;
        this.sources = Array.from(sources);
        this.handlers.complete();
      };
      Concast2.prototype.deliverLastMessage = function(observer) {
        if (this.latest) {
          var nextOrError = this.latest[0];
          var method = observer[nextOrError];
          if (method) {
            method.call(observer, this.latest[1]);
          }
          if (this.sub === null && nextOrError === "next" && observer.complete) {
            observer.complete();
          }
        }
      };
      Concast2.prototype.addObserver = function(observer) {
        if (!this.observers.has(observer)) {
          this.deliverLastMessage(observer);
          this.observers.add(observer);
          ++this.addCount;
        }
      };
      Concast2.prototype.removeObserver = function(observer, quietly) {
        if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
          this.handlers.complete();
        }
      };
      Concast2.prototype.cleanup = function(callback) {
        var _this = this;
        var called = false;
        var once2 = function() {
          if (!called) {
            called = true;
            _this.observers.delete(observer);
            callback();
          }
        };
        var observer = {
          next: once2,
          error: once2,
          complete: once2
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
      };
      return Concast2;
    }(Observable);
    fixObservableSubclass(Concast);
  }
});

// node_modules/@apollo/client/utilities/common/arrays.js
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
var init_arrays = __esm({
  "node_modules/@apollo/client/utilities/common/arrays.js"() {
  }
});

// node_modules/@apollo/client/utilities/common/errorHandling.js
function graphQLResultHasError(result2) {
  return result2.errors && result2.errors.length > 0 || false;
}
var init_errorHandling = __esm({
  "node_modules/@apollo/client/utilities/common/errorHandling.js"() {
  }
});

// node_modules/@apollo/client/utilities/common/compact.js
function compact2() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result2 = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key2) {
      var value = obj[key2];
      if (value !== void 0) {
        result2[key2] = value;
      }
    });
  });
  return result2;
}
var init_compact = __esm({
  "node_modules/@apollo/client/utilities/common/compact.js"() {
  }
});

// node_modules/@apollo/client/utilities/common/makeUniqueId.js
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
var prefixCounts;
var init_makeUniqueId = __esm({
  "node_modules/@apollo/client/utilities/common/makeUniqueId.js"() {
    prefixCounts = /* @__PURE__ */ new Map();
  }
});

// node_modules/@apollo/client/utilities/common/stringifyForDisplay.js
function stringifyForDisplay(value) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key2, value2) {
    return value2 === void 0 ? undefId : value2;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}
var init_stringifyForDisplay = __esm({
  "node_modules/@apollo/client/utilities/common/stringifyForDisplay.js"() {
    init_makeUniqueId();
  }
});

// node_modules/@apollo/client/utilities/common/mergeOptions.js
function mergeOptions(defaults, options) {
  return compact2(defaults, options, options.variables && {
    variables: __assign(__assign({}, defaults && defaults.variables), options.variables)
  });
}
var init_mergeOptions = __esm({
  "node_modules/@apollo/client/utilities/common/mergeOptions.js"() {
    init_modules();
    init_compact();
  }
});

// node_modules/@apollo/client/utilities/types/IsStrictlyAny.js
var init_IsStrictlyAny = __esm({
  "node_modules/@apollo/client/utilities/types/IsStrictlyAny.js"() {
  }
});

// node_modules/@apollo/client/utilities/index.js
var init_utilities = __esm({
  "node_modules/@apollo/client/utilities/index.js"() {
    init_globals();
    init_directives();
    init_fragments();
    init_getFromAST();
    init_storeUtils();
    init_transform();
    init_Observable();
    init_mergeDeep();
    init_cloneDeep();
    init_maybeDeepFreeze();
    init_iteration();
    init_asyncMap();
    init_Concast();
    init_subclassing();
    init_arrays();
    init_objects();
    init_errorHandling();
    init_canUse();
    init_compact();
    init_makeUniqueId();
    init_stringifyForDisplay();
    init_mergeOptions();
    init_IsStrictlyAny();
  }
});

// node_modules/@apollo/client/link/utils/fromError.js
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var init_fromError = __esm({
  "node_modules/@apollo/client/link/utils/fromError.js"() {
    init_utilities();
  }
});

// node_modules/@apollo/client/link/utils/throwServerError.js
var throwServerError;
var init_throwServerError = __esm({
  "node_modules/@apollo/client/link/utils/throwServerError.js"() {
    throwServerError = function(response, result2, message) {
      var error2 = new Error(message);
      error2.name = "ServerError";
      error2.response = response;
      error2.statusCode = response.status;
      error2.result = result2;
      throw error2;
    };
  }
});

// node_modules/@apollo/client/link/utils/validateOperation.js
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a5 = Object.keys(operation); _i < _a5.length; _i++) {
    var key2 = _a5[_i];
    if (OPERATION_FIELDS.indexOf(key2) < 0) {
      throw __DEV__ ? new InvariantError("illegal argument: ".concat(key2)) : new InvariantError(24);
    }
  }
  return operation;
}
var init_validateOperation = __esm({
  "node_modules/@apollo/client/link/utils/validateOperation.js"() {
    init_globals();
  }
});

// node_modules/@apollo/client/link/utils/createOperation.js
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext2 = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext2 = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext2
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext2
  });
  return operation;
}
var init_createOperation = __esm({
  "node_modules/@apollo/client/link/utils/createOperation.js"() {
    init_modules();
  }
});

// node_modules/@apollo/client/link/utils/transformOperation.js
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
var init_transformOperation = __esm({
  "node_modules/@apollo/client/link/utils/transformOperation.js"() {
    init_utilities();
  }
});

// node_modules/@apollo/client/link/utils/index.js
var init_utils = __esm({
  "node_modules/@apollo/client/link/utils/index.js"() {
    init_globals();
    init_fromError();
    init_throwServerError();
    init_validateOperation();
    init_createOperation();
    init_transformOperation();
  }
});

// node_modules/@apollo/client/link/core/ApolloLink.js
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var LinkError, ApolloLink;
var init_ApolloLink = __esm({
  "node_modules/@apollo/client/link/core/ApolloLink.js"() {
    init_modules();
    init_globals();
    init_utilities();
    init_utils();
    LinkError = function(_super) {
      __extends(LinkError2, _super);
      function LinkError2(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
      }
      return LinkError2;
    }(Error);
    ApolloLink = function() {
      function ApolloLink2(request) {
        if (request)
          this.request = request;
      }
      ApolloLink2.empty = function() {
        return new ApolloLink2(function() {
          return Observable.of();
        });
      };
      ApolloLink2.from = function(links) {
        if (links.length === 0)
          return ApolloLink2.empty();
        return links.map(toLink).reduce(function(x, y) {
          return x.concat(y);
        });
      };
      ApolloLink2.split = function(test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink2(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
          return new ApolloLink2(function(operation) {
            return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
          });
        } else {
          return new ApolloLink2(function(operation, forward) {
            return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
          });
        }
      };
      ApolloLink2.execute = function(link, operation) {
        return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
      };
      ApolloLink2.concat = function(first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
          __DEV__ && invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
          return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
          return new ApolloLink2(function(operation) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op) || Observable.of();
            }) || Observable.of();
          });
        } else {
          return new ApolloLink2(function(operation, forward) {
            return firstLink.request(operation, function(op) {
              return nextLink.request(op, forward) || Observable.of();
            }) || Observable.of();
          });
        }
      };
      ApolloLink2.prototype.split = function(test, left, right) {
        return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
      };
      ApolloLink2.prototype.concat = function(next) {
        return ApolloLink2.concat(this, next);
      };
      ApolloLink2.prototype.request = function(operation, forward) {
        throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(19);
      };
      ApolloLink2.prototype.onError = function(error2, observer) {
        if (observer && observer.error) {
          observer.error(error2);
          return false;
        }
        throw error2;
      };
      ApolloLink2.prototype.setOnError = function(fn) {
        this.onError = fn;
        return this;
      };
      return ApolloLink2;
    }();
  }
});

// node_modules/@apollo/client/link/core/execute.js
var execute;
var init_execute = __esm({
  "node_modules/@apollo/client/link/core/execute.js"() {
    init_ApolloLink();
    execute = ApolloLink.execute;
  }
});

// node_modules/@apollo/client/link/core/types.js
var init_types = __esm({
  "node_modules/@apollo/client/link/core/types.js"() {
  }
});

// node_modules/@apollo/client/link/core/index.js
var init_core = __esm({
  "node_modules/@apollo/client/link/core/index.js"() {
    init_globals();
    init_execute();
    init_ApolloLink();
    init_types();
  }
});

// node_modules/@apollo/client/version.js
var version;
var init_version = __esm({
  "node_modules/@apollo/client/version.js"() {
    version = "3.6.9";
  }
});

// node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }).then(function(result2) {
      if (response.status >= 300) {
        throwServerError(response, result2, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result2) && !hasOwnProperty2.call(result2, "data") && !hasOwnProperty2.call(result2, "errors")) {
        throwServerError(response, result2, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result2;
    });
  };
}
var hasOwnProperty2;
var init_parseAndCheckHttpResponse = __esm({
  "node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js"() {
    init_utils();
    hasOwnProperty2 = Object.prototype.hasOwnProperty;
  }
});

// node_modules/@apollo/client/link/http/serializeFetchParameter.js
var serializeFetchParameter;
var init_serializeFetchParameter = __esm({
  "node_modules/@apollo/client/link/http/serializeFetchParameter.js"() {
    init_globals();
    serializeFetchParameter = function(p, label) {
      var serialized;
      try {
        serialized = JSON.stringify(p);
      } catch (e) {
        var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new InvariantError(21);
        parseError.parseError = e;
        throw parseError;
      }
      return serialized;
    };
  }
});

// node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), headersToLowerCase(config.headers)) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query2 = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query2, print);
  return {
    options,
    body
  };
}
function headersToLowerCase(headers) {
  if (headers) {
    var normalized_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalized_1[name.toLowerCase()] = headers[name];
    });
    return normalized_1;
  }
  return headers;
}
var defaultHttpOptions, defaultHeaders, defaultOptions, fallbackHttpConfig, defaultPrinter;
var init_selectHttpOptionsAndBody = __esm({
  "node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js"() {
    init_modules();
    init_graphql();
    defaultHttpOptions = {
      includeQuery: true,
      includeExtensions: false
    };
    defaultHeaders = {
      accept: "*/*",
      "content-type": "application/json"
    };
    defaultOptions = {
      method: "POST"
    };
    fallbackHttpConfig = {
      http: defaultHttpOptions,
      headers: defaultHeaders,
      options: defaultOptions
    };
    defaultPrinter = function(ast, printer) {
      return printer(ast);
    };
  }
});

// node_modules/@apollo/client/link/http/checkFetcher.js
var checkFetcher;
var init_checkFetcher = __esm({
  "node_modules/@apollo/client/link/http/checkFetcher.js"() {
    init_globals();
    checkFetcher = function(fetcher) {
      if (!fetcher && typeof fetch === "undefined") {
        throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(20);
      }
    };
  }
});

// node_modules/@apollo/client/link/http/createSignalIfSupported.js
var createSignalIfSupported;
var init_createSignalIfSupported = __esm({
  "node_modules/@apollo/client/link/http/createSignalIfSupported.js"() {
    createSignalIfSupported = function() {
      if (typeof AbortController === "undefined")
        return { controller: false, signal: false };
      var controller = new AbortController();
      var signal = controller.signal;
      return { controller, signal };
    };
  }
});

// node_modules/@apollo/client/link/http/selectURI.js
var selectURI;
var init_selectURI = __esm({
  "node_modules/@apollo/client/link/http/selectURI.js"() {
    selectURI = function(operation, fallbackURI) {
      var context = operation.getContext();
      var contextURI = context.uri;
      if (contextURI) {
        return contextURI;
      } else if (typeof fallbackURI === "function") {
        return fallbackURI(operation);
      } else {
        return fallbackURI || "/graphql";
      }
    };
  }
});

// node_modules/@apollo/client/link/http/rewriteURIForGET.js
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key2, value) {
    queryParams.push("".concat(key2, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var init_rewriteURIForGET = __esm({
  "node_modules/@apollo/client/link/http/rewriteURIForGET.js"() {
    init_serializeFetchParameter();
  }
});

// node_modules/@apollo/client/link/http/createHttpLink.js
var backupFetch, createHttpLink;
var init_createHttpLink = __esm({
  "node_modules/@apollo/client/link/http/createHttpLink.js"() {
    init_modules();
    init_globals();
    init_graphql();
    init_core();
    init_utilities();
    init_serializeFetchParameter();
    init_selectURI();
    init_parseAndCheckHttpResponse();
    init_checkFetcher();
    init_selectHttpOptionsAndBody();
    init_createSignalIfSupported();
    init_rewriteURIForGET();
    init_utils();
    init_utilities();
    backupFetch = maybe(function() {
      return fetch;
    });
    createHttpLink = function(linkOptions) {
      if (linkOptions === void 0) {
        linkOptions = {};
      }
      var _a5 = linkOptions.uri, uri = _a5 === void 0 ? "/graphql" : _a5, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
      if (__DEV__) {
        checkFetcher(preferredFetch || backupFetch);
      }
      var linkConfig = {
        http: { includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers
      };
      return new ApolloLink(function(operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
          var _a6 = context.clientAwareness, name_1 = _a6.name, version2 = _a6.version;
          if (name_1) {
            clientAwarenessHeaders["apollographql-client-name"] = name_1;
          }
          if (version2) {
            clientAwarenessHeaders["apollographql-client-version"] = version2;
          }
        }
        var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
          http: context.http,
          options: context.fetchOptions,
          credentials: context.credentials,
          headers: contextHeaders
        };
        var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
        if (body.variables && !includeUnusedVariables) {
          var unusedNames_1 = new Set(Object.keys(body.variables));
          visit(operation.query, {
            Variable: function(node, _key, parent) {
              if (parent && parent.kind !== "VariableDefinition") {
                unusedNames_1.delete(node.name.value);
              }
            }
          });
          if (unusedNames_1.size) {
            body.variables = __assign({}, body.variables);
            unusedNames_1.forEach(function(name) {
              delete body.variables[name];
            });
          }
        }
        var controller;
        if (!options.signal) {
          var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
          controller = _controller;
          if (controller)
            options.signal = signal;
        }
        var definitionIsMutation = function(d) {
          return d.kind === "OperationDefinition" && d.operation === "mutation";
        };
        if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
          options.method = "GET";
        }
        if (options.method === "GET") {
          var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
          if (parseError) {
            return fromError(parseError);
          }
          chosenURI = newURI;
        } else {
          try {
            options.body = serializeFetchParameter(body, "Payload");
          } catch (parseError2) {
            return fromError(parseError2);
          }
        }
        return new Observable(function(observer) {
          var currentFetch = preferredFetch || maybe(function() {
            return fetch;
          }) || backupFetch;
          currentFetch(chosenURI, options).then(function(response) {
            operation.setContext({ response });
            return response;
          }).then(parseAndCheckHttpResponse(operation)).then(function(result2) {
            observer.next(result2);
            observer.complete();
            return result2;
          }).catch(function(err) {
            if (err.name === "AbortError")
              return;
            if (err.result && err.result.errors && err.result.data) {
              observer.next(err.result);
            }
            observer.error(err);
          });
          return function() {
            if (controller)
              controller.abort();
          };
        });
      });
    };
  }
});

// node_modules/@apollo/client/link/http/HttpLink.js
var HttpLink;
var init_HttpLink = __esm({
  "node_modules/@apollo/client/link/http/HttpLink.js"() {
    init_modules();
    init_core();
    init_createHttpLink();
    HttpLink = function(_super) {
      __extends(HttpLink2, _super);
      function HttpLink2(options) {
        if (options === void 0) {
          options = {};
        }
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
      }
      return HttpLink2;
    }(ApolloLink);
  }
});

// node_modules/@apollo/client/link/http/index.js
var init_http = __esm({
  "node_modules/@apollo/client/link/http/index.js"() {
    init_globals();
    init_HttpLink();
  }
});

// node_modules/@wry/equality/lib/equality.esm.js
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
function check(a, b) {
  if (a === b) {
    return true;
  }
  var aTag = toString2.call(a);
  var bTag = toString2.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a, b))
        return true;
      var aKeys = definedKeys(a);
      var bKeys = definedKeys(b);
      var keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (var k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty3.call(b, aKeys[k])) {
          return false;
        }
      }
      for (var k = 0; k < keyCount; ++k) {
        var key2 = aKeys[k];
        if (!check(a[key2], b[key2])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a)
        return b !== b;
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == "".concat(b);
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size)
        return false;
      if (previouslyCompared(a, b))
        return true;
      var aIterator = a.entries();
      var isMap = aTag === "[object Map]";
      while (true) {
        var info = aIterator.next();
        if (info.done)
          break;
        var _a5 = info.value, aKey = _a5[0], aValue = _a5[1];
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case "[object DataView]": {
      var len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      var aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key2) {
  return this[key2] !== void 0;
}
function endsWith(full, suffix) {
  var fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  var bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}
var _a2, toString2, hasOwnProperty3, fnToStr, previousComparisons, nativeCodeSuffix;
var init_equality_esm = __esm({
  "node_modules/@wry/equality/lib/equality.esm.js"() {
    _a2 = Object.prototype;
    toString2 = _a2.toString;
    hasOwnProperty3 = _a2.hasOwnProperty;
    fnToStr = Function.prototype.toString;
    previousComparisons = /* @__PURE__ */ new Map();
    nativeCodeSuffix = "{ [native code] }";
  }
});

// node_modules/@wry/trie/lib/trie.esm.js
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}
var defaultMakeData, _a3, forEach, slice, Trie;
var init_trie_esm = __esm({
  "node_modules/@wry/trie/lib/trie.esm.js"() {
    defaultMakeData = function() {
      return /* @__PURE__ */ Object.create(null);
    };
    _a3 = Array.prototype;
    forEach = _a3.forEach;
    slice = _a3.slice;
    Trie = function() {
      function Trie2(weakness, makeData) {
        if (weakness === void 0) {
          weakness = true;
        }
        if (makeData === void 0) {
          makeData = defaultMakeData;
        }
        this.weakness = weakness;
        this.makeData = makeData;
      }
      Trie2.prototype.lookup = function() {
        var array2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          array2[_i] = arguments[_i];
        }
        return this.lookupArray(array2);
      };
      Trie2.prototype.lookupArray = function(array2) {
        var node = this;
        forEach.call(array2, function(key2) {
          return node = node.getChildTrie(key2);
        });
        return node.data || (node.data = this.makeData(slice.call(array2)));
      };
      Trie2.prototype.getChildTrie = function(key2) {
        var map = this.weakness && isObjRef(key2) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
        var child = map.get(key2);
        if (!child)
          map.set(key2, child = new Trie2(this.weakness, this.makeData));
        return child;
      };
      return Trie2;
    }();
  }
});

// node_modules/@wry/context/lib/context.esm.js
var currentContext, MISSING_VALUE, idCounter, makeSlotClass, globalKey, host, Slot, bind, noContext;
var init_context_esm = __esm({
  "node_modules/@wry/context/lib/context.esm.js"() {
    currentContext = null;
    MISSING_VALUE = {};
    idCounter = 1;
    makeSlotClass = function() {
      return function() {
        function Slot2() {
          this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2)
          ].join(":");
        }
        Slot2.prototype.hasValue = function() {
          for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            if (this.id in context_1.slots) {
              var value = context_1.slots[this.id];
              if (value === MISSING_VALUE)
                break;
              if (context_1 !== currentContext) {
                currentContext.slots[this.id] = value;
              }
              return true;
            }
          }
          if (currentContext) {
            currentContext.slots[this.id] = MISSING_VALUE;
          }
          return false;
        };
        Slot2.prototype.getValue = function() {
          if (this.hasValue()) {
            return currentContext.slots[this.id];
          }
        };
        Slot2.prototype.withValue = function(value, callback, args, thisArg) {
          var _a5;
          var slots = (_a5 = {
            __proto__: null
          }, _a5[this.id] = value, _a5);
          var parent = currentContext;
          currentContext = { parent, slots };
          try {
            return callback.apply(thisArg, args);
          } finally {
            currentContext = parent;
          }
        };
        Slot2.bind = function(callback) {
          var context = currentContext;
          return function() {
            var saved = currentContext;
            try {
              currentContext = context;
              return callback.apply(this, arguments);
            } finally {
              currentContext = saved;
            }
          };
        };
        Slot2.noContext = function(callback, args, thisArg) {
          if (currentContext) {
            var saved = currentContext;
            try {
              currentContext = null;
              return callback.apply(thisArg, args);
            } finally {
              currentContext = saved;
            }
          } else {
            return callback.apply(thisArg, args);
          }
        };
        return Slot2;
      }();
    };
    globalKey = "@wry/context:Slot";
    host = Array;
    Slot = host[globalKey] || function() {
      var Slot2 = makeSlotClass();
      try {
        Object.defineProperty(host, globalKey, {
          value: host[globalKey] = Slot2,
          enumerable: false,
          writable: false,
          configurable: false
        });
      } finally {
        return Slot2;
      }
    }();
    bind = Slot.bind;
    noContext = Slot.noContext;
  }
});

// node_modules/optimism/lib/bundle.esm.js
function defaultDispose() {
}
function maybeUnsubscribe(entryOrDep) {
  var unsubscribe = entryOrDep.unsubscribe;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  var len = a.length;
  return len > 0 && len === b.length && a[len - 1] === b[len - 1];
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
function rememberParent(child) {
  var parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
  } catch (e) {
    entry.value[1] = e;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  var parentCount = child.parents.size;
  if (parentCount) {
    var parents = toArray(child.parents);
    for (var i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  var parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  var dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach(function(_value, child) {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}
function dep(options) {
  var depsByKey = /* @__PURE__ */ new Map();
  var subscribe2 = options && options.subscribe;
  function depend(key2) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
      var dep_1 = depsByKey.get(key2);
      if (!dep_1) {
        depsByKey.set(key2, dep_1 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep_1);
      if (typeof subscribe2 === "function") {
        maybeUnsubscribe(dep_1);
        dep_1.unsubscribe = subscribe2(key2);
      }
    }
  }
  depend.dirty = function dirty(key2, entryMethodName) {
    var dep2 = depsByKey.get(key2);
    if (dep2) {
      var m_1 = entryMethodName && hasOwnProperty4.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      toArray(dep2).forEach(function(entry) {
        return entry[m_1]();
      });
      depsByKey.delete(key2);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}
function makeDefaultMakeCacheKeyFunction() {
  var keyTrie = new Trie(typeof WeakMap === "function");
  return function() {
    return keyTrie.lookupArray(arguments);
  };
}
function wrap2(originalFunction, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var cache = new Cache(options.max || Math.pow(2, 16), function(entry) {
    return entry.dispose();
  });
  var keyArgs = options.keyArgs;
  var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
  var optimistic = function() {
    var key2 = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key2 === void 0) {
      return originalFunction.apply(null, arguments);
    }
    var entry = cache.get(key2);
    if (!entry) {
      cache.set(key2, entry = new Entry(originalFunction));
      entry.subscribe = options.subscribe;
      entry.forget = function() {
        return cache.delete(key2);
      };
    }
    var value = entry.recompute(Array.prototype.slice.call(arguments));
    cache.set(key2, entry);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function(cache2) {
        return cache2.clean();
      });
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: function() {
      return cache["map"].size;
    },
    configurable: false,
    enumerable: false
  });
  function dirtyKey(key2) {
    var entry = cache.get(key2);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key2) {
    var entry = cache.get(key2);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key2) {
    return cache.delete(key2);
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}
var Cache, parentEntrySlot, _a4, hasOwnProperty4, toArray, emptySetPool, POOL_TARGET_SIZE, Entry, EntryMethods, defaultMakeCacheKey, caches;
var init_bundle_esm = __esm({
  "node_modules/optimism/lib/bundle.esm.js"() {
    init_trie_esm();
    init_trie_esm();
    init_context_esm();
    init_context_esm();
    Cache = function() {
      function Cache3(max, dispose) {
        if (max === void 0) {
          max = Infinity;
        }
        if (dispose === void 0) {
          dispose = defaultDispose;
        }
        this.max = max;
        this.dispose = dispose;
        this.map = /* @__PURE__ */ new Map();
        this.newest = null;
        this.oldest = null;
      }
      Cache3.prototype.has = function(key2) {
        return this.map.has(key2);
      };
      Cache3.prototype.get = function(key2) {
        var node = this.getNode(key2);
        return node && node.value;
      };
      Cache3.prototype.getNode = function(key2) {
        var node = this.map.get(key2);
        if (node && node !== this.newest) {
          var older = node.older, newer = node.newer;
          if (newer) {
            newer.older = older;
          }
          if (older) {
            older.newer = newer;
          }
          node.older = this.newest;
          node.older.newer = node;
          node.newer = null;
          this.newest = node;
          if (node === this.oldest) {
            this.oldest = newer;
          }
        }
        return node;
      };
      Cache3.prototype.set = function(key2, value) {
        var node = this.getNode(key2);
        if (node) {
          return node.value = value;
        }
        node = {
          key: key2,
          value,
          newer: null,
          older: this.newest
        };
        if (this.newest) {
          this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key2, node);
        return node.value;
      };
      Cache3.prototype.clean = function() {
        while (this.oldest && this.map.size > this.max) {
          this.delete(this.oldest.key);
        }
      };
      Cache3.prototype.delete = function(key2) {
        var node = this.map.get(key2);
        if (node) {
          if (node === this.newest) {
            this.newest = node.older;
          }
          if (node === this.oldest) {
            this.oldest = node.newer;
          }
          if (node.newer) {
            node.newer.older = node.older;
          }
          if (node.older) {
            node.older.newer = node.newer;
          }
          this.map.delete(key2);
          this.dispose(node.value, key2);
          return true;
        }
        return false;
      };
      return Cache3;
    }();
    parentEntrySlot = new Slot();
    hasOwnProperty4 = Object.prototype.hasOwnProperty;
    toArray = (_a4 = Array.from, _a4 === void 0 ? function(collection) {
      var array2 = [];
      collection.forEach(function(item) {
        return array2.push(item);
      });
      return array2;
    } : _a4);
    emptySetPool = [];
    POOL_TARGET_SIZE = 100;
    Entry = function() {
      function Entry2(fn) {
        this.fn = fn;
        this.parents = /* @__PURE__ */ new Set();
        this.childValues = /* @__PURE__ */ new Map();
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry2.count;
      }
      Entry2.prototype.peek = function() {
        if (this.value.length === 1 && !mightBeDirty(this)) {
          rememberParent(this);
          return this.value[0];
        }
      };
      Entry2.prototype.recompute = function(args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
      };
      Entry2.prototype.setDirty = function() {
        if (this.dirty)
          return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        maybeUnsubscribe(this);
      };
      Entry2.prototype.dispose = function() {
        var _this = this;
        this.setDirty();
        forgetChildren(this);
        eachParent(this, function(parent, child) {
          parent.setDirty();
          forgetChild(parent, _this);
        });
      };
      Entry2.prototype.forget = function() {
        this.dispose();
      };
      Entry2.prototype.dependOn = function(dep2) {
        dep2.add(this);
        if (!this.deps) {
          this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
        }
        this.deps.add(dep2);
      };
      Entry2.prototype.forgetDeps = function() {
        var _this = this;
        if (this.deps) {
          toArray(this.deps).forEach(function(dep2) {
            return dep2.delete(_this);
          });
          this.deps.clear();
          emptySetPool.push(this.deps);
          this.deps = null;
        }
      };
      Entry2.count = 0;
      return Entry2;
    }();
    EntryMethods = {
      setDirty: true,
      dispose: true,
      forget: true
    };
    defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
    caches = /* @__PURE__ */ new Set();
  }
});

// node_modules/@apollo/client/cache/core/cache.js
var ApolloCache;
var init_cache = __esm({
  "node_modules/@apollo/client/cache/core/cache.js"() {
    init_modules();
    init_bundle_esm();
    init_utilities();
    ApolloCache = function() {
      function ApolloCache2() {
        this.getFragmentDoc = wrap2(getFragmentQueryDocument);
      }
      ApolloCache2.prototype.batch = function(options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function() {
          return updateResult = options.update(_this);
        }, optimisticId);
        return updateResult;
      };
      ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
      };
      ApolloCache2.prototype.transformDocument = function(document) {
        return document;
      };
      ApolloCache2.prototype.identify = function(object) {
        return;
      };
      ApolloCache2.prototype.gc = function() {
        return [];
      };
      ApolloCache2.prototype.modify = function(options) {
        return false;
      };
      ApolloCache2.prototype.transformForLink = function(document) {
        return document;
      };
      ApolloCache2.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) {
          optimistic = !!options.optimistic;
        }
        return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
      };
      ApolloCache2.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) {
          optimistic = !!options.optimistic;
        }
        return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
      };
      ApolloCache2.prototype.writeQuery = function(_a5) {
        var id = _a5.id, data = _a5.data, options = __rest(_a5, ["id", "data"]);
        return this.write(Object.assign(options, {
          dataId: id || "ROOT_QUERY",
          result: data
        }));
      };
      ApolloCache2.prototype.writeFragment = function(_a5) {
        var id = _a5.id, data = _a5.data, fragment = _a5.fragment, fragmentName = _a5.fragmentName, options = __rest(_a5, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
          query: this.getFragmentDoc(fragment, fragmentName),
          dataId: id,
          result: data
        }));
      };
      ApolloCache2.prototype.updateQuery = function(options, update) {
        return this.batch({
          update: function(cache) {
            var value = cache.readQuery(options);
            var data = update(value);
            if (data === void 0 || data === null)
              return value;
            cache.writeQuery(__assign(__assign({}, options), { data }));
            return data;
          }
        });
      };
      ApolloCache2.prototype.updateFragment = function(options, update) {
        return this.batch({
          update: function(cache) {
            var value = cache.readFragment(options);
            var data = update(value);
            if (data === void 0 || data === null)
              return value;
            cache.writeFragment(__assign(__assign({}, options), { data }));
            return data;
          }
        });
      };
      return ApolloCache2;
    }();
  }
});

// node_modules/@apollo/client/cache/core/types/common.js
var MissingFieldError;
var init_common = __esm({
  "node_modules/@apollo/client/cache/core/types/common.js"() {
    MissingFieldError = function() {
      function MissingFieldError2(message, path, query2, variables) {
        this.message = message;
        this.path = path;
        this.query = query2;
        this.variables = variables;
      }
      return MissingFieldError2;
    }();
  }
});

// node_modules/@apollo/client/cache/inmemory/helpers.js
function defaultDataIdFromObject(_a5, context) {
  var __typename = _a5.__typename, id = _a5.id, _id = _a5._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = id !== void 0 ? { id } : _id !== void 0 ? { _id } : void 0;
    }
    if (id === void 0)
      id = _id;
    if (id !== void 0) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
function normalizeConfig(config) {
  return compact2(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result2, variables) {
  if (isNonNullObject(result2)) {
    return isArray(result2) ? result2.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key2 = resultKeyNameFromField(field);
        return hasOwn.call(result2, key2) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result2[key2], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
var hasOwn, defaultConfig, TypeOrFieldNameRegExp, isArray;
var init_helpers = __esm({
  "node_modules/@apollo/client/cache/inmemory/helpers.js"() {
    init_utilities();
    hasOwn = Object.prototype.hasOwnProperty;
    defaultConfig = {
      dataIdFromObject: defaultDataIdFromObject,
      addTypename: true,
      resultCaching: true,
      canonizeResults: false
    };
    TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
    isArray = function(a) {
      return Array.isArray(a);
    };
  }
});

// node_modules/@apollo/client/cache/inmemory/entityStore.js
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}
var DELETE, delModifier, INVALIDATE, EntityStore, CacheGroup, Layer, Stump;
var init_entityStore = __esm({
  "node_modules/@apollo/client/cache/inmemory/entityStore.js"() {
    init_modules();
    init_globals();
    init_bundle_esm();
    init_equality_esm();
    init_trie_esm();
    init_utilities();
    init_helpers();
    DELETE = /* @__PURE__ */ Object.create(null);
    delModifier = function() {
      return DELETE;
    };
    INVALIDATE = /* @__PURE__ */ Object.create(null);
    EntityStore = function() {
      function EntityStore2(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = /* @__PURE__ */ Object.create(null);
        this.rootIds = /* @__PURE__ */ Object.create(null);
        this.refs = /* @__PURE__ */ Object.create(null);
        this.getFieldValue = function(objectOrReference, storeFieldName) {
          return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
        };
        this.canRead = function(objOrRef) {
          return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
        };
        this.toReference = function(objOrIdOrRef, mergeIntoStore) {
          if (typeof objOrIdOrRef === "string") {
            return makeReference(objOrIdOrRef);
          }
          if (isReference(objOrIdOrRef)) {
            return objOrIdOrRef;
          }
          var id = _this.policies.identify(objOrIdOrRef)[0];
          if (id) {
            var ref = makeReference(id);
            if (mergeIntoStore) {
              _this.merge(id, objOrIdOrRef);
            }
            return ref;
          }
        };
      }
      EntityStore2.prototype.toObject = function() {
        return __assign({}, this.data);
      };
      EntityStore2.prototype.has = function(dataId) {
        return this.lookup(dataId, true) !== void 0;
      };
      EntityStore2.prototype.get = function(dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
          var storeObject = this.data[dataId];
          if (storeObject && hasOwn.call(storeObject, fieldName)) {
            return storeObject[fieldName];
          }
        }
        if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
          return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
          return this.parent.get(dataId, fieldName);
        }
      };
      EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
        if (dependOnExistence)
          this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) {
          return this.data[dataId];
        }
        if (this instanceof Layer) {
          return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
          return /* @__PURE__ */ Object.create(null);
        }
      };
      EntityStore2.prototype.merge = function(older, newer) {
        var _this = this;
        var dataId;
        if (isReference(older))
          older = older.__ref;
        if (isReference(newer))
          newer = newer.__ref;
        var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
        var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
        if (!incoming)
          return;
        __DEV__ ? invariant(typeof dataId === "string", "store.merge expects a string ID") : invariant(typeof dataId === "string", 1);
        var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
          delete this.refs[dataId];
          if (this.group.caching) {
            var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
            if (!existing)
              fieldsToDirty_1.__exists = 1;
            Object.keys(incoming).forEach(function(storeFieldName) {
              if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                fieldsToDirty_1[storeFieldName] = 1;
                var fieldName = fieldNameFromStoreName(storeFieldName);
                if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                  fieldsToDirty_1[fieldName] = 1;
                }
                if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                  delete merged[storeFieldName];
                }
              }
            });
            if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
              delete fieldsToDirty_1.__typename;
            }
            Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
              return _this.group.dirty(dataId, fieldName);
            });
          }
        }
      };
      EntityStore2.prototype.modify = function(dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
          var changedFields_1 = /* @__PURE__ */ Object.create(null);
          var needToMerge_1 = false;
          var allDeleted_1 = true;
          var sharedDetails_1 = {
            DELETE,
            INVALIDATE,
            isReference,
            toReference: this.toReference,
            canRead: this.canRead,
            readField: function(fieldNameOrOptions, from) {
              return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                fieldName: fieldNameOrOptions,
                from: from || makeReference(dataId)
              } : fieldNameOrOptions, { store: _this });
            }
          };
          Object.keys(storeObject).forEach(function(storeFieldName) {
            var fieldName = fieldNameFromStoreName(storeFieldName);
            var fieldValue = storeObject[storeFieldName];
            if (fieldValue === void 0)
              return;
            var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
            if (modify) {
              var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
              if (newValue === INVALIDATE) {
                _this.group.dirty(dataId, storeFieldName);
              } else {
                if (newValue === DELETE)
                  newValue = void 0;
                if (newValue !== fieldValue) {
                  changedFields_1[storeFieldName] = newValue;
                  needToMerge_1 = true;
                  fieldValue = newValue;
                }
              }
            }
            if (fieldValue !== void 0) {
              allDeleted_1 = false;
            }
          });
          if (needToMerge_1) {
            this.merge(dataId, changedFields_1);
            if (allDeleted_1) {
              if (this instanceof Layer) {
                this.data[dataId] = void 0;
              } else {
                delete this.data[dataId];
              }
              this.group.dirty(dataId, "__exists");
            }
            return true;
          }
        }
        return false;
      };
      EntityStore2.prototype.delete = function(dataId, fieldName, args) {
        var _a5;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
          var typename = this.getFieldValue(storeObject, "__typename");
          var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
          return this.modify(dataId, storeFieldName ? (_a5 = {}, _a5[storeFieldName] = delModifier, _a5) : delModifier);
        }
        return false;
      };
      EntityStore2.prototype.evict = function(options, limit) {
        var evicted = false;
        if (options.id) {
          if (hasOwn.call(this.data, options.id)) {
            evicted = this.delete(options.id, options.fieldName, options.args);
          }
          if (this instanceof Layer && this !== limit) {
            evicted = this.parent.evict(options, limit) || evicted;
          }
          if (options.fieldName || evicted) {
            this.group.dirty(options.id, options.fieldName || "__exists");
          }
        }
        return evicted;
      };
      EntityStore2.prototype.clear = function() {
        this.replace(null);
      };
      EntityStore2.prototype.extract = function() {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function(id) {
          if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
            extraRootIds.push(id);
          }
        });
        if (extraRootIds.length) {
          obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
      };
      EntityStore2.prototype.replace = function(newData) {
        var _this = this;
        Object.keys(this.data).forEach(function(dataId) {
          if (!(newData && hasOwn.call(newData, dataId))) {
            _this.delete(dataId);
          }
        });
        if (newData) {
          var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
          Object.keys(rest_1).forEach(function(dataId) {
            _this.merge(dataId, rest_1[dataId]);
          });
          if (__META) {
            __META.extraRootIds.forEach(this.retain, this);
          }
        }
      };
      EntityStore2.prototype.retain = function(rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
      };
      EntityStore2.prototype.release = function(rootId) {
        if (this.rootIds[rootId] > 0) {
          var count = --this.rootIds[rootId];
          if (!count)
            delete this.rootIds[rootId];
          return count;
        }
        return 0;
      };
      EntityStore2.prototype.getRootIdSet = function(ids) {
        if (ids === void 0) {
          ids = /* @__PURE__ */ new Set();
        }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
          this.parent.getRootIdSet(ids);
        } else {
          Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
      };
      EntityStore2.prototype.gc = function() {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function(id) {
          if (hasOwn.call(snapshot, id)) {
            Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
            delete snapshot[id];
          }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
          var root_1 = this;
          while (root_1 instanceof Layer)
            root_1 = root_1.parent;
          idsToRemove.forEach(function(id) {
            return root_1.delete(id);
          });
        }
        return idsToRemove;
      };
      EntityStore2.prototype.findChildRefIds = function(dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
          var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
          var root2 = this.data[dataId];
          if (!root2)
            return found_1;
          var workSet_1 = /* @__PURE__ */ new Set([root2]);
          workSet_1.forEach(function(obj) {
            if (isReference(obj)) {
              found_1[obj.__ref] = true;
            }
            if (isNonNullObject(obj)) {
              Object.keys(obj).forEach(function(key2) {
                var child = obj[key2];
                if (isNonNullObject(child)) {
                  workSet_1.add(child);
                }
              });
            }
          });
        }
        return this.refs[dataId];
      };
      EntityStore2.prototype.makeCacheKey = function() {
        return this.group.keyMaker.lookupArray(arguments);
      };
      return EntityStore2;
    }();
    CacheGroup = function() {
      function CacheGroup2(caching, parent) {
        if (parent === void 0) {
          parent = null;
        }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
      }
      CacheGroup2.prototype.resetCaching = function() {
        this.d = this.caching ? dep() : null;
        this.keyMaker = new Trie(canUseWeakMap);
      };
      CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
        if (this.d) {
          this.d(makeDepKey(dataId, storeFieldName));
          var fieldName = fieldNameFromStoreName(storeFieldName);
          if (fieldName !== storeFieldName) {
            this.d(makeDepKey(dataId, fieldName));
          }
          if (this.parent) {
            this.parent.depend(dataId, storeFieldName);
          }
        }
      };
      CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
        if (this.d) {
          this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
      };
      return CacheGroup2;
    }();
    (function(EntityStore2) {
      var Root2 = function(_super) {
        __extends(Root3, _super);
        function Root3(_a5) {
          var policies = _a5.policies, _b = _a5.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a5.seed;
          var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
          _this.stump = new Stump(_this);
          _this.storageTrie = new Trie(canUseWeakMap);
          if (seed)
            _this.replace(seed);
          return _this;
        }
        Root3.prototype.addLayer = function(layerId, replay) {
          return this.stump.addLayer(layerId, replay);
        };
        Root3.prototype.removeLayer = function() {
          return this;
        };
        Root3.prototype.getStorage = function() {
          return this.storageTrie.lookupArray(arguments);
        };
        return Root3;
      }(EntityStore2);
      EntityStore2.Root = Root2;
    })(EntityStore || (EntityStore = {}));
    Layer = function(_super) {
      __extends(Layer2, _super);
      function Layer2(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
      }
      Layer2.prototype.addLayer = function(layerId, replay) {
        return new Layer2(layerId, this, replay, this.group);
      };
      Layer2.prototype.removeLayer = function(layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
          if (this.group.caching) {
            Object.keys(this.data).forEach(function(dataId) {
              var ownStoreObject = _this.data[dataId];
              var parentStoreObject = parent["lookup"](dataId);
              if (!parentStoreObject) {
                _this.delete(dataId);
              } else if (!ownStoreObject) {
                _this.group.dirty(dataId, "__exists");
                Object.keys(parentStoreObject).forEach(function(storeFieldName) {
                  _this.group.dirty(dataId, storeFieldName);
                });
              } else if (ownStoreObject !== parentStoreObject) {
                Object.keys(ownStoreObject).forEach(function(storeFieldName) {
                  if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                    _this.group.dirty(dataId, storeFieldName);
                  }
                });
              }
            });
          }
          return parent;
        }
        if (parent === this.parent)
          return this;
        return parent.addLayer(this.id, this.replay);
      };
      Layer2.prototype.toObject = function() {
        return __assign(__assign({}, this.parent.toObject()), this.data);
      };
      Layer2.prototype.findChildRefIds = function(dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
      };
      Layer2.prototype.getStorage = function() {
        var p = this.parent;
        while (p.parent)
          p = p.parent;
        return p.getStorage.apply(p, arguments);
      };
      return Layer2;
    }(EntityStore);
    Stump = function(_super) {
      __extends(Stump2, _super);
      function Stump2(root2) {
        return _super.call(this, "EntityStore.Stump", root2, function() {
        }, new CacheGroup(root2.group.caching, root2.group)) || this;
      }
      Stump2.prototype.removeLayer = function() {
        return this;
      };
      Stump2.prototype.merge = function() {
        return this.parent.merge.apply(this.parent, arguments);
      };
      return Stump2;
    }(Layer);
  }
});

// node_modules/@apollo/client/cache/inmemory/object-canon.js
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
var ObjectCanon, canonicalStringify, stringifyCanon, stringifyCache;
var init_object_canon = __esm({
  "node_modules/@apollo/client/cache/inmemory/object-canon.js"() {
    init_modules();
    init_globals();
    init_trie_esm();
    init_utilities();
    init_helpers();
    ObjectCanon = function() {
      function ObjectCanon2() {
        this.known = new (canUseWeakSet ? WeakSet : Set)();
        this.pool = new Trie(canUseWeakMap);
        this.passes = /* @__PURE__ */ new WeakMap();
        this.keysByJSON = /* @__PURE__ */ new Map();
        this.empty = this.admit({});
      }
      ObjectCanon2.prototype.isKnown = function(value) {
        return isNonNullObject(value) && this.known.has(value);
      };
      ObjectCanon2.prototype.pass = function(value) {
        if (isNonNullObject(value)) {
          var copy = shallowCopy(value);
          this.passes.set(copy, value);
          return copy;
        }
        return value;
      };
      ObjectCanon2.prototype.admit = function(value) {
        var _this = this;
        if (isNonNullObject(value)) {
          var original = this.passes.get(value);
          if (original)
            return original;
          var proto = Object.getPrototypeOf(value);
          switch (proto) {
            case Array.prototype: {
              if (this.known.has(value))
                return value;
              var array2 = value.map(this.admit, this);
              var node = this.pool.lookupArray(array2);
              if (!node.array) {
                this.known.add(node.array = array2);
                if (__DEV__) {
                  Object.freeze(array2);
                }
              }
              return node.array;
            }
            case null:
            case Object.prototype: {
              if (this.known.has(value))
                return value;
              var proto_1 = Object.getPrototypeOf(value);
              var array_1 = [proto_1];
              var keys = this.sortedKeys(value);
              array_1.push(keys.json);
              var firstValueIndex_1 = array_1.length;
              keys.sorted.forEach(function(key2) {
                array_1.push(_this.admit(value[key2]));
              });
              var node = this.pool.lookupArray(array_1);
              if (!node.object) {
                var obj_1 = node.object = Object.create(proto_1);
                this.known.add(obj_1);
                keys.sorted.forEach(function(key2, i) {
                  obj_1[key2] = array_1[firstValueIndex_1 + i];
                });
                if (__DEV__) {
                  Object.freeze(obj_1);
                }
              }
              return node.object;
            }
          }
        }
        return value;
      };
      ObjectCanon2.prototype.sortedKeys = function(obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
          keys.sort();
          var json2 = JSON.stringify(keys);
          if (!(node.keys = this.keysByJSON.get(json2))) {
            this.keysByJSON.set(json2, node.keys = { sorted: keys, json: json2 });
          }
        }
        return node.keys;
      };
      return ObjectCanon2;
    }();
    canonicalStringify = Object.assign(function(value) {
      if (isNonNullObject(value)) {
        if (stringifyCanon === void 0) {
          resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json2 = stringifyCache.get(canonical);
        if (json2 === void 0) {
          stringifyCache.set(canonical, json2 = JSON.stringify(canonical));
        }
        return json2;
      }
      return JSON.stringify(value);
    }, {
      reset: resetCanonicalStringify
    });
  }
});

// node_modules/@apollo/client/cache/inmemory/readFromStore.js
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result2) {
    return result2;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        __DEV__ ? invariant(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : invariant(!isReference(value), 5);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}
var StoreReader;
var init_readFromStore = __esm({
  "node_modules/@apollo/client/cache/inmemory/readFromStore.js"() {
    init_modules();
    init_globals();
    init_bundle_esm();
    init_utilities();
    init_entityStore();
    init_helpers();
    init_common();
    init_object_canon();
    StoreReader = function() {
      function StoreReader2(config) {
        var _this = this;
        this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
        this.config = compact2(config, {
          addTypename: config.addTypename !== false,
          canonizeResults: shouldCanonizeResults(config)
        });
        this.canon = config.canon || new ObjectCanon();
        this.executeSelectionSet = wrap2(function(options) {
          var _a5;
          var canonizeResults = options.context.canonizeResults;
          var peekArgs = execSelectionSetKeyArgs(options);
          peekArgs[3] = !canonizeResults;
          var other = (_a5 = _this.executeSelectionSet).peek.apply(_a5, peekArgs);
          if (other) {
            if (canonizeResults) {
              return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
            }
            return other;
          }
          maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
          return _this.execSelectionSetImpl(options);
        }, {
          max: this.config.resultCacheMaxSize,
          keyArgs: execSelectionSetKeyArgs,
          makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
            if (supportsResultCaching(context.store)) {
              return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
            }
          }
        });
        this.executeSubSelectedArray = wrap2(function(options) {
          maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
          return _this.execSubSelectedArrayImpl(options);
        }, {
          max: this.config.resultCacheMaxSize,
          makeCacheKey: function(_a5) {
            var field = _a5.field, array2 = _a5.array, context = _a5.context;
            if (supportsResultCaching(context.store)) {
              return context.store.makeCacheKey(field, array2, context.varString);
            }
          }
        });
      }
      StoreReader2.prototype.resetCanon = function() {
        this.canon = new ObjectCanon();
      };
      StoreReader2.prototype.diffQueryAgainstStore = function(_a5) {
        var store = _a5.store, query2 = _a5.query, _b = _a5.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a5.variables, _c = _a5.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a5.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query2))), variables);
        var rootRef = makeReference(rootId);
        var execResult = this.executeSelectionSet({
          selectionSet: getMainDefinition(query2).selectionSet,
          objectOrReference: rootRef,
          enclosingRef: rootRef,
          context: {
            store,
            query: query2,
            policies,
            variables,
            varString: canonicalStringify(variables),
            canonizeResults,
            fragmentMap: createFragmentMap(getFragmentDefinitions(query2))
          }
        });
        var missing;
        if (execResult.missing) {
          missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query2, variables)];
          if (!returnPartialData) {
            throw missing[0];
          }
        }
        return {
          result: execResult.result,
          complete: !missing,
          missing
        };
      };
      StoreReader2.prototype.isFresh = function(result2, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) && this.knownResults.get(result2) === selectionSet) {
          var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result2));
          if (latest && result2 === latest.result) {
            return true;
          }
        }
        return false;
      };
      StoreReader2.prototype.execSelectionSetImpl = function(_a5) {
        var _this = this;
        var selectionSet = _a5.selectionSet, objectOrReference = _a5.objectOrReference, enclosingRef = _a5.enclosingRef, context = _a5.context;
        if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
          return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
          };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var objectsToMerge = [];
        var missing;
        var missingMerger = new DeepMerger();
        if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
          objectsToMerge.push({ __typename: typename });
        }
        function handleMissing(result3, resultName) {
          var _a6;
          if (result3.missing) {
            missing = missingMerger.merge(missing, (_a6 = {}, _a6[resultName] = result3.missing, _a6));
          }
          return result3.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function(selection) {
          var _a6, _b;
          if (!shouldInclude(selection, variables))
            return;
          if (isField(selection)) {
            var fieldValue = policies.readField({
              fieldName: selection.name.value,
              field: selection,
              variables: context.variables,
              from: objectOrReference
            }, context);
            var resultName = resultKeyNameFromField(selection);
            if (fieldValue === void 0) {
              if (!addTypenameToDocument.added(selection)) {
                missing = missingMerger.merge(missing, (_a6 = {}, _a6[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a6));
              }
            } else if (isArray(fieldValue)) {
              fieldValue = handleMissing(_this.executeSubSelectedArray({
                field: selection,
                array: fieldValue,
                enclosingRef,
                context
              }), resultName);
            } else if (!selection.selectionSet) {
              if (context.canonizeResults) {
                fieldValue = _this.canon.pass(fieldValue);
              }
            } else if (fieldValue != null) {
              fieldValue = handleMissing(_this.executeSelectionSet({
                selectionSet: selection.selectionSet,
                objectOrReference: fieldValue,
                enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
                context
              }), resultName);
            }
            if (fieldValue !== void 0) {
              objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
            }
          } else {
            var fragment = getFragmentFromSelection(selection, context.fragmentMap);
            if (fragment && policies.fragmentMatches(fragment, typename)) {
              fragment.selectionSet.selections.forEach(workSet.add, workSet);
            }
          }
        });
        var result2 = mergeDeepArray(objectsToMerge);
        var finalResult = { result: result2, missing };
        var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
        if (frozen.result) {
          this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
      };
      StoreReader2.prototype.execSubSelectedArrayImpl = function(_a5) {
        var _this = this;
        var field = _a5.field, array2 = _a5.array, enclosingRef = _a5.enclosingRef, context = _a5.context;
        var missing;
        var missingMerger = new DeepMerger();
        function handleMissing(childResult, i) {
          var _a6;
          if (childResult.missing) {
            missing = missingMerger.merge(missing, (_a6 = {}, _a6[i] = childResult.missing, _a6));
          }
          return childResult.result;
        }
        if (field.selectionSet) {
          array2 = array2.filter(context.store.canRead);
        }
        array2 = array2.map(function(item, i) {
          if (item === null) {
            return null;
          }
          if (isArray(item)) {
            return handleMissing(_this.executeSubSelectedArray({
              field,
              array: item,
              enclosingRef,
              context
            }), i);
          }
          if (field.selectionSet) {
            return handleMissing(_this.executeSelectionSet({
              selectionSet: field.selectionSet,
              objectOrReference: item,
              enclosingRef: isReference(item) ? item : enclosingRef,
              context
            }), i);
          }
          if (__DEV__) {
            assertSelectionSetForIdValue(context.store, field, item);
          }
          return item;
        });
        return {
          result: context.canonizeResults ? this.canon.admit(array2) : array2,
          missing
        };
      };
      return StoreReader2;
    }();
  }
});

// node_modules/@apollo/client/cache/inmemory/reactiveVars.js
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}
var cacheSlot, cacheInfoMap;
var init_reactiveVars = __esm({
  "node_modules/@apollo/client/cache/inmemory/reactiveVars.js"() {
    init_bundle_esm();
    init_context_esm();
    cacheSlot = new Slot();
    cacheInfoMap = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@apollo/client/cache/inmemory/key-extractor.js
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from, key2) {
      return context.readField(key2, from);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      __DEV__ ? invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join("."), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a5) {
    var field = _a5.field, variables = _a5.variables, fieldName = _a5.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a5;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a5 = {}, _a5[path[i]] = toMerge, _a5);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s2, i) {
      if (isArray(s2)) {
        getSpecifierPaths(s2).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s2);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key2) {
  return object[key2];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key2) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key2);
    }) : obj && extract(obj, key2);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}
var specifierInfoCache;
var init_key_extractor = __esm({
  "node_modules/@apollo/client/cache/inmemory/key-extractor.js"() {
    init_globals();
    init_utilities();
    init_helpers();
    specifierInfoCache = /* @__PURE__ */ Object.create(null);
  }
});

// node_modules/@apollo/client/cache/inmemory/policies.js
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a5 = context.store, toReference = _a5.toReference, canRead = _a5.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (__DEV__ && options.from === void 0) {
    __DEV__ && invariant.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}
var nullKeyFieldsFn, simpleKeyArgsFn, mergeTrueFn, mergeFalseFn, Policies;
var init_policies = __esm({
  "node_modules/@apollo/client/cache/inmemory/policies.js"() {
    init_modules();
    init_globals();
    init_utilities();
    init_helpers();
    init_reactiveVars();
    init_object_canon();
    init_key_extractor();
    getStoreKeyName.setStringify(canonicalStringify);
    nullKeyFieldsFn = function() {
      return void 0;
    };
    simpleKeyArgsFn = function(_args, context) {
      return context.fieldName;
    };
    mergeTrueFn = function(existing, incoming, _a5) {
      var mergeObjects = _a5.mergeObjects;
      return mergeObjects(existing, incoming);
    };
    mergeFalseFn = function(_, incoming) {
      return incoming;
    };
    Policies = function() {
      function Policies2(config) {
        this.config = config;
        this.typePolicies = /* @__PURE__ */ Object.create(null);
        this.toBeAdded = /* @__PURE__ */ Object.create(null);
        this.supertypeMap = /* @__PURE__ */ new Map();
        this.fuzzySubtypes = /* @__PURE__ */ new Map();
        this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
        this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
        this.usingPossibleTypes = false;
        this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
          this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
          this.addTypePolicies(config.typePolicies);
        }
      }
      Policies2.prototype.identify = function(object, partialContext) {
        var _a5;
        var policies = this;
        var typename = partialContext && (partialContext.typename || ((_a5 = partialContext.storeObject) === null || _a5 === void 0 ? void 0 : _a5.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
          return ["ROOT_QUERY"];
        }
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
          var options = normalizeReadFieldOptions(arguments, storeObject);
          return policies.readField(options, {
            store: policies.cache["data"],
            variables: options.variables
          });
        } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
          var specifierOrId = keyFn(object, context);
          if (isArray(specifierOrId)) {
            keyFn = keyFieldsFnFromSpecifier(specifierOrId);
          } else {
            id = specifierOrId;
            break;
          }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
      };
      Policies2.prototype.addTypePolicies = function(typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function(typename) {
          var _a5 = typePolicies[typename], queryType = _a5.queryType, mutationType = _a5.mutationType, subscriptionType = _a5.subscriptionType, incoming = __rest(_a5, ["queryType", "mutationType", "subscriptionType"]);
          if (queryType)
            _this.setRootTypename("Query", typename);
          if (mutationType)
            _this.setRootTypename("Mutation", typename);
          if (subscriptionType)
            _this.setRootTypename("Subscription", typename);
          if (hasOwn.call(_this.toBeAdded, typename)) {
            _this.toBeAdded[typename].push(incoming);
          } else {
            _this.toBeAdded[typename] = [incoming];
          }
        });
      };
      Policies2.prototype.updateTypePolicy = function(typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing2, merge) {
          existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
        if (fields) {
          Object.keys(fields).forEach(function(fieldName) {
            var existing2 = _this.getFieldPolicy(typename, fieldName, true);
            var incoming2 = fields[fieldName];
            if (typeof incoming2 === "function") {
              existing2.read = incoming2;
            } else {
              var keyArgs = incoming2.keyArgs, read2 = incoming2.read, merge = incoming2.merge;
              existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
              if (typeof read2 === "function") {
                existing2.read = read2;
              }
              setMerge(existing2, merge);
            }
            if (existing2.read && existing2.merge) {
              existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
            }
          });
        }
      };
      Policies2.prototype.setRootTypename = function(which, typename) {
        if (typename === void 0) {
          typename = which;
        }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
          __DEV__ ? invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant(!old || old === which, 3);
          if (old)
            delete this.rootIdsByTypename[old];
          this.rootIdsByTypename[typename] = rootId;
          this.rootTypenamesById[rootId] = typename;
        }
      };
      Policies2.prototype.addPossibleTypes = function(possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function(supertype) {
          _this.getSupertypeSet(supertype, true);
          possibleTypes[supertype].forEach(function(subtype) {
            _this.getSupertypeSet(subtype, true).add(supertype);
            var match = subtype.match(TypeOrFieldNameRegExp);
            if (!match || match[0] !== subtype) {
              _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
            }
          });
        });
      };
      Policies2.prototype.getTypePolicy = function(typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
          var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
          policy_1.fields = /* @__PURE__ */ Object.create(null);
          var supertypes = this.supertypeMap.get(typename);
          if (supertypes && supertypes.size) {
            supertypes.forEach(function(supertype) {
              var _a5 = _this.getTypePolicy(supertype), fields = _a5.fields, rest = __rest(_a5, ["fields"]);
              Object.assign(policy_1, rest);
              Object.assign(policy_1.fields, fields);
            });
          }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
          inbox.splice(0).forEach(function(policy) {
            _this.updateTypePolicy(typename, policy);
          });
        }
        return this.typePolicies[typename];
      };
      Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
        if (typename) {
          var fieldPolicies = this.getTypePolicy(typename).fields;
          return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
        }
      };
      Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
          this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
        }
        return supertypeSet;
      };
      Policies2.prototype.fragmentMatches = function(fragment, typename, result2, variables) {
        var _this = this;
        if (!fragment.typeCondition)
          return true;
        if (!typename)
          return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
          return true;
        if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
          var typenameSupertypeSet = this.getSupertypeSet(typename, true);
          var workQueue_1 = [typenameSupertypeSet];
          var maybeEnqueue_1 = function(subtype) {
            var supertypeSet2 = _this.getSupertypeSet(subtype, false);
            if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
              workQueue_1.push(supertypeSet2);
            }
          };
          var needToCheckFuzzySubtypes = !!(result2 && this.fuzzySubtypes.size);
          var checkingFuzzySubtypes = false;
          for (var i = 0; i < workQueue_1.length; ++i) {
            var supertypeSet = workQueue_1[i];
            if (supertypeSet.has(supertype)) {
              if (!typenameSupertypeSet.has(supertype)) {
                if (checkingFuzzySubtypes) {
                  __DEV__ && invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                }
                typenameSupertypeSet.add(supertype);
              }
              return true;
            }
            supertypeSet.forEach(maybeEnqueue_1);
            if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result2, variables)) {
              needToCheckFuzzySubtypes = false;
              checkingFuzzySubtypes = true;
              this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
                var match = typename.match(regExp);
                if (match && match[0] === typename) {
                  maybeEnqueue_1(fuzzyString);
                }
              });
            }
          }
        }
        return false;
      };
      Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
      };
      Policies2.prototype.getStoreFieldName = function(fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
          var context = {
            typename,
            fieldName,
            field: fieldSpec.field || null,
            variables: fieldSpec.variables
          };
          var args = argsFromFieldSpecifier(fieldSpec);
          while (keyFn) {
            var specifierOrString = keyFn(args, context);
            if (isArray(specifierOrString)) {
              keyFn = keyArgsFnFromSpecifier(specifierOrString);
            } else {
              storeFieldName = specifierOrString || fieldName;
              break;
            }
          }
        }
        if (storeFieldName === void 0) {
          storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
          return fieldName;
        }
        return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
      };
      Policies2.prototype.readField = function(options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
          return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
          return;
        if (options.typename === void 0) {
          var typename = context.store.getFieldValue(objectOrReference, "__typename");
          if (typename)
            options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read2 = policy && policy.read;
        if (read2) {
          var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
          return cacheSlot.withValue(this.cache, read2, [existing, readOptions]);
        }
        return existing;
      };
      Policies2.prototype.getReadFunction = function(typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
      };
      Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
          policy = this.getTypePolicy(childTypename);
          merge = policy && policy.merge;
        }
        return merge;
      };
      Policies2.prototype.runMergeFunction = function(existing, incoming, _a5, context, storage) {
        var field = _a5.field, typename = _a5.typename, merge = _a5.merge;
        if (merge === mergeTrueFn) {
          return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
          return incoming;
        }
        if (context.overwrite) {
          existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || /* @__PURE__ */ Object.create(null)));
      };
      return Policies2;
    }();
  }
});

// node_modules/@apollo/client/cache/inmemory/writeToStore.js
function getContextFlavor(context, clientOnly, deferred) {
  var key2 = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key2);
  if (!flavored) {
    context.flavors.set(key2, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
function getChildMergeTree(_a5, name) {
  var map = _a5.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key2) {
      merged.map.set(key2, mergeMergeTrees(leftTree, right.map.get(key2)));
      remainingRightKeys_1.delete(key2);
    });
    remainingRightKeys_1.forEach(function(key2) {
      merged.map.set(key2, mergeMergeTrees(right.map.get(key2), left.map.get(key2)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a5, name) {
  var map = _a5.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key2) {
    return store.getFieldValue(incoming, key2) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  __DEV__ && invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}
var StoreWriter, emptyMergeTreePool, warnings;
var init_writeToStore = __esm({
  "node_modules/@apollo/client/cache/inmemory/writeToStore.js"() {
    init_modules();
    init_globals();
    init_equality_esm();
    init_trie_esm();
    init_utilities();
    init_helpers();
    init_object_canon();
    init_policies();
    StoreWriter = function() {
      function StoreWriter2(cache, reader) {
        this.cache = cache;
        this.reader = reader;
      }
      StoreWriter2.prototype.writeToStore = function(store, _a5) {
        var _this = this;
        var query2 = _a5.query, result2 = _a5.result, dataId = _a5.dataId, variables = _a5.variables, overwrite = _a5.overwrite;
        var operationDefinition = getOperationDefinition(query2);
        var merger = makeProcessedFieldsMerger();
        variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
        var context = {
          store,
          written: /* @__PURE__ */ Object.create(null),
          merge: function(existing, incoming) {
            return merger.merge(existing, incoming);
          },
          variables,
          varString: canonicalStringify(variables),
          fragmentMap: createFragmentMap(getFragmentDefinitions(query2)),
          overwrite: !!overwrite,
          incomingById: /* @__PURE__ */ new Map(),
          clientOnly: false,
          deferred: false,
          flavors: /* @__PURE__ */ new Map()
        };
        var ref = this.processSelectionSet({
          result: result2 || /* @__PURE__ */ Object.create(null),
          dataId,
          selectionSet: operationDefinition.selectionSet,
          mergeTree: { map: /* @__PURE__ */ new Map() },
          context
        });
        if (!isReference(ref)) {
          throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result2))) : new InvariantError(6);
        }
        context.incomingById.forEach(function(_a6, dataId2) {
          var storeObject = _a6.storeObject, mergeTree = _a6.mergeTree, fieldNodeSet = _a6.fieldNodeSet;
          var entityRef = makeReference(dataId2);
          if (mergeTree && mergeTree.map.size) {
            var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
            if (isReference(applied)) {
              return;
            }
            storeObject = applied;
          }
          if (__DEV__ && !context.overwrite) {
            var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
            fieldNodeSet.forEach(function(field) {
              if (field.selectionSet) {
                fieldsWithSelectionSets_1[field.name.value] = true;
              }
            });
            var hasSelectionSet_1 = function(storeFieldName) {
              return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
            };
            var hasMergeFunction_1 = function(storeFieldName) {
              var childTree = mergeTree && mergeTree.map.get(storeFieldName);
              return Boolean(childTree && childTree.info && childTree.info.merge);
            };
            Object.keys(storeObject).forEach(function(storeFieldName) {
              if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
                warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
              }
            });
          }
          store.merge(dataId2, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
      };
      StoreWriter2.prototype.processSelectionSet = function(_a5) {
        var _this = this;
        var dataId = _a5.dataId, result2 = _a5.result, selectionSet = _a5.selectionSet, context = _a5.context, mergeTree = _a5.mergeTree;
        var policies = this.cache.policies;
        var incoming = /* @__PURE__ */ Object.create(null);
        var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result2, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
        if ("string" === typeof typename) {
          incoming.__typename = typename;
        }
        var readField = function() {
          var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
          if (isReference(options.from)) {
            var info = context.incomingById.get(options.from.__ref);
            if (info) {
              var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
              if (result_1 !== void 0) {
                return result_1;
              }
            }
          }
          return policies.readField(options, context);
        };
        var fieldNodeSet = /* @__PURE__ */ new Set();
        this.flattenFields(selectionSet, result2, context, typename).forEach(function(context2, field) {
          var _a6;
          var resultFieldKey = resultKeyNameFromField(field);
          var value = result2[resultFieldKey];
          fieldNodeSet.add(field);
          if (value !== void 0) {
            var storeFieldName = policies.getStoreFieldName({
              typename,
              fieldName: field.name.value,
              field,
              variables: context2.variables
            });
            var childTree = getChildMergeTree(mergeTree, storeFieldName);
            var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
            var childTypename = void 0;
            if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
              childTypename = readField("__typename", incomingValue);
            }
            var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
            if (merge) {
              childTree.info = {
                field,
                typename,
                merge
              };
            } else {
              maybeRecycleChildMergeTree(mergeTree, storeFieldName);
            }
            incoming = context2.merge(incoming, (_a6 = {}, _a6[storeFieldName] = incomingValue, _a6));
          } else if (__DEV__ && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
            __DEV__ && invariant.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result2, null, 2)).substring(0, 1e3));
          }
        });
        try {
          var _b = policies.identify(result2, {
            typename,
            selectionSet,
            fragmentMap: context.fragmentMap,
            storeObject: incoming,
            readField
          }), id = _b[0], keyObject = _b[1];
          dataId = dataId || id;
          if (keyObject) {
            incoming = context.merge(incoming, keyObject);
          }
        } catch (e) {
          if (!dataId)
            throw e;
        }
        if ("string" === typeof dataId) {
          var dataRef = makeReference(dataId);
          var sets = context.written[dataId] || (context.written[dataId] = []);
          if (sets.indexOf(selectionSet) >= 0)
            return dataRef;
          sets.push(selectionSet);
          if (this.reader && this.reader.isFresh(result2, dataRef, selectionSet, context)) {
            return dataRef;
          }
          var previous_1 = context.incomingById.get(dataId);
          if (previous_1) {
            previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
            previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
            fieldNodeSet.forEach(function(field) {
              return previous_1.fieldNodeSet.add(field);
            });
          } else {
            context.incomingById.set(dataId, {
              storeObject: incoming,
              mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
              fieldNodeSet
            });
          }
          return dataRef;
        }
        return incoming;
      };
      StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
          return __DEV__ ? cloneDeep(value) : value;
        }
        if (isArray(value)) {
          return value.map(function(item, i) {
            var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
            maybeRecycleChildMergeTree(mergeTree, i);
            return value2;
          });
        }
        return this.processSelectionSet({
          result: value,
          selectionSet: field.selectionSet,
          context,
          mergeTree
        });
      };
      StoreWriter2.prototype.flattenFields = function(selectionSet, result2, context, typename) {
        if (typename === void 0) {
          typename = getTypenameFromResult(result2, selectionSet, context.fragmentMap);
        }
        var fieldMap = /* @__PURE__ */ new Map();
        var policies = this.cache.policies;
        var limitingTrie = new Trie(false);
        (function flatten(selectionSet2, inheritedContext) {
          var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
          if (visitedNode.visited)
            return;
          visitedNode.visited = true;
          selectionSet2.selections.forEach(function(selection) {
            if (!shouldInclude(selection, context.variables))
              return;
            var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
            if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
              selection.directives.forEach(function(dir) {
                var name = dir.name.value;
                if (name === "client")
                  clientOnly = true;
                if (name === "defer") {
                  var args = argumentsObjectFromField(dir, context.variables);
                  if (!args || args.if !== false) {
                    deferred = true;
                  }
                }
              });
            }
            if (isField(selection)) {
              var existing = fieldMap.get(selection);
              if (existing) {
                clientOnly = clientOnly && existing.clientOnly;
                deferred = deferred && existing.deferred;
              }
              fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
            } else {
              var fragment = getFragmentFromSelection(selection, context.fragmentMap);
              if (fragment && policies.fragmentMatches(fragment, typename, result2, context.variables)) {
                flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
              }
            }
          });
        })(selectionSet, context);
        return fieldMap;
      };
      StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
        var _a5;
        var _this = this;
        if (mergeTree.map.size && !isReference(incoming)) {
          var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
          var i_1 = incoming;
          if (e_1 && !getStorageArgs) {
            getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
          }
          var changedFields_1;
          var getValue_1 = function(from, name) {
            return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
          };
          mergeTree.map.forEach(function(childTree, storeFieldName) {
            var eVal = getValue_1(e_1, storeFieldName);
            var iVal = getValue_1(i_1, storeFieldName);
            if (void 0 === iVal)
              return;
            if (getStorageArgs) {
              getStorageArgs.push(storeFieldName);
            }
            var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
            if (aVal !== iVal) {
              changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
              changedFields_1.set(storeFieldName, aVal);
            }
            if (getStorageArgs) {
              invariant(getStorageArgs.pop() === storeFieldName);
            }
          });
          if (changedFields_1) {
            incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
            changedFields_1.forEach(function(value, name) {
              incoming[name] = value;
            });
          }
        }
        if (mergeTree.info) {
          return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a5 = context.store).getStorage.apply(_a5, getStorageArgs));
        }
        return incoming;
      };
      return StoreWriter2;
    }();
    emptyMergeTreePool = [];
    warnings = /* @__PURE__ */ new Set();
  }
});

// node_modules/@apollo/client/cache/inmemory/inMemoryCache.js
var InMemoryCache;
var init_inMemoryCache = __esm({
  "node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"() {
    init_modules();
    init_globals();
    init_bundle_esm();
    init_equality_esm();
    init_cache();
    init_common();
    init_utilities();
    init_readFromStore();
    init_writeToStore();
    init_entityStore();
    init_reactiveVars();
    init_policies();
    init_helpers();
    init_object_canon();
    InMemoryCache = function(_super) {
      __extends(InMemoryCache2, _super);
      function InMemoryCache2(config) {
        if (config === void 0) {
          config = {};
        }
        var _this = _super.call(this) || this;
        _this.watches = /* @__PURE__ */ new Set();
        _this.typenameDocumentCache = /* @__PURE__ */ new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
          cache: _this,
          dataIdFromObject: _this.config.dataIdFromObject,
          possibleTypes: _this.config.possibleTypes,
          typePolicies: _this.config.typePolicies
        });
        _this.init();
        return _this;
      }
      InMemoryCache2.prototype.init = function() {
        var rootStore = this.data = new EntityStore.Root({
          policies: this.policies,
          resultCaching: this.config.resultCaching
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
      };
      InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
          cache: this,
          addTypename: this.addTypename,
          resultCacheMaxSize: this.config.resultCacheMaxSize,
          canonizeResults: shouldCanonizeResults(this.config),
          canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
        }));
        this.maybeBroadcastWatch = wrap2(function(c, options) {
          return _this.broadcastWatch(c, options);
        }, {
          max: this.config.resultCacheMaxSize,
          makeCacheKey: function(c) {
            var store = c.optimistic ? _this.optimisticData : _this.data;
            if (supportsResultCaching(store)) {
              var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
              return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, rootId, variables }));
            }
          }
        });
        (/* @__PURE__ */ new Set([
          this.data.group,
          this.optimisticData.group
        ])).forEach(function(group) {
          return group.resetCaching();
        });
      };
      InMemoryCache2.prototype.restore = function(data) {
        this.init();
        if (data)
          this.data.replace(data);
        return this;
      };
      InMemoryCache2.prototype.extract = function(optimistic) {
        if (optimistic === void 0) {
          optimistic = false;
        }
        return (optimistic ? this.optimisticData : this.data).extract();
      };
      InMemoryCache2.prototype.read = function(options) {
        var _a5 = options.returnPartialData, returnPartialData = _a5 === void 0 ? false : _a5;
        try {
          return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
        } catch (e) {
          if (e instanceof MissingFieldError) {
            return null;
          }
          throw e;
        }
      };
      InMemoryCache2.prototype.write = function(options) {
        try {
          ++this.txCount;
          return this.storeWriter.writeToStore(this.data, options);
        } finally {
          if (!--this.txCount && options.broadcast !== false) {
            this.broadcastWatches();
          }
        }
      };
      InMemoryCache2.prototype.modify = function(options) {
        if (hasOwn.call(options, "id") && !options.id) {
          return false;
        }
        var store = options.optimistic ? this.optimisticData : this.data;
        try {
          ++this.txCount;
          return store.modify(options.id || "ROOT_QUERY", options.fields);
        } finally {
          if (!--this.txCount && options.broadcast !== false) {
            this.broadcastWatches();
          }
        }
      };
      InMemoryCache2.prototype.diff = function(options) {
        return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
      };
      InMemoryCache2.prototype.watch = function(watch) {
        var _this = this;
        if (!this.watches.size) {
          recallCache(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
          this.maybeBroadcastWatch(watch);
        }
        return function() {
          if (_this.watches.delete(watch) && !_this.watches.size) {
            forgetCache(_this);
          }
          _this.maybeBroadcastWatch.forget(watch);
        };
      };
      InMemoryCache2.prototype.gc = function(options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
          if (options.resetResultCache) {
            this.resetResultCache(options.resetResultIdentities);
          } else if (options.resetResultIdentities) {
            this.storeReader.resetCanon();
          }
        }
        return ids;
      };
      InMemoryCache2.prototype.retain = function(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
      };
      InMemoryCache2.prototype.release = function(rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
      };
      InMemoryCache2.prototype.identify = function(object) {
        if (isReference(object))
          return object.__ref;
        try {
          return this.policies.identify(object)[0];
        } catch (e) {
          __DEV__ && invariant.warn(e);
        }
      };
      InMemoryCache2.prototype.evict = function(options) {
        if (!options.id) {
          if (hasOwn.call(options, "id")) {
            return false;
          }
          options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
        }
        try {
          ++this.txCount;
          return this.optimisticData.evict(options, this.data);
        } finally {
          if (!--this.txCount && options.broadcast !== false) {
            this.broadcastWatches();
          }
        }
      };
      InMemoryCache2.prototype.reset = function(options) {
        var _this = this;
        this.init();
        canonicalStringify.reset();
        if (options && options.discardWatches) {
          this.watches.forEach(function(watch) {
            return _this.maybeBroadcastWatch.forget(watch);
          });
          this.watches.clear();
          forgetCache(this);
        } else {
          this.broadcastWatches();
        }
        return Promise.resolve();
      };
      InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
          this.optimisticData = newOptimisticData;
          this.broadcastWatches();
        }
      };
      InMemoryCache2.prototype.batch = function(options) {
        var _this = this;
        var update = options.update, _a5 = options.optimistic, optimistic = _a5 === void 0 ? true : _a5, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function(layer) {
          var _a6 = _this, data = _a6.data, optimisticData = _a6.optimisticData;
          ++_this.txCount;
          if (layer) {
            _this.data = _this.optimisticData = layer;
          }
          try {
            return updateResult = update(_this);
          } finally {
            --_this.txCount;
            _this.data = data;
            _this.optimisticData = optimisticData;
          }
        };
        var alreadyDirty = /* @__PURE__ */ new Set();
        if (onWatchUpdated && !this.txCount) {
          this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch) {
            alreadyDirty.add(watch);
            return false;
          } }));
        }
        if (typeof optimistic === "string") {
          this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        } else if (optimistic === false) {
          perform(this.data);
        } else {
          perform();
        }
        if (typeof removeOptimistic === "string") {
          this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
          this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch, diff) {
            var result2 = onWatchUpdated.call(this, watch, diff);
            if (result2 !== false) {
              alreadyDirty.delete(watch);
            }
            return result2;
          } }));
          if (alreadyDirty.size) {
            alreadyDirty.forEach(function(watch) {
              return _this.maybeBroadcastWatch.dirty(watch);
            });
          }
        } else {
          this.broadcastWatches(options);
        }
        return updateResult;
      };
      InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
        return this.batch({
          update,
          optimistic: optimisticId || optimisticId !== null
        });
      };
      InMemoryCache2.prototype.transformDocument = function(document) {
        if (this.addTypename) {
          var result2 = this.typenameDocumentCache.get(document);
          if (!result2) {
            result2 = addTypenameToDocument(document);
            this.typenameDocumentCache.set(document, result2);
            this.typenameDocumentCache.set(result2, result2);
          }
          return result2;
        }
        return document;
      };
      InMemoryCache2.prototype.broadcastWatches = function(options) {
        var _this = this;
        if (!this.txCount) {
          this.watches.forEach(function(c) {
            return _this.maybeBroadcastWatch(c, options);
          });
        }
      };
      InMemoryCache2.prototype.broadcastWatch = function(c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
          if (c.optimistic && typeof options.optimistic === "string") {
            diff.fromOptimisticTransaction = true;
          }
          if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
            return;
          }
        }
        if (!lastDiff || !equal(lastDiff.result, diff.result)) {
          c.callback(c.lastDiff = diff, lastDiff);
        }
      };
      return InMemoryCache2;
    }(ApolloCache);
  }
});

// node_modules/@apollo/client/cache/inmemory/types.js
var init_types2 = __esm({
  "node_modules/@apollo/client/cache/inmemory/types.js"() {
  }
});

// node_modules/@apollo/client/cache/index.js
var init_cache2 = __esm({
  "node_modules/@apollo/client/cache/index.js"() {
    init_globals();
    init_inMemoryCache();
    init_reactiveVars();
    init_object_canon();
    init_types2();
  }
});

// node_modules/@apollo/client/errors/index.js
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage, ApolloError;
var init_errors = __esm({
  "node_modules/@apollo/client/errors/index.js"() {
    init_modules();
    init_globals();
    init_utilities();
    generateErrorMessage = function(err) {
      var message = "";
      if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
        errors.forEach(function(error2) {
          var errorMessage = error2 ? error2.message : "Error message not found.";
          message += "".concat(errorMessage, "\n");
        });
      }
      if (err.networkError) {
        message += "".concat(err.networkError.message, "\n");
      }
      message = message.replace(/\n$/, "");
      return message;
    };
    ApolloError = function(_super) {
      __extends(ApolloError2, _super);
      function ApolloError2(_a5) {
        var graphQLErrors = _a5.graphQLErrors, clientErrors = _a5.clientErrors, networkError = _a5.networkError, errorMessage = _a5.errorMessage, extraInfo = _a5.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError2.prototype;
        return _this;
      }
      return ApolloError2;
    }(Error);
  }
});

// node_modules/@apollo/client/core/networkStatus.js
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
var NetworkStatus;
var init_networkStatus = __esm({
  "node_modules/@apollo/client/core/networkStatus.js"() {
    (function(NetworkStatus2) {
      NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
      NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
      NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
      NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
      NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
      NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
      NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
    })(NetworkStatus || (NetworkStatus = {}));
  }
});

// node_modules/@apollo/client/core/ObservableQuery.js
function reobserveCacheFirst(obsQuery) {
  var _a5 = obsQuery.options, fetchPolicy = _a5.fetchPolicy, nextFetchPolicy = _a5.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error2) {
  __DEV__ && invariant.error("Unhandled error", error2.message, error2.stack);
}
function logMissingFieldErrors(missing) {
  if (__DEV__ && missing) {
    __DEV__ && invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
  }
}
var assign, hasOwnProperty5, ObservableQuery;
var init_ObservableQuery = __esm({
  "node_modules/@apollo/client/core/ObservableQuery.js"() {
    init_modules();
    init_globals();
    init_equality_esm();
    init_networkStatus();
    init_utilities();
    assign = Object.assign;
    hasOwnProperty5 = Object.hasOwnProperty;
    ObservableQuery = function(_super) {
      __extends(ObservableQuery2, _super);
      function ObservableQuery2(_a5) {
        var queryManager = _a5.queryManager, queryInfo = _a5.queryInfo, options = _a5.options;
        var _this = _super.call(this, function(observer) {
          try {
            var subObserver = observer._subscription._observer;
            if (subObserver && !subObserver.error) {
              subObserver.error = defaultSubscriptionObserverErrorCallback;
            }
          } catch (_a6) {
          }
          var first = !_this.observers.size;
          _this.observers.add(observer);
          var last = _this.last;
          if (last && last.error) {
            observer.error && observer.error(last.error);
          } else if (last && last.result) {
            observer.next && observer.next(last.result);
          }
          if (first) {
            _this.reobserve().catch(function() {
            });
          }
          return function() {
            if (_this.observers.delete(observer) && !_this.observers.size) {
              _this.tearDownQuery();
            }
          };
        }) || this;
        _this.observers = /* @__PURE__ */ new Set();
        _this.subscriptions = /* @__PURE__ */ new Set();
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        _this.isTornDown = false;
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
        _this.options = __assign(__assign({}, options), { initialFetchPolicy, fetchPolicy });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = getOperationDefinition(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
      }
      Object.defineProperty(ObservableQuery2.prototype, "query", {
        get: function() {
          return this.queryManager.transform(this.options.query).document;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ObservableQuery2.prototype, "variables", {
        get: function() {
          return this.options.variables;
        },
        enumerable: false,
        configurable: true
      });
      ObservableQuery2.prototype.result = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var observer = {
            next: function(result2) {
              resolve(result2);
              _this.observers.delete(observer);
              if (!_this.observers.size) {
                _this.queryManager.removeQuery(_this.queryId);
              }
              setTimeout(function() {
                subscription.unsubscribe();
              }, 0);
            },
            error: reject
          };
          var subscription = _this.subscribe(observer);
        });
      };
      ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
        if (saveAsLastResult === void 0) {
          saveAsLastResult = true;
        }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
        var result2 = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
        var _a5 = this.options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5;
        if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers) {
        } else {
          var diff = this.queryInfo.getDiff();
          if (diff.complete || this.options.returnPartialData) {
            result2.data = diff.result;
          }
          if (equal(result2.data, {})) {
            result2.data = void 0;
          }
          if (diff.complete) {
            delete result2.partial;
            if (diff.complete && result2.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
              result2.networkStatus = NetworkStatus.ready;
              result2.loading = false;
            }
          } else {
            result2.partial = true;
          }
          if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result2.loading && !result2.data && !result2.error) {
            logMissingFieldErrors(diff.missing);
          }
        }
        if (saveAsLastResult) {
          this.updateLastResult(result2);
        }
        return result2;
      };
      ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
        return !this.last || !equal(this.last.result, newResult);
      };
      ObservableQuery2.prototype.getLast = function(key2, variablesMustMatch) {
        var last = this.last;
        if (last && last[key2] && (!variablesMustMatch || equal(last.variables, this.variables))) {
          return last[key2];
        }
      };
      ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
      };
      ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
      };
      ObservableQuery2.prototype.resetLastResults = function() {
        delete this.last;
        this.isTornDown = false;
      };
      ObservableQuery2.prototype.resetQueryStoreErrors = function() {
        this.queryManager.resetErrors(this.queryId);
      };
      ObservableQuery2.prototype.refetch = function(variables) {
        var _a5;
        var reobserveOptions = {
          pollInterval: 0
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === "cache-and-network") {
          reobserveOptions.fetchPolicy = fetchPolicy;
        } else if (fetchPolicy === "no-cache") {
          reobserveOptions.fetchPolicy = "no-cache";
        } else {
          reobserveOptions.fetchPolicy = "network-only";
        }
        if (__DEV__ && variables && hasOwnProperty5.call(variables, "variables")) {
          var queryDef = getQueryDefinition(this.query);
          var vars = queryDef.variableDefinitions;
          if (!vars || !vars.some(function(v) {
            return v.variable.name.value === "variables";
          })) {
            __DEV__ && invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a5 = queryDef.name) === null || _a5 === void 0 ? void 0 : _a5.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
          }
        }
        if (variables && !equal(this.options.variables, variables)) {
          reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, NetworkStatus.refetch);
      };
      ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
        var _this = this;
        var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = NetworkStatus.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) {
          this.observe();
        }
        var updatedQuerySet = /* @__PURE__ */ new Set();
        return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
          _this.queryManager.removeQuery(qid);
          if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
            queryInfo.networkStatus = originalNetworkStatus;
          }
          _this.queryManager.cache.batch({
            update: function(cache) {
              var updateQuery = fetchMoreOptions.updateQuery;
              if (updateQuery) {
                cache.updateQuery({
                  query: _this.query,
                  variables: _this.variables,
                  returnPartialData: true,
                  optimistic: false
                }, function(previous) {
                  return updateQuery(previous, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables
                  });
                });
              } else {
                cache.writeQuery({
                  query: combinedOptions.query,
                  variables: combinedOptions.variables,
                  data: fetchMoreResult.data
                });
              }
            },
            onWatchUpdated: function(watch) {
              updatedQuerySet.add(watch.query);
            }
          });
          return fetchMoreResult;
        }).finally(function() {
          if (!updatedQuerySet.has(_this.query)) {
            reobserveCacheFirst(_this);
          }
        });
      };
      ObservableQuery2.prototype.subscribeToMore = function(options) {
        var _this = this;
        var subscription = this.queryManager.startGraphQLSubscription({
          query: options.document,
          variables: options.variables,
          context: options.context
        }).subscribe({
          next: function(subscriptionData) {
            var updateQuery = options.updateQuery;
            if (updateQuery) {
              _this.updateQuery(function(previous, _a5) {
                var variables = _a5.variables;
                return updateQuery(previous, {
                  subscriptionData,
                  variables
                });
              });
            }
          },
          error: function(err) {
            if (options.onError) {
              options.onError(err);
              return;
            }
            __DEV__ && invariant.error("Unhandled GraphQL subscription error", err);
          }
        });
        this.subscriptions.add(subscription);
        return function() {
          if (_this.subscriptions.delete(subscription)) {
            subscription.unsubscribe();
          }
        };
      };
      ObservableQuery2.prototype.setOptions = function(newOptions) {
        return this.reobserve(newOptions);
      };
      ObservableQuery2.prototype.setVariables = function(variables) {
        if (equal(this.variables, variables)) {
          return this.observers.size ? this.result() : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
          return Promise.resolve();
        }
        return this.reobserve({
          fetchPolicy: this.options.initialFetchPolicy,
          variables
        }, NetworkStatus.setVariables);
      };
      ObservableQuery2.prototype.updateQuery = function(mapFn) {
        var queryManager = this.queryManager;
        var result2 = queryManager.cache.diff({
          query: this.options.query,
          variables: this.variables,
          returnPartialData: true,
          optimistic: false
        }).result;
        var newResult = mapFn(result2, {
          variables: this.variables
        });
        if (newResult) {
          queryManager.cache.writeQuery({
            query: this.options.query,
            data: newResult,
            variables: this.variables
          });
          queryManager.broadcastQueries();
        }
      };
      ObservableQuery2.prototype.startPolling = function(pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
      };
      ObservableQuery2.prototype.stopPolling = function() {
        this.options.pollInterval = 0;
        this.updatePolling();
      };
      ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
        if (options.nextFetchPolicy) {
          var _a5 = options.fetchPolicy, fetchPolicy = _a5 === void 0 ? "cache-first" : _a5, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
          if (fetchPolicy === "standby") {
          } else if (typeof options.nextFetchPolicy === "function") {
            options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
              reason,
              options,
              observable: this,
              initialFetchPolicy
            });
          } else if (reason === "variables-changed") {
            options.fetchPolicy = initialFetchPolicy;
          } else {
            options.fetchPolicy = options.nextFetchPolicy;
          }
        }
        return options.fetchPolicy;
      };
      ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
      };
      ObservableQuery2.prototype.updatePolling = function() {
        var _this = this;
        if (this.queryManager.ssrMode) {
          return;
        }
        var _a5 = this, pollingInfo = _a5.pollingInfo, pollInterval = _a5.options.pollInterval;
        if (!pollInterval) {
          if (pollingInfo) {
            clearTimeout(pollingInfo.timeout);
            delete this.pollingInfo;
          }
          return;
        }
        if (pollingInfo && pollingInfo.interval === pollInterval) {
          return;
        }
        __DEV__ ? invariant(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant(pollInterval, 10);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function() {
          if (_this.pollingInfo) {
            if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
              _this.reobserve({
                fetchPolicy: "network-only"
              }, NetworkStatus.poll).then(poll, poll);
            } else {
              poll();
            }
          }
          ;
        };
        var poll = function() {
          var info2 = _this.pollingInfo;
          if (info2) {
            clearTimeout(info2.timeout);
            info2.timeout = setTimeout(maybeFetch, info2.interval);
          }
        };
        poll();
      };
      ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
        if (variables === void 0) {
          variables = this.variables;
        }
        this.last = __assign(__assign({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
        if (!isNonEmptyArray(newResult.errors)) {
          delete this.last.error;
        }
        return this.last;
      };
      ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = compact2(this.options, newOptions || {});
        var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
        if (!useDisposableConcast) {
          this.updatePolling();
          if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && options.fetchPolicy !== "standby" && options.fetchPolicy === oldFetchPolicy) {
            this.applyNextFetchPolicy("variables-changed", options);
            if (newNetworkStatus === void 0) {
              newNetworkStatus = NetworkStatus.setVariables;
            }
          }
        }
        var variables = options.variables && __assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
          next: function(result2) {
            _this.reportResult(result2, variables);
          },
          error: function(error2) {
            _this.reportError(error2, variables);
          }
        };
        if (!useDisposableConcast) {
          if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
          }
          this.concast = concast;
          this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
      };
      ObservableQuery2.prototype.observe = function() {
        this.reportResult(this.getCurrentResult(false), this.variables);
      };
      ObservableQuery2.prototype.reportResult = function(result2, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result2)) {
          if (lastError || !result2.partial || this.options.returnPartialData) {
            this.updateLastResult(result2, variables);
          }
          iterateObserversSafely(this.observers, "next", result2);
        }
      };
      ObservableQuery2.prototype.reportError = function(error2, variables) {
        var errorResult = __assign(__assign({}, this.getLastResult()), { error: error2, errors: error2.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        iterateObserversSafely(this.observers, "error", this.last.error = error2);
      };
      ObservableQuery2.prototype.hasObservers = function() {
        return this.observers.size > 0;
      };
      ObservableQuery2.prototype.tearDownQuery = function() {
        if (this.isTornDown)
          return;
        if (this.concast && this.observer) {
          this.concast.removeObserver(this.observer);
          delete this.concast;
          delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function(sub) {
          return sub.unsubscribe();
        });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
      };
      return ObservableQuery2;
    }(Observable);
    fixObservableSubclass(ObservableQuery);
  }
});

// node_modules/@apollo/client/core/LocalState.js
var LocalState;
var init_LocalState = __esm({
  "node_modules/@apollo/client/core/LocalState.js"() {
    init_modules();
    init_globals();
    init_graphql();
    init_utilities();
    init_cache2();
    LocalState = function() {
      function LocalState2(_a5) {
        var cache = _a5.cache, client = _a5.client, resolvers = _a5.resolvers, fragmentMatcher = _a5.fragmentMatcher;
        this.cache = cache;
        if (client) {
          this.client = client;
        }
        if (resolvers) {
          this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
          this.setFragmentMatcher(fragmentMatcher);
        }
      }
      LocalState2.prototype.addResolvers = function(resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
          resolvers.forEach(function(resolverGroup) {
            _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
          });
        } else {
          this.resolvers = mergeDeep(this.resolvers, resolvers);
        }
      };
      LocalState2.prototype.setResolvers = function(resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
      };
      LocalState2.prototype.getResolvers = function() {
        return this.resolvers || {};
      };
      LocalState2.prototype.runResolvers = function(_a5) {
        var document = _a5.document, remoteResult = _a5.remoteResult, context = _a5.context, variables = _a5.variables, _b = _a5.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_c) {
            if (document) {
              return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
                return __assign(__assign({}, remoteResult), { data: localResult.result });
              })];
            }
            return [2, remoteResult];
          });
        });
      };
      LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
      };
      LocalState2.prototype.getFragmentMatcher = function() {
        return this.fragmentMatcher;
      };
      LocalState2.prototype.clientQuery = function(document) {
        if (hasDirectives(["client"], document)) {
          if (this.resolvers) {
            return document;
          }
        }
        return null;
      };
      LocalState2.prototype.serverQuery = function(document) {
        return removeClientSetsFromDocument(document);
      };
      LocalState2.prototype.prepareContext = function(context) {
        var cache = this.cache;
        return __assign(__assign({}, context), { cache, getCacheKey: function(obj) {
          return cache.identify(obj);
        } });
      };
      LocalState2.prototype.addExportedVariables = function(document, variables, context) {
        if (variables === void 0) {
          variables = {};
        }
        if (context === void 0) {
          context = {};
        }
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a5) {
            if (document) {
              return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function(data) {
                return __assign(__assign({}, variables), data.exportedVariables);
              })];
            }
            return [2, __assign({}, variables)];
          });
        });
      };
      LocalState2.prototype.shouldForceResolvers = function(document) {
        var forceResolvers = false;
        visit(document, {
          Directive: {
            enter: function(node) {
              if (node.name.value === "client" && node.arguments) {
                forceResolvers = node.arguments.some(function(arg) {
                  return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
                });
                if (forceResolvers) {
                  return BREAK;
                }
              }
            }
          }
        });
        return forceResolvers;
      };
      LocalState2.prototype.buildRootValueFromCache = function(document, variables) {
        return this.cache.diff({
          query: buildQueryFromSelectionSet(document),
          variables,
          returnPartialData: true,
          optimistic: false
        }).result;
      };
      LocalState2.prototype.resolveDocument = function(document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) {
          context = {};
        }
        if (variables === void 0) {
          variables = {};
        }
        if (fragmentMatcher === void 0) {
          fragmentMatcher = function() {
            return true;
          };
        }
        if (onlyRunForcedResolvers === void 0) {
          onlyRunForcedResolvers = false;
        }
        return __awaiter(this, void 0, void 0, function() {
          var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a5, cache, client, execContext;
          return __generator(this, function(_b) {
            mainDefinition = getMainDefinition(document);
            fragments = getFragmentDefinitions(document);
            fragmentMap = createFragmentMap(fragments);
            definitionOperation = mainDefinition.operation;
            defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
            _a5 = this, cache = _a5.cache, client = _a5.client;
            execContext = {
              fragmentMap,
              context: __assign(__assign({}, context), { cache, client }),
              variables,
              fragmentMatcher,
              defaultOperationType,
              exportedVariables: {},
              onlyRunForcedResolvers
            };
            return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result2) {
              return {
                result: result2,
                exportedVariables: execContext.exportedVariables
              };
            })];
          });
        });
      };
      LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
        return __awaiter(this, void 0, void 0, function() {
          var fragmentMap, context, variables, resultsToMerge, execute2;
          var _this = this;
          return __generator(this, function(_a5) {
            fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
            resultsToMerge = [rootValue];
            execute2 = function(selection) {
              return __awaiter(_this, void 0, void 0, function() {
                var fragment, typeCondition;
                return __generator(this, function(_a6) {
                  if (!shouldInclude(selection, variables)) {
                    return [2];
                  }
                  if (isField(selection)) {
                    return [2, this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                      var _a7;
                      if (typeof fieldResult !== "undefined") {
                        resultsToMerge.push((_a7 = {}, _a7[resultKeyNameFromField(selection)] = fieldResult, _a7));
                      }
                    })];
                  }
                  if (isInlineFragment(selection)) {
                    fragment = selection;
                  } else {
                    fragment = fragmentMap[selection.name.value];
                    __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value)) : invariant(fragment, 9);
                  }
                  if (fragment && fragment.typeCondition) {
                    typeCondition = fragment.typeCondition.name.value;
                    if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                      return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                        resultsToMerge.push(fragmentResult);
                      })];
                    }
                  }
                  return [2];
                });
              });
            };
            return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
              return mergeDeepArray(resultsToMerge);
            })];
          });
        });
      };
      LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
        return __awaiter(this, void 0, void 0, function() {
          var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
          var _this = this;
          return __generator(this, function(_a5) {
            variables = execContext.variables;
            fieldName = field.name.value;
            aliasedFieldName = resultKeyNameFromField(field);
            aliasUsed = fieldName !== aliasedFieldName;
            defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
            resultPromise = Promise.resolve(defaultResult);
            if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
              resolverType = rootValue.__typename || execContext.defaultOperationType;
              resolverMap = this.resolvers && this.resolvers[resolverType];
              if (resolverMap) {
                resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                if (resolve) {
                  resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                    rootValue,
                    argumentsObjectFromField(field, variables),
                    execContext.context,
                    { field, fragmentMap: execContext.fragmentMap }
                  ]));
                }
              }
            }
            return [2, resultPromise.then(function(result2) {
              if (result2 === void 0) {
                result2 = defaultResult;
              }
              if (field.directives) {
                field.directives.forEach(function(directive) {
                  if (directive.name.value === "export" && directive.arguments) {
                    directive.arguments.forEach(function(arg) {
                      if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                        execContext.exportedVariables[arg.value.value] = result2;
                      }
                    });
                  }
                });
              }
              if (!field.selectionSet) {
                return result2;
              }
              if (result2 == null) {
                return result2;
              }
              if (Array.isArray(result2)) {
                return _this.resolveSubSelectedArray(field, result2, execContext);
              }
              if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, result2, execContext);
              }
            })];
          });
        });
      };
      LocalState2.prototype.resolveSubSelectedArray = function(field, result2, execContext) {
        var _this = this;
        return Promise.all(result2.map(function(item) {
          if (item === null) {
            return null;
          }
          if (Array.isArray(item)) {
            return _this.resolveSubSelectedArray(field, item, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, item, execContext);
          }
        }));
      };
      return LocalState2;
    }();
  }
});

// node_modules/@apollo/client/core/QueryInfo.js
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
function shouldWriteResult(result2, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result2);
  if (!writeWithErrors && ignoreErrors && result2.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var destructiveMethodCounts, QueryInfo;
var init_QueryInfo = __esm({
  "node_modules/@apollo/client/core/QueryInfo.js"() {
    init_modules();
    init_equality_esm();
    init_ObservableQuery();
    init_utilities();
    init_networkStatus();
    destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
    QueryInfo = function() {
      function QueryInfo2(queryManager, queryId) {
        if (queryId === void 0) {
          queryId = queryManager.generateQueryId();
        }
        this.queryId = queryId;
        this.listeners = /* @__PURE__ */ new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = /* @__PURE__ */ new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
          destructiveMethodCounts.set(cache, 0);
          wrapDestructiveCacheMethod(cache, "evict");
          wrapDestructiveCacheMethod(cache, "modify");
          wrapDestructiveCacheMethod(cache, "reset");
        }
      }
      QueryInfo2.prototype.init = function(query2) {
        var networkStatus = query2.networkStatus || NetworkStatus.loading;
        if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query2.variables)) {
          networkStatus = NetworkStatus.setVariables;
        }
        if (!equal(query2.variables, this.variables)) {
          this.lastDiff = void 0;
        }
        Object.assign(this, {
          document: query2.document,
          variables: query2.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus
        });
        if (query2.observableQuery) {
          this.setObservableQuery(query2.observableQuery);
        }
        if (query2.lastRequestId) {
          this.lastRequestId = query2.lastRequestId;
        }
        return this;
      };
      QueryInfo2.prototype.reset = function() {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
      };
      QueryInfo2.prototype.getDiff = function(variables) {
        if (variables === void 0) {
          variables = this.variables;
        }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equal(options, this.lastDiff.options)) {
          return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
          return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
      };
      QueryInfo2.prototype.updateLastDiff = function(diff, options) {
        this.lastDiff = diff ? {
          diff,
          options: options || this.getDiffOptions()
        } : void 0;
      };
      QueryInfo2.prototype.getDiffOptions = function(variables) {
        var _a5;
        if (variables === void 0) {
          variables = this.variables;
        }
        return {
          query: this.document,
          variables,
          returnPartialData: true,
          optimistic: true,
          canonizeResults: (_a5 = this.observableQuery) === null || _a5 === void 0 ? void 0 : _a5.options.canonizeResults
        };
      };
      QueryInfo2.prototype.setDiff = function(diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
          this.dirty = true;
          if (!this.notifyTimeout) {
            this.notifyTimeout = setTimeout(function() {
              return _this.notify();
            }, 0);
          }
        }
      };
      QueryInfo2.prototype.setObservableQuery = function(oq) {
        var _this = this;
        if (oq === this.observableQuery)
          return;
        if (this.oqListener) {
          this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
          oq["queryInfo"] = this;
          this.listeners.add(this.oqListener = function() {
            var diff = _this.getDiff();
            if (diff.fromOptimisticTransaction) {
              oq["observe"]();
            } else {
              reobserveCacheFirst(oq);
            }
          });
        } else {
          delete this.oqListener;
        }
      };
      QueryInfo2.prototype.notify = function() {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
          this.listeners.forEach(function(listener) {
            return listener(_this);
          });
        }
        this.dirty = false;
      };
      QueryInfo2.prototype.shouldNotify = function() {
        if (!this.dirty || !this.listeners.size) {
          return false;
        }
        if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
          var fetchPolicy = this.observableQuery.options.fetchPolicy;
          if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
            return false;
          }
        }
        return true;
      };
      QueryInfo2.prototype.stop = function() {
        if (!this.stopped) {
          this.stopped = true;
          this.reset();
          this.cancel();
          this.cancel = QueryInfo2.prototype.cancel;
          this.subscriptions.forEach(function(sub) {
            return sub.unsubscribe();
          });
          var oq = this.observableQuery;
          if (oq)
            oq.stopPolling();
        }
      };
      QueryInfo2.prototype.cancel = function() {
      };
      QueryInfo2.prototype.updateWatch = function(variables) {
        var _this = this;
        if (variables === void 0) {
          variables = this.variables;
        }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
          return;
        }
        var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
          return _this.setDiff(diff);
        } });
        if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
          this.cancel();
          this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
      };
      QueryInfo2.prototype.resetLastWrite = function() {
        this.lastWrite = void 0;
      };
      QueryInfo2.prototype.shouldWrite = function(result2, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result2.data, lastWrite.result.data));
      };
      QueryInfo2.prototype.markResult = function(result2, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = isNonEmptyArray(result2.errors) ? result2.errors : [];
        this.reset();
        if (options.fetchPolicy === "no-cache") {
          this.updateLastDiff({ result: result2.data, complete: true }, this.getDiffOptions(options.variables));
        } else if (cacheWriteBehavior !== 0) {
          if (shouldWriteResult(result2, options.errorPolicy)) {
            this.cache.performTransaction(function(cache) {
              if (_this.shouldWrite(result2, options.variables)) {
                cache.writeQuery({
                  query: _this.document,
                  data: result2.data,
                  variables: options.variables,
                  overwrite: cacheWriteBehavior === 1
                });
                _this.lastWrite = {
                  result: result2,
                  variables: options.variables,
                  dmCount: destructiveMethodCounts.get(_this.cache)
                };
              } else {
                if (_this.lastDiff && _this.lastDiff.diff.complete) {
                  result2.data = _this.lastDiff.diff.result;
                  return;
                }
              }
              var diffOptions = _this.getDiffOptions(options.variables);
              var diff = cache.diff(diffOptions);
              if (!_this.stopped) {
                _this.updateWatch(options.variables);
              }
              _this.updateLastDiff(diff, diffOptions);
              if (diff.complete) {
                result2.data = diff.result;
              }
            });
          } else {
            this.lastWrite = void 0;
          }
        }
      };
      QueryInfo2.prototype.markReady = function() {
        this.networkError = null;
        return this.networkStatus = NetworkStatus.ready;
      };
      QueryInfo2.prototype.markError = function(error2) {
        this.networkStatus = NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error2.graphQLErrors) {
          this.graphQLErrors = error2.graphQLErrors;
        }
        if (error2.networkError) {
          this.networkError = error2.networkError;
        }
        return error2;
      };
      return QueryInfo2;
    }();
  }
});

// node_modules/@apollo/client/core/QueryManager.js
var hasOwnProperty6, QueryManager;
var init_QueryManager = __esm({
  "node_modules/@apollo/client/core/QueryManager.js"() {
    init_modules();
    init_globals();
    init_equality_esm();
    init_core();
    init_cache2();
    init_utilities();
    init_errors();
    init_ObservableQuery();
    init_networkStatus();
    init_LocalState();
    init_QueryInfo();
    hasOwnProperty6 = Object.prototype.hasOwnProperty;
    QueryManager = function() {
      function QueryManager2(_a5) {
        var cache = _a5.cache, link = _a5.link, defaultOptions2 = _a5.defaultOptions, _b = _a5.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a5.onBroadcast, _c = _a5.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a5.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a5.localState, assumeImmutableResults = _a5.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = /* @__PURE__ */ new Map();
        this.fetchCancelFns = /* @__PURE__ */ new Map();
        this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = /* @__PURE__ */ new Map();
        this.cache = cache;
        this.link = link;
        this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if (this.onBroadcast = onBroadcast) {
          this.mutationStore = /* @__PURE__ */ Object.create(null);
        }
      }
      QueryManager2.prototype.stop = function() {
        var _this = this;
        this.queries.forEach(function(_info, queryId) {
          _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(11));
      };
      QueryManager2.prototype.cancelPendingFetches = function(error2) {
        this.fetchCancelFns.forEach(function(cancel) {
          return cancel(error2);
        });
        this.fetchCancelFns.clear();
      };
      QueryManager2.prototype.mutate = function(_a5) {
        var _b, _c;
        var mutation = _a5.mutation, variables = _a5.variables, optimisticResponse = _a5.optimisticResponse, updateQueries = _a5.updateQueries, _d = _a5.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a5.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a5.update, onQueryUpdated = _a5.onQueryUpdated, _f = _a5.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a5.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a5.keepRootFields, context = _a5.context;
        return __awaiter(this, void 0, void 0, function() {
          var mutationId, mutationStoreValue, self2;
          return __generator(this, function(_h) {
            switch (_h.label) {
              case 0:
                __DEV__ ? invariant(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant(mutation, 12);
                __DEV__ ? invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 13);
                mutationId = this.generateMutationId();
                mutation = this.transform(mutation).document;
                variables = this.getVariables(mutation, variables);
                if (!this.transform(mutation).hasClientExports)
                  return [3, 2];
                return [4, this.localState.addExportedVariables(mutation, variables, context)];
              case 1:
                variables = _h.sent();
                _h.label = 2;
              case 2:
                mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                  mutation,
                  variables,
                  loading: true,
                  error: null
                });
                if (optimisticResponse) {
                  this.markMutationOptimistic(optimisticResponse, {
                    mutationId,
                    document: mutation,
                    variables,
                    fetchPolicy,
                    errorPolicy,
                    context,
                    updateQueries,
                    update: updateWithProxyFn,
                    keepRootFields
                  });
                }
                this.broadcastQueries();
                self2 = this;
                return [2, new Promise(function(resolve, reject) {
                  return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result2) {
                    if (graphQLResultHasError(result2) && errorPolicy === "none") {
                      throw new ApolloError({
                        graphQLErrors: result2.errors
                      });
                    }
                    if (mutationStoreValue) {
                      mutationStoreValue.loading = false;
                      mutationStoreValue.error = null;
                    }
                    var storeResult = __assign({}, result2);
                    if (typeof refetchQueries === "function") {
                      refetchQueries = refetchQueries(storeResult);
                    }
                    if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                      delete storeResult.errors;
                    }
                    return self2.markMutationResult({
                      mutationId,
                      result: storeResult,
                      document: mutation,
                      variables,
                      fetchPolicy,
                      errorPolicy,
                      context,
                      update: updateWithProxyFn,
                      updateQueries,
                      awaitRefetchQueries,
                      refetchQueries,
                      removeOptimistic: optimisticResponse ? mutationId : void 0,
                      onQueryUpdated,
                      keepRootFields
                    });
                  }).subscribe({
                    next: function(storeResult) {
                      self2.broadcastQueries();
                      resolve(storeResult);
                    },
                    error: function(err) {
                      if (mutationStoreValue) {
                        mutationStoreValue.loading = false;
                        mutationStoreValue.error = err;
                      }
                      if (optimisticResponse) {
                        self2.cache.removeOptimistic(mutationId);
                      }
                      self2.broadcastQueries();
                      reject(err instanceof ApolloError ? err : new ApolloError({
                        networkError: err
                      }));
                    }
                  });
                })];
            }
          });
        });
      };
      QueryManager2.prototype.markMutationResult = function(mutation, cache) {
        var _this = this;
        if (cache === void 0) {
          cache = this.cache;
        }
        var result2 = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result2, mutation.errorPolicy)) {
          cacheWrites.push({
            result: result2.data,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
          var updateQueries_1 = mutation.updateQueries;
          if (updateQueries_1) {
            this.queries.forEach(function(_a5, queryId) {
              var observableQuery = _a5.observableQuery;
              var queryName = observableQuery && observableQuery.queryName;
              if (!queryName || !hasOwnProperty6.call(updateQueries_1, queryName)) {
                return;
              }
              var updater = updateQueries_1[queryName];
              var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
              var _c = cache.diff({
                query: document,
                variables,
                returnPartialData: true,
                optimistic: false
              }), currentQueryResult = _c.result, complete = _c.complete;
              if (complete && currentQueryResult) {
                var nextQueryResult = updater(currentQueryResult, {
                  mutationResult: result2,
                  queryName: document && getOperationName(document) || void 0,
                  queryVariables: variables
                });
                if (nextQueryResult) {
                  cacheWrites.push({
                    result: nextQueryResult,
                    dataId: "ROOT_QUERY",
                    query: document,
                    variables
                  });
                }
              }
            });
          }
        }
        if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
          var results_1 = [];
          this.refetchQueries({
            updateCache: function(cache2) {
              if (!skipCache) {
                cacheWrites.forEach(function(write) {
                  return cache2.write(write);
                });
              }
              var update = mutation.update;
              if (update) {
                if (!skipCache) {
                  var diff = cache2.diff({
                    id: "ROOT_MUTATION",
                    query: _this.transform(mutation.document).asQuery,
                    variables: mutation.variables,
                    optimistic: false,
                    returnPartialData: true
                  });
                  if (diff.complete) {
                    result2 = __assign(__assign({}, result2), { data: diff.result });
                  }
                }
                update(cache2, result2, {
                  context: mutation.context,
                  variables: mutation.variables
                });
              }
              if (!skipCache && !mutation.keepRootFields) {
                cache2.modify({
                  id: "ROOT_MUTATION",
                  fields: function(value, _a5) {
                    var fieldName = _a5.fieldName, DELETE2 = _a5.DELETE;
                    return fieldName === "__typename" ? value : DELETE2;
                  }
                });
              }
            },
            include: mutation.refetchQueries,
            optimistic: false,
            removeOptimistic: mutation.removeOptimistic,
            onQueryUpdated: mutation.onQueryUpdated || null
          }).forEach(function(result3) {
            return results_1.push(result3);
          });
          if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
            return Promise.all(results_1).then(function() {
              return result2;
            });
          }
        }
        return Promise.resolve(result2);
      };
      QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function(cache) {
          try {
            _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
          } catch (error2) {
            __DEV__ && invariant.error(error2);
          }
        }, mutation.mutationId);
      };
      QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
      };
      QueryManager2.prototype.getQueryStore = function() {
        var store = /* @__PURE__ */ Object.create(null);
        this.queries.forEach(function(info, queryId) {
          store[queryId] = {
            variables: info.variables,
            networkStatus: info.networkStatus,
            networkError: info.networkError,
            graphQLErrors: info.graphQLErrors
          };
        });
        return store;
      };
      QueryManager2.prototype.resetErrors = function(queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
          queryInfo.networkError = void 0;
          queryInfo.graphQLErrors = [];
        }
      };
      QueryManager2.prototype.transform = function(document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
          var transformed = this.cache.transformDocument(document);
          var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
          var clientQuery = this.localState.clientQuery(transformed);
          var serverQuery = forLink && this.localState.serverQuery(forLink);
          var cacheEntry_1 = {
            document: transformed,
            hasClientExports: hasClientExports(transformed),
            hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
            clientQuery,
            serverQuery,
            defaultVars: getDefaultValues(getOperationDefinition(transformed)),
            asQuery: __assign(__assign({}, transformed), { definitions: transformed.definitions.map(function(def) {
              if (def.kind === "OperationDefinition" && def.operation !== "query") {
                return __assign(__assign({}, def), { operation: "query" });
              }
              return def;
            }) })
          };
          var add = function(doc) {
            if (doc && !transformCache.has(doc)) {
              transformCache.set(doc, cacheEntry_1);
            }
          };
          add(document);
          add(transformed);
          add(clientQuery);
          add(serverQuery);
        }
        return transformCache.get(document);
      };
      QueryManager2.prototype.getVariables = function(document, variables) {
        return __assign(__assign({}, this.transform(document).defaultVars), variables);
      };
      QueryManager2.prototype.watchQuery = function(options) {
        options = __assign(__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === "undefined") {
          options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
          queryManager: this,
          queryInfo,
          options
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
          document: observable.query,
          observableQuery: observable,
          variables: observable.variables
        });
        return observable;
      };
      QueryManager2.prototype.query = function(options, queryId) {
        var _this = this;
        if (queryId === void 0) {
          queryId = this.generateQueryId();
        }
        __DEV__ ? invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant(options.query, 14);
        __DEV__ ? invariant(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant(options.query.kind === "Document", 15);
        __DEV__ ? invariant(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant(!options.returnPartialData, 16);
        __DEV__ ? invariant(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant(!options.pollInterval, 17);
        return this.fetchQuery(queryId, options).finally(function() {
          return _this.stopQuery(queryId);
        });
      };
      QueryManager2.prototype.generateQueryId = function() {
        return String(this.queryIdCounter++);
      };
      QueryManager2.prototype.generateRequestId = function() {
        return this.requestIdCounter++;
      };
      QueryManager2.prototype.generateMutationId = function() {
        return String(this.mutationIdCounter++);
      };
      QueryManager2.prototype.stopQueryInStore = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
      };
      QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
          queryInfo.stop();
      };
      QueryManager2.prototype.clearStore = function(options) {
        if (options === void 0) {
          options = {
            discardWatches: true
          };
        }
        this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(18));
        this.queries.forEach(function(queryInfo) {
          if (queryInfo.observableQuery) {
            queryInfo.networkStatus = NetworkStatus.loading;
          } else {
            queryInfo.stop();
          }
        });
        if (this.mutationStore) {
          this.mutationStore = /* @__PURE__ */ Object.create(null);
        }
        return this.cache.reset(options);
      };
      QueryManager2.prototype.getObservableQueries = function(include) {
        var _this = this;
        if (include === void 0) {
          include = "active";
        }
        var queries = /* @__PURE__ */ new Map();
        var queryNamesAndDocs = /* @__PURE__ */ new Map();
        var legacyQueryOptions = /* @__PURE__ */ new Set();
        if (Array.isArray(include)) {
          include.forEach(function(desc) {
            if (typeof desc === "string") {
              queryNamesAndDocs.set(desc, false);
            } else if (isDocumentNode(desc)) {
              queryNamesAndDocs.set(_this.transform(desc).document, false);
            } else if (isNonNullObject(desc) && desc.query) {
              legacyQueryOptions.add(desc);
            }
          });
        }
        this.queries.forEach(function(_a5, queryId) {
          var oq = _a5.observableQuery, document = _a5.document;
          if (oq) {
            if (include === "all") {
              queries.set(queryId, oq);
              return;
            }
            var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
            if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
              return;
            }
            if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document && queryNamesAndDocs.has(document)) {
              queries.set(queryId, oq);
              if (queryName)
                queryNamesAndDocs.set(queryName, true);
              if (document)
                queryNamesAndDocs.set(document, true);
            }
          }
        });
        if (legacyQueryOptions.size) {
          legacyQueryOptions.forEach(function(options) {
            var queryId = makeUniqueId("legacyOneTimeQuery");
            var queryInfo = _this.getQuery(queryId).init({
              document: options.query,
              variables: options.variables
            });
            var oq = new ObservableQuery({
              queryManager: _this,
              queryInfo,
              options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
            });
            invariant(oq.queryId === queryId);
            queryInfo.setObservableQuery(oq);
            queries.set(queryId, oq);
          });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
          queryNamesAndDocs.forEach(function(included, nameOrDoc) {
            if (!included) {
              __DEV__ && invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
            }
          });
        }
        return queries;
      };
      QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
        var _this = this;
        if (includeStandby === void 0) {
          includeStandby = false;
        }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
          var fetchPolicy = observableQuery.options.fetchPolicy;
          observableQuery.resetLastResults();
          if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
            observableQueryPromises.push(observableQuery.refetch());
          }
          _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
      };
      QueryManager2.prototype.setObservableQuery = function(observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
      };
      QueryManager2.prototype.startGraphQLSubscription = function(_a5) {
        var _this = this;
        var query2 = _a5.query, fetchPolicy = _a5.fetchPolicy, errorPolicy = _a5.errorPolicy, variables = _a5.variables, _b = _a5.context, context = _b === void 0 ? {} : _b;
        query2 = this.transform(query2).document;
        variables = this.getVariables(query2, variables);
        var makeObservable = function(variables2) {
          return _this.getObservableFromLink(query2, context, variables2).map(function(result2) {
            if (fetchPolicy !== "no-cache") {
              if (shouldWriteResult(result2, errorPolicy)) {
                _this.cache.write({
                  query: query2,
                  result: result2.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: variables2
                });
              }
              _this.broadcastQueries();
            }
            if (graphQLResultHasError(result2)) {
              throw new ApolloError({
                graphQLErrors: result2.errors
              });
            }
            return result2;
          });
        };
        if (this.transform(query2).hasClientExports) {
          var observablePromise_1 = this.localState.addExportedVariables(query2, variables, context).then(makeObservable);
          return new Observable(function(observer) {
            var sub = null;
            observablePromise_1.then(function(observable) {
              return sub = observable.subscribe(observer);
            }, observer.error);
            return function() {
              return sub && sub.unsubscribe();
            };
          });
        }
        return makeObservable(variables);
      };
      QueryManager2.prototype.stopQuery = function(queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
      };
      QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
      };
      QueryManager2.prototype.removeQuery = function(queryId) {
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
          this.getQuery(queryId).stop();
          this.queries.delete(queryId);
        }
      };
      QueryManager2.prototype.broadcastQueries = function() {
        if (this.onBroadcast)
          this.onBroadcast();
        this.queries.forEach(function(info) {
          return info.notify();
        });
      };
      QueryManager2.prototype.getLocalState = function() {
        return this.localState;
      };
      QueryManager2.prototype.getObservableFromLink = function(query2, context, variables, deduplication) {
        var _this = this;
        var _a5;
        if (deduplication === void 0) {
          deduplication = (_a5 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a5 !== void 0 ? _a5 : this.queryDeduplication;
        }
        var observable;
        var serverQuery = this.transform(query2).serverQuery;
        if (serverQuery) {
          var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
          var operation = {
            query: serverQuery,
            variables,
            operationName: getOperationName(serverQuery) || void 0,
            context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
          };
          context = operation.context;
          if (deduplication) {
            var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
            inFlightLinkObservables_1.set(serverQuery, byVariables_1);
            var varJson_1 = canonicalStringify(variables);
            observable = byVariables_1.get(varJson_1);
            if (!observable) {
              var concast = new Concast([
                execute(link, operation)
              ]);
              byVariables_1.set(varJson_1, observable = concast);
              concast.cleanup(function() {
                if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
                  inFlightLinkObservables_1.delete(serverQuery);
                }
              });
            }
          } else {
            observable = new Concast([
              execute(link, operation)
            ]);
          }
        } else {
          observable = new Concast([
            Observable.of({ data: {} })
          ]);
          context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query2).clientQuery;
        if (clientQuery) {
          observable = asyncMap(observable, function(result2) {
            return _this.localState.runResolvers({
              document: clientQuery,
              remoteResult: result2,
              context,
              variables
            });
          });
        }
        return observable;
      };
      QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result2) {
          var hasErrors = isNonEmptyArray(result2.errors);
          if (requestId >= queryInfo.lastRequestId) {
            if (hasErrors && options.errorPolicy === "none") {
              throw queryInfo.markError(new ApolloError({
                graphQLErrors: result2.errors
              }));
            }
            queryInfo.markResult(result2, options, cacheWriteBehavior);
            queryInfo.markReady();
          }
          var aqr = {
            data: result2.data,
            loading: false,
            networkStatus: NetworkStatus.ready
          };
          if (hasErrors && options.errorPolicy !== "ignore") {
            aqr.errors = result2.errors;
            aqr.networkStatus = NetworkStatus.error;
          }
          return aqr;
        }, function(networkError) {
          var error2 = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
          if (requestId >= queryInfo.lastRequestId) {
            queryInfo.markError(error2);
          }
          throw error2;
        });
      };
      QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) {
          networkStatus = NetworkStatus.loading;
        }
        var query2 = this.transform(options.query).document;
        var variables = this.getVariables(query2, options.variables);
        var queryInfo = this.getQuery(queryId);
        var defaults = this.defaultOptions.watchQuery;
        var _a5 = options.fetchPolicy, fetchPolicy = _a5 === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a5, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
          query: query2,
          variables,
          fetchPolicy,
          errorPolicy,
          returnPartialData,
          notifyOnNetworkStatusChange,
          context
        });
        var fromVariables = function(variables2) {
          normalized.variables = variables2;
          var concastSources = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
          if (normalized.fetchPolicy !== "standby" && concastSources.length > 0 && queryInfo.observableQuery) {
            queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
          }
          return concastSources;
        };
        var cleanupCancelFn = function() {
          return _this.fetchCancelFns.delete(queryId);
        };
        this.fetchCancelFns.set(queryId, function(reason) {
          cleanupCancelFn();
          setTimeout(function() {
            return concast.cancel(reason);
          });
        });
        var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
        concast.promise.then(cleanupCancelFn, cleanupCancelFn);
        return concast;
      };
      QueryManager2.prototype.refetchQueries = function(_a5) {
        var _this = this;
        var updateCache = _a5.updateCache, include = _a5.include, _b = _a5.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a5.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a5.onQueryUpdated;
        var includedQueriesById = /* @__PURE__ */ new Map();
        if (include) {
          this.getObservableQueries(include).forEach(function(oq, queryId) {
            includedQueriesById.set(queryId, {
              oq,
              lastDiff: _this.getQuery(queryId).getDiff()
            });
          });
        }
        var results = /* @__PURE__ */ new Map();
        if (updateCache) {
          this.cache.batch({
            update: updateCache,
            optimistic: optimistic && removeOptimistic || false,
            removeOptimistic,
            onWatchUpdated: function(watch, diff, lastDiff) {
              var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
              if (oq) {
                if (onQueryUpdated) {
                  includedQueriesById.delete(oq.queryId);
                  var result2 = onQueryUpdated(oq, diff, lastDiff);
                  if (result2 === true) {
                    result2 = oq.refetch();
                  }
                  if (result2 !== false) {
                    results.set(oq, result2);
                  }
                  return result2;
                }
                if (onQueryUpdated !== null) {
                  includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
                }
              }
            }
          });
        }
        if (includedQueriesById.size) {
          includedQueriesById.forEach(function(_a6, queryId) {
            var oq = _a6.oq, lastDiff = _a6.lastDiff, diff = _a6.diff;
            var result2;
            if (onQueryUpdated) {
              if (!diff) {
                var info = oq["queryInfo"];
                info.reset();
                diff = info.getDiff();
              }
              result2 = onQueryUpdated(oq, diff, lastDiff);
            }
            if (!onQueryUpdated || result2 === true) {
              result2 = oq.refetch();
            }
            if (result2 !== false) {
              results.set(oq, result2);
            }
            if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
              _this.stopQueryNoBroadcast(queryId);
            }
          });
        }
        if (removeOptimistic) {
          this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
      };
      QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a5, networkStatus) {
        var _this = this;
        var query2 = _a5.query, variables = _a5.variables, fetchPolicy = _a5.fetchPolicy, refetchWritePolicy = _a5.refetchWritePolicy, errorPolicy = _a5.errorPolicy, returnPartialData = _a5.returnPartialData, context = _a5.context, notifyOnNetworkStatusChange = _a5.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
          document: this.transform(query2).document,
          variables,
          networkStatus
        });
        var readCache = function() {
          return queryInfo.getDiff(variables);
        };
        var resultsFromCache = function(diff2, networkStatus2) {
          if (networkStatus2 === void 0) {
            networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
          }
          var data = diff2.result;
          if (__DEV__ && !returnPartialData && !equal(data, {})) {
            logMissingFieldErrors(diff2.missing);
          }
          var fromData = function(data2) {
            return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
          };
          if (data && _this.transform(query2).hasForcedResolvers) {
            return _this.localState.runResolvers({
              document: query2,
              remoteResult: { data },
              context,
              variables,
              onlyRunForcedResolvers: true
            }).then(function(resolved) {
              return fromData(resolved.data || void 0);
            });
          }
          return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
        var resultsFromLink = function() {
          return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
            variables,
            context,
            fetchPolicy,
            errorPolicy
          });
        };
        var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
        switch (fetchPolicy) {
          default:
          case "cache-first": {
            var diff = readCache();
            if (diff.complete) {
              return [
                resultsFromCache(diff, queryInfo.markReady())
              ];
            }
            if (returnPartialData || shouldNotify) {
              return [
                resultsFromCache(diff),
                resultsFromLink()
              ];
            }
            return [
              resultsFromLink()
            ];
          }
          case "cache-and-network": {
            var diff = readCache();
            if (diff.complete || returnPartialData || shouldNotify) {
              return [
                resultsFromCache(diff),
                resultsFromLink()
              ];
            }
            return [
              resultsFromLink()
            ];
          }
          case "cache-only":
            return [
              resultsFromCache(readCache(), queryInfo.markReady())
            ];
          case "network-only":
            if (shouldNotify) {
              return [
                resultsFromCache(readCache()),
                resultsFromLink()
              ];
            }
            return [resultsFromLink()];
          case "no-cache":
            if (shouldNotify) {
              return [
                resultsFromCache(queryInfo.getDiff()),
                resultsFromLink()
              ];
            }
            return [resultsFromLink()];
          case "standby":
            return [];
        }
      };
      QueryManager2.prototype.getQuery = function(queryId) {
        if (queryId && !this.queries.has(queryId)) {
          this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
      };
      QueryManager2.prototype.prepareContext = function(context) {
        if (context === void 0) {
          context = {};
        }
        var newContext = this.localState.prepareContext(context);
        return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
      };
      return QueryManager2;
    }();
  }
});

// node_modules/@apollo/client/core/ApolloClient.js
var hasSuggestedDevtools, ApolloClient;
var init_ApolloClient = __esm({
  "node_modules/@apollo/client/core/ApolloClient.js"() {
    init_modules();
    init_globals();
    init_core();
    init_version();
    init_http();
    init_QueryManager();
    init_LocalState();
    init_utilities();
    hasSuggestedDevtools = false;
    ApolloClient = function() {
      function ApolloClient2(options) {
        var _this = this;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a5 = options.ssrMode, ssrMode = _a5 === void 0 ? false : _a5, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
          link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
        }
        if (!cache) {
          throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(7);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
          setTimeout(function() {
            return _this.disableNetworkFetches = false;
          }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === "object") {
          window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && __DEV__) {
          hasSuggestedDevtools = true;
          if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var nav = window.navigator;
            var ua = nav && nav.userAgent;
            var url = void 0;
            if (typeof ua === "string") {
              if (ua.indexOf("Chrome/") > -1) {
                url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
              } else if (ua.indexOf("Firefox/") > -1) {
                url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
              }
            }
            if (url) {
              __DEV__ && invariant.log("Download the Apollo DevTools for a better development experience: " + url);
            }
          }
        }
        this.version = version;
        this.localState = new LocalState({
          cache,
          client: this,
          resolvers,
          fragmentMatcher
        });
        this.queryManager = new QueryManager({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          queryDeduplication,
          ssrMode,
          clientAwareness: {
            name: clientAwarenessName,
            version: clientAwarenessVersion
          },
          localState: this.localState,
          assumeImmutableResults,
          onBroadcast: connectToDevTools ? function() {
            if (_this.devToolsHookCb) {
              _this.devToolsHookCb({
                action: {},
                state: {
                  queries: _this.queryManager.getQueryStore(),
                  mutations: _this.queryManager.mutationStore || {}
                },
                dataWithOptimisticResults: _this.cache.extract(true)
              });
            }
          } : void 0
        });
      }
      ApolloClient2.prototype.stop = function() {
        this.queryManager.stop();
      };
      ApolloClient2.prototype.watchQuery = function(options) {
        if (this.defaultOptions.watchQuery) {
          options = mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
          options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
        }
        return this.queryManager.watchQuery(options);
      };
      ApolloClient2.prototype.query = function(options) {
        if (this.defaultOptions.query) {
          options = mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? invariant(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant(options.fetchPolicy !== "cache-and-network", 8);
        if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
          options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
        }
        return this.queryManager.query(options);
      };
      ApolloClient2.prototype.mutate = function(options) {
        if (this.defaultOptions.mutate) {
          options = mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
      };
      ApolloClient2.prototype.subscribe = function(options) {
        return this.queryManager.startGraphQLSubscription(options);
      };
      ApolloClient2.prototype.readQuery = function(options, optimistic) {
        if (optimistic === void 0) {
          optimistic = false;
        }
        return this.cache.readQuery(options, optimistic);
      };
      ApolloClient2.prototype.readFragment = function(options, optimistic) {
        if (optimistic === void 0) {
          optimistic = false;
        }
        return this.cache.readFragment(options, optimistic);
      };
      ApolloClient2.prototype.writeQuery = function(options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
      };
      ApolloClient2.prototype.writeFragment = function(options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
      };
      ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
        this.devToolsHookCb = cb;
      };
      ApolloClient2.prototype.__requestRaw = function(payload) {
        return execute(this.link, payload);
      };
      ApolloClient2.prototype.resetStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
          return _this.queryManager.clearStore({
            discardWatches: false
          });
        }).then(function() {
          return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
            return fn();
          }));
        }).then(function() {
          return _this.reFetchObservableQueries();
        });
      };
      ApolloClient2.prototype.clearStore = function() {
        var _this = this;
        return Promise.resolve().then(function() {
          return _this.queryManager.clearStore({
            discardWatches: true
          });
        }).then(function() {
          return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
            return fn();
          }));
        });
      };
      ApolloClient2.prototype.onResetStore = function(cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function() {
          _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
            return c !== cb;
          });
        };
      };
      ApolloClient2.prototype.onClearStore = function(cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function() {
          _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
            return c !== cb;
          });
        };
      };
      ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
      };
      ApolloClient2.prototype.refetchQueries = function(options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function(result3, obsQuery) {
          queries.push(obsQuery);
          results.push(result3);
        });
        var result2 = Promise.all(results);
        result2.queries = queries;
        result2.results = results;
        result2.catch(function(error2) {
          __DEV__ && invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error2));
        });
        return result2;
      };
      ApolloClient2.prototype.getObservableQueries = function(include) {
        if (include === void 0) {
          include = "active";
        }
        return this.queryManager.getObservableQueries(include);
      };
      ApolloClient2.prototype.extract = function(optimistic) {
        return this.cache.extract(optimistic);
      };
      ApolloClient2.prototype.restore = function(serializedState) {
        return this.cache.restore(serializedState);
      };
      ApolloClient2.prototype.addResolvers = function(resolvers) {
        this.localState.addResolvers(resolvers);
      };
      ApolloClient2.prototype.setResolvers = function(resolvers) {
        this.localState.setResolvers(resolvers);
      };
      ApolloClient2.prototype.getResolvers = function() {
        return this.localState.getResolvers();
      };
      ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
      };
      ApolloClient2.prototype.setLink = function(newLink) {
        this.link = this.queryManager.link = newLink;
      };
      return ApolloClient2;
    }();
  }
});

// node_modules/@apollo/client/core/types.js
var init_types3 = __esm({
  "node_modules/@apollo/client/core/types.js"() {
  }
});

// node_modules/graphql-tag/lib/index.js
function normalize2(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize2(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key2) {
      var value = node[key2];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize2(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse2(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result2 = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result2 += arg.loc.source.body;
    } else {
      result2 += arg;
    }
    result2 += literals[i + 1];
  });
  return parseDocument(result2);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var docCache, fragmentSourceMap, printFragmentWarnings, experimentalFragmentVariables, extras;
var init_lib = __esm({
  "node_modules/graphql-tag/lib/index.js"() {
    init_modules();
    init_graphql();
    docCache = /* @__PURE__ */ new Map();
    fragmentSourceMap = /* @__PURE__ */ new Map();
    printFragmentWarnings = true;
    experimentalFragmentVariables = false;
    extras = {
      gql,
      resetCaches,
      disableFragmentWarnings,
      enableExperimentalFragmentVariables,
      disableExperimentalFragmentVariables
    };
    (function(gql_1) {
      gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
    })(gql || (gql = {}));
    gql["default"] = gql;
  }
});

// node_modules/@apollo/client/core/index.js
var init_core2 = __esm({
  "node_modules/@apollo/client/core/index.js"() {
    init_globals();
    init_ApolloClient();
    init_types3();
    init_cache2();
    init_types2();
    init_core();
    init_http();
    init_invariant();
    init_lib();
    setVerbosity(DEV_default ? "log" : "silent");
  }
});

// .svelte-kit/output/server/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  load: () => load
});
async function load() {
  const { data } = await query(GLOBAL_QUERY);
  if (data) {
    return data.global;
  }
  throw error(404, "Not found");
}
var PUBLIC_API_URL, apolloClient, query, GLOBAL_QUERY;
var init_layout_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.server.ts.js"() {
    init_index2();
    init_core2();
    PUBLIC_API_URL = "https://api-eu-central-1.hygraph.com/v2/cl7xpa27c324f01ughw839w8s/master";
    apolloClient = new ApolloClient({
      uri: PUBLIC_API_URL,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network"
        },
        query: {
          fetchPolicy: "no-cache"
        }
      }
    });
    query = async (q) => {
      return apolloClient.query({
        query: q
      });
    };
    GLOBAL_QUERY = gql`
    query GlobalQuery {
        global(
            where: {
                id: "cl80kqj8v5rvq0cuiey1q43sr"
            }
        ) {
            spotifySongId
            logo {
                url
                width
                height
            }
            navigation {
                id
                label
                slug
            }
        }
    }
`;
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Logo, Header, Footer, Navigation, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_chunks();
    Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<a href="${"/"}"><svg class="${"text-primary w-32"}" viewBox="${"0 0 815 407"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M200.613 50.501H159.93L164.705 27.39H272.238L267.272 50.501H226.78L202.905 163H176.547L200.613 50.501ZM285.03 164.91C276.626 164.91 269.304 163.127 263.065 159.562C256.953 155.869 252.242 150.84 248.931 144.473C245.748 137.979 244.156 130.657 244.156 122.508C244.156 114.231 245.748 106.4 248.931 99.015C252.114 91.6297 256.571 85.1357 262.301 79.533C268.031 73.803 274.716 69.3463 282.356 66.163C289.996 62.8523 298.273 61.197 307.186 61.197C314.444 61.197 320.747 62.2793 326.095 64.444C331.443 66.6087 335.581 69.792 338.51 73.994C341.439 78.0687 342.903 83.0983 342.903 89.083C342.903 99.6517 338.064 107.674 328.387 113.149C318.837 118.624 304.448 121.362 285.221 121.362C281.401 121.362 277.263 121.298 272.806 121.171C268.349 120.916 263.511 120.534 258.29 120.025L261.537 103.981C266.121 104.363 270.323 104.681 274.143 104.936C277.963 105.063 281.719 105.127 285.412 105.127C293.689 105.127 300.183 104.554 304.894 103.408C309.733 102.262 313.234 100.607 315.399 98.442C317.564 96.2773 318.646 93.7307 318.646 90.802C318.646 88.2553 318.009 86.218 316.736 84.69C315.463 83.0347 313.68 81.825 311.388 81.061C309.223 80.1697 306.613 79.724 303.557 79.724C298.591 79.724 294.007 80.9337 289.805 83.353C285.73 85.645 282.165 88.8283 279.109 92.903C276.053 96.9777 273.697 101.625 272.042 106.846C270.387 112.067 269.559 117.606 269.559 123.463C269.559 127.792 270.259 131.74 271.66 135.305C273.188 138.743 275.416 141.417 278.345 143.327C281.274 145.237 285.03 146.192 289.614 146.192C294.707 146.192 299.482 144.982 303.939 142.563C308.523 140.144 312.152 136.769 314.826 132.44L335.072 138.743C331.761 143.836 327.432 148.357 322.084 152.304C316.736 156.251 310.879 159.371 304.512 161.663C298.145 163.828 291.651 164.91 285.03 164.91ZM390.038 164.91C381.125 164.91 373.612 163 367.5 159.18C361.388 155.36 356.804 150.267 353.748 143.9C350.692 137.406 349.164 130.339 349.164 122.699C349.164 114.804 350.692 107.164 353.748 99.779C356.804 92.3937 361.07 85.836 366.545 80.106C372.148 74.2487 378.769 69.6647 386.409 66.354C394.049 62.916 402.453 61.197 411.621 61.197C422.317 61.197 430.785 63.5527 437.024 68.264C443.391 72.9753 447.593 79.151 449.63 86.791L423.272 94.431C421.999 90.7383 419.962 87.937 417.16 86.027C414.359 83.9897 410.985 82.971 407.037 82.971C403.09 82.971 399.206 83.926 395.386 85.836C391.694 87.6187 388.319 90.229 385.263 93.667C382.335 96.9777 379.979 100.861 378.196 105.318C376.541 109.775 375.713 114.55 375.713 119.643C375.713 124.227 376.477 128.302 378.005 131.867C379.533 135.432 381.698 138.234 384.499 140.271C387.301 142.181 390.548 143.136 394.24 143.136C397.042 143.136 399.779 142.627 402.453 141.608C405.255 140.589 407.801 139.189 410.093 137.406C412.385 135.623 414.232 133.586 415.632 131.294L438.934 138.934C435.624 143.9 431.485 148.357 426.519 152.304C421.553 156.251 415.951 159.371 409.711 161.663C403.599 163.828 397.042 164.91 390.038 164.91ZM478.661 23.57H504.255L491.84 81.443C496.678 75.0763 502.472 70.1103 509.221 66.545C515.969 62.9797 522.909 61.197 530.04 61.197C536.024 61.197 540.672 62.2793 543.983 64.444C547.421 66.4813 549.84 69.2827 551.241 72.848C552.769 76.286 553.533 80.2333 553.533 84.69C553.533 87.2367 553.342 89.847 552.96 92.521C552.705 95.195 552.26 97.869 551.623 100.543L538.444 163H512.85L524.692 106.846C525.074 105.063 525.328 103.408 525.456 101.88C525.71 100.352 525.838 98.8877 525.838 97.487C525.838 92.7757 524.819 89.3377 522.782 87.173C520.744 84.881 517.879 83.735 514.187 83.735C511.513 83.735 508.393 84.6263 504.828 86.409C501.39 88.1917 498.079 90.6747 494.896 93.858C491.712 96.914 489.102 100.479 487.065 104.554L474.65 163H449.056L478.661 23.57ZM178.839 218.39H263.834L261.351 230.232H189.535L179.03 279.128H241.678L239.386 290.397H176.738L165.66 342.158H239.195L236.712 354H149.998L178.839 218.39ZM293.636 304.531L268.233 254.489H282.176L301.658 293.453L302.422 296.318L304.523 293.644L340.813 254.489H354.756L308.152 304.531L333.555 354H319.612L300.13 315.227L298.984 312.553L297.074 315.036L261.166 354H247.032L293.636 304.531ZM371.458 254.489H382.918L378.907 273.78C384 267.541 390.048 262.511 397.052 258.691C404.182 254.744 411.313 252.77 418.444 252.77C425.829 252.77 432.132 254.744 437.353 258.691C442.701 262.511 446.775 267.604 449.577 273.971C452.378 280.338 453.779 287.214 453.779 294.599C453.779 302.366 452.314 309.943 449.386 317.328C446.457 324.586 442.446 331.144 437.353 337.001C432.259 342.858 426.402 347.506 419.781 350.944C413.159 354.255 406.092 355.91 398.58 355.91C390.685 355.91 384.127 353.745 378.907 349.416C373.686 345.087 369.93 339.739 367.638 333.372L354.65 394.683H341.662L371.458 254.489ZM397.434 344.45C403.164 344.45 408.575 343.049 413.669 340.248C418.889 337.447 423.473 333.754 427.421 329.17C431.368 324.586 434.488 319.429 436.78 313.699C439.072 307.969 440.218 302.303 440.218 296.7C440.218 290.715 439.072 285.304 436.78 280.465C434.615 275.499 431.495 271.552 427.421 268.623C423.346 265.694 418.507 264.23 412.905 264.23C409.849 264.23 406.474 264.867 402.782 266.14C399.216 267.413 395.651 269.26 392.086 271.679C388.648 273.971 385.592 276.581 382.918 279.51C380.244 282.439 378.27 285.558 376.997 288.869L370.503 319.429C371.394 324.14 373.049 328.406 375.469 332.226C378.015 335.919 381.135 338.911 384.828 341.203C388.648 343.368 392.85 344.45 397.434 344.45ZM484.486 254.489H496.71L491.553 278.364C496.519 271.233 502.186 265.503 508.552 261.174C514.919 256.845 521.286 254.553 527.652 254.298C528.671 254.298 529.562 254.362 530.326 254.489C531.09 254.489 531.727 254.553 532.236 254.68L529.753 265.949C521.604 266.204 513.9 268.623 506.642 273.207C499.384 277.791 493.654 284.094 489.452 292.116L476.464 354H463.476L484.486 254.489ZM568.168 355.91C560.019 355.91 553.079 354.064 547.349 350.371C541.619 346.551 537.226 341.458 534.17 335.091C531.114 328.724 529.523 321.594 529.395 313.699C529.395 305.804 530.796 298.228 533.597 290.97C536.526 283.712 540.601 277.218 545.821 271.488C551.169 265.758 557.409 261.238 564.539 257.927C571.67 254.489 579.437 252.77 587.841 252.77C594.081 252.77 599.683 253.789 604.649 255.826C609.615 257.863 613.499 260.856 616.3 264.803C619.229 268.75 620.693 273.716 620.693 279.701C620.821 289.76 616.491 297.209 607.705 302.048C599.047 306.759 585.74 309.115 567.786 309.115C563.839 309.115 559.446 309.051 554.607 308.924C549.896 308.669 544.484 308.287 538.372 307.778L540.282 298.61C546.394 298.992 551.615 299.31 555.944 299.565C560.401 299.692 564.539 299.756 568.359 299.756C578.546 299.756 586.568 298.992 592.425 297.464C598.283 295.809 602.485 293.453 605.031 290.397C607.705 287.341 608.979 283.776 608.851 279.701C608.851 275.754 607.833 272.57 605.795 270.151C603.758 267.604 601.084 265.758 597.773 264.612C594.59 263.466 590.961 262.893 586.886 262.893C580.265 262.893 574.217 264.357 568.741 267.286C563.393 270.087 558.746 273.907 554.798 278.746C550.851 283.457 547.795 288.805 545.63 294.79C543.593 300.775 542.574 306.887 542.574 313.126C542.702 319.111 543.784 324.586 545.821 329.552C547.859 334.518 550.915 338.529 554.989 341.585C559.191 344.514 564.348 345.978 570.46 345.978C577.082 345.978 583.257 344.323 588.987 341.012C594.845 337.701 599.429 333.181 602.739 327.451L613.435 330.698C610.507 335.664 606.687 340.057 601.975 343.877C597.264 347.57 592.043 350.498 586.313 352.663C580.583 354.828 574.535 355.91 568.168 355.91ZM660.069 355.91C652.302 355.91 645.171 354.637 638.677 352.09C632.183 349.543 626.899 345.851 622.824 341.012L630.464 332.226C634.793 336.81 639.505 340.184 644.598 342.349C649.691 344.514 655.23 345.596 661.215 345.596C666.945 345.596 671.975 344.768 676.304 343.113C680.633 341.33 684.008 338.911 686.427 335.855C688.974 332.672 690.247 328.979 690.247 324.777C690.247 319.938 688.146 316.564 683.944 314.654C679.869 312.617 673.885 310.516 665.99 308.351C660.005 306.568 654.976 304.913 650.901 303.385C646.826 301.73 643.77 299.692 641.733 297.273C639.823 294.726 638.868 291.225 638.868 286.768C638.868 279.765 640.714 273.78 644.407 268.814C648.227 263.721 653.32 259.773 659.687 256.972C666.054 254.171 673.184 252.77 681.079 252.77C688.592 252.77 695.022 254.043 700.37 256.59C705.718 259.137 709.856 262.384 712.785 266.331L704.763 273.971C702.089 270.151 698.651 267.35 694.449 265.567C690.247 263.784 685.408 262.893 679.933 262.893C674.967 262.893 670.319 263.657 665.99 265.185C661.661 266.713 658.159 269.005 655.485 272.061C652.938 275.117 651.665 279.001 651.665 283.712C651.665 287.914 653.193 290.906 656.249 292.689C659.432 294.344 664.589 296.127 671.72 298.037C678.469 299.947 684.199 301.921 688.91 303.958C693.749 305.868 697.378 308.287 699.797 311.216C702.216 314.145 703.426 318.028 703.426 322.867C703.426 329.361 701.58 335.091 697.887 340.057C694.322 345.023 689.292 348.907 682.798 351.708C676.304 354.509 668.728 355.91 660.069 355.91ZM749.414 355.91C741.646 355.91 734.516 354.637 728.022 352.09C721.528 349.543 716.243 345.851 712.169 341.012L719.809 332.226C724.138 336.81 728.849 340.184 733.943 342.349C739.036 344.514 744.575 345.596 750.56 345.596C756.29 345.596 761.319 344.768 765.649 343.113C769.978 341.33 773.352 338.911 775.772 335.855C778.318 332.672 779.592 328.979 779.592 324.777C779.592 319.938 777.491 316.564 773.289 314.654C769.214 312.617 763.229 310.516 755.335 308.351C749.35 306.568 744.32 304.913 740.246 303.385C736.171 301.73 733.115 299.692 731.078 297.273C729.168 294.726 728.213 291.225 728.213 286.768C728.213 279.765 730.059 273.78 733.752 268.814C737.572 263.721 742.665 259.773 749.032 256.972C755.398 254.171 762.529 252.77 770.424 252.77C777.936 252.77 784.367 254.043 789.715 256.59C795.063 259.137 799.201 262.384 802.13 266.331L794.108 273.971C791.434 270.151 787.996 267.35 783.794 265.567C779.592 263.784 774.753 262.893 769.278 262.893C764.312 262.893 759.664 263.657 755.335 265.185C751.005 266.713 747.504 269.005 744.83 272.061C742.283 275.117 741.01 279.001 741.01 283.712C741.01 287.914 742.538 290.906 745.594 292.689C748.777 294.344 753.934 296.127 761.065 298.037C767.813 299.947 773.543 301.921 778.255 303.958C783.093 305.868 786.722 308.287 789.142 311.216C791.561 314.145 792.771 318.028 792.771 322.867C792.771 329.361 790.924 335.091 787.232 340.057C783.666 345.023 778.637 348.907 772.143 351.708C765.649 354.509 758.072 355.91 749.414 355.91Z"}" fill="${"currentColor"}"></path><rect x="${"71.9507"}" y="${"76.2178"}" width="${"73.4615"}" height="${"16.5288"}" rx="${"8.26442"}" fill="${"currentColor"}"></rect><rect x="${"41.6499"}" y="${"111.112"}" width="${"95.5"}" height="${"16.5288"}" rx="${"8.26442"}" fill="${"currentColor"}"></rect><rect x="${"4"}" y="${"146.008"}" width="${"124.885"}" height="${"16.5288"}" rx="${"8.26442"}" fill="${"currentColor"}"></rect></svg></a>`;
    });
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<header class="${"px-4 sm:px-8 py-6 bg-stone-200 z-50 fixed w-full"}"><div class="${"2xl:container flex justify-center"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div></header>`;
    });
    Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const year = new Date().getFullYear();
      return `<footer class="${"px-4 sm:px-8 py-6"}"><div class="${"2xl:container flex justify-center"}"><span class="${"text-stone-400"}">\xA9 ${escape(year)} techexpress.com
        </span></div></footer>`;
    });
    Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { items = [] } = $$props;
      if ($$props.items === void 0 && $$bindings.items && items !== void 0)
        $$bindings.items(items);
      return `<div class="${"fixed w-full inset-x-0 bottom-8 pointer-events-none flex justify-center"}"><nav class="${"px-6 rounded-xl bg-primary/80 backdrop-blur-sm shadow-xl pointer-events-auto"}"><ul class="${"flex text-white -mx-3"}">${each(items, (item) => {
        return `<li><a${add_attribute("href", item.slug || "/", 0)} class="${"block px-3 py-4"}"><span>${escape(item.label)}
                        </span></a>
                </li>`;
      })}</ul></nav></div>`;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"pt-32"}">${slots.default ? slots.default({}) : ``}

    ${validate_component(Navigation, "Navigation").$$render($$result, { items: data.navigation }, {}, {})}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  server: () => layout_server_ts_exports,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_server_ts();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-47c6ad85.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-47c6ad85.js", "_app/immutable/chunks/index-af2df355.js"];
    stylesheets = ["_app/immutable/assets/_layout-b616ef54.css"];
  }
});

// .svelte-kit/output/server/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a5;
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}: ${escape((_a5 = $page.error) == null ? void 0 : _a5.message)}</h1>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/pages/_error.svelte-ea27fe0b.js";
    imports2 = ["_app/immutable/components/pages/_error.svelte-ea27fe0b.js", "_app/immutable/chunks/index-af2df355.js", "_app/immutable/chunks/singletons-6803cca9.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Music, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    Music = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title = "Current mood" } = $$props;
      let { spotifyId = "" } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.spotifyId === void 0 && $$bindings.spotifyId && spotifyId !== void 0)
        $$bindings.spotifyId(spotifyId);
      return `<div class="${"flex flex-col gap-y-2"}"><h2 class="${"u-font-display text-4xl text-rose-500"}">${escape(title)}</h2>

    <iframe title="${"Spotify music player"}" style="${"border-radius:12px"}"${add_attribute("src", `https://open.spotify.com/embed/track/${spotifyId}`, 0)} width="${"100%"}" height="${"80"}" frameborder="${"0"}" ${""} allow="${"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"}" loading="${"lazy"}"></iframe></div>`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>

${validate_component(Music, "Music").$$render($$result, { spotifyId: data.spotifySongId }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-6f499aa8.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-6f499aa8.js", "_app/immutable/chunks/index-af2df355.js"];
    stylesheets3 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
var cookie = __toESM(require_cookie(), 1);
init_index2();

// node_modules/devalue/devalue.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_string(str) {
  let result2 = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result2 += '\\"';
    } else if (char in escaped) {
      result2 += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result2 += char + str[++i];
      } else {
        result2 += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result2 += char;
    }
  }
  result2 += '"';
  return result2;
}

// .svelte-kit/output/server/index.js
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
var DATA_SUFFIX = "/__data.js";
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data) {
  try {
    return new Response(`window.__sveltekit_data = ${devalue(data)}`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  } catch (e) {
    const error2 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `${error2.message} (data.${match[2]})` : error2.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a5, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a5 = node == null ? void 0 : node.shared) == null ? void 0 : _a5[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error2) {
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  return new Response(void 0, {
    status,
    headers: { location }
  });
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    throw new Error(`${event.routeId} is not prerenderable`);
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-routeid", event.routeId);
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    } else if (error2 instanceof ValidationError) {
      return json(error2.data, { status: error2.status });
    }
    throw error2;
  }
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    if (!(error2 instanceof HttpError)) {
      options.handle_error(error2, event);
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options, error2)
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return { type: "error", error: error2 };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  var _a5;
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  const type = (_a5 = event.request.headers.get("content-type")) == null ? void 0 : _a5.split("; ")[0];
  if (type !== "application/x-www-form-urlencoded" && type !== "multipart/form-data") {
    throw new Error(`Actions expect form-encoded data (received ${type})`);
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from action in ${id} cannot be serialized as JSON`);
}
function get_cookies(request, url) {
  const initial_cookies = cookie.parse(request.headers.get("cookie") ?? "");
  const new_cookies = [];
  const cookies = {
    get(name, opts) {
      const decode = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      let i = new_cookies.length;
      while (i--) {
        const cookie2 = new_cookies[i];
        if (cookie2.name === name && domain_matches(url.hostname, cookie2.options.domain) && path_matches(url.pathname, cookie2.options.path)) {
          return cookie2.value;
        }
      }
      return name in initial_cookies ? decode(initial_cookies[name]) : void 0;
    },
    set(name, value, options = {}) {
      new_cookies.push({
        name,
        value,
        options: {
          httpOnly: true,
          secure: true,
          ...options
        }
      });
    },
    delete(name) {
      new_cookies.push({ name, value: "", options: { expires: new Date(0) } });
      delete initial_cookies[name];
    }
  };
  return { cookies, new_cookies };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function create_fetch({ event, options, state, route, prerender_default, resolve_opts }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const set_cookies = [];
  function get_cookie_header(url, header) {
    const new_cookies = {};
    for (const cookie2 of set_cookies) {
      if (!domain_matches(url.hostname, cookie2.domain))
        continue;
      if (!path_matches(url.pathname, cookie2.path))
        continue;
      new_cookies[cookie2.name] = cookie2.value;
    }
    const combined_cookies = {
      ...initial_cookies,
      ...new_cookies,
      ...cookie.parse(header ?? "")
    };
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const fetcher = async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let dependency;
    const response = await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie2)
              request2.headers.set("cookie", cookie2);
          }
          let response3 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response3 = new Response("", {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response3.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response3;
        }
        let response2;
        const prefix = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file4 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file4), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie2) {
            request2.headers.set("cookie", cookie2);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string") {
          throw new Error("Request body must be a string");
        }
        response2 = await respond(request2, options, {
          prerender_default,
          ...state,
          initiator: route
        });
        if (state.prerendering) {
          dependency = { response: response2, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
        return response2;
      }
    });
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      set_cookies.push(
        ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => set_cookie_parser.parseString(str))
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: request.url.startsWith(event.url.origin) ? request.url.slice(event.url.origin.length) : request.url,
              method: request.method,
              request_body,
              response_body: body,
              response: response2
            });
            const get = response2.headers.get;
            response2.headers.get = (key3) => {
              const lower = key3.toLowerCase();
              const value = get.call(response2.headers, lower);
              if (value && !lower.startsWith("x-sveltekit-")) {
                const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
                if (!included) {
                  throw new Error(
                    `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#handle`
                  );
                }
              }
              return value;
            };
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies: set_cookies };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect2) => {
    return inspect2(url, opts);
  };
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function load_server_data({ event, state, node, parent }) {
  var _a5;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result2 = await ((_a5 = node.server.load) == null ? void 0 : _a5.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep2 of deps) {
        const { href } = new URL(dep2, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url
  }));
  const data = result2 ? await unwrap_promises(result2) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent, server_data_promise }) {
  var _a5;
  const server_data_node = await server_data_promise;
  if (!((_a5 = node == null ? void 0 : node.shared) == null ? void 0 : _a5.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result2 = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result2 += chars2[bytes[i - 2] >> 2];
    result2 += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result2 += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result2 += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result2 += chars2[bytes[i - 2] >> 2];
    result2 += chars2[(bytes[i - 2] & 3) << 4];
    result2 += "==";
  }
  if (i === l) {
    result2 += chars2[bytes[i - 2] >> 2];
    result2 += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result2 += chars2[(bytes[i - 1] & 15) << 2];
    result2 += "=";
  }
  return result2;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a5, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a5 = directives["report-to"]) == null ? void 0 : _a5.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a5;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets4 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets4.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a5 = state.prerendering) == null ? void 0 : _a5.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = devalue(branch.map(({ server_data }) => server_data));
  } catch (e) {
    const error3 = e;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (form_value) {
    serialized.form = devalue(form_value);
  }
  const init_app = `
		import { start } from ${s(prefixed(entry.file))};

		start({
			env: ${s(options.public_env)},
			hydrate: ${page_config.ssr ? `{
				status: ${status},
				error: ${s(error2)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)},
				data: ${serialized.data},
				form: ${serialized.form}
			}` : "null"},
			paths: ${s(options.paths)},
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			trailing_slash: ${s(options.trailing_slash)}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep2 of stylesheets4) {
    const path = prefixed(dep2);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep2)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    for (const dep2 of modulepreloads) {
      const path = prefixed(dep2);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    for (const new_cookie of cookies) {
      const { name, value, ...options2 } = new_cookie;
      headers.append("set-cookie", cookie.serialize(name, value, options2));
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options,
    state,
    route: GENERIC_ERROR,
    resolve_opts
  });
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    if (ssr) {
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      cookies,
      event,
      resolve_opts
    });
  } catch (error3) {
    return static_error_page(options, 500, handle_error_and_jsonify(event, options, error3).message);
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    const { fetcher, fetched, cookies } = create_fetch({
      event,
      options,
      state,
      route,
      prerender_default: should_prerender,
      resolve_opts
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        cookies,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i],
            state
          });
        } catch (e) {
          load_error = e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: err.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index4 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index4]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `window.__sveltekit_data = ${devalue({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      })}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched,
      cookies
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result2;
  return () => {
    if (done)
      return result2;
    done = true;
    return result2 = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a5;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a5 = event.url.searchParams.get("__invalid")) == null ? void 0 : _a5.split("").map((x) => x === "y")) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    url.searchParams.delete("__invalid");
    url.searchParams.delete("__id");
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data);
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data);
    } else {
      return data_response(handle_error_and_jsonify(event, options, error2));
    }
  }
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
async function respond(request, options, state) {
  var _a5, _b, _c, _d;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const type = (_a5 = request.headers.get("content-type")) == null ? void 0 : _a5.split(";")[0];
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && (type === "application/x-www-form-urlencoded" || type === "multipart/form-data");
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const { cookies, new_cookies } = get_cookies(request, url);
  if (state.prerendering)
    disable_search(url);
  const event = {
    cookies,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
    var _a22;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
        };
      }
      if ((_a22 = state.prerendering) == null ? void 0 : _a22.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else if (route.endpoint) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else {
          throw new Error("This should never happen");
        }
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response.headers.set(key2, value);
          }
        }
        for (const new_cookie of new_cookies) {
          response.headers.append(
            "set-cookie",
            cookie.serialize(new_cookie.name, new_cookie.value, new_cookie.options)
          );
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      const error2 = e instanceof HttpError ? e : coalesce_to_error(e);
      return handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options.hooks.handle({
      event,
      resolve,
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    return response;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    return handle_fatal_error(event, options, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + "</div>\n	</body>\n</html>\n";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: "Internal Error" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module2 = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module2.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module2.handle || (({ event, resolve }) => resolve(event)),
        handleError: module2.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module2.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/vercel-tmp/index/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-9b643ee2.js", "imports": ["_app/immutable/start-9b643ee2.js", "_app/immutable/chunks/index-af2df355.js", "_app/immutable/chunks/singletons-6803cca9.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/index/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: process.env
});
var edge_default = async (request) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return request.headers.get("x-forwarded-for");
    }
  });
};
export {
  edge_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=index.js.map
