import Sc, { columnNameFromNumber as Ve, quoteName as Ia, getTokens as Fa, getSupportedLocales as _c, getAllTimezones as Rc, BorderStyle as Pt, BorderType as ue } from "@ironcalc/wasm";
import { Model as yy } from "@ironcalc/wasm";
import * as k from "react";
import _e, { useCallback as De, useState as oe, useRef as re, useEffect as Ne, createElement as Tc, isValidElement as Io, cloneElement as Fo, Children as kc, useLayoutEffect as gi, useMemo as jc, forwardRef as Na, useImperativeHandle as Ba } from "react";
import { styled as X, Menu as so, MenuItem as on, FormControl as Wn, Box as ao, TextField as xi, Select as za, Paper as $c, FormHelperText as La, Tooltip as mn, Button as lo, Autocomplete as Pc, Popover as Oc, Dialog as Ha, Input as Mc, ThemeProvider as Ac } from "@mui/material";
import { useTranslation as Le, I18nextProvider as Dc } from "react-i18next";
import { Tag as Va, ChevronDown as Ho, MousePointerClick as Ic, Check as zt, ArrowLeft as Wa, X as Vo, PackageOpen as Fc, PencilLine as Ua, Trash2 as Qt, BookOpen as Nc, Plus as Ft, Grid2X2 as Ga, ChevronRight as bi, ChevronLeft as Bc, Undo2 as zc, Redo2 as Lc, PaintRoller as Hc, RemoveFormatting as Vc, Percent as Wc, DecimalsArrowLeft as Uc, DecimalsArrowRight as Gc, Minus as Yc, Bold as qc, Italic as Kc, Underline as Xc, Strikethrough as Zc, Type as Jc, PaintBucket as Ya, AlignLeft as Qc, AlignCenter as eu, AlignRight as tu, ArrowUpToLine as nu, ArrowDownToLine as ou, WrapText as ru, Grid2x2Check as iu, Grid2x2X as su, ImageDown as au, PoundSterling as lu, DollarSign as cu, Euro as uu, TextCursorInput as du, EyeOff as pu, Menu as fu, BetweenVerticalStart as hu, BetweenHorizontalStart as mu, ArrowUpDown as gu, ArrowLeftRight as xu, Snowflake as Xn, ArrowRight as bu, ArrowUp as yu, ArrowDown as vu } from "lucide-react";
import wu, { t as Ce } from "i18next";
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
        return b.$$typeof === F ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case y:
          return "Fragment";
        case T:
          return "Profiler";
        case S:
          return "StrictMode";
        case _:
          return "Suspense";
        case D:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case p:
            return "Portal";
          case w:
            return b.displayName || "Context";
          case C:
            return (b._context.displayName || "Context") + ".Consumer";
          case E:
            var j = b.render;
            return b = b.displayName, b || (b = j.displayName || j.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case N:
            return j = b.displayName || null, j !== null ? j : e(b.type) || "Memo";
          case R:
            j = b._payload, b = b._init;
            try {
              return e(b(j));
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
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var L = j.error, B = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return L.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(b);
      }
    }
    function o(b) {
      if (b === y) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === R)
        return "<...>";
      try {
        var j = e(b);
        return j ? "<" + j + ">" : "<...>";
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
      if (I.call(b, "key")) {
        var j = Object.getOwnPropertyDescriptor(b, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function a(b, j) {
      function L() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var b = e(this.type);
      return J[b] || (J[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function f(b, j, L, B, K, Y) {
      var U = L.ref;
      return b = {
        $$typeof: g,
        type: b,
        key: j,
        props: L,
        _owner: B
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
    function h(b, j, L, B, K, Y) {
      var U = j.children;
      if (U !== void 0)
        if (B)
          if (P(U)) {
            for (B = 0; B < U.length; B++)
              m(U[B]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if (I.call(j, "key")) {
        U = e(b);
        var Z = Object.keys(j).filter(function(q) {
          return q !== "key";
        });
        B = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", O[U + B] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          U,
          Z,
          U
        ), O[U + B] = !0);
      }
      if (U = null, L !== void 0 && (n(L), U = "" + L), s(j) && (n(j.key), U = "" + j.key), "key" in j) {
        L = {};
        for (var Q in j)
          Q !== "key" && (L[Q] = j[Q]);
      } else L = j;
      return U && a(
        L,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), f(
        b,
        U,
        L,
        r(),
        K,
        Y
      );
    }
    function m(b) {
      d(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === R && (b._payload.status === "fulfilled" ? d(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function d(b) {
      return typeof b == "object" && b !== null && b.$$typeof === g;
    }
    var x = _e, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), T = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), E = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.suspense_list"), N = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), F = /* @__PURE__ */ Symbol.for("react.client.reference"), v = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, P = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var z, J = {}, A = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), G = M(o(i)), O = {};
    On.Fragment = y, On.jsx = function(b, j, L) {
      var B = 1e4 > v.recentlyCreatedOwnerStacks++;
      return h(
        b,
        j,
        L,
        !1,
        B ? Error("react-stack-top-frame") : A,
        B ? M(o(b)) : G
      );
    }, On.jsxs = function(b, j, L) {
      var B = 1e4 > v.recentlyCreatedOwnerStacks++;
      return h(
        b,
        j,
        L,
        !0,
        B ? Error("react-stack-top-frame") : A,
        B ? M(o(b)) : G
      );
    };
  })()), On;
}
var Hi;
function Tu() {
  return Hi || (Hi = 1, process.env.NODE_ENV === "production" ? wo.exports = _u() : wo.exports = Ru()), wo.exports;
}
var l = Tu();
function Nt(e, ...t) {
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
}, Vi = function(t) {
  return t != null && typeof t != "boolean";
}, _r = /* @__PURE__ */ $u(function(e) {
  return Ka(e) ? e : e.replace(Pu, "-$&").toLowerCase();
}), Wi = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ou, function(o, r, i) {
          return At = {
            name: r,
            styles: i,
            next: At
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
        return At = {
          name: r.name,
          styles: r.styles,
          next: At
        }, r.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            At = {
              name: s.name,
              styles: s.styles,
              next: At
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Mu(e, t, n);
    }
  }
  var c = n;
  return c;
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
var Ui = /label:\s*([^\s;{]+)\s*(;|$)/g, At;
function Au(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, r = "";
  At = void 0;
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
  var m = ku(r) + f;
  return {
    name: m,
    styles: r,
    next: At
  };
}
var Co = { exports: {} }, Eo = { exports: {} }, he = {};
var Gi;
function Du() {
  if (Gi) return he;
  Gi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, x = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, g = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, p = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, T = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
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
    return typeof E == "string" || typeof E == "function" || E === o || E === f || E === i || E === r || E === m || E === d || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === x || E.$$typeof === s || E.$$typeof === a || E.$$typeof === h || E.$$typeof === y || E.$$typeof === S || E.$$typeof === T || E.$$typeof === p);
  }, he.typeOf = C, he;
}
var me = {};
var Yi;
function Iu() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, r = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, s = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, a = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, f = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, h = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, m = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, x = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, g = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, p = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, y = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, S = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, T = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function C(H) {
      return typeof H == "string" || typeof H == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      H === o || H === f || H === i || H === r || H === m || H === d || typeof H == "object" && H !== null && (H.$$typeof === g || H.$$typeof === x || H.$$typeof === s || H.$$typeof === a || H.$$typeof === h || H.$$typeof === y || H.$$typeof === S || H.$$typeof === T || H.$$typeof === p);
    }
    function w(H) {
      if (typeof H == "object" && H !== null) {
        var ce = H.$$typeof;
        switch (ce) {
          case t:
            var de = H.type;
            switch (de) {
              case c:
              case f:
              case o:
              case i:
              case r:
              case m:
                return de;
              default:
                var Fe = de && de.$$typeof;
                switch (Fe) {
                  case a:
                  case h:
                  case g:
                  case x:
                  case s:
                    return Fe;
                  default:
                    return ce;
                }
            }
          case n:
            return ce;
        }
      }
    }
    var E = c, _ = f, D = a, N = s, R = t, W = h, F = o, v = g, I = x, P = n, M = i, z = r, J = m, A = !1;
    function G(H) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(H) || w(H) === c;
    }
    function O(H) {
      return w(H) === f;
    }
    function b(H) {
      return w(H) === a;
    }
    function j(H) {
      return w(H) === s;
    }
    function L(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function B(H) {
      return w(H) === h;
    }
    function K(H) {
      return w(H) === o;
    }
    function Y(H) {
      return w(H) === g;
    }
    function U(H) {
      return w(H) === x;
    }
    function Z(H) {
      return w(H) === n;
    }
    function Q(H) {
      return w(H) === i;
    }
    function q(H) {
      return w(H) === r;
    }
    function ee(H) {
      return w(H) === m;
    }
    me.AsyncMode = E, me.ConcurrentMode = _, me.ContextConsumer = D, me.ContextProvider = N, me.Element = R, me.ForwardRef = W, me.Fragment = F, me.Lazy = v, me.Memo = I, me.Portal = P, me.Profiler = M, me.StrictMode = z, me.Suspense = J, me.isAsyncMode = G, me.isConcurrentMode = O, me.isContextConsumer = b, me.isContextProvider = j, me.isElement = L, me.isForwardRef = B, me.isFragment = K, me.isLazy = Y, me.isMemo = U, me.isPortal = Z, me.isProfiler = Q, me.isStrictMode = q, me.isSuspense = ee, me.isValidElementType = C, me.typeOf = w;
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
        for (var d = 0; d < f.length; d++)
          n.call(a, f[d]) && (c[f[d]] = a[f[d]]);
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
  function r(i, s, a, c, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (o(i, h)) {
          var m;
          try {
            if (typeof i[h] != "function") {
              var d = Error(
                (c || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
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
function Bu() {
  if (Qi) return $r;
  Qi = 1;
  var e = Xa(), t = Fu(), n = /* @__PURE__ */ vi(), o = /* @__PURE__ */ Za(), r = /* @__PURE__ */ Nu(), i = function() {
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
    function m(O) {
      var b = O && (f && O[f] || O[h]);
      if (typeof b == "function")
        return b;
    }
    var d = "<<anonymous>>", x = {
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
      node: W(),
      objectOf: N,
      oneOf: D,
      oneOfType: R,
      shape: v,
      exact: I
    };
    function g(O, b) {
      return O === b ? O !== 0 || 1 / O === 1 / b : O !== O && b !== b;
    }
    function p(O, b) {
      this.message = O, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function y(O) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, j = 0;
      function L(K, Y, U, Z, Q, q, ee) {
        if (Z = Z || d, q = q || U, ee !== n) {
          if (c) {
            var H = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw H.name = "Invariant Violation", H;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = Z + ":" + U;
            !b[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[ce] = !0, j++);
          }
        }
        return Y[U] == null ? K ? Y[U] === null ? new p("The " + Q + " `" + q + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new p("The " + Q + " `" + q + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : O(Y, U, Z, Q, q);
      }
      var B = L.bind(null, !1);
      return B.isRequired = L.bind(null, !0), B;
    }
    function S(O) {
      function b(j, L, B, K, Y, U) {
        var Z = j[L], Q = z(Z);
        if (Q !== O) {
          var q = J(Z);
          return new p(
            "Invalid " + K + " `" + Y + "` of type " + ("`" + q + "` supplied to `" + B + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return y(b);
    }
    function T() {
      return y(s);
    }
    function C(O) {
      function b(j, L, B, K, Y) {
        if (typeof O != "function")
          return new p("Property `" + Y + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var U = j[L];
        if (!Array.isArray(U)) {
          var Z = z(U);
          return new p("Invalid " + K + " `" + Y + "` of type " + ("`" + Z + "` supplied to `" + B + "`, expected an array."));
        }
        for (var Q = 0; Q < U.length; Q++) {
          var q = O(U, Q, B, K, Y + "[" + Q + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return y(b);
    }
    function w() {
      function O(b, j, L, B, K) {
        var Y = b[j];
        if (!a(Y)) {
          var U = z(Y);
          return new p("Invalid " + B + " `" + K + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(O);
    }
    function E() {
      function O(b, j, L, B, K) {
        var Y = b[j];
        if (!e.isValidElementType(Y)) {
          var U = z(Y);
          return new p("Invalid " + B + " `" + K + "` of type " + ("`" + U + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(O);
    }
    function _(O) {
      function b(j, L, B, K, Y) {
        if (!(j[L] instanceof O)) {
          var U = O.name || d, Z = G(j[L]);
          return new p("Invalid " + K + " `" + Y + "` of type " + ("`" + Z + "` supplied to `" + B + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return y(b);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function b(j, L, B, K, Y) {
        for (var U = j[L], Z = 0; Z < O.length; Z++)
          if (g(U, O[Z]))
            return null;
        var Q = JSON.stringify(O, function(ee, H) {
          var ce = J(H);
          return ce === "symbol" ? String(H) : H;
        });
        return new p("Invalid " + K + " `" + Y + "` of value `" + String(U) + "` " + ("supplied to `" + B + "`, expected one of " + Q + "."));
      }
      return y(b);
    }
    function N(O) {
      function b(j, L, B, K, Y) {
        if (typeof O != "function")
          return new p("Property `" + Y + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var U = j[L], Z = z(U);
        if (Z !== "object")
          return new p("Invalid " + K + " `" + Y + "` of type " + ("`" + Z + "` supplied to `" + B + "`, expected an object."));
        for (var Q in U)
          if (o(U, Q)) {
            var q = O(U, Q, B, K, Y + "." + Q, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return y(b);
    }
    function R(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var b = 0; b < O.length; b++) {
        var j = O[b];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + A(j) + " at index " + b + "."
          ), s;
      }
      function L(B, K, Y, U, Z) {
        for (var Q = [], q = 0; q < O.length; q++) {
          var ee = O[q], H = ee(B, K, Y, U, Z, n);
          if (H == null)
            return null;
          H.data && o(H.data, "expectedType") && Q.push(H.data.expectedType);
        }
        var ce = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new p("Invalid " + U + " `" + Z + "` supplied to " + ("`" + Y + "`" + ce + "."));
      }
      return y(L);
    }
    function W() {
      function O(b, j, L, B, K) {
        return P(b[j]) ? null : new p("Invalid " + B + " `" + K + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return y(O);
    }
    function F(O, b, j, L, B) {
      return new p(
        (O || "React class") + ": " + b + " type `" + j + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function v(O) {
      function b(j, L, B, K, Y) {
        var U = j[L], Z = z(U);
        if (Z !== "object")
          return new p("Invalid " + K + " `" + Y + "` of type `" + Z + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var Q in O) {
          var q = O[Q];
          if (typeof q != "function")
            return F(B, K, Y, Q, J(q));
          var ee = q(U, Q, B, K, Y + "." + Q, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return y(b);
    }
    function I(O) {
      function b(j, L, B, K, Y) {
        var U = j[L], Z = z(U);
        if (Z !== "object")
          return new p("Invalid " + K + " `" + Y + "` of type `" + Z + "` " + ("supplied to `" + B + "`, expected `object`."));
        var Q = t({}, j[L], O);
        for (var q in Q) {
          var ee = O[q];
          if (o(O, q) && typeof ee != "function")
            return F(B, K, Y, q, J(ee));
          if (!ee)
            return new p(
              "Invalid " + K + " `" + Y + "` key `" + q + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(j[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var H = ee(U, q, B, K, Y + "." + q, n);
          if (H)
            return H;
        }
        return null;
      }
      return y(b);
    }
    function P(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(P);
          if (O === null || a(O))
            return !0;
          var b = m(O);
          if (b) {
            var j = b.call(O), L;
            if (b !== O.entries) {
              for (; !(L = j.next()).done; )
                if (!P(L.value))
                  return !1;
            } else
              for (; !(L = j.next()).done; ) {
                var B = L.value;
                if (B && !P(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(O, b) {
      return O === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function z(O) {
      var b = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : M(b, O) ? "symbol" : b;
    }
    function J(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var b = z(O);
      if (b === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function A(O) {
      var b = J(O);
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
    function G(O) {
      return !O.constructor || !O.constructor.name ? d : O.constructor.name;
    }
    return x.checkPropTypes = r, x.resetWarningCache = r.resetWarningCache, x.PropTypes = x, x;
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
    function o(s, a, c, f, h, m) {
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
var Hu = /* @__PURE__ */ Lu();
const u = /* @__PURE__ */ Su(Hu);
function Vu(e, t) {
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
function Zt(e) {
  return ns[0] = e, Au(ns);
}
var So = { exports: {} }, Ee = {};
var os;
function Uu() {
  if (os) return Ee;
  os = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), r = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), s = /* @__PURE__ */ Symbol.for("react.context"), a = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.suspense_list"), h = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), x = /* @__PURE__ */ Symbol.for("react.client.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case e:
          switch (p = p.type, p) {
            case n:
            case r:
            case o:
            case c:
            case f:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case m:
                case h:
                  return p;
                case i:
                  return p;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ee.ContextConsumer = i, Ee.ContextProvider = s, Ee.Element = e, Ee.ForwardRef = a, Ee.Fragment = n, Ee.Lazy = m, Ee.Memo = h, Ee.Portal = t, Ee.Profiler = r, Ee.StrictMode = o, Ee.Suspense = c, Ee.SuspenseList = f, Ee.isContextConsumer = function(p) {
    return g(p) === i;
  }, Ee.isContextProvider = function(p) {
    return g(p) === s;
  }, Ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ee.isForwardRef = function(p) {
    return g(p) === a;
  }, Ee.isFragment = function(p) {
    return g(p) === n;
  }, Ee.isLazy = function(p) {
    return g(p) === m;
  }, Ee.isMemo = function(p) {
    return g(p) === h;
  }, Ee.isPortal = function(p) {
    return g(p) === t;
  }, Ee.isProfiler = function(p) {
    return g(p) === r;
  }, Ee.isStrictMode = function(p) {
    return g(p) === o;
  }, Ee.isSuspense = function(p) {
    return g(p) === c;
  }, Ee.isSuspenseList = function(p) {
    return g(p) === f;
  }, Ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === r || p === o || p === c || p === f || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === h || p.$$typeof === s || p.$$typeof === i || p.$$typeof === a || p.$$typeof === x || p.getModuleId !== void 0);
  }, Ee.typeOf = g, Ee;
}
var Se = {};
var rs;
function Gu() {
  return rs || (rs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var y = p.$$typeof;
        switch (y) {
          case t:
            switch (p = p.type, p) {
              case o:
              case i:
              case r:
              case f:
              case h:
              case x:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case a:
                  case c:
                  case d:
                  case m:
                    return p;
                  case s:
                    return p;
                  default:
                    return y;
                }
            }
          case n:
            return y;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), s = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), g = /* @__PURE__ */ Symbol.for("react.client.reference");
    Se.ContextConsumer = s, Se.ContextProvider = a, Se.Element = t, Se.ForwardRef = c, Se.Fragment = o, Se.Lazy = d, Se.Memo = m, Se.Portal = n, Se.Profiler = i, Se.StrictMode = r, Se.Suspense = f, Se.SuspenseList = h, Se.isContextConsumer = function(p) {
      return e(p) === s;
    }, Se.isContextProvider = function(p) {
      return e(p) === a;
    }, Se.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, Se.isForwardRef = function(p) {
      return e(p) === c;
    }, Se.isFragment = function(p) {
      return e(p) === o;
    }, Se.isLazy = function(p) {
      return e(p) === d;
    }, Se.isMemo = function(p) {
      return e(p) === m;
    }, Se.isPortal = function(p) {
      return e(p) === n;
    }, Se.isProfiler = function(p) {
      return e(p) === i;
    }, Se.isStrictMode = function(p) {
      return e(p) === r;
    }, Se.isSuspense = function(p) {
      return e(p) === f;
    }, Se.isSuspenseList = function(p) {
      return e(p) === h;
    }, Se.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === o || p === i || p === r || p === f || p === h || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === m || p.$$typeof === a || p.$$typeof === s || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
    }, Se.typeOf = e;
  })()), Se;
}
var is;
function Yu() {
  return is || (is = 1, process.env.NODE_ENV === "production" ? So.exports = /* @__PURE__ */ Uu() : So.exports = /* @__PURE__ */ Gu()), So.exports;
}
var xn = /* @__PURE__ */ Yu();
function _t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ja(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || xn.isValidElementType(e) || !_t(e))
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
    /* @__PURE__ */ k.isValidElement(t[r]) || xn.isValidElementType(t[r]) ? o[r] = t[r] : _t(t[r]) && // Avoid prototype pollution
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
  function c(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - o / 100}${n})`;
  }
  function f(d, x) {
    const g = s.indexOf(x);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : x) - o / 100}${n})`;
  }
  function h(d) {
    return s.indexOf(d) + 1 < s.length ? f(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function m(d) {
    const x = s.indexOf(d);
    return x === 0 ? a(s[1]) : x === s.length - 1 ? c(s[x]) : f(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
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
function Xu(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Zu(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Nt(18, `(${t})`));
    return null;
  }
  const [, o, r] = n, i = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(r).up(i);
}
function Ju(e) {
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
const Qu = {
  borderRadius: 4
}, Lt = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.string, u.object, u.array]) : {};
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
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = o.breakpoints || as;
    return Object.keys(t).reduce((s, a) => {
      if (Xu(i.keys, a)) {
        const c = Zu(o.containerQueries ? o : ed, a);
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
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
function Ie(e) {
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
      let d = Uo(f, r, m);
      return m === d && typeof m == "string" && (d = Uo(f, r, `${t}${m === "default" ? "" : co(m)}`, m)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Lt
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
function $e(e) {
  return Qa(e, sr);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? sr.reduce((e, t) => (e[t] = Lt, e), {}) : {};
$e.filterProps = sr;
function Pe(e) {
  return Qa(e, ar);
}
Pe.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = Lt, e), {}) : {};
Pe.filterProps = ar;
process.env.NODE_ENV !== "production" && sd.reduce((e, t) => (e[t] = Lt, e), {});
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
function nt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function at(e, t) {
  return Ie({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const cd = at("border", nt), ud = at("borderTop", nt), dd = at("borderRight", nt), pd = at("borderBottom", nt), fd = at("borderLeft", nt), hd = at("borderColor"), md = at("borderTopColor"), gd = at("borderRightColor"), xd = at("borderBottomColor"), bd = at("borderLeftColor"), yd = at("outline", nt), vd = at("outlineColor"), cr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = uo(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (o) => ({
      borderRadius: po(t, o)
    });
    return Rt(e, e.borderRadius, n);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Lt
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
  gap: Lt
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
  columnGap: Lt
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
  rowGap: Lt
} : {};
pr.filterProps = ["rowGap"];
const wd = Ie({
  prop: "gridColumn"
}), Cd = Ie({
  prop: "gridRow"
}), Ed = Ie({
  prop: "gridAutoFlow"
}), Sd = Ie({
  prop: "gridAutoColumns"
}), _d = Ie({
  prop: "gridAutoRows"
}), Rd = Ie({
  prop: "gridTemplateColumns"
}), Td = Ie({
  prop: "gridTemplateRows"
}), kd = Ie({
  prop: "gridTemplateAreas"
}), jd = Ie({
  prop: "gridArea"
});
lr(ur, dr, pr, wd, Cd, Ed, Sd, _d, Rd, Td, kd, jd);
function gn(e, t) {
  return t === "grey" ? t : e;
}
const $d = Ie({
  prop: "color",
  themeKey: "palette",
  transform: gn
}), Pd = Ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: gn
}), Od = Ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: gn
});
lr($d, Pd, Od);
function qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Md = Ie({
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
const Ad = Ie({
  prop: "minWidth",
  transform: qe
}), Dd = Ie({
  prop: "height",
  transform: qe
}), Id = Ie({
  prop: "maxHeight",
  transform: qe
}), Fd = Ie({
  prop: "minHeight",
  transform: qe
});
Ie({
  prop: "size",
  cssProperty: "width",
  transform: qe
});
Ie({
  prop: "size",
  cssProperty: "height",
  transform: qe
});
const Nd = Ie({
  prop: "boxSizing"
});
lr(Md, Ci, Ad, Dd, Id, Fd, Nd);
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
    transform: gn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: gn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: gn
  },
  // spacing
  p: {
    style: Pe
  },
  pt: {
    style: Pe
  },
  pr: {
    style: Pe
  },
  pb: {
    style: Pe
  },
  pl: {
    style: Pe
  },
  px: {
    style: Pe
  },
  py: {
    style: Pe
  },
  padding: {
    style: Pe
  },
  paddingTop: {
    style: Pe
  },
  paddingRight: {
    style: Pe
  },
  paddingBottom: {
    style: Pe
  },
  paddingLeft: {
    style: Pe
  },
  paddingX: {
    style: Pe
  },
  paddingY: {
    style: Pe
  },
  paddingInline: {
    style: Pe
  },
  paddingInlineStart: {
    style: Pe
  },
  paddingInlineEnd: {
    style: Pe
  },
  paddingBlock: {
    style: Pe
  },
  paddingBlockStart: {
    style: Pe
  },
  paddingBlockEnd: {
    style: Pe
  },
  m: {
    style: $e
  },
  mt: {
    style: $e
  },
  mr: {
    style: $e
  },
  mb: {
    style: $e
  },
  ml: {
    style: $e
  },
  mx: {
    style: $e
  },
  my: {
    style: $e
  },
  margin: {
    style: $e
  },
  marginTop: {
    style: $e
  },
  marginRight: {
    style: $e
  },
  marginBottom: {
    style: $e
  },
  marginLeft: {
    style: $e
  },
  marginX: {
    style: $e
  },
  marginY: {
    style: $e
  },
  marginInline: {
    style: $e
  },
  marginInlineStart: {
    style: $e
  },
  marginInlineEnd: {
    style: $e
  },
  marginBlock: {
    style: $e
  },
  marginBlockStart: {
    style: $e
  },
  marginBlockEnd: {
    style: $e
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
    const d = ir(r, f) || {};
    return m ? m(s) : Rt(s, o, (g) => {
      let p = Uo(d, h, g);
      return g === p && typeof g == "string" && (p = Uo(d, h, `${n}${g === "default" ? "" : co(g)}`, g)), c === !1 ? p : {
        [c]: p
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
      const h = td(r.breakpoints), m = Object.keys(h);
      let d = h;
      return Object.keys(f).forEach((x) => {
        const g = zd(f[x], r);
        if (g != null)
          if (typeof g == "object")
            if (s[x])
              d = Un(d, e(x, g, r, s));
            else {
              const p = Rt({
                theme: r
              }, g, (y) => ({
                [x]: y
              }));
              Bd(p, g) ? d[x] = t({
                sx: g,
                theme: r,
                nested: !0
              }) : d = Un(d, p);
            }
          else
            d = Un(d, e(x, g, r, s));
      }), !i && r.modularCssLayers ? {
        "@layer sx": ss(r, ls(m, d))
      } : ss(r, ls(m, d));
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const bn = Ld();
bn.filterProps = ["sx"];
function Hd(e, t) {
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
  } = e, a = Ku(n), c = el(r);
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
      ...Qu,
      ...i
    }
  }, s);
  return f = Ju(f), f.applyStyles = Hd, f = t.reduce((h, m) => Ze(h, m), f), f.unstable_sxConfig = {
    ...fr,
    ...s?.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return bn({
      sx: m,
      theme: this
    });
  }, f;
}
function Vd(e) {
  return Object.keys(e).length === 0;
}
function Wd(e = null) {
  const t = k.useContext(Cu);
  return !t || Vd(t) ? e : t;
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
function Te() {
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
function lt(e, t, n = "Mui") {
  const o = Kd[t];
  return o ? `${n}-${o}` : `${qd.generate(e)}-${t}`;
}
function Ye(e, t, n = "Mui") {
  const o = {};
  return t.forEach((r) => {
    o[r] = lt(e, r, n);
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
        case xn.ForwardRef:
          return ds(e, e.render, "ForwardRef");
        case xn.Memo:
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
    style: Zt(n),
    isProcessed: !0
  };
  return o.style === n || t && t.forEach((r) => {
    typeof r.style != "function" && (r.style = Zt(r.style));
  }), o;
}
const Zd = Ei();
function Or(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Kt(e, t) {
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
      r = n ? Kt(o.style, n) : o.style;
    else {
      const {
        variants: i,
        ...s
      } = o;
      r = n ? Kt(Zt(s), n) : s;
    }
    return rl(e, o.variants, [r], n);
  }
  return o?.isProcessed ? n ? Kt(Zt(o.style), n) : o.style : n ? Kt(Zt(o), n) : o;
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
    }, n.push(o ? Kt(Zt(s.style(r)), o) : s.style(r))) : n.push(o ? Kt(Zt(s.style), o) : s.style);
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
  return (a, c = {}) => {
    Wu(a, (_) => _.filter((D) => D !== bn));
    const {
      name: f,
      slot: h,
      skipVariantsResolver: m,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Jd(il(h)),
      ...g
    } = c, p = f && f.startsWith("Mui") || h ? "components" : "custom", y = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), S = d || !1;
    let T = Or;
    h === "Root" || h === "root" ? T = o : h ? T = r : rp(a) && (T = void 0);
    const C = Vu(a, {
      shouldForwardProp: T,
      label: np(f, h),
      ...g
    }), w = (_) => {
      if (_.__emotion_real === _)
        return _;
      if (typeof _ == "function")
        return function(N) {
          return No(N, _, N.theme.modularCssLayers ? p : void 0);
        };
      if (_t(_)) {
        const D = ol(_);
        return function(R) {
          return D.variants ? No(R, D, R.theme.modularCssLayers ? p : void 0) : R.theme.modularCssLayers ? Kt(D.style, p) : D.style;
        };
      }
      return _;
    }, E = (..._) => {
      const D = [], N = _.map(w), R = [];
      if (D.push(i), f && x && R.push(function(I) {
        const M = I.theme.components?.[f]?.styleOverrides;
        if (!M)
          return null;
        const z = {};
        for (const J in M)
          z[J] = No(I, M[J], I.theme.modularCssLayers ? "theme" : void 0);
        return x(I, z);
      }), f && !y && R.push(function(I) {
        const M = I.theme?.components?.[f]?.variants;
        return M ? rl(I, M, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), S || R.push(bn), Array.isArray(N[0])) {
        const v = N.shift(), I = new Array(D.length).fill(""), P = new Array(R.length).fill("");
        let M;
        M = [...I, ...v, ...P], M.raw = [...I, ...v.raw, ...P], D.unshift(M);
      }
      const W = [...D, ...N, ...R], F = C(...W);
      return a.muiName && (F.muiName = a.muiName), process.env.NODE_ENV !== "production" && (F.displayName = tp(f, h, a)), F;
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
          for (const c in s)
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              const f = c;
              o[i][f] = Kr(s[f], a[f], n);
            }
        }
      } else i === "className" && n && t.className ? o.className = Te(e?.className, t?.className) : i === "style" && n && t.style ? o.style = {
        ...e?.style,
        ...t?.style
      } : o[i] === void 0 && (o[i] = e[i]);
    }
  return o;
}
const en = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
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
function Bt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Bt(sp(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nt(9, e));
  let o = e.substring(t + 1, e.length - 1), r;
  if (n === "color") {
    if (o = o.split(" "), r = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(r))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${r}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nt(10, r));
  } else
    o = o.split(",");
  return o = o.map((i) => parseFloat(i)), {
    type: n,
    values: o,
    colorSpace: r
  };
}
const ap = (e) => {
  const t = Bt(e);
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
  e = Bt(e);
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
  e = Bt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Bt(sl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ps(e, t) {
  const n = Xr(e), o = Xr(t);
  return (Math.max(n, o) + 0.05) / (Math.min(n, o) + 0.05);
}
function Go(e, t) {
  return e = Bt(e), t = Si(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, hr(e);
}
function Wt(e, t, n) {
  try {
    return Go(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function mr(e, t) {
  if (e = Bt(e), t = Si(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return hr(e);
}
function ve(e, t, n) {
  try {
    return mr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function gr(e, t) {
  if (e = Bt(e), t = Si(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return hr(e);
}
function we(e, t, n) {
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
process.env.NODE_ENV !== "production" && (u.node, u.bool);
const _i = () => k.useContext(up) ?? !1, dp = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (u.node, u.object);
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
    Object.entries(r).forEach(([a, c]) => {
      (!n || n && !n([...i, a])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? o(c, [...i, a], Array.isArray(c) ? [...s, a] : s) : t([...i, a], c, s));
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
    (a, c, f) => {
      if ((typeof c == "string" || typeof c == "number") && (!o || !o(a, c))) {
        const h = `--${n ? `${n}-` : ""}${a.join("-")}`, m = vp(a, c);
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
function wp(e, t = {}) {
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
    varsWithDefaults: d
  } = Mr(f, t);
  let x = d;
  const g = {}, {
    [c]: p,
    ...y
  } = s;
  if (Object.entries(y || {}).forEach(([w, E]) => {
    const {
      vars: _,
      css: D,
      varsWithDefaults: N
    } = Mr(E, t);
    x = Ze(x, N), g[w] = {
      css: D,
      vars: _
    };
  }), p) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: _
    } = Mr(p, t);
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
      function _(R, W) {
        Object.keys(W).length && w.push(typeof R == "string" ? {
          [R]: {
            ...W
          }
        } : R);
      }
      _(n(void 0, {
        ...m
      }), m);
      const {
        [E]: D,
        ...N
      } = g;
      if (D) {
        const {
          css: R
        } = D, W = s[E]?.palette?.mode, F = !o && W ? {
          colorScheme: W,
          ...R
        } : {
          ...R
        };
        _(n(E, {
          ...F
        }), F);
      }
      return Object.entries(N).forEach(([R, {
        css: W
      }]) => {
        const F = s[R]?.palette?.mode, v = !o && F ? {
          colorScheme: F,
          ...W
        } : {
          ...W
        };
        _(n(R, {
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
}, sn = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, an = {
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
}, ln = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, cn = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, un = {
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
    main: ln[200],
    light: ln[50],
    dark: ln[400]
  } : {
    main: ln[700],
    light: ln[400],
    dark: ln[800]
  };
}
function _p(e = "light") {
  return e === "dark" ? {
    main: sn[200],
    light: sn[50],
    dark: sn[400]
  } : {
    main: sn[500],
    light: sn[300],
    dark: sn[700]
  };
}
function Rp(e = "light") {
  return e === "dark" ? {
    main: an[500],
    light: an[300],
    dark: an[700]
  } : {
    main: an[700],
    light: an[400],
    dark: an[800]
  };
}
function Tp(e = "light") {
  return e === "dark" ? {
    main: cn[400],
    light: cn[300],
    dark: cn[700]
  } : {
    main: cn[700],
    light: cn[500],
    dark: cn[900]
  };
}
function kp(e = "light") {
  return e === "dark" ? {
    main: un[400],
    light: un[300],
    dark: un[700]
  } : {
    main: un[800],
    light: un[500],
    dark: un[900]
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
  } = e, s = e.primary || Sp(t), a = e.secondary || _p(t), c = e.error || Rp(t), f = e.info || Tp(t), h = e.success || kp(t), m = e.warning || jp(t);
  function d(y) {
    if (r)
      return $p(y);
    const S = ps(y, Zr.text.primary) >= n ? Zr.text.primary : cl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = ps(y, S);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${S} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const x = ({
    color: y,
    name: S,
    mainShade: T = 500,
    lightShade: C = 300,
    darkShade: w = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[T] && (y.main = y[T]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Nt(11, S ? ` (${S})` : "", T));
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
} });` : Nt(12, S ? ` (${S})` : "", JSON.stringify(y.main)));
    return r ? (bs(r, y, "light", C, o), bs(r, y, "dark", w, o)) : (xs(y, "light", C, o), xs(y, "dark", w, o)), y.contrastText || (y.contrastText = d(y.main)), y;
  };
  let g;
  return t === "light" ? g = ll() : t === "dark" && (g = ul()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ze({
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
    grey: Ep,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
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
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const d = o / 14, x = h || ((y) => `${y / c * d}rem`), g = (y, S, T, C, w) => ({
    fontFamily: n,
    fontWeight: y,
    fontSize: x(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === vs ? {
      letterSpacing: `${Mp(C / S)}em`
    } : {},
    ...w,
    ...f
  }), p = {
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
    ...p
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Dp = 0.2, Ip = 0.14, Fp = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Dp})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ip})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fp})`].join(",");
}
const Np = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Bp = {
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
function Hp(e) {
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
        delay: c = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (d) => typeof d == "string", m = (d) => !Number.isNaN(parseFloat(d));
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
const Vp = {
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
    shape: c,
    colorSpace: f,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Nt(20));
  const m = Ri({
    ...i,
    colorSpace: f
  }), d = Ei(e);
  let x = Ze(d, {
    mixins: Op(d.breakpoints, o),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Np.slice(),
    typography: Ap(m, a),
    transitions: Hp(s),
    zIndex: {
      ...Vp
    }
  });
  if (x = Ze(x, h), x = t.reduce((g, p) => Ze(g, p), x), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (y, S) => {
      let T;
      for (T in y) {
        const C = y[T];
        if (g.includes(T) && Object.keys(C).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = lt("", T);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: C
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[T] = {};
        }
      }
    };
    Object.keys(x.components).forEach((y) => {
      const S = x.components[y].styleOverrides;
      S && y.startsWith("Mui") && p(S, y);
    });
  }
  return x.unstable_sxConfig = {
    ...fr,
    ...h?.unstable_sxConfig
  }, x.unstable_sx = function(p) {
    return bn({
      sx: p,
      theme: this
    });
  }, x.toRuntimeSource = dl, Gp(x), x;
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
function V(e, t, n) {
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
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...h
  } = e, m = Object.keys(n)[0], d = o || (n.light && m !== "light" ? "light" : m), x = ef(i), {
    [d]: g,
    light: p,
    dark: y,
    ...S
  } = n, T = {
    ...S
  };
  let C = g;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (C = !0), !C)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : Nt(21, d));
  let w;
  s && (w = "oklch");
  const E = Ar(w, T, C, h, d);
  p && !T.light && Ar(w, T, p, void 0, "light"), y && !T.dark && Ar(w, T, y, void 0, "dark");
  let _ = {
    defaultColorScheme: d,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: x,
    colorSchemes: T,
    font: {
      ...Pp(E.typography),
      ...E.font
    },
    spacing: Qp(h.spacing)
  };
  Object.keys(_.colorSchemes).forEach((F) => {
    const v = _.colorSchemes[F].palette, I = (M) => {
      const z = M.split("-"), J = z[1], A = z[2];
      return x(M, v[J][A]);
    };
    v.mode === "light" && (V(v.common, "background", "#fff"), V(v.common, "onBackground", "#000")), v.mode === "dark" && (V(v.common, "background", "#000"), V(v.common, "onBackground", "#fff"));
    function P(M, z, J) {
      if (w) {
        let A;
        return M === Wt && (A = `transparent ${((1 - J) * 100).toFixed(0)}%`), M === ve && (A = `#000 ${(J * 100).toFixed(0)}%`), M === we && (A = `#fff ${(J * 100).toFixed(0)}%`), `color-mix(in ${w}, ${z}, ${A})`;
      }
      return M(z, J);
    }
    if (Jp(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      V(v.Alert, "errorColor", P(ve, v.error.light, 0.6)), V(v.Alert, "infoColor", P(ve, v.info.light, 0.6)), V(v.Alert, "successColor", P(ve, v.success.light, 0.6)), V(v.Alert, "warningColor", P(ve, v.warning.light, 0.6)), V(v.Alert, "errorFilledBg", I("palette-error-main")), V(v.Alert, "infoFilledBg", I("palette-info-main")), V(v.Alert, "successFilledBg", I("palette-success-main")), V(v.Alert, "warningFilledBg", I("palette-warning-main")), V(v.Alert, "errorFilledColor", dt(() => v.getContrastText(v.error.main))), V(v.Alert, "infoFilledColor", dt(() => v.getContrastText(v.info.main))), V(v.Alert, "successFilledColor", dt(() => v.getContrastText(v.success.main))), V(v.Alert, "warningFilledColor", dt(() => v.getContrastText(v.warning.main))), V(v.Alert, "errorStandardBg", P(we, v.error.light, 0.9)), V(v.Alert, "infoStandardBg", P(we, v.info.light, 0.9)), V(v.Alert, "successStandardBg", P(we, v.success.light, 0.9)), V(v.Alert, "warningStandardBg", P(we, v.warning.light, 0.9)), V(v.Alert, "errorIconColor", I("palette-error-main")), V(v.Alert, "infoIconColor", I("palette-info-main")), V(v.Alert, "successIconColor", I("palette-success-main")), V(v.Alert, "warningIconColor", I("palette-warning-main")), V(v.AppBar, "defaultBg", I("palette-grey-100")), V(v.Avatar, "defaultBg", I("palette-grey-400")), V(v.Button, "inheritContainedBg", I("palette-grey-300")), V(v.Button, "inheritContainedHoverBg", I("palette-grey-A100")), V(v.Chip, "defaultBorder", I("palette-grey-400")), V(v.Chip, "defaultAvatarColor", I("palette-grey-700")), V(v.Chip, "defaultIconColor", I("palette-grey-700")), V(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), V(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), V(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), V(v.LinearProgress, "primaryBg", P(we, v.primary.main, 0.62)), V(v.LinearProgress, "secondaryBg", P(we, v.secondary.main, 0.62)), V(v.LinearProgress, "errorBg", P(we, v.error.main, 0.62)), V(v.LinearProgress, "infoBg", P(we, v.info.main, 0.62)), V(v.LinearProgress, "successBg", P(we, v.success.main, 0.62)), V(v.LinearProgress, "warningBg", P(we, v.warning.main, 0.62)), V(v.Skeleton, "bg", w ? P(Wt, v.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), V(v.Slider, "primaryTrack", P(we, v.primary.main, 0.62)), V(v.Slider, "secondaryTrack", P(we, v.secondary.main, 0.62)), V(v.Slider, "errorTrack", P(we, v.error.main, 0.62)), V(v.Slider, "infoTrack", P(we, v.info.main, 0.62)), V(v.Slider, "successTrack", P(we, v.success.main, 0.62)), V(v.Slider, "warningTrack", P(we, v.warning.main, 0.62));
      const M = w ? P(ve, v.background.default, 0.6825) : _o(v.background.default, 0.8);
      V(v.SnackbarContent, "bg", M), V(v.SnackbarContent, "color", dt(() => w ? Zr.text.primary : v.getContrastText(M))), V(v.SpeedDialAction, "fabHoverBg", _o(v.background.paper, 0.15)), V(v.StepConnector, "border", I("palette-grey-400")), V(v.StepContent, "border", I("palette-grey-400")), V(v.Switch, "defaultColor", I("palette-common-white")), V(v.Switch, "defaultDisabledColor", I("palette-grey-100")), V(v.Switch, "primaryDisabledColor", P(we, v.primary.main, 0.62)), V(v.Switch, "secondaryDisabledColor", P(we, v.secondary.main, 0.62)), V(v.Switch, "errorDisabledColor", P(we, v.error.main, 0.62)), V(v.Switch, "infoDisabledColor", P(we, v.info.main, 0.62)), V(v.Switch, "successDisabledColor", P(we, v.success.main, 0.62)), V(v.Switch, "warningDisabledColor", P(we, v.warning.main, 0.62)), V(v.TableCell, "border", P(we, P(Wt, v.divider, 1), 0.88)), V(v.Tooltip, "bg", P(Wt, v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      V(v.Alert, "errorColor", P(we, v.error.light, 0.6)), V(v.Alert, "infoColor", P(we, v.info.light, 0.6)), V(v.Alert, "successColor", P(we, v.success.light, 0.6)), V(v.Alert, "warningColor", P(we, v.warning.light, 0.6)), V(v.Alert, "errorFilledBg", I("palette-error-dark")), V(v.Alert, "infoFilledBg", I("palette-info-dark")), V(v.Alert, "successFilledBg", I("palette-success-dark")), V(v.Alert, "warningFilledBg", I("palette-warning-dark")), V(v.Alert, "errorFilledColor", dt(() => v.getContrastText(v.error.dark))), V(v.Alert, "infoFilledColor", dt(() => v.getContrastText(v.info.dark))), V(v.Alert, "successFilledColor", dt(() => v.getContrastText(v.success.dark))), V(v.Alert, "warningFilledColor", dt(() => v.getContrastText(v.warning.dark))), V(v.Alert, "errorStandardBg", P(ve, v.error.light, 0.9)), V(v.Alert, "infoStandardBg", P(ve, v.info.light, 0.9)), V(v.Alert, "successStandardBg", P(ve, v.success.light, 0.9)), V(v.Alert, "warningStandardBg", P(ve, v.warning.light, 0.9)), V(v.Alert, "errorIconColor", I("palette-error-main")), V(v.Alert, "infoIconColor", I("palette-info-main")), V(v.Alert, "successIconColor", I("palette-success-main")), V(v.Alert, "warningIconColor", I("palette-warning-main")), V(v.AppBar, "defaultBg", I("palette-grey-900")), V(v.AppBar, "darkBg", I("palette-background-paper")), V(v.AppBar, "darkColor", I("palette-text-primary")), V(v.Avatar, "defaultBg", I("palette-grey-600")), V(v.Button, "inheritContainedBg", I("palette-grey-800")), V(v.Button, "inheritContainedHoverBg", I("palette-grey-700")), V(v.Chip, "defaultBorder", I("palette-grey-700")), V(v.Chip, "defaultAvatarColor", I("palette-grey-300")), V(v.Chip, "defaultIconColor", I("palette-grey-300")), V(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), V(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), V(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), V(v.LinearProgress, "primaryBg", P(ve, v.primary.main, 0.5)), V(v.LinearProgress, "secondaryBg", P(ve, v.secondary.main, 0.5)), V(v.LinearProgress, "errorBg", P(ve, v.error.main, 0.5)), V(v.LinearProgress, "infoBg", P(ve, v.info.main, 0.5)), V(v.LinearProgress, "successBg", P(ve, v.success.main, 0.5)), V(v.LinearProgress, "warningBg", P(ve, v.warning.main, 0.5)), V(v.Skeleton, "bg", w ? P(Wt, v.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), V(v.Slider, "primaryTrack", P(ve, v.primary.main, 0.5)), V(v.Slider, "secondaryTrack", P(ve, v.secondary.main, 0.5)), V(v.Slider, "errorTrack", P(ve, v.error.main, 0.5)), V(v.Slider, "infoTrack", P(ve, v.info.main, 0.5)), V(v.Slider, "successTrack", P(ve, v.success.main, 0.5)), V(v.Slider, "warningTrack", P(ve, v.warning.main, 0.5));
      const M = w ? P(we, v.background.default, 0.985) : _o(v.background.default, 0.98);
      V(v.SnackbarContent, "bg", M), V(v.SnackbarContent, "color", dt(() => w ? cl.text.primary : v.getContrastText(M))), V(v.SpeedDialAction, "fabHoverBg", _o(v.background.paper, 0.15)), V(v.StepConnector, "border", I("palette-grey-600")), V(v.StepContent, "border", I("palette-grey-600")), V(v.Switch, "defaultColor", I("palette-grey-300")), V(v.Switch, "defaultDisabledColor", I("palette-grey-600")), V(v.Switch, "primaryDisabledColor", P(ve, v.primary.main, 0.55)), V(v.Switch, "secondaryDisabledColor", P(ve, v.secondary.main, 0.55)), V(v.Switch, "errorDisabledColor", P(ve, v.error.main, 0.55)), V(v.Switch, "infoDisabledColor", P(ve, v.info.main, 0.55)), V(v.Switch, "successDisabledColor", P(ve, v.success.main, 0.55)), V(v.Switch, "warningDisabledColor", P(ve, v.warning.main, 0.55)), V(v.TableCell, "border", P(ve, P(Wt, v.divider, 1), 0.68)), V(v.Tooltip, "bg", P(Wt, v.grey[700], 0.92));
    }
    yt(v.background, "default"), yt(v.background, "paper"), yt(v.common, "background"), yt(v.common, "onBackground"), yt(v, "divider"), Object.keys(v).forEach((M) => {
      const z = v[M];
      M !== "tonalOffset" && z && typeof z == "object" && (z.main && V(v[M], "mainChannel", Bn(zn(z.main))), z.light && V(v[M], "lightChannel", Bn(zn(z.light))), z.dark && V(v[M], "darkChannel", Bn(zn(z.dark))), z.contrastText && V(v[M], "contrastTextChannel", Bn(zn(z.contrastText))), M === "text" && (yt(v[M], "primary"), yt(v[M], "secondary")), M === "action" && (z.active && yt(v[M], "active"), z.selected && yt(v[M], "selected")));
    });
  }), _ = t.reduce((F, v) => Ze(F, v), _);
  const D = {
    prefix: i,
    disableCssColorScheme: r,
    shouldSkipGeneratingVar: a,
    getSelector: Zp(_),
    enableContrastVars: s
  }, {
    vars: N,
    generateThemeVars: R,
    generateStyleSheets: W
  } = wp(_, D);
  return _.vars = N, Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([F, v]) => {
    _[F] = v;
  }), _.generateThemeVars = R, _.generateStyleSheets = W, _.generateSpacing = function() {
    return el(h.spacing, wi(this));
  }, _.getColorSchemeSelector = Cp(c), _.spacing = _.generateSpacing(), _.shouldSkipGeneratingVar = a, _.unstable_sxConfig = {
    ...fr,
    ...h?.unstable_sxConfig
  }, _.unstable_sx = function(v) {
    return bn({
      sx: v,
      theme: this
    });
  }, _.toRuntimeSource = dl, _;
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
  return !n && !("light" in f) && a === "light" && (f.light = !0), tf({
    ...s,
    colorSchemes: f,
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
}), Ss = () => (/* @__PURE__ */ new Date()).toISOString(), Ro = "IronCalc-Clipboard", Yo = 40, gl = 40, xl = 40, of = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("g", { id: "arrow-middle-from-line", clipPath: "url(#clip0_107_4135)" }, /* @__PURE__ */ k.createElement("path", { id: "Vector", d: "M8 14.6667V10.6667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_2", d: "M8 5.33333V1.33333", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_3", d: "M14.6667 8H1.33334", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_4", d: "M10 12.6667L8 10.6667L6 12.6667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { id: "Vector_5", d: "M10 3.33333L8 5.33333L6 3.33333", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", { id: "clip0_107_4135" }, /* @__PURE__ */ k.createElement("rect", { width: 16, height: 16, fill: "white" })))), rf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M2 14H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M14 11.3333V3.33333C14 2.59695 13.403 2 12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), sf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 5.33333V3.33333C14 2.59695 13.403 2 12.6667 2H8M14 10.6667V12.6667C14 13.403 13.403 14 12.6667 14H8M2 10.6667V12.6667C2 13.403 2.59695 14 3.33333 14H8M2 5.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H8M8 14V10.6667M8 2V5.33333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), af = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M10.6667 2H12.6667C13.403 2 14 2.59695 14 3.33333V8M5.33333 2H3.33333C2.59695 2 2 2.59695 2 3.33333V8M5.33333 14H3.33333C2.59695 14 2 13.403 2 12.6667V8M10.6667 14H12.6667C13.403 14 14 13.403 14 12.6667V8M2 8H5.33333M14 8H10.6667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), lf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 5.33333V3.33333C14 2.59695 13.403 2 12.6667 2H10.6667M14 10.6667V12.6667C14 13.403 13.403 14 12.6667 14H10.6667M2 10.6667V12.6667C2 13.403 2.59695 14 3.33333 14H5.33333M2 5.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H5.33333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), cf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M4.66667 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H4.66667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M4.66667 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), uf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), df = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M4.66667 8H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 4.66667L8 11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), pf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M11.3333 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H11.3333", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 2V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M14 2V14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })), ff = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M3 8H2M14 8H13M7 8H5M11 8H9M14 4H2M2.01 12H2M4.01 12H4M6.01 12H6M8.01 12H8M10.01 12H10M12.01 12H12M14.01 12H14", stroke: "#333333", strokeLinecap: "round", strokeLinejoin: "round" })), hf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { d: "M14 4.66667V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V4.66667", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 2H14", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M2 8H14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ k.createElement("path", { d: "M8 4.66667V14", stroke: "#B2B2B2", strokeLinecap: "round", strokeLinejoin: "round" })), mf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 12, height: 14, viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.182 13.305C0.303333 13.3917 0.468 13.435 0.676 13.435C0.962 13.435 1.24367 13.3483 1.521 13.175C1.79833 13.0103 2.05833 12.7937 2.301 12.525C2.55233 12.2563 2.77333 11.9703 2.964 11.667C3.16333 11.3637 3.32367 11.069 3.445 10.783C3.575 10.5057 3.653 10.276 3.679 10.094L4.459 5.011H5.954V4.439H4.537L4.706 3.36C4.80133 2.75334 4.96167 2.281 5.187 1.943C5.421 1.59634 5.73733 1.423 6.136 1.423C6.422 1.423 6.67767 1.488 6.903 1.618L7.189 1.787H7.293L7.566 1.28C7.592 1.23667 7.61367 1.189 7.631 1.137C7.657 1.085 7.67 1.04167 7.67 1.007C7.67 0.93767 7.64833 0.881336 7.605 0.838003C7.57033 0.786003 7.49233 0.72967 7.371 0.669003C7.30167 0.643003 7.22367 0.621336 7.137 0.604003C7.05033 0.578003 6.95933 0.565002 6.864 0.565002C6.53467 0.565002 6.20967 0.651669 5.889 0.825003C5.56833 0.98967 5.265 1.21067 4.979 1.488C4.693 1.75667 4.43733 2.047 4.212 2.359C3.98667 2.66234 3.80033 2.957 3.653 3.243C3.51433 3.52034 3.432 3.75434 3.406 3.945L3.328 4.439H2.249V5.011H3.25L2.405 10.692C2.31833 11.2813 2.17533 11.745 1.976 12.083C1.77667 12.4297 1.508 12.603 1.17 12.603C0.953333 12.603 0.788667 12.564 0.676 12.486L0.39 12.278H0.312L0.0779999 12.746C0.026 12.85 0 12.9367 0 13.006C0 13.1187 0.0606667 13.2183 0.182 13.305ZM5.90545 9.98999C5.82745 10.1027 5.78845 10.211 5.78845 10.315H6.65945C6.70279 10.211 6.75045 10.1113 6.80245 10.016C6.85445 9.91199 6.93245 9.78199 7.03645 9.62599C7.14045 9.46132 7.30079 9.23166 7.51745 8.93699C7.73412 8.64232 8.03312 8.25232 8.41445 7.76699L9.45445 10.341H9.49345L11.2745 9.92499V9.82099L10.3385 9.44399L9.37645 6.98699C9.80112 6.50166 10.1521 6.11166 10.4295 5.81699C10.7068 5.52232 10.9235 5.29266 11.0795 5.12799C11.2441 4.96332 11.3568 4.83332 11.4175 4.73799C11.4868 4.63399 11.5215 4.53432 11.5215 4.43899H10.7025C10.6678 4.52566 10.6288 4.61666 10.5855 4.71199C10.5421 4.79866 10.4728 4.91566 10.3775 5.06299C10.2908 5.20166 10.1565 5.39666 9.97445 5.64799C9.79245 5.89932 9.54545 6.22866 9.23345 6.63599L8.31045 4.30899H8.27145L6.43845 4.72499V4.82899L7.38745 5.21899L8.27145 7.40299C7.78612 7.95766 7.38312 8.40399 7.06245 8.74199C6.74179 9.07999 6.48612 9.34432 6.29545 9.53499C6.11345 9.72566 5.98345 9.87732 5.90545 9.98999Z", fill: "#828282" })), hy = (e) => /* @__PURE__ */ k.createElement("svg", { width: 100, height: 100, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M62.2449 0C62.2449 16.5084 55.687 32.3406 44.0138 44.0138C42.0408 45.9868 39.949 47.8137 37.7551 49.4875L37.7551 100C37.7551 83.4916 44.3131 67.6594 55.9863 55.9862C57.9593 54.0132 60.0511 52.1863 62.2449 50.5125L62.2449 0Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M37.7552 0.0239258C37.7488 10.0285 33.7717 19.622 26.697 26.6968C19.6165 33.7773 10.0133 37.755 6.10352e-05 37.755V62.2448C13.7182 62.2448 26.9694 57.7164 37.7552 49.4874V0.0239258Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M62.2449 99.976C62.2513 89.9713 66.2283 80.3779 73.3031 73.3031C80.3836 66.2226 89.9868 62.2449 100 62.2449V37.7551C86.2819 37.7551 73.0307 42.2835 62.2449 50.5125V99.976Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.0138 44.0138C55.687 32.3406 62.2449 16.5084 62.2449 0H37.7551V49.4875C39.949 47.8137 42.0408 45.9868 44.0138 44.0138Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M37.7551 99.9655C37.7551 99.977 37.7551 99.9885 37.7551 100H62.2449C62.2449 99.9912 62.2449 99.9825 62.2449 99.9737V50.5125C60.0511 52.1863 57.9593 54.0132 55.9862 55.9862C44.3212 67.6513 37.7643 83.4696 37.7551 99.9655Z", fill: "#F2994A" })), my = (e) => /* @__PURE__ */ k.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M9.95898 8.08594C9.60893 8.35318 9.27389 8.64313 8.95898 8.95801C7.09126 10.8257 6.042 13.3586 6.04199 16H6.04102V7.91406C6.39142 7.64662 6.72781 7.35715 7.04297 7.04199C8.90157 5.18307 9.9492 2.6648 9.95898 0.0371094V8.08594Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M6.04102 7.91406C4.31493 9.23162 2.19571 9.95898 0 9.95898V6.04102C1.60208 6.04102 3.13861 5.40429 4.27148 4.27148C5.40436 3.13861 6.04101 1.60213 6.04102 0L6.04102 7.91406Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, d: "M9.95947 8.08594C11.6856 6.76838 13.8048 6.04102 16.0005 6.04102V9.95898C14.3984 9.95898 12.8619 10.5957 11.729 11.7285C10.5961 12.8614 9.95948 14.3979 9.95947 16L9.95947 8.08594Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { d: "M9.95898 0C9.95898 2.64126 8.90957 5.17429 7.04199 7.04199C6.727 7.35698 6.39119 7.64674 6.04102 7.91406L6.04102 0H9.95898Z", fill: "white" }), /* @__PURE__ */ k.createElement("path", { d: "M6.04102 16C6.04102 13.3587 7.09042 10.8257 8.95801 8.95801C9.273 8.64302 9.60881 8.35326 9.95898 8.08594V16H6.04102Z", fill: "white" })), gf = (e) => /* @__PURE__ */ k.createElement("svg", { width: 570, height: 100, viewBox: "0 0 570 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M63.2036 0C63.2036 16.5084 56.6457 32.3406 44.9725 44.0138C42.9995 45.9868 40.9076 47.8137 38.7138 49.4875L38.7138 100C38.7138 83.4916 45.2718 67.6594 56.9449 55.9862C58.9179 54.0132 61.0098 52.1863 63.2036 50.5125L63.2036 0Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M38.7138 0.0239868C38.7075 10.0286 34.7304 19.6221 27.6556 26.6969C20.5752 33.7773 10.972 37.7551 0.95874 37.7551V62.2449C14.6768 62.2449 27.9281 57.7165 38.7138 49.4875V0.0239868Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { opacity: 0.8, fillRule: "evenodd", clipRule: "evenodd", d: "M63.2036 99.976C63.21 89.9714 67.187 80.3779 74.2618 73.3031C81.3423 66.2227 90.9454 62.2449 100.959 62.2449V37.7551C87.2406 37.7551 73.9894 42.2835 63.2036 50.5125V99.976Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.9725 44.0138C56.6457 32.3406 63.2036 16.5084 63.2036 0H38.7138V49.4875C40.9076 47.8137 42.9995 45.9868 44.9725 44.0138Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.7138 99.9656C38.7138 99.9771 38.7138 99.9885 38.7138 100H63.2036C63.2036 99.9913 63.2036 99.9825 63.2036 99.9737V50.5125C61.0098 52.1863 58.9179 54.0132 56.9449 55.9862C45.2799 67.6513 38.7229 83.4696 38.7138 99.9656Z", fill: "#F2994A" }), /* @__PURE__ */ k.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M402.852 37.2995H417.053C416.47 32.9711 415.23 29.1236 413.332 25.757C411.459 22.3651 409.067 19.5048 406.156 17.1761C403.245 14.822 399.929 13.0375 396.208 11.8225C392.487 10.6075 388.462 10 384.134 10C377.35 10 371.275 11.582 365.909 14.7461C360.543 17.9101 356.303 22.479 353.189 28.4528C350.076 34.4012 348.519 41.5646 348.519 49.943C348.519 58.2962 350.063 65.4596 353.151 71.4333C356.24 77.4071 360.467 81.976 365.833 85.14C371.199 88.3041 377.299 89.8861 384.134 89.8861C388.766 89.8861 392.981 89.2027 396.777 87.8358C400.574 86.4436 403.89 84.5199 406.725 82.0646C409.56 79.5839 411.851 76.7236 413.598 73.4836C415.369 70.2436 416.521 66.7758 417.053 63.0802L402.852 63.0043C402.422 65.2824 401.637 67.3074 400.498 69.0793C399.385 70.8511 398.005 72.3446 396.36 73.5596C394.74 74.7746 392.905 75.6985 390.854 76.3313C388.829 76.9388 386.652 77.2425 384.324 77.2425C380.122 77.2425 376.388 76.2174 373.123 74.1671C369.883 72.0914 367.326 69.0286 365.453 64.9786C363.605 60.9033 362.682 55.8915 362.682 49.943C362.682 44.0959 363.605 39.1473 365.453 35.0973C367.301 31.022 369.858 27.9339 373.123 25.8329C376.388 23.7067 380.134 22.6436 384.362 22.6436C386.741 22.6436 388.956 22.9726 391.006 23.6308C393.082 24.2636 394.93 25.2128 396.55 26.4784C398.17 27.744 399.524 29.2881 400.612 31.1106C401.701 32.9078 402.447 34.9707 402.852 37.2995ZM504.485 88.823V11.0631H490.74V88.823H504.485ZM529.06 86.1272C533.237 88.6838 538.236 89.962 544.058 89.962C548.943 89.962 553.196 89.0761 556.815 87.3042C560.435 85.507 563.295 83.0264 565.396 79.8624C567.497 76.673 568.712 73.0153 569.041 68.8894H555.904C555.499 70.9903 554.752 72.7749 553.664 74.243C552.576 75.7111 551.221 76.8375 549.601 77.6222C548.007 78.3816 546.197 78.7613 544.172 78.7613C541.311 78.7613 538.818 78.0019 536.692 76.4831C534.591 74.9391 532.958 72.7496 531.794 69.9146C530.63 67.0543 530.047 63.6371 530.047 59.663C530.047 55.7396 530.63 52.373 531.794 49.5634C532.984 46.7537 534.642 44.6021 536.768 43.1087C538.894 41.5899 541.362 40.8306 544.172 40.8306C547.488 40.8306 550.133 41.7798 552.107 43.6782C554.107 45.5513 555.373 47.8927 555.904 50.7024H569.041C568.738 46.5006 567.497 42.8302 565.32 39.6915C563.143 36.5274 560.22 34.0848 556.55 32.3635C552.905 30.617 548.715 29.7437 543.982 29.7437C538.287 29.7437 533.351 31.022 529.174 33.5785C525.023 36.1098 521.808 39.6535 519.53 44.2098C517.252 48.7407 516.113 53.9677 516.113 59.8908C516.113 65.7886 517.227 71.003 519.454 75.5339C521.707 80.0396 524.909 83.5706 529.06 86.1272ZM446.127 90C442.432 90 439.103 89.3419 436.141 88.0256C433.205 86.6841 430.876 84.7097 429.155 82.1025C427.459 79.4953 426.611 76.2807 426.611 72.4585C426.611 69.1679 427.219 66.4468 428.434 64.2952C429.649 62.1436 431.307 60.4224 433.408 59.1315C435.509 57.8405 437.875 56.866 440.508 56.2079C443.166 55.5244 445.912 55.0308 448.747 54.7271C452.164 54.3727 454.936 54.0563 457.062 53.7779C459.188 53.4741 460.733 53.0185 461.694 52.411C462.682 51.7782 463.175 50.8037 463.175 49.4874V49.2596C463.175 46.3993 462.327 44.1845 460.631 42.6151C458.935 41.0457 456.493 40.261 453.303 40.261C449.937 40.261 447.266 40.9951 445.292 42.4632C443.343 43.9313 442.027 45.6652 441.343 47.6649L428.51 45.8424C429.522 42.2987 431.193 39.3371 433.522 36.9578C435.85 34.5531 438.698 32.7559 442.065 31.5662C445.431 30.3512 449.152 29.7437 453.227 29.7437C456.037 29.7437 458.834 30.0728 461.618 30.7309C464.403 31.389 466.947 32.4774 469.25 33.9962C471.554 35.4896 473.401 37.5273 474.794 40.1092C476.211 42.691 476.92 45.9184 476.92 49.7912V88.823H463.707V80.8116H463.251C462.416 82.4316 461.239 83.9503 459.72 85.3678C458.227 86.76 456.341 87.8864 454.063 88.747C451.81 89.5823 449.165 90 446.127 90ZM449.696 79.9003C452.455 79.9003 454.847 79.3561 456.872 78.2677C458.897 77.1539 460.454 75.6858 461.543 73.8633C462.656 72.0408 463.213 70.0538 463.213 67.9022V61.0299C462.783 61.3843 462.049 61.7133 461.011 62.0171C459.998 62.3208 458.859 62.5866 457.594 62.8144C456.328 63.0422 455.075 63.2447 453.835 63.4219C452.595 63.5991 451.519 63.751 450.608 63.8775C448.557 64.156 446.722 64.6116 445.102 65.2444C443.482 65.8772 442.204 66.7632 441.267 67.9022C440.331 69.016 439.862 70.4588 439.862 72.2307C439.862 74.7619 440.786 76.673 442.634 77.9639C444.482 79.2549 446.836 79.9003 449.696 79.9003ZM298.477 54.6512V88.823H284.732V30.5031H297.869V40.4129H298.552C299.894 37.1476 302.033 34.5531 304.969 32.6293C307.931 30.7056 311.588 29.7437 315.942 29.7437C319.967 29.7437 323.473 30.6043 326.459 32.3256C329.472 34.0468 331.8 36.5401 333.446 39.8054C335.116 43.0707 335.939 47.0321 335.914 51.6896V88.823H322.169V53.8158C322.169 49.9177 321.156 46.8676 319.131 44.6654C317.132 42.4632 314.36 41.3621 310.816 41.3621C308.412 41.3621 306.273 41.8937 304.4 42.9568C302.552 43.9946 301.096 45.5007 300.033 47.4751C298.995 49.4495 298.477 51.8415 298.477 54.6512ZM230.313 86.2031C234.49 88.7091 239.426 89.962 245.121 89.962C250.816 89.962 255.752 88.7091 259.929 86.2031C264.105 83.6972 267.333 80.1914 269.611 75.6858C271.914 71.1802 273.066 65.9152 273.066 59.8908C273.066 53.8665 271.914 48.5888 269.611 44.0579C267.333 39.527 264.105 36.0085 259.929 33.5026C255.752 30.9967 250.816 29.7437 245.121 29.7437C239.426 29.7437 234.49 30.9967 230.313 33.5026C226.137 36.0085 222.897 39.527 220.593 44.0579C218.315 48.5888 217.176 53.8665 217.176 59.8908C217.176 65.9152 218.315 71.1802 220.593 75.6858C222.897 80.1914 226.137 83.6972 230.313 86.2031ZM252.943 76.4072C250.867 78.1031 248.285 78.9511 245.197 78.9511C242.033 78.9511 239.4 78.1031 237.299 76.4072C235.224 74.686 233.667 72.3825 232.629 69.4969C231.617 66.6113 231.111 63.3966 231.111 59.8529C231.111 56.2838 231.617 53.0565 232.629 50.1709C233.667 47.2599 235.224 44.9438 237.299 43.2226C239.4 41.5013 242.033 40.6407 245.197 40.6407C248.285 40.6407 250.867 41.5013 252.943 43.2226C255.018 44.9438 256.562 47.2599 257.575 50.1709C258.613 53.0565 259.131 56.2838 259.131 59.8529C259.131 63.3966 258.613 66.6113 257.575 69.4969C256.562 72.3825 255.018 74.686 252.943 76.4072ZM179.691 88.823V30.5031H193.018V40.2231H193.626C194.689 36.8565 196.512 34.262 199.093 32.4395C201.701 30.5917 204.675 29.6678 208.016 29.6678C208.775 29.6678 209.623 29.7057 210.56 29.7817C211.522 29.8323 212.319 29.9209 212.952 30.0475V42.691C212.37 42.4885 211.446 42.3113 210.18 42.1595C208.94 41.9823 207.738 41.8937 206.573 41.8937C204.067 41.8937 201.815 42.4379 199.815 43.5263C197.84 44.5895 196.284 46.0702 195.145 47.9687C194.006 49.8671 193.436 52.0566 193.436 54.5373V88.823H179.691ZM165.045 88.823V11.0631H150.959V88.823H165.045Z", fill: "#272525" })), $ = hl({
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
}), _s = "#333", Rs = "#FFF", Ts = "#EEEEEE", ks = "#333", Dr = "#E0E0E0", xf = "#E0E0E0", To = "#E0E0E0", bf = "#2E414D", Ke = "#F2994A", yf = "#FBE0C9", vf = "#F2994A1A", Ae = 16384, ze = 1048576, Jn = 1, Qn = 1, Ir = 4;
function wf(e) {
  if (e.length !== 1)
    return !1;
  const t = e.codePointAt(0) ?? 0;
  return t > 0 && t < 255;
}
const Cf = (e) => ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(
  e
), Ef = (e, t) => e.rowStart === e.rowEnd && e.columnEnd === e.columnStart ? `${Ve(t.column)}${t.row}` : e.rowStart === 1 && e.rowEnd === ze ? `${Ve(e.columnStart)}:${Ve(
  e.columnEnd
)}` : e.columnStart === 1 && e.columnEnd === Ae ? `${e.rowStart}:${e.rowEnd}` : `${Ve(e.columnStart)}${e.rowStart}:${Ve(e.columnEnd)}${e.rowEnd}`;
function ft(e, t, n) {
  const { sheet: o, rowStart: r, rowEnd: i, columnStart: s, columnEnd: a } = e, c = o === t ? "" : `${Ia(n)}!`;
  return r === i && s === a ? `${c}${Ve(s)}${r}` : `${c}${Ve(
    s
  )}${r}:${Ve(a)}${i}`;
}
function bl(e, t) {
  const [n, o, r, i] = e.range, s = Ia(t[e.sheet]);
  return n === r && o === i ? `${s}!$${Ve(o)}$${n}` : `${s}!$${Ve(
    o
  )}$${n}:$${Ve(i)}$${r}`;
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
function fn(e, t) {
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
    const i = t.slice(1), s = Fa(i), a = s.length, c = {}, f = e.getSelectedSheet(), h = e.getWorksheetsProperties().map((m) => m.name);
    for (let m = 0; m < a; m += 1) {
      const { token: d, start: x, end: g } = s[m];
      if (yl(d)) {
        const { sheet: p, row: y, column: S } = d.Reference, T = p ? h.indexOf(p) : f, C = `${T}-${y}-${S}`;
        let w = c[C];
        w || (w = ei(r), c[C] = w, r += 1), n.push(
          /* @__PURE__ */ l.jsx("span", { style: { color: w }, children: Fr(i, x, g) }, m)
        ), o.push({
          sheet: T,
          rowStart: y,
          columnStart: S,
          rowEnd: y,
          columnEnd: S,
          color: w
        });
      } else if (vl(d)) {
        let {
          sheet: p,
          left: { row: y, column: S },
          right: { row: T, column: C }
        } = d.Range;
        const w = p ? h.indexOf(p) : f, E = `${w}-${y}-${S}:${T}-${C}`;
        let _ = c[E];
        _ || (_ = ei(r), c[E] = _, r += 1), y > T && ([y, T] = [T, y]), S > C && ([S, C] = [C, S]), n.push(
          /* @__PURE__ */ l.jsx("span", { style: { color: _ }, children: Fr(i, x, g) }, m)
        ), r += 1, o.push({
          sheet: w,
          rowStart: y,
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
  const n = e.getWorksheetsProperties(), o = Fa(t), { token: r } = o[0];
  if (vl(r)) {
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
  } else if (yl(r)) {
    const { sheet: i, row: s, column: a } = r.Reference;
    if (i !== null) {
      const c = n.findIndex((f) => f.name === i);
      if (c >= 0)
        return [c, s, a, s, a];
    }
  }
  return null;
}
const Sf = (e) => {
  const { model: t, onEditEnd: n, onTextUpdated: o, workbookState: r, textareaRef: i } = e;
  return { onKeyDown: De(
    (a) => {
      const { key: c, shiftKey: f, altKey: h } = a, m = i.current, d = r.getEditingCell();
      if (!(!m || !d))
        switch (c) {
          case "Enter": {
            if (h) {
              const g = m.selectionStart, p = m.selectionEnd, y = m.value, S = `${y.slice(0, g)}
${y.slice(p)}`;
              d.text = S, r.setEditingCell(d), setTimeout(() => {
                m.setSelectionRange(g + 1, g + 1);
              }, 0), a.stopPropagation(), a.preventDefault(), o();
              return;
            }
            a.stopPropagation(), a.preventDefault(), t.setUserInput(
              d.sheet,
              d.row,
              d.column,
              d.text + (d.referencedRange?.str || "")
            );
            const x = f ? -1 : 1;
            t.setSelectedSheet(d.sheet), t.setSelectedCell(d.row + x, d.column), r.clearEditingCell(), n();
            return;
          }
          case "Tab": {
            r.clearEditingCell(), t.setUserInput(
              d.sheet,
              d.row,
              d.column,
              d.text + (d.referencedRange?.str || "")
            );
            const x = f ? -1 : 1;
            t.setSelectedSheet(d.sheet), t.setSelectedCell(d.row, d.column + x), i.current && (i.current.value = ""), a.stopPropagation(), a.preventDefault(), n();
            return;
          }
          case "Escape": {
            const x = r.getEditingCell();
            x && t.setSelectedSheet(x.sheet), r.clearEditingCell(), n();
            return;
          }
          // TODO: Arrow keys navigate in Excel
          case "ArrowRight": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = d.referencedRange.range;
              if (f)
                g.columnEnd += 1;
              else {
                const p = g.columnStart + 1, y = g.rowStart;
                g.columnStart = p, g.columnEnd = p, g.rowEnd = y;
              }
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (fn(d.text, d.cursorStart)) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = {
                sheet: d.sheet,
                rowStart: d.row,
                rowEnd: d.row,
                columnStart: d.column + 1,
                columnEnd: d.column + 1
              };
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), f || t.setSelectedCell(d.row, d.column + 1), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowLeft": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = d.referencedRange.range;
              if (f)
                g.columnEnd -= 1;
              else {
                const p = g.columnStart - 1, y = g.rowStart;
                g.columnStart = p, g.columnEnd = p, g.rowEnd = y;
              }
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (fn(d.text, d.cursorStart)) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = {
                sheet: d.sheet,
                rowStart: d.row,
                rowEnd: d.row,
                columnStart: d.column - 1,
                columnEnd: d.column - 1
              };
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), f || t.setSelectedCell(d.row, d.column - 1), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowUp": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = d.referencedRange.range;
              if (f)
                g.rowEnd > g.rowStart ? g.rowEnd -= 1 : g.rowStart -= 1;
              else {
                const p = g.columnStart, y = g.rowStart - 1;
                g.columnStart = p, g.columnEnd = p, g.rowStart = y, g.rowEnd = y;
              }
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (fn(d.text, d.cursorStart)) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = {
                sheet: d.sheet,
                rowStart: d.row - 1,
                rowEnd: d.row - 1,
                columnStart: d.column,
                columnEnd: d.column
              };
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), f || t.setSelectedCell(d.row - 1, d.column), i.current && (i.current.value = ""), n();
            return;
          }
          case "ArrowDown": {
            if (d.mode === "edit")
              return;
            if (a.stopPropagation(), a.preventDefault(), d.referencedRange) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = d.referencedRange.range;
              if (f)
                g.rowEnd += 1;
              else {
                const p = g.columnStart, y = g.rowStart + 1;
                g.columnStart = p, g.columnEnd = p, g.rowStart = y, g.rowEnd = y;
              }
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            if (fn(d.text, d.cursorStart)) {
              const x = t.getWorksheetsProperties().map((p) => p.name), g = {
                sheet: d.sheet,
                rowStart: d.row + 1,
                rowEnd: d.row + 1,
                columnStart: d.column,
                columnEnd: d.column
              };
              d.referencedRange = {
                range: g,
                str: ft(g, d.sheet, x[g.sheet])
              }, r.setEditingCell(d), o();
              return;
            }
            r.clearEditingCell(), t.setUserInput(d.sheet, d.row, d.column, d.text), t.setSelectedSheet(d.sheet), f || t.setSelectedCell(d.row + 1, d.column), i.current && (i.current.value = ""), n();
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
  const { model: t, onEditEnd: n, onTextUpdated: o, originalText: r, workbookState: i, type: s } = e, [a, c] = oe(r), f = re(null), h = re(null), m = re(null);
  Ne(() => {
    c(r), m.current && (m.current.value = r);
  }, [r]);
  const { onKeyDown: d } = Sf({
    model: t,
    onEditEnd: n,
    onTextUpdated: o,
    workbookState: i,
    textareaRef: m
  });
  Ne(() => {
    const C = i.getEditingCell();
    if (!C)
      return;
    const { editorWidth: w, editorHeight: E } = C;
    if (f.current) {
      const _ = f.current.scrollWidth;
      _ > w - 5 && (C.editorWidth = _ + 10);
      const D = f.current.scrollHeight;
      D > E && (C.editorHeight = D);
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
  }, [t, i, n, s]), p = i.getEditingCell(), y = p !== null || s === "formula-bar" ? "block" : "none", S = p ? i.getEditingText() : r, T = js(t, S).html;
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
}, Rf = (e) => {
  const { t } = Le(), [n, o] = oe(!1), r = re(null), i = De(() => {
    o(!0), e.onMenuOpenChange(!0);
  }, [e.onMenuOpenChange]), s = De(() => {
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
            a.map((c) => /* @__PURE__ */ l.jsxs(
              Ps,
              {
                disableRipple: !0,
                onClick: () => {
                  const f = c.formula, h = ti(e.model, f);
                  if (h) {
                    const [
                      m,
                      d,
                      x,
                      g,
                      p
                    ] = h;
                    e.model.setSelectedSheet(m), e.model.setSelectedCell(d, x), e.model.setSelectedRange(
                      d,
                      x,
                      g,
                      p
                    );
                  }
                  e.onUpdate(), s();
                },
                children: [
                  /* @__PURE__ */ l.jsx(Va, {}),
                  /* @__PURE__ */ l.jsx(Os, { children: c.name }),
                  /* @__PURE__ */ l.jsx($f, { children: c.formula })
                ]
              },
              `${c.name}-${c.scope}`
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
`, Ps = X(on)`
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
    color: ${$.palette.grey[600]};
  }
`, kf = X("div")`
  display: flex;
`, jf = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid ${$.palette.grey[200]};
`, Os = X("div")`
  flex: 1;
  min-width: 0;
  color: ${$.palette.common.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`, $f = X("div")`
  color: ${$.palette.grey[400]};
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
  } = e, [a, c] = oe(!1), f = (h) => {
    c(h);
  };
  return /* @__PURE__ */ l.jsxs(If, { children: [
    /* @__PURE__ */ l.jsx(Ff, { $active: a, children: /* @__PURE__ */ l.jsxs(
      Rf,
      {
        onMenuOpenChange: f,
        openDrawer: e.openDrawer,
        canEdit: e.canEdit,
        model: o,
        onUpdate: r,
        children: [
          /* @__PURE__ */ l.jsx(Nf, { children: t }),
          /* @__PURE__ */ l.jsx(Bf, { children: /* @__PURE__ */ l.jsx(Ho, { size: 16 }) })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx(Af, {}),
    /* @__PURE__ */ l.jsxs(Df, { children: [
      /* @__PURE__ */ l.jsx(Mf, { children: /* @__PURE__ */ l.jsx(mf, {}) }),
      /* @__PURE__ */ l.jsx(
        zf,
        {
          onClick: (h) => {
            const [m, d, x] = o.getSelectedCell(), g = o.getColumnWidth(m, x) * Qn, p = o.getRowHeight(m, d) * Jn;
            s.setEditingCell({
              sheet: m,
              row: d,
              column: x,
              text: n,
              referencedRange: null,
              cursorStart: n.length,
              cursorEnd: n.length,
              focus: "formula-bar",
              activeRanges: [],
              mode: "edit",
              editorWidth: g,
              editorHeight: p
            }), h.stopPropagation(), h.preventDefault();
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
  background-color: ${$.palette.grey[300]};
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
  border-top: 1px solid ${$.palette.grey[300]};
`, Ff = X("div")`
  color: ${$.palette.common.black};
  font-style: normal;
  font-size: 12px;
  display: flex;
  font-weight: 600;
  align-items: center;
  gap: 2px;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  background-color: ${(e) => e.$active ? $.palette.action.selected : "transparent"};
  &:hover {
   background-color: ${(e) => e.$active ? $.palette.action.selected : $.palette.grey[100]};
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
    const w = Ce("name_manager_dialog.default_range_prefix");
    let E = 1, _ = `${w}${E}`;
    const N = s.getWorksheetsProperties().findIndex((F) => F.name === t), R = N >= 0 ? N : void 0, W = s.getDefinedNameList();
    for (; W.some(
      (F) => F.name === _ && F.scope === R
    ); )
      E++, _ = `${w}${E}`;
    return _;
  }, [c, f] = oe(a()), [h, m] = oe(t), [d, x] = oe(n), [g, p] = oe(""), [y, S] = oe(""), T = (w) => h === w;
  Ne(() => {
    const E = s.getWorksheetsProperties().findIndex((D) => D.name === h), _ = E >= 0 ? E : null;
    try {
      s.isValidDefinedName(c, _, d);
    } catch (D) {
      const N = D.message;
      if (i && N.includes("already exists")) {
        p(""), S("");
        return;
      }
      const { nameError: R, formulaError: W } = ni(N);
      p(R), S(W);
      return;
    }
    p(""), S("");
  }, [c, h, d, s, i]);
  const C = g !== "" || y !== "";
  return /* @__PURE__ */ l.jsxs(Vf, { children: [
    /* @__PURE__ */ l.jsxs(Wf, { children: [
      /* @__PURE__ */ l.jsxs(Uf, { children: [
        /* @__PURE__ */ l.jsx(Yf, { children: /* @__PURE__ */ l.jsx(Va, {}) }),
        /* @__PURE__ */ l.jsx(Gf, { children: c || Ce("name_manager_dialog.new_named_range") })
      ] }),
      /* @__PURE__ */ l.jsxs(qf, { children: [
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsx(zr, { htmlFor: "name", children: Ce("name_manager_dialog.range_name") }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", error: !!g, children: [
            /* @__PURE__ */ l.jsx(
              Is,
              {
                autoFocus: !0,
                id: "name",
                variant: "outlined",
                size: "small",
                margin: "none",
                placeholder: Ce("name_manager_dialog.enter_range_name"),
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
          /* @__PURE__ */ l.jsx(zr, { htmlFor: "scope", children: Ce("name_manager_dialog.scope_label") }),
          /* @__PURE__ */ l.jsxs(Wn, { fullWidth: !0, size: "small", children: [
            /* @__PURE__ */ l.jsxs(
              Kf,
              {
                id: "scope",
                value: h,
                onChange: (w) => {
                  m(w.target.value);
                },
                renderValue: (w) => {
                  const E = w;
                  return E === "[Global]" ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                    /* @__PURE__ */ l.jsx(Nr, { children: Ce("name_manager_dialog.workbook") }),
                    /* @__PURE__ */ l.jsx(Ms, { children: ` ${Ce(
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
                    T("[Global]") ? /* @__PURE__ */ l.jsx(As, {}) : /* @__PURE__ */ l.jsx(Ds, {}),
                    /* @__PURE__ */ l.jsx(Nr, { $selected: T("[Global]"), children: Ce("name_manager_dialog.workbook") }),
                    /* @__PURE__ */ l.jsx(Ms, { children: ` ${Ce(
                      "name_manager_dialog.global"
                    )}` })
                  ] }),
                  s.getWorksheetsProperties().map((w) => /* @__PURE__ */ l.jsxs(Fs, { value: w.name, children: [
                    T(w.name) ? /* @__PURE__ */ l.jsx(As, {}) : /* @__PURE__ */ l.jsx(Ds, {}),
                    /* @__PURE__ */ l.jsx(Nr, { $selected: T(w.name), children: w.name })
                  ] }, w.name))
                ]
              }
            ),
            /* @__PURE__ */ l.jsx(Cl, { children: Ce("name_manager_dialog.scope_helper") })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs(Br, { children: [
          /* @__PURE__ */ l.jsxs(Hf, { children: [
            /* @__PURE__ */ l.jsx(zr, { htmlFor: "formula", children: Ce("name_manager_dialog.refers_to") }),
            /* @__PURE__ */ l.jsx(
              Ic,
              {
                size: 16,
                onClick: () => {
                  const w = s.getWorksheetsProperties().map((D) => D.name), E = s.getSelectedView(), _ = bl(
                    E,
                    w
                  );
                  x(_);
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
                placeholder: Ce("name_manager_dialog.enter_formula"),
                fullWidth: !0,
                multiline: !0,
                rows: 3,
                error: !!y,
                value: d,
                onChange: (w) => {
                  x(w.target.value), S("");
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
          children: Ce("name_manager_dialog.cancel")
        }
      ),
      /* @__PURE__ */ l.jsx(
        oi,
        {
          variant: "contained",
          disableElevation: !0,
          disabled: C,
          startIcon: /* @__PURE__ */ l.jsx(zt, { size: 16 }),
          onClick: () => {
            const w = o(c.trim(), h, d);
            w.nameError && p(w.nameError), w.formulaError && S(w.formulaError);
          },
          children: Ce("name_manager_dialog.apply")
        }
      )
    ] })
  ] });
}, Hf = X("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px"
}), Vf = X("div")({
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
  color: ${$.palette.grey[400]};
`, As = () => /* @__PURE__ */ l.jsx(zt, { style: { width: "16px", height: "16px", marginRight: "8px" } }), Ds = X("div")`
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
  color: ${$.palette.text.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${$.palette.grey[200]};
`, Gf = X("span")`
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`, Yf = X(ao)`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: ${$.palette.grey[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    color: ${$.palette.grey[600]};
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
})), Fs = X(on)(() => ({
  padding: 8,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  "&.Mui-selected": {
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: $.palette.grey[50]
    }
  },
  "&:hover": {
    backgroundColor: $.palette.grey[50]
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
  color: ${$.palette.text.primary};
  display: block;
`, Cl = X(La)(() => ({
  fontSize: "12px",
  fontFamily: "Inter",
  color: $.palette.grey[500],
  margin: 0,
  marginTop: "6px",
  padding: 0,
  lineHeight: 1.4
})), Ns = X(Cl)(() => ({
  color: $.palette.error.main
})), Bs = (e) => e.trim().replace(/['"]/g, ""), Zf = ({
  onClose: e,
  getSelectedArea: t,
  model: n,
  onUpdate: o
}) => {
  const [r, i] = oe(null), [s, a] = oe(!1), c = (p) => {
    i(p), a(!1);
  }, f = () => {
    a(!0), i(null);
  }, h = () => {
    i(null), a(!1);
  }, m = (p, y, S) => {
    const T = n.getWorksheetsProperties();
    if (s) {
      const C = T.findIndex((E) => E.name === y), w = C >= 0 ? C : null;
      try {
        return n.newDefinedName(p, w, S), a(!1), o(), {
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
      const C = T.findIndex((E) => E.name === y), w = C >= 0 ? C : null;
      try {
        return n.updateDefinedName(
          r.name,
          r.scope ?? null,
          p,
          w,
          S
        ), i(null), o(), { formulaError: "", nameError: "" };
      } catch (E) {
        return E instanceof Error ? ni(E.message) : { formulaError: "", nameError: `${E}` };
      }
    }
  };
  if (r || s) {
    let p = "", y = "[Global]", S = "";
    if (r) {
      p = r.name;
      const C = n.getWorksheetsProperties();
      y = r.scope != null ? C[r.scope]?.name || "[unknown]" : "[Global]", S = r.formula;
    } else s && (S = t());
    const T = s ? Ce("name_manager_dialog.add_new_range") : Ce("name_manager_dialog.edit_range");
    return /* @__PURE__ */ l.jsxs(zs, { children: [
      /* @__PURE__ */ l.jsxs(lh, { children: [
        /* @__PURE__ */ l.jsx(mn, { title: Ce("name_manager_dialog.back_to_list"), children: /* @__PURE__ */ l.jsx(
          Lr,
          {
            onClick: h,
            onKeyDown: (C) => {
              (C.key === "Enter" || C.key === " ") && h();
            },
            "aria-label": Ce("name_manager_dialog.back_to_list"),
            tabIndex: 0,
            children: /* @__PURE__ */ l.jsx(Wa, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ch, { children: T }),
        /* @__PURE__ */ l.jsx(
          Lr,
          {
            onClick: e,
            onKeyDown: (C) => {
              (C.key === "Enter" || C.key === " ") && e();
            },
            "aria-label": Ce("right_drawer.close"),
            tabIndex: 0,
            children: /* @__PURE__ */ l.jsx(Vo, {})
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Ls, { children: /* @__PURE__ */ l.jsx(
        Lf,
        {
          name: p,
          scope: y,
          formula: S,
          onSave: m,
          onCancel: h,
          editingDefinedName: r,
          model: n
        }
      ) })
    ] });
  }
  const d = t(), x = n.getDefinedNameList(), g = (p) => {
    const y = ti(n, p);
    if (y) {
      const [S, T, C, w, E] = y;
      n.setSelectedSheet(S), n.setSelectedCell(T, C), n.setSelectedRange(T, C, w, E);
    }
    o();
  };
  return /* @__PURE__ */ l.jsxs(zs, { children: [
    /* @__PURE__ */ l.jsxs(sh, { children: [
      /* @__PURE__ */ l.jsx(ah, { children: Ce("name_manager_dialog.title") }),
      /* @__PURE__ */ l.jsx(
        Lr,
        {
          onClick: e,
          onKeyDown: (p) => {
            (p.key === "Enter" || p.key === " ") && e();
          },
          "aria-label": Ce("right_drawer.close"),
          tabIndex: 0,
          children: /* @__PURE__ */ l.jsx(Vo, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(Ls, { children: x.length === 0 ? /* @__PURE__ */ l.jsxs(uh, { children: [
      /* @__PURE__ */ l.jsx(dh, { children: /* @__PURE__ */ l.jsx(Fc, {}) }),
      Ce("name_manager_dialog.empty_message1"),
      /* @__PURE__ */ l.jsx("br", {}),
      Ce("name_manager_dialog.empty_message2")
    ] }) : /* @__PURE__ */ l.jsx(Jf, { children: x.map((p) => {
      const y = n.getWorksheetsProperties(), S = p.scope != null ? y[p.scope]?.name || "[Unknown]" : "[Global]", T = d !== null && Bs(p.formula) === Bs(d);
      return /* @__PURE__ */ l.jsxs(
        Qf,
        {
          tabIndex: 0,
          $isSelected: T,
          onClick: () => {
            const C = p.formula, w = ti(n, C);
            if (w) {
              const [
                E,
                _,
                D,
                N,
                R
              ] = w;
              n.setSelectedSheet(E), n.setSelectedCell(_, D), n.setSelectedRange(
                _,
                D,
                N,
                R
              );
            }
            o();
          },
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), g(p.formula));
          },
          children: [
            /* @__PURE__ */ l.jsxs(eh, { children: [
              /* @__PURE__ */ l.jsx(oh, { children: p.name }),
              /* @__PURE__ */ l.jsx(th, { children: S }),
              /* @__PURE__ */ l.jsx(nh, { children: p.formula })
            ] }),
            /* @__PURE__ */ l.jsxs(rh, { children: [
              /* @__PURE__ */ l.jsx(mn, { title: Ce("name_manager_dialog.edit"), children: /* @__PURE__ */ l.jsx(
                Hs,
                {
                  onClick: (C) => {
                    C.stopPropagation(), c(p);
                  },
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), c(p));
                  },
                  "aria-label": Ce("name_manager_dialog.edit"),
                  tabIndex: 0,
                  children: /* @__PURE__ */ l.jsx(Ua, { size: 16 })
                }
              ) }),
              /* @__PURE__ */ l.jsx(mn, { title: Ce("name_manager_dialog.delete"), children: /* @__PURE__ */ l.jsx(
                Hs,
                {
                  onClick: (C) => {
                    C.stopPropagation(), n.deleteDefinedName(
                      p.name,
                      p.scope ?? null
                    ), o();
                  },
                  onKeyDown: (C) => {
                    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), C.stopPropagation(), n.deleteDefinedName(
                      p.name,
                      p.scope ?? null
                    ), o());
                  },
                  "aria-label": Ce("name_manager_dialog.delete"),
                  tabIndex: 0,
                  children: /* @__PURE__ */ l.jsx(Qt, { size: 16 })
                }
              ) })
            ] })
          ]
        },
        `${p.name}-${p.scope}`
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
            Ce("name_manager_dialog.help")
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        oi,
        {
          variant: "contained",
          disableElevation: !0,
          startIcon: /* @__PURE__ */ l.jsx(Ft, { size: 16 }),
          onClick: f,
          children: Ce("name_manager_dialog.new")
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
  color: $.palette.grey[700],
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
  borderBottom: `1px solid ${$.palette.grey[200]}`,
  paddingLeft: e ? "20px" : "12px",
  transition: "all 0.2s ease-in-out",
  borderLeft: e ? `3px solid ${$.palette.primary.main}` : "3px solid transparent",
  "&:hover": {
    backgroundColor: $.palette.grey[50],
    paddingLeft: "20px"
  }
})), eh = X("div")({
  fontSize: "12px",
  color: $.palette.common.black,
  fontFamily: $.typography.fontFamily,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2px"
}), th = X("span")({
  fontSize: "12px",
  color: $.palette.common.black
}), nh = X("span")({
  fontSize: "12px",
  color: $.palette.grey[600]
}), oh = X("span")({
  fontSize: "12px",
  color: $.palette.common.black,
  fontWeight: 600,
  wordBreak: "break-all",
  overflowWrap: "break-word"
}), rh = X("div")({
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
    backgroundColor: $.palette.grey[200]
  }
}), El = X("div")`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: ${$.palette.grey[600]};
  border-top: 1px solid ${$.palette.grey[300]};
  gap: 8px;
`, ih = X("a")`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  color: ${$.palette.grey[600]};
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
    background-color: ${$.palette.grey[200]};
    color: ${$.palette.grey[700]};
    &:hover {
      background-color: ${$.palette.grey[300]};
    }
  }
`, sh = X("div")({
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0 8px",
  borderBottom: `1px solid ${$.palette.grey[300]}`
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
  borderBottom: `1px solid ${$.palette.grey[300]}`
}), ch = X("div")({
  flex: 1,
  fontSize: "12px",
  fontWeight: 500
}), Lr = X("div")`
  &:hover {
    background-color: ${$.palette.grey[50]};
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
  color: ${$.palette.grey[600]};
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
  background-color: ${$.palette.grey[100]};
  color: ${$.palette.grey[600]};
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
  const { t } = Le(), n = _c(), o = Rc(), [r, i] = oe(
    e.initialLocale
  ), [s, a] = oe(
    e.initialTimezone
  ), [c, f] = oe(
    e.initialLanguage
  );
  Ne(() => {
    i(e.initialLocale), a(e.initialTimezone), f(e.initialLanguage);
  }, [
    e.initialLocale,
    e.initialTimezone,
    e.initialLanguage
  ]);
  const h = () => {
    e.onSave(r, s, c), e.onClose();
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
          children: /* @__PURE__ */ l.jsx(Vo, {})
        }
      )
    ] }),
    /* @__PURE__ */ l.jsxs(
      bh,
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
          /* @__PURE__ */ l.jsxs(Vs, { children: [
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
        startIcon: /* @__PURE__ */ l.jsx(zt, { size: 16 }),
        onClick: h,
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
  borderBottom: `1px solid ${$.palette.grey[300]}`
}), gh = te("div")({
  width: "100%",
  fontSize: "12px"
}), xh = te("div")`
  &:hover {
    background-color: ${$.palette.grey[50]};
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
}), Vs = te("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;
  border-bottom: 1px solid ${$.palette.grey[300]};
  &:last-child {
    border-bottom: none;
  }
`, Ws = te("h1")`
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  margin: 0px;
  color: ${$.palette.text.primary};
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
  color: $.palette.grey[500],
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
  border: 1px solid ${$.palette.grey[300]};
  font-family: Inter;
  width: 100%;
  height: 100%;
  margin-top: 8px;
  background-color: ${$.palette.grey[100]};
  border-radius: 4px;
  padding: 8px;
`, Hr = te("div")`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  justify-content: space-between;
  color: ${$.palette.grey[700]};
`, Vr = te("span")`
  font-size: 12px;
  font-family: Inter;
  font-weight: normal;
  color: ${$.palette.grey[500]};
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
    backgroundColor: `${$.palette.grey[100]} !important`,
    fontWeight: "500 !important"
  }
}, Gs = te(on)`
  padding: 8px !important;
  height: 32px !important;
  min-height: 32px !important;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 12px;

  &.Mui-selected {
    background-color: ${$.palette.grey[50]} !important;
  }

  &.Mui-selected:hover {
    background-color: ${$.palette.grey[50]} !important;
  }

  &:hover {
    background-color: ${$.palette.grey[50]} !important;
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
  color: ${$.palette.text.primary};
  display: block;
`, Eh = te("div")`
  color: ${$.palette.grey[700]};
  display: flex;
  align-items: center;
  border-top: 1px solid ${$.palette.grey[300]};
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
  initialLocale: c,
  initialTimezone: f,
  initialLanguage: h,
  onSettingsSave: m
}) => {
  const { t: d } = Le(), [x, g] = oe(n), [p, y] = oe(!1), S = re(null), T = De((w) => {
    w.preventDefault(), y(!0);
  }, []);
  if (Ne(() => {
    if (!p)
      return;
    document.body.style.userSelect = "none", document.body.style.cursor = "col-resize";
    const w = (_) => {
      const D = window.innerWidth - _.clientX, N = Math.max(
        Rh,
        Math.min(Th, D)
      );
      g(N), o(N);
    }, E = () => {
      y(!1), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
    return document.addEventListener("mousemove", w), document.addEventListener("mouseup", E), () => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", E), document.body.style.userSelect = "", document.body.style.cursor = "";
    };
  }, [p, o]), !e)
    return null;
  const C = () => a === "regionalSettings" ? /* @__PURE__ */ l.jsx(
    fh,
    {
      onClose: t,
      initialLocale: c,
      initialTimezone: f,
      initialLanguage: h,
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
  return /* @__PURE__ */ l.jsxs(jh, { $drawerWidth: x, children: [
    /* @__PURE__ */ l.jsx(
      Oh,
      {
        ref: S,
        onMouseDown: T,
        $isResizing: p,
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
    backgroundColor: $.palette.common.white,
    right: 0,
    top: `${Yo}px`,
    bottom: 0,
    borderLeft: `1px solid ${$.palette.grey[300]}`,
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
  backgroundColor: $.palette.grey[300],
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
    backgroundColor: e ? $.palette.primary.main : "transparent",
    zIndex: 10,
    "&:hover": {
      backgroundColor: $.palette.primary.main,
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
function hn() {
  const e = Sl(br.create).current;
  return Ah(e.disposeEffect), e;
}
function En(e, t) {
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
  const c = i.type;
  return typeof c == "function" && !Dh(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${o} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Sn = En(u.element, _l);
Sn.isRequired = En(u.element.isRequired, _l);
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
const _n = xp;
process.env.NODE_ENV !== "production" && (u.node, u.object.isRequired);
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
var Ih = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.shape({
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
const Ko = _e.createContext(null);
var Fh = function(t) {
  return t.scrollTop;
}, Ln = "unmounted", Yt = "exited", qt = "entering", pn = "entered", ai = "exiting", bt = /* @__PURE__ */ (function(e) {
  Tl(t, e);
  function t(o, r) {
    var i;
    i = e.call(this, o, r) || this;
    var s = r, a = s && !s.isMounting ? o.enter : o.appear, c;
    return i.appearStatus = null, o.in ? a ? (c = Yt, i.appearStatus = qt) : c = pn : o.unmountOnExit || o.mountOnEnter ? c = Ln : c = Yt, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(r, i) {
    var s = r.in;
    return s && i.status === Ln ? {
      status: Yt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(r) {
    var i = null;
    if (r !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== qt && s !== pn && (i = qt) : (s === qt || s === pn) && (i = ai);
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
      if (this.cancelNextCallback(), i === qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : vo.findDOMNode(this);
          s && Fh(s);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Yt && this.setState({
      status: Ln
    });
  }, n.performEnter = function(r) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : r, c = this.props.nodeRef ? [a] : [vo.findDOMNode(this), a], f = c[0], h = c[1], m = this.getTimeouts(), d = a ? m.appear : m.enter;
    if (!r && !s || Xs.disabled) {
      this.safeSetState({
        status: pn
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, h), this.safeSetState({
      status: qt
    }, function() {
      i.props.onEntering(f, h), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: pn
        }, function() {
          i.props.onEntered(f, h);
        });
      });
    });
  }, n.performExit = function() {
    var r = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : vo.findDOMNode(this);
    if (!i || Xs.disabled) {
      this.safeSetState({
        status: Yt
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
          status: Yt
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
    var a = Rl(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _e.createElement(Ko.Provider, {
        value: null
      }, typeof s == "function" ? s(r, a) : _e.cloneElement(_e.Children.only(s), a))
    );
  }, t;
})(_e.Component);
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
function dn() {
}
bt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: dn,
  onEntering: dn,
  onEntered: dn,
  onExit: dn,
  onExiting: dn,
  onExited: dn
};
bt.UNMOUNTED = Ln;
bt.EXITED = Yt;
bt.ENTERING = qt;
bt.ENTERED = pn;
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
function Xt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function zh(e, t) {
  return ki(e.children, function(n) {
    return Fo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Xt(n, "appear", e),
      enter: Xt(n, "enter", e),
      exit: Xt(n, "exit", e)
    });
  });
}
function Lh(e, t, n) {
  var o = ki(e.children), r = Bh(t, o);
  return Object.keys(r).forEach(function(i) {
    var s = r[i];
    if (Io(s)) {
      var a = i in t, c = i in o, f = t[i], h = Io(f) && !f.props.in;
      c && (!a || h) ? r[i] = Fo(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: Xt(s, "exit", e),
        enter: Xt(s, "enter", e)
      }) : !c && a && !h ? r[i] = Fo(s, {
        in: !1
      }) : c && a && Io(f) && (r[i] = Fo(s, {
        onExited: n.bind(null, s),
        in: f.props.in,
        exit: Xt(s, "exit", e),
        enter: Xt(s, "enter", e)
      }));
    }
  }), r;
}
var Hh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Vh = {
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
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? zh(r, a) : Lh(r, s, a),
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
    var r = this.props, i = r.component, s = r.childFactory, a = Rl(r, ["component", "childFactory"]), c = this.state.contextValue, f = Hh(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ _e.createElement(Ko.Provider, {
      value: c
    }, f) : /* @__PURE__ */ _e.createElement(Ko.Provider, {
      value: c
    }, /* @__PURE__ */ _e.createElement(i, a, f));
  }, t;
})(_e.Component);
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
ji.defaultProps = Vh;
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
    onEnter: c,
    onEntered: f,
    onEntering: h,
    onExit: m,
    onExited: d,
    onExiting: x,
    style: g,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = bt,
    ...S
  } = t, T = hn(), C = k.useRef(), w = xr(), E = k.useRef(null), _ = Ge(E, fo(i), n), D = (M) => (z) => {
    if (M) {
      const J = E.current;
      z === void 0 ? M(J) : M(J, z);
    }
  }, N = D(h), R = D((M, z) => {
    kl(M);
    const {
      duration: J,
      delay: A,
      easing: G
    } = Xo({
      style: g,
      timeout: p,
      easing: s
    }, {
      mode: "enter"
    });
    let O;
    p === "auto" ? (O = w.transitions.getAutoHeightDuration(M.clientHeight), C.current = O) : O = J, M.style.transition = [w.transitions.create("opacity", {
      duration: O,
      delay: A
    }), w.transitions.create("transform", {
      duration: Wr ? O : O * 0.666,
      delay: A,
      easing: G
    })].join(","), c && c(M, z);
  }), W = D(f), F = D(x), v = D((M) => {
    const {
      duration: z,
      delay: J,
      easing: A
    } = Xo({
      style: g,
      timeout: p,
      easing: s
    }, {
      mode: "exit"
    });
    let G;
    p === "auto" ? (G = w.transitions.getAutoHeightDuration(M.clientHeight), C.current = G) : G = z, M.style.transition = [w.transitions.create("opacity", {
      duration: G,
      delay: J
    }), w.transitions.create("transform", {
      duration: Wr ? G : G * 0.666,
      delay: Wr ? J : J || G * 0.333,
      easing: A
    })].join(","), M.style.opacity = 0, M.style.transform = li(0.75), m && m(M);
  }), I = D(d), P = (M) => {
    p === "auto" && T.start(C.current || 0, M), o && o(E.current, M);
  };
  return /* @__PURE__ */ l.jsx(y, {
    appear: r,
    in: a,
    nodeRef: E,
    onEnter: R,
    onEntered: W,
    onEntering: N,
    onExit: v,
    onExited: I,
    onExiting: F,
    addEndListener: P,
    timeout: p === "auto" ? null : p,
    ...S,
    children: (M, {
      ownerState: z,
      ...J
    }) => /* @__PURE__ */ k.cloneElement(i, {
      style: {
        opacity: 0,
        transform: li(0.75),
        visibility: M === "exited" && !a ? "hidden" : void 0,
        ...Wh[M],
        ...g,
        ...i.props.style
      },
      ref: _,
      ...J
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
  children: Sn.isRequired,
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
var We = "top", it = "bottom", st = "right", Ue = "left", $i = "auto", ho = [We, it, st, Ue], yn = "start", to = "end", Uh = "clippingParents", jl = "viewport", An = "popper", Gh = "reference", Zs = /* @__PURE__ */ ho.reduce(function(e, t) {
  return e.concat([t + "-" + yn, t + "-" + to]);
}, []), $l = /* @__PURE__ */ [].concat(ho, [$i]).reduce(function(e, t) {
  return e.concat([t, t + "-" + yn, t + "-" + to]);
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
function tn(e) {
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
function om(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !ot(i) || !gt(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
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
      var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !ot(r) || !gt(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(c) {
        r.removeAttribute(c);
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
var Jt = Math.max, Zo = Math.min, vn = Math.round;
function ci() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Pl() {
  return !/^((?!chrome|android).)*safari/i.test(ci());
}
function wn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, i = 1;
  t && ot(e) && (r = e.offsetWidth > 0 && vn(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && vn(o.height) / e.offsetHeight || 1);
  var s = tn(e) ? Je(e) : window, a = s.visualViewport, c = !Pl() && n, f = (o.left + (c && a ? a.offsetLeft : 0)) / r, h = (o.top + (c && a ? a.offsetTop : 0)) / i, m = o.width / r, d = o.height / i;
  return {
    width: m,
    height: d,
    top: h,
    right: f + m,
    bottom: h + d,
    left: f,
    x: f,
    y: h
  };
}
function Oi(e) {
  var t = wn(e), n = e.offsetWidth, o = e.offsetHeight;
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
function Ht(e) {
  return ((tn(e) ? e.ownerDocument : (
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
    Ht(e)
  );
}
function Js(e) {
  return !ot(e) || // https://github.com/popperjs/popper-core/issues/837
  kt(e).position === "fixed" ? null : e.offsetParent;
}
function am(e) {
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
  for (var t = Je(e), n = Js(e); n && sm(n) && kt(n).position === "static"; )
    n = Js(n);
  return n && (gt(n) === "html" || gt(n) === "body" && kt(n).position === "static") ? t : n || am(e) || t;
}
function Mi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Gn(e, t, n) {
  return Jt(e, Zo(t, n));
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
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = mt(n.placement), c = Mi(a), f = [Ue, st].indexOf(a) >= 0, h = f ? "height" : "width";
  if (!(!i || !s)) {
    var m = cm(r.padding, n), d = Oi(i), x = c === "y" ? We : Ue, g = c === "y" ? it : st, p = n.rects.reference[h] + n.rects.reference[c] - s[c] - n.rects.popper[h], y = s[c] - n.rects.reference[c], S = mo(i), T = S ? c === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, C = p / 2 - y / 2, w = m[x], E = T - d[h] - m[g], _ = T / 2 - d[h] / 2 + C, D = Gn(w, _, E), N = c;
    n.modifiersData[o] = (t = {}, t[N] = D, t.centerOffset = D - _, t);
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
function Cn(e) {
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
    x: vn(n * r) / r || 0,
    y: vn(o * r) / r || 0
  };
}
function Qs(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, a = e.position, c = e.gpuAcceleration, f = e.adaptive, h = e.roundOffsets, m = e.isFixed, d = s.x, x = d === void 0 ? 0 : d, g = s.y, p = g === void 0 ? 0 : g, y = typeof h == "function" ? h({
    x,
    y: p
  }) : {
    x,
    y: p
  };
  x = y.x, p = y.y;
  var S = s.hasOwnProperty("x"), T = s.hasOwnProperty("y"), C = Ue, w = We, E = window;
  if (f) {
    var _ = mo(n), D = "clientHeight", N = "clientWidth";
    if (_ === Je(n) && (_ = Ht(n), kt(_).position !== "static" && a === "absolute" && (D = "scrollHeight", N = "scrollWidth")), _ = _, r === We || (r === Ue || r === st) && i === to) {
      w = it;
      var R = m && _ === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[D]
      );
      p -= R - o.height, p *= c ? 1 : -1;
    }
    if (r === Ue || (r === We || r === it) && i === to) {
      C = st;
      var W = m && _ === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[N]
      );
      x -= W - o.width, x *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: a
  }, f && fm), v = h === !0 ? hm({
    x,
    y: p
  }, Je(n)) : {
    x,
    y: p
  };
  if (x = v.x, p = v.y, c) {
    var I;
    return Object.assign({}, F, (I = {}, I[w] = T ? "0" : "", I[C] = S ? "0" : "", I.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + p + "px)" : "translate3d(" + x + "px, " + p + "px, 0)", I));
  }
  return Object.assign({}, F, (t = {}, t[w] = T ? p + "px" : "", t[C] = S ? x + "px" : "", t.transform = "", t));
}
function mm(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, c = a === void 0 ? !0 : a, f = {
    placement: mt(t.placement),
    variation: Cn(t.placement),
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
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, s = o.resize, a = s === void 0 ? !0 : s, c = Je(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(h) {
    h.addEventListener("scroll", n.update, jo);
  }), a && c.addEventListener("resize", n.update, jo), function() {
    i && f.forEach(function(h) {
      h.removeEventListener("scroll", n.update, jo);
    }), a && c.removeEventListener("resize", n.update, jo);
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
  return wn(Ht(e)).left + Ai(e).scrollLeft;
}
function wm(e, t) {
  var n = Je(e), o = Ht(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, a = 0, c = 0;
  if (r) {
    i = r.width, s = r.height;
    var f = Pl();
    (f || !f && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Di(e),
    y: c
  };
}
function Cm(e) {
  var t, n = Ht(e), o = Ai(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Jt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Jt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + Di(e), c = -o.scrollTop;
  return kt(r || n).direction === "rtl" && (a += Jt(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Ii(e) {
  var t = kt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Il(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : ot(e) && Ii(e) ? e : Il(vr(e));
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
  var n = wn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ta(e, t, n) {
  return t === jl ? ui(wm(e, n)) : tn(t) ? Em(t, n) : ui(Cm(Ht(e)));
}
function Sm(e) {
  var t = Yn(vr(e)), n = ["absolute", "fixed"].indexOf(kt(e).position) >= 0, o = n && ot(e) ? mo(e) : e;
  return tn(o) ? t.filter(function(r) {
    return tn(r) && Ol(r, o) && gt(r) !== "body";
  }) : [];
}
function _m(e, t, n, o) {
  var r = t === "clippingParents" ? Sm(e) : [].concat(t), i = [].concat(r, [n]), s = i[0], a = i.reduce(function(c, f) {
    var h = ta(e, f, o);
    return c.top = Jt(h.top, c.top), c.right = Zo(h.right, c.right), c.bottom = Zo(h.bottom, c.bottom), c.left = Jt(h.left, c.left), c;
  }, ta(e, s, o));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Fl(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? mt(o) : null, i = o ? Cn(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
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
      case yn:
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
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, c = a === void 0 ? Uh : a, f = n.rootBoundary, h = f === void 0 ? jl : f, m = n.elementContext, d = m === void 0 ? An : m, x = n.altBoundary, g = x === void 0 ? !1 : x, p = n.padding, y = p === void 0 ? 0 : p, S = Al(typeof y != "number" ? y : Dl(y, ho)), T = d === An ? Gh : An, C = e.rects.popper, w = e.elements[g ? T : d], E = _m(tn(w) ? w : w.contextElement || Ht(e.elements.popper), c, h, s), _ = wn(e.elements.reference), D = Fl({
    reference: _,
    element: C,
    placement: r
  }), N = ui(Object.assign({}, C, D)), R = d === An ? N : _, W = {
    top: E.top - R.top + S.top,
    bottom: R.bottom - E.bottom + S.bottom,
    left: E.left - R.left + S.left,
    right: R.right - E.right + S.right
  }, F = e.modifiersData.offset;
  if (d === An && F) {
    var v = F[r];
    Object.keys(W).forEach(function(I) {
      var P = [st, it].indexOf(I) >= 0 ? 1 : -1, M = [We, it].indexOf(I) >= 0 ? "y" : "x";
      W[I] += v[M] * P;
    });
  }
  return W;
}
function Rm(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, f = c === void 0 ? $l : c, h = Cn(o), m = h ? a ? Zs : Zs.filter(function(g) {
    return Cn(g) === h;
  }) : ho, d = m.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  d.length === 0 && (d = m);
  var x = d.reduce(function(g, p) {
    return g[p] = no(e, {
      placement: p,
      boundary: r,
      rootBoundary: i,
      padding: s
    })[mt(p)], g;
  }, {});
  return Object.keys(x).sort(function(g, p) {
    return x[g] - x[p];
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
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !0 : s, c = n.fallbackPlacements, f = n.padding, h = n.boundary, m = n.rootBoundary, d = n.altBoundary, x = n.flipVariations, g = x === void 0 ? !0 : x, p = n.allowedAutoPlacements, y = t.options.placement, S = mt(y), T = S === y, C = c || (T || !g ? [Bo(y)] : Tm(y)), w = [y].concat(C).reduce(function(B, K) {
      return B.concat(mt(K) === $i ? Rm(t, {
        placement: K,
        boundary: h,
        rootBoundary: m,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: p
      }) : K);
    }, []), E = t.rects.reference, _ = t.rects.popper, D = /* @__PURE__ */ new Map(), N = !0, R = w[0], W = 0; W < w.length; W++) {
      var F = w[W], v = mt(F), I = Cn(F) === yn, P = [We, it].indexOf(v) >= 0, M = P ? "width" : "height", z = no(t, {
        placement: F,
        boundary: h,
        rootBoundary: m,
        altBoundary: d,
        padding: f
      }), J = P ? I ? st : Ue : I ? it : We;
      E[M] > _[M] && (J = Bo(J));
      var A = Bo(J), G = [];
      if (i && G.push(z[v] <= 0), a && G.push(z[J] <= 0, z[A] <= 0), G.every(function(B) {
        return B;
      })) {
        R = F, N = !1;
        break;
      }
      D.set(F, G);
    }
    if (N)
      for (var O = g ? 3 : 1, b = function(K) {
        var Y = w.find(function(U) {
          var Z = D.get(U);
          if (Z)
            return Z.slice(0, K).every(function(Q) {
              return Q;
            });
        });
        if (Y)
          return R = Y, "break";
      }, j = O; j > 0; j--) {
        var L = b(j);
        if (L === "break") break;
      }
    t.placement !== R && (t.modifiersData[o]._skip = !0, t.placement = R, t.reset = !0);
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
  return [We, st, it, Ue].some(function(t) {
    return e[t] >= 0;
  });
}
function $m(e) {
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
  return s = s || 0, a = (a || 0) * r, [Ue, st].indexOf(o) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Mm(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, s = $l.reduce(function(h, m) {
    return h[m] = Om(m, t.rects, i), h;
  }, {}), a = s[t.placement], c = a.x, f = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = s;
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
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, s = n.altAxis, a = s === void 0 ? !1 : s, c = n.boundary, f = n.rootBoundary, h = n.altBoundary, m = n.padding, d = n.tether, x = d === void 0 ? !0 : d, g = n.tetherOffset, p = g === void 0 ? 0 : g, y = no(t, {
    boundary: c,
    rootBoundary: f,
    padding: m,
    altBoundary: h
  }), S = mt(t.placement), T = Cn(t.placement), C = !T, w = Mi(S), E = Fm(w), _ = t.modifiersData.popperOffsets, D = t.rects.reference, N = t.rects.popper, R = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, W = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, v = {
    x: 0,
    y: 0
  };
  if (_) {
    if (i) {
      var I, P = w === "y" ? We : Ue, M = w === "y" ? it : st, z = w === "y" ? "height" : "width", J = _[w], A = J + y[P], G = J - y[M], O = x ? -N[z] / 2 : 0, b = T === yn ? D[z] : N[z], j = T === yn ? -N[z] : -D[z], L = t.elements.arrow, B = x && L ? Oi(L) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ml(), Y = K[P], U = K[M], Z = Gn(0, D[z], B[z]), Q = C ? D[z] / 2 - O - Z - Y - W.mainAxis : b - Z - Y - W.mainAxis, q = C ? -D[z] / 2 + O + Z + U + W.mainAxis : j + Z + U + W.mainAxis, ee = t.elements.arrow && mo(t.elements.arrow), H = ee ? w === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, ce = (I = F?.[w]) != null ? I : 0, de = J + Q - ce - H, Fe = J + q - ce, He = Gn(x ? Zo(A, de) : A, J, x ? Jt(G, Fe) : G);
      _[w] = He, v[w] = He - J;
    }
    if (a) {
      var ye, Me = w === "x" ? We : Ue, pe = w === "x" ? it : st, je = _[E], Re = E === "y" ? "height" : "width", ie = je + y[Me], jt = je - y[pe], Tn = [We, Ue].indexOf(S) !== -1, go = (ye = F?.[E]) != null ? ye : 0, xo = Tn ? ie : je - D[Re] - N[Re] - go + W.altAxis, rn = Tn ? je + D[Re] + N[Re] - go - W.altAxis : jt, bo = x && Tn ? lm(xo, je, rn) : Gn(x ? xo : ie, je, x ? rn : jt);
      _[E] = bo, v[E] = bo - je;
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
  return e === Je(e) || !ot(e) ? Ai(e) : zm(e);
}
function Hm(e) {
  var t = e.getBoundingClientRect(), n = vn(t.width) / e.offsetWidth || 1, o = vn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Vm(e, t, n) {
  n === void 0 && (n = !1);
  var o = ot(t), r = ot(t) && Hm(t), i = Ht(t), s = wn(e, r, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((gt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(i)) && (a = Lm(t)), ot(t) ? (c = wn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Di(i))), {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
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
        var c = t.get(a);
        c && r(c);
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
    }, m = [], d = !1, x = {
      state: h,
      setOptions: function(S) {
        var T = typeof S == "function" ? S(h.options) : S;
        p(), h.options = Object.assign({}, i, h.options, T), h.scrollParents = {
          reference: tn(a) ? Yn(a) : a.contextElement ? Yn(a.contextElement) : [],
          popper: Yn(c)
        };
        var C = Um(Ym([].concat(o, h.options.modifiers)));
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
        if (!d) {
          var S = h.elements, T = S.reference, C = S.popper;
          if (ia(T, C)) {
            h.rects = {
              reference: Vm(T, mo(C), h.options.strategy === "fixed"),
              popper: Oi(C)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(W) {
              return h.modifiersData[W.name] = Object.assign({}, W.data);
            });
            for (var w = 0; w < h.orderedModifiers.length; w++) {
              if (h.reset === !0) {
                h.reset = !1, w = -1;
                continue;
              }
              var E = h.orderedModifiers[w], _ = E.fn, D = E.options, N = D === void 0 ? {} : D, R = E.name;
              typeof _ == "function" && (h = _({
                state: h,
                options: N,
                name: R,
                instance: x
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gm(function() {
        return new Promise(function(y) {
          x.forceUpdate(), y(h);
        });
      }),
      destroy: function() {
        p(), d = !0;
      }
    };
    if (!ia(a, c))
      return x;
    x.setOptions(f).then(function(y) {
      !d && f.onFirstUpdate && f.onFirstUpdate(y);
    });
    function g() {
      h.orderedModifiers.forEach(function(y) {
        var S = y.name, T = y.options, C = T === void 0 ? {} : T, w = y.effect;
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
    function p() {
      m.forEach(function(y) {
        return y();
      }), m = [];
    }
    return x;
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
    const x = Te(n?.className, i, r?.className, o?.className), g = {
      ...n?.style,
      ...r?.style,
      ...o?.style
    }, p = {
      ...n,
      ...r,
      ...o
    };
    return x.length > 0 && (p.className = x), Object.keys(g).length > 0 && (p.style = g), {
      props: p,
      internalRef: void 0
    };
  }
  const s = zl({
    ...r,
    ...o
  }), a = sa(o), c = sa(r), f = t(s), h = Te(f?.className, n?.className, i, r?.className, o?.className), m = {
    ...f?.style,
    ...n?.style,
    ...r?.style,
    ...o?.style
  }, d = {
    ...f,
    ...n,
    ...c,
    ...a
  };
  return h.length > 0 && (d.className = h), Object.keys(m).length > 0 && (d.style = m), {
    props: d,
    internalRef: f.ref
  };
}
function Hl(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Vl(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: r = !1,
    ...i
  } = e, s = r ? {} : Hl(n, o), {
    props: a,
    internalRef: c
  } = Ll({
    ...i,
    externalSlotProps: s
  }), f = Ge(c, s?.ref, e.additionalProps?.ref);
  return Bl(t, {
    ...a,
    ref: f
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
  } = t, [s, a] = k.useState(null), c = Ge(/* @__PURE__ */ k.isValidElement(o) ? fo(o) : null, n);
  if (en(() => {
    i || a(Zm(r) || document.body);
  }, [r, i]), en(() => {
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
process.env.NODE_ENV !== "production" && (oo.propTypes = al(oo.propTypes));
function Jm(e) {
  return lt("MuiPopper", e);
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
    open: c,
    placement: f,
    popperOptions: h,
    popperRef: m,
    slotProps: d = {},
    slots: x = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: p,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, S = k.useRef(null), T = Ge(S, n), C = k.useRef(null), w = Ge(C, m), E = k.useRef(w);
  en(() => {
    E.current = w;
  }, [w]), k.useImperativeHandle(m, () => C.current, []);
  const _ = Qm(f, i), [D, N] = k.useState(_), [R, W] = k.useState(Jo(o));
  k.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), k.useEffect(() => {
    o && W(Jo(o));
  }, [o]), en(() => {
    if (!R || !c)
      return;
    const M = (A) => {
      N(A.placement);
    };
    if (process.env.NODE_ENV !== "production" && R && wr(R) && R.nodeType === 1) {
      const A = R.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && A.top === 0 && A.left === 0 && A.right === 0 && A.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let z = [{
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
        state: A
      }) => {
        M(A);
      }
    }];
    a != null && (z = z.concat(a)), h && h.modifiers != null && (z = z.concat(h.modifiers));
    const J = Xm(R, S.current, {
      placement: _,
      ...h,
      modifiers: z
    });
    return E.current(J), () => {
      J.destroy(), E.current(null);
    };
  }, [R, s, a, c, h, _]);
  const F = {
    placement: D
  };
  g !== null && (F.TransitionProps = g);
  const v = tg(t), I = x.root ?? "div", P = Vl({
    elementType: I,
    externalSlotProps: d.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: v.root
  });
  return /* @__PURE__ */ l.jsx(I, {
    ...P,
    children: typeof r == "function" ? r(F) : r
  });
}), Wl = /* @__PURE__ */ k.forwardRef(function(t, n) {
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
    popperOptions: d = ng,
    popperRef: x,
    style: g,
    transition: p = !1,
    slotProps: y = {},
    slots: S = {},
    ...T
  } = t, [C, w] = k.useState(!0), E = () => {
    w(!1);
  }, _ = () => {
    w(!0);
  };
  if (!c && !h && (!p || C))
    return null;
  let D;
  if (i)
    D = i;
  else if (o) {
    const W = Jo(o);
    D = W && wr(W) ? rt(W).body : rt(null).body;
  }
  const N = !h && c && (!p || C) ? "none" : void 0, R = p ? {
    in: h,
    onEnter: E,
    onExited: _
  } : void 0;
  return /* @__PURE__ */ l.jsx(oo, {
    disablePortal: a,
    container: D,
    children: /* @__PURE__ */ l.jsx(og, {
      anchorEl: o,
      direction: s,
      disablePortal: a,
      modifiers: f,
      ref: n,
      open: p ? !C : h,
      placement: m,
      popperOptions: d,
      popperRef: x,
      slotProps: y,
      slots: S,
      ...T,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: N,
        ...g
      },
      TransitionProps: R,
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
  anchorEl: En(u.oneOfType([Tt, u.object, u.func]), (e) => {
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
    componentsProps: c,
    container: f,
    disablePortal: h,
    keepMounted: m,
    modifiers: d,
    open: x,
    placement: g,
    popperOptions: p,
    popperRef: y,
    transition: S,
    slots: T,
    slotProps: C,
    ...w
  } = r, E = T?.root ?? a?.Root, _ = {
    anchorEl: i,
    container: f,
    disablePortal: h,
    keepMounted: m,
    modifiers: d,
    open: x,
    placement: g,
    popperOptions: p,
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
  return en(() => {
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
    ...d
  } = i, x = h[e] || o, g = Hl(m[e], r), {
    props: {
      component: p,
      ...y
    },
    internalRef: S
  } = Ll({
    className: n,
    ...c,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: g
  }), T = Ge(S, g?.ref, t.ref), C = e === "root" ? p || f : p, w = Bl(x, {
    ...e === "root" && !f && !h[e] && s,
    ...e !== "root" && !h[e] && s,
    ...y,
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
function sg(e) {
  return lt("MuiTooltip", e);
}
const Oe = Ye("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
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
})(_n(({
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
      [`&[data-popper-placement*="bottom"] .${Oe.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Oe.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Oe.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Oe.arrow}`]: {
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
      [`&[data-popper-placement*="right"] .${Oe.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${Oe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Oe.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${Oe.arrow}`]: {
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
})(_n(({
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
  [`.${Oe.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${Oe.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${Oe.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Oe.popper}[data-popper-placement*="bottom"] &`]: {
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
      [`.${Oe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${Oe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${Oe.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${Oe.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${Oe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${Oe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${Oe.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${Oe.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Oe.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Oe.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), dg = ne("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(_n(({
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
    componentsProps: c = {},
    describeChild: f = !1,
    disableFocusListener: h = !1,
    disableHoverListener: m = !1,
    disableInteractive: d = !1,
    disableTouchListener: x = !1,
    enterDelay: g = 100,
    enterNextDelay: p = 0,
    enterTouchDelay: y = 700,
    followCursor: S = !1,
    id: T,
    leaveDelay: C = 0,
    leaveTouchDelay: w = 1500,
    onClose: E,
    onOpen: _,
    open: D,
    placement: N = "bottom",
    PopperComponent: R,
    PopperProps: W = {},
    slotProps: F = {},
    slots: v = {},
    title: I,
    TransitionComponent: P,
    TransitionProps: M,
    ...z
  } = o, J = /* @__PURE__ */ k.isValidElement(i) ? i : /* @__PURE__ */ l.jsx("span", {
    children: i
  }), A = xr(), G = _i(), [O, b] = k.useState(), [j, L] = k.useState(null), B = k.useRef(!1), K = d || S, Y = hn(), U = hn(), Z = hn(), Q = hn(), [q, ee] = ig({
    controlled: D,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let H = q;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: le
    } = k.useRef(D !== void 0);
    k.useEffect(() => {
      O && O.disabled && !le && I !== "" && O.tagName.toLowerCase() === "button" && console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [I, O, le]);
  }
  const ce = gp(T), de = k.useRef(), Fe = It(() => {
    de.current !== void 0 && (document.body.style.WebkitUserSelect = de.current, de.current = void 0), Q.clear();
  });
  k.useEffect(() => Fe, [Fe]);
  const He = (le) => {
    la.clear(), $o = !0, ee(!0), _ && !H && _(le);
  }, ye = It(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (le) => {
      la.start(800 + C, () => {
        $o = !1;
      }), ee(!1), E && H && E(le), Y.start(A.transitions.duration.shortest, () => {
        B.current = !1;
      });
    }
  ), Me = (le) => {
    B.current && le.type !== "touchstart" || (O && O.removeAttribute("title"), U.clear(), Z.clear(), g || $o && p ? U.start($o ? p : g, () => {
      He(le);
    }) : He(le));
  }, pe = (le) => {
    U.clear(), Z.start(C, () => {
      ye(le);
    });
  }, [, je] = k.useState(!1), Re = (le) => {
    qo(le.target) || (je(!1), pe(le));
  }, ie = (le) => {
    O || b(le.currentTarget), qo(le.target) && (je(!0), Me(le));
  }, jt = (le) => {
    B.current = !0;
    const $t = J.props;
    $t.onTouchStart && $t.onTouchStart(le);
  }, Tn = (le) => {
    jt(le), Z.clear(), Y.clear(), Fe(), de.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(y, () => {
      document.body.style.WebkitUserSelect = de.current, Me(le);
    });
  }, go = (le) => {
    J.props.onTouchEnd && J.props.onTouchEnd(le), Fe(), Z.start(w, () => {
      ye(le);
    });
  };
  k.useEffect(() => {
    if (!H)
      return;
    function le($t) {
      $t.key === "Escape" && ye($t);
    }
    return document.addEventListener("keydown", le), () => {
      document.removeEventListener("keydown", le);
    };
  }, [ye, H]);
  const xo = Ge(fo(J), b, n);
  !I && I !== 0 && (H = !1);
  const rn = k.useRef(), bo = (le) => {
    const $t = J.props;
    $t.onMouseMove && $t.onMouseMove(le), Dn = {
      x: le.clientX,
      y: le.clientY
    }, rn.current && rn.current.update();
  }, kn = {}, Er = typeof I == "string";
  f ? (kn.title = !H && Er && !m ? I : null, kn["aria-describedby"] = H ? ce : null) : (kn["aria-label"] = Er ? I : null, kn["aria-labelledby"] = H && !Er ? ce : null);
  const Qe = {
    ...kn,
    ...z,
    ...J.props,
    className: Te(z.className, J.props.className),
    onTouchStart: jt,
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
  x || (Qe.onTouchStart = Tn, Qe.onTouchEnd = go), m || (Qe.onMouseOver = Po(Me, Qe.onMouseOver), Qe.onMouseLeave = Po(pe, Qe.onMouseLeave), K || (jn.onMouseOver = Me, jn.onMouseLeave = pe)), h || (Qe.onFocus = Po(ie, Qe.onFocus), Qe.onBlur = Po(Re, Qe.onBlur), K || (jn.onFocus = ie, jn.onBlur = Re)), process.env.NODE_ENV !== "production" && J.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${J.props.title}\` or the Tooltip component.`].join(`
`));
  const Vt = {
    ...o,
    isRtl: G,
    arrow: r,
    disableInteractive: K,
    placement: N,
    PopperComponentProp: R,
    touch: B.current
  }, $n = typeof F.popper == "function" ? F.popper(Vt) : F.popper, hc = k.useMemo(() => {
    let le = [{
      name: "arrow",
      enabled: !!j,
      options: {
        element: j,
        padding: 4
      }
    }];
    return W.popperOptions?.modifiers && (le = le.concat(W.popperOptions.modifiers)), $n?.popperOptions?.modifiers && (le = le.concat($n.popperOptions.modifiers)), {
      ...W.popperOptions,
      ...$n?.popperOptions,
      modifiers: le
    };
  }, [j, W.popperOptions, $n?.popperOptions]), Sr = lg(Vt), mc = typeof F.transition == "function" ? F.transition(Vt) : F.transition, yo = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? P,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...v
    },
    slotProps: {
      arrow: F.arrow ?? c.arrow,
      popper: {
        ...W,
        ...$n ?? c.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: F.tooltip ?? c.tooltip,
      transition: {
        ...M,
        ...mc ?? c.transition
      }
    }
  }, [gc, xc] = Xe("popper", {
    elementType: cg,
    externalForwardedProps: yo,
    ownerState: Vt,
    className: Te(Sr.popper, W?.className)
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
    ref: L
  });
  return /* @__PURE__ */ l.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ k.cloneElement(J, Qe), /* @__PURE__ */ l.jsx(gc, {
      as: R ?? Fi,
      placement: N,
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
      popperRef: rn,
      open: O ? H : !1,
      id: ce,
      transition: !0,
      ...jn,
      ...xc,
      popperOptions: hc,
      children: ({
        TransitionProps: le
      }) => /* @__PURE__ */ l.jsx(bc, {
        timeout: A.transitions.duration.shorter,
        ...le,
        ...yc,
        children: /* @__PURE__ */ l.jsxs(vc, {
          ...wc,
          children: [I, r ? /* @__PURE__ */ l.jsx(Cc, {
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
  arrow: u.bool,
  /**
   * Tooltip reference element.
   */
  children: Sn.isRequired,
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
const Ul = En(u.elementType, fg);
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
function nn(e) {
  return rt(e).defaultView || window;
}
function Kl(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function gg(e) {
  const t = rt(e);
  return t.body === e ? nn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function qn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ca(e) {
  return parseFloat(nn(e).getComputedStyle(e).paddingRight) || 0;
}
function xg(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), o = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || o;
}
function ua(e, t, n, o, r) {
  const i = [t, n, ...o];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), c = !xg(s);
    a && c && qn(s, r);
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
      const s = Kl(nn(o));
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
      const s = o.parentElement, a = nn(o);
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
function Hn(e) {
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
  } = e, c = k.useRef(!1), f = k.useRef(null), h = k.useRef(null), m = k.useRef(null), d = k.useRef(null), x = k.useRef(!1), g = k.useRef(null), p = Ge(fo(t), g), y = k.useRef(null);
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
    const C = rt(g.current), w = (D) => {
      if (y.current = D, o || !s() || D.key !== "Tab")
        return;
      Hn(C) === g.current && D.shiftKey && (c.current = !0, h.current && h.current.focus());
    }, E = () => {
      const D = g.current;
      if (D === null)
        return;
      const N = Hn(C);
      if (!C.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (D.contains(N) || o && N !== f.current && N !== h.current)
        return;
      if (N !== d.current)
        d.current = null;
      else if (d.current !== null)
        return;
      if (!x.current)
        return;
      let R = [];
      if ((N === f.current || N === h.current) && (R = i(g.current)), R.length > 0) {
        const W = !!(y.current?.shiftKey && y.current?.key === "Tab"), F = R[0], v = R[R.length - 1];
        typeof F != "string" && typeof v != "string" && (W ? v.focus() : F.focus());
      } else
        D.focus();
    };
    C.addEventListener("focusin", E), C.addEventListener("keydown", w, !0);
    const _ = setInterval(() => {
      const D = Hn(C);
      D && D.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(_), C.removeEventListener("focusin", E), C.removeEventListener("keydown", w, !0);
    };
  }, [n, o, r, s, a, i]);
  const S = (C) => {
    m.current === null && (m.current = C.relatedTarget), x.current = !0, d.current = C.target;
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
      ref: p,
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
  children: Sn,
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
    easing: c,
    in: f,
    onEnter: h,
    onEntered: m,
    onEntering: d,
    onExit: x,
    onExited: g,
    onExiting: p,
    style: y,
    timeout: S = r,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = bt,
    ...C
  } = t, w = k.useRef(null), E = Ge(w, fo(a), n), _ = (P) => (M) => {
    if (P) {
      const z = w.current;
      M === void 0 ? P(z) : P(z, M);
    }
  }, D = _(d), N = _((P, M) => {
    kl(P);
    const z = Xo({
      style: y,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    P.style.webkitTransition = o.transitions.create("opacity", z), P.style.transition = o.transitions.create("opacity", z), h && h(P, M);
  }), R = _(m), W = _(p), F = _((P) => {
    const M = Xo({
      style: y,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    P.style.webkitTransition = o.transitions.create("opacity", M), P.style.transition = o.transitions.create("opacity", M), x && x(P);
  }), v = _(g), I = (P) => {
    i && i(w.current, P);
  };
  return /* @__PURE__ */ l.jsx(T, {
    appear: s,
    in: f,
    nodeRef: w,
    onEnter: N,
    onEntered: R,
    onEntering: D,
    onExit: F,
    onExited: v,
    onExiting: W,
    addEndListener: I,
    timeout: S,
    ...C,
    children: (P, {
      ownerState: M,
      ...z
    }) => /* @__PURE__ */ k.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: P === "exited" && !f ? "hidden" : void 0,
        ...Tg[P],
        ...y,
        ...a.props.style
      },
      ref: E,
      ...z
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
  children: Sn.isRequired,
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
function kg(e) {
  return lt("MuiBackdrop", e);
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
    open: c,
    components: f = {},
    componentsProps: h = {},
    slotProps: m = {},
    slots: d = {},
    TransitionComponent: x,
    transitionDuration: g,
    ...p
  } = o, y = {
    ...o,
    component: s,
    invisible: a
  }, S = jg(y), T = {
    transition: x,
    root: f.Root,
    ...d
  }, C = {
    ...h,
    ...m
  }, w = {
    component: s,
    slots: T,
    slotProps: C
  }, [E, _] = Xe("root", {
    elementType: $g,
    externalForwardedProps: w,
    className: Te(S.root, i),
    ownerState: y
  }), [D, N] = Xe("transition", {
    elementType: Xl,
    externalForwardedProps: w,
    ownerState: y
  });
  return /* @__PURE__ */ l.jsx(D, {
    in: c,
    timeout: g,
    ...p,
    ...N,
    children: /* @__PURE__ */ l.jsx(E, {
      "aria-hidden": !0,
      ..._,
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
    onClose: c,
    open: f,
    rootRef: h
  } = e, m = k.useRef({}), d = k.useRef(null), x = k.useRef(null), g = Ge(x, h), [p, y] = k.useState(!f), S = Og(a);
  let T = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (T = !1);
  const C = () => rt(d.current), w = () => (m.current.modalRef = x.current, m.current.mount = d.current, m.current), E = () => {
    Oo.mount(w(), {
      disableScrollLock: o
    }), x.current && (x.current.scrollTop = 0);
  }, _ = It(() => {
    const M = Pg(t) || C().body;
    Oo.add(w(), M), x.current && E();
  }), D = () => Oo.isTopModal(w()), N = It((M) => {
    d.current = M, M && (f && D() ? E() : x.current && qn(x.current, T));
  }), R = k.useCallback(() => {
    Oo.remove(w(), T);
  }, [T]);
  k.useEffect(() => () => {
    R();
  }, [R]), k.useEffect(() => {
    f ? _() : (!S || !r) && R();
  }, [f, R, S, r, _]);
  const W = (M) => (z) => {
    M.onKeyDown?.(z), !(z.key !== "Escape" || z.which === 229 || // Wait until IME is settled.
    !D()) && (n || (z.stopPropagation(), c && c(z, "escapeKeyDown")));
  }, F = (M) => (z) => {
    M.onClick?.(z), z.target === z.currentTarget && c && c(z, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const z = zl(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const J = {
        ...z,
        ...M
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...J,
        onKeyDown: W(J),
        ref: g
      };
    },
    getBackdropProps: (M = {}) => {
      const z = M;
      return {
        "aria-hidden": !0,
        ...z,
        onClick: F(z),
        open: f
      };
    },
    getTransitionProps: () => {
      const M = () => {
        y(!1), i && i();
      }, z = () => {
        y(!0), s && s(), r && R();
      };
      return {
        onEnter: da(M, a?.props.onEnter ?? pa),
        onExited: da(z, a?.props.onExited ?? pa)
      };
    },
    rootRef: g,
    portalRef: N,
    isTopModal: D,
    exited: p,
    hasTransition: S
  };
}
function Ag(e) {
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
})(_n(({
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
    closeAfterTransition: c = !1,
    children: f,
    container: h,
    component: m,
    components: d = {},
    componentsProps: x = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: p = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: S = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: C = !1,
    hideBackdrop: w = !1,
    keepMounted: E = !1,
    onClose: _,
    onTransitionEnter: D,
    onTransitionExited: N,
    open: R,
    slotProps: W = {},
    slots: F = {},
    // eslint-disable-next-line react/prop-types
    theme: v,
    ...I
  } = o, P = {
    ...o,
    closeAfterTransition: c,
    disableAutoFocus: g,
    disableEnforceFocus: p,
    disableEscapeKeyDown: y,
    disablePortal: S,
    disableRestoreFocus: T,
    disableScrollLock: C,
    hideBackdrop: w,
    keepMounted: E
  }, {
    getRootProps: M,
    getBackdropProps: z,
    getTransitionProps: J,
    portalRef: A,
    isTopModal: G,
    exited: O,
    hasTransition: b
  } = Mg({
    ...P,
    rootRef: n
  }), j = {
    ...P,
    exited: O
  }, L = Dg(j), B = {};
  if (f.props.tabIndex === void 0 && (B.tabIndex = "-1"), b) {
    const {
      onEnter: q,
      onExited: ee
    } = J();
    B.onEnter = q, B.onExited = ee;
  }
  const K = {
    slots: {
      root: d.Root,
      backdrop: d.Backdrop,
      ...F
    },
    slotProps: {
      ...x,
      ...W
    }
  }, [Y, U] = Xe("root", {
    ref: n,
    elementType: Ig,
    externalForwardedProps: {
      ...K,
      ...I,
      component: m
    },
    getSlotProps: M,
    ownerState: j,
    className: Te(a, L?.root, !j.open && j.exited && L?.hidden)
  }), [Z, Q] = Xe("backdrop", {
    ref: i?.ref,
    elementType: r,
    externalForwardedProps: K,
    shouldForwardComponentProp: !0,
    additionalProps: i,
    getSlotProps: (q) => z({
      ...q,
      onClick: (ee) => {
        q?.onClick && q.onClick(ee);
      }
    }),
    className: Te(i?.className, L?.backdrop),
    ownerState: j
  });
  return !E && !R && (!b || O) ? null : /* @__PURE__ */ l.jsx(oo, {
    ref: A,
    container: h,
    disablePortal: S,
    children: /* @__PURE__ */ l.jsxs(Y, {
      ...U,
      children: [!w && r ? /* @__PURE__ */ l.jsx(Z, {
        ...Q
      }) : null, /* @__PURE__ */ l.jsx(Qo, {
        disableEnforceFocus: p,
        disableAutoFocus: g,
        disableRestoreFocus: T,
        isEnabled: G,
        open: R,
        children: /* @__PURE__ */ k.cloneElement(f, B)
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
  BackdropComponent: u.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: u.object,
  /**
   * A single child content element.
   */
  children: Sn.isRequired,
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
function Ng(e) {
  return lt("MuiPaper", e);
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
})(_n(({
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
    square: c = !1,
    variant: f = "elevation",
    ...h
  } = o, m = {
    ...o,
    component: s,
    elevation: a,
    square: c,
    variant: f
  }, d = Bg(m);
  return process.env.NODE_ENV !== "production" && r.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ l.jsx(zg, {
    as: s,
    ownerState: m,
    className: Te(d.root, i),
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
process.env.NODE_ENV !== "production" && (Ql.propTypes = {
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
  elevation: En(ql, (e) => {
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
function Lg(e) {
  return lt("MuiPopover", e);
}
Ye("MuiPopover", ["root", "paper"]);
function Hg(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function Vg(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const c = {};
    return Object.keys(a).forEach((f) => {
      Hg(f, a[f]) && typeof s[f] == "function" && (c[f] = (...h) => {
        s[f](...h), a[f](...h);
      });
    }), c;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, c = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, f = Te(s?.className, a?.className, c?.className), h = n(c, a);
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
  const o = t, r = n(e, o), i = Te(o?.className, e?.className);
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
    anchorReference: c = "anchorEl",
    children: f,
    className: h,
    container: m,
    elevation: d = 8,
    marginThreshold: x = 16,
    open: g,
    PaperProps: p = {},
    // TODO: remove in v7
    slots: y = {},
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
    ...D
  } = o, N = k.useRef(), R = {
    ...o,
    anchorOrigin: s,
    anchorReference: c,
    elevation: d,
    marginThreshold: x,
    transformOrigin: T,
    TransitionComponent: C,
    transitionDuration: w,
    TransitionProps: E
  }, W = Wg(R), F = k.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const q = Vn(i), ee = q && q.nodeType === 1 ? q : rt(N.current).body, H = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ce = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ce.top === 0 && ce.left === 0 && ce.right === 0 && ce.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: H.top + fa(H, s.vertical),
      left: H.left + ha(H, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, c]), v = k.useCallback((q) => ({
    vertical: fa(q, T.vertical),
    horizontal: ha(q, T.horizontal)
  }), [T.horizontal, T.vertical]), I = k.useCallback((q) => {
    const ee = {
      width: q.offsetWidth,
      height: q.offsetHeight
    }, H = v(ee);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ma(H)
      };
    const ce = F();
    let de = ce.top - H.vertical, Fe = ce.left - H.horizontal;
    const He = de + ee.height, ye = Fe + ee.width, Me = nn(Vn(i)), pe = Me.innerHeight - x, je = Me.innerWidth - x;
    if (x !== null && de < x) {
      const Re = de - x;
      de -= Re, H.vertical += Re;
    } else if (x !== null && He > pe) {
      const Re = He - pe;
      de -= Re, H.vertical += Re;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > pe && ee.height && pe && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - pe}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), x !== null && Fe < x) {
      const Re = Fe - x;
      Fe -= Re, H.horizontal += Re;
    } else if (ye > je) {
      const Re = ye - je;
      Fe -= Re, H.horizontal += Re;
    }
    return {
      top: `${Math.round(de)}px`,
      left: `${Math.round(Fe)}px`,
      transformOrigin: ma(H)
    };
  }, [i, c, F, v, x]), [P, M] = k.useState(g), z = k.useCallback(() => {
    const q = N.current;
    if (!q)
      return;
    const ee = I(q);
    ee.top !== null && q.style.setProperty("top", ee.top), ee.left !== null && (q.style.left = ee.left), q.style.transformOrigin = ee.transformOrigin, M(!0);
  }, [I]);
  k.useEffect(() => (_ && window.addEventListener("scroll", z), () => window.removeEventListener("scroll", z)), [i, _, z]);
  const J = () => {
    z();
  }, A = () => {
    M(!1);
  };
  k.useEffect(() => {
    g && z();
  }), k.useImperativeHandle(r, () => g ? {
    updatePosition: () => {
      z();
    }
  } : null, [g, z]), k.useEffect(() => {
    if (!g)
      return;
    const q = mg(() => {
      z();
    }), ee = nn(Vn(i));
    return ee.addEventListener("resize", q), () => {
      q.clear(), ee.removeEventListener("resize", q);
    };
  }, [i, g, z]);
  let G = w;
  const O = {
    slots: {
      transition: C,
      ...y
    },
    slotProps: {
      transition: E,
      paper: p,
      ...S
    }
  }, [b, j] = Xe("transition", {
    elementType: eo,
    externalForwardedProps: O,
    ownerState: R,
    getSlotProps: (q) => ({
      ...q,
      onEntering: (ee, H) => {
        q.onEntering?.(ee, H), J();
      },
      onExited: (ee) => {
        q.onExited?.(ee), A();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  w === "auto" && !b.muiSupportAuto && (G = void 0);
  const L = m || (i ? rt(Vn(i)).body : void 0), [B, {
    slots: K,
    slotProps: Y,
    ...U
  }] = Xe("root", {
    ref: n,
    elementType: Ug,
    externalForwardedProps: {
      ...O,
      ...D
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: y.backdrop
      },
      slotProps: {
        backdrop: Vg(typeof S.backdrop == "function" ? S.backdrop(R) : S.backdrop, {
          invisible: !0
        })
      },
      container: L,
      open: g
    },
    ownerState: R,
    className: Te(W.root, h)
  }), [Z, Q] = Xe("paper", {
    ref: N,
    className: W.paper,
    elementType: ec,
    externalForwardedProps: O,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: P ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ l.jsx(B, {
    ...U,
    ...!Nl(B) && {
      slots: K,
      slotProps: Y,
      disableScrollLock: _
    },
    children: /* @__PURE__ */ l.jsx(b, {
      ...j,
      timeout: G,
      children: /* @__PURE__ */ l.jsx(Z, {
        ...Q,
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
  anchorEl: En(u.oneOfType([Tt, u.func]), (e) => {
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
  elevation: ql,
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
    component: Ul
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
function Rn() {
  return (Rn = Object.assign || function(e) {
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
}, tc = _e.memo(function(e) {
  var t = e.onMove, n = e.onKey, o = Cr(e, ["onMove", "onKey"]), r = re(null), i = ro(t), s = ro(n), a = re(null), c = re(!1), f = jc(function() {
    var x = function(y) {
      xa(y), (Kn(y) ? y.touches.length > 0 : y.buttons > 0) && r.current ? i(ga(r.current, y, a.current)) : p(!1);
    }, g = function() {
      return p(!1);
    };
    function p(y) {
      var S = c.current, T = pi(r.current), C = y ? T.addEventListener : T.removeEventListener;
      C(S ? "touchmove" : "mousemove", x), C(S ? "touchend" : "mouseup", g);
    }
    return [function(y) {
      var S = y.nativeEvent, T = r.current;
      if (T && (xa(S), !(function(w, E) {
        return E && !Kn(w);
      })(S, c.current) && T)) {
        if (Kn(S)) {
          c.current = !0;
          var C = S.changedTouches || [];
          C.length && (a.current = C[0].identifier);
        }
        T.focus(), i(ga(T, S, a.current)), p(!0);
      }
    }, function(y) {
      var S = y.which || y.keyCode;
      S < 37 || S > 40 || (y.preventDefault(), s({ left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0, top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0 }));
    }, p];
  }, [s, i]), h = f[0], m = f[1], d = f[2];
  return Ne(function() {
    return d;
  }, [d]), _e.createElement("div", Rn({}, o, { onTouchStart: h, onMouseDown: h, className: "react-colorful__interactive", ref: r, onKeyDown: m, tabIndex: 0, role: "slider" }));
}), Bi = function(e) {
  return e.filter(Boolean).join(" ");
}, nc = function(e) {
  var t = e.color, n = e.left, o = e.top, r = o === void 0 ? 0.5 : o, i = Bi(["react-colorful__pointer", e.className]);
  return _e.createElement("div", { className: i, style: { top: 100 * r + "%", left: 100 * n + "%" } }, _e.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Be = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, Gg = function(e) {
  return Zg(fi(e));
}, fi = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Be(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Be(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, Yg = function(e) {
  return Xg(Kg(e));
}, qg = function(e) {
  var t = e.s, n = e.v, o = e.a, r = (200 - t) * n / 100;
  return { h: Be(e.h), s: Be(r > 0 && r < 200 ? t * n / 100 / (r <= 100 ? r : 200 - r) * 100 : 0), l: Be(r / 2), a: Be(o, 2) };
}, hi = function(e) {
  var t = qg(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Kg = function(e) {
  var t = e.h, n = e.s, o = e.v, r = e.a;
  t = t / 360 * 6, n /= 100, o /= 100;
  var i = Math.floor(t), s = o * (1 - n), a = o * (1 - (t - i) * n), c = o * (1 - (1 - t + i) * n), f = i % 6;
  return { r: Be(255 * [o, a, s, s, c, o][f]), g: Be(255 * [c, o, o, a, s, s][f]), b: Be(255 * [s, s, c, o, o, a][f]), a: Be(r, 2) };
}, Mo = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Xg = function(e) {
  var t = e.r, n = e.g, o = e.b, r = e.a, i = r < 1 ? Mo(Be(255 * r)) : "";
  return "#" + Mo(t) + Mo(n) + Mo(o) + i;
}, Zg = function(e) {
  var t = e.r, n = e.g, o = e.b, r = e.a, i = Math.max(t, n, o), s = i - Math.min(t, n, o), a = s ? i === t ? (n - o) / s : i === n ? 2 + (o - t) / s : 4 + (t - n) / s : 0;
  return { h: Be(60 * (a < 0 ? a + 6 : a)), s: Be(i ? s / i * 100 : 0), v: Be(i / 255 * 100), a: r };
}, Jg = _e.memo(function(e) {
  var t = e.hue, n = e.onChange, o = Bi(["react-colorful__hue", e.className]);
  return _e.createElement("div", { className: o }, _e.createElement(tc, { onMove: function(r) {
    n({ h: 360 * r.left });
  }, onKey: function(r) {
    n({ h: io(t + 360 * r.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Be(t), "aria-valuemax": "360", "aria-valuemin": "0" }, _e.createElement(nc, { className: "react-colorful__hue-pointer", left: t / 360, color: hi({ h: t, s: 100, v: 100, a: 1 }) })));
}), Qg = _e.memo(function(e) {
  var t = e.hsva, n = e.onChange, o = { backgroundColor: hi({ h: t.h, s: 100, v: 100, a: 1 }) };
  return _e.createElement("div", { className: "react-colorful__saturation", style: o }, _e.createElement(tc, { onMove: function(r) {
    n({ s: 100 * r.left, v: 100 - 100 * r.top });
  }, onKey: function(r) {
    n({ s: io(t.s + 100 * r.left, 0, 100), v: io(t.v - 100 * r.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Be(t.s) + "%, Brightness " + Be(t.v) + "%" }, _e.createElement(nc, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: hi(t) })));
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
  Ne(function() {
    if (!e.equal(t, a.current.color)) {
      var f = e.toHsva(t);
      a.current = { hsva: f, color: t }, s(f);
    }
  }, [t, e]), Ne(function() {
    var f;
    oc(i, a.current.hsva) || e.equal(f = e.fromHsva(i), a.current.color) || (a.current = { hsva: i, color: f }, o(f));
  }, [i, e, o]);
  var c = De(function(f) {
    s(function(h) {
      return Object.assign({}, h, f);
    });
  }, []);
  return [i, c];
}
var n0 = typeof window < "u" ? gi : Ne, o0 = function() {
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
  var c = t0(n, r, i), f = c[0], h = c[1], m = Bi(["react-colorful", t]);
  return _e.createElement("div", Rn({}, s, { ref: a, className: m }), _e.createElement(Qg, { hsva: f, onChange: h }), _e.createElement(Jg, { hue: f.h, onChange: h, className: "react-colorful__last-control" }));
}, s0 = { defaultColor: "000", toHsva: Gg, fromHsva: function(e) {
  return Yg({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: e0 }, a0 = function(e) {
  return _e.createElement(i0, Rn({}, e, { colorModel: s0 }));
}, l0 = /^#?([0-9A-F]{3,8})$/i, c0 = function(e) {
  var t = e.color, n = t === void 0 ? "" : t, o = e.onChange, r = e.onBlur, i = e.escape, s = e.validate, a = e.format, c = e.process, f = Cr(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]), h = oe(function() {
    return i(n);
  }), m = h[0], d = h[1], x = ro(o), g = ro(r), p = De(function(S) {
    var T = i(S.target.value);
    d(T), s(T) && x(c ? c(T) : T);
  }, [i, c, s, x]), y = De(function(S) {
    s(S.target.value) || d(i(n)), g(S);
  }, [n, i, s, g]);
  return Ne(function() {
    d(i(n));
  }, [n, i]), _e.createElement("input", Rn({}, f, { value: a ? a(m) : m, spellCheck: "false", onChange: p, onBlur: y }));
}, ya = function(e) {
  return "#" + e;
}, u0 = function(e) {
  var t = e.prefixed, n = e.alpha, o = Cr(e, ["prefixed", "alpha"]), r = De(function(s) {
    return s.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6);
  }, [n]), i = De(function(s) {
    return (function(a, c) {
      var f = l0.exec(a), h = f ? f[1].length : 0;
      return h === 3 || h === 6 || !!c && h === 4 || !!c && h === 8;
    })(s, n);
  }, [n]);
  return _e.createElement(c0, Rn({}, o, { escape: r, format: t ? ya : void 0, process: ya, validate: i }));
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
  const [a, c] = oe(e), f = re([]), { t: h } = Le();
  Ne(() => {
    c(e);
  }, [e]);
  const m = (d) => {
    f.current.includes(d) || (f.current = [d, ...f.current].slice(
      0,
      14
    )), c(d), t(d);
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
              c(d);
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
                    c(d);
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
          /* @__PURE__ */ l.jsx(g0, { onClick: n, children: h("color_picker.cancel") }),
          /* @__PURE__ */ l.jsxs(
            m0,
            {
              onClick: () => {
                m(a), n();
              },
              children: [
                /* @__PURE__ */ l.jsx(zt, {}),
                h("color_picker.apply")
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
  border-top: 1px solid ${$.palette.grey[200]};
`, f0 = te.div`
  background: ${$.palette.background.default};
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
  color: ${$.palette.primary.contrastText};
  background: ${$.palette.primary.main};
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
  color: ${$.palette.grey[700]};
  background: ${$.palette.grey[200]};
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
    background: ${$.palette.grey[300]};
  }
  svg {
    max-width: 12px;
    max-height: 12px;
  }
`, x0 = te.div`
  margin: auto 0px auto 10px;
  font-size: 13px;
  color: #333;
  font-family: ${$.typography.button.fontFamily};
`, b0 = te.div`
  margin: auto 0px;
  font-size: 12px;
  display: inline-flex;
  font-family: ${$.typography.button.fontFamily};
`, y0 = te.div`
  display: inline-flex;
  flex-grow: 1;
  width: 100%;
  height: 28px;
  border: 1px solid ${$.palette.grey[300]};
  border-radius: 5px;
  &:hover {
    border: 1px solid ${$.palette.grey[600]};
  }
  &:focus-within {
    outline: 2px solid ${$.palette.secondary.main};
    outline-offset: 1px;
  }
`, v0 = te(u0)`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: ${$.typography.button.fontFamily};
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
    background: ${$.palette.background.default};
    outline: none;
    font-family: ${$.typography.button.fontFamily};
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
  ${({ $color: e }) => e.toUpperCase() === "#FFFFFF" ? `border: 1px solid ${$.palette.grey[300]};` : `border: 1px solid ${e};`}
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
  open: c
}) => {
  const [f, h] = oe(e), [m, d] = oe(!1), x = re([]), { t: g } = Le();
  Ne(() => {
    h(e);
  }, [e]);
  const p = (P) => {
    x.current.includes(P) || (x.current = [P, ...x.current].slice(
      0,
      14
    )), h(P || $.palette.common.black), o(P), d(!1);
  }, y = () => {
    d(!1), r();
  }, S = (P) => {
    const M = f.toUpperCase() === P.toUpperCase();
    return /* @__PURE__ */ l.jsx(
      O0,
      {
        $color: P,
        onClick: () => p(P),
        children: M && /* @__PURE__ */ l.jsx(A0, { $color: P })
      },
      P
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
    $.palette.grey[50],
    $.palette.grey[100],
    $.palette.grey[200],
    $.palette.grey[300],
    $.palette.grey[400]
  ], w = [
    $.palette.grey[500],
    $.palette.grey[600],
    $.palette.grey[700],
    $.palette.grey[800],
    $.palette.grey[900]
  ], I = [
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
    d0,
    {
      color: f,
      onAccept: p,
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
        /* @__PURE__ */ l.jsxs(_0, { onClick: () => p(t), children: [
          /* @__PURE__ */ l.jsx(T0, { style: { backgroundColor: t } }),
          /* @__PURE__ */ l.jsx(R0, { children: n })
        ] }),
        /* @__PURE__ */ l.jsx(wa, {}),
        /* @__PURE__ */ l.jsxs(k0, { children: [
          /* @__PURE__ */ l.jsx(j0, { children: T.map(S) }),
          /* @__PURE__ */ l.jsx($0, { children: I.map((P) => /* @__PURE__ */ l.jsx(P0, { children: P.map(S) }, P.join("-"))) })
        ] }),
        /* @__PURE__ */ l.jsx(wa, {}),
        /* @__PURE__ */ l.jsx(D0, { children: g("color_picker.recent") }),
        /* @__PURE__ */ l.jsxs(I0, { children: [
          x.current.length > 0 ? x.current.map((P) => /* @__PURE__ */ l.jsx(
            rc,
            {
              $color: P,
              onClick: () => {
                h(P), p(P);
              }
            },
            P
          )) : /* @__PURE__ */ l.jsx(N0, {}),
          /* @__PURE__ */ l.jsx(
            F0,
            {
              onClick: () => d(!0),
              title: g("color_picker.add"),
              children: /* @__PURE__ */ l.jsx(Ft, {})
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
`, _0 = te(on)`
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
  color: ${$.palette.text.primary};
`, T0 = te.div`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  margin-top: 0px;
  border: 1px solid ${$.palette.grey[300]};
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
  return t === "#FFFFFF" || t === "#FFF" ? `border: 1px solid ${$.palette.grey[300]};` : "border: none;";
}}
  background-color: ${({ $color: e }) => e === "transparent" ? "none" : e};
  box-sizing: border-box;
  margin-top: 0px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    outline: 1px solid ${$.palette.grey[300]};
    outline-offset: 1px;
  }
`, O0 = te(rc)`
  display: flex;
  align-items: center;
  justify-content: center;
`, M0 = (e) => {
  const t = parseInt(e.slice(1), 16), n = t >> 16 & 255, o = t >> 8 & 255, r = t & 255;
  return 0.2126 * n + 0.7152 * o + 0.0722 * r > 160;
}, A0 = te(zt)`
  width: 10px;
  height: 10px;
  stroke-width: 3px;
  color: ${({ $color: e }) => M0(e) ? $.palette.common.black : $.palette.common.white};
`, wa = te.div`
  height: 0px;
  width: 100%;
  border-top: 1px solid ${$.palette.grey[200]};
`, D0 = te.div`
  font-family: "Inter";
  font-size: 12px;
  font-family: Inter;
  margin: 8px 12px 0px 12px;
  color: ${$.palette.text.secondary};
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
    outline: 1px solid ${$.palette.grey[300]};
    outline-offset: 1px;
  }
`, N0 = te.div`
  display: none;
`, B0 = (e) => {
  const { t } = Le(), [n, o] = oe(null), [r, i] = oe($.palette.common.white), [s, a] = oe(Pt.Thin), [c, f] = oe(!1), [h, m] = oe(!1);
  Ne(() => {
    n && e.onChange({
      color: r,
      style: s,
      border: n
    });
  }, [r, s, n]);
  const d = e.onClose;
  Ne(() => {
    o(null), i($.palette.common.black), a(Pt.Thin);
  }, [e.open]);
  const x = re(null), g = re(null);
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
                  $pressed: n === ue.All,
                  onClick: () => {
                    n === ue.All ? o(null) : o(ue.All);
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
                  $pressed: n === ue.Inner,
                  onClick: () => {
                    n === ue.Inner ? o(null) : o(ue.Inner);
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
                  $pressed: n === ue.CenterH,
                  onClick: () => {
                    n === ue.CenterH ? o(null) : o(ue.CenterH);
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
                  $pressed: n === ue.CenterV,
                  onClick: () => {
                    n === ue.CenterV ? o(null) : o(ue.CenterV);
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
                  $pressed: n === ue.Outer,
                  onClick: () => {
                    n === ue.Outer ? o(ue.None) : o(ue.Outer);
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
                  $pressed: n === ue.None,
                  onClick: () => {
                    n === ue.None ? o(ue.None) : o(ue.None);
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
                  $pressed: n === ue.Top,
                  onClick: () => {
                    n === ue.Top ? o(ue.None) : o(ue.Top);
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
                  $pressed: n === ue.Right,
                  onClick: () => {
                    n === ue.Right ? o(ue.None) : o(ue.Right);
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
                  $pressed: n === ue.Bottom,
                  onClick: () => {
                    n === ue.Bottom ? o(ue.None) : o(ue.Bottom);
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
                  $pressed: n === ue.Left,
                  onClick: () => {
                    n === ue.Left ? o(ue.None) : o(ue.Left);
                  },
                  disabled: !1,
                  title: t("toolbar.borders.left"),
                  children: /* @__PURE__ */ l.jsx(cf, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(V0, {}),
          /* @__PURE__ */ l.jsxs(U0, { children: [
            /* @__PURE__ */ l.jsxs(
              Ea,
              {
                onClick: () => f(!0),
                ref: x,
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
                ref: g,
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
            onChange: (p) => {
              i(p), f(!1);
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
            children: /* @__PURE__ */ l.jsxs(G0, { children: [
              /* @__PURE__ */ l.jsxs(
                Gr,
                {
                  onClick: () => {
                    a(Pt.Thin), m(!1);
                  },
                  $checked: s === Pt.Thin,
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
                    a(Pt.Medium), m(!1);
                  },
                  $checked: s === Pt.Medium,
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
                    a(Pt.Thick), m(!1);
                  },
                  $checked: s === Pt.Thick,
                  children: [
                    /* @__PURE__ */ l.jsx(Yr, { children: "Thick" }),
                    /* @__PURE__ */ l.jsx(H0, {})
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
  background-color: ${({ $checked: e }) => e ? $.palette.grey[200] : "inherit;"};
  &:hover {
    border: 1px solid ${$.palette.grey[200]};
  }
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid white;
`, z0 = ne("div")`
  width: 68px;
  border-top: 1px solid ${$.palette.grey[900]};
`, L0 = ne("div")`
  width: 68px;
  border-top: 2px solid ${$.palette.grey[900]};
`, H0 = ne("div")`
  width: 68px;
  border-top: 3px solid ${$.palette.grey[900]};
`, V0 = ne("div")`
  width: 100%;
  margin: auto;
  border-top: 1px solid ${$.palette.grey[200]};
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
    background-color: ${$.palette.grey[200]};
    border-top-color: ${() => $.palette.grey[200]};
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
      border: `0px solid ${$.palette.common.white}`,
      borderRadius: "4px",
      cursor: "pointer",
      padding: "0px"
    };
    return e ? {
      ...o,
      color: $.palette.grey[600],
      cursor: "default"
    } : {
      ...o,
      borderTop: n ? `3px solid ${$.palette.common.white}` : "none",
      borderBottom: n ? `3px solid ${n}` : "none",
      color: `${$.palette.grey[900]}`,
      backgroundColor: t ? $.palette.grey[200] : "inherit",
      "&:hover": {
        outline: `1px solid ${$.palette.grey[200]}`,
        borderTopColor: $.palette.grey[200]
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
  const { t } = Le(), [n, o] = oe(e.numFmt), r = () => {
    e.onClose();
  }, i = (s) => {
    e.onChange(s), e.onClose();
  };
  return /* @__PURE__ */ l.jsxs(
    Ha,
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
              children: /* @__PURE__ */ l.jsx(Vo, {})
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
                zt,
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
  border-bottom: 1px solid ${$.palette.grey[300]};
`, X0 = te("div")`
  &:hover {
    background-color: ${$.palette.grey[50]};
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
    border: 1px solid ${$.palette.grey[300]};
    border-radius: 4px;
    color: ${$.palette.common.black};
    background-color: ${$.palette.common.white};
  }
  &:hover .MuiInputBase-input {
    border: 1px solid ${$.palette.grey[500]};
  }
`, Q0 = te("div")`
  color: #757575;
  display: flex;
  align-items: center;
  border-top: 1px solid ${$.palette.grey[300]};
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
var et = /* @__PURE__ */ ((e) => (e.AUTO = "general", e.CURRENCY_EUR = '"€"#,##0.00', e.CURRENCY_USD = '"$"#,##0.00', e.CURRENCY_GBP = '"£"#,##0.00', e.PERCENTAGE = "0.00%", e))(et || {});
const ox = (e) => {
  const { t } = Le(), [n, o] = oe(!1), [r, i] = oe(!1), s = re(null), a = e.formatOptions, c = De(
    (T) => {
      e.onChange(T), o(!1);
    },
    [e.onChange]
  ), f = e.numFmt === et.AUTO, h = e.numFmt === a.number_fmt, m = e.numFmt === et.PERCENTAGE, d = e.numFmt === et.CURRENCY_EUR, x = e.numFmt === et.CURRENCY_USD, g = e.numFmt === et.CURRENCY_GBP, p = e.numFmt === a.short_date, y = e.numFmt === a.long_date, S = !(f || h || m || d || x || g || p || y);
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
                /* @__PURE__ */ l.jsx(Ut, { children: a.number_example })
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
                /* @__PURE__ */ l.jsx(Ut, { children: t("toolbar.format_menu.percentage_example") })
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
                  /* @__PURE__ */ l.jsx(wt, { $active: d }),
                  t("toolbar.format_menu.currency_eur")
                ] }),
                /* @__PURE__ */ l.jsx(Ut, { children: t("toolbar.format_menu.currency_eur_example") })
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
                /* @__PURE__ */ l.jsx(Ut, { children: t("toolbar.format_menu.currency_usd_example") })
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
                /* @__PURE__ */ l.jsx(Ut, { children: t("toolbar.format_menu.currency_gbp_example") })
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
                  /* @__PURE__ */ l.jsx(wt, { $active: p }),
                  t("toolbar.format_menu.date_short")
                ] }),
                /* @__PURE__ */ l.jsx(Ut, { children: a.short_date_example })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            vt,
            {
              onClick: () => c(a.long_date),
              children: [
                /* @__PURE__ */ l.jsxs(Ct, { children: [
                  /* @__PURE__ */ l.jsx(wt, { $active: y }),
                  t("toolbar.format_menu.date_long")
                ] }),
                /* @__PURE__ */ l.jsx(Ut, { children: a.long_date_example })
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
        onChange: c,
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
`, vt = X(on)`
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
`, wt = X(zt, {
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
`, Ut = X("div")`
  color: #bdbdbd;
  margin-left: 20px;
`;
function sx(e) {
  const [t, n] = oe(!1), [o, r] = oe(!1), [i, s] = oe(!1), [a, c] = oe(!1), [f, h] = oe(!1), m = re(null), d = re(null), x = re(null), g = re(null), { t: p } = Le(), { canEdit: y } = e, S = () => g.current?.scrollBy({ left: -200, behavior: "smooth" }), T = () => g.current?.scrollBy({ left: 200, behavior: "smooth" }), C = De(() => {
    if (!g.current) return;
    const { scrollLeft: E, scrollWidth: _, clientWidth: D } = g.current;
    c(E > 0), h(E < _ - D);
  }, []);
  Ne(() => {
    const E = g.current;
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
        title: p("toolbar.scroll_left"),
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
    /* @__PURE__ */ l.jsxs(lx, { ref: g, children: [
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.undo"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onUndo,
            disabled: !e.canUndo,
            children: /* @__PURE__ */ l.jsx(zc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.redo"), children: /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.copy_styles"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: e.onCopyStyles,
            children: /* @__PURE__ */ l.jsx(Hc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.clear_formatting"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onClearFormatting();
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Vc, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.euro"), children: /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.percentage"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => {
              e.onNumberFormatPicked(et.PERCENTAGE);
            },
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Wc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.decimal_places_decrease"), children: /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.decimal_places_increase"), children: /* @__PURE__ */ l.jsx(
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
            children: /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.format_number"), children: /* @__PURE__ */ l.jsxs(
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
                  /* @__PURE__ */ l.jsx(Ho, {})
                ]
              }
            ) })
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.decrease_font_size"), children: /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.increase_font_size"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            disabled: !y,
            onClick: () => {
              e.onIncreaseFontSize(1);
            },
            children: /* @__PURE__ */ l.jsx(Ft, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.bold"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.bold,
            onClick: () => e.onToggleBold(!e.bold),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(qc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.italic"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.italic,
            onClick: () => e.onToggleItalic(!e.italic),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Kc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.underline"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.underline,
            onClick: () => e.onToggleUnderline(!e.underline),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Xc, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.strike_through"), children: /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.font_color"), children: /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.fill_color"), children: /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.borders.title"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => s(!0),
            ref: x,
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(Ga, {})
          }
        ) })
      ] }),
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.align_left"), children: /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.align_center"), children: /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.align_right"), children: /* @__PURE__ */ l.jsx(
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
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.vertical_align_top"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "top",
            onClick: () => e.onToggleVerticalAlign("top"),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(nu, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.vertical_align_middle"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "center",
            onClick: () => e.onToggleVerticalAlign("center"),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(of, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.vertical_align_bottom"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: e.verticalAlign === "bottom",
            onClick: () => e.onToggleVerticalAlign("bottom"),
            disabled: !y,
            children: /* @__PURE__ */ l.jsx(ou, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.wrap_text"), children: /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx(Gt, {}),
      /* @__PURE__ */ l.jsxs(Ot, { children: [
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.show_hide_grid_lines"), children: /* @__PURE__ */ l.jsx(
          xe,
          {
            type: "button",
            $pressed: !1,
            onClick: () => e.onToggleShowGridLines(!e.showGridLines),
            disabled: !y,
            children: e.showGridLines ? /* @__PURE__ */ l.jsx(iu, {}) : /* @__PURE__ */ l.jsx(su, {})
          }
        ) }),
        /* @__PURE__ */ l.jsx(ge, { title: p("toolbar.selected_png"), children: /* @__PURE__ */ l.jsx(
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
          title: p("color_picker.default"),
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
          title: p("color_picker.default"),
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
          anchorEl: x,
          open: i
        }
      )
    ] }),
    f && /* @__PURE__ */ l.jsx(
      ge,
      {
        title: p("toolbar.scroll_right"),
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
    border: `0px solid ${$.palette.common.white}`,
    borderRadius: "4px",
    transition: "all 0.2s",
    outline: `1px solid ${$.palette.common.white}`,
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
    color: $.palette.grey[400],
    cursor: "default"
  } : {
    ...n,
    color: $.palette.grey[900],
    backgroundColor: t ? $.palette.grey[300] : $.palette.common.white,
    "&:hover": {
      transition: "all 0.2s",
      outline: `1px solid ${$.palette.grey[200]}`
    },
    "&:active": {
      backgroundColor: $.palette.grey[300],
      outline: `1px solid ${$.palette.grey[300]}`
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
})), Gt = ne("div")({
  minWidth: "1px",
  height: "16px",
  backgroundColor: $.palette.grey[300],
  margin: "0px 8px"
}), cx = ne("div")({
  width: "24px",
  height: "24px",
  lineHeight: "24px",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "11px",
  border: `1px solid ${$.palette.grey[300]}`,
  borderRadius: "4px",
  minWidth: "24px"
}), Ot = ne("div")({
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
  border: e === "left" ? `none; border-right: 1px solid ${$.palette.grey[300]};` : `none; border-left: 1px solid ${$.palette.grey[300]};`,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: $.palette.grey[100]
  },
  svg: {
    width: "16px",
    height: "16px"
  }
})), tr = /* @__PURE__ */ k.createContext({});
process.env.NODE_ENV !== "production" && (tr.displayName = "ListContext");
function ux(e) {
  return lt("MuiList", e);
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
    disablePadding: c = !1,
    subheader: f,
    ...h
  } = o, m = k.useMemo(() => ({
    dense: a
  }), [a]), d = {
    ...o,
    component: s,
    dense: a,
    disablePadding: c
  }, x = dx(d);
  return /* @__PURE__ */ l.jsx(tr.Provider, {
    value: m,
    children: /* @__PURE__ */ l.jsxs(px, {
      as: s,
      className: Te(x.root, i),
      ref: n,
      ownerState: d,
      ...h,
      children: [f, r]
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
    const c = o ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !sc(a, i) || c)
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
    disabledItemsFocusable: c = !1,
    disableListWrap: f = !1,
    onKeyDown: h,
    variant: m = "selectedMenu",
    ...d
  } = t, x = k.useRef(null), g = k.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  en(() => {
    r && x.current.focus();
  }, [r]), k.useImperativeHandle(o, () => ({
    adjustStyleForScrollbar: (C, {
      direction: w
    }) => {
      const E = !x.current.style.width;
      if (C.clientHeight < x.current.clientHeight && E) {
        const _ = `${Kl(nn(C))}px`;
        x.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = _, x.current.style.width = `calc(100% + ${_})`;
      }
      return x.current;
    }
  }), []);
  const p = (C) => {
    const w = x.current, E = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      h && h(C);
      return;
    }
    const D = Hn(rt(w));
    if (E === "ArrowDown")
      C.preventDefault(), In(w, D, f, c, qr);
    else if (E === "ArrowUp")
      C.preventDefault(), In(w, D, f, c, ka);
    else if (E === "Home")
      C.preventDefault(), In(w, null, f, c, qr);
    else if (E === "End")
      C.preventDefault(), In(w, null, f, c, ka);
    else if (E.length === 1) {
      const N = g.current, R = E.toLowerCase(), W = performance.now();
      N.keys.length > 0 && (W - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && R !== N.keys[0] && (N.repeating = !1)), N.lastTime = W, N.keys.push(R);
      const F = D && !N.repeating && sc(D, N);
      N.previousKeyMatched && (F || In(w, D, !1, c, qr, N)) ? C.preventDefault() : N.previousKeyMatched = !1;
    }
    h && h(C);
  }, y = Ge(x, n);
  let S = -1;
  k.Children.forEach(s, (C, w) => {
    if (!/* @__PURE__ */ k.isValidElement(C)) {
      S === w && (S += 1, S >= s.length && (S = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && xn.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (m === "selectedMenu" && C.props.selected || S === -1) && (S = w), S === w && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (S += 1, S >= s.length && (S = -1));
  });
  const T = k.Children.map(s, (C, w) => {
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
    onKeyDown: p,
    tabIndex: r ? 0 : -1,
    ...d,
    children: T
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
function fx(e) {
  return lt("MuiMenu", e);
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
    MenuListProps: c = {},
    onClose: f,
    open: h,
    PaperProps: m = {},
    PopoverClasses: d,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: g,
      ...p
    } = {},
    variant: y = "selectedMenu",
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
    TransitionProps: p,
    variant: y
  }, _ = gx(E), D = r && !a && h, N = k.useRef(null), R = (G, O) => {
    N.current && N.current.adjustStyleForScrollbar(G, {
      direction: w ? "rtl" : "ltr"
    }), g && g(G, O);
  }, W = (G) => {
    G.key === "Tab" && (G.preventDefault(), f && f(G, "tabKeyDown"));
  };
  let F = -1;
  k.Children.map(i, (G, O) => {
    /* @__PURE__ */ k.isValidElement(G) && (process.env.NODE_ENV !== "production" && xn.isFragment(G) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), G.props.disabled || (y === "selectedMenu" && G.props.selected || F === -1) && (F = O));
  });
  const v = {
    slots: S,
    slotProps: {
      list: c,
      transition: p,
      paper: m,
      ...T
    }
  }, I = Vl({
    elementType: S.root,
    externalSlotProps: T.root,
    ownerState: E,
    className: [_.root, s]
  }), [P, M] = Xe("paper", {
    className: _.paper,
    elementType: bx,
    externalForwardedProps: v,
    shouldForwardComponentProp: !0,
    ownerState: E
  }), [z, J] = Xe("list", {
    className: Te(_.list, c.className),
    elementType: yx,
    shouldForwardComponentProp: !0,
    externalForwardedProps: v,
    getSlotProps: (G) => ({
      ...G,
      onKeyDown: (O) => {
        W(O), G.onKeyDown?.(O);
      }
    }),
    ownerState: E
  }), A = typeof v.slotProps.transition == "function" ? v.slotProps.transition(E) : v.slotProps.transition;
  return /* @__PURE__ */ l.jsx(xx, {
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: w ? "right" : "left"
    },
    transformOrigin: w ? hx : mx,
    slots: {
      root: S.root,
      paper: P,
      backdrop: S.backdrop,
      ...S.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: S.transition
      }
    },
    slotProps: {
      root: I,
      paper: M,
      backdrop: typeof T.backdrop == "function" ? T.backdrop(E) : T.backdrop,
      transition: {
        ...A,
        onEntering: (...G) => {
          R(...G), A?.onEntering?.(...G);
        }
      }
    },
    open: h,
    ref: n,
    transitionDuration: x,
    ownerState: E,
    ...C,
    classes: d,
    children: /* @__PURE__ */ l.jsx(z, {
      actions: N,
      autoFocus: r && (F === -1 || a),
      autoFocusItem: D,
      variant: y,
      ...J,
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
    onExited: c,
    timeout: f
  } = e, [h, m] = k.useState(!1), d = Te(t, n.ripple, n.rippleVisible, o && n.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + r
  }, g = Te(n.child, h && n.childLeaving, o && n.childPulsate);
  return !a && !h && m(!0), k.useEffect(() => {
    if (!a && c != null) {
      const p = setTimeout(c, f);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, a, f]), /* @__PURE__ */ l.jsx("span", {
    className: d,
    style: x,
    children: /* @__PURE__ */ l.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (cc.propTypes = {
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
const tt = Ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), mi = 550, Cx = 80, Ex = yi`
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

  &.${tt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ex};
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
    animation-name: ${Sx};
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
  } = o, [c, f] = k.useState([]), h = k.useRef(0), m = k.useRef(null);
  k.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const d = k.useRef(!1), x = hn(), g = k.useRef(null), p = k.useRef(null), y = k.useCallback((w) => {
    const {
      pulsate: E,
      rippleX: _,
      rippleY: D,
      rippleSize: N,
      cb: R
    } = w;
    f((W) => [...W, /* @__PURE__ */ l.jsx(Tx, {
      classes: {
        ripple: Te(i.ripple, tt.ripple),
        rippleVisible: Te(i.rippleVisible, tt.rippleVisible),
        ripplePulsate: Te(i.ripplePulsate, tt.ripplePulsate),
        child: Te(i.child, tt.child),
        childLeaving: Te(i.childLeaving, tt.childLeaving),
        childPulsate: Te(i.childPulsate, tt.childPulsate)
      },
      timeout: mi,
      pulsate: E,
      rippleX: _,
      rippleY: D,
      rippleSize: N
    }, h.current)]), h.current += 1, m.current = R;
  }, [i]), S = k.useCallback((w = {}, E = {}, _ = () => {
  }) => {
    const {
      pulsate: D = !1,
      center: N = r || E.pulsate,
      fakeElement: R = !1
      // For test purposes
    } = E;
    if (w?.type === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    w?.type === "touchstart" && (d.current = !0);
    const W = R ? null : p.current, F = W ? W.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let v, I, P;
    if (N || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      v = Math.round(F.width / 2), I = Math.round(F.height / 2);
    else {
      const {
        clientX: M,
        clientY: z
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      v = Math.round(M - F.left), I = Math.round(z - F.top);
    }
    if (N)
      P = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), P % 2 === 0 && (P += 1);
    else {
      const M = Math.max(Math.abs((W ? W.clientWidth : 0) - v), v) * 2 + 2, z = Math.max(Math.abs((W ? W.clientHeight : 0) - I), I) * 2 + 2;
      P = Math.sqrt(M ** 2 + z ** 2);
    }
    w?.touches ? g.current === null && (g.current = () => {
      y({
        pulsate: D,
        rippleX: v,
        rippleY: I,
        rippleSize: P,
        cb: _
      });
    }, x.start(Cx, () => {
      g.current && (g.current(), g.current = null);
    })) : y({
      pulsate: D,
      rippleX: v,
      rippleY: I,
      rippleSize: P,
      cb: _
    });
  }, [r, y, x]), T = k.useCallback(() => {
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
  }), [T, S, C]), /* @__PURE__ */ l.jsx(Rx, {
    className: Te(tt.root, i.root, s),
    ref: p,
    ...a,
    children: /* @__PURE__ */ l.jsx(ji, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (uc.propTypes = {
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
function kx(e) {
  return lt("MuiButtonBase", e);
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
    component: c = "button",
    disabled: f = !1,
    disableRipple: h = !1,
    disableTouchRipple: m = !1,
    focusRipple: d = !1,
    focusVisibleClassName: x,
    LinkComponent: g = "a",
    onBlur: p,
    onClick: y,
    onContextMenu: S,
    onDragLeave: T,
    onFocus: C,
    onFocusVisible: w,
    onKeyDown: E,
    onKeyUp: _,
    onMouseDown: D,
    onMouseLeave: N,
    onMouseUp: R,
    onTouchEnd: W,
    onTouchMove: F,
    onTouchStart: v,
    tabIndex: I = 0,
    TouchRippleProps: P,
    touchRippleRef: M,
    type: z,
    ...J
  } = o, A = k.useRef(null), G = vx(), O = Ge(G.ref, M), [b, j] = k.useState(!1);
  f && b && j(!1), k.useImperativeHandle(r, () => ({
    focusVisible: () => {
      j(!0), A.current.focus();
    }
  }), []);
  const L = G.shouldMount && !h && !f;
  k.useEffect(() => {
    b && d && !h && G.pulsate();
  }, [h, d, b, G]);
  const B = Et(G, "start", D, m), K = Et(G, "stop", S, m), Y = Et(G, "stop", T, m), U = Et(G, "stop", R, m), Z = Et(G, "stop", (ie) => {
    b && ie.preventDefault(), N && N(ie);
  }, m), Q = Et(G, "start", v, m), q = Et(G, "stop", W, m), ee = Et(G, "stop", F, m), H = Et(G, "stop", (ie) => {
    qo(ie.target) || j(!1), p && p(ie);
  }, !1), ce = It((ie) => {
    A.current || (A.current = ie.currentTarget), qo(ie.target) && (j(!0), w && w(ie)), C && C(ie);
  }), de = () => {
    const ie = A.current;
    return c && c !== "button" && !(ie.tagName === "A" && ie.href);
  }, Fe = It((ie) => {
    d && !ie.repeat && b && ie.key === " " && G.stop(ie, () => {
      G.start(ie);
    }), ie.target === ie.currentTarget && de() && ie.key === " " && ie.preventDefault(), E && E(ie), ie.target === ie.currentTarget && de() && ie.key === "Enter" && !f && (ie.preventDefault(), y && y(ie));
  }), He = It((ie) => {
    d && ie.key === " " && b && !ie.defaultPrevented && G.stop(ie, () => {
      G.pulsate(ie);
    }), _ && _(ie), y && ie.target === ie.currentTarget && de() && ie.key === " " && !ie.defaultPrevented && y(ie);
  });
  let ye = c;
  ye === "button" && (J.href || J.to) && (ye = g);
  const Me = {};
  if (ye === "button") {
    const ie = !!J.formAction;
    Me.type = z === void 0 && !ie ? "button" : z, Me.disabled = f;
  } else
    !J.href && !J.to && (Me.role = "button"), f && (Me["aria-disabled"] = f);
  const pe = Ge(n, A), je = {
    ...o,
    centerRipple: i,
    component: c,
    disabled: f,
    disableRipple: h,
    disableTouchRipple: m,
    focusRipple: d,
    tabIndex: I,
    focusVisible: b
  }, Re = $x(je);
  return /* @__PURE__ */ l.jsxs(Px, {
    as: ye,
    className: Te(Re.root, a),
    ownerState: je,
    onBlur: H,
    onClick: y,
    onContextMenu: K,
    onFocus: ce,
    onKeyDown: Fe,
    onKeyUp: He,
    onMouseDown: B,
    onMouseLeave: Z,
    onMouseUp: U,
    onDragLeave: Y,
    onTouchEnd: q,
    onTouchMove: ee,
    onTouchStart: Q,
    ref: pe,
    tabIndex: f ? -1 : I,
    type: z,
    ...Me,
    ...J,
    children: [s, L ? /* @__PURE__ */ l.jsx(uc, {
      ref: O,
      center: i,
      ...P
    }) : null]
  });
});
function Et(e, t, n, o = !1) {
  return It((r) => (n && n(r), o || e[t](r), !0));
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
  component: Ul,
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
function Ox(e) {
  return lt("MuiMenuItem", e);
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
  } = e, c = xt({
    root: ["root", n && "dense", t && "disabled", !r && "gutters", o && "divider", i && "selected"]
  }, Ox, s);
  return {
    ...s,
    ...c
  };
}, Dx = ne(dc, {
  shouldForwardProp: (e) => Ti(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Mx
})(_n(({
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
    disableGutters: c = !1,
    focusVisibleClassName: f,
    role: h = "menuitem",
    tabIndex: m,
    className: d,
    ...x
  } = o, g = k.useContext(tr), p = k.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: c
  }), [g.dense, s, c]), y = k.useRef(null);
  en(() => {
    r && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [r]);
  const S = {
    ...o,
    dense: p.dense,
    divider: a,
    disableGutters: c
  }, T = Ax(o), C = Ge(y, n);
  let w;
  return o.disabled || (w = m !== void 0 ? m : -1), /* @__PURE__ */ l.jsx(tr.Provider, {
    value: p,
    children: /* @__PURE__ */ l.jsx(Dx, {
      ref: C,
      role: h,
      tabIndex: w,
      component: i,
      focusVisibleClassName: Te(T.focusVisible, f),
      className: Te(T.root, d),
      ...x,
      ownerState: S,
      classes: T
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
  } = e, a = i.some((c) => !Ix(c.color));
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
      children: i.map((c, f) => /* @__PURE__ */ l.jsxs(
        Bx,
        {
          onClick: () => r(f),
          children: [
            f === s ? /* @__PURE__ */ l.jsx(
              zt,
              {
                style: { width: "16px", height: "16px", marginRight: "8px" }
              }
            ) : /* @__PURE__ */ l.jsx(
              "div",
              {
                style: { width: "16px", height: "16px", marginRight: "8px" }
              }
            ),
            a && /* @__PURE__ */ l.jsx(zx, { style: { backgroundColor: c.color } }),
            /* @__PURE__ */ l.jsx(
              Lx,
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
function Hx({
  open: e,
  onClose: t,
  onDelete: n,
  sheetName: o
}) {
  const { t: r } = Le();
  return /* @__PURE__ */ l.jsx(Ha, { open: e, onClose: t, children: /* @__PURE__ */ l.jsxs(Vx, { children: [
    /* @__PURE__ */ l.jsx(Wx, { children: /* @__PURE__ */ l.jsx(Qt, {}) }),
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
const Vx = te.div`
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
  box-shadow: 0px 1px 3px 0px ${$.palette.common.black}1A;
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
  background-color: ${$.palette.error.main}1A;
  margin: 12px auto 8px auto;
  color: ${$.palette.error.main};
  svg {
    width: 16px;
    height: 16px;
  }
`, Ux = te.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${$.palette.grey[900]};
  text-align: center;
`, Gx = te.p`
  margin: 0;
  text-align: center;
  color: ${$.palette.grey[900]};
  font-size: 12px;
`, Yx = te.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  width: 100%;
`, qx = te(lo)`
  background-color: ${$.palette.error.main};
  color: ${$.palette.common.white};
  text-transform: none;
  &:hover {
    background-color: ${$.palette.error.dark};
  }
`, Kx = te(lo)`
  background-color: ${$.palette.grey[200]};
  color: ${$.palette.grey[700]};
  text-transform: none;
  &:hover {
    background-color: ${$.palette.grey[300]};
  }
`;
function Xx(e) {
  const { name: t, color: n, selected: o, workbookState: r, onSelected: i } = e, [s, a] = oe(null), [c, f] = oe(!1), h = re(null), m = !!s, { t: d } = Le(), x = (M) => {
    a(M.currentTarget);
  }, g = () => {
    a(null);
  }, p = (M) => {
    M.preventDefault(), M.stopPropagation(), i(), a(M.currentTarget);
  }, [y, S] = oe(!1), T = () => {
    S(!0);
  }, C = () => {
    S(!1);
  }, [w, E] = oe(!1), [_, D] = oe(t), N = re(null), R = re(null), [W, F] = oe(0);
  Ne(() => {
    w && N.current && (N.current.focus(), N.current.select());
  }, [w]), Ne(() => {
    w || D(t);
  }, [t, w]), gi(() => {
    if (w && R.current) {
      const M = R.current.offsetWidth;
      F(Math.max(M + 8, 6));
    }
  }, [_, w]);
  const v = () => {
    D(t), F(Math.max(t.length * 7 + 8, 6)), E(!0);
  }, I = () => {
    _.trim() !== "" ? (e.onRenamed(_.trim()), E(!1)) : (D(t), E(!1));
  }, P = () => {
    D(t), E(!1);
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      Jx,
      {
        $color: n,
        $selected: o,
        onClick: (M) => {
          w || i(), M.stopPropagation(), M.preventDefault();
        },
        onDoubleClick: (M) => {
          M.stopPropagation(), M.preventDefault(), v();
        },
        onContextMenu: p,
        onPointerDown: (M) => {
          const z = r.getEditingCell();
          z && fn(z.text, z.cursorStart) && (M.stopPropagation(), M.preventDefault());
        },
        ref: h,
        children: w ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(eb, { ref: R, children: _ || " " }),
          /* @__PURE__ */ l.jsx(
            tb,
            {
              inputRef: N,
              value: _,
              onChange: (M) => D(M.target.value),
              style: { width: `${W}px` },
              onKeyDown: (M) => {
                M.key === "Enter" ? (M.preventDefault(), I()) : M.key === "Escape" && (M.preventDefault(), P()), M.stopPropagation();
              },
              onBlur: () => {
                I();
              },
              onClick: (M) => M.stopPropagation(),
              spellCheck: !1
            }
          ),
          /* @__PURE__ */ l.jsx(Oa, { disableRipple: !0, disabled: !0, $active: !1, children: /* @__PURE__ */ l.jsx(Ho, {}) })
        ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Qx, { children: t }),
          /* @__PURE__ */ l.jsx(Oa, { onClick: x, disableRipple: !0, $active: m, children: /* @__PURE__ */ l.jsx(Ho, {}) })
        ] })
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Zx,
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
                v(), g();
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
                f(!0), g();
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
                e.onHideSheet(), g();
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
                T(), g();
              },
              children: [
                /* @__PURE__ */ l.jsx(Qt, {}),
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
        onChange: (M) => {
          e.onColorChanged(M), f(!1);
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
      Hx,
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
`, zo = X(on)(() => ({
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
    color: `${$.palette.grey[600]}`
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
  background-color: ${(e) => e.$selected ? `${$.palette.grey[50]}` : "transparent"};
  &:hover {
    background-color: ${$.palette.grey[50]}80;
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
  background-color: ${(e) => e.$active ? `${$.palette.grey[300]}` : "transparent"};
  &:hover {
    background-color: ${$.palette.grey[200]};
  }
  &:active {
    background-color: ${$.palette.grey[300]};
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
    background-color: ${$.palette.common.white};
    font-weight: inherit;
    padding: 6px 0px;
    border: 1px solid ${$.palette.primary.main};
    border-radius: 4px;
    color: ${$.palette.common.black};
    text-align: center;
    will-change: width;
    &:focus {
      border-color: ${$.palette.primary.main};
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
  border-top: 1px solid ${$.palette.grey[200]};
`, ob = X(zo)`
  color: ${$.palette.error.main};
  svg {
    color: ${$.palette.error.main};
  }
  &:hover {
    background-color: ${$.palette.error.main}1A;
  }
  &:active {
    background-color: ${$.palette.error.main}1A;
  }
`;
function rb(e) {
  const { t } = Le(), { workbookState: n, onSheetSelected: o, sheets: r, selectedIndex: i } = e, [s, a] = oe(null), c = !!s, f = (d) => {
    a(d.currentTarget);
  }, h = () => {
    a(null);
  }, m = r.map((d, x) => ({
    state: d.state,
    index: x,
    name: d.name,
    color: d.color,
    sheetId: d.sheetId
  })).filter((d) => d.state === "visible");
  return /* @__PURE__ */ l.jsxs(ib, { children: [
    /* @__PURE__ */ l.jsxs(lb, { children: [
      /* @__PURE__ */ l.jsx(mn, { title: t("navigation.add_sheet"), children: /* @__PURE__ */ l.jsx(xe, { $pressed: !1, onClick: e.onAddBlankSheet, children: /* @__PURE__ */ l.jsx(Ft, {}) }) }),
      /* @__PURE__ */ l.jsx(mn, { title: t("navigation.sheet_list"), children: /* @__PURE__ */ l.jsx(xe, { onClick: f, $pressed: !1, children: /* @__PURE__ */ l.jsx(fu, {}) }) })
    ] }),
    /* @__PURE__ */ l.jsx(cb, {}),
    /* @__PURE__ */ l.jsx(sb, { children: /* @__PURE__ */ l.jsx(ab, { children: m.map((d) => /* @__PURE__ */ l.jsx(
      Xx,
      {
        name: d.name,
        color: d.color,
        selected: d.index === i,
        onSelected: () => o(d.index),
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
      d.sheetId
    )) }) }),
    /* @__PURE__ */ l.jsxs(ub, { children: [
      /* @__PURE__ */ l.jsx(mn, { title: t("regional_settings.open_regional_settings"), children: /* @__PURE__ */ l.jsxs(
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
        open: c,
        onClose: h,
        sheetOptionsList: r,
        onSheetSelected: (d) => {
          o(d), h();
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
  background-color: ${$.palette.common.white};
  border-top: 1px solid ${$.palette.grey[300]};
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
    border-right: 1px solid ${$.palette.grey[200]};
  }
`, ub = X("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${$.palette.primary.main};
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
  color: ${$.palette.grey[600]};
  text-wrap: nowrap;
  gap: 8px;
`, pb = X("div")`
  width: 1px;
  height: 60%;
  background-color: ${$.palette.grey[300]};
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
    background-color: ${$.palette.grey[100]};
    transition: "all 0.2s";
    outline: 1px solid ${$.palette.grey[200]};
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
    const s = e.canvas.getBoundingClientRect(), a = i.clientX - s.x, c = i.clientY - s.y, f = e.getCellByCoordinates(a, c);
    if (!f)
      return;
    const { row: h, column: m } = f, {
      range: [d, x, g, p]
    } = e.model.getSelectedView();
    if (h > g && (m <= p && m >= x || m < x && x - m < h - g || m > p && m - p < h - g)) {
      const y = {
        type: St.rowsDown,
        rowStart: g + 1,
        rowEnd: h,
        columnStart: x,
        columnEnd: p
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    } else if (h < d && (m <= p && m >= x || m < x && x - m < d - h || m > p && m - p < d - h)) {
      const y = {
        type: St.rowsUp,
        rowStart: h,
        rowEnd: d,
        columnStart: x,
        columnEnd: p
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    } else if (m > p && (h <= g && h >= d || h < d && d - h < m - p || h > g && h - g < m - p)) {
      const y = {
        type: St.columnsRight,
        rowStart: d,
        rowEnd: g,
        columnStart: p + 1,
        columnEnd: m
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    } else if (m < x && (h <= g && h >= d || h < d && d - h < x - m || h > g && h - g < x - m)) {
      const y = {
        type: St.columnsLeft,
        rowStart: d,
        rowEnd: g,
        columnStart: m,
        columnEnd: x
      };
      e.workbookState.setExtendToArea(y), e.renderSheet();
    }
  }, r = (i) => {
    document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", r);
    const { sheet: s, range: a } = e.model.getSelectedView(), c = e.workbookState.getExtendToArea();
    if (!c)
      return;
    const f = Math.min(a[0], a[2]), h = Math.abs(a[2] - a[0]) + 1, m = Math.abs(a[3] - a[1]) + 1, d = Math.min(a[1], a[3]), x = {
      sheet: s,
      row: f,
      column: d,
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
      Math.min(d, c.columnStart),
      Math.max(f + h - 1, c.rowEnd),
      Math.max(d + m - 1, c.columnEnd)
    ), e.workbookState.clearExtendToArea(), e.renderSheet();
  };
  return n.addEventListener("pointerdown", () => {
    document.addEventListener("pointermove", o), document.addEventListener("pointerup", r);
  }), n.addEventListener("dblclick", (i) => {
    const [s, a, c] = e.model.getSelectedCell();
    let f = a + 1, h = c - 1;
    if ((h < 1 || e.model.getFormattedCellValue(s, a, c - 1) === "") && (h = c + 1, h > Ae || e.model.getFormattedCellValue(s, a, h) === ""))
      return;
    for (let d = a + 1; d <= ze && e.model.getFormattedCellValue(s, d, h) !== ""; d += 1)
      f = d;
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
    let c = a[0];
    for (let f = 1; f < a.length; f += 1) {
      const h = a[f], m = `${c} ${h}`;
      n.measureText(m).width < o ? c = m : (i.push(c), c = h);
    }
    i.push(c);
  }
  return i;
}
const fc = {
  regular: 'Inter, "Adjusted Arial Fallback", sans-serif'
}, ae = 28, se = 30, Dt = window.devicePixelRatio || 1, Do = fc.regular, xb = fc.regular, ct = 3;
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
  /**
   * How many pixels of the top-left visible cell are scrolled out of the grid
   * (to the left of / above it). The model only remembers the top-left *cell*,
   * so this is what makes scrolling smooth instead of jumping a whole row or
   * column at a time. It is always smaller than that cell's width/height.
   */
  scrollOffset;
  /**
   * "Column `column` starts at absolute x `left`, row `row` at absolute y `top`."
   *
   * Converting between a pixel scroll position and a cell used to add up every
   * row/column from the first one, one wasm call each — so scrolling near row
   * 200_000 cost 200_000 calls _per scroll event_. Walking from this anchor
   * instead makes it proportional to how far the view moved, which for a scroll
   * event is a few pixels.
   *
   * It is seeded from the model on construction (i.e. on every render, since
   * <Worksheet> rebuilds the canvas each time), so anything that moves cells
   * around — editing, inserting, undo, switching sheet — starts from a fresh,
   * correct anchor. Resizing a row/column does not go through a render, so those
   * two paths reset it explicitly.
   */
  anchor;
  /**
   * Styles and visible range fetched during the current render. Both are asked
   * for over and over while drawing one frame — a cell's style is read for the
   * cell itself and again as the left/top neighbour of two others, and the
   * visible range is recomputed by every getCoordinatesByCell call — and each
   * miss is a call into wasm. Dropped whenever the frame or the view changes.
   */
  styleCache;
  visibleCells;
  constructor(t) {
    this.model = t.model, this.sheetWidth = 0, this.sheetHeight = 0, this.canvas = t.elements.canvas, this.width = t.width, this.height = t.height, this.ctx = this.setContext(), this.workbookState = t.workbookState, this.editor = t.elements.editor, this.refresh = t.refresh, this.scrollOffset = t.scrollOffset ?? { x: 0, y: 0 }, this.cellOutline = t.elements.cellOutline, this.areaOutline = t.elements.areaOutline, this.extendToOutline = t.elements.extendToOutline, this.rowGuide = t.elements.rowGuide, this.columnGuide = t.elements.columnGuide, this.columnHeaders = t.elements.columnHeaders, this.onColumnWidthChanges = t.onColumnWidthChanges, this.onRowHeightChanges = t.onRowHeightChanges, this.resetHeaders(), this.cellOutlineHandle = mb(this), this.spills = /* @__PURE__ */ new Map(), this.cells = [], this.anchor = { sheet: -1, column: 0, left: 0, row: 0, top: 0 }, this.resetAnchor(), this.styleCache = /* @__PURE__ */ new Map(), this.visibleCells = null;
  }
  /**
   * Puts the anchor back on the top-left visible cell, whose absolute position
   * the model can hand us directly (`getScrollX`/`getScrollY` do the adding up
   * in Rust, once, instead of a wasm call per row/column).
   *
   * With frozen rows/columns the model counts them in and we don't, so there the
   * anchor starts at the first non-frozen cell instead. Sheets aren't usually
   * frozen far from A1, so the walk stays short.
   */
  resetAnchor() {
    const t = this.model.getSelectedSheet(), n = this.model.getFrozenColumnsCount(t), o = this.model.getFrozenRowsCount(t), r = this.anchor;
    if (r.sheet = t, r.column = 1 + n, r.left = 0, r.row = 1 + o, r.top = 0, n === 0 && o === 0) {
      const i = this.model.getSelectedView();
      r.column = Math.max(1, i.left_column), r.left = this.model.getScrollX(), r.row = Math.max(1, i.top_row), r.top = this.model.getScrollY();
    }
  }
  /**
   * Re-seeds the anchor if it belongs to another sheet, or sits in what is now
   * the frozen part (whose absolute coordinates we count differently).
   */
  ensureAnchor(t, n, o) {
    const r = this.anchor;
    (r.sheet !== t || r[o] < n) && this.resetAnchor();
  }
  /** this.model.getCellStyle, but at most once per cell per frame. */
  getCellStyle(t, n, o) {
    const r = n * (Ae + 1) + o;
    let i = this.styleCache.get(r);
    return i || (i = this.model.getCellStyle(t, n, o), this.styleCache.set(r, i)), i;
  }
  /** Drops the per-frame caches. */
  invalidateFrame() {
    this.styleCache.clear(), this.visibleCells = null;
  }
  /** Walks the anchor to `column` and returns its absolute x. */
  columnLeft(t, n, o) {
    const r = this.anchor;
    for (this.ensureAnchor(t, o, "column"); r.column > n; )
      r.column -= 1, r.left -= this.getColumnWidth(t, r.column);
    for (; r.column < n; )
      r.left += this.getColumnWidth(t, r.column), r.column += 1;
    return r.left;
  }
  /** Walks the anchor to `row` and returns its absolute y. */
  rowTop(t, n, o) {
    const r = this.anchor;
    for (this.ensureAnchor(t, o, "row"); r.row > n; )
      r.row -= 1, r.top -= this.getRowHeight(t, r.row);
    for (; r.row < n; )
      r.top += this.getRowHeight(t, r.row), r.row += 1;
    return r.top;
  }
  /**
   * The absolute position of the top-left visible cell, i.e. what the scroll
   * container's scrollLeft/scrollTop have to be for it to sit flush against the
   * headers. Same thing as the model's getScrollX/getScrollY, but consistent
   * with how setScrollPosition reads a scroll position back.
   */
  getScrollPosition() {
    const t = this.model.getSelectedSheet(), n = this.model.getSelectedView(), o = 1 + this.model.getFrozenColumnsCount(t), r = 1 + this.model.getFrozenRowsCount(t);
    return {
      left: this.columnLeft(
        t,
        Math.max(o, n.left_column),
        o
      ),
      top: this.rowTop(t, Math.max(r, n.top_row), r)
    };
  }
  /**
   * Resizing a row or a column moves every cell after it, which invalidates the
   * anchor. Called on the resize paths, which don't go through a render.
   */
  invalidateAnchor() {
    this.anchor.sheet = -1, this.invalidateFrame();
  }
  setScrollPosition(t) {
    const { column: n, left: o } = this.getBoundedColumn(t.left), { row: r, top: i } = this.getBoundedRow(t.top);
    this.invalidateFrame(), this.scrollOffset.x = Math.max(0, t.left - o), this.scrollOffset.y = Math.max(0, t.top - i), this.model.setTopLeftVisibleCell(r, n);
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
    return t.width = n * Dt, t.height = o * Dt, t.style.width = `${n}px`, t.style.height = `${o}px`, r.scale(Dt, Dt), r;
  }
  setSize(t) {
    this.invalidateFrame(), this.width = t.width, this.height = t.height, this.ctx = this.setContext();
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
    if (this.visibleCells)
      return this.visibleCells;
    const t = this.model.getSelectedView(), n = t.sheet, o = this.model.getFrozenRowsCount(n), r = this.model.getFrozenColumnsCount(n), i = Math.max(o + 1, t.top_row);
    let s = i;
    const a = Math.max(r + 1, t.left_column);
    let c = a;
    const f = this.getFrozenColumnsWidth(), h = this.getFrozenRowsHeight();
    let m = ae + h - this.scrollOffset.y;
    for (let g = i; g <= ze; g += 1) {
      const p = this.getRowHeight(n, g);
      if (m >= this.height - p || g === ze) {
        s = g;
        break;
      }
      m += p;
    }
    let d = se + f - this.scrollOffset.x;
    for (let g = a; g <= Ae; g += 1) {
      const p = this.getColumnWidth(n, g);
      if (d >= this.width - p || g === Ae) {
        c = g;
        break;
      }
      d += p;
    }
    const x = {
      topLeftCell: { row: i, column: a },
      bottomRightCell: { row: s, column: c }
    };
    return this.visibleCells = x, x;
  }
  /**
   * Returns the {row, top} of the row whose upper y coordinate (top) is maximum and less or equal than maxTop
   * Both top and maxTop are absolute coordinates
   */
  getBoundedRow(t) {
    const n = this.model.getSelectedSheet(), o = 1 + this.model.getFrozenRowsCount(n);
    this.ensureAnchor(n, o, "row");
    const r = this.anchor;
    for (; r.top > t && r.row > o; )
      r.row -= 1, r.top -= this.getRowHeight(n, r.row);
    for (; r.row < ze; ) {
      const i = this.getRowHeight(n, r.row);
      if (r.top + i > t)
        break;
      r.top += i, r.row += 1;
    }
    return { row: r.row, top: r.top };
  }
  getBoundedColumn(t) {
    const n = this.model.getSelectedSheet(), o = 1 + this.model.getFrozenColumnsCount(n);
    this.ensureAnchor(n, o, "column");
    const r = this.anchor;
    for (; r.left > t && r.column > o; )
      r.column -= 1, r.left -= this.getColumnWidth(n, r.column);
    for (; r.column < Ae; ) {
      const i = this.getColumnWidth(n, r.column);
      if (r.left + i > t)
        break;
      r.left += i, r.column += 1;
    }
    return { column: r.column, left: r.left };
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
    const r = o - this.width + this.getFrozenColumnsWidth() + se;
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
    const s = this.model.getFrozenColumnsCount(t), [a, c] = this.getCoordinatesByCell(
      n,
      r.column
    ), f = this.model.getLastNonEmptyInRowBeforeColumn(
      t,
      n,
      r.column
    );
    if (f && f > s) {
      const m = this.cellTextReach(t, n, f);
      let d = 0;
      for (let x = r.column - 1; x >= f; ) {
        if (d += this.getColumnWidth(t, x), d > m) {
          d = null;
          break;
        }
        x -= 1;
      }
      d !== null && this.computeCellText(
        n,
        f,
        a - d,
        c,
        this.getColumnWidth(t, f),
        o
      );
    }
    const h = this.model.getFirstNonEmptyInRowAfterColumn(
      t,
      n,
      i.column
    );
    if (h) {
      const m = this.cellTextReach(t, n, h);
      let d = 0;
      for (let x = r.column; x < h; x += 1)
        if (d += this.getColumnWidth(t, x), a + d - this.width > m) {
          d = null;
          break;
        }
      d !== null && this.computeCellText(
        n,
        h,
        a + d,
        c,
        this.getColumnWidth(t, h),
        o
      );
    }
  }
  /**
   * An upper bound for how far the text of a cell can stretch outside of it.
   * Wrapped text is shorter than this (it is measured unwrapped), which is fine:
   * this is only used to decide whether a cell outside the viewport is worth
   * looking at at all.
   */
  cellTextReach(t, n, o) {
    const r = this.model.getFormattedCellValue(t, n, o);
    if (r === "")
      return 0;
    const { font: i } = this.getFontStyle(this.getCellStyle(t, n, o));
    return this.ctx.font = i, this.ctx.measureText(r).width;
  }
  // Goes through all the visible cells and computes their text properties
  computeCellsText() {
    const { topLeftCell: t, bottomRightCell: n } = this.getVisibleCells(), o = this.model.getSelectedSheet();
    this.cells = [];
    const r = this.model.getFrozenColumnsCount(o), i = this.model.getFrozenRowsCount(o);
    let s = se + 0.5, a = ae + 0.5;
    for (let d = 1; d <= i; d += 1) {
      const x = this.getRowHeight(o, d);
      this.computeCellTextLeftRight(
        o,
        d,
        x,
        t,
        n
      ), s = se + 0.5;
      for (let g = 1; g <= r; g += 1) {
        const p = this.getColumnWidth(o, g);
        this.computeCellText(d, g, s, a, p, x), s += p;
      }
      a += x;
    }
    if (i === 0 && r !== 0) {
      s = se + 0.5;
      for (let d = 1; d <= r; d += 1)
        s += this.getColumnWidth(o, d);
    }
    i && (a += ct), r && (s += ct);
    const c = s, f = a, h = c - this.scrollOffset.x, m = f - this.scrollOffset.y;
    a = ae + 0.5;
    for (let d = 1; d <= i; d += 1) {
      s = h;
      const x = this.getRowHeight(o, d);
      for (let { column: g } = t; g <= n.column; g += 1) {
        const p = this.getColumnWidth(o, g);
        this.computeCellText(d, g, s, a, p, x), s += p;
      }
      a += x;
    }
    a = m;
    for (let { row: d } = t; d <= n.row; d += 1) {
      s = se;
      const x = this.getRowHeight(o, d);
      this.computeCellTextLeftRight(
        o,
        d,
        x,
        t,
        n
      );
      for (let g = 1; g <= r; g += 1) {
        const p = this.getColumnWidth(o, g);
        this.computeCellText(d, g, s, a, p, x), s += p;
      }
      a += x;
    }
    a = m;
    for (let { row: d } = t; d <= n.row; d += 1) {
      s = h;
      const x = this.getRowHeight(o, d);
      for (let { column: g } = t; g <= n.column; g += 1) {
        const p = this.getColumnWidth(o, g);
        this.computeCellText(d, g, s, a, p, x), s += p;
      }
      a += x;
    }
  }
  // Compute the text properties for a cell
  computeCellText(t, n, o, r, i, s) {
    const a = this.model.getSelectedSheet(), c = this.getCellStyle(a, t, n), { font: f, color: h, fontSize: m } = this.getFontStyle(c), d = this.model.getCellType(a, t, n), { horizontal: x, vertical: g } = this.getAlignment(c, d), p = c.alignment?.wrap_text || !1, y = this.ctx;
    y.font = f, y.fillStyle = h;
    const S = this.model.getFormattedCellValue(
      a,
      t,
      n
    ), T = m * 1.5, C = Ma(
      S,
      p,
      y,
      i - Ir
    ), w = C.length;
    let E = o, _ = o + i;
    const D = {
      row: t,
      column: n,
      x: E,
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
    C.forEach((F, v) => {
      const I = y.measureText(F).width;
      let P, M;
      const z = 4;
      x === "right" ? P = i - Ir + o - I / 2 : x === "center" ? P = o + i / 2 : P = Ir + o + I / 2, g === "bottom" ? M = r + s - m / 2 - z + (v - w + 1) * T : g === "center" ? M = r + s / 2 + (v + (1 - w) / 2) * T : M = r + m / 2 + z + v * T, D.lines.push([F, P, M, I]), E = Math.min(E, P - I / 2), _ = Math.max(_, P + I / 2);
    });
    let N = o, R = o + i;
    if (_ > R && n < Ae && this.model.getFormattedCellValue(a, t, n + 1) === "") {
      let F = n + 1;
      const v = this.model.getFrozenColumnsCount(a);
      for (; R < _ && this.model.getFormattedCellValue(a, t, F) === "" && F <= Ae && (n < v && F <= v || n > v); )
        R += this.model.getColumnWidth(a, F), this.spills.set(`${t}-${F}`, 1), F += 1;
    }
    const W = this.model.getFrozenColumnsCount(a);
    if (E < N && n > 1 && this.model.getFormattedCellValue(a, t, n - 1) === "") {
      let F = n - 1;
      for (; N > E && this.model.getFormattedCellValue(a, t, F) === "" && F >= 1 && (n <= W && F <= W || n > W); )
        N -= this.getColumnWidth(a, F), this.spills.set(`${t}-${F + 1}`, 1), F -= 1;
    }
    if (W > 0) {
      const F = this.getCoordinatesByCell(t, W)[0] + this.getColumnWidth(a, W);
      n > W ? N = Math.max(N, F) : R = Math.min(R, F);
    }
    D.x = N, D.width = R - N, this.cells.push(D);
  }
  /// Renders the cell style: colors, borders, etc. But not the text.
  renderCellStyle(t, n, o, r, i, s) {
    const a = this.model.getSelectedSheet(), c = this.getCellStyle(a, t, n);
    let f = $.palette.common.white;
    c.fill.fg_color && (f = c.fill.fg_color);
    const h = this.model.getShowGridLines(a) ? xf : f, m = this.ctx;
    m.fillStyle = f, m.fillRect(o, r, i, s);
    const d = c.border;
    if (this.spills.get(`${t}-${n}`) !== 1) {
      let p = h, y = 1;
      if (d.left)
        switch (p = d.left.color, d.left.style) {
          case "thin":
            break;
          case "medium":
            y = 2;
            break;
          case "thick":
            y = 3;
        }
      else {
        const S = this.getCellStyle(
          a,
          t,
          n - 1
        );
        if (S.border.right)
          switch (p = S.border.right.color, S.border.right.style) {
            case "thin":
              break;
            case "medium":
              y = 2;
              break;
            case "thick":
              y = 3;
          }
        else c.fill.fg_color ? p = c.fill.fg_color : S.fill.fg_color && (p = S.fill.fg_color);
      }
      m.beginPath(), m.strokeStyle = p, m.lineWidth = y, m.moveTo(o, r), m.lineTo(o, r + s), m.stroke();
    }
    let x = h, g = 1;
    if (d.top)
      switch (x = d.top.color, d.top.style) {
        case "thin":
          break;
        case "medium":
          g = 2;
          break;
        case "thick":
          g = 3;
      }
    else {
      const p = this.getCellStyle(a, t - 1, n);
      if (p.border.bottom)
        switch (x = p.border.bottom.color, p.border.bottom.style) {
          case "thin":
            break;
          case "medium":
            g = 2;
            break;
          case "thick":
            g = 3;
        }
      else c.fill.fg_color ? x = c.fill.fg_color : p.fill.fg_color && (x = p.fill.fg_color);
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
      textColor: d,
      lines: x
    } = t, g = this.ctx;
    g.font = c, g.fillStyle = d;
    const p = this.model.getSelectedSheet(), y = this.model.getFrozenRowsCount(p), S = this.model.getFrozenColumnsCount(p), T = this.getFrozenRowsHeight(), C = this.getFrozenColumnsWidth(), w = o <= S ? se : se + C, E = n <= y ? ae : ae + T, _ = o <= S ? se + C : this.width, D = n <= y ? ae + T : this.height, N = Math.max(r, w), R = Math.max(i, E);
    g.save(), g.beginPath(), g.rect(
      N,
      R,
      Math.min(r + s, _) - N,
      Math.min(i + a, D) - R
    ), g.clip(), x.forEach((W, F) => {
      const [v, I, P, M] = W;
      if (g.fillText(v, I, P), f) {
        const z = Math.floor(m / 2);
        g.beginPath(), g.strokeStyle = d, g.lineWidth = 1, g.moveTo(I - M / 2, P + z), g.lineTo(I + M / 2, P + z), g.stroke();
      }
      h && (g.beginPath(), g.strokeStyle = d, g.lineWidth = 1, g.moveTo(I - M / 2, P), g.lineTo(I + M / 2, P), g.stroke());
    }), g.restore();
  }
  // Column and row headers with their handles
  addColumnResizeHandle(t, n, o) {
    const r = document.createElement("div");
    r.className = "column-resize-handle", r.style.left = `${t - 1}px`, r.style.height = `${ae}px`, this.columnHeaders.insertBefore(r, null);
    let i = 0;
    const s = (c) => {
      o + c.pageX - i > 0 && (r.style.left = `${t + c.pageX - i - 1}px`, this.columnGuide.style.left = `${se + t + c.pageX - i}px`);
    };
    let a = (c) => {
      r.style.opacity = "0", this.columnGuide.style.display = "none", document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", a);
      const f = o + c.pageX - i;
      f !== o && (this.invalidateAnchor(), this.onColumnWidthChanges(
        this.model.getSelectedSheet(),
        n,
        f
      ));
    };
    a = a.bind(this), r.addEventListener("pointerdown", (c) => {
      r.style.opacity = "1", this.columnGuide.style.display = "block", this.columnGuide.style.left = `${se + t}px`, i = c.pageX, document.addEventListener("pointermove", s), document.addEventListener("pointerup", a);
    }), r.addEventListener("dblclick", (c) => {
      const f = this.model.getSelectedSheet(), h = this.model.getRowsWithData(f, n);
      let m = 0;
      for (const d of h) {
        const x = this.model.getFormattedCellValue(f, d, n);
        if (x === "")
          continue;
        const g = this.model.getCellStyle(f, d, n);
        let y = `${g.font.sz}px ${Do}`;
        y = g.font.b ? `bold ${y}` : `400 ${y}`, this.ctx.font = y;
        const S = x.split(`
`);
        for (const T of S) {
          const C = this.ctx.measureText(T).width;
          m = Math.max(m, C);
        }
      }
      m !== 0 && (this.invalidateAnchor(), this.model.setColumnsWidth(f, n, n, m + 8), this.refresh()), c.stopPropagation();
    });
  }
  addRowResizeHandle(t, n, o) {
    const r = document.createElement("div");
    r.className = "row-resize-handle", r.style.top = `${t - 1}px`, r.style.width = `${se}px`;
    const i = this.model.getSelectedSheet();
    this.canvas.parentElement?.insertBefore(r, null);
    let s = 0;
    const a = (f) => {
      o + f.pageY - s > 0 && (r.style.top = `${t + f.pageY - s - 1}px`, this.rowGuide.style.top = `${t + f.pageY - s}px`);
    };
    let c = (f) => {
      r.style.opacity = "0", this.rowGuide.style.display = "none", document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", c);
      const h = o + f.pageY - s;
      h !== o && (this.invalidateAnchor(), this.onRowHeightChanges(i, n, h));
    };
    c = c.bind(this), r.addEventListener("pointerdown", (f) => {
      f.stopPropagation(), r.style.opacity = "1", this.rowGuide.style.display = "block", this.rowGuide.style.top = `${t}px`, s = f.pageY, document.addEventListener("pointermove", a), document.addEventListener("pointerup", c);
    }), r.addEventListener("dblclick", (f) => {
      const h = this.model.getSelectedSheet(), m = this.model.getColumnsWithData(h, n);
      let d = 0;
      for (const x of m) {
        const g = this.model.getFormattedCellValue(h, n, x);
        if (g === "")
          continue;
        const p = this.getColumnWidth(h, x), y = this.model.getCellStyle(h, n, x), S = y.font.sz, T = S * 1.5;
        let C = `${S}px ${Do}`;
        C = y.font.b ? `bold ${C}` : `400 ${C}`, this.ctx.font = C;
        const _ = (Ma(
          g,
          y.alignment?.wrap_text || !1,
          this.ctx,
          p
        ).length - 1) * T + 8 + S;
        d = Math.max(d, _);
      }
      d !== 0 && (this.invalidateAnchor(), this.model.setRowsHeight(h, n, n, d), this.refresh()), f.stopPropagation();
    });
  }
  styleColumnHeader(t, n, o, r) {
    n.style.boxSizing = "border-box", n.style.width = `${t}px`, n.style.height = `${ae}px`, n.style.backgroundColor = o ? r ? $.palette.primary.main : Ts : Rs, n.style.color = o ? r ? $.palette.common.white : ks : _s, n.style.fontWeight = "bold", n.style.borderLeft = `1px solid ${Dr}`, n.style.borderTop = `1px solid ${Dr}`, o ? (n.style.borderBottom = `1px solid ${Ke}`, n.classList.add("selected")) : n.classList.remove("selected");
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
    const h = c === 1 && f === Ae, m = this.ctx, d = this.getFrozenRowsHeight();
    let x = ae + 0.5;
    const g = t === 0 ? n.row : 1;
    let p = !1;
    t === 0 && (x -= this.scrollOffset.y, m.save(), m.beginPath(), m.rect(0, ae, se + 1, this.height), m.clip(), p = !0);
    for (let y = g; y <= o.row; y += 1) {
      const S = this.getRowHeight(r, y), T = y >= s && y <= a;
      m.fillStyle = Dr, m.fillRect(0.5, x, se, S), m.fillStyle = T ? h ? $.palette.primary.main : Ts : Rs, m.fillRect(
        0.5,
        x + 0.5,
        se,
        S - 1
      ), T && (m.fillStyle = Ke, m.fillRect(se - 1, x, 1, S)), m.fillStyle = T ? h ? $.palette.common.white : ks : _s, m.font = `bold 12px ${Do}`, m.fillText(
        `${y}`,
        se / 2,
        x + S / 2,
        se
      ), x += S, x > ae + d && this.addRowResizeHandle(x, y, S), y === t && (x += ct - this.scrollOffset.y, y = n.row - 1, m.save(), m.beginPath(), m.rect(
        0,
        ae + d,
        se + 1,
        this.height
      ), m.clip(), p = !0);
    }
    p && m.restore();
  }
  renderColumnHeaders(t, n, o) {
    const { columnHeaders: r } = this;
    let i = 0;
    const { range: s } = this.model.getSelectedView();
    let a = s[0], c = s[2], f = s[1], h = s[3];
    f > h && ([f, h] = [h, f]), a > c && ([a, c] = [c, a]);
    const m = a === 1 && c === ze;
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
    r.style.fontFamily = xb, r.style.fontSize = "12px", r.style.height = `${ae}px`, r.style.lineHeight = `${ae}px`, r.style.left = `${se}px`;
    const d = this.getFrozenColumnsWidth();
    i = d - this.scrollOffset.x;
    for (let g = n; g <= o; g += 1) {
      const p = g >= f && g <= h;
      i += this.addColumnHeader(
        i,
        g,
        p,
        m,
        2,
        g === n ? -this.scrollOffset.x : 0,
        d
      );
    }
    const x = i;
    i = 0;
    for (let g = 1; g <= t; g += 1) {
      const p = g >= f && g <= h;
      i += this.addColumnHeader(
        i,
        g,
        p,
        m,
        1
      );
    }
    if (t !== 0) {
      const g = document.createElement("div");
      g.className = "frozen-column-separator", g.style.width = `${ct}px`, g.style.height = `${ae}`, g.style.display = "inline-block", g.style.backgroundColor = To, g.style.order = "1", this.columnHeaders.insertBefore(g, null);
    }
    r.style.width = `${Math.max(x, d)}px`;
  }
  addColumnHeader(t, n, o, r, i, s = 0, a = 0) {
    const c = this.getColumnWidth(
      this.model.getSelectedSheet(),
      n
    ), f = document.createElement("div");
    return f.className = "column-header", f.textContent = Ve(n), f.style.order = `${i}`, s && (f.style.marginLeft = `${s}px`), this.columnHeaders.insertBefore(f, null), this.styleColumnHeader(c, f, o, r), t + c > a && this.addColumnResizeHandle(t + c, n, c), c;
  }
  getSheetDimensions() {
    let t = se;
    for (let o = 1; o < Ae + 1; o += 1)
      t += this.getColumnWidth(this.model.getSelectedSheet(), o);
    let n = ae;
    for (let o = 1; o < ze + 1; o += 1)
      n += this.getRowHeight(this.model.getSelectedSheet(), o);
    return this.sheetWidth = Math.floor(
      t + this.getColumnWidth(this.model.getSelectedSheet(), Ae)
    ), this.sheetHeight = Math.floor(
      n + 2 * this.getRowHeight(this.model.getSelectedSheet(), ze)
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
    const a = s ? this.getFrozenColumnsWidth() : 0, c = i ? this.getFrozenRowsHeight() : 0, f = ae + c, h = se + a, m = h + this.width - se - a, d = f + this.height - ae - c, x = n < f ? f - n : 0, g = t < h ? h - t : 0, p = t + o > m ? m - t : o + 4, y = n + r > d ? d - n : r + 4;
    return `rect(${x}px ${p}px ${y}px ${g}px)`;
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
      let [m, d] = this.getCoordinatesByCell(
        f,
        h
      );
      h > 0 && (m += this.getColumnWidth(
        this.model.getSelectedSheet(),
        h
      )), f > 0 && (d += this.getRowHeight(
        this.model.getSelectedSheet(),
        f
      )), t <= f && o > f && (c = Math.max(c, d)), n <= h && r > h && (a = Math.max(a, m));
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
      f = se;
      for (let m = 1; m < n; m += 1)
        f += this.getColumnWidth(o, m);
    } else if (n >= c.column) {
      f = se + i - this.scrollOffset.x;
      for (let m = c.column; m < n; m += 1)
        f += this.getColumnWidth(o, m);
    } else {
      f = se + i - this.scrollOffset.x;
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
    let a = 0, c = se;
    const { topLeftCell: f } = this.getVisibleCells();
    if (t < se)
      for (a = f.column; c >= t; ) {
        if (a -= 1, a < 1) {
          a = 1;
          break;
        }
        c -= this.getColumnWidth(this.model.getSelectedSheet(), a);
      }
    else if (t < se + r) {
      for (; c <= t; )
        if (a += 1, c += this.getColumnWidth(this.model.getSelectedSheet(), a), a > o)
          return null;
    } else
      for (c = se + r - this.scrollOffset.x, a = f.column - 1; c <= t; ) {
        if (a += 1, a > Ae)
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
        if (m += 1, m > ze) {
          m = ze;
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
    const [r, i, s] = this.model.getSelectedCell(), { topLeftCell: a } = this.getVisibleCells(), c = this.model.getFrozenRowsCount(r), f = this.model.getFrozenColumnsCount(r), [h, m] = this.getCoordinatesByCell(i, s), d = -1, x = this.getColumnWidth(r, s) + 2 * d, g = this.getRowHeight(r, i) + 2 * d;
    (i < a.row && i > c || s < a.column && s > f) && (t.style.visibility = "hidden", o.style.visibility = "hidden"), t.style.left = `${h - d - 2}px`, t.style.top = `${m - d - 2}px`, t.style.minWidth = "", t.style.minHeight = "", t.style.maxWidth = "", t.style.maxHeight = "", t.style.overflow = "hidden", t.style.width = `${x + 1}px`, t.style.height = `${g + 1}px`, t.style.background = "none", t.style.clip = this.getClipCSS(
      h - d - 2,
      m - d - 2,
      x + 1,
      g + 1,
      i > c,
      s > f
    ), t.style.lineHeight = `${g - 4}px`;
    let {
      range: [p, y, S, T]
    } = this.model.getSelectedView();
    p > S && ([p, S] = [S, p]), y > T && ([y, T] = [T, y]);
    let C, w;
    if (y === T && p === S)
      n.style.visibility = "hidden", [C, w] = this.getCoordinatesByCell(p, y), C += this.getColumnWidth(r, y), w += this.getRowHeight(r, p);
    else {
      n.style.visibility = "visible", o.style.visibility = this.workbookState.isSelecting() ? "hidden" : "visible";
      const [N, R] = this.getCoordinatesByCell(p, y), [W, F] = this.getAreaDimensions(
        p,
        y,
        S,
        T
      );
      C = N + W, w = R + F;
      const v = this.workbookState.isSelecting(), I = v ? 1 : 0;
      n.style.left = `${N - d - 1}px`, n.style.top = `${R - d - 1}px`, n.style.width = `${W + 2 * d + 1 + I}px`, n.style.height = `${F + 2 * d + 1 + I}px`;
      const P = p > c, M = y > f;
      n.style.clip = this.getClipCSS(
        N,
        R,
        W + 2 * d,
        F + 2 * d,
        P,
        M
      ), n.style.border = v ? "none" : `1px solid ${Ke}`, (S > c && S < a.row - 1 || T > f && T < a.column - 1) && (o.style.visibility = "hidden"), p <= c && S > c && S < a.row - 1 && (n.style.borderBottom = "None", o.style.visibility = "hidden"), y <= f && T > f && T < a.column - 1 && (n.style.borderRight = "None", o.style.visibility = "hidden");
    }
    const E = o.getBoundingClientRect(), _ = E.width, D = E.height;
    o.style.left = `${C - _ / 2 - 1}px`, o.style.top = `${w - D / 2 - 1}px`;
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
      se,
      ae,
      this.width - se,
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
      const h = 1, m = t.row - h, d = n.row + h, x = t.column - h, g = n.column + h;
      if (m <= f.rowEnd && f.rowStart <= d && x <= f.columnEnd && f.columnStart < g) {
        const p = {
          ...f,
          rowStart: Math.max(m, f.rowStart),
          rowEnd: Math.min(d, f.rowEnd),
          columnStart: Math.max(x, f.columnStart),
          columnEnd: Math.min(g, f.columnEnd)
        }, [y, S] = this.getCoordinatesByCell(
          p.rowStart,
          p.columnStart
        ), [T, C] = this.getCoordinatesByCell(
          p.rowEnd + 1,
          p.columnEnd + 1
        );
        r.strokeStyle = f.color, r.lineWidth = 1, r.strokeRect(y, S, T - y, C - S), r.fillStyle = gb(f.color), r.fillRect(y, S, T - y, C - S);
      }
    }
    r.setLineDash([]), r.restore();
  }
  renderSheet() {
    this.invalidateFrame();
    const t = this.ctx, { canvas: n } = this, o = this.model.getSelectedSheet();
    t.lineWidth = 1, t.textAlign = "center", t.textBaseline = "middle", t.clearRect(0, 0, n.width, n.height), this.removeHandles();
    const { topLeftCell: r, bottomRightCell: i } = this.getVisibleCells();
    this.computeCellsText();
    const s = this.model.getFrozenColumnsCount(o), a = this.model.getFrozenRowsCount(o);
    let c = se + 0.5, f = ae + 0.5;
    for (let p = 1; p <= a; p += 1) {
      const y = this.getRowHeight(o, p);
      c = se + 0.5;
      for (let S = 1; S <= s; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(p, S, c, f, T, y), c += T;
      }
      f += y;
    }
    if (a === 0 && s !== 0) {
      c = se + 0.5;
      for (let p = 1; p <= s; p += 1)
        c += this.getColumnWidth(o, p);
    }
    const h = ct / 2;
    a && (t.beginPath(), t.lineWidth = ct, t.strokeStyle = To, t.moveTo(0, f + h), t.lineTo(this.width, f + h), f += ct, t.stroke(), t.lineWidth = 1), s && (t.beginPath(), t.lineWidth = ct, t.strokeStyle = To, t.moveTo(c + h, 0), t.lineTo(c + h, this.height), c += ct, t.stroke(), t.lineWidth = 1);
    const m = c, d = f, x = m - this.scrollOffset.x, g = d - this.scrollOffset.y;
    f = ae + 0.5, t.save(), t.beginPath(), t.rect(m, ae, this.width, d - ae), t.clip();
    for (let p = 1; p <= a; p += 1) {
      c = x;
      const y = this.getRowHeight(o, p);
      for (let { column: S } = r; S <= i.column; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(p, S, c, f, T, y), c += T;
      }
      f += y;
    }
    t.restore(), f = g, t.save(), t.beginPath(), t.rect(
      se,
      d,
      m - se,
      this.height
    ), t.clip();
    for (let { row: p } = r; p <= i.row; p += 1) {
      c = se;
      const y = this.getRowHeight(o, p);
      for (let S = 1; S <= s; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(p, S, c, f, T, y), c += T;
      }
      f += y;
    }
    t.restore(), f = g, t.save(), t.beginPath(), t.rect(m, d, this.width, this.height), t.clip();
    for (let { row: p } = r; p <= i.row; p += 1) {
      c = x;
      const y = this.getRowHeight(o, p);
      for (let { column: S } = r; S <= i.column; S += 1) {
        const T = this.getColumnWidth(o, S);
        this.renderCellStyle(p, S, c, f, T, y), c += T;
      }
      f += y;
    }
    t.restore();
    for (const p of this.cells)
      this.renderCellText(p);
    this.renderColumnHeaders(
      s,
      r.column,
      i.column
    ), this.renderRowHeaders(a, r, i), t.beginPath(), t.strokeStyle = To, t.moveTo(0, 0.5), t.lineTo(c + se, 0.5), t.stroke(), this.drawCellOutline(), this.drawCellEditor(), this.drawExtendToArea(), this.drawActiveRanges(r, i), this.drawCutRange();
  }
}
const Aa = $.palette.error.main, yb = (e) => {
  const { t } = Le(), {
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
    onUnfreezeRows: d,
    onDeleteRow: x,
    onDeleteColumn: g,
    onMoveColumnLeft: p,
    onMoveColumnRight: y,
    onMoveRowUp: S,
    onMoveRowDown: T,
    row: C,
    column: w
  } = e, [E, _] = oe(!1), D = re(null), [N, R] = oe(!1), W = re(null), [F, v] = oe(!1), I = re(null), [P, M] = oe(!1), z = re(null), [J, A] = oe(!1), G = re(null);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(
      Mt,
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
              ref: I,
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
              ref: W,
              disableRipple: !0,
              onClick: () => R(!0),
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
              ref: z,
              disableRipple: !0,
              onClick: () => M(!0),
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
              ref: G,
              disableRipple: !0,
              onClick: () => A(!0),
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
              ref: D,
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
            /* @__PURE__ */ l.jsx(Qt, {}),
            /* @__PURE__ */ l.jsx(fe, { style: { color: Aa }, children: t("cell_context.delete_row", { row: C }) })
          ] }),
          /* @__PURE__ */ l.jsxs(or, { disableRipple: !0, onClick: g, children: [
            /* @__PURE__ */ l.jsx(Qt, {}),
            /* @__PURE__ */ l.jsx(fe, { style: { color: Aa }, children: t("cell_context.delete_column", { column: w }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Mt,
      {
        open: N,
        onClose: () => R(!1),
        transitionDuration: 0,
        anchorEl: W.current,
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
                R(!1), i();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_above") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                R(!1), s();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_row_below") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Mt,
      {
        open: F,
        onClose: () => v(!1),
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
                v(!1), c();
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.insert_column_after") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Mt,
      {
        open: P,
        onClose: () => M(!1),
        transitionDuration: 0,
        anchorEl: z.current,
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
                S(), M(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_up") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                T(), M(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_row_down") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Mt,
      {
        open: J,
        onClose: () => A(!1),
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
                p(), A(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_left") })
            }
          ),
          /* @__PURE__ */ l.jsx(
            be,
            {
              disableRipple: !0,
              onClick: () => {
                y(), A(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.move_column_right") })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ l.jsxs(
      Mt,
      {
        open: E,
        onClose: () => _(!1),
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
                d(), _(!1);
              },
              children: /* @__PURE__ */ l.jsx(fe, { children: t("cell_context.unfreeze_rows") })
            }
          )
        ]
      }
    )
  ] });
}, Mt = X(so)({
  "& .MuiPaper-root": {
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4
  },
  "& .MuiList-padding": {
    padding: 0
  }
}), be = X(on)`
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
    color: ${$.palette.grey[600]};
  },
`, or = X(be)`
  color: ${$.palette.error.main};
  svg {
    color: ${$.palette.error.main};
  }
  &:hover {
    background-color: ${$.palette.error.main}1A;
  }
  &:active {
    background-color: ${$.palette.error.main}1A;
  }
`, ht = X("div")`
  width: 100%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 4px;
  border-top: 1px solid ${$.palette.grey[200]};
`, fe = X("div")`
  font-size: 12px;
  color: ${$.palette.grey[900]};
  flex-grow: 2;
`, Nn = X(bi)`
  width: 16px;
  height: 16px;
  color: ${$.palette.grey[900]};
`, vb = $.palette.error.main, wb = (e) => {
  const { t } = Le(), {
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
    column: d,
    frozenColumnsCount: x
  } = e;
  return /* @__PURE__ */ l.jsxs(
    Mt,
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
              /* @__PURE__ */ l.jsx(Ft, {}),
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
              /* @__PURE__ */ l.jsx(Ft, {}),
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
          /* @__PURE__ */ l.jsx(Qt, {}),
          /* @__PURE__ */ l.jsx(fe, { style: { color: vb }, children: t("cell_context.delete_column", { column: d }) })
        ] })
      ]
    }
  );
}, Cb = $.palette.error.main, Eb = (e) => {
  const { t } = Le(), {
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
    row: d,
    frozenRowsCount: x
  } = e;
  return /* @__PURE__ */ l.jsxs(
    Mt,
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
              /* @__PURE__ */ l.jsx(Ft, {}),
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
              /* @__PURE__ */ l.jsx(Ft, {}),
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
          /* @__PURE__ */ l.jsx(Qt, {}),
          /* @__PURE__ */ l.jsx(fe, { style: { color: Cb }, children: t("cell_context.delete_row", { row: d }) })
        ] })
      ]
    }
  );
}, Sb = (e) => {
  const t = re(!1), n = re(!1), o = re(!1), r = re(null), i = re(!1), s = re(null), a = De(
    (h) => {
      if (h.pointerType !== "mouse" || !(t.current || n.current || o.current || i.current))
        return;
      const { canvasElement: m, model: d, worksheetCanvas: x, refresh: g } = e, p = m.current, y = x.current;
      if (!y || !p)
        return;
      const S = p.getBoundingClientRect(), T = h.clientX - S.x, C = h.clientY - S.y;
      if (o.current) {
        if (h.preventDefault(), r.current === null)
          return;
        let E = null;
        if (T >= 0 && T < se && C >= ae) {
          const _ = y.getCellByCoordinates(se, C);
          _ && (E = _.row);
        } else if (T >= se && C >= ae) {
          const _ = y.getCellByCoordinates(T, C);
          _ && (E = _.row);
        }
        if (E !== null) {
          const _ = r.current;
          d.setSelectedCell(Math.min(_, E), 1), d.setSelectedRange(
            Math.min(_, E),
            1,
            Math.max(_, E),
            Ae
          ), g();
        }
        return;
      }
      if (i.current) {
        if (h.preventDefault(), s.current === null)
          return;
        let E = null;
        if (T >= se && C >= 0 && C < ae) {
          const _ = y.getCellByCoordinates(T, ae);
          _ && (E = _.column);
        } else if (T >= se && C >= ae) {
          const _ = y.getCellByCoordinates(T, C);
          _ && (E = _.column);
        }
        if (E !== null) {
          const _ = s.current;
          d.setSelectedCell(1, Math.min(_, E)), d.setSelectedRange(
            1,
            Math.min(_, E),
            ze,
            Math.max(_, E)
          ), g();
        }
        return;
      }
      const w = y.getCellByCoordinates(T, C);
      if (w) {
        if (t.current)
          e.onAreaSelecting(w);
        else if (n.current) {
          const { workbookState: E } = e, _ = E.getEditingCell();
          if (!_ || !_.referencedRange)
            return;
          const D = _.referencedRange.range;
          D.rowEnd = w.row, D.columnEnd = w.column;
          const N = d.getWorksheetsProperties().map((R) => R.name);
          _.referencedRange.str = ft(
            D,
            _.sheet,
            N[D.sheet]
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
        let d = h.clientX, x = h.clientY;
        const {
          canvasElement: g,
          model: p,
          refresh: y,
          worksheetElement: S,
          worksheetCanvas: T,
          workbookState: C,
          onRowSelected: w,
          onColumnSelected: E,
          onAllSheetSelected: _
        } = e, D = T.current, N = g.current, R = S.current;
        if (!N || !D || !R)
          return;
        const W = N.getBoundingClientRect();
        if (d -= W.x, x -= W.y, d > W.width || d < se || x < ae || x > W.height) {
          if (d < se && x < ae)
            _();
          else if (d > 0 && d < se && x > ae && x < W.height) {
            const I = D.getCellByCoordinates(se, x);
            I && (h.shiftKey ? w(I.row, !0) : (h.preventDefault(), r.current = I.row, o.current = !0, R.setPointerCapture(h.pointerId), w(I.row, !1)));
          } else if (d > se && d < W.width && x > 0 && x < ae) {
            const I = D.getCellByCoordinates(d, ae);
            I && (h.shiftKey ? E(I.column, !0) : (h.preventDefault(), s.current = I.column, i.current = !0, R.setPointerCapture(h.pointerId), E(I.column, !1)));
          }
          return;
        }
        const F = C.getEditingCell(), v = D.getCellByCoordinates(d, x);
        if (v) {
          if (F) {
            if (p.getSelectedSheet() === F.sheet && v.row === F.row && v.column === F.column)
              return;
            const I = F.text;
            if (fn(I, F.cursorEnd)) {
              const P = {
                sheet: p.getSelectedSheet(),
                rowStart: v.row,
                rowEnd: v.row,
                columnStart: v.column,
                columnEnd: v.column
              }, M = p.getWorksheetsProperties().map((z) => z.name);
              F.referencedRange = {
                range: P,
                str: ft(
                  P,
                  F.sheet,
                  M[P.sheet]
                )
              }, C.setEditingCell(F), h.stopPropagation(), h.preventDefault(), n.current = !0, R.setPointerCapture(h.pointerId), y();
              return;
            }
            C.clearEditingCell(), p.setUserInput(
              F.sheet,
              F.row,
              F.column,
              F.text
            );
          }
          h.shiftKey ? (e.onAreaSelecting(v), e.onAreaSelected()) : (e.onCellSelected(v, h), t.current = !0, R.setPointerCapture(h.pointerId));
        }
      },
      [e]
    ),
    onPointerMove: a,
    onPointerUp: c
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
    const n = re(null), o = re(null), r = re(null), i = re(null), s = re(null), a = re(null), c = re(null), f = re(null), h = re(null), m = re(null), d = re(null), x = re(null), [g, p] = oe(!1), [y, S] = oe(!1), [T, C] = oe(!1), [w, E] = oe(null), _ = re(!1), D = re({
      x: 0,
      y: 0,
      sheet: -1,
      scrollX: -1,
      scrollY: -1
    }), N = re(0);
    Ne(
      () => () => {
        N.current && cancelAnimationFrame(N.current);
      },
      []
    );
    const { model: R, workbookState: W, refresh: F } = e, [v, I] = _b();
    Ba(t, () => ({
      getCanvas: () => x.current
    })), Ne(() => {
      const A = n.current, G = h.current, O = m.current, b = d.current, j = o.current, L = a.current, B = c.current, K = f.current, Y = i.current;
      if (!A || !G || !O || !b || !j || !L || !B || !K || !r.current || !Y)
        return;
      R.setWindowWidth(v - 37), R.setWindowHeight(I - 190);
      const U = new bb({
        width: j.clientWidth,
        height: j.clientHeight,
        model: R,
        workbookState: W,
        elements: {
          canvas: A,
          columnGuide: G,
          rowGuide: O,
          columnHeaders: b,
          cellOutline: L,
          areaOutline: B,
          extendToOutline: K,
          editor: Y
        },
        onColumnWidthChanges(He, ye, Me) {
          if (Me < 0)
            return;
          const { range: pe } = R.getSelectedView();
          let je = ye, Re = ye;
          const ie = pe[0] === 1 && pe[2] === ze, jt = pe[1] === 1 && pe[3] === Ae;
          ie && ye >= pe[1] && ye <= pe[3] && !jt && (je = Math.min(pe[1], ye, pe[3]), Re = Math.max(pe[1], ye, pe[3])), R.setColumnsWidth(He, je, Re, Me), x.current?.renderSheet();
        },
        onRowHeightChanges(He, ye, Me) {
          if (Me < 0)
            return;
          const { range: pe } = R.getSelectedView();
          let je = ye, Re = ye;
          const ie = pe[0] === 1 && pe[2] === ze;
          pe[1] === 1 && pe[3] === Ae && ye >= pe[0] && ye <= pe[2] && !ie && (je = Math.min(pe[0], ye, pe[2]), Re = Math.max(pe[0], ye, pe[2])), R.setRowsHeight(He, je, Re, Me), x.current?.renderSheet();
        },
        refresh: F,
        scrollOffset: D.current
      }), { left: Z, top: Q } = U.getScrollPosition(), [q, ee] = [Z + 1e5, Q + 5e5];
      s.current && (s.current.style.height = `${ee}px`, s.current.style.width = `${q}px`);
      const H = D.current, ce = R.getSelectedSheet();
      (ce !== H.sheet || Z !== H.scrollX) && (H.x = 0), (ce !== H.sheet || Q !== H.scrollY) && (H.y = 0), H.sheet = ce, H.scrollX = Z, H.scrollY = Q;
      const de = r.current.scrollLeft, Fe = r.current.scrollTop;
      Math.abs(Z + H.x - de) >= 1 && (_.current = !0, r.current.scrollLeft = Z + H.x, setTimeout(() => {
        _.current = !1;
      }, 0)), Math.abs(Q + H.y - Fe) >= 1 && (_.current = !0, r.current.scrollTop = Q + H.y, setTimeout(() => {
        _.current = !1;
      }, 0)), U.renderSheet(), x.current = U;
    });
    const { onPointerMove: P, onPointerDown: M, onPointerUp: z } = Sb({
      model: R,
      workbookState: W,
      refresh: F,
      onColumnSelected: (A, G) => {
        let O = A, b = A;
        if (G) {
          const { range: j } = R.getSelectedView();
          O = Math.min(j[1], A, j[3]), b = Math.max(j[3], A, j[1]);
        }
        R.setSelectedCell(1, O), R.setSelectedRange(1, O, ze, b), F();
      },
      onRowSelected: (A, G) => {
        let O = A, b = A;
        if (G) {
          const { range: j } = R.getSelectedView();
          O = Math.min(j[0], A, j[2]), b = Math.max(j[2], A, j[0]);
        }
        R.setSelectedCell(O, 1), R.setSelectedRange(O, 1, b, Ae), F();
      },
      onAllSheetSelected: () => {
        R.setSelectedCell(1, 1), R.setSelectedRange(1, 1, ze, Ae), F();
      },
      onCellSelected: (A, G) => {
        G.preventDefault(), G.stopPropagation(), R.setSelectedCell(A.row, A.column), F();
      },
      onAreaSelecting: (A) => {
        const G = x.current;
        if (!G)
          return;
        W.setSelecting(!0);
        const { row: O, column: b } = A;
        R.onAreaSelecting(O, b), G.renderSheet(), F();
      },
      onAreaSelected: () => {
        W.setSelecting(!1);
        const A = W.getCopyStyles();
        if (A?.length) {
          R.onPasteStyles(A);
          const G = x.current;
          if (!G)
            return;
          G.renderSheet();
        }
        W.setCopyStyles(null), o.current && (o.current.style.cursor = "auto"), F();
      },
      canvasElement: n,
      worksheetElement: o,
      worksheetCanvas: x
    }), J = () => {
      !r.current || !x.current || _.current || N.current || (N.current = requestAnimationFrame(() => {
        N.current = 0;
        const A = r.current, G = x.current;
        if (!A || !G)
          return;
        G.setScrollPosition({
          left: A.scrollLeft,
          top: A.scrollTop
        });
        const O = D.current, b = G.getScrollPosition();
        O.sheet = R.getSelectedSheet(), O.scrollX = b.left, O.scrollY = b.top, G.renderSheet();
      }));
    };
    return /* @__PURE__ */ l.jsxs(jb, { ref: r, onScroll: J, className: "scroll", children: [
      /* @__PURE__ */ l.jsx(Tb, { ref: s }),
      /* @__PURE__ */ l.jsxs(
        kb,
        {
          className: "sheet-container",
          ref: o,
          onPointerDown: M,
          onPointerMove: P,
          onPointerUp: z,
          onContextMenu: (A) => {
            A.preventDefault(), A.stopPropagation(), E({
              top: A.clientY,
              left: A.clientX
            });
            const G = n.current;
            if (G) {
              const O = G.getBoundingClientRect(), b = A.clientX - O.x, j = A.clientY - O.y;
              if (b > se && b < O.width && j > 0 && j < ae) {
                S(!0);
                return;
              }
              if (b > 0 && b < se && j > ae && j < O.height) {
                C(!0);
                return;
              }
            }
            p(!0);
          },
          onDoubleClick: (A) => {
            const { sheet: G, row: O, column: b } = R.getSelectedView(), j = R.getCellContent(G, O, b), L = R.getColumnWidth(G, b) * Qn, B = R.getRowHeight(G, O) * Jn;
            W.setEditingCell({
              sheet: G,
              row: O,
              column: b,
              text: j,
              cursorStart: j.length,
              cursorEnd: j.length,
              focus: "cell",
              referencedRange: null,
              activeRanges: [],
              mode: "accept",
              editorWidth: L,
              editorHeight: B
            }), A.stopPropagation(), e.refresh();
          },
          children: [
            /* @__PURE__ */ l.jsx($b, { ref: n }),
            /* @__PURE__ */ l.jsx(Db, { ref: a }),
            /* @__PURE__ */ l.jsx(Fb, { ref: i, children: /* @__PURE__ */ l.jsx(
              wl,
              {
                originalText: W.getEditingText(),
                onEditEnd: () => {
                  e.refresh();
                },
                onTextUpdated: () => {
                  e.refresh();
                },
                model: R,
                workbookState: W,
                type: "cell"
              }
            ) }),
            /* @__PURE__ */ l.jsx(Ab, { ref: c }),
            /* @__PURE__ */ l.jsx(Ib, { ref: f }),
            /* @__PURE__ */ l.jsx(Pb, { ref: h }),
            /* @__PURE__ */ l.jsx(Mb, { ref: m }),
            /* @__PURE__ */ l.jsx(Ob, { ref: d })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(
        yb,
        {
          open: g,
          onClose: () => p(!1),
          anchorPosition: w,
          onInsertRowAbove: () => {
            const A = R.getSelectedView();
            R.insertRows(A.sheet, A.row, 1), p(!1);
          },
          onInsertRowBelow: () => {
            const A = R.getSelectedView();
            R.insertRows(A.sheet, A.row + 1, 1), p(!1);
          },
          onInsertColumnLeft: () => {
            const A = R.getSelectedView();
            R.insertColumns(A.sheet, A.column, 1), p(!1);
          },
          onInsertColumnRight: () => {
            const A = R.getSelectedView();
            R.insertColumns(A.sheet, A.column + 1, 1), p(!1);
          },
          onMoveColumnLeft: () => {
            const A = R.getSelectedView();
            R.moveColumn(A.sheet, A.column, -1), p(!1);
          },
          onMoveColumnRight: () => {
            const A = R.getSelectedView();
            R.moveColumn(A.sheet, A.column, 1), p(!1);
          },
          onMoveRowUp: () => {
            const A = R.getSelectedView();
            R.moveRow(A.sheet, A.row, -1), p(!1);
          },
          onMoveRowDown: () => {
            const A = R.getSelectedView();
            R.moveRow(A.sheet, A.row, 1), p(!1);
          },
          onFreezeColumns: () => {
            const A = R.getSelectedView();
            R.setFrozenColumnsCount(A.sheet, A.column), p(!1);
          },
          onFreezeRows: () => {
            const A = R.getSelectedView();
            R.setFrozenRowsCount(A.sheet, A.row), p(!1);
          },
          onUnfreezeColumns: () => {
            const A = R.getSelectedSheet();
            R.setFrozenColumnsCount(A, 0), p(!1);
          },
          onUnfreezeRows: () => {
            const A = R.getSelectedSheet();
            R.setFrozenRowsCount(A, 0), p(!1);
          },
          onDeleteRow: () => {
            const A = R.getSelectedView();
            R.deleteRows(A.sheet, A.row, 1), p(!1);
          },
          onDeleteColumn: () => {
            const A = R.getSelectedView();
            R.deleteColumns(A.sheet, A.column, 1), p(!1);
          },
          row: R.getSelectedView().row,
          column: Ve(R.getSelectedView().column)
        }
      ),
      /* @__PURE__ */ l.jsx(
        wb,
        {
          open: y,
          onClose: () => S(!1),
          anchorPosition: w,
          onInsertColumnLeft: () => {
            const A = R.getSelectedView();
            R.insertColumns(A.sheet, A.column, 1), S(!1);
          },
          onInsertColumnRight: () => {
            const A = R.getSelectedView();
            R.insertColumns(A.sheet, A.column + 1, 1), S(!1);
          },
          onMoveColumnLeft: () => {
            const A = R.getSelectedView();
            R.moveColumn(A.sheet, A.column, -1), S(!1);
          },
          onMoveColumnRight: () => {
            const A = R.getSelectedView();
            R.moveColumn(A.sheet, A.column, 1), S(!1);
          },
          onFreezeColumns: () => {
            const A = R.getSelectedView();
            R.setFrozenColumnsCount(A.sheet, A.column), S(!1);
          },
          onUnfreezeColumns: () => {
            const A = R.getSelectedSheet();
            R.setFrozenColumnsCount(A, 0), S(!1);
          },
          onDeleteColumn: () => {
            const A = R.getSelectedView();
            R.deleteColumns(A.sheet, A.column, 1), S(!1);
          },
          column: Ve(R.getSelectedView().column),
          frozenColumnsCount: R.getFrozenColumnsCount(
            R.getSelectedSheet()
          )
        }
      ),
      /* @__PURE__ */ l.jsx(
        Eb,
        {
          open: T,
          onClose: () => C(!1),
          anchorPosition: w,
          onInsertRowAbove: () => {
            const A = R.getSelectedView();
            R.insertRows(A.sheet, A.row, 1), C(!1);
          },
          onInsertRowBelow: () => {
            const A = R.getSelectedView();
            R.insertRows(A.sheet, A.row + 1, 1), C(!1);
          },
          onMoveRowUp: () => {
            const A = R.getSelectedView();
            R.moveRow(A.sheet, A.row, -1), C(!1);
          },
          onMoveRowDown: () => {
            const A = R.getSelectedView();
            R.moveRow(A.sheet, A.row, 1), C(!1);
          },
          onFreezeRows: () => {
            const A = R.getSelectedView();
            R.setFrozenRowsCount(A.sheet, A.row), C(!1);
          },
          onUnfreezeRows: () => {
            const A = R.getSelectedSheet();
            R.setFrozenRowsCount(A, 0), C(!1);
          },
          onDeleteRow: () => {
            const A = R.getSelectedView();
            R.deleteRows(A.sheet, A.row, 1), C(!1);
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
`, Nb = (e) => ({ onKeyDown: De(
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
      Cf(o) && (e.onNavigationToEdge(o), n.stopPropagation(), n.preventDefault());
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
      if (wf(o) || o === "Backspace") {
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
) }), Bb = (e) => {
  const { model: t, workbookState: n } = e, o = re(null), r = re(null), i = oe(0)[1], [s, a] = oe(!1), [c, f] = oe(_h), [h, m] = oe("namedRanges"), d = De((b) => {
    m(b), a(!0);
  }, []), g = t.getWorksheetsProperties().map(
    ({ name: b, color: j, sheet_id: L, state: B }) => ({ name: b, color: j || "#FFF", sheetId: L, state: B })
  ), p = De(() => {
    if (o.current) {
      o.current.focus({ preventScroll: !0 });
      const b = window.getSelection();
      if (b) {
        b.empty();
        const j = new Range();
        j.setStart(o.current.firstChild, 0), j.setEnd(o.current.firstChild, 0), b.addRange(j);
      }
    }
  }, []), y = () => {
    t.redo(), i((b) => b + 1);
  }, S = () => {
    t.undo(), i((b) => b + 1);
  }, T = (b, j) => {
    const {
      sheet: L,
      range: [B, K, Y, U]
    } = t.getSelectedView(), Z = Math.min(B, Y), Q = Math.min(K, U), q = {
      sheet: L,
      row: Z,
      column: Q,
      width: Math.abs(U - K) + 1,
      height: Math.abs(Y - B) + 1
    };
    t.updateRangeStyle(q, b, j), i((ee) => ee + 1);
  }, C = (b) => {
    T("font.u", `${b}`);
  }, w = (b) => {
    T("font.i", `${b}`);
  }, E = (b) => {
    T("font.b", `${b}`);
  }, _ = (b) => {
    T("font.strike", `${b}`);
  }, D = (b) => {
    T("alignment.horizontal", b);
  }, N = (b) => {
    T("alignment.vertical", b);
  }, R = (b) => {
    T("alignment.wrap_text", `${b}`);
  }, W = (b) => {
    T("font.color", b);
  }, F = (b) => {
    T("fill.fg_color", b);
  }, v = (b) => {
    T("num_fmt", b);
  }, I = (b) => {
    T("font.size_delta", `${b}`);
  }, P = () => {
    const {
      sheet: b,
      range: [j, L, B, K]
    } = t.getSelectedView(), Y = Math.min(j, B), U = Math.min(L, K), Z = Math.max(j, B), Q = Math.max(L, K), q = [];
    for (let H = Y; H <= Z; H++) {
      const ce = [];
      for (let de = U; de <= Q; de++)
        ce.push(t.getCellStyle(b, H, de));
      q.push(ce);
    }
    n.setCopyStyles(q);
    const ee = o.current?.getElementsByClassName("sheet-container")[0];
    if (ee) {
      const H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paint-roller" style="transform:rotate(-8deg)"><rect width="16" height="6" x="2" y="2" rx="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect width="4" height="6" x="8" y="16" rx="1"></rect></svg>';
      ee.style.cursor = `url('data:image/svg+xml;utf8,${encodeURIComponent(H)}'), auto`;
    }
  }, M = t.getFmtSettings(), { onKeyDown: z } = Nb({
    onCellsDeleted: () => {
      const {
        sheet: b,
        range: [j, L, B, K]
      } = t.getSelectedView(), Y = Math.min(j, B), U = Math.min(L, K), Z = Math.abs(K - L), Q = Math.abs(B - j);
      t.rangeClearContents(
        b,
        Y,
        U,
        Y + Q,
        U + Z
      ), i((q) => q + 1);
    },
    onExpandAreaSelectedKeyboard: (b) => {
      t.onExpandSelectedRange(b), i((j) => j + 1);
    },
    onEditKeyPressStart: (b) => {
      const { sheet: j, row: L, column: B } = t.getSelectedView(), K = t.getColumnWidth(j, B) * Qn, Y = t.getRowHeight(j, L) * Jn;
      n.setEditingCell({
        sheet: j,
        row: L,
        column: B,
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
      const { sheet: b, row: j, column: L } = t.getSelectedView(), B = t.getCellContent(b, j, L), K = t.getColumnWidth(b, L) * Qn, Y = t.getRowHeight(b, j) * Jn;
      n.setEditingCell({
        sheet: b,
        row: j,
        column: L,
        text: B,
        cursorStart: B.length,
        cursorEnd: B.length,
        referencedRange: null,
        focus: "cell",
        activeRanges: [],
        mode: "edit",
        editorWidth: K,
        editorHeight: Y
      }), i((U) => U + 1);
    },
    onBold: () => {
      const { sheet: b, row: j, column: L } = t.getSelectedView(), B = t.getCellStyle(b, j, L).font.b;
      E(!B);
    },
    onItalic: () => {
      const { sheet: b, row: j, column: L } = t.getSelectedView(), B = t.getCellStyle(b, j, L).font.i;
      w(!B);
    },
    onUnderline: () => {
      const { sheet: b, row: j, column: L } = t.getSelectedView(), B = t.getCellStyle(b, j, L).font.u;
      C(!B);
    },
    onNavigationToEdge: (b) => {
      t.onNavigateToEdgeInDirection(b), i((j) => j + 1);
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
      const b = t.getSelectedView(), j = t.getSelectedCell();
      t.setSelectedCell(j[1], 1), t.setTopLeftVisibleCell(b.top_row, 1), i((L) => L + 1);
    },
    onKeyEnd: () => {
      const b = t.getSelectedView(), j = t.getSelectedCell();
      t.setSelectedCell(j[1], Ae), t.setTopLeftVisibleCell(b.top_row, Ae - 5), i((L) => L + 1);
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
      b && (b.style.cursor = "auto"), i((j) => j + 1);
    },
    onSelectColumn: () => {
      const { column: b } = t.getSelectedView();
      t.setSelectedRange(1, b, ze, b), i((j) => j + 1);
    },
    onSelectRow: () => {
      const { row: b } = t.getSelectedView();
      t.setSelectedRange(b, 1, b, Ae), i((j) => j + 1);
    },
    root: o
  });
  Ne(() => {
    o.current && (n.getEditingCell() || p());
  });
  const J = De(() => {
    const {
      row: b,
      column: j,
      range: [L, B, K, Y]
    } = t.getSelectedView();
    return Ef(
      { rowStart: L, rowEnd: K, columnStart: B, columnEnd: Y },
      { row: b, column: j }
    );
  }, [t]), A = () => {
    if (n.getEditingCell())
      return n.getEditingText();
    const { sheet: j, row: L, column: B } = t.getSelectedView();
    return t.getCellContent(j, L, B);
  }, O = De(() => {
    const { sheet: b, row: j, column: L } = t.getSelectedView();
    return t.getCellStyle(b, j, L);
  }, [t])();
  return /* @__PURE__ */ l.jsxs(
    Lb,
    {
      ref: o,
      onKeyDown: z,
      tabIndex: 0,
      onClick: (b) => {
        n.getEditingCell() ? b.stopPropagation() : p();
      },
      onPaste: (b) => {
        n.clearCutRange();
        const { items: j } = b.clipboardData;
        if (!j)
          return;
        const L = [
          "application/json",
          "text/plain",
          "text/csv",
          "text/html"
        ];
        let B = null, K = null;
        for (let Y = 0; Y < L.length && (B = L[Y], K = b.clipboardData.getData(B), !K); Y += 1)
          ;
        if (!(!B || !K)) {
          if (B === "application/json") {
            const Y = JSON.parse(K), U = /* @__PURE__ */ new Map(), Z = Y.sheetData;
            for (const Q of Object.keys(Z)) {
              const q = Z[Q], ee = /* @__PURE__ */ new Map();
              for (const H of Object.keys(q))
                ee.set(Number.parseInt(H, 10), q[H]);
              U.set(Number.parseInt(Q, 10), ee);
            }
            t.pasteFromClipboard(
              Y.sheet,
              Y.area,
              U,
              Y.type === "cut"
            ), i((Q) => Q + 1);
          } else if (B === "text/plain") {
            const {
              sheet: Y,
              range: [U, Z, Q, q]
            } = t.getSelectedView(), ee = Math.min(U, Q), H = Math.min(Z, q), ce = {
              sheet: Y,
              row: ee,
              column: H,
              width: Math.abs(q - Z) + 1,
              height: Math.abs(Q - U) + 1
            };
            t.pasteCsvText(ce, K), i((de) => de + 1);
          }
          b.preventDefault(), b.stopPropagation();
        }
      },
      onCopy: (b) => {
        const j = t.copyToClipboard(), L = t.getSelectedSheet();
        let B = sessionStorage.getItem(
          Ro
        );
        B || (B = Ss(), sessionStorage.setItem(Ro, B));
        const K = {};
        j.data.forEach((U, Z) => {
          const Q = {};
          U.forEach((q, ee) => {
            Q[ee] = q;
          }), K[Z] = Q;
        });
        const Y = JSON.stringify({
          type: "copy",
          area: j.range,
          sheetData: K,
          sheet: L,
          clipboardId: B
        });
        b.clipboardData.setData("text/plain", j.csv.trim()), b.clipboardData.setData("application/json", Y), b.preventDefault(), b.stopPropagation();
      },
      onCut: (b) => {
        const j = t.copyToClipboard(), L = t.getSelectedSheet();
        let B = sessionStorage.getItem(
          Ro
        );
        B || (B = Ss(), sessionStorage.setItem(Ro, B));
        const K = {};
        j.data.forEach((U, Z) => {
          const Q = {};
          U.forEach((q, ee) => {
            Q[ee] = q;
          }), K[Z] = Q;
        });
        const Y = JSON.stringify({
          type: "cut",
          area: j.range,
          sheetData: K,
          sheet: L,
          clipboardId: B
        });
        b.clipboardData.setData("text/plain", j.csv), b.clipboardData.setData("application/json", Y), n.setCutRange({
          sheet: t.getSelectedSheet(),
          rowStart: j.range[0],
          rowEnd: j.range[2],
          columnStart: j.range[1],
          columnEnd: j.range[3]
        }), b.preventDefault(), b.stopPropagation(), i((U) => U + 1);
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
            onToggleStrike: _,
            onToggleHorizontalAlign: D,
            onToggleVerticalAlign: N,
            onToggleWrapText: R,
            onCopyStyles: P,
            onTextColorPicked: W,
            onFillColorPicked: F,
            onNumberFormatPicked: v,
            onClearFormatting: () => {
              const {
                sheet: b,
                range: [j, L, B, K]
              } = t.getSelectedView();
              t.rangeClearFormatting(
                b,
                j,
                L,
                B,
                K
              ), i((Y) => Y + 1);
            },
            onIncreaseFontSize: (b) => {
              I(b);
            },
            onDownloadPNG: () => {
              const b = r.current?.getCanvas();
              if (!b)
                return;
              const {
                range: [j, L, B, K]
              } = t.getSelectedView();
              let [Y, U] = b.getCoordinatesByCell(
                j,
                L
              );
              const [Z, Q] = b.getCoordinatesByCell(
                B + 1,
                K + 1
              ), q = (Z - Y) * Dt, ee = (Q - U) * Dt;
              Y *= Dt, U *= Dt;
              const H = document.createElement("canvas");
              H.width = q, H.height = ee;
              const ce = H.getContext("2d");
              if (!ce)
                return;
              ce.drawImage(
                b.canvas,
                Y,
                U,
                q,
                ee,
                0,
                0,
                q,
                ee
              );
              const de = document.createElement("a");
              de.href = H.toDataURL("image/png"), de.download = "ironcalc.png", de.click();
            },
            onBorderChanged: (b) => {
              const {
                sheet: j,
                range: [L, B, K, Y]
              } = t.getSelectedView(), U = Math.min(L, K), Z = Math.min(B, Y), Q = Math.abs(Y - B) + 1, q = Math.abs(K - L) + 1, ee = {
                type: b.border,
                item: b
              };
              t.setAreaWithBorder(
                { sheet: j, row: U, column: Z, width: Q, height: q },
                ee
              ), i((H) => H + 1);
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
              const j = t.getSelectedSheet();
              t.setShowGridLines(j, b), i((L) => L + 1);
            },
            formatOptions: M
          }
        ),
        /* @__PURE__ */ l.jsxs(zb, { $drawerWidth: s ? c : 0, children: [
          /* @__PURE__ */ l.jsx(
            Pf,
            {
              cellAddress: J(),
              formulaValue: A(),
              onChange: () => {
                i((b) => b + 1), p();
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
              sheets: g,
              selectedIndex: t.getSelectedSheet(),
              workbookState: n,
              onSheetSelected: (b) => {
                g[b].state !== "visible" && t.unhideSheet(b), t.setSelectedSheet(b), i((j) => j + 1);
              },
              onAddBlankSheet: () => {
                t.newSheet(), i((b) => b + 1);
              },
              onSheetColorChanged: (b) => {
                try {
                  t.setSheetColor(t.getSelectedSheet(), b), i((j) => j + 1);
                } catch (j) {
                  alert(`${j}`);
                }
              },
              onSheetRenamed: (b) => {
                try {
                  t.renameSheet(t.getSelectedSheet(), b), i((j) => j + 1);
                } catch (j) {
                  alert(`${j}`);
                }
              },
              onSheetDeleted: () => {
                const b = t.getSelectedSheet();
                t.deleteSheet(b), i((j) => j + 1);
              },
              onHideSheet: () => {
                const b = t.getSelectedSheet();
                t.hideSheet(b), i((j) => j + 1);
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
            width: c,
            onWidthChange: f,
            model: t,
            onUpdate: () => {
              i((b) => b + 1);
            },
            getSelectedArea: () => {
              const b = t.getWorksheetsProperties().map((L) => L.name), j = t.getSelectedView();
              return bl(j, b);
            },
            drawerType: h,
            initialLocale: t.getLocale(),
            initialTimezone: t.getTimezone(),
            initialLanguage: t.getLanguage(),
            onSettingsSave: (b, j, L) => {
              t.setLocale(b), t.setTimezone(j), t.setLanguage(L), i((B) => B + 1);
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
`, Hb = { redo: "Wiederholen", undo: "Rückgängig", copy_styles: "Formatierung kopieren", clear_formatting: "Formatierung löschen", euro: "Als Euro formatieren", percentage: "Als Prozent formatieren", bold: "Fett", italic: "Kursiv", underline: "Unterstrichen", strike_through: "Durchgestrichen", align_left: "Links ausrichten", align_right: "Rechts ausrichten", align_center: "Zentrieren", format_number: "Zahlenformat", font_color: "Schriftfarbe", fill_color: "Füllfarbe", increase_font_size: "Schriftgröße erhöhen", decrease_font_size: "Schriftgröße verringern", decimal_places_increase: "Dezimalstellen erhöhen", decimal_places_decrease: "Dezimalstellen verringern", show_hide_grid_lines: "Gitternetzlinien ein-/ausblenden", named_ranges: "Benannte Bereiche", vertical_align_bottom: "Unten ausrichten", vertical_align_middle: "Mittig ausrichten", vertical_align_top: "Oben ausrichten", selected_png: "Ausgewählten Bereich als PNG exportieren", wrap_text: "Text umbrechen", scroll_left: "Nach links scrollen", scroll_right: "Nach rechts scrollen", format_menu: { auto: "Automatisch", number: "Zahl", percentage: "Prozent", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "Britisches Pfund (GBP)", date_short: "Kurzes Datum", date_long: "Langes Datum", custom: "Benutzerdefiniert", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Rahmen", all: "Alle Rahmen", inner: "Innere Rahmen", outer: "Äußere Rahmen", top: "Oberer Rahmen", bottom: "Unterer Rahmen", clear: "Rahmen entfernen", left: "Linker Rahmen", right: "Rechter Rahmen", horizontal: "Horizontale Rahmen", vertical: "Vertikale Rahmen", color: "Rahmenfarbe", style: "Rahmenstil" } }, Vb = { title: "Benutzerdefiniertes Zahlenformat", label: "Zahlenformat", close: "Dialog schließen", save: "Speichern" }, Wb = { rename: "Speichern", label: "Neuer Name", title: "Tabellenblatt umbenennen", close: "Dialog schließen" }, Ub = { title: "Bist du sicher?", message: "Das Tabellenblatt '{{sheetName}}' wird gelöscht.", confirm: "Ja, Tabellenblatt löschen", cancel: "Abbrechen" }, Gb = { rename: "Umbenennen", change_color: "Farbe ändern", delete: "Löschen", hide_sheet: "Tabellenblatt ausblenden" }, Yb = { update: "Aktualisieren", label: "Formel", title: "Formel aktualisieren" }, qb = { manage_named_ranges: "Benannte Bereiche verwalten" }, Kb = { add_sheet: "Tabellenblatt hinzufügen", sheet_list: "Tabellenblattliste" }, Xb = { title: "Benannte Bereiche", empty_message1: "Es wurden noch keine benannten Bereiche hinzugefügt.", empty_message2: "Klicke auf „Neu hinzufügen“, um einen anzulegen.", name: "Name", range: "Geltungsbereich", scope: "Bereich", help: "Über benannte Bereiche", new: "Neu hinzufügen", workbook: "Arbeitsmappe", global: "(Global)", close: "Dialog schließen", delete: "Bereich löschen", edit: "Bereich bearbeiten", back_to_list: "Zurück zur Liste", add_new_range: "Neuen Bereich hinzufügen", edit_range: "Bereich bearbeiten", new_named_range: "Neuer benannter Bereich", range_name: "Bereichsname", enter_range_name: "Bereichsnamen eingeben", scope_label: "Geltungsbereich", scope_helper: "Der Geltungsbereich bestimmt, wo der benannte Bereich verfügbar ist.", refers_to: "Bezieht sich auf", enter_formula: "Formel eingeben", cancel: "Abbrechen", apply: "Änderungen übernehmen", discard: "Änderungen verwerfen", default_range_prefix: "Bereich", errors: { range_name_required: "Der Bereichsname ist erforderlich", name_cannot_contain_spaces: "Der Name darf keine Leerzeichen enthalten", name_cannot_start_with_number: "Der Name darf nicht mit einer Zahl beginnen", name_invalid_characters: "Der Name enthält ungültige Zeichen. Verwende nur Buchstaben, Zahlen, Unterstriche und Punkte. Muss mit einem Buchstaben oder Unterstrich beginnen.", name_already_exists: "Dieser Name existiert bereits im ausgewählten Geltungsbereich" } }, Zb = { insert_row_above: "1 Zeile oberhalb einfügen", insert_row_below: "1 Zeile unterhalb einfügen", insert_column_before: "1 Spalte links einfügen", insert_column_after: "1 Spalte rechts einfügen", freeze_columns: "Bis Spalte '{{column}}' fixieren", freeze_rows: "Bis Zeile '{{row}}' fixieren", unfreeze_rows: "Fixierung der Zeilen aufheben", unfreeze_columns: "Fixierung der Spalten aufheben", delete_row: "Zeile '{{row}}' löschen", delete_column: "Spalte '{{column}}' löschen", freeze: "Fixieren", insert_row: "Zeile einfügen", insert_column: "Spalte einfügen", move_row: "Zeile verschieben", move_column: "Spalte verschieben", move_row_up: "Zeile nach oben verschieben", move_row_down: "Zeile nach unten verschieben", move_column_left: "Spalte nach links verschieben", move_column_right: "Spalte nach rechts verschieben" }, Jb = { apply: "Farbe hinzufügen", cancel: "Abbrechen", add: "Neue Farbe hinzufügen", default: "Standardfarbe", no_fill: "Keine Füllung", recent: "Zuletzt verwendet" }, Qb = { resize_drawer: "Größe der Seitenleiste ändern", close: "Schließen" }, e1 = { open_regional_settings: "Regionaleinstellungen öffnen", title: "Regionaleinstellungen", close: "Dialog schließen", locale: { title: "Regionaleinstellung", locale_label: "Regionaleinstellung", locale_example1: "Zahl", locale_example2: "Datum und Uhrzeit", locale_example3: "Formeltrennzeichen", delimiter_comma: "Komma", delimiter_semicolon: "Semikolon" }, language: { title: "Sprache", language_label: "Engine-Sprache", language_helper: "Legt die Sprache für Funktionsnamen und Fehlermeldungen fest.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Englisch", es: "Spanisch", fr: "Französisch", de: "Deutsch", it: "Italienisch" } }, timezone: { title: "Zeitzone", timezone_label: "Zeitzone", timezone_helper: "Das Ändern dieser Einstellung wirkt sich auf datums- und zeitbezogene Funktionen aus, einschließlich HEUTE() und JETZT()." } }, t1 = {
  toolbar: Hb,
  num_fmt: Vb,
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
}, j1 = { redo: "Rétablir", undo: "Annuler", copy_styles: "Copier les styles", clear_formatting: "Effacer la mise en forme", euro: "Format Euro", percentage: "Format pourcentage", bold: "Gras", italic: "Italique", underline: "Souligné", strike_through: "Barré", align_left: "Aligner à gauche", align_right: "Aligner à droite", align_center: "Centrer", format_number: "Format de nombre", font_color: "Couleur de police", fill_color: "Couleur de remplissage", increase_font_size: "Augmenter la taille de la police", decrease_font_size: "Diminuer la taille de la police", decimal_places_increase: "Augmenter les décimales", decimal_places_decrease: "Diminuer les décimales", show_hide_grid_lines: "Afficher/masquer le quadrillage", named_ranges: "Plages nommées", vertical_align_bottom: "Aligner en bas", vertical_align_middle: "Aligner au milieu", vertical_align_top: "Aligner en haut", selected_png: "Exporter la zone sélectionnée en PNG", wrap_text: "Renvoyer à la ligne", scroll_left: "Faire défiler vers la gauche", scroll_right: "Faire défiler vers la droite", format_menu: { auto: "Automatique", number: "Nombre", percentage: "Pourcentage", currency_eur: "Euro (EUR)", currency_usd: "Dollar (USD)", currency_gbp: "Livre sterling (GBP)", date_short: "Date courte", date_long: "Date longue", custom: "Personnalisé", number_example: "1 000,00", percentage_example: "10 %", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordures", all: "Toutes les bordures", inner: "Bordures intérieures", outer: "Bordures extérieures", top: "Bordures supérieures", bottom: "Bordures inférieures", clear: "Supprimer les bordures", left: "Bordures gauches", right: "Bordures droites", horizontal: "Bordures horizontales", vertical: "Bordures verticales", color: "Couleur de bordure", style: "Style de bordure" } }, $1 = { title: "Format de nombre personnalisé", label: "Format de nombre", close: "Fermer la boîte de dialogue", save: "Enregistrer" }, P1 = { rename: "Enregistrer", label: "Nouveau nom", title: "Renommer la feuille", close: "Fermer la boîte de dialogue" }, O1 = { title: "Êtes-vous sûr ?", message: "La feuille « {{sheetName}} » sera supprimée.", confirm: "Oui, supprimer la feuille", cancel: "Annuler" }, M1 = { rename: "Renommer", change_color: "Changer la couleur", delete: "Supprimer", hide_sheet: "Masquer la feuille" }, A1 = { update: "Mettre à jour", label: "Formule", title: "Mettre à jour la formule" }, D1 = { manage_named_ranges: "Gérer les plages nommées" }, I1 = { add_sheet: "Ajouter une feuille", sheet_list: "Liste des feuilles" }, F1 = { title: "Plages nommées", empty_message1: "Aucune plage nommée n’a encore été ajoutée.", empty_message2: "Cliquez sur « Ajouter » pour en créer une.", name: "Nom", range: "Portée", scope: "Plage", help: "À propos des plages nommées", new: "Ajouter", workbook: "Classeur", global: "(Global)", close: "Fermer la boîte de dialogue", delete: "Supprimer la plage", edit: "Modifier la plage", back_to_list: "Retour à la liste", add_new_range: "Ajouter une nouvelle plage", edit_range: "Modifier la plage", new_named_range: "Nouvelle plage nommée", range_name: "Nom de la plage", enter_range_name: "Saisir le nom de la plage", scope_label: "Portée", scope_helper: "La portée de la plage nommée détermine où elle est disponible.", refers_to: "Fait référence à", enter_formula: "Saisir la formule", cancel: "Annuler", apply: "Appliquer les modifications", discard: "Annuler les modifications", default_range_prefix: "Plage", errors: { range_name_required: "Le nom de la plage est obligatoire", name_cannot_contain_spaces: "Le nom ne peut pas contenir d’espaces", name_cannot_start_with_number: "Le nom ne peut pas commencer par un chiffre", name_invalid_characters: "Le nom contient des caractères non valides. Utilisez uniquement des lettres, chiffres, traits de soulignement et points. Il doit commencer par une lettre ou un trait de soulignement.", name_already_exists: "Ce nom existe déjà dans la portée sélectionnée" } }, N1 = { insert_row_above: "Insérer 1 ligne au-dessus", insert_row_below: "Insérer 1 ligne en dessous", insert_column_before: "Insérer 1 colonne à gauche", insert_column_after: "Insérer 1 colonne à droite", freeze_columns: "Figer jusqu’à la colonne « {{column}} »", freeze_rows: "Figer jusqu’à la ligne « {{row}} »", unfreeze_rows: "Libérer les lignes", unfreeze_columns: "Libérer les colonnes", delete_row: "Supprimer la ligne « {{row}} »", delete_column: "Supprimer la colonne « {{column}} »", freeze: "Figer", insert_row: "Insérer une ligne", insert_column: "Insérer une colonne", move_row: "Déplacer la ligne", move_column: "Déplacer la colonne", move_row_up: "Déplacer la ligne vers le haut", move_row_down: "Déplacer la ligne vers le bas", move_column_left: "Déplacer la colonne vers la gauche", move_column_right: "Déplacer la colonne vers la droite" }, B1 = { apply: "Ajouter la couleur", cancel: "Annuler", add: "Ajouter une nouvelle couleur", default: "Couleur par défaut", no_fill: "Sans remplissage", recent: "Récentes" }, z1 = { resize_drawer: "Redimensionner le panneau", close: "Fermer" }, L1 = { open_regional_settings: "Ouvrir les paramètres régionaux", title: "Paramètres régionaux", close: "Fermer la boîte de dialogue", locale: { title: "Paramètres régionaux", locale_label: "Paramètres régionaux", locale_example1: "Nombre", locale_example2: "Date et heure", locale_example3: "Délimiteur de formule", delimiter_comma: "Virgule", delimiter_semicolon: "Point-virgule" }, language: { title: "Langue", language_label: "Langue du moteur", language_helper: "Contrôle la langue utilisée pour les noms de fonctions et les messages d’erreur.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Anglais", es: "Espagnol", fr: "Français", de: "Allemand", it: "Italien" } }, timezone: { title: "Fuseau horaire", timezone_label: "Fuseau horaire", timezone_helper: "Modifier ce paramètre aura un impact sur les fonctions liées à la date et à l’heure, y compris AUJOURDHUI() et MAINTENANT()." } }, H1 = {
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
}, V1 = { redo: "Ripeti", undo: "Annulla", copy_styles: "Copia stili", clear_formatting: "Cancella formattazione", euro: "Formato Euro", percentage: "Formato percentuale", bold: "Grassetto", italic: "Corsivo", underline: "Sottolineato", strike_through: "Barrato", align_left: "Allinea a sinistra", align_right: "Allinea a destra", align_center: "Allinea al centro", format_number: "Formato numero", font_color: "Colore carattere", fill_color: "Colore riempimento", increase_font_size: "Aumenta dimensione carattere", decrease_font_size: "Riduci dimensione carattere", decimal_places_increase: "Aumenta decimali", decimal_places_decrease: "Riduci decimali", show_hide_grid_lines: "Mostra/nascondi griglia", named_ranges: "Intervalli denominati", vertical_align_bottom: "Allinea in basso", vertical_align_middle: "Allinea al centro", vertical_align_top: "Allinea in alto", selected_png: "Esporta area selezionata come PNG", wrap_text: "Testo a capo", scroll_left: "Scorri a sinistra", scroll_right: "Scorri a destra", format_menu: { auto: "Automatico", number: "Numero", percentage: "Percentuale", currency_eur: "Euro (EUR)", currency_usd: "Dollaro (USD)", currency_gbp: "Sterlina britannica (GBP)", date_short: "Data breve", date_long: "Data lunga", custom: "Personalizzato", number_example: "1.000,00", percentage_example: "10%", currency_eur_example: "€", currency_usd_example: "$", currency_gbp_example: "£" }, borders: { title: "Bordi", all: "Tutti i bordi", inner: "Bordi interni", outer: "Bordi esterni", top: "Bordi superiori", bottom: "Bordi inferiori", clear: "Rimuovi bordi", left: "Bordi sinistri", right: "Bordi destri", horizontal: "Bordi orizzontali", vertical: "Bordi verticali", color: "Colore bordo", style: "Stile bordo" } }, W1 = { title: "Formato numero personalizzato", label: "Formato numero", close: "Chiudi finestra", save: "Salva" }, U1 = { rename: "Salva", label: "Nuovo nome", title: "Rinomina foglio", close: "Chiudi finestra" }, G1 = { title: "Sei sicuro?", message: "Il foglio '{{sheetName}}' verrà eliminato.", confirm: "Sì, elimina foglio", cancel: "Annulla" }, Y1 = { rename: "Rinomina", change_color: "Cambia colore", delete: "Elimina", hide_sheet: "Nascondi foglio" }, q1 = { update: "Aggiorna", label: "Formula", title: "Aggiorna formula" }, K1 = { manage_named_ranges: "Gestisci intervalli denominati" }, X1 = { add_sheet: "Aggiungi foglio", sheet_list: "Elenco fogli" }, Z1 = { title: "Intervalli denominati", empty_message1: "Non sono ancora stati aggiunti intervalli denominati.", empty_message2: 'Fai clic su "Aggiungi nuovo" per crearne uno.', name: "Nome", range: "Ambito", scope: "Intervallo", help: "Informazioni sugli intervalli denominati", new: "Aggiungi nuovo", workbook: "Cartella di lavoro", global: "(Globale)", close: "Chiudi finestra", delete: "Elimina intervallo", edit: "Modifica intervallo", back_to_list: "Torna alla lista", add_new_range: "Aggiungi nuovo intervallo", edit_range: "Modifica intervallo", new_named_range: "Nuovo intervallo denominato", range_name: "Nome intervallo", enter_range_name: "Inserisci nome intervallo", scope_label: "Ambito", scope_helper: "L'ambito dell'intervallo denominato determina dove è disponibile.", refers_to: "Fa riferimento a", enter_formula: "Inserisci formula", cancel: "Annulla", apply: "Applica modifiche", discard: "Annulla modifiche", default_range_prefix: "Intervallo", errors: { range_name_required: "Il nome dell'intervallo è obbligatorio", name_cannot_contain_spaces: "Il nome non può contenere spazi", name_cannot_start_with_number: "Il nome non può iniziare con un numero", name_invalid_characters: "Il nome contiene caratteri non validi. Usa solo lettere, numeri, underscore e punti. Deve iniziare con una lettera o underscore.", name_already_exists: "Questo nome esiste già nell'ambito selezionato" } }, J1 = { insert_row_above: "Inserisci 1 riga sopra", insert_row_below: "Inserisci 1 riga sotto", insert_column_before: "Inserisci 1 colonna a sinistra", insert_column_after: "Inserisci 1 colonna a destra", freeze_columns: "Blocca fino alla colonna '{{column}}'", freeze_rows: "Blocca fino alla riga '{{row}}'", unfreeze_rows: "Sblocca righe", unfreeze_columns: "Sblocca colonne", delete_row: "Elimina riga '{{row}}'", delete_column: "Elimina colonna '{{column}}'", freeze: "Blocca", insert_row: "Inserisci riga", insert_column: "Inserisci colonna", move_row: "Sposta riga", move_column: "Sposta colonna", move_row_up: "Sposta riga in alto", move_row_down: "Sposta riga in basso", move_column_left: "Sposta colonna a sinistra", move_column_right: "Sposta colonna a destra" }, Q1 = { apply: "Aggiungi colore", cancel: "Annulla", add: "Aggiungi nuovo colore", default: "Colore predefinito", no_fill: "Nessun riempimento", recent: "Recenti" }, ey = { resize_drawer: "Ridimensiona pannello", close: "Chiudi" }, ty = { open_regional_settings: "Apri impostazioni regionali", title: "Impostazioni regionali", close: "Chiudi finestra", locale: { title: "Impostazioni locali", locale_label: "Impostazioni locali", locale_example1: "Numero", locale_example2: "Data e ora", locale_example3: "Separatore formule", delimiter_comma: "Virgola", delimiter_semicolon: "Punto e virgola" }, language: { title: "Lingua", language_label: "Lingua del motore", language_helper: "Controlla la lingua usata nei nomi delle funzioni e nei messaggi di errore.", display_language: { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano" }, display_language_current_lang: { en: "Inglese", es: "Spagnolo", fr: "Francese", de: "Tedesco", it: "Italiano" } }, timezone: { title: "Fuso orario", timezone_label: "Fuso orario", timezone_helper: "La modifica di questa impostazione influirà sulle funzioni relative a data e ora, incluse ADESSO() e OGGI()." } }, ny = {
  toolbar: V1,
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
  "fr-FR": { translation: H1 },
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
  })), /* @__PURE__ */ l.jsx(Ac, { theme: $, children: /* @__PURE__ */ l.jsx(Dc, { i18n: Lo, children: /* @__PURE__ */ l.jsx(
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
