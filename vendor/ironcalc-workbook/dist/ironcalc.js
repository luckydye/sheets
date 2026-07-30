import _c, { columnNameFromNumber as Ve, quoteName as Fa, getTokens as Na, getSupportedLocales as Rc, getAllTimezones as Tc, BorderStyle as $t, BorderType as de } from "@ironcalc/wasm";
import { Model as vy } from "@ironcalc/wasm";
import * as k from "react";
import Se, { useCallback as De, useState as oe, useRef as ie, useEffect as Be, createElement as kc, isValidElement as Do, cloneElement as Fo, Children as jc, useLayoutEffect as gi, useMemo as $c, forwardRef as Ba, useImperativeHandle as za } from "react";
import { styled as X, Menu as so, MenuItem as nn, FormControl as Wn, Box as ao, TextField as xi, Select as La, Paper as Pc, FormHelperText as Ha, Tooltip as hn, Button as lo, Autocomplete as Oc, Popover as Mc, Dialog as Va, Input as Ac, ThemeProvider as Ic } from "@mui/material";
import { useTranslation as He, I18nextProvider as Dc } from "react-i18next";
import { Tag as Wa, ChevronDown as Ho, MousePointerClick as Fc, Check as Bt, ArrowLeft as Ua, X as Vo, PackageOpen as Nc, PencilLine as Ga, Trash2 as Jt, BookOpen as Bc, Plus as Dt, Grid2X2 as Ya, ChevronRight as bi, ChevronLeft as zc, Undo2 as Lc, Redo2 as Hc, PaintRoller as Vc, RemoveFormatting as Wc, Percent as Uc, DecimalsArrowLeft as Gc, DecimalsArrowRight as Yc, Minus as qc, Bold as Kc, Italic as Xc, Underline as Zc, Strikethrough as Jc, Type as Qc, PaintBucket as qa, AlignLeft as eu, AlignCenter as tu, AlignRight as nu, ArrowUpToLine as ou, ArrowDownToLine as ru, WrapText as iu, Grid2x2Check as su, Grid2x2X as au, ImageDown as lu, PoundSterling as cu, DollarSign as uu, Euro as du, TextCursorInput as pu, EyeOff as fu, Menu as hu, BetweenVerticalStart as mu, BetweenHorizontalStart as gu, ArrowUpDown as xu, ArrowLeftRight as bu, Snowflake as Xn, ArrowRight as yu, ArrowUp as vu, ArrowDown as wu } from "lucide-react";
import Cu, { t as we } from "i18next";
import te from "@emotion/styled";
import { ThemeContext as Eu, keyframes as yi } from "@emotion/react";
import * as Su from "react-dom";
import vo from "react-dom";
function _u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo = { exports: {} }, Pn = {};
var zi;
function Ru() {
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
function Tu() {
  return Li || (Li = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === H ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case v:
          return "Fragment";
        case T:
          return "Profiler";
        case S:
          return "StrictMode";
        case _:
          return "Suspense";
        case I:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case d:
            return "Portal";
          case w:
            return b.displayName || "Context";
          case C:
            return (b._context.displayName || "Context") + ".Consumer";
          case E:
            var $ = b.render;
            return b = b.displayName, b || (b = $.displayName || $.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case R:
            return $ = b.displayName || null, $ !== null ? $ : e(b.type) || "Memo";
          case F:
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
      if (b === v) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === F)
        return "<...>";
      try {
        var $ = e(b);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var b = y.A;
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
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: z,
        configurable: !0
      });
    }
    function c() {
      var b = e(this.type);
      return j[b] || (j[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function f(b, $, z, N, K, Y) {
      var U = z.ref;
      return b = {
        $$typeof: g,
        type: b,
        key: $,
        props: z,
        _owner: N
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: c
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
        value: K
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function h(b, $, z, N, K, Y) {
      var U = $.children;
      if (U !== void 0)
        if (N)
          if (M(U)) {
            for (N = 0; N < U.length; N++)
              m(U[N]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if (D.call($, "key")) {
        U = e(b);
        var Z = Object.keys($).filter(function(q) {
          return q !== "key";
        });
        N = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", A[U + N] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          U,
          Z,
          U
        ), A[U + N] = !0);
      }
      if (U = null, z !== void 0 && (n(z), U = "" + z), s($) && (n($.key), U = "" + $.key), "key" in $) {
        z = {};
        for (var ee in $)
          ee !== "key" && (z[ee] = $[ee]);
      } else z = $;
      return U && a(
        z,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), f(
        b,
        U,
        z,
        r(),
        K,
        Y
      );
    }
    function m(b) {
      p(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === F && (b._payload.status === "fulfilled" ? p(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function p(b) {
      return typeof b == "object" && b !== null && b.$$typeof === g;
    }
    var x = Se, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), E = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), I = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), V = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.client.reference"), y = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, M = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var B, j = {}, Q = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), G = O(o(i)), A = {};
    On.Fragment = v, On.jsx = function(b, $, z) {
      var N = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        b,
        $,
        z,
        !1,
        N ? Error("react-stack-top-frame") : Q,
        N ? O(o(b)) : G
      );
    }, On.jsxs = function(b, $, z) {
      var N = 1e4 > y.recentlyCreatedOwnerStacks++;
      return h(
        b,
        $,
        z,
        !0,
        N ? Error("react-stack-top-frame") : Q,
        N ? O(o(b)) : G
      );
    };
  })()), On;
}
var Hi;
function ku() {
  return Hi || (Hi = 1, process.env.NODE_ENV === "production" ? wo.exports = Ru() : wo.exports = Tu()), wo.exports;
}
var l = ku();
function Ft(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((o) => n.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const Ka = "$$material";
function ju(e) {
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
var $u = {
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
function Pu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ou = /[A-Z]|^ms/g, Mu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Xa = function(t) {
  return t.charCodeAt(1) === 45;
}, Vi = function(t) {
  return t != null && typeof t != "boolean";
}, _r = /* @__PURE__ */ Pu(function(e) {
  return Xa(e) ? e : e.replace(Ou, "-$&").toLowerCase();
}), Wi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Mu, function(o, r, i) {
          return Mt = {
            name: r,
            styles: i,
            next: Mt
          }, r;
        });
  }
  return $u[t] !== 1 && !Xa(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
      return Au(e, t, n);
    }
  }
  var c = n;
  return c;
}
function Au(e, t, n) {
  var o = "";
  if (Array.isArray(n))
    for (var r = 0; r < n.length; r++)
      o += Wo(e, t, n[r]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        Vi(a) && (o += _r(i) + ":" + Wi(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var c = 0; c < s.length; c++)
          Vi(s[c]) && (o += _r(i) + ":" + Wi(i, s[c]) + ";");
      else {
        var f = Wo(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            o += _r(i) + ":" + f + ";";
            break;
          }
          default:
            o += i + "{" + f + "}";
        }
      }
    }
  return o;
}
var Ui = /label:\s*([^\s;{]+)\s*(;|$)/g, Mt;
function Iu(e, t, n) {
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
      var c = i;
      r += c[a];
    }
  Ui.lastIndex = 0;
  for (var f = "", h; (h = Ui.exec(r)) !== null; )
    f += "-" + h[1];
  var m = ju(r) + f;
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, p = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, x = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, g = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, d = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, T = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var _ = E.$$typeof;
      switch (_) {
        case t:
          switch (E = E.type, E) {
            case c:
            case f:
            case o:
            case i:
            case r:
            case m:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case h:
                case g:
                case x:
                case s:
                  return E;
                default:
                  return _;
              }
          }
        case n:
          return _;
      }
    }
  }
  function w(E) {
    return C(E) === f;
  }
  return he.AsyncMode = c, he.ConcurrentMode = f, he.ContextConsumer = a, he.ContextProvider = s, he.Element = t, he.ForwardRef = h, he.Fragment = o, he.Lazy = g, he.Memo = x, he.Portal = n, he.Profiler = i, he.StrictMode = r, he.Suspense = m, he.isAsyncMode = function(E) {
    return w(E) || C(E) === c;
  }, he.isConcurrentMode = w, he.isContextConsumer = function(E) {
    return C(E) === a;
  }, he.isContextProvider = function(E) {
    return C(E) === s;
  }, he.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, he.isForwardRef = function(E) {
    return C(E) === h;
  }, he.isFragment = function(E) {
    return C(E) === o;
  }, he.isLazy = function(E) {
    return C(E) === g;
  }, he.isMemo = function(E) {
    return C(E) === x;
  }, he.isPortal = function(E) {
    return C(E) === n;
  }, he.isProfiler = function(E) {
    return C(E) === i;
  }, he.isStrictMode = function(E) {
    return C(E) === r;
  }, he.isSuspense = function(E) {
    return C(E) === m;
  }, he.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === o || E === f || E === i || E === r || E === m || E === p || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === x || E.$$typeof === s || E.$$typeof === a || E.$$typeof === h || E.$$typeof === v || E.$$typeof === S || E.$$typeof === T || E.$$typeof === d);
  }, he.typeOf = C, he;
}
var me = {};
var Yi;
function Fu() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, p = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, x = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, g = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, d = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, T = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function C(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === o || W === f || W === i || W === r || W === m || W === p || typeof W == "object" && W !== null && (W.$$typeof === g || W.$$typeof === x || W.$$typeof === s || W.$$typeof === a || W.$$typeof === h || W.$$typeof === v || W.$$typeof === S || W.$$typeof === T || W.$$typeof === d);
    }
    function w(W) {
      if (typeof W == "object" && W !== null) {
        var ce = W.$$typeof;
        switch (ce) {
          case t:
            var pe = W.type;
            switch (pe) {
              case c:
              case f:
              case o:
              case i:
              case r:
              case m:
                return pe;
              default:
                var je = pe && pe.$$typeof;
                switch (je) {
                  case a:
                  case h:
                  case g:
                  case x:
                  case s:
                    return je;
                  default:
                    return ce;
                }
            }
          case n:
            return ce;
        }
      }
    }
    var E = c, _ = f, I = a, R = s, F = t, V = h, H = o, y = g, D = x, M = n, O = i, B = r, j = m, Q = !1;
    function G(W) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(W) || w(W) === c;
    }
    function A(W) {
      return w(W) === f;
    }
    function b(W) {
      return w(W) === a;
    }
    function $(W) {
      return w(W) === s;
    }
    function z(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function N(W) {
      return w(W) === h;
    }
    function K(W) {
      return w(W) === o;
    }
    function Y(W) {
      return w(W) === g;
    }
    function U(W) {
      return w(W) === x;
    }
    function Z(W) {
      return w(W) === n;
    }
    function ee(W) {
      return w(W) === i;
    }
    function q(W) {
      return w(W) === r;
    }
    function J(W) {
      return w(W) === m;
    }
    me.AsyncMode = E, me.ConcurrentMode = _, me.ContextConsumer = I, me.ContextProvider = R, me.Element = F, me.ForwardRef = V, me.Fragment = H, me.Lazy = y, me.Memo = D, me.Portal = M, me.Profiler = O, me.StrictMode = B, me.Suspense = j, me.isAsyncMode = G, me.isConcurrentMode = A, me.isContextConsumer = b, me.isContextProvider = $, me.isElement = z, me.isForwardRef = N, me.isFragment = K, me.isLazy = Y, me.isMemo = U, me.isPortal = Z, me.isProfiler = ee, me.isStrictMode = q, me.isSuspense = J, me.isValidElementType = C, me.typeOf = w;
  })()), me;
}
var qi;
function Za() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? Eo.exports = Du() : Eo.exports = Fu()), Eo.exports;
}
var Rr, Ki;
function Nu() {
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
      var c = Object.getOwnPropertyNames(s).map(function(h) {
        return s[h];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Rr = r() ? Object.assign : function(i, s) {
    for (var a, c = o(i), f, h = 1; h < arguments.length; h++) {
      a = Object(arguments[h]);
      for (var m in a)
        t.call(a, m) && (c[m] = a[m]);
      if (e) {
        f = e(a);
        for (var p = 0; p < f.length; p++)
          n.call(a, f[p]) && (c[f[p]] = a[f[p]]);
      }
    }
    return c;
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
function Ja() {
  return Zi || (Zi = 1, kr = Function.call.bind(Object.prototype.hasOwnProperty)), kr;
}
var jr, Ji;
function Bu() {
  if (Ji) return jr;
  Ji = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ vi(), n = {}, o = /* @__PURE__ */ Ja();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function r(i, s, a, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (o(i, h)) {
          var m;
          try {
            if (typeof i[h] != "function") {
              var p = Error(
                (c || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[h](s, h, c, a, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + a + " type: " + m.message + (x ?? "")
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
function zu() {
  if (Qi) return $r;
  Qi = 1;
  var e = Za(), t = Nu(), n = /* @__PURE__ */ vi(), o = /* @__PURE__ */ Ja(), r = /* @__PURE__ */ Bu(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return $r = function(a, c) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(A) {
      var b = A && (f && A[f] || A[h]);
      if (typeof b == "function")
        return b;
    }
    var p = "<<anonymous>>", x = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: T(),
      arrayOf: C,
      element: w(),
      elementType: E(),
      instanceOf: _,
      node: V(),
      objectOf: R,
      oneOf: I,
      oneOfType: F,
      shape: y,
      exact: D
    };
    function g(A, b) {
      return A === b ? A !== 0 || 1 / A === 1 / b : A !== A && b !== b;
    }
    function d(A, b) {
      this.message = A, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function v(A) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, $ = 0;
      function z(K, Y, U, Z, ee, q, J) {
        if (Z = Z || p, q = q || U, J !== n) {
          if (c) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = Z + ":" + U;
            !b[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ce] = !0, $++);
          }
        }
        return Y[U] == null ? K ? Y[U] === null ? new d("The " + ee + " `" + q + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new d("The " + ee + " `" + q + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : A(Y, U, Z, ee, q);
      }
      var N = z.bind(null, !1);
      return N.isRequired = z.bind(null, !0), N;
    }
    function S(A) {
      function b($, z, N, K, Y, U) {
        var Z = $[z], ee = B(Z);
        if (ee !== A) {
          var q = j(Z);
          return new d(
            "Invalid " + K + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + N + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return v(b);
    }
    function T() {
      return v(s);
    }
    function C(A) {
      function b($, z, N, K, Y) {
        if (typeof A != "function")
          return new d("Property `" + Y + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var U = $[z];
        if (!Array.isArray(U)) {
          var Z = B(U);
          return new d("Invalid " + K + " `" + Y + "` of type " + ("`" + Z + "` supplied to `" + N + "`, expected an array."));
        }
        for (var ee = 0; ee < U.length; ee++) {
          var q = A(U, ee, N, K, Y + "[" + ee + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return v(b);
    }
    function w() {
      function A(b, $, z, N, K) {
        var Y = b[$];
        if (!a(Y)) {
          var U = B(Y);
          return new d("Invalid " + N + " `" + K + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(A);
    }
    function E() {
      function A(b, $, z, N, K) {
        var Y = b[$];
        if (!e.isValidElementType(Y)) {
          var U = B(Y);
          return new d("Invalid " + N + " `" + K + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(A);
    }
    function _(A) {
      function b($, z, N, K, Y) {
        if (!($[z] instanceof A)) {
          var U = A.name || p, Z = G($[z]);
          return new d("Invalid " + K + " `" + Y + "` of type " + ("`" + Z + "` supplied to `" + N + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return v(b);
    }
    function I(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function b($, z, N, K, Y) {
        for (var U = $[z], Z = 0; Z < A.length; Z++)
          if (g(U, A[Z]))
            return null;
        var ee = JSON.stringify(A, function(J, W) {
          var ce = j(W);
          return ce === "symbol" ? String(W) : W;
        });
        return new d("Invalid " + K + " `" + Y + "` of value `" + String(U) + "` " + ("supplied to `" + N + "`, expected one of " + ee + "."));
      }
      return v(b);
    }
    function R(A) {
      function b($, z, N, K, Y) {
        if (typeof A != "function")
          return new d("Property `" + Y + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var U = $[z], Z = B(U);
        if (Z !== "object")
          return new d("Invalid " + K + " `" + Y + "` of type " + ("`" + Z + "` supplied to `" + N + "`, expected an object."));
        for (var ee in U)
          if (o(U, ee)) {
            var q = A(U, ee, N, K, Y + "." + ee, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return v(b);
    }
    function F(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var b = 0; b < A.length; b++) {
        var $ = A[b];
        if (typeof $ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q($) + " at index " + b + "."
          ), s;
      }
      function z(N, K, Y, U, Z) {
        for (var ee = [], q = 0; q < A.length; q++) {
          var J = A[q], W = J(N, K, Y, U, Z, n);
          if (W == null)
            return null;
          W.data && o(W.data, "expectedType") && ee.push(W.data.expectedType);
        }
        var ce = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new d("Invalid " + U + " `" + Z + "` supplied to " + ("`" + Y + "`" + ce + "."));
      }
      return v(z);
    }
    function V() {
      function A(b, $, z, N, K) {
        return M(b[$]) ? null : new d("Invalid " + N + " `" + K + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return v(A);
    }
    function H(A, b, $, z, N) {
      return new d(
        (A || "React class") + ": " + b + " type `" + $ + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function y(A) {
      function b($, z, N, K, Y) {
        var U = $[z], Z = B(U);
        if (Z !== "object")
          return new d("Invalid " + K + " `" + Y + "` of type `" + Z + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var ee in A) {
          var q = A[ee];
          if (typeof q != "function")
            return H(N, K, Y, ee, j(q));
          var J = q(U, ee, N, K, Y + "." + ee, n);
          if (J)
            return J;
        }
        return null;
      }
      return v(b);
    }
    function D(A) {
      function b($, z, N, K, Y) {
        var U = $[z], Z = B(U);
        if (Z !== "object")
          return new d("Invalid " + K + " `" + Y + "` of type `" + Z + "` " + ("supplied to `" + N + "`, expected `object`."));
        var ee = t({}, $[z], A);
        for (var q in ee) {
          var J = A[q];
          if (o(A, q) && typeof J != "function")
            return H(N, K, Y, q, j(J));
          if (!J)
            return new d(
              "Invalid " + K + " `" + Y + "` key `" + q + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify($[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var W = J(U, q, N, K, Y + "." + q, n);
          if (W)
            return W;
        }
        return null;
      }
      return v(b);
    }
    function M(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(M);
          if (A === null || a(A))
            return !0;
          var b = m(A);
          if (b) {
            var $ = b.call(A), z;
            if (b !== A.entries) {
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
    function O(A, b) {
      return A === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function B(A) {
      var b = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : O(b, A) ? "symbol" : b;
    }
    function j(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var b = B(A);
      if (b === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function Q(A) {
      var b = j(A);
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
    function G(A) {
      return !A.constructor || !A.constructor.name ? p : A.constructor.name;
    }
    return x.checkPropTypes = r, x.resetWarningCache = r.resetWarningCache, x.PropTypes = x, x;
  }, $r;
}
var Pr, es;
function Lu() {
  if (es) return Pr;
  es = 1;
  var e = /* @__PURE__ */ vi();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Pr = function() {
    function o(s, a, c, f, h, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
function Hu() {
  if (ts) return Co.exports;
  if (ts = 1, process.env.NODE_ENV !== "production") {
    var e = Za(), t = !0;
    Co.exports = /* @__PURE__ */ zu()(e.isElement, t);
  } else
    Co.exports = /* @__PURE__ */ Lu()();
  return Co.exports;
}
var Vu = /* @__PURE__ */ Hu();
const u = /* @__PURE__ */ _u(Vu);
function Wu(e, t) {
  const n = te(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const r = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${r})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((i) => i === void 0) && console.error(`MUI: the styled(${r})(...args) API requires all its args to be defined.`), n(...o);
  } : n;
}
function Uu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ns = [];
function Xt(e) {
  return ns[0] = e, Iu(ns);
}
var So = { exports: {} }, Ce = {};
var os;
function Gu() {
  if (os) return Ce;
  os = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), r = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), s = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), h = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.view_transition"), x = /* @__PURE__ */ Symbol.for("react.client.reference");
  function g(d) {
    if (typeof d == "object" && d !== null) {
      var v = d.$$typeof;
      switch (v) {
        case e:
          switch (d = d.type, d) {
            case n:
            case r:
            case o:
            case c:
            case f:
            case p:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case a:
                case m:
                case h:
                  return d;
                case i:
                  return d;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Ce.ContextConsumer = i, Ce.ContextProvider = s, Ce.Element = e, Ce.ForwardRef = a, Ce.Fragment = n, Ce.Lazy = m, Ce.Memo = h, Ce.Portal = t, Ce.Profiler = r, Ce.StrictMode = o, Ce.Suspense = c, Ce.SuspenseList = f, Ce.isContextConsumer = function(d) {
    return g(d) === i;
  }, Ce.isContextProvider = function(d) {
    return g(d) === s;
  }, Ce.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, Ce.isForwardRef = function(d) {
    return g(d) === a;
  }, Ce.isFragment = function(d) {
    return g(d) === n;
  }, Ce.isLazy = function(d) {
    return g(d) === m;
  }, Ce.isMemo = function(d) {
    return g(d) === h;
  }, Ce.isPortal = function(d) {
    return g(d) === t;
  }, Ce.isProfiler = function(d) {
    return g(d) === r;
  }, Ce.isStrictMode = function(d) {
    return g(d) === o;
  }, Ce.isSuspense = function(d) {
    return g(d) === c;
  }, Ce.isSuspenseList = function(d) {
    return g(d) === f;
  }, Ce.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === r || d === o || d === c || d === f || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === h || d.$$typeof === s || d.$$typeof === i || d.$$typeof === a || d.$$typeof === x || d.getModuleId !== void 0);
  }, Ce.typeOf = g, Ce;
}
var Ee = {};
var rs;
function Yu() {
  return rs || (rs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (typeof d == "object" && d !== null) {
        var v = d.$$typeof;
        switch (v) {
          case t:
            switch (d = d.type, d) {
              case o:
              case i:
              case r:
              case f:
              case h:
              case x:
                return d;
              default:
                switch (d = d && d.$$typeof, d) {
                  case a:
                  case c:
                  case p:
                  case m:
                    return d;
                  case s:
                    return d;
                  default:
                    return v;
                }
            }
          case n:
            return v;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), g = /* @__PURE__ */ Symbol.for("react.client.reference");
    Ee.ContextConsumer = s, Ee.ContextProvider = a, Ee.Element = t, Ee.ForwardRef = c, Ee.Fragment = o, Ee.Lazy = p, Ee.Memo = m, Ee.Portal = n, Ee.Profiler = i, Ee.StrictMode = r, Ee.Suspense = f, Ee.SuspenseList = h, Ee.isContextConsumer = function(d) {
      return e(d) === s;
    }, Ee.isContextProvider = function(d) {
      return e(d) === a;
    }, Ee.isElement = function(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }, Ee.isForwardRef = function(d) {
      return e(d) === c;
    }, Ee.isFragment = function(d) {
      return e(d) === o;
    }, Ee.isLazy = function(d) {
      return e(d) === p;
    }, Ee.isMemo = function(d) {
      return e(d) === m;
    }, Ee.isPortal = function(d) {
      return e(d) === n;
    }, Ee.isProfiler = function(d) {
      return e(d) === i;
    }, Ee.isStrictMode = function(d) {
      return e(d) === r;
    }, Ee.isSuspense = function(d) {
      return e(d) === f;
    }, Ee.isSuspenseList = function(d) {
      return e(d) === h;
    }, Ee.isValidElementType = function(d) {
      return typeof d == "string" || typeof d == "function" || d === o || d === i || d === r || d === f || d === h || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === m || d.$$typeof === a || d.$$typeof === s || d.$$typeof === c || d.$$typeof === g || d.getModuleId !== void 0);
    }, Ee.typeOf = e;
  })()), Ee;
}
var is;
function qu() {
  return is || (is = 1, process.env.NODE_ENV === "production" ? So.exports = /* @__PURE__ */ Gu() : So.exports = /* @__PURE__ */ Yu()), So.exports;
}
var gn = /* @__PURE__ */ qu();
function _t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Qa(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || gn.isValidElementType(e) || !_t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Qa(e[n]);
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
    Object.prototype.hasOwnProperty.call(e, r) && _t(e[r]) ? o[r] = Ze(e[r], t[r], n) : n.clone ? o[r] = _t(t[r]) ? Qa(t[r]) : t[r] : o[r] = t[r];
  }), o;
}
const Ku = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, o) => n.val - o.val), t.reduce((n, o) => ({
    ...n,
    [o.key]: o.val
  }), {});
};
function Xu(e) {
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
  } = e, i = Ku(t), s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - o / 100}${n})`;
  }
  function f(p, x) {
    const g = s.indexOf(x);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : x) - o / 100}${n})`;
  }
  function h(p) {
    return s.indexOf(p) + 1 < s.length ? f(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function m(p) {
    const x = s.indexOf(p);
    return x === 0 ? a(s[1]) : x === s.length - 1 ? c(s[x]) : f(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: c,
    between: f,
    only: h,
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
function Zu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Ju(e, t) {
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
function Qu(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const c = t(e.breakpoints.not(...a), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const o = {}, r = (i) => (n(o, i), o);
  return n(r), {
    ...e,
    containerQueries: r
  };
}
const ed = {
  borderRadius: 4
}, zt = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.string, u.object, u.array]) : {};
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
}, td = {
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
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || as;
    return Object.keys(t).reduce((s, a) => {
      if (Zu(i.keys, a)) {
        const c = Ju(o.containerQueries ? o : td, a);
        c && (s[c] = n(t[a], a));
      } else if (Object.keys(i.values || rr).includes(a)) {
        const c = i.up(a);
        s[c] = n(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function nd(e = {}) {
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
function Fe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: o,
    transform: r
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, f = ir(c, o) || {};
    return Rt(s, a, (m) => {
      let p = Uo(f, r, m);
      return m === p && typeof m == "string" && (p = Uo(f, r, `${t}${m === "default" ? "" : co(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: zt
  } : {}, i.filterProps = [t], i;
}
function od(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const rd = {
  m: "margin",
  p: "padding"
}, id = {
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
}, sd = od((e) => {
  if (e.length > 2)
    if (cs[e])
      e = cs[e];
    else
      return [e];
  const [t, n] = e.split(""), o = rd[t], r = id[n] || "";
  return Array.isArray(r) ? r.map((i) => o + i) : [o + r];
}), sr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ar = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ad = [...sr, ...ar];
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
function ld(e, t) {
  return (n) => e.reduce((o, r) => (o[r] = po(t, n), o), {});
}
function cd(e, t, n, o) {
  if (!t.includes(n))
    return null;
  const r = sd(n), i = ld(r, o), s = e[n];
  return Rt(e, s, i);
}
function el(e, t) {
  const n = wi(e.theme);
  return Object.keys(e).map((o) => cd(e, t, o, n)).reduce(Un, {});
}
function Pe(e) {
  return el(e, sr);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = zt, e), {}) : {};
Pe.filterProps = sr;
function Oe(e) {
  return el(e, ar);
}
Oe.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = zt, e), {}) : {};
Oe.filterProps = ar;
process.env.NODE_ENV !== "production" && ad.reduce((e, t) => (e[t] = zt, e), {});
function tl(e = 8, t = wi({
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
function nt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function at(e, t) {
  return Fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ud = at("border", nt), dd = at("borderTop", nt), pd = at("borderRight", nt), fd = at("borderBottom", nt), hd = at("borderLeft", nt), md = at("borderColor"), gd = at("borderTopColor"), xd = at("borderRightColor"), bd = at("borderBottomColor"), yd = at("borderLeftColor"), vd = at("outline", nt), wd = at("outlineColor"), cr = (e) => {
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
lr(ud, dd, pd, fd, hd, md, gd, xd, bd, yd, cr, vd, wd);
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
const Cd = Fe({
  prop: "gridColumn"
}), Ed = Fe({
  prop: "gridRow"
}), Sd = Fe({
  prop: "gridAutoFlow"
}), _d = Fe({
  prop: "gridAutoColumns"
}), Rd = Fe({
  prop: "gridAutoRows"
}), Td = Fe({
  prop: "gridTemplateColumns"
}), kd = Fe({
  prop: "gridTemplateRows"
}), jd = Fe({
  prop: "gridTemplateAreas"
}), $d = Fe({
  prop: "gridArea"
});
lr(ur, dr, pr, Cd, Ed, Sd, _d, Rd, Td, kd, jd, $d);
function mn(e, t) {
  return t === "grey" ? t : e;
}
const Pd = Fe({
  prop: "color",
  themeKey: "palette",
  transform: mn
}), Od = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: mn
}), Md = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: mn
});
lr(Pd, Od, Md);
function qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ad = Fe({
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
const Id = Fe({
  prop: "minWidth",
  transform: qe
}), Dd = Fe({
  prop: "height",
  transform: qe
}), Fd = Fe({
  prop: "maxHeight",
  transform: qe
}), Nd = Fe({
  prop: "minHeight",
  transform: qe
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: qe
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: qe
});
const Bd = Fe({
  prop: "boxSizing"
});
lr(Ad, Ci, Id, Dd, Fd, Nd, Bd);
const fr = {
  // borders
  border: {
    themeKey: "borders",
    transform: nt
  },
  borderTop: {
    themeKey: "borders",
    transform: nt
  },
  borderRight: {
    themeKey: "borders",
    transform: nt
  },
  borderBottom: {
    themeKey: "borders",
    transform: nt
  },
  borderLeft: {
    themeKey: "borders",
    transform: nt
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
    transform: nt
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
    style: Oe
  },
  pt: {
    style: Oe
  },
  pr: {
    style: Oe
  },
  pb: {
    style: Oe
  },
  pl: {
    style: Oe
  },
  px: {
    style: Oe
  },
  py: {
    style: Oe
  },
  padding: {
    style: Oe
  },
  paddingTop: {
    style: Oe
  },
  paddingRight: {
    style: Oe
  },
  paddingBottom: {
    style: Oe
  },
  paddingLeft: {
    style: Oe
  },
  paddingX: {
    style: Oe
  },
  paddingY: {
    style: Oe
  },
  paddingInline: {
    style: Oe
  },
  paddingInlineStart: {
    style: Oe
  },
  paddingInlineEnd: {
    style: Oe
  },
  paddingBlock: {
    style: Oe
  },
  paddingBlockStart: {
    style: Oe
  },
  paddingBlockEnd: {
    style: Oe
  },
  m: {
    style: Pe
  },
  mt: {
    style: Pe
  },
  mr: {
    style: Pe
  },
  mb: {
    style: Pe
  },
  ml: {
    style: Pe
  },
  mx: {
    style: Pe
  },
  my: {
    style: Pe
  },
  margin: {
    style: Pe
  },
  marginTop: {
    style: Pe
  },
  marginRight: {
    style: Pe
  },
  marginBottom: {
    style: Pe
  },
  marginLeft: {
    style: Pe
  },
  marginX: {
    style: Pe
  },
  marginY: {
    style: Pe
  },
  marginInline: {
    style: Pe
  },
  marginInlineStart: {
    style: Pe
  },
  marginInlineEnd: {
    style: Pe
  },
  marginBlock: {
    style: Pe
  },
  marginBlockStart: {
    style: Pe
  },
  marginBlockEnd: {
    style: Pe
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
function zd(...e) {
  const t = e.reduce((o, r) => o.concat(Object.keys(r)), []), n = new Set(t);
  return e.every((o) => n.size === Object.keys(o).length);
}
function Ld(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hd() {
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
      cssProperty: c = n,
      themeKey: f,
      transform: h,
      style: m
    } = a;
    if (o == null)
      return null;
    if (f === "typography" && o === "inherit")
      return {
        [n]: o
      };
    const p = ir(r, f) || {};
    return m ? m(s) : Rt(s, o, (g) => {
      let d = Uo(p, h, g);
      return g === d && typeof g == "string" && (d = Uo(p, h, `${n}${g === "default" ? "" : co(g)}`, g)), c === !1 ? d : {
        [c]: d
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
    function a(c) {
      let f = c;
      if (typeof c == "function")
        f = c(r);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const h = nd(r.breakpoints), m = Object.keys(h);
      let p = h;
      return Object.keys(f).forEach((x) => {
        const g = Ld(f[x], r);
        if (g != null)
          if (typeof g == "object")
            if (s[x])
              p = Un(p, e(x, g, r, s));
            else {
              const d = Rt({
                theme: r
              }, g, (v) => ({
                [x]: v
              }));
              zd(d, g) ? p[x] = t({
                sx: g,
                theme: r,
                nested: !0
              }) : p = Un(p, d);
            }
          else
            p = Un(p, e(x, g, r, s));
      }), !i && r.modularCssLayers ? {
        "@layer sx": ss(r, ls(m, p))
      } : ss(r, ls(m, p));
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const xn = Hd();
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
  } = e, a = Xu(n), c = tl(r);
  let f = Ze({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: c,
    shape: {
      ...ed,
      ...i
    }
  }, s);
  return f = Qu(f), f.applyStyles = Vd, f = t.reduce((h, m) => Ze(h, m), f), f.unstable_sxConfig = {
    ...fr,
    ...s?.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return xn({
      sx: m,
      theme: this
    });
  }, f;
}
function Wd(e) {
  return Object.keys(e).length === 0;
}
function Ud(e = null) {
  const t = k.useContext(Eu);
  return !t || Wd(t) ? e : t;
}
const Gd = Ei();
function Yd(e = Gd) {
  return Ud(e);
}
const us = (e) => e, qd = () => {
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
}, Kd = qd();
function nl(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = nl(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function _e() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = nl(e)) && (o && (o += " "), o += t);
  return o;
}
const Xd = {
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
function lt(e, t, n = "Mui") {
  const o = Xd[t];
  return o ? `${n}-${o}` : `${Kd.generate(e)}-${t}`;
}
function Ye(e, t, n = "Mui") {
  const o = {};
  return t.forEach((r) => {
    o[r] = lt(e, r, n);
  }), o;
}
function ol(e, t = "") {
  return e.displayName || e.name || t;
}
function ds(e, t, n) {
  const o = ol(t);
  return e.displayName || (o !== "" ? `${n}(${o})` : n);
}
function Zd(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ol(e, "Component");
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
function rl(e) {
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
const Jd = Ei();
function Or(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Qd(e) {
  return e ? (t, n) => n[e] : null;
}
function ep(e, t, n) {
  e.theme = rp(e.theme) ? n : e.theme[t] || e.theme;
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
    return il(e, o.variants, [r], n);
  }
  return o?.isProcessed ? n ? qt(Xt(o.style), n) : o.style : n ? qt(Xt(o), n) : o;
}
function il(e, t, n = [], o = void 0) {
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
function tp(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Jd,
    rootShouldForwardProp: o = Or,
    slotShouldForwardProp: r = Or
  } = e;
  function i(a) {
    ep(a, t, n);
  }
  return (a, c = {}) => {
    Uu(a, (_) => _.filter((I) => I !== xn));
    const {
      name: f,
      slot: h,
      skipVariantsResolver: m,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Qd(sl(h)),
      ...g
    } = c, d = f && f.startsWith("Mui") || h ? "components" : "custom", v = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), S = p || !1;
    let T = Or;
    h === "Root" || h === "root" ? T = o : h ? T = r : ip(a) && (T = void 0);
    const C = Wu(a, {
      shouldForwardProp: T,
      label: op(f, h),
      ...g
    }), w = (_) => {
      if (_.__emotion_real === _)
        return _;
      if (typeof _ == "function")
        return function(R) {
          return No(R, _, R.theme.modularCssLayers ? d : void 0);
        };
      if (_t(_)) {
        const I = rl(_);
        return function(F) {
          return I.variants ? No(F, I, F.theme.modularCssLayers ? d : void 0) : F.theme.modularCssLayers ? qt(I.style, d) : I.style;
        };
      }
      return _;
    }, E = (..._) => {
      const I = [], R = _.map(w), F = [];
      if (I.push(i), f && x && F.push(function(D) {
        const O = D.theme.components?.[f]?.styleOverrides;
        if (!O)
          return null;
        const B = {};
        for (const j in O)
          B[j] = No(D, O[j], D.theme.modularCssLayers ? "theme" : void 0);
        return x(D, B);
      }), f && !v && F.push(function(D) {
        const O = D.theme?.components?.[f]?.variants;
        return O ? il(D, O, [], D.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || F.push(xn), Array.isArray(R[0])) {
        const y = R.shift(), D = new Array(I.length).fill(""), M = new Array(F.length).fill("");
        let O;
        O = [...D, ...y, ...M], O.raw = [...D, ...y.raw, ...M], I.unshift(O);
      }
      const V = [...I, ...R, ...F], H = C(...V);
      return a.muiName && (H.muiName = a.muiName), process.env.NODE_ENV !== "production" && (H.displayName = np(f, h, a)), H;
    };
    return C.withConfig && (E.withConfig = C.withConfig), E;
  };
}
function np(e, t, n) {
  return e ? `${e}${co(t || "")}` : `Styled(${Zd(n)})`;
}
function op(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${sl(t || "Root")}`), n;
}
function rp(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ip(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function sl(e) {
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
          for (const c in s)
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              const f = c;
              o[i][f] = Kr(s[f], a[f], n);
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
function sp(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Si(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), sp(e, t, n);
}
function ap(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((o) => o + o)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((o, r) => r < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nt(ap(e));
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
const lp = (e) => {
  const t = Nt(e);
  return t.values.slice(0, 3).map((n, o) => t.type.includes("hsl") && o !== 0 ? `${n}%` : n).join(" ");
}, Bn = (e, t) => {
  try {
    return lp(e);
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
function al(e) {
  e = Nt(e);
  const {
    values: t
  } = e, n = t[0], o = t[1] / 100, r = t[2] / 100, i = o * Math.min(r, 1 - r), s = (f, h = (f + n / 30) % 12) => r - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), hr({
    type: a,
    values: c
  });
}
function Xr(e) {
  e = Nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nt(al(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ps(e, t) {
  const n = Xr(e), o = Xr(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function Go(e, t) {
  return e = Nt(e), t = Si(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, hr(e);
}
function Vt(e, t, n) {
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
function cp(e, t = 0.15) {
  return Xr(e) > 0.5 ? mr(e, t) : gr(e, t);
}
function _o(e, t, n) {
  try {
    return cp(e, t);
  } catch {
    return e;
  }
}
const up = "exact-prop: ​";
function ll(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [up]: (t) => {
      const n = Object.keys(t).filter((o) => !e.hasOwnProperty(o));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((o) => `\`${o}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const dp = /* @__PURE__ */ k.createContext();
process.env.NODE_ENV !== "production" && (u.node, u.bool);
const _i = () => k.useContext(dp) ?? !1, pp = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (u.node, u.object);
function fp(e) {
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
function hp({
  props: e,
  name: t
}) {
  const n = k.useContext(pp);
  return fp({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let fs = 0;
function mp(e) {
  const [t, n] = k.useState(e), o = e || t;
  return k.useEffect(() => {
    t == null && (fs += 1, n(`mui-${fs}`));
  }, [t]), o;
}
const gp = {
  ...k
}, hs = gp.useId;
function xp(e) {
  if (hs !== void 0) {
    const t = hs();
    return e ?? t;
  }
  return mp(e);
}
const ms = {
  theme: void 0
};
function bp(e) {
  let t, n;
  return function(r) {
    let i = t;
    return (i === void 0 || r.theme !== n) && (ms.theme = r.theme, i = rl(e(ms)), t = i, n = r.theme), i;
  };
}
function yp(e = "") {
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
}, vp = (e, t, n) => {
  function o(r, i = [], s = []) {
    Object.entries(r).forEach(([a, c]) => {
      (!n || n && !n([...i, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...i, a], Array.isArray(c) ? [...s, a] : s) : t([...i, a], c, s));
    });
  }
  o(e);
}, wp = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Mr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: o
  } = t || {}, r = {}, i = {}, s = {};
  return vp(
    e,
    (a, c, f) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(a, c))) {
        const h = `--${n ? `${n}-` : ""}${a.join("-")}`, m = wp(a, c);
        Object.assign(r, {
          [h]: m
        }), gs(i, a, `var(${h})`, f), gs(s, a, `var(${h}, ${m})`, f);
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
function Cp(e, t = {}) {
  const {
    getSelector: n = S,
    disableCssColorScheme: o,
    colorSchemeSelector: r,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: c = "light",
    ...f
  } = e, {
    vars: h,
    css: m,
    varsWithDefaults: p
  } = Mr(f, t);
  let x = p;
  const g = {}, {
    [c]: d,
    ...v
  } = s;
  if (Object.entries(v || {}).forEach(([w, E]) => {
    const {
      vars: _,
      css: I,
      varsWithDefaults: R
    } = Mr(E, t);
    x = Ze(x, R), g[w] = {
      css: I,
      vars: _
    };
  }), d) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: _
    } = Mr(d, t);
    x = Ze(x, _), g[c] = {
      css: w,
      vars: E
    };
  }
  function S(w, E) {
    let _ = r;
    if (r === "class" && (_ = ".%s"), r === "data" && (_ = "[data-%s]"), r?.startsWith("data-") && !r.includes("%s") && (_ = `[${r}="%s"]`), w) {
      if (_ === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${s[w]?.palette?.mode || w})`]: {
            ":root": E
          }
        };
      if (_)
        return e.defaultColorScheme === w ? `:root, ${_.replace("%s", String(w))}` : _.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: x,
    generateThemeVars: () => {
      let w = {
        ...h
      };
      return Object.entries(g).forEach(([, {
        vars: E
      }]) => {
        w = Ze(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      const w = [], E = e.defaultColorScheme || "light";
      function _(F, V) {
        Object.keys(V).length && w.push(typeof F == "string" ? {
          [F]: {
            ...V
          }
        } : F);
      }
      _(n(void 0, {
        ...m
      }), m);
      const {
        [E]: I,
        ...R
      } = g;
      if (I) {
        const {
          css: F
        } = I, V = s[E]?.palette?.mode, H = !o && V ? {
          colorScheme: V,
          ...F
        } : {
          ...F
        };
        _(n(E, {
          ...H
        }), H);
      }
      return Object.entries(R).forEach(([F, {
        css: V
      }]) => {
        const H = s[F]?.palette?.mode, y = !o && H ? {
          colorScheme: H,
          ...V
        } : {
          ...V
        };
        _(n(F, {
          ...y
        }), y);
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
function Ep(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function xt(e, t, n = void 0) {
  const o = {};
  for (const r in e) {
    const i = e[r];
    let s = "", a = !0;
    for (let c = 0; c < i.length; c += 1) {
      const f = i[c];
      f && (s += (a === !0 ? "" : " ") + t(f), a = !1, n && n[f] && (s += " " + n[f]));
    }
    o[r] = s;
  }
  return o;
}
const Zn = {
  black: "#000",
  white: "#fff"
}, Sp = {
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
function cl() {
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
const ul = cl();
function dl() {
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
const Zr = dl();
function xs(e, t, n, o) {
  const r = o.light || o, i = o.dark || o * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = gr(e.main, r) : t === "dark" && (e.dark = mr(e.main, i)));
}
function bs(e, t, n, o, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  t[n] || (t.hasOwnProperty(o) ? t[n] = t[o] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function _p(e = "light") {
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
function Rp(e = "light") {
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
function Tp(e = "light") {
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
function kp(e = "light") {
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
function jp(e = "light") {
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
function $p(e = "light") {
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
function Pp(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ri(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: o = 0.2,
    colorSpace: r,
    ...i
  } = e, s = e.primary || _p(t), a = e.secondary || Rp(t), c = e.error || Tp(t), f = e.info || kp(t), h = e.success || jp(t), m = e.warning || $p(t);
  function p(v) {
    if (r)
      return Pp(v);
    const S = ps(v, Zr.text.primary) >= n ? Zr.text.primary : ul.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = ps(v, S);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${S} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const x = ({
    color: v,
    name: S,
    mainShade: T = 500,
    lightShade: C = 300,
    darkShade: w = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[T] && (v.main = v[T]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Ft(11, S ? ` (${S})` : "", T));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ft(12, S ? ` (${S})` : "", JSON.stringify(v.main)));
    return r ? (bs(r, v, "light", C, o), bs(r, v, "dark", w, o)) : (xs(v, "light", C, o), xs(v, "dark", w, o)), v.contrastText || (v.contrastText = p(v.main)), v;
  };
  let g;
  return t === "light" ? g = cl() : t === "dark" && (g = dl()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ze({
    // A collection of common colors.
    common: {
      ...Zn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: x({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: x({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: x({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: x({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: x({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: x({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: Sp,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: x,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...g
  }, i);
}
function Op(e) {
  const t = {};
  return Object.entries(e).forEach((o) => {
    const [r, i] = o;
    typeof i == "object" && (t[r] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Mp(e, t) {
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
function Ap(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ys = {
  textTransform: "uppercase"
}, vs = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ip(e, t) {
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
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const p = o / 14, x = h || ((v) => `${v / c * p}rem`), g = (v, S, T, C, w) => ({
    fontFamily: n,
    fontWeight: v,
    fontSize: x(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === vs ? {
      letterSpacing: `${Ap(C / S)}em`
    } : {},
    ...w,
    ...f
  }), d = {
    h1: g(r, 96, 1.167, -1.5),
    h2: g(r, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, ys),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, ys),
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
    htmlFontSize: c,
    pxToRem: x,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: r,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...d
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Dp = 0.2, Fp = 0.14, Np = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Fp})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Np})`].join(",");
}
const Bp = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zp = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Lp = {
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
function Hp(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Vp(e) {
  const t = {
    ...zp,
    ...e.easing
  }, n = {
    ...Lp,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Hp,
    create: (r = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: c = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (p) => typeof p == "string", m = (p) => !Number.isNaN(parseFloat(p));
        !h(r) && !Array.isArray(r) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(a) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !h(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(r) ? r : [r]).map((h) => `${h} ${typeof s == "string" ? s : ws(s)} ${a} ${typeof c == "string" ? c : ws(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Wp = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Up(e) {
  return _t(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function pl(e = {}) {
  const t = {
    ...e
  };
  function n(o) {
    const r = Object.entries(o);
    for (let i = 0; i < r.length; i++) {
      const [s, a] = r[i];
      !Up(a) || s.startsWith("unstable_") ? delete o[s] : _t(a) && (o[s] = {
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
const Gp = (e) => {
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
function Yp(e) {
  Object.assign(e, {
    alpha(t, n) {
      const o = this || e;
      return o.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : o.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Go(t, Gp(n));
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
    shape: c,
    colorSpace: f,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ft(20));
  const m = Ri({
    ...i,
    colorSpace: f
  }), p = Ei(e);
  let x = Ze(p, {
    mixins: Mp(p.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Bp.slice(),
    typography: Ip(m, a),
    transitions: Vp(s),
    zIndex: {
      ...Wp
    }
  });
  if (x = Ze(x, h), x = t.reduce((g, d) => Ze(g, d), x), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], d = (v, S) => {
      let T;
      for (T in v) {
        const C = v[T];
        if (g.includes(T) && Object.keys(C).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = lt("", T);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: C
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[T] = {};
        }
      }
    };
    Object.keys(x.components).forEach((v) => {
      const S = x.components[v].styleOverrides;
      S && v.startsWith("Mui") && d(S, v);
    });
  }
  return x.unstable_sxConfig = {
    ...fr,
    ...h?.unstable_sxConfig
  }, x.unstable_sx = function(d) {
    return xn({
      sx: d,
      theme: this
    });
  }, x.toRuntimeSource = pl, Yp(x), x;
}
function Qr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const qp = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Qr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function fl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function hl(e) {
  return e === "dark" ? qp : [];
}
function Kp(e) {
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
      ...fl(s.mode),
      ...n
    },
    overlays: o || hl(s.mode),
    ...i
  };
}
function Xp(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Zp = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Jp = (e) => (t, n) => {
  const o = e.rootSelector || ":root", r = e.colorSchemeSelector;
  let i = r;
  if (r === "class" && (i = ".%s"), r === "data" && (i = "[data-%s]"), r?.startsWith("data-") && !r.includes("%s") && (i = `[${r}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Zp(e.cssVarPrefix).forEach((a) => {
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
function Qp(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function L(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function zn(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : al(e);
}
function yt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Bn(zn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ef(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const dt = (e) => {
  try {
    return e();
  } catch {
  }
}, tf = (e = "mui") => yp(e);
function Ar(e, t, n, o, r) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = r === "dark" ? "dark" : "light";
  if (!o) {
    t[r] = Kp({
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
      ...fl(i),
      ...n?.opacity
    },
    overlays: n?.overlays || hl(i)
  }, a;
}
function nf(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: r = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: a = Xp,
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...h
  } = e, m = Object.keys(n)[0], p = o || (n.light && m !== "light" ? "light" : m), x = tf(i), {
    [p]: g,
    light: d,
    dark: v,
    ...S
  } = n, T = {
    ...S
  };
  let C = g;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (C = !0), !C)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ft(21, p));
  let w;
  s && (w = "oklch");
  const E = Ar(w, T, C, h, p);
  d && !T.light && Ar(w, T, d, void 0, "light"), v && !T.dark && Ar(w, T, v, void 0, "dark");
  let _ = {
    defaultColorScheme: p,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: x,
    colorSchemes: T,
    font: {
      ...Op(E.typography),
      ...E.font
    },
    spacing: ef(h.spacing)
  };
  Object.keys(_.colorSchemes).forEach((H) => {
    const y = _.colorSchemes[H].palette, D = (O) => {
      const B = O.split("-"), j = B[1], Q = B[2];
      return x(O, y[j][Q]);
    };
    y.mode === "light" && (L(y.common, "background", "#fff"), L(y.common, "onBackground", "#000")), y.mode === "dark" && (L(y.common, "background", "#000"), L(y.common, "onBackground", "#fff"));
    function M(O, B, j) {
      if (w) {
        let Q;
        return O === Vt && (Q = `transparent ${((1 - j) * 100).toFixed(0)}%`), O === ye && (Q = `#000 ${(j * 100).toFixed(0)}%`), O === ve && (Q = `#fff ${(j * 100).toFixed(0)}%`), `color-mix(in ${w}, ${B}, ${Q})`;
      }
      return O(B, j);
    }
    if (Qp(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      L(y.Alert, "errorColor", M(ye, y.error.light, 0.6)), L(y.Alert, "infoColor", M(ye, y.info.light, 0.6)), L(y.Alert, "successColor", M(ye, y.success.light, 0.6)), L(y.Alert, "warningColor", M(ye, y.warning.light, 0.6)), L(y.Alert, "errorFilledBg", D("palette-error-main")), L(y.Alert, "infoFilledBg", D("palette-info-main")), L(y.Alert, "successFilledBg", D("palette-success-main")), L(y.Alert, "warningFilledBg", D("palette-warning-main")), L(y.Alert, "errorFilledColor", dt(() => y.getContrastText(y.error.main))), L(y.Alert, "infoFilledColor", dt(() => y.getContrastText(y.info.main))), L(y.Alert, "successFilledColor", dt(() => y.getContrastText(y.success.main))), L(y.Alert, "warningFilledColor", dt(() => y.getContrastText(y.warning.main))), L(y.Alert, "errorStandardBg", M(ve, y.error.light, 0.9)), L(y.Alert, "infoStandardBg", M(ve, y.info.light, 0.9)), L(y.Alert, "successStandardBg", M(ve, y.success.light, 0.9)), L(y.Alert, "warningStandardBg", M(ve, y.warning.light, 0.9)), L(y.Alert, "errorIconColor", D("palette-error-main")), L(y.Alert, "infoIconColor", D("palette-info-main")), L(y.Alert, "successIconColor", D("palette-success-main")), L(y.Alert, "warningIconColor", D("palette-warning-main")), L(y.AppBar, "defaultBg", D("palette-grey-100")), L(y.Avatar, "defaultBg", D("palette-grey-400")), L(y.Button, "inheritContainedBg", D("palette-grey-300")), L(y.Button, "inheritContainedHoverBg", D("palette-grey-A100")), L(y.Chip, "defaultBorder", D("palette-grey-400")), L(y.Chip, "defaultAvatarColor", D("palette-grey-700")), L(y.Chip, "defaultIconColor", D("palette-grey-700")), L(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), L(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), L(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), L(y.LinearProgress, "primaryBg", M(ve, y.primary.main, 0.62)), L(y.LinearProgress, "secondaryBg", M(ve, y.secondary.main, 0.62)), L(y.LinearProgress, "errorBg", M(ve, y.error.main, 0.62)), L(y.LinearProgress, "infoBg", M(ve, y.info.main, 0.62)), L(y.LinearProgress, "successBg", M(ve, y.success.main, 0.62)), L(y.LinearProgress, "warningBg", M(ve, y.warning.main, 0.62)), L(y.Skeleton, "bg", w ? M(Vt, y.text.primary, 0.11) : `rgba(${D("palette-text-primaryChannel")} / 0.11)`), L(y.Slider, "primaryTrack", M(ve, y.primary.main, 0.62)), L(y.Slider, "secondaryTrack", M(ve, y.secondary.main, 0.62)), L(y.Slider, "errorTrack", M(ve, y.error.main, 0.62)), L(y.Slider, "infoTrack", M(ve, y.info.main, 0.62)), L(y.Slider, "successTrack", M(ve, y.success.main, 0.62)), L(y.Slider, "warningTrack", M(ve, y.warning.main, 0.62));
      const O = w ? M(ye, y.background.default, 0.6825) : _o(y.background.default, 0.8);
      L(y.SnackbarContent, "bg", O), L(y.SnackbarContent, "color", dt(() => w ? Zr.text.primary : y.getContrastText(O))), L(y.SpeedDialAction, "fabHoverBg", _o(y.background.paper, 0.15)), L(y.StepConnector, "border", D("palette-grey-400")), L(y.StepContent, "border", D("palette-grey-400")), L(y.Switch, "defaultColor", D("palette-common-white")), L(y.Switch, "defaultDisabledColor", D("palette-grey-100")), L(y.Switch, "primaryDisabledColor", M(ve, y.primary.main, 0.62)), L(y.Switch, "secondaryDisabledColor", M(ve, y.secondary.main, 0.62)), L(y.Switch, "errorDisabledColor", M(ve, y.error.main, 0.62)), L(y.Switch, "infoDisabledColor", M(ve, y.info.main, 0.62)), L(y.Switch, "successDisabledColor", M(ve, y.success.main, 0.62)), L(y.Switch, "warningDisabledColor", M(ve, y.warning.main, 0.62)), L(y.TableCell, "border", M(ve, M(Vt, y.divider, 1), 0.88)), L(y.Tooltip, "bg", M(Vt, y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      L(y.Alert, "errorColor", M(ve, y.error.light, 0.6)), L(y.Alert, "infoColor", M(ve, y.info.light, 0.6)), L(y.Alert, "successColor", M(ve, y.success.light, 0.6)), L(y.Alert, "warningColor", M(ve, y.warning.light, 0.6)), L(y.Alert, "errorFilledBg", D("palette-error-dark")), L(y.Alert, "infoFilledBg", D("palette-info-dark")), L(y.Alert, "successFilledBg", D("palette-success-dark")), L(y.Alert, "warningFilledBg", D("palette-warning-dark")), L(y.Alert, "errorFilledColor", dt(() => y.getContrastText(y.error.dark))), L(y.Alert, "infoFilledColor", dt(() => y.getContrastText(y.info.dark))), L(y.Alert, "successFilledColor", dt(() => y.getContrastText(y.success.dark))), L(y.Alert, "warningFilledColor", dt(() => y.getContrastText(y.warning.dark))), L(y.Alert, "errorStandardBg", M(ye, y.error.light, 0.9)), L(y.Alert, "infoStandardBg", M(ye, y.info.light, 0.9)), L(y.Alert, "successStandardBg", M(ye, y.success.light, 0.9)), L(y.Alert, "warningStandardBg", M(ye, y.warning.light, 0.9)), L(y.Alert, "errorIconColor", D("palette-error-main")), L(y.Alert, "infoIconColor", D("palette-info-main")), L(y.Alert, "successIconColor", D("palette-success-main")), L(y.Alert, "warningIconColor", D("palette-warning-main")), L(y.AppBar, "defaultBg", D("palette-grey-900")), L(y.AppBar, "darkBg", D("palette-background-paper")), L(y.AppBar, "darkColor", D("palette-text-primary")), L(y.Avatar, "defaultBg", D("palette-grey-600")), L(y.Button, "inheritContainedBg", D("palette-grey-800")), L(y.Button, "inheritContainedHoverBg", D("palette-grey-700")), L(y.Chip, "defaultBorder", D("palette-grey-700")), L(y.Chip, "defaultAvatarColor", D("palette-grey-300")), L(y.Chip, "defaultIconColor", D("palette-grey-300")), L(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), L(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), L(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), L(y.LinearProgress, "primaryBg", M(ye, y.primary.main, 0.5)), L(y.LinearProgress, "secondaryBg", M(ye, y.secondary.main, 0.5)), L(y.LinearProgress, "errorBg", M(ye, y.error.main, 0.5)), L(y.LinearProgress, "infoBg", M(ye, y.info.main, 0.5)), L(y.LinearProgress, "successBg", M(ye, y.success.main, 0.5)), L(y.LinearProgress, "warningBg", M(ye, y.warning.main, 0.5)), L(y.Skeleton, "bg", w ? M(Vt, y.text.primary, 0.13) : `rgba(${D("palette-text-primaryChannel")} / 0.13)`), L(y.Slider, "primaryTrack", M(ye, y.primary.main, 0.5)), L(y.Slider, "secondaryTrack", M(ye, y.secondary.main, 0.5)), L(y.Slider, "errorTrack", M(ye, y.error.main, 0.5)), L(y.Slider, "infoTrack", M(ye, y.info.main, 0.5)), L(y.Slider, "successTrack", M(ye, y.success.main, 0.5)), L(y.Slider, "warningTrack", M(ye, y.warning.main, 0.5));
      const O = w ? M(ve, y.background.default, 0.985) : _o(y.background.default, 0.98);
      L(y.SnackbarContent, "bg", O), L(y.SnackbarContent, "color", dt(() => w ? ul.text.primary : y.getContrastText(O))), L(y.SpeedDialAction, "fabHoverBg", _o(y.background.paper, 0.15)), L(y.StepConnector, "border", D("palette-grey-600")), L(y.StepContent, "border", D("palette-grey-600")), L(y.Switch, "defaultColor", D("palette-grey-300")), L(y.Switch, "defaultDisabledColor", D("palette-grey-600")), L(y.Switch, "primaryDisabledColor", M(ye, y.primary.main, 0.55)), L(y.Switch, "secondaryDisabledColor", M(ye, y.secondary.main, 0.55)), L(y.Switch, "errorDisabledColor", M(ye, y.error.main, 0.55)), L(y.Switch, "infoDisabledColor", M(ye, y.info.main, 0.55)), L(y.Switch, "successDisabledColor", M(ye, y.success.main, 0.55)), L(y.Switch, "warningDisabledColor", M(ye, y.warning.main, 0.55)), L(y.TableCell, "border", M(ye, M(Vt, y.divider, 1), 0.68)), L(y.Tooltip, "bg", M(Vt, y.grey[700], 0.92));
    }
    yt(y.background, "default"), yt(y.background, "paper"), yt(y.common, "background"), yt(y.common, "onBackground"), yt(y, "divider"), Object.keys(y).forEach((O) => {
      const B = y[O];
      O !== "tonalOffset" && B && typeof B == "object" && (B.main && L(y[O], "mainChannel", Bn(zn(B.main))), B.light && L(y[O], "lightChannel", Bn(zn(B.light))), B.dark && L(y[O], "darkChannel", Bn(zn(B.dark))), B.contrastText && L(y[O], "contrastTextChannel", Bn(zn(B.contrastText))), O === "text" && (yt(y[O], "primary"), yt(y[O], "secondary")), O === "action" && (B.active && yt(y[O], "active"), B.selected && yt(y[O], "selected")));
    });
  }), _ = t.reduce((H, y) => Ze(H, y), _);
  const I = {
    prefix: i,
    disableCssColorScheme: r,
    shouldSkipGeneratingVar: a,
    getSelector: Jp(_),
    enableContrastVars: s
  }, {
    vars: R,
    generateThemeVars: F,
    generateStyleSheets: V
  } = Cp(_, I);
  return _.vars = R, Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([H, y]) => {
    _[H] = y;
  }), _.generateThemeVars = F, _.generateStyleSheets = V, _.generateSpacing = function() {
    return tl(h.spacing, wi(this));
  }, _.getColorSchemeSelector = Ep(c), _.spacing = _.generateSpacing(), _.shouldSkipGeneratingVar = a, _.unstable_sxConfig = {
    ...fr,
    ...h?.unstable_sxConfig
  }, _.unstable_sx = function(y) {
    return xn({
      sx: y,
      theme: this
    });
  }, _.toRuntimeSource = pl, _;
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
function ml(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: o = !1,
    colorSchemes: r = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n?.mode,
    ...s
  } = e, a = i || "light", c = r?.[a], f = {
    ...r,
    ...n ? {
      [a]: {
        ...typeof c != "boolean" && c,
        palette: n
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return Jr(e, ...t);
    let h = n;
    "palette" in e || f[a] && (f[a] !== !0 ? h = f[a].palette : a === "dark" && (h = {
      mode: "dark"
    }));
    const m = Jr({
      ...e,
      palette: h
    }, ...t);
    return m.defaultColorScheme = a, m.colorSchemes = f, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: m.palette
    }, Es(m, "dark", f.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: m.palette
    }, Es(m, "light", f.light)), m;
  }
  return !n && !("light" in f) && a === "light" && (f.light = !0), nf({
    ...s,
    colorSchemes: f,
    defaultColorScheme: a,
    ...typeof o != "boolean" && o
  }, ...t);
}
const gl = ml();
function xr() {
  const e = Yd(gl);
  return process.env.NODE_ENV !== "production" && k.useDebugValue(e), e[Ka] || e;
}
function of(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ti = (e) => of(e) && e !== "classes", ne = tp({
  themeId: Ka,
  defaultTheme: gl,
  rootShouldForwardProp: Ti
}), Ss = () => (/* @__PURE__ */ new Date()).toISOString(), Ro = "IronCalc-Clipboard", Yo = 40, xl = 40, bl = 40, rf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("g", { id: "arrow-middle-from-line", clipPath: "url(#clip0_107_4135)" }, /* @__PURE__ */ k.createElement("path", { id: "Vector", d: "M8 14.6667V10.6667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_2", d: "M8 5.33333V1.33333", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_3", d: "M14.6667 8H1.33334", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_4", d: "M10 12.6667L8 10.6667L6 12.6667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_5", d: "M10 3.33333L8 5.33333L6 3.33333", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", { id: "clip0_107_4135" }, /* @__PURE__ */ k.createElement("rect", { width: 16, height: 16, fill: "white" })))), sf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M2 14H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M14 11.3333V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), af = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 5.33333V3.33333C14 2.59695 13.403 2 12.6667 2H8M14 10.6667V12.6667C14 13.403 13.403 14 12.6667 14H8M2 10.6667V12.6667C2 13.403 2.59695 14 3.33333 14H8M2 5.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H8M8 14V10.6667M8 2V5.33333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), lf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M10.6667 2H12.6667C13.403 2 14 2.59695 14 3.33333V8M5.33333 2H3.33333C2.59695 2 2 2.59695 2 3.33333V8M5.33333 14H3.33333C2.59695 14 2 13.403 2 12.6667V8M10.6667 14H12.6667C13.403 14 14 13.403 14 12.6667V8M2 8H5.33333M14 8H10.6667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), cf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 5.33333V3.33333C14 2.59695 13.403 2 12.6667 2H10.6667M14 10.6667V12.6667C14 13.403 13.403 14 12.6667 14H10.6667M2 10.6667V12.6667C2 13.403 2.59695 14 3.33333 14H5.33333M2 5.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H5.33333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), uf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M4.66667 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H4.66667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M4.66667 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), df = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), pf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M4.66667 8H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 4.66667L8 11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), ff = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M11.3333 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M14 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), hf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M3 8H2M14 8H13M7 8H5M11 8H9M14 4H2M2.01 12H2M4.01 12H4M6.01 12H6M8.01 12H8M10.01 12H10M12.01 12H12M14.01 12H14", stroke: "#333333", strokeLinecap: "round", strokeLinejoin: "round" })), mf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 4.66667V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4.66667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 2H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 4.66667V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), gf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 12, height: 14, viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.182 13.305C0.303333 13.3917 0.468 13.435 0.676 13.435C0.962 13.435 1.24367 13.3483 1.521 13.175C1.79833 13.0103 2.05833 12.7937 2.301 12.525C2.55233 12.2563 2.77333 11.9703 2.964 11.667C3.16333 11.3637 3.32367 11.069 3.445 10.783C3.575 10.5057 3.653 10.276 3.679 10.094L4.459 5.011H5.954V4.439H4.537L4.706 3.36C4.80133 2.75334 4.96167 2.281 5.187 1.943C5.421 1.59634 5.73733 1.423 6.136 1.423C6.422 1.423 6.67767 1.488 6.903 1.618L7.189 1.787H7.293L7.566 1.28C7.592 1.23667 7.61367 1.189 7.631 1.137C7.657 1.085 7.67 1.04167 7.67 1.007C7.67 0.93767 7.64833 0.881336 7.605 0.838003C7.57033 0.786003 7.49233 0.72967 7.371 0.669003C7.30167 0.643003 7.22367 0.621336 7.137 0.604003C7.05033 0.578003 6.95933 0.565002 6.864 0.565002C6.53467 0.565002 6.20967 0.651669 5.889 0.825003C5.56833 0.98967 5.265 1.21067 4.979 1.488C4.693 1.75667 4.43733 2.047 4.212 2.359C3.98667 2.66234 3.80033 2.957 3.653 3.243C3.51433 3.52034 3.432 3.75434 3.406 3.945L3.328 4.439H2.249V5.011H3.25L2.405 10.692C2.31833 11.2813 2.17533 11.745 1.976 12.083C1.77667 12.4297 1.508 12.603 1.17 12.603C0.953333 12.603 0.788667 12.564 0.676 12.486L0.39 12.278H0.312L0.0779999 12.746C0.026 12.85 0 12.9367 0 13.006C0 13.1187 0.0606667 13.2183 0.182 13.305ZM5.90545 9.98999C5.82745 10.1027 5.78845 10.211 5.78845 10.315H6.65945C6.70279 10.211 6.75045 10.1113 6.80245 10.016C6.85445 9.91199 6.93245 9.78199 7.03645 9.62599C7.14045 9.46132 7.30079 9.23166 7.51745 8.93699C7.73412 8.64232 8.03312 8.25232 8.41445 7.76699L9.45445 10.341H9.49345L11.2745 9.92499V9.82099L10.3385 9.44399L9.37645 6.98699C9.80112 6.50166 10.1521 6.11166 10.4295 5.81699C10.7068 5.52232 10.9235 5.29266 11.0795 5.12799C11.2441 4.96332 11.3568 4.83332 11.4175 4.73799C11.4868 4.63399 11.5215 4.53432 11.5215 4.43899H10.7025C10.6678 4.52566 10.6288 4.61666 10.5855 4.71199C10.5421 4.79866 10.4728 4.91566 10.3775 5.06299C10.2908 5.20166 10.1565 5.39666 9.97445 5.64799C9.79245 5.89932 9.54545 6.22866 9.23345 6.63599L8.31045 4.30899H8.27145L6.43845 4.72499V4.82899L7.38745 5.21899L8.27145 7.40299C7.78612 7.95766 7.38312 8.40399 7.06245 8.74199C6.74179 9.07999 6.48612 9.34432 6.29545 9.53499C6.11345 9.72566 5.98345 9.87732 5.90545 9.98999Z", fill: "#828282" })), my = (e) => /* @__PURE__ */ k.createElement("svg", { width: 100, height: 100, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M62.2449 0C62.2449 16.5084 55.687 32.3406 44.0138 44.0138C42.0408 45.9868 39.949 47.8137 37.7551 49.4875L37.7551 100C37.7551 83.4916 44.3131 67.6594 55.9863 55.9862C57.9593 54.0132 60.0511 52.1863 62.2449 50.5125L62.2449 0Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M37.7552 0.0239258C37.7488 10.0285 33.7717 19.622 26.697 26.6968C19.6165 33.7773 10.0133 37.755 6.10352e-05 37.755V62.2448C13.7182 62.2448 26.9694 57.7164 37.7552 49.4874V0.0239258Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M62.2449 99.976C62.2513 89.9713 66.2283 80.3779 73.3031 73.3031C80.3836 66.2226 89.9868 62.2449 100 62.2449V37.7551C86.2819 37.7551 73.0307 42.2835 62.2449 50.5125V99.976Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.0138 44.0138C55.687 32.3406 62.2449 16.5084 62.2449 0H37.7551V49.4875C39.949 47.8137 42.0408 45.9868 44.0138 44.0138Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37.7551 99.9655C37.7551 99.977 37.7551 99.9885 37.7551 100H62.2449C62.2449 99.9912 62.2449 99.9825 62.2449 99.9737V50.5125C60.0511 52.1863 57.9593 54.0132 55.9862 55.9862C44.3212 67.6513 37.7643 83.4696 37.7551 99.9655Z", fill: "#F2994A" })), gy = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M9.95898 8.08594C9.60893 8.35318 9.27389 8.64313 8.95898 8.95801C7.09126 10.8257 6.042 13.3586 6.04199 16H6.04102V7.91406C6.39142 7.64662 6.72781 7.35715 7.04297 7.04199C8.90157 5.18307 9.9492 2.6648 9.95898 0.0371094V8.08594Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M6.04102 7.91406C4.31493 9.23162 2.19571 9.95898 0 9.95898V6.04102C1.60208 6.04102 3.13861 5.40429 4.27148 4.27148C5.40436 3.13861 6.04101 1.60213 6.04102 0L6.04102 7.91406Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M9.95947 8.08594C11.6856 6.76838 13.8048 6.04102 16.0005 6.04102V9.95898C14.3984 9.95898 12.8619 10.5957 11.729 11.7285C10.5961 12.8614 9.95948 14.3979 9.95947 16L9.95947 8.08594Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { d: "M9.95898 0C9.95898 2.64126 8.90957 5.17429 7.04199 7.04199C6.727 7.35698 6.39119 7.64674 6.04102 7.91406L6.04102 0H9.95898Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { d: "M6.04102 16C6.04102 13.3587 7.09042 10.8257 8.95801 8.95801C9.273 8.64302 9.60881 8.35326 9.95898 8.08594V16H6.04102Z", fill: "white" })), xf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 570, height: 100, viewBox: "0 0 570 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M63.2036 0C63.2036 16.5084 56.6457 32.3406 44.9725 44.0138C42.9995 45.9868 40.9076 47.8137 38.7138 49.4875L38.7138 100C38.7138 83.4916 45.2718 67.6594 56.9449 55.9862C58.9179 54.0132 61.0098 52.1863 63.2036 50.5125L63.2036 0Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M38.7138 0.0239868C38.7075 10.0286 34.7304 19.6221 27.6556 26.6969C20.5752 33.7773 10.972 37.7551 0.95874 37.7551V62.2449C14.6768 62.2449 27.9281 57.7165 38.7138 49.4875V0.0239868Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M63.2036 99.976C63.21 89.9714 67.187 80.3779 74.2618 73.3031C81.3423 66.2227 90.9454 62.2449 100.959 62.2449V37.7551C87.2406 37.7551 73.9894 42.2835 63.2036 50.5125V99.976Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.9725 44.0138C56.6457 32.3406 63.2036 16.5084 63.2036 0H38.7138V49.4875C40.9076 47.8137 42.9995 45.9868 44.9725 44.0138Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.7138 99.9656C38.7138 99.9771 38.7138 99.9885 38.7138 100H63.2036C63.2036 99.9913 63.2036 99.9825 63.2036 99.9737V50.5125C61.0098 52.1863 58.9179 54.0132 56.9449 55.9862C45.2799 67.6513 38.7229 83.4696 38.7138 99.9656Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M402.852 37.2995H417.053C416.47 32.9711 415.23 29.1236 413.332 25.757C411.459 22.3651 409.067 19.5048 406.156 17.1761C403.245 14.822 399.929 13.0375 396.208 11.8225C392.487 10.6075 388.462 10 384.134 10C377.35 10 371.275 11.582 365.909 14.7461C360.543 17.9101 356.303 22.479 353.189 28.4528C350.076 34.4012 348.519 41.5646 348.519 49.943C348.519 58.2962 350.063 65.4596 353.151 71.4333C356.24 77.4071 360.467 81.976 365.833 85.14C371.199 88.3041 377.299 89.8861 384.134 89.8861C388.766 89.8861 392.981 89.2027 396.777 87.8358C400.574 86.4436 403.89 84.5199 406.725 82.0646C409.56 79.5839 411.851 76.7236 413.598 73.4836C415.369 70.2436 416.521 66.7758 417.053 63.0802L402.852 63.0043C402.422 65.2824 401.637 67.3074 400.498 69.0793C399.385 70.8511 398.005 72.3446 396.36 73.5596C394.74 74.7746 392.905 75.6985 390.854 76.3313C388.829 76.9388 386.652 77.2425 384.324 77.2425C380.122 77.2425 376.388 76.2174 373.123 74.1671C369.883 72.0914 367.326 69.0286 365.453 64.9786C363.605 60.9033 362.682 55.8915 362.682 49.943C362.682 44.0959 363.605 39.1473 365.453 35.0973C367.301 31.022 369.858 27.9339 373.123 25.8329C376.388 23.7067 380.134 22.6436 384.362 22.6436C386.741 22.6436 388.956 22.9726 391.006 23.6308C393.082 24.2636 394.93 25.2128 396.55 26.4784C398.17 27.744 399.524 29.2881 400.612 31.1106C401.701 32.9078 402.447 34.9707 402.852 37.2995ZM504.485 88.823V11.0631H490.74V88.823H504.485ZM529.06 86.1272C533.237 88.6838 538.236 89.962 544.058 89.962C548.943 89.962 553.196 89.0761 556.815 87.3042C560.435 85.507 563.295 83.0264 565.396 79.8624C567.497 76.673 568.712 73.0153 569.041 68.8894H555.904C555.499 70.9903 554.752 72.7749 553.664 74.243C552.576 75.7111 551.221 76.8375 549.601 77.6222C548.007 78.3816 546.197 78.7613 544.172 78.7613C541.311 78.7613 538.818 78.0019 536.692 76.4831C534.591 74.9391 532.958 72.7496 531.794 69.9146C530.63 67.0543 530.047 63.6371 530.047 59.663C530.047 55.7396 530.63 52.373 531.794 49.5634C532.984 46.7537 534.642 44.6021 536.768 43.1087C538.894 41.5899 541.362 40.8306 544.172 40.8306C547.488 40.8306 550.133 41.7798 552.107 43.6782C554.107 45.5513 555.373 47.8927 555.904 50.7024H569.041C568.738 46.5006 567.497 42.8302 565.32 39.6915C563.143 36.5274 560.22 34.0848 556.55 32.3635C552.905 30.617 548.715 29.7437 543.982 29.7437C538.287 29.7437 533.351 31.022 529.174 33.5785C525.023 36.1098 521.808 39.6535 519.53 44.2098C517.252 48.7407 516.113 53.9677 516.113 59.8908C516.113 65.7886 517.227 71.003 519.454 75.5339C521.707 80.0396 524.909 83.5706 529.06 86.1272ZM446.127 90C442.432 90 439.103 89.3419 436.141 88.0256C433.205 86.6841 430.876 84.7097 429.155 82.1025C427.459 79.4953 426.611 76.2807 426.611 72.4585C426.611 69.1679 427.219 66.4468 428.434 64.2952C429.649 62.1436 431.307 60.4224 433.408 59.1315C435.509 57.8405 437.875 56.866 440.508 56.2079C443.166 55.5244 445.912 55.0308 448.747 54.7271C452.164 54.3727 454.936 54.0563 457.062 53.7779C459.188 53.4741 460.733 53.0185 461.694 52.411C462.682 51.7782 463.175 50.8037 463.175 49.4874V49.2596C463.175 46.3993 462.327 44.1845 460.631 42.6151C458.935 41.0457 456.493 40.261 453.303 40.261C449.937 40.261 447.266 40.9951 445.292 42.4632C443.343 43.9313 442.027 45.6652 441.343 47.6649L428.51 45.8424C429.522 42.2987 431.193 39.3371 433.522 36.9578C435.85 34.5531 438.698 32.7559 442.065 31.5662C445.431 30.3512 449.152 29.7437 453.227 29.7437C456.037 29.7437 458.834 30.0728 461.618 30.7309C464.403 31.389 466.947 32.4774 469.25 33.9962C471.554 35.4896 473.401 37.5273 474.794 40.1092C476.211 42.691 476.92 45.9184 476.92 49.7912V88.823H463.707V80.8116H463.251C462.416 82.4316 461.239 83.9503 459.72 85.3678C458.227 86.76 456.341 87.8864 454.063 88.747C451.81 89.5823 449.165 90 446.127 90ZM449.696 79.9003C452.455 79.9003 454.847 79.3561 456.872 78.2677C458.897 77.1539 460.454 75.6858 461.543 73.8633C462.656 72.0408 463.213 70.0538 463.213 67.9022V61.0299C462.783 61.3843 462.049 61.7133 461.011 62.0171C459.998 62.3208 458.859 62.5866 457.594 62.8144C456.328 63.0422 455.075 63.2447 453.835 63.4219C452.595 63.5991 451.519 63.751 450.608 63.8775C448.557 64.156 446.722 64.6116 445.102 65.2444C443.482 65.8772 442.204 66.7632 441.267 67.9022C440.331 69.016 439.862 70.4588 439.862 72.2307C439.862 74.7619 440.786 76.673 442.634 77.9639C444.482 79.2549 446.836 79.9003 449.696 79.9003ZM298.477 54.6512V88.823H284.732V30.5031H297.869V40.4129H298.552C299.894 37.1476 302.033 34.5531 304.969 32.6293C307.931 30.7056 311.588 29.7437 315.942 29.7437C319.967 29.7437 323.473 30.6043 326.459 32.3256C329.472 34.0468 331.8 36.5401 333.446 39.8054C335.116 43.0707 335.939 47.0321 335.914 51.6896V88.823H322.169V53.8158C322.169 49.9177 321.156 46.8676 319.131 44.6654C317.132 42.4632 314.36 41.3621 310.816 41.3621C308.412 41.3621 306.273 41.8937 304.4 42.9568C302.552 43.9946 301.096 45.5007 300.033 47.4751C298.995 49.4495 298.477 51.8415 298.477 54.6512ZM230.313 86.2031C234.49 88.7091 239.426 89.962 245.121 89.962C250.816 89.962 255.752 88.7091 259.929 86.2031C264.105 83.6972 267.333 80.1914 269.611 75.6858C271.914 71.1802 273.066 65.9152 273.066 59.8908C273.066 53.8665 271.914 48.5888 269.611 44.0579C267.333 39.527 264.105 36.0085 259.929 33.5026C255.752 30.9967 250.816 29.7437 245.121 29.7437C239.426 29.7437 234.49 30.9967 230.313 33.5026C226.137 36.0085 222.897 39.527 220.593 44.0579C218.315 48.5888 217.176 53.8665 217.176 59.8908C217.176 65.9152 218.315 71.1802 220.593 75.6858C222.897 80.1914 226.137 83.6972 230.313 86.2031ZM252.943 76.4072C250.867 78.1031 248.285 78.9511 245.197 78.9511C242.033 78.9511 239.4 78.1031 237.299 76.4072C235.224 74.686 233.667 72.3825 232.629 69.4969C231.617 66.6113 231.111 63.3966 231.111 59.8529C231.111 56.2838 231.617 53.0565 232.629 50.1709C233.667 47.2599 235.224 44.9438 237.299 43.2226C239.4 41.5013 242.033 40.6407 245.197 40.6407C248.285 40.6407 250.867 41.5013 252.943 43.2226C255.018 44.9438 256.562 47.2599 257.575 50.1709C258.613 53.0565 259.131 56.2838 259.131 59.8529C259.131 63.3966 258.613 66.6113 257.575 69.4969C256.562 72.3825 255.018 74.686 252.943 76.4072ZM179.691 88.823V30.5031H193.018V40.2231H193.626C194.689 36.8565 196.512 34.262 199.093 32.4395C201.701 30.5917 204.675 29.6678 208.016 29.6678C208.775 29.6678 209.623 29.7057 210.56 29.7817C211.522 29.8323 212.319 29.9209 212.952 30.0475V42.691C212.37 42.4885 211.446 42.3113 210.18 42.1595C208.94 41.9823 207.738 41.8937 206.573 41.8937C204.067 41.8937 201.815 42.4379 199.815 43.5263C197.84 44.5895 196.284 46.0702 195.145 47.9687C194.006 49.8671 193.436 52.0566 193.436 54.5373V88.823H179.691ZM165.045 88.823V11.0631H150.959V88.823H165.045Z", fill: "#272525" })), P = ml({
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
}), _s = "#333", Rs = "#FFF", Ts = "#EEEEEE", ks = "#333", Ir = "#E0E0E0", bf = "#E0E0E0", To = "#E0E0E0", yf = "#2E414D", Ke = "#F2994A", vf = "#FBE0C9", wf = "#F2994A1A", Ie = 16384, Le = 1048576, Jn = 1, Qn = 1, Dr = 4;
function Cf(e) {
  if (e.length !== 1)
    return !1;
  const t = e.codePointAt(0) ?? 0;
  return t > 0 && t < 255;
}
const Ef = (e) => ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(
  e
), Sf = (e, t) => e.rowStart === e.rowEnd && e.columnEnd === e.columnStart ? `${Ve(t.column)}${t.row}` : e.rowStart === 1 && e.rowEnd === Le ? `${Ve(e.columnStart)}:${Ve(
  e.columnEnd
)}` : e.columnStart === 1 && e.columnEnd === Ie ? `${e.rowStart}:${e.rowEnd}` : `${Ve(e.columnStart)}${e.rowStart}:${Ve(e.columnEnd)}${e.rowEnd}`;
function ft(e, t, n) {
  const { sheet: o, rowStart: r, rowEnd: i, columnStart: s, columnEnd: a } = e, c = o === t ? "" : `${Fa(n)}!`;
  return r === i && s === a ? `${c}${Ve(s)}${r}` : `${c}${Ve(
    s
  )}${r}:${Ve(a)}${i}`;
}
function yl(e, t) {
  const [n, o, r, i] = e.range, s = Fa(t[e.sheet]);
  return n === r && o === i ? `${s}!$${Ve(o)}$${n}` : `${s}!$${Ve(
    o
  )}$${n}:$${Ve(i)}$${r}`;
}
function Fr(e, t, n) {
  return Array.from(e).slice(t, n).join("");
}
function vl(e) {
  return typeof e == "object" && "Reference" in e;
}
function wl(e) {
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
    const i = t.slice(1), s = Na(i), a = s.length, c = {}, f = e.getSelectedSheet(), h = e.getWorksheetsProperties().map((m) => m.name);
    for (let m = 0; m < a; m += 1) {
      const { token: p, start: x, end: g } = s[m];
      if (vl(p)) {
        const { sheet: d, row: v, column: S } = p.Reference, T = d ? h.indexOf(d) : f, C = `${T}-${v}-${S}`;
        let w = c[C];
        w || (w = ei(r), c[C] = w, r += 1), n.push(
          /* @__PURE__ */ l.jsx("span", { style: { color: w }, children: Fr(i, x, g) }, m)
        ), o.push({
          sheet: T,
          rowStart: v,
          columnStart: S,
          rowEnd: v,
          columnEnd: S,
          color: w
        });
      } else if (wl(p)) {
        let {
          sheet: d,
          left: { row: v, column: S },
          right: { row: T, column: C }
        } = p.Range;
        const w = d ? h.indexOf(d) : f, E = `${w}-${v}-${S}:${T}-${C}`;
        let _ = c[E];
        _ || (_ = ei(r), c[E] = _, r += 1), v > T && ([v, T] = [T, v]), S > C && ([S, C] = [C, S]), n.push(
          /* @__PURE__ */ l.jsx("span", { style: { color: _ }, children: Fr(i, x, g) }, m)
        ), r += 1, o.push({
          sheet: w,
          rowStart: v,
          columnStart: S,
          rowEnd: T,
          columnEnd: C,
          color: _
        });
      } else
        n.push(/* @__PURE__ */ l.jsx("span", { children: Fr(i, x, g) }, m));
    }
    n = [/* @__PURE__ */ l.jsx("span", { children: "=" }, "equals")].concat(n);
  } else
    n = [/* @__PURE__ */ l.jsx("span", { children: t }, "single")];
  return t.endsWith(`
`) && n.push(/* @__PURE__ */ l.jsx("span", { children: `
` }, "trailing-newline")), { html: n, activeRanges: o };
}
function ti(e, t) {
  const n = e.getWorksheetsProperties(), o = Na(t), { token: r } = o[0];
  if (wl(r)) {
    const {
      sheet: i,
      left: { row: s, column: a },
      right: { row: c, column: f }
    } = r.Range;
    if (i !== null) {
      const h = n.findIndex((m) => m.name === i);
      if (h >= 0)
        return [h, s, a, c, f];
    }
  } else if (vl(r)) {
    const { sheet: i, row: s, column: a } = r.Reference;
    if (i !== null) {
      const c = n.findIndex((f) => f.name === i);
      if (c >= 0)
        return [c, s, a, s, a];
    }
  }
  return null;
}
const _f = (e) => {
  const { model: t, onEditEnd: n, onTextUpdated: o, workbookState: r, textareaRef: i } = e;
  return { onKeyDown: De(
    (a) => {
      const { key: c, shiftKey: f, altKey: h } = a, m = i.current, p = r.getEditingCell();
      if (!(!m || !p))
        switch (c) {
          case "Enter": {
            if (h) {
              const g = m.selectionStart, d = m.selectionEnd, v = m.value, S = `${v.slice(0, g)}
${v.slice(d)}`;
              p.text = S, r.setEditingCell(p), setTimeout(() => {
                m.setSelectionRange(g + 1, g + 1);
              }, 0), a.stopPropagation(), a.preventDefault(), o();
              return;
            }
            a.stopPropagation(), a.preventDefault(), t.setUserInput(
              p.sheet,
              p.row,
              p.column,
              p.text + (p.referencedRange?.str || "")
            );
            const x = f ? -1 : 1;
            t.setSelectedSheet(p.sheet), t.setSelectedCell(p.row + x, p.column), r.clearEditingCell(), n();
            return;
          }
          case "Tab": {
            r.clearEditingCell(), t.setUserInput(
              p.sheet,
              p.row,
              p.column,
              p.text + (p.referencedRange?.str || "")
            );
            const x = f ? -1 : 1;
            t.setSelectedSheet(p.sheet), t.setSelectedCell(p.row, p.column + x), i.current && (i.current.value = ""), a.stopPropagation(), a.preventDefault(), n();
            return;
          }
          case "Escape": {
            const x = r.getEditingCell();
            x && t.setSelectedSheet(x.sheet), r.clearEditingCell(), n();
            return;
          }
          // TODO: Arrow keys navigate in Excel
          case "ArrowRight": {
            if (p.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), p.referencedRange) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = p.referencedRange.range;
              if (f)
                g.columnEnd += 1;
              else {
                const d = g.columnStart + 1, v = g.rowStart;
                g.columnStart = d, g.columnEnd = d, g.rowEnd = v;
              }
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            if (pn(p.text, p.cursorStart)) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = {
                sheet: p.sheet,
                rowStart: p.row,
                rowEnd: p.row,
                columnStart: p.column + 1,
                columnEnd: p.column + 1
              };
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(p.sheet, p.row, p.column, p.text), t.setSelectedSheet(p.sheet), f || t.setSelectedCell(p.row, p.column + 1), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowLeft": {
            if (p.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), p.referencedRange) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = p.referencedRange.range;
              if (f)
                g.columnEnd -= 1;
              else {
                const d = g.columnStart - 1, v = g.rowStart;
                g.columnStart = d, g.columnEnd = d, g.rowEnd = v;
              }
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            if (pn(p.text, p.cursorStart)) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = {
                sheet: p.sheet,
                rowStart: p.row,
                rowEnd: p.row,
                columnStart: p.column - 1,
                columnEnd: p.column - 1
              };
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(p.sheet, p.row, p.column, p.text), t.setSelectedSheet(p.sheet), f || t.setSelectedCell(p.row, p.column - 1), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowUp": {
            if (p.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), p.referencedRange) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = p.referencedRange.range;
              if (f)
                g.rowEnd > g.rowStart ? g.rowEnd -= 1 : g.rowStart -= 1;
              else {
                const d = g.columnStart, v = g.rowStart - 1;
                g.columnStart = d, g.columnEnd = d, g.rowStart = v, g.rowEnd = v;
              }
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            if (pn(p.text, p.cursorStart)) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = {
                sheet: p.sheet,
                rowStart: p.row - 1,
                rowEnd: p.row - 1,
                columnStart: p.column,
                columnEnd: p.column
              };
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(p.sheet, p.row, p.column, p.text), t.setSelectedSheet(p.sheet), f || t.setSelectedCell(p.row - 1, p.column), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowDown": {
            if (p.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), p.referencedRange) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = p.referencedRange.range;
              if (f)
                g.rowEnd += 1;
              else {
                const d = g.columnStart, v = g.rowStart + 1;
                g.columnStart = d, g.columnEnd = d, g.rowStart = v, g.rowEnd = v;
              }
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            if (pn(p.text, p.cursorStart)) {
              const x = t.getWorksheetsProperties().map((d) => d.name), g = {
                sheet: p.sheet,
                rowStart: p.row + 1,
                rowEnd: p.row + 1,
                columnStart: p.column,
                columnEnd: p.column
              };
              p.referencedRange = {
                range: g,
                str: ft(g, p.sheet, x[g.sheet])
              }, r.setEditingCell(p), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(p.sheet, p.row, p.column, p.text), t.setSelectedSheet(p.sheet), f || t.setSelectedCell(p.row + 1, p.column), i.current && (i.current.value = ""), n();
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
            p.mode = "edit", r.setEditingCell(p);
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
}, Rf = "rgb(242, 153, 74)", Cl = (e) => {
  const { model: t, onEditEnd: n, onTextUpdated: o, originalText: r, workbookState: i, type: s } = e, [a, c] = oe(r), f = ie(null), h = ie(null), m = ie(null);
  Be(() => {
    c(r), m.current && (m.current.value = r);
  }, [r]);
  const { onKeyDown: p } = _f({
    model: t,
    onEditEnd: n,
    onTextUpdated: o,
    workbookState: i,
    textareaRef: m
  });
  Be(() => {
    const C = i.getEditingCell();
    if (!C)
      return;
    const { editorWidth: w, editorHeight: E } = C;
    if (f.current) {
      const _ = f.current.scrollWidth;
      _ > w - 5 && (C.editorWidth = _ + 10);
      const I = f.current.scrollHeight;
      I > E && (C.editorHeight = I);
    }
    s === C.focus && m.current?.focus({ preventScroll: !0 });
  });
  const x = De(() => {
    const C = m.current, w = i.getEditingCell();
    if (!C || !w)
      return;
    const E = C.value;
    w.text = E, w.referencedRange = null, w.cursorStart = C.selectionStart, w.cursorEnd = C.selectionEnd;
    const _ = js(t, E);
    E === "" && s === "cell" && (w.mode = "accept"), i.setEditingCell(w), i.setActiveRanges(_.activeRanges), c(w.text), o();
  }, [i, t, o, s]), g = De(() => {
    const C = i.getEditingCell();
    s === C?.focus && (m.current && (m.current.value = ""), C && (t.setUserInput(
      C.sheet,
      C.row,
      C.column,
      i.getEditingText()
    ), i.clearEditingCell()), n());
  }, [t, i, n, s]), d = i.getEditingCell(), v = d !== null || s === "formula-bar" ? "block" : "none", S = d ? i.getEditingText() : r, T = js(t, S).html;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: v,
        background: "#FFF",
        fontFamily: "Inter",
        fontSize: "13px"
      },
      children: [
        /* @__PURE__ */ l.jsx(
          "div",
          {
            ref: h,
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
                ref: f,
                children: T
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
              caretColor: Rf,
              outline: "none",
              resize: "none",
              border: "none",
              height: "100%",
              overflow: "hidden",
              alignContent: "baseline"
            },
            defaultValue: a,
            spellCheck: "false",
            onKeyDown: p,
            onChange: x,
            onBlur: g,
            onPointerDown: (C) => {
              const w = i.getEditingCell();
              w && (w.mode = "edit", w.focus = s, i.setEditingCell(w), C.stopPropagation());
            },
            onScroll: () => {
              h.current && m.current && (h.current.style.left = `-${m.current.scrollLeft}px`, h.current.style.top = `-${m.current.scrollTop}px`);
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
}, Tf = (e) => {
  const { t } = He(), [n, o] = oe(!1), r = ie(null), i = De(() => {
    o(!0), e.onMenuOpenChange(!0);
  }, [e.onMenuOpenChange]), s = De(() => {
    o(!1), e.onMenuOpenChange(!1);
  }, [e.onMenuOpenChange]), a = e.model.getDefinedNameList();
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(jf, { onClick: i, ref: r, children: e.children }),
    /* @__PURE__ */ l.jsxs(
      kf,
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
            a.map((c) => /* @__PURE__ */ l.jsxs(
              Ps,
              {
                disableRipple: !0,
                onClick: () => {
                  const f = c.formula, h = ti(e.model, f);
                  if (h) {
                    const [
                      m,
                      p,
                      x,
                      g,
                      d
                    ] = h;
                    e.model.setSelectedSheet(m), e.model.setSelectedCell(p, x), e.model.setSelectedRange(
                      p,
                      x,
                      g,
                      d
                    );
                  }
                  e.onUpdate(), s();
                },
                children: [
                  /* @__PURE__ */ l.jsx(Wa, {}),
                  /* @__PURE__ */ l.jsx(Os, { children: c.name }),
                  /* @__PURE__ */ l.jsx(Pf, { children: c.formula })
                ]
              },
              `${c.name}-${c.scope}`
            )),
            /* @__PURE__ */ l.jsx($f, {})
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
}, kf = X(so)`
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
`, jf = X("div")`
  display: flex;
`, $f = X("div")`
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
`, Pf = X("div")`
  color: ${P.palette.grey[400]};
  margin-left: 12px;
`;
function Of(e) {
  const {
    cellAddress: t,
    formulaValue: n,
    model: o,
    onChange: r,
    onTextUpdated: i,
    workbookState: s
  } = e, [a, c] = oe(!1), f = (h) => {
    c(h);
  };
  return /* @__PURE__ */ l.jsxs(Ff, { children: [
    /* @__PURE__ */ l.jsx(Nf, { $active: a, children: /* @__PURE__ */ l.jsxs(
      Tf,
      {
        onMenuOpenChange: f,
        openDrawer: e.openDrawer,
        canEdit: e.canEdit,
        model: o,
        onUpdate: r,
        children: [
          /* @__PURE__ */ l.jsx(Bf, { children: t }),
          /* @__PURE__ */ l.jsx(zf, { children: /* @__PURE__ */ l.jsx(Ho, { size: 16 }) })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(If, {}),
    /* @__PURE__ */ l.jsxs(Df, { children: [
      /* @__PURE__ */ l.jsx(Af, { children: /* @__PURE__ */ l.jsx(gf, {}) }),
      /* @__PURE__ */ l.jsx(
        Lf,
        {
          onClick: (h) => {
            const [m, p, x] = o.getSelectedCell(), g = o.getColumnWidth(m, x) * Qn, d = o.getRowHeight(m, p) * Jn;
            s.setEditingCell({
              sheet: m,
              row: p,
              column: x,
              text: n,
              referencedRange: null,
              cursorStart: n.length,
              cursorEnd: n.length,
              focus: "formula-bar",
              activeRanges: [],
              mode: "edit",
              editorWidth: g,
              editorHeight: d
            }), h.stopPropagation(), h.preventDefault();
          },
          children: /* @__PURE__ */ l.jsx(
            Cl,
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
const Mf = X("div")`
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
`, Af = X(Mf)`
  margin-right: 8px;
`, If = X("div")`
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
`, Ff = X("div")`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(e) => e.theme.palette.background.default};
  height: ${xl}px;
  border-top: 1px solid ${P.palette.grey[300]};
`, Nf = X("div")`
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
`, Bf = X("div")`
  width: 100%;
  box-sizing: border-box;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 8px;
  background-color: transparent;
`, zf = X("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 2px;
  background-color: transparent;
`, Lf = X("div")`
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
const Hf = ({
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
    let E = 1, _ = `${w}${E}`;
    const R = s.getWorksheetsProperties().findIndex((H) => H.name === t), F = R >= 0 ? R : void 0, V = s.getDefinedNameList();
    for (; V.some(
      (H) => H.name === _ && H.scope === F
    ); )
      E++, _ = `${w}${E}`;
    return _;
  }, [c, f] = oe(a()), [h, m] = oe(t), [p, x] = oe(n), [g, d] = oe(""), [v, S] = oe(""), T = (w) => h === w;
  Be(() => {
    const E = s.getWorksheetsProperties().findIndex((I) => I.name === h), _ = E >= 0 ? E : null;
    try {
      s.isValidDefinedName(c, _, p);
    } catch (I) {
      const R = I.message;
      if (i && R.includes("already exists")) {
        d(""), S("");
        return;
      }
      const { nameError: F, formulaError: V } = ni(R);
      d(F), S(V);
      return;
    }
    d(""), S("");
  }, [c, h, p, s, i]);
  const C = g !== "" || v !== "";
  return /* @__PURE__ */ l.jsxs(Wf, { children: [
    /* @__PURE__ */ l.jsxs(Uf, { children: [
      /* @__PURE__ */ l.jsxs(Gf, { children: [
        /* @__PURE__ */ l.jsx(qf, { children: /* @__PURE__ */ l.jsx(Wa, {}) }),
        /* @__PURE__ */ l.jsx(Yf, { children: c || we("name_manager_dialog.new_named_range") })
      ] }),
      /* @__PURE__ */ l.jsxs(Kf, { children: [
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsx(zr, { htmlFor: "name", children: we("name_manager_dialog.range_name") }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", error: !!g, children: [
            /* @__PURE__ */ l.jsx(
              Ds,
              {
                autoFocus: !0,
                id: "name",
                variant: "outlined",
                size: "small",
                margin: "none",
                placeholder: we("name_manager_dialog.enter_range_name"),
                fullWidth: !0,
                error: !!g,
                value: c,
                onChange: (w) => f(w.target.value),
                onKeyDown: (w) => w.stopPropagation(),
                onClick: (w) => w.stopPropagation()
              }
            ),
            g && /* @__PURE__ */ l.jsx(Ns, { children: g })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsx(zr, { htmlFor: "scope", children: we("name_manager_dialog.scope_label") }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", children: [
            /* @__PURE__ */ l.jsxs(
              Xf,
              {
                id: "scope",
                value: h,
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
                    component: Zf
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
                    T("[Global]") ? /* @__PURE__ */ l.jsx(As, {}) : /* @__PURE__ */ l.jsx(Is, {}),
                    /* @__PURE__ */ l.jsx(Nr, { $selected: T("[Global]"), children: we("name_manager_dialog.workbook") }),
                    /* @__PURE__ */ l.jsx(Ms, { children: ` ${we(
                      "name_manager_dialog.global"
                    )}` })
                  ] }),
                  s.getWorksheetsProperties().map((w) => /* @__PURE__ */ l.jsxs(Fs, { value: w.name, children: [
                    T(w.name) ? /* @__PURE__ */ l.jsx(As, {}) : /* @__PURE__ */ l.jsx(Is, {}),
                    /* @__PURE__ */ l.jsx(Nr, { $selected: T(w.name), children: w.name })
                  ] }, w.name))
                ]
              }
            ),
            /* @__PURE__ */ l.jsx(El, { children: we("name_manager_dialog.scope_helper") })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsxs(Vf, { children: [
            /* @__PURE__ */ l.jsx(zr, { htmlFor: "formula", children: we("name_manager_dialog.refers_to") }),
            /* @__PURE__ */ l.jsx(
              Fc,
              {
                size: 16,
                onClick: () => {
                  const w = s.getWorksheetsProperties().map((I) => I.name), E = s.getSelectedView(), _ = yl(
                    E,
                    w
                  );
                  x(_);
                }
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", error: !!v, children: [
            /* @__PURE__ */ l.jsx(
              Ds,
              {
                id: "formula",
                variant: "outlined",
                size: "small",
                margin: "none",
                placeholder: we("name_manager_dialog.enter_formula"),
                fullWidth: !0,
                multiline: !0,
                rows: 3,
                error: !!v,
                value: p,
                onChange: (w) => {
                  x(w.target.value), S("");
                },
                onKeyDown: (w) => w.stopPropagation(),
                onClick: (w) => w.stopPropagation()
              }
            ),
            v && /* @__PURE__ */ l.jsx(Ns, { children: v })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l.jsxs(Sl, { children: [
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
            const w = o(c.trim(), h, p);
            w.nameError && d(w.nameError), w.formulaError && S(w.formulaError);
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
}), Wf = X("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column"
}), Uf = X("div")({
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
`, As = () => /* @__PURE__ */ l.jsx(Bt, { style: { width: "16px", height: "16px", marginRight: "8px" } }), Is = X("div")`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`, Gf = X(ao)`
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
`, Yf = X("span")`
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, qf = X(ao)`
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
`, Kf = X(ao)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: auto;
  padding: 16px 12px;

  @media (max-width: 600px) {
    padding: 12px;
  }
`, Ds = X(xi)(() => ({
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
})), Xf = X(La)(() => ({
  fontFamily: "Inter",
  fontSize: "12px",
  "& .MuiSelect-select": {
    padding: "8px"
  }
})), Zf = X(Pc)(() => ({
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
`, El = X(Ha)(() => ({
  fontSize: "12px",
  fontFamily: "Inter",
  color: P.palette.grey[500],
  margin: 0,
  marginTop: "6px",
  padding: 0,
  lineHeight: 1.4
})), Ns = X(El)(() => ({
  color: P.palette.error.main
})), Bs = (e) => e.trim().replace(/['"]/g, ""), Jf = ({
  onClose: e,
  getSelectedArea: t,
  model: n,
  onUpdate: o
}) => {
  const [r, i] = oe(null), [s, a] = oe(!1), c = (d) => {
    i(d), a(!1);
  }, f = () => {
    a(!0), i(null);
  }, h = () => {
    i(null), a(!1);
  }, m = (d, v, S) => {
    const T = n.getWorksheetsProperties();
    if (s) {
      const C = T.findIndex((E) => E.name === v), w = C >= 0 ? C : null;
      try {
        return n.newDefinedName(d, w, S), a(!1), o(), {
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
      const C = T.findIndex((E) => E.name === v), w = C >= 0 ? C : null;
      try {
        return n.updateDefinedName(
          r.name,
          r.scope ?? null,
          d,
          w,
          S
        ), i(null), o(), { formulaError: "", nameError: "" };
      } catch (E) {
        return E instanceof Error ? ni(E.message) : { formulaError: "", nameError: `${E}` };
      }
    }
  };
  if (r || s) {
    let d = "", v = "[Global]", S = "";
    if (r) {
      d = r.name;
      const C = n.getWorksheetsProperties();
      v = r.scope != null ? C[r.scope]?.name || "[unknown]" : "[Global]", S = r.formula;
    } else s && (S = t());
    const T = s ? we("name_manager_dialog.add_new_range") : we("name_manager_dialog.edit_range");
    return /* @__PURE__ */ l.jsxs(zs, { children: [
      /* @__PURE__ */ l.jsxs(ch, { children: [
        /* @__PURE__ */ l.jsx(hn, { title: we("name_manager_dialog.back_to_list"), children: /* @__PURE__ */ l.jsx(
          Lr,
          {
            onClick: h,
            onKeyDown: (C) => {
              (C.key === "Enter" || C.key === " ") && h();
            },
            "aria-label": we("name_manager_dialog.back_to_list"),
            tabIndex: 0,
            children: /* @__PURE__ */ l.jsx(Ua, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(uh, { children: T }),
        /* @__PURE__ */ l.jsx(
          Lr,
          {
            onClick: e,
            onKeyDown: (C) => {
              (C.key === "Enter" || C.key === " ") && e();
            },
            "aria-label": we("right_drawer.close"),
            tabIndex: 0,
            children: /* @__PURE__ */ l.jsx(Vo, {})
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Ls, { children: /* @__PURE__ */ l.jsx(
        Hf,
        {
          name: d,
          scope: v,
          formula: S,
          onSave: m,
          onCancel: h,
          editingDefinedName: r,
          model: n
        }
      ) })
    ] });
  }
  const p = t(), x = n.getDefinedNameList(), g = (d) => {
    const v = ti(n, d);
    if (v) {
      const [S, T, C, w, E] = v;
      n.setSelectedSheet(S), n.setSelectedCell(T, C), n.setSelectedRange(T, C, w, E);
    }
    o();
  };
  return /* @__PURE__ */ l.jsxs(zs, { children: [
    /* @__PURE__ */ l.jsxs(ah, { children: [
      /* @__PURE__ */ l.jsx(lh, { children: we("name_manager_dialog.title") }),
      /* @__PURE__ */ l.jsx(
        Lr,
        {
          onClick: e,
          onKeyDown: (d) => {
            (d.key === "Enter" || d.key === " ") && e();
          },
          "aria-label": we("right_drawer.close"),
          tabIndex: 0,
          children: /* @__PURE__ */ l.jsx(Vo, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(Ls, { children: x.length === 0 ? /* @__PURE__ */ l.jsxs(dh, { children: [
      /* @__PURE__ */ l.jsx(ph, { children: /* @__PURE__ */ l.jsx(Nc, {}) }),
      we("name_manager_dialog.empty_message1"),
      /* @__PURE__ */ l.jsx("br", {}),
      we("name_manager_dialog.empty_message2")
    ] }) : /* @__PURE__ */ l.jsx(Qf, { children: x.map((d) => {
      const v = n.getWorksheetsProperties(), S = d.scope != null ? v[d.scope]?.name || "[Unknown]" : "[Global]", T = p !== null && Bs(d.formula) === Bs(p);
      return /* @__PURE__ */ l.jsxs(
        eh,
        {
          tabIndex: 0,
          $isSelected: T,
          onClick: () => {
            const C = d.formula, w = ti(n, C);
            if (w) {
              const [
                E,
                _,
                I,
                R,
                F
              ] = w;
              n.setSelectedSheet(E), n.setSelectedCell(_, I), n.setSelectedRange(
                _,
                I,
                R,
                F
              );
            }
            o();
          },
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), g(d.formula));
          },
          children: [
            /* @__PURE__ */ l.jsxs(th, { children: [
              /* @__PURE__ */ l.jsx(rh, { children: d.name }),
              /* @__PURE__ */ l.jsx(nh, { children: S }),
              /* @__PURE__ */ l.jsx(oh, { children: d.formula })
            ] }),
            /* @__PURE__ */ l.jsxs(ih, { children: [
              /* @__PURE__ */ l.jsx(hn, { title: we("name_manager_dialog.edit"), children: /* @__PURE__ */ l.jsx(
                Hs,
                {
                  onClick: (C) => {
                    C.stopPropagation(), c(d);
                  },
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), c(d));
                  },
                  "aria-label": we("name_manager_dialog.edit"),
                  tabIndex: 0,
                  children: /* @__PURE__ */ l.jsx(Ga, { size: 16 })
                }
              ) }),
              /* @__PURE__ */ l.jsx(hn, { title: we("name_manager_dialog.delete"), children: /* @__PURE__ */ l.jsx(
                Hs,
                {
                  onClick: (C) => {
                    C.stopPropagation(), n.deleteDefinedName(
                      d.name,
                      d.scope ?? null
                    ), o();
                  },
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), n.deleteDefinedName(
                      d.name,
                      d.scope ?? null
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
        `${d.name}-${d.scope}`
      );
    }) }) }),
    /* @__PURE__ */ l.jsxs(Sl, { children: [
      /* @__PURE__ */ l.jsxs(
        sh,
        {
          href: "https://docs.ironcalc.com/web-application/name-manager.html",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ l.jsx(Bc, {}),
            we("name_manager_dialog.help")
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        oi,
        {
          variant: "contained",
          disableElevation: !0,
          startIcon: /* @__PURE__ */ l.jsx(Dt, { size: 16 }),
          onClick: f,
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
}), Qf = X("div")({
  display: "flex",
  flexDirection: "column"
}), eh = X("div")(({ $isSelected: e }) => ({
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
})), th = X("div")({
  fontSize: "12px",
  color: P.palette.common.black,
  fontFamily: P.typography.fontFamily,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2px"
}), nh = X("span")({
  fontSize: "12px",
  color: P.palette.common.black
}), oh = X("span")({
  fontSize: "12px",
  color: P.palette.grey[600]
}), rh = X("span")({
  fontSize: "12px",
  color: P.palette.common.black,
  fontWeight: 600,
  wordBreak: "break-all",
  overflowWrap: "break-word"
}), ih = X("div")({
  display: "flex",
  alignItems: "center",
  gap: "2px"
}), Hs = X("div")({
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
}), Sl = X("div")`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: ${P.palette.grey[600]};
  border-top: 1px solid ${P.palette.grey[300]};
  gap: 8px;
`, sh = X("a")`
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
`, ah = X("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  borderBottom: `1px solid ${P.palette.grey[300]}`
}), lh = X("div")({
  width: "100%",
  fontSize: "12px"
}), ch = X("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8px",
  gap: "8px",
  borderBottom: `1px solid ${P.palette.grey[300]}`
}), uh = X("div")({
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
`, dh = X("div")`
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
`, ph = X("div")`
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
`, fh = {
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
}, ri = (e) => fh[e] ?? e, hh = (e) => {
  const { t } = He(), n = Rc(), o = Tc(), [r, i] = oe(
    e.initialLocale
  ), [s, a] = oe(
    e.initialTimezone
  ), [c, f] = oe(
    e.initialLanguage
  );
  Be(() => {
    i(e.initialLocale), a(e.initialTimezone), f(e.initialLanguage);
  }, [
    e.initialLocale,
    e.initialTimezone,
    e.initialLanguage
  ]);
  const h = () => {
    e.onSave(r, s, c), e.onClose();
  };
  return /* @__PURE__ */ l.jsxs(mh, { children: [
    /* @__PURE__ */ l.jsxs(gh, { children: [
      /* @__PURE__ */ l.jsx(xh, { children: t("regional_settings.title") }),
      /* @__PURE__ */ l.jsx(
        bh,
        {
          onClick: e.onClose,
          onKeyDown: (m) => {
            (m.key === "Enter" || m.key === " ") && e.onClose();
          },
          "aria-label": t("right_drawer.close"),
          tabIndex: 0,
          children: /* @__PURE__ */ l.jsx(Vo, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs(
      yh,
      {
        onClick: (m) => m.stopPropagation(),
        onMouseDown: (m) => m.stopPropagation(),
        children: [
          /* @__PURE__ */ l.jsxs(Vs, { children: [
            /* @__PURE__ */ l.jsx(Ws, { children: t("regional_settings.locale.title") }),
            /* @__PURE__ */ l.jsxs(Ys, { children: [
              /* @__PURE__ */ l.jsx(qs, { htmlFor: "locale", children: t("regional_settings.locale.locale_label") }),
              /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, children: [
                /* @__PURE__ */ l.jsx(
                  vh,
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
                /* @__PURE__ */ l.jsxs(Ch, { children: [
                  /* @__PURE__ */ l.jsxs(Hr, { children: [
                    t("regional_settings.locale.locale_example1"),
                    /* @__PURE__ */ l.jsx(Vr, { children: ko[r]?.number ?? "1,234.56" })
                  ] }),
                  /* @__PURE__ */ l.jsxs(Hr, { children: [
                    t("regional_settings.locale.locale_example2"),
                    /* @__PURE__ */ l.jsx(Vr, { children: ko[r]?.dateTime ?? "10/17/2026 09:21:06 PM" })
                  ] }),
                  /* @__PURE__ */ l.jsxs(Hr, { children: [
                    t("regional_settings.locale.locale_example3"),
                    /* @__PURE__ */ l.jsx(Vr, { children: (() => {
                      const m = ko[r]?.delimiterType ?? "comma", p = ko[r]?.delimiterChar ?? ",";
                      return `${t(
                        `regional_settings.locale.delimiter_${m}`
                      )} (${p})`;
                    })() })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ l.jsxs(Vs, { children: [
            /* @__PURE__ */ l.jsx(Ws, { children: t("regional_settings.timezone.title") }),
            /* @__PURE__ */ l.jsxs(Ys, { children: [
              /* @__PURE__ */ l.jsx(qs, { htmlFor: "timezone", children: t("regional_settings.timezone.timezone_label") }),
              /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, children: [
                /* @__PURE__ */ l.jsx(
                  Eh,
                  {
                    id: "timezone",
                    value: s,
                    onChange: (m, p) => {
                      a(p);
                    },
                    options: o,
                    renderInput: (m) => /* @__PURE__ */ l.jsx(xi, { ...m }),
                    renderOption: (m, p) => /* @__PURE__ */ kc(Gs, { ...m, key: p }, p),
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
                /* @__PURE__ */ l.jsx(wh, { children: t("regional_settings.timezone.timezone_helper") })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(Sh, { children: /* @__PURE__ */ l.jsx(
      _h,
      {
        variant: "contained",
        disableElevation: !0,
        startIcon: /* @__PURE__ */ l.jsx(Bt, { size: 16 }),
        onClick: h,
        children: t("num_fmt.save")
      }
    ) })
  ] });
}, mh = te("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column"
}), gh = te("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  borderBottom: `1px solid ${P.palette.grey[300]}`
}), xh = te("div")({
  width: "100%",
  fontSize: "12px"
}), bh = te("div")`
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
`, yh = te("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  fontSize: "12px",
  overflow: "auto"
}), Vs = te("div")`
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
`, vh = te(La)`
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
`, wh = te(Ha)(() => ({
  fontSize: "12px",
  fontFamily: "Inter",
  color: P.palette.grey[500],
  margin: 0,
  marginTop: "6px",
  padding: 0,
  lineHeight: 1.4
})), Ch = te("div")`
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
`, Hr = te("div")`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  justify-content: space-between;
  color: ${P.palette.grey[700]};
`, Vr = te("span")`
  font-size: 12px;
  font-family: Inter;
  font-weight: normal;
  color: ${P.palette.grey[500]};
`, Eh = te((e) => /* @__PURE__ */ l.jsx(Oc, { ...e }))`
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
`, Sh = te("div")`
  color: ${P.palette.grey[700]};
  display: flex;
  align-items: center;
  border-top: 1px solid ${P.palette.grey[300]};
  font-family: Inter;
  justify-content: flex-end;
  padding: 8px;
  gap: 8px;
`, _h = te(lo)`
  text-transform: none;
  min-width: fit-content;
  font-size: 12px;
`, Rh = 360, Th = 300, kh = 500, jh = ({
  isOpen: e,
  onClose: t,
  width: n,
  onWidthChange: o,
  getSelectedArea: r,
  model: i,
  onUpdate: s,
  drawerType: a,
  initialLocale: c,
  initialTimezone: f,
  initialLanguage: h,
  onSettingsSave: m
}) => {
  const { t: p } = He(), [x, g] = oe(n), [d, v] = oe(!1), S = ie(null), T = De((w) => {
    w.preventDefault(), v(!0);
  }, []);
  if (Be(() => {
    if (!d)
      return;
    document.body.style.userSelect = "none", document.body.style.cursor = "col-resize";
    const w = (_) => {
      const I = window.innerWidth - _.clientX, R = Math.max(
        Th,
        Math.min(kh, I)
      );
      g(R), o(R);
    }, E = () => {
      v(!1), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
    return document.addEventListener("mousemove", w), document.addEventListener("mouseup", E), () => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", E), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
  }, [d, o]), !e)
    return null;
  const C = () => a === "regionalSettings" ? /* @__PURE__ */ l.jsx(
    hh,
    {
      onClose: t,
      initialLocale: c,
      initialTimezone: f,
      initialLanguage: h,
      onSave: m
    }
  ) : /* @__PURE__ */ l.jsx(
    Jf,
    {
      onClose: t,
      model: i,
      onUpdate: s,
      getSelectedArea: r
    }
  );
  return /* @__PURE__ */ l.jsxs($h, { $drawerWidth: x, children: [
    /* @__PURE__ */ l.jsx(
      Mh,
      {
        ref: S,
        onMouseDown: T,
        $isResizing: d,
        "aria-label": p("right_drawer.resize_drawer")
      }
    ),
    /* @__PURE__ */ l.jsx(Ph, {}),
    /* @__PURE__ */ l.jsx(Oh, { children: C() })
  ] });
}, $h = ne("div")(
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
), Ph = ne("div")({
  height: "1px",
  width: "100%",
  backgroundColor: P.palette.grey[300],
  margin: "0"
}), Oh = ne("div")({
  flex: 1,
  height: "100%"
}), Mh = ne("div")(
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
function _l(e, t) {
  const n = k.useRef(Ks);
  return n.current === Ks && (n.current = e(t)), n;
}
const Ah = [];
function Ih(e) {
  k.useEffect(e, Ah);
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
  const e = _l(br.create).current;
  return Ih(e.disposeEffect), e;
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
function Rl(e, t, n, o, r) {
  const i = e[t], s = r || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const c = i.type;
  return typeof c == "function" && !Dh(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const En = Cn(u.element, Rl);
En.isRequired = Cn(u.element.isRequired, Rl);
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
const Sn = bp;
process.env.NODE_ENV !== "production" && (u.node, u.object.isRequired);
function ut(e) {
  return hp(e);
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
function Tl(e, t) {
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
function kl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, si(e, t);
}
const Xs = {
  disabled: !1
};
var Fh = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.shape({
  enter: u.number,
  exit: u.number,
  appear: u.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && u.oneOfType([u.string, u.shape({
  enter: u.string,
  exit: u.string,
  active: u.string
}), u.shape({
  enter: u.string,
  enterDone: u.string,
  enterActive: u.string,
  exit: u.string,
  exitDone: u.string,
  exitActive: u.string
})]);
const Ko = Se.createContext(null);
var Nh = function(t) {
  return t.scrollTop;
}, Ln = "unmounted", Gt = "exited", Yt = "entering", dn = "entered", ai = "exiting", bt = /* @__PURE__ */ (function(e) {
  kl(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = r, a = s && !s.isMounting ? o.enter : o.appear, c;
    return i.appearStatus = null, o.in ? a ? (c = Gt, i.appearStatus = Yt) : c = dn : o.unmountOnExit || o.mountOnEnter ? c = Ln : c = Gt, i.state = {
      status: c
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
          s && Nh(s);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Gt && this.setState({
      status: Ln
    });
  }, n.performEnter = function(r) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : r, c = this.props.nodeRef ? [a] : [vo.findDOMNode(this), a], f = c[0], h = c[1], m = this.getTimeouts(), p = a ? m.appear : m.enter;
    if (!r && !s || Xs.disabled) {
      this.safeSetState({
        status: dn
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, h), this.safeSetState({
      status: Yt
    }, function() {
      i.props.onEntering(f, h), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: dn
        }, function() {
          i.props.onEntered(f, h);
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
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = c[0], h = c[1];
      this.props.addEndListener(f, h);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, n.render = function() {
    var r = this.state.status;
    if (r === Ln)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Tl(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
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
  nodeRef: u.shape({
    current: typeof Element > "u" ? u.any : function(e, t, n, o, r, i) {
      var s = e[t];
      return u.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, o, r, i);
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
  children: u.oneOfType([u.func.isRequired, u.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: u.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: u.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: u.bool,
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
  appear: u.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: u.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: u.bool,
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
    var n = Fh;
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
  addEndListener: u.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: u.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: u.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: u.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: u.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: u.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: u.func
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
function Bh(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ki(e, t) {
  var n = function(i) {
    return t && Do(i) ? t(i) : i;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && jc.map(e, function(r) {
    return r;
  }).forEach(function(r) {
    o[r.key] = n(r);
  }), o;
}
function zh(e, t) {
  e = e || {}, t = t || {};
  function n(h) {
    return h in t ? t[h] : e[h];
  }
  var o = /* @__PURE__ */ Object.create(null), r = [];
  for (var i in e)
    i in t ? r.length && (o[i] = r, r = []) : r.push(i);
  var s, a = {};
  for (var c in t) {
    if (o[c])
      for (s = 0; s < o[c].length; s++) {
        var f = o[c][s];
        a[o[c][s]] = n(f);
      }
    a[c] = n(c);
  }
  for (s = 0; s < r.length; s++)
    a[r[s]] = n(r[s]);
  return a;
}
function Kt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Lh(e, t) {
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
function Hh(e, t, n) {
  var o = ki(e.children), r = zh(t, o);
  return Object.keys(r).forEach(function(i) {
    var s = r[i];
    if (Do(s)) {
      var a = i in t, c = i in o, f = t[i], h = Do(f) && !f.props.in;
      c && (!a || h) ? r[i] = Fo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Kt(s, "exit", e),
        enter: Kt(s, "enter", e)
      }) : !c && a && !h ? r[i] = Fo(s, {
        in: !1
      }) : c && a && Do(f) && (r[i] = Fo(s, {
        onExited: n.bind(null, s),
        in: f.props.in,
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
}, Wh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ji = /* @__PURE__ */ (function(e) {
  kl(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = i.handleExited.bind(Bh(i));
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
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? Lh(r, a) : Hh(r, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(r, i) {
    var s = ki(this.props.children);
    r.key in s || (r.props.onExited && r.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = ii({}, a.children);
      return delete c[r.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var r = this.props, i = r.component, s = r.childFactory, a = Tl(r, ["component", "childFactory"]), c = this.state.contextValue, f = Vh(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Se.createElement(Ko.Provider, {
      value: c
    }, f) : /* @__PURE__ */ Se.createElement(Ko.Provider, {
      value: c
    }, /* @__PURE__ */ Se.createElement(i, a, f));
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
  component: u.any,
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
  children: u.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: u.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: u.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: u.bool,
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
  childFactory: u.func
} : {};
ji.defaultProps = Wh;
const jl = (e) => e.scrollTop;
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
const Uh = {
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
    onEnter: c,
    onEntered: f,
    onEntering: h,
    onExit: m,
    onExited: p,
    onExiting: x,
    style: g,
    timeout: d = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: v = bt,
    ...S
  } = t, T = fn(), C = k.useRef(), w = xr(), E = k.useRef(null), _ = Ge(E, fo(i), n), I = (O) => (B) => {
    if (O) {
      const j = E.current;
      B === void 0 ? O(j) : O(j, B);
    }
  }, R = I(h), F = I((O, B) => {
    jl(O);
    const {
      duration: j,
      delay: Q,
      easing: G
    } = Xo({
      style: g,
      timeout: d,
      easing: s
    }, {
      mode: "enter"
    });
    let A;
    d === "auto" ? (A = w.transitions.getAutoHeightDuration(O.clientHeight), C.current = A) : A = j, O.style.transition = [w.transitions.create("opacity", {
      duration: A,
      delay: Q
    }), w.transitions.create("transform", {
      duration: Wr ? A : A * 0.666,
      delay: Q,
      easing: G
    })].join(","), c && c(O, B);
  }), V = I(f), H = I(x), y = I((O) => {
    const {
      duration: B,
      delay: j,
      easing: Q
    } = Xo({
      style: g,
      timeout: d,
      easing: s
    }, {
      mode: "exit"
    });
    let G;
    d === "auto" ? (G = w.transitions.getAutoHeightDuration(O.clientHeight), C.current = G) : G = B, O.style.transition = [w.transitions.create("opacity", {
      duration: G,
      delay: j
    }), w.transitions.create("transform", {
      duration: Wr ? G : G * 0.666,
      delay: Wr ? j : j || G * 0.333,
      easing: Q
    })].join(","), O.style.opacity = 0, O.style.transform = li(0.75), m && m(O);
  }), D = I(p), M = (O) => {
    d === "auto" && T.start(C.current || 0, O), o && o(E.current, O);
  };
  return /* @__PURE__ */ l.jsx(v, {
    appear: r,
    in: a,
    nodeRef: E,
    onEnter: F,
    onEntered: V,
    onEntering: R,
    onExit: y,
    onExited: D,
    onExiting: H,
    addEndListener: M,
    timeout: d === "auto" ? null : d,
    ...S,
    children: (O, {
      ownerState: B,
      ...j
    }) => /* @__PURE__ */ k.cloneElement(i, {
      style: {
        opacity: 0,
        transform: li(0.75),
        visibility: O === "exited" && !a ? "hidden" : void 0,
        ...Uh[O],
        ...g,
        ...i.props.style
      },
      ref: _,
      ...j
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
  addEndListener: u.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: u.bool,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: u.oneOfType([u.shape({
    enter: u.string,
    exit: u.string
  }), u.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: u.bool,
  /**
   * @ignore
   */
  onEnter: u.func,
  /**
   * @ignore
   */
  onEntered: u.func,
  /**
   * @ignore
   */
  onEntering: u.func,
  /**
   * @ignore
   */
  onExit: u.func,
  /**
   * @ignore
   */
  onExited: u.func,
  /**
   * @ignore
   */
  onExiting: u.func,
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: u.oneOfType([u.oneOf(["auto"]), u.number, u.shape({
    appear: u.number,
    enter: u.number,
    exit: u.number
  })])
});
eo && (eo.muiSupportAuto = !0);
const yr = u.oneOfType([u.func, u.object]);
function Tt(e, t, n, o, r) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = r || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function rt(e) {
  return e && e.ownerDocument || document;
}
var We = "top", it = "bottom", st = "right", Ue = "left", $i = "auto", ho = [We, it, st, Ue], bn = "start", to = "end", Gh = "clippingParents", $l = "viewport", An = "popper", Yh = "reference", Zs = /* @__PURE__ */ ho.reduce(function(e, t) {
  return e.concat([t + "-" + bn, t + "-" + to]);
}, []), Pl = /* @__PURE__ */ [].concat(ho, [$i]).reduce(function(e, t) {
  return e.concat([t, t + "-" + bn, t + "-" + to]);
}, []), qh = "beforeRead", Kh = "read", Xh = "afterRead", Zh = "beforeMain", Jh = "main", Qh = "afterMain", em = "beforeWrite", tm = "write", nm = "afterWrite", om = [qh, Kh, Xh, Zh, Jh, Qh, em, tm, nm];
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
function ot(e) {
  var t = Je(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Je(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function rm(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !ot(i) || !gt(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
      var a = r[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function im(e) {
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
      var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !ot(r) || !gt(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(c) {
        r.removeAttribute(c);
      }));
    });
  };
}
const sm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: rm,
  effect: im,
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
function Ol() {
  return !/^((?!chrome|android).)*safari/i.test(ci());
}
function vn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, i = 1;
  t && ot(e) && (r = e.offsetWidth > 0 && yn(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && yn(o.height) / e.offsetHeight || 1);
  var s = en(e) ? Je(e) : window, a = s.visualViewport, c = !Ol() && n, f = (o.left + (c && a ? a.offsetLeft : 0)) / r, h = (o.top + (c && a ? a.offsetTop : 0)) / i, m = o.width / r, p = o.height / i;
  return {
    width: m,
    height: p,
    top: h,
    right: f + m,
    bottom: h + p,
    left: f,
    x: f,
    y: h
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
function Ml(e, t) {
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
function am(e) {
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
  return !ot(e) || // https://github.com/popperjs/popper-core/issues/837
  kt(e).position === "fixed" ? null : e.offsetParent;
}
function lm(e) {
  var t = /firefox/i.test(ci()), n = /Trident/i.test(ci());
  if (n && ot(e)) {
    var o = kt(e);
    if (o.position === "fixed")
      return null;
  }
  var r = vr(e);
  for (Pi(r) && (r = r.host); ot(r) && ["html", "body"].indexOf(gt(r)) < 0; ) {
    var i = kt(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function mo(e) {
  for (var t = Je(e), n = Js(e); n && am(n) && kt(n).position === "static"; )
    n = Js(n);
  return n && (gt(n) === "html" || gt(n) === "body" && kt(n).position === "static") ? t : n || lm(e) || t;
}
function Mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gn(e, t, n) {
  return Zt(e, Zo(t, n));
}
function cm(e, t, n) {
  var o = Gn(e, t, n);
  return o > n ? n : o;
}
function Al() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Il(e) {
  return Object.assign({}, Al(), e);
}
function Dl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var um = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Il(typeof t != "number" ? t : Dl(t, ho));
};
function dm(e) {
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = mt(n.placement), c = Mi(a), f = [Ue, st].indexOf(a) >= 0, h = f ? "height" : "width";
  if (!(!i || !s)) {
    var m = um(r.padding, n), p = Oi(i), x = c === "y" ? We : Ue, g = c === "y" ? it : st, d = n.rects.reference[h] + n.rects.reference[c] - s[c] - n.rects.popper[h], v = s[c] - n.rects.reference[c], S = mo(i), T = S ? c === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, C = d / 2 - v / 2, w = m[x], E = T - p[h] - m[g], _ = T / 2 - p[h] / 2 + C, I = Gn(w, _, E), R = c;
    n.modifiersData[o] = (t = {}, t[R] = I, t.centerOffset = I - _, t);
  }
}
function pm(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ml(t.elements.popper, r) && (t.elements.arrow = r));
}
const fm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: dm,
  effect: pm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function wn(e) {
  return e.split("-")[1];
}
var hm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mm(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return {
    x: yn(n * r) / r || 0,
    y: yn(o * r) / r || 0
  };
}
function Qs(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, h = e.roundOffsets, m = e.isFixed, p = s.x, x = p === void 0 ? 0 : p, g = s.y, d = g === void 0 ? 0 : g, v = typeof h == "function" ? h({
    x,
    y: d
  }) : {
    x,
    y: d
  };
  x = v.x, d = v.y;
  var S = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), C = Ue, w = We, E = window;
  if (f) {
    var _ = mo(n), I = "clientHeight", R = "clientWidth";
    if (_ === Je(n) && (_ = Lt(n), kt(_).position !== "static" && a === "absolute" && (I = "scrollHeight", R = "scrollWidth")), _ = _, r === We || (r === Ue || r === st) && i === to) {
      w = it;
      var F = m && _ === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[I]
      );
      d -= F - o.height, d *= c ? 1 : -1;
    }
    if (r === Ue || (r === We || r === it) && i === to) {
      C = st;
      var V = m && _ === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[R]
      );
      x -= V - o.width, x *= c ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: a
  }, f && hm), y = h === !0 ? mm({
    x,
    y: d
  }, Je(n)) : {
    x,
    y: d
  };
  if (x = y.x, d = y.y, c) {
    var D;
    return Object.assign({}, H, (D = {}, D[w] = T ? "0" : "", D[C] = S ? "0" : "", D.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + d + "px)" : "translate3d(" + x + "px, " + d + "px, 0)", D));
  }
  return Object.assign({}, H, (t = {}, t[w] = T ? d + "px" : "", t[C] = S ? x + "px" : "", t.transform = "", t));
}
function gm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: mt(t.placement),
    variation: wn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qs(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qs(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const xm = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: gm,
  data: {}
};
var jo = {
  passive: !0
};
function bm(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, c = Je(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(h) {
    h.addEventListener("scroll", n.update, jo);
  }), a && c.addEventListener("resize", n.update, jo), function() {
    i && f.forEach(function(h) {
      h.removeEventListener("scroll", n.update, jo);
    }), a && c.removeEventListener("resize", n.update, jo);
  };
}
const ym = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: bm,
  data: {}
};
var vm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vm[t];
  });
}
var wm = {
  start: "end",
  end: "start"
};
function ea(e) {
  return e.replace(/start|end/g, function(t) {
    return wm[t];
  });
}
function Ai(e) {
  var t = Je(e), n = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Ii(e) {
  return vn(Lt(e)).left + Ai(e).scrollLeft;
}
function Cm(e, t) {
  var n = Je(e), o = Lt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, a = 0, c = 0;
  if (r) {
    i = r.width, s = r.height;
    var f = Ol();
    (f || !f && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Ii(e),
    y: c
  };
}
function Em(e) {
  var t, n = Lt(e), o = Ai(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Zt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Zt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Ii(e), c = -o.scrollTop;
  return kt(r || n).direction === "rtl" && (a += Zt(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Di(e) {
  var t = kt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Fl(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : ot(e) && Di(e) ? e : Fl(vr(e));
}
function Yn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Fl(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Je(o), s = r ? [i].concat(i.visualViewport || [], Di(o) ? o : []) : o, a = t.concat(s);
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
function Sm(e, t) {
  var n = vn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ta(e, t, n) {
  return t === $l ? ui(Cm(e, n)) : en(t) ? Sm(t, n) : ui(Em(Lt(e)));
}
function _m(e) {
  var t = Yn(vr(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, o = n && ot(e) ? mo(e) : e;
  return en(o) ? t.filter(function(r) {
    return en(r) && Ml(r, o) && gt(r) !== "body";
  }) : [];
}
function Rm(e, t, n, o) {
  var r = t === "clippingParents" ? _m(e) : [].concat(t), i = [].concat(r, [n]), s = i[0], a = i.reduce(function(c, f) {
    var h = ta(e, f, o);
    return c.top = Zt(h.top, c.top), c.right = Zo(h.right, c.right), c.bottom = Zo(h.bottom, c.bottom), c.left = Zt(h.left, c.left), c;
  }, ta(e, s, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Nl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? mt(o) : null, i = o ? wn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (r) {
    case We:
      c = {
        x: s,
        y: t.y - n.height
      };
      break;
    case it:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case st:
      c = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Ue:
      c = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var f = r ? Mi(r) : null;
  if (f != null) {
    var h = f === "y" ? "height" : "width";
    switch (i) {
      case bn:
        c[f] = c[f] - (t[h] / 2 - n[h] / 2);
        break;
      case to:
        c[f] = c[f] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return c;
}
function no(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, c = a === void 0 ? Gh : a, f = n.rootBoundary, h = f === void 0 ? $l : f, m = n.elementContext, p = m === void 0 ? An : m, x = n.altBoundary, g = x === void 0 ? !1 : x, d = n.padding, v = d === void 0 ? 0 : d, S = Il(typeof v != "number" ? v : Dl(v, ho)), T = p === An ? Yh : An, C = e.rects.popper, w = e.elements[g ? T : p], E = Rm(en(w) ? w : w.contextElement || Lt(e.elements.popper), c, h, s), _ = vn(e.elements.reference), I = Nl({
    reference: _,
    element: C,
    placement: r
  }), R = ui(Object.assign({}, C, I)), F = p === An ? R : _, V = {
    top: E.top - F.top + S.top,
    bottom: F.bottom - E.bottom + S.bottom,
    left: E.left - F.left + S.left,
    right: F.right - E.right + S.right
  }, H = e.modifiersData.offset;
  if (p === An && H) {
    var y = H[r];
    Object.keys(V).forEach(function(D) {
      var M = [st, it].indexOf(D) >= 0 ? 1 : -1, O = [We, it].indexOf(D) >= 0 ? "y" : "x";
      V[D] += y[O] * M;
    });
  }
  return V;
}
function Tm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? Pl : c, h = wn(o), m = h ? a ? Zs : Zs.filter(function(g) {
    return wn(g) === h;
  }) : ho, p = m.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  p.length === 0 && (p = m);
  var x = p.reduce(function(g, d) {
    return g[d] = no(e, {
      placement: d,
      boundary: r,
      rootBoundary: i,
      padding: s
    })[mt(d)], g;
  }, {});
  return Object.keys(x).sort(function(g, d) {
    return x[g] - x[d];
  });
}
function km(e) {
  if (mt(e) === $i)
    return [];
  var t = Bo(e);
  return [ea(e), t, ea(t)];
}
function jm(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, c = n.fallbackPlacements, f = n.padding, h = n.boundary, m = n.rootBoundary, p = n.altBoundary, x = n.flipVariations, g = x === void 0 ? !0 : x, d = n.allowedAutoPlacements, v = t.options.placement, S = mt(v), T = S === v, C = c || (T || !g ? [Bo(v)] : km(v)), w = [v].concat(C).reduce(function(N, K) {
      return N.concat(mt(K) === $i ? Tm(t, {
        placement: K,
        boundary: h,
        rootBoundary: m,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: d
      }) : K);
    }, []), E = t.rects.reference, _ = t.rects.popper, I = /* @__PURE__ */ new Map(), R = !0, F = w[0], V = 0; V < w.length; V++) {
      var H = w[V], y = mt(H), D = wn(H) === bn, M = [We, it].indexOf(y) >= 0, O = M ? "width" : "height", B = no(t, {
        placement: H,
        boundary: h,
        rootBoundary: m,
        altBoundary: p,
        padding: f
      }), j = M ? D ? st : Ue : D ? it : We;
      E[O] > _[O] && (j = Bo(j));
      var Q = Bo(j), G = [];
      if (i && G.push(B[y] <= 0), a && G.push(B[j] <= 0, B[Q] <= 0), G.every(function(N) {
        return N;
      })) {
        F = H, R = !1;
        break;
      }
      I.set(H, G);
    }
    if (R)
      for (var A = g ? 3 : 1, b = function(K) {
        var Y = w.find(function(U) {
          var Z = I.get(U);
          if (Z)
            return Z.slice(0, K).every(function(ee) {
              return ee;
            });
        });
        if (Y)
          return F = Y, "break";
      }, $ = A; $ > 0; $--) {
        var z = b($);
        if (z === "break") break;
      }
    t.placement !== F && (t.modifiersData[o]._skip = !0, t.placement = F, t.reset = !0);
  }
}
const $m = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jm,
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
  return [We, st, it, Ue].some(function(t) {
    return e[t] >= 0;
  });
}
function Pm(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = no(t, {
    elementContext: "reference"
  }), a = no(t, {
    altBoundary: !0
  }), c = na(s, o), f = na(a, r, i), h = oa(c), m = oa(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: h,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": m
  });
}
const Om = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Pm
};
function Mm(e, t, n) {
  var o = mt(e), r = [Ue, We].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * r, [Ue, st].indexOf(o) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Am(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, s = Pl.reduce(function(h, m) {
    return h[m] = Mm(m, t.rects, i), h;
  }, {}), a = s[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = s;
}
const Im = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Am
};
function Dm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Nl({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Fm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Dm,
  data: {}
};
function Nm(e) {
  return e === "x" ? "y" : "x";
}
function Bm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, c = n.boundary, f = n.rootBoundary, h = n.altBoundary, m = n.padding, p = n.tether, x = p === void 0 ? !0 : p, g = n.tetherOffset, d = g === void 0 ? 0 : g, v = no(t, {
    boundary: c,
    rootBoundary: f,
    padding: m,
    altBoundary: h
  }), S = mt(t.placement), T = wn(t.placement), C = !T, w = Mi(S), E = Nm(w), _ = t.modifiersData.popperOffsets, I = t.rects.reference, R = t.rects.popper, F = typeof d == "function" ? d(Object.assign({}, t.rects, {
    placement: t.placement
  })) : d, V = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, y = {
    x: 0,
    y: 0
  };
  if (_) {
    if (i) {
      var D, M = w === "y" ? We : Ue, O = w === "y" ? it : st, B = w === "y" ? "height" : "width", j = _[w], Q = j + v[M], G = j - v[O], A = x ? -R[B] / 2 : 0, b = T === bn ? I[B] : R[B], $ = T === bn ? -R[B] : -I[B], z = t.elements.arrow, N = x && z ? Oi(z) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Al(), Y = K[M], U = K[O], Z = Gn(0, I[B], N[B]), ee = C ? I[B] / 2 - A - Z - Y - V.mainAxis : b - Z - Y - V.mainAxis, q = C ? -I[B] / 2 + A + Z + U + V.mainAxis : $ + Z + U + V.mainAxis, J = t.elements.arrow && mo(t.elements.arrow), W = J ? w === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0, ce = (D = H?.[w]) != null ? D : 0, pe = j + ee - ce - W, je = j + q - ce, Te = Gn(x ? Zo(Q, pe) : Q, j, x ? Zt(G, je) : G);
      _[w] = Te, y[w] = Te - j;
    }
    if (a) {
      var Ae, ue = w === "x" ? We : Ue, Ne = w === "x" ? it : st, $e = _[E], Re = E === "y" ? "height" : "width", se = $e + v[ue], Rn = $e - v[Ne], Tn = [We, Ue].indexOf(S) !== -1, go = (Ae = H?.[E]) != null ? Ae : 0, xo = Tn ? se : $e - I[Re] - R[Re] - go + V.altAxis, on = Tn ? $e + I[Re] + R[Re] - go - V.altAxis : Rn, bo = x && Tn ? cm(xo, $e, on) : Gn(x ? xo : se, $e, x ? on : Rn);
      _[E] = bo, y[E] = bo - $e;
    }
    t.modifiersData[o] = y;
  }
}
const zm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Bm,
  requiresIfExists: ["offset"]
};
function Lm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Hm(e) {
  return e === Je(e) || !ot(e) ? Ai(e) : Lm(e);
}
function Vm(e) {
  var t = e.getBoundingClientRect(), n = yn(t.width) / e.offsetWidth || 1, o = yn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Wm(e, t, n) {
  n === void 0 && (n = !1);
  var o = ot(t), r = ot(t) && Vm(t), i = Lt(t), s = vn(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((gt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Di(i)) && (a = Hm(t)), ot(t) ? (c = vn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Ii(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Um(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var c = t.get(a);
        c && r(c);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || r(i);
  }), o;
}
function Gm(e) {
  var t = Um(e);
  return om.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Ym(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function qm(e) {
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
function Km(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? ra : r;
  return function(a, c, f) {
    f === void 0 && (f = i);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ra, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: c
      },
      attributes: {},
      styles: {}
    }, m = [], p = !1, x = {
      state: h,
      setOptions: function(S) {
        var T = typeof S == "function" ? S(h.options) : S;
        d(), h.options = Object.assign({}, i, h.options, T), h.scrollParents = {
          reference: en(a) ? Yn(a) : a.contextElement ? Yn(a.contextElement) : [],
          popper: Yn(c)
        };
        var C = Gm(qm([].concat(o, h.options.modifiers)));
        return h.orderedModifiers = C.filter(function(w) {
          return w.enabled;
        }), g(), x.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var S = h.elements, T = S.reference, C = S.popper;
          if (ia(T, C)) {
            h.rects = {
              reference: Wm(T, mo(C), h.options.strategy === "fixed"),
              popper: Oi(C)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(V) {
              return h.modifiersData[V.name] = Object.assign({}, V.data);
            });
            for (var w = 0; w < h.orderedModifiers.length; w++) {
              if (h.reset === !0) {
                h.reset = !1, w = -1;
                continue;
              }
              var E = h.orderedModifiers[w], _ = E.fn, I = E.options, R = I === void 0 ? {} : I, F = E.name;
              typeof _ == "function" && (h = _({
                state: h,
                options: R,
                name: F,
                instance: x
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ym(function() {
        return new Promise(function(v) {
          x.forceUpdate(), v(h);
        });
      }),
      destroy: function() {
        d(), p = !0;
      }
    };
    if (!ia(a, c))
      return x;
    x.setOptions(f).then(function(v) {
      !p && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function g() {
      h.orderedModifiers.forEach(function(v) {
        var S = v.name, T = v.options, C = T === void 0 ? {} : T, w = v.effect;
        if (typeof w == "function") {
          var E = w({
            state: h,
            name: S,
            instance: x,
            options: C
          }), _ = function() {
          };
          m.push(E || _);
        }
      });
    }
    function d() {
      m.forEach(function(v) {
        return v();
      }), m = [];
    }
    return x;
  };
}
var Xm = [ym, Fm, xm, sm, Im, $m, zm, fm, Om], Zm = /* @__PURE__ */ Km({
  defaultModifiers: Xm
});
function Bl(e) {
  return typeof e == "string";
}
function zl(e, t, n) {
  return e === void 0 || Bl(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Ll(e, t = []) {
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
function Hl(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: o,
    externalForwardedProps: r,
    className: i
  } = e;
  if (!t) {
    const x = _e(n?.className, i, r?.className, o?.className), g = {
      ...n?.style,
      ...r?.style,
      ...o?.style
    }, d = {
      ...n,
      ...r,
      ...o
    };
    return x.length > 0 && (d.className = x), Object.keys(g).length > 0 && (d.style = g), {
      props: d,
      internalRef: void 0
    };
  }
  const s = Ll({
    ...r,
    ...o
  }), a = sa(o), c = sa(r), f = t(s), h = _e(f?.className, n?.className, i, r?.className, o?.className), m = {
    ...f?.style,
    ...n?.style,
    ...r?.style,
    ...o?.style
  }, p = {
    ...f,
    ...n,
    ...c,
    ...a
  };
  return h.length > 0 && (p.className = h), Object.keys(m).length > 0 && (p.style = m), {
    props: p,
    internalRef: f.ref
  };
}
function Vl(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Wl(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: r = !1,
    ...i
  } = e, s = r ? {} : Vl(n, o), {
    props: a,
    internalRef: c
  } = Hl({
    ...i,
    externalSlotProps: s
  }), f = Ge(c, s?.ref, e.additionalProps?.ref);
  return zl(t, {
    ...a,
    ref: f
  }, o);
}
function aa(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Jm(e) {
  return typeof e == "function" ? e() : e;
}
const oo = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    children: o,
    container: r,
    disablePortal: i = !1
  } = t, [s, a] = k.useState(null), c = Ge(/* @__PURE__ */ k.isValidElement(o) ? fo(o) : null, n);
  if (Qt(() => {
    i || a(Jm(r) || document.body);
  }, [r, i]), Qt(() => {
    if (s && !i)
      return aa(n, s), () => {
        aa(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ k.isValidElement(o)) {
      const f = {
        ref: c
      };
      return /* @__PURE__ */ k.cloneElement(o, f);
    }
    return o;
  }
  return s && /* @__PURE__ */ Su.createPortal(o, s);
});
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: u.node,
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
  container: u.oneOfType([Tt, u.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: u.bool
});
process.env.NODE_ENV !== "production" && (oo.propTypes = ll(oo.propTypes));
function Qm(e) {
  return lt("MuiPopper", e);
}
Ye("MuiPopper", ["root"]);
function eg(e, t) {
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
function tg(e) {
  return !wr(e);
}
const ng = (e) => {
  const {
    classes: t
  } = e;
  return xt({
    root: ["root"]
  }, Qm, t);
}, og = {}, rg = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: c,
    placement: f,
    popperOptions: h,
    popperRef: m,
    slotProps: p = {},
    slots: x = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: d,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...v
  } = t, S = k.useRef(null), T = Ge(S, n), C = k.useRef(null), w = Ge(C, m), E = k.useRef(w);
  Qt(() => {
    E.current = w;
  }, [w]), k.useImperativeHandle(m, () => C.current, []);
  const _ = eg(f, i), [I, R] = k.useState(_), [F, V] = k.useState(Jo(o));
  k.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), k.useEffect(() => {
    o && V(Jo(o));
  }, [o]), Qt(() => {
    if (!F || !c)
      return;
    const O = (Q) => {
      R(Q.placement);
    };
    if (process.env.NODE_ENV !== "production" && F && wr(F) && F.nodeType === 1) {
      const Q = F.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Q.top === 0 && Q.left === 0 && Q.right === 0 && Q.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let B = [{
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
        state: Q
      }) => {
        O(Q);
      }
    }];
    a != null && (B = B.concat(a)), h && h.modifiers != null && (B = B.concat(h.modifiers));
    const j = Zm(F, S.current, {
      placement: _,
      ...h,
      modifiers: B
    });
    return E.current(j), () => {
      j.destroy(), E.current(null);
    };
  }, [F, s, a, c, h, _]);
  const H = {
    placement: I
  };
  g !== null && (H.TransitionProps = g);
  const y = ng(t), D = x.root ?? "div", M = Wl({
    elementType: D,
    externalSlotProps: p.root,
    externalForwardedProps: v,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: y.root
  });
  return /* @__PURE__ */ l.jsx(D, {
    ...M,
    children: typeof r == "function" ? r(H) : r
  });
}), Ul = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    anchorEl: o,
    children: r,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: c = !1,
    modifiers: f,
    open: h,
    placement: m = "bottom",
    popperOptions: p = og,
    popperRef: x,
    style: g,
    transition: d = !1,
    slotProps: v = {},
    slots: S = {},
    ...T
  } = t, [C, w] = k.useState(!0), E = () => {
    w(!1);
  }, _ = () => {
    w(!0);
  };
  if (!c && !h && (!d || C))
    return null;
  let I;
  if (i)
    I = i;
  else if (o) {
    const V = Jo(o);
    I = V && wr(V) ? rt(V).body : rt(null).body;
  }
  const R = !h && c && (!d || C) ? "none" : void 0, F = d ? {
    in: h,
    onEnter: E,
    onExited: _
  } : void 0;
  return /* @__PURE__ */ l.jsx(oo, {
    disablePortal: a,
    container: I,
    children: /* @__PURE__ */ l.jsx(rg, {
      anchorEl: o,
      direction: s,
      disablePortal: a,
      modifiers: f,
      ref: n,
      open: d ? !C : h,
      placement: m,
      popperOptions: p,
      popperRef: x,
      slotProps: v,
      slots: S,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: R,
        ...g
      },
      TransitionProps: F,
      children: r
    })
  });
});
process.env.NODE_ENV !== "production" && (Ul.propTypes = {
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
  anchorEl: Cn(u.oneOfType([Tt, u.object, u.func]), (e) => {
    if (e.open) {
      const t = Jo(e.anchorEl);
      if (t && wr(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || tg(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: u.oneOfType([u.node, u.func]),
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
  container: u.oneOfType([Tt, u.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: u.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: u.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: u.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: u.arrayOf(u.shape({
    data: u.object,
    effect: u.func,
    enabled: u.bool,
    fn: u.func,
    name: u.any,
    options: u.object,
    phase: u.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: u.arrayOf(u.string),
    requiresIfExists: u.arrayOf(u.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: u.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: u.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: u.shape({
    modifiers: u.array,
    onFirstUpdate: u.func,
    placement: u.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: u.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: yr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: u.shape({
    root: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: u.shape({
    root: u.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: u.bool
});
const ig = ne(Ul, {
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
    componentsProps: c,
    container: f,
    disablePortal: h,
    keepMounted: m,
    modifiers: p,
    open: x,
    placement: g,
    popperOptions: d,
    popperRef: v,
    transition: S,
    slots: T,
    slotProps: C,
    ...w
  } = r, E = T?.root ?? a?.Root, _ = {
    anchorEl: i,
    container: f,
    disablePortal: h,
    keepMounted: m,
    modifiers: p,
    open: x,
    placement: g,
    popperOptions: d,
    popperRef: v,
    transition: S,
    ...w
  };
  return /* @__PURE__ */ l.jsx(ig, {
    as: s,
    direction: o ? "rtl" : "ltr",
    slots: {
      root: E
    },
    slotProps: C ?? c,
    ..._,
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
  anchorEl: u.oneOfType([Tt, u.object, u.func]),
  /**
   * Popper render function or node.
   */
  children: u.oneOfType([u.node, u.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: u.shape({
    Root: u.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: u.shape({
    root: u.oneOfType([u.func, u.object])
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
  container: u.oneOfType([Tt, u.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: u.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: u.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: u.arrayOf(u.shape({
    data: u.object,
    effect: u.func,
    enabled: u.bool,
    fn: u.func,
    name: u.any,
    options: u.object,
    phase: u.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: u.arrayOf(u.string),
    requiresIfExists: u.arrayOf(u.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: u.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: u.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: u.shape({
    modifiers: u.array,
    onFirstUpdate: u.func,
    placement: u.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: u.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: yr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: u.shape({
    root: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: u.shape({
    root: u.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: u.bool
});
function It(e) {
  const t = k.useRef(e);
  return Qt(() => {
    t.current = e;
  }), k.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function sg(e) {
  const {
    controlled: t,
    default: n,
    name: o,
    state: r = "value"
  } = e, {
    current: i
  } = k.useRef(t !== void 0), [s, a] = k.useState(n), c = i ? t : s;
  if (process.env.NODE_ENV !== "production") {
    k.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${o} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, t]);
    const {
      current: h
    } = k.useRef(n);
    k.useEffect(() => {
      !i && JSON.stringify(n) !== JSON.stringify(h) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const f = k.useCallback((h) => {
    i || a(h);
  }, []);
  return [c, f];
}
function Xe(e, t) {
  const {
    className: n,
    elementType: o,
    ownerState: r,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...c
  } = t, {
    component: f,
    slots: h = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...p
  } = i, x = h[e] || o, g = Vl(m[e], r), {
    props: {
      component: d,
      ...v
    },
    internalRef: S
  } = Hl({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: g
  }), T = Ge(S, g?.ref, t.ref), C = e === "root" ? d || f : d, w = zl(x, {
    ...e === "root" && !f && !h[e] && s,
    ...e !== "root" && !h[e] && s,
    ...v,
    ...C && !a && {
      as: C
    },
    ...C && a && {
      component: C
    },
    ref: T
  }, r);
  return [x, w];
}
function ag(e) {
  return lt("MuiTooltip", e);
}
const Me = Ye("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function lg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const cg = (e) => {
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
  return xt(s, ag, t);
}, ug = ne(Fi, {
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
      [`&[data-popper-placement*="bottom"] .${Me.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Me.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Me.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Me.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Me.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Me.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Me.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Me.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), dg = ne("div", {
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
  [`.${Me.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Me.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Me.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Me.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${lg(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${Me.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Me.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Me.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Me.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Me.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Me.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Me.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Me.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Me.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Me.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), pg = ne("span", {
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
let In = {
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
    componentsProps: c = {},
    describeChild: f = !1,
    disableFocusListener: h = !1,
    disableHoverListener: m = !1,
    disableInteractive: p = !1,
    disableTouchListener: x = !1,
    enterDelay: g = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: v = 700,
    followCursor: S = !1,
    id: T,
    leaveDelay: C = 0,
    leaveTouchDelay: w = 1500,
    onClose: E,
    onOpen: _,
    open: I,
    placement: R = "bottom",
    PopperComponent: F,
    PopperProps: V = {},
    slotProps: H = {},
    slots: y = {},
    title: D,
    TransitionComponent: M,
    TransitionProps: O,
    ...B
  } = o, j = /* @__PURE__ */ k.isValidElement(i) ? i : /* @__PURE__ */ l.jsx("span", {
    children: i
  }), Q = xr(), G = _i(), [A, b] = k.useState(), [$, z] = k.useState(null), N = k.useRef(!1), K = p || S, Y = fn(), U = fn(), Z = fn(), ee = fn(), [q, J] = sg({
    controlled: I,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let W = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: le
    } = k.useRef(I !== void 0);
    k.useEffect(() => {
      A && A.disabled && !le && D !== "" && A.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [D, A, le]);
  }
  const ce = xp(T), pe = k.useRef(), je = It(() => {
    pe.current !== void 0 && (document.body.style.WebkitUserSelect = pe.current, pe.current = void 0), ee.clear();
  });
  k.useEffect(() => je, [je]);
  const Te = (le) => {
    la.clear(), $o = !0, J(!0), _ && !W && _(le);
  }, Ae = It(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (le) => {
      la.start(800 + C, () => {
        $o = !1;
      }), J(!1), E && W && E(le), Y.start(Q.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), ue = (le) => {
    N.current && le.type !== "touchstart" || (A && A.removeAttribute("title"), U.clear(), Z.clear(), g || $o && d ? U.start($o ? d : g, () => {
      Te(le);
    }) : Te(le));
  }, Ne = (le) => {
    U.clear(), Z.start(C, () => {
      Ae(le);
    });
  }, [, $e] = k.useState(!1), Re = (le) => {
    qo(le.target) || ($e(!1), Ne(le));
  }, se = (le) => {
    A || b(le.currentTarget), qo(le.target) && ($e(!0), ue(le));
  }, Rn = (le) => {
    N.current = !0;
    const jt = j.props;
    jt.onTouchStart && jt.onTouchStart(le);
  }, Tn = (le) => {
    Rn(le), Z.clear(), Y.clear(), je(), pe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ee.start(v, () => {
      document.body.style.WebkitUserSelect = pe.current, ue(le);
    });
  }, go = (le) => {
    j.props.onTouchEnd && j.props.onTouchEnd(le), je(), Z.start(w, () => {
      Ae(le);
    });
  };
  k.useEffect(() => {
    if (!W)
      return;
    function le(jt) {
      jt.key === "Escape" && Ae(jt);
    }
    return document.addEventListener("keydown", le), () => {
      document.removeEventListener("keydown", le);
    };
  }, [Ae, W]);
  const xo = Ge(fo(j), b, n);
  !D && D !== 0 && (W = !1);
  const on = k.useRef(), bo = (le) => {
    const jt = j.props;
    jt.onMouseMove && jt.onMouseMove(le), In = {
      x: le.clientX,
      y: le.clientY
    }, on.current && on.current.update();
  }, kn = {}, Er = typeof D == "string";
  f ? (kn.title = !W && Er && !m ? D : null, kn["aria-describedby"] = W ? ce : null) : (kn["aria-label"] = Er ? D : null, kn["aria-labelledby"] = W && !Er ? ce : null);
  const Qe = {
    ...kn,
    ...B,
    ...j.props,
    className: _e(B.className, j.props.className),
    onTouchStart: Rn,
    ref: xo,
    ...S ? {
      onMouseMove: bo
    } : {}
  };
  process.env.NODE_ENV !== "production" && (Qe["data-mui-internal-clone-element"] = !0, k.useEffect(() => {
    A && !A.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [A]));
  const jn = {};
  x || (Qe.onTouchStart = Tn, Qe.onTouchEnd = go), m || (Qe.onMouseOver = Po(ue, Qe.onMouseOver), Qe.onMouseLeave = Po(Ne, Qe.onMouseLeave), K || (jn.onMouseOver = ue, jn.onMouseLeave = Ne)), h || (Qe.onFocus = Po(se, Qe.onFocus), Qe.onBlur = Po(Re, Qe.onBlur), K || (jn.onFocus = se, jn.onBlur = Re)), process.env.NODE_ENV !== "production" && j.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${j.props.title}\` or the Tooltip component.`].join(`
`));
  const Ht = {
    ...o,
    isRtl: G,
    arrow: r,
    disableInteractive: K,
    placement: R,
    PopperComponentProp: F,
    touch: N.current
  }, $n = typeof H.popper == "function" ? H.popper(Ht) : H.popper, mc = k.useMemo(() => {
    let le = [{
      name: "arrow",
      enabled: !!$,
      options: {
        element: $,
        padding: 4
      }
    }];
    return V.popperOptions?.modifiers && (le = le.concat(V.popperOptions.modifiers)), $n?.popperOptions?.modifiers && (le = le.concat($n.popperOptions.modifiers)), {
      ...V.popperOptions,
      ...$n?.popperOptions,
      modifiers: le
    };
  }, [$, V.popperOptions, $n?.popperOptions]), Sr = cg(Ht), gc = typeof H.transition == "function" ? H.transition(Ht) : H.transition, yo = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? M,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...y
    },
    slotProps: {
      arrow: H.arrow ?? c.arrow,
      popper: {
        ...V,
        ...$n ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: H.tooltip ?? c.tooltip,
      transition: {
        ...O,
        ...gc ?? c.transition
      }
    }
  }, [xc, bc] = Xe("popper", {
    elementType: ug,
    externalForwardedProps: yo,
    ownerState: Ht,
    className: _e(Sr.popper, V?.className)
  }), [yc, vc] = Xe("transition", {
    elementType: eo,
    externalForwardedProps: yo,
    ownerState: Ht
  }), [wc, Cc] = Xe("tooltip", {
    elementType: dg,
    className: Sr.tooltip,
    externalForwardedProps: yo,
    ownerState: Ht
  }), [Ec, Sc] = Xe("arrow", {
    elementType: pg,
    className: Sr.arrow,
    externalForwardedProps: yo,
    ownerState: Ht,
    ref: z
  });
  return /* @__PURE__ */ l.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ k.cloneElement(j, Qe), /* @__PURE__ */ l.jsx(xc, {
      as: F ?? Fi,
      placement: R,
      anchorEl: S ? {
        getBoundingClientRect: () => ({
          top: In.y,
          left: In.x,
          right: In.x,
          bottom: In.y,
          width: 0,
          height: 0
        })
      } : A,
      popperRef: on,
      open: A ? W : !1,
      id: ce,
      transition: !0,
      ...jn,
      ...bc,
      popperOptions: mc,
      children: ({
        TransitionProps: le
      }) => /* @__PURE__ */ l.jsx(yc, {
        timeout: Q.transitions.duration.shorter,
        ...le,
        ...vc,
        children: /* @__PURE__ */ l.jsxs(wc, {
          ...Cc,
          children: [D, r ? /* @__PURE__ */ l.jsx(Ec, {
            ...Sc
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
  arrow: u.bool,
  /**
   * Tooltip reference element.
   */
  children: En.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: u.shape({
    Arrow: u.elementType,
    Popper: u.elementType,
    Tooltip: u.elementType,
    Transition: u.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: u.shape({
    arrow: u.object,
    popper: u.object,
    tooltip: u.object,
    transition: u.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: u.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: u.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: u.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: u.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: u.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: u.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: u.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: u.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: u.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: u.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: u.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: u.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: u.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: u.func,
  /**
   * If `true`, the component is shown.
   */
  open: u.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: u.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: u.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: u.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: u.shape({
    arrow: u.oneOfType([u.func, u.object]),
    popper: u.oneOfType([u.func, u.object]),
    tooltip: u.oneOfType([u.func, u.object]),
    transition: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: u.shape({
    arrow: u.elementType,
    popper: u.elementType,
    tooltip: u.elementType,
    transition: u.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: u.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: u.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: u.object
});
function fg(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function hg(e, t, n, o, r) {
  const i = e[t], s = r || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !fg(i) && (a = "Did you accidentally provide a plain function component instead?"), i === k.Fragment && (a = "Did you accidentally provide a React.Fragment instead?"), a !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Gl = Cn(u.elementType, hg);
function mg(e) {
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
function Yl(e, t, n, o) {
  const r = e[t];
  if (r == null || !Number.isInteger(r)) {
    const i = mg(r);
    return new RangeError(`Invalid ${o} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function ql(e, t, n, o) {
  return e[t] === void 0 ? null : Yl(e, t, n, o);
}
function di() {
  return null;
}
ql.isRequired = Yl;
di.isRequired = di;
const Kl = process.env.NODE_ENV === "production" ? di : ql;
function gg(e, t = 166) {
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
  return rt(e).defaultView || window;
}
function Xl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function xg(e) {
  const t = rt(e);
  return t.body === e ? tn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function qn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ca(e) {
  return parseFloat(tn(e).getComputedStyle(e).paddingRight) || 0;
}
function bg(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ua(e, t, n, o, r) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), c = !bg(s);
    a && c && qn(s, r);
  });
}
function Ur(e, t) {
  let n = -1;
  return e.some((o, r) => t(o) ? (n = r, !0) : !1), n;
}
function yg(e, t) {
  const n = [], o = e.container;
  if (!t.disableScrollLock) {
    if (xg(o)) {
      const s = Xl(tn(o));
      n.push({
        value: o.style.paddingRight,
        property: "padding-right",
        el: o
      }), o.style.paddingRight = `${ca(o) + s}px`;
      const a = rt(o).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${ca(c) + s}px`;
      });
    }
    let i;
    if (o.parentNode instanceof DocumentFragment)
      i = rt(o).body;
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
function vg(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class wg {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let o = this.modals.indexOf(t);
    if (o !== -1)
      return o;
    o = this.modals.length, this.modals.push(t), t.modalRef && qn(t.modalRef, !1);
    const r = vg(n);
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
    r.restore || (r.restore = yg(r, n));
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
function Hn(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const Cg = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Eg(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Sg(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (o) => e.ownerDocument.querySelector(`input[type="radio"]${o}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function _g(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Sg(e));
}
function Rg(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Cg)).forEach((o, r) => {
    const i = Eg(o);
    i === -1 || !_g(o) || (i === 0 ? t.push(o) : n.push({
      documentOrder: r,
      tabIndex: i,
      node: o
    }));
  }), n.sort((o, r) => o.tabIndex === r.tabIndex ? o.documentOrder - r.documentOrder : o.tabIndex - r.tabIndex).map((o) => o.node).concat(t);
}
function Tg() {
  return !0;
}
function Qo(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: o = !1,
    disableRestoreFocus: r = !1,
    getTabbable: i = Rg,
    isEnabled: s = Tg,
    open: a
  } = e, c = k.useRef(!1), f = k.useRef(null), h = k.useRef(null), m = k.useRef(null), p = k.useRef(null), x = k.useRef(!1), g = k.useRef(null), d = Ge(fo(t), g), v = k.useRef(null);
  k.useEffect(() => {
    !a || !g.current || (x.current = !n);
  }, [n, a]), k.useEffect(() => {
    if (!a || !g.current)
      return;
    const C = rt(g.current), w = Hn(C);
    return g.current.contains(w) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), x.current && g.current.focus()), () => {
      r || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [a]), k.useEffect(() => {
    if (!a || !g.current)
      return;
    const C = rt(g.current), w = (I) => {
      if (v.current = I, o || !s() || I.key !== "Tab")
        return;
      Hn(C) === g.current && I.shiftKey && (c.current = !0, h.current && h.current.focus());
    }, E = () => {
      const I = g.current;
      if (I === null)
        return;
      const R = Hn(C);
      if (!C.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (I.contains(R) || o && R !== f.current && R !== h.current)
        return;
      if (R !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!x.current)
        return;
      let F = [];
      if ((R === f.current || R === h.current) && (F = i(g.current)), F.length > 0) {
        const V = !!(v.current?.shiftKey && v.current?.key === "Tab"), H = F[0], y = F[F.length - 1];
        typeof H != "string" && typeof y != "string" && (V ? y.focus() : H.focus());
      } else
        I.focus();
    };
    C.addEventListener("focusin", E), C.addEventListener("keydown", w, !0);
    const _ = setInterval(() => {
      const I = Hn(C);
      I && I.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(_), C.removeEventListener("focusin", E), C.removeEventListener("keydown", w, !0);
    };
  }, [n, o, r, s, a, i]);
  const S = (C) => {
    m.current === null && (m.current = C.relatedTarget), x.current = !0, p.current = C.target;
    const w = t.props.onFocus;
    w && w(C);
  }, T = (C) => {
    m.current === null && (m.current = C.relatedTarget), x.current = !0;
  };
  return /* @__PURE__ */ l.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ l.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: T,
      ref: f,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ k.cloneElement(t, {
      ref: d,
      onFocus: S
    }), /* @__PURE__ */ l.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: T,
      ref: h,
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
  disableAutoFocus: u.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: u.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: u.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: u.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: u.func,
  /**
   * If `true`, focus is locked.
   */
  open: u.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = ll(Qo.propTypes));
const kg = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Zl = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = xr(), r = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: c,
    in: f,
    onEnter: h,
    onEntered: m,
    onEntering: p,
    onExit: x,
    onExited: g,
    onExiting: d,
    style: v,
    timeout: S = r,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = bt,
    ...C
  } = t, w = k.useRef(null), E = Ge(w, fo(a), n), _ = (M) => (O) => {
    if (M) {
      const B = w.current;
      O === void 0 ? M(B) : M(B, O);
    }
  }, I = _(p), R = _((M, O) => {
    jl(M);
    const B = Xo({
      style: v,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = o.transitions.create("opacity", B), M.style.transition = o.transitions.create("opacity", B), h && h(M, O);
  }), F = _(m), V = _(d), H = _((M) => {
    const O = Xo({
      style: v,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = o.transitions.create("opacity", O), M.style.transition = o.transitions.create("opacity", O), x && x(M);
  }), y = _(g), D = (M) => {
    i && i(w.current, M);
  };
  return /* @__PURE__ */ l.jsx(T, {
    appear: s,
    in: f,
    nodeRef: w,
    onEnter: R,
    onEntered: F,
    onEntering: I,
    onExit: H,
    onExited: y,
    onExiting: V,
    addEndListener: D,
    timeout: S,
    ...C,
    children: (M, {
      ownerState: O,
      ...B
    }) => /* @__PURE__ */ k.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: M === "exited" && !f ? "hidden" : void 0,
        ...kg[M],
        ...v,
        ...a.props.style
      },
      ref: E,
      ...B
    })
  });
});
process.env.NODE_ENV !== "production" && (Zl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: u.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: u.bool,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: u.oneOfType([u.shape({
    enter: u.string,
    exit: u.string
  }), u.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: u.bool,
  /**
   * @ignore
   */
  onEnter: u.func,
  /**
   * @ignore
   */
  onEntered: u.func,
  /**
   * @ignore
   */
  onEntering: u.func,
  /**
   * @ignore
   */
  onExit: u.func,
  /**
   * @ignore
   */
  onExited: u.func,
  /**
   * @ignore
   */
  onExiting: u.func,
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: u.oneOfType([u.number, u.shape({
    appear: u.number,
    enter: u.number,
    exit: u.number
  })])
});
function jg(e) {
  return lt("MuiBackdrop", e);
}
Ye("MuiBackdrop", ["root", "invisible"]);
const $g = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return xt({
    root: ["root", n && "invisible"]
  }, jg, t);
}, Pg = ne("div", {
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
}), Jl = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: r,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: c,
    components: f = {},
    componentsProps: h = {},
    slotProps: m = {},
    slots: p = {},
    TransitionComponent: x,
    transitionDuration: g,
    ...d
  } = o, v = {
    ...o,
    component: s,
    invisible: a
  }, S = $g(v), T = {
    transition: x,
    root: f.Root,
    ...p
  }, C = {
    ...h,
    ...m
  }, w = {
    component: s,
    slots: T,
    slotProps: C
  }, [E, _] = Xe("root", {
    elementType: Pg,
    externalForwardedProps: w,
    className: _e(S.root, i),
    ownerState: v
  }), [I, R] = Xe("transition", {
    elementType: Zl,
    externalForwardedProps: w,
    ownerState: v
  });
  return /* @__PURE__ */ l.jsx(I, {
    in: c,
    timeout: g,
    ...d,
    ...R,
    children: /* @__PURE__ */ l.jsx(E, {
      "aria-hidden": !0,
      ..._,
      ref: n,
      children: r
    })
  });
});
process.env.NODE_ENV !== "production" && (Jl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: u.shape({
    Root: u.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: u.shape({
    root: u.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: u.bool,
  /**
   * If `true`, the component is shown.
   */
  open: u.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: u.shape({
    root: u.oneOfType([u.func, u.object]),
    transition: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: u.shape({
    root: u.elementType,
    transition: u.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: u.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: u.oneOfType([u.number, u.shape({
    appear: u.number,
    enter: u.number,
    exit: u.number
  })])
});
function da(...e) {
  return e.reduce((t, n) => n == null ? t : function(...r) {
    t.apply(this, r), n.apply(this, r);
  }, () => {
  });
}
function Og(e) {
  return typeof e == "function" ? e() : e;
}
function Mg(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const pa = () => {
}, Oo = new wg();
function Ag(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: o = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: c,
    open: f,
    rootRef: h
  } = e, m = k.useRef({}), p = k.useRef(null), x = k.useRef(null), g = Ge(x, h), [d, v] = k.useState(!f), S = Mg(a);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const C = () => rt(p.current), w = () => (m.current.modalRef = x.current, m.current.mount = p.current, m.current), E = () => {
    Oo.mount(w(), {
      disableScrollLock: o
    }), x.current && (x.current.scrollTop = 0);
  }, _ = It(() => {
    const O = Og(t) || C().body;
    Oo.add(w(), O), x.current && E();
  }), I = () => Oo.isTopModal(w()), R = It((O) => {
    p.current = O, O && (f && I() ? E() : x.current && qn(x.current, T));
  }), F = k.useCallback(() => {
    Oo.remove(w(), T);
  }, [T]);
  k.useEffect(() => () => {
    F();
  }, [F]), k.useEffect(() => {
    f ? _() : (!S || !r) && F();
  }, [f, F, S, r, _]);
  const V = (O) => (B) => {
    O.onKeyDown?.(B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !I()) && (n || (B.stopPropagation(), c && c(B, "escapeKeyDown")));
  }, H = (O) => (B) => {
    O.onClick?.(B), B.target === B.currentTarget && c && c(B, "backdropClick");
  };
  return {
    getRootProps: (O = {}) => {
      const B = Ll(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const j = {
        ...B,
        ...O
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...j,
        onKeyDown: V(j),
        ref: g
      };
    },
    getBackdropProps: (O = {}) => {
      const B = O;
      return {
        "aria-hidden": !0,
        ...B,
        onClick: H(B),
        open: f
      };
    },
    getTransitionProps: () => {
      const O = () => {
        v(!1), i && i();
      }, B = () => {
        v(!0), s && s(), r && F();
      };
      return {
        onEnter: da(O, a?.props.onEnter ?? pa),
        onExited: da(B, a?.props.onExited ?? pa)
      };
    },
    rootRef: g,
    portalRef: R,
    isTopModal: I,
    exited: d,
    hasTransition: S
  };
}
function Ig(e) {
  return lt("MuiModal", e);
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
  }, Ig, o);
}, Fg = ne("div", {
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
}))), Ng = ne(Jl, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Ql = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: r = Ng,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: c = !1,
    children: f,
    container: h,
    component: m,
    components: p = {},
    componentsProps: x = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: d = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: S = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: C = !1,
    hideBackdrop: w = !1,
    keepMounted: E = !1,
    onClose: _,
    onTransitionEnter: I,
    onTransitionExited: R,
    open: F,
    slotProps: V = {},
    slots: H = {},
    // eslint-disable-next-line react/prop-types
    theme: y,
    ...D
  } = o, M = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: g,
    disableEnforceFocus: d,
    disableEscapeKeyDown: v,
    disablePortal: S,
    disableRestoreFocus: T,
    disableScrollLock: C,
    hideBackdrop: w,
    keepMounted: E
  }, {
    getRootProps: O,
    getBackdropProps: B,
    getTransitionProps: j,
    portalRef: Q,
    isTopModal: G,
    exited: A,
    hasTransition: b
  } = Ag({
    ...M,
    rootRef: n
  }), $ = {
    ...M,
    exited: A
  }, z = Dg($), N = {};
  if (f.props.tabIndex === void 0 && (N.tabIndex = "-1"), b) {
    const {
      onEnter: q,
      onExited: J
    } = j();
    N.onEnter = q, N.onExited = J;
  }
  const K = {
    slots: {
      root: p.Root,
      backdrop: p.Backdrop,
      ...H
    },
    slotProps: {
      ...x,
      ...V
    }
  }, [Y, U] = Xe("root", {
    ref: n,
    elementType: Fg,
    externalForwardedProps: {
      ...K,
      ...D,
      component: m
    },
    getSlotProps: O,
    ownerState: $,
    className: _e(a, z?.root, !$.open && $.exited && z?.hidden)
  }), [Z, ee] = Xe("backdrop", {
    ref: i?.ref,
    elementType: r,
    externalForwardedProps: K,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (q) => B({
      ...q,
      onClick: (J) => {
        q?.onClick && q.onClick(J);
      }
    }),
    className: _e(i?.className, z?.backdrop),
    ownerState: $
  });
  return !E && !F && (!b || A) ? null : /* @__PURE__ */ l.jsx(oo, {
    ref: Q,
    container: h,
    disablePortal: S,
    children: /* @__PURE__ */ l.jsxs(Y, {
      ...U,
      children: [!w && r ? /* @__PURE__ */ l.jsx(Z, {
        ...ee
      }) : null, /* @__PURE__ */ l.jsx(Qo, {
        disableEnforceFocus: d,
        disableAutoFocus: g,
        disableRestoreFocus: T,
        isEnabled: G,
        open: F,
        children: /* @__PURE__ */ k.cloneElement(f, N)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
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
  BackdropComponent: u.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: u.object,
  /**
   * A single child content element.
   */
  children: En.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: u.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: u.shape({
    Backdrop: u.elementType,
    Root: u.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: u.shape({
    backdrop: u.oneOfType([u.func, u.object]),
    root: u.oneOfType([u.func, u.object])
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
  container: u.oneOfType([Tt, u.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: u.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: u.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: u.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: u.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: u.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: u.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: u.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: u.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: u.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: u.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: u.func,
  /**
   * If `true`, the component is shown.
   */
  open: u.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: u.shape({
    backdrop: u.oneOfType([u.func, u.object]),
    root: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: u.shape({
    backdrop: u.elementType,
    root: u.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
function Bg(e) {
  return lt("MuiPaper", e);
}
Ye("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const zg = (e) => {
  const {
    square: t,
    elevation: n,
    variant: o,
    classes: r
  } = e, i = {
    root: ["root", o, !t && "rounded", o === "elevation" && `elevation${n}`]
  };
  return xt(i, Bg, r);
}, Lg = ne("div", {
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
}))), ec = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiPaper"
  }), r = xr(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: c = !1,
    variant: f = "elevation",
    ...h
  } = o, m = {
    ...o,
    component: s,
    elevation: a,
    square: c,
    variant: f
  }, p = zg(m);
  return process.env.NODE_ENV !== "production" && r.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ l.jsx(Lg, {
    as: s,
    ownerState: m,
    className: _e(p.root, i),
    ref: n,
    ...h,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (r.vars || r).shadows[a],
        ...r.vars && {
          "--Paper-overlay": r.vars.overlays?.[a]
        },
        ...!r.vars && r.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Go("#fff", Qr(a))}, ${Go("#fff", Qr(a))})`
        }
      },
      ...h.style
    }
  });
});
process.env.NODE_ENV !== "production" && (ec.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Cn(Kl, (e) => {
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
  square: u.bool,
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: u.oneOfType([u.oneOf(["elevation", "outlined"]), u.string])
});
function Hg(e) {
  return lt("MuiPopover", e);
}
Ye("MuiPopover", ["root", "paper"]);
function Vg(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Wg(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const c = {};
    return Object.keys(a).forEach((f) => {
      Vg(f, a[f]) && typeof s[f] == "function" && (c[f] = (...h) => {
        s[f](...h), a[f](...h);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, c = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, f = _e(s?.className, a?.className, c?.className), h = n(c, a);
      return {
        ...a,
        ...c,
        ...h,
        ...!!f && {
          className: f
        },
        ...a?.style && c?.style && {
          style: {
            ...a.style,
            ...c.style
          }
        },
        ...a?.sx && c?.sx && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
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
function Vn(e) {
  return typeof e == "function" ? e() : e;
}
const Ug = (e) => {
  const {
    classes: t
  } = e;
  return xt({
    root: ["root"],
    paper: ["paper"]
  }, Hg, t);
}, Gg = ne(Ql, {
  name: "MuiPopover",
  slot: "Root"
})({}), tc = ne(ec, {
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
    anchorReference: c = "anchorEl",
    children: f,
    className: h,
    container: m,
    elevation: p = 8,
    marginThreshold: x = 16,
    open: g,
    PaperProps: d = {},
    // TODO: remove in v7
    slots: v = {},
    slotProps: S = {},
    transformOrigin: T = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: C,
    // TODO: remove in v7
    transitionDuration: w = "auto",
    TransitionProps: E = {},
    // TODO: remove in v7
    disableScrollLock: _ = !1,
    ...I
  } = o, R = k.useRef(), F = {
    ...o,
    anchorOrigin: s,
    anchorReference: c,
    elevation: p,
    marginThreshold: x,
    transformOrigin: T,
    TransitionComponent: C,
    transitionDuration: w,
    TransitionProps: E
  }, V = Ug(F), H = k.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const q = Vn(i), J = q && q.nodeType === 1 ? q : rt(R.current).body, W = J.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ce = J.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ce.top === 0 && ce.left === 0 && ce.right === 0 && ce.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: W.top + fa(W, s.vertical),
      left: W.left + ha(W, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, c]), y = k.useCallback((q) => ({
    vertical: fa(q, T.vertical),
    horizontal: ha(q, T.horizontal)
  }), [T.horizontal, T.vertical]), D = k.useCallback((q) => {
    const J = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, W = y(J);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ma(W)
      };
    const ce = H();
    let pe = ce.top - W.vertical, je = ce.left - W.horizontal;
    const Te = pe + J.height, Ae = je + J.width, ue = tn(Vn(i)), Ne = ue.innerHeight - x, $e = ue.innerWidth - x;
    if (x !== null && pe < x) {
      const Re = pe - x;
      pe -= Re, W.vertical += Re;
    } else if (x !== null && Te > Ne) {
      const Re = Te - Ne;
      pe -= Re, W.vertical += Re;
    }
    if (process.env.NODE_ENV !== "production" && J.height > Ne && J.height && Ne && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${J.height - Ne}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), x !== null && je < x) {
      const Re = je - x;
      je -= Re, W.horizontal += Re;
    } else if (Ae > $e) {
      const Re = Ae - $e;
      je -= Re, W.horizontal += Re;
    }
    return {
      top: `${Math.round(pe)}px`,
      left: `${Math.round(je)}px`,
      transformOrigin: ma(W)
    };
  }, [i, c, H, y, x]), [M, O] = k.useState(g), B = k.useCallback(() => {
    const q = R.current;
    if (!q)
      return;
    const J = D(q);
    J.top !== null && q.style.setProperty("top", J.top), J.left !== null && (q.style.left = J.left), q.style.transformOrigin = J.transformOrigin, O(!0);
  }, [D]);
  k.useEffect(() => (_ && window.addEventListener("scroll", B), () => window.removeEventListener("scroll", B)), [i, _, B]);
  const j = () => {
    B();
  }, Q = () => {
    O(!1);
  };
  k.useEffect(() => {
    g && B();
  }), k.useImperativeHandle(r, () => g ? {
    updatePosition: () => {
      B();
    }
  } : null, [g, B]), k.useEffect(() => {
    if (!g)
      return;
    const q = gg(() => {
      B();
    }), J = tn(Vn(i));
    return J.addEventListener("resize", q), () => {
      q.clear(), J.removeEventListener("resize", q);
    };
  }, [i, g, B]);
  let G = w;
  const A = {
    slots: {
      transition: C,
      ...v
    },
    slotProps: {
      transition: E,
      paper: d,
      ...S
    }
  }, [b, $] = Xe("transition", {
    elementType: eo,
    externalForwardedProps: A,
    ownerState: F,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (J, W) => {
        q.onEntering?.(J, W), j();
      },
      onExited: (J) => {
        q.onExited?.(J), Q();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  w === "auto" && !b.muiSupportAuto && (G = void 0);
  const z = m || (i ? rt(Vn(i)).body : void 0), [N, {
    slots: K,
    slotProps: Y,
    ...U
  }] = Xe("root", {
    ref: n,
    elementType: Gg,
    externalForwardedProps: {
      ...A,
      ...I
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: v.backdrop
      },
      slotProps: {
        backdrop: Wg(typeof S.backdrop == "function" ? S.backdrop(F) : S.backdrop, {
          invisible: !0
        })
      },
      container: z,
      open: g
    },
    ownerState: F,
    className: _e(V.root, h)
  }), [Z, ee] = Xe("paper", {
    ref: R,
    className: V.paper,
    elementType: tc,
    externalForwardedProps: A,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: p,
      style: M ? void 0 : {
        opacity: 0
      }
    },
    ownerState: F
  });
  return /* @__PURE__ */ l.jsx(N, {
    ...U,
    ...!Bl(N) && {
      slots: K,
      slotProps: Y,
      disableScrollLock: _
    },
    children: /* @__PURE__ */ l.jsx(b, {
      ...$,
      timeout: G,
      children: /* @__PURE__ */ l.jsx(Z, {
        ...ee,
        children: f
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
  anchorEl: Cn(u.oneOfType([Tt, u.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Vn(e.anchorEl);
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
  anchorOrigin: u.shape({
    horizontal: u.oneOfType([u.oneOf(["center", "left", "right"]), u.number]).isRequired,
    vertical: u.oneOfType([u.oneOf(["bottom", "center", "top"]), u.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: u.shape({
    left: u.number.isRequired,
    top: u.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: u.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: u.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: u.object,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: u.oneOfType([Tt, u.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: u.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Kl,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: u.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: u.func,
  /**
   * If `true`, the component is shown.
   */
  open: u.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: u.shape({
    component: Gl
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: u.shape({
    backdrop: u.oneOfType([u.func, u.object]),
    paper: u.oneOfType([u.func, u.object]),
    root: u.oneOfType([u.func, u.object]),
    transition: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: u.shape({
    backdrop: u.elementType,
    paper: u.elementType,
    root: u.elementType,
    transition: u.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
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
  transformOrigin: u.shape({
    horizontal: u.oneOfType([u.oneOf(["center", "left", "right"]), u.number]).isRequired,
    vertical: u.oneOfType([u.oneOf(["bottom", "center", "top"]), u.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: u.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: u.oneOfType([u.oneOf(["auto"]), u.number, u.shape({
    appear: u.number,
    enter: u.number,
    exit: u.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: u.object
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
  var t = ie(e), n = ie(function(o) {
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
}, nc = Se.memo(function(e) {
  var t = e.onMove, n = e.onKey, o = Cr(e, ["onMove", "onKey"]), r = ie(null), i = ro(t), s = ro(n), a = ie(null), c = ie(!1), f = $c(function() {
    var x = function(v) {
      xa(v), (Kn(v) ? v.touches.length > 0 : v.buttons > 0) && r.current ? i(ga(r.current, v, a.current)) : d(!1);
    }, g = function() {
      return d(!1);
    };
    function d(v) {
      var S = c.current, T = pi(r.current), C = v ? T.addEventListener : T.removeEventListener;
      C(S ? "touchmove" : "mousemove", x), C(S ? "touchend" : "mouseup", g);
    }
    return [function(v) {
      var S = v.nativeEvent, T = r.current;
      if (T && (xa(S), !(function(w, E) {
        return E && !Kn(w);
      })(S, c.current) && T)) {
        if (Kn(S)) {
          c.current = !0;
          var C = S.changedTouches || [];
          C.length && (a.current = C[0].identifier);
        }
        T.focus(), i(ga(T, S, a.current)), d(!0);
      }
    }, function(v) {
      var S = v.which || v.keyCode;
      S < 37 || S > 40 || (v.preventDefault(), s({ left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0, top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0 }));
    }, d];
  }, [s, i]), h = f[0], m = f[1], p = f[2];
  return Be(function() {
    return p;
  }, [p]), Se.createElement("div", _n({}, o, { onTouchStart: h, onMouseDown: h, className: "react-colorful__interactive", ref: r, onKeyDown: m, tabIndex: 0, role: "slider" }));
}), Bi = function(e) {
  return e.filter(Boolean).join(" ");
}, oc = function(e) {
  var t = e.color, n = e.left, o = e.top, r = o === void 0 ? 0.5 : o, i = Bi(["react-colorful__pointer", e.className]);
  return Se.createElement("div", { className: i, style: { top: 100 * r + "%", left: 100 * n + "%" } }, Se.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, ze = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Yg = function(e) {
  return Jg(fi(e));
}, fi = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? ze(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? ze(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, qg = function(e) {
  return Zg(Xg(e));
}, Kg = function(e) {
  var t = e.s, n = e.v, o = e.a, r = (200 - t) * n / 100;
  return { h: ze(e.h), s: ze(r > 0 && r < 200 ? t * n / 100 / (r <= 100 ? r : 200 - r) * 100 : 0), l: ze(r / 2), a: ze(o, 2) };
}, hi = function(e) {
  var t = Kg(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Xg = function(e) {
  var t = e.h, n = e.s, o = e.v, r = e.a;
  t = t / 360 * 6, n /= 100, o /= 100;
  var i = Math.floor(t), s = o * (1 - n), a = o * (1 - (t - i) * n), c = o * (1 - (1 - t + i) * n), f = i % 6;
  return { r: ze(255 * [o, a, s, s, c, o][f]), g: ze(255 * [c, o, o, a, s, s][f]), b: ze(255 * [s, s, c, o, o, a][f]), a: ze(r, 2) };
}, Mo = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Zg = function(e) {
  var t = e.r, n = e.g, o = e.b, r = e.a, i = r < 1 ? Mo(ze(255 * r)) : "";
  return "#" + Mo(t) + Mo(n) + Mo(o) + i;
}, Jg = function(e) {
  var t = e.r, n = e.g, o = e.b, r = e.a, i = Math.max(t, n, o), s = i - Math.min(t, n, o), a = s ? i === t ? (n - o) / s : i === n ? 2 + (o - t) / s : 4 + (t - n) / s : 0;
  return { h: ze(60 * (a < 0 ? a + 6 : a)), s: ze(i ? s / i * 100 : 0), v: ze(i / 255 * 100), a: r };
}, Qg = Se.memo(function(e) {
  var t = e.hue, n = e.onChange, o = Bi(["react-colorful__hue", e.className]);
  return Se.createElement("div", { className: o }, Se.createElement(nc, { onMove: function(r) {
    n({ h: 360 * r.left });
  }, onKey: function(r) {
    n({ h: io(t + 360 * r.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": ze(t), "aria-valuemax": "360", "aria-valuemin": "0" }, Se.createElement(oc, { className: "react-colorful__hue-pointer", left: t / 360, color: hi({ h: t, s: 100, v: 100, a: 1 }) })));
}), e0 = Se.memo(function(e) {
  var t = e.hsva, n = e.onChange, o = { backgroundColor: hi({ h: t.h, s: 100, v: 100, a: 1 }) };
  return Se.createElement("div", { className: "react-colorful__saturation", style: o }, Se.createElement(nc, { onMove: function(r) {
    n({ s: 100 * r.left, v: 100 - 100 * r.top });
  }, onKey: function(r) {
    n({ s: io(t.s + 100 * r.left, 0, 100), v: io(t.v - 100 * r.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + ze(t.s) + "%, Brightness " + ze(t.v) + "%" }, Se.createElement(oc, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: hi(t) })));
}), rc = function(e, t) {
  if (e === t) return !0;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}, t0 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || rc(fi(e), fi(t));
};
function n0(e, t, n) {
  var o = ro(n), r = oe(function() {
    return e.toHsva(t);
  }), i = r[0], s = r[1], a = ie({ color: t, hsva: i });
  Be(function() {
    if (!e.equal(t, a.current.color)) {
      var f = e.toHsva(t);
      a.current = { hsva: f, color: t }, s(f);
    }
  }, [t, e]), Be(function() {
    var f;
    rc(i, a.current.hsva) || e.equal(f = e.fromHsva(i), a.current.color) || (a.current = { hsva: i, color: f }, o(f));
  }, [i, e, o]);
  var c = De(function(f) {
    s(function(h) {
      return Object.assign({}, h, f);
    });
  }, []);
  return [i, c];
}
var o0 = typeof window < "u" ? gi : Be, r0 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, ba = /* @__PURE__ */ new Map(), i0 = function(e) {
  o0(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !ba.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, ba.set(t, n);
      var o = r0();
      o && n.setAttribute("nonce", o), t.head.appendChild(n);
    }
  }, []);
}, s0 = function(e) {
  var t = e.className, n = e.colorModel, o = e.color, r = o === void 0 ? n.defaultColor : o, i = e.onChange, s = Cr(e, ["className", "colorModel", "color", "onChange"]), a = ie(null);
  i0(a);
  var c = n0(n, r, i), f = c[0], h = c[1], m = Bi(["react-colorful", t]);
  return Se.createElement("div", _n({}, s, { ref: a, className: m }), Se.createElement(e0, { hsva: f, onChange: h }), Se.createElement(Qg, { hue: f.h, onChange: h, className: "react-colorful__last-control" }));
}, a0 = { defaultColor: "000", toHsva: Yg, fromHsva: function(e) {
  return qg({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: t0 }, l0 = function(e) {
  return Se.createElement(s0, _n({}, e, { colorModel: a0 }));
}, c0 = /^#?([0-9A-F]{3,8})$/i, u0 = function(e) {
  var t = e.color, n = t === void 0 ? "" : t, o = e.onChange, r = e.onBlur, i = e.escape, s = e.validate, a = e.format, c = e.process, f = Cr(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), h = oe(function() {
    return i(n);
  }), m = h[0], p = h[1], x = ro(o), g = ro(r), d = De(function(S) {
    var T = i(S.target.value);
    p(T), s(T) && x(c ? c(T) : T);
  }, [i, c, s, x]), v = De(function(S) {
    s(S.target.value) || p(i(n)), g(S);
  }, [n, i, s, g]);
  return Be(function() {
    p(i(n));
  }, [n, i]), Se.createElement("input", _n({}, f, { value: a ? a(m) : m, spellCheck: "false", onChange: d, onBlur: v }));
}, ya = function(e) {
  return "#" + e;
}, d0 = function(e) {
  var t = e.prefixed, n = e.alpha, o = Cr(e, ["prefixed", "alpha"]), r = De(function(s) {
    return s.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6);
  }, [n]), i = De(function(s) {
    return (function(a, c) {
      var f = c0.exec(a), h = f ? f[1].length : 0;
      return h === 3 || h === 6 || !!c && h === 4 || !!c && h === 8;
    })(s, n);
  }, [n]);
  return Se.createElement(u0, _n({}, o, { escape: r, format: t ? ya : void 0, process: ya, validate: i }));
};
const p0 = ({
  color: e,
  onAccept: t,
  onCancel: n,
  anchorEl: o,
  anchorOrigin: r,
  transformOrigin: i,
  open: s
}) => {
  const [a, c] = oe(e), f = ie([]), { t: h } = He();
  Be(() => {
    c(e);
  }, [e]);
  const m = (p) => {
    f.current.includes(p) || (f.current = [p, ...f.current].slice(
      0,
      14
    )), c(p), t(p);
  };
  return /* @__PURE__ */ l.jsx(
    f0,
    {
      open: s,
      onClose: n,
      anchorEl: o.current,
      anchorOrigin: r,
      transformOrigin: i,
      children: /* @__PURE__ */ l.jsxs(h0, { children: [
        /* @__PURE__ */ l.jsx(
          l0,
          {
            color: a,
            onChange: (p) => {
              c(p);
            }
          }
        ),
        /* @__PURE__ */ l.jsx(va, {}),
        /* @__PURE__ */ l.jsxs(S0, { children: [
          /* @__PURE__ */ l.jsxs(C0, { children: [
            /* @__PURE__ */ l.jsx(y0, { children: "Hex" }),
            /* @__PURE__ */ l.jsxs(v0, { children: [
              /* @__PURE__ */ l.jsx(b0, { children: "#" }),
              /* @__PURE__ */ l.jsx(
                w0,
                {
                  color: a,
                  onChange: (p) => {
                    c(p);
                  },
                  tabIndex: 0
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(E0, { $color: a })
        ] }),
        /* @__PURE__ */ l.jsx(va, {}),
        /* @__PURE__ */ l.jsxs(m0, { children: [
          /* @__PURE__ */ l.jsx(x0, { onClick: n, children: h("color_picker.cancel") }),
          /* @__PURE__ */ l.jsxs(
            g0,
            {
              onClick: () => {
                m(a), n();
              },
              children: [
                /* @__PURE__ */ l.jsx(Bt, {}),
                h("color_picker.apply")
              ]
            }
          )
        ] })
      ] })
    }
  );
}, f0 = te(Mc)`
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
`, h0 = te.div`
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
`, m0 = te.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  gap: 8px;
`, g0 = te("div")`
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
`, x0 = te("div")`
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
`, b0 = te.div`
  margin: auto 0px auto 10px;
  font-size: 13px;
  color: #333;
  font-family: ${P.typography.button.fontFamily};
`, y0 = te.div`
  margin: auto 0px;
  font-size: 12px;
  display: inline-flex;
  font-family: ${P.typography.button.fontFamily};
`, v0 = te.div`
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
`, w0 = te(d0)`
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
`, C0 = te.div`
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
`, E0 = te.div`
  display: inline-flex;
  ${({ $color: e }) => e.toUpperCase() === "#FFFFFF" ? `border: 1px solid ${P.palette.grey[300]};` : `border: 1px solid ${e};`}
  background-color: ${({ $color: e }) => e};
  min-width: 28px;
  height: 28px;
  border-radius: 5px;
`, S0 = te.div`
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
  open: c
}) => {
  const [f, h] = oe(e), [m, p] = oe(!1), x = ie([]), { t: g } = He();
  Be(() => {
    h(e);
  }, [e]);
  const d = (M) => {
    x.current.includes(M) || (x.current = [M, ...x.current].slice(
      0,
      14
    )), h(M || P.palette.common.black), o(M), p(!1);
  }, v = () => {
    p(!1), r();
  }, S = (M) => {
    const O = f.toUpperCase() === M.toUpperCase();
    return /* @__PURE__ */ l.jsx(
      M0,
      {
        $color: M,
        onClick: () => d(M),
        children: O && /* @__PURE__ */ l.jsx(I0, { $color: M })
      },
      M
    );
  }, T = [
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
  return c ? m ? /* @__PURE__ */ l.jsx(
    p0,
    {
      color: f,
      onAccept: d,
      onCancel: () => p(!1),
      anchorEl: i,
      anchorOrigin: s,
      transformOrigin: a,
      open: !0
    }
  ) : /* @__PURE__ */ l.jsxs(
    _0,
    {
      anchorEl: i.current,
      open: !0,
      onClose: v,
      anchorOrigin: s,
      transformOrigin: a,
      children: [
        /* @__PURE__ */ l.jsxs(R0, { onClick: () => d(t), children: [
          /* @__PURE__ */ l.jsx(k0, { style: { backgroundColor: t } }),
          /* @__PURE__ */ l.jsx(T0, { children: n })
        ] }),
        /* @__PURE__ */ l.jsx(wa, {}),
        /* @__PURE__ */ l.jsxs(j0, { children: [
          /* @__PURE__ */ l.jsx($0, { children: T.map(S) }),
          /* @__PURE__ */ l.jsx(P0, { children: D.map((M) => /* @__PURE__ */ l.jsx(O0, { children: M.map(S) }, M.join("-"))) })
        ] }),
        /* @__PURE__ */ l.jsx(wa, {}),
        /* @__PURE__ */ l.jsx(D0, { children: g("color_picker.recent") }),
        /* @__PURE__ */ l.jsxs(F0, { children: [
          x.current.length > 0 ? x.current.map((M) => /* @__PURE__ */ l.jsx(
            ic,
            {
              $color: M,
              onClick: () => {
                h(M), d(M);
              }
            },
            M
          )) : /* @__PURE__ */ l.jsx(B0, {}),
          /* @__PURE__ */ l.jsx(
            N0,
            {
              onClick: () => p(!0),
              title: g("color_picker.add"),
              children: /* @__PURE__ */ l.jsx(Dt, {})
            }
          )
        ] })
      ]
    }
  ) : null;
}, _0 = te(so)`
  & .MuiPaper-root {
    border-radius: 8px;
    padding: 4px 0px;
    margin-left: -4px;
    max-width: 220px;
  }
  & .MuiList-root {
    padding: 0;
  }
`, R0 = te(nn)`
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
`, T0 = te("div")`
  color: ${P.palette.text.primary};
`, k0 = te.div`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  margin-top: 0px;
  border: 1px solid ${P.palette.grey[300]};
  border-radius: 4px;
`, j0 = te.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
`, $0 = te.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 8px 8px 0px 8px;
  justify-content: flex-start;
  gap: 4px;
`, P0 = te.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 8px;
  gap: 4px;
`, O0 = te.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`, ic = te.button`
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
`, M0 = te(ic)`
  display: flex;
  align-items: center;
  justify-content: center;
`, A0 = (e) => {
  const t = parseInt(e.slice(1), 16), n = t >> 16 & 255, o = t >> 8 & 255, r = t & 255;
  return 0.2126 * n + 0.7152 * o + 0.0722 * r > 160;
}, I0 = te(Bt)`
  width: 10px;
  height: 10px;
  stroke-width: 3px;
  color: ${({ $color: e }) => A0(e) ? P.palette.common.black : P.palette.common.white};
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
`, F0 = te.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 8px;
  margin: 0px 4px;
  justify-content: flex-start;
  gap: 4px;
`, N0 = te("button")`
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
`, B0 = te.div`
  display: none;
`, z0 = (e) => {
  const { t } = He(), [n, o] = oe(null), [r, i] = oe(P.palette.common.white), [s, a] = oe($t.Thin), [c, f] = oe(!1), [h, m] = oe(!1);
  Be(() => {
    n && e.onChange({
      color: r,
      style: s,
      border: n
    });
  }, [r, s, n]);
  const p = e.onClose;
  Be(() => {
    o(null), i(P.palette.common.black), a($t.Thin);
  }, [e.open]);
  const x = ie(null), g = ie(null);
  return /* @__PURE__ */ l.jsx(
    Sa,
    {
      open: e.open,
      onClose: p,
      anchorEl: e.anchorEl.current,
      anchorOrigin: e.anchorOrigin || { vertical: "bottom", horizontal: "left" },
      transformOrigin: e.transformOrigin || { vertical: "top", horizontal: "left" },
      children: /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsxs(q0, { children: [
          /* @__PURE__ */ l.jsxs(U0, { children: [
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
                  children: /* @__PURE__ */ l.jsx(Ya, {})
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
                  children: /* @__PURE__ */ l.jsx(cf, {})
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
                  children: /* @__PURE__ */ l.jsx(af, {})
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
                  children: /* @__PURE__ */ l.jsx(lf, {})
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
                  children: /* @__PURE__ */ l.jsx(pf, {})
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
                  children: /* @__PURE__ */ l.jsx(df, {})
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
                  children: /* @__PURE__ */ l.jsx(mf, {})
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
                  children: /* @__PURE__ */ l.jsx(ff, {})
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
                  children: /* @__PURE__ */ l.jsx(sf, {})
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
                  children: /* @__PURE__ */ l.jsx(uf, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(W0, {}),
          /* @__PURE__ */ l.jsxs(G0, { children: [
            /* @__PURE__ */ l.jsxs(
              Ea,
              {
                onClick: () => f(!0),
                ref: x,
                children: [
                  /* @__PURE__ */ l.jsx(Ga, {}),
                  /* @__PURE__ */ l.jsx("div", { style: { flexGrow: 2 }, children: "Border color" }),
                  /* @__PURE__ */ l.jsx(_a, {})
                ]
              }
            ),
            /* @__PURE__ */ l.jsxs(
              Ea,
              {
                onClick: () => m(!0),
                ref: g,
                children: [
                  /* @__PURE__ */ l.jsx(hf, {}),
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
            onChange: (d) => {
              i(d), f(!1);
            },
            onClose: () => {
              f(!1);
            },
            anchorEl: x,
            open: c,
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
            open: h,
            onClose: () => {
              m(!1);
            },
            anchorEl: g.current,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            children: /* @__PURE__ */ l.jsxs(Y0, { children: [
              /* @__PURE__ */ l.jsxs(
                Gr,
                {
                  onClick: () => {
                    a($t.Thin), m(!1);
                  },
                  $checked: s === $t.Thin,
                  children: [
                    /* @__PURE__ */ l.jsx(Yr, { children: "Thin" }),
                    /* @__PURE__ */ l.jsx(L0, {})
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
                    /* @__PURE__ */ l.jsx(H0, {})
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
`, L0 = ne("div")`
  width: 68px;
  border-top: 1px solid ${P.palette.grey[900]};
`, H0 = ne("div")`
  width: 68px;
  border-top: 2px solid ${P.palette.grey[900]};
`, V0 = ne("div")`
  width: 68px;
  border-top: 3px solid ${P.palette.grey[900]};
`, W0 = ne("div")`
  width: 100%;
  margin: auto;
  border-top: 1px solid ${P.palette.grey[200]};
`, U0 = ne("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
`, G0 = ne("div")`
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
`, Y0 = ne("div")`
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
`, q0 = ne("div")`
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
`, K0 = (e) => {
  const { t } = He(), [n, o] = oe(e.numFmt), r = () => {
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
        /* @__PURE__ */ l.jsxs(X0, { children: [
          t("num_fmt.title"),
          /* @__PURE__ */ l.jsx(
            Z0,
            {
              onClick: r,
              title: t("num_fmt.close"),
              tabIndex: 0,
              onKeyDown: (s) => {
                s.key === "Enter" && e.onClose();
              },
              children: /* @__PURE__ */ l.jsx(Vo, {})
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(J0, { children: /* @__PURE__ */ l.jsx(
          Q0,
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
        /* @__PURE__ */ l.jsx(ex, { children: /* @__PURE__ */ l.jsxs(
          tx,
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
}, X0 = te("div")`
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter;
  padding: 0px 12px;
  justify-content: space-between;
  border-bottom: 1px solid ${P.palette.grey[300]};
`, Z0 = te("div")`
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
`, J0 = te("div")`
  font-size: 12px;
  margin: 12px;
`, Q0 = te(xi)`
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
`, ex = te("div")`
  color: #757575;
  display: flex;
  align-items: center;
  border-top: 1px solid ${P.palette.grey[300]};
  font-family: Inter;
  justify-content: flex-end;
  padding: 12px;
`, tx = te("div")`
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
function nx(e) {
  if (e === "general")
    return "#,##0.000";
  const t = e.replace(/\.0/g, ".00");
  return t.includes(".") ? t : t.includes("0") ? t.replace(/0/g, "0.0") : t.includes("#") ? t.replace(/#([^#,]|$)/g, "0.0$1") : e;
}
function ox(e) {
  if (e === "general")
    return "#,##0.0";
  let t = e.replace(/\.0/g, ".");
  return t = t.replace(/0\.([^0]|$)/, "0$1"), t;
}
var et = /* @__PURE__ */ ((e) => (e.AUTO = "general", e.CURRENCY_EUR = '"€"#,##0.00', e.CURRENCY_USD = '"$"#,##0.00', e.CURRENCY_GBP = '"£"#,##0.00', e.PERCENTAGE = "0.00%", e))(et || {});
const rx = (e) => {
  const { t } = He(), [n, o] = oe(!1), [r, i] = oe(!1), s = ie(null), a = e.formatOptions, c = De(
    (T) => {
      e.onChange(T), o(!1);
    },
    [e.onChange]
  ), f = e.numFmt === et.AUTO, h = e.numFmt === a.number_fmt, m = e.numFmt === et.PERCENTAGE, p = e.numFmt === et.CURRENCY_EUR, x = e.numFmt === et.CURRENCY_USD, g = e.numFmt === et.CURRENCY_GBP, d = e.numFmt === a.short_date, v = e.numFmt === a.long_date, S = !(f || h || m || p || x || g || d || v);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      sx,
      {
        onClick: () => o(!0),
        ref: s,
        children: e.children
      }
    ),
    /* @__PURE__ */ l.jsxs(
      ix,
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
          /* @__PURE__ */ l.jsx(vt, { onClick: () => c(et.AUTO), children: /* @__PURE__ */ l.jsxs(Ct, { children: [
            /* @__PURE__ */ l.jsx(wt, { $active: f }),
            t("toolbar.format_menu.auto")
          ] }) }),
          /* @__PURE__ */ l.jsx(Ao, {}),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => c(a.number_fmt),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: h }),
                  t("toolbar.format_menu.number")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: a.number_example })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => c(et.PERCENTAGE),
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
              onClick: () => c(et.CURRENCY_EUR),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: p }),
                  t("toolbar.format_menu.currency_eur")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: t("toolbar.format_menu.currency_eur_example") })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => c(et.CURRENCY_USD),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: x }),
                  t("toolbar.format_menu.currency_usd")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: t("toolbar.format_menu.currency_usd_example") })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => c(et.CURRENCY_GBP),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: g }),
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
              onClick: () => c(a.short_date),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: d }),
                  t("toolbar.format_menu.date_short")
                ] }),
                /* @__PURE__ */ l.jsx(Wt, { children: a.short_date_example })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => c(a.long_date),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: v }),
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
      K0,
      {
        numFmt: e.numFmt,
        onChange: c,
        open: r,
        onClose: () => i(!1),
        onExited: e.onExited
      }
    )
  ] });
}, ix = X(so)`
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
`, sx = X("div")`
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
function ax(e) {
  const [t, n] = oe(!1), [o, r] = oe(!1), [i, s] = oe(!1), [a, c] = oe(!1), [f, h] = oe(!1), m = ie(null), p = ie(null), x = ie(null), g = ie(null), { t: d } = He(), { canEdit: v } = e, S = () => g.current?.scrollBy({ left: -200, behavior: "smooth" }), T = () => g.current?.scrollBy({ left: 200, behavior: "smooth" }), C = De(() => {
    if (!g.current) return;
    const { scrollLeft: E, scrollWidth: _, clientWidth: I } = g.current;
    c(E > 0), h(E < _ - I);
  }, []);
  Be(() => {
    const E = g.current;
    if (E)
      return C(), E.addEventListener("scroll", C), () => E.removeEventListener("scroll", C);
  }, [C]);
  let w;
  switch (e.formatOptions.currency) {
    case "EUR":
      w = /* @__PURE__ */ l.jsx(du, {});
      break;
    case "USD":
      w = /* @__PURE__ */ l.jsx(uu, {});
      break;
    case "GBP":
      w = /* @__PURE__ */ l.jsx(cu, {});
      break;
  }
  return /* @__PURE__ */ l.jsxs(lx, { children: [
    a && /* @__PURE__ */ l.jsx(
      ge,
      {
        title: d("toolbar.scroll_left"),
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
        children: /* @__PURE__ */ l.jsx(Ta, { $direction: "left", onClick: S, children: /* @__PURE__ */ l.jsx(zc, {}) })
      }
    ),
    /* @__PURE__ */ l.jsxs(cx, { ref: g, children: [
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.undo"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onUndo,
            disabled: !e.canUndo,
            children: /* @__PURE__ */ l.jsx(Lc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.redo"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onRedo,
            disabled: !e.canRedo,
            children: /* @__PURE__ */ l.jsx(Hc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.copy_styles"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onCopyStyles,
            children: /* @__PURE__ */ l.jsx(Vc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.clear_formatting"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onClearFormatting();
            },
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Wc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.euro"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(
                e.formatOptions.currency_format
              );
            },
            disabled: !v,
            children: w
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.percentage"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(et.PERCENTAGE);
            },
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Uc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.decimal_places_decrease"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(
                ox(e.numFmt)
              );
            },
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Gc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.decimal_places_increase"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(
                nx(e.numFmt)
              );
            },
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Yc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(
          rx,
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
            children: /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.format_number"), children: /* @__PURE__ */ l.jsxs(
              xe,
              {
                type: "button",
                $pressed: !1,
                disabled: !v,
                sx: {
                  width: "40px",
                  // Keep in sync with anchorOrigin in FormatMenu above
                  padding: "0px 4px"
                },
                children: [
                  "123",
                  /* @__PURE__ */ l.jsx(Ho, {})
                ]
              }
            ) })
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.decrease_font_size"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !v,
            onClick: () => {
              e.onIncreaseFontSize(-1);
            },
            children: /* @__PURE__ */ l.jsx(qc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ux, { children: e.fontSize }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.increase_font_size"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !v,
            onClick: () => {
              e.onIncreaseFontSize(1);
            },
            children: /* @__PURE__ */ l.jsx(Dt, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.bold"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.bold,
            onClick: () => e.onToggleBold(!e.bold),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Kc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.italic"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.italic,
            onClick: () => e.onToggleItalic(!e.italic),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Xc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.underline"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.underline,
            onClick: () => e.onToggleUnderline(!e.underline),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Zc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.strike_through"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.strike,
            onClick: () => e.onToggleStrike(!e.strike),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Jc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.font_color"), children: /* @__PURE__ */ l.jsxs(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !v,
            ref: m,
            onClick: () => n(!0),
            children: [
              /* @__PURE__ */ l.jsx(Qc, {}),
              /* @__PURE__ */ l.jsx(Ra, { color: e.fontColor })
            ]
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.fill_color"), children: /* @__PURE__ */ l.jsxs(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !v,
            ref: p,
            onClick: () => r(!0),
            children: [
              /* @__PURE__ */ l.jsx(qa, {}),
              /* @__PURE__ */ l.jsx(Ra, { color: e.fillColor })
            ]
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.borders.title"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => s(!0),
            ref: x,
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(Ya, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.align_left"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.horizontalAlign === "left",
            onClick: () => e.onToggleHorizontalAlign(
              e.horizontalAlign === "left" ? "general" : "left"
            ),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(eu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.align_center"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.horizontalAlign === "center",
            onClick: () => e.onToggleHorizontalAlign(
              e.horizontalAlign === "center" ? "general" : "center"
            ),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(tu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.align_right"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.horizontalAlign === "right",
            onClick: () => e.onToggleHorizontalAlign(
              e.horizontalAlign === "right" ? "general" : "right"
            ),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(nu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.vertical_align_top"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "top",
            onClick: () => e.onToggleVerticalAlign("top"),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(ou, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.vertical_align_middle"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "center",
            onClick: () => e.onToggleVerticalAlign("center"),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(rf, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.vertical_align_bottom"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "bottom",
            onClick: () => e.onToggleVerticalAlign("bottom"),
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(ru, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.wrap_text"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.wrapText === !0,
            onClick: () => {
              e.onToggleWrapText(!e.wrapText);
            },
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(iu, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Ut, {}),
      /* @__PURE__ */ l.jsxs(Pt, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.show_hide_grid_lines"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => e.onToggleShowGridLines(!e.showGridLines),
            disabled: !v,
            children: e.showGridLines ? /* @__PURE__ */ l.jsx(su, {}) : /* @__PURE__ */ l.jsx(au, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: d("toolbar.selected_png"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onDownloadPNG();
            },
            disabled: !v,
            children: /* @__PURE__ */ l.jsx(lu, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(
        er,
        {
          color: e.fontColor,
          defaultColor: "#000000",
          title: d("color_picker.default"),
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
          title: d("color_picker.default"),
          onChange: (E) => {
            E !== null && e.onFillColorPicked(E), r(!1);
          },
          onClose: () => {
            r(!1);
          },
          anchorEl: p,
          open: o,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" }
        }
      ),
      /* @__PURE__ */ l.jsx(
        z0,
        {
          onChange: (E) => {
            e.onBorderChanged(E);
          },
          onClose: () => {
            s(!1);
          },
          anchorEl: x,
          open: i
        }
      )
    ] }),
    f && /* @__PURE__ */ l.jsx(
      ge,
      {
        title: d("toolbar.scroll_right"),
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
        children: /* @__PURE__ */ l.jsx(Ta, { $direction: "right", onClick: T, children: /* @__PURE__ */ l.jsx(bi, {}) })
      }
    )
  ] });
}
const lx = ne("div")`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme: e }) => e.palette.background.paper};
  height: ${Yo}px;
  border-bottom: 1px solid ${({ theme: e }) => e.palette.grey[300]};
  border-radius: 4px 4px 0px 0px;
`, cx = ne("div")`
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
}), ux = ne("div")({
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
function dx(e) {
  return lt("MuiList", e);
}
Ye("MuiList", ["root", "padding", "dense", "subheader"]);
const px = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: o,
    subheader: r
  } = e;
  return xt({
    root: ["root", !n && "padding", o && "dense", r && "subheader"]
  }, dx, t);
}, fx = ne("ul", {
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
}), sc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiList"
  }), {
    children: r,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: c = !1,
    subheader: f,
    ...h
  } = o, m = k.useMemo(() => ({
    dense: a
  }), [a]), p = {
    ...o,
    component: s,
    dense: a,
    disablePadding: c
  }, x = px(p);
  return /* @__PURE__ */ l.jsx(tr.Provider, {
    value: m,
    children: /* @__PURE__ */ l.jsxs(fx, {
      as: s,
      className: _e(x.root, i),
      ref: n,
      ownerState: p,
      ...h,
      children: [f, r]
    })
  });
});
process.env.NODE_ENV !== "production" && (sc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: u.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: u.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: u.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
function qr(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ka(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ac(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Dn(e, t, n, o, r, i) {
  let s = !1, a = r(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = o ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !ac(a, i) || c)
      a = r(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const lc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: o,
    autoFocus: r = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: c = !1,
    disableListWrap: f = !1,
    onKeyDown: h,
    variant: m = "selectedMenu",
    ...p
  } = t, x = k.useRef(null), g = k.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Qt(() => {
    r && x.current.focus();
  }, [r]), k.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (C, {
      direction: w
    }) => {
      const E = !x.current.style.width;
      if (C.clientHeight < x.current.clientHeight && E) {
        const _ = `${Xl(tn(C))}px`;
        x.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = _, x.current.style.width = `calc(100% + ${_})`;
      }
      return x.current;
    }
  }), []);
  const d = (C) => {
    const w = x.current, E = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      h && h(C);
      return;
    }
    const I = Hn(rt(w));
    if (E === "ArrowDown")
      C.preventDefault(), Dn(w, I, f, c, qr);
    else if (E === "ArrowUp")
      C.preventDefault(), Dn(w, I, f, c, ka);
    else if (E === "Home")
      C.preventDefault(), Dn(w, null, f, c, qr);
    else if (E === "End")
      C.preventDefault(), Dn(w, null, f, c, ka);
    else if (E.length === 1) {
      const R = g.current, F = E.toLowerCase(), V = performance.now();
      R.keys.length > 0 && (V - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && F !== R.keys[0] && (R.repeating = !1)), R.lastTime = V, R.keys.push(F);
      const H = I && !R.repeating && ac(I, R);
      R.previousKeyMatched && (H || Dn(w, I, !1, c, qr, R)) ? C.preventDefault() : R.previousKeyMatched = !1;
    }
    h && h(C);
  }, v = Ge(x, n);
  let S = -1;
  k.Children.forEach(s, (C, w) => {
    if (!/* @__PURE__ */ k.isValidElement(C)) {
      S === w && (S += 1, S >= s.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && gn.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (m === "selectedMenu" && C.props.selected || S === -1) && (S = w), S === w && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (S += 1, S >= s.length && (S = -1));
  });
  const T = k.Children.map(s, (C, w) => {
    if (w === S) {
      const E = {};
      return i && (E.autoFocus = !0), C.props.tabIndex === void 0 && m === "selectedMenu" && (E.tabIndex = 0), /* @__PURE__ */ k.cloneElement(C, E);
    }
    return C;
  });
  return /* @__PURE__ */ l.jsx(sc, {
    role: "menu",
    ref: v,
    className: a,
    onKeyDown: d,
    tabIndex: r ? 0 : -1,
    ...p,
    children: T
  });
});
process.env.NODE_ENV !== "production" && (lc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: u.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: u.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: u.node,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: u.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: u.bool,
  /**
   * @ignore
   */
  onKeyDown: u.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: u.oneOf(["menu", "selectedMenu"])
});
function hx(e) {
  return lt("MuiMenu", e);
}
Ye("MuiMenu", ["root", "paper", "list"]);
const mx = {
  vertical: "top",
  horizontal: "right"
}, gx = {
  vertical: "top",
  horizontal: "left"
}, xx = (e) => {
  const {
    classes: t
  } = e;
  return xt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, hx, t);
}, bx = ne(Ni, {
  shouldForwardProp: (e) => Ti(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), yx = ne(tc, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), vx = ne(lc, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), cc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: r = !0,
    children: i,
    className: s,
    disableAutoFocusItem: a = !1,
    MenuListProps: c = {},
    onClose: f,
    open: h,
    PaperProps: m = {},
    PopoverClasses: p,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: g,
      ...d
    } = {},
    variant: v = "selectedMenu",
    slots: S = {},
    slotProps: T = {},
    ...C
  } = o, w = _i(), E = {
    ...o,
    autoFocus: r,
    disableAutoFocusItem: a,
    MenuListProps: c,
    onEntering: g,
    PaperProps: m,
    transitionDuration: x,
    TransitionProps: d,
    variant: v
  }, _ = xx(E), I = r && !a && h, R = k.useRef(null), F = (G, A) => {
    R.current && R.current.adjustStyleForScrollbar(G, {
      direction: w ? "rtl" : "ltr"
    }), g && g(G, A);
  }, V = (G) => {
    G.key === "Tab" && (G.preventDefault(), f && f(G, "tabKeyDown"));
  };
  let H = -1;
  k.Children.map(i, (G, A) => {
    /* @__PURE__ */ k.isValidElement(G) && (process.env.NODE_ENV !== "production" && gn.isFragment(G) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), G.props.disabled || (v === "selectedMenu" && G.props.selected || H === -1) && (H = A));
  });
  const y = {
    slots: S,
    slotProps: {
      list: c,
      transition: d,
      paper: m,
      ...T
    }
  }, D = Wl({
    elementType: S.root,
    externalSlotProps: T.root,
    ownerState: E,
    className: [_.root, s]
  }), [M, O] = Xe("paper", {
    className: _.paper,
    elementType: yx,
    externalForwardedProps: y,
    shouldForwardComponentProp: !0,
    ownerState: E
  }), [B, j] = Xe("list", {
    className: _e(_.list, c.className),
    elementType: vx,
    shouldForwardComponentProp: !0,
    externalForwardedProps: y,
    getSlotProps: (G) => ({
      ...G,
      onKeyDown: (A) => {
        V(A), G.onKeyDown?.(A);
      }
    }),
    ownerState: E
  }), Q = typeof y.slotProps.transition == "function" ? y.slotProps.transition(E) : y.slotProps.transition;
  return /* @__PURE__ */ l.jsx(bx, {
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? mx : gx,
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
      paper: O,
      backdrop: typeof T.backdrop == "function" ? T.backdrop(E) : T.backdrop,
      transition: {
        ...Q,
        onEntering: (...G) => {
          F(...G), Q?.onEntering?.(...G);
        }
      }
    },
    open: h,
    ref: n,
    transitionDuration: x,
    ownerState: E,
    ...C,
    classes: p,
    children: /* @__PURE__ */ l.jsx(B, {
      actions: R,
      autoFocus: r && (H === -1 || a),
      autoFocusItem: I,
      variant: v,
      ...j,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (cc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: u.oneOfType([Tt, u.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: u.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: u.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: u.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: u.func,
  /**
   * If `true`, the component is shown.
   */
  open: u.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: u.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: u.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: u.shape({
    backdrop: u.oneOfType([u.func, u.object]),
    list: u.oneOfType([u.func, u.object]),
    paper: u.oneOfType([u.func, u.object]),
    root: u.oneOfType([u.func, u.object]),
    transition: u.oneOfType([u.func, u.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: u.shape({
    backdrop: u.elementType,
    list: u.elementType,
    paper: u.elementType,
    root: u.elementType,
    transition: u.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: u.oneOfType([u.oneOf(["auto"]), u.number, u.shape({
    appear: u.number,
    enter: u.number,
    exit: u.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: u.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: u.oneOf(["menu", "selectedMenu"])
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
    const t = _l(nr.create).current, [n, o] = k.useState(!1);
    return t.shouldMount = n, t.setShouldMount = o, k.useEffect(t.mountEffect, [n]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Cx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function wx() {
  return nr.use();
}
function Cx() {
  let e, t;
  const n = new Promise((o, r) => {
    e = o, t = r;
  });
  return n.resolve = e, n.reject = t, n;
}
function uc(e) {
  const {
    className: t,
    classes: n,
    pulsate: o = !1,
    rippleX: r,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: f
  } = e, [h, m] = k.useState(!1), p = _e(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + r
  }, g = _e(n.child, h && n.childLeaving, o && n.childPulsate);
  return !a && !h && m(!0), k.useEffect(() => {
    if (!a && c != null) {
      const d = setTimeout(c, f);
      return () => {
        clearTimeout(d);
      };
    }
  }, [c, a, f]), /* @__PURE__ */ l.jsx("span", {
    className: p,
    style: x,
    children: /* @__PURE__ */ l.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object.isRequired,
  className: u.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: u.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: u.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: u.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: u.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: u.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: u.number,
  /**
   * exit delay
   */
  timeout: u.number.isRequired
});
const tt = Ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), mi = 550, Ex = 80, Sx = yi`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, _x = yi`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Rx = yi`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Tx = ne("span", {
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
}), kx = ne(uc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${tt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Sx};
    animation-duration: ${mi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${tt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${tt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${tt.childLeaving} {
    opacity: 0;
    animation-name: ${_x};
    animation-duration: ${mi}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${tt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Rx};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, dc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: r = !1,
    classes: i = {},
    className: s,
    ...a
  } = o, [c, f] = k.useState([]), h = k.useRef(0), m = k.useRef(null);
  k.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const p = k.useRef(!1), x = fn(), g = k.useRef(null), d = k.useRef(null), v = k.useCallback((w) => {
    const {
      pulsate: E,
      rippleX: _,
      rippleY: I,
      rippleSize: R,
      cb: F
    } = w;
    f((V) => [...V, /* @__PURE__ */ l.jsx(kx, {
      classes: {
        ripple: _e(i.ripple, tt.ripple),
        rippleVisible: _e(i.rippleVisible, tt.rippleVisible),
        ripplePulsate: _e(i.ripplePulsate, tt.ripplePulsate),
        child: _e(i.child, tt.child),
        childLeaving: _e(i.childLeaving, tt.childLeaving),
        childPulsate: _e(i.childPulsate, tt.childPulsate)
      },
      timeout: mi,
      pulsate: E,
      rippleX: _,
      rippleY: I,
      rippleSize: R
    }, h.current)]), h.current += 1, m.current = F;
  }, [i]), S = k.useCallback((w = {}, E = {}, _ = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: R = r || E.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = E;
    if (w?.type === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    w?.type === "touchstart" && (p.current = !0);
    const V = F ? null : d.current, H = V ? V.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let y, D, M;
    if (R || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      y = Math.round(H.width / 2), D = Math.round(H.height / 2);
    else {
      const {
        clientX: O,
        clientY: B
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      y = Math.round(O - H.left), D = Math.round(B - H.top);
    }
    if (R)
      M = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const O = Math.max(Math.abs((V ? V.clientWidth : 0) - y), y) * 2 + 2, B = Math.max(Math.abs((V ? V.clientHeight : 0) - D), D) * 2 + 2;
      M = Math.sqrt(O ** 2 + B ** 2);
    }
    w?.touches ? g.current === null && (g.current = () => {
      v({
        pulsate: I,
        rippleX: y,
        rippleY: D,
        rippleSize: M,
        cb: _
      });
    }, x.start(Ex, () => {
      g.current && (g.current(), g.current = null);
    })) : v({
      pulsate: I,
      rippleX: y,
      rippleY: D,
      rippleSize: M,
      cb: _
    });
  }, [r, v, x]), T = k.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), C = k.useCallback((w, E) => {
    if (x.clear(), w?.type === "touchend" && g.current) {
      g.current(), g.current = null, x.start(0, () => {
        C(w, E);
      });
      return;
    }
    g.current = null, f((_) => _.length > 0 ? _.slice(1) : _), m.current = E;
  }, [x]);
  return k.useImperativeHandle(n, () => ({
    pulsate: T,
    start: S,
    stop: C
  }), [T, S, C]), /* @__PURE__ */ l.jsx(Tx, {
    className: _e(tt.root, i.root, s),
    ref: d,
    ...a,
    children: /* @__PURE__ */ l.jsx(ji, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (dc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: u.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string
});
function jx(e) {
  return lt("MuiButtonBase", e);
}
const $x = Ye("MuiButtonBase", ["root", "disabled", "focusVisible"]), Px = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: o,
    classes: r
  } = e, s = xt({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, jx, r);
  return n && o && (s.root += ` ${o}`), s;
}, Ox = ne("button", {
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
  [`&.${$x.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), pc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: r,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: f = !1,
    disableRipple: h = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    focusVisibleClassName: x,
    LinkComponent: g = "a",
    onBlur: d,
    onClick: v,
    onContextMenu: S,
    onDragLeave: T,
    onFocus: C,
    onFocusVisible: w,
    onKeyDown: E,
    onKeyUp: _,
    onMouseDown: I,
    onMouseLeave: R,
    onMouseUp: F,
    onTouchEnd: V,
    onTouchMove: H,
    onTouchStart: y,
    tabIndex: D = 0,
    TouchRippleProps: M,
    touchRippleRef: O,
    type: B,
    ...j
  } = o, Q = k.useRef(null), G = wx(), A = Ge(G.ref, O), [b, $] = k.useState(!1);
  f && b && $(!1), k.useImperativeHandle(r, () => ({
    focusVisible: () => {
      $(!0), Q.current.focus();
    }
  }), []);
  const z = G.shouldMount && !h && !f;
  k.useEffect(() => {
    b && p && !h && G.pulsate();
  }, [h, p, b, G]);
  const N = Et(G, "start", I, m), K = Et(G, "stop", S, m), Y = Et(G, "stop", T, m), U = Et(G, "stop", F, m), Z = Et(G, "stop", (se) => {
    b && se.preventDefault(), R && R(se);
  }, m), ee = Et(G, "start", y, m), q = Et(G, "stop", V, m), J = Et(G, "stop", H, m), W = Et(G, "stop", (se) => {
    qo(se.target) || $(!1), d && d(se);
  }, !1), ce = It((se) => {
    Q.current || (Q.current = se.currentTarget), qo(se.target) && ($(!0), w && w(se)), C && C(se);
  }), pe = () => {
    const se = Q.current;
    return c && c !== "button" && !(se.tagName === "A" && se.href);
  }, je = It((se) => {
    p && !se.repeat && b && se.key === " " && G.stop(se, () => {
      G.start(se);
    }), se.target === se.currentTarget && pe() && se.key === " " && se.preventDefault(), E && E(se), se.target === se.currentTarget && pe() && se.key === "Enter" && !f && (se.preventDefault(), v && v(se));
  }), Te = It((se) => {
    p && se.key === " " && b && !se.defaultPrevented && G.stop(se, () => {
      G.pulsate(se);
    }), _ && _(se), v && se.target === se.currentTarget && pe() && se.key === " " && !se.defaultPrevented && v(se);
  });
  let Ae = c;
  Ae === "button" && (j.href || j.to) && (Ae = g);
  const ue = {};
  if (Ae === "button") {
    const se = !!j.formAction;
    ue.type = B === void 0 && !se ? "button" : B, ue.disabled = f;
  } else
    !j.href && !j.to && (ue.role = "button"), f && (ue["aria-disabled"] = f);
  const Ne = Ge(n, Q), $e = {
    ...o,
    centerRipple: i,
    component: c,
    disabled: f,
    disableRipple: h,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: D,
    focusVisible: b
  }, Re = Px($e);
  return /* @__PURE__ */ l.jsxs(Ox, {
    as: Ae,
    className: _e(Re.root, a),
    ownerState: $e,
    onBlur: W,
    onClick: v,
    onContextMenu: K,
    onFocus: ce,
    onKeyDown: je,
    onKeyUp: Te,
    onMouseDown: N,
    onMouseLeave: Z,
    onMouseUp: U,
    onDragLeave: Y,
    onTouchEnd: q,
    onTouchMove: J,
    onTouchStart: ee,
    ref: Ne,
    tabIndex: f ? -1 : D,
    type: B,
    ...ue,
    ...j,
    children: [s, z ? /* @__PURE__ */ l.jsx(dc, {
      ref: A,
      center: i,
      ...M
    }) : null]
  });
});
function Et(e, t, n, o = !1) {
  return It((r) => (n && n(r), o || e[t](r), !0));
}
process.env.NODE_ENV !== "production" && (pc.propTypes = {
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
  centerRipple: u.bool,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Gl,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: u.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: u.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: u.string,
  /**
   * @ignore
   */
  formAction: u.oneOfType([u.func, u.string]),
  /**
   * @ignore
   */
  href: u.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: u.elementType,
  /**
   * @ignore
   */
  onBlur: u.func,
  /**
   * @ignore
   */
  onClick: u.func,
  /**
   * @ignore
   */
  onContextMenu: u.func,
  /**
   * @ignore
   */
  onDragLeave: u.func,
  /**
   * @ignore
   */
  onFocus: u.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: u.func,
  /**
   * @ignore
   */
  onKeyDown: u.func,
  /**
   * @ignore
   */
  onKeyUp: u.func,
  /**
   * @ignore
   */
  onMouseDown: u.func,
  /**
   * @ignore
   */
  onMouseLeave: u.func,
  /**
   * @ignore
   */
  onMouseUp: u.func,
  /**
   * @ignore
   */
  onTouchEnd: u.func,
  /**
   * @ignore
   */
  onTouchMove: u.func,
  /**
   * @ignore
   */
  onTouchStart: u.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @default 0
   */
  tabIndex: u.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: u.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: u.oneOfType([u.func, u.shape({
    current: u.shape({
      pulsate: u.func.isRequired,
      start: u.func.isRequired,
      stop: u.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string])
});
const ja = Ye("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), $a = Ye("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Pa = Ye("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Mx(e) {
  return lt("MuiMenuItem", e);
}
const Fn = Ye("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Ax = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Ix = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: o,
    disableGutters: r,
    selected: i,
    classes: s
  } = e, c = xt({
    root: ["root", n && "dense", t && "disabled", !r && "gutters", o && "divider", i && "selected"]
  }, Mx, s);
  return {
    ...s,
    ...c
  };
}, Dx = ne(pc, {
  shouldForwardProp: (e) => Ti(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Ax
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
}))), fc = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const o = ut({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: r = !1,
    component: i = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: c = !1,
    focusVisibleClassName: f,
    role: h = "menuitem",
    tabIndex: m,
    className: p,
    ...x
  } = o, g = k.useContext(tr), d = k.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: c
  }), [g.dense, s, c]), v = k.useRef(null);
  Qt(() => {
    r && (v.current ? v.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [r]);
  const S = {
    ...o,
    dense: d.dense,
    divider: a,
    disableGutters: c
  }, T = Ix(o), C = Ge(v, n);
  let w;
  return o.disabled || (w = m !== void 0 ? m : -1), /* @__PURE__ */ l.jsx(tr.Provider, {
    value: d,
    children: /* @__PURE__ */ l.jsx(Dx, {
      ref: C,
      role: h,
      tabIndex: w,
      component: i,
      focusVisibleClassName: _e(T.focusVisible, f),
      className: _e(T.root, p),
      ...x,
      ownerState: S,
      classes: T
    })
  });
});
process.env.NODE_ENV !== "production" && (fc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: u.bool,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: u.bool,
  /**
   * @ignore
   */
  disabled: u.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: u.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: u.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: u.string,
  /**
   * @ignore
   */
  role: u.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: u.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @default 0
   */
  tabIndex: u.number
});
function Fx(e) {
  return ["#FFF", "#FFFFFF"].includes(e);
}
const Nx = (e) => {
  const {
    open: t,
    onClose: n,
    anchorEl: o,
    onSheetSelected: r,
    sheetOptionsList: i,
    selectedIndex: s
  } = e, a = i.some((c) => !Fx(c.color));
  return /* @__PURE__ */ l.jsx(
    Bx,
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
      children: i.map((c, f) => /* @__PURE__ */ l.jsxs(
        zx,
        {
          onClick: () => r(f),
          children: [
            f === s ? /* @__PURE__ */ l.jsx(
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
            a && /* @__PURE__ */ l.jsx(Lx, { style: { backgroundColor: c.color } }),
            /* @__PURE__ */ l.jsx(
              Hx,
              {
                style: {
                  fontWeight: f === s ? "bold" : "normal",
                  color: c.state === "visible" ? "#333" : "#888"
                },
                children: c.name
              }
            )
          ]
        },
        c.sheetId
      ))
    }
  );
}, Bx = X(cc)({
  "& .MuiPaper-root": {
    borderRadius: 8,
    padding: 4
  },
  "& .MuiList-padding": {
    padding: 0
  }
}), zx = X(fc)({
  padding: 8,
  borderRadius: 4
}), Lx = X("div")`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin-right: 8px;
`, Hx = X("div")`
  font-size: 12px;
  color: #333;
`;
function Vx({
  open: e,
  onClose: t,
  onDelete: n,
  sheetName: o
}) {
  const { t: r } = He();
  return /* @__PURE__ */ l.jsx(Va, { open: e, onClose: t, children: /* @__PURE__ */ l.jsxs(Wx, { children: [
    /* @__PURE__ */ l.jsx(Ux, { children: /* @__PURE__ */ l.jsx(Jt, {}) }),
    /* @__PURE__ */ l.jsx(Gx, { children: r("sheet_delete.title") }),
    /* @__PURE__ */ l.jsx(Yx, { children: r("sheet_delete.message", {
      sheetName: o
    }) }),
    /* @__PURE__ */ l.jsxs(qx, { children: [
      /* @__PURE__ */ l.jsx(Kx, { onClick: n, autoFocus: !0, children: r("sheet_delete.confirm") }),
      /* @__PURE__ */ l.jsx(Xx, { onClick: t, children: r("sheet_delete.cancel") })
    ] })
  ] }) });
}
const Wx = te.div`
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
`, Ux = te.div`
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
`, Gx = te.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${P.palette.grey[900]};
  text-align: center;
`, Yx = te.p`
  margin: 0;
  text-align: center;
  color: ${P.palette.grey[900]};
  font-size: 12px;
`, qx = te.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  width: 100%;
`, Kx = te(lo)`
  background-color: ${P.palette.error.main};
  color: ${P.palette.common.white};
  text-transform: none;
  &:hover {
    background-color: ${P.palette.error.dark};
  }
`, Xx = te(lo)`
  background-color: ${P.palette.grey[200]};
  color: ${P.palette.grey[700]};
  text-transform: none;
  &:hover {
    background-color: ${P.palette.grey[300]};
  }
`;
function Zx(e) {
  const { name: t, color: n, selected: o, workbookState: r, onSelected: i } = e, [s, a] = oe(null), [c, f] = oe(!1), h = ie(null), m = !!s, { t: p } = He(), x = (O) => {
    a(O.currentTarget);
  }, g = () => {
    a(null);
  }, d = (O) => {
    O.preventDefault(), O.stopPropagation(), i(), a(O.currentTarget);
  }, [v, S] = oe(!1), T = () => {
    S(!0);
  }, C = () => {
    S(!1);
  }, [w, E] = oe(!1), [_, I] = oe(t), R = ie(null), F = ie(null), [V, H] = oe(0);
  Be(() => {
    w && R.current && (R.current.focus(), R.current.select());
  }, [w]), Be(() => {
    w || I(t);
  }, [t, w]), gi(() => {
    if (w && F.current) {
      const O = F.current.offsetWidth;
      H(Math.max(O + 8, 6));
    }
  }, [_, w]);
  const y = () => {
    I(t), H(Math.max(t.length * 7 + 8, 6)), E(!0);
  }, D = () => {
    _.trim() !== "" ? (e.onRenamed(_.trim()), E(!1)) : (I(t), E(!1));
  }, M = () => {
    I(t), E(!1);
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      Qx,
      {
        $color: n,
        $selected: o,
        onClick: (O) => {
          w || i(), O.stopPropagation(), O.preventDefault();
        },
        onDoubleClick: (O) => {
          O.stopPropagation(), O.preventDefault(), y();
        },
        onContextMenu: d,
        onPointerDown: (O) => {
          const B = r.getEditingCell();
          B && pn(B.text, B.cursorStart) && (O.stopPropagation(), O.preventDefault());
        },
        ref: h,
        children: w ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(tb, { ref: F, children: _ || " " }),
          /* @__PURE__ */ l.jsx(
            nb,
            {
              inputRef: R,
              value: _,
              onChange: (O) => I(O.target.value),
              style: { width: `${V}px` },
              onKeyDown: (O) => {
                O.key === "Enter" ? (O.preventDefault(), D()) : O.key === "Escape" && (O.preventDefault(), M()), O.stopPropagation();
              },
              onBlur: () => {
                D();
              },
              onClick: (O) => O.stopPropagation(),
              spellCheck: !1
            }
          ),
          /* @__PURE__ */ l.jsx(Oa, { disableRipple: !0, disabled: !0, $active: !1, children: /* @__PURE__ */ l.jsx(Ho, {}) })
        ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(eb, { children: t }),
          /* @__PURE__ */ l.jsx(Oa, { onClick: x, disableRipple: !0, $active: m, children: /* @__PURE__ */ l.jsx(Ho, {}) })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Jx,
      {
        anchorEl: s,
        open: m,
        onClose: g,
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
                y(), g();
              },
              children: [
                /* @__PURE__ */ l.jsx(pu, {}),
                p("sheet_tab.rename")
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            zo,
            {
              onClick: () => {
                f(!0), g();
              },
              children: [
                /* @__PURE__ */ l.jsx(qa, {}),
                p("sheet_tab.change_color")
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            zo,
            {
              disabled: !e.canDelete,
              onClick: () => {
                e.onHideSheet(), g();
              },
              children: [
                /* @__PURE__ */ l.jsx(fu, {}),
                p("sheet_tab.hide_sheet")
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ob, {}),
          /* @__PURE__ */ l.jsxs(
            rb,
            {
              disabled: !e.canDelete,
              onClick: () => {
                T(), g();
              },
              children: [
                /* @__PURE__ */ l.jsx(Jt, {}),
                p("sheet_tab.delete")
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
        title: p("color_picker.no_fill"),
        onChange: (O) => {
          e.onColorChanged(O), f(!1);
        },
        onClose: () => {
          f(!1);
        },
        anchorEl: h,
        open: c,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "bottom", horizontal: "left" }
      }
    ),
    /* @__PURE__ */ l.jsx(
      Vx,
      {
        open: v,
        onClose: C,
        onDelete: () => {
          e.onDeleted(), C();
        },
        sheetName: t
      }
    )
  ] });
}
const Jx = X(so)`
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
})), Qx = X("div")`
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
`, eb = X("div")`
  font-size: 12px;
  margin-right: 5px;
  text-wrap: nowrap;
  user-select: none;
  width: 100%;
  text-align: center;
`, tb = X("span")`
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
`, nb = X(Ac)`
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
`, ob = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid ${P.palette.grey[200]};
`, rb = X(zo)`
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
function ib(e) {
  const { t } = He(), { workbookState: n, onSheetSelected: o, sheets: r, selectedIndex: i } = e, [s, a] = oe(null), c = !!s, f = (p) => {
    a(p.currentTarget);
  }, h = () => {
    a(null);
  }, m = r.map((p, x) => ({
    state: p.state,
    index: x,
    name: p.name,
    color: p.color,
    sheetId: p.sheetId
  })).filter((p) => p.state === "visible");
  return /* @__PURE__ */ l.jsxs(sb, { children: [
    /* @__PURE__ */ l.jsxs(cb, { children: [
      /* @__PURE__ */ l.jsx(hn, { title: t("navigation.add_sheet"), children: /* @__PURE__ */ l.jsx(xe, { $pressed: !1, onClick: e.onAddBlankSheet, children: /* @__PURE__ */ l.jsx(Dt, {}) }) }),
      /* @__PURE__ */ l.jsx(hn, { title: t("navigation.sheet_list"), children: /* @__PURE__ */ l.jsx(xe, { onClick: f, $pressed: !1, children: /* @__PURE__ */ l.jsx(hu, {}) }) })
    ] }),
    /* @__PURE__ */ l.jsx(ub, {}),
    /* @__PURE__ */ l.jsx(ab, { children: /* @__PURE__ */ l.jsx(lb, { children: m.map((p) => /* @__PURE__ */ l.jsx(
      Zx,
      {
        name: p.name,
        color: p.color,
        selected: p.index === i,
        onSelected: () => o(p.index),
        onColorChanged: (x) => {
          e.onSheetColorChanged(x);
        },
        onRenamed: (x) => {
          e.onSheetRenamed(x);
        },
        canDelete: m.length > 1,
        onDeleted: () => {
          e.onSheetDeleted();
        },
        onHideSheet: e.onHideSheet,
        workbookState: n
      },
      p.sheetId
    )) }) }),
    /* @__PURE__ */ l.jsxs(db, { children: [
      /* @__PURE__ */ l.jsx(hn, { title: t("regional_settings.open_regional_settings"), children: /* @__PURE__ */ l.jsxs(
        pb,
        {
          $pressed: !1,
          onClick: () => {
            e.onOpenRegionalSettings();
          },
          children: [
            ri(e.model.getLocale()),
            /* @__PURE__ */ l.jsx(fb, {}),
            t(
              `regional_settings.language.display_language.${e.model.getLanguage()}`
            )
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx(
        hb,
        {
          onClick: () => window.open("https://www.ironcalc.com", "_blank"),
          children: /* @__PURE__ */ l.jsx(xf, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      Nx,
      {
        anchorEl: s,
        open: c,
        onClose: h,
        sheetOptionsList: r,
        onSheetSelected: (p) => {
          o(p), h();
        },
        selectedIndex: i
      }
    )
  ] });
}
const sb = X("div")`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  height: ${bl}px;
  align-items: center;
  padding: 0px;
  font-family: Inter;
  overflow: hidden;
  background-color: ${P.palette.common.white};
  border-top: 1px solid ${P.palette.grey[300]};
`, ab = X("div")`
  flex-grow: 2;
  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: none;
  padding-left: 12px;
  display: flex;
  flex-direction: row;
  height: 100%;
`, lb = X("div")`
  display: flex;
`, cb = X("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 4px;
  padding: 0px 12px;
  @media (max-width: 769px) {
    padding: 0px 8px;
  }
`, ub = X("div")`
  height: 100%;
  width: 0px;
  @media (max-width: 769px) {
    border-right: 1px solid ${P.palette.grey[200]};
  }
`, db = X("div")`
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
`, pb = X(xe)`
  min-width: fit-content;
  padding: 4px 8px;
  color: ${P.palette.grey[600]};
  text-wrap: nowrap;
  gap: 8px;
`, fb = X("div")`
  width: 1px;
  height: 60%;
  background-color: ${P.palette.grey[300]};
`, hb = X("div")`
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
class mb {
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
function gb(e) {
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
    const s = e.canvas.getBoundingClientRect(), a = i.clientX - s.x, c = i.clientY - s.y, f = e.getCellByCoordinates(a, c);
    if (!f)
      return;
    const { row: h, column: m } = f, {
      range: [p, x, g, d]
    } = e.model.getSelectedView();
    if (h > g && (m <= d && m >= x || m < x && x - m < h - g || m > d && m - d < h - g)) {
      const v = {
        type: St.rowsDown,
        rowStart: g + 1,
        rowEnd: h,
        columnStart: x,
        columnEnd: d
      };
      e.workbookState.setExtendToArea(v), e.renderSheet();
    } else if (h < p && (m <= d && m >= x || m < x && x - m < p - h || m > d && m - d < p - h)) {
      const v = {
        type: St.rowsUp,
        rowStart: h,
        rowEnd: p,
        columnStart: x,
        columnEnd: d
      };
      e.workbookState.setExtendToArea(v), e.renderSheet();
    } else if (m > d && (h <= g && h >= p || h < p && p - h < m - d || h > g && h - g < m - d)) {
      const v = {
        type: St.columnsRight,
        rowStart: p,
        rowEnd: g,
        columnStart: d + 1,
        columnEnd: m
      };
      e.workbookState.setExtendToArea(v), e.renderSheet();
    } else if (m < x && (h <= g && h >= p || h < p && p - h < x - m || h > g && h - g < x - m)) {
      const v = {
        type: St.columnsLeft,
        rowStart: p,
        rowEnd: g,
        columnStart: m,
        columnEnd: x
      };
      e.workbookState.setExtendToArea(v), e.renderSheet();
    }
  }, r = (i) => {
    document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", r);
    const { sheet: s, range: a } = e.model.getSelectedView(), c = e.workbookState.getExtendToArea();
    if (!c)
      return;
    const f = Math.min(a[0], a[2]), h = Math.abs(a[2] - a[0]) + 1, m = Math.abs(a[3] - a[1]) + 1, p = Math.min(a[1], a[3]), x = {
      sheet: s,
      row: f,
      column: p,
      width: m,
      height: h
    };
    switch (c.type) {
      case St.rowsDown:
        e.model.autoFillRows(x, c.rowEnd);
        break;
      case St.rowsUp: {
        e.model.autoFillRows(x, c.rowStart);
        break;
      }
      case St.columnsRight: {
        e.model.autoFillColumns(x, c.columnEnd);
        break;
      }
      case St.columnsLeft: {
        e.model.autoFillColumns(x, c.columnStart);
        break;
      }
    }
    e.model.setSelectedRange(
      Math.min(f, c.rowStart),
      Math.min(p, c.columnStart),
      Math.max(f + h - 1, c.rowEnd),
      Math.max(p + m - 1, c.columnEnd)
    ), e.workbookState.clearExtendToArea(), e.renderSheet();
  };
  return n.addEventListener("pointerdown", () => {
    document.addEventListener("pointermove", o), document.addEventListener("pointerup", r);
  }), n.addEventListener("dblclick", (i) => {
    const [s, a, c] = e.model.getSelectedCell();
    let f = a + 1, h = c - 1;
    if ((h < 1 || e.model.getFormattedCellValue(s, a, c - 1) === "") && (h = c + 1, h > Ie || e.model.getFormattedCellValue(s, a, h) === ""))
      return;
    for (let p = a + 1; p <= Le && e.model.getFormattedCellValue(s, p, h) !== ""; p += 1)
      f = p;
    const m = {
      sheet: s,
      row: a,
      column: c,
      width: 1,
      height: 1
    };
    e.model.autoFillRows(m, f), i.stopPropagation(), e.renderSheet();
  }), n;
}
function xb(e) {
  const t = e.replace(/^#/, ""), n = Number.parseInt(t.substring(0, 2), 16), o = Number.parseInt(t.substring(2, 4), 16), r = Number.parseInt(t.substring(4, 6), 16);
  return `rgba(${n}, ${o}, ${r}, ${0.1})`;
}
const Ma = 512;
function Aa(e, t, n, o, r = Number.POSITIVE_INFINITY) {
  const i = e.split(`
`);
  if (!t)
    return i;
  const s = [];
  for (const a of i) {
    if (s.length >= r)
      return s;
    const c = a.length > Ma ? a.slice(0, Ma) : a;
    if (n.measureText(c).width < o && c.length === a.length) {
      s.push(a);
      continue;
    }
    const f = a.split(" ");
    let h = f[0], m = !1;
    for (let p = 1; p < f.length; p += 1) {
      const x = f[p], g = `${h} ${x}`;
      if (n.measureText(g).width < o)
        h = g;
      else {
        if (s.push(h), s.length >= r) {
          m = !0;
          break;
        }
        h = x;
      }
    }
    m || s.push(h);
  }
  return s;
}
const hc = {
  regular: 'Inter, "Adjusted Arial Fallback", sans-serif'
}, ae = 28, re = 30, At = window.devicePixelRatio || 1, Io = hc.regular, bb = hc.regular, ct = 3;
class yb {
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
  /**
   * How many pixels of the top-left visible cell are scrolled out of the grid
   * (to the left of / above it). The model only remembers the top-left *cell*,
   * so this is what makes scrolling smooth instead of jumping a whole row or
   * column at a time. It is always smaller than that cell's width/height.
   */
  scrollOffset;
  /**
   * The lines a cell's text breaks into, and how wide each one is. See
   * getCellLines: wrapping is the most expensive thing a frame does, and
   * scrolling redraws the same cells without their text changing.
   */
  cellLines;
  /**
   * Set by setScrollPosition: the next render only moves the view, so the wrapped
   * text of each cell is still good. Any other render starts from scratch, since
   * it may be following an edit.
   */
  preserveCellLines;
  constructor(t) {
    this.model = t.model, this.sheetWidth = 0, this.sheetHeight = 0, this.canvas = t.elements.canvas, this.width = t.width, this.height = t.height, this.ctx = this.setContext(), this.workbookState = t.workbookState, this.editor = t.elements.editor, this.refresh = t.refresh, this.scrollOffset = t.scrollOffset ?? { x: 0, y: 0 }, this.cellOutline = t.elements.cellOutline, this.areaOutline = t.elements.areaOutline, this.extendToOutline = t.elements.extendToOutline, this.rowGuide = t.elements.rowGuide, this.columnGuide = t.elements.columnGuide, this.columnHeaders = t.elements.columnHeaders, this.onColumnWidthChanges = t.onColumnWidthChanges, this.onRowHeightChanges = t.onRowHeightChanges, this.resetHeaders(), this.cellOutlineHandle = gb(this), this.spills = /* @__PURE__ */ new Map(), this.cells = [], this.cellLines = /* @__PURE__ */ new Map(), this.preserveCellLines = !1;
  }
  setScrollPosition(t) {
    this.preserveCellLines = !0;
    const { column: n, left: o } = this.getBoundedColumn(t.left), { row: r, top: i } = this.getBoundedRow(t.top);
    this.scrollOffset.x = Math.max(0, t.left - o), this.scrollOffset.y = Math.max(0, t.top - i), this.model.setTopLeftVisibleCell(r, n);
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
    return n + ct;
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
    return n + ct;
  }
  // Get the visible cells (aside from the frozen rows and columns)
  getVisibleCells() {
    const t = this.model.getSelectedView(), n = t.sheet, o = this.model.getFrozenRowsCount(n), r = this.model.getFrozenColumnsCount(n), i = Math.max(o + 1, t.top_row);
    let s = i;
    const a = Math.max(r + 1, t.left_column);
    let c = a;
    const f = this.getFrozenColumnsWidth(), h = this.getFrozenRowsHeight();
    let m = ae + h - this.scrollOffset.y;
    for (let g = i; g <= Le; g += 1) {
      const d = this.getRowHeight(n, g);
      if (m >= this.height - d || g === Le) {
        s = g;
        break;
      }
      m += d;
    }
    let p = re + f - this.scrollOffset.x;
    for (let g = a; g <= Ie; g += 1) {
      const d = this.getColumnWidth(n, g);
      if (p >= this.width - d || g === Ie) {
        c = g;
        break;
      }
      p += d;
    }
    return {
      topLeftCell: { row: i, column: a },
      bottomRightCell: { row: s, column: c }
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
    for (; n <= t && r <= Ie; ) {
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
    const r = o - this.width + this.getFrozenColumnsWidth() + re;
    let i = 0;
    for (let s = n; s <= Ie; s += 1) {
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
    let o = `${n}px ${Io}`, r = yf;
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
      const f = this.getColumnWidth(t, a), [h, m] = this.getCoordinatesByCell(n, a);
      this.computeCellText(
        n,
        a,
        h,
        m,
        f,
        o
      );
    }
    const c = this.model.getFirstNonEmptyInRowAfterColumn(
      t,
      n,
      i.column
    );
    if (c) {
      const f = this.getColumnWidth(t, c), [h, m] = this.getCoordinatesByCell(n, c);
      this.computeCellText(
        n,
        c,
        h,
        m,
        f,
        o
      );
    }
  }
  // Goes through all the visible cells and computes their text properties
  computeCellsText() {
    const { topLeftCell: t, bottomRightCell: n } = this.getVisibleCells(), o = this.model.getSelectedSheet();
    this.cells = [];
    const r = this.model.getFrozenColumnsCount(o), i = this.model.getFrozenRowsCount(o);
    let s = re + 0.5, a = ae + 0.5;
    for (let p = 1; p <= i; p += 1) {
      const x = this.getRowHeight(o, p);
      this.computeCellTextLeftRight(
        o,
        p,
        x,
        t,
        n
      ), s = re + 0.5;
      for (let g = 1; g <= r; g += 1) {
        const d = this.getColumnWidth(o, g);
        this.computeCellText(p, g, s, a, d, x), s += d;
      }
      a += x;
    }
    if (i === 0 && r !== 0) {
      s = re + 0.5;
      for (let p = 1; p <= r; p += 1)
        s += this.getColumnWidth(o, p);
    }
    i && (a += ct), r && (s += ct);
    const c = s, f = a, h = c - this.scrollOffset.x, m = f - this.scrollOffset.y;
    a = ae + 0.5;
    for (let p = 1; p <= i; p += 1) {
      s = h;
      const x = this.getRowHeight(o, p);
      for (let { column: g } = t; g <= n.column; g += 1) {
        const d = this.getColumnWidth(o, g);
        this.computeCellText(p, g, s, a, d, x), s += d;
      }
      a += x;
    }
    a = m;
    for (let { row: p } = t; p <= n.row; p += 1) {
      s = re;
      const x = this.getRowHeight(o, p);
      this.computeCellTextLeftRight(
        o,
        p,
        x,
        t,
        n
      );
      for (let g = 1; g <= r; g += 1) {
        const d = this.getColumnWidth(o, g);
        this.computeCellText(p, g, s, a, d, x), s += d;
      }
      a += x;
    }
    a = m;
    for (let { row: p } = t; p <= n.row; p += 1) {
      s = h;
      const x = this.getRowHeight(o, p);
      for (let { column: g } = t; g <= n.column; g += 1) {
        const d = this.getColumnWidth(o, g);
        this.computeCellText(p, g, s, a, d, x), s += d;
      }
      a += x;
    }
  }
  /**
   * The lines a cell's text breaks into, with the width of each.
   *
   * Wrapping measures every word of the text, so for a sheet with a lot of text
   * in its cells this is by far the most expensive part of drawing a frame — and
   * scrolling draws the same cells over and over, with the same text. Hence the
   * cache; see `preserveCellLines` for when it is dropped.
   */
  getCellLines(t, n, o, r, i, s, a) {
    const c = n * (Ie + 1) + o, f = this.cellLines.get(c);
    if (f && f.font === r && f.width === s && f.budget === a)
      return f;
    const h = this.ctx;
    h.font = r;
    const m = this.model.getFormattedCellValue(t, n, o), p = Aa(
      m,
      i,
      h,
      s - Dr,
      a
    ), x = p.map((d) => h.measureText(d).width);
    this.cellLines.size > 4096 && this.cellLines.clear();
    const g = { font: r, width: s, budget: a, lines: p, widths: x };
    return this.cellLines.set(c, g), g;
  }
  // Compute the text properties for a cell
  computeCellText(t, n, o, r, i, s) {
    const a = this.model.getSelectedSheet(), c = this.model.getCellStyle(a, t, n), { font: f, color: h, fontSize: m } = this.getFontStyle(c), p = this.model.getCellType(a, t, n), { horizontal: x, vertical: g } = this.getAlignment(c, p), d = c.alignment?.wrap_text || !1, v = this.ctx;
    v.font = f, v.fillStyle = h;
    const S = m * 1.5, T = d && g === "top" ? Math.ceil(s / S) + 1 : Number.POSITIVE_INFINITY, { lines: C, widths: w } = this.getCellLines(
      a,
      t,
      n,
      f,
      d,
      i,
      T
    ), E = C.length;
    let _ = o, I = o + i;
    const R = {
      row: t,
      column: n,
      x: _,
      y: r,
      width: i,
      height: s,
      fontSize: m,
      textColor: h,
      font: f,
      underlined: c.font?.u || !1,
      strike: c.font?.strike || !1,
      lines: []
    };
    C.forEach((y, D) => {
      const M = w[D];
      let O, B;
      const j = 4;
      x === "right" ? O = i - Dr + o - M / 2 : x === "center" ? O = o + i / 2 : O = Dr + o + M / 2, g === "bottom" ? B = r + s - m / 2 - j + (D - E + 1) * S : g === "center" ? B = r + s / 2 + (D + (1 - E) / 2) * S : B = r + m / 2 + j + D * S, R.lines.push([y, O, B, M]), _ = Math.min(_, O - M / 2), I = Math.max(I, O + M / 2);
    });
    let F = o, V = o + i;
    if (I > V && n < Ie && this.model.getFormattedCellValue(a, t, n + 1) === "") {
      let y = n + 1;
      const D = this.model.getFrozenColumnsCount(a);
      for (; V < I && this.model.getFormattedCellValue(a, t, y) === "" && y <= Ie && (n < D && y <= D || n > D); )
        V += this.model.getColumnWidth(a, y), this.spills.set(`${t}-${y}`, 1), y += 1;
    }
    const H = this.model.getFrozenColumnsCount(a);
    if (_ < F && n > 1 && this.model.getFormattedCellValue(a, t, n - 1) === "") {
      let y = n - 1;
      for (; F > _ && this.model.getFormattedCellValue(a, t, y) === "" && y >= 1 && (n <= H && y <= H || n > H); )
        F -= this.getColumnWidth(a, y), this.spills.set(`${t}-${y + 1}`, 1), y -= 1;
    }
    if (H > 0) {
      const y = this.getCoordinatesByCell(t, H)[0] + this.getColumnWidth(a, H);
      n > H ? F = Math.max(F, y) : V = Math.min(V, y);
    }
    R.x = F, R.width = V - F, this.cells.push(R);
  }
  /// Renders the cell style: colors, borders, etc. But not the text.
  renderCellStyle(t, n, o, r, i, s) {
    const a = this.model.getSelectedSheet(), c = this.model.getCellStyle(a, t, n);
    let f = P.palette.common.white;
    c.fill.fg_color && (f = c.fill.fg_color);
    const h = this.model.getShowGridLines(a) ? bf : f, m = this.ctx;
    m.fillStyle = f, m.fillRect(o, r, i, s);
    const p = c.border;
    if (this.spills.get(`${t}-${n}`) !== 1) {
      let d = h, v = 1;
      if (p.left)
        switch (d = p.left.color, p.left.style) {
          case "thin":
            break;
          case "medium":
            v = 2;
            break;
          case "thick":
            v = 3;
        }
      else {
        const S = this.model.getCellStyle(
          a,
          t,
          n - 1
        );
        if (S.border.right)
          switch (d = S.border.right.color, S.border.right.style) {
            case "thin":
              break;
            case "medium":
              v = 2;
              break;
            case "thick":
              v = 3;
          }
        else c.fill.fg_color ? d = c.fill.fg_color : S.fill.fg_color && (d = S.fill.fg_color);
      }
      m.beginPath(), m.strokeStyle = d, m.lineWidth = v, m.moveTo(o, r), m.lineTo(o, r + s), m.stroke();
    }
    let x = h, g = 1;
    if (p.top)
      switch (x = p.top.color, p.top.style) {
        case "thin":
          break;
        case "medium":
          g = 2;
          break;
        case "thick":
          g = 3;
      }
    else {
      const d = this.model.getCellStyle(a, t - 1, n);
      if (d.border.bottom)
        switch (x = d.border.bottom.color, d.border.bottom.style) {
          case "thin":
            break;
          case "medium":
            g = 2;
            break;
          case "thick":
            g = 3;
        }
      else c.fill.fg_color ? x = c.fill.fg_color : d.fill.fg_color && (x = d.fill.fg_color);
    }
    m.beginPath(), m.strokeStyle = x, m.lineWidth = g, m.moveTo(o, r), m.lineTo(o + i, r), m.stroke();
  }
  /// Renders the text in the cell.
  renderCellText(t) {
    const {
      row: n,
      column: o,
      x: r,
      y: i,
      width: s,
      height: a,
      font: c,
      underlined: f,
      strike: h,
      fontSize: m,
      textColor: p,
      lines: x
    } = t, g = this.ctx;
    g.font = c, g.fillStyle = p;
    const d = this.model.getSelectedSheet(), v = this.model.getFrozenRowsCount(d), S = this.model.getFrozenColumnsCount(d), T = this.getFrozenRowsHeight(), C = this.getFrozenColumnsWidth(), w = o <= S ? re : re + C, E = n <= v ? ae : ae + T, _ = o <= S ? re + C : this.width, I = n <= v ? ae + T : this.height, R = Math.max(r, w), F = Math.max(i, E);
    g.save(), g.beginPath(), g.rect(
      R,
      F,
      Math.min(r + s, _) - R,
      Math.min(i + a, I) - F
    ), g.clip(), x.forEach((V, H) => {
      const [y, D, M, O] = V;
      if (g.fillText(y, D, M), f) {
        const B = Math.floor(m / 2);
        g.beginPath(), g.strokeStyle = p, g.lineWidth = 1, g.moveTo(D - O / 2, M + B), g.lineTo(D + O / 2, M + B), g.stroke();
      }
      h && (g.beginPath(), g.strokeStyle = p, g.lineWidth = 1, g.moveTo(D - O / 2, M), g.lineTo(D + O / 2, M), g.stroke());
    }), g.restore();
  }
  // Column and row headers with their handles
  addColumnResizeHandle(t, n, o) {
    const r = document.createElement("div");
    r.className = "column-resize-handle", r.style.left = `${t - 1}px`, r.style.height = `${ae}px`, this.columnHeaders.insertBefore(r, null);
    let i = 0;
    const s = (c) => {
      o + c.pageX - i > 0 && (r.style.left = `${t + c.pageX - i - 1}px`, this.columnGuide.style.left = `${re + t + c.pageX - i}px`);
    };
    let a = (c) => {
      r.style.opacity = "0", this.columnGuide.style.display = "none", document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", a);
      const f = o + c.pageX - i;
      f !== o && this.onColumnWidthChanges(
        this.model.getSelectedSheet(),
        n,
        f
      );
    };
    a = a.bind(this), r.addEventListener("pointerdown", (c) => {
      r.style.opacity = "1", this.columnGuide.style.display = "block", this.columnGuide.style.left = `${re + t}px`, i = c.pageX, document.addEventListener("pointermove", s), document.addEventListener("pointerup", a);
    }), r.addEventListener("dblclick", (c) => {
      const f = this.model.getSelectedSheet(), h = this.model.getRowsWithData(f, n);
      let m = 0;
      for (const p of h) {
        const x = this.model.getFormattedCellValue(f, p, n);
        if (x === "")
          continue;
        const g = this.model.getCellStyle(f, p, n);
        let v = `${g.font.sz}px ${Io}`;
        v = g.font.b ? `bold ${v}` : `400 ${v}`, this.ctx.font = v;
        const S = x.split(`
`);
        for (const T of S) {
          const C = this.ctx.measureText(T).width;
          m = Math.max(m, C);
        }
      }
      m !== 0 && (this.model.setColumnsWidth(f, n, n, m + 8), this.refresh()), c.stopPropagation();
    });
  }
  addRowResizeHandle(t, n, o) {
    const r = document.createElement("div");
    r.className = "row-resize-handle", r.style.top = `${t - 1}px`, r.style.width = `${re}px`;
    const i = this.model.getSelectedSheet();
    this.canvas.parentElement?.insertBefore(r, null);
    let s = 0;
    const a = (f) => {
      o + f.pageY - s > 0 && (r.style.top = `${t + f.pageY - s - 1}px`, this.rowGuide.style.top = `${t + f.pageY - s}px`);
    };
    let c = (f) => {
      r.style.opacity = "0", this.rowGuide.style.display = "none", document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", c);
      const h = o + f.pageY - s;
      h !== o && this.onRowHeightChanges(i, n, h);
    };
    c = c.bind(this), r.addEventListener("pointerdown", (f) => {
      f.stopPropagation(), r.style.opacity = "1", this.rowGuide.style.display = "block", this.rowGuide.style.top = `${t}px`, s = f.pageY, document.addEventListener("pointermove", a), document.addEventListener("pointerup", c);
    }), r.addEventListener("dblclick", (f) => {
      const h = this.model.getSelectedSheet(), m = this.model.getColumnsWithData(h, n);
      let p = 0;
      for (const x of m) {
        const g = this.model.getFormattedCellValue(h, n, x);
        if (g === "")
          continue;
        const d = this.getColumnWidth(h, x), v = this.model.getCellStyle(h, n, x), S = v.font.sz, T = S * 1.5;
        let C = `${S}px ${Io}`;
        C = v.font.b ? `bold ${C}` : `400 ${C}`, this.ctx.font = C;
        const _ = (Aa(
          g,
          v.alignment?.wrap_text || !1,
          this.ctx,
          d
        ).length - 1) * T + 8 + S;
        p = Math.max(p, _);
      }
      p !== 0 && (this.model.setRowsHeight(h, n, n, p), this.refresh()), f.stopPropagation();
    });
  }
  styleColumnHeader(t, n, o, r) {
    n.style.boxSizing = "border-box", n.style.width = `${t}px`, n.style.height = `${ae}px`, n.style.backgroundColor = o ? r ? P.palette.primary.main : Ts : Rs, n.style.color = o ? r ? P.palette.common.white : ks : _s, n.style.fontWeight = "bold", n.style.borderLeft = `1px solid ${Ir}`, n.style.borderTop = `1px solid ${Ir}`, o ? (n.style.borderBottom = `1px solid ${Ke}`, n.classList.add("selected")) : n.classList.remove("selected");
  }
  removeHandles() {
    const t = this.canvas.parentElement;
    if (t)
      for (const n of t.querySelectorAll(".row-resize-handle"))
        n.remove();
  }
  renderRowHeaders(t, n, o) {
    const { sheet: r, range: i } = this.model.getSelectedView();
    let s = i[0], a = i[2], c = i[1], f = i[3];
    s > a && ([s, a] = [a, s]), c > f && ([c, f] = [f, c]);
    const h = c === 1 && f === Ie, m = this.ctx, p = this.getFrozenRowsHeight();
    let x = ae + 0.5;
    const g = t === 0 ? n.row : 1;
    let d = !1;
    t === 0 && (x -= this.scrollOffset.y, m.save(), m.beginPath(), m.rect(0, ae, re + 1, this.height), m.clip(), d = !0);
    for (let v = g; v <= o.row; v += 1) {
      const S = this.getRowHeight(r, v), T = v >= s && v <= a;
      m.fillStyle = Ir, m.fillRect(0.5, x, re, S), m.fillStyle = T ? h ? P.palette.primary.main : Ts : Rs, m.fillRect(
        0.5,
        x + 0.5,
        re,
        S - 1
      ), T && (m.fillStyle = Ke, m.fillRect(re - 1, x, 1, S)), m.fillStyle = T ? h ? P.palette.common.white : ks : _s, m.font = `bold 12px ${Io}`, m.fillText(
        `${v}`,
        re / 2,
        x + S / 2,
        re
      ), x += S, x > ae + p && this.addRowResizeHandle(x, v, S), v === t && (x += ct - this.scrollOffset.y, v = n.row - 1, m.save(), m.beginPath(), m.rect(
        0,
        ae + p,
        re + 1,
        this.height
      ), m.clip(), d = !0);
    }
    d && m.restore();
  }
  renderColumnHeaders(t, n, o) {
    const { columnHeaders: r } = this;
    let i = 0;
    const { range: s } = this.model.getSelectedView();
    let a = s[0], c = s[2], f = s[1], h = s[3];
    f > h && ([f, h] = [h, f]), a > c && ([a, c] = [c, a]);
    const m = a === 1 && c === Le;
    for (const g of r.querySelectorAll(".column-header"))
      g.remove();
    for (const g of r.querySelectorAll(
      ".column-resize-handle"
    ))
      g.remove();
    for (const g of r.querySelectorAll(
      ".frozen-column-separator"
    ))
      g.remove();
    r.style.fontFamily = bb, r.style.fontSize = "12px", r.style.height = `${ae}px`, r.style.lineHeight = `${ae}px`, r.style.left = `${re}px`;
    const p = this.getFrozenColumnsWidth();
    i = p - this.scrollOffset.x;
    for (let g = n; g <= o; g += 1) {
      const d = g >= f && g <= h;
      i += this.addColumnHeader(
        i,
        g,
        d,
        m,
        2,
        g === n ? -this.scrollOffset.x : 0,
        p
      );
    }
    const x = i;
    i = 0;
    for (let g = 1; g <= t; g += 1) {
      const d = g >= f && g <= h;
      i += this.addColumnHeader(
        i,
        g,
        d,
        m,
        1
      );
    }
    if (t !== 0) {
      const g = document.createElement("div");
      g.className = "frozen-column-separator", g.style.width = `${ct}px`, g.style.height = `${ae}`, g.style.display = "inline-block", g.style.backgroundColor = To, g.style.order = "1", this.columnHeaders.insertBefore(g, null);
    }
    r.style.width = `${Math.max(x, p)}px`;
  }
  addColumnHeader(t, n, o, r, i, s = 0, a = 0) {
    const c = this.getColumnWidth(
      this.model.getSelectedSheet(),
      n
    ), f = document.createElement("div");
    return f.className = "column-header", f.textContent = Ve(n), f.style.order = `${i}`, s && (f.style.marginLeft = `${s}px`), this.columnHeaders.insertBefore(f, null), this.styleColumnHeader(c, f, o, r), t + c > a && this.addColumnResizeHandle(t + c, n, c), c;
  }
  getSheetDimensions() {
    let t = re;
    for (let o = 1; o < Ie + 1; o += 1)
      t += this.getColumnWidth(this.model.getSelectedSheet(), o);
    let n = ae;
    for (let o = 1; o < Le + 1; o += 1)
      n += this.getRowHeight(this.model.getSelectedSheet(), o);
    return this.sheetWidth = Math.floor(
      t + this.getColumnWidth(this.model.getSelectedSheet(), Ie)
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
    const a = s ? this.getFrozenColumnsWidth() : 0, c = i ? this.getFrozenRowsHeight() : 0, f = ae + c, h = re + a, m = h + this.width - re - a, p = f + this.height - ae - c, x = n < f ? f - n : 0, g = t < h ? h - t : 0, d = t + o > m ? m - t : o + 4, v = n + r > p ? p - n : r + 4;
    return `rect(${x}px ${d}px ${v}px ${g}px)`;
  }
  getAreaDimensions(t, n, o, r) {
    const [i, s] = this.getCoordinatesByCell(t, n);
    let [a, c] = this.getCoordinatesByCell(o, r);
    a += this.getColumnWidth(this.model.getSelectedSheet(), r), c += this.getRowHeight(this.model.getSelectedSheet(), o);
    const f = this.model.getFrozenRowsCount(
      this.model.getSelectedSheet()
    ), h = this.model.getFrozenColumnsCount(
      this.model.getSelectedSheet()
    );
    if (f !== 0 || h !== 0) {
      let [m, p] = this.getCoordinatesByCell(
        f,
        h
      );
      h > 0 && (m += this.getColumnWidth(
        this.model.getSelectedSheet(),
        h
      )), f > 0 && (p += this.getRowHeight(
        this.model.getSelectedSheet(),
        f
      )), t <= f && o > f && (c = Math.max(c, p)), n <= h && r > h && (a = Math.max(a, m));
    }
    return [Math.abs(a - i), Math.abs(c - s)];
  }
  /**
   * Returns the coordinates relative to the canvas.
   * (headerColumnWidth, headerRowHeight) being the coordinates
   * for the top left corner of the first visible cell
   */
  getCoordinatesByCell(t, n) {
    const o = this.model.getSelectedSheet(), r = this.model.getFrozenColumnsCount(o), i = this.getFrozenColumnsWidth(), s = this.model.getFrozenRowsCount(o), a = this.getFrozenRowsHeight(), { topLeftCell: c } = this.getVisibleCells();
    let f, h;
    if (t <= s) {
      h = ae;
      for (let m = 1; m < t; m += 1)
        h += this.getRowHeight(o, m);
    } else if (t >= c.row) {
      h = ae + a - this.scrollOffset.y;
      for (let m = c.row; m < t; m += 1)
        h += this.getRowHeight(o, m);
    } else {
      h = ae + a - this.scrollOffset.y;
      for (let m = c.row; m > t; m -= 1)
        h -= this.getRowHeight(o, m - 1);
    }
    if (n <= r) {
      f = re;
      for (let m = 1; m < n; m += 1)
        f += this.getColumnWidth(o, m);
    } else if (n >= c.column) {
      f = re + i - this.scrollOffset.x;
      for (let m = c.column; m < n; m += 1)
        f += this.getColumnWidth(o, m);
    } else {
      f = re + i - this.scrollOffset.x;
      for (let m = c.column; m > n; m -= 1)
        f -= this.getColumnWidth(o, m - 1);
    }
    return [Math.floor(f), Math.floor(h)];
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
    let a = 0, c = re;
    const { topLeftCell: f } = this.getVisibleCells();
    if (t < re)
      for (a = f.column; c >= t; ) {
        if (a -= 1, a < 1) {
          a = 1;
          break;
        }
        c -= this.getColumnWidth(this.model.getSelectedSheet(), a);
      }
    else if (t < re + r) {
      for (; c <= t; )
        if (a += 1, c += this.getColumnWidth(this.model.getSelectedSheet(), a), a > o)
          return null;
    } else
      for (c = re + r - this.scrollOffset.x, a = f.column - 1; c <= t; ) {
        if (a += 1, a > Ie)
          return null;
        c += this.getColumnWidth(this.model.getSelectedSheet(), a);
      }
    let h = ae, m = 0;
    if (n < ae)
      for (m = f.row; h >= n; ) {
        if (m -= 1, m < 1) {
          m = 1;
          break;
        }
        h -= this.getRowHeight(this.model.getSelectedSheet(), m);
      }
    else if (n < ae + s) {
      for (; h <= n; )
        if (m += 1, h += this.getRowHeight(this.model.getSelectedSheet(), m), m > i)
          return null;
    } else
      for (h = ae + s - this.scrollOffset.y, m = f.row - 1; h <= n; ) {
        if (m += 1, m > Le) {
          m = Le;
          break;
        }
        h += this.getRowHeight(this.model.getSelectedSheet(), m);
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
    const [a, c] = this.getCoordinatesByCell(o, i), [f, h] = this.getAreaDimensions(
      o,
      i,
      r,
      s
    );
    t.style.border = `1px dashed ${Ke}`, t.style.borderRadius = "3px", t.style.left = `${a}px`, t.style.top = `${c}px`, t.style.width = `${f - 1}px`, t.style.height = `${h - 1}px`;
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
    const { row: r, column: i } = t, [s, a] = this.getCoordinatesByCell(r, i), c = -1, f = t.editorWidth + 2 * c, h = t.editorHeight + 2 * c;
    o.style.left = `${s}px`, o.style.top = `${a}px`, o.style.width = `${f - 1}px`, o.style.height = `${h - 1}px`;
  }
  drawCellOutline() {
    const { cellOutline: t, areaOutline: n, cellOutlineHandle: o } = this;
    if (this.workbookState.getEditingCell()) {
      t.style.visibility = "hidden", o.style.visibility = "hidden", n.style.visibility = "hidden";
      return;
    }
    t.style.visibility = "visible", o.style.visibility = this.workbookState.isSelecting() ? "hidden" : "visible", n.style.visibility = "visible";
    const [r, i, s] = this.model.getSelectedCell(), { topLeftCell: a } = this.getVisibleCells(), c = this.model.getFrozenRowsCount(r), f = this.model.getFrozenColumnsCount(r), [h, m] = this.getCoordinatesByCell(i, s), p = -1, x = this.getColumnWidth(r, s) + 2 * p, g = this.getRowHeight(r, i) + 2 * p;
    (i < a.row && i > c || s < a.column && s > f) && (t.style.visibility = "hidden", o.style.visibility = "hidden"), t.style.left = `${h - p - 2}px`, t.style.top = `${m - p - 2}px`, t.style.minWidth = "", t.style.minHeight = "", t.style.maxWidth = "", t.style.maxHeight = "", t.style.overflow = "hidden", t.style.width = `${x + 1}px`, t.style.height = `${g + 1}px`, t.style.background = "none", t.style.clip = this.getClipCSS(
      h - p - 2,
      m - p - 2,
      x + 1,
      g + 1,
      i > c,
      s > f
    ), t.style.lineHeight = `${g - 4}px`;
    let {
      range: [d, v, S, T]
    } = this.model.getSelectedView();
    d > S && ([d, S] = [S, d]), v > T && ([v, T] = [T, v]);
    let C, w;
    if (v === T && d === S)
      n.style.visibility = "hidden", [C, w] = this.getCoordinatesByCell(d, v), C += this.getColumnWidth(r, v), w += this.getRowHeight(r, d);
    else {
      n.style.visibility = "visible", o.style.visibility = this.workbookState.isSelecting() ? "hidden" : "visible";
      const [R, F] = this.getCoordinatesByCell(d, v), [V, H] = this.getAreaDimensions(
        d,
        v,
        S,
        T
      );
      C = R + V, w = F + H;
      const y = this.workbookState.isSelecting(), D = y ? 1 : 0;
      n.style.left = `${R - p - 1}px`, n.style.top = `${F - p - 1}px`, n.style.width = `${V + 2 * p + 1 + D}px`, n.style.height = `${H + 2 * p + 1 + D}px`;
      const M = d > c, O = v > f;
      n.style.clip = this.getClipCSS(
        R,
        F,
        V + 2 * p,
        H + 2 * p,
        M,
        O
      ), n.style.border = y ? "none" : `1px solid ${Ke}`, (S > c && S < a.row - 1 || T > f && T < a.column - 1) && (o.style.visibility = "hidden"), d <= c && S > c && S < a.row - 1 && (n.style.borderBottom = "None", o.style.visibility = "hidden"), v <= f && T > f && T < a.column - 1 && (n.style.borderRight = "None", o.style.visibility = "hidden");
    }
    const E = o.getBoundingClientRect(), _ = E.width, I = E.height;
    o.style.left = `${C - _ / 2 - 1}px`, o.style.top = `${w - I / 2 - 1}px`;
  }
  drawCutRange() {
    const t = this.workbookState.getCutRange() || null;
    if (!t)
      return;
    const n = this.model.getSelectedSheet();
    if (t.sheet !== n)
      return;
    const o = this.ctx;
    o.save(), this.clipToGrid(), o.setLineDash([2, 2]);
    const [r, i] = this.getCoordinatesByCell(
      t.rowStart,
      t.columnStart
    ), [s, a] = this.getCoordinatesByCell(
      t.rowEnd + 1,
      t.columnEnd + 1
    );
    o.strokeStyle = "red", o.lineWidth = 1, o.strokeRect(r, i, s - r, a - i), o.setLineDash([]), o.restore();
  }
  /** Clips the context to the cells area, i.e. everything but the headers. */
  clipToGrid() {
    const t = this.ctx;
    t.beginPath(), t.rect(
      re,
      ae,
      this.width - re,
      this.height - ae
    ), t.clip();
  }
  drawActiveRanges(t, n) {
    let o = this.workbookState.getActiveRanges();
    const r = this.ctx;
    r.save(), this.clipToGrid(), r.setLineDash([2, 2]);
    const i = this.workbookState.getEditingCell()?.referencedRange || null;
    i && (o = o.concat([
      {
        ...i.range,
        color: ei(o.length)
      }
    ]));
    const s = this.model.getSelectedSheet(), a = o.length;
    for (let c = 0; c < a; c += 1) {
      const f = o[c];
      if (f.sheet !== s)
        continue;
      const h = 1, m = t.row - h, p = n.row + h, x = t.column - h, g = n.column + h;
      if (m <= f.rowEnd && f.rowStart <= p && x <= f.columnEnd && f.columnStart < g) {
        const d = {
          ...f,
          rowStart: Math.max(m, f.rowStart),
          rowEnd: Math.min(p, f.rowEnd),
          columnStart: Math.max(x, f.columnStart),
          columnEnd: Math.min(g, f.columnEnd)
        }, [v, S] = this.getCoordinatesByCell(
          d.rowStart,
          d.columnStart
        ), [T, C] = this.getCoordinatesByCell(
          d.rowEnd + 1,
          d.columnEnd + 1
        );
        r.strokeStyle = f.color, r.lineWidth = 1, r.strokeRect(v, S, T - v, C - S), r.fillStyle = xb(f.color), r.fillRect(v, S, T - v, C - S);
      }
    }
    r.setLineDash([]), r.restore();
  }
  renderSheet() {
    this.preserveCellLines || this.cellLines.clear(), this.preserveCellLines = !1;
    const t = this.ctx, { canvas: n } = this, o = this.model.getSelectedSheet();
    t.lineWidth = 1, t.textAlign = "center", t.textBaseline = "middle", t.clearRect(0, 0, n.width, n.height), this.removeHandles();
    const { topLeftCell: r, bottomRightCell: i } = this.getVisibleCells();
    this.computeCellsText();
    const s = this.model.getFrozenColumnsCount(o), a = this.model.getFrozenRowsCount(o);
    let c = re + 0.5, f = ae + 0.5;
    for (let d = 1; d <= a; d += 1) {
      const v = this.getRowHeight(o, d);
      c = re + 0.5;
      for (let S = 1; S <= s; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(d, S, c, f, T, v), c += T;
      }
      f += v;
    }
    if (a === 0 && s !== 0) {
      c = re + 0.5;
      for (let d = 1; d <= s; d += 1)
        c += this.getColumnWidth(o, d);
    }
    const h = ct / 2;
    a && (t.beginPath(), t.lineWidth = ct, t.strokeStyle = To, t.moveTo(0, f + h), t.lineTo(this.width, f + h), f += ct, t.stroke(), t.lineWidth = 1), s && (t.beginPath(), t.lineWidth = ct, t.strokeStyle = To, t.moveTo(c + h, 0), t.lineTo(c + h, this.height), c += ct, t.stroke(), t.lineWidth = 1);
    const m = c, p = f, x = m - this.scrollOffset.x, g = p - this.scrollOffset.y;
    f = ae + 0.5, t.save(), t.beginPath(), t.rect(m, ae, this.width, p - ae), t.clip();
    for (let d = 1; d <= a; d += 1) {
      c = x;
      const v = this.getRowHeight(o, d);
      for (let { column: S } = r; S <= i.column; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(d, S, c, f, T, v), c += T;
      }
      f += v;
    }
    t.restore(), f = g, t.save(), t.beginPath(), t.rect(
      re,
      p,
      m - re,
      this.height
    ), t.clip();
    for (let { row: d } = r; d <= i.row; d += 1) {
      c = re;
      const v = this.getRowHeight(o, d);
      for (let S = 1; S <= s; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(d, S, c, f, T, v), c += T;
      }
      f += v;
    }
    t.restore(), f = g, t.save(), t.beginPath(), t.rect(m, p, this.width, this.height), t.clip();
    for (let { row: d } = r; d <= i.row; d += 1) {
      c = x;
      const v = this.getRowHeight(o, d);
      for (let { column: S } = r; S <= i.column; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(d, S, c, f, T, v), c += T;
      }
      f += v;
    }
    t.restore();
    for (const d of this.cells)
      this.renderCellText(d);
    this.renderColumnHeaders(
      s,
      r.column,
      i.column
    ), this.renderRowHeaders(a, r, i), t.beginPath(), t.strokeStyle = To, t.moveTo(0, 0.5), t.lineTo(c + re, 0.5), t.stroke(), this.drawCellOutline(), this.drawCellEditor(), this.drawExtendToArea(), this.drawActiveRanges(r, i), this.drawCutRange();
  }
}
const Ia = P.palette.error.main, vb = (e) => {
  const { t } = He(), {
    open: n,
    onClose: o,
    anchorPosition: r,
    onInsertRowAbove: i,
    onInsertRowBelow: s,
    onInsertColumnLeft: a,
    onInsertColumnRight: c,
    onFreezeColumns: f,
    onFreezeRows: h,
    onUnfreezeColumns: m,
    onUnfreezeRows: p,
    onDeleteRow: x,
    onDeleteColumn: g,
    onMoveColumnLeft: d,
    onMoveColumnRight: v,
    onMoveRowUp: S,
    onMoveRowDown: T,
    row: C,
    column: w
  } = e, [E, _] = oe(!1), I = ie(null), [R, F] = oe(!1), V = ie(null), [H, y] = oe(!1), D = ie(null), [M, O] = oe(!1), B = ie(null), [j, Q] = oe(!1), G = ie(null);
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
              onClick: () => y(!0),
              children: [
                /* @__PURE__ */ l.jsx(mu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: V,
              disableRipple: !0,
              onClick: () => F(!0),
              children: [
                /* @__PURE__ */ l.jsx(gu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: B,
              disableRipple: !0,
              onClick: () => O(!0),
              children: [
                /* @__PURE__ */ l.jsx(xu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: G,
              disableRipple: !0,
              onClick: () => Q(!0),
              children: [
                /* @__PURE__ */ l.jsx(bu, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsxs(
            be,
            {
              ref: I,
              disableRipple: !0,
              onClick: () => _(!0),
              children: [
                /* @__PURE__ */ l.jsx(Xn, {}),
                /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze") }),
                /* @__PURE__ */ l.jsx(Nn, {})
              ]
            }
          ),
          /* @__PURE__ */ l.jsx(ht, {}),
          /* @__PURE__ */ l.jsxs(or, { disableRipple: !0, onClick: x, children: [
            /* @__PURE__ */ l.jsx(Jt, {}),
            /* @__PURE__ */ l.jsx(fe, { style: { color: Ia }, children: t("cell_context.delete_row", { row: C }) })
          ] }),
          /* @__PURE__ */ l.jsxs(or, { disableRipple: !0, onClick: g, children: [
            /* @__PURE__ */ l.jsx(Jt, {}),
            /* @__PURE__ */ l.jsx(fe, { style: { color: Ia }, children: t("cell_context.delete_column", { column: w }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Ot,
      {
        open: R,
        onClose: () => F(!1),
        transitionDuration: 0,
        anchorEl: V.current,
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
                F(!1), i();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_above") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                F(!1), s();
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
        open: H,
        onClose: () => y(!1),
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
                y(!1), a();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_before") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                y(!1), c();
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
        onClose: () => O(!1),
        transitionDuration: 0,
        anchorEl: B.current,
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
                S(), O(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_up") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                T(), O(!1);
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
        open: j,
        onClose: () => Q(!1),
        transitionDuration: 0,
        anchorEl: G.current,
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
                d(), Q(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_left") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                v(), Q(!1);
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
        onClose: () => _(!1),
        transitionDuration: 0,
        anchorEl: I.current,
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
                f(), _(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_columns", { column: w }) })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                h(), _(!1);
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
                m(), _(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_columns") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                p(), _(!1);
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
`, wb = P.palette.error.main, Cb = (e) => {
  const { t } = He(), {
    open: n,
    onClose: o,
    anchorPosition: r,
    onInsertColumnLeft: i,
    onInsertColumnRight: s,
    onFreezeColumns: a,
    onUnfreezeColumns: c,
    onDeleteColumn: f,
    onMoveColumnLeft: h,
    onMoveColumnRight: m,
    column: p,
    frozenColumnsCount: x
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
              /* @__PURE__ */ l.jsx(Dt, {}),
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
              /* @__PURE__ */ l.jsx(Dt, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_after") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              h();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Ua, {}),
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
              /* @__PURE__ */ l.jsx(yu, {}),
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
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_columns", { column: p }) })
            ]
          }
        ),
        x > 0 && /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              c();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Xn, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_columns") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(or, { onClick: f, disableRipple: !0, children: [
          /* @__PURE__ */ l.jsx(Jt, {}),
          /* @__PURE__ */ l.jsx(fe, { style: { color: wb }, children: t("cell_context.delete_column", { column: p }) })
        ] })
      ]
    }
  );
}, Eb = P.palette.error.main, Sb = (e) => {
  const { t } = He(), {
    open: n,
    onClose: o,
    anchorPosition: r,
    onInsertRowAbove: i,
    onInsertRowBelow: s,
    onFreezeRows: a,
    onUnfreezeRows: c,
    onDeleteRow: f,
    onMoveRowUp: h,
    onMoveRowDown: m,
    row: p,
    frozenRowsCount: x
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
              /* @__PURE__ */ l.jsx(Dt, {}),
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
              /* @__PURE__ */ l.jsx(Dt, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_below") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              h();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(vu, {}),
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
              /* @__PURE__ */ l.jsx(wu, {}),
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
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.freeze_rows", { row: p }) })
            ]
          }
        ),
        x > 0 && /* @__PURE__ */ l.jsxs(
          be,
          {
            onClick: () => {
              c();
            },
            disableRipple: !0,
            children: [
              /* @__PURE__ */ l.jsx(Xn, {}),
              /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_rows") })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(ht, {}),
        /* @__PURE__ */ l.jsxs(or, { onClick: f, disableRipple: !0, children: [
          /* @__PURE__ */ l.jsx(Jt, {}),
          /* @__PURE__ */ l.jsx(fe, { style: { color: Eb }, children: t("cell_context.delete_row", { row: p }) })
        ] })
      ]
    }
  );
}, _b = (e) => {
  const t = ie(!1), n = ie(!1), o = ie(!1), r = ie(null), i = ie(!1), s = ie(null), a = De(
    (h) => {
      if (h.pointerType !== "mouse" || !(t.current || n.current || o.current || i.current))
        return;
      const { canvasElement: m, model: p, worksheetCanvas: x, refresh: g } = e, d = m.current, v = x.current;
      if (!v || !d)
        return;
      const S = d.getBoundingClientRect(), T = h.clientX - S.x, C = h.clientY - S.y;
      if (o.current) {
        if (h.preventDefault(), r.current === null)
          return;
        let E = null;
        if (T >= 0 && T < re && C >= ae) {
          const _ = v.getCellByCoordinates(re, C);
          _ && (E = _.row);
        } else if (T >= re && C >= ae) {
          const _ = v.getCellByCoordinates(T, C);
          _ && (E = _.row);
        }
        if (E !== null) {
          const _ = r.current;
          p.setSelectedCell(Math.min(_, E), 1), p.setSelectedRange(
            Math.min(_, E),
            1,
            Math.max(_, E),
            Ie
          ), g();
        }
        return;
      }
      if (i.current) {
        if (h.preventDefault(), s.current === null)
          return;
        let E = null;
        if (T >= re && C >= 0 && C < ae) {
          const _ = v.getCellByCoordinates(T, ae);
          _ && (E = _.column);
        } else if (T >= re && C >= ae) {
          const _ = v.getCellByCoordinates(T, C);
          _ && (E = _.column);
        }
        if (E !== null) {
          const _ = s.current;
          p.setSelectedCell(1, Math.min(_, E)), p.setSelectedRange(
            1,
            Math.min(_, E),
            Le,
            Math.max(_, E)
          ), g();
        }
        return;
      }
      const w = v.getCellByCoordinates(T, C);
      if (w) {
        if (t.current)
          e.onAreaSelecting(w);
        else if (n.current) {
          const { workbookState: E } = e, _ = E.getEditingCell();
          if (!_ || !_.referencedRange)
            return;
          const I = _.referencedRange.range;
          I.rowEnd = w.row, I.columnEnd = w.column;
          const R = p.getWorksheetsProperties().map((F) => F.name);
          _.referencedRange.str = ft(
            I,
            _.sheet,
            R[I.sheet]
          ), E.setEditingCell(_), g();
        }
      }
    },
    [e]
  ), c = De(
    (h) => {
      if (t.current) {
        const { worksheetElement: m } = e;
        t.current = !1, m.current?.releasePointerCapture(h.pointerId), e.onAreaSelected();
      } else if (n.current) {
        const { worksheetElement: m } = e;
        n.current = !1, m.current?.releasePointerCapture(h.pointerId);
      } else if (o.current) {
        const { worksheetElement: m } = e;
        o.current = !1, r.current = null, m.current?.releasePointerCapture(h.pointerId);
      } else if (i.current) {
        const { worksheetElement: m } = e;
        i.current = !1, s.current = null, m.current?.releasePointerCapture(h.pointerId);
      }
    },
    [e]
  );
  return {
    onPointerDown: De(
      (h) => {
        const m = h.target;
        if (m.className === "column-resize-handle" || m.className.includes("ironcalc-cell-handle"))
          return;
        let p = h.clientX, x = h.clientY;
        const {
          canvasElement: g,
          model: d,
          refresh: v,
          worksheetElement: S,
          worksheetCanvas: T,
          workbookState: C,
          onRowSelected: w,
          onColumnSelected: E,
          onAllSheetSelected: _
        } = e, I = T.current, R = g.current, F = S.current;
        if (!R || !I || !F)
          return;
        const V = R.getBoundingClientRect();
        if (p -= V.x, x -= V.y, p > V.width || p < re || x < ae || x > V.height) {
          if (p < re && x < ae)
            _();
          else if (p > 0 && p < re && x > ae && x < V.height) {
            const D = I.getCellByCoordinates(re, x);
            D && (h.shiftKey ? w(D.row, !0) : (h.preventDefault(), r.current = D.row, o.current = !0, F.setPointerCapture(h.pointerId), w(D.row, !1)));
          } else if (p > re && p < V.width && x > 0 && x < ae) {
            const D = I.getCellByCoordinates(p, ae);
            D && (h.shiftKey ? E(D.column, !0) : (h.preventDefault(), s.current = D.column, i.current = !0, F.setPointerCapture(h.pointerId), E(D.column, !1)));
          }
          return;
        }
        const H = C.getEditingCell(), y = I.getCellByCoordinates(p, x);
        if (y) {
          if (H) {
            if (d.getSelectedSheet() === H.sheet && y.row === H.row && y.column === H.column)
              return;
            const D = H.text;
            if (pn(D, H.cursorEnd)) {
              const M = {
                sheet: d.getSelectedSheet(),
                rowStart: y.row,
                rowEnd: y.row,
                columnStart: y.column,
                columnEnd: y.column
              }, O = d.getWorksheetsProperties().map((B) => B.name);
              H.referencedRange = {
                range: M,
                str: ft(
                  M,
                  H.sheet,
                  O[M.sheet]
                )
              }, C.setEditingCell(H), h.stopPropagation(), h.preventDefault(), n.current = !0, F.setPointerCapture(h.pointerId), v();
              return;
            }
            C.clearEditingCell(), d.setUserInput(
              H.sheet,
              H.row,
              H.column,
              H.text
            );
          }
          h.shiftKey ? (e.onAreaSelecting(y), e.onAreaSelected()) : (e.onCellSelected(y, h), t.current = !0, F.setPointerCapture(h.pointerId));
        }
      },
      [e]
    ),
    onPointerMove: a,
    onPointerUp: c
  };
};
function Rb() {
  const [e, t] = oe([0, 0]);
  return gi(() => {
    function n() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n);
  }, []), e;
}
const Tb = Ba(
  (e, t) => {
    const n = ie(null), o = ie(null), r = ie(null), i = ie(null), s = ie(null), a = ie(null), c = ie(null), f = ie(null), h = ie(null), m = ie(null), p = ie(null), x = ie(null), [g, d] = oe(!1), [v, S] = oe(!1), [T, C] = oe(!1), [w, E] = oe(null), _ = ie(!1), I = ie({
      x: 0,
      y: 0,
      sheet: -1,
      scrollX: -1,
      scrollY: -1
    }), { model: R, workbookState: F, refresh: V } = e, [H, y] = Rb();
    za(t, () => ({
      getCanvas: () => x.current
    })), Be(() => {
      const j = n.current, Q = h.current, G = m.current, A = p.current, b = o.current, $ = a.current, z = c.current, N = f.current, K = i.current;
      if (!j || !Q || !G || !A || !b || !$ || !z || !N || !r.current || !K)
        return;
      R.setWindowWidth(H - 37), R.setWindowHeight(y - 190);
      const Y = new yb({
        width: b.clientWidth,
        height: b.clientHeight,
        model: R,
        workbookState: F,
        elements: {
          canvas: j,
          columnGuide: Q,
          rowGuide: G,
          columnHeaders: A,
          cellOutline: $,
          areaOutline: z,
          extendToOutline: N,
          editor: K
        },
        onColumnWidthChanges(je, Te, Ae) {
          if (Ae < 0)
            return;
          const { range: ue } = R.getSelectedView();
          let Ne = Te, $e = Te;
          const Re = ue[0] === 1 && ue[2] === Le, se = ue[1] === 1 && ue[3] === Ie;
          Re && Te >= ue[1] && Te <= ue[3] && !se && (Ne = Math.min(ue[1], Te, ue[3]), $e = Math.max(ue[1], Te, ue[3])), R.setColumnsWidth(je, Ne, $e, Ae), x.current?.renderSheet();
        },
        onRowHeightChanges(je, Te, Ae) {
          if (Ae < 0)
            return;
          const { range: ue } = R.getSelectedView();
          let Ne = Te, $e = Te;
          const Re = ue[0] === 1 && ue[2] === Le;
          ue[1] === 1 && ue[3] === Ie && Te >= ue[0] && Te <= ue[2] && !Re && (Ne = Math.min(ue[0], Te, ue[2]), $e = Math.max(ue[0], Te, ue[2])), R.setRowsHeight(je, Ne, $e, Ae), x.current?.renderSheet();
        },
        refresh: V,
        scrollOffset: I.current
      }), U = R.getScrollX(), Z = R.getScrollY(), [ee, q] = [U + 1e5, Z + 5e5];
      s.current && (s.current.style.height = `${q}px`, s.current.style.width = `${ee}px`);
      const J = I.current, W = R.getSelectedSheet();
      (W !== J.sheet || U !== J.scrollX) && (J.x = 0), (W !== J.sheet || Z !== J.scrollY) && (J.y = 0), J.sheet = W, J.scrollX = U, J.scrollY = Z;
      const ce = r.current.scrollLeft, pe = r.current.scrollTop;
      Math.abs(U + J.x - ce) >= 1 && (_.current = !0, r.current.scrollLeft = U + J.x, setTimeout(() => {
        _.current = !1;
      }, 0)), Math.abs(Z + J.y - pe) >= 1 && (_.current = !0, r.current.scrollTop = Z + J.y, setTimeout(() => {
        _.current = !1;
      }, 0)), Y.renderSheet(), x.current = Y;
    });
    const { onPointerMove: D, onPointerDown: M, onPointerUp: O } = _b({
      model: R,
      workbookState: F,
      refresh: V,
      onColumnSelected: (j, Q) => {
        let G = j, A = j;
        if (Q) {
          const { range: b } = R.getSelectedView();
          G = Math.min(b[1], j, b[3]), A = Math.max(b[3], j, b[1]);
        }
        R.setSelectedCell(1, G), R.setSelectedRange(1, G, Le, A), V();
      },
      onRowSelected: (j, Q) => {
        let G = j, A = j;
        if (Q) {
          const { range: b } = R.getSelectedView();
          G = Math.min(b[0], j, b[2]), A = Math.max(b[2], j, b[0]);
        }
        R.setSelectedCell(G, 1), R.setSelectedRange(G, 1, A, Ie), V();
      },
      onAllSheetSelected: () => {
        R.setSelectedCell(1, 1), R.setSelectedRange(1, 1, Le, Ie), V();
      },
      onCellSelected: (j, Q) => {
        Q.preventDefault(), Q.stopPropagation(), R.setSelectedCell(j.row, j.column), V();
      },
      onAreaSelecting: (j) => {
        const Q = x.current;
        if (!Q)
          return;
        F.setSelecting(!0);
        const { row: G, column: A } = j;
        R.onAreaSelecting(G, A), Q.renderSheet(), V();
      },
      onAreaSelected: () => {
        F.setSelecting(!1);
        const j = F.getCopyStyles();
        if (j?.length) {
          R.onPasteStyles(j);
          const Q = x.current;
          if (!Q)
            return;
          Q.renderSheet();
        }
        F.setCopyStyles(null), o.current && (o.current.style.cursor = "auto"), V();
      },
      canvasElement: n,
      worksheetElement: o,
      worksheetCanvas: x
    }), B = () => {
      if (!r.current || !x.current || _.current)
        return;
      const j = r.current.scrollLeft, Q = r.current.scrollTop;
      x.current.setScrollPosition({ left: j, top: Q });
      const G = I.current;
      G.sheet = R.getSelectedSheet(), G.scrollX = R.getScrollX(), G.scrollY = R.getScrollY(), x.current.renderSheet();
    };
    return /* @__PURE__ */ l.jsxs($b, { ref: r, onScroll: B, className: "scroll", children: [
      /* @__PURE__ */ l.jsx(kb, { ref: s }),
      /* @__PURE__ */ l.jsxs(
        jb,
        {
          className: "sheet-container",
          ref: o,
          onPointerDown: M,
          onPointerMove: D,
          onPointerUp: O,
          onContextMenu: (j) => {
            j.preventDefault(), j.stopPropagation(), E({
              top: j.clientY,
              left: j.clientX
            });
            const Q = n.current;
            if (Q) {
              const G = Q.getBoundingClientRect(), A = j.clientX - G.x, b = j.clientY - G.y;
              if (A > re && A < G.width && b > 0 && b < ae) {
                S(!0);
                return;
              }
              if (A > 0 && A < re && b > ae && b < G.height) {
                C(!0);
                return;
              }
            }
            d(!0);
          },
          onDoubleClick: (j) => {
            const { sheet: Q, row: G, column: A } = R.getSelectedView(), b = R.getCellContent(Q, G, A), $ = R.getColumnWidth(Q, A) * Qn, z = R.getRowHeight(Q, G) * Jn;
            F.setEditingCell({
              sheet: Q,
              row: G,
              column: A,
              text: b,
              cursorStart: b.length,
              cursorEnd: b.length,
              focus: "cell",
              referencedRange: null,
              activeRanges: [],
              mode: "accept",
              editorWidth: $,
              editorHeight: z
            }), j.stopPropagation(), e.refresh();
          },
          children: [
            /* @__PURE__ */ l.jsx(Pb, { ref: n }),
            /* @__PURE__ */ l.jsx(Db, { ref: a }),
            /* @__PURE__ */ l.jsx(Nb, { ref: i, children: /* @__PURE__ */ l.jsx(
              Cl,
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
            /* @__PURE__ */ l.jsx(Ib, { ref: c }),
            /* @__PURE__ */ l.jsx(Fb, { ref: f }),
            /* @__PURE__ */ l.jsx(Ob, { ref: h }),
            /* @__PURE__ */ l.jsx(Ab, { ref: m }),
            /* @__PURE__ */ l.jsx(Mb, { ref: p })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        vb,
        {
          open: g,
          onClose: () => d(!1),
          anchorPosition: w,
          onInsertRowAbove: () => {
            const j = R.getSelectedView();
            R.insertRows(j.sheet, j.row, 1), d(!1);
          },
          onInsertRowBelow: () => {
            const j = R.getSelectedView();
            R.insertRows(j.sheet, j.row + 1, 1), d(!1);
          },
          onInsertColumnLeft: () => {
            const j = R.getSelectedView();
            R.insertColumns(j.sheet, j.column, 1), d(!1);
          },
          onInsertColumnRight: () => {
            const j = R.getSelectedView();
            R.insertColumns(j.sheet, j.column + 1, 1), d(!1);
          },
          onMoveColumnLeft: () => {
            const j = R.getSelectedView();
            R.moveColumn(j.sheet, j.column, -1), d(!1);
          },
          onMoveColumnRight: () => {
            const j = R.getSelectedView();
            R.moveColumn(j.sheet, j.column, 1), d(!1);
          },
          onMoveRowUp: () => {
            const j = R.getSelectedView();
            R.moveRow(j.sheet, j.row, -1), d(!1);
          },
          onMoveRowDown: () => {
            const j = R.getSelectedView();
            R.moveRow(j.sheet, j.row, 1), d(!1);
          },
          onFreezeColumns: () => {
            const j = R.getSelectedView();
            R.setFrozenColumnsCount(j.sheet, j.column), d(!1);
          },
          onFreezeRows: () => {
            const j = R.getSelectedView();
            R.setFrozenRowsCount(j.sheet, j.row), d(!1);
          },
          onUnfreezeColumns: () => {
            const j = R.getSelectedSheet();
            R.setFrozenColumnsCount(j, 0), d(!1);
          },
          onUnfreezeRows: () => {
            const j = R.getSelectedSheet();
            R.setFrozenRowsCount(j, 0), d(!1);
          },
          onDeleteRow: () => {
            const j = R.getSelectedView();
            R.deleteRows(j.sheet, j.row, 1), d(!1);
          },
          onDeleteColumn: () => {
            const j = R.getSelectedView();
            R.deleteColumns(j.sheet, j.column, 1), d(!1);
          },
          row: R.getSelectedView().row,
          column: Ve(R.getSelectedView().column)
        }
      ),
      /* @__PURE__ */ l.jsx(
        Cb,
        {
          open: v,
          onClose: () => S(!1),
          anchorPosition: w,
          onInsertColumnLeft: () => {
            const j = R.getSelectedView();
            R.insertColumns(j.sheet, j.column, 1), S(!1);
          },
          onInsertColumnRight: () => {
            const j = R.getSelectedView();
            R.insertColumns(j.sheet, j.column + 1, 1), S(!1);
          },
          onMoveColumnLeft: () => {
            const j = R.getSelectedView();
            R.moveColumn(j.sheet, j.column, -1), S(!1);
          },
          onMoveColumnRight: () => {
            const j = R.getSelectedView();
            R.moveColumn(j.sheet, j.column, 1), S(!1);
          },
          onFreezeColumns: () => {
            const j = R.getSelectedView();
            R.setFrozenColumnsCount(j.sheet, j.column), S(!1);
          },
          onUnfreezeColumns: () => {
            const j = R.getSelectedSheet();
            R.setFrozenColumnsCount(j, 0), S(!1);
          },
          onDeleteColumn: () => {
            const j = R.getSelectedView();
            R.deleteColumns(j.sheet, j.column, 1), S(!1);
          },
          column: Ve(R.getSelectedView().column),
          frozenColumnsCount: R.getFrozenColumnsCount(
            R.getSelectedSheet()
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        Sb,
        {
          open: T,
          onClose: () => C(!1),
          anchorPosition: w,
          onInsertRowAbove: () => {
            const j = R.getSelectedView();
            R.insertRows(j.sheet, j.row, 1), C(!1);
          },
          onInsertRowBelow: () => {
            const j = R.getSelectedView();
            R.insertRows(j.sheet, j.row + 1, 1), C(!1);
          },
          onMoveRowUp: () => {
            const j = R.getSelectedView();
            R.moveRow(j.sheet, j.row, -1), C(!1);
          },
          onMoveRowDown: () => {
            const j = R.getSelectedView();
            R.moveRow(j.sheet, j.row, 1), C(!1);
          },
          onFreezeRows: () => {
            const j = R.getSelectedView();
            R.setFrozenRowsCount(j.sheet, j.row), C(!1);
          },
          onUnfreezeRows: () => {
            const j = R.getSelectedSheet();
            R.setFrozenRowsCount(j, 0), C(!1);
          },
          onDeleteRow: () => {
            const j = R.getSelectedView();
            R.deleteRows(j.sheet, j.row, 1), C(!1);
          },
          row: R.getSelectedView().row,
          frozenRowsCount: R.getFrozenRowsCount(R.getSelectedSheet())
        }
      )
    ] });
  }
), kb = ne("div")`
  position: absolute;
  height: 5000px;
  width: 5000px;
`, jb = ne("div")`
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
`, $b = ne("div")({
  position: "absolute",
  overflow: "scroll",
  top: xl + 1,
  left: 0,
  right: 0,
  bottom: bl + 1,
  overscrollBehavior: "none"
}), Pb = ne("canvas")`
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 40px;
`, Ob = ne("div")`
  position: absolute;
  top: 0px;
  display: none;
  height: 100%;
  width: 0px;
  border-left: 1px dashed ${Ke};
`, Mb = ne("div")`
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
`, Ab = ne("div")`
  position: absolute;
  display: none;
  left: 0px;
  height: 0px;
  width: 100%;
  border-top: 1px dashed ${Ke};
`, Ib = ne("div")`
  position: absolute;
  border: 0px solid ${Ke};
  border-radius: 1px;
  background-color: ${wf};
`, Db = ne("div")`
  position: absolute;
  border: 2px solid ${Ke};
  border-radius: 3px;
  word-break: break-word;
  font-size: 13px;
  display: flex;
  box-shadow: inset 0 0 0 1px white;
`, Fb = ne("div")`
  position: absolute;
  border: 1px dashed ${Ke};
  border-radius: 3px;
`, Nb = ne("div")`
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
  outline: 3px solid ${vf};
  z-index: 1000;
  span {
    min-width: 1px;
  }
  font-family: monospace;
  border: 2px solid ${Ke};
`, Bb = (e) => ({ onKeyDown: De(
  (n) => {
    const { key: o } = n, r = o.toLowerCase(), { root: i } = e;
    if (!i.current || n.target !== i.current)
      return;
    const s = n.metaKey || n.ctrlKey, a = n.shiftKey, c = n.altKey;
    if (s && !a && !c) {
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
      Ef(o) && (e.onNavigationToEdge(o), n.stopPropagation(), n.preventDefault());
      return;
    }
    if (s && a && !c) {
      r === "z" && (e.onRedo(), n.stopPropagation(), n.preventDefault());
      return;
    }
    if (a && !c && !s)
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
    if (c && !s && !a) {
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
    if (!(s || c)) {
      if (Cf(o) || o === "Backspace") {
        const f = o === "Backspace" ? "" : o;
        e.onEditKeyPressStart(f), n.stopPropagation(), n.preventDefault();
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
) }), zb = (e) => {
  const { model: t, workbookState: n } = e, o = ie(null), r = ie(null), i = oe(0)[1], [s, a] = oe(!1), [c, f] = oe(Rh), [h, m] = oe("namedRanges"), p = De((b) => {
    m(b), a(!0);
  }, []), g = t.getWorksheetsProperties().map(
    ({ name: b, color: $, sheet_id: z, state: N }) => ({ name: b, color: $ || "#FFF", sheetId: z, state: N })
  ), d = De(() => {
    if (o.current) {
      o.current.focus({ preventScroll: !0 });
      const b = window.getSelection();
      if (b) {
        b.empty();
        const $ = new Range();
        $.setStart(o.current.firstChild, 0), $.setEnd(o.current.firstChild, 0), b.addRange($);
      }
    }
  }, []), v = () => {
    t.redo(), i((b) => b + 1);
  }, S = () => {
    t.undo(), i((b) => b + 1);
  }, T = (b, $) => {
    const {
      sheet: z,
      range: [N, K, Y, U]
    } = t.getSelectedView(), Z = Math.min(N, Y), ee = Math.min(K, U), q = {
      sheet: z,
      row: Z,
      column: ee,
      width: Math.abs(U - K) + 1,
      height: Math.abs(Y - N) + 1
    };
    t.updateRangeStyle(q, b, $), i((J) => J + 1);
  }, C = (b) => {
    T("font.u", `${b}`);
  }, w = (b) => {
    T("font.i", `${b}`);
  }, E = (b) => {
    T("font.b", `${b}`);
  }, _ = (b) => {
    T("font.strike", `${b}`);
  }, I = (b) => {
    T("alignment.horizontal", b);
  }, R = (b) => {
    T("alignment.vertical", b);
  }, F = (b) => {
    T("alignment.wrap_text", `${b}`);
  }, V = (b) => {
    T("font.color", b);
  }, H = (b) => {
    T("fill.fg_color", b);
  }, y = (b) => {
    T("num_fmt", b);
  }, D = (b) => {
    T("font.size_delta", `${b}`);
  }, M = () => {
    const {
      sheet: b,
      range: [$, z, N, K]
    } = t.getSelectedView(), Y = Math.min($, N), U = Math.min(z, K), Z = Math.max($, N), ee = Math.max(z, K), q = [];
    for (let W = Y; W <= Z; W++) {
      const ce = [];
      for (let pe = U; pe <= ee; pe++)
        ce.push(t.getCellStyle(b, W, pe));
      q.push(ce);
    }
    n.setCopyStyles(q);
    const J = o.current?.getElementsByClassName("sheet-container")[0];
    if (J) {
      const W = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paint-roller" style="transform:rotate(-8deg)"><rect width="16" height="6" x="2" y="2" rx="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect width="4" height="6" x="8" y="16" rx="1"></rect></svg>';
      J.style.cursor = `url('data:image/svg+xml;utf8,${encodeURIComponent(W)}'), auto`;
    }
  }, O = t.getFmtSettings(), { onKeyDown: B } = Bb({
    onCellsDeleted: () => {
      const {
        sheet: b,
        range: [$, z, N, K]
      } = t.getSelectedView(), Y = Math.min($, N), U = Math.min(z, K), Z = Math.abs(K - z), ee = Math.abs(N - $);
      t.rangeClearContents(
        b,
        Y,
        U,
        Y + ee,
        U + Z
      ), i((q) => q + 1);
    },
    onExpandAreaSelectedKeyboard: (b) => {
      t.onExpandSelectedRange(b), i(($) => $ + 1);
    },
    onEditKeyPressStart: (b) => {
      const { sheet: $, row: z, column: N } = t.getSelectedView(), K = t.getColumnWidth($, N) * Qn, Y = t.getRowHeight($, z) * Jn;
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
        editorWidth: K,
        editorHeight: Y
      }), i((U) => U + 1);
    },
    onCellEditStart: () => {
      const { sheet: b, row: $, column: z } = t.getSelectedView(), N = t.getCellContent(b, $, z), K = t.getColumnWidth(b, z) * Qn, Y = t.getRowHeight(b, $) * Jn;
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
        editorWidth: K,
        editorHeight: Y
      }), i((U) => U + 1);
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
      t.setSelectedCell($[1], Ie), t.setTopLeftVisibleCell(b.top_row, Ie - 5), i((z) => z + 1);
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
      t.setSelectedRange(b, 1, b, Ie), i(($) => $ + 1);
    },
    root: o
  });
  Be(() => {
    o.current && (n.getEditingCell() || d());
  });
  const j = De(() => {
    const {
      row: b,
      column: $,
      range: [z, N, K, Y]
    } = t.getSelectedView();
    return Sf(
      { rowStart: z, rowEnd: K, columnStart: N, columnEnd: Y },
      { row: b, column: $ }
    );
  }, [t]), Q = () => {
    if (n.getEditingCell())
      return n.getEditingText();
    const { sheet: $, row: z, column: N } = t.getSelectedView();
    return t.getCellContent($, z, N);
  }, A = De(() => {
    const { sheet: b, row: $, column: z } = t.getSelectedView();
    return t.getCellStyle(b, $, z);
  }, [t])();
  return /* @__PURE__ */ l.jsxs(
    Hb,
    {
      ref: o,
      onKeyDown: B,
      tabIndex: 0,
      onClick: (b) => {
        n.getEditingCell() ? b.stopPropagation() : d();
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
        let N = null, K = null;
        for (let Y = 0; Y < z.length && (N = z[Y], K = b.clipboardData.getData(N), !K); Y += 1)
          ;
        if (!(!N || !K)) {
          if (N === "application/json") {
            const Y = JSON.parse(K), U = /* @__PURE__ */ new Map(), Z = Y.sheetData;
            for (const ee of Object.keys(Z)) {
              const q = Z[ee], J = /* @__PURE__ */ new Map();
              for (const W of Object.keys(q))
                J.set(Number.parseInt(W, 10), q[W]);
              U.set(Number.parseInt(ee, 10), J);
            }
            t.pasteFromClipboard(
              Y.sheet,
              Y.area,
              U,
              Y.type === "cut"
            ), i((ee) => ee + 1);
          } else if (N === "text/plain") {
            const {
              sheet: Y,
              range: [U, Z, ee, q]
            } = t.getSelectedView(), J = Math.min(U, ee), W = Math.min(Z, q), ce = {
              sheet: Y,
              row: J,
              column: W,
              width: Math.abs(q - Z) + 1,
              height: Math.abs(ee - U) + 1
            };
            t.pasteCsvText(ce, K), i((pe) => pe + 1);
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
        const K = {};
        $.data.forEach((U, Z) => {
          const ee = {};
          U.forEach((q, J) => {
            ee[J] = q;
          }), K[Z] = ee;
        });
        const Y = JSON.stringify({
          type: "copy",
          area: $.range,
          sheetData: K,
          sheet: z,
          clipboardId: N
        });
        b.clipboardData.setData("text/plain", $.csv.trim()), b.clipboardData.setData("application/json", Y), b.preventDefault(), b.stopPropagation();
      },
      onCut: (b) => {
        const $ = t.copyToClipboard(), z = t.getSelectedSheet();
        let N = sessionStorage.getItem(
          Ro
        );
        N || (N = Ss(), sessionStorage.setItem(Ro, N));
        const K = {};
        $.data.forEach((U, Z) => {
          const ee = {};
          U.forEach((q, J) => {
            ee[J] = q;
          }), K[Z] = ee;
        });
        const Y = JSON.stringify({
          type: "cut",
          area: $.range,
          sheetData: K,
          sheet: z,
          clipboardId: N
        });
        b.clipboardData.setData("text/plain", $.csv), b.clipboardData.setData("application/json", Y), n.setCutRange({
          sheet: t.getSelectedSheet(),
          rowStart: $.range[0],
          rowEnd: $.range[2],
          columnStart: $.range[1],
          columnEnd: $.range[3]
        }), b.preventDefault(), b.stopPropagation(), i((U) => U + 1);
      },
      children: [
        /* @__PURE__ */ l.jsx(
          ax,
          {
            canUndo: t.canUndo(),
            canRedo: t.canRedo(),
            onRedo: v,
            onUndo: S,
            onToggleUnderline: C,
            onToggleBold: E,
            onToggleItalic: w,
            onToggleStrike: _,
            onToggleHorizontalAlign: I,
            onToggleVerticalAlign: R,
            onToggleWrapText: F,
            onCopyStyles: M,
            onTextColorPicked: V,
            onFillColorPicked: H,
            onNumberFormatPicked: y,
            onClearFormatting: () => {
              const {
                sheet: b,
                range: [$, z, N, K]
              } = t.getSelectedView();
              t.rangeClearFormatting(
                b,
                $,
                z,
                N,
                K
              ), i((Y) => Y + 1);
            },
            onIncreaseFontSize: (b) => {
              D(b);
            },
            onDownloadPNG: () => {
              const b = r.current?.getCanvas();
              if (!b)
                return;
              const {
                range: [$, z, N, K]
              } = t.getSelectedView();
              let [Y, U] = b.getCoordinatesByCell(
                $,
                z
              );
              const [Z, ee] = b.getCoordinatesByCell(
                N + 1,
                K + 1
              ), q = (Z - Y) * At, J = (ee - U) * At;
              Y *= At, U *= At;
              const W = document.createElement("canvas");
              W.width = q, W.height = J;
              const ce = W.getContext("2d");
              if (!ce)
                return;
              ce.drawImage(
                b.canvas,
                Y,
                U,
                q,
                J,
                0,
                0,
                q,
                J
              );
              const pe = document.createElement("a");
              pe.href = W.toDataURL("image/png"), pe.download = "ironcalc.png", pe.click();
            },
            onBorderChanged: (b) => {
              const {
                sheet: $,
                range: [z, N, K, Y]
              } = t.getSelectedView(), U = Math.min(z, K), Z = Math.min(N, Y), ee = Math.abs(Y - N) + 1, q = Math.abs(K - z) + 1, J = {
                type: b.border,
                item: b
              };
              t.setAreaWithBorder(
                { sheet: $, row: U, column: Z, width: ee, height: q },
                J
              ), i((W) => W + 1);
            },
            fillColor: A.fill.fg_color || "#FFFFFF",
            fontColor: A.font.color,
            fontSize: A.font.sz,
            bold: A.font.b,
            underline: A.font.u,
            italic: A.font.i,
            strike: A.font.strike,
            horizontalAlign: A.alignment ? A.alignment.horizontal : "general",
            verticalAlign: A.alignment?.vertical ? A.alignment.vertical : "bottom",
            wrapText: A.alignment?.wrap_text || !1,
            canEdit: !0,
            numFmt: A.num_fmt,
            showGridLines: t.getShowGridLines(t.getSelectedSheet()),
            onToggleShowGridLines: (b) => {
              const $ = t.getSelectedSheet();
              t.setShowGridLines($, b), i((z) => z + 1);
            },
            formatOptions: O
          }
        ),
        /* @__PURE__ */ l.jsxs(Lb, { $drawerWidth: s ? c : 0, children: [
          /* @__PURE__ */ l.jsx(
            Of,
            {
              cellAddress: j(),
              formulaValue: Q(),
              onChange: () => {
                i((b) => b + 1), d();
              },
              onTextUpdated: () => {
                i((b) => b + 1);
              },
              model: t,
              workbookState: n,
              openDrawer: () => {
                p("namedRanges");
              },
              canEdit: !0
            }
          ),
          /* @__PURE__ */ l.jsx(
            Tb,
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
            ib,
            {
              sheets: g,
              selectedIndex: t.getSelectedSheet(),
              workbookState: n,
              onSheetSelected: (b) => {
                g[b].state !== "visible" && t.unhideSheet(b), t.setSelectedSheet(b), i(($) => $ + 1);
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
                p("regionalSettings");
              },
              model: t
            }
          )
        ] }),
        /* @__PURE__ */ l.jsx(
          jh,
          {
            isOpen: s,
            onClose: () => a(!1),
            width: c,
            onWidthChange: f,
            model: t,
            onUpdate: () => {
              i((b) => b + 1);
            },
            getSelectedArea: () => {
              const b = t.getWorksheetsProperties().map((z) => z.name), $ = t.getSelectedView();
              return yl($, b);
            },
            drawerType: h,
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
}, Lb = ne("div")(
  ({ $drawerWidth: e }) => ({
    position: "absolute",
    top: `${Yo}px`,
    width: `calc(100% - ${e}px)`,
    height: `calc(100% - ${Yo}px)`
  })
), Hb = ne("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  font-family: ${({ theme: e }) => e.typography.fontFamily};

  &:focus {
    outline: none;
  }
`, Vb = { redo: "Wiederholen", undo: "Rückgängig", copy_styles: "Formatierung kopieren", clear_formatting: "Formatierung löschen", euro: "Als Euro formatieren", percentage: "Als Prozent formatieren", bold: "Fett", italic: "Kursiv", underline: "Unterstrichen", strike_through: "Durchgestrichen", align_left: "Links ausrichten", align_right: "Rechts ausrichten", align_center: "Zentrieren", format_number: "Zahlenformat", font_color: "Schriftfarbe", fill_color: "Füllfarbe", increase_font_size: "Schriftgröße erhöhen", decrease_font_size: "Schriftgröße verringern", decimal_places_increase: "Dezimalstellen erhöhen", decimal_places_decrease: "Dezimalstellen verringern", show_hide_grid_lines: "Gitternetzlinien ein-/ausblenden", named_ranges: "Benannte Bereiche", vertical_align_bottom: "Unten ausrichten", vertical_align_middle: "Mittig ausrichten", vertical_align_top: "Oben ausrichten", selected_png: "Ausgewählten Bereich als PNG exportieren", wrap_text: "Text umbrechen", scroll_left: "Nach links scrollen", scroll_right: "Nach rechts scrollen", format_menu: { auto: "Automatisch", number: "Zahl", percentage: "Prozent", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "Britisches Pfund (GBP)", date_short: "Kurzes Datum", date_long: "Langes Datum", custom: "Benutzerdefiniert", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Rahmen", all: "Alle Rahmen", inner: "Innere Rahmen", outer: "Äußere Rahmen", top: "Oberer Rahmen", bottom: "Unterer Rahmen", clear: "Rahmen entfernen", left: "Linker Rahmen", right: "Rechter Rahmen", horizontal: "Horizontale Rahmen", vertical: "Vertikale Rahmen", color: "Rahmenfarbe", style: "Rahmenstil" } }, Wb = { title: "Benutzerdefiniertes Zahlenformat", label: "Zahlenformat", close: "Dialog schließen", save: "Speichern" }, Ub = { rename: "Speichern", label: "Neuer Name", title: "Tabellenblatt umbenennen", close: "Dialog schließen" }, Gb = { title: "Bist du sicher?", message: "Das Tabellenblatt '{{sheetName}}' wird gelöscht.", confirm: "Ja, Tabellenblatt löschen", cancel: "Abbrechen" }, Yb = { rename: "Umbenennen", change_color: "Farbe ändern", delete: "Löschen", hide_sheet: "Tabellenblatt ausblenden" }, qb = { update: "Aktualisieren", label: "Formel", title: "Formel aktualisieren" }, Kb = { manage_named_ranges: "Benannte Bereiche verwalten" }, Xb = { add_sheet: "Tabellenblatt hinzufügen", sheet_list: "Tabellenblattliste" }, Zb = { title: "Benannte Bereiche", empty_message1: "Es wurden noch keine benannten Bereiche hinzugefügt.", empty_message2: "Klicke auf „Neu hinzufügen“, um einen anzulegen.", name: "Name", range: "Geltungsbereich", scope: "Bereich", help: "Über benannte Bereiche", new: "Neu hinzufügen", workbook: "Arbeitsmappe", global: "(Global)", close: "Dialog schließen", delete: "Bereich löschen", edit: "Bereich bearbeiten", back_to_list: "Zurück zur Liste", add_new_range: "Neuen Bereich hinzufügen", edit_range: "Bereich bearbeiten", new_named_range: "Neuer benannter Bereich", range_name: "Bereichsname", enter_range_name: "Bereichsnamen eingeben", scope_label: "Geltungsbereich", scope_helper: "Der Geltungsbereich bestimmt, wo der benannte Bereich verfügbar ist.", refers_to: "Bezieht sich auf", enter_formula: "Formel eingeben", cancel: "Abbrechen", apply: "Änderungen übernehmen", discard: "Änderungen verwerfen", default_range_prefix: "Bereich", errors: { range_name_required: "Der Bereichsname ist erforderlich", name_cannot_contain_spaces: "Der Name darf keine Leerzeichen enthalten", name_cannot_start_with_number: "Der Name darf nicht mit einer Zahl beginnen", name_invalid_characters: "Der Name enthält ungültige Zeichen. Verwende nur Buchstaben, Zahlen, Unterstriche und Punkte. Muss mit einem Buchstaben oder Unterstrich beginnen.", name_already_exists: "Dieser Name existiert bereits im ausgewählten Geltungsbereich" } }, Jb = { insert_row_above: "1 Zeile oberhalb einfügen", insert_row_below: "1 Zeile unterhalb einfügen", insert_column_before: "1 Spalte links einfügen", insert_column_after: "1 Spalte rechts einfügen", freeze_columns: "Bis Spalte '{{column}}' fixieren", freeze_rows: "Bis Zeile '{{row}}' fixieren", unfreeze_rows: "Fixierung der Zeilen aufheben", unfreeze_columns: "Fixierung der Spalten aufheben", delete_row: "Zeile '{{row}}' löschen", delete_column: "Spalte '{{column}}' löschen", freeze: "Fixieren", insert_row: "Zeile einfügen", insert_column: "Spalte einfügen", move_row: "Zeile verschieben", move_column: "Spalte verschieben", move_row_up: "Zeile nach oben verschieben", move_row_down: "Zeile nach unten verschieben", move_column_left: "Spalte nach links verschieben", move_column_right: "Spalte nach rechts verschieben" }, Qb = { apply: "Farbe hinzufügen", cancel: "Abbrechen", add: "Neue Farbe hinzufügen", default: "Standardfarbe", no_fill: "Keine Füllung", recent: "Zuletzt verwendet" }, e1 = { resize_drawer: "Größe der Seitenleiste ändern", close: "Schließen" }, t1 = { open_regional_settings: "Regionaleinstellungen öffnen", title: "Regionaleinstellungen", close: "Dialog schließen", locale: { title: "Regionaleinstellung", locale_label: "Regionaleinstellung", locale_example1: "Zahl", locale_example2: "Datum und Uhrzeit", locale_example3: "Formeltrennzeichen", delimiter_comma: "Komma", delimiter_semicolon: "Semikolon" }, language: { title: "Sprache", language_label: "Engine-Sprache", language_helper: "Legt die Sprache für Funktionsnamen und Fehlermeldungen fest.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Englisch", es: "Spanisch", fr: "Französisch", de: "Deutsch", it: "Italienisch" } }, timezone: { title: "Zeitzone", timezone_label: "Zeitzone", timezone_helper: "Das Ändern dieser Einstellung wirkt sich auf datums- und zeitbezogene Funktionen aus, einschließlich HEUTE() und JETZT()." } }, n1 = {
  toolbar: Vb,
  num_fmt: Wb,
  sheet_rename: Ub,
  sheet_delete: Gb,
  sheet_tab: Yb,
  formula_input: qb,
  formula_bar: Kb,
  navigation: Xb,
  name_manager_dialog: Zb,
  cell_context: Jb,
  color_picker: Qb,
  right_drawer: e1,
  regional_settings: t1
}, o1 = { redo: "Redo", undo: "Undo", copy_styles: "Copy styles", clear_formatting: "Clear formatting", euro: "Format as Euro", percentage: "Format as percentage", bold: "Bold", italic: "Italic", underline: "Underline", strike_through: "Strikethrough", align_left: "Align left", align_right: "Align right", align_center: "Align center", format_number: "Format number", font_color: "Font color", fill_color: "Fill color", increase_font_size: "Increase font size", decrease_font_size: "Decrease font size", decimal_places_increase: "Increase decimal places", decimal_places_decrease: "Decrease decimal places", show_hide_grid_lines: "Show/hide grid lines", named_ranges: "Named ranges", vertical_align_bottom: "Align bottom", vertical_align_middle: "Align middle", vertical_align_top: "Align top", selected_png: "Export selected area as PNG", wrap_text: "Wrap text", scroll_left: "Scroll left", scroll_right: "Scroll right", format_menu: { auto: "Auto", number: "Number", percentage: "Percentage", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "British Pound (GBP)", date_short: "Short date", date_long: "Long date", custom: "Custom", number_example: "1,000.00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Borders", all: "All borders", inner: "Inner borders", outer: "Outer borders", top: "Top borders", bottom: "Bottom borders", clear: "Clear borders", left: "Left borders", right: "Right borders", horizontal: "Horizontal borders", vertical: "Vertical borders", color: "Border color", style: "Border style" } }, r1 = { title: "Custom number format", label: "Number format", close: "Close dialog", save: "Save" }, i1 = { rename: "Save", label: "New name", title: "Rename Sheet", close: "Close dialog" }, s1 = { title: "Are you sure?", message: "The sheet '{{sheetName}}' will be deleted.", confirm: "Yes, delete sheet", cancel: "Cancel" }, a1 = { rename: "Rename", change_color: "Change Color", delete: "Delete", hide_sheet: "Hide sheet" }, l1 = { update: "Update", label: "Formula", title: "Update formula" }, c1 = { manage_named_ranges: "Manage Named Ranges" }, u1 = { add_sheet: "Add sheet", sheet_list: "Sheet list" }, d1 = { title: "Named Ranges", empty_message1: "No named ranges added yet.", empty_message2: "Click on 'Add new' to add one.", name: "Name", range: "Scope", scope: "Range", help: "About Named Ranges", new: "Add new", workbook: "Workbook", global: "(Global)", close: "Close dialog", delete: "Delete Range", edit: "Edit Range", back_to_list: "Back to list", add_new_range: "Add a new range", edit_range: "Edit range", new_named_range: "New Named Range", range_name: "Range name", enter_range_name: "Enter range name", scope_label: "Scope", scope_helper: "The scope of the named range determines where it is available.", refers_to: "Refers to", enter_formula: "Enter formula", cancel: "Cancel", apply: "Apply changes", discard: "Discard changes", default_range_prefix: "Range", errors: { range_name_required: "Range name is required", name_cannot_contain_spaces: "Name cannot contain spaces", name_cannot_start_with_number: "Name cannot start with a number", name_invalid_characters: "Name contains invalid characters. Use only letters, numbers, underscores, and periods. Must start with a letter or underscore.", name_already_exists: "This name already exists in the selected scope" } }, p1 = { insert_row_above: "Insert 1 row above", insert_row_below: "Insert 1 row below", insert_column_before: "Insert 1 column left", insert_column_after: "Insert 1 column right", freeze_columns: "Freeze up to column '{{column}}'", freeze_rows: "Freeze up to row '{{row}}'", unfreeze_rows: "Unfreeze rows", unfreeze_columns: "Unfreeze columns", delete_row: "Delete row '{{row}}'", delete_column: "Delete column '{{column}}'", freeze: "Freeze", insert_row: "Insert row", insert_column: "Insert column", move_row: "Move row", move_column: "Move column", move_row_up: "Move row up", move_row_down: "Move row down", move_column_left: "Move column left", move_column_right: "Move column right" }, f1 = { apply: "Add color", cancel: "Cancel", add: "Add new color", default: "Default color", no_fill: "No fill", recent: "Recent" }, h1 = { resize_drawer: "Resize drawer", close: "Close" }, m1 = { open_regional_settings: "Open regional settings", title: "Regional Settings", close: "Close dialog", locale: { title: "Locale", locale_label: "Locale", locale_example1: "Number", locale_example2: "Date and Time", locale_example3: "Formula delimiter", delimiter_comma: "Comma", delimiter_semicolon: "Semicolon" }, language: { title: "Language", language_label: "Engine Language", language_helper: "Controls the language used in function names and error messages.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "English", es: "Spanish", fr: "French", de: "German", it: "Italian" } }, timezone: { title: "Timezone", timezone_label: "Timezone", timezone_helper: "Modifying this setting will impact date- and time-related functions, including TODAY() and NOW()." } }, Da = {
  toolbar: o1,
  num_fmt: r1,
  sheet_rename: i1,
  sheet_delete: s1,
  sheet_tab: a1,
  formula_input: l1,
  formula_bar: c1,
  navigation: u1,
  name_manager_dialog: d1,
  cell_context: p1,
  color_picker: f1,
  right_drawer: h1,
  regional_settings: m1
}, g1 = { redo: "Rehacer", undo: "Deshacer", copy_styles: "Copiar estilos", clear_formatting: "Borrar formato", euro: "Formato Euro", percentage: "Formato porcentaje", bold: "Negrita", italic: "Cursiva", underline: "Subrayado", strike_through: "Tachado", align_left: "Alinear a la izquierda", align_right: "Alinear a la derecha", align_center: "Alinear al centro", format_number: "Formato de número", font_color: "Color de fuente", fill_color: "Color de relleno", increase_font_size: "Aumentar tamaño de fuente", decrease_font_size: "Disminuir tamaño de fuente", decimal_places_increase: "Aumentar decimales", decimal_places_decrease: "Disminuir decimales", show_hide_grid_lines: "Mostrar/ocultar líneas de cuadrícula", named_ranges: "Rangos con nombre", vertical_align_bottom: "Alinear abajo", vertical_align_middle: "Alinear al medio", vertical_align_top: "Alinear arriba", selected_png: "Exportar área seleccionada como PNG", wrap_text: "Ajustar texto", scroll_left: "Desplazar a la izquierda", scroll_right: "Desplazar a la derecha", format_menu: { auto: "Automático", number: "Número", percentage: "Porcentaje", currency_eur: "Euro (EUR)", currency_usd: "Dólar (USD)", currency_gbp: "Libra esterlina (GBP)", date_short: "Fecha corta", date_long: "Fecha larga", custom: "Personalizado", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordes", all: "Todos los bordes", inner: "Bordes internos", outer: "Bordes externos", top: "Bordes superiores", bottom: "Bordes inferiores", clear: "Quitar bordes", left: "Bordes izquierdos", right: "Bordes derechos", horizontal: "Bordes horizontales", vertical: "Bordes verticales", color: "Color del borde", style: "Estilo del borde" } }, x1 = { title: "Formato de número personalizado", label: "Formato de número", close: "Cerrar diálogo", save: "Guardar" }, b1 = { rename: "Guardar", label: "Nuevo nombre", title: "Renombrar hoja", close: "Cerrar diálogo" }, y1 = { title: "¿Estás seguro?", message: "La hoja '{{sheetName}}' será eliminada.", confirm: "Sí, eliminar hoja", cancel: "Cancelar" }, v1 = { rename: "Renombrar", change_color: "Cambiar color", delete: "Eliminar", hide_sheet: "Ocultar hoja" }, w1 = { update: "Actualizar", label: "Fórmula", title: "Actualizar fórmula" }, C1 = { manage_named_ranges: "Gestionar rangos con nombre" }, E1 = { add_sheet: "Añadir hoja", sheet_list: "Lista de hojas" }, S1 = { title: "Rangos con nombre", empty_message1: "Aún no se han añadido rangos con nombre.", empty_message2: "Haz clic en 'Añadir nuevo' para agregar uno.", name: "Nombre", range: "Ámbito", scope: "Rango", help: "Acerca de los rangos con nombre", new: "Añadir nuevo", workbook: "Libro", global: "(Global)", close: "Cerrar diálogo", delete: "Eliminar rango", edit: "Editar rango", back_to_list: "Volver a la lista", add_new_range: "Añadir un nuevo rango", edit_range: "Editar rango", new_named_range: "Nuevo rango con nombre", range_name: "Nombre del rango", enter_range_name: "Introduce el nombre del rango", scope_label: "Ámbito", scope_helper: "El ámbito del rango con nombre determina dónde está disponible.", refers_to: "Hace referencia a", enter_formula: "Introduce la fórmula", cancel: "Cancelar", apply: "Aplicar cambios", discard: "Descartar cambios", default_range_prefix: "Rango", errors: { range_name_required: "El nombre del rango es obligatorio", name_cannot_contain_spaces: "El nombre no puede contener espacios", name_cannot_start_with_number: "El nombre no puede empezar con un número", name_invalid_characters: "El nombre contiene caracteres no válidos. Usa solo letras, números, guiones bajos y puntos. Debe empezar con una letra o guion bajo.", name_already_exists: "Este nombre ya existe en el ámbito seleccionado" } }, _1 = { insert_row_above: "Insertar 1 fila arriba", insert_row_below: "Insertar 1 fila abajo", insert_column_before: "Insertar 1 columna a la izquierda", insert_column_after: "Insertar 1 columna a la derecha", freeze_columns: "Congelar hasta la columna '{{column}}'", freeze_rows: "Congelar hasta la fila '{{row}}'", unfreeze_rows: "Descongelar filas", unfreeze_columns: "Descongelar columnas", delete_row: "Eliminar fila '{{row}}'", delete_column: "Eliminar columna '{{column}}'", freeze: "Congelar", insert_row: "Insertar fila", insert_column: "Insertar columna", move_row: "Mover fila", move_column: "Mover columna", move_row_up: "Mover fila arriba", move_row_down: "Mover fila abajo", move_column_left: "Mover columna a la izquierda", move_column_right: "Mover columna a la derecha" }, R1 = { apply: "Añadir color", cancel: "Cancelar", add: "Añadir nuevo color", default: "Color predeterminado", no_fill: "Sin relleno", recent: "Recientes" }, T1 = { resize_drawer: "Cambiar tamaño del panel", close: "Cerrar" }, k1 = { open_regional_settings: "Abrir configuración regional", title: "Configuración regional", close: "Cerrar diálogo", locale: { title: "Configuración regional", locale_label: "Configuración regional", locale_example1: "Número", locale_example2: "Fecha y hora", locale_example3: "Delimitador de fórmulas", delimiter_comma: "Coma", delimiter_semicolon: "Punto y coma" }, language: { title: "Idioma", language_label: "Idioma del motor", language_helper: "Controla el idioma usado en los nombres de funciones y los mensajes de error.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Inglés", es: "Español", fr: "Francés", de: "Alemán", it: "Italiano" } }, timezone: { title: "Zona horaria", timezone_label: "Zona horaria", timezone_helper: "Modificar esta configuración afectará a las funciones relacionadas con fecha y hora, incluyendo HOY() y AHORA()." } }, j1 = {
  toolbar: g1,
  num_fmt: x1,
  sheet_rename: b1,
  sheet_delete: y1,
  sheet_tab: v1,
  formula_input: w1,
  formula_bar: C1,
  navigation: E1,
  name_manager_dialog: S1,
  cell_context: _1,
  color_picker: R1,
  right_drawer: T1,
  regional_settings: k1
}, $1 = { redo: "Rétablir", undo: "Annuler", copy_styles: "Copier les styles", clear_formatting: "Effacer la mise en forme", euro: "Format Euro", percentage: "Format pourcentage", bold: "Gras", italic: "Italique", underline: "Souligné", strike_through: "Barré", align_left: "Aligner à gauche", align_right: "Aligner à droite", align_center: "Centrer", format_number: "Format de nombre", font_color: "Couleur de police", fill_color: "Couleur de remplissage", increase_font_size: "Augmenter la taille de la police", decrease_font_size: "Diminuer la taille de la police", decimal_places_increase: "Augmenter les décimales", decimal_places_decrease: "Diminuer les décimales", show_hide_grid_lines: "Afficher/masquer le quadrillage", named_ranges: "Plages nommées", vertical_align_bottom: "Aligner en bas", vertical_align_middle: "Aligner au milieu", vertical_align_top: "Aligner en haut", selected_png: "Exporter la zone sélectionnée en PNG", wrap_text: "Renvoyer à la ligne", scroll_left: "Faire défiler vers la gauche", scroll_right: "Faire défiler vers la droite", format_menu: { auto: "Automatique", number: "Nombre", percentage: "Pourcentage", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "Livre sterling (GBP)", date_short: "Date courte", date_long: "Date longue", custom: "Personnalisé", number_example: "1 000,00", percentage_example: "10 %", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordures", all: "Toutes les bordures", inner: "Bordures intérieures", outer: "Bordures extérieures", top: "Bordures supérieures", bottom: "Bordures inférieures", clear: "Supprimer les bordures", left: "Bordures gauches", right: "Bordures droites", horizontal: "Bordures horizontales", vertical: "Bordures verticales", color: "Couleur de bordure", style: "Style de bordure" } }, P1 = { title: "Format de nombre personnalisé", label: "Format de nombre", close: "Fermer la boîte de dialogue", save: "Enregistrer" }, O1 = { rename: "Enregistrer", label: "Nouveau nom", title: "Renommer la feuille", close: "Fermer la boîte de dialogue" }, M1 = { title: "Êtes-vous sûr ?", message: "La feuille « {{sheetName}} » sera supprimée.", confirm: "Oui, supprimer la feuille", cancel: "Annuler" }, A1 = { rename: "Renommer", change_color: "Changer la couleur", delete: "Supprimer", hide_sheet: "Masquer la feuille" }, I1 = { update: "Mettre à jour", label: "Formule", title: "Mettre à jour la formule" }, D1 = { manage_named_ranges: "Gérer les plages nommées" }, F1 = { add_sheet: "Ajouter une feuille", sheet_list: "Liste des feuilles" }, N1 = { title: "Plages nommées", empty_message1: "Aucune plage nommée n’a encore été ajoutée.", empty_message2: "Cliquez sur « Ajouter » pour en créer une.", name: "Nom", range: "Portée", scope: "Plage", help: "À propos des plages nommées", new: "Ajouter", workbook: "Classeur", global: "(Global)", close: "Fermer la boîte de dialogue", delete: "Supprimer la plage", edit: "Modifier la plage", back_to_list: "Retour à la liste", add_new_range: "Ajouter une nouvelle plage", edit_range: "Modifier la plage", new_named_range: "Nouvelle plage nommée", range_name: "Nom de la plage", enter_range_name: "Saisir le nom de la plage", scope_label: "Portée", scope_helper: "La portée de la plage nommée détermine où elle est disponible.", refers_to: "Fait référence à", enter_formula: "Saisir la formule", cancel: "Annuler", apply: "Appliquer les modifications", discard: "Annuler les modifications", default_range_prefix: "Plage", errors: { range_name_required: "Le nom de la plage est obligatoire", name_cannot_contain_spaces: "Le nom ne peut pas contenir d’espaces", name_cannot_start_with_number: "Le nom ne peut pas commencer par un chiffre", name_invalid_characters: "Le nom contient des caractères non valides. Utilisez uniquement des lettres, chiffres, traits de soulignement et points. Il doit commencer par une lettre ou un trait de soulignement.", name_already_exists: "Ce nom existe déjà dans la portée sélectionnée" } }, B1 = { insert_row_above: "Insérer 1 ligne au-dessus", insert_row_below: "Insérer 1 ligne en dessous", insert_column_before: "Insérer 1 colonne à gauche", insert_column_after: "Insérer 1 colonne à droite", freeze_columns: "Figer jusqu’à la colonne « {{column}} »", freeze_rows: "Figer jusqu’à la ligne « {{row}} »", unfreeze_rows: "Libérer les lignes", unfreeze_columns: "Libérer les colonnes", delete_row: "Supprimer la ligne « {{row}} »", delete_column: "Supprimer la colonne « {{column}} »", freeze: "Figer", insert_row: "Insérer une ligne", insert_column: "Insérer une colonne", move_row: "Déplacer la ligne", move_column: "Déplacer la colonne", move_row_up: "Déplacer la ligne vers le haut", move_row_down: "Déplacer la ligne vers le bas", move_column_left: "Déplacer la colonne vers la gauche", move_column_right: "Déplacer la colonne vers la droite" }, z1 = { apply: "Ajouter la couleur", cancel: "Annuler", add: "Ajouter une nouvelle couleur", default: "Couleur par défaut", no_fill: "Sans remplissage", recent: "Récentes" }, L1 = { resize_drawer: "Redimensionner le panneau", close: "Fermer" }, H1 = { open_regional_settings: "Ouvrir les paramètres régionaux", title: "Paramètres régionaux", close: "Fermer la boîte de dialogue", locale: { title: "Paramètres régionaux", locale_label: "Paramètres régionaux", locale_example1: "Nombre", locale_example2: "Date et heure", locale_example3: "Délimiteur de formule", delimiter_comma: "Virgule", delimiter_semicolon: "Point-virgule" }, language: { title: "Langue", language_label: "Langue du moteur", language_helper: "Contrôle la langue utilisée pour les noms de fonctions et les messages d’erreur.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Anglais", es: "Espagnol", fr: "Français", de: "Allemand", it: "Italien" } }, timezone: { title: "Fuseau horaire", timezone_label: "Fuseau horaire", timezone_helper: "Modifier ce paramètre aura un impact sur les fonctions liées à la date et à l’heure, y compris AUJOURDHUI() et MAINTENANT()." } }, V1 = {
  toolbar: $1,
  num_fmt: P1,
  sheet_rename: O1,
  sheet_delete: M1,
  sheet_tab: A1,
  formula_input: I1,
  formula_bar: D1,
  navigation: F1,
  name_manager_dialog: N1,
  cell_context: B1,
  color_picker: z1,
  right_drawer: L1,
  regional_settings: H1
}, W1 = { redo: "Ripeti", undo: "Annulla", copy_styles: "Copia stili", clear_formatting: "Cancella formattazione", euro: "Formato Euro", percentage: "Formato percentuale", bold: "Grassetto", italic: "Corsivo", underline: "Sottolineato", strike_through: "Barrato", align_left: "Allinea a sinistra", align_right: "Allinea a destra", align_center: "Allinea al centro", format_number: "Formato numero", font_color: "Colore carattere", fill_color: "Colore riempimento", increase_font_size: "Aumenta dimensione carattere", decrease_font_size: "Riduci dimensione carattere", decimal_places_increase: "Aumenta decimali", decimal_places_decrease: "Riduci decimali", show_hide_grid_lines: "Mostra/nascondi griglia", named_ranges: "Intervalli denominati", vertical_align_bottom: "Allinea in basso", vertical_align_middle: "Allinea al centro", vertical_align_top: "Allinea in alto", selected_png: "Esporta area selezionata come PNG", wrap_text: "Testo a capo", scroll_left: "Scorri a sinistra", scroll_right: "Scorri a destra", format_menu: { auto: "Automatico", number: "Numero", percentage: "Percentuale", currency_eur: "Euro (EUR)", currency_usd: "Dollaro (USD)", currency_gbp: "Sterlina britannica (GBP)", date_short: "Data breve", date_long: "Data lunga", custom: "Personalizzato", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordi", all: "Tutti i bordi", inner: "Bordi interni", outer: "Bordi esterni", top: "Bordi superiori", bottom: "Bordi inferiori", clear: "Rimuovi bordi", left: "Bordi sinistri", right: "Bordi destri", horizontal: "Bordi orizzontali", vertical: "Bordi verticali", color: "Colore bordo", style: "Stile bordo" } }, U1 = { title: "Formato numero personalizzato", label: "Formato numero", close: "Chiudi finestra", save: "Salva" }, G1 = { rename: "Salva", label: "Nuovo nome", title: "Rinomina foglio", close: "Chiudi finestra" }, Y1 = { title: "Sei sicuro?", message: "Il foglio '{{sheetName}}' verrà eliminato.", confirm: "Sì, elimina foglio", cancel: "Annulla" }, q1 = { rename: "Rinomina", change_color: "Cambia colore", delete: "Elimina", hide_sheet: "Nascondi foglio" }, K1 = { update: "Aggiorna", label: "Formula", title: "Aggiorna formula" }, X1 = { manage_named_ranges: "Gestisci intervalli denominati" }, Z1 = { add_sheet: "Aggiungi foglio", sheet_list: "Elenco fogli" }, J1 = { title: "Intervalli denominati", empty_message1: "Non sono ancora stati aggiunti intervalli denominati.", empty_message2: 'Fai clic su "Aggiungi nuovo" per crearne uno.', name: "Nome", range: "Ambito", scope: "Intervallo", help: "Informazioni sugli intervalli denominati", new: "Aggiungi nuovo", workbook: "Cartella di lavoro", global: "(Globale)", close: "Chiudi finestra", delete: "Elimina intervallo", edit: "Modifica intervallo", back_to_list: "Torna alla lista", add_new_range: "Aggiungi nuovo intervallo", edit_range: "Modifica intervallo", new_named_range: "Nuovo intervallo denominato", range_name: "Nome intervallo", enter_range_name: "Inserisci nome intervallo", scope_label: "Ambito", scope_helper: "L'ambito dell'intervallo denominato determina dove è disponibile.", refers_to: "Fa riferimento a", enter_formula: "Inserisci formula", cancel: "Annulla", apply: "Applica modifiche", discard: "Annulla modifiche", default_range_prefix: "Intervallo", errors: { range_name_required: "Il nome dell'intervallo è obbligatorio", name_cannot_contain_spaces: "Il nome non può contenere spazi", name_cannot_start_with_number: "Il nome non può iniziare con un numero", name_invalid_characters: "Il nome contiene caratteri non validi. Usa solo lettere, numeri, underscore e punti. Deve iniziare con una lettera o underscore.", name_already_exists: "Questo nome esiste già nell'ambito selezionato" } }, Q1 = { insert_row_above: "Inserisci 1 riga sopra", insert_row_below: "Inserisci 1 riga sotto", insert_column_before: "Inserisci 1 colonna a sinistra", insert_column_after: "Inserisci 1 colonna a destra", freeze_columns: "Blocca fino alla colonna '{{column}}'", freeze_rows: "Blocca fino alla riga '{{row}}'", unfreeze_rows: "Sblocca righe", unfreeze_columns: "Sblocca colonne", delete_row: "Elimina riga '{{row}}'", delete_column: "Elimina colonna '{{column}}'", freeze: "Blocca", insert_row: "Inserisci riga", insert_column: "Inserisci colonna", move_row: "Sposta riga", move_column: "Sposta colonna", move_row_up: "Sposta riga in alto", move_row_down: "Sposta riga in basso", move_column_left: "Sposta colonna a sinistra", move_column_right: "Sposta colonna a destra" }, ey = { apply: "Aggiungi colore", cancel: "Annulla", add: "Aggiungi nuovo colore", default: "Colore predefinito", no_fill: "Nessun riempimento", recent: "Recenti" }, ty = { resize_drawer: "Ridimensiona pannello", close: "Chiudi" }, ny = { open_regional_settings: "Apri impostazioni regionali", title: "Impostazioni regionali", close: "Chiudi finestra", locale: { title: "Impostazioni locali", locale_label: "Impostazioni locali", locale_example1: "Numero", locale_example2: "Data e ora", locale_example3: "Separatore formule", delimiter_comma: "Virgola", delimiter_semicolon: "Punto e virgola" }, language: { title: "Lingua", language_label: "Lingua del motore", language_helper: "Controlla la lingua usata nei nomi delle funzioni e nei messaggi di errore.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Inglese", es: "Spagnolo", fr: "Francese", de: "Tedesco", it: "Italiano" } }, timezone: { title: "Fuso orario", timezone_label: "Fuso orario", timezone_helper: "La modifica di questa impostazione influirà sulle funzioni relative a data e ora, incluse ADESSO() e OGGI()." } }, oy = {
  toolbar: W1,
  num_fmt: U1,
  sheet_rename: G1,
  sheet_delete: Y1,
  sheet_tab: q1,
  formula_input: K1,
  formula_bar: X1,
  navigation: Z1,
  name_manager_dialog: J1,
  cell_context: Q1,
  color_picker: ey,
  right_drawer: ty,
  regional_settings: ny
}, ry = {
  "en-US": { translation: Da },
  "en-GB": { translation: Da },
  "es-ES": { translation: j1 },
  "fr-FR": { translation: V1 },
  "de-DE": { translation: n1 },
  "it-IT": { translation: oy }
}, Lo = Cu.createInstance({
  resources: ry,
  lng: "en-US",
  interpolation: {
    escapeValue: !1
  }
}), iy = Ba(
  (e, t) => (za(t, () => ({
    setLanguage(n) {
      if (Lo.language !== n) {
        Lo.changeLanguage(n);
        const o = n.split("-")[0];
        e.model.setLanguage(o);
      }
    }
  })), /* @__PURE__ */ l.jsx(Ic, { theme: P, children: /* @__PURE__ */ l.jsx(Dc, { i18n: Lo, children: /* @__PURE__ */ l.jsx(
    zb,
    {
      model: e.model,
      workbookState: new mb()
    }
  ) }) }))
);
iy.displayName = "IronCalc";
const xy = async (e) => {
  const t = _c(e);
  return await Lo.init(), await t;
};
export {
  iy as IronCalc,
  my as IronCalcIcon,
  gy as IronCalcIconWhite,
  xf as IronCalcLogo,
  vy as Model,
  xy as init
};
