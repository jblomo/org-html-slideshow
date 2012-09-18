function e(a) {
  throw a;
}
var g = void 0, l = !0, m = null, n = !1;
function aa() {
  return function(a) {
    return a
  }
}
function o(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = this;
function ca(a) {
  for(var a = a.split("."), b = ba, c;c = a.shift();) {
    if(b[c] != m) {
      b = b[c]
    }else {
      return m
    }
  }
  return b
}
function da() {
}
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return a !== g
}
function ea(a) {
  return"array" == s(a)
}
function fa(a) {
  var b = s(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
  return"string" == typeof a
}
function ha(a) {
  return"function" == s(a)
}
function ia(a) {
  a = s(a);
  return"object" == a || "array" == a || "function" == a
}
function ka(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
  var d = b || ba;
  if(2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, f);
      return a.apply(d, b)
    }
  }
  return function() {
    return a.apply(d, arguments)
  }
}
function pa(a, b, c) {
  pa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return pa.apply(m, arguments)
}
function qa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var sa = Date.now || function() {
  return+new Date
};
function ta(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.jb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ua(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var va = /(\.\d+)|(\d+)|(\D+)/g;
function wa(a, b) {
  if(a == b) {
    return 0
  }
  if(!a) {
    return-1
  }
  if(!b) {
    return 1
  }
  for(var c = a.toLowerCase().match(va), d = b.toLowerCase().match(va), f = Math.min(c.length, d.length), h = 0;h < f;h++) {
    var i = c[h], j = d[h];
    if(i != j) {
      return c = parseInt(i, 10), !isNaN(c) && (d = parseInt(j, 10), !isNaN(d) && c - d) ? c - d : i < j ? -1 : 1
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
}
var xa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ya(a) {
  a = "" + a;
  return!xa.test(a) ? encodeURIComponent(a) : a
}
function za(a) {
  if(!Aa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Da, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
  return a
}
var Ba = /&/g, Ca = /</g, Da = />/g, Fa = /\"/g, Aa = /[&<>\"]/, Ga = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, Ha = {"'":"\\'"};
function Ia(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), h = b, i = c + 1, j;
    if(!(j = Ga[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in Ha) {
          d = Ha[d]
        }else {
          if(d in Ga) {
            d = Ha[d] = Ga[d]
          }else {
            f = d;
            j = d.charCodeAt(0);
            if(31 < j && 127 > j) {
              f = d
            }else {
              if(256 > j) {
                if(f = "\\x", 16 > j || 256 < j) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > j && (f += "0")
              }
              f += j.toString(16).toUpperCase()
            }
            d = Ha[d] = f
          }
        }
      }
      j = d
    }
    h[i] = j
  }
  b.push('"');
  return b.join("")
}
function Ja(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = Math.max(d.length, f.length), i = 0;0 == c && i < h;i++) {
    var j = d[i] || "", k = f[i] || "", r = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var u = r.exec(j) || ["", "", ""], y = x.exec(k) || ["", "", ""];
      if(0 == u[0].length && 0 == y[0].length) {
        break
      }
      c = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == y[2].length) ? -1 : (0 == u[2].length) > (0 == y[2].length) ? 1 : 0) || (u[2] < y[2] ? -1 : u[2] > y[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function Ka(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
var La = {};
function Ma(a) {
  return La[a] || (La[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Na(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
ta(Na, Error);
Na.prototype.name = "CustomError";
function Oa(a, b) {
  b.unshift(a);
  Na.call(this, ua.apply(m, b));
  b.shift()
}
ta(Oa, Na);
Oa.prototype.name = "AssertionError";
function Pa(a, b) {
  e(new Oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Qa = Array.prototype, Ra = Qa.indexOf ? function(a, b, c) {
  return Qa.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Sa = Qa.forEach ? function(a, b, c) {
  Qa.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
};
function Ta(a) {
  return Qa.concat.apply(Qa, arguments)
}
function Ua(a) {
  if(ea(a)) {
    return Ta(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function Va(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ea(d) || (f = fa(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var h = a.length, i = d.length, j = 0;j < i;j++) {
          a[h + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function Wa(a, b, c, d) {
  Qa.splice.apply(a, Xa(arguments, 1))
}
function Xa(a, b, c) {
  return 2 >= arguments.length ? Qa.slice.call(a, b) : Qa.slice.call(a, b, c)
}
;function Ya(a, b) {
  for(var c in a) {
    b.call(g, a[c], c, a)
  }
}
function Za(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function $a(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function ab(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function cb(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var h = 0;h < bb.length;h++) {
      c = bb[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var db, eb, fb, gb, hb, ib = (hb = "ScriptEngine" in ba && "JScript" == ba.ScriptEngine()) ? ba.ScriptEngineMajorVersion() + "." + ba.ScriptEngineMinorVersion() + "." + ba.ScriptEngineBuildVersion() : "0";
function kb(a, b) {
  this.$ = hb ? [] : "";
  a != m && this.append.apply(this, arguments)
}
kb.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
hb ? (kb.prototype.Lb = 0, kb.prototype.append = function(a, b, c) {
  b == m ? this.$[this.Lb++] = a : (this.$.push.apply(this.$, arguments), this.Lb = this.$.length);
  return this
}) : kb.prototype.append = function(a, b, c) {
  this.$ += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.$ += arguments[d]
    }
  }
  return this
};
kb.prototype.clear = function() {
  if(hb) {
    this.Lb = this.$.length = 0
  }else {
    this.$ = ""
  }
};
kb.prototype.toString = function() {
  if(hb) {
    var a = this.$.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.$
};
g;
g;
g;
g;
g;
g;
function w(a) {
  return a != m && a !== n
}
g;
function z(a, b) {
  return a[s(b)] ? l : a._ ? l : n
}
g;
function A(a, b) {
  return Error(["No protocol method ", a, " defined for type ", s(b), ": ", b].join(""))
}
var lb = function() {
  var a = m, a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.b(c)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.b = function(a) {
    return Array(a)
  };
  a.a = function(b, c) {
    return a.b(c)
  };
  return a
}();
g;
g;
g;
g;
g;
var mb = {};
function nb(a) {
  if(a ? a.w : a) {
    a = a.w(a)
  }else {
    var b;
    var c = nb[s(a)];
    c ? b = c : (c = nb._) ? b = c : e(A("ICounted.-count", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
function ob(a, b) {
  var c;
  if(a ? a.D : a) {
    c = a.D(a, b)
  }else {
    var d = ob[s(a)];
    d ? c = d : (d = ob._) ? c = d : e(A("ICollection.-conj", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
var pb = {}, B = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      a = a.L(a, b, c)
    }else {
      var i;
      var j = B[s(a)];
      j ? i = j : (j = B._) ? i = j : e(A("IIndexed.-nth", a));
      a = i.call(m, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.Q : a) {
      c = a.Q(a, b)
    }else {
      var i = B[s(a)];
      i ? c = i : (i = B._) ? c = i : e(A("IIndexed.-nth", a));
      c = c.call(m, a, b)
    }
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
var qb = {};
g;
g;
var rb = {};
function C(a) {
  if(a ? a.X : a) {
    a = a.X(a)
  }else {
    var b;
    var c = C[s(a)];
    c ? b = c : (c = C._) ? b = c : e(A("ISeq.-first", a));
    a = b.call(m, a)
  }
  return a
}
function D(a) {
  if(a ? a.T : a) {
    a = a.T(a)
  }else {
    var b;
    var c = D[s(a)];
    c ? b = c : (c = D._) ? b = c : e(A("ISeq.-rest", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var sb = {};
function tb(a) {
  if(a ? a.ya : a) {
    a = a.ya(a)
  }else {
    var b;
    var c = tb[s(a)];
    c ? b = c : (c = tb._) ? b = c : e(A("INext.-next", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var E = function() {
  function a(a, b, c) {
    if(a ? a.r : a) {
      a = a.r(a, b, c)
    }else {
      var i;
      var j = E[s(a)];
      j ? i = j : (j = E._) ? i = j : e(A("ILookup.-lookup", a));
      a = i.call(m, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.B : a) {
      c = a.B(a, b)
    }else {
      var i = E[s(a)];
      i ? c = i : (i = E._) ? c = i : e(A("ILookup.-lookup", a));
      c = c.call(m, a, b)
    }
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
function ub(a, b) {
  var c;
  if(a ? a.Ua : a) {
    c = a.Ua(a, b)
  }else {
    var d = ub[s(a)];
    d ? c = d : (d = ub._) ? c = d : e(A("IAssociative.-contains-key?", a));
    c = c.call(m, a, b)
  }
  return c
}
function vb(a, b, c) {
  if(a ? a.P : a) {
    a = a.P(a, b, c)
  }else {
    var d;
    var f = vb[s(a)];
    f ? d = f : (f = vb._) ? d = f : e(A("IAssociative.-assoc", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
var wb = {};
function xb(a, b) {
  var c;
  if(a ? a.Wa : a) {
    c = a.Wa(a, b)
  }else {
    var d = xb[s(a)];
    d ? c = d : (d = xb._) ? c = d : e(A("IMap.-dissoc", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
var yb = {};
function zb(a) {
  if(a ? a.Eb : a) {
    a = a.Eb(a)
  }else {
    var b;
    var c = zb[s(a)];
    c ? b = c : (c = zb._) ? b = c : e(A("IMapEntry.-key", a));
    a = b.call(m, a)
  }
  return a
}
function Ab(a) {
  if(a ? a.Fb : a) {
    a = a.Fb(a)
  }else {
    var b;
    var c = Ab[s(a)];
    c ? b = c : (c = Ab._) ? b = c : e(A("IMapEntry.-val", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Bb = {};
g;
g;
function Cb(a) {
  if(a ? a.oa : a) {
    a = a.oa(a)
  }else {
    var b;
    var c = Cb[s(a)];
    c ? b = c : (c = Cb._) ? b = c : e(A("IStack.-peek", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Db = {};
function Eb(a, b, c) {
  if(a ? a.Za : a) {
    a = a.Za(a, b, c)
  }else {
    var d;
    var f = Eb[s(a)];
    f ? d = f : (f = Eb._) ? d = f : e(A("IVector.-assoc-n", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
function F(a) {
  if(a ? a.Db : a) {
    a = a.Db(a)
  }else {
    var b;
    var c = F[s(a)];
    c ? b = c : (c = F._) ? b = c : e(A("IDeref.-deref", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
var Fb = {};
function Gb(a) {
  if(a ? a.I : a) {
    a = a.I(a)
  }else {
    var b;
    var c = Gb[s(a)];
    c ? b = c : (c = Gb._) ? b = c : e(A("IMeta.-meta", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
function Hb(a, b) {
  var c;
  if(a ? a.K : a) {
    c = a.K(a, b)
  }else {
    var d = Hb[s(a)];
    d ? c = d : (d = Hb._) ? c = d : e(A("IWithMeta.-with-meta", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
var Ib = {}, Jb = function() {
  function a(a, b, c) {
    if(a ? a.na : a) {
      a = a.na(a, b, c)
    }else {
      var i;
      var j = Jb[s(a)];
      j ? i = j : (j = Jb._) ? i = j : e(A("IReduce.-reduce", a));
      a = i.call(m, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.ma : a) {
      c = a.ma(a, b)
    }else {
      var i = Jb[s(a)];
      i ? c = i : (i = Jb._) ? c = i : e(A("IReduce.-reduce", a));
      c = c.call(m, a, b)
    }
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
g;
g;
function Kb(a, b) {
  var c;
  if(a ? a.A : a) {
    c = a.A(a, b)
  }else {
    var d = Kb[s(a)];
    d ? c = d : (d = Kb._) ? c = d : e(A("IEquiv.-equiv", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
function Lb(a) {
  if(a ? a.F : a) {
    a = a.F(a)
  }else {
    var b;
    var c = Lb[s(a)];
    c ? b = c : (c = Lb._) ? b = c : e(A("IHash.-hash", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Mb = {};
function Nb(a) {
  if(a ? a.z : a) {
    a = a.z(a)
  }else {
    var b;
    var c = Nb[s(a)];
    c ? b = c : (c = Nb._) ? b = c : e(A("ISeqable.-seq", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var Ob = {};
g;
g;
g;
g;
g;
g;
var Pb = {};
function Qb(a) {
  if(a ? a.mb : a) {
    a = a.mb(a)
  }else {
    var b;
    var c = Qb[s(a)];
    c ? b = c : (c = Qb._) ? b = c : e(A("IReversible.-rseq", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
var Rb = {};
function Sb(a, b) {
  var c;
  if(a ? a.C : a) {
    c = a.C(a, b)
  }else {
    var d = Sb[s(a)];
    d ? c = d : (d = Sb._) ? c = d : e(A("IPrintable.-pr-seq", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
g;
g;
function Tb(a, b, c) {
  if(a ? a.Gc : a) {
    a = a.Gc(a, b, c)
  }else {
    var d;
    var f = Tb[s(a)];
    f ? d = f : (f = Tb._) ? d = f : e(A("IWatchable.-notify-watches", a));
    a = d.call(m, a, b, c)
  }
  return a
}
function Ub(a, b, c) {
  if(a ? a.Fc : a) {
    a = a.Fc(a, b, c)
  }else {
    var d;
    var f = Ub[s(a)];
    f ? d = f : (f = Ub._) ? d = f : e(A("IWatchable.-add-watch", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
var Vb = {};
function Wb(a) {
  if(a ? a.Va : a) {
    a = a.Va(a)
  }else {
    var b;
    var c = Wb[s(a)];
    c ? b = c : (c = Wb._) ? b = c : e(A("IEditableCollection.-as-transient", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
function Xb(a, b) {
  var c;
  if(a ? a.Ya : a) {
    c = a.Ya(a, b)
  }else {
    var d = Xb[s(a)];
    d ? c = d : (d = Xb._) ? c = d : e(A("ITransientCollection.-conj!", a));
    c = c.call(m, a, b)
  }
  return c
}
function Yb(a) {
  if(a ? a.nb : a) {
    a = a.nb(a)
  }else {
    var b;
    var c = Yb[s(a)];
    c ? b = c : (c = Yb._) ? b = c : e(A("ITransientCollection.-persistent!", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
function Zb(a, b, c) {
  if(a ? a.Xa : a) {
    a = a.Xa(a, b, c)
  }else {
    var d;
    var f = Zb[s(a)];
    f ? d = f : (f = Zb._) ? d = f : e(A("ITransientAssociative.-assoc!", a));
    a = d.call(m, a, b, c)
  }
  return a
}
g;
g;
g;
g;
g;
g;
g;
g;
var $b = {};
function ac(a, b) {
  var c;
  if(a ? a.Cc : a) {
    c = a.Cc(a, b)
  }else {
    var d = ac[s(a)];
    d ? c = d : (d = ac._) ? c = d : e(A("IComparable.-compare", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
g;
function bc(a) {
  if(a ? a.zc : a) {
    a = a.zc()
  }else {
    var b;
    var c = bc[s(a)];
    c ? b = c : (c = bc._) ? b = c : e(A("IChunk.-drop-first", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
var cc = {};
function dc(a) {
  if(a ? a.Pb : a) {
    a = a.Pb(a)
  }else {
    var b;
    var c = dc[s(a)];
    c ? b = c : (c = dc._) ? b = c : e(A("IChunkedSeq.-chunked-first", a));
    a = b.call(m, a)
  }
  return a
}
function ec(a) {
  if(a ? a.Cb : a) {
    a = a.Cb(a)
  }else {
    var b;
    var c = ec[s(a)];
    c ? b = c : (c = ec._) ? b = c : e(A("IChunkedSeq.-chunked-rest", a));
    a = b.call(m, a)
  }
  return a
}
g;
g;
g;
g;
g;
var M = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : Kb(a, b)
  }
  var b = m, c = function() {
    function a(b, d, j) {
      var k = m;
      t(j) && (k = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      for(;;) {
        if(w(b.a(a, d))) {
          if(I(f)) {
            a = d, d = J(f), f = I(f)
          }else {
            return b.a(d, J(f))
          }
        }else {
          return n
        }
      }
    }
    a.o = 2;
    a.n = function(a) {
      var b = J(a), d = J(I(a)), a = K(I(a));
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return l;
      case 2:
        return a.call(this, b, f);
      default:
        return c.g(b, f, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.b = p(l);
  b.a = a;
  b.g = c.g;
  return b
}();
g;
g;
g;
Lb["null"] = p(0);
E["null"] = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return m;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
vb["null"] = function(a, b, c) {
  return fc.g(H([b, c], 0))
};
sb["null"] = l;
tb["null"] = p(m);
ob["null"] = function(a, b) {
  return N.b(b)
};
Ib["null"] = l;
Jb["null"] = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.O ? c.O() : c.call(m);
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Rb["null"] = l;
Sb["null"] = function() {
  return N.b("nil")
};
Bb["null"] = l;
mb["null"] = l;
nb["null"] = p(0);
Cb["null"] = p(m);
rb["null"] = l;
C["null"] = p(m);
D["null"] = function() {
  return N.O()
};
Kb["null"] = function(a, b) {
  return b == m
};
Hb["null"] = p(m);
Fb["null"] = l;
Gb["null"] = p(m);
pb["null"] = l;
B["null"] = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return m;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
wb["null"] = l;
xb["null"] = p(m);
Date.prototype.A = function(a, b) {
  return a.toString() === b.toString()
};
Lb.number = aa();
Kb.number = function(a, b) {
  return a === b
};
Lb["boolean"] = function(a) {
  return a === l ? 1 : 0
};
Lb._ = function(a) {
  return ka(a)
};
g;
g;
var hc = function() {
  function a(a, b, c, d) {
    for(var k = nb(a);;) {
      if(d < k) {
        c = b.a ? b.a(c, B.a(a, d)) : b.call(m, c, B.a(a, d));
        if(O(gc, c)) {
          return F(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = nb(a), k = 0;;) {
      if(k < d) {
        c = b.a ? b.a(c, B.a(a, k)) : b.call(m, c, B.a(a, k));
        if(O(gc, c)) {
          return F(c)
        }
        k += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = nb(a);
    if(0 === c) {
      return b.O ? b.O() : b.call(m)
    }
    for(var d = B.a(a, 0), k = 1;;) {
      if(k < c) {
        d = b.a ? b.a(d, B.a(a, k)) : b.call(m, d, B.a(a, k));
        if(O(gc, d)) {
          return F(d)
        }
        k += 1
      }else {
        return d
      }
    }
  }
  var d = m, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
g;
g;
g;
g;
g;
function ic(a, b) {
  this.S = a;
  this.t = b;
  this.q = 0;
  this.k = 166199546
}
q = ic.prototype;
q.F = function(a) {
  return jc(a)
};
q.ya = function() {
  return this.t + 1 < this.S.length ? new ic(this.S, this.t + 1) : m
};
q.D = function(a, b) {
  return P(b, a)
};
q.mb = function(a) {
  var b = a.w(a);
  return 0 < b ? new kc(a, b - 1, m) : Q
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.ma = function(a, b) {
  return lc(this.S) ? hc.p(this.S, b, this.S[this.t], this.t + 1) : hc.p(a, b, this.S[this.t], 0)
};
q.na = function(a, b, c) {
  return lc(this.S) ? hc.p(this.S, b, c, this.t) : hc.p(a, b, c, 0)
};
q.z = aa();
q.w = function() {
  return this.S.length - this.t
};
q.X = function() {
  return this.S[this.t]
};
q.T = function() {
  return this.t + 1 < this.S.length ? new ic(this.S, this.t + 1) : N.O()
};
q.A = function(a, b) {
  return mc(a, b)
};
q.Q = function(a, b) {
  var c = b + this.t;
  return c < this.S.length ? this.S[c] : m
};
q.L = function(a, b, c) {
  a = b + this.t;
  return a < this.S.length ? this.S[a] : c
};
ic;
var nc = function() {
  function a(a, b) {
    return 0 === a.length ? m : new ic(a, b)
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), H = function() {
  function a(a, b) {
    return nc.a(a, b)
  }
  function b(a) {
    return nc.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
Ib.array = l;
Jb.array = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return hc.a(a, c);
      case 3:
        return hc.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
E.array = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return B.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
pb.array = l;
B.array = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < a.length ? a[c] : m;
      case 3:
        return c < a.length ? a[c] : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
mb.array = l;
nb.array = function(a) {
  return a.length
};
Mb.array = l;
Nb.array = function(a) {
  return H.a(a, 0)
};
function kc(a, b, c) {
  this.Ob = a;
  this.t = b;
  this.h = c;
  this.q = 0;
  this.k = 31850570
}
q = kc.prototype;
q.F = function(a) {
  return jc(a)
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.w = function() {
  return this.t + 1
};
q.X = function() {
  return B.a(this.Ob, this.t)
};
q.T = function() {
  return 0 < this.t ? new kc(this.Ob, this.t - 1, m) : Q
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new kc(this.Ob, this.t, b)
};
q.I = o("h");
kc;
function S(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.k & 32) ? b : a.vd) ? l : a.k ? n : z(qb, a) : z(qb, a);
    a = b ? a : Nb(a)
  }
  return a
}
function J(a) {
  if(a == m) {
    return m
  }
  var b;
  b = a ? ((b = a.k & 64) ? b : a.Rb) ? l : a.k ? n : z(rb, a) : z(rb, a);
  if(b) {
    return C(a)
  }
  a = S(a);
  return a == m ? m : C(a)
}
function K(a) {
  if(a != m) {
    var b;
    b = a ? ((b = a.k & 64) ? b : a.Rb) ? l : a.k ? n : z(rb, a) : z(rb, a);
    if(b) {
      return D(a)
    }
    a = S(a);
    return a != m ? D(a) : Q
  }
  return Q
}
function I(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.k & 128) ? b : a.yd) ? l : a.k ? n : z(sb, a) : z(sb, a);
    a = b ? tb(a) : S(K(a))
  }
  return a
}
function oc(a) {
  return J(I(a))
}
function pc(a) {
  for(;;) {
    var b = I(a);
    if(b != m) {
      a = b
    }else {
      return J(a)
    }
  }
}
Kb._ = function(a, b) {
  return a === b
};
function qc(a) {
  return w(a) ? n : l
}
var rc = function() {
  var a = m, b = function() {
    function b(a, c, i) {
      var j = m;
      t(i) && (j = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(w(d)) {
          b = a.a(b, c), c = J(d), d = I(d)
        }else {
          return a.a(b, c)
        }
      }
    }
    b.o = 2;
    b.n = function(a) {
      var b = J(a), c = J(I(a)), a = K(I(a));
      return d(b, c, a)
    };
    b.g = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return ob(a, d);
      default:
        return b.g(a, d, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 2;
  a.n = b.n;
  a.a = function(a, b) {
    return ob(a, b)
  };
  a.g = b.g;
  return a
}();
g;
function T(a) {
  if(lc(a)) {
    a = nb(a)
  }else {
    a: {
      for(var a = S(a), b = 0;;) {
        if(lc(a)) {
          a = b + nb(a);
          break a
        }
        a = I(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
g;
var tc = function() {
  function a(a, b, h) {
    return a == m ? h : 0 === b ? S(a) ? J(a) : h : sc(a) ? B.c(a, b, h) : S(a) ? c.c(I(a), b - 1, h) : h
  }
  function b(a, b) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(S(a)) {
        return J(a)
      }
      e(Error("Index out of bounds"))
    }
    if(sc(a)) {
      return B.a(a, b)
    }
    if(S(a)) {
      return c.a(I(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), uc = function() {
  function a(a, b, c) {
    if(a != m) {
      var i;
      i = a ? ((i = a.k & 16) ? i : a.lb) ? l : a.k ? n : z(pb, a) : z(pb, a);
      a = i ? B.c(a, Math.floor(b), c) : tc.c(a, Math.floor(b), c)
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    a == m ? c = m : (c = a ? ((c = a.k & 16) ? c : a.lb) ? l : a.k ? n : z(pb, a) : z(pb, a), c = c ? B.a(a, Math.floor(b)) : tc.a(a, Math.floor(b)));
    return c
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), vc = function() {
  var a = m, b = function() {
    function b(a, c, i, j) {
      var k = m;
      t(j) && (k = H(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, a, c, i, k)
    }
    function d(b, c, d, j) {
      for(;;) {
        if(b = a.c(b, c, d), w(j)) {
          c = J(j), d = oc(j), j = I(I(j))
        }else {
          return b
        }
      }
    }
    b.o = 3;
    b.n = function(a) {
      var b = J(a), c = J(I(a)), j = J(I(I(a))), a = K(I(I(a)));
      return d(b, c, j, a)
    };
    b.g = d;
    return b
  }(), a = function(a, d, f, h) {
    switch(arguments.length) {
      case 3:
        return vb(a, d, f);
      default:
        return b.g(a, d, f, H(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 3;
  a.n = b.n;
  a.c = function(a, b, f) {
    return vb(a, b, f)
  };
  a.g = b.g;
  return a
}(), wc = function() {
  var a = m, b = function() {
    function b(a, c, i) {
      var j = m;
      t(i) && (j = H(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), w(d)) {
          c = J(d), d = I(d)
        }else {
          return b
        }
      }
    }
    b.o = 2;
    b.n = function(a) {
      var b = J(a), c = J(I(a)), a = K(I(a));
      return d(b, c, a)
    };
    b.g = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return xb(a, d);
      default:
        return b.g(a, d, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 2;
  a.n = b.n;
  a.b = aa();
  a.a = function(a, b) {
    return xb(a, b)
  };
  a.g = b.g;
  return a
}();
function xc(a, b) {
  return Hb(a, b)
}
function yc(a) {
  var b;
  b = a ? ((b = a.k & 131072) ? b : a.$c) ? l : a.k ? n : z(Fb, a) : z(Fb, a);
  return b ? Gb(a) : m
}
var zc = {}, Ac = 0, Bc = function() {
  function a(a, b) {
    var c = v(a);
    if(c ? b : c) {
      if(255 < Ac && (zc = {}, Ac = 0), c = zc[a], c == m) {
        c = Ka(a), zc[a] = c, Ac += 1
      }
    }else {
      c = Lb(a)
    }
    return c
  }
  function b(a) {
    return c.a(a, l)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Cc(a) {
  if(a == m) {
    a = n
  }else {
    if(a) {
      var b = a.k & 4096, a = (b ? b : a.Bd) ? l : a.k ? n : z(Bb, a)
    }else {
      a = z(Bb, a)
    }
  }
  return a
}
function lc(a) {
  if(a) {
    var b = a.k & 2, a = (b ? b : a.Qb) ? l : a.k ? n : z(mb, a)
  }else {
    a = z(mb, a)
  }
  return a
}
function sc(a) {
  if(a) {
    var b = a.k & 16, a = (b ? b : a.lb) ? l : a.k ? n : z(pb, a)
  }else {
    a = z(pb, a)
  }
  return a
}
function Dc(a) {
  if(a == m) {
    a = n
  }else {
    if(a) {
      var b = a.k & 1024, a = (b ? b : a.xd) ? l : a.k ? n : z(wb, a)
    }else {
      a = z(wb, a)
    }
  }
  return a
}
function Ec(a) {
  if(a) {
    var b = a.k & 16384, a = (b ? b : a.Cd) ? l : a.k ? n : z(Db, a)
  }else {
    a = z(Db, a)
  }
  return a
}
function Fc(a) {
  return a ? w(w(m) ? m : a.Bc) ? l : a.bd ? n : z(cc, a) : z(cc, a)
}
function Gc(a) {
  var b = [];
  Ya(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Hc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Ic = {};
function O(a, b) {
  return b instanceof a
}
function Jc(a) {
  if(a == m) {
    a = n
  }else {
    if(a) {
      var b = a.k & 64, a = (b ? b : a.Rb) ? l : a.k ? n : z(rb, a)
    }else {
      a = z(rb, a)
    }
  }
  return a
}
function Kc(a) {
  return w(a) ? l : n
}
function Lc(a) {
  var b = v(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Mc(a) {
  var b = v(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function Nc(a) {
  var b = v(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function Oc(a, b) {
  return E.c(a, b, Ic) === Ic ? n : l
}
function Pc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == m) {
    return-1
  }
  if(b == m) {
    return 1
  }
  if((a == m ? m : a.constructor) === (b == m ? m : b.constructor)) {
    return(a ? w(w(m) ? m : a.Yc) || (a.bd ? 0 : z($b, a)) : z($b, a)) ? ac(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var Qc = function() {
  function a(a, b, c, i) {
    for(;;) {
      var j = Pc(uc.a(a, i), uc.a(b, i)), k = 0 === j;
      if(k ? i + 1 < c : k) {
        i += 1
      }else {
        return j
      }
    }
  }
  function b(a, b) {
    var h = T(a), i = T(b);
    return h < i ? -1 : h > i ? 1 : c.p(a, b, h, 0)
  }
  var c = m, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.p = a;
  return c
}();
g;
var Sc = function() {
  function a(a, b, c) {
    for(c = S(c);;) {
      if(c) {
        b = a.a ? a.a(b, J(c)) : a.call(m, b, J(c));
        if(O(gc, b)) {
          return F(b)
        }
        c = I(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = S(b);
    return c ? Rc.c(a, J(c), I(c)) : a.O ? a.O() : a.call(m)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
var Rc = function() {
  function a(a, b, c) {
    var i;
    i = c ? ((i = c.k & 524288) ? i : c.ad) ? l : c.k ? n : z(Ib, c) : z(Ib, c);
    return i ? Jb.c(c, a, b) : Sc.c(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.k & 524288) ? c : b.ad) ? l : b.k ? n : z(Ib, b) : z(Ib, b);
    return c ? Jb.a(b, a) : Sc.a(a, b)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
function gc(a) {
  this.m = a;
  this.q = 0;
  this.k = 32768
}
gc.prototype.Db = o("m");
gc;
function Tc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(m, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(m, a)
}
function Uc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Vc = function() {
  function a(a) {
    return a == m ? "" : a.toString()
  }
  var b = m, c = function() {
    function a(b, d) {
      var j = m;
      t(d) && (j = H(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(w(c)) {
            var d = a.append(b.b(J(c))), f = I(c), a = d, c = f
          }else {
            return b.b(a)
          }
        }
      }.call(m, new kb(b.b(a)), d)
    }
    a.o = 1;
    a.n = function(a) {
      var b = J(a), a = K(a);
      return c(b, a)
    };
    a.g = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, H(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.O = p("");
  b.b = a;
  b.g = c.g;
  return b
}(), U = function() {
  function a(a) {
    return Nc(a) ? a.substring(2, a.length) : Mc(a) ? Vc.g(":", H([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
  }
  var b = m, c = function() {
    function a(b, d) {
      var j = m;
      t(d) && (j = H(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(w(c)) {
            var d = a.append(b.b(J(c))), f = I(c), a = d, c = f
          }else {
            return Vc.b(a)
          }
        }
      }.call(m, new kb(b.b(a)), d)
    }
    a.o = 1;
    a.n = function(a) {
      var b = J(a), a = K(a);
      return c(b, a)
    };
    a.g = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, H(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.O = p("");
  b.b = a;
  b.g = c.g;
  return b
}(), Wc = function() {
  var a = m, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.a = function(a, c) {
    return a.substring(c)
  };
  a.c = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function mc(a, b) {
  var c;
  c = b ? ((c = b.k & 16777216) ? c : b.Ad) ? l : b.k ? n : z(Ob, b) : z(Ob, b);
  if(c) {
    a: {
      c = S(a);
      for(var d = S(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && M.a(J(c), J(d))) {
          c = I(c), d = I(d)
        }else {
          c = n;
          break a
        }
      }
      c = g
    }
  }else {
    c = m
  }
  return Kc(c)
}
function jc(a) {
  return Rc.c(function(a, c) {
    var d = Bc.a(c, n);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Bc.a(J(a), n), I(a))
}
g;
g;
function Xc(a) {
  for(var b = 0, a = S(a);;) {
    if(a) {
      var c = J(a), b = (b + (Bc.b(zb(c)) ^ Bc.b(Ab(c)))) % 4503599627370496, a = I(a)
    }else {
      return b
    }
  }
}
function Zc(a) {
  for(var b = 0, a = S(a);;) {
    if(a) {
      var c = J(a), b = (b + Bc.b(c)) % 4503599627370496, a = I(a)
    }else {
      return b
    }
  }
}
g;
function $c(a, b, c, d, f) {
  this.h = a;
  this.cb = b;
  this.ua = c;
  this.count = d;
  this.l = f;
  this.q = 0;
  this.k = 65413358
}
q = $c.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.ya = function() {
  return 1 === this.count ? m : this.ua
};
q.D = function(a, b) {
  return new $c(this.h, b, a, this.count + 1, m)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.w = o("count");
q.oa = o("cb");
q.X = o("cb");
q.T = function() {
  return 1 === this.count ? Q : this.ua
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new $c(b, this.cb, this.ua, this.count, this.l)
};
q.I = o("h");
q.N = function() {
  return Q
};
$c;
function ad(a) {
  this.h = a;
  this.q = 0;
  this.k = 65413326
}
q = ad.prototype;
q.F = p(0);
q.ya = p(m);
q.D = function(a, b) {
  return new $c(this.h, b, m, 1, m)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = p(m);
q.w = p(0);
q.oa = p(m);
q.X = p(m);
q.T = function() {
  return Q
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new ad(b)
};
q.I = o("h");
q.N = aa();
ad;
var Q = new ad(m);
function bd(a) {
  if(a) {
    var b = a.k & 134217728, a = (b ? b : a.zd) ? l : a.k ? n : z(Pb, a)
  }else {
    a = z(Pb, a)
  }
  return a
}
var N = function() {
  function a(a, b, c) {
    return rc.a(d.a(b, c), a)
  }
  function b(a, b) {
    return rc.a(d.b(b), a)
  }
  function c(a) {
    return rc.a(Q, a)
  }
  var d = m, f = function() {
    function a(c, d, f, h) {
      var u = m;
      t(h) && (u = H(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, u)
    }
    function b(a, c, d, f) {
      return rc.a(rc.a(rc.a(Rc.c(rc, Q, bd(f) ? Qb(f) : Rc.c(rc, Q, f)), d), c), a)
    }
    a.o = 3;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), f = J(I(I(a))), a = K(I(I(a)));
      return b(c, d, f, a)
    };
    a.g = b;
    return a
  }(), d = function(d, i, j, k) {
    switch(arguments.length) {
      case 0:
        return Q;
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, i);
      case 3:
        return a.call(this, d, i, j);
      default:
        return f.g(d, i, j, H(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 3;
  d.n = f.n;
  d.O = function() {
    return Q
  };
  d.b = c;
  d.a = b;
  d.c = a;
  d.g = f.g;
  return d
}();
function cd(a, b, c, d) {
  this.h = a;
  this.cb = b;
  this.ua = c;
  this.l = d;
  this.q = 0;
  this.k = 65405164
}
q = cd.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.ya = function() {
  return this.ua == m ? m : Nb(this.ua)
};
q.D = function(a, b) {
  return new cd(m, b, a, this.l)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.X = o("cb");
q.T = function() {
  return this.ua == m ? Q : this.ua
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new cd(b, this.cb, this.ua, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(Q, this.h)
};
cd;
function P(a, b) {
  var c = b == m;
  c || (c = b ? ((c = b.k & 64) ? c : b.Rb) ? l : b.k ? n : z(rb, b) : z(rb, b));
  return c ? new cd(m, a, b, m) : new cd(m, a, S(b), m)
}
Ib.string = l;
Jb.string = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return hc.a(a, c);
      case 3:
        return hc.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
E.string = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return B.a(a, c);
      case 3:
        return B.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
pb.string = l;
B.string = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < nb(a) ? a.charAt(c) : m;
      case 3:
        return c < nb(a) ? a.charAt(c) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
mb.string = l;
nb.string = function(a) {
  return a.length
};
Mb.string = l;
Nb.string = function(a) {
  return nc.a(a, 0)
};
Lb.string = function(a) {
  return Ka(a)
};
function dd(a) {
  this.Mc = a;
  this.q = 0;
  this.k = 1
}
dd.prototype.call = function(a, b) {
  if(b == m) {
    return m
  }
  var c = b.wa;
  return c == m ? E.c(b, this.Mc, m) : c[this.Mc]
};
dd.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
dd;
String.prototype.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return E.c(c, this.toString(), m);
      case 3:
        return E.c(c, this.toString(), d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > T(b) ? E.c(b[0], a, m) : E.c(b[0], a, b[1])
};
function ed(a) {
  var b = a.x;
  if(a.qc) {
    return b
  }
  a.x = b.O ? b.O() : b.call(m);
  a.qc = l;
  return a.x
}
function V(a, b, c, d) {
  this.h = a;
  this.qc = b;
  this.x = c;
  this.l = d;
  this.q = 0;
  this.k = 31850700
}
q = V.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.ya = function(a) {
  return Nb(a.T(a))
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function(a) {
  return S(ed(a))
};
q.X = function(a) {
  return J(ed(a))
};
q.T = function(a) {
  return K(ed(a))
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new V(b, this.qc, this.x, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(Q, this.h)
};
V;
g;
function fd(a, b) {
  this.Kb = a;
  this.end = b;
  this.q = 0;
  this.k = 2
}
fd.prototype.w = o("end");
fd.prototype.add = function(a) {
  this.Kb[this.end] = a;
  return this.end += 1
};
fd.prototype.xa = function() {
  var a = new gd(this.Kb, 0, this.end);
  this.Kb = m;
  return a
};
fd;
function gd(a, b, c) {
  this.e = a;
  this.R = b;
  this.end = c;
  this.q = 0;
  this.k = 524306
}
q = gd.prototype;
q.ma = function(a, b) {
  return hc.p(a, b, this.e[this.R], this.R + 1)
};
q.na = function(a, b, c) {
  return hc.p(a, b, c, this.R)
};
q.zc = function() {
  this.R === this.end && e(Error("-drop-first of empty chunk"));
  return new gd(this.e, this.R + 1, this.end)
};
q.Q = function(a, b) {
  return this.e[this.R + b]
};
q.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.R : a) ? this.e[this.R + b] : c
};
q.w = function() {
  return this.end - this.R
};
gd;
var hd = function() {
  function a(a, b, c) {
    return new gd(a, b, c)
  }
  function b(a, b) {
    return d.c(a, b, a.length)
  }
  function c(a) {
    return d.c(a, 0, a.length)
  }
  var d = m, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function id(a, b, c) {
  this.xa = a;
  this.Ea = b;
  this.h = c;
  this.q = 0;
  this.k = 27656296
}
q = id.prototype;
q.D = function(a, b) {
  return P(b, a)
};
q.z = aa();
q.X = function() {
  return B.a(this.xa, 0)
};
q.T = function() {
  return 1 < nb(this.xa) ? new id(bc(this.xa), this.Ea, this.h) : this.Ea == m ? Q : this.Ea
};
q.Ac = function() {
  return this.Ea == m ? m : this.Ea
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new id(this.xa, this.Ea, b)
};
q.I = o("h");
q.Bc = l;
q.Pb = o("xa");
q.Cb = function() {
  return this.Ea == m ? Q : this.Ea
};
id;
function jd(a, b) {
  return 0 === nb(a) ? b : new id(a, b, m)
}
function kd(a) {
  for(var b = [];;) {
    if(S(a)) {
      b.push(J(a)), a = I(a)
    }else {
      return b
    }
  }
}
function ld(a, b) {
  if(lc(a)) {
    return T(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? S(c) : h;
    if(w(h)) {
      c = I(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var nd = function md(b) {
  return b == m ? m : I(b) == m ? S(J(b)) : P(J(b), md(I(b)))
}, od = function() {
  function a(a, b) {
    return new V(m, n, function() {
      var c = S(a);
      return c ? Fc(c) ? jd(dc(c), d.a(ec(c), b)) : P(J(c), d.a(K(c), b)) : b
    }, m)
  }
  function b(a) {
    return new V(m, n, function() {
      return a
    }, m)
  }
  function c() {
    return new V(m, n, p(m), m)
  }
  var d = m, f = function() {
    function a(c, d, f) {
      var h = m;
      t(f) && (h = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      var h = function y(a, b) {
        return new V(m, n, function() {
          var c = S(a);
          return c ? Fc(c) ? jd(dc(c), y(ec(c), b)) : P(J(c), y(K(c), b)) : w(b) ? y(J(b), I(b)) : m
        }, m)
      };
      return h.a ? h.a(d.a(a, c), f) : h.call(m, d.a(a, c), f)
    }
    a.o = 2;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), a = K(I(a));
      return b(c, d, a)
    };
    a.g = b;
    return a
  }(), d = function(d, i, j) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, i);
      default:
        return f.g(d, i, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 2;
  d.n = f.n;
  d.O = c;
  d.b = b;
  d.a = a;
  d.g = f.g;
  return d
}(), pd = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)))
  }
  function b(a, b, c) {
    return P(a, P(b, c))
  }
  var c = m, d = function() {
    function a(c, d, f, r, x) {
      var u = m;
      t(x) && (u = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, r, u)
    }
    function b(a, c, d, f, h) {
      return P(a, P(c, P(d, P(f, nd(h)))))
    }
    a.o = 4;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), f = J(I(I(a))), x = J(I(I(I(a)))), a = K(I(I(I(a))));
      return b(c, d, f, x, a)
    };
    a.g = b;
    return a
  }(), c = function(c, h, i, j, k) {
    switch(arguments.length) {
      case 1:
        return S(c);
      case 2:
        return P(c, h);
      case 3:
        return b.call(this, c, h, i);
      case 4:
        return a.call(this, c, h, i, j);
      default:
        return d.g(c, h, i, j, H(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = 4;
  c.n = d.n;
  c.b = function(a) {
    return S(a)
  };
  c.a = function(a, b) {
    return P(a, b)
  };
  c.c = b;
  c.p = a;
  c.g = d.g;
  return c
}();
function qd(a) {
  return Wb(a)
}
function rd(a) {
  return Yb(a)
}
function sd(a, b, c) {
  return Zb(a, b, c)
}
g;
function td(a, b, c) {
  var d = S(c);
  if(0 === b) {
    return a.O ? a.O() : a.call(m)
  }
  var c = C(d), f = D(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(m, c)
  }
  var d = C(f), h = D(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(m, c, d)
  }
  var f = C(h), i = D(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(m, c, d, f)
  }
  var h = C(i), j = D(i);
  if(4 === b) {
    return a.p ? a.p(c, d, f, h) : a.p ? a.p(c, d, f, h) : a.call(m, c, d, f, h)
  }
  i = C(j);
  j = D(j);
  if(5 === b) {
    return a.ba ? a.ba(c, d, f, h, i) : a.ba ? a.ba(c, d, f, h, i) : a.call(m, c, d, f, h, i)
  }
  var a = C(j), k = D(j);
  if(6 === b) {
    return a.za ? a.za(c, d, f, h, i, a) : a.za ? a.za(c, d, f, h, i, a) : a.call(m, c, d, f, h, i, a)
  }
  var j = C(k), r = D(k);
  if(7 === b) {
    return a.ob ? a.ob(c, d, f, h, i, a, j) : a.ob ? a.ob(c, d, f, h, i, a, j) : a.call(m, c, d, f, h, i, a, j)
  }
  var k = C(r), x = D(r);
  if(8 === b) {
    return a.dc ? a.dc(c, d, f, h, i, a, j, k) : a.dc ? a.dc(c, d, f, h, i, a, j, k) : a.call(m, c, d, f, h, i, a, j, k)
  }
  var r = C(x), u = D(x);
  if(9 === b) {
    return a.ec ? a.ec(c, d, f, h, i, a, j, k, r) : a.ec ? a.ec(c, d, f, h, i, a, j, k, r) : a.call(m, c, d, f, h, i, a, j, k, r)
  }
  var x = C(u), y = D(u);
  if(10 === b) {
    return a.Tb ? a.Tb(c, d, f, h, i, a, j, k, r, x) : a.Tb ? a.Tb(c, d, f, h, i, a, j, k, r, x) : a.call(m, c, d, f, h, i, a, j, k, r, x)
  }
  var u = C(y), G = D(y);
  if(11 === b) {
    return a.Ub ? a.Ub(c, d, f, h, i, a, j, k, r, x, u) : a.Ub ? a.Ub(c, d, f, h, i, a, j, k, r, x, u) : a.call(m, c, d, f, h, i, a, j, k, r, x, u)
  }
  var y = C(G), L = D(G);
  if(12 === b) {
    return a.Vb ? a.Vb(c, d, f, h, i, a, j, k, r, x, u, y) : a.Vb ? a.Vb(c, d, f, h, i, a, j, k, r, x, u, y) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y)
  }
  var G = C(L), ga = D(L);
  if(13 === b) {
    return a.Wb ? a.Wb(c, d, f, h, i, a, j, k, r, x, u, y, G) : a.Wb ? a.Wb(c, d, f, h, i, a, j, k, r, x, u, y, G) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G)
  }
  var L = C(ga), ja = D(ga);
  if(14 === b) {
    return a.Xb ? a.Xb(c, d, f, h, i, a, j, k, r, x, u, y, G, L) : a.Xb ? a.Xb(c, d, f, h, i, a, j, k, r, x, u, y, G, L) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L)
  }
  var ga = C(ja), ra = D(ja);
  if(15 === b) {
    return a.Yb ? a.Yb(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga) : a.Yb ? a.Yb(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga)
  }
  var ja = C(ra), Ea = D(ra);
  if(16 === b) {
    return a.Zb ? a.Zb(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja) : a.Zb ? a.Zb(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja)
  }
  var ra = C(Ea), jb = D(Ea);
  if(17 === b) {
    return a.$b ? a.$b(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra) : a.$b ? a.$b(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra)
  }
  var Ea = C(jb), Yc = D(jb);
  if(18 === b) {
    return a.ac ? a.ac(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea) : a.ac ? a.ac(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea)
  }
  jb = C(Yc);
  Yc = D(Yc);
  if(19 === b) {
    return a.bc ? a.bc(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea, jb) : a.bc ? a.bc(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea, jb) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea, jb)
  }
  var Re = C(Yc);
  D(Yc);
  if(20 === b) {
    return a.cc ? a.cc(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea, jb, Re) : a.cc ? a.cc(c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea, jb, Re) : a.call(m, c, d, f, h, i, a, j, k, r, x, u, y, G, L, ga, ja, ra, Ea, jb, Re)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
g;
var ud = function() {
  function a(a, b, c, d, f) {
    b = pd.p(b, c, d, f);
    c = a.o;
    return w(a.n) ? (d = ld(b, c + 1), d <= c ? td(a, d, b) : a.n(b)) : a.apply(a, kd(b))
  }
  function b(a, b, c, d) {
    b = pd.c(b, c, d);
    c = a.o;
    return w(a.n) ? (d = ld(b, c + 1), d <= c ? td(a, d, b) : a.n(b)) : a.apply(a, kd(b))
  }
  function c(a, b, c) {
    b = pd.a(b, c);
    c = a.o;
    if(w(a.n)) {
      var d = ld(b, c + 1);
      return d <= c ? td(a, d, b) : a.n(b)
    }
    return a.apply(a, kd(b))
  }
  function d(a, b) {
    var c = a.o;
    if(w(a.n)) {
      var d = ld(b, c + 1);
      return d <= c ? td(a, d, b) : a.n(b)
    }
    return a.apply(a, kd(b))
  }
  var f = m, h = function() {
    function a(c, d, f, h, i, G) {
      var L = m;
      t(G) && (L = H(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, L)
    }
    function b(a, c, d, f, h, i) {
      c = P(c, P(d, P(f, P(h, nd(i)))));
      d = a.o;
      return w(a.n) ? (f = ld(c, d + 1), f <= d ? td(a, f, c) : a.n(c)) : a.apply(a, kd(c))
    }
    a.o = 5;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), f = J(I(I(a))), h = J(I(I(I(a)))), i = J(I(I(I(I(a))))), a = K(I(I(I(I(a)))));
      return b(c, d, f, h, i, a)
    };
    a.g = b;
    return a
  }(), f = function(f, j, k, r, x, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, r);
      case 5:
        return a.call(this, f, j, k, r, x);
      default:
        return h.g(f, j, k, r, x, H(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.o = 5;
  f.n = h.n;
  f.a = d;
  f.c = c;
  f.p = b;
  f.ba = a;
  f.g = h.g;
  return f
}(), vd = function() {
  function a(a, b) {
    return!M.a(a, b)
  }
  function b() {
    return n
  }
  var c = m, d = function() {
    function a(c, d, f) {
      var r = m;
      t(f) && (r = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, r)
    }
    function b(a, c, d) {
      return qc(ud.p(M, a, c, d))
    }
    a.o = 2;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), a = K(I(a));
      return b(c, d, a)
    };
    a.g = b;
    return a
  }(), c = function(c, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this);
      case 2:
        return a.call(this, c, h);
      default:
        return d.g(c, h, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = 2;
  c.n = d.n;
  c.b = b;
  c.a = a;
  c.g = d.g;
  return c
}();
function wd(a, b) {
  for(;;) {
    if(S(b) == m) {
      return l
    }
    if(w(a.b ? a.b(J(b)) : a.call(m, J(b)))) {
      var c = a, d = I(b), a = c, b = d
    }else {
      return n
    }
  }
}
function xd(a, b) {
  for(;;) {
    if(S(b)) {
      var c = a.b ? a.b(J(b)) : a.call(m, J(b));
      if(w(c)) {
        return c
      }
      var c = a, d = I(b), a = c, b = d
    }else {
      return m
    }
  }
}
function yd(a) {
  return a
}
var zd = function() {
  function a(a, b, c, f) {
    return new V(m, n, function() {
      var r = S(b), x = S(c), u = S(f);
      return(r ? x ? u : x : r) ? P(a.c ? a.c(J(r), J(x), J(u)) : a.call(m, J(r), J(x), J(u)), d.p(a, K(r), K(x), K(u))) : m
    }, m)
  }
  function b(a, b, c) {
    return new V(m, n, function() {
      var f = S(b), r = S(c);
      return(f ? r : f) ? P(a.a ? a.a(J(f), J(r)) : a.call(m, J(f), J(r)), d.c(a, K(f), K(r))) : m
    }, m)
  }
  function c(a, b) {
    return new V(m, n, function() {
      var c = S(b);
      if(c) {
        if(Fc(c)) {
          for(var f = dc(c), r = T(f), x = new fd(lb.b(r), 0), u = 0;;) {
            if(u < r) {
              var y = a.b ? a.b(B.a(f, u)) : a.call(m, B.a(f, u));
              x.add(y);
              u += 1
            }else {
              break
            }
          }
          return jd(x.xa(), d.a(a, ec(c)))
        }
        return P(a.b ? a.b(J(c)) : a.call(m, J(c)), d.a(a, K(c)))
      }
      return m
    }, m)
  }
  var d = m, f = function() {
    function a(c, d, f, h, u) {
      var y = m;
      t(u) && (y = H(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, y)
    }
    function b(a, c, f, h, i) {
      var y = function L(a) {
        return new V(m, n, function() {
          var b = d.a(S, a);
          return wd(yd, b) ? P(d.a(J, b), L(d.a(K, b))) : m
        }, m)
      };
      return d.a(function(b) {
        return ud.a(a, b)
      }, y.b ? y.b(rc.g(i, h, H([f, c], 0))) : y.call(m, rc.g(i, h, H([f, c], 0))))
    }
    a.o = 4;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), f = J(I(I(a))), h = J(I(I(I(a)))), a = K(I(I(I(a))));
      return b(c, d, f, h, a)
    };
    a.g = b;
    return a
  }(), d = function(d, i, j, k, r) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, j);
      case 4:
        return a.call(this, d, i, j, k);
      default:
        return f.g(d, i, j, k, H(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 4;
  d.n = f.n;
  d.a = c;
  d.c = b;
  d.p = a;
  d.g = f.g;
  return d
}(), Bd = function Ad(b, c) {
  return new V(m, n, function() {
    if(0 < b) {
      var d = S(c);
      return d ? P(J(d), Ad(b - 1, K(d))) : m
    }
    return m
  }, m)
};
function Cd(a, b) {
  function c(a, b) {
    for(;;) {
      var c = S(b), i = 0 < a;
      if(w(i ? c : i)) {
        i = a - 1, c = K(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  return new V(m, n, function() {
    return c.a ? c.a(a, b) : c.call(m, a, b)
  }, m)
}
function Dd(a) {
  function b(a, b) {
    for(;;) {
      var c = S(b), i;
      i = (i = c) ? a.b ? a.b(J(c)) : a.call(m, J(c)) : i;
      if(w(i)) {
        i = a, c = K(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  var c = F(Ed);
  return new V(m, n, function() {
    return b.a ? b.a(a, c) : b.call(m, a, c)
  }, m)
}
var Fd = function() {
  function a(a, b) {
    return Bd(a, c.b(b))
  }
  function b(a) {
    return new V(m, n, function() {
      return P(a, c.b(a))
    }, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Gd = function() {
  function a(a, c) {
    return new V(m, n, function() {
      var h = S(a), i = S(c);
      return(h ? i : h) ? P(J(h), P(J(i), b.a(K(h), K(i)))) : m
    }, m)
  }
  var b = m, c = function() {
    function a(b, d, j) {
      var k = m;
      t(j) && (k = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      return new V(m, n, function() {
        var c = zd.a(S, rc.g(f, d, H([a], 0)));
        return wd(yd, c) ? od.a(zd.a(J, c), ud.a(b, zd.a(K, c))) : m
      }, m)
    }
    a.o = 2;
    a.n = function(a) {
      var b = J(a), d = J(I(a)), a = K(I(a));
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.g(b, f, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.a = a;
  b.g = c.g;
  return b
}();
function Hd(a, b) {
  return Cd(1, Gd.a(Fd.b(a), b))
}
function Id(a) {
  var b = function d(a, b) {
    return new V(m, n, function() {
      var i = S(a);
      return i ? P(J(i), d(K(i), b)) : S(b) ? d(J(b), K(b)) : m
    }, m)
  };
  return b.a ? b.a(m, a) : b.call(m, m, a)
}
var Jd = function() {
  function a(a, b) {
    return Id(zd.a(a, b))
  }
  var b = m, c = function() {
    function a(c, d, j) {
      var k = m;
      t(j) && (k = H(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, k)
    }
    function b(a, c, d) {
      return Id(ud.p(zd, a, c, d))
    }
    a.o = 2;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), a = K(I(a));
      return b(c, d, a)
    };
    a.g = b;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.g(b, f, H(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.a = a;
  b.g = c.g;
  return b
}(), Ld = function Kd(b, c) {
  return new V(m, n, function() {
    var d = S(c);
    if(d) {
      if(Fc(d)) {
        for(var f = dc(d), h = T(f), i = new fd(lb.b(h), 0), j = 0;;) {
          if(j < h) {
            if(w(b.b ? b.b(B.a(f, j)) : b.call(m, B.a(f, j)))) {
              var k = B.a(f, j);
              i.add(k)
            }
            j += 1
          }else {
            break
          }
        }
        return jd(i.xa(), Kd(b, ec(d)))
      }
      f = J(d);
      d = K(d);
      return w(b.b ? b.b(f) : b.call(m, f)) ? P(f, Kd(b, d)) : Kd(b, d)
    }
    return m
  }, m)
};
function Md(a, b) {
  var c;
  c = a ? ((c = a.q & 1) ? c : a.wd) ? l : a.q ? n : z(Vb, a) : z(Vb, a);
  return c ? rd(Rc.c(Xb, Wb(a), b)) : Rc.c(ob, a, b)
}
var Nd = function() {
  function a(a, b, c, j) {
    return new V(m, n, function() {
      var k = S(j);
      if(k) {
        var r = Bd(a, k);
        return a === T(r) ? P(r, d.p(a, b, c, Cd(b, k))) : N.b(Bd(a, od.a(r, c)))
      }
      return m
    }, m)
  }
  function b(a, b, c) {
    return new V(m, n, function() {
      var j = S(c);
      if(j) {
        var k = Bd(a, j);
        return a === T(k) ? P(k, d.c(a, b, Cd(b, j))) : m
      }
      return m
    }, m)
  }
  function c(a, b) {
    return d.c(a, a, b)
  }
  var d = m, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
function Od(a, b, c) {
  this.h = a;
  this.W = b;
  this.l = c;
  this.q = 0;
  this.k = 32400159
}
q = Od.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.P = function(a, b, c) {
  a = this.W.slice();
  a[b] = c;
  return new Od(this.h, a, m)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  var c = this.W.slice();
  c.push(b);
  return new Od(this.h, c, m)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.ma = function(a, b) {
  return hc.a(this.W, b)
};
q.na = function(a, b, c) {
  return hc.c(this.W, b, c)
};
q.z = function() {
  var a = this;
  if(0 < a.W.length) {
    var b = function d(b) {
      return new V(m, n, function() {
        return b < a.W.length ? P(a.W[b], d(b + 1)) : m
      }, m)
    };
    return b.b ? b.b(0) : b.call(m, 0)
  }
  return m
};
q.w = function() {
  return this.W.length
};
q.oa = function() {
  var a = this.W.length;
  return 0 < a ? this.W[a - 1] : m
};
q.Za = function(a, b, c) {
  return a.P(a, b, c)
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new Od(b, this.W, this.l)
};
q.I = o("h");
q.Q = function(a, b) {
  var c = 0 <= b;
  return(c ? b < this.W.length : c) ? this.W[b] : m
};
q.L = function(a, b, c) {
  return((a = 0 <= b) ? b < this.W.length : a) ? this.W[b] : c
};
q.N = function() {
  return Hb(Pd, this.h)
};
Od;
var Pd = new Od(m, [], 0);
function Qd(a, b) {
  this.v = a;
  this.e = b
}
Qd;
function Rd(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Sd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Qd(a, lb.b(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var Ud = function Td(b, c, d, f) {
  var h = new Qd(d.v, d.e.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? h.e[i] = f : (d = d.e[i], b = d != m ? Td(b, c - 5, d, f) : Sd(m, c - 5, f), h.e[i] = b);
  return h
};
function Vd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= Rd(a)) {
      return a.Y
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.e[b >>> d & 31], d = f
      }else {
        return c.e
      }
    }
  }else {
    e(Error([U("No item "), U(b), U(" in vector of length "), U(a.j)].join("")))
  }
}
var Xd = function Wd(b, c, d, f, h) {
  var i = new Qd(d.v, d.e.slice());
  if(0 === c) {
    i.e[f & 31] = h
  }else {
    var j = f >>> c & 31, b = Wd(b, c - 5, d.e[j], f, h);
    i.e[j] = b
  }
  return i
};
g;
g;
g;
g;
g;
g;
g;
function Yd(a, b, c, d, f, h) {
  this.h = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.Y = f;
  this.l = h;
  this.q = 1;
  this.k = 167668511
}
q = Yd.prototype;
q.Va = function() {
  var a = this.j, b = this.shift, c = new Qd({}, this.root.e.slice()), d = this.Y, f = lb.b(32);
  Hc(d, 0, f, 0, d.length);
  return new Zd(a, b, c, f)
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.P = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return Rd(a) <= b ? (a = this.Y.slice(), a[b & 31] = c, new Yd(this.h, this.j, this.shift, this.root, a, m)) : new Yd(this.h, this.j, this.shift, Xd(a, this.shift, this.root, b, c), this.Y, m)
  }
  if(b === this.j) {
    return a.D(a, c)
  }
  e(Error([U("Index "), U(b), U(" out of bounds  [0,"), U(this.j), U("]")].join("")))
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  if(32 > this.j - Rd(a)) {
    var c = this.Y.slice();
    c.push(b);
    return new Yd(this.h, this.j + 1, this.shift, this.root, c, m)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Qd(m, lb.b(32));
    d.e[0] = this.root;
    var f = Sd(m, this.shift, new Qd(m, this.Y));
    d.e[1] = f
  }else {
    d = Ud(a, this.shift, this.root, new Qd(m, this.Y))
  }
  return new Yd(this.h, this.j + 1, c, d, [b], m)
};
q.mb = function(a) {
  return 0 < this.j ? new kc(a, this.j - 1, m) : Q
};
q.Eb = function(a) {
  return a.Q(a, 0)
};
q.Fb = function(a) {
  return a.Q(a, 1)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.ma = function(a, b) {
  return hc.a(a, b)
};
q.na = function(a, b, c) {
  return hc.c(a, b, c)
};
q.z = function(a) {
  return 0 === this.j ? m : $d.c(a, 0, 0)
};
q.w = o("j");
q.oa = function(a) {
  return 0 < this.j ? a.Q(a, this.j - 1) : m
};
q.Za = function(a, b, c) {
  return a.P(a, b, c)
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new Yd(b, this.j, this.shift, this.root, this.Y, this.l)
};
q.I = o("h");
q.Q = function(a, b) {
  return Vd(a, b)[b & 31]
};
q.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.Q(a, b) : c
};
q.N = function() {
  return Hb(ae, this.h)
};
Yd;
var be = new Qd(m, lb.b(32)), ae = new Yd(m, 0, 5, be, [], 0);
function W(a) {
  var b = a.length;
  if(32 > b) {
    return new Yd(m, b, 5, be, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = Wb(new Yd(m, 32, 5, be, c, m));;) {
    if(d < b) {
      c = d + 1, f = Xb(f, a[d]), d = c
    }else {
      return Yb(f)
    }
  }
}
function ce(a) {
  return Yb(Rc.c(Xb, Wb(ae), a))
}
var de = function() {
  function a(a) {
    var c = m;
    t(a) && (c = H(Array.prototype.slice.call(arguments, 0), 0));
    return ce(c)
  }
  a.o = 0;
  a.n = function(a) {
    a = S(a);
    return ce(a)
  };
  a.g = function(a) {
    return ce(a)
  };
  return a
}();
function ee(a, b, c, d, f) {
  this.Ta = a;
  this.sa = b;
  this.t = c;
  this.R = d;
  this.h = f;
  this.q = 0;
  this.k = 27525356
}
q = ee.prototype;
q.ya = function(a) {
  return this.R + 1 < this.sa.length ? (a = $d.p(this.Ta, this.sa, this.t, this.R + 1), a == m ? m : a) : a.Ac(a)
};
q.D = function(a, b) {
  return P(b, a)
};
q.z = aa();
q.X = function() {
  return this.sa[this.R]
};
q.T = function(a) {
  return this.R + 1 < this.sa.length ? (a = $d.p(this.Ta, this.sa, this.t, this.R + 1), a == m ? Q : a) : a.Cb(a)
};
q.Ac = function() {
  var a = this.sa.length, a = this.t + a < nb(this.Ta) ? $d.c(this.Ta, this.t + a, 0) : m;
  return a == m ? m : a
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return $d.ba(this.Ta, this.sa, this.t, this.R, b)
};
q.N = function() {
  return Hb(ae, this.h)
};
q.Bc = l;
q.Pb = function() {
  return hd.a(this.sa, this.R)
};
q.Cb = function() {
  var a = this.sa.length, a = this.t + a < nb(this.Ta) ? $d.c(this.Ta, this.t + a, 0) : m;
  return a == m ? Q : a
};
ee;
var $d = function() {
  function a(a, b, c, d, k) {
    return new ee(a, b, c, d, k)
  }
  function b(a, b, c, j) {
    return d.ba(a, b, c, j, m)
  }
  function c(a, b, c) {
    return d.ba(a, Vd(a, b), b, c, m)
  }
  var d = m, d = function(d, h, i, j, k) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, i);
      case 4:
        return b.call(this, d, h, i, j);
      case 5:
        return a.call(this, d, h, i, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.c = c;
  d.p = b;
  d.ba = a;
  return d
}();
function fe(a, b, c, d, f) {
  this.h = a;
  this.Sa = b;
  this.start = c;
  this.end = d;
  this.l = f;
  this.q = 0;
  this.k = 32400159
}
q = fe.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.P = function(a, b, c) {
  a = this.start + b;
  return new fe(this.h, vb(this.Sa, a, c), this.start, this.end > a + 1 ? this.end : a + 1, m)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new fe(this.h, Eb(this.Sa, this.end, b), this.start, this.end + 1, m)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.ma = function(a, b) {
  return hc.a(a, b)
};
q.na = function(a, b, c) {
  return hc.c(a, b, c)
};
q.z = function() {
  var a = this, b = function d(b) {
    return b === a.end ? m : P(B.a(a.Sa, b), new V(m, n, function() {
      return d(b + 1)
    }, m))
  };
  return b.b ? b.b(a.start) : b.call(m, a.start)
};
q.w = function() {
  return this.end - this.start
};
q.oa = function() {
  return B.a(this.Sa, this.end - 1)
};
q.Za = function(a, b, c) {
  return a.P(a, b, c)
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new fe(b, this.Sa, this.start, this.end, this.l)
};
q.I = o("h");
q.Q = function(a, b) {
  return B.a(this.Sa, this.start + b)
};
q.L = function(a, b, c) {
  return B.c(this.Sa, this.start + b, c)
};
q.N = function() {
  return Hb(Pd, this.h)
};
fe;
var he = function ge(b, c, d, f) {
  var d = b.root.v === d.v ? d : new Qd(b.root.v, d.e.slice()), h = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.e[h], b = i != m ? ge(b, c - 5, i, f) : Sd(b.root.v, c - 5, f)
  }
  d.e[h] = b;
  return d
};
function Zd(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.Y = d;
  this.k = 275;
  this.q = 22
}
q = Zd.prototype;
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.Q = function(a, b) {
  if(this.root.v) {
    return Vd(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
q.L = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.Q(a, b) : c
};
q.w = function() {
  if(this.root.v) {
    return this.j
  }
  e(Error("count after persistent!"))
};
function ie(a, b, c, d) {
  if(a.root.v) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.j : b
    }()) {
      if(Rd(b) <= c) {
        a.Y[c & 31] = d
      }else {
        var f = function i(b, f) {
          var r = a.root.v === f.v ? f : new Qd(a.root.v, f.e.slice());
          if(0 === b) {
            r.e[c & 31] = d
          }else {
            var x = c >>> b & 31, u = i(b - 5, r.e[x]);
            r.e[x] = u
          }
          return r
        }.call(m, a.shift, a.root);
        a.root = f
      }
      return b
    }
    if(c === a.j) {
      return b.Ya(b, d)
    }
    e(Error([U("Index "), U(c), U(" out of bounds for TransientVector of length"), U(a.j)].join("")))
  }
  e(Error("assoc! after persistent!"))
}
q.Xa = function(a, b, c) {
  return ie(a, a, b, c)
};
q.Ya = function(a, b) {
  if(this.root.v) {
    if(32 > this.j - Rd(a)) {
      this.Y[this.j & 31] = b
    }else {
      var c = new Qd(this.root.v, this.Y), d = lb.b(32);
      d[0] = b;
      this.Y = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = lb.b(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Sd(this.root.v, this.shift, c);
        this.root = new Qd(this.root.v, d);
        this.shift = f
      }else {
        this.root = he(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
q.nb = function(a) {
  if(this.root.v) {
    this.root.v = m;
    var a = this.j - Rd(a), b = lb.b(a);
    Hc(this.Y, 0, b, 0, a);
    return new Yd(m, this.j, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
Zd;
function je(a, b, c, d) {
  this.h = a;
  this.aa = b;
  this.Ga = c;
  this.l = d;
  this.q = 0;
  this.k = 31850572
}
q = je.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.X = function() {
  return C(this.aa)
};
q.T = function(a) {
  var b = I(this.aa);
  return b ? new je(this.h, b, this.Ga, m) : this.Ga == m ? a.N(a) : new je(this.h, this.Ga, m, m)
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new je(b, this.aa, this.Ga, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(Q, this.h)
};
je;
function ke(a, b, c, d, f) {
  this.h = a;
  this.count = b;
  this.aa = c;
  this.Ga = d;
  this.l = f;
  this.q = 0;
  this.k = 31858766
}
q = ke.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.D = function(a, b) {
  var c;
  w(this.aa) ? (c = this.Ga, c = new ke(this.h, this.count + 1, this.aa, rc.a(w(c) ? c : ae, b), m)) : c = new ke(this.h, this.count + 1, rc.a(this.aa, b), ae, m);
  return c
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  var a = S(this.Ga), b = this.aa;
  return w(w(b) ? b : a) ? new je(m, this.aa, S(a), m) : m
};
q.w = o("count");
q.oa = function() {
  return C(this.aa)
};
q.X = function() {
  return J(this.aa)
};
q.T = function(a) {
  return K(S(a))
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new ke(b, this.count, this.aa, this.Ga, this.l)
};
q.I = o("h");
q.N = function() {
  return le
};
ke;
var le = new ke(m, 0, m, ae, 0);
function me() {
  this.q = 0;
  this.k = 2097152
}
me.prototype.A = p(n);
me;
var ne = new me;
function oe(a, b) {
  return Kc(Dc(b) ? T(a) === T(b) ? wd(yd, zd.a(function(a) {
    return M.a(E.c(b, J(a), ne), oc(a))
  }, a)) : m : m)
}
function pe(a, b, c) {
  for(var d = c.length, f = 0;;) {
    if(f < d) {
      if(b === c[f]) {
        return f
      }
      f += a
    }else {
      return m
    }
  }
}
function qe(a, b) {
  var c = Bc.b(a), d = Bc.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function re(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.wa, i = xc(se, yc(a)), a = 0, i = Wb(i);;) {
    if(a < f) {
      var j = d[a], a = a + 1, i = Zb(i, j, h[j])
    }else {
      return rd(Zb(i, b, c))
    }
  }
}
function te(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function ue(a, b, c, d, f) {
  this.h = a;
  this.keys = b;
  this.wa = c;
  this.zb = d;
  this.l = f;
  this.q = 1;
  this.k = 15075087
}
q = ue.prototype;
q.Va = function(a) {
  return qd(Md(fc(), a))
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Xc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return((a = v(b)) ? pe(1, b, this.keys) != m : a) ? this.wa[b] : c
};
q.P = function(a, b, c) {
  if(v(b)) {
    var d = this.zb > ve;
    if(d ? d : this.keys.length >= ve) {
      return re(a, b, c)
    }
    if(pe(1, b, this.keys) != m) {
      return a = te(this.wa, this.keys), a[b] = c, new ue(this.h, this.keys, a, this.zb + 1, m)
    }
    a = te(this.wa, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new ue(this.h, d, a, this.zb + 1, m)
  }
  return re(a, b, c)
};
q.Ua = function(a, b) {
  var c = v(b);
  return(c ? pe(1, b, this.keys) != m : c) ? l : n
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Ec(b) ? a.P(a, B.a(b, 0), B.a(b, 1)) : Rc.c(ob, a, b)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  var a = this;
  return 0 < a.keys.length ? zd.a(function(b) {
    return de.g(H([b, a.wa[b]], 0))
  }, a.keys.sort(qe)) : m
};
q.w = function() {
  return this.keys.length
};
q.A = function(a, b) {
  return oe(a, b)
};
q.K = function(a, b) {
  return new ue(b, this.keys, this.wa, this.zb, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(we, this.h)
};
q.Wa = function(a, b) {
  var c = v(b);
  if(c ? pe(1, b, this.keys) != m : c) {
    var c = this.keys.slice(), d = te(this.wa, this.keys);
    c.splice(pe(1, b, c), 1);
    delete d[b];
    return new ue(this.h, c, d, this.zb + 1, m)
  }
  return a
};
ue;
var we = new ue(m, [], {}, 0, 0), ve = 32;
function xe(a, b) {
  return new ue(m, a, b, 0, m)
}
function ye(a, b, c, d) {
  this.h = a;
  this.count = b;
  this.ia = c;
  this.l = d;
  this.q = 0;
  this.k = 15075087
}
q = ye.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Xc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  a = this.ia[Bc.b(b)];
  b = w(a) ? pe(2, b, a) : m;
  return w(b) ? a[b + 1] : c
};
q.P = function(a, b, c) {
  var a = Bc.b(b), d = this.ia[a];
  if(w(d)) {
    var d = d.slice(), f = ab(this.ia);
    f[a] = d;
    a = pe(2, b, d);
    if(w(a)) {
      return d[a + 1] = c, new ye(this.h, this.count, f, m)
    }
    d.push(b, c);
    return new ye(this.h, this.count + 1, f, m)
  }
  d = ab(this.ia);
  d[a] = [b, c];
  return new ye(this.h, this.count + 1, d, m)
};
q.Ua = function(a, b) {
  var c = this.ia[Bc.b(b)];
  return w(w(c) ? pe(2, b, c) : m) ? l : n
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Ec(b) ? a.P(a, B.a(b, 0), B.a(b, 1)) : Rc.c(ob, a, b)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  var a = this;
  if(0 < a.count) {
    var b = Gc(a.ia).sort();
    return Jd.a(function(b) {
      return zd.a(ce, Nd.a(2, a.ia[b]))
    }, b)
  }
  return m
};
q.w = o("count");
q.A = function(a, b) {
  return oe(a, b)
};
q.K = function(a, b) {
  return new ye(b, this.count, this.ia, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(ze, this.h)
};
q.Wa = function(a, b) {
  var c = Bc.b(b), d = this.ia[c], f = w(d) ? pe(2, b, d) : m;
  if(qc(f)) {
    return a
  }
  var h = ab(this.ia);
  3 > d.length ? delete h[c] : (d = d.slice(), d.splice(f, 2), h[c] = d);
  return new ye(this.h, this.count - 1, h, m)
};
ye;
var ze = new ye(m, 0, {}, 0);
function Ae(a, b) {
  for(var c = a.e, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(M.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
g;
function Be(a, b, c, d) {
  this.h = a;
  this.j = b;
  this.e = c;
  this.l = d;
  this.q = 1;
  this.k = 16123663
}
q = Be.prototype;
q.Va = function() {
  return new Ce({}, this.e.length, this.e.slice())
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Xc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  a = Ae(a, b);
  return-1 === a ? c : this.e[a + 1]
};
q.P = function(a, b, c) {
  var d = this, f = Ae(a, b);
  return-1 === f ? d.j < De ? new Be(d.h, d.j + 1, function() {
    var a = d.e.slice();
    a.push(b);
    a.push(c);
    return a
  }(), m) : rd(sd(qd(Md(se, a)), b, c)) : c === d.e[f + 1] ? a : new Be(d.h, d.j, function() {
    var a = d.e.slice();
    a[f + 1] = c;
    return a
  }(), m)
};
q.Ua = function(a, b) {
  return-1 !== Ae(a, b)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Ec(b) ? a.P(a, B.a(b, 0), B.a(b, 1)) : Rc.c(ob, a, b)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  var a = this;
  if(0 < a.j) {
    var b = a.e.length, c = function f(c) {
      return new V(m, n, function() {
        return c < b ? P(W([a.e[c], a.e[c + 1]]), f(c + 2)) : m
      }, m)
    };
    return c.b ? c.b(0) : c.call(m, 0)
  }
  return m
};
q.w = o("j");
q.A = function(a, b) {
  return oe(a, b)
};
q.K = function(a, b) {
  return new Be(b, this.j, this.e, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(Ee, this.h)
};
q.Wa = function(a, b) {
  if(0 <= Ae(a, b)) {
    var c = this.e.length, d = c - 2;
    if(0 === d) {
      return a.N(a)
    }
    for(var d = lb.b(d), f = 0, h = 0;;) {
      if(f >= c) {
        return new Be(this.h, this.j - 1, d, m)
      }
      M.a(b, this.e[f]) || (d[h] = this.e[f], d[h + 1] = this.e[f + 1], h += 2);
      f += 2
    }
  }else {
    return a
  }
};
Be;
var Ee = new Be(m, 0, [], m), De = 16;
function Fe(a, b) {
  for(var c = T(a), d = 0, f = Wb(Ee);;) {
    if(d < c) {
      var h = d + 1, f = Zb(f, a[d], b[d]), d = h
    }else {
      return Yb(f)
    }
  }
}
g;
function Ce(a, b, c) {
  this.ab = a;
  this.Da = b;
  this.e = c;
  this.q = 14;
  this.k = 258
}
q = Ce.prototype;
q.Xa = function(a, b, c) {
  if(w(this.ab)) {
    var d = Ae(a, b);
    if(-1 === d) {
      if(this.Da + 2 <= 2 * De) {
        return this.Da += 2, this.e.push(b), this.e.push(c), a
      }
      var f;
      a: {
        for(var a = this.Da, d = this.e, h = Wb(we), i = 0;;) {
          if(i < a) {
            h = Zb(h, d[i], d[i + 1]), i += 2
          }else {
            f = h;
            break a
          }
        }
      }
      return Zb(f, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
q.Ya = function(a, b) {
  if(w(this.ab)) {
    var c;
    c = b ? ((c = b.k & 2048) ? c : b.Zc) ? l : b.k ? n : z(yb, b) : z(yb, b);
    if(c) {
      return a.Xa(a, zb(b), Ab(b))
    }
    c = S(b);
    for(var d = a;;) {
      var f = J(c);
      if(w(f)) {
        c = I(c), d = d.Xa(d, zb(f), Ab(f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
q.nb = function() {
  if(w(this.ab)) {
    return this.ab = n, new Be(m, Tc((this.Da - this.Da % 2) / 2), this.e, m)
  }
  e(Error("persistent! called twice"))
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  if(w(this.ab)) {
    return a = Ae(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
q.w = function() {
  if(w(this.ab)) {
    return Tc((this.Da - this.Da % 2) / 2)
  }
  e(Error("count after persistent!"))
};
Ce;
g;
function Ge(a) {
  this.m = a
}
Ge;
g;
g;
g;
g;
g;
g;
function He(a, b) {
  return v(a) ? a === b : M.a(a, b)
}
var Ie = function() {
  function a(a, b, c, i, j) {
    a = a.slice();
    a[b] = c;
    a[i] = j;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = m, c = function(c, f, h, i, j) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.c = b;
  c.ba = a;
  return c
}();
function Je(a, b) {
  var c = lb.b(a.length - 2);
  Hc(a, 0, c, 0, 2 * b);
  Hc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Ke = function() {
  function a(a, b, c, i, j, k) {
    a = a.bb(b);
    a.e[c] = i;
    a.e[j] = k;
    return a
  }
  function b(a, b, c, i) {
    a = a.bb(b);
    a.e[c] = i;
    return a
  }
  var c = m, c = function(c, f, h, i, j, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, i);
      case 6:
        return a.call(this, c, f, h, i, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.p = b;
  c.za = a;
  return c
}();
g;
function Le(a, b, c) {
  this.v = a;
  this.H = b;
  this.e = c
}
q = Le.prototype;
q.ea = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = Uc(this.H & i - 1);
  if(0 === (this.H & i)) {
    var k = Uc(this.H);
    if(2 * k < this.e.length) {
      a = this.bb(a);
      b = a.e;
      h.m = l;
      a: {
        c = 2 * (k - j);
        h = 2 * j + (c - 1);
        for(k = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[k] = b[h];
          k -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.H |= i;
      return a
    }
    if(16 <= k) {
      j = lb.b(32);
      j[c >>> b & 31] = Me.ea(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.H >>> d & 1) && (j[d] = this.e[f] != m ? Me.ea(a, b + 5, Bc.b(this.e[f]), this.e[f], this.e[f + 1], h) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Ne(a, k + 1, j)
    }
    b = lb.b(2 * (k + 4));
    Hc(this.e, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Hc(this.e, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.m = l;
    d = this.bb(a);
    d.e = b;
    d.H |= i;
    return d
  }
  k = this.e[2 * j];
  i = this.e[2 * j + 1];
  if(k == m) {
    return d = i.ea(a, b + 5, c, d, f, h), d === i ? this : Ke.p(this, a, 2 * j + 1, d)
  }
  if(He(d, k)) {
    return f === i ? this : Ke.p(this, a, 2 * j + 1, f)
  }
  h.m = l;
  return Ke.za(this, a, 2 * j, m, 2 * j + 1, Oe.ob(a, b + 5, k, i, c, d, f))
};
q.ub = function() {
  return Pe.b(this.e)
};
q.bb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = Uc(this.H), c = lb.b(0 > b ? 4 : 2 * (b + 1));
  Hc(this.e, 0, c, 0, 2 * b);
  return new Le(a, this.H, c)
};
q.vb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.H & d)) {
    return this
  }
  var f = Uc(this.H & d - 1), h = this.e[2 * f], i = this.e[2 * f + 1];
  return h == m ? (a = i.vb(a + 5, b, c), a === i ? this : a != m ? new Le(m, this.H, Ie.c(this.e, 2 * f + 1, a)) : this.H === d ? m : new Le(m, this.H ^ d, Je(this.e, f))) : He(c, h) ? new Le(m, this.H ^ d, Je(this.e, f)) : this
};
q.da = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = Uc(this.H & h - 1);
  if(0 === (this.H & h)) {
    var j = Uc(this.H);
    if(16 <= j) {
      i = lb.b(32);
      i[b >>> a & 31] = Me.da(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.H >>> c & 1) && (i[c] = this.e[d] != m ? Me.da(a + 5, Bc.b(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Ne(m, j + 1, i)
    }
    a = lb.b(2 * (j + 1));
    Hc(this.e, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Hc(this.e, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.m = l;
    return new Le(m, this.H | h, a)
  }
  h = this.e[2 * i];
  j = this.e[2 * i + 1];
  if(h == m) {
    return f = j.da(a + 5, b, c, d, f), f === j ? this : new Le(m, this.H, Ie.c(this.e, 2 * i + 1, f))
  }
  if(He(c, h)) {
    return d === j ? this : new Le(m, this.H, Ie.c(this.e, 2 * i + 1, d))
  }
  f.m = l;
  return new Le(m, this.H, Ie.ba(this.e, 2 * i, m, 2 * i + 1, Oe.za(a + 5, h, j, b, c, d)))
};
q.Aa = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.H & f)) {
    return d
  }
  var h = Uc(this.H & f - 1), f = this.e[2 * h], h = this.e[2 * h + 1];
  return f == m ? h.Aa(a + 5, b, c, d) : He(c, f) ? h : d
};
Le;
var Me = new Le(m, 0, lb.b(0));
function Ne(a, b, c) {
  this.v = a;
  this.j = b;
  this.e = c
}
q = Ne.prototype;
q.ea = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.e[i];
  if(j == m) {
    return a = Ke.p(this, a, i, Me.ea(a, b + 5, c, d, f, h)), a.j += 1, a
  }
  b = j.ea(a, b + 5, c, d, f, h);
  return b === j ? this : Ke.p(this, a, i, b)
};
q.ub = function() {
  return Qe.b(this.e)
};
q.bb = function(a) {
  return a === this.v ? this : new Ne(a, this.j, this.e.slice())
};
q.vb = function(a, b, c) {
  var d = b >>> a & 31, f = this.e[d];
  if(f != m) {
    a = f.vb(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == m) {
        if(8 >= this.j) {
          a: {
            for(var f = this.e, a = 2 * (this.j - 1), b = lb.b(a), c = 0, h = 1, i = 0;;) {
              if(c < a) {
                var j = c !== d;
                if(j ? f[c] != m : j) {
                  b[h] = f[c], h += 2, i |= 1 << c
                }
                c += 1
              }else {
                d = new Le(m, i, b);
                break a
              }
            }
            d = g
          }
        }else {
          d = new Ne(m, this.j - 1, Ie.c(this.e, d, a))
        }
      }else {
        d = new Ne(m, this.j, Ie.c(this.e, d, a))
      }
    }
    return d
  }
  return this
};
q.da = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.e[h];
  if(i == m) {
    return new Ne(m, this.j + 1, Ie.c(this.e, h, Me.da(a + 5, b, c, d, f)))
  }
  a = i.da(a + 5, b, c, d, f);
  return a === i ? this : new Ne(m, this.j, Ie.c(this.e, h, a))
};
q.Aa = function(a, b, c, d) {
  var f = this.e[b >>> a & 31];
  return f != m ? f.Aa(a + 5, b, c, d) : d
};
Ne;
function Se(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(He(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Te(a, b, c, d) {
  this.v = a;
  this.pa = b;
  this.j = c;
  this.e = d
}
q = Te.prototype;
q.ea = function(a, b, c, d, f, h) {
  if(c === this.pa) {
    b = Se(this.e, this.j, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.j) {
        return a = Ke.za(this, a, 2 * this.j, d, 2 * this.j + 1, f), h.m = l, a.j += 1, a
      }
      c = this.e.length;
      b = lb.b(c + 2);
      Hc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.m = l;
      h = this.j + 1;
      a === this.v ? (this.e = b, this.j = h, a = this) : a = new Te(this.v, this.pa, h, b);
      return a
    }
    return this.e[b + 1] === f ? this : Ke.p(this, a, b + 1, f)
  }
  return(new Le(a, 1 << (this.pa >>> b & 31), [m, this, m, m])).ea(a, b, c, d, f, h)
};
q.ub = function() {
  return Pe.b(this.e)
};
q.bb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = lb.b(2 * (this.j + 1));
  Hc(this.e, 0, b, 0, 2 * this.j);
  return new Te(a, this.pa, this.j, b)
};
q.vb = function(a, b, c) {
  a = Se(this.e, this.j, c);
  return-1 === a ? this : 1 === this.j ? m : new Te(m, this.pa, this.j - 1, Je(this.e, Tc((a - a % 2) / 2)))
};
q.da = function(a, b, c, d, f) {
  return b === this.pa ? (a = Se(this.e, this.j, c), -1 === a ? (a = this.e.length, b = lb.b(a + 2), Hc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.m = l, new Te(m, this.pa, this.j + 1, b)) : M.a(this.e[a], d) ? this : new Te(m, this.pa, this.j, Ie.c(this.e, a + 1, d))) : (new Le(m, 1 << (this.pa >>> a & 31), [m, this])).da(a, b, c, d, f)
};
q.Aa = function(a, b, c, d) {
  a = Se(this.e, this.j, c);
  return 0 > a ? d : He(c, this.e[a]) ? this.e[a + 1] : d
};
Te;
var Oe = function() {
  function a(a, b, c, i, j, k, r) {
    var x = Bc.b(c);
    if(x === j) {
      return new Te(m, x, 2, [c, i, k, r])
    }
    var u = new Ge(n);
    return Me.ea(a, b, x, c, i, u).ea(a, b, j, k, r, u)
  }
  function b(a, b, c, i, j, k) {
    var r = Bc.b(b);
    if(r === i) {
      return new Te(m, r, 2, [b, c, j, k])
    }
    var x = new Ge(n);
    return Me.da(a, r, b, c, x).da(a, i, j, k, x)
  }
  var c = m, c = function(c, f, h, i, j, k, r) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, i, j, k);
      case 7:
        return a.call(this, c, f, h, i, j, k, r)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.za = b;
  c.ob = a;
  return c
}();
function Ue(a, b, c, d, f) {
  this.h = a;
  this.Fa = b;
  this.t = c;
  this.va = d;
  this.l = f;
  this.q = 0;
  this.k = 31850572
}
q = Ue.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.X = function() {
  return this.va == m ? W([this.Fa[this.t], this.Fa[this.t + 1]]) : J(this.va)
};
q.T = function() {
  return this.va == m ? Pe.c(this.Fa, this.t + 2, m) : Pe.c(this.Fa, this.t, I(this.va))
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new Ue(b, this.Fa, this.t, this.va, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(Q, this.h)
};
Ue;
var Pe = function() {
  function a(a, b, c) {
    if(c == m) {
      for(c = a.length;;) {
        if(b < c) {
          if(a[b] != m) {
            return new Ue(m, a, b, m, m)
          }
          var i = a[b + 1];
          if(w(i) && (i = i.ub(), w(i))) {
            return new Ue(m, a, b + 2, i, m)
          }
          b += 2
        }else {
          return m
        }
      }
    }else {
      return new Ue(m, a, b, c, m)
    }
  }
  function b(a) {
    return c.c(a, 0, m)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.c = a;
  return c
}();
function Ve(a, b, c, d, f) {
  this.h = a;
  this.Fa = b;
  this.t = c;
  this.va = d;
  this.l = f;
  this.q = 0;
  this.k = 31850572
}
q = Ve.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.X = function() {
  return J(this.va)
};
q.T = function() {
  return Qe.p(m, this.Fa, this.t, I(this.va))
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new Ve(b, this.Fa, this.t, this.va, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(Q, this.h)
};
Ve;
var Qe = function() {
  function a(a, b, c, i) {
    if(i == m) {
      for(i = b.length;;) {
        if(c < i) {
          var j = b[c];
          if(w(j) && (j = j.ub(), w(j))) {
            return new Ve(a, b, c + 1, j, m)
          }
          c += 1
        }else {
          return m
        }
      }
    }else {
      return new Ve(a, b, c, i, m)
    }
  }
  function b(a) {
    return c.p(m, a, 0, m)
  }
  var c = m, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.p = a;
  return c
}();
g;
function We(a, b, c, d, f, h) {
  this.h = a;
  this.j = b;
  this.root = c;
  this.U = d;
  this.Z = f;
  this.l = h;
  this.q = 1;
  this.k = 16123663
}
q = We.prototype;
q.Va = function() {
  return new Xe({}, this.root, this.j, this.U, this.Z)
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Xc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return b == m ? this.U ? this.Z : c : this.root == m ? c : this.root.Aa(0, Bc.b(b), b, c)
};
q.P = function(a, b, c) {
  if(b == m) {
    var d = this.U;
    return(d ? c === this.Z : d) ? a : new We(this.h, this.U ? this.j : this.j + 1, this.root, l, c, m)
  }
  d = new Ge(n);
  c = (this.root == m ? Me : this.root).da(0, Bc.b(b), b, c, d);
  return c === this.root ? a : new We(this.h, d.m ? this.j + 1 : this.j, c, this.U, this.Z, m)
};
q.Ua = function(a, b) {
  return b == m ? this.U : this.root == m ? n : this.root.Aa(0, Bc.b(b), b, Ic) !== Ic
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Ec(b) ? a.P(a, B.a(b, 0), B.a(b, 1)) : Rc.c(ob, a, b)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  if(0 < this.j) {
    var a = this.root != m ? this.root.ub() : m;
    return this.U ? P(W([m, this.Z]), a) : a
  }
  return m
};
q.w = o("j");
q.A = function(a, b) {
  return oe(a, b)
};
q.K = function(a, b) {
  return new We(b, this.j, this.root, this.U, this.Z, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(se, this.h)
};
q.Wa = function(a, b) {
  if(b == m) {
    return this.U ? new We(this.h, this.j - 1, this.root, n, m, m) : a
  }
  if(this.root == m) {
    return a
  }
  var c = this.root.vb(0, Bc.b(b), b);
  return c === this.root ? a : new We(this.h, this.j - 1, c, this.U, this.Z, m)
};
We;
var se = new We(m, 0, m, n, m, 0);
function Xe(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.U = d;
  this.Z = f;
  this.q = 14;
  this.k = 258
}
q = Xe.prototype;
q.Xa = function(a, b, c) {
  return Ye(a, b, c)
};
q.Ya = function(a, b) {
  var c;
  a: {
    if(a.v) {
      var d;
      d = b ? ((d = b.k & 2048) ? d : b.Zc) ? l : b.k ? n : z(yb, b) : z(yb, b);
      if(d) {
        c = Ye(a, zb(b), Ab(b))
      }else {
        d = S(b);
        for(var f = a;;) {
          var h = J(d);
          if(w(h)) {
            d = I(d), f = Ye(f, zb(h), Ab(h))
          }else {
            c = f;
            break a
          }
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
  }
  return c
};
q.nb = function(a) {
  var b;
  a.v ? (a.v = m, b = new We(m, a.count, a.root, a.U, a.Z, m)) : e(Error("persistent! called twice"));
  return b
};
q.B = function(a, b) {
  return b == m ? this.U ? this.Z : m : this.root == m ? m : this.root.Aa(0, Bc.b(b), b)
};
q.r = function(a, b, c) {
  return b == m ? this.U ? this.Z : c : this.root == m ? c : this.root.Aa(0, Bc.b(b), b, c)
};
q.w = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Ye(a, b, c) {
  if(a.v) {
    if(b == m) {
      if(a.Z !== c && (a.Z = c), !a.U) {
        a.count += 1, a.U = l
      }
    }else {
      var d = new Ge(n), b = (a.root == m ? Me : a.root).ea(a.v, 0, Bc.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.m && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
Xe;
function Ze(a, b, c) {
  for(var d = b;;) {
    if(a != m) {
      b = c ? a.left : a.right, d = rc.a(d, a), a = b
    }else {
      return d
    }
  }
}
function $e(a, b, c, d, f) {
  this.h = a;
  this.stack = b;
  this.Bb = c;
  this.j = d;
  this.l = f;
  this.q = 0;
  this.k = 31850570
}
q = $e.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = aa();
q.w = function(a) {
  return 0 > this.j ? T(I(a)) + 1 : this.j
};
q.X = function() {
  return Cb(this.stack)
};
q.T = function() {
  var a = J(this.stack), a = Ze(this.Bb ? a.right : a.left, I(this.stack), this.Bb);
  return a != m ? new $e(m, a, this.Bb, this.j - 1, m) : Q
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new $e(b, this.stack, this.Bb, this.j, this.l)
};
q.I = o("h");
$e;
g;
g;
function af(a, b, c, d) {
  return O(X, c) ? O(X, c.left) ? new X(c.key, c.m, c.left.la(), new Y(a, b, c.right, d, m), m) : O(X, c.right) ? new X(c.right.key, c.right.m, new Y(c.key, c.m, c.left, c.right.left, m), new Y(a, b, c.right.right, d, m), m) : new Y(a, b, c, d, m) : new Y(a, b, c, d, m)
}
function bf(a, b, c, d) {
  return O(X, d) ? O(X, d.right) ? new X(d.key, d.m, new Y(a, b, c, d.left, m), d.right.la(), m) : O(X, d.left) ? new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, m), new Y(d.key, d.m, d.left.right, d.right, m), m) : new Y(a, b, c, d, m) : new Y(a, b, c, d, m)
}
function cf(a, b, c, d) {
  if(O(X, c)) {
    return new X(a, b, c.la(), d, m)
  }
  if(O(Y, d)) {
    return bf(a, b, c, d.xb())
  }
  var f = O(X, d);
  if(f ? O(Y, d.left) : f) {
    return new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, m), bf(d.key, d.m, d.left.right, d.right.xb()), m)
  }
  e(Error("red-black tree invariant violation"))
}
function df(a, b, c, d) {
  if(O(X, d)) {
    return new X(a, b, c, d.la(), m)
  }
  if(O(Y, c)) {
    return af(a, b, c.xb(), d)
  }
  var f = O(X, c);
  if(f ? O(Y, c.right) : f) {
    return new X(c.right.key, c.right.m, af(c.key, c.m, c.left.xb(), c.right.left), new Y(a, b, c.right.right, d, m), m)
  }
  e(Error("red-black tree invariant violation"))
}
function Y(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.q = 0;
  this.k = 32402207
}
q = Y.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.P = function(a, b, c) {
  return vc.c(W([this.key, this.m]), b, c)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return W([this.key, this.m, b])
};
q.Eb = o("key");
q.Fb = o("m");
q.vc = function(a) {
  return a.xc(this)
};
q.xb = function() {
  return new X(this.key, this.m, this.left, this.right, m)
};
q.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, m)
};
q.uc = function(a) {
  return a.wc(this)
};
q.wc = function(a) {
  return new Y(a.key, a.m, this, a.right, m)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return R.g(H([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.xc = function(a) {
  return new Y(a.key, a.m, a.left, this, m)
};
q.la = function() {
  return this
};
q.ma = function(a, b) {
  return hc.a(a, b)
};
q.na = function(a, b, c) {
  return hc.c(a, b, c)
};
q.z = function() {
  return N.a(this.key, this.m)
};
q.w = p(2);
q.oa = o("m");
q.Za = function(a, b, c) {
  return Eb(W([this.key, this.m]), b, c)
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return xc(W([this.key, this.m]), b)
};
q.I = p(m);
q.Q = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : m
};
q.L = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
q.N = function() {
  return ae
};
Y;
function X(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.q = 0;
  this.k = 32402207
}
q = X.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.B = function(a, b) {
  return a.L(a, b, m)
};
q.r = function(a, b, c) {
  return a.L(a, b, c)
};
q.P = function(a, b, c) {
  return vc.c(W([this.key, this.m]), b, c)
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return W([this.key, this.m, b])
};
q.Eb = o("key");
q.Fb = o("m");
q.vc = function(a) {
  return new X(this.key, this.m, this.left, a, m)
};
q.xb = function() {
  e(Error("red-black tree invariant violation"))
};
q.replace = function(a, b, c, d) {
  return new X(a, b, c, d, m)
};
q.uc = function(a) {
  return new X(this.key, this.m, a, this.right, m)
};
q.wc = function(a) {
  return O(X, this.left) ? new X(this.key, this.m, this.left.la(), new Y(a.key, a.m, this.right, a.right, m), m) : O(X, this.right) ? new X(this.right.key, this.right.m, new Y(this.key, this.m, this.left, this.right.left, m), new Y(a.key, a.m, this.right.right, a.right, m), m) : new Y(a.key, a.m, this, a.right, m)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return R.g(H([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.xc = function(a) {
  return O(X, this.right) ? new X(this.key, this.m, new Y(a.key, a.m, a.left, this.left, m), this.right.la(), m) : O(X, this.left) ? new X(this.left.key, this.left.m, new Y(a.key, a.m, a.left, this.left.left, m), new Y(this.key, this.m, this.left.right, this.right, m), m) : new Y(a.key, a.m, a.left, this, m)
};
q.la = function() {
  return new Y(this.key, this.m, this.left, this.right, m)
};
q.ma = function(a, b) {
  return hc.a(a, b)
};
q.na = function(a, b, c) {
  return hc.c(a, b, c)
};
q.z = function() {
  return N.a(this.key, this.m)
};
q.w = p(2);
q.oa = o("m");
q.Za = function(a, b, c) {
  return Eb(W([this.key, this.m]), b, c)
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return xc(W([this.key, this.m]), b)
};
q.I = p(m);
q.Q = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : m
};
q.L = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
q.N = function() {
  return ae
};
X;
var ff = function ef(b, c, d, f, h) {
  if(c == m) {
    return new X(d, f, m, m, m)
  }
  var i = b.a ? b.a(d, c.key) : b.call(m, d, c.key);
  if(0 === i) {
    return h[0] = c, m
  }
  if(0 > i) {
    return b = ef(b, c.left, d, f, h), b != m ? c.uc(b) : m
  }
  b = ef(b, c.right, d, f, h);
  return b != m ? c.vc(b) : m
}, hf = function gf(b, c) {
  if(b == m) {
    return c
  }
  if(c == m) {
    return b
  }
  if(O(X, b)) {
    if(O(X, c)) {
      var d = gf(b.right, c.left);
      return O(X, d) ? new X(d.key, d.m, new X(b.key, b.m, b.left, d.left, m), new X(c.key, c.m, d.right, c.right, m), m) : new X(b.key, b.m, b.left, new X(c.key, c.m, d, c.right, m), m)
    }
    return new X(b.key, b.m, b.left, gf(b.right, c), m)
  }
  if(O(X, c)) {
    return new X(c.key, c.m, gf(b, c.left), c.right, m)
  }
  d = gf(b.right, c.left);
  return O(X, d) ? new X(d.key, d.m, new Y(b.key, b.m, b.left, d.left, m), new Y(c.key, c.m, d.right, c.right, m), m) : cf(b.key, b.m, b.left, new Y(c.key, c.m, d, c.right, m))
}, kf = function jf(b, c, d, f) {
  if(c != m) {
    var h = b.a ? b.a(d, c.key) : b.call(m, d, c.key);
    if(0 === h) {
      return f[0] = c, hf(c.left, c.right)
    }
    if(0 > h) {
      var i = jf(b, c.left, d, f);
      return function() {
        var b = i != m;
        return b ? b : f[0] != m
      }() ? O(Y, c.left) ? cf(c.key, c.m, i, c.right) : new X(c.key, c.m, i, c.right, m) : m
    }
    var j = jf(b, c.right, d, f);
    return function() {
      var b = j != m;
      return b ? b : f[0] != m
    }() ? O(Y, c.right) ? df(c.key, c.m, c.left, j) : new X(c.key, c.m, c.left, j, m) : m
  }
  return m
}, mf = function lf(b, c, d, f) {
  var h = c.key, i = b.a ? b.a(d, h) : b.call(m, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.m, lf(b, c.left, d, f), c.right) : c.replace(h, c.m, c.left, lf(b, c.right, d, f))
};
g;
function nf(a, b, c, d, f) {
  this.ca = a;
  this.Ra = b;
  this.j = c;
  this.h = d;
  this.l = f;
  this.q = 0;
  this.k = 418776847
}
q = nf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Xc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  a = of(a, b);
  return a != m ? a.m : c
};
q.P = function(a, b, c) {
  var d = [m], f = ff(this.ca, this.Ra, b, c, d);
  return f == m ? (d = uc.a(d, 0), M.a(c, d.m) ? a : new nf(this.ca, mf(this.ca, this.Ra, b, c), this.j, this.h, m)) : new nf(this.ca, f.la(), this.j + 1, this.h, m)
};
q.Ua = function(a, b) {
  return of(a, b) != m
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Ec(b) ? a.P(a, B.a(b, 0), B.a(b, 1)) : Rc.c(ob, a, b)
};
q.mb = function() {
  return 0 < this.j ? new $e(m, Ze(this.Ra, m, n), n, this.j, m) : m
};
q.toString = function() {
  return R.g(H([this], 0))
};
function of(a, b) {
  for(var c = a.Ra;;) {
    if(c != m) {
      var d = a.ca.a ? a.ca.a(b, c.key) : a.ca.call(m, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return m
    }
  }
}
q.z = function() {
  return 0 < this.j ? new $e(m, Ze(this.Ra, m, l), l, this.j, m) : m
};
q.w = o("j");
q.A = function(a, b) {
  return oe(a, b)
};
q.K = function(a, b) {
  return new nf(this.ca, this.Ra, this.j, b, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(pf, this.h)
};
q.Wa = function(a, b) {
  var c = [m], d = kf(this.ca, this.Ra, b, c);
  return d == m ? uc.a(c, 0) == m ? a : new nf(this.ca, m, 0, this.h, m) : new nf(this.ca, d.la(), this.j - 1, this.h, m)
};
nf;
var pf = new nf(Pc, m, 0, m, 0), fc = function() {
  function a(a) {
    var d = m;
    t(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = S(a), b = Wb(se);;) {
      if(a) {
        var f = I(I(a)), b = sd(b, J(a), oc(a)), a = f
      }else {
        return Yb(b)
      }
    }
  }
  a.o = 0;
  a.n = function(a) {
    a = S(a);
    return b(a)
  };
  a.g = b;
  return a
}(), qf = function() {
  function a(a) {
    var d = m;
    t(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = S(a), b = pf;;) {
      if(a) {
        var f = I(I(a)), b = vc.c(b, J(a), oc(a)), a = f
      }else {
        return b
      }
    }
  }
  a.o = 0;
  a.n = function(a) {
    a = S(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function rf(a) {
  return zb(a)
}
g;
function sf(a, b, c) {
  this.h = a;
  this.sb = b;
  this.l = c;
  this.q = 1;
  this.k = 15077647
}
q = sf.prototype;
q.Va = function() {
  return new tf(Wb(this.sb))
};
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Zc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return w(ub(this.sb, b)) ? b : c
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new sf(this.h, vc.c(this.sb, b, m), m)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  return S(zd.a(J, this.sb))
};
q.w = function(a) {
  return T(S(a))
};
q.A = function(a, b) {
  var c = Cc(b);
  return c ? (c = T(a) === T(b)) ? wd(function(b) {
    return Oc(a, b)
  }, b) : c : c
};
q.K = function(a, b) {
  return new sf(b, this.sb, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(uf, this.h)
};
sf;
var uf = new sf(m, fc(), 0);
function tf(a) {
  this.Qa = a;
  this.k = 259;
  this.q = 34
}
q = tf.prototype;
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return E.c(this.Qa, c, Ic) === Ic ? m : c;
      case 3:
        return E.c(this.Qa, c, Ic) === Ic ? d : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return E.c(this.Qa, b, Ic) === Ic ? c : b
};
q.w = function() {
  return T(this.Qa)
};
q.Ya = function(a, b) {
  this.Qa = Zb(this.Qa, b, m);
  return a
};
q.nb = function() {
  return new sf(m, Yb(this.Qa), m)
};
tf;
function vf(a, b, c) {
  this.h = a;
  this.kb = b;
  this.l = c;
  this.q = 0;
  this.k = 417730831
}
q = vf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Zc(a)
};
q.B = function(a, b) {
  return a.r(a, b, m)
};
q.r = function(a, b, c) {
  return w(ub(this.kb, b)) ? b : c
};
q.call = function() {
  var a = m;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new vf(this.h, vc.c(this.kb, b, m), m)
};
q.mb = function() {
  return zd.a(rf, Qb(this.kb))
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.z = function() {
  return S(zd.a(J, this.kb))
};
q.w = function() {
  return T(this.kb)
};
q.A = function(a, b) {
  var c = Cc(b);
  return c ? (c = T(a) === T(b)) ? wd(function(b) {
    return Oc(a, b)
  }, b) : c : c
};
q.K = function(a, b) {
  return new vf(b, this.kb, this.l)
};
q.I = o("h");
q.N = function() {
  return Hb(wf, this.h)
};
vf;
var wf = new vf(m, qf(), 0);
function xf(a) {
  for(var b = S(a), c = Wb(uf);;) {
    if(S(b)) {
      a = I(b), b = J(b), c = Xb(c, b), b = a
    }else {
      return Yb(c)
    }
  }
}
function yf(a) {
  if(Lc(a)) {
    return a
  }
  var b = Mc(a);
  if(b ? b : Nc(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? Wc.a(a, 2) : Wc.a(a, b + 1)
  }
  e(Error([U("Doesn't support name: "), U(a)].join("")))
}
function zf(a) {
  var b = Mc(a);
  if(b ? b : Nc(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? Wc.c(a, 2, b) : m
  }
  e(Error([U("Doesn't support namespace: "), U(a)].join("")))
}
var Bf = function Af(b, c) {
  return new V(m, n, function() {
    var d = S(c);
    return d ? w(b.b ? b.b(J(d)) : b.call(m, J(d))) ? P(J(d), Af(b, K(d))) : m : m
  }, m)
};
function Cf(a, b, c, d, f) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.q = 0;
  this.k = 32375006
}
q = Cf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = jc(a)
};
q.ya = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Cf(this.h, this.start + this.step, this.end, this.step, m) : m : this.start + this.step > this.end ? new Cf(this.h, this.start + this.step, this.end, this.step, m) : m
};
q.D = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.g(H([this], 0))
};
q.ma = function(a, b) {
  return hc.a(a, b)
};
q.na = function(a, b, c) {
  return hc.c(a, b, c)
};
q.z = function(a) {
  return 0 < this.step ? this.start < this.end ? a : m : this.start > this.end ? a : m
};
q.w = function(a) {
  return qc(a.z(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.X = o("start");
q.T = function(a) {
  return a.z(a) != m ? new Cf(this.h, this.start + this.step, this.end, this.step, m) : Q
};
q.A = function(a, b) {
  return mc(a, b)
};
q.K = function(a, b) {
  return new Cf(b, this.start, this.end, this.step, this.l)
};
q.I = o("h");
q.Q = function(a, b) {
  if(b < a.w(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
q.L = function(a, b, c) {
  c = b < a.w(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
q.N = function() {
  return Hb(Q, this.h)
};
Cf;
var Df = function() {
  function a(a, b, c) {
    return new Cf(m, a, b, c, m)
  }
  function b(a, b) {
    return f.c(a, b, 1)
  }
  function c(a) {
    return f.c(0, a, 1)
  }
  function d() {
    return f.c(0, Number.MAX_VALUE, 1)
  }
  var f = m, f = function(f, i, j) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, f);
      case 2:
        return b.call(this, f, i);
      case 3:
        return a.call(this, f, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  f.O = d;
  f.b = c;
  f.a = b;
  f.c = a;
  return f
}();
function Ef(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === T(c) ? J(c) : ce(c)
}
function Z(a, b, c, d, f, h) {
  return od.g(W([b]), Id(Hd(W([c]), zd.a(function(b) {
    return a.a ? a.a(b, f) : a.call(m, b, f)
  }, h))), H([W([d])], 0))
}
var $ = function Ff(b, c) {
  return b == m ? N.b("nil") : g === b ? N.b("#<undefined>") : od.a(w(function() {
    var d = E.c(c, "\ufdd0'meta", m);
    return w(d) ? (d = b ? ((d = b.k & 131072) ? d : b.$c) ? l : b.k ? n : z(Fb, b) : z(Fb, b), w(d) ? yc(b) : d) : d
  }()) ? od.g(W(["^"]), Ff(yc(b), c), H([W([" "])], 0)) : m, function() {
    var c = b != m;
    return c ? b.Ed : c
  }() ? b.Dd(b) : function() {
    var c;
    c = b ? ((c = b.k & 536870912) ? c : b.J) ? l : b.k ? n : z(Rb, b) : z(Rb, b);
    return c
  }() ? Sb(b, c) : w(b instanceof RegExp) ? N.c('#"', b.source, '"') : N.c("#<", "" + U(b), ">"))
}, R = function() {
  function a(a) {
    var d = m;
    t(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = xe(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":l, "\ufdd0'readably":l, "\ufdd0'meta":n, "\ufdd0'dup":n}), f = J(a), h = new kb;
    if(a = S(a)) {
      for(var i = J(a);;) {
        i !== f && h.append(" ");
        var j = S($(i, b));
        if(j) {
          for(i = J(j);;) {
            if(h.append(i), i = I(j)) {
              j = i, i = J(j)
            }else {
              break
            }
          }
        }
        if(a = I(a)) {
          i = a, a = J(i), j = i, i = a, a = j
        }else {
          break
        }
      }
    }
    return"" + U(h)
  }
  a.o = 0;
  a.n = function(a) {
    a = S(a);
    return b(a)
  };
  a.g = b;
  return a
}();
ye.prototype.J = l;
ye.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Rb.number = l;
Sb.number = function(a) {
  return N.b("" + U(a))
};
ic.prototype.J = l;
ic.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
fe.prototype.J = l;
fe.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
id.prototype.J = l;
id.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
nf.prototype.J = l;
nf.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Be.prototype.J = l;
Be.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ke.prototype.J = l;
ke.prototype.C = function(a, b) {
  return Z($, "#queue [", " ", "]", b, S(a))
};
V.prototype.J = l;
V.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
kc.prototype.J = l;
kc.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
vf.prototype.J = l;
vf.prototype.C = function(a, b) {
  return Z($, "#{", " ", "}", b, a)
};
Rb["boolean"] = l;
Sb["boolean"] = function(a) {
  return N.b("" + U(a))
};
Rb.string = l;
Sb.string = function(a, b) {
  return Mc(a) ? N.b([U(":"), U(function() {
    var b = zf(a);
    return w(b) ? [U(b), U("/")].join("") : m
  }()), U(yf(a))].join("")) : Nc(a) ? N.b([U(function() {
    var b = zf(a);
    return w(b) ? [U(b), U("/")].join("") : m
  }()), U(yf(a))].join("")) : N.b(w((new dd("\ufdd0'readably")).call(m, b)) ? Ia(a) : a)
};
Ue.prototype.J = l;
Ue.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
X.prototype.J = l;
X.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
ee.prototype.J = l;
ee.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
We.prototype.J = l;
We.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Od.prototype.J = l;
Od.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
sf.prototype.J = l;
sf.prototype.C = function(a, b) {
  return Z($, "#{", " ", "}", b, a)
};
Yd.prototype.J = l;
Yd.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
$c.prototype.J = l;
$c.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Rb.array = l;
Sb.array = function(a, b) {
  return Z($, "#<Array [", ", ", "]>", b, a)
};
Rb["function"] = l;
Sb["function"] = function(a) {
  return N.c("#<", "" + U(a), ">")
};
ad.prototype.J = l;
ad.prototype.C = function() {
  return N.b("()")
};
Y.prototype.J = l;
Y.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
Date.prototype.J = l;
Date.prototype.C = function(a) {
  function b(a, b) {
    for(var f = "" + U(a);;) {
      if(T(f) < b) {
        f = [U("0"), U(f)].join("")
      }else {
        return f
      }
    }
  }
  return N.b([U('#inst "'), U(a.getUTCFullYear()), U("-"), U(b.a ? b.a(a.getUTCMonth() + 1, 2) : b.call(m, a.getUTCMonth() + 1, 2)), U("-"), U(b.a ? b.a(a.getUTCDate(), 2) : b.call(m, a.getUTCDate(), 2)), U("T"), U(b.a ? b.a(a.getUTCHours(), 2) : b.call(m, a.getUTCHours(), 2)), U(":"), U(b.a ? b.a(a.getUTCMinutes(), 2) : b.call(m, a.getUTCMinutes(), 2)), U(":"), U(b.a ? b.a(a.getUTCSeconds(), 2) : b.call(m, a.getUTCSeconds(), 2)), U("."), U(b.a ? b.a(a.getUTCMilliseconds(), 3) : b.call(m, a.getUTCMilliseconds(), 
  3)), U("-"), U('00:00"')].join(""))
};
cd.prototype.J = l;
cd.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Cf.prototype.J = l;
Cf.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Ve.prototype.J = l;
Ve.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
ue.prototype.J = l;
ue.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
$e.prototype.J = l;
$e.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Yd.prototype.Yc = l;
Yd.prototype.Cc = function(a, b) {
  return Qc.a(a, b)
};
function Gf(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.ud = c;
  this.tc = d;
  this.q = 0;
  this.k = 2690809856
}
q = Gf.prototype;
q.F = function(a) {
  return ka(a)
};
q.Gc = function(a, b, c) {
  var d = S(this.tc);
  if(d) {
    var f = J(d);
    uc.c(f, 0, m);
    for(uc.c(f, 1, m);;) {
      var h = f, f = uc.c(h, 0, m), h = uc.c(h, 1, m);
      h.p ? h.p(f, a, b, c) : h.call(m, f, a, b, c);
      if(d = I(d)) {
        f = d, d = J(f), h = f, f = d, d = h
      }else {
        return m
      }
    }
  }else {
    return m
  }
};
q.Fc = function(a, b, c) {
  return a.tc = vc.c(this.tc, b, c)
};
q.C = function(a, b) {
  return od.g(W(["#<Atom: "]), Sb(this.state, b), H([">"], 0))
};
q.I = o("h");
q.Db = o("state");
q.A = function(a, b) {
  return a === b
};
Gf;
var Hf = function() {
  function a(a) {
    return new Gf(a, m, m, m)
  }
  var b = m, c = function() {
    function a(c, d) {
      var j = m;
      t(d) && (j = H(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, j)
    }
    function b(a, c) {
      var d = Jc(c) ? ud.a(fc, c) : c, f = E.c(d, "\ufdd0'validator", m), d = E.c(d, "\ufdd0'meta", m);
      return new Gf(a, d, f, m)
    }
    a.o = 1;
    a.n = function(a) {
      var c = J(a), a = K(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, H(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.b = a;
  b.g = c.g;
  return b
}();
function If(a, b) {
  var c = a.ud;
  w(c) && !w(c.b ? c.b(b) : c.call(m, b)) && e(Error([U("Assert failed: "), U("Validator rejected reference state"), U("\n"), U(R.g(H([xc(N("\ufdd1'validate", "\ufdd1'new-value"), fc("\ufdd0'line", 6394))], 0)))].join("")));
  c = a.state;
  a.state = b;
  Tb(a, c, b);
  return b
}
var Jf = function() {
  function a(a, b, c, d, f) {
    return If(a, b.p ? b.p(a.state, c, d, f) : b.call(m, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return If(a, b.c ? b.c(a.state, c, d) : b.call(m, a.state, c, d))
  }
  function c(a, b, c) {
    return If(a, b.a ? b.a(a.state, c) : b.call(m, a.state, c))
  }
  function d(a, b) {
    return If(a, b.b ? b.b(a.state) : b.call(m, a.state))
  }
  var f = m, h = function() {
    function a(c, d, f, h, i, G) {
      var L = m;
      t(G) && (L = H(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, L)
    }
    function b(a, c, d, f, h, i) {
      return If(a, ud.g(c, a.state, d, f, h, H([i], 0)))
    }
    a.o = 5;
    a.n = function(a) {
      var c = J(a), d = J(I(a)), f = J(I(I(a))), h = J(I(I(I(a)))), i = J(I(I(I(I(a))))), a = K(I(I(I(I(a)))));
      return b(c, d, f, h, i, a)
    };
    a.g = b;
    return a
  }(), f = function(f, j, k, r, x, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, r);
      case 5:
        return a.call(this, f, j, k, r, x);
      default:
        return h.g(f, j, k, r, x, H(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.o = 5;
  f.n = h.n;
  f.a = d;
  f.c = c;
  f.p = b;
  f.ba = a;
  f.g = h.g;
  return f
}();
function Kf(a, b) {
  this.state = a;
  this.ic = b;
  this.q = 0;
  this.k = 1073774592
}
Kf.prototype.Db = function() {
  var a = this;
  return(new dd("\ufdd0'value")).call(m, Jf.a(a.state, function(b) {
    var b = Jc(b) ? ud.a(fc, b) : b, c = E.c(b, "\ufdd0'done", m);
    return w(c) ? b : xe(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":l, "\ufdd0'value":a.ic.O ? a.ic.O() : a.ic.call(m)})
  }))
};
Kf;
var Lf = Hf.b(xe(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":we, "\ufdd0'descendants":we, "\ufdd0'ancestors":we})), Mf = function() {
  function a(a, b, h) {
    var i = M.a(b, h);
    if(!i && !(i = Oc((new dd("\ufdd0'ancestors")).call(m, a).call(m, b), h)) && (i = Ec(h))) {
      if(i = Ec(b)) {
        if(i = T(h) === T(b)) {
          for(var i = l, j = 0;;) {
            var k = qc(i);
            if(k ? k : j === T(h)) {
              return i
            }
            i = c.c(a, b.b ? b.b(j) : b.call(m, j), h.b ? h.b(j) : h.call(m, j));
            j += 1
          }
        }else {
          return i
        }
      }else {
        return i
      }
    }else {
      return i
    }
  }
  function b(a, b) {
    return c.c(F(Lf), a, b)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Nf = function() {
  function a(a, b) {
    var c = E.c((new dd("\ufdd0'parents")).call(m, a), b, m);
    return S(c) ? c : m
  }
  function b(a) {
    return c.a(F(Lf), a)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Of(a, b, c, d) {
  Jf.a(a, function() {
    return F(b)
  });
  Jf.a(c, function() {
    return F(d)
  })
}
var Qf = function Pf(b, c, d) {
  var f = F(d).call(m, b), f = w(w(f) ? f.b ? f.b(c) : f.call(m, c) : f) ? l : m;
  if(w(f)) {
    return f
  }
  f = function() {
    for(var f = Nf.b(c);;) {
      if(0 < T(f)) {
        Pf(b, J(f), d), f = K(f)
      }else {
        return m
      }
    }
  }();
  if(w(f)) {
    return f
  }
  f = function() {
    for(var f = Nf.b(b);;) {
      if(0 < T(f)) {
        Pf(J(f), c, d), f = K(f)
      }else {
        return m
      }
    }
  }();
  return w(f) ? f : n
};
function Rf(a, b, c) {
  c = Qf(a, b, c);
  return w(c) ? c : Mf.a(a, b)
}
var Tf = function Sf(b, c, d, f, h, i, j) {
  var k = Rc.c(function(d, f) {
    var i = uc.c(f, 0, m);
    uc.c(f, 1, m);
    if(Mf.a(c, i)) {
      var j;
      j = (j = d == m) ? j : Rf(i, J(d), h);
      j = w(j) ? f : d;
      w(Rf(J(j), i, h)) || e(Error([U("Multiple methods in multimethod '"), U(b), U("' match dispatch value: "), U(c), U(" -> "), U(i), U(" and "), U(J(j)), U(", and neither is preferred")].join("")));
      return j
    }
    return d
  }, m, F(f));
  if(w(k)) {
    if(M.a(F(j), F(d))) {
      return Jf.p(i, vc, c, oc(k)), oc(k)
    }
    Of(i, f, j, d);
    return Sf(b, c, d, f, h, i, j)
  }
  return m
};
g;
function Uf(a, b) {
  var c;
  if(a ? a.Ec : a) {
    c = a.Ec(0, b)
  }else {
    var d = Uf[s(a)];
    d ? c = d : (d = Uf._) ? c = d : e(A("IMultiFn.-get-method", a));
    c = c.call(m, a, b)
  }
  return c
}
function Vf(a, b) {
  var c;
  if(a ? a.Dc : a) {
    c = a.Dc(a, b)
  }else {
    var d = Vf[s(a)];
    d ? c = d : (d = Vf._) ? c = d : e(A("IMultiFn.-dispatch", a));
    c = c.call(m, a, b)
  }
  return c
}
g;
function Wf(a, b, c, d, f, h, i, j) {
  this.name = a;
  this.dd = b;
  this.cd = c;
  this.lc = d;
  this.oc = f;
  this.md = h;
  this.nc = i;
  this.Mb = j;
  this.k = 4194304;
  this.q = 64
}
Wf.prototype.F = function(a) {
  return ka(a)
};
Wf.prototype.Ec = function(a, b) {
  M.a(F(this.Mb), F(this.lc)) || Of(this.nc, this.oc, this.Mb, this.lc);
  var c = F(this.nc).call(m, b);
  if(w(c)) {
    return c
  }
  c = Tf(this.name, b, this.lc, this.oc, this.md, this.nc, this.Mb);
  return w(c) ? c : F(this.oc).call(m, this.cd)
};
Wf.prototype.Dc = function(a, b) {
  var c = ud.a(this.dd, b), d = Uf(a, c);
  w(d) || e(Error([U("No method in multimethod '"), U(yf), U("' for dispatch value: "), U(c)].join("")));
  return ud.a(d, b)
};
Wf;
Wf.prototype.call = function() {
  function a(a, b) {
    var f = m;
    t(b) && (f = H(Array.prototype.slice.call(arguments, 1), 0));
    return Vf(this, f)
  }
  function b(a, b) {
    return Vf(this, b)
  }
  a.o = 1;
  a.n = function(a) {
    J(a);
    a = K(a);
    return b(0, a)
  };
  a.g = b;
  return a
}();
Wf.prototype.apply = function(a, b) {
  return Vf(this, b)
};
function Xf(a) {
  this.sc = a;
  this.q = 0;
  this.k = 543162368
}
Xf.prototype.F = function(a) {
  return Ka(R.g(H([a], 0)))
};
Xf.prototype.C = function() {
  return N.b([U('#uuid "'), U(this.sc), U('"')].join(""))
};
Xf.prototype.A = function(a, b) {
  return this.sc === b.sc
};
Xf.prototype.toString = function() {
  return R.g(H([this], 0))
};
Xf;
var Yf = Hf.b(we), Zf = function() {
  function a(a, b, c) {
    a = xe(["\ufdd0'max-count", "\ufdd0'event-pred", "\ufdd0'reactor"], {"\ufdd0'max-count":a, "\ufdd0'event-pred":b, "\ufdd0'reactor":c});
    Jf.p(Yf, vc, a, 0);
    return a
  }
  function b(a, b) {
    return c.c(m, a, b)
  }
  var c = m, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), $f = function() {
  function a(a, b) {
    var c = Ld(function(b) {
      var c = uc.c(b, 0, m), c = Jc(c) ? ud.a(fc, c) : c, c = E.c(c, "\ufdd0'event-pred", m);
      uc.c(b, 1, m);
      return c.b ? c.b(a) : c.call(m, a)
    }, F(Yf)), i = S(c);
    if(i) {
      c = J(i);
      uc.c(c, 0, m);
      uc.c(c, 1, m);
      for(var j = i;;) {
        var i = c, c = uc.c(i, 0, m), i = uc.c(i, 1, m), k = c, k = Jc(k) ? ud.a(fc, k) : k, r = E.c(k, "\ufdd0'reactor", m), x = E.c(k, "\ufdd0'max-count", m), u = i + 1;
        r.a ? r.a(a, b) : r.call(m, a, b);
        w(function() {
          var a = x;
          return w(a) ? x <= u : a
        }()) ? Jf.c(Yf, wc, c) : Jf.p(Yf, vc, c, u);
        if(c = I(j)) {
          i = c, c = J(i), j = i
        }else {
          return m
        }
      }
    }else {
      return m
    }
  }
  function b(a) {
    return c.a(a, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
var ag;
function bg() {
  this.Sc = sa()
}
var cg = new bg;
bg.prototype.set = function(a) {
  this.Sc = a
};
bg.prototype.reset = function() {
  this.set(sa())
};
bg.prototype.get = o("Sc");
function dg(a) {
  this.nd = a || "";
  this.sd = cg
}
q = dg.prototype;
q.Uc = l;
q.qd = l;
q.pd = l;
q.Vc = n;
q.rd = n;
function eg(a) {
  return 10 > a ? "0" + a : "" + a
}
function fg(a, b) {
  var c = (a.Wc - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function gg(a) {
  dg.call(this, a)
}
ta(gg, dg);
var hg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ig(a) {
  if("function" == typeof a.Na) {
    return a.Na()
  }
  if(v(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Za(a)
}
function jg(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(fa(a) || v(a)) {
      Sa(a, b, c)
    }else {
      var d;
      if("function" == typeof a.eb) {
        d = a.eb()
      }else {
        if("function" != typeof a.Na) {
          if(fa(a) || v(a)) {
            d = [];
            for(var f = a.length, h = 0;h < f;h++) {
              d.push(h)
            }
          }else {
            d = $a(a)
          }
        }else {
          d = g
        }
      }
      for(var f = ig(a), h = f.length, i = 0;i < h;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
;function kg(a, b) {
  this.ka = {};
  this.V = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof kg ? (c = a.eb(), d = a.Na()) : (c = $a(a), d = Za(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
q = kg.prototype;
q.G = 0;
q.Na = function() {
  lg(this);
  for(var a = [], b = 0;b < this.V.length;b++) {
    a.push(this.ka[this.V[b]])
  }
  return a
};
q.eb = function() {
  lg(this);
  return this.V.concat()
};
q.Ia = function(a) {
  return mg(this.ka, a)
};
q.clear = function() {
  this.ka = {};
  this.G = this.V.length = 0
};
q.remove = function(a) {
  return mg(this.ka, a) ? (delete this.ka[a], this.G--, this.V.length > 2 * this.G && lg(this), l) : n
};
function lg(a) {
  if(a.G != a.V.length) {
    for(var b = 0, c = 0;b < a.V.length;) {
      var d = a.V[b];
      mg(a.ka, d) && (a.V[c++] = d);
      b++
    }
    a.V.length = c
  }
  if(a.G != a.V.length) {
    for(var f = {}, c = b = 0;b < a.V.length;) {
      d = a.V[b], mg(f, d) || (a.V[c++] = d, f[d] = 1), b++
    }
    a.V.length = c
  }
}
q.get = function(a, b) {
  return mg(this.ka, a) ? this.ka[a] : b
};
q.set = function(a, b) {
  mg(this.ka, a) || (this.G++, this.V.push(a));
  this.ka[a] = b
};
q.$a = function() {
  return new kg(this)
};
function mg(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function ng(a, b) {
  var c;
  a instanceof ng ? (this.ib(b == m ? a.ja : b), og(this, a.Ha), pg(this, a.Ab), qg(this, a.Ja), rg(this, a.gb), sg(this, a.fb), tg(this, a.ta.$a()), ug(this, a.La)) : a && (c = ("" + a).match(hg)) ? (this.ib(!!b), og(this, c[1] || "", l), pg(this, c[2] || "", l), qg(this, c[3] || "", l), rg(this, c[4]), sg(this, c[5] || "", l), tg(this, c[6] || "", l), ug(this, c[7] || "", l)) : (this.ib(!!b), this.ta = new vg(m, this, this.ja))
}
q = ng.prototype;
q.Ha = "";
q.Ab = "";
q.Ja = "";
q.gb = m;
q.fb = "";
q.La = "";
q.jd = n;
q.ja = n;
q.toString = function() {
  if(this.ga) {
    return this.ga
  }
  var a = [];
  this.Ha && a.push(wg(this.Ha, xg), ":");
  this.Ja && (a.push("//"), this.Ab && a.push(wg(this.Ab, xg), "@"), a.push(v(this.Ja) ? encodeURIComponent(this.Ja) : m), this.gb != m && a.push(":", "" + this.gb));
  this.fb && (this.Ja && "/" != this.fb.charAt(0) && a.push("/"), a.push(wg(this.fb, yg)));
  var b = "" + this.ta;
  b && a.push("?", b);
  this.La && a.push("#", wg(this.La, zg));
  return this.ga = a.join("")
};
q.$a = function() {
  var a = this.Ha, b = this.Ab, c = this.Ja, d = this.gb, f = this.fb, h = this.ta.$a(), i = this.La, j = new ng(m, this.ja);
  a && og(j, a);
  b && pg(j, b);
  c && qg(j, c);
  d && rg(j, d);
  f && sg(j, f);
  h && tg(j, h);
  i && ug(j, i);
  return j
};
function og(a, b, c) {
  Ag(a);
  delete a.ga;
  a.Ha = c ? b ? decodeURIComponent(b) : "" : b;
  a.Ha && (a.Ha = a.Ha.replace(/:$/, ""))
}
function pg(a, b, c) {
  Ag(a);
  delete a.ga;
  a.Ab = c ? b ? decodeURIComponent(b) : "" : b
}
function qg(a, b, c) {
  Ag(a);
  delete a.ga;
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function rg(a, b) {
  Ag(a);
  delete a.ga;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.gb = b) : a.gb = m
}
function sg(a, b, c) {
  Ag(a);
  delete a.ga;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function tg(a, b, c) {
  Ag(a);
  delete a.ga;
  b instanceof vg ? (a.ta = b, a.ta.rc = a, a.ta.ib(a.ja)) : (c || (b = wg(b, Bg)), a.ta = new vg(b, a, a.ja))
}
function ug(a, b, c) {
  Ag(a);
  delete a.ga;
  a.La = c ? b ? decodeURIComponent(b) : "" : b
}
function Ag(a) {
  a.jd && e(Error("Tried to modify a read-only Uri"))
}
q.ib = function(a) {
  this.ja = a;
  this.ta && this.ta.ib(a);
  return this
};
function Cg() {
  var a = window.location;
  return a instanceof ng ? a.$a() : new ng(a, g)
}
var Dg = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function wg(a, b) {
  var c = m;
  v(a) && (c = a, Dg.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Eg)));
  return c
}
function Eg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var xg = /[#\/\?@]/g, yg = /[\#\?]/g, Bg = /[\#\?@]/g, zg = /#/g;
function vg(a, b, c) {
  this.ra = a || m;
  this.rc = b || m;
  this.ja = !!c
}
function Fg(a) {
  if(!a.M && (a.M = new kg, a.ra)) {
    for(var b = a.ra.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = m, h = m;
      0 <= d ? (f = b[c].substring(0, d), h = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Gg(a, f);
      a.add(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
    }
  }
}
q = vg.prototype;
q.M = m;
q.G = m;
q.add = function(a, b) {
  Fg(this);
  Hg(this);
  a = Gg(this, a);
  if(this.Ia(a)) {
    var c = this.M.get(a);
    ea(c) ? c.push(b) : this.M.set(a, [c, b])
  }else {
    this.M.set(a, b)
  }
  this.G++;
  return this
};
q.remove = function(a) {
  Fg(this);
  a = Gg(this, a);
  if(this.M.Ia(a)) {
    Hg(this);
    var b = this.M.get(a);
    ea(b) ? this.G -= b.length : this.G--;
    return this.M.remove(a)
  }
  return n
};
q.clear = function() {
  Hg(this);
  this.M && this.M.clear();
  this.G = 0
};
q.Ia = function(a) {
  Fg(this);
  a = Gg(this, a);
  return this.M.Ia(a)
};
q.eb = function() {
  Fg(this);
  for(var a = this.M.Na(), b = this.M.eb(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(ea(f)) {
      for(var h = 0;h < f.length;h++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.Na = function(a) {
  Fg(this);
  if(a) {
    if(a = Gg(this, a), this.Ia(a)) {
      var b = this.M.get(a);
      if(ea(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.M.Na(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      ea(d) ? Va(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Fg(this);
  Hg(this);
  a = Gg(this, a);
  if(this.Ia(a)) {
    var c = this.M.get(a);
    ea(c) ? this.G -= c.length : this.G--
  }
  this.M.set(a, b);
  this.G++;
  return this
};
q.get = function(a, b) {
  Fg(this);
  a = Gg(this, a);
  if(this.Ia(a)) {
    var c = this.M.get(a);
    return ea(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.ra) {
    return this.ra
  }
  if(!this.M) {
    return""
  }
  for(var a = [], b = 0, c = this.M.eb(), d = 0;d < c.length;d++) {
    var f = c[d], h = ya(f), f = this.M.get(f);
    if(ea(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(h), "" !== f[i] && a.push("=", ya(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(h), "" !== f && a.push("=", ya(f)), b++
    }
  }
  return this.ra = a.join("")
};
function Hg(a) {
  delete a.fc;
  delete a.ra;
  a.rc && delete a.rc.ga
}
q.$a = function() {
  var a = new vg;
  this.fc && (a.fc = this.fc);
  this.ra && (a.ra = this.ra);
  this.M && (a.M = this.M.$a());
  return a
};
function Gg(a, b) {
  var c = "" + b;
  a.ja && (c = c.toLowerCase());
  return c
}
q.ib = function(a) {
  a && !this.ja && (Fg(this), Hg(this), jg(this.M, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ja = a
};
function Ig() {
  return ba.navigator ? ba.navigator.userAgent : m
}
gb = fb = eb = db = n;
var Jg;
if(Jg = Ig()) {
  var Kg = ba.navigator;
  db = 0 == Jg.indexOf("Opera");
  eb = !db && -1 != Jg.indexOf("MSIE");
  fb = !db && -1 != Jg.indexOf("WebKit");
  gb = !db && !fb && "Gecko" == Kg.product
}
var Lg = db, Mg = eb, Ng = gb, Og = fb, Pg = ba.navigator, Qg = -1 != (Pg && Pg.platform || "").indexOf("Mac"), Rg;
a: {
  var Sg = "", Tg;
  if(Lg && ba.opera) {
    var Ug = ba.opera.version, Sg = "function" == typeof Ug ? Ug() : Ug
  }else {
    if(Ng ? Tg = /rv\:([^\);]+)(\)|;)/ : Mg ? Tg = /MSIE\s+([^\);]+)(\)|;)/ : Og && (Tg = /WebKit\/(\S+)/), Tg) {
      var Vg = Tg.exec(Ig()), Sg = Vg ? Vg[1] : ""
    }
  }
  if(Mg) {
    var Wg, Xg = ba.document;
    Wg = Xg ? Xg.documentMode : g;
    if(Wg > parseFloat(Sg)) {
      Rg = "" + Wg;
      break a
    }
  }
  Rg = Sg
}
var Yg = {};
function Zg(a) {
  return Yg[a] || (Yg[a] = 0 <= Ja(Rg, a))
}
;!Mg || Zg("9");
var $g = Mg && !Zg("8");
function ah() {
}
ah.prototype.Jc = n;
ah.prototype.pb = function() {
  this.Jc || (this.Jc = l, this.ha())
};
ah.prototype.ha = function() {
};
function bh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
ta(bh, ah);
q = bh.prototype;
q.ha = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Pa = n;
q.yb = l;
q.stopPropagation = function() {
  this.Pa = l
};
q.preventDefault = function() {
  this.yb = n
};
var ch = new Function("a", "return a");
function dh(a, b) {
  a && this.tb(a, b)
}
ta(dh, bh);
q = dh.prototype;
q.target = m;
q.relatedTarget = m;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = n;
q.altKey = n;
q.shiftKey = n;
q.metaKey = n;
q.Ka = m;
q.tb = function(a, b) {
  var c = this.type = a.type;
  bh.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ng) {
      try {
        ch(d.nodeName)
      }catch(f) {
        d = m
      }
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== g ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== g ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== g ? a.clientX : a.pageX;
  this.clientY = a.clientY !== g ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.Ka = a;
  delete this.yb;
  delete this.Pa
};
q.stopPropagation = function() {
  dh.jb.stopPropagation.call(this);
  this.Ka.stopPropagation ? this.Ka.stopPropagation() : this.Ka.cancelBubble = l
};
q.preventDefault = function() {
  dh.jb.preventDefault.call(this);
  var a = this.Ka;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, $g) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.ha = function() {
  dh.jb.ha.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ka = m
};
function eh() {
}
var fh = 0;
q = eh.prototype;
q.key = 0;
q.hb = n;
q.yc = n;
q.tb = function(a, b, c, d, f, h) {
  ha(a) ? this.Lc = l : a && a.handleEvent && ha(a.handleEvent) ? this.Lc = n : e(Error("Invalid listener argument"));
  this.wb = a;
  this.Rc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.kc = h;
  this.yc = n;
  this.key = ++fh;
  this.hb = n
};
q.handleEvent = function(a) {
  return this.Lc ? this.wb.call(this.kc || this.src, a) : this.wb.handleEvent.call(this.wb, a)
};
function gh(a, b) {
  this.Oc = b;
  this.Ma = [];
  a > this.Oc && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ma.push(this.qa ? this.qa() : {})
  }
}
ta(gh, ah);
gh.prototype.qa = m;
gh.prototype.Ic = m;
function hh(a) {
  return a.Ma.length ? a.Ma.pop() : a.qa ? a.qa() : {}
}
function ih(a, b) {
  a.Ma.length < a.Oc ? a.Ma.push(b) : jh(a, b)
}
function jh(a, b) {
  if(a.Ic) {
    a.Ic(b)
  }else {
    if(ia(b)) {
      if(ha(b.pb)) {
        b.pb()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
gh.prototype.ha = function() {
  gh.jb.ha.call(this);
  for(var a = this.Ma;a.length;) {
    jh(this, a.pop())
  }
  delete this.Ma
};
var kh, lh, mh, nh, oh, ph, qh, rh, sh, th, uh;
(function() {
  function a() {
    return{G:0, fa:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new eh
  }
  function f() {
    return new dh
  }
  var h = hb && !(0 <= Ja(ib, "5.7")), i;
  ph = function(a) {
    i = a
  };
  if(h) {
    kh = function() {
      return hh(j)
    };
    lh = function(a) {
      ih(j, a)
    };
    mh = function() {
      return hh(k)
    };
    nh = function(a) {
      ih(k, a)
    };
    oh = function() {
      return hh(r)
    };
    qh = function() {
      ih(r, c())
    };
    rh = function() {
      return hh(x)
    };
    sh = function(a) {
      ih(x, a)
    };
    th = function() {
      return hh(u)
    };
    uh = function(a) {
      ih(u, a)
    };
    var j = new gh(0, 600);
    j.qa = a;
    var k = new gh(0, 600);
    k.qa = b;
    var r = new gh(0, 600);
    r.qa = c;
    var x = new gh(0, 600);
    x.qa = d;
    var u = new gh(0, 600);
    u.qa = f
  }else {
    kh = a, lh = da, mh = b, nh = da, oh = c, qh = da, rh = d, sh = da, th = f, uh = da
  }
})();
var vh = {}, wh = {}, xh = {}, yh = {};
function zh(a, b, c, d, f) {
  if(b) {
    if(ea(b)) {
      for(var h = 0;h < b.length;h++) {
        zh(a, b[h], c, d, f)
      }
      return m
    }
    var d = !!d, i = wh;
    b in i || (i[b] = kh());
    i = i[b];
    d in i || (i[d] = kh(), i.G++);
    var i = i[d], j = ka(a), k;
    i.fa++;
    if(i[j]) {
      k = i[j];
      for(h = 0;h < k.length;h++) {
        if(i = k[h], i.wb == c && i.kc == f) {
          if(i.hb) {
            break
          }
          return k[h].key
        }
      }
    }else {
      k = i[j] = mh(), i.G++
    }
    h = oh();
    h.src = a;
    i = rh();
    i.tb(c, h, a, b, d, f);
    c = i.key;
    h.key = c;
    k.push(i);
    vh[c] = i;
    xh[j] || (xh[j] = mh());
    xh[j].push(i);
    a.addEventListener ? (a == ba || !a.Hc) && a.addEventListener(b, h, d) : a.attachEvent(b in yh ? yh[b] : yh[b] = "on" + b, h);
    return c
  }
  e(Error("Invalid event type"))
}
function Ah(a, b, c, d, f) {
  if(ea(b)) {
    for(var h = 0;h < b.length;h++) {
      Ah(a, b[h], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      h = wh;
      if(b in h && (h = h[b], d in h && (h = h[d], a = ka(a), h[a]))) {
        a = h[a];
        break a
      }
      a = m
    }
    if(a) {
      for(h = 0;h < a.length;h++) {
        if(a[h].wb == c && a[h].capture == d && a[h].kc == f) {
          Bh(a[h].key);
          break
        }
      }
    }
  }
}
function Bh(a) {
  if(vh[a]) {
    var b = vh[a];
    if(!b.hb) {
      var c = b.src, d = b.type, f = b.Rc, h = b.capture;
      c.removeEventListener ? (c == ba || !c.Hc) && c.removeEventListener(d, f, h) : c.detachEvent && c.detachEvent(d in yh ? yh[d] : yh[d] = "on" + d, f);
      c = ka(c);
      f = wh[d][h][c];
      if(xh[c]) {
        var i = xh[c], j = Ra(i, b);
        0 <= j && Qa.splice.call(i, j, 1);
        0 == i.length && delete xh[c]
      }
      b.hb = l;
      f.Qc = l;
      Ch(d, h, c, f);
      delete vh[a]
    }
  }
}
function Ch(a, b, c, d) {
  if(!d.Ib && d.Qc) {
    for(var f = 0, h = 0;f < d.length;f++) {
      if(d[f].hb) {
        var i = d[f].Rc;
        i.src = m;
        qh(i);
        sh(d[f])
      }else {
        f != h && (d[h] = d[f]), h++
      }
    }
    d.length = h;
    d.Qc = n;
    if(0 == h && (nh(d), delete wh[a][b][c], wh[a][b].G--, 0 == wh[a][b].G && (lh(wh[a][b]), delete wh[a][b], wh[a].G--), 0 == wh[a].G)) {
      lh(wh[a]), delete wh[a]
    }
  }
}
function Dh(a) {
  var b, c = 0, d = b == m;
  b = !!b;
  if(a == m) {
    Ya(xh, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          Bh(h.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), xh[a]) {
      for(var a = xh[a], f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          Bh(h.key), c++
        }
      }
    }
  }
}
function Eh(a, b, c, d, f) {
  var h = 1, b = ka(b);
  if(a[b]) {
    a.fa--;
    a = a[b];
    a.Ib ? a.Ib++ : a.Ib = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.hb && (h &= Fh(k, f) !== n)
      }
    }finally {
      a.Ib--, Ch(c, d, b, a)
    }
  }
  return Boolean(h)
}
function Fh(a, b) {
  var c = a.handleEvent(b);
  a.yc && Bh(a.key);
  return c
}
ph(function(a, b) {
  if(!vh[a]) {
    return l
  }
  var c = vh[a], d = c.type, f = wh;
  if(!(d in f)) {
    return l
  }
  var f = f[d], h, i;
  ag === g && (ag = Mg && !ba.addEventListener);
  if(ag) {
    h = b || ca("window.event");
    var j = l in f, k = n in f;
    if(j) {
      if(0 > h.keyCode || h.returnValue != g) {
        return l
      }
      a: {
        var r = n;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(x) {
            r = l
          }
        }
        if(r || h.returnValue == g) {
          h.returnValue = l
        }
      }
    }
    r = th();
    r.tb(h, this);
    h = l;
    try {
      if(j) {
        for(var u = mh(), y = r.currentTarget;y;y = y.parentNode) {
          u.push(y)
        }
        i = f[l];
        i.fa = i.G;
        for(var G = u.length - 1;!r.Pa && 0 <= G && i.fa;G--) {
          r.currentTarget = u[G], h &= Eh(i, u[G], d, l, r)
        }
        if(k) {
          i = f[n];
          i.fa = i.G;
          for(G = 0;!r.Pa && G < u.length && i.fa;G++) {
            r.currentTarget = u[G], h &= Eh(i, u[G], d, n, r)
          }
        }
      }else {
        h = Fh(c, r)
      }
    }finally {
      u && (u.length = 0, nh(u)), r.pb(), uh(r)
    }
    return h
  }
  d = new dh(b, this);
  try {
    h = Fh(c, d)
  }finally {
    d.pb()
  }
  return h
});
function Gh() {
}
ta(Gh, ah);
q = Gh.prototype;
q.Hc = l;
q.pc = m;
q.addEventListener = function(a, b, c, d) {
  zh(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Ah(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = wh;
  if(b in c) {
    if(v(a)) {
      a = new bh(a, this)
    }else {
      if(a instanceof bh) {
        a.target = a.target || this
      }else {
        var d = a, a = new bh(b, this);
        cb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = l in c, h;
    if(b) {
      f = [];
      for(h = this;h;h = h.pc) {
        f.push(h)
      }
      h = c[l];
      h.fa = h.G;
      for(var i = f.length - 1;!a.Pa && 0 <= i && h.fa;i--) {
        a.currentTarget = f[i], d &= Eh(h, f[i], a.type, l, a) && a.yb != n
      }
    }
    if(n in c) {
      if(h = c[n], h.fa = h.G, b) {
        for(i = 0;!a.Pa && i < f.length && h.fa;i++) {
          a.currentTarget = f[i], d &= Eh(h, f[i], a.type, n, a) && a.yb != n
        }
      }else {
        for(f = this;!a.Pa && f && h.fa;f = f.pc) {
          a.currentTarget = f, d &= Eh(h, f, a.type, n, a) && a.yb != n
        }
      }
    }
    a = Boolean(d)
  }else {
    a = l
  }
  return a
};
q.ha = function() {
  Gh.jb.ha.call(this);
  Dh(this);
  this.pc = m
};
function Hh(a, b, c, d, f) {
  if(!Mg && (!Og || !Zg("525"))) {
    return l
  }
  if(Qg && f) {
    return Ih(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || Mg && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return l;
    case 27:
      return!Og
  }
  return Ih(a)
}
function Ih(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Og && 0 == a) {
    return l
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return l;
    default:
      return n
  }
}
;function Jh(a, b) {
  a && (this.Hb && this.detach(), this.qb = a, this.Gb = zh(this.qb, "keypress", this, b), this.mc = zh(this.qb, "keydown", this.gd, b, this), this.Hb = zh(this.qb, "keyup", this.hd, b, this))
}
ta(Jh, Gh);
q = Jh.prototype;
q.qb = m;
q.Gb = m;
q.mc = m;
q.Hb = m;
q.Ca = -1;
q.Ba = -1;
var Kh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Lh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Mh = {61:187, 
59:186}, Nh = Mg || Og && Zg("525");
q = Jh.prototype;
q.gd = function(a) {
  if(Og && (17 == this.Ca && !a.ctrlKey || 18 == this.Ca && !a.altKey)) {
    this.Ba = this.Ca = -1
  }
  Nh && !Hh(a.keyCode, this.Ca, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ba = Ng && a.keyCode in Mh ? Mh[a.keyCode] : a.keyCode
};
q.hd = function() {
  this.Ba = this.Ca = -1
};
q.handleEvent = function(a) {
  var b = a.Ka, c, d;
  Mg && "keypress" == a.type ? (c = this.Ba, d = 13 != c && 27 != c ? b.keyCode : 0) : Og && "keypress" == a.type ? (c = this.Ba, d = 0 <= b.charCode && 63232 > b.charCode && Ih(c) ? b.charCode : 0) : Lg ? (c = this.Ba, d = Ih(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ba, d = b.charCode || 0, Qg && (63 == d && !c) && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in Kh ? f = Kh[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Lh && (f = Lh[h]);
  a = f == this.Ca;
  this.Ca = f;
  b = new Oh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.pb()
  }
};
q.detach = function() {
  this.Gb && (Bh(this.Gb), Bh(this.mc), Bh(this.Hb), this.Hb = this.mc = this.Gb = m);
  this.qb = m;
  this.Ba = this.Ca = -1
};
q.ha = function() {
  Jh.jb.ha.call(this);
  this.detach()
};
function Oh(a, b, c, d) {
  d && this.tb(d, g);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
ta(Oh, dh);
var Ph = !Mg || Zg("9");
!Ng && !Mg || Mg && Zg("9") || Ng && Zg("1.9.1");
Mg && Zg("9");
function Qh(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Rh(a, b) {
  var c = Qh(a), d = Xa(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < d.length;i++) {
    0 <= Ra(f, d[i]) || (f.push(d[i]), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function Sh(a, b) {
  for(var c = Qh(a), d = Xa(arguments, 1), f = c, h = 0, i = 0;i < f.length;i++) {
    0 <= Ra(d, f[i]) && (Wa(f, i--, 1), h++)
  }
  a.className = c.join(" ")
}
;function Th(a) {
  return v(a) ? document.getElementById(a) : a
}
function Uh(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector && (!Og || "CSS1Compat" == document.compatMode || Zg("528")) ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Vh("*", a, b)
}
function Vh(a, b, c) {
  var d = document, c = c || d, a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && (c.querySelector && (!Og || "CSS1Compat" == document.compatMode || Zg("528"))) && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, f = 0, h = 0, i;i = c[h];h++) {
        a == i.nodeName && (d[f++] = i)
      }
      d.length = f;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(h = f = 0;i = c[h];h++) {
      a = i.className, "function" == typeof a.split && 0 <= Ra(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function Wh(a, b) {
  Ya(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Xh ? a.setAttribute(Xh[d], b) : a[d] = b
  })
}
var Xh = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Yh(a, b, c) {
  var d = arguments, f = document, h = d[0], i = d[1];
  if(!Ph && i && (i.name || i.type)) {
    h = ["<", h];
    i.name && h.push(' name="', za(i.name), '"');
    if(i.type) {
      h.push(' type="', za(i.type), '"');
      var j = {};
      cb(j, i);
      i = j;
      delete i.type
    }
    h.push(">");
    h = h.join("")
  }
  h = f.createElement(h);
  i && (v(i) ? h.className = i : ea(i) ? Rh.apply(m, [h].concat(i)) : Wh(h, i));
  2 < d.length && Zh(f, h, d);
  return h
}
function Zh(a, b, c) {
  function d(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(var f = 2;f < c.length;f++) {
    var h = c[f];
    fa(h) && !(ia(h) && 0 < h.nodeType) ? Sa($h(h) ? Ua(h) : h, d) : d(h)
  }
}
function ai(a) {
  var b = document, c = b.createElement("div");
  Mg ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild)
  }
  return a
}
function bi(a) {
  if("outerHTML" in a) {
    return a.outerHTML
  }
  var b = (9 == a.nodeType ? a : a.ownerDocument || a.document).createElement("div");
  b.appendChild(a.cloneNode(l));
  return b.innerHTML
}
function $h(a) {
  if(a && "number" == typeof a.length) {
    if(ia(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ha(a)) {
      return"function" == typeof a.item
    }
  }
  return n
}
;function ci(a) {
  var b = Th("c-panel");
  v("opacity") ? di(b, a, "opacity") : Ya("opacity", qa(di, b))
}
function di(a, b, c) {
  a.style[Ma(c)] = b
}
function ei(a, b) {
  a.style.display = b ? "" : "none"
}
;function fi(a) {
  return gi(a || arguments.callee.caller, [])
}
function gi(a, b) {
  var c = [];
  if(0 <= Ra(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(hi(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var h;
        h = d[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = "" + h;
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = hi(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        c.push(h)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(gi(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function hi(a) {
  a = "" + a;
  if(!ii[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ii[a] = b ? b[1] : "[Anonymous]"
  }
  return ii[a]
}
var ii = {};
function ji(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, r, x, u) {
    if("%" == r) {
      return"%"
    }
    var y = c.shift();
    "undefined" == typeof y && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = y;
    return ki[r].apply(m, arguments)
  })
}
var ki = {s:function(a, b, c) {
  return isNaN(c) || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
}, f:function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
}, d:function(a, b, c, d, f, h, i, j) {
  a = parseInt(a, 10);
  return ki.f(a, b, c, d, 0, h, i, j)
}};
ki.i = ki.d;
ki.u = ki.d;
function li(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
li.prototype.hc = m;
li.prototype.gc = m;
var mi = 0;
li.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || mi++;
  this.Wc = d || sa();
  this.Oa = a;
  this.Pc = b;
  this.kd = c;
  delete this.hc;
  delete this.gc
};
li.prototype.Tc = function(a) {
  this.Oa = a
};
function ni(a) {
  this.ld = a
}
ni.prototype.Jb = m;
ni.prototype.Oa = m;
ni.prototype.Nb = m;
ni.prototype.rb = m;
function oi(a, b) {
  this.name = a;
  this.value = b
}
oi.prototype.toString = o("name");
var pi = new oi("SHOUT", 1200), qi = new oi("SEVERE", 1E3), ri = new oi("WARNING", 900), si = new oi("INFO", 800), ti = new oi("CONFIG", 700);
q = ni.prototype;
q.getParent = o("Jb");
q.Tc = function(a) {
  this.Oa = a
};
function ui(a) {
  if(a.Oa) {
    return a.Oa
  }
  if(a.Jb) {
    return ui(a.Jb)
  }
  Pa("Root logger has no level set.");
  return m
}
q.log = function(a, b, c) {
  if(a.value >= ui(this).value) {
    a = this.fd(a, b, c);
    ba.console && ba.console.markTimeline && ba.console.markTimeline("log:" + a.Pc);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.rb) {
        for(var f = 0, h = g;h = c.rb[f];f++) {
          h(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.fd = function(a, b, c) {
  var d = new li(a, "" + b, this.ld);
  if(c) {
    d.hc = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var i;
      var j = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var k, r, x = n;
        try {
          k = c.lineNumber || c.Fd || "Not available"
        }catch(u) {
          k = "Not available", x = l
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || j
        }catch(y) {
          r = "Not available", x = l
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:k, fileName:r, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + za(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + za(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + za(fi(h) + "-> ")
    }catch(G) {
      f = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.gc = f
  }
  return d
};
q.info = function(a, b) {
  this.log(si, a, b)
};
var vi = {}, wi = m;
function xi() {
  wi || (wi = new ni(""), vi[""] = wi, wi.Tc(ti))
}
function yi(a) {
  xi();
  var b;
  if(!(b = vi[a])) {
    b = new ni(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = yi(a.substr(0, c));
    c.Nb || (c.Nb = {});
    c.Nb[d] = b;
    b.Jb = c;
    vi[a] = b
  }
  return b
}
;function zi() {
  this.od = pa(this.Xc, this);
  this.jc = new gg;
  this.jc.Uc = n;
  this.Kc = this.jc.Vc = n;
  this.Nc = ""
}
zi.prototype.Xc = function(a) {
  var b;
  b = this.jc;
  var c = [];
  c.push(b.nd, " ");
  if(b.Uc) {
    var d = new Date(a.Wc);
    c.push("[", eg(d.getFullYear() - 2E3) + eg(d.getMonth() + 1) + eg(d.getDate()) + " " + eg(d.getHours()) + ":" + eg(d.getMinutes()) + ":" + eg(d.getSeconds()) + "." + eg(Math.floor(d.getMilliseconds() / 10)), "] ")
  }
  b.qd && c.push("[", fg(a, b.sd.get()), "s] ");
  b.pd && c.push("[", a.kd, "] ");
  b.rd && c.push("[", a.Oa.name, "] ");
  c.push(a.Pc, "\n");
  b.Vc && a.hc && c.push(a.gc, "\n");
  b = c.join("");
  if(window.console && window.console.firebug) {
    switch(a.Oa) {
      case pi:
        window.console.info(b);
        break;
      case qi:
        window.console.error(b);
        break;
      case ri:
        window.console.warn(b);
        break;
      default:
        window.console.debug(b)
    }
  }else {
    window.console ? window.console.log(b) : window.opera ? window.opera.postError(b) : this.Nc += b
  }
};
var Ai = ba.window;
function Bi(a) {
  var b = Ci;
  if(Lc(b)) {
    return a.replace(RegExp(("" + b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>")
  }
  if(w(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), "<$1></$2>")
  }
  e([U("Invalid match arg: "), U(b)].join(""))
}
;var Di = {}, Ei = document.createElement("div");
Ei.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var Fi = M.a(Ei.firstChild.nodeType, 3), Gi = M.a(Ei.getElementsByTagName("tbody").length, 0);
M.a(Ei.getElementsByTagName("link").length, 0);
var Hi = /<|&#?\w+;/, Ii = /^\s+/, Ci = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Ji = /<([\w:]+)/, Ki = /<tbody/i, Li = W([1, "<select multiple='multiple'>", "</select>"]), Mi = W([1, "<table>", "</table>"]), Ni = W([3, "<table><tbody><tr>", "</tr></tbody></table>"]), Oi = xe("col \ufdd0'default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), {col:W([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":W([0, 
"", ""]), tfoot:Mi, caption:Mi, optgroup:Li, legend:W([1, "<fieldset>", "</fieldset>"]), area:W([1, "<map>", "</map>"]), td:Ni, thead:Mi, th:Ni, option:Li, tbody:Mi, tr:W([2, "<table><tbody>", "</tbody></table>"]), colgroup:Mi});
function Pi(a, b) {
  var c = qc(Ef(Ki, b)), d = function() {
    var a = M.a(Di.Hd, "table");
    return a ? c : a
  }() ? function() {
    var b = a.firstChild;
    return w(b) ? a.firstChild.childNodes : b
  }() : function() {
    var a = M.a(Di.Gd, "<table>");
    return a ? c : a
  }() ? divchildNodes : ae;
  if(d = S(d)) {
    for(var f = J(d);;) {
      if(function() {
        var a = M.a(f.nodeName, "tbody");
        return a ? M.a(f.childNodes.length, 0) : a
      }() && f.parentNode.removeChild(f), d = I(d)) {
        var h = d, f = d = J(h), d = h
      }else {
        break
      }
    }
  }
}
function Qi(a) {
  var b = Bi(a), a = ("" + U(oc(Ef(Ji, b)))).toLowerCase(), a = E.c(Oi, a, (new dd("\ufdd0'default")).call(m, Oi)), c = uc.c(a, 0, m), d = uc.c(a, 1, m), f = uc.c(a, 2, m), a = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [U(d), U(b), U(f)].join("");
    for(var i = c;;) {
      if(0 < i) {
        i -= 1, a = a.lastChild
      }else {
        return a
      }
    }
  }();
  w(Gi) && Pi(a, b);
  w(function() {
    var a = qc(Fi);
    return a ? Ef(Ii, b) : a
  }()) && a.insertBefore(document.createTextNode(J(Ef(Ii, b))), a.firstChild);
  return a.childNodes
}
g;
function Ri(a) {
  if(a ? a.ed : a) {
    a = a.ed(a)
  }else {
    var b;
    var c = Ri[s(a)];
    c ? b = c : (c = Ri._) ? b = c : e(A("DomContent.single-node", a));
    a = b.call(m, a)
  }
  return a
}
g;
function Si(a) {
  return Th(yf(a))
}
g;
g;
var Ti = function() {
  function a(a, b) {
    return b < a.length ? new V(m, n, function() {
      return P(a.item(b), c.a(a, b + 1))
    }, m) : m
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Ui = function() {
  function a(a, b) {
    return b < a.length ? new V(m, n, function() {
      return P(a[b], c.a(a, b + 1))
    }, m) : m
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Vi(a) {
  return w(a.item) ? Ti.b(a) : Ui.b(a)
}
Ri._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.k & 8388608) ? b : a.Sb) ? l : a.k ? n : z(Mb, a) : z(Mb, a);
    a = b ? J(a) : w(w(a) ? a.length : a) ? a.item(0) : a
  }
  return a
};
Ri.string = function(a) {
  return Ri(w(Ef(Hi, a)) ? Qi(a) : document.createTextNode(a))
};
w("undefined" != typeof NodeList) && (q = NodeList.prototype, q.Sb = l, q.z = function(a) {
  return Vi(a)
}, q.lb = l, q.Q = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : uc.a(a, b)
}, q.Qb = l, q.w = function(a) {
  return a.length
});
w("undefined" != typeof StaticNodeList) && (q = StaticNodeList.prototype, q.Sb = l, q.z = function(a) {
  return Vi(a)
}, q.lb = l, q.Q = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : uc.a(a, b)
}, q.Qb = l, q.w = function(a) {
  return a.length
});
w("undefined" != typeof HTMLCollection) && (q = HTMLCollection.prototype, q.Sb = l, q.z = function(a) {
  return Vi(a)
}, q.lb = l, q.Q = function(a, b) {
  return a.item(b)
}, q.L = function(a, b, c) {
  return a.length <= b ? c : uc.a(a, b)
}, q.Qb = l, q.w = function(a) {
  return a.length
});
var Wi = {}, Xi = Hf.b(we), Ed = Hf.b(m), Yi = Hf.b(n), Zi = Hf.b(we), $i = Hf.b(m), aj = Hf.b(m), bj = function() {
  function a(a) {
    var d = m;
    t(a) && (d = H(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return yi("org_html_slideshow.main").info(ud.a(R, a))
  }
  a.o = 0;
  a.n = function(a) {
    a = S(a);
    return b(a)
  };
  a.g = b;
  return a
}(), cj = function() {
  function a(a, b, c) {
    return kd(Ld(function(b) {
      return M.a(b.tagName, a.toUpperCase(Q))
    }, w(b) ? Uh(b, c) : Vh(a, m, c)))
  }
  function b(a, b) {
    return kd(Ld(function(b) {
      return M.a(b.tagName, a.toUpperCase(Q))
    }, Uh(b)))
  }
  function c(a) {
    return kd(Vh(a, g, g))
  }
  var d = m, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}(), dj = function() {
  function a(a, b) {
    return J(cj.c("head", m, b)).appendChild(a)
  }
  function b(a) {
    return c.a(a, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function ej(a) {
  var b = Cg();
  ug(b, a);
  window.location = "" + U(b)
}
function fj(a) {
  return function(b) {
    w(b) && (b.preventDefault(), b.stopPropagation());
    return $f.a(a, b)
  }
}
function gj(a) {
  w(a) && ei(Ri(a), l)
}
function hj(a) {
  w(a) && ei(Ri(a), n)
}
function ij(a) {
  return xf(zd.a(function(a) {
    return Ri(a).getAttribute(yf("href"))
  }, Ld(function(b) {
    var c = M.a("stylesheet", Ri(b).getAttribute(yf("rel")));
    return c ? M.a(a, Ri(b).getAttribute(yf("media"))) : c
  }, cj.b("link"))))
}
function jj(a) {
  var b = S(Ld(function(b) {
    var c = M.a("stylesheet", Ri(b).getAttribute(yf("rel")));
    return c ? Oc(a, Ri(b).getAttribute(yf("href"))) : c
  }, cj.b("link")));
  if(b) {
    for(var c = J(b);;) {
      if(c.parentNode.removeChild(c), c = I(b)) {
        b = c, c = J(b)
      }else {
        break
      }
    }
  }
}
var kj = function() {
  function a(a, b) {
    var c = S(a);
    if(c) {
      for(var i = J(c);;) {
        if(dj.a(function() {
          var a = Yh("link");
          a.setAttribute("rel", "stylesheet");
          a.setAttribute("type", "text/css");
          a.setAttribute("href", i);
          return a
        }(), b), c = I(c)) {
          var j = c, i = c = J(j), c = j
        }else {
          return m
        }
      }
    }else {
      return m
    }
  }
  function b(a) {
    return c.a(a, m)
  }
  var c = m, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function lj(a, b) {
  if(w("none" != b.style.display)) {
    return ei(b, n), Sh(a, "unfolded"), Rh(a, "folded")
  }
  ei(b, l);
  Sh(a, "folded");
  return Rh(a, "unfolded")
}
function mj(a) {
  a.preventDefault();
  var a = a.currentTarget, b = J(cj.c("div", m, nj.b ? nj.b(a) : nj.call(m, a)));
  return lj(a, b)
}
function nj(a) {
  for(;;) {
    if(M.a("DIV", a.nodeName)) {
      return a
    }
    a = a.parentNode
  }
}
var oj = xf(zd.a(function(a) {
  return[U("H"), U(a)].join("")
}, Df.a(1, 9)));
function pj(a) {
  var a = a.cloneNode(l), b = S(cj.c("div", m, a));
  if(b) {
    for(var c = J(b);;) {
      if(w(xd(function(a) {
        return function(b) {
          b = [U("outline-"), U(b)].join("");
          return 0 <= Ra(Qh(a), b)
        }
      }(c, b), Df.a(1, 9))) && c.parentNode.removeChild(c), c = I(b)) {
        b = c, c = J(b)
      }else {
        break
      }
    }
  }
  return a
}
function qj(a) {
  a = J(Ld(function(a) {
    var c = M.a("DIV", a.nodeName);
    return c ? 0 <= Ra(Qh(a), "notes") : c
  }, a.children));
  return w(a) ? bi(a) : ""
}
function rj(a) {
  return xd(function(b) {
    return M.a(a, (new dd("\ufdd0'id")).call(m, b)) ? b : m
  }, F(Ed))
}
function sj(a) {
  return oc(Dd(function(b) {
    return 0 < wa(a, (new dd("\ufdd0'id")).call(m, b))
  }))
}
function tj() {
  var a = Cg().La, b = rj(a);
  if(w(b)) {
    return b
  }
  a = (b = S(a)) ? sj(a) : b;
  return w(a) ? a : J(F(Ed))
}
function uj(a) {
  var b = Jc(a) ? ud.a(fc, a) : a, a = E.c(b, "\ufdd0'html", m), b = E.c(b, "\ufdd0'id", m);
  bj.g(H(["Entering show-slide: ", b], 0));
  ej(b);
  b = Th("current-slide");
  b.innerHTML = a;
  b = J(cj.c("div", "slide", b));
  a = J(cj.c("ul", m, b));
  b = b.className.replace(RegExp("[\\r\\n\\t]", "g"), " ");
  b = -1 < [U(" "), U(b), U(" ")].join("").indexOf([U(" "), U("animate"), U(" ")].join(""));
  w(b) && If(Zi, xe(["\ufdd0'state", "\ufdd0'hidden", "\ufdd0'visible"], {"\ufdd0'state":"\ufdd0'animating", "\ufdd0'hidden":cj.c("li", m, a), "\ufdd0'visible":ae}));
  return vj.O ? vj.O() : vj.call(m)
}
function wj(a) {
  var b = Jc(a) ? ud.a(fc, a) : a, a = E.c(b, "\ufdd0'visible", m), b = E.c(b, "\ufdd0'hidden", m), c = J(b);
  return xe(["\ufdd0'state", "\ufdd0'hidden", "\ufdd0'visible"], {"\ufdd0'state":I(b) ? "\ufdd0'animating" : "\ufdd0'done", "\ufdd0'hidden":I(b), "\ufdd0'visible":od.a(a, W([c]))})
}
Ub(Zi, "\ufdd0'update-bullets", function(a, b, c, d) {
  if(b = S((new dd("\ufdd0'hidden")).call(m, d))) {
    for(a = J(b);;) {
      if(hj(a), a = I(b)) {
        b = a, a = J(b)
      }else {
        break
      }
    }
  }
  if(a = S((new dd("\ufdd0'visible")).call(m, d))) {
    for(d = J(a);;) {
      if(gj(d), d = I(a)) {
        a = d, d = J(a)
      }else {
        return m
      }
    }
  }else {
    return m
  }
});
Ub(Yi, "\ufdd0'change-mode", function() {
  return $f.b("\ufdd0'change-mode")
});
function xj() {
  var a = tj(), b = oc(Dd(function(b) {
    return vd.a(a, b)
  }));
  if(M.a("\ufdd0'animating", (new dd("\ufdd0'state")).call(m, F(Zi)))) {
    return Jf.a(Zi, wj)
  }
  w(b) && uj(b);
  return Jf.a(aj, function(a) {
    return a == m ? (new Date).getTime() : a
  })
}
function yj() {
  var a = tj(), b = pc(Bf(function(b) {
    return vd.a(a, b)
  }, F(Ed)));
  If(Zi, xe(["\ufdd0'state"], {"\ufdd0'state":"\ufdd0'done"}));
  return w(b) ? uj(b) : m
}
var zj = Fe([84, 36], ["\ufdd0'toggle-mode", "\ufdd0'go-to-top"]), Aj = Fe([32, 84, 35, 80, 37, 34, 13, 33, 78, 40, 38, 39, 3, 36], "\ufdd0'show-next-slide \ufdd0'toggle-mode \ufdd0'show-last-slide \ufdd0'show-prev-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-first-slide".split(" "));
function Bj(a) {
  var b = a.keyCode, c = w(F(Yi)) ? Aj : zj, b = E.c(c, b, m);
  return w(b) ? ($f.b(b), a.preventDefault(), a.stopPropagation()) : m
}
function Cj() {
  return w(F($i)) ? w(F($i).closed) ? If($i, m) : F($i) : m
}
function Dj(a) {
  var a = a.document.getElementById("presenter-elapsed-time"), b;
  w(F(aj)) ? (b = (new Date).getTime() - F(aj), b = ji("%d:%02d:%02d", b / 36E5, b / 6E4 % 60, b / 1E3 % 60)) : b = "0:00:00";
  return a.innerHTML = b
}
var Fj = function Ej() {
  var b = Cj();
  if(w(b)) {
    var c = new Date, d = c.getHours();
    b.document.getElementById("presenter-clock-time").innerHTML = ji('<span>%d:%02d:%02d<span id="presenter-clock-time-ampm"> %s</span></span>', 12 < d ? d - 12 : d, c.getMinutes(), c.getSeconds(), 12 <= d ? "pm" : "am");
    Dj(b);
    return window.setTimeout(Ej, 1E3)
  }
  return m
};
function vj() {
  var a = Cj();
  if(w(a)) {
    var b = tj(), c = Jc(b) ? ud.a(fc, b) : b, b = E.c(c, "\ufdd0'notes-html", m), c = E.c(c, "\ufdd0'html", m);
    a.document.getElementById("presenter-current-slide").innerHTML = c;
    a.document.getElementById("presenter-notes-container").innerHTML = b;
    return a.document.getElementById("presenter-next-slide").innerHTML = (new dd("\ufdd0'html")).call(m, sj((new dd("\ufdd0'id")).call(m, tj())))
  }
  return m
}
var Gj = new zi;
if(l != Gj.Kc) {
  xi();
  var Hj = wi, Ij = Gj.od;
  Hj.rb || (Hj.rb = []);
  Hj.rb.push(Ij);
  Gj.Kc = l
}
bj.g(H(["Application started"], 0));
bj.g(H(["Preparing document"], 0));
Jf.g(Xi, vc, "projection", ij("projection"), "screen", H([ij("screen"), "common", ij(m), "presenter", ij("presenter")], 0));
jj(E.c(F(Xi), "projection", m));
jj(E.c(F(Xi), "presenter", m));
a: {
  var Jj = S(cj.b("img"));
  if(Jj) {
    for(var Kj = J(Jj), Lj = Jj;;) {
      var Mj = Kj.parentNode;
      M.a("P", Mj.nodeName) && Rh(Mj, "image");
      var Nj = I(Lj);
      if(Nj) {
        var Oj = Nj, Pj = J(Oj), Qj = Oj, Kj = Pj, Lj = Qj
      }else {
        break a
      }
    }
  }
}
a: {
  var Rj = S(cj.a("span", "tag"));
  if(Rj) {
    for(var Sj = J(Rj), Tj = Rj;;) {
      var Uj = nj(Sj), Vj = S(cj.c("span", m, Sj));
      if(Vj) {
        for(var Wj = J(Vj), Xj = Vj;;) {
          Rh(Uj, Qh(Wj));
          var Yj = I(Xj);
          if(Yj) {
            var Zj = Yj, $j = J(Zj), ak = Zj, Wj = $j, Xj = ak
          }else {
            break
          }
        }
      }
      var bk = I(Tj);
      if(bk) {
        var ck = bk, dk = J(ck), ek = ck, Sj = dk, Tj = ek
      }else {
        break a
      }
    }
  }
}
a: {
  var fk = S(Df.a(1, 9));
  if(fk) {
    for(var gk = J(fk), hk = fk;;) {
      var ik = S(cj.a("div", [U("outline-text-"), U(gk)].join("")));
      if(ik) {
        for(var jk = J(ik), kk = ik;;) {
          Rh(jk, "outline-text");
          var lk = I(kk);
          if(lk) {
            var mk = lk, nk = J(mk), ok = mk, jk = nk, kk = ok
          }else {
            break
          }
        }
      }
      var pk = I(hk);
      if(pk) {
        var qk = pk, rk = J(qk), sk = qk, gk = rk, hk = sk
      }else {
        break a
      }
    }
  }
}
a: {
  var tk = S(Df.a(1, 9));
  if(tk) {
    for(var uk = J(tk), vk = tk;;) {
      var wk = S(cj.b([U("h"), U(uk)].join("")));
      if(wk) {
        for(var xk = J(wk), yk = wk;;) {
          xk.innerHTML = xk.innerHTML.replace(RegExp("&nbsp;", "g"), "");
          var zk = I(yk);
          if(zk) {
            var Ak = zk, Bk = J(Ak), Ck = Ak, xk = Bk, yk = Ck
          }else {
            break
          }
        }
      }
      var Dk = I(vk);
      if(Dk) {
        var Ek = Dk, Fk = J(Ek), Gk = Ek, uk = Fk, vk = Gk
      }else {
        break a
      }
    }
  }
}
a: {
  var Hk = S(ce(zd.a(function(a) {
    return xe(["\ufdd0'head-elem", "\ufdd0'body-elem"], {"\ufdd0'head-elem":a.parentNode.parentNode, "\ufdd0'body-elem":J(cj.c("div", m, nj.b ? nj.b(a) : nj.call(m, a)))})
  }, cj.a("span", "fold"))));
  if(Hk) {
    var Ik = J(Hk), Jk = Jc(Ik) ? ud.a(fc, Ik) : Ik;
    E.c(Jk, "\ufdd0'body-elem", m);
    E.c(Jk, "\ufdd0'head-elem", m);
    for(var Kk = Ik, Lk = Hk;;) {
      var Mk = Kk, Nk = Jc(Mk) ? ud.a(fc, Mk) : Mk, Ok = E.c(Nk, "\ufdd0'body-elem", m), Pk = E.c(Nk, "\ufdd0'head-elem", m), Qk = Lk;
      lj(Pk, Ok);
      var Rk = ai(' <a href="#" class="show-hide"><span>show/hide</span></a>');
      Pk.appendChild(Rk);
      cj.c("a", "show-hide", Pk);
      zh(Pk, "click", mj);
      var Sk = I(Qk);
      if(Sk) {
        var Tk = Sk, Uk = J(Tk), Vk = Tk, Kk = Uk, Lk = Vk
      }else {
        break a
      }
    }
  }
}
J(cj.b("body")).appendChild(ai('<div id="current-slide"></div>'));
hj(Si("current-slide"));
If(Ed, ce(zd.a(function(a) {
  var b;
  a: {
    for(var c = a;;) {
      if(Oc(oj, c.nodeName)) {
        b = c;
        break a
      }
      var d = c.firstChild;
      w(d) ? c = d : (d = c.nextSibling, w(d) ? c = d : (c = c.parentNode, c = w(c) ? c.nextSibling : m))
    }
  }
  return xe(["\ufdd0'id", "\ufdd0'html", "\ufdd0'notes-html"], {"\ufdd0'id":b.id, "\ufdd0'html":bi(pj(a)), "\ufdd0'notes-html":qj(a)})
}, cj.a("div", "slide"))));
bj.g(H([xc(N("\ufdd1'count", "\ufdd1'slides"), fc("\ufdd0'line", 612)), T(F(Ed))], 0));
bj.g(H(["Installing key handler"], 0));
Zf.a(xf(["\ufdd0'show-next-slide"]), function() {
  return xj()
});
Zf.a(xf(["\ufdd0'show-prev-slide"]), function() {
  return yj()
});
Zf.a(xf(["\ufdd0'show-first-slide"]), function() {
  return uj(J(F(Ed)))
});
Zf.a(xf(["\ufdd0'show-last-slide"]), function() {
  return uj(pc(F(Ed)))
});
Zf.a(xf(["\ufdd0'toggle-mode"]), function() {
  bj.g(H([xc(N("\ufdd1'toggle-mode"), fc("\ufdd0'line", 340))], 0));
  return Jf.a(Yi, qc)
});
Zf.a(xf(["\ufdd0'go-to-top"]), function() {
  ej("top");
  return Wi.window.scrollTo(0, 0)
});
Zf.a(xf(["\ufdd0'show-control-panel"]), function() {
  return ci(0.75)
});
Zf.a(xf(["\ufdd0'hide-control-panel"]), function() {
  return ci(0)
});
Zf.a(xf(["\ufdd0'change-mode"]), function() {
  var a;
  w(F(Yi)) ? (bj.g(H([xc(N("\ufdd1'enter-slideshow-mode"), fc("\ufdd0'line", 315))], 0)), hj(Si("preamble")), hj(Si("content")), hj(Si("postamble")), jj(E.c(F(Xi), "screen", m)), kj.b(E.c(F(Xi), "projection", m)), gj(Si("current-slide")), a = uj(tj())) : (bj.g(H([xc(N("\ufdd1'leave-slideshow-mode"), fc("\ufdd0'line", 325))], 0)), hj(Si("current-slide")), jj(E.c(F(Xi), "projection", m)), kj.b(E.c(F(Xi), "screen", m)), gj(Si("preamble")), gj(Si("content")), gj(Si("postamble")), a = Th(Cg().La).scrollIntoView());
  return a
});
Zf.a(xf(["\ufdd0'show-presenter-window"]), function() {
  var a;
  a = Cj();
  if(w(a)) {
    a = a.focus()
  }else {
    var b = xe(["\ufdd0'target", "\ufdd0'toolbar", "\ufdd0'location", "\ufdd0'statusbar", "\ufdd0'menubar"], {"\ufdd0'target":"PRESENTERDISPLAY", "\ufdd0'toolbar":n, "\ufdd0'location":n, "\ufdd0'statusbar":n, "\ufdd0'menubar":n}).wa;
    b || (b = {});
    var c = window;
    a = "undefined" != typeof"".href ? "".href : "";
    var d = b.target || "".target, f = [], h;
    for(h in b) {
      switch(h) {
        case "width":
        ;
        case "height":
        ;
        case "top":
        ;
        case "left":
          f.push(h + "=" + b[h]);
          break;
        case "target":
        ;
        case "noreferrer":
          break;
        default:
          f.push(h + "=" + (b[h] ? 1 : 0))
      }
    }
    h = f.join(",");
    if(b.noreferrer) {
      if(b = c.open("", d, h)) {
        Mg && -1 != a.indexOf(";") && (a = "'" + a.replace(/'/g, "%27") + "'"), a = za(a), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + a + '">'), b.document.close()
      }
    }else {
      b = c.open(a, d, h)
    }
    If($i, b);
    a = F($i).document;
    a.write('\n<html>\n  <head>\n  </head>\n  <body class="presenter-display">\n    <div id="presenter-slide-preview">\n      <div id="presenter-current-slide-container">\n        <span class="presenter-label">Current Slide</span>\n        <div id="presenter-current-slide">\n        </div>\n      </div>\n      <div id="presenter-next-slide-container">\n        <span class="presenter-label">Next Slide</span>\n        <div id="presenter-next-slide">\n        </div>\n      </div>\n     </div>\n     <div id="presenter-notes-container"></div>\n     <div id="presenter-times" class="presenter-label">\n       <div id="presenter-elapsed-time-container">\n          <span id="presenter-elapsed-time">0:00:00</span>\n          <span id="presenter-elapsed-time-reset-container">\n            <a href="#" id="presenter-elapsed-time-reset">reset</a>\n          </span>\n       </div>\n       <div id="presenter-clock-time"><span></span></div>\n     </div>\n  </body>\n</html>\n');
    kj.a(E.c(F(Xi), "common", m), a);
    kj.a(E.c(F(Xi), "projection", m), a);
    kj.a(E.c(F(Xi), "presenter", m), a);
    zh(new Jh(a), "key", Bj);
    zh(a.getElementById("presenter-elapsed-time-reset"), "click", fj("\ufdd0'reset-elapsed-time"));
    vj();
    a = Fj()
  }
  return a
});
Zf.a(xf(["\ufdd0'reset-elapsed-time"]), function() {
  If(aj, m);
  var a = Cj();
  return w(a) ? Dj(a) : m
});
J(cj.b("body")).appendChild(ai('<div id="c-panel">\n<a id="c-toggle" href="#">\n  <span class="label">Toggle slide-show mode</span>\n  <span class="key">T</span>\n</a>\n<a id="c-first" href="#">\n  <span class="label">First slide</span>\n  <span class="key">Home</span>\n</a>\n<a id="c-prev" href="#">\n  <span class="label">Previous slide</span>\n  <span class="key">P</span>\n</a>\n<a id="c-next" href="#">\n  <span class="label">Next slide</span>\n  <span class="key">N</span>\n</a>\n<a id="c-last" href="#">\n  <span class="label">Last slide</span>\n  <span class="key">End</span>\n</a>\n<a id="c-presenter-window" href="#">\n  <span class="label">Open presenter preview</span>\n</a>\n</div>'));
var Wk = Th("c-panel");
$f.b("\ufdd0'show-control-panel");
var Xk = fj("\ufdd0'hide-control-panel");
ha(Xk) || (Xk && "function" == typeof Xk.handleEvent ? Xk = pa(Xk.handleEvent, Xk) : e(Error("Invalid listener argument")));
Ai.setTimeout(Xk, 3E3);
zh(Wk, "mouseover", fj("\ufdd0'show-control-panel"));
zh(Wk, "mouseout", fj("\ufdd0'hide-control-panel"));
zh(Th("c-toggle"), "click", fj("\ufdd0'toggle-mode"));
zh(Th("c-first"), "click", fj("\ufdd0'show-first-slide"));
zh(Th("c-prev"), "click", fj("\ufdd0'show-prev-slide"));
zh(Th("c-next"), "click", fj("\ufdd0'show-next-slide"));
zh(Th("c-last"), "click", fj("\ufdd0'show-last-slide"));
zh(Th("c-presenter-window"), "click", fj("\ufdd0'show-presenter-window"));
zh(new Jh(document), "key", Bj);
