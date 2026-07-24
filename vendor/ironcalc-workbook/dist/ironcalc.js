import Sc, { columnNameFromNumber as He, quoteName as Ia, getTokens as Fa, getSupportedLocales as _c, getAllTimezones as Rc, BorderStyle as $t, BorderType as de } from "@ironcalc/wasm";
import { Model as yy } from "@ironcalc/wasm";
import * as k from "react";
import Se, { useCallback as Oe, useState as oe, useRef as re, useEffect as Ie, createElement as Tc, isValidElement as Io, cloneElement as Fo, Children as kc, useLayoutEffect as gi, useMemo as jc, forwardRef as Na, useImperativeHandle as Ba } from "react";
import { styled as X, Menu as so, MenuItem as nn, FormControl as Wn, Box as ao, TextField as xi, Select as za, Paper as $c, FormHelperText as La, Tooltip as hn, Button as lo, Autocomplete as Pc, Popover as Oc, Dialog as Va, Input as Mc, ThemeProvider as Ac } from "@mui/material";
import { useTranslation as Ve, I18nextProvider as Dc } from "react-i18next";
import { Tag as Ha, ChevronDown as Vo, MousePointerClick as Ic, Check as Bt, ArrowLeft as Wa, X as Ho, PackageOpen as Fc, PencilLine as Ua, Trash2 as Jt, BookOpen as Nc, Plus as It, Grid2X2 as Ga, ChevronRight as bi, ChevronLeft as Bc, Undo2 as zc, Redo2 as Lc, PaintRoller as Vc, RemoveFormatting as Hc, Percent as Wc, DecimalsArrowLeft as Uc, DecimalsArrowRight as Gc, Minus as Yc, Bold as qc, Italic as Kc, Underline as Xc, Strikethrough as Zc, Type as Jc, PaintBucket as Ya, AlignLeft as Qc, AlignCenter as eu, AlignRight as tu, ArrowUpToLine as nu, ArrowDownToLine as ou, WrapText as ru, Grid2x2Check as iu, Grid2x2X as su, ImageDown as au, PoundSterling as lu, DollarSign as cu, Euro as uu, TextCursorInput as du, EyeOff as pu, Menu as fu, BetweenVerticalStart as hu, BetweenHorizontalStart as mu, ArrowUpDown as gu, ArrowLeftRight as xu, Snowflake as Xn, ArrowRight as bu, ArrowUp as yu, ArrowDown as vu } from "lucide-react";
import wu, { t as we } from "i18next";
import te from "@emotion/styled";
import { ThemeContext as Cu, keyframes as yi } from "@emotion/react";
import * as Eu from "react-dom";
import vo from "react-dom";
function Su(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo = { exports: {} }, Pn = {};
var zi;
function _u() {
  if (zi) return Pn;
  zi = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(o, r, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), r.key !== void 0 && (s = "" + r.key), "key" in r) {
      i = {};
      for (var a in r)
        a !== "key" && (i[a] = r[a]);
    } else i = r;
    return r = i.ref, {
      $$typeof: e,
      type: o,
      key: s,
      ref: r !== void 0 ? r : null,
      props: i
    };
  }
  return Pn.Fragment = t, Pn.jsx = n, Pn.jsxs = n, Pn;
}
var On = {};
var Li;
function Ru() {
  return Li || (Li = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === B ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case y:
          return "Fragment";
        case j:
          return "Profiler";
        case S:
          return "StrictMode";
        case T:
          return "Suspense";
        case R:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case f:
            return "Portal";
          case w:
            return b.displayName || "Context";
          case C:
            return (b._context.displayName || "Context") + ".Consumer";
          case E:
            var $ = b.render;
            return b = b.displayName, b || (b = $.displayName || $.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case F:
            return $ = b.displayName || null, $ !== null ? $ : e(b.type) || "Memo";
          case I:
            $ = b._payload, b = b._init;
            try {
              return e(b($));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function n(b) {
      try {
        t(b);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var z = $.error, N = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return z.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(b);
      }
    }
    function o(b) {
      if (b === y) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === I)
        return "<...>";
      try {
        var $ = e(b);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var b = v.A;
      return b === null ? null : b.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(b) {
      if (D.call(b, "key")) {
        var $ = Object.getOwnPropertyDescriptor(b, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function a(b, $) {
      function z() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: z,
        configurable: !0
      });
    }
    function u() {
      var b = e(this.type);
      return U[b] || (U[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function h(b, $, z, N, q, G) {
      var W = z.ref;
      return b = {
        $$typeof: x,
        type: b,
        key: $,
        props: z,
        _owner: N
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function p(b, $, z, N, q, G) {
      var W = $.children;
      if (W !== void 0)
        if (N)
          if (M(W)) {
            for (N = 0; N < W.length; N++)
              m(W[N]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(W);
      if (D.call($, "key")) {
        W = e(b);
        var Z = Object.keys($).filter(function(Y) {
          return Y !== "key";
        });
        N = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", O[W + N] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          W,
          Z,
          W
        ), O[W + N] = !0);
      }
      if (W = null, z !== void 0 && (n(z), W = "" + z), s($) && (n($.key), W = "" + $.key), "key" in $) {
        z = {};
        for (var Q in $)
          Q !== "key" && (z[Q] = $[Q]);
      } else z = $;
      return W && a(
        z,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), h(
        b,
        W,
        z,
        r(),
        q,
        G
      );
    }
    function m(b) {
      d(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === I && (b._payload.status === "fulfilled" ? d(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function d(b) {
      return typeof b == "object" && b !== null && b.$$typeof === x;
    }
    var g = Se, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), j = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), E = /* @__PURE__ */ Symbol.for("react.forward_ref"), T = /* @__PURE__ */ Symbol.for("react.suspense"), R = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), v = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, M = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var _, U = {}, J = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), K = A(o(i)), O = {};
    On.Fragment = y, On.jsx = function(b, $, z) {
      var N = 1e4 > v.recentlyCreatedOwnerStacks++;
      return p(
        b,
        $,
        z,
        !1,
        N ? Error("react-stack-top-frame") : J,
        N ? A(o(b)) : K
      );
    }, On.jsxs = function(b, $, z) {
      var N = 1e4 > v.recentlyCreatedOwnerStacks++;
      return p(
        b,
        $,
        z,
        !0,
        N ? Error("react-stack-top-frame") : J,
        N ? A(o(b)) : K
      );
    };
  })()), On;
}
var Vi;
function Tu() {
  return Vi || (Vi = 1, process.env.NODE_ENV === "production" ? wo.exports = _u() : wo.exports = Ru()), wo.exports;
}
var l = Tu();
function Ft(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const qa = "$$material";
function ku(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ju = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function $u(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Pu = /[A-Z]|^ms/g, Ou = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ka = function(t) {
  return t.charCodeAt(1) === 45;
}, Hi = function(t) {
  return t != null && typeof t != "boolean";
}, _r = /* @__PURE__ */ $u(function(e) {
  return Ka(e) ? e : e.replace(Pu, "-$&").toLowerCase();
}), Wi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ou, function(o, r, i) {
          return Mt = {
            name: r,
            styles: i,
            next: Mt
          }, r;
        });
  }
  return ju[t] !== 1 && !Ka(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Wo(e, t, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var r = n;
      if (r.anim === 1)
        return Mt = {
          name: r.name,
          styles: r.styles,
          next: Mt
        }, r.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Mt = {
              name: s.name,
              styles: s.styles,
              next: Mt
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Mu(e, t, n);
    }
  }
  var u = n;
  return u;
}
function Mu(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++)
      o += Wo(e, t, n[r]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        Hi(a) && (o += _r(i) + ":" + Wi(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var u = 0; u < s.length; u++)
          Hi(s[u]) && (o += _r(i) + ":" + Wi(i, s[u]) + ";");
      else {
        var h = Wo(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            o += _r(i) + ":" + h + ";";
            break;
          }
          default:
            o += i + "{" + h + "}";
        }
      }
    }
  return o;
}
var Ui = /label:\s*([^\s;{]+)\s*(;|$)/g, Mt;
function Au(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, r = "";
  Mt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    o = !1, r += Wo(n, t, i);
  else {
    var s = i;
    r += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (r += Wo(n, t, e[a]), o) {
      var u = i;
      r += u[a];
    }
  Ui.lastIndex = 0;
  for (var h = "", p; (p = Ui.exec(r)) !== null; )
    h += "-" + p[1];
  var m = ku(r) + h;
  return {
    name: m,
    styles: r,
    next: Mt
  };
}
var Co = { exports: {} }, Eo = { exports: {} }, he = {};
var Gi;
function Du() {
  if (Gi) return he;
  Gi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, f = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, j = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var T = E.$$typeof;
      switch (T) {
        case t:
          switch (E = E.type, E) {
            case u:
            case h:
            case o:
            case i:
            case r:
            case m:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case p:
                case x:
                case g:
                case s:
                  return E;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function w(E) {
    return C(E) === h;
  }
  return he.AsyncMode = u, he.ConcurrentMode = h, he.ContextConsumer = a, he.ContextProvider = s, he.Element = t, he.ForwardRef = p, he.Fragment = o, he.Lazy = x, he.Memo = g, he.Portal = n, he.Profiler = i, he.StrictMode = r, he.Suspense = m, he.isAsyncMode = function(E) {
    return w(E) || C(E) === u;
  }, he.isConcurrentMode = w, he.isContextConsumer = function(E) {
    return C(E) === a;
  }, he.isContextProvider = function(E) {
    return C(E) === s;
  }, he.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, he.isForwardRef = function(E) {
    return C(E) === p;
  }, he.isFragment = function(E) {
    return C(E) === o;
  }, he.isLazy = function(E) {
    return C(E) === x;
  }, he.isMemo = function(E) {
    return C(E) === g;
  }, he.isPortal = function(E) {
    return C(E) === n;
  }, he.isProfiler = function(E) {
    return C(E) === i;
  }, he.isStrictMode = function(E) {
    return C(E) === r;
  }, he.isSuspense = function(E) {
    return C(E) === m;
  }, he.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === o || E === h || E === i || E === r || E === m || E === d || typeof E == "object" && E !== null && (E.$$typeof === x || E.$$typeof === g || E.$$typeof === s || E.$$typeof === a || E.$$typeof === p || E.$$typeof === y || E.$$typeof === S || E.$$typeof === j || E.$$typeof === f);
  }, he.typeOf = C, he;
}
var me = {};
var Yi;
function Iu() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, f = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, j = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function C(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === o || V === h || V === i || V === r || V === m || V === d || typeof V == "object" && V !== null && (V.$$typeof === x || V.$$typeof === g || V.$$typeof === s || V.$$typeof === a || V.$$typeof === p || V.$$typeof === y || V.$$typeof === S || V.$$typeof === j || V.$$typeof === f);
    }
    function w(V) {
      if (typeof V == "object" && V !== null) {
        var ie = V.$$typeof;
        switch (ie) {
          case t:
            var ue = V.type;
            switch (ue) {
              case u:
              case h:
              case o:
              case i:
              case r:
              case m:
                return ue;
              default:
                var ce = ue && ue.$$typeof;
                switch (ce) {
                  case a:
                  case p:
                  case x:
                  case g:
                  case s:
                    return ce;
                  default:
                    return ie;
                }
            }
          case n:
            return ie;
        }
      }
    }
    var E = u, T = h, R = a, F = s, I = t, H = p, B = o, v = x, D = g, M = n, A = i, _ = r, U = m, J = !1;
    function K(V) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(V) || w(V) === u;
    }
    function O(V) {
      return w(V) === h;
    }
    function b(V) {
      return w(V) === a;
    }
    function $(V) {
      return w(V) === s;
    }
    function z(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function N(V) {
      return w(V) === p;
    }
    function q(V) {
      return w(V) === o;
    }
    function G(V) {
      return w(V) === x;
    }
    function W(V) {
      return w(V) === g;
    }
    function Z(V) {
      return w(V) === n;
    }
    function Q(V) {
      return w(V) === i;
    }
    function Y(V) {
      return w(V) === r;
    }
    function ee(V) {
      return w(V) === m;
    }
    me.AsyncMode = E, me.ConcurrentMode = T, me.ContextConsumer = R, me.ContextProvider = F, me.Element = I, me.ForwardRef = H, me.Fragment = B, me.Lazy = v, me.Memo = D, me.Portal = M, me.Profiler = A, me.StrictMode = _, me.Suspense = U, me.isAsyncMode = K, me.isConcurrentMode = O, me.isContextConsumer = b, me.isContextProvider = $, me.isElement = z, me.isForwardRef = N, me.isFragment = q, me.isLazy = G, me.isMemo = W, me.isPortal = Z, me.isProfiler = Q, me.isStrictMode = Y, me.isSuspense = ee, me.isValidElementType = C, me.typeOf = w;
  })()), me;
}
var qi;
function Xa() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? Eo.exports = Du() : Eo.exports = Iu()), Eo.exports;
}
var Rr, Ki;
function Fu() {
  if (Ki) return Rr;
  Ki = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function r() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        h[p] = p;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Rr = r() ? Object.assign : function(i, s) {
    for (var a, u = o(i), h, p = 1; p < arguments.length; p++) {
      a = Object(arguments[p]);
      for (var m in a)
        t.call(a, m) && (u[m] = a[m]);
      if (e) {
        h = e(a);
        for (var d = 0; d < h.length; d++)
          n.call(a, h[d]) && (u[h[d]] = a[h[d]]);
      }
    }
    return u;
  }, Rr;
}
var Tr, Xi;
function vi() {
  if (Xi) return Tr;
  Xi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tr = e, Tr;
}
var kr, Zi;
function Za() {
  return Zi || (Zi = 1, kr = Function.call.bind(Object.prototype.hasOwnProperty)), kr;
}
var jr, Ji;
function Nu() {
  if (Ji) return jr;
  Ji = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ vi(), n = {}, o = /* @__PURE__ */ Za();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function r(i, s, a, u, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (o(i, p)) {
          var m;
          try {
            if (typeof i[p] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            m = i[p](s, p, u, a, null, t);
          } catch (x) {
            m = x;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var g = h ? h() : "";
            e(
              "Failed " + a + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return r.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, jr = r, jr;
}
var $r, Qi;
function Bu() {
  if (Qi) return $r;
  Qi = 1;
  var e = Xa(), t = Fu(), n = /* @__PURE__ */ vi(), o = /* @__PURE__ */ Za(), r = /* @__PURE__ */ Nu(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return $r = function(a, u) {
    var h = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function m(O) {
      var b = O && (h && O[h] || O[p]);
      if (typeof b == "function")
        return b;
    }
    var d = "<<anonymous>>", g = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: j(),
      arrayOf: C,
      element: w(),
      elementType: E(),
      instanceOf: T,
      node: H(),
      objectOf: F,
      oneOf: R,
      oneOfType: I,
      shape: v,
      exact: D
    };
    function x(O, b) {
      return O === b ? O !== 0 || 1 / O === 1 / b : O !== O && b !== b;
    }
    function f(O, b) {
      this.message = O, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function y(O) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, $ = 0;
      function z(q, G, W, Z, Q, Y, ee) {
        if (Z = Z || d, Y = Y || W, ee !== n) {
          if (u) {
            var V = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw V.name = "Invariant Violation", V;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = Z + ":" + W;
            !b[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ie] = !0, $++);
          }
        }
        return G[W] == null ? q ? G[W] === null ? new f("The " + Q + " `" + Y + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new f("The " + Q + " `" + Y + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : O(G, W, Z, Q, Y);
      }
      var N = z.bind(null, !1);
      return N.isRequired = z.bind(null, !0), N;
    }
    function S(O) {
      function b($, z, N, q, G, W) {
        var Z = $[z], Q = _(Z);
        if (Q !== O) {
          var Y = U(Z);
          return new f(
            "Invalid " + q + " `" + G + "` of type " + ("`" + Y + "` supplied to `" + N + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return y(b);
    }
    function j() {
      return y(s);
    }
    function C(O) {
      function b($, z, N, q, G) {
        if (typeof O != "function")
          return new f("Property `" + G + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var W = $[z];
        if (!Array.isArray(W)) {
          var Z = _(W);
          return new f("Invalid " + q + " `" + G + "` of type " + ("`" + Z + "` supplied to `" + N + "`, expected an array."));
        }
        for (var Q = 0; Q < W.length; Q++) {
          var Y = O(W, Q, N, q, G + "[" + Q + "]", n);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return y(b);
    }
    function w() {
      function O(b, $, z, N, q) {
        var G = b[$];
        if (!a(G)) {
          var W = _(G);
          return new f("Invalid " + N + " `" + q + "` of type " + ("`" + W + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(O);
    }
    function E() {
      function O(b, $, z, N, q) {
        var G = b[$];
        if (!e.isValidElementType(G)) {
          var W = _(G);
          return new f("Invalid " + N + " `" + q + "` of type " + ("`" + W + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(O);
    }
    function T(O) {
      function b($, z, N, q, G) {
        if (!($[z] instanceof O)) {
          var W = O.name || d, Z = K($[z]);
          return new f("Invalid " + q + " `" + G + "` of type " + ("`" + Z + "` supplied to `" + N + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return y(b);
    }
    function R(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function b($, z, N, q, G) {
        for (var W = $[z], Z = 0; Z < O.length; Z++)
          if (x(W, O[Z]))
            return null;
        var Q = JSON.stringify(O, function(ee, V) {
          var ie = U(V);
          return ie === "symbol" ? String(V) : V;
        });
        return new f("Invalid " + q + " `" + G + "` of value `" + String(W) + "` " + ("supplied to `" + N + "`, expected one of " + Q + "."));
      }
      return y(b);
    }
    function F(O) {
      function b($, z, N, q, G) {
        if (typeof O != "function")
          return new f("Property `" + G + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var W = $[z], Z = _(W);
        if (Z !== "object")
          return new f("Invalid " + q + " `" + G + "` of type " + ("`" + Z + "` supplied to `" + N + "`, expected an object."));
        for (var Q in W)
          if (o(W, Q)) {
            var Y = O(W, Q, N, q, G + "." + Q, n);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return y(b);
    }
    function I(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var b = 0; b < O.length; b++) {
        var $ = O[b];
        if (typeof $ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J($) + " at index " + b + "."
          ), s;
      }
      function z(N, q, G, W, Z) {
        for (var Q = [], Y = 0; Y < O.length; Y++) {
          var ee = O[Y], V = ee(N, q, G, W, Z, n);
          if (V == null)
            return null;
          V.data && o(V.data, "expectedType") && Q.push(V.data.expectedType);
        }
        var ie = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new f("Invalid " + W + " `" + Z + "` supplied to " + ("`" + G + "`" + ie + "."));
      }
      return y(z);
    }
    function H() {
      function O(b, $, z, N, q) {
        return M(b[$]) ? null : new f("Invalid " + N + " `" + q + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return y(O);
    }
    function B(O, b, $, z, N) {
      return new f(
        (O || "React class") + ": " + b + " type `" + $ + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function v(O) {
      function b($, z, N, q, G) {
        var W = $[z], Z = _(W);
        if (Z !== "object")
          return new f("Invalid " + q + " `" + G + "` of type `" + Z + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var Q in O) {
          var Y = O[Q];
          if (typeof Y != "function")
            return B(N, q, G, Q, U(Y));
          var ee = Y(W, Q, N, q, G + "." + Q, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return y(b);
    }
    function D(O) {
      function b($, z, N, q, G) {
        var W = $[z], Z = _(W);
        if (Z !== "object")
          return new f("Invalid " + q + " `" + G + "` of type `" + Z + "` " + ("supplied to `" + N + "`, expected `object`."));
        var Q = t({}, $[z], O);
        for (var Y in Q) {
          var ee = O[Y];
          if (o(O, Y) && typeof ee != "function")
            return B(N, q, G, Y, U(ee));
          if (!ee)
            return new f(
              "Invalid " + q + " `" + G + "` key `" + Y + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify($[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var V = ee(W, Y, N, q, G + "." + Y, n);
          if (V)
            return V;
        }
        return null;
      }
      return y(b);
    }
    function M(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(M);
          if (O === null || a(O))
            return !0;
          var b = m(O);
          if (b) {
            var $ = b.call(O), z;
            if (b !== O.entries) {
              for (; !(z = $.next()).done; )
                if (!M(z.value))
                  return !1;
            } else
              for (; !(z = $.next()).done; ) {
                var N = z.value;
                if (N && !M(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(O, b) {
      return O === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function _(O) {
      var b = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : A(b, O) ? "symbol" : b;
    }
    function U(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var b = _(O);
      if (b === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function J(O) {
      var b = U(O);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function K(O) {
      return !O.constructor || !O.constructor.name ? d : O.constructor.name;
    }
    return g.checkPropTypes = r, g.resetWarningCache = r.resetWarningCache, g.PropTypes = g, g;
  }, $r;
}
var Pr, es;
function zu() {
  if (es) return Pr;
  es = 1;
  var e = /* @__PURE__ */ vi();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Pr = function() {
    function o(s, a, u, h, p, m) {
      if (m !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    o.isRequired = o;
    function r() {
      return o;
    }
    var i = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: r,
      element: o,
      elementType: o,
      instanceOf: r,
      node: o,
      objectOf: r,
      oneOf: r,
      oneOfType: r,
      shape: r,
      exact: r,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Pr;
}
var ts;
function Lu() {
  if (ts) return Co.exports;
  if (ts = 1, process.env.NODE_ENV !== "production") {
    var e = Xa(), t = !0;
    Co.exports = /* @__PURE__ */ Bu()(e.isElement, t);
  } else
    Co.exports = /* @__PURE__ */ zu()();
  return Co.exports;
}
var Vu = /* @__PURE__ */ Lu();
const c = /* @__PURE__ */ Su(Vu);
function Hu(e, t) {
  const n = te(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const r = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((i) => i === void 0) && console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function Wu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ns = [];
function Xt(e) {
  return ns[0] = e, Au(ns);
}
var So = { exports: {} }, Ce = {};
var os;
function Uu() {
  if (os) return Ce;
  os = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), r = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), s = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), u = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.suspense_list"), p = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), g = /* @__PURE__ */ Symbol.for("react.client.reference");
  function x(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case n:
            case r:
            case o:
            case u:
            case h:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case m:
                case p:
                  return f;
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ce.ContextConsumer = i, Ce.ContextProvider = s, Ce.Element = e, Ce.ForwardRef = a, Ce.Fragment = n, Ce.Lazy = m, Ce.Memo = p, Ce.Portal = t, Ce.Profiler = r, Ce.StrictMode = o, Ce.Suspense = u, Ce.SuspenseList = h, Ce.isContextConsumer = function(f) {
    return x(f) === i;
  }, Ce.isContextProvider = function(f) {
    return x(f) === s;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ce.isForwardRef = function(f) {
    return x(f) === a;
  }, Ce.isFragment = function(f) {
    return x(f) === n;
  }, Ce.isLazy = function(f) {
    return x(f) === m;
  }, Ce.isMemo = function(f) {
    return x(f) === p;
  }, Ce.isPortal = function(f) {
    return x(f) === t;
  }, Ce.isProfiler = function(f) {
    return x(f) === r;
  }, Ce.isStrictMode = function(f) {
    return x(f) === o;
  }, Ce.isSuspense = function(f) {
    return x(f) === u;
  }, Ce.isSuspenseList = function(f) {
    return x(f) === h;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === r || f === o || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === s || f.$$typeof === i || f.$$typeof === a || f.$$typeof === g || f.getModuleId !== void 0);
  }, Ce.typeOf = x, Ce;
}
var Ee = {};
var rs;
function Gu() {
  return rs || (rs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var y = f.$$typeof;
        switch (y) {
          case t:
            switch (f = f.type, f) {
              case o:
              case i:
              case r:
              case h:
              case p:
              case g:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case a:
                  case u:
                  case d:
                  case m:
                    return f;
                  case s:
                    return f;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), x = /* @__PURE__ */ Symbol.for("react.client.reference");
    Ee.ContextConsumer = s, Ee.ContextProvider = a, Ee.Element = t, Ee.ForwardRef = u, Ee.Fragment = o, Ee.Lazy = d, Ee.Memo = m, Ee.Portal = n, Ee.Profiler = i, Ee.StrictMode = r, Ee.Suspense = h, Ee.SuspenseList = p, Ee.isContextConsumer = function(f) {
      return e(f) === s;
    }, Ee.isContextProvider = function(f) {
      return e(f) === a;
    }, Ee.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, Ee.isForwardRef = function(f) {
      return e(f) === u;
    }, Ee.isFragment = function(f) {
      return e(f) === o;
    }, Ee.isLazy = function(f) {
      return e(f) === d;
    }, Ee.isMemo = function(f) {
      return e(f) === m;
    }, Ee.isPortal = function(f) {
      return e(f) === n;
    }, Ee.isProfiler = function(f) {
      return e(f) === i;
    }, Ee.isStrictMode = function(f) {
      return e(f) === r;
    }, Ee.isSuspense = function(f) {
      return e(f) === h;
    }, Ee.isSuspenseList = function(f) {
      return e(f) === p;
    }, Ee.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === o || f === i || f === r || f === h || f === p || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === m || f.$$typeof === a || f.$$typeof === s || f.$$typeof === u || f.$$typeof === x || f.getModuleId !== void 0);
    }, Ee.typeOf = e;
  })()), Ee;
}
var is;
function Yu() {
  return is || (is = 1, process.env.NODE_ENV === "production" ? So.exports = /* @__PURE__ */ Uu() : So.exports = /* @__PURE__ */ Gu()), So.exports;
}
var gn = /* @__PURE__ */ Yu();
function _t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ja(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || gn.isValidElementType(e) || !_t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ja(e[n]);
  }), t;
}
function Ze(e, t, n = {
  clone: !0
}) {
  const o = n.clone ? {
    ...e
  } : e;
  return _t(e) && _t(t) && Object.keys(t).forEach((r) => {
    /* @__PURE__ */ k.isValidElement(t[r]) || gn.isValidElementType(t[r]) ? o[r] = t[r] : _t(t[r]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, r) && _t(e[r]) ? o[r] = Ze(e[r], t[r], n) : n.clone ? o[r] = _t(t[r]) ? Ja(t[r]) : t[r] : o[r] = t[r];
  }), o;
}
const qu = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function Ku(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: o = 5,
    ...r
  } = e, i = qu(t), s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - o / 100}${n})`;
  }
  function h(d, g) {
    const x = s.indexOf(g);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(x !== -1 && typeof t[s[x]] == "number" ? t[s[x]] : g) - o / 100}${n})`;
  }
  function p(d) {
    return s.indexOf(d) + 1 < s.length ? h(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function m(d) {
    const g = s.indexOf(d);
    return g === 0 ? a(s[1]) : g === s.length - 1 ? u(s[g]) : h(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: u,
    between: h,
    only: p,
    not: m,
    unit: n,
    ...r
  };
}
function ss(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((o) => o.startsWith("@container")).sort((o, r) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(o.match(i)?.[1] || 0) - +(r.match(i)?.[1] || 0);
  });
  return n.length ? n.reduce((o, r) => {
    const i = t[r];
    return delete o[r], o[r] = i, o;
  }, {
    ...t
  }) : t;
}
function Xu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Zu(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ft(18, `(${t})`));
    return null;
  }
  const [, o, r] = n, i = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(r).up(i);
}
function Ju(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const u = t(e.breakpoints.not(...a), s);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const o = {}, r = (i) => (n(o, i), o);
  return n(r), {
    ...e,
    containerQueries: r
  };
}
const Qu = {
  borderRadius: 4
}, zt = process.env.NODE_ENV !== "production" ? c.oneOfType([c.number, c.string, c.object, c.array]) : {};
function Un(e, t) {
  return t ? Ze(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const rr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, as = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${rr[e]}px)`
}, ed = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : rr[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Rt(e, t, n) {
  const o = e.theme || {};
  if (Array.isArray(t)) {
    const i = o.breakpoints || as;
    return t.reduce((s, a, u) => (s[i.up(i.keys[u])] = n(t[u]), s), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || as;
    return Object.keys(t).reduce((s, a) => {
      if (Xu(i.keys, a)) {
        const u = Zu(o.containerQueries ? o : ed, a);
        u && (s[u] = n(t[a], a));
      } else if (Object.keys(i.values || rr).includes(a)) {
        const u = i.up(a);
        s[u] = n(t[a], a);
      } else {
        const u = a;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return n(t);
}
function td(e = {}) {
  return e.keys?.reduce((n, o) => {
    const r = e.up(o);
    return n[r] = {}, n;
  }, {}) || {};
}
function ls(e, t) {
  return e.reduce((n, o) => {
    const r = n[o];
    return (!r || Object.keys(r).length === 0) && delete n[o], n;
  }, t);
}
function co(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ir(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const o = `vars.${t}`.split(".").reduce((r, i) => r && r[i] ? r[i] : null, e);
    if (o != null)
      return o;
  }
  return t.split(".").reduce((o, r) => o && o[r] != null ? o[r] : null, e);
}
function Uo(e, t, n, o = n) {
  let r;
  return typeof e == "function" ? r = e(n) : Array.isArray(e) ? r = e[n] || o : r = ir(e, n) || o, t && (r = t(r, o, e)), r;
}
function Me(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: r
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], u = s.theme, h = ir(u, o) || {};
    return Rt(s, a, (m) => {
      let d = Uo(h, r, m);
      return m === d && typeof m == "string" && (d = Uo(h, r, `${t}${m === "default" ? "" : co(m)}`, m)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: zt
  } : {}, i.filterProps = [t], i;
}
function nd(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const od = {
  m: "margin",
  p: "padding"
}, rd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, cs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, id = nd((e) => {
  if (e.length > 2)
    if (cs[e])
      e = cs[e];
    else
      return [e];
  const [t, n] = e.split(""), o = od[t], r = rd[n] || "";
  return Array.isArray(r) ? r.map((i) => o + i) : [o + r];
}), sr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ar = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], sd = [...sr, ...ar];
function uo(e, t, n, o) {
  const r = ir(e, t, !0) ?? n;
  return typeof r == "number" || typeof r == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${i}.`), typeof r == "string" ? r.startsWith("var(") && i === 0 ? 0 : r.startsWith("var(") && i === 1 ? r : `calc(${i} * ${r})` : r * i) : Array.isArray(r) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > r.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(r)}.`, `${s} > ${r.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = r[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof r == "function" ? r : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${r}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function wi(e) {
  return uo(e, "spacing", 8, "spacing");
}
function po(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ad(e, t) {
  return (n) => e.reduce((o, r) => (o[r] = po(t, n), o), {});
}
function ld(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const r = id(n), i = ad(r, o), s = e[n];
  return Rt(e, s, i);
}
function Qa(e, t) {
  const n = wi(e.theme);
  return Object.keys(e).map((o) => ld(e, t, o, n)).reduce(Un, {});
}
function Te(e) {
  return Qa(e, sr);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = zt, e), {}) : {};
Te.filterProps = sr;
function ke(e) {
  return Qa(e, ar);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = zt, e), {}) : {};
ke.filterProps = ar;
process.env.NODE_ENV !== "production" && sd.reduce((e, t) => (e[t] = zt, e), {});
function el(e = 8, t = wi({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...o) => (process.env.NODE_ENV !== "production" && (o.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${o.length}`)), (o.length === 0 ? [1] : o).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function lr(...e) {
  const t = e.reduce((o, r) => (r.filterProps.forEach((i) => {
    o[i] = r;
  }), o), {}), n = (o) => Object.keys(o).reduce((r, i) => t[i] ? Un(r, t[i](o)) : r, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((o, r) => Object.assign(o, r.propTypes), {}) : {}, n.filterProps = e.reduce((o, r) => o.concat(r.filterProps), []), n;
}
function ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function lt(e, t) {
  return Me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const cd = lt("border", ot), ud = lt("borderTop", ot), dd = lt("borderRight", ot), pd = lt("borderBottom", ot), fd = lt("borderLeft", ot), hd = lt("borderColor"), md = lt("borderTopColor"), gd = lt("borderRightColor"), xd = lt("borderBottomColor"), bd = lt("borderLeftColor"), yd = lt("outline", ot), vd = lt("outlineColor"), cr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = uo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: po(t, o)
    });
    return Rt(e, e.borderRadius, n);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: zt
} : {};
cr.filterProps = ["borderRadius"];
lr(cd, ud, dd, pd, fd, hd, md, gd, xd, bd, cr, yd, vd);
const ur = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = uo(e.theme, "spacing", 8, "gap"), n = (o) => ({
      gap: po(t, o)
    });
    return Rt(e, e.gap, n);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: zt
} : {};
ur.filterProps = ["gap"];
const dr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = uo(e.theme, "spacing", 8, "columnGap"), n = (o) => ({
      columnGap: po(t, o)
    });
    return Rt(e, e.columnGap, n);
  }
  return null;
};
dr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: zt
} : {};
dr.filterProps = ["columnGap"];
const pr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = uo(e.theme, "spacing", 8, "rowGap"), n = (o) => ({
      rowGap: po(t, o)
    });
    return Rt(e, e.rowGap, n);
  }
  return null;
};
pr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: zt
} : {};
pr.filterProps = ["rowGap"];
const wd = Me({
  prop: "gridColumn"
}), Cd = Me({
  prop: "gridRow"
}), Ed = Me({
  prop: "gridAutoFlow"
}), Sd = Me({
  prop: "gridAutoColumns"
}), _d = Me({
  prop: "gridAutoRows"
}), Rd = Me({
  prop: "gridTemplateColumns"
}), Td = Me({
  prop: "gridTemplateRows"
}), kd = Me({
  prop: "gridTemplateAreas"
}), jd = Me({
  prop: "gridArea"
});
lr(ur, dr, pr, wd, Cd, Ed, Sd, _d, Rd, Td, kd, jd);
function mn(e, t) {
  return t === "grey" ? t : e;
}
const $d = Me({
  prop: "color",
  themeKey: "palette",
  transform: mn
}), Pd = Me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: mn
}), Od = Me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: mn
});
lr($d, Pd, Od);
function qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Md = Me({
  prop: "width",
  transform: qe
}), Ci = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      const o = e.theme?.breakpoints?.values?.[n] || rr[n];
      return o ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: qe(n)
      };
    };
    return Rt(e, e.maxWidth, t);
  }
  return null;
};
Ci.filterProps = ["maxWidth"];
const Ad = Me({
  prop: "minWidth",
  transform: qe
}), Dd = Me({
  prop: "height",
  transform: qe
}), Id = Me({
  prop: "maxHeight",
  transform: qe
}), Fd = Me({
  prop: "minHeight",
  transform: qe
});
Me({
  prop: "size",
  cssProperty: "width",
  transform: qe
});
Me({
  prop: "size",
  cssProperty: "height",
  transform: qe
});
const Nd = Me({
  prop: "boxSizing"
});
lr(Md, Ci, Ad, Dd, Id, Fd, Nd);
const fr = {
  // borders
  border: {
    themeKey: "borders",
    transform: ot
  },
  borderTop: {
    themeKey: "borders",
    transform: ot
  },
  borderRight: {
    themeKey: "borders",
    transform: ot
  },
  borderBottom: {
    themeKey: "borders",
    transform: ot
  },
  borderLeft: {
    themeKey: "borders",
    transform: ot
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ot
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: cr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: mn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: mn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: mn
  },
  // spacing
  p: {
    style: ke
  },
  pt: {
    style: ke
  },
  pr: {
    style: ke
  },
  pb: {
    style: ke
  },
  pl: {
    style: ke
  },
  px: {
    style: ke
  },
  py: {
    style: ke
  },
  padding: {
    style: ke
  },
  paddingTop: {
    style: ke
  },
  paddingRight: {
    style: ke
  },
  paddingBottom: {
    style: ke
  },
  paddingLeft: {
    style: ke
  },
  paddingX: {
    style: ke
  },
  paddingY: {
    style: ke
  },
  paddingInline: {
    style: ke
  },
  paddingInlineStart: {
    style: ke
  },
  paddingInlineEnd: {
    style: ke
  },
  paddingBlock: {
    style: ke
  },
  paddingBlockStart: {
    style: ke
  },
  paddingBlockEnd: {
    style: ke
  },
  m: {
    style: Te
  },
  mt: {
    style: Te
  },
  mr: {
    style: Te
  },
  mb: {
    style: Te
  },
  ml: {
    style: Te
  },
  mx: {
    style: Te
  },
  my: {
    style: Te
  },
  margin: {
    style: Te
  },
  marginTop: {
    style: Te
  },
  marginRight: {
    style: Te
  },
  marginBottom: {
    style: Te
  },
  marginLeft: {
    style: Te
  },
  marginX: {
    style: Te
  },
  marginY: {
    style: Te
  },
  marginInline: {
    style: Te
  },
  marginInlineStart: {
    style: Te
  },
  marginInlineEnd: {
    style: Te
  },
  marginBlock: {
    style: Te
  },
  marginBlockStart: {
    style: Te
  },
  marginBlockEnd: {
    style: Te
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ur
  },
  rowGap: {
    style: pr
  },
  columnGap: {
    style: dr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: qe
  },
  maxWidth: {
    style: Ci
  },
  minWidth: {
    transform: qe
  },
  height: {
    transform: qe
  },
  maxHeight: {
    transform: qe
  },
  minHeight: {
    transform: qe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Bd(...e) {
  const t = e.reduce((o, r) => o.concat(Object.keys(r)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function zd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ld() {
  function e(n, o, r, i) {
    const s = {
      [n]: o,
      theme: r
    }, a = i[n];
    if (!a)
      return {
        [n]: o
      };
    const {
      cssProperty: u = n,
      themeKey: h,
      transform: p,
      style: m
    } = a;
    if (o == null)
      return null;
    if (h === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const d = ir(r, h) || {};
    return m ? m(s) : Rt(s, o, (x) => {
      let f = Uo(d, p, x);
      return x === f && typeof x == "string" && (f = Uo(d, p, `${n}${x === "default" ? "" : co(x)}`, x)), u === !1 ? f : {
        [u]: f
      };
    });
  }
  function t(n) {
    const {
      sx: o,
      theme: r = {},
      nested: i
    } = n || {};
    if (!o)
      return null;
    const s = r.unstable_sxConfig ?? fr;
    function a(u) {
      let h = u;
      if (typeof u == "function")
        h = u(r);
      else if (typeof u != "object")
        return u;
      if (!h)
        return null;
      const p = td(r.breakpoints), m = Object.keys(p);
      let d = p;
      return Object.keys(h).forEach((g) => {
        const x = zd(h[g], r);
        if (x != null)
          if (typeof x == "object")
            if (s[g])
              d = Un(d, e(g, x, r, s));
            else {
              const f = Rt({
                theme: r
              }, x, (y) => ({
                [g]: y
              }));
              Bd(f, x) ? d[g] = t({
                sx: x,
                theme: r,
                nested: !0
              }) : d = Un(d, f);
            }
          else
            d = Un(d, e(g, x, r, s));
      }), !i && r.modularCssLayers ? {
        "@layer sx": ss(r, ls(m, d))
      } : ss(r, ls(m, d));
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const xn = Ld();
xn.filterProps = ["sx"];
function Vd(e, t) {
  const n = this;
  if (n.vars) {
    if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function Ei(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: o = {},
    spacing: r,
    shape: i = {},
    ...s
  } = e, a = Ku(n), u = el(r);
  let h = Ze({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: u,
    shape: {
      ...Qu,
      ...i
    }
  }, s);
  return h = Ju(h), h.applyStyles = Vd, h = t.reduce((p, m) => Ze(p, m), h), h.unstable_sxConfig = {
    ...fr,
    ...s?.unstable_sxConfig
  }, h.unstable_sx = function(m) {
    return xn({
      sx: m,
      theme: this
    });
  }, h;
}
function Hd(e) {
  return Object.keys(e).length === 0;
}
function Wd(e = null) {
  const t = k.useContext(Cu);
  return !t || Hd(t) ? e : t;
}
const Ud = Ei();
function Gd(e = Ud) {
  return Wd(e);
}
const us = (e) => e, Yd = () => {
  let e = us;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = us;
    }
  };
}, qd = Yd();
function tl(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = tl(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function _e() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = tl(e)) && (o && (o += " "), o += t);
  return o;
}
const Kd = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ct(e, t, n = "Mui") {
  const o = Kd[t];
  return o ? `${n}-${o}` : `${qd.generate(e)}-${t}`;
}
function Ye(e, t, n = "Mui") {
  const o = {};
  return t.forEach((r) => {
    o[r] = ct(e, r, n);
  }), o;
}
function nl(e, t = "") {
  return e.displayName || e.name || t;
}
function ds(e, t, n) {
  const o = nl(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Xd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return nl(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gn.ForwardRef:
          return ds(e, e.render, "ForwardRef");
        case gn.Memo:
          return ds(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ol(e) {
  const {
    variants: t,
    ...n
  } = e, o = {
    variants: t,
    style: Xt(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((r) => {
    typeof r.style != "function" && (r.style = Xt(r.style));
  }), o;
}
const Zd = Ei();
function Or(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Jd(e) {
  return e ? (t, n) => n[e] : null;
}
function Qd(e, t, n) {
  e.theme = op(e.theme) ? n : e.theme[t] || e.theme;
}
function No(e, t, n) {
  const o = typeof t == "function" ? t(e) : t;
  if (Array.isArray(o))
    return o.flatMap((r) => No(e, r, n));
  if (Array.isArray(o?.variants)) {
    let r;
    if (o.isProcessed)
      r = n ? qt(o.style, n) : o.style;
    else {
      const {
        variants: i,
        ...s
      } = o;
      r = n ? qt(Xt(s), n) : s;
    }
    return rl(e, o.variants, [r], n);
  }
  return o?.isProcessed ? n ? qt(Xt(o.style), n) : o.style : n ? qt(Xt(o), n) : o;
}
function rl(e, t, n = [], o = void 0) {
  let r;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (r ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !s.props(r))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && e.ownerState?.[a] !== s.props[a])
          continue e;
    typeof s.style == "function" ? (r ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, n.push(o ? qt(Xt(s.style(r)), o) : s.style(r))) : n.push(o ? qt(Xt(s.style), o) : s.style);
  }
  return n;
}
function ep(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Zd,
    rootShouldForwardProp: o = Or,
    slotShouldForwardProp: r = Or
  } = e;
  function i(a) {
    Qd(a, t, n);
  }
  return (a, u = {}) => {
    Wu(a, (T) => T.filter((R) => R !== xn));
    const {
      name: h,
      slot: p,
      skipVariantsResolver: m,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: g = Jd(il(p)),
      ...x
    } = u, f = h && h.startsWith("Mui") || p ? "components" : "custom", y = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), S = d || !1;
    let j = Or;
    p === "Root" || p === "root" ? j = o : p ? j = r : rp(a) && (j = void 0);
    const C = Hu(a, {
      shouldForwardProp: j,
      label: np(h, p),
      ...x
    }), w = (T) => {
      if (T.__emotion_real === T)
        return T;
      if (typeof T == "function")
        return function(F) {
          return No(F, T, F.theme.modularCssLayers ? f : void 0);
        };
      if (_t(T)) {
        const R = ol(T);
        return function(I) {
          return R.variants ? No(I, R, I.theme.modularCssLayers ? f : void 0) : I.theme.modularCssLayers ? qt(R.style, f) : R.style;
        };
      }
      return T;
    }, E = (...T) => {
      const R = [], F = T.map(w), I = [];
      if (R.push(i), h && g && I.push(function(D) {
        const A = D.theme.components?.[h]?.styleOverrides;
        if (!A)
          return null;
        const _ = {};
        for (const U in A)
          _[U] = No(D, A[U], D.theme.modularCssLayers ? "theme" : void 0);
        return g(D, _);
      }), h && !y && I.push(function(D) {
        const A = D.theme?.components?.[h]?.variants;
        return A ? rl(D, A, [], D.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || I.push(xn), Array.isArray(F[0])) {
        const v = F.shift(), D = new Array(R.length).fill(""), M = new Array(I.length).fill("");
        let A;
        A = [...D, ...v, ...M], A.raw = [...D, ...v.raw, ...M], R.unshift(A);
      }
      const H = [...R, ...F, ...I], B = C(...H);
      return a.muiName && (B.muiName = a.muiName), process.env.NODE_ENV !== "production" && (B.displayName = tp(h, p, a)), B;
    };
    return C.withConfig && (E.withConfig = C.withConfig), E;
  };
}
function tp(e, t, n) {
  return e ? `${e}${co(t || "")}` : `Styled(${Xd(n)})`;
}
function np(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${il(t || "Root")}`), n;
}
function op(e) {
  for (const t in e)
    return !1;
  return !0;
}
function rp(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function il(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Kr(e, t, n = !1) {
  const o = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots")
        o[i] = {
          ...e[i],
          ...o[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], a = t[i];
        if (!a)
          o[i] = s || {};
        else if (!s)
          o[i] = a;
        else {
          o[i] = {
            ...a
          };
          for (const u in s)
            if (Object.prototype.hasOwnProperty.call(s, u)) {
              const h = u;
              o[i][h] = Kr(s[h], a[h], n);
            }
        }
      } else i === "className" && n && t.className ? o.className = _e(e?.className, t?.className) : i === "style" && n && t.style ? o.style = {
        ...e?.style,
        ...t?.style
      } : o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
const Qt = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function ip(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Si(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), ip(e, t, n);
}
function sp(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, r) => r < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nt(sp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ft(9, e));
  let o = e.substring(t + 1, e.length - 1), r;
  if (n === "color") {
    if (o = o.split(" "), r = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(r))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${r}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ft(10, r));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: n,
    values: o,
    colorSpace: r
  };
}
const ap = (e) => {
  const t = Nt(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, Bn = (e, t) => {
  try {
    return ap(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function hr(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: o
  } = e;
  return t.includes("rgb") ? o = o.map((r, i) => i < 3 ? parseInt(r, 10) : r) : t.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), t.includes("color") ? o = `${n} ${o.join(" ")}` : o = `${o.join(", ")}`, `${t}(${o})`;
}
function sl(e) {
  e = Nt(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, r = t[2] / 100, i = o * Math.min(r, 1 - r), s = (h, p = (h + n / 30) % 12) => r - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let a = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), hr({
    type: a,
    values: u
  });
}
function Xr(e) {
  e = Nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nt(sl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ps(e, t) {
  const n = Xr(e), o = Xr(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function Go(e, t) {
  return e = Nt(e), t = Si(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, hr(e);
}
function Ht(e, t, n) {
  try {
    return Go(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function mr(e, t) {
  if (e = Nt(e), t = Si(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return hr(e);
}
function ye(e, t, n) {
  try {
    return mr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function gr(e, t) {
  if (e = Nt(e), t = Si(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return hr(e);
}
function ve(e, t, n) {
  try {
    return gr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function lp(e, t = 0.15) {
  return Xr(e) > 0.5 ? mr(e, t) : gr(e, t);
}
function _o(e, t, n) {
  try {
    return lp(e, t);
  } catch {
    return e;
  }
}
const cp = "exact-prop: ​";
function al(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [cp]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const up = /* @__PURE__ */ k.createContext();
process.env.NODE_ENV !== "production" && (c.node, c.bool);
const _i = () => k.useContext(up) ?? !1, dp = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (c.node, c.object);
function pp(e) {
  const {
    theme: t,
    name: n,
    props: o
  } = e;
  if (!t || !t.components || !t.components[n])
    return o;
  const r = t.components[n];
  return r.defaultProps ? Kr(r.defaultProps, o, t.components.mergeClassNameAndStyle) : !r.styleOverrides && !r.variants ? Kr(r, o, t.components.mergeClassNameAndStyle) : o;
}
function fp({
  props: e,
  name: t
}) {
  const n = k.useContext(dp);
  return pp({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let fs = 0;
function hp(e) {
  const [t, n] = k.useState(e), o = e || t;
  return k.useEffect(() => {
    t == null && (fs += 1, n(`mui-${fs}`));
  }, [t]), o;
}
const mp = {
  ...k
}, hs = mp.useId;
function gp(e) {
  if (hs !== void 0) {
    const t = hs();
    return e ?? t;
  }
  return hp(e);
}
const ms = {
  theme: void 0
};
function xp(e) {
  let t, n;
  return function(r) {
    let i = t;
    return (i === void 0 || r.theme !== n) && (ms.theme = r.theme, i = ol(e(ms)), t = i, n = r.theme), i;
  };
}
function bp(e = "") {
  function t(...o) {
    if (!o.length)
      return "";
    const r = o[0];
    return typeof r == "string" && !r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${r}${t(...o.slice(1))})` : `, ${r}`;
  }
  return (o, ...r) => `var(--${e ? `${e}-` : ""}${o}${t(...r)})`;
}
const gs = (e, t, n, o = []) => {
  let r = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(r) ? r[Number(i)] = n : r && typeof r == "object" && (r[i] = n) : r && typeof r == "object" && (r[i] || (r[i] = o.includes(i) ? [] : {}), r = r[i]);
  });
}, yp = (e, t, n) => {
  function o(r, i = [], s = []) {
    Object.entries(r).forEach(([a, u]) => {
      (!n || n && !n([...i, a])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? o(u, [...i, a], Array.isArray(u) ? [...s, a] : s) : t([...i, a], u, s));
    });
  }
  o(e);
}, vp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Mr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, r = {}, i = {}, s = {};
  return yp(
    e,
    (a, u, h) => {
      if ((typeof u == "string" || typeof u == "number") && (!o || !o(a, u))) {
        const p = `--${n ? `${n}-` : ""}${a.join("-")}`, m = vp(a, u);
        Object.assign(r, {
          [p]: m
        }), gs(i, a, `var(${p})`, h), gs(s, a, `var(${p}, ${m})`, h);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: r,
    vars: i,
    varsWithDefaults: s
  };
}
function wp(e, t = {}) {
  const {
    getSelector: n = S,
    disableCssColorScheme: o,
    colorSchemeSelector: r,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: u = "light",
    ...h
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: d
  } = Mr(h, t);
  let g = d;
  const x = {}, {
    [u]: f,
    ...y
  } = s;
  if (Object.entries(y || {}).forEach(([w, E]) => {
    const {
      vars: T,
      css: R,
      varsWithDefaults: F
    } = Mr(E, t);
    g = Ze(g, F), x[w] = {
      css: R,
      vars: T
    };
  }), f) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: T
    } = Mr(f, t);
    g = Ze(g, T), x[u] = {
      css: w,
      vars: E
    };
  }
  function S(w, E) {
    let T = r;
    if (r === "class" && (T = ".%s"), r === "data" && (T = "[data-%s]"), r?.startsWith("data-") && !r.includes("%s") && (T = `[${r}="%s"]`), w) {
      if (T === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${s[w]?.palette?.mode || w})`]: {
            ":root": E
          }
        };
      if (T)
        return e.defaultColorScheme === w ? `:root, ${T.replace("%s", String(w))}` : T.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let w = {
        ...p
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = Ze(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      const w = [], E = e.defaultColorScheme || "light";
      function T(I, H) {
        Object.keys(H).length && w.push(typeof I == "string" ? {
          [I]: {
            ...H
          }
        } : I);
      }
      T(n(void 0, {
        ...m
      }), m);
      const {
        [E]: R,
        ...F
      } = x;
      if (R) {
        const {
          css: I
        } = R, H = s[E]?.palette?.mode, B = !o && H ? {
          colorScheme: H,
          ...I
        } : {
          ...I
        };
        T(n(E, {
          ...B
        }), B);
      }
      return Object.entries(F).forEach(([I, {
        css: H
      }]) => {
        const B = s[I]?.palette?.mode, v = !o && B ? {
          colorScheme: B,
          ...H
        } : {
          ...H
        };
        T(n(I, {
          ...v
        }), v);
      }), i && w.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), w;
    }
  };
}
function Cp(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function xt(e, t, n = void 0) {
  const o = {};
  for (const r in e) {
    const i = e[r];
    let s = "", a = !0;
    for (let u = 0; u < i.length; u += 1) {
      const h = i[u];
      h && (s += (a === !0 ? "" : " ") + t(h), a = !1, n && n[h] && (s += " " + n[h]));
    }
    o[r] = s;
  }
  return o;
}
const Zn = {
  black: "#000",
  white: "#fff"
}, Ep = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, rn = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, sn = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Mn = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, an = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ln = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, cn = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ll() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Zn.white,
      default: Zn.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const cl = ll();
function ul() {
  return {
    text: {
      primary: Zn.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Zn.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Zr = ul();
function xs(e, t, n, o) {
  const r = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = gr(e.main, r) : t === "dark" && (e.dark = mr(e.main, i)));
}
function bs(e, t, n, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  t[n] || (t.hasOwnProperty(o) ? t[n] = t[o] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Sp(e = "light") {
  return e === "dark" ? {
    main: an[200],
    light: an[50],
    dark: an[400]
  } : {
    main: an[700],
    light: an[400],
    dark: an[800]
  };
}
function _p(e = "light") {
  return e === "dark" ? {
    main: rn[200],
    light: rn[50],
    dark: rn[400]
  } : {
    main: rn[500],
    light: rn[300],
    dark: rn[700]
  };
}
function Rp(e = "light") {
  return e === "dark" ? {
    main: sn[500],
    light: sn[300],
    dark: sn[700]
  } : {
    main: sn[700],
    light: sn[400],
    dark: sn[800]
  };
}
function Tp(e = "light") {
  return e === "dark" ? {
    main: ln[400],
    light: ln[300],
    dark: ln[700]
  } : {
    main: ln[700],
    light: ln[500],
    dark: ln[900]
  };
}
function kp(e = "light") {
  return e === "dark" ? {
    main: cn[400],
    light: cn[300],
    dark: cn[700]
  } : {
    main: cn[800],
    light: cn[500],
    dark: cn[900]
  };
}
function jp(e = "light") {
  return e === "dark" ? {
    main: Mn[400],
    light: Mn[300],
    dark: Mn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mn[500],
    dark: Mn[900]
  };
}
function $p(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ri(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    colorSpace: r,
    ...i
  } = e, s = e.primary || Sp(t), a = e.secondary || _p(t), u = e.error || Rp(t), h = e.info || Tp(t), p = e.success || kp(t), m = e.warning || jp(t);
  function d(y) {
    if (r)
      return $p(y);
    const S = ps(y, Zr.text.primary) >= n ? Zr.text.primary : cl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const j = ps(y, S);
      j < 3 && console.error([`MUI: The contrast ratio of ${j}:1 for ${S} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const g = ({
    color: y,
    name: S,
    mainShade: j = 500,
    lightShade: C = 300,
    darkShade: w = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[j] && (y.main = y[j]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${j}\` property.` : Ft(11, S ? ` (${S})` : "", j));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ft(12, S ? ` (${S})` : "", JSON.stringify(y.main)));
    return r ? (bs(r, y, "light", C, o), bs(r, y, "dark", w, o)) : (xs(y, "light", C, o), xs(y, "dark", w, o)), y.contrastText || (y.contrastText = d(y.main)), y;
  };
  let x;
  return t === "light" ? x = ll() : t === "dark" && (x = ul()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ze({
    // A collection of common colors.
    common: {
      ...Zn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Ep,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...x
  }, i);
}
function Pp(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [r, i] = o;
    typeof i == "object" && (t[r] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Op(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Mp(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ys = {
  textTransform: "uppercase"
}, vs = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ap(e, t) {
  const {
    fontFamily: n = vs,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: r = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const d = o / 14, g = p || ((y) => `${y / u * d}rem`), x = (y, S, j, C, w) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: g(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: j,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === vs ? {
      letterSpacing: `${Mp(C / S)}em`
    } : {},
    ...w,
    ...h
  }), f = {
    h1: x(r, 96, 1.167, -1.5),
    h2: x(r, 60, 1.2, -0.5),
    h3: x(i, 48, 1.167, 0),
    h4: x(i, 34, 1.235, 0.25),
    h5: x(i, 24, 1.334, 0),
    h6: x(s, 20, 1.6, 0.15),
    subtitle1: x(i, 16, 1.75, 0.15),
    subtitle2: x(s, 14, 1.57, 0.1),
    body1: x(i, 16, 1.5, 0.15),
    body2: x(i, 14, 1.43, 0.15),
    button: x(s, 14, 1.75, 0.4, ys),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, ys),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ze({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: r,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...f
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Dp = 0.2, Ip = 0.14, Fp = 0.12;
function Re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ip})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fp})`].join(",");
}
const Np = ["none", Re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Bp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, zp = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ws(e) {
  return `${Math.round(e)}ms`;
}
function Lp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Vp(e) {
  const t = {
    ...Bp,
    ...e.easing
  }, n = {
    ...zp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Lp,
    create: (r = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: u = 0,
        ...h
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (d) => typeof d == "string", m = (d) => !Number.isNaN(parseFloat(d));
        !p(r) && !Array.isArray(r) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(a) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(r) ? r : [r]).map((p) => `${p} ${typeof s == "string" ? s : ws(s)} ${a} ${typeof u == "string" ? u : ws(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Hp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Wp(e) {
  return _t(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function dl(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const r = Object.entries(o);
    for (let i = 0; i < r.length; i++) {
      const [s, a] = r[i];
      !Wp(a) || s.startsWith("unstable_") ? delete o[s] : _t(a) && (o[s] = {
        ...a
      }, n(o[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Cs(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Up = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let n = 0;
  for (let o = 0; o < t.length; o += 1)
    n += +t[o];
  return n;
};
function Gp(e) {
  Object.assign(e, {
    alpha(t, n) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Go(t, Up(n));
    },
    lighten(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #fff ${Cs(n)})` : gr(t, n);
    },
    darken(t, n) {
      const o = this || e;
      return o.colorSpace ? `color-mix(in ${o.colorSpace}, ${t}, #000 ${Cs(n)})` : mr(t, n);
    }
  });
}
function Jr(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: o = {},
    spacing: r,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: u,
    colorSpace: h,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ft(20));
  const m = Ri({
    ...i,
    colorSpace: h
  }), d = Ei(e);
  let g = Ze(d, {
    mixins: Op(d.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Np.slice(),
    typography: Ap(m, a),
    transitions: Vp(s),
    zIndex: {
      ...Hp
    }
  });
  if (g = Ze(g, p), g = t.reduce((x, f) => Ze(x, f), g), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (y, S) => {
      let j;
      for (j in y) {
        const C = y[j];
        if (x.includes(j) && Object.keys(C).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = ct("", j);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${j}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: C
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[j] = {};
        }
      }
    };
    Object.keys(g.components).forEach((y) => {
      const S = g.components[y].styleOverrides;
      S && y.startsWith("Mui") && f(S, y);
    });
  }
  return g.unstable_sxConfig = {
    ...fr,
    ...p?.unstable_sxConfig
  }, g.unstable_sx = function(f) {
    return xn({
      sx: f,
      theme: this
    });
  }, g.toRuntimeSource = dl, Gp(g), g;
}
function Qr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Yp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Qr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function pl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function fl(e) {
  return e === "dark" ? Yp : [];
}
function qp(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: o,
    colorSpace: r,
    ...i
  } = e, s = Ri({
    ...t,
    colorSpace: r
  });
  return {
    palette: s,
    opacity: {
      ...pl(s.mode),
      ...n
    },
    overlays: o || fl(s.mode),
    ...i
  };
}
function Kp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Xp = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Zp = (e) => (t, n) => {
  const o = e.rootSelector || ":root", r = e.colorSchemeSelector;
  let i = r;
  if (r === "class" && (i = ".%s"), r === "data" && (i = "[data-%s]"), r?.startsWith("data-") && !r.includes("%s") && (i = `[${r}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Xp(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), i === "media" ? {
        [o]: n,
        "@media (prefers-color-scheme: dark)": {
          [o]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${o}, ${i.replace("%s", t)}`]: n
      } : {
        [o]: {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${o}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [o]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return o;
};
function Jp(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function L(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function zn(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : sl(e);
}
function yt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Bn(zn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Qp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const dt = (e) => {
  try {
    return e();
  } catch {
  }
}, ef = (e = "mui") => bp(e);
function Ar(e, t, n, o, r) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = r === "dark" ? "dark" : "light";
  if (!o) {
    t[r] = qp({
      ...n,
      palette: {
        mode: i,
        ...n?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...a
  } = Jr({
    ...o,
    palette: {
      mode: i,
      ...n?.palette
    },
    colorSpace: e
  });
  return t[r] = {
    ...n,
    palette: s,
    opacity: {
      ...pl(i),
      ...n?.opacity
    },
    overlays: n?.overlays || fl(i)
  }, a;
}
function tf(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: r = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: a = Kp,
    colorSchemeSelector: u = n.light && n.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...p
  } = e, m = Object.keys(n)[0], d = o || (n.light && m !== "light" ? "light" : m), g = ef(i), {
    [d]: x,
    light: f,
    dark: y,
    ...S
  } = n, j = {
    ...S
  };
  let C = x;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (C = !0), !C)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Ft(21, d));
  let w;
  s && (w = "oklch");
  const E = Ar(w, j, C, p, d);
  f && !j.light && Ar(w, j, f, void 0, "light"), y && !j.dark && Ar(w, j, y, void 0, "dark");
  let T = {
    defaultColorScheme: d,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    rootSelector: h,
    getCssVar: g,
    colorSchemes: j,
    font: {
      ...Pp(E.typography),
      ...E.font
    },
    spacing: Qp(p.spacing)
  };
  Object.keys(T.colorSchemes).forEach((B) => {
    const v = T.colorSchemes[B].palette, D = (A) => {
      const _ = A.split("-"), U = _[1], J = _[2];
      return g(A, v[U][J]);
    };
    v.mode === "light" && (L(v.common, "background", "#fff"), L(v.common, "onBackground", "#000")), v.mode === "dark" && (L(v.common, "background", "#000"), L(v.common, "onBackground", "#fff"));
    function M(A, _, U) {
      if (w) {
        let J;
        return A === Ht && (J = `transparent ${((1 - U) * 100).toFixed(0)}%`), A === ye && (J = `#000 ${(U * 100).toFixed(0)}%`), A === ve && (J = `#fff ${(U * 100).toFixed(0)}%`), `color-mix(in ${w}, ${_}, ${J})`;
      }
      return A(_, U);
    }
    if (Jp(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      L(v.Alert, "errorColor", M(ye, v.error.light, 0.6)), L(v.Alert, "infoColor", M(ye, v.info.light, 0.6)), L(v.Alert, "successColor", M(ye, v.success.light, 0.6)), L(v.Alert, "warningColor", M(ye, v.warning.light, 0.6)), L(v.Alert, "errorFilledBg", D("palette-error-main")), L(v.Alert, "infoFilledBg", D("palette-info-main")), L(v.Alert, "successFilledBg", D("palette-success-main")), L(v.Alert, "warningFilledBg", D("palette-warning-main")), L(v.Alert, "errorFilledColor", dt(() => v.getContrastText(v.error.main))), L(v.Alert, "infoFilledColor", dt(() => v.getContrastText(v.info.main))), L(v.Alert, "successFilledColor", dt(() => v.getContrastText(v.success.main))), L(v.Alert, "warningFilledColor", dt(() => v.getContrastText(v.warning.main))), L(v.Alert, "errorStandardBg", M(ve, v.error.light, 0.9)), L(v.Alert, "infoStandardBg", M(ve, v.info.light, 0.9)), L(v.Alert, "successStandardBg", M(ve, v.success.light, 0.9)), L(v.Alert, "warningStandardBg", M(ve, v.warning.light, 0.9)), L(v.Alert, "errorIconColor", D("palette-error-main")), L(v.Alert, "infoIconColor", D("palette-info-main")), L(v.Alert, "successIconColor", D("palette-success-main")), L(v.Alert, "warningIconColor", D("palette-warning-main")), L(v.AppBar, "defaultBg", D("palette-grey-100")), L(v.Avatar, "defaultBg", D("palette-grey-400")), L(v.Button, "inheritContainedBg", D("palette-grey-300")), L(v.Button, "inheritContainedHoverBg", D("palette-grey-A100")), L(v.Chip, "defaultBorder", D("palette-grey-400")), L(v.Chip, "defaultAvatarColor", D("palette-grey-700")), L(v.Chip, "defaultIconColor", D("palette-grey-700")), L(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), L(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), L(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), L(v.LinearProgress, "primaryBg", M(ve, v.primary.main, 0.62)), L(v.LinearProgress, "secondaryBg", M(ve, v.secondary.main, 0.62)), L(v.LinearProgress, "errorBg", M(ve, v.error.main, 0.62)), L(v.LinearProgress, "infoBg", M(ve, v.info.main, 0.62)), L(v.LinearProgress, "successBg", M(ve, v.success.main, 0.62)), L(v.LinearProgress, "warningBg", M(ve, v.warning.main, 0.62)), L(v.Skeleton, "bg", w ? M(Ht, v.text.primary, 0.11) : `rgba(${D("palette-text-primaryChannel")} / 0.11)`), L(v.Slider, "primaryTrack", M(ve, v.primary.main, 0.62)), L(v.Slider, "secondaryTrack", M(ve, v.secondary.main, 0.62)), L(v.Slider, "errorTrack", M(ve, v.error.main, 0.62)), L(v.Slider, "infoTrack", M(ve, v.info.main, 0.62)), L(v.Slider, "successTrack", M(ve, v.success.main, 0.62)), L(v.Slider, "warningTrack", M(ve, v.warning.main, 0.62));
      const A = w ? M(ye, v.background.default, 0.6825) : _o(v.background.default, 0.8);
      L(v.SnackbarContent, "bg", A), L(v.SnackbarContent, "color", dt(() => w ? Zr.text.primary : v.getContrastText(A))), L(v.SpeedDialAction, "fabHoverBg", _o(v.background.paper, 0.15)), L(v.StepConnector, "border", D("palette-grey-400")), L(v.StepContent, "border", D("palette-grey-400")), L(v.Switch, "defaultColor", D("palette-common-white")), L(v.Switch, "defaultDisabledColor", D("palette-grey-100")), L(v.Switch, "primaryDisabledColor", M(ve, v.primary.main, 0.62)), L(v.Switch, "secondaryDisabledColor", M(ve, v.secondary.main, 0.62)), L(v.Switch, "errorDisabledColor", M(ve, v.error.main, 0.62)), L(v.Switch, "infoDisabledColor", M(ve, v.info.main, 0.62)), L(v.Switch, "successDisabledColor", M(ve, v.success.main, 0.62)), L(v.Switch, "warningDisabledColor", M(ve, v.warning.main, 0.62)), L(v.TableCell, "border", M(ve, M(Ht, v.divider, 1), 0.88)), L(v.Tooltip, "bg", M(Ht, v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      L(v.Alert, "errorColor", M(ve, v.error.light, 0.6)), L(v.Alert, "infoColor", M(ve, v.info.light, 0.6)), L(v.Alert, "successColor", M(ve, v.success.light, 0.6)), L(v.Alert, "warningColor", M(ve, v.warning.light, 0.6)), L(v.Alert, "errorFilledBg", D("palette-error-dark")), L(v.Alert, "infoFilledBg", D("palette-info-dark")), L(v.Alert, "successFilledBg", D("palette-success-dark")), L(v.Alert, "warningFilledBg", D("palette-warning-dark")), L(v.Alert, "errorFilledColor", dt(() => v.getContrastText(v.error.dark))), L(v.Alert, "infoFilledColor", dt(() => v.getContrastText(v.info.dark))), L(v.Alert, "successFilledColor", dt(() => v.getContrastText(v.success.dark))), L(v.Alert, "warningFilledColor", dt(() => v.getContrastText(v.warning.dark))), L(v.Alert, "errorStandardBg", M(ye, v.error.light, 0.9)), L(v.Alert, "infoStandardBg", M(ye, v.info.light, 0.9)), L(v.Alert, "successStandardBg", M(ye, v.success.light, 0.9)), L(v.Alert, "warningStandardBg", M(ye, v.warning.light, 0.9)), L(v.Alert, "errorIconColor", D("palette-error-main")), L(v.Alert, "infoIconColor", D("palette-info-main")), L(v.Alert, "successIconColor", D("palette-success-main")), L(v.Alert, "warningIconColor", D("palette-warning-main")), L(v.AppBar, "defaultBg", D("palette-grey-900")), L(v.AppBar, "darkBg", D("palette-background-paper")), L(v.AppBar, "darkColor", D("palette-text-primary")), L(v.Avatar, "defaultBg", D("palette-grey-600")), L(v.Button, "inheritContainedBg", D("palette-grey-800")), L(v.Button, "inheritContainedHoverBg", D("palette-grey-700")), L(v.Chip, "defaultBorder", D("palette-grey-700")), L(v.Chip, "defaultAvatarColor", D("palette-grey-300")), L(v.Chip, "defaultIconColor", D("palette-grey-300")), L(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), L(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), L(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), L(v.LinearProgress, "primaryBg", M(ye, v.primary.main, 0.5)), L(v.LinearProgress, "secondaryBg", M(ye, v.secondary.main, 0.5)), L(v.LinearProgress, "errorBg", M(ye, v.error.main, 0.5)), L(v.LinearProgress, "infoBg", M(ye, v.info.main, 0.5)), L(v.LinearProgress, "successBg", M(ye, v.success.main, 0.5)), L(v.LinearProgress, "warningBg", M(ye, v.warning.main, 0.5)), L(v.Skeleton, "bg", w ? M(Ht, v.text.primary, 0.13) : `rgba(${D("palette-text-primaryChannel")} / 0.13)`), L(v.Slider, "primaryTrack", M(ye, v.primary.main, 0.5)), L(v.Slider, "secondaryTrack", M(ye, v.secondary.main, 0.5)), L(v.Slider, "errorTrack", M(ye, v.error.main, 0.5)), L(v.Slider, "infoTrack", M(ye, v.info.main, 0.5)), L(v.Slider, "successTrack", M(ye, v.success.main, 0.5)), L(v.Slider, "warningTrack", M(ye, v.warning.main, 0.5));
      const A = w ? M(ve, v.background.default, 0.985) : _o(v.background.default, 0.98);
      L(v.SnackbarContent, "bg", A), L(v.SnackbarContent, "color", dt(() => w ? cl.text.primary : v.getContrastText(A))), L(v.SpeedDialAction, "fabHoverBg", _o(v.background.paper, 0.15)), L(v.StepConnector, "border", D("palette-grey-600")), L(v.StepContent, "border", D("palette-grey-600")), L(v.Switch, "defaultColor", D("palette-grey-300")), L(v.Switch, "defaultDisabledColor", D("palette-grey-600")), L(v.Switch, "primaryDisabledColor", M(ye, v.primary.main, 0.55)), L(v.Switch, "secondaryDisabledColor", M(ye, v.secondary.main, 0.55)), L(v.Switch, "errorDisabledColor", M(ye, v.error.main, 0.55)), L(v.Switch, "infoDisabledColor", M(ye, v.info.main, 0.55)), L(v.Switch, "successDisabledColor", M(ye, v.success.main, 0.55)), L(v.Switch, "warningDisabledColor", M(ye, v.warning.main, 0.55)), L(v.TableCell, "border", M(ye, M(Ht, v.divider, 1), 0.68)), L(v.Tooltip, "bg", M(Ht, v.grey[700], 0.92));
    }
    yt(v.background, "default"), yt(v.background, "paper"), yt(v.common, "background"), yt(v.common, "onBackground"), yt(v, "divider"), Object.keys(v).forEach((A) => {
      const _ = v[A];
      A !== "tonalOffset" && _ && typeof _ == "object" && (_.main && L(v[A], "mainChannel", Bn(zn(_.main))), _.light && L(v[A], "lightChannel", Bn(zn(_.light))), _.dark && L(v[A], "darkChannel", Bn(zn(_.dark))), _.contrastText && L(v[A], "contrastTextChannel", Bn(zn(_.contrastText))), A === "text" && (yt(v[A], "primary"), yt(v[A], "secondary")), A === "action" && (_.active && yt(v[A], "active"), _.selected && yt(v[A], "selected")));
    });
  }), T = t.reduce((B, v) => Ze(B, v), T);
  const R = {
    prefix: i,
    disableCssColorScheme: r,
    shouldSkipGeneratingVar: a,
    getSelector: Zp(T),
    enableContrastVars: s
  }, {
    vars: F,
    generateThemeVars: I,
    generateStyleSheets: H
  } = wp(T, R);
  return T.vars = F, Object.entries(T.colorSchemes[T.defaultColorScheme]).forEach(([B, v]) => {
    T[B] = v;
  }), T.generateThemeVars = I, T.generateStyleSheets = H, T.generateSpacing = function() {
    return el(p.spacing, wi(this));
  }, T.getColorSchemeSelector = Cp(u), T.spacing = T.generateSpacing(), T.shouldSkipGeneratingVar = a, T.unstable_sxConfig = {
    ...fr,
    ...p?.unstable_sxConfig
  }, T.unstable_sx = function(v) {
    return xn({
      sx: v,
      theme: this
    });
  }, T.toRuntimeSource = dl, T;
}
function Es(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ri({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function hl(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: r = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n?.mode,
    ...s
  } = e, a = i || "light", u = r?.[a], h = {
    ...r,
    ...n ? {
      [a]: {
        ...typeof u != "boolean" && u,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return Jr(e, ...t);
    let p = n;
    "palette" in e || h[a] && (h[a] !== !0 ? p = h[a].palette : a === "dark" && (p = {
      mode: "dark"
    }));
    const m = Jr({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = a, m.colorSchemes = h, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: m.palette
    }, Es(m, "dark", h.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: m.palette
    }, Es(m, "light", h.light)), m;
  }
  return !n && !("light" in h) && a === "light" && (h.light = !0), tf({
    ...s,
    colorSchemes: h,
    defaultColorScheme: a,
    ...typeof o != "boolean" && o
  }, ...t);
}
const ml = hl();
function xr() {
  const e = Gd(ml);
  return process.env.NODE_ENV !== "production" && k.useDebugValue(e), e[qa] || e;
}
function nf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ti = (e) => nf(e) && e !== "classes", ne = ep({
  themeId: qa,
  defaultTheme: ml,
  rootShouldForwardProp: Ti
}), Ss = () => (/* @__PURE__ */ new Date()).toISOString(), Ro = "IronCalc-Clipboard", Yo = 40, gl = 40, xl = 40, of = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("g", { id: "arrow-middle-from-line", clipPath: "url(#clip0_107_4135)" }, /* @__PURE__ */ k.createElement("path", { id: "Vector", d: "M8 14.6667V10.6667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_2", d: "M8 5.33333V1.33333", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_3", d: "M14.6667 8H1.33334", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_4", d: "M10 12.6667L8 10.6667L6 12.6667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_5", d: "M10 3.33333L8 5.33333L6 3.33333", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", { id: "clip0_107_4135" }, /* @__PURE__ */ k.createElement("rect", { width: 16, height: 16, fill: "white" })))), rf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M2 14H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M14 11.3333V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), sf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 5.33333V3.33333C14 2.59695 13.403 2 12.6667 2H8M14 10.6667V12.6667C14 13.403 13.403 14 12.6667 14H8M2 10.6667V12.6667C2 13.403 2.59695 14 3.33333 14H8M2 5.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H8M8 14V10.6667M8 2V5.33333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), af = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M10.6667 2H12.6667C13.403 2 14 2.59695 14 3.33333V8M5.33333 2H3.33333C2.59695 2 2 2.59695 2 3.33333V8M5.33333 14H3.33333C2.59695 14 2 13.403 2 12.6667V8M10.6667 14H12.6667C13.403 14 14 13.403 14 12.6667V8M2 8H5.33333M14 8H10.6667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), lf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 5.33333V3.33333C14 2.59695 13.403 2 12.6667 2H10.6667M14 10.6667V12.6667C14 13.403 13.403 14 12.6667 14H10.6667M2 10.6667V12.6667C2 13.403 2.59695 14 3.33333 14H5.33333M2 5.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H5.33333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), cf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M4.66667 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H4.66667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M4.66667 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), uf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), df = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M4.66667 8H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 4.66667L8 11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), pf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M11.3333 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M14 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), ff = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M3 8H2M14 8H13M7 8H5M11 8H9M14 4H2M2.01 12H2M4.01 12H4M6.01 12H6M8.01 12H8M10.01 12H10M12.01 12H12M14.01 12H14", stroke: "#333333", strokeLinecap: "round", strokeLinejoin: "round" })), hf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 4.66667V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4.66667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 2H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 4.66667V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), mf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 12, height: 14, viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.182 13.305C0.303333 13.3917 0.468 13.435 0.676 13.435C0.962 13.435 1.24367 13.3483 1.521 13.175C1.79833 13.0103 2.05833 12.7937 2.301 12.525C2.55233 12.2563 2.77333 11.9703 2.964 11.667C3.16333 11.3637 3.32367 11.069 3.445 10.783C3.575 10.5057 3.653 10.276 3.679 10.094L4.459 5.011H5.954V4.439H4.537L4.706 3.36C4.80133 2.75334 4.96167 2.281 5.187 1.943C5.421 1.59634 5.73733 1.423 6.136 1.423C6.422 1.423 6.67767 1.488 6.903 1.618L7.189 1.787H7.293L7.566 1.28C7.592 1.23667 7.61367 1.189 7.631 1.137C7.657 1.085 7.67 1.04167 7.67 1.007C7.67 0.93767 7.64833 0.881336 7.605 0.838003C7.57033 0.786003 7.49233 0.72967 7.371 0.669003C7.30167 0.643003 7.22367 0.621336 7.137 0.604003C7.05033 0.578003 6.95933 0.565002 6.864 0.565002C6.53467 0.565002 6.20967 0.651669 5.889 0.825003C5.56833 0.98967 5.265 1.21067 4.979 1.488C4.693 1.75667 4.43733 2.047 4.212 2.359C3.98667 2.66234 3.80033 2.957 3.653 3.243C3.51433 3.52034 3.432 3.75434 3.406 3.945L3.328 4.439H2.249V5.011H3.25L2.405 10.692C2.31833 11.2813 2.17533 11.745 1.976 12.083C1.77667 12.4297 1.508 12.603 1.17 12.603C0.953333 12.603 0.788667 12.564 0.676 12.486L0.39 12.278H0.312L0.0779999 12.746C0.026 12.85 0 12.9367 0 13.006C0 13.1187 0.0606667 13.2183 0.182 13.305ZM5.90545 9.98999C5.82745 10.1027 5.78845 10.211 5.78845 10.315H6.65945C6.70279 10.211 6.75045 10.1113 6.80245 10.016C6.85445 9.91199 6.93245 9.78199 7.03645 9.62599C7.14045 9.46132 7.30079 9.23166 7.51745 8.93699C7.73412 8.64232 8.03312 8.25232 8.41445 7.76699L9.45445 10.341H9.49345L11.2745 9.92499V9.82099L10.3385 9.44399L9.37645 6.98699C9.80112 6.50166 10.1521 6.11166 10.4295 5.81699C10.7068 5.52232 10.9235 5.29266 11.0795 5.12799C11.2441 4.96332 11.3568 4.83332 11.4175 4.73799C11.4868 4.63399 11.5215 4.53432 11.5215 4.43899H10.7025C10.6678 4.52566 10.6288 4.61666 10.5855 4.71199C10.5421 4.79866 10.4728 4.91566 10.3775 5.06299C10.2908 5.20166 10.1565 5.39666 9.97445 5.64799C9.79245 5.89932 9.54545 6.22866 9.23345 6.63599L8.31045 4.30899H8.27145L6.43845 4.72499V4.82899L7.38745 5.21899L8.27145 7.40299C7.78612 7.95766 7.38312 8.40399 7.06245 8.74199C6.74179 9.07999 6.48612 9.34432 6.29545 9.53499C6.11345 9.72566 5.98345 9.87732 5.90545 9.98999Z", fill: "#828282" })), hy = (e) => /* @__PURE__ */ k.createElement("svg", { width: 100, height: 100, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M62.2449 0C62.2449 16.5084 55.687 32.3406 44.0138 44.0138C42.0408 45.9868 39.949 47.8137 37.7551 49.4875L37.7551 100C37.7551 83.4916 44.3131 67.6594 55.9863 55.9862C57.9593 54.0132 60.0511 52.1863 62.2449 50.5125L62.2449 0Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M37.7552 0.0239258C37.7488 10.0285 33.7717 19.622 26.697 26.6968C19.6165 33.7773 10.0133 37.755 6.10352e-05 37.755V62.2448C13.7182 62.2448 26.9694 57.7164 37.7552 49.4874V0.0239258Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M62.2449 99.976C62.2513 89.9713 66.2283 80.3779 73.3031 73.3031C80.3836 66.2226 89.9868 62.2449 100 62.2449V37.7551C86.2819 37.7551 73.0307 42.2835 62.2449 50.5125V99.976Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.0138 44.0138C55.687 32.3406 62.2449 16.5084 62.2449 0H37.7551V49.4875C39.949 47.8137 42.0408 45.9868 44.0138 44.0138Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37.7551 99.9655C37.7551 99.977 37.7551 99.9885 37.7551 100H62.2449C62.2449 99.9912 62.2449 99.9825 62.2449 99.9737V50.5125C60.0511 52.1863 57.9593 54.0132 55.9862 55.9862C44.3212 67.6513 37.7643 83.4696 37.7551 99.9655Z", fill: "#F2994A" })), my = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M9.95898 8.08594C9.60893 8.35318 9.27389 8.64313 8.95898 8.95801C7.09126 10.8257 6.042 13.3586 6.04199 16H6.04102V7.91406C6.39142 7.64662 6.72781 7.35715 7.04297 7.04199C8.90157 5.18307 9.9492 2.6648 9.95898 0.0371094V8.08594Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M6.04102 7.91406C4.31493 9.23162 2.19571 9.95898 0 9.95898V6.04102C1.60208 6.04102 3.13861 5.40429 4.27148 4.27148C5.40436 3.13861 6.04101 1.60213 6.04102 0L6.04102 7.91406Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M9.95947 8.08594C11.6856 6.76838 13.8048 6.04102 16.0005 6.04102V9.95898C14.3984 9.95898 12.8619 10.5957 11.729 11.7285C10.5961 12.8614 9.95948 14.3979 9.95947 16L9.95947 8.08594Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { d: "M9.95898 0C9.95898 2.64126 8.90957 5.17429 7.04199 7.04199C6.727 7.35698 6.39119 7.64674 6.04102 7.91406L6.04102 0H9.95898Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { d: "M6.04102 16C6.04102 13.3587 7.09042 10.8257 8.95801 8.95801C9.273 8.64302 9.60881 8.35326 9.95898 8.08594V16H6.04102Z", fill: "white" })), gf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 570, height: 100, viewBox: "0 0 570 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M63.2036 0C63.2036 16.5084 56.6457 32.3406 44.9725 44.0138C42.9995 45.9868 40.9076 47.8137 38.7138 49.4875L38.7138 100C38.7138 83.4916 45.2718 67.6594 56.9449 55.9862C58.9179 54.0132 61.0098 52.1863 63.2036 50.5125L63.2036 0Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M38.7138 0.0239868C38.7075 10.0286 34.7304 19.6221 27.6556 26.6969C20.5752 33.7773 10.972 37.7551 0.95874 37.7551V62.2449C14.6768 62.2449 27.9281 57.7165 38.7138 49.4875V0.0239868Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M63.2036 99.976C63.21 89.9714 67.187 80.3779 74.2618 73.3031C81.3423 66.2227 90.9454 62.2449 100.959 62.2449V37.7551C87.2406 37.7551 73.9894 42.2835 63.2036 50.5125V99.976Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.9725 44.0138C56.6457 32.3406 63.2036 16.5084 63.2036 0H38.7138V49.4875C40.9076 47.8137 42.9995 45.9868 44.9725 44.0138Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.7138 99.9656C38.7138 99.9771 38.7138 99.9885 38.7138 100H63.2036C63.2036 99.9913 63.2036 99.9825 63.2036 99.9737V50.5125C61.0098 52.1863 58.9179 54.0132 56.9449 55.9862C45.2799 67.6513 38.7229 83.4696 38.7138 99.9656Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M402.852 37.2995H417.053C416.47 32.9711 415.23 29.1236 413.332 25.757C411.459 22.3651 409.067 19.5048 406.156 17.1761C403.245 14.822 399.929 13.0375 396.208 11.8225C392.487 10.6075 388.462 10 384.134 10C377.35 10 371.275 11.582 365.909 14.7461C360.543 17.9101 356.303 22.479 353.189 28.4528C350.076 34.4012 348.519 41.5646 348.519 49.943C348.519 58.2962 350.063 65.4596 353.151 71.4333C356.24 77.4071 360.467 81.976 365.833 85.14C371.199 88.3041 377.299 89.8861 384.134 89.8861C388.766 89.8861 392.981 89.2027 396.777 87.8358C400.574 86.4436 403.89 84.5199 406.725 82.0646C409.56 79.5839 411.851 76.7236 413.598 73.4836C415.369 70.2436 416.521 66.7758 417.053 63.0802L402.852 63.0043C402.422 65.2824 401.637 67.3074 400.498 69.0793C399.385 70.8511 398.005 72.3446 396.36 73.5596C394.74 74.7746 392.905 75.6985 390.854 76.3313C388.829 76.9388 386.652 77.2425 384.324 77.2425C380.122 77.2425 376.388 76.2174 373.123 74.1671C369.883 72.0914 367.326 69.0286 365.453 64.9786C363.605 60.9033 362.682 55.8915 362.682 49.943C362.682 44.0959 363.605 39.1473 365.453 35.0973C367.301 31.022 369.858 27.9339 373.123 25.8329C376.388 23.7067 380.134 22.6436 384.362 22.6436C386.741 22.6436 388.956 22.9726 391.006 23.6308C393.082 24.2636 394.93 25.2128 396.55 26.4784C398.17 27.744 399.524 29.2881 400.612 31.1106C401.701 32.9078 402.447 34.9707 402.852 37.2995ZM504.485 88.823V11.0631H490.74V88.823H504.485ZM529.06 86.1272C533.237 88.6838 538.236 89.962 544.058 89.962C548.943 89.962 553.196 89.0761 556.815 87.3042C560.435 85.507 563.295 83.0264 565.396 79.8624C567.497 76.673 568.712 73.0153 569.041 68.8894H555.904C555.499 70.9903 554.752 72.7749 553.664 74.243C552.576 75.7111 551.221 76.8375 549.601 77.6222C548.007 78.3816 546.197 78.7613 544.172 78.7613C541.311 78.7613 538.818 78.0019 536.692 76.4831C534.591 74.9391 532.958 72.7496 531.794 69.9146C530.63 67.0543 530.047 63.6371 530.047 59.663C530.047 55.7396 530.63 52.373 531.794 49.5634C532.984 46.7537 534.642 44.6021 536.768 43.1087C538.894 41.5899 541.362 40.8306 544.172 40.8306C547.488 40.8306 550.133 41.7798 552.107 43.6782C554.107 45.5513 555.373 47.8927 555.904 50.7024H569.041C568.738 46.5006 567.497 42.8302 565.32 39.6915C563.143 36.5274 560.22 34.0848 556.55 32.3635C552.905 30.617 548.715 29.7437 543.982 29.7437C538.287 29.7437 533.351 31.022 529.174 33.5785C525.023 36.1098 521.808 39.6535 519.53 44.2098C517.252 48.7407 516.113 53.9677 516.113 59.8908C516.113 65.7886 517.227 71.003 519.454 75.5339C521.707 80.0396 524.909 83.5706 529.06 86.1272ZM446.127 90C442.432 90 439.103 89.3419 436.141 88.0256C433.205 86.6841 430.876 84.7097 429.155 82.1025C427.459 79.4953 426.611 76.2807 426.611 72.4585C426.611 69.1679 427.219 66.4468 428.434 64.2952C429.649 62.1436 431.307 60.4224 433.408 59.1315C435.509 57.8405 437.875 56.866 440.508 56.2079C443.166 55.5244 445.912 55.0308 448.747 54.7271C452.164 54.3727 454.936 54.0563 457.062 53.7779C459.188 53.4741 460.733 53.0185 461.694 52.411C462.682 51.7782 463.175 50.8037 463.175 49.4874V49.2596C463.175 46.3993 462.327 44.1845 460.631 42.6151C458.935 41.0457 456.493 40.261 453.303 40.261C449.937 40.261 447.266 40.9951 445.292 42.4632C443.343 43.9313 442.027 45.6652 441.343 47.6649L428.51 45.8424C429.522 42.2987 431.193 39.3371 433.522 36.9578C435.85 34.5531 438.698 32.7559 442.065 31.5662C445.431 30.3512 449.152 29.7437 453.227 29.7437C456.037 29.7437 458.834 30.0728 461.618 30.7309C464.403 31.389 466.947 32.4774 469.25 33.9962C471.554 35.4896 473.401 37.5273 474.794 40.1092C476.211 42.691 476.92 45.9184 476.92 49.7912V88.823H463.707V80.8116H463.251C462.416 82.4316 461.239 83.9503 459.72 85.3678C458.227 86.76 456.341 87.8864 454.063 88.747C451.81 89.5823 449.165 90 446.127 90ZM449.696 79.9003C452.455 79.9003 454.847 79.3561 456.872 78.2677C458.897 77.1539 460.454 75.6858 461.543 73.8633C462.656 72.0408 463.213 70.0538 463.213 67.9022V61.0299C462.783 61.3843 462.049 61.7133 461.011 62.0171C459.998 62.3208 458.859 62.5866 457.594 62.8144C456.328 63.0422 455.075 63.2447 453.835 63.4219C452.595 63.5991 451.519 63.751 450.608 63.8775C448.557 64.156 446.722 64.6116 445.102 65.2444C443.482 65.8772 442.204 66.7632 441.267 67.9022C440.331 69.016 439.862 70.4588 439.862 72.2307C439.862 74.7619 440.786 76.673 442.634 77.9639C444.482 79.2549 446.836 79.9003 449.696 79.9003ZM298.477 54.6512V88.823H284.732V30.5031H297.869V40.4129H298.552C299.894 37.1476 302.033 34.5531 304.969 32.6293C307.931 30.7056 311.588 29.7437 315.942 29.7437C319.967 29.7437 323.473 30.6043 326.459 32.3256C329.472 34.0468 331.8 36.5401 333.446 39.8054C335.116 43.0707 335.939 47.0321 335.914 51.6896V88.823H322.169V53.8158C322.169 49.9177 321.156 46.8676 319.131 44.6654C317.132 42.4632 314.36 41.3621 310.816 41.3621C308.412 41.3621 306.273 41.8937 304.4 42.9568C302.552 43.9946 301.096 45.5007 300.033 47.4751C298.995 49.4495 298.477 51.8415 298.477 54.6512ZM230.313 86.2031C234.49 88.7091 239.426 89.962 245.121 89.962C250.816 89.962 255.752 88.7091 259.929 86.2031C264.105 83.6972 267.333 80.1914 269.611 75.6858C271.914 71.1802 273.066 65.9152 273.066 59.8908C273.066 53.8665 271.914 48.5888 269.611 44.0579C267.333 39.527 264.105 36.0085 259.929 33.5026C255.752 30.9967 250.816 29.7437 245.121 29.7437C239.426 29.7437 234.49 30.9967 230.313 33.5026C226.137 36.0085 222.897 39.527 220.593 44.0579C218.315 48.5888 217.176 53.8665 217.176 59.8908C217.176 65.9152 218.315 71.1802 220.593 75.6858C222.897 80.1914 226.137 83.6972 230.313 86.2031ZM252.943 76.4072C250.867 78.1031 248.285 78.9511 245.197 78.9511C242.033 78.9511 239.4 78.1031 237.299 76.4072C235.224 74.686 233.667 72.3825 232.629 69.4969C231.617 66.6113 231.111 63.3966 231.111 59.8529C231.111 56.2838 231.617 53.0565 232.629 50.1709C233.667 47.2599 235.224 44.9438 237.299 43.2226C239.4 41.5013 242.033 40.6407 245.197 40.6407C248.285 40.6407 250.867 41.5013 252.943 43.2226C255.018 44.9438 256.562 47.2599 257.575 50.1709C258.613 53.0565 259.131 56.2838 259.131 59.8529C259.131 63.3966 258.613 66.6113 257.575 69.4969C256.562 72.3825 255.018 74.686 252.943 76.4072ZM179.691 88.823V30.5031H193.018V40.2231H193.626C194.689 36.8565 196.512 34.262 199.093 32.4395C201.701 30.5917 204.675 29.6678 208.016 29.6678C208.775 29.6678 209.623 29.7057 210.56 29.7817C211.522 29.8323 212.319 29.9209 212.952 30.0475V42.691C212.37 42.4885 211.446 42.3113 210.18 42.1595C208.94 41.9823 207.738 41.8937 206.573 41.8937C204.067 41.8937 201.815 42.4379 199.815 43.5263C197.84 44.5895 196.284 46.0702 195.145 47.9687C194.006 49.8671 193.436 52.0566 193.436 54.5373V88.823H179.691ZM165.045 88.823V11.0631H150.959V88.823H165.045Z", fill: "#272525" })), P = hl({
  typography: {
    fontFamily: "Inter"
  },
  palette: {
    common: {
      black: "#272525",
      white: "#FFF"
    },
    primary: {
      main: "#F2994A",
      light: "#EFAA6D",
      dark: "#D68742",
      contrastText: "#FFF"
    },
    secondary: {
      main: "#2F80ED",
      light: "#4E92EC",
      dark: "#2B6EC8",
      contrastText: "#FFF"
    },
    error: {
      main: "#EB5757",
      light: "#E77A7A",
      dark: "#CB4C4C",
      contrastText: "#FFF"
    },
    warning: {
      main: "#F2C94C",
      light: "#EED384",
      dark: "#D6B244",
      contrastText: "#FFF"
    },
    info: {
      main: "#9E9E9E",
      light: "#E0E0E0",
      dark: "#757575",
      contrastText: "#FFF"
    },
    success: {
      main: "#27AE60",
      light: "#57BD82",
      dark: "#239152",
      contrastText: "#FFF"
    },
    grey: {
      50: "#F5F5F5",
      100: "#F2F2F2",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#333333",
      A100: "#F2F2F2",
      A200: "#EEEEEE",
      A400: "#bdbdbd",
      A700: "#616161"
    }
  }
}), _s = "#333", Rs = "#FFF", Ts = "#EEEEEE", ks = "#333", Dr = "#E0E0E0", xf = "#E0E0E0", To = "#E0E0E0", bf = "#2E414D", Ke = "#F2994A", yf = "#FBE0C9", vf = "#F2994A1A", Ae = 16384, Le = 1048576, Jn = 1, Qn = 1, Ir = 4;
function wf(e) {
  if (e.length !== 1)
    return !1;
  const t = e.codePointAt(0) ?? 0;
  return t > 0 && t < 255;
}
const Cf = (e) => ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(
  e
), Ef = (e, t) => e.rowStart === e.rowEnd && e.columnEnd === e.columnStart ? `${He(t.column)}${t.row}` : e.rowStart === 1 && e.rowEnd === Le ? `${He(e.columnStart)}:${He(
  e.columnEnd
)}` : e.columnStart === 1 && e.columnEnd === Ae ? `${e.rowStart}:${e.rowEnd}` : `${He(e.columnStart)}${e.rowStart}:${He(e.columnEnd)}${e.rowEnd}`;
function ft(e, t, n) {
  const { sheet: o, rowStart: r, rowEnd: i, columnStart: s, columnEnd: a } = e, u = o === t ? "" : `${Ia(n)}!`;
  return r === i && s === a ? `${u}${He(s)}${r}` : `${u}${He(
    s
  )}${r}:${He(a)}${i}`;
}
function bl(e, t) {
  const [n, o, r, i] = e.range, s = Ia(t[e.sheet]);
  return n === r && o === i ? `${s}!$${He(o)}$${n}` : `${s}!$${He(
    o
  )}$${n}:$${He(i)}$${r}`;
}
function Fr(e, t, n) {
  return Array.from(e).slice(t, n).join("");
}
function yl(e) {
  return typeof e == "object" && "Reference" in e;
}
function vl(e) {
  return typeof e == "object" && "Range" in e;
}
function pn(e, t) {
  if (!e.startsWith("="))
    return !1;
  if (e === "=")
    return !0;
  const n = e.length;
  return !!(t === n && [",", "(", "+", "*", "-", "/", "<", ">", "=", "&", ";"].includes(e[n - 1]));
}
function ei(e, t = 1) {
  const n = [
    {
      name: "Cyan",
      rgba: [89, 185, 188, 1],
      hex: "#59B9BC"
    },
    {
      name: "Flamingo",
      rgba: [236, 87, 83, 1],
      hex: "#EC5753"
    },
    {
      hex: "#3358B7",
      rgba: [51, 88, 183, 1],
      name: "Blue"
    },
    {
      hex: "#F8CD3C",
      rgba: [248, 205, 60, 1],
      name: "Yellow"
    },
    {
      hex: "#3BB68A",
      rgba: [59, 182, 138, 1],
      name: "Emerald"
    },
    {
      hex: "#523E93",
      rgba: [82, 62, 147, 1],
      name: "Violet"
    },
    {
      hex: "#A23C52",
      rgba: [162, 60, 82, 1],
      name: "Burgundy"
    },
    {
      hex: "#8CB354",
      rgba: [162, 60, 82, 1],
      name: "Wasabi"
    },
    {
      hex: "#D03627",
      rgba: [208, 54, 39, 1],
      name: "Red"
    },
    {
      hex: "#1B717E",
      rgba: [27, 113, 126, 1],
      name: "Teal"
    }
  ];
  if (t === 1)
    return n[e % 10].hex;
  const { rgba: o } = n[e % 10];
  return `rgba(${o[0]}, ${o[1]}, ${o[2]}, ${t})`;
}
function js(e, t) {
  let n = [];
  const o = [];
  let r = 0;
  if (t.startsWith("=")) {
    const i = t.slice(1), s = Fa(i), a = s.length, u = {}, h = e.getSelectedSheet(), p = e.getWorksheetsProperties().map((m) => m.name);
    for (let m = 0; m < a; m += 1) {
      const { token: d, start: g, end: x } = s[m];
      if (yl(d)) {
        const { sheet: f, row: y, column: S } = d.Reference, j = f ? p.indexOf(f) : h, C = `${j}-${y}-${S}`;
        let w = u[C];
        w || (w = ei(r), u[C] = w, r += 1), n.push(
          /* @__PURE__ */ l.jsx("span", { style: { color: w }, children: Fr(i, g, x) }, m)
        ), o.push({
          sheet: j,
          rowStart: y,
          columnStart: S,
          rowEnd: y,
          columnEnd: S,
          color: w
        });
      } else if (vl(d)) {
        let {
          sheet: f,
          left: { row: y, column: S },
          right: { row: j, column: C }
        } = d.Range;
        const w = f ? p.indexOf(f) : h, E = `${w}-${y}-${S}:${j}-${C}`;
        let T = u[E];
        T || (T = ei(r), u[E] = T, r += 1), y > j && ([y, j] = [j, y]), S > C && ([S, C] = [C, S]), n.push(
          /* @__PURE__ */ l.jsx("span", { style: { color: T }, children: Fr(i, g, x) }, m)
        ), r += 1, o.push({
          sheet: w,
          rowStart: y,
          columnStart: S,
          rowEnd: j,
          columnEnd: C,
          color: T
        });
      } else
        n.push(/* @__PURE__ */ l.jsx("span", { children: Fr(i, g, x) }, m));
    }
    n = [/* @__PURE__ */ l.jsx("span", { children: "=" }, "equals")].concat(n);
  } else
    n = [/* @__PURE__ */ l.jsx("span", { children: t }, "single")];
  return t.endsWith(`
`) && n.push(/* @__PURE__ */ l.jsx("span", { children: `
` }, "trailing-newline")), { html: n, activeRanges: o };
}
function ti(e, t) {
  const n = e.getWorksheetsProperties(), o = Fa(t), { token: r } = o[0];
  if (vl(r)) {
    const {
      sheet: i,
      left: { row: s, column: a },
      right: { row: u, column: h }
    } = r.Range;
    if (i !== null) {
      const p = n.findIndex((m) => m.name === i);
      if (p >= 0)
        return [p, s, a, u, h];
    }
  } else if (yl(r)) {
    const { sheet: i, row: s, column: a } = r.Reference;
    if (i !== null) {
      const u = n.findIndex((h) => h.name === i);
      if (u >= 0)
        return [u, s, a, s, a];
    }
  }
  return null;
}
const Sf = (e) => {
  const { model: t, onEditEnd: n, onTextUpdated: o, workbookState: r, textareaRef: i } = e;
  return { onKeyDown: Oe(
    (a) => {
      const { key: u, shiftKey: h, altKey: p } = a, m = i.current, d = r.getEditingCell();
      if (!(!m || !d))
        switch (u) {
          case "Enter": {
            if (p) {
              const x = m.selectionStart, f = m.selectionEnd, y = m.value, S = `${y.slice(0, x)}
${y.slice(f)}`;
              d.text = S, r.setEditingCell(d), setTimeout(() => {
                m.setSelectionRange(x + 1, x + 1);
              }, 0), a.stopPropagation(), a.preventDefault(), o();
              return;
            }
            a.stopPropagation(), a.preventDefault(), t.setUserInput(
              d.sheet,
              d.row,
              d.column,
              d.text + (d.referencedRange?.str || "")
            );
            const g = h ? -1 : 1;
            t.setSelectedSheet(d.sheet), t.setSelectedCell(d.row + g, d.column), r.clearEditingCell(), n();
            return;
          }
          case "Tab": {
            r.clearEditingCell(), t.setUserInput(
              d.sheet,
              d.row,
              d.column,
              d.text + (d.referencedRange?.str || "")
            );
            const g = h ? -1 : 1;
            t.setSelectedSheet(d.sheet), t.setSelectedCell(d.row, d.column + g), i.current && (i.current.value = ""), a.stopPropagation(), a.preventDefault(), n();
            return;
          }
          case "Escape": {
            const g = r.getEditingCell();
            g && t.setSelectedSheet(g.sheet), r.clearEditingCell(), n();
            return;
          }
          // TODO: Arrow keys navigate in Excel
          case "ArrowRight": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = d.referencedRange.range;
              if (h)
                x.columnEnd += 1;
              else {
                const f = x.columnStart + 1, y = x.rowStart;
                x.columnStart = f, x.columnEnd = f, x.rowEnd = y;
              }
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (pn(d.text, d.cursorStart)) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = {
                sheet: d.sheet,
                rowStart: d.row,
                rowEnd: d.row,
                columnStart: d.column + 1,
                columnEnd: d.column + 1
              };
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), h || t.setSelectedCell(d.row, d.column + 1), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowLeft": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = d.referencedRange.range;
              if (h)
                x.columnEnd -= 1;
              else {
                const f = x.columnStart - 1, y = x.rowStart;
                x.columnStart = f, x.columnEnd = f, x.rowEnd = y;
              }
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (pn(d.text, d.cursorStart)) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = {
                sheet: d.sheet,
                rowStart: d.row,
                rowEnd: d.row,
                columnStart: d.column - 1,
                columnEnd: d.column - 1
              };
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), h || t.setSelectedCell(d.row, d.column - 1), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowUp": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = d.referencedRange.range;
              if (h)
                x.rowEnd > x.rowStart ? x.rowEnd -= 1 : x.rowStart -= 1;
              else {
                const f = x.columnStart, y = x.rowStart - 1;
                x.columnStart = f, x.columnEnd = f, x.rowStart = y, x.rowEnd = y;
              }
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (pn(d.text, d.cursorStart)) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = {
                sheet: d.sheet,
                rowStart: d.row - 1,
                rowEnd: d.row - 1,
                columnStart: d.column,
                columnEnd: d.column
              };
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), h || t.setSelectedCell(d.row - 1, d.column), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowDown": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = d.referencedRange.range;
              if (h)
                x.rowEnd += 1;
              else {
                const f = x.columnStart, y = x.rowStart + 1;
                x.columnStart = f, x.columnEnd = f, x.rowStart = y, x.rowEnd = y;
              }
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (pn(d.text, d.cursorStart)) {
              const g = t.getWorksheetsProperties().map((f) => f.name), x = {
                sheet: d.sheet,
                rowStart: d.row + 1,
                rowEnd: d.row + 1,
                columnStart: d.column,
                columnEnd: d.column
              };
              d.referencedRange = {
                range: x,
                str: ft(x, d.sheet, g[x.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), h || t.setSelectedCell(d.row + 1, d.column), i.current && (i.current.value = ""), n();
            return;
          }
          case "Shift":
            return;
          case "PageDown":
          case "PageUp": {
            a.stopPropagation(), a.preventDefault();
            return;
          }
          case "End":
          case "Home": {
            d.mode = "edit", r.setEditingCell(d);
            return;
          }
        }
    },
    [t, n, o, r, i.current]
  ) };
}, $s = {
  fontWeight: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  position: "absolute",
  left: 0,
  top: 0,
  whiteSpace: "pre",
  width: "100%",
  padding: 0,
  lineHeight: "22px"
}, _f = "rgb(242, 153, 74)", wl = (e) => {
  const { model: t, onEditEnd: n, onTextUpdated: o, originalText: r, workbookState: i, type: s } = e, [a, u] = oe(r), h = re(null), p = re(null), m = re(null);
  Ie(() => {
    u(r), m.current && (m.current.value = r);
  }, [r]);
  const { onKeyDown: d } = Sf({
    model: t,
    onEditEnd: n,
    onTextUpdated: o,
    workbookState: i,
    textareaRef: m
  });
  Ie(() => {
    const C = i.getEditingCell();
    if (!C)
      return;
    const { editorWidth: w, editorHeight: E } = C;
    if (h.current) {
      const T = h.current.scrollWidth;
      T > w - 5 && (C.editorWidth = T + 10);
      const R = h.current.scrollHeight;
      R > E && (C.editorHeight = R);
    }
    s === C.focus && m.current?.focus({ preventScroll: !0 });
  });
  const g = Oe(() => {
    const C = m.current, w = i.getEditingCell();
    if (!C || !w)
      return;
    const E = C.value;
    w.text = E, w.referencedRange = null, w.cursorStart = C.selectionStart, w.cursorEnd = C.selectionEnd;
    const T = js(t, E);
    E === "" && s === "cell" && (w.mode = "accept"), i.setEditingCell(w), i.setActiveRanges(T.activeRanges), u(w.text), o();
  }, [i, t, o, s]), x = Oe(() => {
    const C = i.getEditingCell();
    s === C?.focus && (m.current && (m.current.value = ""), C && (t.setUserInput(
      C.sheet,
      C.row,
      C.column,
      i.getEditingText()
    ), i.clearEditingCell()), n());
  }, [t, i, n, s]), f = i.getEditingCell(), y = f !== null || s === "formula-bar" ? "block" : "none", S = f ? i.getEditingText() : r, j = js(t, S).html;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: y,
        background: "#FFF",
        fontFamily: "Inter",
        fontSize: "13px"
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: p,
            style: {
              ...$s,
              textAlign: "left",
              pointerEvents: "none",
              height: "100%"
            },
            children: /* @__PURE__ */ l.jsx(
              "div",
              {
                style: {
                  display: "inline-block"
                },
                ref: h,
                children: j
              }
            )
          }
        ),
        /* @__PURE__ */ l.jsx(
          "textarea",
          {
            ref: m,
            rows: 1,
            style: {
              ...$s,
              color: "transparent",
              backgroundColor: "transparent",
              caretColor: _f,
              outline: "none",
              resize: "none",
              border: "none",
              height: "100%",
              overflow: "hidden",
              alignContent: "baseline"
            },
            defaultValue: a,
            spellCheck: "false",
            onKeyDown: d,
            onChange: g,
            onBlur: x,
            onPointerDown: (C) => {
              const w = i.getEditingCell();
              w && (w.mode = "edit", w.focus = s, i.setEditingCell(w), C.stopPropagation());
            },
            onScroll: () => {
              p.current && m.current && (p.current.style.left = `-${m.current.scrollLeft}px`, p.current.style.top = `-${m.current.scrollTop}px`);
            },
            onPaste: (C) => C.stopPropagation(),
            onCopy: (C) => C.stopPropagation(),
            onDoubleClick: (C) => C.stopPropagation(),
            onCut: (C) => C.stopPropagation()
          }
        )
      ]
    }
  );
}, Rf = (e) => {
  const { t } = Ve(), [n, o] = oe(!1), r = re(null), i = Oe(() => {
    o(!0), e.onMenuOpenChange(!0);
  }, [e.onMenuOpenChange]), s = Oe(() => {
    o(!1), e.onMenuOpenChange(!1);
  }, [e.onMenuOpenChange]), a = e.model.getDefinedNameList();
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(kf, { onClick: i, ref: r, children: e.children }),
    /* @__PURE__ */ l.jsxs(
      Tf,
      {
        open: n,
        onClose: s,
        anchorEl: r.current,
        marginThreshold: 0,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        children: [
          a.length > 0 ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            a.map((u) => /* @__PURE__ */ l.jsxs(
              Ps,
              {
                disableRipple: !0,
                onClick: () => {
                  const h = u.formula, p = ti(e.model, h);
                  if (p) {
                    const [
                      m,
                      d,
                      g,
                      x,
                      f
                    ] = p;
                    e.model.setSelectedSheet(m), e.model.setSelectedCell(d, g), e.model.setSelectedRange(
                      d,
                      g,
                      x,
                      f
                    );
                  }
                  e.onUpdate(), s();
                },
                children: [
                  /* @__PURE__ */ l.jsx(Ha, {}),
                  /* @__PURE__ */ l.jsx(Os, { children: u.name }),
                  /* @__PURE__ */ l.jsx($f, { children: u.formula })
                ]
              },
              `${u.name}-${u.scope}`
            )),
            /* @__PURE__ */ l.jsx(jf, {})
          ] }) : null,
          /* @__PURE__ */ l.jsx(
            Ps,
            {
              onClick: () => {
                e.openDrawer(), s();
              },
              disabled: !e.canEdit,
              disableRipple: !0,
              children: /* @__PURE__ */ l.jsx(Os, { children: t("formula_bar.manage_named_ranges") })
            }
          )
        ]
      }
    )
  ] });
}, Tf = X(so)`
  top: 4px;
  min-width: 260px;
  max-width: 460px;
  & .MuiPaper-root {
    border-radius: 8px;
    padding: 4px 0px;
    margin-left: -4px;
  }
  & .MuiList-root {
    padding: 0;
  }
`, Ps = X(nn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  gap: 8px;
  width: calc(100% - 8px);
  min-width: 172px;
  margin: 0px 4px;
  border-radius: 4px;
  padding: 8px;
  height: 32px;
  & svg {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    color: ${P.palette.grey[600]};
  }
`, kf = X("div")`
  display: flex;
`, jf = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid ${P.palette.grey[200]};
`, Os = X("div")`
  flex: 1;
  min-width: 0;
  color: ${P.palette.common.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, $f = X("div")`
  color: ${P.palette.grey[400]};
  margin-left: 12px;
`;
function Pf(e) {
  const {
    cellAddress: t,
    formulaValue: n,
    model: o,
    onChange: r,
    onTextUpdated: i,
    workbookState: s
  } = e, [a, u] = oe(!1), h = (p) => {
    u(p);
  };
  return /* @__PURE__ */ l.jsxs(If, { children: [
    /* @__PURE__ */ l.jsx(Ff, { $active: a, children: /* @__PURE__ */ l.jsxs(
      Rf,
      {
        onMenuOpenChange: h,
        openDrawer: e.openDrawer,
        canEdit: e.canEdit,
        model: o,
        onUpdate: r,
        children: [
          /* @__PURE__ */ l.jsx(Nf, { children: t }),
          /* @__PURE__ */ l.jsx(Bf, { children: /* @__PURE__ */ l.jsx(Vo, { size: 16 }) })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(Af, {}),
    /* @__PURE__ */ l.jsxs(Df, { children: [
      /* @__PURE__ */ l.jsx(Mf, { children: /* @__PURE__ */ l.jsx(mf, {}) }),
      /* @__PURE__ */ l.jsx(
        zf,
        {
          onClick: (p) => {
            const [m, d, g] = o.getSelectedCell(), x = o.getColumnWidth(m, g) * Qn, f = o.getRowHeight(m, d) * Jn;
            s.setEditingCell({
              sheet: m,
              row: d,
              column: g,
              text: n,
              referencedRange: null,
              cursorStart: n.length,
              cursorEnd: n.length,
              focus: "formula-bar",
              activeRanges: [],
              mode: "edit",
              editorWidth: x,
              editorHeight: f
            }), p.stopPropagation(), p.preventDefault();
          },
          children: /* @__PURE__ */ l.jsx(
            wl,
            {
              originalText: n,
              model: o,
              workbookState: s,
              onEditEnd: () => {
                r();
              },
              onTextUpdated: i,
              type: "formula-bar"
            }
          )
        }
      )
    ] })
  ] });
}
const Of = X("div")`
  display: inline-flex;
  align-items: center;
  width: 15px;
  min-width: 0px;
  padding: 0px;
  color: inherit;
  font-weight: inherit;
  svg {
    width: 15px;
    height: 15px;
  }
`, Mf = X(Of)`
  margin-right: 8px;
`, Af = X("div")`
  background-color: ${P.palette.grey[300]};
  min-width: 1px;
  height: 16px;
  margin: 0px 16px 0px 8px;
`, Df = X("div")`
  margin-left: 0px;
  line-height: 22px;
  font-weight: normal;
  width: 100%;
  height: 22px;
  display: flex;
`, If = X("div")`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(e) => e.theme.palette.background.default};
  height: ${gl}px;
  border-top: 1px solid ${P.palette.grey[300]};
`, Ff = X("div")`
  color: ${P.palette.common.black};
  font-style: normal;
  font-size: 12px;
  display: flex;
  font-weight: 600;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  background-color: ${(e) => e.$active ? P.palette.action.selected : "transparent"};
  &:hover {
   background-color: ${(e) => e.$active ? P.palette.action.selected : P.palette.grey[100]};
  }
`, Nf = X("div")`
  width: 100%;
  box-sizing: border-box;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 8px;
  background-color: transparent;
`, Bf = X("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 2px;
  background-color: transparent;
`, zf = X("div")`
  position: relative;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  outline: none;
  resize: none;
  white-space: pre-wrap;
  vertical-align: bottom;
  overflow: hidden;
  text-align: left;
  span {
    min-width: 1px;
  }
  font-family: monospace;
`;
function ni(e) {
  return e.startsWith("Name: ") ? { formulaError: "", nameError: e.slice(6) } : e.startsWith("Formula: ") ? { formulaError: e.slice(9), nameError: "" } : e.startsWith("Scope: ") ? { formulaError: "", nameError: e.slice(7) } : { formulaError: e, nameError: "" };
}
const Lf = ({
  name: e,
  scope: t,
  formula: n,
  onSave: o,
  onCancel: r,
  editingDefinedName: i,
  model: s
}) => {
  const a = () => {
    if (e) return e;
    const w = we("name_manager_dialog.default_range_prefix");
    let E = 1, T = `${w}${E}`;
    const F = s.getWorksheetsProperties().findIndex((B) => B.name === t), I = F >= 0 ? F : void 0, H = s.getDefinedNameList();
    for (; H.some(
      (B) => B.name === T && B.scope === I
    ); )
      E++, T = `${w}${E}`;
    return T;
  }, [u, h] = oe(a()), [p, m] = oe(t), [d, g] = oe(n), [x, f] = oe(""), [y, S] = oe(""), j = (w) => p === w;
  Ie(() => {
    const E = s.getWorksheetsProperties().findIndex((R) => R.name === p), T = E >= 0 ? E : null;
    try {
      s.isValidDefinedName(u, T, d);
    } catch (R) {
      const F = R.message;
      if (i && F.includes("already exists")) {
        f(""), S("");
        return;
      }
      const { nameError: I, formulaError: H } = ni(F);
      f(I), S(H);
      return;
    }
    f(""), S("");
  }, [u, p, d, s, i]);
  const C = x !== "" || y !== "";
  return /* @__PURE__ */ l.jsxs(Hf, { children: [
    /* @__PURE__ */ l.jsxs(Wf, { children: [
      /* @__PURE__ */ l.jsxs(Uf, { children: [
        /* @__PURE__ */ l.jsx(Yf, { children: /* @__PURE__ */ l.jsx(Ha, {}) }),
        /* @__PURE__ */ l.jsx(Gf, { children: u || we("name_manager_dialog.new_named_range") })
      ] }),
      /* @__PURE__ */ l.jsxs(qf, { children: [
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsx(zr, { htmlFor: "name", children: we("name_manager_dialog.range_name") }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", error: !!x, children: [
            /* @__PURE__ */ l.jsx(
              Is,
              {
                autoFocus: !0,
                id: "name",
                variant: "outlined",
                size: "small",
                margin: "none",
                placeholder: we("name_manager_dialog.enter_range_name"),
                fullWidth: !0,
                error: !!x,
                value: u,
                onChange: (w) => h(w.target.value),
                onKeyDown: (w) => w.stopPropagation(),
                onClick: (w) => w.stopPropagation()
              }
            ),
            x && /* @__PURE__ */ l.jsx(Ns, { children: x })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsx(zr, { htmlFor: "scope", children: we("name_manager_dialog.scope_label") }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", children: [
            /* @__PURE__ */ l.jsxs(
              Kf,
              {
                id: "scope",
                value: p,
                onChange: (w) => {
                  m(w.target.value);
                },
                renderValue: (w) => {
                  const E = w;
                  return E === "[Global]" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                    /* @__PURE__ */ l.jsx(Nr, { children: we("name_manager_dialog.workbook") }),
                    /* @__PURE__ */ l.jsx(Ms, { children: ` ${we(
                      "name_manager_dialog.global"
                    )}` })
                  ] }) : E;
                },
                MenuProps: {
                  PaperProps: {
                    component: Xf
                  },
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center"
                  },
                  marginThreshold: 0
                },
                children: [
                  /* @__PURE__ */ l.jsxs(Fs, { value: "[Global]", children: [
                    j("[Global]") ? /* @__PURE__ */ l.jsx(As, {}) : /* @__PURE__ */ l.jsx(Ds, {}),
                    /* @__PURE__ */ l.jsx(Nr, { $selected: j("[Global]"), children: we("name_manager_dialog.workbook") }),
                    /* @__PURE__ */ l.jsx(Ms, { children: ` ${we(
                      "name_manager_dialog.global"
                    )}` })
                  ] }),
                  s.getWorksheetsProperties().map((w) => /* @__PURE__ */ l.jsxs(Fs, { value: w.name, children: [
                    j(w.name) ? /* @__PURE__ */ l.jsx(As, {}) : /* @__PURE__ */ l.jsx(Ds, {}),
                    /* @__PURE__ */ l.jsx(Nr, { $selected: j(w.name), children: w.name })
                  ] }, w.name))
                ]
              }
            ),
            /* @__PURE__ */ l.jsx(Cl, { children: we("name_manager_dialog.scope_helper") })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsxs(Vf, { children: [
            /* @__PURE__ */ l.jsx(zr, { htmlFor: "formula", children: we("name_manager_dialog.refers_to") }),
            /* @__PURE__ */ l.jsx(
              Ic,
              {
                size: 16,
                onClick: () => {
                  const w = s.getWorksheetsProperties().map((R) => R.name), E = s.getSelectedView(), T = bl(
                    E,
                    w
                  );
                  g(T);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", error: !!y, children: [
            /* @__PURE__ */ l.jsx(
              Is,
              {
                id: "formula",
                variant: "outlined",
                size: "small",
                margin: "none",
                placeholder: we("name_manager_dialog.enter_formula"),
                fullWidth: !0,
                multiline: !0,
                rows: 3,
                error: !!y,
                value: d,
                onChange: (w) => {
                  g(w.target.value), S("");
                },
                onKeyDown: (w) => w.stopPropagation(),
                onClick: (w) => w.stopPropagation()
              }
            ),
            y && /* @__PURE__ */ l.jsx(Ns, { children: y })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs(El, { children: [
      /* @__PURE__ */ l.jsx(
        oi,
        {
          variant: "contained",
          color: "secondary",
          disableElevation: !0,
          onClick: r,
          children: we("name_manager_dialog.cancel")
        }
      ),
      /* @__PURE__ */ l.jsx(
        oi,
        {
          variant: "contained",
          disableElevation: !0,
          disabled: C,
          startIcon: /* @__PURE__ */ l.jsx(Bt, { size: 16 }),
          onClick: () => {
            const w = o(u.trim(), p, d);
            w.nameError && f(w.nameError), w.formulaError && S(w.formulaError);
          },
          children: we("name_manager_dialog.apply")
        }
      )
    ] })
  ] });
}, Vf = X("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px"
}), Hf = X("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column"
}), Wf = X("div")({
  flex: 1,
  overflow: "auto"
}), Nr = X("span")`
  font-size: 12px;
  font-family: "Inter";
  font-weight: ${(e) => e.$selected ? "bold" : "normal"};
`, Ms = X("span")`
  white-space: pre;
  font-size: 12px;
  font-family: "Inter";
  color: ${P.palette.grey[400]};
`, As = () => /* @__PURE__ */ l.jsx(Bt, { style: { width: "16px", height: "16px", marginRight: "8px" } }), Ds = X("div")`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`, Uf = X(ao)`
  font-size: 14px;
  font-family: "Inter";
  font-weight: 600;
  width: auto;
  gap: 8px;
  padding: 24px 12px;
  color: ${P.palette.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${P.palette.grey[200]};
`, Gf = X("span")`
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, Yf = X(ao)`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: ${P.palette.grey[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    color: ${P.palette.grey[600]};
  }
`, qf = X(ao)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: auto;
  padding: 16px 12px;

  @media (max-width: 600px) {
    padding: 12px;
  }
`, Is = X(xi)(() => ({
  "& .MuiInputBase-root": {
    width: "100%",
    margin: 0,
    fontFamily: "Inter",
    fontSize: "12px",
    padding: "8px"
  },
  "& .MuiInputBase-input": {
    padding: "0px"
  },
  "& .MuiInputBase-inputMultiline": {
    padding: "0px"
  }
})), Kf = X(za)(() => ({
  fontFamily: "Inter",
  fontSize: "12px",
  "& .MuiSelect-select": {
    padding: "8px"
  }
})), Xf = X($c)(() => ({
  padding: 4,
  marginTop: "4px",
  "&.MuiPaper-root": {
    borderRadius: "8px"
  },
  "& .MuiList-padding": {
    padding: 0
  },
  "& .MuiList-root": {
    padding: 0
  }
})), Fs = X(nn)(() => ({
  padding: 8,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  "&.Mui-selected": {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: P.palette.grey[50]
    }
  },
  "&:hover": {
    backgroundColor: P.palette.grey[50]
  }
})), Br = X(ao)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`, zr = X("label")`
  font-size: 12px;
  font-family: "Inter";
  font-weight: 500;
  color: ${P.palette.text.primary};
  display: block;
`, Cl = X(La)(() => ({
  fontSize: "12px",
  fontFamily: "Inter",
  color: P.palette.grey[500],
  margin: 0,
  marginTop: "6px",
  padding: 0,
  lineHeight: 1.4
})), Ns = X(Cl)(() => ({
  color: P.palette.error.main
})), Bs = (e) => e.trim().replace(/['"]/g, ""), Zf = ({
  onClose: e,
  getSelectedArea: t,
  model: n,
  onUpdate: o
}) => {
  const [r, i] = oe(null), [s, a] = oe(!1), u = (f) => {
    i(f), a(!1);
  }, h = () => {
    a(!0), i(null);
  }, p = () => {
    i(null), a(!1);
  }, m = (f, y, S) => {
    const j = n.getWorksheetsProperties();
    if (s) {
      const C = j.findIndex((E) => E.name === y), w = C >= 0 ? C : null;
      try {
        return n.newDefinedName(f, w, S), a(!1), o(), {
          formulaError: "",
          nameError: ""
        };
      } catch (E) {
        return E instanceof Error ? ni(E.message) : { formulaError: "", nameError: `${E}` };
      }
    } else {
      if (!r)
        return {
          formulaError: "",
          nameError: ""
        };
      const C = j.findIndex((E) => E.name === y), w = C >= 0 ? C : null;
      try {
        return n.updateDefinedName(
          r.name,
          r.scope ?? null,
          f,
          w,
          S
        ), i(null), o(), { formulaError: "", nameError: "" };
      } catch (E) {
        return E instanceof Error ? ni(E.message) : { formulaError: "", nameError: `${E}` };
      }
    }
  };
  if (r || s) {
    let f = "", y = "[Global]", S = "";
    if (r) {
      f = r.name;
      const C = n.getWorksheetsProperties();
      y = r.scope != null ? C[r.scope]?.name || "[unknown]" : "[Global]", S = r.formula;
    } else s && (S = t());
    const j = s ? we("name_manager_dialog.add_new_range") : we("name_manager_dialog.edit_range");
    return /* @__PURE__ */ l.jsxs(zs, { children: [
      /* @__PURE__ */ l.jsxs(lh, { children: [
        /* @__PURE__ */ l.jsx(hn, { title: we("name_manager_dialog.back_to_list"), children: /* @__PURE__ */ l.jsx(
          Lr,
          {
            onClick: p,
            onKeyDown: (C) => {
              (C.key === "Enter" || C.key === " ") && p();
            },
            "aria-label": we("name_manager_dialog.back_to_list"),
            tabIndex: 0,
            children: /* @__PURE__ */ l.jsx(Wa, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ch, { children: j }),
        /* @__PURE__ */ l.jsx(
          Lr,
          {
            onClick: e,
            onKeyDown: (C) => {
              (C.key === "Enter" || C.key === " ") && e();
            },
            "aria-label": we("right_drawer.close"),
            tabIndex: 0,
            children: /* @__PURE__ */ l.jsx(Ho, {})
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Ls, { children: /* @__PURE__ */ l.jsx(
        Lf,
        {
          name: f,
          scope: y,
          formula: S,
          onSave: m,
          onCancel: p,
          editingDefinedName: r,
          model: n
        }
      ) })
    ] });
  }
  const d = t(), g = n.getDefinedNameList(), x = (f) => {
    const y = ti(n, f);
    if (y) {
      const [S, j, C, w, E] = y;
      n.setSelectedSheet(S), n.setSelectedCell(j, C), n.setSelectedRange(j, C, w, E);
    }
    o();
  };
  return /* @__PURE__ */ l.jsxs(zs, { children: [
    /* @__PURE__ */ l.jsxs(sh, { children: [
      /* @__PURE__ */ l.jsx(ah, { children: we("name_manager_dialog.title") }),
      /* @__PURE__ */ l.jsx(
        Lr,
        {
          onClick: e,
          onKeyDown: (f) => {
            (f.key === "Enter" || f.key === " ") && e();
          },
          "aria-label": we("right_drawer.close"),
          tabIndex: 0,
          children: /* @__PURE__ */ l.jsx(Ho, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(Ls, { children: g.length === 0 ? /* @__PURE__ */ l.jsxs(uh, { children: [
      /* @__PURE__ */ l.jsx(dh, { children: /* @__PURE__ */ l.jsx(Fc, {}) }),
      we("name_manager_dialog.empty_message1"),
      /* @__PURE__ */ l.jsx("br", {}),
      we("name_manager_dialog.empty_message2")
    ] }) : /* @__PURE__ */ l.jsx(Jf, { children: g.map((f) => {
      const y = n.getWorksheetsProperties(), S = f.scope != null ? y[f.scope]?.name || "[Unknown]" : "[Global]", j = d !== null && Bs(f.formula) === Bs(d);
      return /* @__PURE__ */ l.jsxs(
        Qf,
        {
          tabIndex: 0,
          $isSelected: j,
          onClick: () => {
            const C = f.formula, w = ti(n, C);
            if (w) {
              const [
                E,
                T,
                R,
                F,
                I
              ] = w;
              n.setSelectedSheet(E), n.setSelectedCell(T, R), n.setSelectedRange(
                T,
                R,
                F,
                I
              );
            }
            o();
          },
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), x(f.formula));
          },
          children: [
            /* @__PURE__ */ l.jsxs(eh, { children: [
              /* @__PURE__ */ l.jsx(oh, { children: f.name }),
              /* @__PURE__ */ l.jsx(th, { children: S }),
              /* @__PURE__ */ l.jsx(nh, { children: f.formula })
            ] }),
            /* @__PURE__ */ l.jsxs(rh, { children: [
              /* @__PURE__ */ l.jsx(hn, { title: we("name_manager_dialog.edit"), children: /* @__PURE__ */ l.jsx(
                Vs,
                {
                  onClick: (C) => {
                    C.stopPropagation(), u(f);
                  },
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), u(f));
                  },
                  "aria-label": we("name_manager_dialog.edit"),
                  tabIndex: 0,
                  children: /* @__PURE__ */ l.jsx(Ua, { size: 16 })
                }
              ) }),
              /* @__PURE__ */ l.jsx(hn, { title: we("name_manager_dialog.delete"), children: /* @__PURE__ */ l.jsx(
                Vs,
                {
                  onClick: (C) => {
                    C.stopPropagation(), n.deleteDefinedName(
                      f.name,
                      f.scope ?? null
                    ), o();
                  },
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), n.deleteDefinedName(
                      f.name,
                      f.scope ?? null
                    ), o());
                  },
                  "aria-label": we("name_manager_dialog.delete"),
                  tabIndex: 0,
                  children: /* @__PURE__ */ l.jsx(Jt, { size: 16 })
                }
              ) })
            ] })
          ]
        },
        `${f.name}-${f.scope}`
      );
    }) }) }),
    /* @__PURE__ */ l.jsxs(El, { children: [
      /* @__PURE__ */ l.jsxs(
        ih,
        {
          href: "https://docs.ironcalc.com/web-application/name-manager.html",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ l.jsx(Nc, {}),
            we("name_manager_dialog.help")
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        oi,
        {
          variant: "contained",
          disableElevation: !0,
          startIcon: /* @__PURE__ */ l.jsx(It, { size: 16 }),
          onClick: h,
          children: we("name_manager_dialog.new")
        }
      )
    ] })
  ] });
}, zs = X("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column"
}), Ls = X("div")({
  flex: 1,
  color: P.palette.grey[700],
  lineHeight: "1.5",
  overflow: "auto"
}), Jf = X("div")({
  display: "flex",
  flexDirection: "column"
}), Qf = X("div")(({ $isSelected: e }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "8px",
  padding: "8px 12px",
  cursor: "pointer",
  minHeight: "40px",
  boxSizing: "border-box",
  borderBottom: `1px solid ${P.palette.grey[200]}`,
  paddingLeft: e ? "20px" : "12px",
  transition: "all 0.2s ease-in-out",
  borderLeft: e ? `3px solid ${P.palette.primary.main}` : "3px solid transparent",
  "&:hover": {
    backgroundColor: P.palette.grey[50],
    paddingLeft: "20px"
  }
})), eh = X("div")({
  fontSize: "12px",
  color: P.palette.common.black,
  fontFamily: P.typography.fontFamily,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2px"
}), th = X("span")({
  fontSize: "12px",
  color: P.palette.common.black
}), nh = X("span")({
  fontSize: "12px",
  color: P.palette.grey[600]
}), oh = X("span")({
  fontSize: "12px",
  color: P.palette.common.black,
  fontWeight: 600,
  wordBreak: "break-all",
  overflowWrap: "break-word"
}), rh = X("div")({
  display: "flex",
  alignItems: "center",
  gap: "2px"
}), Vs = X("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  borderRadius: "4px",
  backgroundColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: P.palette.grey[200]
  }
}), El = X("div")`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: ${P.palette.grey[600]};
  border-top: 1px solid ${P.palette.grey[300]};
  gap: 8px;
`, ih = X("a")`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  color: ${P.palette.grey[600]};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  svg {
    width: 16px;
    height: 16px;
  }
`, oi = X(lo)`
  text-transform: none;
  min-width: fit-content;
  font-size: 12px;
  &.MuiButton-colorSecondary {
    background-color: ${P.palette.grey[200]};
    color: ${P.palette.grey[700]};
    &:hover {
      background-color: ${P.palette.grey[300]};
    }
  }
`, sh = X("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  borderBottom: `1px solid ${P.palette.grey[300]}`
}), ah = X("div")({
  width: "100%",
  fontSize: "12px"
}), lh = X("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8px",
  gap: "8px",
  borderBottom: `1px solid ${P.palette.grey[300]}`
}), ch = X("div")({
  flex: 1,
  fontSize: "12px",
  fontWeight: 500
}), Lr = X("div")`
  &:hover {
    background-color: ${P.palette.grey[50]};
  }
  display: flex;
  border-radius: 4px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.5;
  }
`, uh = X("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: ${P.palette.grey[600]};
  font-family: "Inter";
  z-index: 0;
  margin: auto 0px;
  position: relative;
`, dh = X("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${P.palette.grey[100]};
  color: ${P.palette.grey[600]};
  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2;
  }
`, ph = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT"
}, ko = {
  en: {
    number: "1,234.56",
    dateTime: "10/17/2026 09:21:06 PM",
    delimiterType: "comma",
    delimiterChar: ","
  },
  es: {
    number: "1.234,56",
    dateTime: "17/10/2026 21:21:06",
    delimiterType: "semicolon",
    delimiterChar: ";"
  },
  fr: {
    number: "1 234,56",
    dateTime: "17/10/2026 21:21:06",
    delimiterType: "semicolon",
    delimiterChar: ";"
  },
  de: {
    number: "1.234,56",
    dateTime: "17.10.2026 21:21:06",
    delimiterType: "semicolon",
    delimiterChar: ";"
  },
  it: {
    number: "1.234,56",
    dateTime: "17/10/2026 21:21:06",
    delimiterType: "semicolon",
    delimiterChar: ";"
  }
}, ri = (e) => ph[e] ?? e, fh = (e) => {
  const { t } = Ve(), n = _c(), o = Rc(), [r, i] = oe(
    e.initialLocale
  ), [s, a] = oe(
    e.initialTimezone
  ), [u, h] = oe(
    e.initialLanguage
  );
  Ie(() => {
    i(e.initialLocale), a(e.initialTimezone), h(e.initialLanguage);
  }, [
    e.initialLocale,
    e.initialTimezone,
    e.initialLanguage
  ]);
  const p = () => {
    e.onSave(r, s, u), e.onClose();
  };
  return /* @__PURE__ */ l.jsxs(hh, { children: [
    /* @__PURE__ */ l.jsxs(mh, { children: [
      /* @__PURE__ */ l.jsx(gh, { children: t("regional_settings.title") }),
      /* @__PURE__ */ l.jsx(
        xh,
        {
          onClick: e.onClose,
          onKeyDown: (m) => {
            (m.key === "Enter" || m.key === " ") && e.onClose();
          },
          "aria-label": t("right_drawer.close"),
          tabIndex: 0,
          children: /* @__PURE__ */ l.jsx(Ho, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs(
      bh,
      {
        onClick: (m) => m.stopPropagation(),
        onMouseDown: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ l.jsxs(Hs, { children: [
            /* @__PURE__ */ l.jsx(Ws, { children: t("regional_settings.locale.title") }),
            /* @__PURE__ */ l.jsxs(Ys, { children: [
              /* @__PURE__ */ l.jsx(qs, { htmlFor: "locale", children: t("regional_settings.locale.locale_label") }),
              /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, children: [
                /* @__PURE__ */ l.jsx(
                  yh,
                  {
                    id: "locale",
                    value: r,
                    onChange: (m) => {
                      i(m.target.value);
                    },
                    renderValue: (m) => ri(m),
                    MenuProps: {
                      PaperProps: {
                        sx: Us
                      },
                      TransitionProps: {
                        timeout: 0
                      },
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "center"
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "center"
                      },
                      marginThreshold: 0
                    },
                    children: n.map((m) => /* @__PURE__ */ l.jsx(Gs, { value: m, children: ri(m) }, m))
                  }
                ),
                /* @__PURE__ */ l.jsxs(wh, { children: [
                  /* @__PURE__ */ l.jsxs(Vr, { children: [
                    t("regional_settings.locale.locale_example1"),
                    /* @__PURE__ */ l.jsx(Hr, { children: ko[r]?.number ?? "1,234.56" })
                  ] }),
                  /* @__PURE__ */ l.jsxs(Vr, { children: [
                    t("regional_settings.locale.locale_example2"),
                    /* @__PURE__ */ l.jsx(Hr, { children: ko[r]?.dateTime ?? "10/17/2026 09:21:06 PM" })
                  ] }),
                  /* @__PURE__ */ l.jsxs(Vr, { children: [
                    t("regional_settings.locale.locale_example3"),
                    /* @__PURE__ */ l.jsx(Hr, { children: (() => {
                      const m = ko[r]?.delimiterType ?? "comma", d = ko[r]?.delimiterChar ?? ",";
                      return `${t(
                        `regional_settings.locale.delimiter_${m}`
                      )} (${d})`;
                    })() })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs(Hs, { children: [
            /* @__PURE__ */ l.jsx(Ws, { children: t("regional_settings.timezone.title") }),
            /* @__PURE__ */ l.jsxs(Ys, { children: [
              /* @__PURE__ */ l.jsx(qs, { htmlFor: "timezone", children: t("regional_settings.timezone.timezone_label") }),
              /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, children: [
                /* @__PURE__ */ l.jsx(
                  Ch,
                  {
                    id: "timezone",
                    value: s,
                    onChange: (m, d) => {
                      a(d);
                    },
                    options: o,
                    renderInput: (m) => /* @__PURE__ */ l.jsx(xi, { ...m }),
                    renderOption: (m, d) => /* @__PURE__ */ Tc(Gs, { ...m, key: d }, d),
                    disableClearable: !0,
                    slotProps: {
                      paper: {
                        sx: { ...Us, margin: "4px 0px" }
                      },
                      popper: {
                        sx: {
                          "& .MuiAutocomplete-paper": {
                            transition: "none !important"
                          }
                        }
                      },
                      popupIndicator: {
                        disableRipple: !0
                      }
                    }
                  }
                ),
                /* @__PURE__ */ l.jsx(vh, { children: t("regional_settings.timezone.timezone_helper") })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(Eh, { children: /* @__PURE__ */ l.jsx(
      Sh,
      {
        variant: "contained",
        disableElevation: !0,
        startIcon: /* @__PURE__ */ l.jsx(Bt, { size: 16 }),
        onClick: p,
        children: t("num_fmt.save")
      }
    ) })
  ] });
}, hh = te("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column"
}), mh = te("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  borderBottom: `1px solid ${P.palette.grey[300]}`
}), gh = te("div")({
  width: "100%",
  fontSize: "12px"
}), xh = te("div")`
  &:hover {
    background-color: ${P.palette.grey[50]};
  }
  display: flex;
  border-radius: 4px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.5;
  }
`, bh = te("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  fontSize: "12px",
  overflow: "auto"
}), Hs = te("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  border-bottom: 1px solid ${P.palette.grey[300]};
  &:last-child {
    border-bottom: none;
  }
`, Ws = te("h1")`
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  margin: 0px;
  color: ${P.palette.text.primary};
`, yh = te(za)`
  font-size: 12px;
  height: 32px;
  & .MuiInputBase-root {
    padding: 0px !important;
  }
  & .MuiInputBase-input {
    font-size: 12px;
    height: 20px;
    padding-right: 0px !important;
    margin: 0px;
  }
  & .MuiSelect-select {
    padding: 8px 32px 8px 8px !important;
    font-size: 12px;
  }
  & .MuiSvgIcon-root {
    right: 4px !important;
  }
`, vh = te(La)(() => ({
  fontSize: "12px",
  fontFamily: "Inter",
  color: P.palette.grey[500],
  margin: 0,
  marginTop: "6px",
  padding: 0,
  lineHeight: 1.4
})), wh = te("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2px;
  box-sizing: border-box;
  border: 1px solid ${P.palette.grey[300]};
  font-family: Inter;
  width: 100%;
  height: 100%;
  margin-top: 8px;
  background-color: ${P.palette.grey[100]};
  border-radius: 4px;
  padding: 8px;
`, Vr = te("div")`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  justify-content: space-between;
  color: ${P.palette.grey[700]};
`, Hr = te("span")`
  font-size: 12px;
  font-family: Inter;
  font-weight: normal;
  color: ${P.palette.grey[500]};
`, Ch = te((e) => /* @__PURE__ */ l.jsx(Pc, { ...e }))`
  & .MuiInputBase-root {
    padding: 0px !important;
    height: 32px;
  }
  & .MuiInputBase-input {
    font-size: 12px;
    height: 20px;
    padding: 0px;
    padding-right: 0px !important;
    margin: 0px;
  }
  & .MuiAutocomplete-popupIndicator:hover {
    background-color: transparent !important;
  }
  & .MuiAutocomplete-popupIndicator {
    & .MuiTouchRipple-root {
      display: none;
    }
  }
  & .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
    right: 4px;
  }
  & .MuiOutlinedInput-root .MuiAutocomplete-input {
    padding: 8px !important;
  }
`, Us = {
  boxSizing: "border-box",
  marginTop: "4px",
  padding: "4px",
  borderRadius: "8px",
  transition: "none !important",
  "& .MuiList-padding": {
    padding: 0
  },
  "& .MuiList-root": {
    padding: 0
  },
  "& .MuiAutocomplete-noOptions": {
    padding: "8px",
    fontSize: "12px",
    fontFamily: "Inter"
  },
  "& .MuiMenuItem-root": {
    height: "32px !important",
    padding: "8px !important",
    minHeight: "32px !important"
  },
  "& .MuiAutocomplete-option[aria-selected='true']": {
    backgroundColor: `${P.palette.grey[100]} !important`,
    fontWeight: "500 !important"
  }
}, Gs = te(nn)`
  padding: 8px !important;
  height: 32px !important;
  min-height: 32px !important;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 12px;

  &.Mui-selected {
    background-color: ${P.palette.grey[50]} !important;
  }

  &.Mui-selected:hover {
    background-color: ${P.palette.grey[50]} !important;
  }

  &:hover {
    background-color: ${P.palette.grey[50]} !important;
  }
`, Ys = te(ao)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`, qs = te("label")`
  font-size: 12px;
  font-family: "Inter";
  font-weight: 500;
  color: ${P.palette.text.primary};
  display: block;
`, Eh = te("div")`
  color: ${P.palette.grey[700]};
  display: flex;
  align-items: center;
  border-top: 1px solid ${P.palette.grey[300]};
  font-family: Inter;
  justify-content: flex-end;
  padding: 8px;
  gap: 8px;
`, Sh = te(lo)`
  text-transform: none;
  min-width: fit-content;
  font-size: 12px;
`, _h = 360, Rh = 300, Th = 500, kh = ({
  isOpen: e,
  onClose: t,
  width: n,
  onWidthChange: o,
  getSelectedArea: r,
  model: i,
  onUpdate: s,
  drawerType: a,
  initialLocale: u,
  initialTimezone: h,
  initialLanguage: p,
  onSettingsSave: m
}) => {
  const { t: d } = Ve(), [g, x] = oe(n), [f, y] = oe(!1), S = re(null), j = Oe((w) => {
    w.preventDefault(), y(!0);
  }, []);
  if (Ie(() => {
    if (!f)
      return;
    document.body.style.userSelect = "none", document.body.style.cursor = "col-resize";
    const w = (T) => {
      const R = window.innerWidth - T.clientX, F = Math.max(
        Rh,
        Math.min(Th, R)
      );
      x(F), o(F);
    }, E = () => {
      y(!1), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
    return document.addEventListener("mousemove", w), document.addEventListener("mouseup", E), () => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", E), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
  }, [f, o]), !e)
    return null;
  const C = () => a === "regionalSettings" ? /* @__PURE__ */ l.jsx(
    fh,
    {
      onClose: t,
      initialLocale: u,
      initialTimezone: h,
      initialLanguage: p,
      onSave: m
    }
  ) : /* @__PURE__ */ l.jsx(
    Zf,
    {
      onClose: t,
      model: i,
      onUpdate: s,
      getSelectedArea: r
    }
  );
  return /* @__PURE__ */ l.jsxs(jh, { $drawerWidth: g, children: [
    /* @__PURE__ */ l.jsx(
      Oh,
      {
        ref: S,
        onMouseDown: j,
        $isResizing: f,
        "aria-label": d("right_drawer.resize_drawer")
      }
    ),
    /* @__PURE__ */ l.jsx($h, {}),
    /* @__PURE__ */ l.jsx(Ph, { children: C() })
  ] });
}, jh = ne("div")(
  ({ $drawerWidth: e }) => ({
    position: "absolute",
    overflow: "hidden",
    backgroundColor: P.palette.common.white,
    right: 0,
    top: `${Yo}px`,
    bottom: 0,
    borderLeft: `1px solid ${P.palette.grey[300]}`,
    width: `${e}px`,
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 600px)": {
      width: "100%",
      borderLeft: "none",
      top: "0px",
      zIndex: 1e3
    }
  })
), $h = ne("div")({
  height: "1px",
  width: "100%",
  backgroundColor: P.palette.grey[300],
  margin: "0"
}), Ph = ne("div")({
  flex: 1,
  height: "100%"
}), Oh = ne("div")(
  ({ $isResizing: e }) => ({
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "4px",
    cursor: "col-resize",
    backgroundColor: e ? P.palette.primary.main : "transparent",
    zIndex: 10,
    "&:hover": {
      backgroundColor: P.palette.primary.main,
      opacity: 0.5
    },
    transition: e ? "none" : "background-color 0.2s ease"
  })
), Ks = {};
function Sl(e, t) {
  const n = k.useRef(Ks);
  return n.current === Ks && (n.current = e(t)), n;
}
const Mh = [];
function Ah(e) {
  k.useEffect(e, Mh);
}
class br {
  static create() {
    return new br();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function fn() {
  const e = Sl(br.create).current;
  return Ah(e.disposeEffect), e;
}
function Cn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function Dh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function _l(e, t, n, o, r) {
  const i = e[t], s = r || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const u = i.type;
  return typeof u == "function" && !Dh(u) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const En = Cn(c.element, _l);
En.isRequired = Cn(c.element.isRequired, _l);
function qo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function fo(e) {
  return parseInt(k.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const Sn = xp;
process.env.NODE_ENV !== "production" && (c.node, c.object.isRequired);
function ut(e) {
  return fp(e);
}
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ii.apply(null, arguments);
}
function Rl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.indexOf(o) !== -1) continue;
    n[o] = e[o];
  }
  return n;
}
function si(e, t) {
  return si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, si(e, t);
}
function Tl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, si(e, t);
}
const Xs = {
  disabled: !1
};
var Ih = process.env.NODE_ENV !== "production" ? c.oneOfType([c.number, c.shape({
  enter: c.number,
  exit: c.number,
  appear: c.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && c.oneOfType([c.string, c.shape({
  enter: c.string,
  exit: c.string,
  active: c.string
}), c.shape({
  enter: c.string,
  enterDone: c.string,
  enterActive: c.string,
  exit: c.string,
  exitDone: c.string,
  exitActive: c.string
})]);
const Ko = Se.createContext(null);
var Fh = function(t) {
  return t.scrollTop;
}, Ln = "unmounted", Gt = "exited", Yt = "entering", dn = "entered", ai = "exiting", bt = /* @__PURE__ */ (function(e) {
  Tl(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = r, a = s && !s.isMounting ? o.enter : o.appear, u;
    return i.appearStatus = null, o.in ? a ? (u = Gt, i.appearStatus = Yt) : u = dn : o.unmountOnExit || o.mountOnEnter ? u = Ln : u = Gt, i.state = {
      status: u
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(r, i) {
    var s = r.in;
    return s && i.status === Ln ? {
      status: Gt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(r) {
    var i = null;
    if (r !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Yt && s !== dn && (i = Yt) : (s === Yt || s === dn) && (i = ai);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var r = this.props.timeout, i, s, a;
    return i = s = a = r, r != null && typeof r != "number" && (i = r.exit, s = r.enter, a = r.appear !== void 0 ? r.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(r, i) {
    if (r === void 0 && (r = !1), i !== null)
      if (this.cancelNextCallback(), i === Yt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : vo.findDOMNode(this);
          s && Fh(s);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Gt && this.setState({
      status: Ln
    });
  }, n.performEnter = function(r) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : r, u = this.props.nodeRef ? [a] : [vo.findDOMNode(this), a], h = u[0], p = u[1], m = this.getTimeouts(), d = a ? m.appear : m.enter;
    if (!r && !s || Xs.disabled) {
      this.safeSetState({
        status: dn
      }, function() {
        i.props.onEntered(h);
      });
      return;
    }
    this.props.onEnter(h, p), this.safeSetState({
      status: Yt
    }, function() {
      i.props.onEntering(h, p), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: dn
        }, function() {
          i.props.onEntered(h, p);
        });
      });
    });
  }, n.performExit = function() {
    var r = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : vo.findDOMNode(this);
    if (!i || Xs.disabled) {
      this.safeSetState({
        status: Gt
      }, function() {
        r.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: ai
    }, function() {
      r.props.onExiting(a), r.onTransitionEnd(s.exit, function() {
        r.safeSetState({
          status: Gt
        }, function() {
          r.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(r, i) {
    i = this.setNextCallback(i), this.setState(r, i);
  }, n.setNextCallback = function(r) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, r(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(r, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : vo.findDOMNode(this), a = r == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], h = u[0], p = u[1];
      this.props.addEndListener(h, p);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, n.render = function() {
    var r = this.state.status;
    if (r === Ln)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Rl(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Se.createElement(Ko.Provider, {
        value: null
      }, typeof s == "function" ? s(r, a) : Se.cloneElement(Se.Children.only(s), a))
    );
  }, t;
})(Se.Component);
bt.contextType = Ko;
bt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: c.shape({
    current: typeof Element > "u" ? c.any : function(e, t, n, o, r, i) {
      var s = e[t];
      return c.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, o, r, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: c.oneOfType([c.func.isRequired, c.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: c.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: c.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: c.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: c.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: c.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: c.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Ih;
    t.addEndListener || (n = n.isRequired);
    for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      r[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(r));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: c.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: c.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: c.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: c.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: c.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: c.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: c.func
} : {};
function un() {
}
bt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: un,
  onEntering: un,
  onEntered: un,
  onExit: un,
  onExiting: un,
  onExited: un
};
bt.UNMOUNTED = Ln;
bt.EXITED = Gt;
bt.ENTERING = Yt;
bt.ENTERED = dn;
bt.EXITING = ai;
function Nh(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ki(e, t) {
  var n = function(i) {
    return t && Io(i) ? t(i) : i;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && kc.map(e, function(r) {
    return r;
  }).forEach(function(r) {
    o[r.key] = n(r);
  }), o;
}
function Bh(e, t) {
  e = e || {}, t = t || {};
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var o = /* @__PURE__ */ Object.create(null), r = [];
  for (var i in e)
    i in t ? r.length && (o[i] = r, r = []) : r.push(i);
  var s, a = {};
  for (var u in t) {
    if (o[u])
      for (s = 0; s < o[u].length; s++) {
        var h = o[u][s];
        a[o[u][s]] = n(h);
      }
    a[u] = n(u);
  }
  for (s = 0; s < r.length; s++)
    a[r[s]] = n(r[s]);
  return a;
}
function Kt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function zh(e, t) {
  return ki(e.children, function(n) {
    return Fo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Kt(n, "appear", e),
      enter: Kt(n, "enter", e),
      exit: Kt(n, "exit", e)
    });
  });
}
function Lh(e, t, n) {
  var o = ki(e.children), r = Bh(t, o);
  return Object.keys(r).forEach(function(i) {
    var s = r[i];
    if (Io(s)) {
      var a = i in t, u = i in o, h = t[i], p = Io(h) && !h.props.in;
      u && (!a || p) ? r[i] = Fo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Kt(s, "exit", e),
        enter: Kt(s, "enter", e)
      }) : !u && a && !p ? r[i] = Fo(s, {
        in: !1
      }) : u && a && Io(h) && (r[i] = Fo(s, {
        onExited: n.bind(null, s),
        in: h.props.in,
        exit: Kt(s, "exit", e),
        enter: Kt(s, "enter", e)
      }));
    }
  }), r;
}
var Vh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Hh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ji = /* @__PURE__ */ (function(e) {
  Tl(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = i.handleExited.bind(Nh(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(r, i) {
    var s = i.children, a = i.handleExited, u = i.firstRender;
    return {
      children: u ? zh(r, a) : Lh(r, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(r, i) {
    var s = ki(this.props.children);
    r.key in s || (r.props.onExited && r.props.onExited(i), this.mounted && this.setState(function(a) {
      var u = ii({}, a.children);
      return delete u[r.key], {
        children: u
      };
    }));
  }, n.render = function() {
    var r = this.props, i = r.component, s = r.childFactory, a = Rl(r, ["component", "childFactory"]), u = this.state.contextValue, h = Vh(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Se.createElement(Ko.Provider, {
      value: u
    }, h) : /* @__PURE__ */ Se.createElement(Ko.Provider, {
      value: u
    }, /* @__PURE__ */ Se.createElement(i, a, h));
  }, t;
})(Se.Component);
ji.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: c.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: c.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: c.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: c.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: c.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: c.func
} : {};
ji.defaultProps = Hh;
const kl = (e) => e.scrollTop;
function Xo(e, t) {
  const {
    timeout: n,
    easing: o,
    style: r = {}
  } = e;
  return {
    duration: r.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: r.transitionTimingFunction ?? (typeof o == "object" ? o[t.mode] : o),
    delay: r.transitionDelay
  };
}
function Ge(...e) {
  const t = k.useRef(void 0), n = k.useCallback((o) => {
    const r = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, a = s(o);
        return typeof a == "function" ? a : () => {
          s(null);
        };
      }
      return i.current = o, () => {
        i.current = null;
      };
    });
    return () => {
      r.forEach((i) => i?.());
    };
  }, e);
  return k.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    t.current && (t.current(), t.current = void 0), o != null && (t.current = n(o));
  }, e);
}
function li(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Wh = {
  entering: {
    opacity: 1,
    transform: li(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Wr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), eo = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    addEndListener: o,
    appear: r = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: u,
    onEntered: h,
    onEntering: p,
    onExit: m,
    onExited: d,
    onExiting: g,
    style: x,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = bt,
    ...S
  } = t, j = fn(), C = k.useRef(), w = xr(), E = k.useRef(null), T = Ge(E, fo(i), n), R = (A) => (_) => {
    if (A) {
      const U = E.current;
      _ === void 0 ? A(U) : A(U, _);
    }
  }, F = R(p), I = R((A, _) => {
    kl(A);
    const {
      duration: U,
      delay: J,
      easing: K
    } = Xo({
      style: x,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let O;
    f === "auto" ? (O = w.transitions.getAutoHeightDuration(A.clientHeight), C.current = O) : O = U, A.style.transition = [w.transitions.create("opacity", {
      duration: O,
      delay: J
    }), w.transitions.create("transform", {
      duration: Wr ? O : O * 0.666,
      delay: J,
      easing: K
    })].join(","), u && u(A, _);
  }), H = R(h), B = R(g), v = R((A) => {
    const {
      duration: _,
      delay: U,
      easing: J
    } = Xo({
      style: x,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let K;
    f === "auto" ? (K = w.transitions.getAutoHeightDuration(A.clientHeight), C.current = K) : K = _, A.style.transition = [w.transitions.create("opacity", {
      duration: K,
      delay: U
    }), w.transitions.create("transform", {
      duration: Wr ? K : K * 0.666,
      delay: Wr ? U : U || K * 0.333,
      easing: J
    })].join(","), A.style.opacity = 0, A.style.transform = li(0.75), m && m(A);
  }), D = R(d), M = (A) => {
    f === "auto" && j.start(C.current || 0, A), o && o(E.current, A);
  };
  return /* @__PURE__ */ l.jsx(y, {
    appear: r,
    in: a,
    nodeRef: E,
    onEnter: I,
    onEntered: H,
    onEntering: F,
    onExit: v,
    onExited: D,
    onExiting: B,
    addEndListener: M,
    timeout: f === "auto" ? null : f,
    ...S,
    children: (A, {
      ownerState: _,
      ...U
    }) => /* @__PURE__ */ k.cloneElement(i, {
      style: {
        opacity: 0,
        transform: li(0.75),
        visibility: A === "exited" && !a ? "hidden" : void 0,
        ...Wh[A],
        ...x,
        ...i.props.style
      },
      ref: T,
      ...U
    })
  });
});
process.env.NODE_ENV !== "production" && (eo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
eo && (eo.muiSupportAuto = !0);
const yr = c.oneOfType([c.func, c.object]);
function Tt(e, t, n, o, r) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = r || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function it(e) {
  return e && e.ownerDocument || document;
}
var We = "top", st = "bottom", at = "right", Ue = "left", $i = "auto", ho = [We, st, at, Ue], bn = "start", to = "end", Uh = "clippingParents", jl = "viewport", An = "popper", Gh = "reference", Zs = /* @__PURE__ */ ho.reduce(function(e, t) {
  return e.concat([t + "-" + bn, t + "-" + to]);
}, []), $l = /* @__PURE__ */ [].concat(ho, [$i]).reduce(function(e, t) {
  return e.concat([t, t + "-" + bn, t + "-" + to]);
}, []), Yh = "beforeRead", qh = "read", Kh = "afterRead", Xh = "beforeMain", Zh = "main", Jh = "afterMain", Qh = "beforeWrite", em = "write", tm = "afterWrite", nm = [Yh, qh, Kh, Xh, Zh, Jh, Qh, em, tm];
function gt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Je(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function en(e) {
  var t = Je(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function om(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !rt(i) || !gt(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function rm(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(u, h) {
        return u[h] = "", u;
      }, {});
      !rt(r) || !gt(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
const im = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: om,
  effect: rm,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var Zt = Math.max, Zo = Math.min, yn = Math.round;
function ci() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pl() {
  return !/^((?!chrome|android).)*safari/i.test(ci());
}
function vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, i = 1;
  t && rt(e) && (r = e.offsetWidth > 0 && yn(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && yn(o.height) / e.offsetHeight || 1);
  var s = en(e) ? Je(e) : window, a = s.visualViewport, u = !Pl() && n, h = (o.left + (u && a ? a.offsetLeft : 0)) / r, p = (o.top + (u && a ? a.offsetTop : 0)) / i, m = o.width / r, d = o.height / i;
  return {
    width: m,
    height: d,
    top: p,
    right: h + m,
    bottom: p + d,
    left: h,
    x: h,
    y: p
  };
}
function Oi(e) {
  var t = vn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: o
  };
}
function Ol(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Pi(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function kt(e) {
  return Je(e).getComputedStyle(e);
}
function sm(e) {
  return ["table", "td", "th"].indexOf(gt(e)) >= 0;
}
function Lt(e) {
  return ((en(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function vr(e) {
  return gt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Lt(e)
  );
}
function Js(e) {
  return !rt(e) || // https://github.com/popperjs/popper-core/issues/837
  kt(e).position === "fixed" ? null : e.offsetParent;
}
function am(e) {
  var t = /firefox/i.test(ci()), n = /Trident/i.test(ci());
  if (n && rt(e)) {
    var o = kt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = vr(e);
  for (Pi(r) && (r = r.host); rt(r) && ["html", "body"].indexOf(gt(r)) < 0; ) {
    var i = kt(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = Je(e), n = Js(e); n && sm(n) && kt(n).position === "static"; )
    n = Js(n);
  return n && (gt(n) === "html" || gt(n) === "body" && kt(n).position === "static") ? t : n || am(e) || t;
}
function Mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gn(e, t, n) {
  return Zt(e, Zo(t, n));
}
function lm(e, t, n) {
  var o = Gn(e, t, n);
  return o > n ? n : o;
}
function Ml() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Al(e) {
  return Object.assign({}, Ml(), e);
}
function Dl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var cm = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Al(typeof t != "number" ? t : Dl(t, ho));
};
function um(e) {
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = mt(n.placement), u = Mi(a), h = [Ue, at].indexOf(a) >= 0, p = h ? "height" : "width";
  if (!(!i || !s)) {
    var m = cm(r.padding, n), d = Oi(i), g = u === "y" ? We : Ue, x = u === "y" ? st : at, f = n.rects.reference[p] + n.rects.reference[u] - s[u] - n.rects.popper[p], y = s[u] - n.rects.reference[u], S = mo(i), j = S ? u === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, C = f / 2 - y / 2, w = m[g], E = j - d[p] - m[x], T = j / 2 - d[p] / 2 + C, R = Gn(w, T, E), F = u;
    n.modifiersData[o] = (t = {}, t[F] = R, t.centerOffset = R - T, t);
  }
}
function dm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ol(t.elements.popper, r) && (t.elements.arrow = r));
}
const pm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: um,
  effect: dm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wn(e) {
  return e.split("-")[1];
}
var fm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: yn(n * r) / r || 0,
    y: yn(o * r) / r || 0
  };
}
function Qs(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, a = e.position, u = e.gpuAcceleration, h = e.adaptive, p = e.roundOffsets, m = e.isFixed, d = s.x, g = d === void 0 ? 0 : d, x = s.y, f = x === void 0 ? 0 : x, y = typeof p == "function" ? p({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = y.x, f = y.y;
  var S = s.hasOwnProperty("x"), j = s.hasOwnProperty("y"), C = Ue, w = We, E = window;
  if (h) {
    var T = mo(n), R = "clientHeight", F = "clientWidth";
    if (T === Je(n) && (T = Lt(n), kt(T).position !== "static" && a === "absolute" && (R = "scrollHeight", F = "scrollWidth")), T = T, r === We || (r === Ue || r === at) && i === to) {
      w = st;
      var I = m && T === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[R]
      );
      f -= I - o.height, f *= u ? 1 : -1;
    }
    if (r === Ue || (r === We || r === st) && i === to) {
      C = at;
      var H = m && T === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[F]
      );
      g -= H - o.width, g *= u ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: a
  }, h && fm), v = p === !0 ? hm({
    x: g,
    y: f
  }, Je(n)) : {
    x: g,
    y: f
  };
  if (g = v.x, f = v.y, u) {
    var D;
    return Object.assign({}, B, (D = {}, D[w] = j ? "0" : "", D[C] = S ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", D));
  }
  return Object.assign({}, B, (t = {}, t[w] = j ? f + "px" : "", t[C] = S ? g + "px" : "", t.transform = "", t));
}
function mm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, u = a === void 0 ? !0 : a, h = {
    placement: mt(t.placement),
    variation: wn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qs(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qs(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const gm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: mm,
  data: {}
};
var jo = {
  passive: !0
};
function xm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, u = Je(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && h.forEach(function(p) {
    p.addEventListener("scroll", n.update, jo);
  }), a && u.addEventListener("resize", n.update, jo), function() {
    i && h.forEach(function(p) {
      p.removeEventListener("scroll", n.update, jo);
    }), a && u.removeEventListener("resize", n.update, jo);
  };
}
const bm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xm,
  data: {}
};
var ym = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ym[t];
  });
}
var vm = {
  start: "end",
  end: "start"
};
function ea(e) {
  return e.replace(/start|end/g, function(t) {
    return vm[t];
  });
}
function Ai(e) {
  var t = Je(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Di(e) {
  return vn(Lt(e)).left + Ai(e).scrollLeft;
}
function wm(e, t) {
  var n = Je(e), o = Lt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, a = 0, u = 0;
  if (r) {
    i = r.width, s = r.height;
    var h = Pl();
    (h || !h && t === "fixed") && (a = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Di(e),
    y: u
  };
}
function Cm(e) {
  var t, n = Lt(e), o = Ai(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Zt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Zt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Di(e), u = -o.scrollTop;
  return kt(r || n).direction === "rtl" && (a += Zt(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: u
  };
}
function Ii(e) {
  var t = kt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Il(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : rt(e) && Ii(e) ? e : Il(vr(e));
}
function Yn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Il(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Je(o), s = r ? [i].concat(i.visualViewport || [], Ii(o) ? o : []) : o, a = t.concat(s);
  return r ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Yn(vr(s)))
  );
}
function ui(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Em(e, t) {
  var n = vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ta(e, t, n) {
  return t === jl ? ui(wm(e, n)) : en(t) ? Em(t, n) : ui(Cm(Lt(e)));
}
function Sm(e) {
  var t = Yn(vr(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, o = n && rt(e) ? mo(e) : e;
  return en(o) ? t.filter(function(r) {
    return en(r) && Ol(r, o) && gt(r) !== "body";
  }) : [];
}
function _m(e, t, n, o) {
  var r = t === "clippingParents" ? Sm(e) : [].concat(t), i = [].concat(r, [n]), s = i[0], a = i.reduce(function(u, h) {
    var p = ta(e, h, o);
    return u.top = Zt(p.top, u.top), u.right = Zo(p.right, u.right), u.bottom = Zo(p.bottom, u.bottom), u.left = Zt(p.left, u.left), u;
  }, ta(e, s, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Fl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? mt(o) : null, i = o ? wn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case We:
      u = {
        x: s,
        y: t.y - n.height
      };
      break;
    case st:
      u = {
        x: s,
        y: t.y + t.height
      };
      break;
    case at:
      u = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Ue:
      u = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var h = r ? Mi(r) : null;
  if (h != null) {
    var p = h === "y" ? "height" : "width";
    switch (i) {
      case bn:
        u[h] = u[h] - (t[p] / 2 - n[p] / 2);
        break;
      case to:
        u[h] = u[h] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return u;
}
function no(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, u = a === void 0 ? Uh : a, h = n.rootBoundary, p = h === void 0 ? jl : h, m = n.elementContext, d = m === void 0 ? An : m, g = n.altBoundary, x = g === void 0 ? !1 : g, f = n.padding, y = f === void 0 ? 0 : f, S = Al(typeof y != "number" ? y : Dl(y, ho)), j = d === An ? Gh : An, C = e.rects.popper, w = e.elements[x ? j : d], E = _m(en(w) ? w : w.contextElement || Lt(e.elements.popper), u, p, s), T = vn(e.elements.reference), R = Fl({
    reference: T,
    element: C,
    placement: r
  }), F = ui(Object.assign({}, C, R)), I = d === An ? F : T, H = {
    top: E.top - I.top + S.top,
    bottom: I.bottom - E.bottom + S.bottom,
    left: E.left - I.left + S.left,
    right: I.right - E.right + S.right
  }, B = e.modifiersData.offset;
  if (d === An && B) {
    var v = B[r];
    Object.keys(H).forEach(function(D) {
      var M = [at, st].indexOf(D) >= 0 ? 1 : -1, A = [We, st].indexOf(D) >= 0 ? "y" : "x";
      H[D] += v[A] * M;
    });
  }
  return H;
}
function Rm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, u = n.allowedAutoPlacements, h = u === void 0 ? $l : u, p = wn(o), m = p ? a ? Zs : Zs.filter(function(x) {
    return wn(x) === p;
  }) : ho, d = m.filter(function(x) {
    return h.indexOf(x) >= 0;
  });
  d.length === 0 && (d = m);
  var g = d.reduce(function(x, f) {
    return x[f] = no(e, {
      placement: f,
      boundary: r,
      rootBoundary: i,
      padding: s
    })[mt(f)], x;
  }, {});
  return Object.keys(g).sort(function(x, f) {
    return g[x] - g[f];
  });
}
function Tm(e) {
  if (mt(e) === $i)
    return [];
  var t = Bo(e);
  return [ea(e), t, ea(t)];
}
function km(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, u = n.fallbackPlacements, h = n.padding, p = n.boundary, m = n.rootBoundary, d = n.altBoundary, g = n.flipVariations, x = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, y = t.options.placement, S = mt(y), j = S === y, C = u || (j || !x ? [Bo(y)] : Tm(y)), w = [y].concat(C).reduce(function(N, q) {
      return N.concat(mt(q) === $i ? Rm(t, {
        placement: q,
        boundary: p,
        rootBoundary: m,
        padding: h,
        flipVariations: x,
        allowedAutoPlacements: f
      }) : q);
    }, []), E = t.rects.reference, T = t.rects.popper, R = /* @__PURE__ */ new Map(), F = !0, I = w[0], H = 0; H < w.length; H++) {
      var B = w[H], v = mt(B), D = wn(B) === bn, M = [We, st].indexOf(v) >= 0, A = M ? "width" : "height", _ = no(t, {
        placement: B,
        boundary: p,
        rootBoundary: m,
        altBoundary: d,
        padding: h
      }), U = M ? D ? at : Ue : D ? st : We;
      E[A] > T[A] && (U = Bo(U));
      var J = Bo(U), K = [];
      if (i && K.push(_[v] <= 0), a && K.push(_[U] <= 0, _[J] <= 0), K.every(function(N) {
        return N;
      })) {
        I = B, F = !1;
        break;
      }
      R.set(B, K);
    }
    if (F)
      for (var O = x ? 3 : 1, b = function(q) {
        var G = w.find(function(W) {
          var Z = R.get(W);
          if (Z)
            return Z.slice(0, q).every(function(Q) {
              return Q;
            });
        });
        if (G)
          return I = G, "break";
      }, $ = O; $ > 0; $--) {
        var z = b($);
        if (z === "break") break;
      }
    t.placement !== I && (t.modifiersData[o]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const jm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: km,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function na(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function oa(e) {
  return [We, at, st, Ue].some(function(t) {
    return e[t] >= 0;
  });
}
function $m(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = no(t, {
    elementContext: "reference"
  }), a = no(t, {
    altBoundary: !0
  }), u = na(s, o), h = na(a, r, i), p = oa(u), m = oa(h);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: h,
    isReferenceHidden: p,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": m
  });
}
const Pm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $m
};
function Om(e, t, n) {
  var o = mt(e), r = [Ue, We].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * r, [Ue, at].indexOf(o) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Mm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, s = $l.reduce(function(p, m) {
    return p[m] = Om(m, t.rects, i), p;
  }, {}), a = s[t.placement], u = a.x, h = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += h), t.modifiersData[o] = s;
}
const Am = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Mm
};
function Dm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Fl({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Im = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Dm,
  data: {}
};
function Fm(e) {
  return e === "x" ? "y" : "x";
}
function Nm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, u = n.boundary, h = n.rootBoundary, p = n.altBoundary, m = n.padding, d = n.tether, g = d === void 0 ? !0 : d, x = n.tetherOffset, f = x === void 0 ? 0 : x, y = no(t, {
    boundary: u,
    rootBoundary: h,
    padding: m,
    altBoundary: p
  }), S = mt(t.placement), j = wn(t.placement), C = !j, w = Mi(S), E = Fm(w), T = t.modifiersData.popperOffsets, R = t.rects.reference, F = t.rects.popper, I = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, H = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, v = {
    x: 0,
    y: 0
  };
  if (T) {
    if (i) {
      var D, M = w === "y" ? We : Ue, A = w === "y" ? st : at, _ = w === "y" ? "height" : "width", U = T[w], J = U + y[M], K = U - y[A], O = g ? -F[_] / 2 : 0, b = j === bn ? R[_] : F[_], $ = j === bn ? -F[_] : -R[_], z = t.elements.arrow, N = g && z ? Oi(z) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ml(), G = q[M], W = q[A], Z = Gn(0, R[_], N[_]), Q = C ? R[_] / 2 - O - Z - G - H.mainAxis : b - Z - G - H.mainAxis, Y = C ? -R[_] / 2 + O + Z + W + H.mainAxis : $ + Z + W + H.mainAxis, ee = t.elements.arrow && mo(t.elements.arrow), V = ee ? w === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, ie = (D = B?.[w]) != null ? D : 0, ue = U + Q - ie - V, ce = U + Y - ie, Ne = Gn(g ? Zo(J, ue) : J, U, g ? Zt(K, ce) : K);
      T[w] = Ne, v[w] = Ne - U;
    }
    if (a) {
      var $e, De = w === "x" ? We : Ue, Be = w === "x" ? st : at, ze = T[E], Pe = E === "y" ? "height" : "width", se = ze + y[De], Rn = ze - y[Be], Tn = [We, Ue].indexOf(S) !== -1, go = ($e = B?.[E]) != null ? $e : 0, xo = Tn ? se : ze - R[Pe] - F[Pe] - go + H.altAxis, on = Tn ? ze + R[Pe] + F[Pe] - go - H.altAxis : Rn, bo = g && Tn ? lm(xo, ze, on) : Gn(g ? xo : se, ze, g ? on : Rn);
      T[E] = bo, v[E] = bo - ze;
    }
    t.modifiersData[o] = v;
  }
}
const Bm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Nm,
  requiresIfExists: ["offset"]
};
function zm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Lm(e) {
  return e === Je(e) || !rt(e) ? Ai(e) : zm(e);
}
function Vm(e) {
  var t = e.getBoundingClientRect(), n = yn(t.width) / e.offsetWidth || 1, o = yn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Hm(e, t, n) {
  n === void 0 && (n = !1);
  var o = rt(t), r = rt(t) && Vm(t), i = Lt(t), s = vn(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((gt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(i)) && (a = Lm(t)), rt(t) ? (u = vn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = Di(i))), {
    x: s.left + a.scrollLeft - u.x,
    y: s.top + a.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function Wm(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var u = t.get(a);
        u && r(u);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || r(i);
  }), o;
}
function Um(e) {
  var t = Wm(e);
  return nm.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Gm(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ym(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ra = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ia() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function qm(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? ra : r;
  return function(a, u, h) {
    h === void 0 && (h = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ra, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, m = [], d = !1, g = {
      state: p,
      setOptions: function(S) {
        var j = typeof S == "function" ? S(p.options) : S;
        f(), p.options = Object.assign({}, i, p.options, j), p.scrollParents = {
          reference: en(a) ? Yn(a) : a.contextElement ? Yn(a.contextElement) : [],
          popper: Yn(u)
        };
        var C = Um(Ym([].concat(o, p.options.modifiers)));
        return p.orderedModifiers = C.filter(function(w) {
          return w.enabled;
        }), x(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var S = p.elements, j = S.reference, C = S.popper;
          if (ia(j, C)) {
            p.rects = {
              reference: Hm(j, mo(C), p.options.strategy === "fixed"),
              popper: Oi(C)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(H) {
              return p.modifiersData[H.name] = Object.assign({}, H.data);
            });
            for (var w = 0; w < p.orderedModifiers.length; w++) {
              if (p.reset === !0) {
                p.reset = !1, w = -1;
                continue;
              }
              var E = p.orderedModifiers[w], T = E.fn, R = E.options, F = R === void 0 ? {} : R, I = E.name;
              typeof T == "function" && (p = T({
                state: p,
                options: F,
                name: I,
                instance: g
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gm(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(p);
        });
      }),
      destroy: function() {
        f(), d = !0;
      }
    };
    if (!ia(a, u))
      return g;
    g.setOptions(h).then(function(y) {
      !d && h.onFirstUpdate && h.onFirstUpdate(y);
    });
    function x() {
      p.orderedModifiers.forEach(function(y) {
        var S = y.name, j = y.options, C = j === void 0 ? {} : j, w = y.effect;
        if (typeof w == "function") {
          var E = w({
            state: p,
            name: S,
            instance: g,
            options: C
          }), T = function() {
          };
          m.push(E || T);
        }
      });
    }
    function f() {
      m.forEach(function(y) {
        return y();
      }), m = [];
    }
    return g;
  };
}
var Km = [bm, Im, gm, im, Am, jm, Bm, pm, Pm], Xm = /* @__PURE__ */ qm({
  defaultModifiers: Km
});
function Nl(e) {
  return typeof e == "string";
}
function Bl(e, t, n) {
  return e === void 0 || Nl(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function zl(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((o) => o.match(/^on[A-Z]/) && typeof e[o] == "function" && !t.includes(o)).forEach((o) => {
    n[o] = e[o];
  }), n;
}
function sa(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ll(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: r,
    className: i
  } = e;
  if (!t) {
    const g = _e(n?.className, i, r?.className, o?.className), x = {
      ...n?.style,
      ...r?.style,
      ...o?.style
    }, f = {
      ...n,
      ...r,
      ...o
    };
    return g.length > 0 && (f.className = g), Object.keys(x).length > 0 && (f.style = x), {
      props: f,
      internalRef: void 0
    };
  }
  const s = zl({
    ...r,
    ...o
  }), a = sa(o), u = sa(r), h = t(s), p = _e(h?.className, n?.className, i, r?.className, o?.className), m = {
    ...h?.style,
    ...n?.style,
    ...r?.style,
    ...o?.style
  }, d = {
    ...h,
    ...n,
    ...u,
    ...a
  };
  return p.length > 0 && (d.className = p), Object.keys(m).length > 0 && (d.style = m), {
    props: d,
    internalRef: h.ref
  };
}
function Vl(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Hl(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: r = !1,
    ...i
  } = e, s = r ? {} : Vl(n, o), {
    props: a,
    internalRef: u
  } = Ll({
    ...i,
    externalSlotProps: s
  }), h = Ge(u, s?.ref, e.additionalProps?.ref);
  return Bl(t, {
    ...a,
    ref: h
  }, o);
}
function aa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zm(e) {
  return typeof e == "function" ? e() : e;
}
const oo = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    children: o,
    container: r,
    disablePortal: i = !1
  } = t, [s, a] = k.useState(null), u = Ge(/* @__PURE__ */ k.isValidElement(o) ? fo(o) : null, n);
  if (Qt(() => {
    i || a(Zm(r) || document.body);
  }, [r, i]), Qt(() => {
    if (s && !i)
      return aa(n, s), () => {
        aa(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ k.isValidElement(o)) {
      const h = {
        ref: u
      };
      return /* @__PURE__ */ k.cloneElement(o, h);
    }
    return o;
  }
  return s && /* @__PURE__ */ Eu.createPortal(o, s);
});
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: c.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Tt, c.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool
});
process.env.NODE_ENV !== "production" && (oo.propTypes = al(oo.propTypes));
function Jm(e) {
  return ct("MuiPopper", e);
}
Ye("MuiPopper", ["root"]);
function Qm(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Jo(e) {
  return typeof e == "function" ? e() : e;
}
function wr(e) {
  return e.nodeType !== void 0;
}
function eg(e) {
  return !wr(e);
}
const tg = (e) => {
  const {
    classes: t
  } = e;
  return xt({
    root: ["root"]
  }, Jm, t);
}, ng = {}, og = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: u,
    placement: h,
    popperOptions: p,
    popperRef: m,
    slotProps: d = {},
    slots: g = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, S = k.useRef(null), j = Ge(S, n), C = k.useRef(null), w = Ge(C, m), E = k.useRef(w);
  Qt(() => {
    E.current = w;
  }, [w]), k.useImperativeHandle(m, () => C.current, []);
  const T = Qm(h, i), [R, F] = k.useState(T), [I, H] = k.useState(Jo(o));
  k.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), k.useEffect(() => {
    o && H(Jo(o));
  }, [o]), Qt(() => {
    if (!I || !u)
      return;
    const A = (J) => {
      F(J.placement);
    };
    if (process.env.NODE_ENV !== "production" && I && wr(I) && I.nodeType === 1) {
      const J = I.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && J.top === 0 && J.left === 0 && J.right === 0 && J.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let _ = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: J
      }) => {
        A(J);
      }
    }];
    a != null && (_ = _.concat(a)), p && p.modifiers != null && (_ = _.concat(p.modifiers));
    const U = Xm(I, S.current, {
      placement: T,
      ...p,
      modifiers: _
    });
    return E.current(U), () => {
      U.destroy(), E.current(null);
    };
  }, [I, s, a, u, p, T]);
  const B = {
    placement: R
  };
  x !== null && (B.TransitionProps = x);
  const v = tg(t), D = g.root ?? "div", M = Hl({
    elementType: D,
    externalSlotProps: d.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: j
    },
    ownerState: t,
    className: v.root
  });
  return /* @__PURE__ */ l.jsx(D, {
    ...M,
    children: typeof r == "function" ? r(B) : r
  });
}), Wl = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: u = !1,
    modifiers: h,
    open: p,
    placement: m = "bottom",
    popperOptions: d = ng,
    popperRef: g,
    style: x,
    transition: f = !1,
    slotProps: y = {},
    slots: S = {},
    ...j
  } = t, [C, w] = k.useState(!0), E = () => {
    w(!1);
  }, T = () => {
    w(!0);
  };
  if (!u && !p && (!f || C))
    return null;
  let R;
  if (i)
    R = i;
  else if (o) {
    const H = Jo(o);
    R = H && wr(H) ? it(H).body : it(null).body;
  }
  const F = !p && u && (!f || C) ? "none" : void 0, I = f ? {
    in: p,
    onEnter: E,
    onExited: T
  } : void 0;
  return /* @__PURE__ */ l.jsx(oo, {
    disablePortal: a,
    container: R,
    children: /* @__PURE__ */ l.jsx(og, {
      anchorEl: o,
      direction: s,
      disablePortal: a,
      modifiers: h,
      ref: n,
      open: f ? !C : p,
      placement: m,
      popperOptions: d,
      popperRef: g,
      slotProps: y,
      slots: S,
      ...j,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: F,
        ...x
      },
      TransitionProps: I,
      children: r
    })
  });
});
process.env.NODE_ENV !== "production" && (Wl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Cn(c.oneOfType([Tt, c.object, c.func]), (e) => {
    if (e.open) {
      const t = Jo(e.anchorEl);
      if (t && wr(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || eg(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: c.oneOfType([c.node, c.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Tt, c.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: c.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: c.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: c.arrayOf(c.shape({
    data: c.object,
    effect: c.func,
    enabled: c.bool,
    fn: c.func,
    name: c.any,
    options: c.object,
    phase: c.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: c.arrayOf(c.string),
    requiresIfExists: c.arrayOf(c.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: c.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: c.shape({
    modifiers: c.array,
    onFirstUpdate: c.func,
    placement: c.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: c.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: yr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: c.shape({
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: c.shape({
    root: c.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: c.bool
});
const rg = ne(Wl, {
  name: "MuiPopper",
  slot: "Root"
})({}), Fi = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = _i(), r = ut({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: a,
    componentsProps: u,
    container: h,
    disablePortal: p,
    keepMounted: m,
    modifiers: d,
    open: g,
    placement: x,
    popperOptions: f,
    popperRef: y,
    transition: S,
    slots: j,
    slotProps: C,
    ...w
  } = r, E = j?.root ?? a?.Root, T = {
    anchorEl: i,
    container: h,
    disablePortal: p,
    keepMounted: m,
    modifiers: d,
    open: g,
    placement: x,
    popperOptions: f,
    popperRef: y,
    transition: S,
    ...w
  };
  return /* @__PURE__ */ l.jsx(rg, {
    as: s,
    direction: o ? "rtl" : "ltr",
    slots: {
      root: E
    },
    slotProps: C ?? u,
    ...T,
    ref: n
  });
});
process.env.NODE_ENV !== "production" && (Fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: c.oneOfType([Tt, c.object, c.func]),
  /**
   * Popper render function or node.
   */
  children: c.oneOfType([c.node, c.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: c.shape({
    Root: c.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: c.shape({
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Tt, c.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: c.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: c.arrayOf(c.shape({
    data: c.object,
    effect: c.func,
    enabled: c.bool,
    fn: c.func,
    name: c.any,
    options: c.object,
    phase: c.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: c.arrayOf(c.string),
    requiresIfExists: c.arrayOf(c.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: c.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: c.shape({
    modifiers: c.array,
    onFirstUpdate: c.func,
    placement: c.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: c.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: yr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: c.shape({
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: c.shape({
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: c.bool
});
function Dt(e) {
  const t = k.useRef(e);
  return Qt(() => {
    t.current = e;
  }), k.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ig(e) {
  const {
    controlled: t,
    default: n,
    name: o,
    state: r = "value"
  } = e, {
    current: i
  } = k.useRef(t !== void 0), [s, a] = k.useState(n), u = i ? t : s;
  if (process.env.NODE_ENV !== "production") {
    k.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, t]);
    const {
      current: p
    } = k.useRef(n);
    k.useEffect(() => {
      !i && JSON.stringify(n) !== JSON.stringify(p) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const h = k.useCallback((p) => {
    i || a(p);
  }, []);
  return [u, h];
}
function Xe(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: r,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...u
  } = t, {
    component: h,
    slots: p = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...d
  } = i, g = p[e] || o, x = Vl(m[e], r), {
    props: {
      component: f,
      ...y
    },
    internalRef: S
  } = Ll({
    className: n,
    ...u,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: x
  }), j = Ge(S, x?.ref, t.ref), C = e === "root" ? f || h : f, w = Bl(g, {
    ...e === "root" && !h && !p[e] && s,
    ...e !== "root" && !p[e] && s,
    ...y,
    ...C && !a && {
      as: C
    },
    ...C && a && {
      component: C
    },
    ref: j
  }, r);
  return [g, w];
}
function sg(e) {
  return ct("MuiTooltip", e);
}
const je = Ye("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function ag(e) {
  return Math.round(e * 1e5) / 1e5;
}
const lg = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: o,
    touch: r,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", o && "popperArrow"],
    tooltip: ["tooltip", o && "tooltipArrow", r && "touch", `tooltipPlacement${co(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return xt(s, sg, t);
}, cg = ne(Fi, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Sn(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${je.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${je.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${je.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${je.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${je.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${je.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${je.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${je.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), ug = ne("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${co(n.placement.split("-")[0])}`]];
  }
})(Sn(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${je.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${je.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${je.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${je.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${ag(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${je.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${je.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${je.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${je.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${je.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${je.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${je.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${je.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${je.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${je.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), dg = ne("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(Sn(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : e.alpha(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let $o = !1;
const la = new br();
let Dn = {
  x: 0,
  y: 0
};
function Po(e, t) {
  return (n, ...o) => {
    t && t(n, ...o), e(n, ...o);
  };
}
const ge = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: r = !1,
    children: i,
    classes: s,
    components: a = {},
    componentsProps: u = {},
    describeChild: h = !1,
    disableFocusListener: p = !1,
    disableHoverListener: m = !1,
    disableInteractive: d = !1,
    disableTouchListener: g = !1,
    enterDelay: x = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: y = 700,
    followCursor: S = !1,
    id: j,
    leaveDelay: C = 0,
    leaveTouchDelay: w = 1500,
    onClose: E,
    onOpen: T,
    open: R,
    placement: F = "bottom",
    PopperComponent: I,
    PopperProps: H = {},
    slotProps: B = {},
    slots: v = {},
    title: D,
    TransitionComponent: M,
    TransitionProps: A,
    ..._
  } = o, U = /* @__PURE__ */ k.isValidElement(i) ? i : /* @__PURE__ */ l.jsx("span", {
    children: i
  }), J = xr(), K = _i(), [O, b] = k.useState(), [$, z] = k.useState(null), N = k.useRef(!1), q = d || S, G = fn(), W = fn(), Z = fn(), Q = fn(), [Y, ee] = ig({
    controlled: R,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let V = Y;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: ae
    } = k.useRef(R !== void 0);
    k.useEffect(() => {
      O && O.disabled && !ae && D !== "" && O.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [D, O, ae]);
  }
  const ie = gp(j), ue = k.useRef(), ce = Dt(() => {
    ue.current !== void 0 && (document.body.style.WebkitUserSelect = ue.current, ue.current = void 0), Q.clear();
  });
  k.useEffect(() => ce, [ce]);
  const Ne = (ae) => {
    la.clear(), $o = !0, ee(!0), T && !V && T(ae);
  }, $e = Dt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ae) => {
      la.start(800 + C, () => {
        $o = !1;
      }), ee(!1), E && V && E(ae), G.start(J.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), De = (ae) => {
    N.current && ae.type !== "touchstart" || (O && O.removeAttribute("title"), W.clear(), Z.clear(), x || $o && f ? W.start($o ? f : x, () => {
      Ne(ae);
    }) : Ne(ae));
  }, Be = (ae) => {
    W.clear(), Z.start(C, () => {
      $e(ae);
    });
  }, [, ze] = k.useState(!1), Pe = (ae) => {
    qo(ae.target) || (ze(!1), Be(ae));
  }, se = (ae) => {
    O || b(ae.currentTarget), qo(ae.target) && (ze(!0), De(ae));
  }, Rn = (ae) => {
    N.current = !0;
    const jt = U.props;
    jt.onTouchStart && jt.onTouchStart(ae);
  }, Tn = (ae) => {
    Rn(ae), Z.clear(), G.clear(), ce(), ue.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(y, () => {
      document.body.style.WebkitUserSelect = ue.current, De(ae);
    });
  }, go = (ae) => {
    U.props.onTouchEnd && U.props.onTouchEnd(ae), ce(), Z.start(w, () => {
      $e(ae);
    });
  };
  k.useEffect(() => {
    if (!V)
      return;
    function ae(jt) {
      jt.key === "Escape" && $e(jt);
    }
    return document.addEventListener("keydown", ae), () => {
      document.removeEventListener("keydown", ae);
    };
  }, [$e, V]);
  const xo = Ge(fo(U), b, n);
  !D && D !== 0 && (V = !1);
  const on = k.useRef(), bo = (ae) => {
    const jt = U.props;
    jt.onMouseMove && jt.onMouseMove(ae), Dn = {
      x: ae.clientX,
      y: ae.clientY
    }, on.current && on.current.update();
  }, kn = {}, Er = typeof D == "string";
  h ? (kn.title = !V && Er && !m ? D : null, kn["aria-describedby"] = V ? ie : null) : (kn["aria-label"] = Er ? D : null, kn["aria-labelledby"] = V && !Er ? ie : null);
  const Qe = {
    ...kn,
    ..._,
    ...U.props,
    className: _e(_.className, U.props.className),
    onTouchStart: Rn,
    ref: xo,
    ...S ? {
      onMouseMove: bo
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Qe["data-mui-internal-clone-element"] = !0, k.useEffect(() => {
    O && !O.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [O]));
  const jn = {};
  g || (Qe.onTouchStart = Tn, Qe.onTouchEnd = go), m || (Qe.onMouseOver = Po(De, Qe.onMouseOver), Qe.onMouseLeave = Po(Be, Qe.onMouseLeave), q || (jn.onMouseOver = De, jn.onMouseLeave = Be)), p || (Qe.onFocus = Po(se, Qe.onFocus), Qe.onBlur = Po(Pe, Qe.onBlur), q || (jn.onFocus = se, jn.onBlur = Pe)), process.env.NODE_ENV !== "production" && U.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${U.props.title}\` or the Tooltip component.`].join(`
`));
  const Vt = {
    ...o,
    isRtl: K,
    arrow: r,
    disableInteractive: q,
    placement: F,
    PopperComponentProp: I,
    touch: N.current
  }, $n = typeof B.popper == "function" ? B.popper(Vt) : B.popper, hc = k.useMemo(() => {
    let ae = [{
      name: "arrow",
      enabled: !!$,
      options: {
        element: $,
        padding: 4
      }
    }];
    return H.popperOptions?.modifiers && (ae = ae.concat(H.popperOptions.modifiers)), $n?.popperOptions?.modifiers && (ae = ae.concat($n.popperOptions.modifiers)), {
      ...H.popperOptions,
      ...$n?.popperOptions,
      modifiers: ae
    };
  }, [$, H.popperOptions, $n?.popperOptions]), Sr = lg(Vt), mc = typeof B.transition == "function" ? B.transition(Vt) : B.transition, yo = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? M,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...v
    },
    slotProps: {
      arrow: B.arrow ?? u.arrow,
      popper: {
        ...H,
        ...$n ?? u.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: B.tooltip ?? u.tooltip,
      transition: {
        ...A,
        ...mc ?? u.transition
      }
    }
  }, [gc, xc] = Xe("popper", {
    elementType: cg,
    externalForwardedProps: yo,
    ownerState: Vt,
    className: _e(Sr.popper, H?.className)
  }), [bc, yc] = Xe("transition", {
    elementType: eo,
    externalForwardedProps: yo,
    ownerState: Vt
  }), [vc, wc] = Xe("tooltip", {
    elementType: ug,
    className: Sr.tooltip,
    externalForwardedProps: yo,
    ownerState: Vt
  }), [Cc, Ec] = Xe("arrow", {
    elementType: dg,
    className: Sr.arrow,
    externalForwardedProps: yo,
    ownerState: Vt,
    ref: z
  });
  return /* @__PURE__ */ l.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ k.cloneElement(U, Qe), /* @__PURE__ */ l.jsx(gc, {
      as: I ?? Fi,
      placement: F,
      anchorEl: S ? {
        getBoundingClientRect: () => ({
          top: Dn.y,
          left: Dn.x,
          right: Dn.x,
          bottom: Dn.y,
          width: 0,
          height: 0
        })
      } : O,
      popperRef: on,
      open: O ? V : !1,
      id: ie,
      transition: !0,
      ...jn,
      ...xc,
      popperOptions: hc,
      children: ({
        TransitionProps: ae
      }) => /* @__PURE__ */ l.jsx(bc, {
        timeout: J.transitions.duration.shorter,
        ...ae,
        ...yc,
        children: /* @__PURE__ */ l.jsxs(vc, {
          ...wc,
          children: [D, r ? /* @__PURE__ */ l.jsx(Cc, {
            ...Ec
          }) : null]
        })
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (ge.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: c.bool,
  /**
   * Tooltip reference element.
   */
  children: En.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: c.shape({
    Arrow: c.elementType,
    Popper: c.elementType,
    Tooltip: c.elementType,
    Transition: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: c.shape({
    arrow: c.object,
    popper: c.object,
    tooltip: c.object,
    transition: c.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: c.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: c.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: c.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: c.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: c.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: c.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: c.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: c.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: c.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: c.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: c.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: c.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: c.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: c.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: c.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: c.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    arrow: c.oneOfType([c.func, c.object]),
    popper: c.oneOfType([c.func, c.object]),
    tooltip: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    arrow: c.elementType,
    popper: c.elementType,
    tooltip: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: c.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: c.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: c.object
});
function pg(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function fg(e, t, n, o, r) {
  const i = e[t], s = r || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !pg(i) && (a = "Did you accidentally provide a plain function component instead?"), i === k.Fragment && (a = "Did you accidentally provide a React.Fragment instead?"), a !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ul = Cn(c.elementType, fg);
function hg(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Gl(e, t, n, o) {
  const r = e[t];
  if (r == null || !Number.isInteger(r)) {
    const i = hg(r);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Yl(e, t, n, o) {
  return e[t] === void 0 ? null : Gl(e, t, n, o);
}
function di() {
  return null;
}
Yl.isRequired = Gl;
di.isRequired = di;
const ql = process.env.NODE_ENV === "production" ? di : Yl;
function mg(e, t = 166) {
  let n;
  function o(...r) {
    const i = () => {
      e.apply(this, r);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return o.clear = () => {
    clearTimeout(n);
  }, o;
}
function tn(e) {
  return it(e).defaultView || window;
}
function Kl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function gg(e) {
  const t = it(e);
  return t.body === e ? tn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function qn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ca(e) {
  return parseFloat(tn(e).getComputedStyle(e).paddingRight) || 0;
}
function xg(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ua(e, t, n, o, r) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), u = !xg(s);
    a && u && qn(s, r);
  });
}
function Ur(e, t) {
  let n = -1;
  return e.some((o, r) => t(o) ? (n = r, !0) : !1), n;
}
function bg(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (gg(o)) {
      const s = Kl(tn(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${ca(o) + s}px`;
      const a = it(o).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (u) => {
        n.push({
          value: u.style.paddingRight,
          property: "padding-right",
          el: u
        }), u.style.paddingRight = `${ca(u) + s}px`;
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment)
      i = it(o).body;
    else {
      const s = o.parentElement, a = tn(o);
      i = s?.nodeName === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : o;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function yg(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class vg {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && qn(t.modalRef, !1);
    const r = yg(n);
    ua(n, t.mount, t.modalRef, r, !0);
    const i = Ur(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), o) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: r
    }), o);
  }
  mount(t, n) {
    const o = Ur(this.containers, (i) => i.modals.includes(t)), r = this.containers[o];
    r.restore || (r.restore = bg(r, n));
  }
  remove(t, n = !0) {
    const o = this.modals.indexOf(t);
    if (o === -1)
      return o;
    const r = Ur(this.containers, (s) => s.modals.includes(t)), i = this.containers[r];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(o, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && qn(t.modalRef, n), ua(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && qn(s.modalRef, !1);
    }
    return o;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Vn(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const wg = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Cg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Eg(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Sg(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Eg(e));
}
function _g(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(wg)).forEach((o, r) => {
    const i = Cg(o);
    i === -1 || !Sg(o) || (i === 0 ? t.push(o) : n.push({
      documentOrder: r,
      tabIndex: i,
      node: o
    }));
  }), n.sort((o, r) => o.tabIndex === r.tabIndex ? o.documentOrder - r.documentOrder : o.tabIndex - r.tabIndex).map((o) => o.node).concat(t);
}
function Rg() {
  return !0;
}
function Qo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: r = !1,
    getTabbable: i = _g,
    isEnabled: s = Rg,
    open: a
  } = e, u = k.useRef(!1), h = k.useRef(null), p = k.useRef(null), m = k.useRef(null), d = k.useRef(null), g = k.useRef(!1), x = k.useRef(null), f = Ge(fo(t), x), y = k.useRef(null);
  k.useEffect(() => {
    !a || !x.current || (g.current = !n);
  }, [n, a]), k.useEffect(() => {
    if (!a || !x.current)
      return;
    const C = it(x.current), w = Vn(C);
    return x.current.contains(w) || (x.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), x.current.setAttribute("tabIndex", "-1")), g.current && x.current.focus()), () => {
      r || (m.current && m.current.focus && (u.current = !0, m.current.focus()), m.current = null);
    };
  }, [a]), k.useEffect(() => {
    if (!a || !x.current)
      return;
    const C = it(x.current), w = (R) => {
      if (y.current = R, o || !s() || R.key !== "Tab")
        return;
      Vn(C) === x.current && R.shiftKey && (u.current = !0, p.current && p.current.focus());
    }, E = () => {
      const R = x.current;
      if (R === null)
        return;
      const F = Vn(C);
      if (!C.hasFocus() || !s() || u.current) {
        u.current = !1;
        return;
      }
      if (R.contains(F) || o && F !== h.current && F !== p.current)
        return;
      if (F !== d.current)
        d.current = null;
      else if (d.current !== null)
        return;
      if (!g.current)
        return;
      let I = [];
      if ((F === h.current || F === p.current) && (I = i(x.current)), I.length > 0) {
        const H = !!(y.current?.shiftKey && y.current?.key === "Tab"), B = I[0], v = I[I.length - 1];
        typeof B != "string" && typeof v != "string" && (H ? v.focus() : B.focus());
      } else
        R.focus();
    };
    C.addEventListener("focusin", E), C.addEventListener("keydown", w, !0);
    const T = setInterval(() => {
      const R = Vn(C);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(T), C.removeEventListener("focusin", E), C.removeEventListener("keydown", w, !0);
    };
  }, [n, o, r, s, a, i]);
  const S = (C) => {
    m.current === null && (m.current = C.relatedTarget), g.current = !0, d.current = C.target;
    const w = t.props.onFocus;
    w && w(C);
  }, j = (C) => {
    m.current === null && (m.current = C.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ l.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ l.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: j,
      ref: h,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ k.cloneElement(t, {
      ref: f,
      onFocus: S
    }), /* @__PURE__ */ l.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: j,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: En,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: c.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: c.func,
  /**
   * If `true`, focus is locked.
   */
  open: c.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = al(Qo.propTypes));
const Tg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Xl = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = xr(), r = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: u,
    in: h,
    onEnter: p,
    onEntered: m,
    onEntering: d,
    onExit: g,
    onExited: x,
    onExiting: f,
    style: y,
    timeout: S = r,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: j = bt,
    ...C
  } = t, w = k.useRef(null), E = Ge(w, fo(a), n), T = (M) => (A) => {
    if (M) {
      const _ = w.current;
      A === void 0 ? M(_) : M(_, A);
    }
  }, R = T(d), F = T((M, A) => {
    kl(M);
    const _ = Xo({
      style: y,
      timeout: S,
      easing: u
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = o.transitions.create("opacity", _), M.style.transition = o.transitions.create("opacity", _), p && p(M, A);
  }), I = T(m), H = T(f), B = T((M) => {
    const A = Xo({
      style: y,
      timeout: S,
      easing: u
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = o.transitions.create("opacity", A), M.style.transition = o.transitions.create("opacity", A), g && g(M);
  }), v = T(x), D = (M) => {
    i && i(w.current, M);
  };
  return /* @__PURE__ */ l.jsx(j, {
    appear: s,
    in: h,
    nodeRef: w,
    onEnter: F,
    onEntered: I,
    onEntering: R,
    onExit: B,
    onExited: v,
    onExiting: H,
    addEndListener: D,
    timeout: S,
    ...C,
    children: (M, {
      ownerState: A,
      ..._
    }) => /* @__PURE__ */ k.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !h ? "hidden" : void 0,
        ...Tg[M],
        ...y,
        ...a.props.style
      },
      ref: E,
      ..._
    })
  });
});
process.env.NODE_ENV !== "production" && (Xl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
function kg(e) {
  return ct("MuiBackdrop", e);
}
Ye("MuiBackdrop", ["root", "invisible"]);
const jg = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return xt({
    root: ["root", n && "invisible"]
  }, kg, t);
}, $g = ne("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), Zl = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: r,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: u,
    components: h = {},
    componentsProps: p = {},
    slotProps: m = {},
    slots: d = {},
    TransitionComponent: g,
    transitionDuration: x,
    ...f
  } = o, y = {
    ...o,
    component: s,
    invisible: a
  }, S = jg(y), j = {
    transition: g,
    root: h.Root,
    ...d
  }, C = {
    ...p,
    ...m
  }, w = {
    component: s,
    slots: j,
    slotProps: C
  }, [E, T] = Xe("root", {
    elementType: $g,
    externalForwardedProps: w,
    className: _e(S.root, i),
    ownerState: y
  }), [R, F] = Xe("transition", {
    elementType: Xl,
    externalForwardedProps: w,
    ownerState: y
  });
  return /* @__PURE__ */ l.jsx(R, {
    in: u,
    timeout: x,
    ...f,
    ...F,
    children: /* @__PURE__ */ l.jsx(E, {
      "aria-hidden": !0,
      ...T,
      ref: n,
      children: r
    })
  });
});
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: c.shape({
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: c.shape({
    root: c.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: c.bool,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: c.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
function da(...e) {
  return e.reduce((t, n) => n == null ? t : function(...r) {
    t.apply(this, r), n.apply(this, r);
  }, () => {
  });
}
function Pg(e) {
  return typeof e == "function" ? e() : e;
}
function Og(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const pa = () => {
}, Oo = new vg();
function Mg(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: u,
    open: h,
    rootRef: p
  } = e, m = k.useRef({}), d = k.useRef(null), g = k.useRef(null), x = Ge(g, p), [f, y] = k.useState(!h), S = Og(a);
  let j = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (j = !1);
  const C = () => it(d.current), w = () => (m.current.modalRef = g.current, m.current.mount = d.current, m.current), E = () => {
    Oo.mount(w(), {
      disableScrollLock: o
    }), g.current && (g.current.scrollTop = 0);
  }, T = Dt(() => {
    const A = Pg(t) || C().body;
    Oo.add(w(), A), g.current && E();
  }), R = () => Oo.isTopModal(w()), F = Dt((A) => {
    d.current = A, A && (h && R() ? E() : g.current && qn(g.current, j));
  }), I = k.useCallback(() => {
    Oo.remove(w(), j);
  }, [j]);
  k.useEffect(() => () => {
    I();
  }, [I]), k.useEffect(() => {
    h ? T() : (!S || !r) && I();
  }, [h, I, S, r, T]);
  const H = (A) => (_) => {
    A.onKeyDown?.(_), !(_.key !== "Escape" || _.which === 229 || // Wait until IME is settled.
    !R()) && (n || (_.stopPropagation(), u && u(_, "escapeKeyDown")));
  }, B = (A) => (_) => {
    A.onClick?.(_), _.target === _.currentTarget && u && u(_, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const _ = zl(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const U = {
        ..._,
        ...A
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...U,
        onKeyDown: H(U),
        ref: x
      };
    },
    getBackdropProps: (A = {}) => {
      const _ = A;
      return {
        "aria-hidden": !0,
        ..._,
        onClick: B(_),
        open: h
      };
    },
    getTransitionProps: () => {
      const A = () => {
        y(!1), i && i();
      }, _ = () => {
        y(!0), s && s(), r && I();
      };
      return {
        onEnter: da(A, a?.props.onEnter ?? pa),
        onExited: da(_, a?.props.onExited ?? pa)
      };
    },
    rootRef: x,
    portalRef: F,
    isTopModal: R,
    exited: f,
    hasTransition: S
  };
}
function Ag(e) {
  return ct("MuiModal", e);
}
Ye("MuiModal", ["root", "hidden", "backdrop"]);
const Dg = (e) => {
  const {
    open: t,
    exited: n,
    classes: o
  } = e;
  return xt({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ag, o);
}, Ig = ne("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Sn(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), Fg = ne(Zl, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Jl = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: r = Fg,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: u = !1,
    children: h,
    container: p,
    component: m,
    components: d = {},
    componentsProps: g = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: S = !1,
    disableRestoreFocus: j = !1,
    disableScrollLock: C = !1,
    hideBackdrop: w = !1,
    keepMounted: E = !1,
    onClose: T,
    onTransitionEnter: R,
    onTransitionExited: F,
    open: I,
    slotProps: H = {},
    slots: B = {},
    // eslint-disable-next-line react/prop-types
    theme: v,
    ...D
  } = o, M = {
    ...o,
    closeAfterTransition: u,
    disableAutoFocus: x,
    disableEnforceFocus: f,
    disableEscapeKeyDown: y,
    disablePortal: S,
    disableRestoreFocus: j,
    disableScrollLock: C,
    hideBackdrop: w,
    keepMounted: E
  }, {
    getRootProps: A,
    getBackdropProps: _,
    getTransitionProps: U,
    portalRef: J,
    isTopModal: K,
    exited: O,
    hasTransition: b
  } = Mg({
    ...M,
    rootRef: n
  }), $ = {
    ...M,
    exited: O
  }, z = Dg($), N = {};
  if (h.props.tabIndex === void 0 && (N.tabIndex = "-1"), b) {
    const {
      onEnter: Y,
      onExited: ee
    } = U();
    N.onEnter = Y, N.onExited = ee;
  }
  const q = {
    slots: {
      root: d.Root,
      backdrop: d.Backdrop,
      ...B
    },
    slotProps: {
      ...g,
      ...H
    }
  }, [G, W] = Xe("root", {
    ref: n,
    elementType: Ig,
    externalForwardedProps: {
      ...q,
      ...D,
      component: m
    },
    getSlotProps: A,
    ownerState: $,
    className: _e(a, z?.root, !$.open && $.exited && z?.hidden)
  }), [Z, Q] = Xe("backdrop", {
    ref: i?.ref,
    elementType: r,
    externalForwardedProps: q,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (Y) => _({
      ...Y,
      onClick: (ee) => {
        Y?.onClick && Y.onClick(ee);
      }
    }),
    className: _e(i?.className, z?.backdrop),
    ownerState: $
  });
  return !E && !I && (!b || O) ? null : /* @__PURE__ */ l.jsx(oo, {
    ref: J,
    container: p,
    disablePortal: S,
    children: /* @__PURE__ */ l.jsxs(G, {
      ...W,
      children: [!w && r ? /* @__PURE__ */ l.jsx(Z, {
        ...Q
      }) : null, /* @__PURE__ */ l.jsx(Qo, {
        disableEnforceFocus: f,
        disableAutoFocus: x,
        disableRestoreFocus: j,
        isEnabled: K,
        open: I,
        children: /* @__PURE__ */ k.cloneElement(h, N)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: c.object,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: c.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: c.shape({
    Backdrop: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Tt, c.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: c.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: c.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: c.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: c.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: c.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
function Ng(e) {
  return ct("MuiPaper", e);
}
Ye("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Bg = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: r
  } = e, i = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return xt(i, Ng, r);
}, zg = ne("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Sn(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Ql = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiPaper"
  }), r = xr(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: u = !1,
    variant: h = "elevation",
    ...p
  } = o, m = {
    ...o,
    component: s,
    elevation: a,
    square: u,
    variant: h
  }, d = Bg(m);
  return process.env.NODE_ENV !== "production" && r.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ l.jsx(zg, {
    as: s,
    ownerState: m,
    className: _e(d.root, i),
    ref: n,
    ...p,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (r.vars || r).shadows[a],
        ...r.vars && {
          "--Paper-overlay": r.vars.overlays?.[a]
        },
        ...!r.vars && r.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Go("#fff", Qr(a))}, ${Go("#fff", Qr(a))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Cn(ql, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: c.bool,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: c.oneOfType([c.oneOf(["elevation", "outlined"]), c.string])
});
function Lg(e) {
  return ct("MuiPopover", e);
}
Ye("MuiPopover", ["root", "paper"]);
function Vg(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Hg(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const u = {};
    return Object.keys(a).forEach((h) => {
      Vg(h, a[h]) && typeof s[h] == "function" && (u[h] = (...p) => {
        s[h](...p), a[h](...p);
      });
    }), u;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, u = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, h = _e(s?.className, a?.className, u?.className), p = n(u, a);
      return {
        ...a,
        ...u,
        ...p,
        ...!!h && {
          className: h
        },
        ...a?.style && u?.style && {
          style: {
            ...a.style,
            ...u.style
          }
        },
        ...a?.sx && u?.sx && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(u.sx) ? u.sx : [u.sx]]
        }
      };
    };
  const o = t, r = n(e, o), i = _e(o?.className, e?.className);
  return {
    ...t,
    ...e,
    ...r,
    ...!!i && {
      className: i
    },
    ...o?.style && e?.style && {
      style: {
        ...o.style,
        ...e.style
      }
    },
    ...o?.sx && e?.sx && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
function fa(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function ha(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ma(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Hn(e) {
  return typeof e == "function" ? e() : e;
}
const Wg = (e) => {
  const {
    classes: t
  } = e;
  return xt({
    root: ["root"],
    paper: ["paper"]
  }, Lg, t);
}, Ug = ne(Jl, {
  name: "MuiPopover",
  slot: "Root"
})({}), ec = ne(Ql, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ni = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiPopover"
  }), {
    action: r,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: u = "anchorEl",
    children: h,
    className: p,
    container: m,
    elevation: d = 8,
    marginThreshold: g = 16,
    open: x,
    PaperProps: f = {},
    // TODO: remove in v7
    slots: y = {},
    slotProps: S = {},
    transformOrigin: j = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: C,
    // TODO: remove in v7
    transitionDuration: w = "auto",
    TransitionProps: E = {},
    // TODO: remove in v7
    disableScrollLock: T = !1,
    ...R
  } = o, F = k.useRef(), I = {
    ...o,
    anchorOrigin: s,
    anchorReference: u,
    elevation: d,
    marginThreshold: g,
    transformOrigin: j,
    TransitionComponent: C,
    transitionDuration: w,
    TransitionProps: E
  }, H = Wg(I), B = k.useCallback(() => {
    if (u === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const Y = Hn(i), ee = Y && Y.nodeType === 1 ? Y : it(F.current).body, V = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ie = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ie.top === 0 && ie.left === 0 && ie.right === 0 && ie.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: V.top + fa(V, s.vertical),
      left: V.left + ha(V, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, u]), v = k.useCallback((Y) => ({
    vertical: fa(Y, j.vertical),
    horizontal: ha(Y, j.horizontal)
  }), [j.horizontal, j.vertical]), D = k.useCallback((Y) => {
    const ee = {
      width: Y.offsetWidth,
      height: Y.offsetHeight
    }, V = v(ee);
    if (u === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ma(V)
      };
    const ie = B();
    let ue = ie.top - V.vertical, ce = ie.left - V.horizontal;
    const Ne = ue + ee.height, $e = ce + ee.width, De = tn(Hn(i)), Be = De.innerHeight - g, ze = De.innerWidth - g;
    if (g !== null && ue < g) {
      const Pe = ue - g;
      ue -= Pe, V.vertical += Pe;
    } else if (g !== null && Ne > Be) {
      const Pe = Ne - Be;
      ue -= Pe, V.vertical += Pe;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > Be && ee.height && Be && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - Be}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && ce < g) {
      const Pe = ce - g;
      ce -= Pe, V.horizontal += Pe;
    } else if ($e > ze) {
      const Pe = $e - ze;
      ce -= Pe, V.horizontal += Pe;
    }
    return {
      top: `${Math.round(ue)}px`,
      left: `${Math.round(ce)}px`,
      transformOrigin: ma(V)
    };
  }, [i, u, B, v, g]), [M, A] = k.useState(x), _ = k.useCallback(() => {
    const Y = F.current;
    if (!Y)
      return;
    const ee = D(Y);
    ee.top !== null && Y.style.setProperty("top", ee.top), ee.left !== null && (Y.style.left = ee.left), Y.style.transformOrigin = ee.transformOrigin, A(!0);
  }, [D]);
  k.useEffect(() => (T && window.addEventListener("scroll", _), () => window.removeEventListener("scroll", _)), [i, T, _]);
  const U = () => {
    _();
  }, J = () => {
    A(!1);
  };
  k.useEffect(() => {
    x && _();
  }), k.useImperativeHandle(r, () => x ? {
    updatePosition: () => {
      _();
    }
  } : null, [x, _]), k.useEffect(() => {
    if (!x)
      return;
    const Y = mg(() => {
      _();
    }), ee = tn(Hn(i));
    return ee.addEventListener("resize", Y), () => {
      Y.clear(), ee.removeEventListener("resize", Y);
    };
  }, [i, x, _]);
  let K = w;
  const O = {
    slots: {
      transition: C,
      ...y
    },
    slotProps: {
      transition: E,
      paper: f,
      ...S
    }
  }, [b, $] = Xe("transition", {
    elementType: eo,
    externalForwardedProps: O,
    ownerState: I,
    getSlotProps: (Y) => ({
      ...Y,
      onEntering: (ee, V) => {
        Y.onEntering?.(ee, V), U();
      },
      onExited: (ee) => {
        Y.onExited?.(ee), J();
      }
    }),
    additionalProps: {
      appear: !0,
      in: x
    }
  });
  w === "auto" && !b.muiSupportAuto && (K = void 0);
  const z = m || (i ? it(Hn(i)).body : void 0), [N, {
    slots: q,
    slotProps: G,
    ...W
  }] = Xe("root", {
    ref: n,
    elementType: Ug,
    externalForwardedProps: {
      ...O,
      ...R
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: y.backdrop
      },
      slotProps: {
        backdrop: Hg(typeof S.backdrop == "function" ? S.backdrop(I) : S.backdrop, {
          invisible: !0
        })
      },
      container: z,
      open: x
    },
    ownerState: I,
    className: _e(H.root, p)
  }), [Z, Q] = Xe("paper", {
    ref: F,
    className: H.paper,
    elementType: ec,
    externalForwardedProps: O,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: M ? void 0 : {
        opacity: 0
      }
    },
    ownerState: I
  });
  return /* @__PURE__ */ l.jsx(N, {
    ...W,
    ...!Nl(N) && {
      slots: q,
      slotProps: G,
      disableScrollLock: T
    },
    children: /* @__PURE__ */ l.jsx(b, {
      ...$,
      timeout: K,
      children: /* @__PURE__ */ l.jsx(Z, {
        ...Q,
        children: h
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Ni.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: yr,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Cn(c.oneOfType([Tt, c.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Hn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: c.shape({
    left: c.number.isRequired,
    top: c.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: c.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: c.object,
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Tt, c.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: ql,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: c.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: c.shape({
    component: Ul
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    paper: c.elementType,
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: c.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: c.object
});
function _n() {
  return (_n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function Cr(e, t) {
  if (e == null) return {};
  var n, o, r = {}, i = Object.keys(e);
  for (o = 0; o < i.length; o++) t.indexOf(n = i[o]) >= 0 || (r[n] = e[n]);
  return r;
}
function ro(e) {
  var t = re(e), n = re(function(o) {
    t.current && t.current(o);
  });
  return t.current = e, n.current;
}
var io = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Kn = function(e) {
  return "touches" in e;
}, pi = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, ga = function(e, t, n) {
  var o = e.getBoundingClientRect(), r = Kn(t) ? (function(i, s) {
    for (var a = 0; a < i.length; a++) if (i[a].identifier === s) return i[a];
    return i[0];
  })(t.touches, n) : t;
  return { left: io((r.pageX - (o.left + pi(e).pageXOffset)) / o.width), top: io((r.pageY - (o.top + pi(e).pageYOffset)) / o.height) };
}, xa = function(e) {
  !Kn(e) && e.preventDefault();
}, tc = Se.memo(function(e) {
  var t = e.onMove, n = e.onKey, o = Cr(e, ["onMove", "onKey"]), r = re(null), i = ro(t), s = ro(n), a = re(null), u = re(!1), h = jc(function() {
    var g = function(y) {
      xa(y), (Kn(y) ? y.touches.length > 0 : y.buttons > 0) && r.current ? i(ga(r.current, y, a.current)) : f(!1);
    }, x = function() {
      return f(!1);
    };
    function f(y) {
      var S = u.current, j = pi(r.current), C = y ? j.addEventListener : j.removeEventListener;
      C(S ? "touchmove" : "mousemove", g), C(S ? "touchend" : "mouseup", x);
    }
    return [function(y) {
      var S = y.nativeEvent, j = r.current;
      if (j && (xa(S), !(function(w, E) {
        return E && !Kn(w);
      })(S, u.current) && j)) {
        if (Kn(S)) {
          u.current = !0;
          var C = S.changedTouches || [];
          C.length && (a.current = C[0].identifier);
        }
        j.focus(), i(ga(j, S, a.current)), f(!0);
      }
    }, function(y) {
      var S = y.which || y.keyCode;
      S < 37 || S > 40 || (y.preventDefault(), s({ left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0, top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0 }));
    }, f];
  }, [s, i]), p = h[0], m = h[1], d = h[2];
  return Ie(function() {
    return d;
  }, [d]), Se.createElement("div", _n({}, o, { onTouchStart: p, onMouseDown: p, className: "react-colorful__interactive", ref: r, onKeyDown: m, tabIndex: 0, role: "slider" }));
}), Bi = function(e) {
  return e.filter(Boolean).join(" ");
}, nc = function(e) {
  var t = e.color, n = e.left, o = e.top, r = o === void 0 ? 0.5 : o, i = Bi(["react-colorful__pointer", e.className]);
  return Se.createElement("div", { className: i, style: { top: 100 * r + "%", left: 100 * n + "%" } }, Se.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Fe = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Gg = function(e) {
  return Zg(fi(e));
}, fi = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Fe(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Fe(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Yg = function(e) {
  return Xg(Kg(e));
}, qg = function(e) {
  var t = e.s, n = e.v, o = e.a, r = (200 - t) * n / 100;
  return { h: Fe(e.h), s: Fe(r > 0 && r < 200 ? t * n / 100 / (r <= 100 ? r : 200 - r) * 100 : 0), l: Fe(r / 2), a: Fe(o, 2) };
}, hi = function(e) {
  var t = qg(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Kg = function(e) {
  var t = e.h, n = e.s, o = e.v, r = e.a;
  t = t / 360 * 6, n /= 100, o /= 100;
  var i = Math.floor(t), s = o * (1 - n), a = o * (1 - (t - i) * n), u = o * (1 - (1 - t + i) * n), h = i % 6;
  return { r: Fe(255 * [o, a, s, s, u, o][h]), g: Fe(255 * [u, o, o, a, s, s][h]), b: Fe(255 * [s, s, u, o, o, a][h]), a: Fe(r, 2) };
}, Mo = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Xg = function(e) {
  var t = e.r, n = e.g, o = e.b, r = e.a, i = r < 1 ? Mo(Fe(255 * r)) : "";
  return "#" + Mo(t) + Mo(n) + Mo(o) + i;
}, Zg = function(e) {
  var t = e.r, n = e.g, o = e.b, r = e.a, i = Math.max(t, n, o), s = i - Math.min(t, n, o), a = s ? i === t ? (n - o) / s : i === n ? 2 + (o - t) / s : 4 + (t - n) / s : 0;
  return { h: Fe(60 * (a < 0 ? a + 6 : a)), s: Fe(i ? s / i * 100 : 0), v: Fe(i / 255 * 100), a: r };
}, Jg = Se.memo(function(e) {
  var t = e.hue, n = e.onChange, o = Bi(["react-colorful__hue", e.className]);
  return Se.createElement("div", { className: o }, Se.createElement(tc, { onMove: function(r) {
    n({ h: 360 * r.left });
  }, onKey: function(r) {
    n({ h: io(t + 360 * r.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Fe(t), "aria-valuemax": "360", "aria-valuemin": "0" }, Se.createElement(nc, { className: "react-colorful__hue-pointer", left: t / 360, color: hi({ h: t, s: 100, v: 100, a: 1 }) })));
}), Qg = Se.memo(function(e) {
  var t = e.hsva, n = e.onChange, o = { backgroundColor: hi({ h: t.h, s: 100, v: 100, a: 1 }) };
  return Se.createElement("div", { className: "react-colorful__saturation", style: o }, Se.createElement(tc, { onMove: function(r) {
    n({ s: 100 * r.left, v: 100 - 100 * r.top });
  }, onKey: function(r) {
    n({ s: io(t.s + 100 * r.left, 0, 100), v: io(t.v - 100 * r.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Fe(t.s) + "%, Brightness " + Fe(t.v) + "%" }, Se.createElement(nc, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: hi(t) })));
}), oc = function(e, t) {
  if (e === t) return !0;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}, e0 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || oc(fi(e), fi(t));
};
function t0(e, t, n) {
  var o = ro(n), r = oe(function() {
    return e.toHsva(t);
  }), i = r[0], s = r[1], a = re({ color: t, hsva: i });
  Ie(function() {
    if (!e.equal(t, a.current.color)) {
      var h = e.toHsva(t);
      a.current = { hsva: h, color: t }, s(h);
    }
  }, [t, e]), Ie(function() {
    var h;
    oc(i, a.current.hsva) || e.equal(h = e.fromHsva(i), a.current.color) || (a.current = { hsva: i, color: h }, o(h));
  }, [i, e, o]);
  var u = Oe(function(h) {
    s(function(p) {
      return Object.assign({}, p, h);
    });
  }, []);
  return [i, u];
}
var n0 = typeof window < "u" ? gi : Ie, o0 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, ba = /* @__PURE__ */ new Map(), r0 = function(e) {
  n0(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !ba.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, ba.set(t, n);
      var o = o0();
      o && n.setAttribute("nonce", o), t.head.appendChild(n);
    }
  }, []);
}, i0 = function(e) {
  var t = e.className, n = e.colorModel, o = e.color, r = o === void 0 ? n.defaultColor : o, i = e.onChange, s = Cr(e, ["className", "colorModel", "color", "onChange"]), a = re(null);
  r0(a);
  var u = t0(n, r, i), h = u[0], p = u[1], m = Bi(["react-colorful", t]);
  return Se.createElement("div", _n({}, s, { ref: a, className: m }), Se.createElement(Qg, { hsva: h, onChange: p }), Se.createElement(Jg, { hue: h.h, onChange: p, className: "react-colorful__last-control" }));
}, s0 = { defaultColor: "000", toHsva: Gg, fromHsva: function(e) {
  return Yg({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: e0 }, a0 = function(e) {
  return Se.createElement(i0, _n({}, e, { colorModel: s0 }));
}, l0 = /^#?([0-9A-F]{3,8})$/i, c0 = function(e) {
  var t = e.color, n = t === void 0 ? "" : t, o = e.onChange, r = e.onBlur, i = e.escape, s = e.validate, a = e.format, u = e.process, h = Cr(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), p = oe(function() {
    return i(n);
  }), m = p[0], d = p[1], g = ro(o), x = ro(r), f = Oe(function(S) {
    var j = i(S.target.value);
    d(j), s(j) && g(u ? u(j) : j);
  }, [i, u, s, g]), y = Oe(function(S) {
    s(S.target.value) || d(i(n)), x(S);
  }, [n, i, s, x]);
  return Ie(function() {
    d(i(n));
  }, [n, i]), Se.createElement("input", _n({}, h, { value: a ? a(m) : m, spellCheck: "false", onChange: f, onBlur: y }));
}, ya = function(e) {
  return "#" + e;
}, u0 = function(e) {
  var t = e.prefixed, n = e.alpha, o = Cr(e, ["prefixed", "alpha"]), r = Oe(function(s) {
    return s.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6);
  }, [n]), i = Oe(function(s) {
    return (function(a, u) {
      var h = l0.exec(a), p = h ? h[1].length : 0;
      return p === 3 || p === 6 || !!u && p === 4 || !!u && p === 8;
    })(s, n);
  }, [n]);
  return Se.createElement(c0, _n({}, o, { escape: r, format: t ? ya : void 0, process: ya, validate: i }));
};
const d0 = ({
  color: e,
  onAccept: t,
  onCancel: n,
  anchorEl: o,
  anchorOrigin: r,
  transformOrigin: i,
  open: s
}) => {
  const [a, u] = oe(e), h = re([]), { t: p } = Ve();
  Ie(() => {
    u(e);
  }, [e]);
  const m = (d) => {
    h.current.includes(d) || (h.current = [d, ...h.current].slice(
      0,
      14
    )), u(d), t(d);
  };
  return /* @__PURE__ */ l.jsx(
    p0,
    {
      open: s,
      onClose: n,
      anchorEl: o.current,
      anchorOrigin: r,
      transformOrigin: i,
      children: /* @__PURE__ */ l.jsxs(f0, { children: [
        /* @__PURE__ */ l.jsx(
          a0,
          {
            color: a,
            onChange: (d) => {
              u(d);
            }
          }
        ),
        /* @__PURE__ */ l.jsx(va, {}),
        /* @__PURE__ */ l.jsxs(E0, { children: [
          /* @__PURE__ */ l.jsxs(w0, { children: [
            /* @__PURE__ */ l.jsx(b0, { children: "Hex" }),
            /* @__PURE__ */ l.jsxs(y0, { children: [
              /* @__PURE__ */ l.jsx(x0, { children: "#" }),
              /* @__PURE__ */ l.jsx(
                v0,
                {
                  color: a,
                  onChange: (d) => {
                    u(d);
                  },
                  tabIndex: 0
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(C0, { $color: a })
        ] }),
        /* @__PURE__ */ l.jsx(va, {}),
        /* @__PURE__ */ l.jsxs(h0, { children: [
          /* @__PURE__ */ l.jsx(g0, { onClick: n, children: p("color_picker.cancel") }),
          /* @__PURE__ */ l.jsxs(
            m0,
            {
              onClick: () => {
                m(a), n();
              },
              children: [
                /* @__PURE__ */ l.jsx(Bt, {}),
                p("color_picker.apply")
              ]
            }
          )
        ] })
      ] })
    }
  );
}, p0 = te(Oc)`
  & .MuiPaper-root {
    border-radius: 8px;
    padding: 0px;
    margin-left: -4px;
    max-width: 220px;
  }
`, va = te.div`
  height: 0px;
  width: 100%;
  border-top: 1px solid ${P.palette.grey[200]};
`, f0 = te.div`
  background: ${P.palette.background.default};
  width: 240px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  & .react-colorful {
    height: 160px;
    width: 100%;
  }
  & .react-colorful__saturation {
    border-bottom: none;
    border-radius: 8px 8px 0px 0px;
  }
  & .react-colorful__hue {
    height: 8px;
    margin: 8px;
    border-radius: 5px;
  }
  & .react-colorful__saturation-pointer {
    width: 14px;
    height: 14px;
  }
  & .react-colorful__hue-pointer {
    width: 7px;
    border-radius: 8px;
    height: 16px;
    width: 16px;
  }
`, h0 = te.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  gap: 8px;
`, m0 = te("div")`
  cursor: pointer;
  width: 100%;
  color: ${P.palette.primary.contrastText};
  background: ${P.palette.primary.main};
  padding: 0px 10px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  font-size: 12px;
  &:hover {
    background: #d68742;
  }
  svg {
    max-width: 12px;
    max-height: 12px;
  }
`, g0 = te("div")`
  cursor: pointer;
  width: 100%;
  color: ${P.palette.grey[700]};
  background: ${P.palette.grey[200]};
  padding: 0px 10px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-family: "Inter";
  font-size: 12px;
  &:hover {
    background: ${P.palette.grey[300]};
  }
  svg {
    max-width: 12px;
    max-height: 12px;
  }
`, x0 = te.div`
  margin: auto 0px auto 10px;
  font-size: 13px;
  color: #333;
  font-family: ${P.typography.button.fontFamily};
`, b0 = te.div`
  margin: auto 0px;
  font-size: 12px;
  display: inline-flex;
  font-family: ${P.typography.button.fontFamily};
`, y0 = te.div`
  display: inline-flex;
  flex-grow: 1;
  width: 100%;
  height: 28px;
  border: 1px solid ${P.palette.grey[300]};
  border-radius: 5px;
  &:hover {
    border: 1px solid ${P.palette.grey[600]};
  }
  &:focus-within {
    outline: 2px solid ${P.palette.secondary.main};
    outline-offset: 1px;
  }
`, v0 = te(u0)`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: ${P.typography.button.fontFamily};
  font-size: 12px;
  text-transform: uppercase;
  text-align: right;
  padding-right: 10px;
  border-radius: 5px;

  &:focus {
    border-color: #4298ef;
  }
`, w0 = te.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
  & input {
    min-width: 0px;
    border: 0px;
    background: ${P.palette.background.default};
    outline: none;
    font-family: ${P.typography.button.fontFamily};
    font-size: 12px;
    text-transform: uppercase;
    text-align: right;
    padding-right: 10px;
    border-radius: 5px;
  }

  & input:focus {
    border-color: #4298ef;
  }
`, C0 = te.div`
  display: inline-flex;
  ${({ $color: e }) => e.toUpperCase() === "#FFFFFF" ? `border: 1px solid ${P.palette.grey[300]};` : `border: 1px solid ${e};`}
  background-color: ${({ $color: e }) => e};
  min-width: 28px;
  height: 28px;
  border-radius: 5px;
`, E0 = te.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;
  gap: 8px;
`, er = ({
  color: e,
  defaultColor: t,
  title: n,
  onChange: o,
  onClose: r,
  anchorEl: i,
  anchorOrigin: s,
  transformOrigin: a,
  open: u
}) => {
  const [h, p] = oe(e), [m, d] = oe(!1), g = re([]), { t: x } = Ve();
  Ie(() => {
    p(e);
  }, [e]);
  const f = (M) => {
    g.current.includes(M) || (g.current = [M, ...g.current].slice(
      0,
      14
    )), p(M || P.palette.common.black), o(M), d(!1);
  }, y = () => {
    d(!1), r();
  }, S = (M) => {
    const A = h.toUpperCase() === M.toUpperCase();
    return /* @__PURE__ */ l.jsx(
      O0,
      {
        $color: M,
        onClick: () => f(M),
        children: A && /* @__PURE__ */ l.jsx(A0, { $color: M })
      },
      M
    );
  }, j = [
    "#FFFFFF",
    "#272525",
    "#1B717E",
    "#3BB68A",
    "#8CB354",
    "#F8CD3C",
    "#F2994A",
    "#EC5753",
    "#523E93",
    "#3358B7"
  ], C = [
    P.palette.grey[50],
    P.palette.grey[100],
    P.palette.grey[200],
    P.palette.grey[300],
    P.palette.grey[400]
  ], w = [
    P.palette.grey[500],
    P.palette.grey[600],
    P.palette.grey[700],
    P.palette.grey[800],
    P.palette.grey[900]
  ], D = [
    C,
    w,
    ["#BBD4D8", "#82B1B8", "#498D98", "#1E5A63", "#224348"],
    ["#C4E9DC", "#93D7BF", "#62C5A1", "#358A6C", "#2F5F4D"],
    ["#DDE8CC", "#C0D5A1", "#A3C276", "#6E8846", "#4F5E38"],
    ["#FDF0C5", "#FBE394", "#F9D764", "#B99A36", "#7A682E"],
    ["#FBE0C9", "#F8C79B", "#F5AD6E", "#B5763F", "#785334"],
    ["#F9CDCB", "#F5A3A0", "#F07975", "#B14845", "#763937"],
    ["#CBC5DF", "#A095C4", "#7565A9", "#453672", "#382F51"],
    ["#C2CDE9", "#8FA3D7", "#5D79C5", "#30498B", "#2C395F"]
  ];
  return u ? m ? /* @__PURE__ */ l.jsx(
    d0,
    {
      color: h,
      onAccept: f,
      onCancel: () => d(!1),
      anchorEl: i,
      anchorOrigin: s,
      transformOrigin: a,
      open: !0
    }
  ) : /* @__PURE__ */ l.jsxs(
    S0,
    {
      anchorEl: i.current,
      open: !0,
      onClose: y,
      anchorOrigin: s,
      transformOrigin: a,
      children: [
        /* @__PURE__ */ l.jsxs(_0, { onClick: () => f(t), children: [
          /* @__PURE__ */ l.jsx(T0, { style: { backgroundColor: t } }),
          /* @__PURE__ */ l.jsx(R0, { children: n })
        ] }),
        /* @__PURE__ */ l.jsx(wa, {}),
        /* @__PURE__ */ l.jsxs(k0, { children: [
          /* @__PURE__ */ l.jsx(j0, { children: j.map(S) }),
          /* @__PURE__ */ l.jsx($0, { children: D.map((M) => /* @__PURE__ */ l.jsx(P0, { children: M.map(S) }, M.join("-"))) })
        ] }),
        /* @__PURE__ */ l.jsx(wa, {}),
        /* @__PURE__ */ l.jsx(D0, { children: x("color_picker.recent") }),
        /* @__PURE__ */ l.jsxs(I0, { children: [
          g.current.length > 0 ? g.current.map((M) => /* @__PURE__ */ l.jsx(
            rc,
            {
              $color: M,
              onClick: () => {
                p(M), f(M);
              }
            },
            M
          )) : /* @__PURE__ */ l.jsx(N0, {}),
          /* @__PURE__ */ l.jsx(
            F0,
            {
              onClick: () => d(!0),
              title: x("color_picker.add"),
              children: /* @__PURE__ */ l.jsx(It, {})
            }
          )
        ] })
      ]
    }
  ) : null;
}, S0 = te(so)`
  & .MuiPaper-root {
    border-radius: 8px;
    padding: 4px 0px;
    margin-left: -4px;
    max-width: 220px;
  }
  & .MuiList-root {
    padding: 0;
  }
`, _0 = te(nn)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  gap: 8px;
  width: calc(100% - 8px);
  min-width: 172px;
  margin: 0px 4px 4px 4px;
  border-radius: 4px;
  padding: 8px;
  height: 32px;
`, R0 = te("div")`
  color: ${P.palette.text.primary};
`, T0 = te.div`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  margin-top: 0px;
  border: 1px solid ${P.palette.grey[300]};
  border-radius: 4px;
`, k0 = te.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
`, j0 = te.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 8px 8px 0px 8px;
  justify-content: flex-start;
  gap: 4px;
`, $0 = te.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 8px;
  gap: 4px;
`, P0 = te.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`, rc = te.button`
  width: 16px;
  height: 16px;
  padding: 0px;
  ${({ $color: e }) => {
  const t = e.toUpperCase();
  return t === "#FFFFFF" || t === "#FFF" ? `border: 1px solid ${P.palette.grey[300]};` : "border: none;";
}}
  background-color: ${({ $color: e }) => e === "transparent" ? "none" : e};
  box-sizing: border-box;
  margin-top: 0px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    outline: 1px solid ${P.palette.grey[300]};
    outline-offset: 1px;
  }
`, O0 = te(rc)`
  display: flex;
  align-items: center;
  justify-content: center;
`, M0 = (e) => {
  const t = parseInt(e.slice(1), 16), n = t >> 16 & 255, o = t >> 8 & 255, r = t & 255;
  return 0.2126 * n + 0.7152 * o + 0.0722 * r > 160;
}, A0 = te(Bt)`
  width: 10px;
  height: 10px;
  stroke-width: 3px;
  color: ${({ $color: e }) => M0(e) ? P.palette.common.black : P.palette.common.white};
`, wa = te.div`
  height: 0px;
  width: 100%;
  border-top: 1px solid ${P.palette.grey[200]};
`, D0 = te.div`
  font-family: "Inter";
  font-size: 12px;
  font-family: Inter;
  margin: 8px 12px 0px 12px;
  color: ${P.palette.text.secondary};
`, I0 = te.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 8px;
  margin: 0px 4px;
  justify-content: flex-start;
  gap: 4px;
`, F0 = te("button")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border: none;
  background: none;
  font-size: 12px;
  height: 16px;
  width: 16px;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    cursor: pointer;
    outline: 1px solid ${P.palette.grey[300]};
    outline-offset: 1px;
  }
`, N0 = te.div`
  display: none;
`, B0 = (e) => {
  const { t } = Ve(), [n, o] = oe(null), [r, i] = oe(P.palette.common.white), [s, a] = oe($t.Thin), [u, h] = oe(!1), [p, m] = oe(!1);
  Ie(() => {
    n && e.onChange({
      color: r,
      style: s,
      border: n
    });
  }, [r, s, n]);
  const d = e.onClose;
  Ie(() => {
    o(null), i(P.palette.common.black), a($t.Thin);
  }, [e.open]);
  const g = re(null), x = re(null);
  return /* @__PURE__ */ l.jsx(
    Sa,
    {
      open: e.open,
      onClose: d,
      anchorEl: e.anchorEl.current,
      anchorOrigin: e.anchorOrigin || { vertical: "bottom", horizontal: "left" },
      transformOrigin: e.transformOrigin || { vertical: "top", horizontal: "left" },
      children: /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsxs(Y0, { children: [
          /* @__PURE__ */ l.jsxs(W0, { children: [
            /* @__PURE__ */ l.jsxs(Ca, { children: [
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.All,
                  onClick: () => {
                    n === de.All ? o(null) : o(de.All);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.all"),
                  children: /* @__PURE__ */ l.jsx(Ga, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.Inner,
                  onClick: () => {
                    n === de.Inner ? o(null) : o(de.Inner);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.inner"),
                  children: /* @__PURE__ */ l.jsx(lf, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.CenterH,
                  onClick: () => {
                    n === de.CenterH ? o(null) : o(de.CenterH);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.horizontal"),
                  children: /* @__PURE__ */ l.jsx(sf, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.CenterV,
                  onClick: () => {
                    n === de.CenterV ? o(null) : o(de.CenterV);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.vertical"),
                  children: /* @__PURE__ */ l.jsx(af, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.Outer,
                  onClick: () => {
                    n === de.Outer ? o(de.None) : o(de.Outer);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.outer"),
                  children: /* @__PURE__ */ l.jsx(df, {})
                }
              )
            ] }),
            /* @__PURE__ */ l.jsxs(Ca, { children: [
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.None,
                  onClick: () => {
                    n === de.None ? o(de.None) : o(de.None);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.clear"),
                  children: /* @__PURE__ */ l.jsx(uf, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.Top,
                  onClick: () => {
                    n === de.Top ? o(de.None) : o(de.Top);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.top"),
                  children: /* @__PURE__ */ l.jsx(hf, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.Right,
                  onClick: () => {
                    n === de.Right ? o(de.None) : o(de.Right);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.right"),
                  children: /* @__PURE__ */ l.jsx(pf, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.Bottom,
                  onClick: () => {
                    n === de.Bottom ? o(de.None) : o(de.Bottom);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.bottom"),
                  children: /* @__PURE__ */ l.jsx(rf, {})
                }
              ),
              /* @__PURE__ */ l.jsx(
                pt,
                {
                  type: "button",
                  $pressed: n === de.Left,
                  onClick: () => {
                    n === de.Left ? o(de.None) : o(de.Left);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.left"),
                  children: /* @__PURE__ */ l.jsx(cf, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(H0, {}),
          /* @__PURE__ */ l.jsxs(U0, { children: [
            /* @__PURE__ */ l.jsxs(
              Ea,
              {
                onClick: () => h(!0),
                ref: g,
                children: [
                  /* @__PURE__ */ l.jsx(Ua, {}),
                  /* @__PURE__ */ l.jsx("div", { style: { flexGrow: 2 }, children: "Border color" }),
                  /* @__PURE__ */ l.jsx(_a, {})
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
              Ea,
              {
                onClick: () => m(!0),
                ref: x,
                children: [
                  /* @__PURE__ */ l.jsx(ff, {}),
                  /* @__PURE__ */ l.jsx("div", { style: { flexGrow: 2 }, children: "Border style" }),
                  /* @__PURE__ */ l.jsx(_a, {})
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l.jsx(
          er,
          {
            color: r,
            defaultColor: "#000000",
            title: t("color_picker.default"),
            onChange: (f) => {
              i(f), h(!1);
            },
            onClose: () => {
              h(!1);
            },
            anchorEl: g,
            open: u,
            anchorOrigin: {
              vertical: "top",
              // Keep vertical alignment at the top
              horizontal: "right"
              // Set horizontal alignment to right
            },
            transformOrigin: {
              vertical: "top",
              // Keep vertical alignment at the top
              horizontal: "left"
              // Set horizontal alignment to left
            }
          }
        ),
        /* @__PURE__ */ l.jsx(
          Sa,
          {
            open: p,
            onClose: () => {
              m(!1);
            },
            anchorEl: x.current,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            children: /* @__PURE__ */ l.jsxs(G0, { children: [
              /* @__PURE__ */ l.jsxs(
                Gr,
                {
                  onClick: () => {
                    a($t.Thin), m(!1);
                  },
                  $checked: s === $t.Thin,
                  children: [
                    /* @__PURE__ */ l.jsx(Yr, { children: "Thin" }),
                    /* @__PURE__ */ l.jsx(z0, {})
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs(
                Gr,
                {
                  onClick: () => {
                    a($t.Medium), m(!1);
                  },
                  $checked: s === $t.Medium,
                  children: [
                    /* @__PURE__ */ l.jsx(Yr, { children: "Medium" }),
                    /* @__PURE__ */ l.jsx(L0, {})
                  ]
                }
              ),
              /* @__PURE__ */ l.jsxs(
                Gr,
                {
                  onClick: () => {
                    a($t.Thick), m(!1);
                  },
                  $checked: s === $t.Thick,
                  children: [
                    /* @__PURE__ */ l.jsx(Yr, { children: "Thick" }),
                    /* @__PURE__ */ l.jsx(V0, {})
                  ]
                }
              )
            ] })
          }
        )
      ] })
    }
  );
}, Gr = ne("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ $checked: e }) => e ? P.palette.grey[200] : "inherit;"};
  &:hover {
    border: 1px solid ${P.palette.grey[200]};
  }
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid white;
`, z0 = ne("div")`
  width: 68px;
  border-top: 1px solid ${P.palette.grey[900]};
`, L0 = ne("div")`
  width: 68px;
  border-top: 2px solid ${P.palette.grey[900]};
`, V0 = ne("div")`
  width: 68px;
  border-top: 3px solid ${P.palette.grey[900]};
`, H0 = ne("div")`
  width: 100%;
  margin: auto;
  border-top: 1px solid ${P.palette.grey[200]};
`, W0 = ne("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
`, U0 = ne("div")`
  display: flex;
  flex-direction: column;
  padding: 4px;
`, Ca = ne("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`, Ea = ne("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  gap: 8px;
  &:hover {
    background-color: ${P.palette.grey[200]};
    border-top-color: ${() => P.palette.grey[200]};
  }
  cursor: pointer;
  padding: 8px;
  svg {
    width: 16px;
    height: 16px;
  }
`, G0 = ne("div")`
  background: ${({ theme: e }) => e.palette.background.default};
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`, Sa = ne(Ni)`
  .MuiPopover-paper {
    border-radius: 8px;
    border: 0px solid ${({ theme: e }) => e.palette.background.default};
    box-shadow: 1px 2px 8px rgba(139, 143, 173, 0.5);
  }
  .MuiPopover-padding {
    padding: 0px;
  }
  .MuiList-padding {
    padding: 0px;
  }
  font-family: ${({ theme: e }) => e.typography.fontFamily};
  font-size: 12px;
`, Y0 = ne("div")`
  background: ${({ theme: e }) => e.palette.background.default};
  display: flex;
  flex-direction: column;
`, Yr = ne("div")`
  width: 70px;
`, pt = ne("button")(
  ({ disabled: e, $pressed: t, $underlinedColor: n }) => {
    const o = {
      width: "24px",
      height: "24px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      // fontSize: "26px",
      border: `0px solid ${P.palette.common.white}`,
      borderRadius: "4px",
      cursor: "pointer",
      padding: "0px"
    };
    return e ? {
      ...o,
      color: P.palette.grey[600],
      cursor: "default"
    } : {
      ...o,
      borderTop: n ? `3px solid ${P.palette.common.white}` : "none",
      borderBottom: n ? `3px solid ${n}` : "none",
      color: `${P.palette.grey[900]}`,
      backgroundColor: t ? P.palette.grey[200] : "inherit",
      "&:hover": {
        outline: `1px solid ${P.palette.grey[200]}`,
        borderTopColor: P.palette.grey[200]
      },
      svg: {
        width: "16px",
        height: "16px"
      }
    };
  }
), _a = ne(bi)`
  width: 16px;
  height: 16px;
`, q0 = (e) => {
  const { t } = Ve(), [n, o] = oe(e.numFmt), r = () => {
    e.onClose();
  }, i = (s) => {
    e.onChange(s), e.onClose();
  };
  return /* @__PURE__ */ l.jsxs(
    Va,
    {
      open: e.open,
      onClose: e.onClose,
      PaperProps: {
        style: { minWidth: "280px" }
      },
      children: [
        /* @__PURE__ */ l.jsxs(K0, { children: [
          t("num_fmt.title"),
          /* @__PURE__ */ l.jsx(
            X0,
            {
              onClick: r,
              title: t("num_fmt.close"),
              tabIndex: 0,
              onKeyDown: (s) => {
                s.key === "Enter" && e.onClose();
              },
              children: /* @__PURE__ */ l.jsx(Ho, {})
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(Z0, { children: /* @__PURE__ */ l.jsx(
          J0,
          {
            autoFocus: !0,
            defaultValue: e.numFmt,
            name: "format_code",
            onChange: (s) => o(s.target.value),
            onKeyDown: (s) => {
              s.stopPropagation(), s.key === "Enter" && (i(n), e.onClose());
            },
            spellCheck: "false",
            onClick: (s) => s.stopPropagation(),
            onFocus: (s) => s.target.select(),
            onPaste: (s) => s.stopPropagation(),
            onCopy: (s) => s.stopPropagation(),
            onCut: (s) => s.stopPropagation()
          }
        ) }),
        /* @__PURE__ */ l.jsx(Q0, { children: /* @__PURE__ */ l.jsxs(
          ex,
          {
            onClick: () => i(n),
            onKeyDown: (s) => {
              s.key === "Enter" && (i(n), e.onClose());
            },
            tabIndex: 0,
            children: [
              /* @__PURE__ */ l.jsx(
                Bt,
                {
                  style: { width: "16px", height: "16px", marginRight: "8px" }
                }
              ),
              t("num_fmt.save")
            ]
          }
        ) })
      ]
    }
  );
}, K0 = te("div")`
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter;
  padding: 0px 12px;
  justify-content: space-between;
  border-bottom: 1px solid ${P.palette.grey[300]};
`, X0 = te("div")`
  &:hover {
    background-color: ${P.palette.grey[50]};
  }
  display: flex;
  border-radius: 4px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    stroke-width: 1.5;
  }
`, Z0 = te("div")`
  font-size: 12px;
  margin: 12px;
`, J0 = te(xi)`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  & .MuiInputBase-input {
    font-size: 14px;
    padding: 10px;
    border: 1px solid ${P.palette.grey[300]};
    border-radius: 4px;
    color: ${P.palette.common.black};
    background-color: ${P.palette.common.white};
  }
  &:hover .MuiInputBase-input {
    border: 1px solid ${P.palette.grey[500]};
  }
`, Q0 = te("div")`
  color: #757575;
  display: flex;
  align-items: center;
  border-top: 1px solid ${P.palette.grey[300]};
  font-family: Inter;
  justify-content: flex-end;
  padding: 12px;
`, ex = te("div")`
  cursor: pointer;
  color: #ffffff;
  background: #f2994a;
  padding: 0px 10px;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-size: 14px;
  &:hover {
    background: #d68742;
  }
`;
function tx(e) {
  if (e === "general")
    return "#,##0.000";
  const t = e.replace(/\.0/g, ".00");
  return t.includes(".") ? t : t.includes("0") ? t.replace(/0/g, "0.0") : t.includes("#") ? t.replace(/#([^#,]|$)/g, "0.0$1") : e;
}
function nx(e) {
  if (e === "general")
    return "#,##0.0";
  let t = e.replace(/\.0/g, ".");
  return t = t.replace(/0\.([^0]|$)/, "0$1"), t;
}
var tt = /* @__PURE__ */ ((e) => (e.AUTO = "general", e.CURRENCY_EUR = '"€"#,##0.00', e.CURRENCY_USD = '"$"#,##0.00', e.CURRENCY_GBP = '"£"#,##0.00', e.PERCENTAGE = "0.00%", e))(tt || {});
const ox = (e) => {
  const { t } = Ve(), [n, o] = oe(!1), [r, i] = oe(!1), s = re(null), a = e.formatOptions, u = Oe(
    (j) => {
      e.onChange(j), o(!1);
    },
    [e.onChange]
  ), h = e.numFmt === tt.AUTO, p = e.numFmt === a.number_fmt, m = e.numFmt === tt.PERCENTAGE, d = e.numFmt === tt.CURRENCY_EUR, g = e.numFmt === tt.CURRENCY_USD, x = e.numFmt === tt.CURRENCY_GBP, f = e.numFmt === a.short_date, y = e.numFmt === a.long_date, S = !(h || p || m || d || g || x || f || y);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      ix,
      {
        onClick: () => o(!0),
        ref: s,
        children: e.children
      }
    ),
    /* @__PURE__ */ l.jsxs(
      rx,
      {
        open: n,
        onClose: () => o(!1),
        anchorEl: s.current,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        children: [
          /* @__PURE__ */ l.jsx(vt, { onClick: () => u(tt.AUTO), children: /* @__PURE__ */ l.jsxs(Ct, { children: [
            /* @__PURE__ */ l.jsx(wt, { $active: h }),
            t("toolbar.format_menu.auto")
          ] }) }),
          /* @__PURE__ */ l.jsx(Ao, {}),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(a.number_fmt),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: p }),
                  t("toolbar.format_menu.number")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: a.number_example })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(tt.PERCENTAGE),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: m }),
                  t("toolbar.format_menu.percentage")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: t("toolbar.format_menu.percentage_example") })
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(Ao, {}),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(tt.CURRENCY_EUR),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: d }),
                  t("toolbar.format_menu.currency_eur")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: t("toolbar.format_menu.currency_eur_example") })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(tt.CURRENCY_USD),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: g }),
                  t("toolbar.format_menu.currency_usd")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: t("toolbar.format_menu.currency_usd_example") })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(tt.CURRENCY_GBP),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: x }),
                  t("toolbar.format_menu.currency_gbp")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: t("toolbar.format_menu.currency_gbp_example") })
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(Ao, {}),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(a.short_date),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: f }),
                  t("toolbar.format_menu.date_short")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: a.short_date_example })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => u(a.long_date),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: y }),
                  t("toolbar.format_menu.date_long")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: a.long_date_example })
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(Ao, {}),
          /* @__PURE__ */ l.jsx(vt, { onClick: () => i(!0), children: /* @__PURE__ */ l.jsxs(Ct, { children: [
            /* @__PURE__ */ l.jsx(wt, { $active: S }),
            t("toolbar.format_menu.custom")
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      q0,
      {
        numFmt: e.numFmt,
        onChange: u,
        open: r,
        onClose: () => i(!1),
        onExited: e.onExited
      }
    )
  ] });
}, rx = X(so)`
  & .MuiPaper-root {
    border-radius: 8px;
    padding: 4px 0px;
    margin-left: -4px; // Starting with a small offset
  }
  & .MuiList-root {
    padding: 0;
  }
`, vt = X(nn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  width: calc(100% - 8px);
  min-width: 172px;
  margin: 0px 4px;
  border-radius: 4px;
  padding: 8px;
  height: 32px;
`, ix = X("div")`
  display: flex;
`, Ao = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid #eeeeee;
`, wt = X(Bt, {
  shouldForwardProp: (e) => e !== "$active"
})`
  width: 16px;
  height: 16px;
  color: ${(e) => e.$active ? "currentColor" : "transparent"};
  margin-right: 8px;
  flex-shrink: 0;
`, Ct = X("div")`
  color: #000;
  display: flex;
  align-items: center;
`, Wt = X("div")`
  color: #bdbdbd;
  margin-left: 20px;
`;
function sx(e) {
  const [t, n] = oe(!1), [o, r] = oe(!1), [i, s] = oe(!1), [a, u] = oe(!1), [h, p] = oe(!1), m = re(null), d = re(null), g = re(null), x = re(null), { t: f } = Ve(), { canEdit: y } = e, S = () => x.current?.scrollBy({ left: -200, behavior: "smooth" }), j = () => x.current?.scrollBy({ left: 200, behavior: "smooth" }), C = Oe(() => {
    if (!x.current) return;
    const { scrollLeft: E, scrollWidth: T, clientWidth: R } = x.current;
    u(E > 0), p(E < T - R);
  }, []);
  Ie(() => {
    const E = x.current;
    if (E)
      return C(), E.addEventListener("scroll", C), () => E.removeEventListener("scroll", C);
  }, [C]);
  let w;
  switch (e.formatOptions.currency) {
    case "EUR":
      w = /* @__PURE__ */ l.jsx(uu, {});
      break;
    case "USD":
      w = /* @__PURE__ */ l.jsx(cu, {});
      break;
    case "GBP":
      w = /* @__PURE__ */ l.jsx(lu, {});
      break;
  }
  return /* @__PURE__ */ l.jsxs(ax, { children: [
    a && /* @__PURE__ */ l.jsx(
      ge,
      {
        title: f("toolbar.scroll_left"),
        slotProps: {
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -8]
                }
              }
            ]
          }
        },
        children: /* @__PURE__ */ l.jsx(Ta, { $direction: "left", onClick: S, children: /* @__PURE__ */ l.jsx(Bc, {}) })
      }
    ),
    /* @__PURE__ */ l.jsxs(lx, { ref: x, children: [
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.undo"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onUndo,
            disabled: !e.canUndo,
            children: /* @__PURE__ */ l.jsx(zc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.redo"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onRedo,
            disabled: !e.canRedo,
            children: /* @__PURE__ */ l.jsx(Lc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.copy_styles"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onCopyStyles,
            children: /* @__PURE__ */ l.jsx(Vc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.clear_formatting"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onClearFormatting();
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Hc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.euro"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(
                e.formatOptions.currency_format
              );
            },
            disabled: !y,
            children: w
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.percentage"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(tt.PERCENTAGE);
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Wc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.decimal_places_decrease"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(
                nx(e.numFmt)
              );
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Uc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.decimal_places_increase"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(
                tx(e.numFmt)
              );
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Gc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(
          ox,
          {
            numFmt: e.numFmt,
            onChange: (E) => {
              e.onNumberFormatPicked(E);
            },
            onExited: () => {
            },
            anchorOrigin: {
              horizontal: 20,
              // Aligning the menu to the middle of FormatButton
              vertical: "bottom"
            },
            formatOptions: e.formatOptions,
            children: /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.format_number"), children: /* @__PURE__ */ l.jsxs(
              xe,
              {
                type: "button",
                $pressed: !1,
                disabled: !y,
                sx: {
                  width: "40px",
                  // Keep in sync with anchorOrigin in FormatMenu above
                  padding: "0px 4px"
                },
                children: [
                  "123",
                  /* @__PURE__ */ l.jsx(Vo, {})
                ]
              }
            ) })
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.decrease_font_size"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !y,
            onClick: () => {
              e.onIncreaseFontSize(-1);
            },
            children: /* @__PURE__ */ l.jsx(Yc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(cx, { children: e.fontSize }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.increase_font_size"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !y,
            onClick: () => {
              e.onIncreaseFontSize(1);
            },
            children: /* @__PURE__ */ l.jsx(It, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.bold"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.bold,
            onClick: () => e.onToggleBold(!e.bold),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(qc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.italic"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.italic,
            onClick: () => e.onToggleItalic(!e.italic),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Kc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.underline"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.underline,
            onClick: () => e.onToggleUnderline(!e.underline),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Xc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.strike_through"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.strike,
            onClick: () => e.onToggleStrike(!e.strike),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Zc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.font_color"), children: /* @__PURE__ */ l.jsxs(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !y,
            ref: m,
            onClick: () => n(!0),
            children: [
              /* @__PURE__ */ l.jsx(Jc, {}),
              /* @__PURE__ */ l.jsx(Ra, { color: e.fontColor })
            ]
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.fill_color"), children: /* @__PURE__ */ l.jsxs(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !y,
            ref: d,
            onClick: () => r(!0),
            children: [
              /* @__PURE__ */ l.jsx(Ya, {}),
              /* @__PURE__ */ l.jsx(Ra, { color: e.fillColor })
            ]
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.borders.title"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => s(!0),
            ref: g,
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Ga, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.align_left"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.horizontalAlign === "left",
            onClick: () => e.onToggleHorizontalAlign(
              e.horizontalAlign === "left" ? "general" : "left"
            ),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Qc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.align_center"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.horizontalAlign === "center",
            onClick: () => e.onToggleHorizontalAlign(
              e.horizontalAlign === "center" ? "general" : "center"
            ),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(eu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.align_right"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.horizontalAlign === "right",
            onClick: () => e.onToggleHorizontalAlign(
              e.horizontalAlign === "right" ? "general" : "right"
            ),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(tu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.vertical_align_top"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "top",
            onClick: () => e.onToggleVerticalAlign("top"),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(nu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.vertical_align_middle"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "center",
            onClick: () => e.onToggleVerticalAlign("center"),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(of, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.vertical_align_bottom"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "bottom",
            onClick: () => e.onToggleVerticalAlign("bottom"),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(ou, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.wrap_text"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.wrapText === !0,
            onClick: () => {
              e.onToggleWrapText(!e.wrapText);
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(ru, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.show_hide_grid_lines"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => e.onToggleShowGridLines(!e.showGridLines),
            disabled: !y,
            children: e.showGridLines ? /* @__PURE__ */ l.jsx(iu, {}) : /* @__PURE__ */ l.jsx(su, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: f("toolbar.selected_png"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onDownloadPNG();
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(au, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(
        er,
        {
          color: e.fontColor,
          defaultColor: "#000000",
          title: f("color_picker.default"),
          onChange: (E) => {
            e.onTextColorPicked(E), n(!1);
          },
          onClose: () => {
            n(!1);
          },
          anchorEl: m,
          open: t,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" }
        }
      ),
      /* @__PURE__ */ l.jsx(
        er,
        {
          color: e.fillColor,
          defaultColor: "",
          title: f("color_picker.default"),
          onChange: (E) => {
            E !== null && e.onFillColorPicked(E), r(!1);
          },
          onClose: () => {
            r(!1);
          },
          anchorEl: d,
          open: o,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" }
        }
      ),
      /* @__PURE__ */ l.jsx(
        B0,
        {
          onChange: (E) => {
            e.onBorderChanged(E);
          },
          onClose: () => {
            s(!1);
          },
          anchorEl: g,
          open: i
        }
      )
    ] }),
    h && /* @__PURE__ */ l.jsx(
      ge,
      {
        title: f("toolbar.scroll_right"),
        slotProps: {
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -8]
                }
              }
            ]
          }
        },
        children: /* @__PURE__ */ l.jsx(Ta, { $direction: "right", onClick: j, children: /* @__PURE__ */ l.jsx(bi, {}) })
      }
    )
  ] });
}
const ax = ne("div")`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme: e }) => e.palette.background.paper};
  height: ${Yo}px;
  border-bottom: 1px solid ${({ theme: e }) => e.palette.grey[300]};
  border-radius: 4px 4px 0px 0px;
`, lx = ne("div")`
  display: flex;
  flex: 1;
  align-items: center;
  overflow-x: auto;
  padding: 0px 12px;
  gap: 4px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`, xe = ne("button", {
  shouldForwardProp: (e) => e !== "$pressed"
})(({ disabled: e, $pressed: t }) => {
  const n = {
    width: "24px",
    minWidth: "24px",
    height: "24px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    border: `0px solid ${P.palette.common.white}`,
    borderRadius: "4px",
    transition: "all 0.2s",
    outline: `1px solid ${P.palette.common.white}`,
    cursor: "pointer",
    backgroundColor: "white",
    padding: "0px",
    position: "relative",
    svg: {
      width: "16px",
      height: "16px"
    }
  };
  return e ? {
    ...n,
    color: P.palette.grey[400],
    cursor: "default"
  } : {
    ...n,
    color: P.palette.grey[900],
    backgroundColor: t ? P.palette.grey[300] : P.palette.common.white,
    "&:hover": {
      transition: "all 0.2s",
      outline: `1px solid ${P.palette.grey[200]}`
    },
    "&:active": {
      backgroundColor: P.palette.grey[300],
      outline: `1px solid ${P.palette.grey[300]}`
    }
  };
}), Ra = ne("div")(({ color: e }) => ({
  height: "3px",
  width: "16px",
  position: "absolute",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: e
})), Ut = ne("div")({
  minWidth: "1px",
  height: "16px",
  backgroundColor: P.palette.grey[300],
  margin: "0px 8px"
}), cx = ne("div")({
  width: "24px",
  height: "24px",
  lineHeight: "24px",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "11px",
  border: `1px solid ${P.palette.grey[300]}`,
  borderRadius: "4px",
  minWidth: "24px"
}), Pt = ne("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px"
}), Ta = ne("button", {
  shouldForwardProp: (e) => e !== "$direction"
})(({ $direction: e }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [e]: "0px",
  zIndex: 10,
  width: "24px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  border: e === "left" ? `none; border-right: 1px solid ${P.palette.grey[300]};` : `none; border-left: 1px solid ${P.palette.grey[300]};`,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: P.palette.grey[100]
  },
  svg: {
    width: "16px",
    height: "16px"
  }
})), tr = /* @__PURE__ */ k.createContext({});
process.env.NODE_ENV !== "production" && (tr.displayName = "ListContext");
function ux(e) {
  return ct("MuiList", e);
}
Ye("MuiList", ["root", "padding", "dense", "subheader"]);
const dx = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: r
  } = e;
  return xt({
    root: ["root", !n && "padding", o && "dense", r && "subheader"]
  }, ux, t);
}, px = ne("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), ic = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiList"
  }), {
    children: r,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: u = !1,
    subheader: h,
    ...p
  } = o, m = k.useMemo(() => ({
    dense: a
  }), [a]), d = {
    ...o,
    component: s,
    dense: a,
    disablePadding: u
  }, g = dx(d);
  return /* @__PURE__ */ l.jsx(tr.Provider, {
    value: m,
    children: /* @__PURE__ */ l.jsxs(px, {
      as: s,
      className: _e(g.root, i),
      ref: n,
      ownerState: d,
      ...p,
      children: [h, r]
    })
  });
});
process.env.NODE_ENV !== "production" && (ic.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: c.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: c.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
function qr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ka(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function sc(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function In(e, t, n, o, r, i) {
  let s = !1, a = r(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const u = o ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !sc(a, i) || u)
      a = r(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const ac = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: r = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: u = !1,
    disableListWrap: h = !1,
    onKeyDown: p,
    variant: m = "selectedMenu",
    ...d
  } = t, g = k.useRef(null), x = k.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Qt(() => {
    r && g.current.focus();
  }, [r]), k.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (C, {
      direction: w
    }) => {
      const E = !g.current.style.width;
      if (C.clientHeight < g.current.clientHeight && E) {
        const T = `${Kl(tn(C))}px`;
        g.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = T, g.current.style.width = `calc(100% + ${T})`;
      }
      return g.current;
    }
  }), []);
  const f = (C) => {
    const w = g.current, E = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      p && p(C);
      return;
    }
    const R = Vn(it(w));
    if (E === "ArrowDown")
      C.preventDefault(), In(w, R, h, u, qr);
    else if (E === "ArrowUp")
      C.preventDefault(), In(w, R, h, u, ka);
    else if (E === "Home")
      C.preventDefault(), In(w, null, h, u, qr);
    else if (E === "End")
      C.preventDefault(), In(w, null, h, u, ka);
    else if (E.length === 1) {
      const F = x.current, I = E.toLowerCase(), H = performance.now();
      F.keys.length > 0 && (H - F.lastTime > 500 ? (F.keys = [], F.repeating = !0, F.previousKeyMatched = !0) : F.repeating && I !== F.keys[0] && (F.repeating = !1)), F.lastTime = H, F.keys.push(I);
      const B = R && !F.repeating && sc(R, F);
      F.previousKeyMatched && (B || In(w, R, !1, u, qr, F)) ? C.preventDefault() : F.previousKeyMatched = !1;
    }
    p && p(C);
  }, y = Ge(g, n);
  let S = -1;
  k.Children.forEach(s, (C, w) => {
    if (!/* @__PURE__ */ k.isValidElement(C)) {
      S === w && (S += 1, S >= s.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && gn.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (m === "selectedMenu" && C.props.selected || S === -1) && (S = w), S === w && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (S += 1, S >= s.length && (S = -1));
  });
  const j = k.Children.map(s, (C, w) => {
    if (w === S) {
      const E = {};
      return i && (E.autoFocus = !0), C.props.tabIndex === void 0 && m === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ k.cloneElement(C, E);
    }
    return C;
  });
  return /* @__PURE__ */ l.jsx(ic, {
    role: "menu",
    ref: y,
    className: a,
    onKeyDown: f,
    tabIndex: r ? 0 : -1,
    ...d,
    children: j
  });
});
process.env.NODE_ENV !== "production" && (ac.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: c.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: c.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: c.bool,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
function fx(e) {
  return ct("MuiMenu", e);
}
Ye("MuiMenu", ["root", "paper", "list"]);
const hx = {
  vertical: "top",
  horizontal: "right"
}, mx = {
  vertical: "top",
  horizontal: "left"
}, gx = (e) => {
  const {
    classes: t
  } = e;
  return xt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, fx, t);
}, xx = ne(Ni, {
  shouldForwardProp: (e) => Ti(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), bx = ne(ec, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), yx = ne(ac, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), lc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: r = !0,
    children: i,
    className: s,
    disableAutoFocusItem: a = !1,
    MenuListProps: u = {},
    onClose: h,
    open: p,
    PaperProps: m = {},
    PopoverClasses: d,
    transitionDuration: g = "auto",
    TransitionProps: {
      onEntering: x,
      ...f
    } = {},
    variant: y = "selectedMenu",
    slots: S = {},
    slotProps: j = {},
    ...C
  } = o, w = _i(), E = {
    ...o,
    autoFocus: r,
    disableAutoFocusItem: a,
    MenuListProps: u,
    onEntering: x,
    PaperProps: m,
    transitionDuration: g,
    TransitionProps: f,
    variant: y
  }, T = gx(E), R = r && !a && p, F = k.useRef(null), I = (K, O) => {
    F.current && F.current.adjustStyleForScrollbar(K, {
      direction: w ? "rtl" : "ltr"
    }), x && x(K, O);
  }, H = (K) => {
    K.key === "Tab" && (K.preventDefault(), h && h(K, "tabKeyDown"));
  };
  let B = -1;
  k.Children.map(i, (K, O) => {
    /* @__PURE__ */ k.isValidElement(K) && (process.env.NODE_ENV !== "production" && gn.isFragment(K) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), K.props.disabled || (y === "selectedMenu" && K.props.selected || B === -1) && (B = O));
  });
  const v = {
    slots: S,
    slotProps: {
      list: u,
      transition: f,
      paper: m,
      ...j
    }
  }, D = Hl({
    elementType: S.root,
    externalSlotProps: j.root,
    ownerState: E,
    className: [T.root, s]
  }), [M, A] = Xe("paper", {
    className: T.paper,
    elementType: bx,
    externalForwardedProps: v,
    shouldForwardComponentProp: !0,
    ownerState: E
  }), [_, U] = Xe("list", {
    className: _e(T.list, u.className),
    elementType: yx,
    shouldForwardComponentProp: !0,
    externalForwardedProps: v,
    getSlotProps: (K) => ({
      ...K,
      onKeyDown: (O) => {
        H(O), K.onKeyDown?.(O);
      }
    }),
    ownerState: E
  }), J = typeof v.slotProps.transition == "function" ? v.slotProps.transition(E) : v.slotProps.transition;
  return /* @__PURE__ */ l.jsx(xx, {
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? hx : mx,
    slots: {
      root: S.root,
      paper: M,
      backdrop: S.backdrop,
      ...S.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: S.transition
      }
    },
    slotProps: {
      root: D,
      paper: A,
      backdrop: typeof j.backdrop == "function" ? j.backdrop(E) : j.backdrop,
      transition: {
        ...J,
        onEntering: (...K) => {
          I(...K), J?.onEntering?.(...K);
        }
      }
    },
    open: p,
    ref: n,
    transitionDuration: g,
    ownerState: E,
    ...C,
    classes: d,
    children: /* @__PURE__ */ l.jsx(_, {
      actions: F,
      autoFocus: r && (B === -1 || a),
      autoFocusItem: R,
      variant: y,
      ...U,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: c.oneOfType([Tt, c.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: c.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: c.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: c.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: c.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: c.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    list: c.oneOfType([c.func, c.object]),
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object]),
    transition: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    list: c.elementType,
    paper: c.elementType,
    root: c.elementType,
    transition: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: c.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
class nr {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new nr();
  }
  static use() {
    const t = Sl(nr.create).current, [n, o] = k.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, k.useEffect(t.mountEffect, [n]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = wx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function vx() {
  return nr.use();
}
function wx() {
  let e, t;
  const n = new Promise((o, r) => {
    e = o, t = r;
  });
  return n.resolve = e, n.reject = t, n;
}
function cc(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: r,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: u,
    timeout: h
  } = e, [p, m] = k.useState(!1), d = _e(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + r
  }, x = _e(n.child, p && n.childLeaving, o && n.childPulsate);
  return !a && !p && m(!0), k.useEffect(() => {
    if (!a && u != null) {
      const f = setTimeout(u, h);
      return () => {
        clearTimeout(f);
      };
    }
  }, [u, a, h]), /* @__PURE__ */ l.jsx("span", {
    className: d,
    style: g,
    children: /* @__PURE__ */ l.jsx("span", {
      className: x
    })
  });
}
process.env.NODE_ENV !== "production" && (cc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object.isRequired,
  className: c.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: c.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: c.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: c.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: c.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: c.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: c.number,
  /**
   * exit delay
   */
  timeout: c.number.isRequired
});
const nt = Ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), mi = 550, Cx = 80, Ex = yi`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Sx = yi`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, _x = yi`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Rx = ne("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Tx = ne(cc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${nt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ex};
    animation-duration: ${mi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${nt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${nt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${nt.childLeaving} {
    opacity: 0;
    animation-name: ${Sx};
    animation-duration: ${mi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${nt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${_x};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, uc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: r = !1,
    classes: i = {},
    className: s,
    ...a
  } = o, [u, h] = k.useState([]), p = k.useRef(0), m = k.useRef(null);
  k.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [u]);
  const d = k.useRef(!1), g = fn(), x = k.useRef(null), f = k.useRef(null), y = k.useCallback((w) => {
    const {
      pulsate: E,
      rippleX: T,
      rippleY: R,
      rippleSize: F,
      cb: I
    } = w;
    h((H) => [...H, /* @__PURE__ */ l.jsx(Tx, {
      classes: {
        ripple: _e(i.ripple, nt.ripple),
        rippleVisible: _e(i.rippleVisible, nt.rippleVisible),
        ripplePulsate: _e(i.ripplePulsate, nt.ripplePulsate),
        child: _e(i.child, nt.child),
        childLeaving: _e(i.childLeaving, nt.childLeaving),
        childPulsate: _e(i.childPulsate, nt.childPulsate)
      },
      timeout: mi,
      pulsate: E,
      rippleX: T,
      rippleY: R,
      rippleSize: F
    }, p.current)]), p.current += 1, m.current = I;
  }, [i]), S = k.useCallback((w = {}, E = {}, T = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: F = r || E.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = E;
    if (w?.type === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    w?.type === "touchstart" && (d.current = !0);
    const H = I ? null : f.current, B = H ? H.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let v, D, M;
    if (F || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      v = Math.round(B.width / 2), D = Math.round(B.height / 2);
    else {
      const {
        clientX: A,
        clientY: _
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      v = Math.round(A - B.left), D = Math.round(_ - B.top);
    }
    if (F)
      M = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const A = Math.max(Math.abs((H ? H.clientWidth : 0) - v), v) * 2 + 2, _ = Math.max(Math.abs((H ? H.clientHeight : 0) - D), D) * 2 + 2;
      M = Math.sqrt(A ** 2 + _ ** 2);
    }
    w?.touches ? x.current === null && (x.current = () => {
      y({
        pulsate: R,
        rippleX: v,
        rippleY: D,
        rippleSize: M,
        cb: T
      });
    }, g.start(Cx, () => {
      x.current && (x.current(), x.current = null);
    })) : y({
      pulsate: R,
      rippleX: v,
      rippleY: D,
      rippleSize: M,
      cb: T
    });
  }, [r, y, g]), j = k.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), C = k.useCallback((w, E) => {
    if (g.clear(), w?.type === "touchend" && x.current) {
      x.current(), x.current = null, g.start(0, () => {
        C(w, E);
      });
      return;
    }
    x.current = null, h((T) => T.length > 0 ? T.slice(1) : T), m.current = E;
  }, [g]);
  return k.useImperativeHandle(n, () => ({
    pulsate: j,
    start: S,
    stop: C
  }), [j, S, C]), /* @__PURE__ */ l.jsx(Rx, {
    className: _e(nt.root, i.root, s),
    ref: f,
    ...a,
    children: /* @__PURE__ */ l.jsx(ji, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string
});
function kx(e) {
  return ct("MuiButtonBase", e);
}
const jx = Ye("MuiButtonBase", ["root", "disabled", "focusVisible"]), $x = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: r
  } = e, s = xt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, kx, r);
  return n && o && (s.root += ` ${o}`), s;
}, Px = ne("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${jx.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), dc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: r,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: u = "button",
    disabled: h = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: d = !1,
    focusVisibleClassName: g,
    LinkComponent: x = "a",
    onBlur: f,
    onClick: y,
    onContextMenu: S,
    onDragLeave: j,
    onFocus: C,
    onFocusVisible: w,
    onKeyDown: E,
    onKeyUp: T,
    onMouseDown: R,
    onMouseLeave: F,
    onMouseUp: I,
    onTouchEnd: H,
    onTouchMove: B,
    onTouchStart: v,
    tabIndex: D = 0,
    TouchRippleProps: M,
    touchRippleRef: A,
    type: _,
    ...U
  } = o, J = k.useRef(null), K = vx(), O = Ge(K.ref, A), [b, $] = k.useState(!1);
  h && b && $(!1), k.useImperativeHandle(r, () => ({
    focusVisible: () => {
      $(!0), J.current.focus();
    }
  }), []);
  const z = K.shouldMount && !p && !h;
  k.useEffect(() => {
    b && d && !p && K.pulsate();
  }, [p, d, b, K]);
  const N = Et(K, "start", R, m), q = Et(K, "stop", S, m), G = Et(K, "stop", j, m), W = Et(K, "stop", I, m), Z = Et(K, "stop", (se) => {
    b && se.preventDefault(), F && F(se);
  }, m), Q = Et(K, "start", v, m), Y = Et(K, "stop", H, m), ee = Et(K, "stop", B, m), V = Et(K, "stop", (se) => {
    qo(se.target) || $(!1), f && f(se);
  }, !1), ie = Dt((se) => {
    J.current || (J.current = se.currentTarget), qo(se.target) && ($(!0), w && w(se)), C && C(se);
  }), ue = () => {
    const se = J.current;
    return u && u !== "button" && !(se.tagName === "A" && se.href);
  }, ce = Dt((se) => {
    d && !se.repeat && b && se.key === " " && K.stop(se, () => {
      K.start(se);
    }), se.target === se.currentTarget && ue() && se.key === " " && se.preventDefault(), E && E(se), se.target === se.currentTarget && ue() && se.key === "Enter" && !h && (se.preventDefault(), y && y(se));
  }), Ne = Dt((se) => {
    d && se.key === " " && b && !se.defaultPrevented && K.stop(se, () => {
      K.pulsate(se);
    }), T && T(se), y && se.target === se.currentTarget && ue() && se.key === " " && !se.defaultPrevented && y(se);
  });
  let $e = u;
  $e === "button" && (U.href || U.to) && ($e = x);
  const De = {};
  if ($e === "button") {
    const se = !!U.formAction;
    De.type = _ === void 0 && !se ? "button" : _, De.disabled = h;
  } else
    !U.href && !U.to && (De.role = "button"), h && (De["aria-disabled"] = h);
  const Be = Ge(n, J), ze = {
    ...o,
    centerRipple: i,
    component: u,
    disabled: h,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: d,
    tabIndex: D,
    focusVisible: b
  }, Pe = $x(ze);
  return /* @__PURE__ */ l.jsxs(Px, {
    as: $e,
    className: _e(Pe.root, a),
    ownerState: ze,
    onBlur: V,
    onClick: y,
    onContextMenu: q,
    onFocus: ie,
    onKeyDown: ce,
    onKeyUp: Ne,
    onMouseDown: N,
    onMouseLeave: Z,
    onMouseUp: W,
    onDragLeave: G,
    onTouchEnd: Y,
    onTouchMove: ee,
    onTouchStart: Q,
    ref: Be,
    tabIndex: h ? -1 : D,
    type: _,
    ...De,
    ...U,
    children: [s, z ? /* @__PURE__ */ l.jsx(uc, {
      ref: O,
      center: i,
      ...M
    }) : null]
  });
});
function Et(e, t, n, o = !1) {
  return Dt((r) => (n && n(r), o || e[t](r), !0));
}
process.env.NODE_ENV !== "production" && (dc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: yr,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: c.bool,
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ul,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: c.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: c.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: c.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: c.string,
  /**
   * @ignore
   */
  formAction: c.oneOfType([c.func, c.string]),
  /**
   * @ignore
   */
  href: c.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: c.elementType,
  /**
   * @ignore
   */
  onBlur: c.func,
  /**
   * @ignore
   */
  onClick: c.func,
  /**
   * @ignore
   */
  onContextMenu: c.func,
  /**
   * @ignore
   */
  onDragLeave: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: c.func,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * @ignore
   */
  onKeyUp: c.func,
  /**
   * @ignore
   */
  onMouseDown: c.func,
  /**
   * @ignore
   */
  onMouseLeave: c.func,
  /**
   * @ignore
   */
  onMouseUp: c.func,
  /**
   * @ignore
   */
  onTouchEnd: c.func,
  /**
   * @ignore
   */
  onTouchMove: c.func,
  /**
   * @ignore
   */
  onTouchStart: c.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * @default 0
   */
  tabIndex: c.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: c.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: c.oneOfType([c.func, c.shape({
    current: c.shape({
      pulsate: c.func.isRequired,
      start: c.func.isRequired,
      stop: c.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: c.oneOfType([c.oneOf(["button", "reset", "submit"]), c.string])
});
const ja = Ye("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), $a = Ye("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Pa = Ye("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Ox(e) {
  return ct("MuiMenuItem", e);
}
const Fn = Ye("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Mx = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Ax = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: r,
    selected: i,
    classes: s
  } = e, u = xt({
    root: ["root", n && "dense", t && "disabled", !r && "gutters", o && "divider", i && "selected"]
  }, Ox, s);
  return {
    ...s,
    ...u
  };
}, Dx = ne(dc, {
  shouldForwardProp: (e) => Ti(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Mx
})(Sn(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Fn.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Fn.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Fn.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Fn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Fn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${ja.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${ja.inset}`]: {
    marginLeft: 52
  },
  [`& .${Pa.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Pa.inset}`]: {
    paddingLeft: 36
  },
  [`& .${$a.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${$a.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), pc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: r = !1,
    component: i = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: u = !1,
    focusVisibleClassName: h,
    role: p = "menuitem",
    tabIndex: m,
    className: d,
    ...g
  } = o, x = k.useContext(tr), f = k.useMemo(() => ({
    dense: s || x.dense || !1,
    disableGutters: u
  }), [x.dense, s, u]), y = k.useRef(null);
  Qt(() => {
    r && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [r]);
  const S = {
    ...o,
    dense: f.dense,
    divider: a,
    disableGutters: u
  }, j = Ax(o), C = Ge(y, n);
  let w;
  return o.disabled || (w = m !== void 0 ? m : -1), /* @__PURE__ */ l.jsx(tr.Provider, {
    value: f,
    children: /* @__PURE__ */ l.jsx(Dx, {
      ref: C,
      role: p,
      tabIndex: w,
      component: i,
      focusVisibleClassName: _e(j.focusVisible, h),
      className: _e(j.root, d),
      ...g,
      ownerState: S,
      classes: j
    })
  });
});
process.env.NODE_ENV !== "production" && (pc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: c.bool,
  /**
   * @ignore
   */
  disabled: c.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: c.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: c.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: c.string,
  /**
   * @ignore
   */
  role: c.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * @default 0
   */
  tabIndex: c.number
});
function Ix(e) {
  return ["#FFF", "#FFFFFF"].includes(e);
}
const Fx = (e) => {
  const {
    open: t,
    onClose: n,
    anchorEl: o,
    onSheetSelected: r,
    sheetOptionsList: i,
    selectedIndex: s
  } = e, a = i.some((u) => !Ix(u.color));
  return /* @__PURE__ */ l.jsx(
    Nx,
    {
      open: t,
      onClose: n,
      anchorEl: o,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "bottom",
        horizontal: 6
      },
      children: i.map((u, h) => /* @__PURE__ */ l.jsxs(
        Bx,
        {
          onClick: () => r(h),
          children: [
            h === s ? /* @__PURE__ */ l.jsx(
              Bt,
              {
                style: { width: "16px", height: "16px", marginRight: "8px" }
              }
            ) : /* @__PURE__ */ l.jsx(
              "div",
              {
                style: { width: "16px", height: "16px", marginRight: "8px" }
              }
            ),
            a && /* @__PURE__ */ l.jsx(zx, { style: { backgroundColor: u.color } }),
            /* @__PURE__ */ l.jsx(
              Lx,
              {
                style: {
                  fontWeight: h === s ? "bold" : "normal",
                  color: u.state === "visible" ? "#333" : "#888"
                },
                children: u.name
              }
            )
          ]
        },
        u.sheetId
      ))
    }
  );
}, Nx = X(lc)({
  "& .MuiPaper-root": {
    borderRadius: 8,
    padding: 4
  },
  "& .MuiList-padding": {
    padding: 0
  }
}), Bx = X(pc)({
  padding: 8,
  borderRadius: 4
}), zx = X("div")`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin-right: 8px;
`, Lx = X("div")`
  font-size: 12px;
  color: #333;
`;
function Vx({
  open: e,
  onClose: t,
  onDelete: n,
  sheetName: o
}) {
  const { t: r } = Ve();
  return /* @__PURE__ */ l.jsx(Va, { open: e, onClose: t, children: /* @__PURE__ */ l.jsxs(Hx, { children: [
    /* @__PURE__ */ l.jsx(Wx, { children: /* @__PURE__ */ l.jsx(Jt, {}) }),
    /* @__PURE__ */ l.jsx(Ux, { children: r("sheet_delete.title") }),
    /* @__PURE__ */ l.jsx(Gx, { children: r("sheet_delete.message", {
      sheetName: o
    }) }),
    /* @__PURE__ */ l.jsxs(Yx, { children: [
      /* @__PURE__ */ l.jsx(qx, { onClick: n, autoFocus: !0, children: r("sheet_delete.confirm") }),
      /* @__PURE__ */ l.jsx(Kx, { onClick: t, children: r("sheet_delete.cancel") })
    ] })
  ] }) });
}
const Hx = te.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px ${P.palette.common.black}1A;
  width: 280px;
  max-width: calc(100% - 40px);
  z-index: 50;
  font-family: "Inter", sans-serif;
`, Wx = te.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${P.palette.error.main}1A;
  margin: 12px auto 8px auto;
  color: ${P.palette.error.main};
  svg {
    width: 16px;
    height: 16px;
  }
`, Ux = te.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${P.palette.grey[900]};
  text-align: center;
`, Gx = te.p`
  margin: 0;
  text-align: center;
  color: ${P.palette.grey[900]};
  font-size: 12px;
`, Yx = te.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  width: 100%;
`, qx = te(lo)`
  background-color: ${P.palette.error.main};
  color: ${P.palette.common.white};
  text-transform: none;
  &:hover {
    background-color: ${P.palette.error.dark};
  }
`, Kx = te(lo)`
  background-color: ${P.palette.grey[200]};
  color: ${P.palette.grey[700]};
  text-transform: none;
  &:hover {
    background-color: ${P.palette.grey[300]};
  }
`;
function Xx(e) {
  const { name: t, color: n, selected: o, workbookState: r, onSelected: i } = e, [s, a] = oe(null), [u, h] = oe(!1), p = re(null), m = !!s, { t: d } = Ve(), g = (A) => {
    a(A.currentTarget);
  }, x = () => {
    a(null);
  }, f = (A) => {
    A.preventDefault(), A.stopPropagation(), i(), a(A.currentTarget);
  }, [y, S] = oe(!1), j = () => {
    S(!0);
  }, C = () => {
    S(!1);
  }, [w, E] = oe(!1), [T, R] = oe(t), F = re(null), I = re(null), [H, B] = oe(0);
  Ie(() => {
    w && F.current && (F.current.focus(), F.current.select());
  }, [w]), Ie(() => {
    w || R(t);
  }, [t, w]), gi(() => {
    if (w && I.current) {
      const A = I.current.offsetWidth;
      B(Math.max(A + 8, 6));
    }
  }, [T, w]);
  const v = () => {
    R(t), B(Math.max(t.length * 7 + 8, 6)), E(!0);
  }, D = () => {
    T.trim() !== "" ? (e.onRenamed(T.trim()), E(!1)) : (R(t), E(!1));
  }, M = () => {
    R(t), E(!1);
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      Jx,
      {
        $color: n,
        $selected: o,
        onClick: (A) => {
          w || i(), A.stopPropagation(), A.preventDefault();
        },
        onDoubleClick: (A) => {
          A.stopPropagation(), A.preventDefault(), v();
        },
        onContextMenu: f,
        onPointerDown: (A) => {
          const _ = r.getEditingCell();
          _ && pn(_.text, _.cursorStart) && (A.stopPropagation(), A.preventDefault());
        },
        ref: p,
        children: w ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(eb, { ref: I, children: T || " " }),
          /* @__PURE__ */ l.jsx(
            tb,
            {
              inputRef: F,
              value: T,
              onChange: (A) => R(A.target.value),
              style: { width: `${H}px` },
              onKeyDown: (A) => {
                A.key === "Enter" ? (A.preventDefault(), D()) : A.key === "Escape" && (A.preventDefault(), M()), A.stopPropagation();
              },
              onBlur: () => {
                D();
              },
              onClick: (A) => A.stopPropagation(),
              spellCheck: !1
            }
          ),
          /* @__PURE__ */ l.jsx(Oa, { disableRipple: !0, disabled: !0, $active: !1, children: /* @__PURE__ */ l.jsx(Vo, {}) })
        ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Qx, { children: t }),
          /* @__PURE__ */ l.jsx(Oa, { onClick: g, disableRipple: !0, $active: m, children: /* @__PURE__ */ l.jsx(Vo, {}) })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Zx,
      {
        anchorEl: s,
        open: m,
        onClose: x,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: 6
        },
        children: [
          /* @__PURE__ */ l.jsxs(
            zo,
            {
              onClick: () => {
                v(), x();
              },
              children: [
                /* @__PURE__ */ l.jsx(du, {}),
                d("sheet_tab.rename")
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            zo,
            {
              onClick: () => {
                h(!0), x();
              },
              children: [
                /* @__PURE__ */ l.jsx(Ya, {}),
                d("sheet_tab.change_color")
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            zo,
            {
              disabled: !e.canDelete,
              onClick: () => {
                e.onHideSheet(), x();
              },
              children: [
                /* @__PURE__ */ l.jsx(pu, {}),
                d("sheet_tab.hide_sheet")
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(nb, {}),
          /* @__PURE__ */ l.jsxs(
            ob,
            {
              disabled: !e.canDelete,
              onClick: () => {
                j(), x();
              },
              children: [
                /* @__PURE__ */ l.jsx(Jt, {}),
                d("sheet_tab.delete")
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(
      er,
      {
        color: n,
        defaultColor: "#FFFFFF",
        title: d("color_picker.no_fill"),
        onChange: (A) => {
          e.onColorChanged(A), h(!1);
        },
        onClose: () => {
          h(!1);
        },
        anchorEl: p,
        open: u,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "bottom", horizontal: "left" }
      }
    ),
    /* @__PURE__ */ l.jsx(
      Vx,
      {
        open: y,
        onClose: C,
        onDelete: () => {
          e.onDeleted(), C();
        },
        sheetName: t
      }
    )
  ] });
}
const Zx = X(so)`
  & .MuiPaper-root {
    border-radius: 8px;
    padding: 4px 0px;
    margin-left: -4px;
  }
  & .MuiList-root {
    padding: 0;
  }
`, zo = X(nn)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
  fontSize: "12px",
  width: "calc(100% - 8px)",
  margin: "0px 4px",
  borderRadius: "4px",
  padding: "8px",
  height: "32px",
  "&:disabled": {
    color: "#BDBDBD"
  },
  "& svg": {
    width: "16px",
    height: "16px",
    color: `${P.palette.grey[600]}`
  }
})), Jx = X("div")`
  display: flex;
  margin-right: 12px;
  border-bottom: 3px solid ${(e) => e.$color};
  line-height: 37px;
  padding: 0px 4px 0px 6px;
  align-items: center;
  cursor: pointer;
  min-width: 40px;
  font-weight: ${(e) => e.$selected ? 600 : 400};
  background-color: ${(e) => e.$selected ? `${P.palette.grey[50]}` : "transparent"};
  &:hover {
    background-color: ${P.palette.grey[50]}80;
  }
`, Oa = X(lo, {
  shouldForwardProp: (e) => e !== "$active"
})`
  width: 16px;
  height: 16px;
  min-width: 0px;
  padding: 0px;
  color: inherit;
  font-weight: inherit;
  border-radius: 4px;
  flex-shrink: 0;
  background-color: ${(e) => e.$active ? `${P.palette.grey[300]}` : "transparent"};
  &:hover {
    background-color: ${P.palette.grey[200]};
  }
  &:active {
    background-color: ${P.palette.grey[300]};
  }
  &:disabled {
    pointer-events: none;
  }
  svg {
    width: 14px;
    height: 14px;
  }
`, Qx = X("div")`
  font-size: 12px;
  margin-right: 5px;
  text-wrap: nowrap;
  user-select: none;
  width: 100%;
  text-align: center;
`, eb = X("span")`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  font-size: 12px;
  font-family: Inter;
  font-weight: inherit;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`, tb = X(Mc)`
  font-size: 12px;
  font-family: Inter;
  font-weight: inherit;
  min-width: 6px;
  margin-right: 2px;
  min-height: 100%;
  flex-grow: 1;
  & .MuiInputBase-input {
    font-family: Inter;
    background-color: ${P.palette.common.white};
    font-weight: inherit;
    padding: 6px 0px;
    border: 1px solid ${P.palette.primary.main};
    border-radius: 4px;
    color: ${P.palette.common.black};
    text-align: center;
    will-change: width;
    &:focus {
      border-color: ${P.palette.primary.main};
    }
  }

  &::before,
  &::after {
    display: none;
  }
`, nb = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid ${P.palette.grey[200]};
`, ob = X(zo)`
  color: ${P.palette.error.main};
  svg {
    color: ${P.palette.error.main};
  }
  &:hover {
    background-color: ${P.palette.error.main}1A;
  }
  &:active {
    background-color: ${P.palette.error.main}1A;
  }
`;
function rb(e) {
  const { t } = Ve(), { workbookState: n, onSheetSelected: o, sheets: r, selectedIndex: i } = e, [s, a] = oe(null), u = !!s, h = (d) => {
    a(d.currentTarget);
  }, p = () => {
    a(null);
  }, m = r.map((d, g) => ({
    state: d.state,
    index: g,
    name: d.name,
    color: d.color,
    sheetId: d.sheetId
  })).filter((d) => d.state === "visible");
  return /* @__PURE__ */ l.jsxs(ib, { children: [
    /* @__PURE__ */ l.jsxs(lb, { children: [
      /* @__PURE__ */ l.jsx(hn, { title: t("navigation.add_sheet"), children: /* @__PURE__ */ l.jsx(xe, { $pressed: !1, onClick: e.onAddBlankSheet, children: /* @__PURE__ */ l.jsx(It, {}) }) }),
      /* @__PURE__ */ l.jsx(hn, { title: t("navigation.sheet_list"), children: /* @__PURE__ */ l.jsx(xe, { onClick: h, $pressed: !1, children: /* @__PURE__ */ l.jsx(fu, {}) }) })
    ] }),
    /* @__PURE__ */ l.jsx(cb, {}),
    /* @__PURE__ */ l.jsx(sb, { children: /* @__PURE__ */ l.jsx(ab, { children: m.map((d) => /* @__PURE__ */ l.jsx(
      Xx,
      {
        name: d.name,
        color: d.color,
        selected: d.index === i,
        onSelected: () => o(d.index),
        onColorChanged: (g) => {
          e.onSheetColorChanged(g);
        },
        onRenamed: (g) => {
          e.onSheetRenamed(g);
        },
        canDelete: m.length > 1,
        onDeleted: () => {
          e.onSheetDeleted();
        },
        onHideSheet: e.onHideSheet,
        workbookState: n
      },
      d.sheetId
    )) }) }),
    /* @__PURE__ */ l.jsxs(ub, { children: [
      /* @__PURE__ */ l.jsx(hn, { title: t("regional_settings.open_regional_settings"), children: /* @__PURE__ */ l.jsxs(
        db,
        {
          $pressed: !1,
          onClick: () => {
            e.onOpenRegionalSettings();
          },
          children: [
            ri(e.model.getLocale()),
            /* @__PURE__ */ l.jsx(pb, {}),
            t(
              `regional_settings.language.display_language.${e.model.getLanguage()}`
            )
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx(
        fb,
        {
          onClick: () => window.open("https://www.ironcalc.com", "_blank"),
          children: /* @__PURE__ */ l.jsx(gf, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      Fx,
      {
        anchorEl: s,
        open: u,
        onClose: p,
        sheetOptionsList: r,
        onSheetSelected: (d) => {
          o(d), p();
        },
        selectedIndex: i
      }
    )
  ] });
}
const ib = X("div")`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  height: ${xl}px;
  align-items: center;
  padding: 0px;
  font-family: Inter;
  overflow: hidden;
  background-color: ${P.palette.common.white};
  border-top: 1px solid ${P.palette.grey[300]};
`, sb = X("div")`
  flex-grow: 2;
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;
  padding-left: 12px;
  display: flex;
  flex-direction: row;
  height: 100%;
`, ab = X("div")`
  display: flex;
`, lb = X("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 4px;
  padding: 0px 12px;
  @media (max-width: 769px) {
    padding: 0px 8px;
  }
`, cb = X("div")`
  height: 100%;
  width: 0px;
  @media (max-width: 769px) {
    border-right: 1px solid ${P.palette.grey[200]};
  }
`, ub = X("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${P.palette.primary.main};
  height: 100%;
  padding: 0px 8px;
  gap: 4px;
  flex-shrink: 0;
  width: auto;
  @media (max-width: 769px) {
    display: none;
  }
`, db = X(xe)`
  min-width: fit-content;
  padding: 4px 8px;
  color: ${P.palette.grey[600]};
  text-wrap: nowrap;
  gap: 8px;
`, pb = X("div")`
  width: 1px;
  height: 60%;
  background-color: ${P.palette.grey[300]};
`, fb = X("div")`
  display: flex;
  align-items: center;
  padding: 0px 4px;
  border-radius: 4px;
  max-height: 24px;
  min-height: 24px;
  cursor: pointer;
  svg {
    height: 14px;
    width: auto;
  }
  &:hover {
    background-color: ${P.palette.grey[100]};
    transition: "all 0.2s";
    outline: 1px solid ${P.palette.grey[200]};
  }
`;
var St = /* @__PURE__ */ ((e) => (e[e.rowsDown = 0] = "rowsDown", e[e.columnsRight = 1] = "columnsRight", e[e.rowsUp = 2] = "rowsUp", e[e.columnsLeft = 3] = "columnsLeft", e))(St || {});
class hb {
  extendToArea;
  copyStyles;
  cell;
  cutRange;
  selecting;
  constructor() {
    this.extendToArea = null, this.copyStyles = null, this.cell = null, this.cutRange = null, this.selecting = !1;
  }
  isSelecting() {
    return this.selecting;
  }
  setSelecting(t) {
    this.selecting = t;
  }
  getExtendToArea() {
    return this.extendToArea;
  }
  clearExtendToArea() {
    this.extendToArea = null;
  }
  setExtendToArea(t) {
    this.extendToArea = t;
  }
  setCopyStyles(t) {
    this.copyStyles = t;
  }
  getCopyStyles() {
    return this.copyStyles;
  }
  setActiveRanges(t) {
    this.cell && (this.cell.activeRanges = t);
  }
  getActiveRanges() {
    return this.cell?.activeRanges || [];
  }
  getEditingCell() {
    return this.cell;
  }
  setEditingCell(t) {
    this.cell = t;
  }
  clearEditingCell() {
    this.cell = null;
  }
  isCellEditorActive() {
    return this.cell ? this.cell.focus === "cell" : !1;
  }
  isFormulaEditorActive() {
    return this.cell ? this.cell.focus === "formula-bar" : !1;
  }
  getEditingText() {
    const t = this.cell;
    return t ? t.text + (t.referencedRange?.str || "") : "";
  }
  setCutRange(t) {
    this.cutRange = t;
  }
  clearCutRange() {
    this.cutRange = null;
  }
  getCutRange() {
    return this.cutRange;
  }
}
function mb(e) {
  const t = e.canvas.parentElement;
  for (const i of t.querySelectorAll(".ironcalc-cell-handle"))
    i.remove();
  const n = document.createElement("div");
  n.className = "ironcalc-cell-handle", t.appendChild(n), e.cellOutlineHandle = n, Object.assign(n.style, {
    position: "absolute",
    width: "5px",
    height: "5px",
    background: Ke,
    cursor: "crosshair",
    borderRadius: "1px",
    border: "1px solid white"
  });
  const o = (i) => {
    const s = e.canvas.getBoundingClientRect(), a = i.clientX - s.x, u = i.clientY - s.y, h = e.getCellByCoordinates(a, u);
    if (!h)
      return;
    const { row: p, column: m } = h, {
      range: [d, g, x, f]
    } = e.model.getSelectedView();
    if (p > x && (m <= f && m >= g || m < g && g - m < p - x || m > f && m - f < p - x)) {
      const y = {
        type: St.rowsDown,
        rowStart: x + 1,
        rowEnd: p,
        columnStart: g,
        columnEnd: f
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    } else if (p < d && (m <= f && m >= g || m < g && g - m < d - p || m > f && m - f < d - p)) {
      const y = {
        type: St.rowsUp,
        rowStart: p,
        rowEnd: d,
        columnStart: g,
        columnEnd: f
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    } else if (m > f && (p <= x && p >= d || p < d && d - p < m - f || p > x && p - x < m - f)) {
      const y = {
        type: St.columnsRight,
        rowStart: d,
        rowEnd: x,
        columnStart: f + 1,
        columnEnd: m
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    } else if (m < g && (p <= x && p >= d || p < d && d - p < g - m || p > x && p - x < g - m)) {
      const y = {
        type: St.columnsLeft,
        rowStart: d,
        rowEnd: x,
        columnStart: m,
        columnEnd: g
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    }
  }, r = (i) => {
    document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", r);
    const { sheet: s, range: a } = e.model.getSelectedView(), u = e.workbookState.getExtendToArea();
    if (!u)
      return;
    const h = Math.min(a[0], a[2]), p = Math.abs(a[2] - a[0]) + 1, m = Math.abs(a[3] - a[1]) + 1, d = Math.min(a[1], a[3]), g = {
      sheet: s,
      row: h,
      column: d,
      width: m,
      height: p
    };
    switch (u.type) {
      case St.rowsDown:
        e.model.autoFillRows(g, u.rowEnd);
        break;
      case St.rowsUp: {
        e.model.autoFillRows(g, u.rowStart);
        break;
      }
      case St.columnsRight: {
        e.model.autoFillColumns(g, u.columnEnd);
        break;
      }
      case St.columnsLeft: {
        e.model.autoFillColumns(g, u.columnStart);
        break;
      }
    }
    e.model.setSelectedRange(
      Math.min(h, u.rowStart),
      Math.min(d, u.columnStart),
      Math.max(h + p - 1, u.rowEnd),
      Math.max(d + m - 1, u.columnEnd)
    ), e.workbookState.clearExtendToArea(), e.renderSheet();
  };
  return n.addEventListener("pointerdown", () => {
    document.addEventListener("pointermove", o), document.addEventListener("pointerup", r);
  }), n.addEventListener("dblclick", (i) => {
    const [s, a, u] = e.model.getSelectedCell();
    let h = a + 1, p = u - 1;
    if ((p < 1 || e.model.getFormattedCellValue(s, a, u - 1) === "") && (p = u + 1, p > Ae || e.model.getFormattedCellValue(s, a, p) === ""))
      return;
    for (let d = a + 1; d <= Le && e.model.getFormattedCellValue(s, d, p) !== ""; d += 1)
      h = d;
    const m = {
      sheet: s,
      row: a,
      column: u,
      width: 1,
      height: 1
    };
    e.model.autoFillRows(m, h), i.stopPropagation(), e.renderSheet();
  }), n;
}
function gb(e) {
  const t = e.replace(/^#/, ""), n = Number.parseInt(t.substring(0, 2), 16), o = Number.parseInt(t.substring(2, 4), 16), r = Number.parseInt(t.substring(4, 6), 16);
  return `rgba(${n}, ${o}, ${r}, ${0.1})`;
}
function Ma(e, t, n, o) {
  const r = e.split(`
`);
  if (!t)
    return r;
  const i = [];
  for (const s of r) {
    const a = s.split(" ");
    let u = a[0];
    for (let h = 1; h < a.length; h += 1) {
      const p = a[h], m = `${u} ${p}`;
      n.measureText(m).width < o ? u = m : (i.push(u), u = p);
    }
    i.push(u);
  }
  return i;
}
const fc = {
  regular: 'Inter, "Adjusted Arial Fallback", sans-serif'
}, pe = 28, le = 30, At = window.devicePixelRatio || 1, Do = fc.regular, xb = fc.regular, et = 3;
class bb {
  sheetWidth;
  sheetHeight;
  width;
  height;
  ctx;
  canvas;
  editor;
  areaOutline;
  cellOutline;
  cellOutlineHandle;
  extendToOutline;
  workbookState;
  model;
  rowGuide;
  columnHeaders;
  columnGuide;
  onColumnWidthChanges;
  onRowHeightChanges;
  refresh;
  cells;
  spills;
  constructor(t) {
    this.model = t.model, this.sheetWidth = 0, this.sheetHeight = 0, this.canvas = t.elements.canvas, this.width = t.width, this.height = t.height, this.ctx = this.setContext(), this.workbookState = t.workbookState, this.editor = t.elements.editor, this.refresh = t.refresh, this.cellOutline = t.elements.cellOutline, this.areaOutline = t.elements.areaOutline, this.extendToOutline = t.elements.extendToOutline, this.rowGuide = t.elements.rowGuide, this.columnGuide = t.elements.columnGuide, this.columnHeaders = t.elements.columnHeaders, this.onColumnWidthChanges = t.onColumnWidthChanges, this.onRowHeightChanges = t.onRowHeightChanges, this.resetHeaders(), this.cellOutlineHandle = mb(this), this.spills = /* @__PURE__ */ new Map(), this.cells = [];
  }
  setScrollPosition(t) {
    const { column: n } = this.getBoundedColumn(t.left), { row: o } = this.getBoundedRow(t.top);
    this.model.setTopLeftVisibleCell(o, n);
  }
  resetHeaders() {
    for (const t of this.columnHeaders.querySelectorAll(
      ".column-resize-handle"
    ))
      t.remove();
    for (const t of this.columnHeaders.querySelectorAll(
      ".frozen-column-separator"
    ))
      t.remove();
    for (const t of this.columnHeaders.children)
      t.classList.add("column-header");
  }
  setContext() {
    const { canvas: t, width: n, height: o } = this, r = t.getContext("2d");
    if (!r)
      throw new Error(
        "This browser does not support 2-dimensional canvas rendering contexts."
      );
    return t.width = n * At, t.height = o * At, t.style.width = `${n}px`, t.style.height = `${o}px`, r.scale(At, At), r;
  }
  setSize(t) {
    this.width = t.width, this.height = t.height, this.ctx = this.setContext();
  }
  /**
   * This is the height of the frozen rows including the width of the separator
   * It returns 0 if the are no frozen rows
   */
  getFrozenRowsHeight() {
    const t = this.model.getFrozenRowsCount(
      this.model.getSelectedSheet()
    );
    if (t === 0)
      return 0;
    let n = 0;
    for (let o = 1; o <= t; o += 1)
      n += this.getRowHeight(this.model.getSelectedSheet(), o);
    return n + et;
  }
  /**
   * This is the width of the frozen columns including the width of the separator
   * It returns 0 if the are no frozen columns
   */
  getFrozenColumnsWidth() {
    const t = this.model.getFrozenColumnsCount(
      this.model.getSelectedSheet()
    );
    if (t === 0)
      return 0;
    let n = 0;
    for (let o = 1; o <= t; o += 1)
      n += this.getColumnWidth(
        this.model.getSelectedSheet(),
        o
      );
    return n + et;
  }
  // Get the visible cells (aside from the frozen rows and columns)
  getVisibleCells() {
    const t = this.model.getSelectedView(), n = t.sheet, o = this.model.getFrozenRowsCount(n), r = this.model.getFrozenColumnsCount(n), i = Math.max(o + 1, t.top_row);
    let s = i;
    const a = Math.max(r + 1, t.left_column);
    let u = a;
    const h = this.getFrozenColumnsWidth(), p = this.getFrozenRowsHeight();
    let m = pe + p;
    for (let x = i; x <= Le; x += 1) {
      const f = this.getRowHeight(n, x);
      if (m >= this.height - f || x === Le) {
        s = x;
        break;
      }
      m += f;
    }
    let d = le + h;
    for (let x = a; x <= Ae; x += 1) {
      const f = this.getColumnWidth(n, x);
      if (d >= this.width - f || x === Ae) {
        u = x;
        break;
      }
      d += f;
    }
    return {
      topLeftCell: { row: i, column: a },
      bottomRightCell: { row: s, column: u }
    };
  }
  /**
   * Returns the {row, top} of the row whose upper y coordinate (top) is maximum and less or equal than maxTop
   * Both top and maxTop are absolute coordinates
   */
  getBoundedRow(t) {
    const n = this.model.getSelectedSheet();
    let o = 0, r = 1 + this.model.getFrozenRowsCount(n);
    for (; r <= Le && o <= t; ) {
      const i = this.getRowHeight(n, r);
      if (o + i <= t)
        o += i;
      else
        break;
      r += 1;
    }
    return { row: r, top: o };
  }
  getBoundedColumn(t) {
    let n = 0;
    const o = this.model.getSelectedSheet();
    let r = 1 + this.model.getFrozenColumnsCount(o);
    for (; n <= t && r <= Ae; ) {
      const i = this.getColumnWidth(o, r);
      if (i + n <= t)
        n += i;
      else
        break;
      r += 1;
    }
    return { column: r, left: n };
  }
  /**
   * Returns the minimum we can scroll to the left so that
   * targetColumn is fully visible.
   * Returns the the first visible column and the scrollLeft position
   */
  getMinScrollLeft(t) {
    const n = 1 + this.model.getFrozenColumnsCount(this.model.getSelectedSheet());
    let o = 0;
    for (let s = n; s <= t; s += 1) {
      const a = this.getColumnWidth(this.model.getSelectedSheet(), s);
      o += a;
    }
    const r = o - this.width + this.getFrozenColumnsWidth() + le;
    let i = 0;
    for (let s = n; s <= Ae; s += 1) {
      const a = this.getColumnWidth(this.model.getSelectedSheet(), s);
      if (i < r)
        i += a;
      else
        break;
    }
    return i;
  }
  getFontStyle(t) {
    const n = t.font?.sz || 13;
    let o = `${n}px ${Do}`, r = bf;
    return t.font && (r = t.font.color, o = t.font.b ? `bold ${o}` : `400 ${o}`, t.font.i && (o = `italic ${o}`)), { font: o, color: r, fontSize: n };
  }
  getAlignment(t, n) {
    let o = t.alignment?.horizontal || "general";
    const r = t.alignment?.vertical || "bottom";
    return o === "general" && (n === 1 ? o = "right" : n === 4 ? o = "center" : o = "left"), { horizontal: o, vertical: r };
  }
  // Computes the text of cells that are off the screen. They are important because their text may spill into the viewport.
  computeCellTextLeftRight(t, n, o, r, i) {
    const s = this.model.getFrozenColumnsCount(t), a = this.model.getLastNonEmptyInRowBeforeColumn(
      t,
      n,
      r.column
    );
    if (a && a > s) {
      const h = this.getColumnWidth(t, a), [p, m] = this.getCoordinatesByCell(n, a);
      this.computeCellText(
        n,
        a,
        p,
        m,
        h,
        o
      );
    }
    const u = this.model.getFirstNonEmptyInRowAfterColumn(
      t,
      n,
      i.column
    );
    if (u) {
      const h = this.getColumnWidth(t, u), [p, m] = this.getCoordinatesByCell(n, u);
      this.computeCellText(
        n,
        u,
        p,
        m,
        h,
        o
      );
    }
  }
  // Goes through all the visible cells and computes their text properties
  computeCellsText() {
    const { topLeftCell: t, bottomRightCell: n } = this.getVisibleCells(), o = this.model.getSelectedSheet();
    this.cells = [];
    const r = this.model.getFrozenColumnsCount(o), i = this.model.getFrozenRowsCount(o);
    let s = le + 0.5, a = pe + 0.5;
    for (let p = 1; p <= i; p += 1) {
      const m = this.getRowHeight(o, p);
      this.computeCellTextLeftRight(
        o,
        p,
        m,
        t,
        n
      ), s = le + 0.5;
      for (let d = 1; d <= r; d += 1) {
        const g = this.getColumnWidth(o, d);
        this.computeCellText(p, d, s, a, g, m), s += g;
      }
      a += m;
    }
    if (i === 0 && r !== 0) {
      s = le + 0.5;
      for (let p = 1; p <= r; p += 1)
        s += this.getColumnWidth(o, p);
    }
    i && (a += et), r && (s += et);
    const u = s, h = a;
    a = pe + 0.5;
    for (let p = 1; p <= i; p += 1) {
      s = u;
      const m = this.getRowHeight(o, p);
      for (let { column: d } = t; d <= n.column; d += 1) {
        const g = this.getColumnWidth(o, d);
        this.computeCellText(p, d, s, a, g, m), s += g;
      }
      a += m;
    }
    a = h;
    for (let { row: p } = t; p <= n.row; p += 1) {
      s = le;
      const m = this.getRowHeight(o, p);
      this.computeCellTextLeftRight(
        o,
        p,
        m,
        t,
        n
      );
      for (let d = 1; d <= r; d += 1) {
        const g = this.getColumnWidth(o, d);
        this.computeCellText(p, d, s, a, g, m), s += g;
      }
      a += m;
    }
    a = h;
    for (let { row: p } = t; p <= n.row; p += 1) {
      s = u;
      const m = this.getRowHeight(o, p);
      for (let { column: d } = t; d <= n.column; d += 1) {
        const g = this.getColumnWidth(o, d);
        this.computeCellText(p, d, s, a, g, m), s += g;
      }
      a += m;
    }
  }
  // Compute the text properties for a cell
  computeCellText(t, n, o, r, i, s) {
    const a = this.model.getSelectedSheet(), u = this.model.getCellStyle(a, t, n), { font: h, color: p, fontSize: m } = this.getFontStyle(u), d = this.model.getCellType(a, t, n), { horizontal: g, vertical: x } = this.getAlignment(u, d), f = u.alignment?.wrap_text || !1, y = this.ctx;
    y.font = h, y.fillStyle = p;
    const S = this.model.getFormattedCellValue(
      a,
      t,
      n
    ), j = m * 1.5, C = Ma(
      S,
      f,
      y,
      i - Ir
    ), w = C.length;
    let E = o, T = o + i;
    const R = {
      row: t,
      column: n,
      x: E,
      y: r,
      width: i,
      height: s,
      fontSize: m,
      textColor: p,
      font: h,
      underlined: u.font?.u || !1,
      strike: u.font?.strike || !1,
      lines: []
    };
    C.forEach((B, v) => {
      const D = y.measureText(B).width;
      let M, A;
      const _ = 4;
      g === "right" ? M = i - Ir + o - D / 2 : g === "center" ? M = o + i / 2 : M = Ir + o + D / 2, x === "bottom" ? A = r + s - m / 2 - _ + (v - w + 1) * j : x === "center" ? A = r + s / 2 + (v + (1 - w) / 2) * j : A = r + m / 2 + _ + v * j, R.lines.push([B, M, A, D]), E = Math.min(E, M - D / 2), T = Math.max(T, M + D / 2);
    });
    let F = o, I = o + i;
    if (T > I && n < Ae && this.model.getFormattedCellValue(a, t, n + 1) === "") {
      let B = n + 1;
      const v = this.model.getFrozenColumnsCount(a);
      for (; I < T && this.model.getFormattedCellValue(a, t, B) === "" && B <= Ae && (n < v && B <= v || n > v); )
        I += this.model.getColumnWidth(a, B), this.spills.set(`${t}-${B}`, 1), B += 1;
    }
    const H = this.model.getFrozenColumnsCount(a);
    if (E < F && n > 1 && this.model.getFormattedCellValue(a, t, n - 1) === "") {
      let B = n - 1;
      for (; F > E && this.model.getFormattedCellValue(a, t, B) === "" && B >= 1 && (n <= H && B <= H || n > H); )
        F -= this.getColumnWidth(a, B), this.spills.set(`${t}-${B + 1}`, 1), B -= 1;
    }
    if (H > 0) {
      const B = this.getCoordinatesByCell(t, H)[0] + this.getColumnWidth(a, H);
      n > H ? F = Math.max(F, B) : I = Math.min(I, B);
    }
    R.x = F, R.width = I - F, this.cells.push(R);
  }
  /// Renders the cell style: colors, borders, etc. But not the text.
  renderCellStyle(t, n, o, r, i, s) {
    const a = this.model.getSelectedSheet(), u = this.model.getCellStyle(a, t, n);
    let h = P.palette.common.white;
    u.fill.fg_color && (h = u.fill.fg_color);
    const p = this.model.getShowGridLines(a) ? xf : h, m = this.ctx;
    m.fillStyle = h, m.fillRect(o, r, i, s);
    const d = u.border;
    if (this.spills.get(`${t}-${n}`) !== 1) {
      let f = p, y = 1;
      if (d.left)
        switch (f = d.left.color, d.left.style) {
          case "thin":
            break;
          case "medium":
            y = 2;
            break;
          case "thick":
            y = 3;
        }
      else {
        const S = this.model.getCellStyle(
          a,
          t,
          n - 1
        );
        if (S.border.right)
          switch (f = S.border.right.color, S.border.right.style) {
            case "thin":
              break;
            case "medium":
              y = 2;
              break;
            case "thick":
              y = 3;
          }
        else u.fill.fg_color ? f = u.fill.fg_color : S.fill.fg_color && (f = S.fill.fg_color);
      }
      m.beginPath(), m.strokeStyle = f, m.lineWidth = y, m.moveTo(o, r), m.lineTo(o, r + s), m.stroke();
    }
    let g = p, x = 1;
    if (d.top)
      switch (g = d.top.color, d.top.style) {
        case "thin":
          break;
        case "medium":
          x = 2;
          break;
        case "thick":
          x = 3;
      }
    else {
      const f = this.model.getCellStyle(a, t - 1, n);
      if (f.border.bottom)
        switch (g = f.border.bottom.color, f.border.bottom.style) {
          case "thin":
            break;
          case "medium":
            x = 2;
            break;
          case "thick":
            x = 3;
        }
      else u.fill.fg_color ? g = u.fill.fg_color : f.fill.fg_color && (g = f.fill.fg_color);
    }
    m.beginPath(), m.strokeStyle = g, m.lineWidth = x, m.moveTo(o, r), m.lineTo(o + i, r), m.stroke();
  }
  /// Renders the text in the cell.
  renderCellText(t) {
    const {
      x: n,
      y: o,
      width: r,
      height: i,
      font: s,
      underlined: a,
      strike: u,
      fontSize: h,
      textColor: p,
      lines: m
    } = t, d = this.ctx;
    d.font = s, d.fillStyle = p, d.save(), d.beginPath(), d.rect(n, o, r, i), d.clip(), m.forEach((g, x) => {
      const [f, y, S, j] = g;
      if (d.fillText(f, y, S), a) {
        const C = Math.floor(h / 2);
        d.beginPath(), d.strokeStyle = p, d.lineWidth = 1, d.moveTo(y - j / 2, S + C), d.lineTo(y + j / 2, S + C), d.stroke();
      }
      u && (d.beginPath(), d.strokeStyle = p, d.lineWidth = 1, d.moveTo(y - j / 2, S), d.lineTo(y + j / 2, S), d.stroke());
    }), d.restore();
  }
  // Column and row headers with their handles
  addColumnResizeHandle(t, n, o) {
    const r = document.createElement("div");
    r.className = "column-resize-handle", r.style.left = `${t - 1}px`, r.style.height = `${pe}px`, this.columnHeaders.insertBefore(r, null);
    let i = 0;
    const s = (u) => {
      o + u.pageX - i > 0 && (r.style.left = `${t + u.pageX - i - 1}px`, this.columnGuide.style.left = `${le + t + u.pageX - i}px`);
    };
    let a = (u) => {
      r.style.opacity = "0", this.columnGuide.style.display = "none", document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", a);
      const h = o + u.pageX - i;
      h !== o && this.onColumnWidthChanges(
        this.model.getSelectedSheet(),
        n,
        h
      );
    };
    a = a.bind(this), r.addEventListener("pointerdown", (u) => {
      r.style.opacity = "1", this.columnGuide.style.display = "block", this.columnGuide.style.left = `${le + t}px`, i = u.pageX, document.addEventListener("pointermove", s), document.addEventListener("pointerup", a);
    }), r.addEventListener("dblclick", (u) => {
      const h = this.model.getSelectedSheet(), p = this.model.getRowsWithData(h, n);
      let m = 0;
      for (const d of p) {
        const g = this.model.getFormattedCellValue(h, d, n);
        if (g === "")
          continue;
        const x = this.model.getCellStyle(h, d, n);
        let y = `${x.font.sz}px ${Do}`;
        y = x.font.b ? `bold ${y}` : `400 ${y}`, this.ctx.font = y;
        const S = g.split(`
`);
        for (const j of S) {
          const C = this.ctx.measureText(j).width;
          m = Math.max(m, C);
        }
      }
      m !== 0 && (this.model.setColumnsWidth(h, n, n, m + 8), this.refresh()), u.stopPropagation();
    });
  }
  addRowResizeHandle(t, n, o) {
    const r = document.createElement("div");
    r.className = "row-resize-handle", r.style.top = `${t - 1}px`, r.style.width = `${le}px`;
    const i = this.model.getSelectedSheet();
    this.canvas.parentElement?.insertBefore(r, null);
    let s = 0;
    const a = (h) => {
      o + h.pageY - s > 0 && (r.style.top = `${t + h.pageY - s - 1}px`, this.rowGuide.style.top = `${t + h.pageY - s}px`);
    };
    let u = (h) => {
      r.style.opacity = "0", this.rowGuide.style.display = "none", document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", u);
      const p = o + h.pageY - s;
      p !== o && this.onRowHeightChanges(i, n, p);
    };
    u = u.bind(this), r.addEventListener("pointerdown", (h) => {
      h.stopPropagation(), r.style.opacity = "1", this.rowGuide.style.display = "block", this.rowGuide.style.top = `${t}px`, s = h.pageY, document.addEventListener("pointermove", a), document.addEventListener("pointerup", u);
    }), r.addEventListener("dblclick", (h) => {
      const p = this.model.getSelectedSheet(), m = this.model.getColumnsWithData(p, n);
      let d = 0;
      for (const g of m) {
        const x = this.model.getFormattedCellValue(p, n, g);
        if (x === "")
          continue;
        const f = this.getColumnWidth(p, g), y = this.model.getCellStyle(p, n, g), S = y.font.sz, j = S * 1.5;
        let C = `${S}px ${Do}`;
        C = y.font.b ? `bold ${C}` : `400 ${C}`, this.ctx.font = C;
        const T = (Ma(
          x,
          y.alignment?.wrap_text || !1,
          this.ctx,
          f
        ).length - 1) * j + 8 + S;
        d = Math.max(d, T);
      }
      d !== 0 && (this.model.setRowsHeight(p, n, n, d), this.refresh()), h.stopPropagation();
    });
  }
  styleColumnHeader(t, n, o, r) {
    n.style.boxSizing = "border-box", n.style.width = `${t}px`, n.style.height = `${pe}px`, n.style.backgroundColor = o ? r ? P.palette.primary.main : Ts : Rs, n.style.color = o ? r ? P.palette.common.white : ks : _s, n.style.fontWeight = "bold", n.style.borderLeft = `1px solid ${Dr}`, n.style.borderTop = `1px solid ${Dr}`, o ? (n.style.borderBottom = `1px solid ${Ke}`, n.classList.add("selected")) : n.classList.remove("selected");
  }
  removeHandles() {
    const t = this.canvas.parentElement;
    if (t)
      for (const n of t.querySelectorAll(".row-resize-handle"))
        n.remove();
  }
  renderRowHeaders(t, n, o) {
    const { sheet: r, range: i } = this.model.getSelectedView();
    let s = i[0], a = i[2], u = i[1], h = i[3];
    s > a && ([s, a] = [a, s]), u > h && ([u, h] = [h, u]);
    const p = u === 1 && h === Ae, m = this.ctx;
    let d = pe + 0.5;
    const g = t === 0 ? n.row : 1;
    for (let x = g; x <= o.row; x += 1) {
      const f = this.getRowHeight(r, x), y = x >= s && x <= a;
      m.fillStyle = Dr, m.fillRect(0.5, d, le, f), m.fillStyle = y ? p ? P.palette.primary.main : Ts : Rs, m.fillRect(
        0.5,
        d + 0.5,
        le,
        f - 1
      ), y && (m.fillStyle = Ke, m.fillRect(le - 1, d, 1, f)), m.fillStyle = y ? p ? P.palette.common.white : ks : _s, m.font = `bold 12px ${Do}`, m.fillText(
        `${x}`,
        le / 2,
        d + f / 2,
        le
      ), d += f, this.addRowResizeHandle(d, x, f), x === t && (d += et, x = n.row - 1);
    }
  }
  renderColumnHeaders(t, n, o) {
    const { columnHeaders: r } = this;
    let i = 0;
    const { range: s } = this.model.getSelectedView();
    let a = s[0], u = s[2], h = s[1], p = s[3];
    h > p && ([h, p] = [p, h]), a > u && ([a, u] = [u, a]);
    const m = a === 1 && u === Le;
    for (const d of r.querySelectorAll(".column-header"))
      d.remove();
    for (const d of r.querySelectorAll(
      ".column-resize-handle"
    ))
      d.remove();
    for (const d of r.querySelectorAll(
      ".frozen-column-separator"
    ))
      d.remove();
    r.style.fontFamily = xb, r.style.fontSize = "12px", r.style.height = `${pe}px`, r.style.lineHeight = `${pe}px`, r.style.left = `${le}px`;
    for (let d = 1; d <= t; d += 1) {
      const g = d >= h && d <= p;
      i += this.addColumnHeader(
        i,
        d,
        g,
        m
      );
    }
    if (t !== 0) {
      const d = document.createElement("div");
      d.className = "frozen-column-separator", d.style.width = `${et}px`, d.style.height = `${pe}`, d.style.display = "inline-block", d.style.backgroundColor = To, this.columnHeaders.insertBefore(d, null), i += et;
    }
    for (let d = n; d <= o; d += 1) {
      const g = d >= h && d <= p;
      i += this.addColumnHeader(
        i,
        d,
        g,
        m
      );
    }
    r.style.width = `${i}px`;
  }
  addColumnHeader(t, n, o, r) {
    const i = this.getColumnWidth(
      this.model.getSelectedSheet(),
      n
    ), s = document.createElement("div");
    return s.className = "column-header", s.textContent = He(n), this.columnHeaders.insertBefore(s, null), this.styleColumnHeader(i, s, o, r), this.addColumnResizeHandle(t + i, n, i), i;
  }
  getSheetDimensions() {
    let t = le;
    for (let o = 1; o < Ae + 1; o += 1)
      t += this.getColumnWidth(this.model.getSelectedSheet(), o);
    let n = pe;
    for (let o = 1; o < Le + 1; o += 1)
      n += this.getRowHeight(this.model.getSelectedSheet(), o);
    return this.sheetWidth = Math.floor(
      t + this.getColumnWidth(this.model.getSelectedSheet(), Ae)
    ), this.sheetHeight = Math.floor(
      n + 2 * this.getRowHeight(this.model.getSelectedSheet(), Le)
    ), [this.sheetWidth, this.sheetHeight];
  }
  /**
   * Returns the css clip in the canvas of an html element
   * This is used so we do not see the outlines in the row and column headers
   * NB: A _different_ (better!) approach would be to have separate canvases for the headers
   * Then the sheet canvas would have it's own bounding box.
   * That's tomorrows problem.
   * PS: Please, do not use this function. If at all we can use the clip-path property
   */
  getClipCSS(t, n, o, r, i, s) {
    if (!i && !s)
      return "";
    const a = s ? this.getFrozenColumnsWidth() : 0, u = i ? this.getFrozenRowsHeight() : 0, h = pe + u, p = le + a, m = p + this.width - le - a, d = h + this.height - pe - u, g = n < h ? h - n : 0, x = t < p ? p - t : 0, f = t + o > m ? m - t : o + 4, y = n + r > d ? d - n : r + 4;
    return `rect(${g}px ${f}px ${y}px ${x}px)`;
  }
  getAreaDimensions(t, n, o, r) {
    const [i, s] = this.getCoordinatesByCell(t, n);
    let [a, u] = this.getCoordinatesByCell(o, r);
    a += this.getColumnWidth(this.model.getSelectedSheet(), r), u += this.getRowHeight(this.model.getSelectedSheet(), o);
    const h = this.model.getFrozenRowsCount(
      this.model.getSelectedSheet()
    ), p = this.model.getFrozenColumnsCount(
      this.model.getSelectedSheet()
    );
    if (h !== 0 || p !== 0) {
      let [m, d] = this.getCoordinatesByCell(
        h,
        p
      );
      p > 0 && (m += this.getColumnWidth(
        this.model.getSelectedSheet(),
        p
      )), h > 0 && (d += this.getRowHeight(
        this.model.getSelectedSheet(),
        h
      )), t <= h && o > h && (u = Math.max(u, d)), n <= p && r > p && (a = Math.max(a, m));
    }
    return [Math.abs(a - i), Math.abs(u - s)];
  }
  /**
   * Returns the coordinates relative to the canvas.
   * (headerColumnWidth, headerRowHeight) being the coordinates
   * for the top left corner of the first visible cell
   */
  getCoordinatesByCell(t, n) {
    const o = this.model.getSelectedSheet(), r = this.model.getFrozenColumnsCount(o), i = this.getFrozenColumnsWidth(), s = this.model.getFrozenRowsCount(o), a = this.getFrozenRowsHeight(), { topLeftCell: u } = this.getVisibleCells();
    let h, p;
    if (t <= s) {
      p = pe;
      for (let m = 1; m < t; m += 1)
        p += this.getRowHeight(o, m);
    } else if (t >= u.row) {
      p = pe + a;
      for (let m = u.row; m < t; m += 1)
        p += this.getRowHeight(o, m);
    } else {
      p = pe + a;
      for (let m = u.row; m > t; m -= 1)
        p -= this.getRowHeight(o, m - 1);
    }
    if (n <= r) {
      h = le;
      for (let m = 1; m < n; m += 1)
        h += this.getColumnWidth(o, m);
    } else if (n >= u.column) {
      h = le + i;
      for (let m = u.column; m < n; m += 1)
        h += this.getColumnWidth(o, m);
    } else {
      h = le + i;
      for (let m = u.column; m > n; m -= 1)
        h -= this.getColumnWidth(o, m - 1);
    }
    return [Math.floor(h), Math.floor(p)];
  }
  /**
   * (x, y) are the relative coordinates of a cell WRT the canvas
   * getCellByCoordinates(headerColumnWidth, headerRowHeight) will return the first visible cell.
   * Note: If there are frozen rows/columns for some particular coordinates (x, y)
   * there might be two cells. This method returns the visible one.
   */
  getCellByCoordinates(t, n) {
    const o = this.model.getFrozenColumnsCount(
      this.model.getSelectedSheet()
    ), r = this.getFrozenColumnsWidth(), i = this.model.getFrozenRowsCount(
      this.model.getSelectedSheet()
    ), s = this.getFrozenRowsHeight();
    let a = 0, u = le;
    const { topLeftCell: h } = this.getVisibleCells();
    if (t < le)
      for (a = h.column; u >= t; ) {
        if (a -= 1, a < 1) {
          a = 1;
          break;
        }
        u -= this.getColumnWidth(this.model.getSelectedSheet(), a);
      }
    else if (t < le + r) {
      for (; u <= t; )
        if (a += 1, u += this.getColumnWidth(this.model.getSelectedSheet(), a), a > o)
          return null;
    } else
      for (u = le + r, a = h.column - 1; u <= t; ) {
        if (a += 1, a > Ae)
          return null;
        u += this.getColumnWidth(this.model.getSelectedSheet(), a);
      }
    let p = pe, m = 0;
    if (n < pe)
      for (m = h.row; p >= n; ) {
        if (m -= 1, m < 1) {
          m = 1;
          break;
        }
        p -= this.getRowHeight(this.model.getSelectedSheet(), m);
      }
    else if (n < pe + s) {
      for (; p <= n; )
        if (m += 1, p += this.getRowHeight(this.model.getSelectedSheet(), m), m > i)
          return null;
    } else
      for (p = pe + s, m = h.row - 1; p <= n; ) {
        if (m += 1, m > Le) {
          m = Le;
          break;
        }
        p += this.getRowHeight(this.model.getSelectedSheet(), m);
      }
    return m < 1 && (m = 1), a < 1 && (a = 1), { row: m, column: a };
  }
  drawExtendToArea() {
    const { extendToOutline: t } = this, n = this.workbookState.getExtendToArea();
    if (n === null) {
      t.style.visibility = "hidden";
      return;
    }
    t.style.visibility = "visible";
    let { rowStart: o, rowEnd: r, columnStart: i, columnEnd: s } = n;
    o > r && ([o, r] = [r, o]), i > s && ([i, s] = [s, i]);
    const [a, u] = this.getCoordinatesByCell(o, i), [h, p] = this.getAreaDimensions(
      o,
      i,
      r,
      s
    );
    t.style.border = `1px dashed ${Ke}`, t.style.borderRadius = "3px", t.style.left = `${a}px`, t.style.top = `${u}px`, t.style.width = `${h - 1}px`, t.style.height = `${p - 1}px`;
  }
  getColumnWidth(t, n) {
    return Math.round(
      this.model.getColumnWidth(t, n) * Qn
    );
  }
  getRowHeight(t, n) {
    return Math.round(this.model.getRowHeight(t, n) * Jn);
  }
  drawCellEditor() {
    const t = this.workbookState.getEditingCell(), n = this.model.getSelectedSheet(), { editor: o } = this;
    if (!t || t.sheet !== n) {
      o.style.left = "-9999px", o.style.top = "-9999px";
      return;
    }
    const { row: r, column: i } = t, [s, a] = this.getCoordinatesByCell(r, i), u = -1, h = t.editorWidth + 2 * u, p = t.editorHeight + 2 * u;
    o.style.left = `${s}px`, o.style.top = `${a}px`, o.style.width = `${h - 1}px`, o.style.height = `${p - 1}px`;
  }
  drawCellOutline() {
    const { cellOutline: t, areaOutline: n, cellOutlineHandle: o } = this;
    if (this.workbookState.getEditingCell()) {
      t.style.visibility = "hidden", o.style.visibility = "hidden", n.style.visibility = "hidden";
      return;
    }
    t.style.visibility = "visible", o.style.visibility = this.workbookState.isSelecting() ? "hidden" : "visible", n.style.visibility = "visible";
    const [r, i, s] = this.model.getSelectedCell(), { topLeftCell: a } = this.getVisibleCells(), u = this.model.getFrozenRowsCount(r), h = this.model.getFrozenColumnsCount(r), [p, m] = this.getCoordinatesByCell(i, s), d = -1, g = this.getColumnWidth(r, s) + 2 * d, x = this.getRowHeight(r, i) + 2 * d;
    (i < a.row && i > u || s < a.column && s > h) && (t.style.visibility = "hidden", o.style.visibility = "hidden"), t.style.left = `${p - d - 2}px`, t.style.top = `${m - d - 2}px`, t.style.minWidth = "", t.style.minHeight = "", t.style.maxWidth = "", t.style.maxHeight = "", t.style.overflow = "hidden", t.style.width = `${g + 1}px`, t.style.height = `${x + 1}px`, t.style.background = "none", t.style.lineHeight = `${x - 4}px`;
    let {
      range: [f, y, S, j]
    } = this.model.getSelectedView();
    f > S && ([f, S] = [S, f]), y > j && ([y, j] = [j, y]);
    let C, w;
    if (y === j && f === S)
      n.style.visibility = "hidden", [C, w] = this.getCoordinatesByCell(f, y), C += this.getColumnWidth(r, y), w += this.getRowHeight(r, f);
    else {
      n.style.visibility = "visible", o.style.visibility = this.workbookState.isSelecting() ? "hidden" : "visible";
      const [F, I] = this.getCoordinatesByCell(f, y), [H, B] = this.getAreaDimensions(
        f,
        y,
        S,
        j
      );
      C = F + H, w = I + B;
      const v = this.workbookState.isSelecting(), D = v ? 1 : 0;
      n.style.left = `${F - d - 1}px`, n.style.top = `${I - d - 1}px`, n.style.width = `${H + 2 * d + 1 + D}px`, n.style.height = `${B + 2 * d + 1 + D}px`;
      const M = f < a.row && f > u, A = y < a.column && y > h;
      n.style.clip = this.getClipCSS(
        F,
        I,
        H + 2 * d,
        B + 2 * d,
        M,
        A
      ), n.style.border = v ? "none" : `1px solid ${Ke}`, (S > u && S < a.row - 1 || j > h && j < a.column - 1) && (o.style.visibility = "hidden"), f <= u && S > u && S < a.row - 1 && (n.style.borderBottom = "None", o.style.visibility = "hidden"), y <= h && j > h && j < a.column - 1 && (n.style.borderRight = "None", o.style.visibility = "hidden");
    }
    const E = o.getBoundingClientRect(), T = E.width, R = E.height;
    o.style.left = `${C - T / 2 - 1}px`, o.style.top = `${w - R / 2 - 1}px`;
  }
  drawCutRange() {
    const t = this.workbookState.getCutRange() || null;
    if (!t)
      return;
    const n = this.model.getSelectedSheet();
    if (t.sheet !== n)
      return;
    const o = this.ctx;
    o.setLineDash([2, 2]);
    const [r, i] = this.getCoordinatesByCell(
      t.rowStart,
      t.columnStart
    ), [s, a] = this.getCoordinatesByCell(
      t.rowEnd + 1,
      t.columnEnd + 1
    );
    o.strokeStyle = "red", o.lineWidth = 1, o.strokeRect(r, i, s - r, a - i), o.setLineDash([]);
  }
  drawActiveRanges(t, n) {
    let o = this.workbookState.getActiveRanges();
    const r = this.ctx;
    r.setLineDash([2, 2]);
    const i = this.workbookState.getEditingCell()?.referencedRange || null;
    i && (o = o.concat([
      {
        ...i.range,
        color: ei(o.length)
      }
    ]));
    const s = this.model.getSelectedSheet(), a = o.length;
    for (let u = 0; u < a; u += 1) {
      const h = o[u];
      if (h.sheet !== s)
        continue;
      const p = 1, m = t.row - p, d = n.row + p, g = t.column - p, x = n.column + p;
      if (m <= h.rowEnd && h.rowStart <= d && g <= h.columnEnd && h.columnStart < x) {
        const f = {
          ...h,
          rowStart: Math.max(m, h.rowStart),
          rowEnd: Math.min(d, h.rowEnd),
          columnStart: Math.max(g, h.columnStart),
          columnEnd: Math.min(x, h.columnEnd)
        }, [y, S] = this.getCoordinatesByCell(
          f.rowStart,
          f.columnStart
        ), [j, C] = this.getCoordinatesByCell(
          f.rowEnd + 1,
          f.columnEnd + 1
        );
        r.strokeStyle = h.color, r.lineWidth = 1, r.strokeRect(y, S, j - y, C - S), r.fillStyle = gb(h.color), r.fillRect(y, S, j - y, C - S);
      }
    }
    r.setLineDash([]);
  }
  renderSheet() {
    const t = this.ctx, { canvas: n } = this, o = this.model.getSelectedSheet();
    t.lineWidth = 1, t.textAlign = "center", t.textBaseline = "middle", t.clearRect(0, 0, n.width, n.height), this.removeHandles();
    const { topLeftCell: r, bottomRightCell: i } = this.getVisibleCells();
    this.computeCellsText();
    const s = this.model.getFrozenColumnsCount(o), a = this.model.getFrozenRowsCount(o);
    let u = le + 0.5, h = pe + 0.5;
    for (let g = 1; g <= a; g += 1) {
      const x = this.getRowHeight(o, g);
      u = le + 0.5;
      for (let f = 1; f <= s; f += 1) {
        const y = this.getColumnWidth(o, f);
        this.renderCellStyle(g, f, u, h, y, x), u += y;
      }
      h += x;
    }
    if (a === 0 && s !== 0) {
      u = le + 0.5;
      for (let g = 1; g <= s; g += 1)
        u += this.getColumnWidth(o, g);
    }
    const p = et / 2;
    a && (t.beginPath(), t.lineWidth = et, t.strokeStyle = To, t.moveTo(0, h + p), t.lineTo(this.width, h + p), h += et, t.stroke(), t.lineWidth = 1), s && (t.beginPath(), t.lineWidth = et, t.strokeStyle = To, t.moveTo(u + p, 0), t.lineTo(u + p, this.height), u += et, t.stroke(), t.lineWidth = 1);
    const m = u, d = h;
    h = pe + 0.5;
    for (let g = 1; g <= a; g += 1) {
      u = m;
      const x = this.getRowHeight(o, g);
      for (let { column: f } = r; f <= i.column; f += 1) {
        const y = this.getColumnWidth(o, f);
        this.renderCellStyle(g, f, u, h, y, x), u += y;
      }
      h += x;
    }
    h = d;
    for (let { row: g } = r; g <= i.row; g += 1) {
      u = le;
      const x = this.getRowHeight(o, g);
      for (let f = 1; f <= s; f += 1) {
        const y = this.getColumnWidth(o, f);
        this.renderCellStyle(g, f, u, h, y, x), u += y;
      }
      h += x;
    }
    h = d;
    for (let { row: g } = r; g <= i.row; g += 1) {
      u = m;
      const x = this.getRowHeight(o, g);
      for (let { column: f } = r; f <= i.column; f += 1) {
        const y = this.getColumnWidth(o, f);
        this.renderCellStyle(g, f, u, h, y, x), u += y;
      }
      h += x;
    }
    for (const g of this.cells)
      this.renderCellText(g);
    this.renderColumnHeaders(
      s,
      r.column,
      i.column
    ), this.renderRowHeaders(a, r, i), t.beginPath(), t.strokeStyle = To, t.moveTo(0, 0.5), t.lineTo(u + le, 0.5), t.stroke(), this.drawCellOutline(), this.drawCellEditor(), this.drawExtendToArea(), this.drawActiveRanges(r, i), this.drawCutRange();
  }
}
const Aa = P.palette.error.main, yb = (e) => {
  const { t } = Ve(), {
    open: n,
    onClose: o,
    anchorPosition: r,
    onInsertRowAbove: i,
    onInsertRowBelow: s,
    onInsertColumnLeft: a,
    onInsertColumnRight: u,
    onFreezeColumns: h,
    onFreezeRows: p,
    onUnfreezeColumns: m,
    onUnfreezeRows: d,
    onDeleteRow: g,
    onDeleteColumn: x,
    onMoveColumnLeft: f,
    onMoveColumnRight: y,
    onMoveRowUp: S,
    onMoveRowDown: j,
    row: C,
    column: w
  } = e, [E, T] = oe(!1), R = re(null), [F, I] = oe(!1), H = re(null), [B, v] = oe(!1), D = re(null), [M, A] = oe(!1), _ = re(null), [U, J] = oe(!1), K = re(null);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: n,
        onClose: o,
        transitionDuration: 0,
        anchorReference: "anchorPosition",
        anchorPosition: r ?? void 0,
        children: [
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: D,
              disableRipple: !0,
              onClick: () => v(!0),
              children: [
                /* @__PURE__ */ l.jsx(hu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: H,
              disableRipple: !0,
              onClick: () => I(!0),
              children: [
                /* @__PURE__ */ l.jsx(mu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: _,
              disableRipple: !0,
              onClick: () => A(!0),
              children: [
                /* @__PURE__ */ l.jsx(gu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: K,
              disableRipple: !0,
              onClick: () => J(!0),
              children: [
                /* @__PURE__ */ l.jsx(xu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: R,
              disableRipple: !0,
              onClick: () => T(!0),
              children: [
                /* @__PURE__ */ l.jsx(Xn, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsxs(or, { disableRipple: !0, onClick: g, children: [
            /* @__PURE__ */ l.jsx(Jt, {}),
            /* @__PURE__ */ l.jsx(fe, { style: { color: Aa }, children: t("cell_context.delete_row", { row: C }) })
          ] }),
          /* @__PURE__ */ l.jsxs(or, { disableRipple: !0, onClick: x, children: [
            /* @__PURE__ */ l.jsx(Jt, {}),
            /* @__PURE__ */ l.jsx(fe, { style: { color: Aa }, children: t("cell_context.delete_column", { column: w }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: F,
        onClose: () => I(!1),
        transitionDuration: 0,
        anchorEl: H.current,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                I(!1), i();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_above") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                I(!1), s();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_below") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: B,
        onClose: () => v(!1),
        transitionDuration: 0,
        anchorEl: D.current,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                v(!1), a();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_before") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                v(!1), u();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_after") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: M,
        onClose: () => A(!1),
        transitionDuration: 0,
        anchorEl: _.current,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                S(), A(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_up") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                j(), A(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_down") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: U,
        onClose: () => J(!1),
        transitionDuration: 0,
        anchorEl: K.current,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                f(), J(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_left") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                y(), J(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_right") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: E,
        onClose: () => T(!1),
        transitionDuration: 0,
        anchorEl: R.current,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: [
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                h(), T(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_columns", { column: w }) })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                p(), T(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_rows", { row: C }) })
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                m(), T(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_columns") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                d(), T(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_rows") })
            }
          )
        ]
      }
    )
  ] });
}, Ot = X(so)({
  "& .MuiPaper-root": {
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4
  },
  "& .MuiList-padding": {
    padding: 0
  }
}), be = X(nn)`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  width: calc(100% - 8px);
  min-width: 172px;
  margin: 0px 4px;
  border-radius: 4px;
  padding: 8px;
  height: 32px;
  gap: 8px;
  svg {
    width: 16px;
    height: 16px;
    color: ${P.palette.grey[600]};
  },
`, or = X(be)`
  color: ${P.palette.error.main};
  svg {
    color: ${P.palette.error.main};
  }
  &:hover {
    background-color: ${P.palette.error.main}1A;
  }
  &:active {
    background-color: ${P.palette.error.main}1A;
  }
`, ht = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid ${P.palette.grey[200]};
`, fe = X("div")`
  font-size: 12px;
  color: ${P.palette.grey[900]};
  flex-grow: 2;
`, Nn = X(bi)`
  width: 16px;
  height: 16px;
  color: ${P.palette.grey[900]};
`, vb = P.palette.error.main, wb = (e) => {
  const { t } = Ve(), {
    open: n,
    onClose: o,
    anchorPosition: r,
    onInsertColumnLeft: i,
    onInsertColumnRight: s,
    onFreezeColumns: a,
    onUnfreezeColumns: u,
    onDeleteColumn: h,
    onMoveColumnLeft: p,
    onMoveColumnRight: m,
    column: d,
    frozenColumnsCount: g
  } = e;
  return /* @__PURE__ */ l.jsxs(
    Ot,
    {
      open: n,
      onClose: o,
      transitionDuration: 0,
      autoFocus: !1,
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      children: [
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              i();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(It, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_before") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              s();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(It, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_after") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              p();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Wa, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_left") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              m();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(bu, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_right") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              a();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Xn, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_columns", { column: d }) })
            ]
          }
        ),
        g > 0 && /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              u();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Xn, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_columns") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(or, { onClick: h, disableRipple: !0, children: [
          /* @__PURE__ */ l.jsx(Jt, {}),
          /* @__PURE__ */ l.jsx(fe, { style: { color: vb }, children: t("cell_context.delete_column", { column: d }) })
        ] })
      ]
    }
  );
}, Cb = P.palette.error.main, Eb = (e) => {
  const { t } = Ve(), {
    open: n,
    onClose: o,
    anchorPosition: r,
    onInsertRowAbove: i,
    onInsertRowBelow: s,
    onFreezeRows: a,
    onUnfreezeRows: u,
    onDeleteRow: h,
    onMoveRowUp: p,
    onMoveRowDown: m,
    row: d,
    frozenRowsCount: g
  } = e;
  return /* @__PURE__ */ l.jsxs(
    Ot,
    {
      open: n,
      onClose: o,
      transitionDuration: 0,
      autoFocus: !1,
      anchorReference: "anchorPosition",
      anchorPosition: r ?? void 0,
      children: [
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              i();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(It, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_above") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              s();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(It, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_below") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              p();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(yu, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_up") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              m();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(vu, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_down") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              a();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Xn, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_rows", { row: d }) })
            ]
          }
        ),
        g > 0 && /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              u();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Xn, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_rows") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(or, { onClick: h, disableRipple: !0, children: [
          /* @__PURE__ */ l.jsx(Jt, {}),
          /* @__PURE__ */ l.jsx(fe, { style: { color: Cb }, children: t("cell_context.delete_row", { row: d }) })
        ] })
      ]
    }
  );
}, Sb = (e) => {
  const t = re(!1), n = re(!1), o = re(!1), r = re(null), i = re(!1), s = re(null), a = Oe(
    (p) => {
      if (p.pointerType !== "mouse" || !(t.current || n.current || o.current || i.current))
        return;
      const { canvasElement: m, model: d, worksheetCanvas: g, refresh: x } = e, f = m.current, y = g.current;
      if (!y || !f)
        return;
      const S = f.getBoundingClientRect(), j = p.clientX - S.x, C = p.clientY - S.y;
      if (o.current) {
        if (p.preventDefault(), r.current === null)
          return;
        let E = null;
        if (j >= 0 && j < le && C >= pe) {
          const T = y.getCellByCoordinates(le, C);
          T && (E = T.row);
        } else if (j >= le && C >= pe) {
          const T = y.getCellByCoordinates(j, C);
          T && (E = T.row);
        }
        if (E !== null) {
          const T = r.current;
          d.setSelectedCell(Math.min(T, E), 1), d.setSelectedRange(
            Math.min(T, E),
            1,
            Math.max(T, E),
            Ae
          ), x();
        }
        return;
      }
      if (i.current) {
        if (p.preventDefault(), s.current === null)
          return;
        let E = null;
        if (j >= le && C >= 0 && C < pe) {
          const T = y.getCellByCoordinates(j, pe);
          T && (E = T.column);
        } else if (j >= le && C >= pe) {
          const T = y.getCellByCoordinates(j, C);
          T && (E = T.column);
        }
        if (E !== null) {
          const T = s.current;
          d.setSelectedCell(1, Math.min(T, E)), d.setSelectedRange(
            1,
            Math.min(T, E),
            Le,
            Math.max(T, E)
          ), x();
        }
        return;
      }
      const w = y.getCellByCoordinates(j, C);
      if (w) {
        if (t.current)
          e.onAreaSelecting(w);
        else if (n.current) {
          const { workbookState: E } = e, T = E.getEditingCell();
          if (!T || !T.referencedRange)
            return;
          const R = T.referencedRange.range;
          R.rowEnd = w.row, R.columnEnd = w.column;
          const F = d.getWorksheetsProperties().map((I) => I.name);
          T.referencedRange.str = ft(
            R,
            T.sheet,
            F[R.sheet]
          ), E.setEditingCell(T), x();
        }
      }
    },
    [e]
  ), u = Oe(
    (p) => {
      if (t.current) {
        const { worksheetElement: m } = e;
        t.current = !1, m.current?.releasePointerCapture(p.pointerId), e.onAreaSelected();
      } else if (n.current) {
        const { worksheetElement: m } = e;
        n.current = !1, m.current?.releasePointerCapture(p.pointerId);
      } else if (o.current) {
        const { worksheetElement: m } = e;
        o.current = !1, r.current = null, m.current?.releasePointerCapture(p.pointerId);
      } else if (i.current) {
        const { worksheetElement: m } = e;
        i.current = !1, s.current = null, m.current?.releasePointerCapture(p.pointerId);
      }
    },
    [e]
  );
  return {
    onPointerDown: Oe(
      (p) => {
        const m = p.target;
        if (m.className === "column-resize-handle" || m.className.includes("ironcalc-cell-handle"))
          return;
        let d = p.clientX, g = p.clientY;
        const {
          canvasElement: x,
          model: f,
          refresh: y,
          worksheetElement: S,
          worksheetCanvas: j,
          workbookState: C,
          onRowSelected: w,
          onColumnSelected: E,
          onAllSheetSelected: T
        } = e, R = j.current, F = x.current, I = S.current;
        if (!F || !R || !I)
          return;
        const H = F.getBoundingClientRect();
        if (d -= H.x, g -= H.y, d > H.width || d < le || g < pe || g > H.height) {
          if (d < le && g < pe)
            T();
          else if (d > 0 && d < le && g > pe && g < H.height) {
            const D = R.getCellByCoordinates(le, g);
            D && (p.shiftKey ? w(D.row, !0) : (p.preventDefault(), r.current = D.row, o.current = !0, I.setPointerCapture(p.pointerId), w(D.row, !1)));
          } else if (d > le && d < H.width && g > 0 && g < pe) {
            const D = R.getCellByCoordinates(d, pe);
            D && (p.shiftKey ? E(D.column, !0) : (p.preventDefault(), s.current = D.column, i.current = !0, I.setPointerCapture(p.pointerId), E(D.column, !1)));
          }
          return;
        }
        const B = C.getEditingCell(), v = R.getCellByCoordinates(d, g);
        if (v) {
          if (B) {
            if (f.getSelectedSheet() === B.sheet && v.row === B.row && v.column === B.column)
              return;
            const D = B.text;
            if (pn(D, B.cursorEnd)) {
              const M = {
                sheet: f.getSelectedSheet(),
                rowStart: v.row,
                rowEnd: v.row,
                columnStart: v.column,
                columnEnd: v.column
              }, A = f.getWorksheetsProperties().map((_) => _.name);
              B.referencedRange = {
                range: M,
                str: ft(
                  M,
                  B.sheet,
                  A[M.sheet]
                )
              }, C.setEditingCell(B), p.stopPropagation(), p.preventDefault(), n.current = !0, I.setPointerCapture(p.pointerId), y();
              return;
            }
            C.clearEditingCell(), f.setUserInput(
              B.sheet,
              B.row,
              B.column,
              B.text
            );
          }
          p.shiftKey ? (e.onAreaSelecting(v), e.onAreaSelected()) : (e.onCellSelected(v, p), t.current = !0, I.setPointerCapture(p.pointerId));
        }
      },
      [e]
    ),
    onPointerMove: a,
    onPointerUp: u
  };
};
function _b() {
  const [e, t] = oe([0, 0]);
  return gi(() => {
    function n() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n);
  }, []), e;
}
const Rb = Na(
  (e, t) => {
    const n = re(null), o = re(null), r = re(null), i = re(null), s = re(null), a = re(null), u = re(null), h = re(null), p = re(null), m = re(null), d = re(null), g = re(null), [x, f] = oe(!1), [y, S] = oe(!1), [j, C] = oe(!1), [w, E] = oe(null), T = re(!1), { model: R, workbookState: F, refresh: I } = e, [H, B] = _b();
    Ba(t, () => ({
      getCanvas: () => g.current
    })), Ie(() => {
      const _ = n.current, U = p.current, J = m.current, K = d.current, O = o.current, b = a.current, $ = u.current, z = h.current, N = i.current;
      if (!_ || !U || !J || !K || !O || !b || !$ || !z || !r.current || !N)
        return;
      R.setWindowWidth(H - 37), R.setWindowHeight(B - 190);
      const q = new bb({
        width: O.clientWidth,
        height: O.clientHeight,
        model: R,
        workbookState: F,
        elements: {
          canvas: _,
          columnGuide: U,
          rowGuide: J,
          columnHeaders: K,
          cellOutline: b,
          areaOutline: $,
          extendToOutline: z,
          editor: N
        },
        onColumnWidthChanges(V, ie, ue) {
          if (ue < 0)
            return;
          const { range: ce } = R.getSelectedView();
          let Ne = ie, $e = ie;
          const De = ce[0] === 1 && ce[2] === Le, Be = ce[1] === 1 && ce[3] === Ae;
          De && ie >= ce[1] && ie <= ce[3] && !Be && (Ne = Math.min(ce[1], ie, ce[3]), $e = Math.max(ce[1], ie, ce[3])), R.setColumnsWidth(V, Ne, $e, ue), g.current?.renderSheet();
        },
        onRowHeightChanges(V, ie, ue) {
          if (ue < 0)
            return;
          const { range: ce } = R.getSelectedView();
          let Ne = ie, $e = ie;
          const De = ce[0] === 1 && ce[2] === Le;
          ce[1] === 1 && ce[3] === Ae && ie >= ce[0] && ie <= ce[2] && !De && (Ne = Math.min(ce[0], ie, ce[2]), $e = Math.max(ce[0], ie, ce[2])), R.setRowsHeight(V, Ne, $e, ue), g.current?.renderSheet();
        },
        refresh: I
      }), G = R.getScrollX(), W = R.getScrollY(), [Z, Q] = [G + 1e5, W + 5e5];
      s.current && (s.current.style.height = `${Q}px`, s.current.style.width = `${Z}px`);
      const Y = r.current.scrollLeft, ee = r.current.scrollTop;
      G !== Y && (T.current = !0, r.current.scrollLeft = G, setTimeout(() => {
        T.current = !1;
      }, 0)), W !== ee && (T.current = !0, r.current.scrollTop = W, setTimeout(() => {
        T.current = !1;
      }, 0)), q.renderSheet(), g.current = q;
    });
    const { onPointerMove: v, onPointerDown: D, onPointerUp: M } = Sb({
      model: R,
      workbookState: F,
      refresh: I,
      onColumnSelected: (_, U) => {
        let J = _, K = _;
        if (U) {
          const { range: O } = R.getSelectedView();
          J = Math.min(O[1], _, O[3]), K = Math.max(O[3], _, O[1]);
        }
        R.setSelectedCell(1, J), R.setSelectedRange(1, J, Le, K), I();
      },
      onRowSelected: (_, U) => {
        let J = _, K = _;
        if (U) {
          const { range: O } = R.getSelectedView();
          J = Math.min(O[0], _, O[2]), K = Math.max(O[2], _, O[0]);
        }
        R.setSelectedCell(J, 1), R.setSelectedRange(J, 1, K, Ae), I();
      },
      onAllSheetSelected: () => {
        R.setSelectedCell(1, 1), R.setSelectedRange(1, 1, Le, Ae), I();
      },
      onCellSelected: (_, U) => {
        U.preventDefault(), U.stopPropagation(), R.setSelectedCell(_.row, _.column), I();
      },
      onAreaSelecting: (_) => {
        const U = g.current;
        if (!U)
          return;
        F.setSelecting(!0);
        const { row: J, column: K } = _;
        R.onAreaSelecting(J, K), U.renderSheet(), I();
      },
      onAreaSelected: () => {
        F.setSelecting(!1);
        const _ = F.getCopyStyles();
        if (_?.length) {
          R.onPasteStyles(_);
          const U = g.current;
          if (!U)
            return;
          U.renderSheet();
        }
        F.setCopyStyles(null), o.current && (o.current.style.cursor = "auto"), I();
      },
      canvasElement: n,
      worksheetElement: o,
      worksheetCanvas: g
    }), A = () => {
      if (!r.current || !g.current || T.current)
        return;
      const _ = r.current.scrollLeft, U = r.current.scrollTop;
      g.current.setScrollPosition({ left: _, top: U }), g.current.renderSheet();
    };
    return /* @__PURE__ */ l.jsxs(jb, { ref: r, onScroll: A, className: "scroll", children: [
      /* @__PURE__ */ l.jsx(Tb, { ref: s }),
      /* @__PURE__ */ l.jsxs(
        kb,
        {
          className: "sheet-container",
          ref: o,
          onPointerDown: D,
          onPointerMove: v,
          onPointerUp: M,
          onContextMenu: (_) => {
            _.preventDefault(), _.stopPropagation(), E({
              top: _.clientY,
              left: _.clientX
            });
            const U = n.current;
            if (U) {
              const J = U.getBoundingClientRect(), K = _.clientX - J.x, O = _.clientY - J.y;
              if (K > le && K < J.width && O > 0 && O < pe) {
                S(!0);
                return;
              }
              if (K > 0 && K < le && O > pe && O < J.height) {
                C(!0);
                return;
              }
            }
            f(!0);
          },
          onDoubleClick: (_) => {
            const { sheet: U, row: J, column: K } = R.getSelectedView(), O = R.getCellContent(U, J, K), b = R.getColumnWidth(U, K) * Qn, $ = R.getRowHeight(U, J) * Jn;
            F.setEditingCell({
              sheet: U,
              row: J,
              column: K,
              text: O,
              cursorStart: O.length,
              cursorEnd: O.length,
              focus: "cell",
              referencedRange: null,
              activeRanges: [],
              mode: "accept",
              editorWidth: b,
              editorHeight: $
            }), _.stopPropagation(), e.refresh();
          },
          children: [
            /* @__PURE__ */ l.jsx($b, { ref: n }),
            /* @__PURE__ */ l.jsx(Db, { ref: a }),
            /* @__PURE__ */ l.jsx(Fb, { ref: i, children: /* @__PURE__ */ l.jsx(
              wl,
              {
                originalText: F.getEditingText(),
                onEditEnd: () => {
                  e.refresh();
                },
                onTextUpdated: () => {
                  e.refresh();
                },
                model: R,
                workbookState: F,
                type: "cell"
              }
            ) }),
            /* @__PURE__ */ l.jsx(Ab, { ref: u }),
            /* @__PURE__ */ l.jsx(Ib, { ref: h }),
            /* @__PURE__ */ l.jsx(Pb, { ref: p }),
            /* @__PURE__ */ l.jsx(Mb, { ref: m }),
            /* @__PURE__ */ l.jsx(Ob, { ref: d })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        yb,
        {
          open: x,
          onClose: () => f(!1),
          anchorPosition: w,
          onInsertRowAbove: () => {
            const _ = R.getSelectedView();
            R.insertRows(_.sheet, _.row, 1), f(!1);
          },
          onInsertRowBelow: () => {
            const _ = R.getSelectedView();
            R.insertRows(_.sheet, _.row + 1, 1), f(!1);
          },
          onInsertColumnLeft: () => {
            const _ = R.getSelectedView();
            R.insertColumns(_.sheet, _.column, 1), f(!1);
          },
          onInsertColumnRight: () => {
            const _ = R.getSelectedView();
            R.insertColumns(_.sheet, _.column + 1, 1), f(!1);
          },
          onMoveColumnLeft: () => {
            const _ = R.getSelectedView();
            R.moveColumn(_.sheet, _.column, -1), f(!1);
          },
          onMoveColumnRight: () => {
            const _ = R.getSelectedView();
            R.moveColumn(_.sheet, _.column, 1), f(!1);
          },
          onMoveRowUp: () => {
            const _ = R.getSelectedView();
            R.moveRow(_.sheet, _.row, -1), f(!1);
          },
          onMoveRowDown: () => {
            const _ = R.getSelectedView();
            R.moveRow(_.sheet, _.row, 1), f(!1);
          },
          onFreezeColumns: () => {
            const _ = R.getSelectedView();
            R.setFrozenColumnsCount(_.sheet, _.column), f(!1);
          },
          onFreezeRows: () => {
            const _ = R.getSelectedView();
            R.setFrozenRowsCount(_.sheet, _.row), f(!1);
          },
          onUnfreezeColumns: () => {
            const _ = R.getSelectedSheet();
            R.setFrozenColumnsCount(_, 0), f(!1);
          },
          onUnfreezeRows: () => {
            const _ = R.getSelectedSheet();
            R.setFrozenRowsCount(_, 0), f(!1);
          },
          onDeleteRow: () => {
            const _ = R.getSelectedView();
            R.deleteRows(_.sheet, _.row, 1), f(!1);
          },
          onDeleteColumn: () => {
            const _ = R.getSelectedView();
            R.deleteColumns(_.sheet, _.column, 1), f(!1);
          },
          row: R.getSelectedView().row,
          column: He(R.getSelectedView().column)
        }
      ),
      /* @__PURE__ */ l.jsx(
        wb,
        {
          open: y,
          onClose: () => S(!1),
          anchorPosition: w,
          onInsertColumnLeft: () => {
            const _ = R.getSelectedView();
            R.insertColumns(_.sheet, _.column, 1), S(!1);
          },
          onInsertColumnRight: () => {
            const _ = R.getSelectedView();
            R.insertColumns(_.sheet, _.column + 1, 1), S(!1);
          },
          onMoveColumnLeft: () => {
            const _ = R.getSelectedView();
            R.moveColumn(_.sheet, _.column, -1), S(!1);
          },
          onMoveColumnRight: () => {
            const _ = R.getSelectedView();
            R.moveColumn(_.sheet, _.column, 1), S(!1);
          },
          onFreezeColumns: () => {
            const _ = R.getSelectedView();
            R.setFrozenColumnsCount(_.sheet, _.column), S(!1);
          },
          onUnfreezeColumns: () => {
            const _ = R.getSelectedSheet();
            R.setFrozenColumnsCount(_, 0), S(!1);
          },
          onDeleteColumn: () => {
            const _ = R.getSelectedView();
            R.deleteColumns(_.sheet, _.column, 1), S(!1);
          },
          column: He(R.getSelectedView().column),
          frozenColumnsCount: R.getFrozenColumnsCount(
            R.getSelectedSheet()
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        Eb,
        {
          open: j,
          onClose: () => C(!1),
          anchorPosition: w,
          onInsertRowAbove: () => {
            const _ = R.getSelectedView();
            R.insertRows(_.sheet, _.row, 1), C(!1);
          },
          onInsertRowBelow: () => {
            const _ = R.getSelectedView();
            R.insertRows(_.sheet, _.row + 1, 1), C(!1);
          },
          onMoveRowUp: () => {
            const _ = R.getSelectedView();
            R.moveRow(_.sheet, _.row, -1), C(!1);
          },
          onMoveRowDown: () => {
            const _ = R.getSelectedView();
            R.moveRow(_.sheet, _.row, 1), C(!1);
          },
          onFreezeRows: () => {
            const _ = R.getSelectedView();
            R.setFrozenRowsCount(_.sheet, _.row), C(!1);
          },
          onUnfreezeRows: () => {
            const _ = R.getSelectedSheet();
            R.setFrozenRowsCount(_, 0), C(!1);
          },
          onDeleteRow: () => {
            const _ = R.getSelectedView();
            R.deleteRows(_.sheet, _.row, 1), C(!1);
          },
          row: R.getSelectedView().row,
          frozenRowsCount: R.getFrozenRowsCount(R.getSelectedSheet())
        }
      )
    ] });
  }
), Tb = ne("div")`
  position: absolute;
  height: 5000px;
  width: 5000px;
`, kb = ne("div")`
  position: sticky;
  top: 0px;
  left: 0px;
  height: 100%;

  .column-resize-handle {
    position: absolute;
    top: 0px;
    width: 3px;
    opacity: 0;
    background: ${Ke};
    border-radius: 5px;
    cursor: col-resize;
  }

  .column-resize-handle:hover {
    opacity: 1;
  }
  .row-resize-handle {
    position: absolute;
    left: 0px;
    height: 3px;
    opacity: 0;
    background: ${Ke};
    border-radius: 5px;
    cursor: row-resize;
  }

  .row-resize-handle:hover {
    opacity: 1;
  }
`, jb = ne("div")({
  position: "absolute",
  overflow: "scroll",
  top: gl + 1,
  left: 0,
  right: 0,
  bottom: xl + 1,
  overscrollBehavior: "none"
}), $b = ne("canvas")`
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 40px;
`, Pb = ne("div")`
  position: absolute;
  top: 0px;
  display: none;
  height: 100%;
  width: 0px;
  border-left: 1px dashed ${Ke};
`, Ob = ne("div")`
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: hidden;
  display: flex;
  & .column-header {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    height: 100%;
    user-select: none;
  }
`, Mb = ne("div")`
  position: absolute;
  display: none;
  left: 0px;
  height: 0px;
  width: 100%;
  border-top: 1px dashed ${Ke};
`, Ab = ne("div")`
  position: absolute;
  border: 0px solid ${Ke};
  border-radius: 1px;
  background-color: ${vf};
`, Db = ne("div")`
  position: absolute;
  border: 2px solid ${Ke};
  border-radius: 3px;
  word-break: break-word;
  font-size: 13px;
  display: flex;
  box-shadow: inset 0 0 0 1px white;
`, Ib = ne("div")`
  position: absolute;
  border: 1px dashed ${Ke};
  border-radius: 3px;
`, Fb = ne("div")`
  position: absolute;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  outline: none;
  resize: none;
  white-space: pre-wrap;
  vertical-align: bottom;
  overflow: hidden;
  text-align: left;
  outline: 3px solid ${yf};
  z-index: 1000;
  span {
    min-width: 1px;
  }
  font-family: monospace;
  border: 2px solid ${Ke};
`, Nb = (e) => ({ onKeyDown: Oe(
  (n) => {
    const { key: o } = n, r = o.toLowerCase(), { root: i } = e;
    if (!i.current || n.target !== i.current)
      return;
    const s = n.metaKey || n.ctrlKey, a = n.shiftKey, u = n.altKey;
    if (s && !a && !u) {
      switch (r) {
        case "z": {
          e.onUndo(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "y": {
          e.onRedo(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "b": {
          e.onBold(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "i": {
          e.onItalic(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "u": {
          e.onUnderline(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "a": {
          n.stopPropagation(), n.preventDefault();
          break;
        }
        case " ": {
          e.onSelectColumn(), n.stopPropagation(), n.preventDefault();
          break;
        }
      }
      Cf(o) && (e.onNavigationToEdge(o), n.stopPropagation(), n.preventDefault());
      return;
    }
    if (s && a && !u) {
      r === "z" && (e.onRedo(), n.stopPropagation(), n.preventDefault());
      return;
    }
    if (a && !u && !s)
      switch (o) {
        case " ": {
          e.onSelectRow(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "ArrowRight":
        case "ArrowLeft":
        case "ArrowUp":
        case "ArrowDown": {
          e.onExpandAreaSelectedKeyboard(o);
          break;
        }
        case "Tab": {
          e.onArrowLeft(), n.stopPropagation(), n.preventDefault();
          break;
        }
      }
    if (u && !s && !a) {
      switch (o) {
        case "ArrowDown": {
          e.onNextSheet(), n.stopPropagation(), n.preventDefault();
          break;
        }
        case "ArrowUp": {
          e.onPreviousSheet(), n.stopPropagation(), n.preventDefault();
          break;
        }
      }
      return;
    }
    if (!(s || u)) {
      if (wf(o) || o === "Backspace") {
        const h = o === "Backspace" ? "" : o;
        e.onEditKeyPressStart(h), n.stopPropagation(), n.preventDefault();
        return;
      }
      if (!a) {
        if (o === "F2") {
          e.onCellEditStart(), n.stopPropagation(), n.preventDefault();
          return;
        }
        switch (o) {
          case "ArrowRight":
          case "Tab": {
            e.onArrowRight();
            break;
          }
          case "ArrowLeft": {
            e.onArrowLeft();
            break;
          }
          case "ArrowDown":
          case "Enter": {
            e.onArrowDown();
            break;
          }
          case "ArrowUp": {
            e.onArrowUp();
            break;
          }
          case "End": {
            e.onKeyEnd();
            break;
          }
          case "Home": {
            e.onKeyHome();
            break;
          }
          case "Delete": {
            e.onCellsDeleted();
            break;
          }
          case "PageDown": {
            e.onPageDown();
            break;
          }
          case "PageUp": {
            e.onPageUp();
            break;
          }
          case "Escape":
            e.onEscape();
        }
        n.stopPropagation(), n.preventDefault();
      }
    }
  },
  [e]
) }), Bb = (e) => {
  const { model: t, workbookState: n } = e, o = re(null), r = re(null), i = oe(0)[1], [s, a] = oe(!1), [u, h] = oe(_h), [p, m] = oe("namedRanges"), d = Oe((b) => {
    m(b), a(!0);
  }, []), x = t.getWorksheetsProperties().map(
    ({ name: b, color: $, sheet_id: z, state: N }) => ({ name: b, color: $ || "#FFF", sheetId: z, state: N })
  ), f = Oe(() => {
    if (o.current) {
      o.current.focus({ preventScroll: !0 });
      const b = window.getSelection();
      if (b) {
        b.empty();
        const $ = new Range();
        $.setStart(o.current.firstChild, 0), $.setEnd(o.current.firstChild, 0), b.addRange($);
      }
    }
  }, []), y = () => {
    t.redo(), i((b) => b + 1);
  }, S = () => {
    t.undo(), i((b) => b + 1);
  }, j = (b, $) => {
    const {
      sheet: z,
      range: [N, q, G, W]
    } = t.getSelectedView(), Z = Math.min(N, G), Q = Math.min(q, W), Y = {
      sheet: z,
      row: Z,
      column: Q,
      width: Math.abs(W - q) + 1,
      height: Math.abs(G - N) + 1
    };
    t.updateRangeStyle(Y, b, $), i((ee) => ee + 1);
  }, C = (b) => {
    j("font.u", `${b}`);
  }, w = (b) => {
    j("font.i", `${b}`);
  }, E = (b) => {
    j("font.b", `${b}`);
  }, T = (b) => {
    j("font.strike", `${b}`);
  }, R = (b) => {
    j("alignment.horizontal", b);
  }, F = (b) => {
    j("alignment.vertical", b);
  }, I = (b) => {
    j("alignment.wrap_text", `${b}`);
  }, H = (b) => {
    j("font.color", b);
  }, B = (b) => {
    j("fill.fg_color", b);
  }, v = (b) => {
    j("num_fmt", b);
  }, D = (b) => {
    j("font.size_delta", `${b}`);
  }, M = () => {
    const {
      sheet: b,
      range: [$, z, N, q]
    } = t.getSelectedView(), G = Math.min($, N), W = Math.min(z, q), Z = Math.max($, N), Q = Math.max(z, q), Y = [];
    for (let V = G; V <= Z; V++) {
      const ie = [];
      for (let ue = W; ue <= Q; ue++)
        ie.push(t.getCellStyle(b, V, ue));
      Y.push(ie);
    }
    n.setCopyStyles(Y);
    const ee = o.current?.getElementsByClassName("sheet-container")[0];
    if (ee) {
      const V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paint-roller" style="transform:rotate(-8deg)"><rect width="16" height="6" x="2" y="2" rx="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect width="4" height="6" x="8" y="16" rx="1"></rect></svg>';
      ee.style.cursor = `url('data:image/svg+xml;utf8,${encodeURIComponent(V)}'), auto`;
    }
  }, A = t.getFmtSettings(), { onKeyDown: _ } = Nb({
    onCellsDeleted: () => {
      const {
        sheet: b,
        range: [$, z, N, q]
      } = t.getSelectedView(), G = Math.min($, N), W = Math.min(z, q), Z = Math.abs(q - z), Q = Math.abs(N - $);
      t.rangeClearContents(
        b,
        G,
        W,
        G + Q,
        W + Z
      ), i((Y) => Y + 1);
    },
    onExpandAreaSelectedKeyboard: (b) => {
      t.onExpandSelectedRange(b), i(($) => $ + 1);
    },
    onEditKeyPressStart: (b) => {
      const { sheet: $, row: z, column: N } = t.getSelectedView(), q = t.getColumnWidth($, N) * Qn, G = t.getRowHeight($, z) * Jn;
      n.setEditingCell({
        sheet: $,
        row: z,
        column: N,
        text: b,
        cursorStart: b.length,
        cursorEnd: b.length,
        focus: "cell",
        referencedRange: null,
        activeRanges: [],
        mode: "accept",
        editorWidth: q,
        editorHeight: G
      }), i((W) => W + 1);
    },
    onCellEditStart: () => {
      const { sheet: b, row: $, column: z } = t.getSelectedView(), N = t.getCellContent(b, $, z), q = t.getColumnWidth(b, z) * Qn, G = t.getRowHeight(b, $) * Jn;
      n.setEditingCell({
        sheet: b,
        row: $,
        column: z,
        text: N,
        cursorStart: N.length,
        cursorEnd: N.length,
        referencedRange: null,
        focus: "cell",
        activeRanges: [],
        mode: "edit",
        editorWidth: q,
        editorHeight: G
      }), i((W) => W + 1);
    },
    onBold: () => {
      const { sheet: b, row: $, column: z } = t.getSelectedView(), N = t.getCellStyle(b, $, z).font.b;
      E(!N);
    },
    onItalic: () => {
      const { sheet: b, row: $, column: z } = t.getSelectedView(), N = t.getCellStyle(b, $, z).font.i;
      w(!N);
    },
    onUnderline: () => {
      const { sheet: b, row: $, column: z } = t.getSelectedView(), N = t.getCellStyle(b, $, z).font.u;
      C(!N);
    },
    onNavigationToEdge: (b) => {
      t.onNavigateToEdgeInDirection(b), i(($) => $ + 1);
    },
    onPageDown: () => {
      t.onPageDown(), i((b) => b + 1);
    },
    onPageUp: () => {
      t.onPageUp(), i((b) => b + 1);
    },
    onArrowDown: () => {
      t.onArrowDown(), i((b) => b + 1);
    },
    onArrowUp: () => {
      t.onArrowUp(), i((b) => b + 1);
    },
    onArrowLeft: () => {
      t.onArrowLeft(), i((b) => b + 1);
    },
    onArrowRight: () => {
      t.onArrowRight(), i((b) => b + 1);
    },
    onKeyHome: () => {
      const b = t.getSelectedView(), $ = t.getSelectedCell();
      t.setSelectedCell($[1], 1), t.setTopLeftVisibleCell(b.top_row, 1), i((z) => z + 1);
    },
    onKeyEnd: () => {
      const b = t.getSelectedView(), $ = t.getSelectedCell();
      t.setSelectedCell($[1], Ae), t.setTopLeftVisibleCell(b.top_row, Ae - 5), i((z) => z + 1);
    },
    onUndo: () => {
      t.undo(), i((b) => b + 1);
    },
    onRedo: () => {
      t.redo(), i((b) => b + 1);
    },
    onNextSheet: () => {
      const b = t.getSelectedSheet() + 1;
      b >= t.getWorksheetsProperties().length ? t.setSelectedSheet(0) : t.setSelectedSheet(b);
    },
    onPreviousSheet: () => {
      const b = t.getSelectedSheet() - 1;
      b < 0 ? t.setSelectedSheet(t.getWorksheetsProperties().length - 1) : t.setSelectedSheet(b);
    },
    onEscape: () => {
      n.clearCutRange(), n.setCopyStyles(null);
      const b = o.current?.getElementsByClassName("sheet-container")[0];
      b && (b.style.cursor = "auto"), i(($) => $ + 1);
    },
    onSelectColumn: () => {
      const { column: b } = t.getSelectedView();
      t.setSelectedRange(1, b, Le, b), i(($) => $ + 1);
    },
    onSelectRow: () => {
      const { row: b } = t.getSelectedView();
      t.setSelectedRange(b, 1, b, Ae), i(($) => $ + 1);
    },
    root: o
  });
  Ie(() => {
    o.current && (n.getEditingCell() || f());
  });
  const U = Oe(() => {
    const {
      row: b,
      column: $,
      range: [z, N, q, G]
    } = t.getSelectedView();
    return Ef(
      { rowStart: z, rowEnd: q, columnStart: N, columnEnd: G },
      { row: b, column: $ }
    );
  }, [t]), J = () => {
    if (n.getEditingCell())
      return n.getEditingText();
    const { sheet: $, row: z, column: N } = t.getSelectedView();
    return t.getCellContent($, z, N);
  }, O = Oe(() => {
    const { sheet: b, row: $, column: z } = t.getSelectedView();
    return t.getCellStyle(b, $, z);
  }, [t])();
  return /* @__PURE__ */ l.jsxs(
    Lb,
    {
      ref: o,
      onKeyDown: _,
      tabIndex: 0,
      onClick: (b) => {
        n.getEditingCell() ? b.stopPropagation() : f();
      },
      onPaste: (b) => {
        n.clearCutRange();
        const { items: $ } = b.clipboardData;
        if (!$)
          return;
        const z = [
          "application/json",
          "text/plain",
          "text/csv",
          "text/html"
        ];
        let N = null, q = null;
        for (let G = 0; G < z.length && (N = z[G], q = b.clipboardData.getData(N), !q); G += 1)
          ;
        if (!(!N || !q)) {
          if (N === "application/json") {
            const G = JSON.parse(q), W = /* @__PURE__ */ new Map(), Z = G.sheetData;
            for (const Q of Object.keys(Z)) {
              const Y = Z[Q], ee = /* @__PURE__ */ new Map();
              for (const V of Object.keys(Y))
                ee.set(Number.parseInt(V, 10), Y[V]);
              W.set(Number.parseInt(Q, 10), ee);
            }
            t.pasteFromClipboard(
              G.sheet,
              G.area,
              W,
              G.type === "cut"
            ), i((Q) => Q + 1);
          } else if (N === "text/plain") {
            const {
              sheet: G,
              range: [W, Z, Q, Y]
            } = t.getSelectedView(), ee = Math.min(W, Q), V = Math.min(Z, Y), ie = {
              sheet: G,
              row: ee,
              column: V,
              width: Math.abs(Y - Z) + 1,
              height: Math.abs(Q - W) + 1
            };
            t.pasteCsvText(ie, q), i((ue) => ue + 1);
          }
          b.preventDefault(), b.stopPropagation();
        }
      },
      onCopy: (b) => {
        const $ = t.copyToClipboard(), z = t.getSelectedSheet();
        let N = sessionStorage.getItem(
          Ro
        );
        N || (N = Ss(), sessionStorage.setItem(Ro, N));
        const q = {};
        $.data.forEach((W, Z) => {
          const Q = {};
          W.forEach((Y, ee) => {
            Q[ee] = Y;
          }), q[Z] = Q;
        });
        const G = JSON.stringify({
          type: "copy",
          area: $.range,
          sheetData: q,
          sheet: z,
          clipboardId: N
        });
        b.clipboardData.setData("text/plain", $.csv.trim()), b.clipboardData.setData("application/json", G), b.preventDefault(), b.stopPropagation();
      },
      onCut: (b) => {
        const $ = t.copyToClipboard(), z = t.getSelectedSheet();
        let N = sessionStorage.getItem(
          Ro
        );
        N || (N = Ss(), sessionStorage.setItem(Ro, N));
        const q = {};
        $.data.forEach((W, Z) => {
          const Q = {};
          W.forEach((Y, ee) => {
            Q[ee] = Y;
          }), q[Z] = Q;
        });
        const G = JSON.stringify({
          type: "cut",
          area: $.range,
          sheetData: q,
          sheet: z,
          clipboardId: N
        });
        b.clipboardData.setData("text/plain", $.csv), b.clipboardData.setData("application/json", G), n.setCutRange({
          sheet: t.getSelectedSheet(),
          rowStart: $.range[0],
          rowEnd: $.range[2],
          columnStart: $.range[1],
          columnEnd: $.range[3]
        }), b.preventDefault(), b.stopPropagation(), i((W) => W + 1);
      },
      children: [
        /* @__PURE__ */ l.jsx(
          sx,
          {
            canUndo: t.canUndo(),
            canRedo: t.canRedo(),
            onRedo: y,
            onUndo: S,
            onToggleUnderline: C,
            onToggleBold: E,
            onToggleItalic: w,
            onToggleStrike: T,
            onToggleHorizontalAlign: R,
            onToggleVerticalAlign: F,
            onToggleWrapText: I,
            onCopyStyles: M,
            onTextColorPicked: H,
            onFillColorPicked: B,
            onNumberFormatPicked: v,
            onClearFormatting: () => {
              const {
                sheet: b,
                range: [$, z, N, q]
              } = t.getSelectedView();
              t.rangeClearFormatting(
                b,
                $,
                z,
                N,
                q
              ), i((G) => G + 1);
            },
            onIncreaseFontSize: (b) => {
              D(b);
            },
            onDownloadPNG: () => {
              const b = r.current?.getCanvas();
              if (!b)
                return;
              const {
                range: [$, z, N, q]
              } = t.getSelectedView();
              let [G, W] = b.getCoordinatesByCell(
                $,
                z
              );
              const [Z, Q] = b.getCoordinatesByCell(
                N + 1,
                q + 1
              ), Y = (Z - G) * At, ee = (Q - W) * At;
              G *= At, W *= At;
              const V = document.createElement("canvas");
              V.width = Y, V.height = ee;
              const ie = V.getContext("2d");
              if (!ie)
                return;
              ie.drawImage(
                b.canvas,
                G,
                W,
                Y,
                ee,
                0,
                0,
                Y,
                ee
              );
              const ue = document.createElement("a");
              ue.href = V.toDataURL("image/png"), ue.download = "ironcalc.png", ue.click();
            },
            onBorderChanged: (b) => {
              const {
                sheet: $,
                range: [z, N, q, G]
              } = t.getSelectedView(), W = Math.min(z, q), Z = Math.min(N, G), Q = Math.abs(G - N) + 1, Y = Math.abs(q - z) + 1, ee = {
                type: b.border,
                item: b
              };
              t.setAreaWithBorder(
                { sheet: $, row: W, column: Z, width: Q, height: Y },
                ee
              ), i((V) => V + 1);
            },
            fillColor: O.fill.fg_color || "#FFFFFF",
            fontColor: O.font.color,
            fontSize: O.font.sz,
            bold: O.font.b,
            underline: O.font.u,
            italic: O.font.i,
            strike: O.font.strike,
            horizontalAlign: O.alignment ? O.alignment.horizontal : "general",
            verticalAlign: O.alignment?.vertical ? O.alignment.vertical : "bottom",
            wrapText: O.alignment?.wrap_text || !1,
            canEdit: !0,
            numFmt: O.num_fmt,
            showGridLines: t.getShowGridLines(t.getSelectedSheet()),
            onToggleShowGridLines: (b) => {
              const $ = t.getSelectedSheet();
              t.setShowGridLines($, b), i((z) => z + 1);
            },
            formatOptions: A
          }
        ),
        /* @__PURE__ */ l.jsxs(zb, { $drawerWidth: s ? u : 0, children: [
          /* @__PURE__ */ l.jsx(
            Pf,
            {
              cellAddress: U(),
              formulaValue: J(),
              onChange: () => {
                i((b) => b + 1), f();
              },
              onTextUpdated: () => {
                i((b) => b + 1);
              },
              model: t,
              workbookState: n,
              openDrawer: () => {
                d("namedRanges");
              },
              canEdit: !0
            }
          ),
          /* @__PURE__ */ l.jsx(
            Rb,
            {
              model: t,
              workbookState: n,
              refresh: () => {
                i((b) => b + 1);
              },
              ref: r
            }
          ),
          /* @__PURE__ */ l.jsx(
            rb,
            {
              sheets: x,
              selectedIndex: t.getSelectedSheet(),
              workbookState: n,
              onSheetSelected: (b) => {
                x[b].state !== "visible" && t.unhideSheet(b), t.setSelectedSheet(b), i(($) => $ + 1);
              },
              onAddBlankSheet: () => {
                t.newSheet(), i((b) => b + 1);
              },
              onSheetColorChanged: (b) => {
                try {
                  t.setSheetColor(t.getSelectedSheet(), b), i(($) => $ + 1);
                } catch ($) {
                  alert(`${$}`);
                }
              },
              onSheetRenamed: (b) => {
                try {
                  t.renameSheet(t.getSelectedSheet(), b), i(($) => $ + 1);
                } catch ($) {
                  alert(`${$}`);
                }
              },
              onSheetDeleted: () => {
                const b = t.getSelectedSheet();
                t.deleteSheet(b), i(($) => $ + 1);
              },
              onHideSheet: () => {
                const b = t.getSelectedSheet();
                t.hideSheet(b), i(($) => $ + 1);
              },
              onOpenRegionalSettings: () => {
                d("regionalSettings");
              },
              model: t
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(
          kh,
          {
            isOpen: s,
            onClose: () => a(!1),
            width: u,
            onWidthChange: h,
            model: t,
            onUpdate: () => {
              i((b) => b + 1);
            },
            getSelectedArea: () => {
              const b = t.getWorksheetsProperties().map((z) => z.name), $ = t.getSelectedView();
              return bl($, b);
            },
            drawerType: p,
            initialLocale: t.getLocale(),
            initialTimezone: t.getTimezone(),
            initialLanguage: t.getLanguage(),
            onSettingsSave: (b, $, z) => {
              t.setLocale(b), t.setTimezone($), t.setLanguage(z), i((N) => N + 1);
            }
          }
        )
      ]
    }
  );
}, zb = ne("div")(
  ({ $drawerWidth: e }) => ({
    position: "absolute",
    top: `${Yo}px`,
    width: `calc(100% - ${e}px)`,
    height: `calc(100% - ${Yo}px)`
  })
), Lb = ne("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  font-family: ${({ theme: e }) => e.typography.fontFamily};

  &:focus {
    outline: none;
  }
`, Vb = { redo: "Wiederholen", undo: "Rückgängig", copy_styles: "Formatierung kopieren", clear_formatting: "Formatierung löschen", euro: "Als Euro formatieren", percentage: "Als Prozent formatieren", bold: "Fett", italic: "Kursiv", underline: "Unterstrichen", strike_through: "Durchgestrichen", align_left: "Links ausrichten", align_right: "Rechts ausrichten", align_center: "Zentrieren", format_number: "Zahlenformat", font_color: "Schriftfarbe", fill_color: "Füllfarbe", increase_font_size: "Schriftgröße erhöhen", decrease_font_size: "Schriftgröße verringern", decimal_places_increase: "Dezimalstellen erhöhen", decimal_places_decrease: "Dezimalstellen verringern", show_hide_grid_lines: "Gitternetzlinien ein-/ausblenden", named_ranges: "Benannte Bereiche", vertical_align_bottom: "Unten ausrichten", vertical_align_middle: "Mittig ausrichten", vertical_align_top: "Oben ausrichten", selected_png: "Ausgewählten Bereich als PNG exportieren", wrap_text: "Text umbrechen", scroll_left: "Nach links scrollen", scroll_right: "Nach rechts scrollen", format_menu: { auto: "Automatisch", number: "Zahl", percentage: "Prozent", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "Britisches Pfund (GBP)", date_short: "Kurzes Datum", date_long: "Langes Datum", custom: "Benutzerdefiniert", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Rahmen", all: "Alle Rahmen", inner: "Innere Rahmen", outer: "Äußere Rahmen", top: "Oberer Rahmen", bottom: "Unterer Rahmen", clear: "Rahmen entfernen", left: "Linker Rahmen", right: "Rechter Rahmen", horizontal: "Horizontale Rahmen", vertical: "Vertikale Rahmen", color: "Rahmenfarbe", style: "Rahmenstil" } }, Hb = { title: "Benutzerdefiniertes Zahlenformat", label: "Zahlenformat", close: "Dialog schließen", save: "Speichern" }, Wb = { rename: "Speichern", label: "Neuer Name", title: "Tabellenblatt umbenennen", close: "Dialog schließen" }, Ub = { title: "Bist du sicher?", message: "Das Tabellenblatt '{{sheetName}}' wird gelöscht.", confirm: "Ja, Tabellenblatt löschen", cancel: "Abbrechen" }, Gb = { rename: "Umbenennen", change_color: "Farbe ändern", delete: "Löschen", hide_sheet: "Tabellenblatt ausblenden" }, Yb = { update: "Aktualisieren", label: "Formel", title: "Formel aktualisieren" }, qb = { manage_named_ranges: "Benannte Bereiche verwalten" }, Kb = { add_sheet: "Tabellenblatt hinzufügen", sheet_list: "Tabellenblattliste" }, Xb = { title: "Benannte Bereiche", empty_message1: "Es wurden noch keine benannten Bereiche hinzugefügt.", empty_message2: "Klicke auf „Neu hinzufügen“, um einen anzulegen.", name: "Name", range: "Geltungsbereich", scope: "Bereich", help: "Über benannte Bereiche", new: "Neu hinzufügen", workbook: "Arbeitsmappe", global: "(Global)", close: "Dialog schließen", delete: "Bereich löschen", edit: "Bereich bearbeiten", back_to_list: "Zurück zur Liste", add_new_range: "Neuen Bereich hinzufügen", edit_range: "Bereich bearbeiten", new_named_range: "Neuer benannter Bereich", range_name: "Bereichsname", enter_range_name: "Bereichsnamen eingeben", scope_label: "Geltungsbereich", scope_helper: "Der Geltungsbereich bestimmt, wo der benannte Bereich verfügbar ist.", refers_to: "Bezieht sich auf", enter_formula: "Formel eingeben", cancel: "Abbrechen", apply: "Änderungen übernehmen", discard: "Änderungen verwerfen", default_range_prefix: "Bereich", errors: { range_name_required: "Der Bereichsname ist erforderlich", name_cannot_contain_spaces: "Der Name darf keine Leerzeichen enthalten", name_cannot_start_with_number: "Der Name darf nicht mit einer Zahl beginnen", name_invalid_characters: "Der Name enthält ungültige Zeichen. Verwende nur Buchstaben, Zahlen, Unterstriche und Punkte. Muss mit einem Buchstaben oder Unterstrich beginnen.", name_already_exists: "Dieser Name existiert bereits im ausgewählten Geltungsbereich" } }, Zb = { insert_row_above: "1 Zeile oberhalb einfügen", insert_row_below: "1 Zeile unterhalb einfügen", insert_column_before: "1 Spalte links einfügen", insert_column_after: "1 Spalte rechts einfügen", freeze_columns: "Bis Spalte '{{column}}' fixieren", freeze_rows: "Bis Zeile '{{row}}' fixieren", unfreeze_rows: "Fixierung der Zeilen aufheben", unfreeze_columns: "Fixierung der Spalten aufheben", delete_row: "Zeile '{{row}}' löschen", delete_column: "Spalte '{{column}}' löschen", freeze: "Fixieren", insert_row: "Zeile einfügen", insert_column: "Spalte einfügen", move_row: "Zeile verschieben", move_column: "Spalte verschieben", move_row_up: "Zeile nach oben verschieben", move_row_down: "Zeile nach unten verschieben", move_column_left: "Spalte nach links verschieben", move_column_right: "Spalte nach rechts verschieben" }, Jb = { apply: "Farbe hinzufügen", cancel: "Abbrechen", add: "Neue Farbe hinzufügen", default: "Standardfarbe", no_fill: "Keine Füllung", recent: "Zuletzt verwendet" }, Qb = { resize_drawer: "Größe der Seitenleiste ändern", close: "Schließen" }, e1 = { open_regional_settings: "Regionaleinstellungen öffnen", title: "Regionaleinstellungen", close: "Dialog schließen", locale: { title: "Regionaleinstellung", locale_label: "Regionaleinstellung", locale_example1: "Zahl", locale_example2: "Datum und Uhrzeit", locale_example3: "Formeltrennzeichen", delimiter_comma: "Komma", delimiter_semicolon: "Semikolon" }, language: { title: "Sprache", language_label: "Engine-Sprache", language_helper: "Legt die Sprache für Funktionsnamen und Fehlermeldungen fest.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Englisch", es: "Spanisch", fr: "Französisch", de: "Deutsch", it: "Italienisch" } }, timezone: { title: "Zeitzone", timezone_label: "Zeitzone", timezone_helper: "Das Ändern dieser Einstellung wirkt sich auf datums- und zeitbezogene Funktionen aus, einschließlich HEUTE() und JETZT()." } }, t1 = {
  toolbar: Vb,
  num_fmt: Hb,
  sheet_rename: Wb,
  sheet_delete: Ub,
  sheet_tab: Gb,
  formula_input: Yb,
  formula_bar: qb,
  navigation: Kb,
  name_manager_dialog: Xb,
  cell_context: Zb,
  color_picker: Jb,
  right_drawer: Qb,
  regional_settings: e1
}, n1 = { redo: "Redo", undo: "Undo", copy_styles: "Copy styles", clear_formatting: "Clear formatting", euro: "Format as Euro", percentage: "Format as percentage", bold: "Bold", italic: "Italic", underline: "Underline", strike_through: "Strikethrough", align_left: "Align left", align_right: "Align right", align_center: "Align center", format_number: "Format number", font_color: "Font color", fill_color: "Fill color", increase_font_size: "Increase font size", decrease_font_size: "Decrease font size", decimal_places_increase: "Increase decimal places", decimal_places_decrease: "Decrease decimal places", show_hide_grid_lines: "Show/hide grid lines", named_ranges: "Named ranges", vertical_align_bottom: "Align bottom", vertical_align_middle: "Align middle", vertical_align_top: "Align top", selected_png: "Export selected area as PNG", wrap_text: "Wrap text", scroll_left: "Scroll left", scroll_right: "Scroll right", format_menu: { auto: "Auto", number: "Number", percentage: "Percentage", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "British Pound (GBP)", date_short: "Short date", date_long: "Long date", custom: "Custom", number_example: "1,000.00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Borders", all: "All borders", inner: "Inner borders", outer: "Outer borders", top: "Top borders", bottom: "Bottom borders", clear: "Clear borders", left: "Left borders", right: "Right borders", horizontal: "Horizontal borders", vertical: "Vertical borders", color: "Border color", style: "Border style" } }, o1 = { title: "Custom number format", label: "Number format", close: "Close dialog", save: "Save" }, r1 = { rename: "Save", label: "New name", title: "Rename Sheet", close: "Close dialog" }, i1 = { title: "Are you sure?", message: "The sheet '{{sheetName}}' will be deleted.", confirm: "Yes, delete sheet", cancel: "Cancel" }, s1 = { rename: "Rename", change_color: "Change Color", delete: "Delete", hide_sheet: "Hide sheet" }, a1 = { update: "Update", label: "Formula", title: "Update formula" }, l1 = { manage_named_ranges: "Manage Named Ranges" }, c1 = { add_sheet: "Add sheet", sheet_list: "Sheet list" }, u1 = { title: "Named Ranges", empty_message1: "No named ranges added yet.", empty_message2: "Click on 'Add new' to add one.", name: "Name", range: "Scope", scope: "Range", help: "About Named Ranges", new: "Add new", workbook: "Workbook", global: "(Global)", close: "Close dialog", delete: "Delete Range", edit: "Edit Range", back_to_list: "Back to list", add_new_range: "Add a new range", edit_range: "Edit range", new_named_range: "New Named Range", range_name: "Range name", enter_range_name: "Enter range name", scope_label: "Scope", scope_helper: "The scope of the named range determines where it is available.", refers_to: "Refers to", enter_formula: "Enter formula", cancel: "Cancel", apply: "Apply changes", discard: "Discard changes", default_range_prefix: "Range", errors: { range_name_required: "Range name is required", name_cannot_contain_spaces: "Name cannot contain spaces", name_cannot_start_with_number: "Name cannot start with a number", name_invalid_characters: "Name contains invalid characters. Use only letters, numbers, underscores, and periods. Must start with a letter or underscore.", name_already_exists: "This name already exists in the selected scope" } }, d1 = { insert_row_above: "Insert 1 row above", insert_row_below: "Insert 1 row below", insert_column_before: "Insert 1 column left", insert_column_after: "Insert 1 column right", freeze_columns: "Freeze up to column '{{column}}'", freeze_rows: "Freeze up to row '{{row}}'", unfreeze_rows: "Unfreeze rows", unfreeze_columns: "Unfreeze columns", delete_row: "Delete row '{{row}}'", delete_column: "Delete column '{{column}}'", freeze: "Freeze", insert_row: "Insert row", insert_column: "Insert column", move_row: "Move row", move_column: "Move column", move_row_up: "Move row up", move_row_down: "Move row down", move_column_left: "Move column left", move_column_right: "Move column right" }, p1 = { apply: "Add color", cancel: "Cancel", add: "Add new color", default: "Default color", no_fill: "No fill", recent: "Recent" }, f1 = { resize_drawer: "Resize drawer", close: "Close" }, h1 = { open_regional_settings: "Open regional settings", title: "Regional Settings", close: "Close dialog", locale: { title: "Locale", locale_label: "Locale", locale_example1: "Number", locale_example2: "Date and Time", locale_example3: "Formula delimiter", delimiter_comma: "Comma", delimiter_semicolon: "Semicolon" }, language: { title: "Language", language_label: "Engine Language", language_helper: "Controls the language used in function names and error messages.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "English", es: "Spanish", fr: "French", de: "German", it: "Italian" } }, timezone: { title: "Timezone", timezone_label: "Timezone", timezone_helper: "Modifying this setting will impact date- and time-related functions, including TODAY() and NOW()." } }, Da = {
  toolbar: n1,
  num_fmt: o1,
  sheet_rename: r1,
  sheet_delete: i1,
  sheet_tab: s1,
  formula_input: a1,
  formula_bar: l1,
  navigation: c1,
  name_manager_dialog: u1,
  cell_context: d1,
  color_picker: p1,
  right_drawer: f1,
  regional_settings: h1
}, m1 = { redo: "Rehacer", undo: "Deshacer", copy_styles: "Copiar estilos", clear_formatting: "Borrar formato", euro: "Formato Euro", percentage: "Formato porcentaje", bold: "Negrita", italic: "Cursiva", underline: "Subrayado", strike_through: "Tachado", align_left: "Alinear a la izquierda", align_right: "Alinear a la derecha", align_center: "Alinear al centro", format_number: "Formato de número", font_color: "Color de fuente", fill_color: "Color de relleno", increase_font_size: "Aumentar tamaño de fuente", decrease_font_size: "Disminuir tamaño de fuente", decimal_places_increase: "Aumentar decimales", decimal_places_decrease: "Disminuir decimales", show_hide_grid_lines: "Mostrar/ocultar líneas de cuadrícula", named_ranges: "Rangos con nombre", vertical_align_bottom: "Alinear abajo", vertical_align_middle: "Alinear al medio", vertical_align_top: "Alinear arriba", selected_png: "Exportar área seleccionada como PNG", wrap_text: "Ajustar texto", scroll_left: "Desplazar a la izquierda", scroll_right: "Desplazar a la derecha", format_menu: { auto: "Automático", number: "Número", percentage: "Porcentaje", currency_eur: "Euro (EUR)", currency_usd: "Dólar (USD)", currency_gbp: "Libra esterlina (GBP)", date_short: "Fecha corta", date_long: "Fecha larga", custom: "Personalizado", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordes", all: "Todos los bordes", inner: "Bordes internos", outer: "Bordes externos", top: "Bordes superiores", bottom: "Bordes inferiores", clear: "Quitar bordes", left: "Bordes izquierdos", right: "Bordes derechos", horizontal: "Bordes horizontales", vertical: "Bordes verticales", color: "Color del borde", style: "Estilo del borde" } }, g1 = { title: "Formato de número personalizado", label: "Formato de número", close: "Cerrar diálogo", save: "Guardar" }, x1 = { rename: "Guardar", label: "Nuevo nombre", title: "Renombrar hoja", close: "Cerrar diálogo" }, b1 = { title: "¿Estás seguro?", message: "La hoja '{{sheetName}}' será eliminada.", confirm: "Sí, eliminar hoja", cancel: "Cancelar" }, y1 = { rename: "Renombrar", change_color: "Cambiar color", delete: "Eliminar", hide_sheet: "Ocultar hoja" }, v1 = { update: "Actualizar", label: "Fórmula", title: "Actualizar fórmula" }, w1 = { manage_named_ranges: "Gestionar rangos con nombre" }, C1 = { add_sheet: "Añadir hoja", sheet_list: "Lista de hojas" }, E1 = { title: "Rangos con nombre", empty_message1: "Aún no se han añadido rangos con nombre.", empty_message2: "Haz clic en 'Añadir nuevo' para agregar uno.", name: "Nombre", range: "Ámbito", scope: "Rango", help: "Acerca de los rangos con nombre", new: "Añadir nuevo", workbook: "Libro", global: "(Global)", close: "Cerrar diálogo", delete: "Eliminar rango", edit: "Editar rango", back_to_list: "Volver a la lista", add_new_range: "Añadir un nuevo rango", edit_range: "Editar rango", new_named_range: "Nuevo rango con nombre", range_name: "Nombre del rango", enter_range_name: "Introduce el nombre del rango", scope_label: "Ámbito", scope_helper: "El ámbito del rango con nombre determina dónde está disponible.", refers_to: "Hace referencia a", enter_formula: "Introduce la fórmula", cancel: "Cancelar", apply: "Aplicar cambios", discard: "Descartar cambios", default_range_prefix: "Rango", errors: { range_name_required: "El nombre del rango es obligatorio", name_cannot_contain_spaces: "El nombre no puede contener espacios", name_cannot_start_with_number: "El nombre no puede empezar con un número", name_invalid_characters: "El nombre contiene caracteres no válidos. Usa solo letras, números, guiones bajos y puntos. Debe empezar con una letra o guion bajo.", name_already_exists: "Este nombre ya existe en el ámbito seleccionado" } }, S1 = { insert_row_above: "Insertar 1 fila arriba", insert_row_below: "Insertar 1 fila abajo", insert_column_before: "Insertar 1 columna a la izquierda", insert_column_after: "Insertar 1 columna a la derecha", freeze_columns: "Congelar hasta la columna '{{column}}'", freeze_rows: "Congelar hasta la fila '{{row}}'", unfreeze_rows: "Descongelar filas", unfreeze_columns: "Descongelar columnas", delete_row: "Eliminar fila '{{row}}'", delete_column: "Eliminar columna '{{column}}'", freeze: "Congelar", insert_row: "Insertar fila", insert_column: "Insertar columna", move_row: "Mover fila", move_column: "Mover columna", move_row_up: "Mover fila arriba", move_row_down: "Mover fila abajo", move_column_left: "Mover columna a la izquierda", move_column_right: "Mover columna a la derecha" }, _1 = { apply: "Añadir color", cancel: "Cancelar", add: "Añadir nuevo color", default: "Color predeterminado", no_fill: "Sin relleno", recent: "Recientes" }, R1 = { resize_drawer: "Cambiar tamaño del panel", close: "Cerrar" }, T1 = { open_regional_settings: "Abrir configuración regional", title: "Configuración regional", close: "Cerrar diálogo", locale: { title: "Configuración regional", locale_label: "Configuración regional", locale_example1: "Número", locale_example2: "Fecha y hora", locale_example3: "Delimitador de fórmulas", delimiter_comma: "Coma", delimiter_semicolon: "Punto y coma" }, language: { title: "Idioma", language_label: "Idioma del motor", language_helper: "Controla el idioma usado en los nombres de funciones y los mensajes de error.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Inglés", es: "Español", fr: "Francés", de: "Alemán", it: "Italiano" } }, timezone: { title: "Zona horaria", timezone_label: "Zona horaria", timezone_helper: "Modificar esta configuración afectará a las funciones relacionadas con fecha y hora, incluyendo HOY() y AHORA()." } }, k1 = {
  toolbar: m1,
  num_fmt: g1,
  sheet_rename: x1,
  sheet_delete: b1,
  sheet_tab: y1,
  formula_input: v1,
  formula_bar: w1,
  navigation: C1,
  name_manager_dialog: E1,
  cell_context: S1,
  color_picker: _1,
  right_drawer: R1,
  regional_settings: T1
}, j1 = { redo: "Rétablir", undo: "Annuler", copy_styles: "Copier les styles", clear_formatting: "Effacer la mise en forme", euro: "Format Euro", percentage: "Format pourcentage", bold: "Gras", italic: "Italique", underline: "Souligné", strike_through: "Barré", align_left: "Aligner à gauche", align_right: "Aligner à droite", align_center: "Centrer", format_number: "Format de nombre", font_color: "Couleur de police", fill_color: "Couleur de remplissage", increase_font_size: "Augmenter la taille de la police", decrease_font_size: "Diminuer la taille de la police", decimal_places_increase: "Augmenter les décimales", decimal_places_decrease: "Diminuer les décimales", show_hide_grid_lines: "Afficher/masquer le quadrillage", named_ranges: "Plages nommées", vertical_align_bottom: "Aligner en bas", vertical_align_middle: "Aligner au milieu", vertical_align_top: "Aligner en haut", selected_png: "Exporter la zone sélectionnée en PNG", wrap_text: "Renvoyer à la ligne", scroll_left: "Faire défiler vers la gauche", scroll_right: "Faire défiler vers la droite", format_menu: { auto: "Automatique", number: "Nombre", percentage: "Pourcentage", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "Livre sterling (GBP)", date_short: "Date courte", date_long: "Date longue", custom: "Personnalisé", number_example: "1 000,00", percentage_example: "10 %", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordures", all: "Toutes les bordures", inner: "Bordures intérieures", outer: "Bordures extérieures", top: "Bordures supérieures", bottom: "Bordures inférieures", clear: "Supprimer les bordures", left: "Bordures gauches", right: "Bordures droites", horizontal: "Bordures horizontales", vertical: "Bordures verticales", color: "Couleur de bordure", style: "Style de bordure" } }, $1 = { title: "Format de nombre personnalisé", label: "Format de nombre", close: "Fermer la boîte de dialogue", save: "Enregistrer" }, P1 = { rename: "Enregistrer", label: "Nouveau nom", title: "Renommer la feuille", close: "Fermer la boîte de dialogue" }, O1 = { title: "Êtes-vous sûr ?", message: "La feuille « {{sheetName}} » sera supprimée.", confirm: "Oui, supprimer la feuille", cancel: "Annuler" }, M1 = { rename: "Renommer", change_color: "Changer la couleur", delete: "Supprimer", hide_sheet: "Masquer la feuille" }, A1 = { update: "Mettre à jour", label: "Formule", title: "Mettre à jour la formule" }, D1 = { manage_named_ranges: "Gérer les plages nommées" }, I1 = { add_sheet: "Ajouter une feuille", sheet_list: "Liste des feuilles" }, F1 = { title: "Plages nommées", empty_message1: "Aucune plage nommée n’a encore été ajoutée.", empty_message2: "Cliquez sur « Ajouter » pour en créer une.", name: "Nom", range: "Portée", scope: "Plage", help: "À propos des plages nommées", new: "Ajouter", workbook: "Classeur", global: "(Global)", close: "Fermer la boîte de dialogue", delete: "Supprimer la plage", edit: "Modifier la plage", back_to_list: "Retour à la liste", add_new_range: "Ajouter une nouvelle plage", edit_range: "Modifier la plage", new_named_range: "Nouvelle plage nommée", range_name: "Nom de la plage", enter_range_name: "Saisir le nom de la plage", scope_label: "Portée", scope_helper: "La portée de la plage nommée détermine où elle est disponible.", refers_to: "Fait référence à", enter_formula: "Saisir la formule", cancel: "Annuler", apply: "Appliquer les modifications", discard: "Annuler les modifications", default_range_prefix: "Plage", errors: { range_name_required: "Le nom de la plage est obligatoire", name_cannot_contain_spaces: "Le nom ne peut pas contenir d’espaces", name_cannot_start_with_number: "Le nom ne peut pas commencer par un chiffre", name_invalid_characters: "Le nom contient des caractères non valides. Utilisez uniquement des lettres, chiffres, traits de soulignement et points. Il doit commencer par une lettre ou un trait de soulignement.", name_already_exists: "Ce nom existe déjà dans la portée sélectionnée" } }, N1 = { insert_row_above: "Insérer 1 ligne au-dessus", insert_row_below: "Insérer 1 ligne en dessous", insert_column_before: "Insérer 1 colonne à gauche", insert_column_after: "Insérer 1 colonne à droite", freeze_columns: "Figer jusqu’à la colonne « {{column}} »", freeze_rows: "Figer jusqu’à la ligne « {{row}} »", unfreeze_rows: "Libérer les lignes", unfreeze_columns: "Libérer les colonnes", delete_row: "Supprimer la ligne « {{row}} »", delete_column: "Supprimer la colonne « {{column}} »", freeze: "Figer", insert_row: "Insérer une ligne", insert_column: "Insérer une colonne", move_row: "Déplacer la ligne", move_column: "Déplacer la colonne", move_row_up: "Déplacer la ligne vers le haut", move_row_down: "Déplacer la ligne vers le bas", move_column_left: "Déplacer la colonne vers la gauche", move_column_right: "Déplacer la colonne vers la droite" }, B1 = { apply: "Ajouter la couleur", cancel: "Annuler", add: "Ajouter une nouvelle couleur", default: "Couleur par défaut", no_fill: "Sans remplissage", recent: "Récentes" }, z1 = { resize_drawer: "Redimensionner le panneau", close: "Fermer" }, L1 = { open_regional_settings: "Ouvrir les paramètres régionaux", title: "Paramètres régionaux", close: "Fermer la boîte de dialogue", locale: { title: "Paramètres régionaux", locale_label: "Paramètres régionaux", locale_example1: "Nombre", locale_example2: "Date et heure", locale_example3: "Délimiteur de formule", delimiter_comma: "Virgule", delimiter_semicolon: "Point-virgule" }, language: { title: "Langue", language_label: "Langue du moteur", language_helper: "Contrôle la langue utilisée pour les noms de fonctions et les messages d’erreur.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Anglais", es: "Espagnol", fr: "Français", de: "Allemand", it: "Italien" } }, timezone: { title: "Fuseau horaire", timezone_label: "Fuseau horaire", timezone_helper: "Modifier ce paramètre aura un impact sur les fonctions liées à la date et à l’heure, y compris AUJOURDHUI() et MAINTENANT()." } }, V1 = {
  toolbar: j1,
  num_fmt: $1,
  sheet_rename: P1,
  sheet_delete: O1,
  sheet_tab: M1,
  formula_input: A1,
  formula_bar: D1,
  navigation: I1,
  name_manager_dialog: F1,
  cell_context: N1,
  color_picker: B1,
  right_drawer: z1,
  regional_settings: L1
}, H1 = { redo: "Ripeti", undo: "Annulla", copy_styles: "Copia stili", clear_formatting: "Cancella formattazione", euro: "Formato Euro", percentage: "Formato percentuale", bold: "Grassetto", italic: "Corsivo", underline: "Sottolineato", strike_through: "Barrato", align_left: "Allinea a sinistra", align_right: "Allinea a destra", align_center: "Allinea al centro", format_number: "Formato numero", font_color: "Colore carattere", fill_color: "Colore riempimento", increase_font_size: "Aumenta dimensione carattere", decrease_font_size: "Riduci dimensione carattere", decimal_places_increase: "Aumenta decimali", decimal_places_decrease: "Riduci decimali", show_hide_grid_lines: "Mostra/nascondi griglia", named_ranges: "Intervalli denominati", vertical_align_bottom: "Allinea in basso", vertical_align_middle: "Allinea al centro", vertical_align_top: "Allinea in alto", selected_png: "Esporta area selezionata come PNG", wrap_text: "Testo a capo", scroll_left: "Scorri a sinistra", scroll_right: "Scorri a destra", format_menu: { auto: "Automatico", number: "Numero", percentage: "Percentuale", currency_eur: "Euro (EUR)", currency_usd: "Dollaro (USD)", currency_gbp: "Sterlina britannica (GBP)", date_short: "Data breve", date_long: "Data lunga", custom: "Personalizzato", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordi", all: "Tutti i bordi", inner: "Bordi interni", outer: "Bordi esterni", top: "Bordi superiori", bottom: "Bordi inferiori", clear: "Rimuovi bordi", left: "Bordi sinistri", right: "Bordi destri", horizontal: "Bordi orizzontali", vertical: "Bordi verticali", color: "Colore bordo", style: "Stile bordo" } }, W1 = { title: "Formato numero personalizzato", label: "Formato numero", close: "Chiudi finestra", save: "Salva" }, U1 = { rename: "Salva", label: "Nuovo nome", title: "Rinomina foglio", close: "Chiudi finestra" }, G1 = { title: "Sei sicuro?", message: "Il foglio '{{sheetName}}' verrà eliminato.", confirm: "Sì, elimina foglio", cancel: "Annulla" }, Y1 = { rename: "Rinomina", change_color: "Cambia colore", delete: "Elimina", hide_sheet: "Nascondi foglio" }, q1 = { update: "Aggiorna", label: "Formula", title: "Aggiorna formula" }, K1 = { manage_named_ranges: "Gestisci intervalli denominati" }, X1 = { add_sheet: "Aggiungi foglio", sheet_list: "Elenco fogli" }, Z1 = { title: "Intervalli denominati", empty_message1: "Non sono ancora stati aggiunti intervalli denominati.", empty_message2: 'Fai clic su "Aggiungi nuovo" per crearne uno.', name: "Nome", range: "Ambito", scope: "Intervallo", help: "Informazioni sugli intervalli denominati", new: "Aggiungi nuovo", workbook: "Cartella di lavoro", global: "(Globale)", close: "Chiudi finestra", delete: "Elimina intervallo", edit: "Modifica intervallo", back_to_list: "Torna alla lista", add_new_range: "Aggiungi nuovo intervallo", edit_range: "Modifica intervallo", new_named_range: "Nuovo intervallo denominato", range_name: "Nome intervallo", enter_range_name: "Inserisci nome intervallo", scope_label: "Ambito", scope_helper: "L'ambito dell'intervallo denominato determina dove è disponibile.", refers_to: "Fa riferimento a", enter_formula: "Inserisci formula", cancel: "Annulla", apply: "Applica modifiche", discard: "Annulla modifiche", default_range_prefix: "Intervallo", errors: { range_name_required: "Il nome dell'intervallo è obbligatorio", name_cannot_contain_spaces: "Il nome non può contenere spazi", name_cannot_start_with_number: "Il nome non può iniziare con un numero", name_invalid_characters: "Il nome contiene caratteri non validi. Usa solo lettere, numeri, underscore e punti. Deve iniziare con una lettera o underscore.", name_already_exists: "Questo nome esiste già nell'ambito selezionato" } }, J1 = { insert_row_above: "Inserisci 1 riga sopra", insert_row_below: "Inserisci 1 riga sotto", insert_column_before: "Inserisci 1 colonna a sinistra", insert_column_after: "Inserisci 1 colonna a destra", freeze_columns: "Blocca fino alla colonna '{{column}}'", freeze_rows: "Blocca fino alla riga '{{row}}'", unfreeze_rows: "Sblocca righe", unfreeze_columns: "Sblocca colonne", delete_row: "Elimina riga '{{row}}'", delete_column: "Elimina colonna '{{column}}'", freeze: "Blocca", insert_row: "Inserisci riga", insert_column: "Inserisci colonna", move_row: "Sposta riga", move_column: "Sposta colonna", move_row_up: "Sposta riga in alto", move_row_down: "Sposta riga in basso", move_column_left: "Sposta colonna a sinistra", move_column_right: "Sposta colonna a destra" }, Q1 = { apply: "Aggiungi colore", cancel: "Annulla", add: "Aggiungi nuovo colore", default: "Colore predefinito", no_fill: "Nessun riempimento", recent: "Recenti" }, ey = { resize_drawer: "Ridimensiona pannello", close: "Chiudi" }, ty = { open_regional_settings: "Apri impostazioni regionali", title: "Impostazioni regionali", close: "Chiudi finestra", locale: { title: "Impostazioni locali", locale_label: "Impostazioni locali", locale_example1: "Numero", locale_example2: "Data e ora", locale_example3: "Separatore formule", delimiter_comma: "Virgola", delimiter_semicolon: "Punto e virgola" }, language: { title: "Lingua", language_label: "Lingua del motore", language_helper: "Controlla la lingua usata nei nomi delle funzioni e nei messaggi di errore.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Inglese", es: "Spagnolo", fr: "Francese", de: "Tedesco", it: "Italiano" } }, timezone: { title: "Fuso orario", timezone_label: "Fuso orario", timezone_helper: "La modifica di questa impostazione influirà sulle funzioni relative a data e ora, incluse ADESSO() e OGGI()." } }, ny = {
  toolbar: H1,
  num_fmt: W1,
  sheet_rename: U1,
  sheet_delete: G1,
  sheet_tab: Y1,
  formula_input: q1,
  formula_bar: K1,
  navigation: X1,
  name_manager_dialog: Z1,
  cell_context: J1,
  color_picker: Q1,
  right_drawer: ey,
  regional_settings: ty
}, oy = {
  "en-US": { translation: Da },
  "en-GB": { translation: Da },
  "es-ES": { translation: k1 },
  "fr-FR": { translation: V1 },
  "de-DE": { translation: t1 },
  "it-IT": { translation: ny }
}, Lo = wu.createInstance({
  resources: oy,
  lng: "en-US",
  interpolation: {
    escapeValue: !1
  }
}), ry = Na(
  (e, t) => (Ba(t, () => ({
    setLanguage(n) {
      if (Lo.language !== n) {
        Lo.changeLanguage(n);
        const o = n.split("-")[0];
        e.model.setLanguage(o);
      }
    }
  })), /* @__PURE__ */ l.jsx(Ac, { theme: P, children: /* @__PURE__ */ l.jsx(Dc, { i18n: Lo, children: /* @__PURE__ */ l.jsx(
    Bb,
    {
      model: e.model,
      workbookState: new hb()
    }
  ) }) }))
);
ry.displayName = "IronCalc";
const gy = async (e) => {
  const t = Sc(e);
  return await Lo.init(), await t;
};
export {
  ry as IronCalc,
  hy as IronCalcIcon,
  my as IronCalcIconWhite,
  gf as IronCalcLogo,
  yy as Model,
  gy as init
};
