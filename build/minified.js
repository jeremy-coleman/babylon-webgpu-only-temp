class aa {}
function ba(a, b, c = !1, d, e) {
  a.ba = b
  a.cj = c
  a.target = d
  a.currentTarget = e
}
class ca {
  constructor(a, b = !1, c, d) {
    ba(this, a, b, c, d)
  }
}
class da {
  constructor(a, b, c = null) {
    this.hi = a
    this.ba = b
    this.scope = c
    this.pg = this.Xh = !1
  }
}
function ea(a, b) {
  b.pg = !1
  b.Xh = !0
  setTimeout(() => {
    if (b) {
      var c = a.fa.indexOf(b)
      ;-1 !== c && a.fa.splice(c, 1)
    }
  }, 0)
}
function m(a, b) {
  if (!a.fa.length) return !0
  let c = a.al
  for (var d of ((c.ba = -1),
  (c.target = void 0),
  (c.currentTarget = void 0),
  (c.cj = !1),
  (c.Hi = b),
  (c.Zu = void 0),
  a.fa))
    if (
      !d.Xh &&
      (d.ba & -1 && (d.scope ? (c.Hi = d.hi.apply(d.scope, [b, c])) : (c.Hi = d.hi(b, c)), d.pg && ea(a, d)), c.cj)
    )
      return !1
  return !0
}
class z {
  constructor(a) {
    this.fa = []
    this.al = new ca(0)
    a && (this.Se = a)
  }
  add(a, b = -1, c = !1, d = null, e = !1) {
    if (!a) return null
    a = new da(a, b, d)
    return (a.pg = e), c ? this.fa.unshift(a) : this.fa.push(a), this.Se && this.Se(a), a
  }
  remove(a) {
    return !!a && -1 !== this.fa.indexOf(a) && (ea(this, a), !0)
  }
  clear() {
    this.fa = []
    this.Se = null
  }
  clone() {
    var a = new z()
    return (a.fa = this.fa.slice(0)), a
  }
}
function fa(a) {
  if (Math.log2) return Math.floor(Math.log2(a))
  if (0 > a) return NaN
  if (0 === a) return -1 / 0
  let b = 0
  if (1 > a) {
    for (; 1 > a; ) b++, (a *= 2)
    b = -b
  } else if (1 < a) for (; 1 < a; ) b++, (a = Math.floor(a / 2))
  return b
}
class ha {}
let ia = 1 / 2.2
function ja(a) {
  let b = []
  for (let c = 0; 3 > c; ++c) b.push(a())
}
let la = {}
function ma(a) {
  if (a && !na && oa)
    for (let b = 0; b < oa.length; ++b) {
      let c = oa[b],
        d = c.rh
      c.rh = Array(16)
      for (let e = 0; 16 > e; ++e) c.rh[e] = d[e]
    }
  na = a
  oa = null
}
class pa {}
var na, oa
na = !1
oa = []
class qa {
  constructor(a = 0, b = 0, c = 0) {
    this.r = a
    this.R = b
    this.b = c
  }
  toString() {
    return "{R: " + this.r + " G:" + this.R + " B:" + this.b + "}"
  }
  multiply(a) {
    return new qa(this.r * a.r, this.R * a.R, this.b * a.b)
  }
  scale(a) {
    return new qa(this.r * a, this.R * a, this.b * a)
  }
  add(a) {
    return new qa(this.r + a.r, this.R + a.R, this.b + a.b)
  }
  clone() {
    return new qa(this.r, this.R, this.b)
  }
  Gf(a, b, c) {
    return (this.r = a), (this.R = b), (this.b = c), this
  }
  set(a, b, c) {
    return this.Gf(a, b, c)
  }
}
class A {
  constructor(a = 0, b = 0, c = 0, d = 1) {
    this.r = a
    this.R = b
    this.b = c
    this.a = d
  }
  add(a) {
    return new A(this.r + a.r, this.R + a.R, this.b + a.b, this.a + a.a)
  }
  scale(a) {
    return new A(this.r * a, this.R * a, this.b * a, this.a * a)
  }
  multiply(a) {
    return new A(this.r * a.r, this.R * a.R, this.b * a.b, this.a * a.a)
  }
  toString() {
    return "{R: " + this.r + " G:" + this.R + " B:" + this.b + " A:" + this.a + "}"
  }
  clone() {
    return new A(this.r, this.R, this.b, this.a)
  }
  Gf(a, b, c, d) {
    return (this.r = a), (this.R = b), (this.b = c), (this.a = d), this
  }
  set(a, b, c, d) {
    return this.Gf(a, b, c, d)
  }
}
ja(function () {
  return new qa(0, 0, 0)
})
ja(() => new A(0, 0, 0, 0))
la["BABYLON.Color3"] = qa
la["BABYLON.Color4"] = A
function ra(a, b) {
  if ((a = sa[a]) && ta && a.current === a.Wf)
    switch (b) {
      case 0:
        ua(ta.replace(/%LIMIT%/g, "" + a.Wf).replace(/%TYPE%/g, "log"))
        break
      case 1:
        va(ta.replace(/%LIMIT%/g, "" + a.Wf).replace(/%TYPE%/g, "warning"))
        break
      case 2:
        B(ta.replace(/%LIMIT%/g, "" + a.Wf).replace(/%TYPE%/g, "error"))
    }
}
function wa(a) {
  var b = (d) => (10 > d ? "0" + d : "" + d),
    c = new Date()
  return "[" + b(c.getHours()) + ":" + b(c.getMinutes()) + ":" + b(c.getSeconds()) + "]: " + a
}
class xa {}
var sa, ta, ua, va, B, ya
ta = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message."
sa = {}
ya = 0
ua = function (a) {
  var b = wa(a)
  console.log("BJS - " + b)
  xa.ec && xa.ec("<div style='color:white'>" + b + "</div><br>")
  ra(a, 0)
}
va = function (a) {
  var b = wa(a)
  console.warn("BJS - " + b)
  xa.ec && xa.ec("<div style='color:orange'>" + a + "</div><br>")
  ra(a, 1)
}
B = function (a) {
  var b = wa(a)
  ya++
  console.error("BJS - " + b)
  xa.ec && xa.ec("<div style='color:red'>" + b + "</div><br>")
  ra(a, 2)
}
class za {
  static get ie() {
    return 0 === this.gb.length ? null : this.gb[this.gb.length - 1]
  }
}
var Aa, Ba
Aa = []
Ba = ""
let Ca = (a) => {
    for (
      var b,
        c,
        d,
        e,
        f,
        g = "",
        h = 0,
        k = ArrayBuffer.isView(a) ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : new Uint8Array(a);
      h < k.length;

    )
      (a = (b = k[h++]) >> 2),
        (d = ((3 & b) << 4) | ((b = h < k.length ? k[h++] : Number.NaN) >> 4)),
        (e = ((15 & b) << 2) | ((c = h < k.length ? k[h++] : Number.NaN) >> 6)),
        (f = 63 & c),
        isNaN(b) ? (e = f = 64) : isNaN(c) && (f = 64),
        (g +=
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a) +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f))
    return g
  },
  Da = (a) => {
    a = atob(a)
    const b = a.length,
      c = new Uint8Array(new ArrayBuffer(b))
    for (let d = 0; d < b; d++) c[d] = a.charCodeAt(d)
    return c.buffer
  }
class Ea {}
function Fa(a) {
  return `${a} needs to be imported before as it contains a side-effect required by your code.`
}
class Ga {
  constructor() {
    this.L =
      "undefined" != typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest() : new XMLHttpRequest()
  }
  get onprogress() {
    return this.L.onprogress
  }
  set onprogress(a) {
    this.L.onprogress = a
  }
  get readyState() {
    return this.L.readyState
  }
  get status() {
    return this.L.status
  }
  get statusText() {
    return this.L.statusText
  }
  get response() {
    return this.L.response
  }
  get responseURL() {
    return this.L.responseURL
  }
  get responseText() {
    return this.L.responseText
  }
  get responseType() {
    return this.L.responseType
  }
  set responseType(a) {
    this.L.responseType = a
  }
  get timeout() {
    return this.L.timeout
  }
  set timeout(a) {
    this.L.timeout = a
  }
  addEventListener(a, b, c) {
    this.L.addEventListener(a, b, c)
  }
  removeEventListener(a, b, c) {
    this.L.removeEventListener(a, b, c)
  }
  abort() {
    this.L.abort()
  }
  send(a) {
    if (Ha)
      for (let b in Ha) {
        let c = Ha[b]
        c && this.L.setRequestHeader(b, c)
      }
    this.L.send(a)
  }
  open(a, b) {
    for (var c of Ia) c(this.L, b)
    return (b = (b = b.replace("file:http:", "http:")).replace("file:https:", "https:")), this.L.open(a, b, !0)
  }
  setRequestHeader(a, b) {
    this.L.setRequestHeader(a, b)
  }
  getResponseHeader(a) {
    return this.L.getResponseHeader(a)
  }
}
function C() {
  return "undefined" != typeof window
}
function Ja() {
  return "undefined" != typeof navigator
}
function Ka() {
  return "undefined" != typeof document
}
function La(a) {
  var b = ""
  for (a = a.firstChild; a; ) 3 === a.nodeType && (b += a.textContent), (a = a.nextSibling)
  return b
}
var Ha, Ia
Ha = {}
Ia = []
let Ma = { pp: C, op: Ja, mp: Ka, Yo: La }
class Na {}
class Oa {}
var Pa = {}
class Qa {}
class Ra extends Error {}
var Sa = Object.setPrototypeOf || ((a, b) => ((a.__proto__ = b), a)),
  D,
  Ta = D || (D = {})
Ta[(Ta.S = 0)] = "GLSL"
Ta[(Ta.Tc = 1)] = "WGSL"
!0
function Va(a, b, c, d) {
  var e
  ;(null === (e = b.ab) || void 0 === e ? 0 : e.dg) && (a = b.ab.dg(a, b.Gi))
  this.Pr(a, b, (f) => {
    f = this.Qr(f, b, d)
    c(f)
  })
}
function Wa(a = D.S) {
  return a === D.S ? Xa : Ya
}
function Za(a = D.S) {
  return a === D.S ? $a : ab
}
function bb(a = D.S) {
  return a === D.S ? cb : db
}
class eb {}
var Xa, Ya, $a, ab, cb, db
Xa = "src/Shaders/"
$a = {}
cb = {}
Ya = "src/ShadersWGSL/"
ab = {}
db = {}
function fb(a, b, c, d, e) {
  if ("undefined" != typeof HTMLElement && b instanceof HTMLElement) e(La(b))
  else if ("source:" === b.substr(0, 7)) e(b.substr(7))
  else if ("base64:" === b.substr(0, 7)) e(window.atob(b.substr(7)))
  else {
    var f = Za(a.xa),
      g
    f[b + c + "Shader"]
      ? e(f[b + c + "Shader"])
      : d && f[b + d + "Shader"]
      ? e(f[b + d + "Shader"])
      : ((g = "." === b[0] || "/" === b[0] || -1 < b.indexOf("http") ? b : Wa(a.xa) + b),
        gb(a.o, g + "." + c.toLowerCase() + ".fx", e))
  }
}
function hb(a) {
  let b = a.me,
    c = a.sa
  var d = a.D
  a.Ob = !1
  try {
    let e = a.o
    a.D = e.ni(a.Gh)
    a.D.vb = a.qb
    let f = a.ql.bind(a)
    a.tf && a.Ee
      ? e.Te(a.D, a.tf, a.Ee, !0, a.Ve, a.Ue, f, null, a.jf)
      : e.Te(a.D, a.Fd, a.nd, !1, a.Ve, a.Ue, f, c, a.jf)
    e.Yg(a.D, () => {
      if (((a.Ig = []), a.D.Zg(a, a.lf, a.mf, a.wc, a.af, a.zd, b, a.Ig), b))
        for (let g = 0; g < b.length; g++) a.Mk[b[g]] = a.Ig[g]
      e.ei(a)
      a.kb = ""
      a.Ob = !0
      a.ja && a.ja(a)
      m(a.ag, a)
      a.ag.clear()
      a.Oa && a.Oa.nn()
      d && a.o.Ma(d)
    })
    a.D.Sd && ib(a, d)
  } catch (e) {
    jb(a, e, d)
  }
}
function ib(a, b) {
  try {
    if (a.Ob || (a.D && a.D.M)) return
  } catch (c) {
    jb(a, c, b)
    return
  }
  setTimeout(() => {
    ib(a, b)
  }, 16)
}
function kb(a, b) {
  a.M()
    ? b(a)
    : (a.ag.add((c) => {
        b(c)
      }),
      (a.D && !a.D.Sd) ||
        setTimeout(() => {
          ib(a, null)
        }, 16))
}
function jb(a, b, c = null) {
  var d, e, f
  a.kb = b.message
  var g = a.me
  b = a.Oa
  if (
    (B("Unable to compile effect:"),
    B(
      "Uniforms: " +
        a.mf.map(function (h) {
          return " " + h
        })
    ),
    B(
      "Attributes: " +
        g.map(function (h) {
          return " " + h
        })
    ),
    B("Defines:\r\n" + a.sa),
    lb)
  ) {
    let h = (g = null),
      k = null
    ;(null === (d = a.D) || void 0 === d ? 0 : d.He()) &&
      (([k, g] = mb(a.D.He(), a.kb, !1)), k && (B("Vertex code:"), B(k)))
    ;(null === (e = a.D) || void 0 === e ? 0 : e.Ge()) &&
      (([k, h] = mb(null === (f = a.D) || void 0 === f ? void 0 : f.Ge(), a.kb, !0)), k && (B("Fragment code:"), B(k)))
    g && B(g)
    h && B(h)
  }
  B("Error: " + a.kb)
  c && ((a.D = c), (a.Ob = !0), a.$a && a.$a(a, a.kb), m(a.$b, a))
  b &&
    ((a.D = null),
    b.at
      ? (B("Trying next fallback."), (a.sa = b.reduce(a.sa, a)), hb(a))
      : (a.$a && a.$a(a, a.kb), m(a.$b, a), a.$b.clear(), a.Oa && a.Oa.nn()))
}
function mb(a, b, c) {
  var d = c ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/
  let e = null
  b &&
    a &&
    (b = b.match(d)) &&
    2 === b.length &&
    ((b = parseInt(b[1])),
    (d = a.split("\n", -1)),
    d.length >= b && (e = `Offending line [${b}] in ${c ? "fragment" : "vertex"} code: ${d[b - 1]}`))
  return [a, e]
}
class nb {
  constructor(a, b, c, d = null, e, f = null, g = null, h = null, k = null, l, p = "", n = D.S) {
    var r, F
    this.name = null
    this.sa = ""
    this.$a = this.ja = null
    this.$ = 0
    this.ag = new z()
    this.$b = new z()
    this.Kl = !1
    this.lf = {}
    this.zd = {}
    this.Ob = !1
    this.kb = ""
    this.wc = {}
    this.qb = ""
    this.Oa = null
    this.Ee = this.tf = ""
    this.D = this.jf = null
    this.Ue = this.Ve = this.nd = this.Fd = ""
    this.name = a
    this.qb = p
    let v = null
    if (b.attributes) {
      if (
        ((this.o = c),
        (this.me = b.attributes),
        (this.mf = b.Tu.concat(b.Yd)),
        (this.af = b.Yd.slice()),
        (this.sa = b.sa),
        (this.$a = b.$a),
        (this.ja = b.ja),
        (this.Oa = b.Os),
        (this.mh = b.wm),
        (this.jf = b.transformFeedbackVaryings || null),
        (this.xa = null !== (r = b.Ib) && void 0 !== r ? r : D.S),
        b.hj)
      )
        for (c = 0; c < b.hj.length; c++) this.lf[b.hj[c]] = c
      v = null !== (F = b.Lt) && void 0 !== F ? F : null
    } else
      (this.o = e),
        (this.sa = null == f ? "" : f),
        (this.mf = c.concat(d)),
        (this.af = d ? d.slice() : []),
        (this.me = b),
        (this.xa = n),
        (this.$a = k),
        (this.ja = h),
        (this.mh = l),
        (this.Oa = g)
    var q, u
    this.Mk = {}
    this.$ = ob++
    b = C() ? pb(this.o) : null
    a.tn ? (q = "source:" + a.tn) : a.tg ? (q = b ? b.getElementById(a.tg) : null) || (q = a.tg) : (q = a.qg || a)
    a.qm ? (u = "source:" + a.qm) : a.Of ? (u = b ? b.getElementById(a.Of) : null) || (u = a.Of) : (u = a.Mf || a)
    this.Gh = this.o.gh(this.xa)
    let y = {
        sa: this.sa.split("\n"),
        wm: this.mh,
        Gi: !1,
        xu: this.o.xl,
        ab: this.o.hh(this.xa),
        Lc: this.o.Lc,
        wu: Wa(this.xa),
        ct: bb(this.xa),
        version: (100 * this.o.version).toString(),
        Jt: this.o.an,
        Wi: this.Gh,
        Uf: this.o.Uf,
        fb: this.o.fb
      },
      w = [void 0, void 0],
      K = () => {
        if (w[0] && w[1]) {
          y.Gi = !0
          let [t, x] = w
          Va(
            x,
            y,
            (M) => {
              v && (M = v("fragment", M))
              var G = y.ab && y.ab.Kf ? y.ab.Kf(t, M, y.Wi) : { sg: t, Nf: M }
              M = G.sg
              G = G.Nf
              if (a) {
                var Y = a.Of || a.Mf || a.bn || a
                this.Fd =
                  (this.xa === D.Tc ? "//" : "") +
                  "#define SHADER_NAME vertex:" +
                  (a.tg || a.qg || a.bn || a) +
                  "\n" +
                  M
                this.nd = (this.xa === D.Tc ? "//" : "") + "#define SHADER_NAME fragment:" + Y + "\n" + G
              } else (this.Fd = M), (this.nd = G)
              hb(this)
            },
            this.o
          )
        }
      }
    fb(this, q, "Vertex", "", (t) => {
      y.ab && y.ab.Sf && y.ab.Sf(y.Wi)
      Va(
        t,
        y,
        (x) => {
          this.Ve = t
          v && (x = v("vertex", x))
          w[0] = x
          K()
        },
        this.o
      )
    })
    fb(this, u, "Fragment", "Pixel", (t) => {
      this.Ue = t
      w[1] = t
      K()
    })
  }
  get key() {
    return this.qb
  }
  M() {
    try {
      return !!this.Ob || (!!this.D && this.D.M)
    } catch {
      return !1
    }
  }
  getUniform(a) {
    return this.wc[a]
  }
  ql(a, b, c, d) {
    this.Ob = !1
    this.tf = a
    this.Ee = b
    this.$a = (e, f) => {
      d && d(f)
    }
    this.ja = () => {
      var e = this.o.Ba
      if (e) for (var f = 0; f < e.length; f++) e[f].kt(63)
      this.D.kh(c)
    }
    this.Oa = null
    hb(this)
  }
  Wc(a, b) {
    this.o.Wc(this.zd[a], b, a)
  }
  bb(a, b) {
    this.o.bb(this.zd[a], this.wc[a], b, a)
  }
  Ef(a, b) {
    let c = this.lf[b]
    void 0 === c || (qb[c] === a && this.o.pa.pn) || ((qb[c] = a), this.o.ls(a, c, b))
  }
  Df(a, b) {
    this.o.Df(this.D, a, b)
  }
  B() {
    this.D && this.D.B()
    this.o.Jh(this)
  }
}
var ob, lb, qb
lb = !0
ob = 0
qb = {}
class rb {
  constructor(a = !0) {
    this.qc = this.Pb = this.lc = this.mc = this.nc = this.oc = this.pc = !1
    a && this.reset()
  }
  get ia() {
    return this.nc || this.pc || this.oc || this.mc || this.lc || this.Pb || this.qc
  }
  get ug() {
    return this.wf
  }
  set ug(a) {
    this.wf !== a && ((this.wf = a), (this.Pb = !0))
  }
  get vg() {
    return this.xf
  }
  set vg(a) {
    this.xf !== a && ((this.xf = a), (this.Pb = !0))
  }
  get cullFace() {
    return this.ld
  }
  set cullFace(a) {
    this.ld !== a && ((this.ld = a), (this.mc = !0))
  }
  get pi() {
    return this.te
  }
  set pi(a) {
    this.te !== a && ((this.te = a), (this.lc = !0))
  }
  get depthFunc() {
    return this.ye
  }
  set depthFunc(a) {
    this.ye !== a && ((this.ye = a), (this.nc = !0))
  }
  get depthMask() {
    return this.ze
  }
  set depthMask(a) {
    this.ze !== a && ((this.ze = a), (this.oc = !0))
  }
  get Cc() {
    return this.Be
  }
  set Cc(a) {
    this.Be !== a && ((this.Be = a), (this.pc = !0))
  }
  get frontFace() {
    return this.od
  }
  set frontFace(a) {
    this.od !== a && ((this.od = a), (this.qc = !0))
  }
  reset() {
    this.Be = this.ze = !0
    this.te = this.ld = this.ye = null
    this.xf = this.wf = 0
    this.od = null
    this.oc = this.pc = !0
    this.lc = this.mc = this.nc = !1
    this.Pb = !0
    this.qc = !1
  }
  apply(a) {
    this.ia &&
      (this.lc && (this.pi ? a.enable(a.CULL_FACE) : a.disable(a.CULL_FACE), (this.lc = !1)),
      this.mc && (a.cullFace(this.cullFace), (this.mc = !1)),
      this.oc && (a.depthMask(this.depthMask), (this.oc = !1)),
      this.pc && (this.Cc ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST), (this.pc = !1)),
      this.nc && (a.depthFunc(this.depthFunc), (this.nc = !1)),
      this.Pb &&
        (this.ug || this.vg
          ? (a.enable(a.POLYGON_OFFSET_FILL), a.polygonOffset(this.ug, this.vg))
          : a.disable(a.POLYGON_OFFSET_FILL),
        (this.Pb = !1)),
      this.qc && (a.frontFace(this.frontFace), (this.qc = !1)))
  }
}
class sb {
  constructor() {
    this.reset()
  }
  reset() {
    this.enabled = !1
    this.ba = 255
    this.Wa = 519
    this.Xa = 1
    this.Yb = 255
    this.ac = this.cc = 7680
    this.bc = 7681
  }
  get stencilFunc() {
    return this.Wa
  }
  set stencilFunc(a) {
    this.Wa = a
  }
  get stencilMask() {
    return this.ba
  }
  set stencilMask(a) {
    this.ba = a
  }
  get ig() {
    return this.enabled
  }
  set ig(a) {
    this.enabled = a
  }
}
class tb {
  constructor() {
    this.Ha = Array(4)
    this.Yc = Array(2)
    this.Ga = Array(4)
    this.rd = this.sd = this.qd = this.Gg = this.Ke = !1
    this.reset()
  }
  get ia() {
    return this.qd || this.sd || this.rd
  }
  reset() {
    this.Gg = !1
    this.Ha[0] = null
    this.Ha[1] = null
    this.Ha[2] = null
    this.Ha[3] = null
    this.Yc[0] = null
    this.Yc[1] = null
    this.Ga[0] = null
    this.Ga[1] = null
    this.Ga[2] = null
    this.Ga[3] = null
    this.qd = !0
    this.Ke = this.rd = this.sd = !1
  }
  apply(a) {
    this.ia &&
      (this.qd && (this.Gg ? a.enable(a.BLEND) : a.disable(a.BLEND), (this.qd = !1)),
      this.sd && (a.blendFuncSeparate(this.Ha[0], this.Ha[1], this.Ha[2], this.Ha[3]), (this.sd = !1)),
      this.rd && (a.blendEquationSeparate(this.Yc[0], this.Yc[1]), (this.rd = !1)),
      this.Ke && (a.blendColor(this.Ga[0], this.Ga[1], this.Ga[2], this.Ga[3]), (this.Ke = !1)))
  }
}
class ub {
  constructor() {
    this.ua = -1
    this.Vh = !0
    this.na = this.Ja = this.La = this.Ka = null
    this.Pg = 0
  }
  get Jb() {
    return this.Ka
  }
  set Jb(a) {
    this.Ka = a
  }
  get Kb() {
    return this.La
  }
  set Kb(a) {
    this.La = a
  }
  get Pc() {
    return this.Ja
  }
  set Pc(a) {
    this.Ja = a
  }
  get zf() {
    return this.na
  }
  set zf(a) {
    this.na = a
  }
  get Nc() {
    return this.Vh
  }
  set Nc(a) {
    this.Vh = a
  }
  setParameters(a = 1, b = 1, c = 1, d = 1, e = 2, f = 0) {
    return (this.Ka = a), (this.La = b), (this.Ja = c), (this.na = d), (this.ua = e), (this.Pg = f), this
  }
}
var E,
  H = E || (E = {})
H[(H.Fr = 0)] = "Unknown"
H[(H.Fg = 1)] = "Url"
H[(H.Gk = 2)] = "Temp"
H[(H.xk = 3)] = "Raw"
H[(H.Ej = 4)] = "Dynamic"
H[(H.Bk = 5)] = "RenderTarget"
H[(H.Hp = 6)] = "MultiRenderTarget"
H[(H.ge = 7)] = "Cube"
H[(H.xj = 8)] = "CubeRaw"
H[(H.wj = 9)] = "CubePrefiltered"
H[(H.zk = 10)] = "Raw3D"
H[(H.yk = 11)] = "Raw2DArray"
H[(H.zo = 12)] = "DepthStencil"
H[(H.ro = 13)] = "CubeRawRGBD"
H[(H.yj = 14)] = "Depth"
!0
function I(a, b) {
  var c
  null === (c = a.I) || void 0 === c || c.bj(b.Oh, a.ta, a.X, a.width, a.height)
  b.I = a.I
  a.rb && (b.rb && b.rb.B(), (b.rb = a.rb))
  a.tb && (b.tb && b.tb.B(), (b.tb = a.tb))
  a.sb && (b.sb && b.sb.B(), (b.sb = a.sb))
  a.nb && (b.nb && b.nb.B(), (b.nb = a.nb))
  c = a.o.mb
  var d
  ;-1 !== (d = c.indexOf(a)) && c.splice(d, 1)
  ;-1 === c.indexOf(b) && c.push(b)
}
class vb extends ub {
  constructor(a, b, c = !1) {
    super()
    this.Td = this.Gc = this.Hc = this.X = this.M = !1
    this.url = ""
    this.ta = !1
    this.Ym = 0
    this.format = this.type = -1
    this.Hb = new z()
    this.$b = new z()
    this.Ti = null
    this.Bf = this.Cf = this.depth = this.height = this.width = 0
    this.Aa = !1
    this.ib = -1
    this.A = null
    this.Tb = 0
    this.De = ""
    this.Ph = this.hc = this.Kd = this.Ua = this.bl = null
    this.el = this.fl = 0
    this.Ta = !1
    this.I = this.nb = this.sb = this.tb = this.rb = null
    this.Ih = 1
    this.o = a
    this.Oh = b
    this.Hl = wb++
    c || (this.I = a.Qg())
  }
  get Nc() {
    return this.ta
  }
  set Nc(a) {
    this.ta = a
  }
  get $() {
    return this.Hl
  }
  get source() {
    return this.Oh
  }
  wa() {
    if (
      ((this.M = !1), (this.hc = null), (this.Ka = null), (this.La = null), (this.Ja = null), (this.na = null), this.Ti)
    ) {
      let c = this.Ti(this)
      var a = (d) => {
        I(d, this)
        this.M = c.M
      }
      c.Sd ? c.proxy.then(a) : a(c.proxy)
    } else
      switch (this.source) {
        case E.Fg:
          var b = this.o.createTexture(
            null !== (a = this.nl) && void 0 !== a ? a : this.url,
            !this.ta,
            this.Aa,
            null,
            this.ua,
            () => {
              I(b, this)
              this.M = !0
            },
            null,
            this.A,
            void 0,
            this.format,
            this.De,
            void 0,
            void 0,
            void 0,
            this.Ta
          )
          break
        case E.xk:
          b = xb()
          I(b, this)
          this.M = !0
          break
        case E.zk:
          b = yb()
          I(b, this)
          this.M = !0
          break
        case E.yk:
          b = zb()
          I(b, this)
          this.M = !0
          break
        case E.Ej:
          b = this.o.ts(this.Cf, this.Bf, this.ta, this.ua)
          I(b, this)
          this.o.Uu(this, this.o.Qd(), this.Aa, void 0, void 0, !0)
          break
        case E.ge:
          b = this.o.ss(
            this.url,
            null,
            this.bl,
            !this.ta,
            () => {
              I(b, this)
              this.M = !0
            },
            null,
            this.format,
            this.De,
            !1,
            0,
            0,
            null,
            void 0,
            this.Ta
          )
          break
        case E.xj:
          b = Ab()
          I(b, this)
          this.M = !0
          break
        case E.wj:
          ;(b = this.o.ws(
            this.url,
            null,
            this.fl,
            this.el,
            (c) => {
              c && I(c, this)
              this.M = !0
            },
            null,
            this.format,
            this.De
          )),
            (b.Ph = this.Ph)
      }
  }
  B() {
    this.Ih--
    this.Hb.clear()
    this.$b.clear()
    0 === this.Ih && (this.o.wb(this), (this.I = null))
  }
}
var wb = 0
class Bb {
  constructor() {
    this.Ib = D.S
  }
}
class Cb {
  constructor() {
    this.Ib = D.S
  }
}
class Db {
  constructor() {
    this.eg = 0
    this.$ = Eb++
  }
  get O() {
    return null
  }
}
var Eb = 0
class Hb extends Db {
  constructor(a) {
    super()
    this.A = a
  }
  get O() {
    return this.A
  }
}
class Ib {
  constructor() {
    this.Rm = this.Qm = this.pm = this.sn = null
  }
  get Sd() {
    return this.Ic
  }
  get M() {
    return !!this.W && (!this.Ic || this.Va.oh(this))
  }
  kh(a) {
    a && this.W && a(this.W)
  }
  Zg(a, b, c, d, e, f, g, h) {
    let k = this.Va
    if (k.Lc) for (var l in b) a.Df(l, b[l])
    this.Va.Bi(this, c).forEach((p, n) => {
      d[c[n]] = p
    })
    this.wc = d
    for (b = 0; b < e.length; b++) null == a.getUniform(e[b]) && (e.splice(b, 1), b--)
    e.forEach((p, n) => {
      f[p] = n
    })
    for (let p of k.Qf(this, g)) h.push(p)
  }
  B() {
    this.wc = {}
  }
  He() {
    return this.Oc ? this.Va.g.getShaderSource(this.Oc) : null
  }
  Ge() {
    return this.Ec ? this.Va.g.getShaderSource(this.Ec) : null
  }
}
class Jb {
  constructor(a = null, b) {
    if (((this.Uc = null), (this.kd = b), !a && !(a = b.createTexture()))) throw Error("Unable to create webGL texture")
    this.set(a)
  }
  get O() {
    return this.Id
  }
  bj() {}
  set(a) {
    this.Id = a
  }
  reset() {
    this.Uc = this.Id = null
  }
  release() {
    this.Uc && (this.kd.deleteRenderbuffer(this.Uc), (this.Uc = null))
    this.Id && this.kd.deleteTexture(this.Id)
    this.reset()
  }
}
class Kb {
  constructor(a, b = !0) {
    this.sa = this.effect = null
    this.hm = a.ki()
    b && a.mi()
  }
  B() {
    var a
    null === (a = this.hm) || void 0 === a || a.B()
  }
}
class Lb {
  constructor(a = !0) {
    this.ce = this.pb = this.ob = this.rc = this.sc = !1
    a && this.reset()
  }
  get ia() {
    return this.sc || this.rc || this.ob || this.pb
  }
  get Wa() {
    return this.$g
  }
  set Wa(a) {
    this.$g !== a && ((this.$g = a), (this.ob = !0))
  }
  get Xa() {
    return this.bh
  }
  set Xa(a) {
    this.bh !== a && ((this.bh = a), (this.ob = !0))
  }
  get Yb() {
    return this.ah
  }
  set Yb(a) {
    this.ah !== a && ((this.ah = a), (this.ob = !0))
  }
  get cc() {
    return this.Ch
  }
  set cc(a) {
    this.Ch !== a && ((this.Ch = a), (this.pb = !0))
  }
  get ac() {
    return this.Ah
  }
  set ac(a) {
    this.Ah !== a && ((this.Ah = a), (this.pb = !0))
  }
  get bc() {
    return this.Bh
  }
  set bc(a) {
    this.Bh !== a && ((this.Bh = a), (this.pb = !0))
  }
  get ba() {
    return this.sh
  }
  set ba(a) {
    this.sh !== a && ((this.sh = a), (this.rc = !0))
  }
  get enabled() {
    return this.Nb
  }
  set enabled(a) {
    this.Nb !== a && ((this.Nb = a), (this.sc = !0))
  }
  reset() {
    var a
    this.Da = void 0
    null === (a = this.Ca) || void 0 === a || a.reset()
    this.pb = this.ob = this.rc = this.sc = !0
  }
  apply(a) {
    var b
    if (a) {
      var c = !this.ce && !(null === (b = this.Da) || void 0 === b || !b.enabled)
      this.enabled = c ? this.Da.enabled : this.Ca.enabled
      this.Wa = c ? this.Da.Wa : this.Ca.Wa
      this.Xa = c ? this.Da.Xa : this.Ca.Xa
      this.Yb = c ? this.Da.Yb : this.Ca.Yb
      this.cc = c ? this.Da.cc : this.Ca.cc
      this.ac = c ? this.Da.ac : this.Ca.ac
      this.bc = c ? this.Da.bc : this.Ca.bc
      this.ba = c ? this.Da.ba : this.Ca.ba
      this.ia &&
        (this.sc && (this.enabled ? a.enable(a.STENCIL_TEST) : a.disable(a.STENCIL_TEST), (this.sc = !1)),
        this.rc && (a.stencilMask(this.ba), (this.rc = !1)),
        this.ob && (a.stencilFunc(this.Wa, this.Xa, this.Yb), (this.ob = !1)),
        this.pb && (a.stencilOp(this.cc, this.ac, this.bc), (this.pb = !1)))
    }
  }
}
class Mb {}
function Nb(a, b, c = "") {
  return c + (b ? b + "\n" : "") + a
}
function Ob() {
  throw Fa("FileTools")
}
function Pb(a, b) {
  var c = a
  var d = (c--, (c |= c >> 1), (c |= c >> 2), (c |= c >> 4), (c |= c >> 8), (c |= c >> 16), ++c)
  var e = a
  c = ((e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16) - (e >> 1))
  return Math.min(d - a > a - c ? c : d, b)
}
function Qb() {
  throw Fa("FileTools")
}
function pb(a) {
  return a.v && a.v.ownerDocument ? a.v.ownerDocument : document
}
function gb(a, b, c, d, e, f, g) {
  b = Qb(b, c, d, e, f, g)
  a.Vc.push(b)
  b.Za.add((h) => {
    a.Vc.splice(a.Vc.indexOf(h), 1)
  })
}
function xb() {
  throw Fa("Engine.RawTexture")
}
function yb() {
  throw Fa("Engine.RawTexture")
}
function zb() {
  throw Fa("Engine.RawTexture")
}
function Ab() {
  throw Fa("Engine.RawTexture")
}
function Rb(a, b) {
  setTimeout(async () => {
    var c
    a.Ce = null
    let d = a.P.Cc,
      e = a.P.depthFunc,
      f = a.P.depthMask,
      g = a.ef.ig
    await b()
    for (var h in a.aa) {
      let l = a.aa[h]
      l.D = null
      l.Kl = !1
      hb(l)
    }
    qb = {}
    null === (c = a.Yr) || void 0 === c || c.call(a)
    c = a.mb.slice()
    for (var k of c) k.wa()
    k = a.ul.slice()
    for (let l of k) l.wa()
    a.We()
    a.de(!0)
    a.P.Cc = d
    a.P.depthFunc = e
    a.P.depthMask = f
    a.ef.ig = g
    va(a.name + " context successfully restored.")
    m(a.Nm, a)
    a.re = !1
  }, 0)
}
function Sb(a) {
  if (!a.Ua) {
    if ("undefined" == typeof document) var b = new OffscreenCanvas(1, 1)
    else (b = document.createElement("canvas")), (b = ((b.width = 1), (b.height = 1), b))
    a.Ua = b
    ;(b = a.Ua.getContext("2d")) && (a.Kd = b)
  }
}
function Tb(a, b, c, d) {
  c = c || a.Rf()
  d = d || a.Fc()
  var e = b.x || 0,
    f = b.y || 0
  a.dd = b
  a.Gd(e * c, f * d, c * b.width, d * b.height)
}
function Ub(a, b) {
  a.rf || Vb(a)
  a.bindBuffer(b, a.g.ARRAY_BUFFER)
}
function Wb(a, b, c) {
  var d = a.g.createBuffer()
  if (!d) throw Error("Unable to create vertex buffer")
  d = new Hb(d)
  Ub(a, d)
  b instanceof Array ? a.g.bufferData(a.g.ARRAY_BUFFER, new Float32Array(b), c) : a.g.bufferData(a.g.ARRAY_BUFFER, b, c)
  Ub(a, null)
  return (d.eg = 1), d
}
function Vb(a) {
  a.Ok && ((a.Ok = null), a.g.bindVertexArray(null))
}
function Xb(a, b) {
  a.g.disableVertexAttribArray(b)
  a.sf[b] = !1
  a.ve[b].active = !1
}
function Yb(a, b, c) {
  for (var d = a.g; d.getError() != d.NO_ERROR; );
  var e = d.createShader("vertex" === c ? d.VERTEX_SHADER : d.FRAGMENT_SHADER)
  if (!e)
    throw Error(
      `Something went wrong while creating a gl ${c} shader object. gl error=${d.getError()}, gl isContextLost=${d.isContextLost()}, _contextWasLost=${
        a.re
      }`
    )
  return d.shaderSource(e, b), d.compileShader(e), e
}
function Zb(a, b) {
  let c = b.context,
    d = b.Oc,
    e = b.Ec,
    f = b.W
  if (!c.getProgramParameter(f, c.LINK_STATUS)) {
    if (!a.g.getShaderParameter(d, a.g.COMPILE_STATUS)) {
      var g = a.g.getShaderInfoLog(d)
      if (g) throw ((b.sn = g), Error("VERTEX SHADER " + g))
    }
    if (!a.g.getShaderParameter(e, a.g.COMPILE_STATUS) && (g = a.g.getShaderInfoLog(e)))
      throw ((b.pm = g), Error("FRAGMENT SHADER " + g))
    if ((g = c.getProgramInfoLog(f))) throw ((b.Qm = g), Error(g))
  }
  if (a.qn && (c.validateProgram(f), !c.getProgramParameter(f, c.VALIDATE_STATUS) && (g = c.getProgramInfoLog(f))))
    throw ((b.Rm = g), Error(g))
  c.deleteShader(d)
  c.deleteShader(e)
  b.Oc = void 0
  b.Ec = void 0
  b.ja && (b.ja(), (b.ja = void 0))
}
function $b(a) {
  if (a.Qe) {
    a.Qe = !1
    for (var b = 0; b < a.l.Zf; b++) Xb(a, b)
  } else {
    b = 0
    for (var c = a.sf.length; b < c; b++) b >= a.l.Zf || !a.sf[b] || Xb(a, b)
  }
}
function ac(a, b, c, d, e, f = 3, g = null, h = null, k, l, p = null, n = null, r = null, F = null, v, q, u) {
  let y = "data:" === (b = b || "").substr(0, 5),
    w = "blob:" === b.substr(0, 5),
    K = y && -1 !== b.indexOf(";base64,"),
    t = n || new vb(a, E.Fg),
    x = b
  !a.Sh || K || n || p || (b = a.Sh(b))
  x !== b && (t.nl = x)
  let M = b.lastIndexOf("."),
    G = F || (-1 < M ? b.substring(M).toLowerCase() : ""),
    Y = null
  ;-1 < G.indexOf("?") && (G = G.split("?")[0])
  for (let P of bc)
    if (P.ns(G, v)) {
      Y = P
      break
    }
  e && e.Rr(t)
  t.url = b
  t.ta = !c
  t.ua = f
  t.Aa = d
  t.Ta = !!u && a.l.kg && (1 < a.Ea || a.Am || c)
  a.Na || (t.A = p)
  let Fb = null
  g && !n && (Fb = t.Hb.add(g))
  n || a.mb.push(t)
  let Ua = (P, ka) => {
    e && e.Ye(t)
    b === x
      ? (Fb && t.Hb.remove(Fb),
        ac(a, Ba, c, t.Aa, e, f, null, h, k, l, p, t),
        (P = (P || "Unknown error") + " - Fallback texture was used"),
        m(t.$b, { message: P, Ls: ka }),
        h && h(P, ka))
      : (va(`Failed to load ${b}, falling back to ${x}`), ac(a, x, c, t.Aa, e, f, g, h, k, l, p, t, r, F, v, q, u))
  }
  if (Y) {
    let P = (ka) => {
      Y.ht(
        ka,
        t,
        (Gb, mf, nf, of, pf, qf) => {
          qf
            ? Ua("TextureLoader failed to load data")
            : k(t, G, e, { width: Gb, height: mf }, t.Aa, !nf, of, () => (pf(), !1), f)
        },
        q
      )
    }
    p
      ? p instanceof ArrayBuffer
        ? P(new Uint8Array(p))
        : ArrayBuffer.isView(p)
        ? P(p)
        : h && h("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
      : gb(
          a,
          b,
          (ka) => P(new Uint8Array(ka)),
          void 0,
          e ? e.Li : void 0,
          !0,
          (ka, Gb) => {
            Ua("Unable to load " + Gb)
          }
        )
  } else
    (d = (P) => {
      w && !a.Na && (t.A = P)
      k(t, G, e, P, t.Aa, c, !1, l, f)
    }),
      !y || K
        ? p && ("string" == typeof p.decoding || p.close)
          ? d(p)
          : Ob(b, d, Ua, e ? e.Li : null, v, t.Aa && a.pa.Ji ? { imageOrientation: "flipY" } : void 0)
        : "string" == typeof p || p instanceof ArrayBuffer || ArrayBuffer.isView(p) || p instanceof Blob
        ? Ob(p, d, Ua, e ? e.Li : null, v, t.Aa && a.pa.Ji ? { imageOrientation: "flipY" } : void 0)
        : p && d(p)
  return t
}
function cc(a, b, c = !1) {
  var d = c ? a.g.SRGB8_ALPHA8 : a.g.RGBA
  switch (b) {
    case 0:
      d = a.g.ALPHA
      break
    case 1:
      d = a.g.LUMINANCE
      break
    case 2:
      d = a.g.LUMINANCE_ALPHA
      break
    case 6:
      d = a.g.RED
      break
    case 7:
      d = a.g.RG
      break
    case 4:
      d = c ? a.g.SRGB : a.g.RGB
      break
    case 5:
      d = c ? a.g.SRGB8_ALPHA8 : a.g.RGBA
  }
  if (1 < a.u)
    switch (b) {
      case 8:
        d = a.g.RED_INTEGER
        break
      case 9:
        d = a.g.RG_INTEGER
        break
      case 10:
        d = a.g.RGB_INTEGER
        break
      case 11:
        d = a.g.RGBA_INTEGER
    }
  return d
}
function dc(a, b) {
  return b.X ? a.g.TEXTURE_CUBE_MAP : b.Hc ? a.g.TEXTURE_3D : b.Gc || b.Td ? a.g.TEXTURE_2D_ARRAY : a.g.TEXTURE_2D
}
function ec(a, b, c, d, e, f) {
  var g = a.g
  g &&
    ((f = a.fh(f, !d)),
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, f.Cm),
    g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, f.min),
    d || e || g.generateMipmap(g.TEXTURE_2D),
    a.H(g.TEXTURE_2D, null),
    c && c.Ye(b),
    m(b.Hb, b),
    b.Hb.clear())
}
function fc(a) {
  a.xe !== a.Z && (a.g.activeTexture(a.g.TEXTURE0 + a.Z), (a.xe = a.Z))
}
function gc(a, b, c) {
  ;(b = a.Zc[b]) && b.Rk !== c && (a.g.uniform1i(b, c), (b.Rk = c))
}
function hc(a, b) {
  switch (b) {
    case 0:
      return a.g.CLAMP_TO_EDGE
    case 2:
      return a.g.MIRRORED_REPEAT
  }
  return a.g.REPEAT
}
function ic(a, b) {
  let c = a.g
  for (; c.getError() !== c.NO_ERROR; );
  let d = !0,
    e = c.createTexture()
  c.bindTexture(c.TEXTURE_2D, e)
  c.texImage2D(c.TEXTURE_2D, 0, a.eh(b), 1, 1, 0, c.RGBA, jc(a, b), null)
  c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST)
  c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST)
  a = c.createFramebuffer()
  c.bindFramebuffer(c.FRAMEBUFFER, a)
  c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, e, 0)
  b = c.checkFramebufferStatus(c.FRAMEBUFFER)
  if (
    ((d = d && b === c.FRAMEBUFFER_COMPLETE),
    (d = d && c.getError() === c.NO_ERROR),
    d && (c.clear(c.COLOR_BUFFER_BIT), (d = d && c.getError() === c.NO_ERROR)),
    d)
  ) {
    c.bindFramebuffer(c.FRAMEBUFFER, null)
    b = c.RGBA
    let f = c.UNSIGNED_BYTE,
      g = new Uint8Array(4)
    c.readPixels(0, 0, 1, 1, b, f, g)
    d = d && c.getError() === c.NO_ERROR
  }
  c.deleteTexture(e)
  c.deleteFramebuffer(a)
  for (c.bindFramebuffer(c.FRAMEBUFFER, null); !d && c.getError() !== c.NO_ERROR; );
  return d
}
function jc(a, b) {
  if (1 === a.u) {
    switch (b) {
      case 1:
        return a.g.FLOAT
      case 2:
        return a.g.HALF_FLOAT_OES
      case 8:
        return a.g.UNSIGNED_SHORT_4_4_4_4
      case 9:
        return a.g.UNSIGNED_SHORT_5_5_5_1
      case 10:
        return a.g.UNSIGNED_SHORT_5_6_5
    }
    return a.g.UNSIGNED_BYTE
  }
  switch (b) {
    case 3:
      return a.g.BYTE
    case 4:
      return a.g.SHORT
    case 5:
      return a.g.UNSIGNED_SHORT
    case 6:
      return a.g.INT
    case 7:
      return a.g.UNSIGNED_INT
    case 1:
      return a.g.FLOAT
    case 2:
      return a.g.HALF_FLOAT
    case 8:
      return a.g.UNSIGNED_SHORT_4_4_4_4
    case 9:
      return a.g.UNSIGNED_SHORT_5_5_5_1
    case 10:
      return a.g.UNSIGNED_SHORT_5_6_5
    case 11:
      return a.g.UNSIGNED_INT_2_10_10_10_REV
    case 12:
      return a.g.UNSIGNED_INT_24_8
    case 13:
      return a.g.UNSIGNED_INT_10F_11F_11F_REV
    case 14:
      return a.g.UNSIGNED_INT_5_9_9_9_REV
    case 15:
      return a.g.FLOAT_32_UNSIGNED_INT_24_8_REV
  }
  return a.g.UNSIGNED_BYTE
}
class kc {
  constructor(a, b, c, d) {
    this.ui = this.Uf = this.qf = this.qn = this.Vi = this.Zb = this.om = !1
    this.Si = new z()
    this.kf = []
    this.Bl = []
    this.u = 1
    this.lh = !0
    this.Mg = !1
    this.Mm = new z()
    this.Nm = new z()
    this.vi = this.Na = this.re = !1
    this.gd = this.fd = !0
    this.P = new rb()
    this.Sa = new Lb()
    this.ef = new sb()
    this.le = new tb()
    this.mb = []
    this.ul = []
    this.Z = 0
    this.xe = -1
    this.jb = {}
    this.aa = {}
    this.sf = []
    this.Rg = []
    this.Ce = this.Sg = null
    this.ve = []
    this.Qe = this.rf = !1
    this.kl = []
    this.Ne = 0
    this.Vc = []
    this.Sh = null
    this.vm = { xm: !1 }
    this.premultipliedAlpha = !0
    this.Oi = new z()
    this.qh = !1
    this.Nh = 0
    this.N = { x: 0, y: 0, z: 0, w: 0 }
    this.nf = null
    this.jm = !0
    this.Zc = {}
    var e = null
    if (((c = c || {}), (this.Sa.Ca = this.ef), ma(!!c.Yu), a)) {
      if (((d = d || c.Ll || !1), a.getContext)) {
        if (
          ((e = a),
          (this.v = e),
          void 0 !== b && (c.antialias = b),
          void 0 === c.If && (c.If = !1),
          void 0 === c.Xf && (c.Xf = 4),
          void 0 === c.mn && (c.mn = 1 / 60),
          void 0 === c.preserveDrawingBuffer && (c.preserveDrawingBuffer = !1),
          void 0 === c.Vb && (c.Vb = !0),
          void 0 !== c.zc && void 0 !== c.zc.Ml && (this.Kg = c.zc.Ml),
          void 0 !== c.zc && void 0 !== c.zc.Nl && (this.Lg = c.zc.Nl),
          void 0 === c.stencil && (c.stencil = !0),
          !1 === c.premultipliedAlpha && (this.premultipliedAlpha = !1),
          void 0 === c.ij && (c.ij = !0),
          (this.Na = !!c.Jf),
          navigator && navigator.userAgent)
        ) {
          this.pe = () => {
            let h = navigator.userAgent
            this.vm.xm = -1 !== h.indexOf("Mobile") || (-1 !== h.indexOf("Mac") && Ka() && "ontouchend" in document)
          }
          this.pe()
          C() && window.addEventListener("resize", this.pe)
          a = navigator.userAgent
          for (var f of lc)
            if (((b = f.eb), new RegExp(f.key).test(a))) {
              if (f.capture && f.za) {
                let h = f.za,
                  k = new RegExp(f.capture).exec(a)
                if (k && 0 < k.length && parseInt(k[k.length - 1]) >= h) continue
              }
              for (var g of b)
                switch (g) {
                  case "uniformBuffer":
                    this.ui = !0
                    break
                  case "vao":
                    this.vi = !0
                }
            }
        }
        if (
          (this.Na ||
            ((this.xh = (h) => {
              h.preventDefault()
              this.re = !0
              va("WebGL context lost.")
              m(this.Mm, this)
            }),
            (this.yh = () => {
              Rb(this, this.nh.bind(this))
            }),
            e.addEventListener("webglcontextlost", this.xh, !1),
            e.addEventListener("webglcontextrestored", this.yh, !1),
            (c.powerPreference = "high-performance")),
          (this.Mg = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
          this.Mg && (c.ij = !1),
          !c.Es)
        )
          try {
            ;(this.g = e.getContext("webgl2", c) || e.getContext("experimental-webgl2", c)) &&
              ((this.u = 2), (this.vc = "WEBGL2"), this.g.deleteQuery || ((this.u = 1), (this.vc = "WEBGL1")))
          } catch (h) {}
        if (!this.g) {
          if (!e) throw Error("The provided canvas is null or undefined.")
          try {
            this.g = e.getContext("webgl", c) || e.getContext("experimental-webgl", c)
          } catch (h) {
            throw Error("WebGL not supported")
          }
        }
        if (!this.g) throw Error("WebGL not supported")
      } else
        (this.g = a),
          (this.v = this.g.canvas),
          this.g.renderbufferStorageMultisample ? ((this.u = 2), (this.vc = "WEBGL2")) : (this.vc = "WEBGL1"),
          (e = this.g.getContextAttributes()) && (c.stencil = e.stencil)
      this.g.pixelStorei(this.g.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.g.NONE)
      void 0 !== c.on && (this.lh = c.on)
      e = (C() && window.devicePixelRatio) || 1
      f = c.Bm || e
      this.Ie = d ? 1 / Math.min(f, e) : 1
      this.resize()
      this.ph = !!c.stencil
      this.nh()
      this.pa = {
        nm: !1,
        Ju: 1 !== this.u,
        Fu: 1 !== this.u,
        Lu: 1 !== this.u,
        Su: !1,
        ds: 1 !== this.u,
        ng: !1,
        Vl: !1,
        Du: 1 !== this.u,
        js: 1 === this.u,
        Cu: 1 !== this.u,
        Ft: 1 !== this.u,
        Hu: 1 !== this.u,
        Ku: 1 !== this.u,
        Gu: 1 !== this.u,
        Mu: 1 !== this.u,
        Nu: !0,
        Ji: !0,
        pn: !0,
        Dt: !1,
        Et: !1,
        fn: !1,
        Pk: !1
      }
      for (d = 0; d < this.l.Zf; d++) this.ve[d] = new Mb()
      this.df = 1 < this.Ea ? new Cb() : new Bb()
      this.Qk = c
      c = `Babylon.js v${kc.Sc}`
      console.log(c + ` - ${this.description}`)
      this.v && this.v.setAttribute && this.v.setAttribute("data-engine", c)
    }
  }
  static get Sc() {
    return "5.0.0-alpha.63"
  }
  get description() {
    let a = this.name + this.Ea
    return this.l.cg && (a += " - Parallel shader compilation"), a
  }
  get name() {
    return "WebGL"
  }
  get version() {
    return this.u
  }
  hh() {
    return this.df
  }
  get fb() {
    return this.qf
  }
  set fb(a) {
    a !== this.qf && ((this.qf = a), (this.P.depthFunc = a ? 518 : 515))
  }
  get Lc() {
    return 1 < this.Ea && !this.ui
  }
  get xl() {
    return !(!this.l.Ci || !this.lh)
  }
  get $f() {
    return 2 > this.u || this.om
  }
  get Jf() {
    return this.Na
  }
  set Jf(a) {
    this.Na = a
  }
  get Qh() {
    return !1
  }
  get yi() {
    return this.kc || (this.kc = xb(new Uint8Array(4))), this.kc
  }
  get Ai() {
    return this.Xg || (this.Xg = yb(new Uint8Array(4))), this.Xg
  }
  get zi() {
    return this.Wg || (this.Wg = zb(new Uint8Array(4))), this.Wg
  }
  get xi() {
    this.jc || (new Uint8Array(4), (this.jc = Ab()))
    return this.jc
  }
  get Am() {
    return this.qh
  }
  get an() {
    return this.vc
  }
  get dc() {
    return !1
  }
  set dc(a) {}
  get Zd() {
    return this.Nh
  }
  set Zd(a) {
    this.Nh = a
  }
  dj() {
    this.dc = !1
  }
  Bd(a) {
    this.v = a
  }
  gh() {
    return null
  }
  We() {
    for (let a of this.kf) a.wa()
    for (let a of this.Bl) a.wa()
  }
  nh() {
    this.l = {
      vt: this.g.getParameter(this.g.MAX_TEXTURE_IMAGE_UNITS),
      Em: this.g.getParameter(this.g.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
      xt: this.g.getParameter(this.g.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      Ii: this.g.getParameter(this.g.MAX_TEXTURE_SIZE),
      ut: 1 < this.u ? this.g.getParameter(this.g.MAX_SAMPLES) : 1,
      rt: this.g.getParameter(this.g.MAX_CUBE_MAP_TEXTURE_SIZE),
      tt: this.g.getParameter(this.g.MAX_RENDERBUFFER_SIZE),
      Zf: this.g.getParameter(this.g.MAX_VERTEX_ATTRIBS),
      wt: this.g.getParameter(this.g.MAX_VARYING_VECTORS),
      st: this.g.getParameter(this.g.MAX_FRAGMENT_UNIFORM_VECTORS),
      yt: this.g.getParameter(this.g.MAX_VERTEX_UNIFORM_VECTORS),
      cg: this.g.getExtension("KHR_parallel_shader_compile") || void 0,
      yu: 1 < this.u || null !== this.g.getExtension("OES_standard_derivatives"),
      Yf: 1,
      ai:
        this.g.getExtension("WEBGL_compressed_texture_astc") ||
        this.g.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
      gi:
        this.g.getExtension("EXT_texture_compression_bptc") ||
        this.g.getExtension("WEBKIT_EXT_texture_compression_bptc"),
      tu:
        this.g.getExtension("WEBGL_compressed_texture_s3tc") ||
        this.g.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
      gg:
        this.g.getExtension("WEBGL_compressed_texture_s3tc_srgb") ||
        this.g.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
      Mt:
        this.g.getExtension("WEBGL_compressed_texture_pvrtc") ||
        this.g.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      Js:
        this.g.getExtension("WEBGL_compressed_texture_etc1") ||
        this.g.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
      Ks:
        this.g.getExtension("WEBGL_compressed_texture_etc") ||
        this.g.getExtension("WEBKIT_WEBGL_compressed_texture_etc") ||
        this.g.getExtension("WEBGL_compressed_texture_es3_0"),
      mg:
        this.g.getExtension("EXT_texture_filter_anisotropic") ||
        this.g.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
        this.g.getExtension("MOZ_EXT_texture_filter_anisotropic"),
      Qu: 1 < this.u || null !== this.g.getExtension("OES_element_index_uint"),
      Qs: 1 < this.u || null !== this.g.getExtension("EXT_frag_depth"),
      Ci: !1,
      Mc: this.g.getExtension("EXT_disjoint_timer_query_webgl2") || this.g.getExtension("EXT_disjoint_timer_query"),
      Iu: 1 < this.u,
      Ul: !1,
      wi: !1,
      Fm: 1,
      ii: !!(1 < this.u && this.g.getExtension("EXT_color_buffer_float")),
      fj: !!(1 < this.u || this.g.getExtension("OES_texture_float")),
      gj: !!(1 < this.u || this.g.getExtension("OES_texture_half_float")),
      kn: !1,
      gn: !1,
      hn: !1,
      jn: !1,
      rg: !1,
      Tf: !1,
      Ou: !!(1 < this.u || this.g.getExtension("EXT_shader_texture_lod")),
      fi: !1,
      Bt: this.g.getExtension("OVR_multiview2"),
      Gt: this.g.getExtension("OCULUS_multiview"),
      si: !1,
      os: 1 < this.u,
      ps: 1 < this.u,
      Eu: !1,
      kg: !1
    }
    var a = this.g.getExtension("WEBGL_debug_renderer_info")
    if (
      (null != a &&
        ((this.ih = this.g.getParameter(a.UNMASKED_RENDERER_WEBGL)),
        (this.jh = this.g.getParameter(a.UNMASKED_VENDOR_WEBGL))),
      this.jh || (this.jh = "Unknown vendor"),
      this.ih || (this.ih = "Unknown renderer"),
      36193 !== this.g.HALF_FLOAT_OES && (this.g.HALF_FLOAT_OES = 36193),
      34842 !== this.g.RGBA16F && (this.g.RGBA16F = 34842),
      34836 !== this.g.RGBA32F && (this.g.RGBA32F = 34836),
      35056 !== this.g.DEPTH24_STENCIL8 && (this.g.DEPTH24_STENCIL8 = 35056),
      this.l.Mc &&
        (1 === this.u && (this.g.getQuery = this.l.Mc.Zs.bind(this.l.Mc)),
        (this.l.Ul = 0 < this.g.getQuery(this.l.Mc.kr, this.l.Mc.Xp))),
      (this.l.Yf = this.l.mg ? this.g.getParameter(this.l.mg.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0),
      (this.l.gn = !(!this.l.fj || !this.g.getExtension("OES_texture_float_linear"))),
      (this.l.hn = !(!this.l.fj || (1 < this.u ? !this.l.ii : !ic(this, 1)))),
      (this.l.jn = !!(1 < this.u || (this.l.gj && this.g.getExtension("OES_texture_half_float_linear")))),
      this.l.ai && (this.g.rj = this.l.ai.rj),
      this.l.gi && (this.g.sj = this.l.gi.sj),
      this.l.gg && ((this.g.tj = this.l.gg.tj), (this.g.uj = this.l.gg.uj)),
      1 < this.u && 5131 !== this.g.HALF_FLOAT_OES && (this.g.HALF_FLOAT_OES = 5131),
      (this.l.kn = this.l.gj && (1 < this.u ? this.l.ii : ic(this, 2))),
      1 < this.u)
    )
      (this.l.wi = !0), (this.l.Fm = this.g.getParameter(this.g.MAX_SAMPLES))
    else if (((a = this.g.getExtension("WEBGL_draw_buffers")), null !== a)) {
      this.l.wi = !0
      this.g.drawBuffers = a.drawBuffersWEBGL.bind(a)
      this.g.DRAW_FRAMEBUFFER = this.g.FRAMEBUFFER
      for (var b = 0; 16 > b; b++) this.g["COLOR_ATTACHMENT" + b + "_WEBGL"] = a["COLOR_ATTACHMENT" + b + "_WEBGL"]
    }
    1 < this.u
      ? (this.l.si = !0)
      : ((a = this.g.getExtension("WEBGL_depth_texture")),
        null != a && ((this.l.si = !0), (this.g.UNSIGNED_INT_24_8 = a.ur)))
    this.vi
      ? (this.l.rg = !1)
      : 1 < this.u
      ? (this.l.rg = !0)
      : ((a = this.g.getExtension("OES_vertex_array_object")),
        null != a &&
          ((this.l.rg = !0),
          (this.g.createVertexArray = a.createVertexArrayOES.bind(a)),
          (this.g.bindVertexArray = a.bindVertexArrayOES.bind(a)),
          (this.g.deleteVertexArray = a.deleteVertexArrayOES.bind(a))))
    1 < this.u
      ? (this.l.Tf = !0)
      : ((a = this.g.getExtension("ANGLE_instanced_arrays")),
        null != a
          ? ((this.l.Tf = !0),
            (this.g.drawArraysInstanced = a.drawArraysInstancedANGLE.bind(a)),
            (this.g.drawElementsInstanced = a.drawElementsInstancedANGLE.bind(a)),
            (this.g.vertexAttribDivisor = a.vertexAttribDivisorANGLE.bind(a)))
          : (this.l.Tf = !1))
    this.g.getShaderPrecisionFormat &&
      ((a = this.g.getShaderPrecisionFormat(this.g.VERTEX_SHADER, this.g.HIGH_FLOAT)),
      (b = this.g.getShaderPrecisionFormat(this.g.FRAGMENT_SHADER, this.g.HIGH_FLOAT)),
      a && b && (this.l.Ci = 0 !== a.precision && 0 !== b.precision))
    1 < this.u
      ? (this.l.fi = !0)
      : ((a = this.g.getExtension("EXT_blend_minmax")),
        null != a && ((this.l.fi = !0), (this.g.MAX = a.zp), (this.g.MIN = a.Ap)))
    1 < this.u
      ? (this.l.kg = !0)
      : ((a = this.g.getExtension("EXT_sRGB")),
        null != a && ((this.l.kg = !0), (this.g.SRGB = a.Oq), (this.g.SRGB8 = a.Ck), (this.g.SRGB8_ALPHA8 = a.Ck)))
    this.P.Cc = !0
    this.P.depthFunc = this.g.LEQUAL
    this.P.depthMask = !0
    this.Ne = this.l.Em
    for (a = 0; a < this.Ne; a++) this.kl.push(a)
  }
  get Ea() {
    return this.u
  }
  get zm() {
    return this.ph
  }
  Qd() {
    return this.v
  }
  Rf() {
    return this.C ? this.C.width : this.Fe ? this.Fe.Ts : this.g.drawingBufferWidth
  }
  Fc() {
    return this.C ? this.C.height : this.Fe ? this.Fe.Ss : this.g.drawingBufferHeight
  }
  clear(a, b, c, d = !1) {
    var e = this.hg.ce
    this.hg.ce = !0
    this.Yh()
    this.hg.ce = e
    e = 0
    b && a && (this.g.clearColor(a.r, a.R, a.b, void 0 !== a.a ? a.a : 1), (e |= this.g.COLOR_BUFFER_BIT))
    c &&
      (this.fb ? ((this.P.depthFunc = this.g.GEQUAL), this.g.clearDepth(0)) : this.g.clearDepth(1),
      (e |= this.g.DEPTH_BUFFER_BIT))
    d && (this.g.clearStencil(0), (e |= this.g.STENCIL_BUFFER_BIT))
    this.g.clear(e)
  }
  Gd(a, b, c, d) {
    ;(a === this.N.x && b === this.N.y && c === this.N.z && d === this.N.w) ||
      ((this.N.x = a), (this.N.y = b), (this.N.z = c), (this.N.w = d), this.g.viewport(a, b, c, d))
  }
  resize(a = !1) {
    let b, c
    C()
      ? ((b = this.v ? this.v.clientWidth || this.v.width : window.innerWidth),
        (c = this.v ? this.v.clientHeight || this.v.height : window.innerHeight))
      : ((b = this.v ? this.v.width : 100), (c = this.v ? this.v.height : 100))
    this.Kc(b / this.Ie, c / this.Ie, a)
  }
  Kc(a, b, c = !1) {
    return (
      !!this.v &&
      ((a |= 0),
      (b |= 0),
      !(!c && this.v.width === a && this.v.height === b) && ((this.v.width = a), (this.v.height = b), !0))
    )
  }
  bindFramebuffer(a, b = 0, c, d, e, f = 0, g = 0) {
    var h, k, l, p, n
    this.C && this.ae(this.C)
    this.C = a
    this.ne(a.ke ? a.ke : a.cl)
    let r = this.g
    a.Gc
      ? r.framebufferTextureLayer(
          r.FRAMEBUFFER,
          r.COLOR_ATTACHMENT0,
          null === (h = a.V.I) || void 0 === h ? void 0 : h.O,
          f,
          g
        )
      : a.X &&
        r.framebufferTexture2D(
          r.FRAMEBUFFER,
          r.COLOR_ATTACHMENT0,
          r.TEXTURE_CUBE_MAP_POSITIVE_X + b,
          null === (k = a.V.I) || void 0 === k ? void 0 : k.O,
          f
        )
    if ((h = a.Ae))
      (k = a.Yk ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT),
        a.Gc
          ? r.framebufferTextureLayer(r.FRAMEBUFFER, k, null === (l = h.I) || void 0 === l ? void 0 : l.O, f, g)
          : a.X
          ? r.framebufferTexture2D(
              r.FRAMEBUFFER,
              k,
              r.TEXTURE_CUBE_MAP_POSITIVE_X + b,
              null === (p = h.I) || void 0 === p ? void 0 : p.O,
              f
            )
          : r.framebufferTexture2D(r.FRAMEBUFFER, k, r.TEXTURE_2D, null === (n = h.I) || void 0 === n ? void 0 : n.O, f)
    this.dd && !e
      ? Tb(this, this.dd, c, d)
      : (c || ((c = a.width), f && (c /= Math.pow(2, f))),
        d || ((d = a.height), f && (d /= Math.pow(2, f))),
        this.Gd(0, 0, c, d))
    this.de()
  }
  ne(a) {
    this.Sg !== a && (this.g.bindFramebuffer(this.g.FRAMEBUFFER, a), (this.Sg = a))
  }
  Pf(a) {
    this.H(this.g.TEXTURE_2D, a, !0)
    this.g.generateMipmap(this.g.TEXTURE_2D)
    this.H(this.g.TEXTURE_2D, null)
  }
  ae(a) {
    var b
    this.C = null
    var c = this.g
    if (a.ke) {
      if (a.ym) {
        this.Ru(a, !1, void 0)
        return
      }
      c.bindFramebuffer(c.READ_FRAMEBUFFER, a.ke)
      c.bindFramebuffer(c.DRAW_FRAMEBUFFER, a.cl)
      c.blitFramebuffer(0, 0, a.width, a.height, 0, 0, a.width, a.height, c.COLOR_BUFFER_BIT, c.NEAREST)
    }
    null === (b = a.V) || void 0 === b || !b.ta || a.X || this.Pf(a.V)
    this.ne(null)
  }
  Lf() {
    this.g.flush()
  }
  Nd(a) {
    return Wb(this, a, this.g.STATIC_DRAW)
  }
  li(a) {
    return Wb(this, a, this.g.DYNAMIC_DRAW)
  }
  Df(a, b, c) {
    a = a.W
    this.g.uniformBlockBinding(a, this.g.getUniformBlockIndex(a, b), c)
  }
  bindBuffer(a, b) {
    ;(this.rf || this.Rg[b] !== a) && (this.g.bindBuffer(b, a ? a.O : null), (this.Rg[b] = a))
  }
  xd(a) {
    a.eg--
    var b
    if ((b = 0 === a.eg)) this.g.deleteBuffer(a.O), (b = !0)
    return b
  }
  Kh() {}
  Jh(a) {
    this.aa[a.qb] && (delete this.aa[a.qb], (a = a.D) && this.Ma(a))
  }
  Ma(a) {
    a && a.W && ((a.W.Kk = null), this.g.deleteProgram(a.W))
  }
  oi(a, b, c, d, e = null) {
    d = d || this.g
    b = Yb(this, b, "vertex")
    c = Yb(this, c, "fragment")
    return this.se(a, b, c, d, e)
  }
  Md(a, b, c, d, e, f = null) {
    e = e || this.g
    var g = 1 < this.u ? "#version 300 es\n#define WEBGL2 \n" : ""
    b = Yb(this, Nb(b, d, g), "vertex")
    c = Yb(this, Nb(c, d, g), "fragment")
    return this.se(a, b, c, e, f)
  }
  ni() {
    var a = new Ib()
    return (a.Va = this), this.l.cg && (a.Ic = !0), a
  }
  mi() {}
  ki() {}
  se(a, b, c, d) {
    var e = d.createProgram()
    if (((a.W = e), !e)) throw Error("Unable to create program")
    return (
      d.attachShader(e, b),
      d.attachShader(e, c),
      d.linkProgram(e),
      (a.context = d),
      (a.Oc = b),
      (a.Ec = c),
      a.Ic || Zb(this, a),
      e
    )
  }
  Te(a, b, c, d, e, f, g, h, k) {
    a.W = d ? this.oi(a, b, c, void 0, k) : this.Md(a, b, c, h, void 0, k)
    a.W.Kk = g
  }
  oh(a) {
    return !!this.g.getProgramParameter(a.W, this.l.cg.ko) && (Zb(this, a), !0)
  }
  Yg(a, b) {
    if (a.Ic) {
      var c = a.ja
      a.ja = c
        ? () => {
            c()
            b()
          }
        : b
    } else b()
  }
  Bi(a, b) {
    for (var c = [], d = 0; d < b.length; d++) c.push(this.g.getUniformLocation(a.W, b[d]))
    return c
  }
  Qf(a, b) {
    for (var c = [], d = 0; d < b.length; d++)
      try {
        c.push(this.g.getAttribLocation(a.W, b[d]))
      } catch (e) {
        c.push(-1)
      }
    return c
  }
  Yh() {
    if ((this.P.apply(this.g), this.Sa.apply(this.g), this.le.apply(this.g), this.gd)) {
      this.gd = !1
      let a = this.fd
      this.g.colorMask(a, a, a, a)
    }
  }
  $i(a) {
    a !== this.fd && ((this.gd = !0), (this.fd = a))
  }
  get hg() {
    return this.Sa
  }
  de(a) {
    if (!this.Vi || a) {
      this.lb = null
      this.N.x = 0
      this.N.y = 0
      this.N.z = 0
      this.N.w = 0
      Vb(this)
      if (a) {
        this.we = null
        for (var b in this.jb) this.jb.hasOwnProperty(b) && (this.jb[b] = null)
        this.xe = -1
        this.Sa.reset()
        this.P.reset()
        this.P.depthFunc = this.g.LEQUAL
        this.le.reset()
        this.gd = this.fd = !0
        this.nf = null
        this.g.pixelStorei(this.g.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.g.NONE)
        this.g.pixelStorei(this.g.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0)
        this.Qe = !0
        $b(this)
      }
      Ub(this, null)
      this.rf || Vb(this)
      this.bindBuffer(null, this.g.ELEMENT_ARRAY_BUFFER)
    }
  }
  fh(a, b) {
    var c = this.g,
      d = c.NEAREST,
      e = c.NEAREST
    switch (a) {
      case 11:
        d = c.LINEAR
        e = b ? c.LINEAR_MIPMAP_NEAREST : c.LINEAR
        break
      case 3:
        d = c.LINEAR
        e = b ? c.LINEAR_MIPMAP_LINEAR : c.LINEAR
        break
      case 8:
        d = c.NEAREST
        e = b ? c.NEAREST_MIPMAP_LINEAR : c.NEAREST
        break
      case 4:
        d = c.NEAREST
        e = b ? c.NEAREST_MIPMAP_NEAREST : c.NEAREST
        break
      case 5:
        d = c.NEAREST
        e = b ? c.LINEAR_MIPMAP_NEAREST : c.LINEAR
        break
      case 6:
        d = c.NEAREST
        e = b ? c.LINEAR_MIPMAP_LINEAR : c.LINEAR
        break
      case 7:
        d = c.NEAREST
        e = c.LINEAR
        break
      case 1:
        e = d = c.NEAREST
        break
      case 9:
        d = c.LINEAR
        e = b ? c.NEAREST_MIPMAP_NEAREST : c.NEAREST
        break
      case 10:
        d = c.LINEAR
        e = b ? c.NEAREST_MIPMAP_LINEAR : c.NEAREST
        break
      case 2:
        e = d = c.LINEAR
        break
      case 12:
        ;(d = c.LINEAR), (e = c.NEAREST)
    }
    return { min: e, Cm: d }
  }
  Qg() {
    let a = this.g.createTexture()
    if (!a) throw Error("Unable to create texture")
    return new Jb(a, this.g)
  }
  createTexture(a, b, c, d, e = 3, f = null, g = null, h = null, k = null, l = null, p = null, n, r, F, v) {
    return ac(
      this,
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      this.ol.bind(this),
      (q, u, y, w, K, t) => {
        let x = this.g
        var M = y.width === q && y.height === u
        let G = l ? cc(this, l, K.Ta) : ".jpg" !== w || K.Ta ? (K.Ta ? x.SRGB8_ALPHA8 : x.RGBA) : x.RGB
        w = l ? cc(this, l) : ".jpg" !== w || K.Ta ? x.RGBA : x.RGB
        if ((K.Ta && 1 === this.Ea && (w = G), M)) return x.texImage2D(x.TEXTURE_2D, 0, G, w, x.UNSIGNED_BYTE, y), !1
        M = this.l.Ii
        if (y.width > M || y.height > M || !this.Qh)
          return (
            Sb(this),
            !(!this.Ua || !this.Kd) &&
              ((this.Ua.width = q),
              (this.Ua.height = u),
              this.Kd.drawImage(y, 0, 0, y.width, y.height, 0, 0, q, u),
              x.texImage2D(x.TEXTURE_2D, 0, G, w, x.UNSIGNED_BYTE, this.Ua),
              (K.width = q),
              (K.height = u),
              !1)
          )
        let Y = new vb(this, E.Gk)
        this.H(x.TEXTURE_2D, Y, !0)
        x.texImage2D(x.TEXTURE_2D, 0, G, w, x.UNSIGNED_BYTE, y)
        this.Lh(Y, K, d, G, () => {
          this.wb(Y)
          this.H(x.TEXTURE_2D, K, !0)
          t()
        })
        return !0
      },
      h,
      k,
      l,
      p,
      n,
      r,
      v
    )
  }
  Lh() {}
  Uh(a) {
    this.nf !== a && (this.g.pixelStorei(this.g.UNPACK_FLIP_Y_WEBGL, a ? 1 : 0), this.jm && (this.nf = a))
  }
  ol(a, b, c, d, e, f, g, h, k = 3) {
    var l = this.l.Ii,
      p = Math.min(l, this.$f ? Pb(d.width, l) : d.width)
    l = Math.min(l, this.$f ? Pb(d.height, l) : d.height)
    var n = this.g
    n &&
      (a.I
        ? (this.H(n.TEXTURE_2D, a, !0),
          this.Uh(void 0 === e || !!e),
          (a.Cf = d.width),
          (a.Bf = d.height),
          (a.width = p),
          (a.height = l),
          (a.M = !0),
          h(p, l, d, b, a, () => {
            ec(this, a, c, f, g, k)
          }) || ec(this, a, c, f, g, k))
        : c && c.Ye(a))
  }
  wb(a) {
    var b,
      c = null === (b = a.I) || void 0 === b ? void 0 : b.O
    c && this.g.deleteTexture(c)
    for (b = 0; b < this.Ne; b++)
      (this.Z = b),
        this.H(this.g.TEXTURE_2D, null),
        this.H(this.g.TEXTURE_CUBE_MAP, null),
        1 < this.Ea && (this.H(this.g.TEXTURE_3D, null), this.H(this.g.TEXTURE_2D_ARRAY, null))
    b = this.mb.indexOf(a)
    ;-1 !== b && this.mb.splice(b, 1)
    a.rb && a.rb.B()
    a.tb && a.tb.B()
    a.sb && a.sb.B()
    a.nb && a.nb.B()
  }
  ei(a) {
    var b = a.D.W
    this.we !== b && (this.g.useProgram(b), (this.we = b))
    b = a.af
    for (var c = 0; c < b.length; c++) {
      var d = a.getUniform(b[c])
      d && (this.Zc[c] = d)
    }
    this.lb = null
  }
  H(a, b, c = !1, d = !1) {
    var e, f
    let g = b && -1 < b.ib
    if ((c && g && (this.Z = b.ib), this.jb[this.Z] !== b || d)) {
      if ((fc(this), b && b.Td)) throw (console.error(a, b), "_bindTextureDirectly called with a multiview texture!")
      this.g.bindTexture(
        a,
        null !== (f = null === (e = null == b ? void 0 : b.I) || void 0 === e ? void 0 : e.O) && void 0 !== f ? f : null
      )
      ;(this.jb[this.Z] = b) && (b.ib = this.Z)
    } else c && fc(this)
    g && !c && gc(this, b.ib, this.Z)
  }
  Wc(a, b) {
    void 0 !== a && (b && (b.ib = a), (this.Z = a), this.H(b ? dc(this, b) : this.g.TEXTURE_2D, b))
  }
  bb(a, b, c) {
    void 0 !== a && (b && (this.Zc[a] = b), this.cf(a, c))
  }
  cf(a, b, c = !1, d = !1) {
    if (b) {
      if (b.video) (this.Z = a), b.update()
      else if (4 === b.am) {
        b.$l()
        return
      }
      d = d ? b.cm : b.M() ? b.sm() : b.X ? this.xi : b.Hc ? this.Ai : b.Gc ? this.zi : this.yi
      !c && d && (d.ib = a)
      var e = !0
      this.jb[a] === d && (c || gc(this, d.ib, a), (e = !1))
      this.Z = a
      a = dc(this, d)
      if ((e && this.H(a, d, c), d && !d.Td))
        d.X && d.hc !== b.Eb && ((d.hc = b.Eb), (c = 3 !== b.Eb && 5 !== b.Eb ? 1 : 0), (b.Jb = c), (b.Kb = c)),
          d.Ka !== b.Jb &&
            ((d.Ka = b.Jb),
            (c = this.g.TEXTURE_WRAP_S),
            (e = hc(this, b.Jb)),
            d && this.H(a, d, !0, !0),
            this.g.texParameteri(a, c, e)),
          d.La !== b.Kb &&
            ((d.La = b.Kb),
            (c = this.g.TEXTURE_WRAP_T),
            (e = hc(this, b.Kb)),
            d && this.H(a, d, !0, !0),
            this.g.texParameteri(a, c, e)),
          d.Hc &&
            d.Ja !== b.Pc &&
            ((d.Ja = b.Pc),
            (c = this.g.TEXTURE_WRAP_R),
            (e = hc(this, b.Pc)),
            d && this.H(a, d, !0, !0),
            this.g.texParameteri(a, c, e)),
          this.bf(a, d, b.zf)
    } else
      null != this.jb[a] &&
        ((this.Z = a),
        this.H(this.g.TEXTURE_2D, null),
        this.H(this.g.TEXTURE_CUBE_MAP, null),
        1 < this.Ea && (this.H(this.g.TEXTURE_3D, null), this.H(this.g.TEXTURE_2D_ARRAY, null)))
  }
  bf(a, b, c) {
    var d = this.l.mg
    11 !== b.ua && 3 !== b.ua && 2 !== b.ua && (c = 1)
    if (d && b.na !== c) {
      d = d.TEXTURE_MAX_ANISOTROPY_EXT
      var e = Math.min(c, this.l.Yf)
      this.H(a, b, !0, !0)
      this.g.texParameterf(a, d, e)
      b.na = c
    }
  }
  Yi() {
    for (var a in this.aa) this.Ma(this.aa[a].D)
    this.aa = {}
  }
  B() {
    var a
    this.Oi && this.Oi.clear()
    this.kc && (this.wb(this.kc), (this.kc = null))
    this.jc && (this.wb(this.jc), (this.jc = null))
    this.Ce && this.g.deleteFramebuffer(this.Ce)
    this.Yi()
    null === (a = this.Zt) || void 0 === a || a.call(this)
    $b(this)
    this.Zc = []
    C() &&
      this.v &&
      (this.Na ||
        (this.v.removeEventListener("webglcontextlost", this.xh),
        this.v.removeEventListener("webglcontextrestored", this.yh)),
      window.removeEventListener("resize", this.pe))
    this.Kd = this.Ua = null
    this.ve = []
    this.we = this.v = null
    qb = {}
    for (let b of this.Vc) b.abort()
    m(this.Si, this)
    this.Si.clear()
  }
  getError() {
    return this.g.getError()
  }
  eh(a) {
    if (1 === this.u) return this.g.RGBA
    switch (a) {
      case 3:
        return this.g.RGBA8_SNORM
      case 4:
        return this.g.RGBA16I
      case 5:
        return this.g.RGBA16UI
      case 6:
        return this.g.RGBA32I
      case 7:
        return this.g.RGBA32UI
      case 1:
        return this.g.RGBA32F
      case 2:
        return this.g.RGBA16F
      case 10:
        return this.g.RGB565
      case 13:
        return this.g.R11F_G11F_B10F
      case 14:
        return this.g.RGB9_E5
      case 8:
        return this.g.RGBA4
      case 9:
        return this.g.RGB5_A1
      case 11:
        return this.g.RGB10_A2
    }
    return this.g.RGBA8
  }
  readPixels(a, b, c, d, e = !0, f = !0) {
    let g = e ? this.g.RGBA : this.g.RGB
    e = new Uint8Array(d * c * (e ? 4 : 3))
    return f && this.Lf(), this.g.readPixels(a, b, c, d, g, this.g.UNSIGNED_BYTE, e), Promise.resolve(e)
  }
}
var lc, bc
lc = [
  { key: "Chrome/63.0", capture: "63\\.0\\.3239\\.(\\d+)", za: 108, eb: ["uniformBuffer"] },
  { key: "Firefox/58", capture: null, za: null, eb: ["uniformBuffer"] },
  { key: "Firefox/59", capture: null, za: null, eb: ["uniformBuffer"] },
  { key: "Chrome/72.+?Mobile", capture: null, za: null, eb: ["vao"] },
  { key: "Chrome/73.+?Mobile", capture: null, za: null, eb: ["vao"] },
  { key: "Chrome/74.+?Mobile", capture: null, za: null, eb: ["vao"] },
  { key: "Mac OS.+Chrome/71", capture: null, za: null, eb: ["vao"] },
  { key: "Mac OS.+Chrome/72", capture: null, za: null, eb: ["vao"] }
]
bc = []
function mc(a) {
  C() && window.setImmediate ? window.setImmediate(a) : setTimeout(a, 1)
}
let nc,
  oc = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i)
class pc extends Ra {
  constructor(a, b) {
    super(a)
    this.name = "LoadFileError"
    Sa(this, pc.prototype)
    b instanceof Ga ? (this.request = b) : (this.file = b)
  }
}
class qc extends Ra {
  constructor(a, b) {
    super(a)
    this.request = b
    this.name = "RequestFileError"
    Sa(this, qc.prototype)
  }
}
class rc extends Ra {
  constructor(a, b) {
    super(a)
    this.file = b
    this.name = "ReadFileError"
    Sa(this, rc.prototype)
  }
}
let J = {
    va: (function (a = 3, b = 500) {
      return (c, d, e) => (0 !== d.status || e >= a || -1 !== c.indexOf("file:") ? -1 : Math.pow(2, e) * b)
    })(),
    ka: "",
    Y: "anonymous",
    la: (a) => a
  },
  sc = (a, b) => {
    ;(a && 0 === a.indexOf("data:")) ||
      !J.Y ||
      ("string" == typeof J.Y || J.Y instanceof String ? (b.crossOrigin = J.Y) : (a = J.Y(a)) && (b.crossOrigin = a))
  },
  uc = (a, b, c, d, e = "", f) => {
    var g
    let h,
      k = !1
    a instanceof ArrayBuffer || ArrayBuffer.isView(a)
      ? "undefined" != typeof Blob
        ? ((h = URL.createObjectURL(new Blob([a], { type: e }))), (k = !0))
        : (h = `data:${e};base64,` + Ca(a))
      : a instanceof Blob
      ? ((h = URL.createObjectURL(a)), (k = !0))
      : ((h = a.replace(/#/gm, "%23")), (h = J.la(a)))
    const l = za.ie,
      p = (q) => {
        if (c) {
          const u = h || a.toString()
          c(
            `Error while trying to load image: ${
              0 === u.indexOf("http") || 128 >= u.length ? u : u.slice(0, 128) + "..."
            }`,
            q
          )
        }
      }
    if ("undefined" == typeof Image || (null !== (g = null == l ? void 0 : l.pa.nm) && void 0 !== g && g))
      return (
        tc(
          h,
          (q) => {
            l.createImageBitmap(new Blob([q], { type: e }), { premultiplyAlpha: "none", ...f })
              .then((u) => {
                b(u)
                k && URL.revokeObjectURL(h)
              })
              .catch((u) => {
                c && c("Error while trying to load image: " + a, u)
              })
          },
          void 0,
          d || void 0,
          !0,
          (q, u) => {
            p(u)
          }
        ),
        null
      )
    var n = new Image()
    sc(h, n)
    const r = () => {
        n.removeEventListener("load", r)
        n.removeEventListener("error", F)
        b(n)
        k && n.src && URL.revokeObjectURL(n.src)
      },
      F = (q) => {
        n.removeEventListener("load", r)
        n.removeEventListener("error", F)
        p(q)
        k && n.src && URL.revokeObjectURL(n.src)
      }
    n.addEventListener("load", r)
    n.addEventListener("error", F)
    g = () => {
      n.src = h
    }
    if ("data:" !== h.substr(0, 5) && d && d.Gs)
      d.open(() => {
        d && d.jt(h, n)
      }, g)
    else {
      if (-1 !== h.indexOf("file:") && ((g = decodeURIComponent(h.substring(5).toLowerCase())), Pa[g])) {
        try {
          try {
            var v = URL.createObjectURL(Pa[g])
          } catch (q) {
            v = URL.createObjectURL(Pa[g])
          }
          n.src = v
          k = !0
        } catch (q) {
          n.src = ""
        }
        return n
      }
      n.src = h
    }
    return n
  },
  vc = (a, b, c, d, e) => {
    const f = new FileReader(),
      g = { Za: new z(), abort: () => f.abort() }
    return (
      (f.onloadend = () => m(g.Za, g)),
      e &&
        (f.onerror = () => {
          e(new rc(`Unable to read ${a.name}`, a))
        }),
      (f.onload = (h) => {
        b(h.target.result)
      }),
      c && (f.onprogress = c),
      d ? f.readAsArrayBuffer(a) : f.readAsText(a),
      g
    )
  },
  tc = (a, b, c, d, e, f, g) => {
    if (a.name)
      return vc(
        a,
        b,
        c,
        e,
        f
          ? (k) => {
              f(void 0, k)
            }
          : void 0
      )
    if (-1 !== a.indexOf("file:")) {
      var h = decodeURIComponent(a.substring(5).toLowerCase())
      0 === h.indexOf("./") && (h = h.substring(2))
      if ((h = Pa[h])) return vc(h, b, c, e, f ? (k) => f(void 0, new pc(k.message, k.file)) : void 0)
    }
    if (oc.test(a)) {
      const k = { Za: new z(), abort: () => () => {} }
      try {
        b(e ? wc(a) : atob(a.split(",")[1]))
      } catch (l) {
        f ? f(void 0, l) : B(l.message || "Failed to parse the Data URL")
      }
      return (
        mc(() => {
          m(k.Za, k)
        }),
        k
      )
    }
    return xc(
      a,
      (k, l) => {
        b(k, l ? l.responseURL : void 0)
      },
      c,
      d,
      e,
      f
        ? (k) => {
            f(k.request, new pc(k.message, k.request))
          }
        : void 0,
      g
    )
  },
  xc = (a, b, c, d, e, f, g) => {
    a = a.replace(/#/gm, "%23")
    a = J.la(a)
    const h = J.ka + a
    let k = !1
    const l = { Za: new z(), abort: () => (k = !0) },
      p = () => {
        let n = new Ga(),
          r = null
        l.abort = () => {
          k = !0
          n.readyState !== (XMLHttpRequest.DONE || 4) && n.abort()
          null !== r && (clearTimeout(r), (r = null))
        }
        const F = (q) => {
            q = q.message || "Unknown error"
            f ? f(new qc(q, n)) : B(q)
          },
          v = (q) => {
            if ((n.open("GET", h), g))
              try {
                g(n)
              } catch (w) {
                return void F(w)
              }
            e && (n.responseType = "arraybuffer")
            c && n.addEventListener("progress", c)
            const u = () => {
              n.removeEventListener("loadend", u)
              m(l.Za, l)
              l.Za.clear()
            }
            n.addEventListener("loadend", u)
            const y = () => {
              if (!k && n.readyState === (XMLHttpRequest.DONE || 4))
                if (
                  (n.removeEventListener("readystatechange", y),
                  (200 <= n.status && 300 > n.status) || (0 === n.status && (!C() || yc())))
                )
                  try {
                    b(e ? n.response : n.responseText, n)
                  } catch (K) {
                    F(K)
                  }
                else {
                  var w = J.va
                  if (w && ((w = w(h, n, q)), -1 !== w))
                    return n.removeEventListener("loadend", u), (n = new Ga()), void (r = setTimeout(() => v(q + 1), w))
                  w = new qc("Error status: " + n.status + " " + n.statusText + " - Unable to load " + h, n)
                  f && f(w)
                }
            }
            n.addEventListener("readystatechange", y)
            n.send()
          }
        v(0)
      }
    if (d && d.Fs) {
      const n = (r) => {
        r && 400 < r.status ? f && f(r) : p()
      }
      d.open(() => {
        d &&
          d.it(
            J.ka + a,
            (r) => {
              k || b(r)
              m(l.Za, l)
            },
            c
              ? (r) => {
                  k || c(r)
                }
              : void 0,
            n,
            e
          )
      }, n)
    } else p()
    return l
  },
  yc = () => "undefined" != typeof location && "file:" === location.protocol,
  zc = (a) => oc.test(a)
function wc(a) {
  return Da(a.split(",")[1])
}
let Ac = (a) => atob(a.split(",")[1])
var Bc,
  Cc,
  Dc,
  Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc,
  L,
  Kc,
  Lc,
  Mc,
  Nc,
  Oc,
  Pc,
  Qc,
  Rc,
  Sc,
  Tc,
  Uc,
  Vc,
  Wc,
  Xc,
  Yc,
  Zc,
  $c,
  ad,
  bd,
  cd,
  dd,
  N,
  O,
  ed,
  fd,
  gd,
  hd
Ob = uc
Qb = tc
;((a, b, c, d, e, f, g, h, k, l) => {
  nc = { so: a, to: b, va: c.va, ka: c.ka, Y: c.Y, la: c.la, lp: d, np: e, wp: f, xp: g, Iq: h, Mq: k, Pq: l }
  Object.defineProperty(nc, "DefaultRetryStrategy", {
    get: function () {
      return c.va
    },
    set: function (p) {
      c.va = p
    }
  })
  Object.defineProperty(nc, "BaseUrl", {
    get: function () {
      return c.ka
    },
    set: function (p) {
      c.ka = p
    }
  })
  Object.defineProperty(nc, "PreprocessUrl", {
    get: function () {
      return c.la
    },
    set: function (p) {
      c.la = p
    }
  })
  Object.defineProperty(nc, "CorsBehavior", {
    get: function () {
      return c.Y
    },
    set: function (p) {
      c.Y = p
    }
  })
})(wc, Ac, J, zc, yc, tc, uc, vc, xc, sc)
var id = Bc || (Bc = {})
id[(id.Cg = 0)] = "Pending"
id[(id.he = 1)] = "Fulfilled"
id[(id.Eg = 2)] = "Rejected"
function jd(a, b) {
  try {
    a.Ab = Bc.he
    var c = null
    if ((a.ud && (c = a.ud(b)), null != c)) void 0 !== c.Ab ? ((c.tc = a), kd(c, a.oa), (b = c.yb)) : (b = c)
    for (var d of ((a.yb = b), a.oa)) jd(d, b)
    a.oa.length = 0
    delete a.ud
    delete a.vd
  } catch (e) {
    ld(a, e, !0)
  }
}
function ld(a, b, c = !1) {
  if (((a.Ab = Bc.Eg), (a.Hh = b), a.vd && !c))
    try {
      a.vd(b), (a.Xe = !0)
    } catch (e) {
      b = e
    }
  for (var d of a.oa) a.Xe ? jd(d, null) : ld(d, b)
  a.oa.length = 0
  delete a.ud
  delete a.vd
}
function kd(a, b) {
  if (
    (a.oa.push(...b.splice(0, b.length)),
    a.oa.forEach((d) => {
      d.tc = a
    }),
    a.Ab === Bc.he)
  )
    for (var c of a.oa) jd(c, a.yb)
  else if (a.Ab === Bc.Eg) for (c of a.oa) ld(c, a.Hh)
}
class md {
  constructor(a) {
    if (((this.Ab = Bc.Cg), (this.oa = []), (this.Xe = !1), a))
      try {
        a(
          (b) => {
            jd(this, b)
          },
          (b) => {
            ld(this, b)
          }
        )
      } catch (b) {
        ld(this, b)
      }
  }
  get yb() {
    return this.vl
  }
  set yb(a) {
    this.vl = a
    this.tc && void 0 === this.tc.yb && (this.tc.yb = a)
  }
  catch(a) {
    return this.then(void 0, a)
  }
  then(a, b) {
    let c = new md()
    return (
      (c.ud = a),
      (c.vd = b),
      this.oa.push(c),
      (c.tc = this),
      this.Ab !== Bc.Cg &&
        setTimeout(() => {
          this.Ab === Bc.he || this.Xe ? jd(c, this.yb) : ld(c, this.Hh)
        }),
      c
    )
  }
}
class nd {}
class od {
  static get ka() {
    return J.ka
  }
  static set ka(a) {
    J.ka = a
  }
  static get va() {
    return J.va
  }
  static set va(a) {
    J.va = a
  }
  static get Y() {
    return J.Y
  }
  static set Y(a) {
    J.Y = a
  }
  static get la() {
    return J.la
  }
  static set la(a) {
    J.la = a
  }
}
new Float32Array(1)
Ba =
  "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z"
;(function (a = !1) {
  if (a || "undefined" == typeof Promise) window.Promise = md
})()
function pd(a, b) {
  var c
  if (((c = 2 >= b ? b : 4), 0 != a.ya % c))
    for (b = a.ya, a.ya += c - (a.ya % c), c = a.ya - b, b = 0; b < c; b++) a.da.push(0)
}
function qd(a, b, c, d = 0) {
  if (!a.Rb && void 0 === a.Th[b]) {
    if (0 < d) {
      if (c instanceof Array) throw "addUniform should not be use with Array in UBO: " + b
      c = (pd(a, 4), (a.Fl[b] = { Bu: c, es: d }), 16 == c) ? c * d : c * d + (4 - c) * d
      d = []
      for (var e = 0; e < c; e++) d.push(0)
    } else {
      if (c instanceof Array) c = (d = c).length
      else for (d = [], e = 0; e < c; e++) d.push(0)
      pd(a, c)
    }
    a.Gl[b] = c
    a.Th[b] = a.ya
    a.ya += c
    for (e = 0; e < c; e++) a.da.push(d[e])
    a.Qb = !0
  }
}
class rd {
  constructor(a, b, c, d) {
    this.o = a
    this.Rb = !a.Lc
    this.Vg = c
    this.vb = null != d ? d : "no-name"
    this.da = b || []
    this.Th = {}
    this.Gl = {}
    this.Fl = {}
    this.ya = 0
    this.Qb = !1
    this.o.pa.ng && ((this.ma = []), (this.$c = -1))
    this.Rb || this.o.kf.push(this)
  }
  get isSync() {
    return !this.Qb
  }
  getData() {
    return this.Ia
  }
  create() {
    this.Rb || this.A || (pd(this, 4), (this.Ia = new Float32Array(this.da)), this.wa(), (this.Qb = !0))
  }
  wa() {
    !this.Rb &&
      this.Ia &&
      (this.Vg ? (this.A = this.o.us(this.Ia)) : (this.A = this.o.ys(this.Ia)),
      this.o.pa.ng && (this.ma.push([this.A, this.o.pa.Vl ? this.Ia.slice() : void 0]), (this.$c = this.ma.length - 1)))
  }
  get name() {
    return this.vb
  }
  update() {
    if ((this.Ef(), this.A)) {
      if (this.Vg || this.Qb) {
        if (this.ma && 1 < this.ma.length && this.ma[this.$c][1]) {
          a: {
            var a = this.Ia
            for (var b = 0; b < a.length; ++b)
              if (a[b] !== this.ma[this.$c][1][b]) {
                a = !1
                break a
              }
            a = !0
          }
          if (a) return (this.Qb = !1), void 0
          a = this.Ia
          b = this.ma[this.$c][1]
          for (let c = 0; c < a.length; ++c) b[c] = a[c]
        }
        this.o.Xu(this.A, this.Ia)
        this.o.pa.Pk && (sd[this.vb] || (sd[this.vb] = 0), sd[this.vb]++)
        this.Qb = !1
      }
    } else this.create()
  }
  bb(a, b) {
    this.lb.bb(a, b)
  }
  Ef() {
    !this.Rb && this.A && this.lb && this.lb.Ef(this.A, this.Tr)
  }
  B() {
    if (!this.Rb) {
      var a = this.o.kf,
        b = a.indexOf(this)
      if ((-1 !== b && ((a[b] = a[a.length - 1]), a.pop()), this.o.pa.ng && this.ma))
        for (a = 0; a < this.ma.length; ++a) this.o.xd(this.ma[a][0])
      else this.A && this.o.xd(this.A) && (this.A = null)
    }
  }
}
var sd, td
sd = {}
td = new Float32Array(256)
new Uint32Array(td.buffer)
class ud {
  constructor(a, b, c, d = 0, e = !1, f = !1, g = !1, h) {
    a.tm ? (this.o = a.tm().o) : (this.o = a)
    this.pf = c
    this.Je = f
    this.Zk = h || 1
    b instanceof Db ? ((this.da = null), (this.A = b)) : ((this.da = b), (this.A = null))
    this.Db = g ? d : d * Float32Array.BYTES_PER_ELEMENT
    e || this.create()
  }
  Nd(a) {
    return new vd(
      this.o,
      this,
      a,
      this.pf,
      !0,
      this.Db,
      this.Je,
      NaN * Float32Array.BYTES_PER_ELEMENT,
      void 0,
      void 0,
      void 0,
      !0,
      this.Zk || void 0
    )
  }
  getData() {
    return this.da
  }
  create(a = null) {
    ;(!a && this.A) ||
      ((a = a || this.da) &&
        (this.A
          ? this.pf && (this.o.Vu(this.A, a), (this.da = a))
          : this.pf
          ? ((this.A = this.o.li(a)), (this.da = a))
          : (this.A = this.o.Nd(a))))
  }
  wa() {
    this.A = null
    this.create(this.da)
  }
  update(a) {
    this.create(a)
  }
  B() {
    this.A && this.o.xd(this.A) && ((this.A = null), (this.da = null))
  }
}
function wd(a) {
  switch (a) {
    case xd:
    case yd:
      return 1
    case zd:
    case Ad:
      return 2
    case Bd:
    case Cd:
    case Dd:
      return 4
    default:
      throw Error(`Invalid type '${a}'`)
  }
}
function Ed(a) {
  switch (a) {
    case Fd:
    case Gd:
    case Hd:
    case Id:
    case Jd:
    case Kd:
      return 2
    case Ld:
    case Md:
      return 3
    case Nd:
    case Od:
    case Pd:
    case Qd:
    case Rd:
    case Sd:
      return 4
    default:
      throw Error("Invalid kind '" + a + "'")
  }
}
function Td(a, b, c, d) {
  switch (b) {
    case xd:
      return (a = a.getInt8(c)), d && (a = Math.max(a / 127, -1)), a
    case yd:
      return (a = a.getUint8(c)), d && (a /= 255), a
    case zd:
      return (a = a.getInt16(c, !0)), d && (a = Math.max(a / 32767, -1)), a
    case Ad:
      return (a = a.getUint16(c, !0)), d && (a /= 65535), a
    case Bd:
      return a.getInt32(c, !0)
    case Cd:
      return a.getUint32(c, !0)
    case Dd:
      return a.getFloat32(c, !0)
    default:
      throw Error(`Invalid component type ${b}`)
  }
}
class vd {
  constructor(a, b, c, d, e, f, g, h, k, l, p = !1, n = !1, r, F = !1) {
    ;(b instanceof ud ? ((this.A = b), (this.Dh = F)) : ((this.A = new ud(a, b, d, f, e, g, n)), (this.Dh = !0)),
    (this.$ = Ud++),
    null == l)
      ? ((a = this.getData()),
        (this.type = Dd),
        a instanceof Int8Array
          ? (this.type = xd)
          : a instanceof Uint8Array
          ? (this.type = yd)
          : a instanceof Int16Array
          ? (this.type = zd)
          : a instanceof Uint16Array
          ? (this.type = Ad)
          : a instanceof Int32Array
          ? (this.type = Bd)
          : a instanceof Uint32Array && (this.type = Cd))
      : (this.type = l)
    a = wd(this.type)
    n
      ? ((this.Tb = k || (f ? f / a : Ed(c))), (this.Db = f || this.A.Db || this.Tb * a), (this.byteOffset = h || 0))
      : ((this.Tb = k || f || Ed(c)),
        (this.Db = f ? f * a : this.A.Db || this.Tb * a),
        (this.byteOffset = (h || 0) * a))
    this.Ki = p
    this.Je = void 0 !== g && g
    this.Rd =
      ((this.type - 5120) << 0) + ((this.Ki ? 1 : 0) << 3) + (this.Tb << 4) + ((this.Je ? 1 : 0) << 6) + (this.Db << 12)
  }
  wa() {
    this.A && this.A.wa()
  }
  getData() {
    return this.A.getData()
  }
  create(a) {
    this.A.create(a)
  }
  update(a) {
    this.A.update(a)
  }
  B() {
    this.Dh && this.A.B()
  }
  forEach(a, b) {
    var c = this.A.getData(),
      d = this.byteOffset,
      e = this.Db,
      f = this.Tb,
      g = this.type,
      h = this.Ki
    if (c instanceof Array)
      for (d /= 4, e /= 4, g = 0; g < a; g += f) {
        for (h = 0; h < f; h++) b(c[d + h], g + h)
        d += e
      }
    else {
      c = c instanceof ArrayBuffer ? new DataView(c) : new DataView(c.buffer, c.byteOffset, c.byteLength)
      let k = wd(g)
      for (let l = 0; l < a; l += f) {
        let p = d
        for (let n = 0; n < f; n++) b(Td(c, g, p, h), l + n), (p += k)
        d += e
      }
    }
  }
}
var Ud, Dd, xd, yd, zd, Ad, Bd, Cd, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd
Ud = 0
xd = 5120
yd = 5121
zd = 5122
Ad = 5123
Bd = 5124
Cd = 5125
Dd = 5126
Md = "position"
Ld = "normal"
Sd = "tangent"
Fd = "uv"
Gd = "uv2"
Hd = "uv3"
Id = "uv4"
Jd = "uv5"
Kd = "uv6"
Nd = "color"
Od = "matricesIndices"
Qd = "matricesWeights"
Pd = "matricesIndicesExtra"
Rd = "matricesWeightsExtra"
class Vd {
  constructor() {
    this.Cl = this.Dl = this.ue = this.gl = this.hl = 0
  }
  get min() {
    return this.hl
  }
  get max() {
    return this.gl
  }
  get current() {
    return this.ue
  }
  get total() {
    return this.Cl
  }
  get count() {
    return this.Dl
  }
}
class Wd {
  constructor(a = 30) {
    this.Nb = !0
    this.Mh = new Xd(a)
  }
  get Vf() {
    return this.Mh.Vf()
  }
  enable() {
    this.Nb = !0
  }
  disable() {
    this.Nb = !1
  }
  get isEnabled() {
    return this.Nb
  }
  reset() {
    this.Mh.reset()
  }
}
function Yd(a, b) {
  a = a.Sb.length
  return ((b % a) + a) % a
}
class Xd {
  constructor(a) {
    this.Sb = Array(a)
    this.reset()
  }
  add(a) {
    this.Vf() || this.$e++
    this.Sb[this.uc] = a
    this.uc++
    this.uc %= this.Sb.length
  }
  history(a) {
    return a >= this.$e || a >= this.Sb.length ? 0 : this.Sb[Yd(this, Yd(this, this.uc - 1) - a)]
  }
  Vf() {
    return this.$e >= this.Sb.length
  }
  reset() {
    this.uc = this.$e = 0
  }
}
class Q extends kc {
  constructor(a, b, c, d = !1) {
    if (
      (super(a, b, c, d),
      (this.Ba = []),
      (this.vf = []),
      (this.Pm = new z()),
      (this.Ui = []),
      (this.bg = new z()),
      (this.Pi = new z()),
      (this.Qi = new z()),
      (this.Ri = new z()),
      (this.Lm = new z()),
      (this.Om = new z()),
      (this.Ni = new z()),
      (this.Mi = new z()),
      (this.$k = new Vd()),
      (this.ti = !1),
      (this.Eh = new Wd()),
      (this.jd = !0),
      Q.gb.push(this),
      a)
    ) {
      if (((this.pa.fn = !0), (c = this.Qk), a.getContext))
        if ((this.Bd(a, !!c.gm, c.Vb), C())) {
          let e = document
          this.Qa = () => {
            void 0 !== e.rm
              ? (this.Zb = e.rm)
              : void 0 !== e.mozFullScreen
              ? (this.Zb = e.mozFullScreen)
              : void 0 !== e.webkitIsFullScreen
              ? (this.Zb = e.webkitIsFullScreen)
              : void 0 !== e.Jm && (this.Zb = e.Jm)
            this.Zb &&
              this.Xr &&
              a &&
              ((a.requestPointerLock = a.requestPointerLock || a.At || a.zt || a.dv),
              a.requestPointerLock && a.requestPointerLock())
          }
          document.addEventListener("fullscreenchange", this.Qa, !1)
          document.addEventListener("mozfullscreenchange", this.Qa, !1)
          document.addEventListener("webkitfullscreenchange", this.Qa, !1)
          document.addEventListener("msfullscreenchange", this.Qa, !1)
          this.Ra = () => {}
          document.addEventListener("pointerlockchange", this.Ra, !1)
          document.addEventListener("mspointerlockchange", this.Ra, !1)
          document.addEventListener("mozpointerlockchange", this.Ra, !1)
          document.addEventListener("webkitpointerlockchange", this.Ra, !1)
          !Zd && c.Vb && Q.ee && (Zd = Q.ee(this.Qd(), this.Kg, this.Lg))
        }
      if (c.hs) throw Fa("WebVRCamera")
    }
  }
  static get Sc() {
    return kc.Sc
  }
  static get gb() {
    return Aa
  }
  static get ie() {
    return za.ie
  }
  createImageBitmap(a, b) {
    return createImageBitmap(a, b)
  }
  get Qh() {
    return !!$d
  }
  get ra() {
    return this.jd
  }
  set ra(a) {
    this.jd = !0
  }
  Bd(a, b, c) {
    if (
      (super.Bd(a, b, c),
      (this.vh = () => {
        m(this.Qi, this)
      }),
      (this.uh = () => {
        m(this.Pi, this)
      }),
      a.addEventListener("focus", this.vh),
      a.addEventListener("blur", this.uh),
      (this.th = () => {
        this.ti && this.Eh.disable()
      }),
      (this.zh = () => {
        this.ti && this.Eh.enable()
      }),
      (this.wh = (d) => {
        document.elementFromPoint(d.clientX, d.clientY) !== a && m(this.Ri, d)
      }),
      C())
    ) {
      let d = C()
        ? this.v && this.v.ownerDocument && this.v.ownerDocument.defaultView
          ? this.v.ownerDocument.defaultView
          : window
        : null
      d && (d.addEventListener("blur", this.th), d.addEventListener("focus", this.zh))
    }
    a.addEventListener("pointerout", this.wh)
    b ||
      (this.v &&
        this.v.setAttribute &&
        (this.v.setAttribute("touch-action", "none"),
        (this.v.style.touchAction = "none"),
        (this.v.style.msTouchAction = "none")))
    !Zd && c && Q.ee && (Zd = Q.ee(this.Qd(), this.Kg, this.Lg))
  }
  Kh() {
    var a = this.$k
    a.ue += 1
  }
  We() {
    for (var a of this.Ba) a.Um(), a.pl(), a.rl()
    for (a of this.vf) a.Um(), a.pl(), a.rl()
    super.We()
  }
  exitFullscreen() {
    if (this.Zb) {
      let a = document
      document.exitFullscreen
        ? document.exitFullscreen()
        : a.mozCancelFullScreen
        ? a.mozCancelFullScreen()
        : a.webkitCancelFullScreen
        ? a.webkitCancelFullScreen()
        : a.Im && a.Im()
    }
  }
  resize(a = !1) {
    super.resize(a)
  }
  Kc(a, b, c = !1) {
    if (!this.v || !super.Kc(a, b, c)) return !1
    if (this.Ba) {
      for (a = 0; a < this.Ba.length; a++) for (b = this.Ba[a], c = 0; c < b.Tl.length; c++) b.Tl[c].Vr = 0
      0 < this.bg.fa.length && m(this.bg, this)
    }
    return !0
  }
  Ma(a) {
    a && a.W && a.og && (this.deleteTransformFeedback(a.og), (a.og = null))
    super.Ma(a)
  }
  Md(a, b, c, d, e, f = null) {
    e = e || this.g
    m(this.Ni, this)
    a = super.Md(a, b, c, d, e, f)
    return m(this.Mi, this), a
  }
  se(a, b, c, d, e = null) {
    var f = d.createProgram()
    if (((a.W = f), !f)) throw Error("Unable to create program")
    if ((d.attachShader(f, b), d.attachShader(f, c), 1 < this.Ea && e)) {
      let g = this.createTransformFeedback()
      this.bindTransformFeedback(g)
      this.vu(f, e)
      a.og = g
    }
    return (
      d.linkProgram(f),
      1 < this.Ea && e && this.bindTransformFeedback(null),
      (a.context = d),
      (a.Oc = b),
      (a.Ec = c),
      a.Ic || Zb(this, a),
      f
    )
  }
  wb(a) {
    super.wb(a)
  }
  Lh(a, b, c, d, e) {
    this.g.texParameteri(this.g.TEXTURE_2D, this.g.TEXTURE_MAG_FILTER, this.g.LINEAR)
    this.g.texParameteri(this.g.TEXTURE_2D, this.g.TEXTURE_MIN_FILTER, this.g.LINEAR)
    this.g.texParameteri(this.g.TEXTURE_2D, this.g.TEXTURE_WRAP_S, this.g.CLAMP_TO_EDGE)
    this.g.texParameteri(this.g.TEXTURE_2D, this.g.TEXTURE_WRAP_T, this.g.CLAMP_TO_EDGE)
    let f = this.xs({ width: b.width, height: b.height }, { ta: !1, type: 0, ua: 2, Vs: !1, Ws: !1 })
    !this.xb && $d && (this.xb = $d(this))
    this.xb.Ms = !0
    kb(this.xb.Ys(), () => {
      this.xb.Ht = function (h) {
        h.Wc("textureSampler", a)
      }
      let g = c
      g || (g = this.Ba[this.Ba.length - 1])
      g.Kt.Ds([this.xb], f, !0)
      this.H(this.g.TEXTURE_2D, b, !0)
      this.g.copyTexImage2D(this.g.TEXTURE_2D, 0, d, 0, 0, b.width, b.height, 0)
      this.ae(f)
      f.B()
      e && e()
    })
  }
  B() {
    for (this.Pm.clear(); this.Ui.length; ) this.Ui[0].B()
    for (this.xb && this.xb.B(); this.Ba.length; ) this.Ba[0].B()
    for (; this.vf.length; ) this.vf[0].B()
    1 === Q.gb.length && Zd && (Zd.B(), (Zd = null))
    this.fm && this.fm.B()
    C() &&
      (window.removeEventListener("blur", this.th),
      window.removeEventListener("focus", this.zh),
      this.v &&
        (this.v.removeEventListener("focus", this.vh),
        this.v.removeEventListener("blur", this.uh),
        this.v.removeEventListener("pointerout", this.wh)),
      Ka() &&
        (document.removeEventListener("fullscreenchange", this.Qa),
        document.removeEventListener("mozfullscreenchange", this.Qa),
        document.removeEventListener("webkitfullscreenchange", this.Qa),
        document.removeEventListener("msfullscreenchange", this.Qa),
        document.removeEventListener("pointerlockchange", this.Ra),
        document.removeEventListener("mspointerlockchange", this.Ra),
        document.removeEventListener("mozpointerlockchange", this.Ra),
        document.removeEventListener("webkitpointerlockchange", this.Ra)))
    super.B()
    var a = Q.gb.indexOf(this)
    0 <= a && Q.gb.splice(a, 1)
    this.bg.clear()
    this.Pi.clear()
    this.Qi.clear()
    this.Ri.clear()
    this.Lm.clear()
    this.Om.clear()
  }
}
var Zd, $d
$d = null
class ae {
  constructor(a) {
    this.debug = !1
    this.yl = a
  }
  get code() {
    return this.yl
  }
}
;(Cc || (Cc = {})).SRGB = "srgb"
var be = Cc || (Cc = {})
be.yp = "low-power"
be.bp = "high-performance"
var ce = Dc || (Dc = {})
ce.xo = "depth-clip-control"
ce.Aj = "depth24unorm-stencil8"
ce.Bj = "depth32float-stencil8"
ce.nr = "texture-compression-bc"
ce.pr = "texture-compression-etc2"
ce.mr = "texture-compression-astc"
ce.rr = "timestamp-query"
ce.hp = "indirect-first-instance"
var R = Ec || (Ec = {})
R[(R.Bp = 1)] = "MapRead"
R[(R.Cp = 2)] = "MapWrite"
R[(R.xg = 4)] = "CopySrc"
R[(R.wg = 8)] = "CopyDst"
R[(R.fp = 16)] = "Index"
R[(R.fc = 32)] = "Vertex"
R[(R.Rc = 64)] = "Uniform"
R[(R.Storage = 128)] = "Storage"
R[(R.gp = 256)] = "Indirect"
R[(R.Yp = 512)] = "QueryResolve"
var de = Fc || (Fc = {})
de[(de.Hq = 1)] = "Read"
de[(de.Nr = 2)] = "Write"
var ee = Gc || (Gc = {})
ee.Fj = "1d"
ee.Lb = "2d"
ee.Gj = "3d"
var S = Hc || (Hc = {})
S[(S.xg = 1)] = "CopySrc"
S[(S.wg = 2)] = "CopyDst"
S[(S.lr = 4)] = "TextureBinding"
S[(S.ir = 8)] = "StorageBinding"
S[(S.je = 16)] = "RenderAttachment"
var fe = Ic || (Ic = {})
fe.Fj = "1d"
fe.Lb = "2d"
fe.Fo = "2d-array"
fe.ge = "cube"
fe.qo = "cube-array"
fe.Gj = "3d"
var ge = Jc || (Jc = {})
ge.Qc = "all"
ge.hr = "stencil-only"
ge.yo = "depth-only"
var T = L || (L = {})
T.iq = "r8unorm"
T.gq = "r8snorm"
T.hq = "r8uint"
T.fq = "r8sint"
T.aq = "r16uint"
T.$p = "r16sint"
T.Zp = "r16float"
T.tq = "rg8unorm"
T.rq = "rg8snorm"
T.sq = "rg8uint"
T.qq = "rg8sint"
T.eq = "r32uint"
T.cq = "r32sint"
T.bq = "r32float"
T.mq = "rg16uint"
T.lq = "rg16sint"
T.kq = "rg16float"
T.Dg = "rgba8unorm"
T.Fq = "rgba8unorm-srgb"
T.Dq = "rgba8snorm"
T.Eq = "rgba8uint"
T.Cq = "rgba8sint"
T.fe = "bgra8unorm"
T.ho = "bgra8unorm-srgb"
T.vq = "rgb9e5ufloat"
T.uq = "rgb10a2unorm"
T.jq = "rg11b10ufloat"
T.pq = "rg32uint"
T.oq = "rg32sint"
T.nq = "rg32float"
T.yq = "rgba16uint"
T.xq = "rgba16sint"
T.wq = "rgba16float"
T.Bq = "rgba32uint"
T.Aq = "rgba32sint"
T.zq = "rgba32float"
T.gr = "stencil8"
T.zj = "depth16unorm"
T.wo = "depth24plus"
T.yg = "depth24plus-stencil8"
T.zg = "depth32float"
T.kj = "bc1-rgba-unorm"
T.Yn = "bc1-rgba-unorm-srgb"
T.lj = "bc2-rgba-unorm"
T.Zn = "bc2-rgba-unorm-srgb"
T.mj = "bc3-rgba-unorm"
T.$n = "bc3-rgba-unorm-srgb"
T.bo = "bc4-r-unorm"
T.ao = "bc4-r-snorm"
T.eo = "bc5-rg-unorm"
T.co = "bc5-rg-snorm"
T.oj = "bc6h-rgb-ufloat"
T.nj = "bc6h-rgb-float"
T.pj = "bc7-rgba-unorm"
T.fo = "bc7-rgba-unorm-srgb"
T.Hj = "etc2-rgb8unorm"
T.Mo = "etc2-rgb8unorm-srgb"
T.Ko = "etc2-rgb8a1unorm"
T.Lo = "etc2-rgb8a1unorm-srgb"
T.No = "etc2-rgba8unorm"
T.Oo = "etc2-rgba8unorm-srgb"
T.Ho = "eac-r11unorm"
T.Go = "eac-r11snorm"
T.Jo = "eac-rg11unorm"
T.Io = "eac-rg11snorm"
T.jj = "astc-4x4-unorm"
T.Gn = "astc-4x4-unorm-srgb"
T.Hn = "astc-5x4-unorm"
T.In = "astc-5x4-unorm-srgb"
T.Jn = "astc-5x5-unorm"
T.Kn = "astc-5x5-unorm-srgb"
T.Ln = "astc-6x5-unorm"
T.Mn = "astc-6x5-unorm-srgb"
T.Nn = "astc-6x6-unorm"
T.On = "astc-6x6-unorm-srgb"
T.Pn = "astc-8x5-unorm"
T.Qn = "astc-8x5-unorm-srgb"
T.Rn = "astc-8x6-unorm"
T.Sn = "astc-8x6-unorm-srgb"
T.Tn = "astc-8x8-unorm"
T.Un = "astc-8x8-unorm-srgb"
T.wn = "astc-10x5-unorm"
T.xn = "astc-10x5-unorm-srgb"
T.yn = "astc-10x6-unorm"
T.zn = "astc-10x6-unorm-srgb"
T.An = "astc-10x8-unorm"
T.Bn = "astc-10x8-unorm-srgb"
T.un = "astc-10x10-unorm"
T.vn = "astc-10x10-unorm-srgb"
T.Cn = "astc-12x10-unorm"
T.Dn = "astc-12x10-unorm-srgb"
T.En = "astc-12x12-unorm"
T.Fn = "astc-12x12-unorm-srgb"
T.Aj = "depth24unorm-stencil8"
T.Bj = "depth32float-stencil8"
var he = Kc || (Kc = {})
he.lo = "clamp-to-edge"
he.Kq = "repeat"
he.Gp = "mirror-repeat"
var ie = Lc || (Lc = {})
ie.Ip = "nearest"
ie.vp = "linear"
var je = Mc || (Mc = {})
je.Jp = "never"
je.rp = "less"
je.Po = "equal"
je.sp = "less-equal"
je.Zo = "greater"
je.Mp = "not-equal"
je.$o = "greater-equal"
je.Xn = "always"
var ke = Nc || (Nc = {})
ke[(ke.fc = 1)] = "Vertex"
ke[(ke.Ag = 2)] = "Fragment"
ke[(ke.oo = 4)] = "Compute"
var le = Oc || (Oc = {})
le.Rc = "uniform"
le.Storage = "storage"
le.Ak = "read-only-storage"
var me = Pc || (Pc = {})
me.Jj = "filtering"
me.Kp = "non-filtering"
me.vj = "comparison"
var ne = Qc || (Qc = {})
ne.Qo = "float"
ne.Er = "unfilterable-float"
ne.yj = "depth"
ne.Rq = "sint"
ne.vr = "uint"
;(Rc || (Rc = {})).Or = "write-only"
var oe = Sc || (Sc = {})
oe.Error = "error"
oe.Mr = "warning"
oe.ip = "info"
var pe = Tc || (Tc = {})
pe.Wp = "point-list"
pe.tp = "line-list"
pe.up = "line-strip"
pe.sr = "triangle-list"
pe.tr = "triangle-strip"
var qe = Uc || (Uc = {})
qe.CCW = "ccw"
qe.CW = "cw"
var re = Vc || (Vc = {})
re.Lp = "none"
re.Xo = "front"
re.io = "back"
var U = Wc || (Wc = {})
U[(U.Jq = 1)] = "Red"
U[(U.ap = 2)] = "Green"
U[(U.jo = 4)] = "Blue"
U[(U.Wn = 8)] = "Alpha"
U[(U.Qc = 15)] = "All"
var V = Xc || (Xc = {})
V.Jk = "zero"
V.Pp = "one"
V.dr = "src"
V.Tp = "one-minus-src"
V.er = "src-alpha"
V.Up = "one-minus-src-alpha"
V.Do = "dst"
V.Rp = "one-minus-dst"
V.Eo = "dst-alpha"
V.Sp = "one-minus-dst-alpha"
V.fr = "src-alpha-saturated"
V.po = "constant"
V.Qp = "one-minus-constant"
var se = Yc || (Yc = {})
se.Vn = "add"
se.jr = "subtract"
se.Nq = "reverse-subtract"
se.Ep = "min"
se.Dp = "max"
var te = Zc || (Zc = {})
te.qp = "keep"
te.Jk = "zero"
te.Lq = "replace"
te.jp = "invert"
te.cp = "increment-clamp"
te.uo = "decrement-clamp"
te.ep = "increment-wrap"
te.vo = "decrement-wrap"
var ue = $c || ($c = {})
ue.wr = "uint16"
ue.Ik = "uint32"
var W = ad || (ad = {})
W.Cr = "uint8x2"
W.Dr = "uint8x4"
W.Yq = "sint8x2"
W.Zq = "sint8x4"
W.Ir = "unorm8x2"
W.Jr = "unorm8x4"
W.br = "snorm8x2"
W.cr = "snorm8x4"
W.xr = "uint16x2"
W.yr = "uint16x4"
W.Sq = "sint16x2"
W.Tq = "sint16x4"
W.Gr = "unorm16x2"
W.Hr = "unorm16x4"
W.$q = "snorm16x2"
W.ar = "snorm16x4"
W.Ro = "float16x2"
W.So = "float16x4"
W.To = "float32"
W.Uo = "float32x2"
W.Vo = "float32x3"
W.Wo = "float32x4"
W.Ik = "uint32"
W.zr = "uint32x2"
W.Ar = "uint32x3"
W.Br = "uint32x4"
W.Uq = "sint32"
W.Vq = "sint32x2"
W.Wq = "sint32x3"
W.Xq = "sint32x4"
var ve = bd || (bd = {})
ve.fc = "vertex"
ve.Instance = "instance"
var we = cd || (cd = {})
we.qj = "beginning"
we.Ij = "end"
var xe = dd || (dd = {})
xe.qj = "beginning"
xe.Ij = "end"
;(N || (N = {})).hb = "load"
var ye = O || (O = {})
ye.Fa = "store"
ye.Co = "discard"
var ze = ed || (ed = {})
ze.Op = "occlusion"
ze.qr = "timestamp"
var Ae = fd || (fd = {})
Ae.vk = "opaque"
Ae.wk = "premultiplied"
;(gd || (gd = {})).Bo = "destroyed"
var Be = hd || (hd = {})
Be.Vp = "out-of-memory"
Be.Kr = "validation"
function Ce(a, b, c, d, e) {
  let { i: f, j: g } = c.h
  ;(a.s.T[f] || ((a.s.T[f] = []), (a.s.qa[f] = [])), a.s.qa[f][g]) ||
    ((c = a.s.T[f].push({ h: g, visibility: 0, buffer: { type: d } })), (a.s.qa[f][g] = { name: b, index: c - 1 }))
  g = a.s.qa[f][g].index
  a.s.T[f][g].visibility |= e ? Nc.fc : Nc.Ag
}
function De(a) {
  if (!a.s.Jc.length) return ""
  let b = a.s.Ac[Ee]
  return b || ((b = { h: Fe(a.s) }), (a.s.Ac[Ee] = b), Ce(a, Ee, b, Oc.Rc, !0), Ce(a, Ee, b, Oc.Rc, !1)), a.dh(Ee, b)
}
function Ge(a) {
  for (let b = 0; b < a.s.T.length; b++) {
    let c = a.s.T[b]
    if (void 0 !== c)
      for (let d = 0; d < c.length; d++) {
        let e = a.s.T[b][d],
          f = a.s.qa[b][e.h].name,
          g = a.s.qa[b][e.h].Ct
        e && (e.V || e.mm || e.en ? a.s.ln.push(g) : e.Xd ? a.s.Xm.push(f) : e.buffer && a.s.Sl.push(f))
      }
    else a.s.T[b] = []
  }
}
function He(a) {
  let b = a.s.Rl
  for (let c = 0; c < a.s.T.length; c++) {
    let d = a.s.T[c],
      e = []
    for (let f = 0; f < d.length; f++) {
      let g = a.s.T[c][f]
      g.Xd || g.V || g.en || g.mm
        ? e.push({ h: g.h, Vm: void 0 })
        : g.buffer && e.push({ h: g.h, Vm: { buffer: void 0, offset: 0, size: 0 } })
    }
    b[c] = e
  }
}
function Ie(a, b, c) {
  if (b) {
    let d = a.indexOf("fn main")
    if (0 <= d) {
      for (; d++ < a.length && "{" != a.charAt(d); );
      if (d < a.length) {
        for (; d++ < a.length && "\n" != a.charAt(d); );
        d < a.length && (a = a.substring(0, d + 1) + b + a.substring(d + 1))
      }
    }
  }
  c && ((a = a.substring(0, a.lastIndexOf("}"))), (a += c + "\n}"))
  return a
}
class Je {
  constructor() {
    this.Ib = D.S
  }
}
var Ee, Ke
Ee = "LeftOver"
Ke = {
  ms: 1,
  dt: 1,
  Ps: 1,
  $u: 2,
  et: 2,
  av: 3,
  ft: 3,
  bv: 4,
  gt: 4,
  lt: 4,
  nt: 12,
  pt: 16,
  bt: 1,
  Pu: 1,
  Ns: 1,
  mt: 4,
  ot: 12,
  qt: 16
}
class Le {
  constructor(a, b) {
    this.vb = "unnamed"
    this.cb = a
    this.dl = {}
    this.Va = b
  }
  get Sd() {
    return !1
  }
  get M() {
    return !!this.cn
  }
  kh() {}
  Zg(a, b, c, d, e, f, g, h) {
    b = this.Va
    a.nd = ""
    a.Fd = ""
    c = this.cb.Af
    for (a = 0; a < e.length; a++) {
      d = e[a]
      let l = c[e[a]]
      null == l || null == l ? (e.splice(a, 1), a--) : (f[d] = a)
    }
    for (let l of b.Qf(this, g)) h.push(l)
    if (this.cb.Jc.length) {
      this.be = new rd(this.Va, void 0, void 0, "leftOver-" + this.vb)
      for (var k of this.cb.Jc)
        (e = k.type.replace(/^(.*?)(<.*>)?$/, "$1")), qd(this.be, k.name, Ke[e], k.length), (this.dl[k.name] = k.type)
      this.be.create()
    }
    k = []
    e = []
    for (a = 0; a < g.length; a++) (f = h[a]), 0 <= f && (k.push(g[a]), e.push(f))
    this.cb.gs = k
    this.cb.fs = e
  }
  B() {
    this.be && this.be.B()
  }
  He() {
    var a
    return null === (a = this.sources) || void 0 === a ? void 0 : a.qg
  }
  Ge() {
    var a
    return null === (a = this.sources) || void 0 === a ? void 0 : a.Mf
  }
}
function Fe(a) {
  if ((65535 < a.Gb && (a.Xb++, (a.Gb = 0)), 4 === a.Xb))
    throw "Too many textures or UBOs have been declared and it is not supported in WebGPU."
  let b = { i: a.Xb, j: a.Gb }
  return (a.Gb += 1), b
}
class Me {
  constructor(a) {
    this.Ib = a
    this.Gb = this.Xb = 0
    this.Pl = {}
    this.Ac = {}
    this.Af = {}
    this.bi = {}
    this.T = []
    this.qa = []
    this.Rl = []
    this.Sl = []
    this.ln = []
    this.Xm = []
    this.Jc = []
    a = Me.Bg
    let b = []
    for (let c in a) {
      let d = a[c].h
      ;-1 !== d.i && (void 0 === b[d.i] ? (b[d.i] = d.j) : (b[d.i] = Math.max(b[d.i], d.j)))
    }
    this.Xb = b.length - 1
    0 === this.Xb ? (this.Xb++, (this.Gb = 0)) : (this.Gb = b[b.length - 1] + 1)
  }
  static get Bg() {
    return Ne ? Oe : Pe
  }
}
var Ne, Oe, Pe
Ne = !0
Oe = {
  Dk: { h: { i: 0, j: 0 } },
  Lj: { h: { i: -1, j: -1 } },
  Mj: { h: { i: -1, j: -1 } },
  Xj: { h: { i: -1, j: -1 } },
  hk: { h: { i: -1, j: -1 } },
  kk: { h: { i: -1, j: -1 } },
  lk: { h: { i: -1, j: -1 } },
  mk: { h: { i: -1, j: -1 } },
  nk: { h: { i: -1, j: -1 } },
  pk: { h: { i: -1, j: -1 } },
  qk: { h: { i: -1, j: -1 } },
  Nj: { h: { i: -1, j: -1 } },
  Oj: { h: { i: -1, j: -1 } },
  Pj: { h: { i: -1, j: -1 } },
  Qj: { h: { i: -1, j: -1 } },
  Rj: { h: { i: -1, j: -1 } },
  Sj: { h: { i: -1, j: -1 } },
  Tj: { h: { i: -1, j: -1 } },
  Uj: { h: { i: -1, j: -1 } },
  Vj: { h: { i: -1, j: -1 } },
  Wj: { h: { i: -1, j: -1 } },
  Yj: { h: { i: -1, j: -1 } },
  Zj: { h: { i: -1, j: -1 } },
  $j: { h: { i: -1, j: -1 } },
  ak: { h: { i: -1, j: -1 } },
  bk: { h: { i: -1, j: -1 } },
  ck: { h: { i: -1, j: -1 } },
  dk: { h: { i: -1, j: -1 } },
  ek: { h: { i: -1, j: -1 } },
  fk: { h: { i: -1, j: -1 } },
  gk: { h: { i: -1, j: -1 } },
  ik: { h: { i: -1, j: -1 } },
  jk: { h: { i: -1, j: -1 } },
  tk: { h: { i: -1, j: -1 } },
  uk: { h: { i: -1, j: -1 } },
  Kj: { h: { i: -1, j: -1 } }
}
Pe = {
  Dk: { h: { i: 0, j: 0 } },
  Lj: { h: { i: 1, j: 0 } },
  Mj: { h: { i: 1, j: 1 } },
  Xj: { h: { i: 1, j: 2 } },
  hk: { h: { i: 1, j: 3 } },
  kk: { h: { i: 1, j: 4 } },
  lk: { h: { i: 1, j: 5 } },
  mk: { h: { i: 1, j: 6 } },
  nk: { h: { i: 1, j: 7 } },
  pk: { h: { i: 1, j: 8 } },
  qk: { h: { i: 1, j: 9 } },
  Nj: { h: { i: 1, j: 10 } },
  Oj: { h: { i: 1, j: 11 } },
  Pj: { h: { i: 1, j: 12 } },
  Qj: { h: { i: 1, j: 13 } },
  Rj: { h: { i: 1, j: 14 } },
  Sj: { h: { i: 1, j: 15 } },
  Tj: { h: { i: 1, j: 16 } },
  Uj: { h: { i: 1, j: 17 } },
  Vj: { h: { i: 1, j: 18 } },
  Wj: { h: { i: 1, j: 19 } },
  Yj: { h: { i: 1, j: 20 } },
  Zj: { h: { i: 1, j: 21 } },
  $j: { h: { i: 1, j: 22 } },
  ak: { h: { i: 1, j: 23 } },
  bk: { h: { i: 1, j: 24 } },
  ck: { h: { i: 1, j: 25 } },
  dk: { h: { i: 1, j: 26 } },
  ek: { h: { i: 1, j: 27 } },
  fk: { h: { i: 1, j: 28 } },
  gk: { h: { i: 1, j: 29 } },
  ik: { h: { i: 1, j: 30 } },
  jk: { h: { i: 1, j: 31 } },
  tk: { h: { i: 2, j: 0 } },
  uk: { h: { i: 2, j: 1 } },
  Kj: { h: { i: 2, j: 2 } }
}
function Qe(a, b, c) {
  let d = new RegExp(c + "\\s*\\[(.+)?\\]", "gm"),
    e = d.exec(b)
  for (; null != e; ) {
    let f = e[1],
      g = +f
    a.Fh && isNaN(g) && (g = +a.Fh[f.trim()])
    b = b.replace(e[0], c + g)
    e = d.exec(b)
  }
  return b
}
class Re extends Je {
  constructor() {
    super(...arguments)
    this.Oe = []
    this.gf = []
    this.Ib = D.S
  }
  Sf(a) {
    this.s = a
    this.Oe.length = 0
    this.gf.length = 0
  }
  dg(a, b) {
    return b
      ? "uniform Internals {\nfloat yFactor__;\nfloat textureOutputHeight__;\n};\n##INJECTCODE##\n" + a
      : "uniform Internals {\nfloat yFactor__;\nfloat textureOutputHeight__;\n};\n" + a
  }
  dh(a, b) {
    a = `layout(set = ${b.h.i}, binding = ${b.h.j}) uniform ${a} {\n    `
    for (let c of this.s.Jc)
      0 < c.length ? (a += `    ${c.type} ${c.name}[${c.length}];\n`) : (a += `    ${c.type} ${c.name};\n`)
    return (a += "};\n\n"), a
  }
  Kf(a, b) {
    for (var c = 0; c < this.gf.length; ++c) {
      var d = this.gf[c]
      a = Qe(this, a, d)
      b = Qe(this, b, d)
    }
    for (c = 0; c < this.Oe.length; ++c) (d = this.Oe[c]) && 0 < d.length && (b = d + "\n" + b)
    c = De(this)
    return (a = c + a), (b = c + b), Ge(this), He(this), (this.Fh = null), { sg: a, Nf: b }
  }
}
function Se(a, b, c) {
  let d = /var\s+(\w+Sampler)\s*:\s*(sampler|sampler_comparison)\s*;/gm
  for (;;) {
    let l = d.exec(b)
    if (null === l) break
    var e = l[1],
      f = e.indexOf("Sampler") === e.length - 7 ? e.substring(0, e.indexOf("Sampler")) : null,
      g = "sampler_comparison" === l[2] ? Pc.vj : Pc.Jj
    f && (f = a.s.Af[f]) && (f.Ol = !0)
    ;(f = a.s.bi[e]) || ((f = { h: Fe(a.s), type: g }), (a.s.bi[e] = f))
    g = a
    var h = f,
      k = c
    let { i: p, j: n } = h.h
    ;(g.s.T[p] || ((g.s.T[p] = []), (g.s.qa[p] = [])), g.s.qa[p][n]) ||
      ((h = g.s.T[p].push({ h: n, visibility: 0, Xd: { type: h.type } })), (g.s.qa[p][n] = { name: e, index: h - 1 }))
    n = g.s.qa[p][n].index
    g.s.T[p][n].visibility |= k ? Nc.fc : Nc.Ag
    f = `[[group(${f.h.i}), binding(${f.h.j})]] `
    b = b.substring(0, l.index) + f + b.substring(l.index)
    d.lastIndex += f.length
  }
  return b
}
function Te(a, b, c) {
  let d = /var<\s*(uniform|storage)\s*(,\s*(read|read_write)\s*)?>\s+(\S+)\s*:\s*(\S+)\s*;/gm
  for (;;) {
    let g = d.exec(b)
    if (null === g) break
    var e = g[1]
    let h = g[3],
      k = g[4],
      l = g[5]
    var f = a.s.Ac[k]
    if (!f) {
      f = "uniform" === e ? Me.Bg[l] : null
      let p
      f ? ((k = l), (p = f.h), -1 === p.i && (p = Fe(a.s))) : (p = Fe(a.s))
      f = { h: p }
      a.s.Ac[k] = f
    }
    Ce(a, k, a.s.Ac[k], "read_write" === h ? Oc.Storage : "storage" === e ? Oc.Ak : Oc.Rc, c)
    e = `[[group(${f.h.i}), binding(${f.h.j})]] `
    b = b.substring(0, g.index) + e + b.substring(g.index)
    d.lastIndex += e.length
  }
  return b
}
class Ue extends Je {
  constructor() {
    super(...arguments)
    this.Ib = D.Tc
  }
  Sf(a) {
    this.s = a
    this.Jg = []
    this.Nk = []
    this.Hg = []
    this.Ed = []
    this.Jl = []
    this.Dd = []
  }
  dg(a) {
    let b = 0,
      c = "",
      d = !1,
      e = []
    for (; b < a.length; ) {
      let f = a.charAt(b)
      if (c)
        f === c
          ? '"' === c || "'" === c
            ? ("\\" !== a.charAt(b - 1) && (c = ""), e.push(f))
            : ((c = ""), (d = !1))
          : "*/" === c && "*" === f && b + 1 < a.length
          ? ("/" === a.charAt(b + 1) && (c = ""), "" === c && ((d = !1), b++))
          : d || e.push(f)
      else {
        switch (f) {
          case '"':
          case "'":
          case "`":
            c = f
            break
          case "/":
            if (b + 1 < a.length) {
              let g = a.charAt(b + 1)
              "/" === g ? ((c = "\n"), (d = !0)) : "*" === g && ((c = "*/"), (d = !0))
            }
        }
        d || e.push(f)
      }
      b++
    }
    return (
      "[[block]] struct Internals {\nyFactor__: f32;\ntextureOutputHeight__: f32;\n};\nvar<uniform> internals : Internals;\n" +
      e.join("")
    )
  }
  Kf(a, b) {
    var c =
      0 <= b.indexOf("gl_FragCoord")
        ? "\n            if (internals.yFactor__ == 1.) {\n                gl_FragCoord.y = internals.textureOutputHeight__ - gl_FragCoord.y;\n            }\n        "
        : ""
    a = Se(this, a, !0)
    b = Se(this, b, !1)
    a = Te(this, a, !0)
    b = Te(this, b, !1)
    var d = De(this)
    b = d + b
    a = (a = d + a).replace(/#define /g, "//#define ")
    d = this.Jl.join("\n") + "\n"
    var e = this.Nk.join("\n") + "\n",
      f =
        "struct VertexInputs {\n  [[builtin(vertex_index)]] vertexIndex : u32;\n  [[builtin(instance_index)]] instanceIndex : u32;\n"
    0 < this.Jg.length && (f += this.Jg.join("\n"))
    var g = "struct FragmentInputs {\n  [[builtin(position)]] position : vec4<f32>;\n"
    0 < this.Ed.length && (g += this.Ed.join("\n"))
    var h =
      "  var output : FragmentInputs;\n  gl_VertexID = input.vertexIndex;\n  gl_InstanceID = input.instanceIndex;\n"
    for (var k = 0; k < this.Hg.length; ++k) {
      var l = this.Hg[k]
      h += `  ${l} = input.${l};\n`
    }
    k = "  output.position = gl_Position;\n  output.position.y = output.position.y * internals.yFactor__;\n"
    for (l = 0; l < this.Dd.length; ++l) {
      let p = this.Dd[l]
      k += `  output.${p} = ${p};\n`
    }
    a = Ie(
      "var<private> gl_VertexID : u32;\nvar<private> gl_InstanceID : u32;\nvar<private> gl_Position : vec4<f32>;\n" +
        (f + "\n};\n") +
        e +
        (g + "\n};\n") +
        d +
        a,
      h,
      k + "  return output;"
    )
    b = (b = b.replace(/#define /g, "//#define ")).replace(/dpdy/g, "(-internals.yFactor__)*dpdy")
    f =
      "struct FragmentInputs {\n  [[builtin(position)]] position : vec4<f32>;\n  [[builtin(front_facing)]] frontFacing : bool;\n"
    0 < this.Ed.length && (f += this.Ed.join("\n"))
    g = "struct FragmentOutputs {\n  [[location(0)]] color : vec4<f32>;\n"
    e = !1
    for (h = 0; !(e || ((h = b.indexOf("gl_FragDepth", h)), 0 > h)); ) {
      k = h
      for (e = !0; 1 < h && "\n" !== b.charAt(h); ) {
        if ("/" === b.charAt(h) && "/" === b.charAt(h - 1)) {
          e = !1
          break
        }
        h--
      }
      h = k + 12
    }
    e && (g += "  [[builtin(frag_depth)]] fragDepth: f32;\n")
    b =
      "var<private> gl_FragCoord : vec4<f32>;\nvar<private> gl_FrontFacing : bool;\nvar<private> gl_FragColor : vec4<f32>;\nvar<private> gl_FragDepth : f32;\n" +
      (f + "\n};\n") +
      d +
      (g + "};\n") +
      b
    c = "  var output : FragmentOutputs;\n  gl_FragCoord = input.position;\n  gl_FrontFacing = input.frontFacing;\n" + c
    for (d = 0; d < this.Dd.length; ++d) (f = this.Dd[d]), (c += `  ${f} = input.${f};\n`)
    d = "  output.color = gl_FragColor;\n"
    return (
      e && (d += "  output.fragDepth = gl_FragDepth;\n"),
      (d += "  return output;"),
      (b = Ie(b, c, d)),
      Ge(this),
      He(this),
      { sg: a, Nf: b }
    )
  }
  dh(a, b) {
    let c = `[[block]] struct ${a} {\n`
    for (let e of this.s.Jc) {
      var d = e.type.replace(/^(.*?)(<.*>)?$/, "$1")
      d = Ke[d]
      0 < e.length
        ? (c +=
            2 >= d
              ? ` [[align(16)]] ${e.name} : [[stride(16)]] array<${e.type}, ${e.length}>;\n`
              : ` ${e.name} : array<${e.type}, ${e.length}>;\n`)
        : (c += `  ${e.name} : ${e.type};\n`)
    }
    return (c += "};\n"), (c += `[[group(${b.h.i}), binding(${b.h.j})]] var<uniform> uniforms : ${a};\n`), c
  }
}
function X(a, b) {
  a.view = X(a.xc, b)
}
class Ve {
  constructor() {
    this.format = L.Dg
    this.view = this.Jd = this.xc = null
  }
  get O() {
    return this.xc
  }
  get Wd() {
    return this.Jd
  }
  set Wd(a) {
    this.Jd = a
  }
  set(a) {
    this.xc = a
  }
  bj(a, b, c, d, e) {
    b = a !== E.Bk && b
    X(this, {
      format: this.format,
      Pd: c ? Ic.ge : Ic.Lb,
      Vd: b ? fa(Math.max(d, e)) + 1 : 1,
      ci: 0,
      di: 0,
      Zh: c ? 6 : 1,
      $h: Jc.Qc
    })
  }
  reset() {
    this.view = this.Jd = this.xc = null
  }
  release() {
    var a, b, c
    null === (a = this.xc) || void 0 === a || a.Fb()
    null === (b = this.Jd) || void 0 === b || b.Fb()
    null === (c = this.Sr) || void 0 === c || c.Fb()
    this.reset()
  }
}
var We,
  Xe = We || (We = {})
Xe[(Xe.Fp = 0)] = "MipMap"
Xe[(Xe.kp = 1)] = "InvertYPremultiplyAlpha"
Xe[(Xe.mo = 2)] = "Clear"
!0
function Ye(a) {
  switch (a) {
    case 15:
      return L.zj
    case 13:
      return L.yg
    case 14:
      return L.zg
    case 36492:
      return L.pj
    case 36495:
      return L.oj
    case 36494:
      return L.nj
    case 33779:
      return L.mj
    case 33778:
      return L.lj
    case 33777:
    case 33776:
      return L.kj
    case 37808:
      return L.jj
    case 36196:
      return L.Hj
  }
  return L.Dg
}
class Ze extends Db {
  constructor(a) {
    super()
    this.A = a
  }
  get O() {
    return this.A
  }
}
class $e {
  constructor() {
    this.Wb = []
    this.reset()
  }
  reset(a = !1) {
    this.U = null
    a && ((this.ca = null), (this.Bc = null), (this.Od = null), (this.Wb = []), (this.Dc = void 0))
  }
}
let af = [0, 0, 3, 7, 0, 2, 6, 2, 4, 1, 5, 3, 1],
  bf = [0, 64, 32, 96, 16, 80, 48, 112, 8],
  cf = [0, 128, 128, 0, 0, 0, 0, 128, 0, 0, 0, 0, 128]
class df {
  constructor(a) {
    this.zd = {}
    this.ea = a
    this.disabled = !1
  }
}
var ef,
  Z = ef || (ef = {})
Z[(Z.Ek = 0)] = "StencilReadMask"
Z[(Z.Fk = 1)] = "StencilWriteMask"
Z[(Z.Cj = 2)] = "DepthBias"
Z[(Z.Dj = 3)] = "DepthBiasSlopeScale"
Z[(Z.rk = 4)] = "MRTAttachments1"
Z[(Z.sk = 5)] = "MRTAttachments2"
Z[(Z.Ao = 6)] = "DepthStencilState"
Z[(Z.Gq = 7)] = "RasterizationState"
Z[(Z.no = 8)] = "ColorStates"
Z[(Z.Qq = 9)] = "ShaderStage"
Z[(Z.Hk = 10)] = "TextureStage"
Z[(Z.Lr = 11)] = "VertexState"
Z[(Z.Np = 12)] = "NumStates"
!0
let ff = {
  "": 0,
  "Wt": 1,
  "Vt": 2,
  "Ut": 3,
  "Qt": 4,
  "Pt": 5,
  "Ot": 6,
  "iu": 7,
  "hu": 8,
  "gu": 9,
  "Tt": 10,
  "St": 11,
  "Rt": 12,
  "cu": 13,
  "bu": 14,
  "au": 15,
  "su": 16,
  "rgba8unorm-srgb": 17,
  "ru": 18,
  "qu": 19,
  "ks": 20,
  "bgra8unorm-srgb": 21,
  "ju": 22,
  "fu": 23,
  "eu": 24,
  "du": 25,
  "mu": 26,
  "lu": 27,
  "ku": 28,
  "pu": 29,
  "ou": 30,
  "nu": 31,
  "Au": 32,
  "zs": 33,
  "As": 34,
  "depth24plus-stencil8": 35,
  "Bs": 36,
  "depth24unorm-stencil8": 37,
  "depth32float-stencil8": 38
}
function gf(a) {
  0 !== a.Wk && ((a.Wk = 0), (a.Bb[ef.Cj] = 0), (a.Pa = !0))
}
function hf(a, b) {
  a.Wh[0] = b
  a.ed = ff[b]
}
function jf(a, b, c) {
  var d
  if (10 < b.length) throw "Can't handle more than 10 attachments for a MRT in cache render pipeline!"
  a.Gm = b
  a.Hm = c
  let e = [0, 0],
    f = 0,
    g = 0,
    h = 0
  for (let l = 0; l < b.length; ++l) {
    var k = b[l]
    0 !== k &&
      ((k = c[k - 1]),
      (k = null == k ? void 0 : k.I),
      (a.Pe[h] = null !== (d = null == k ? void 0 : k.format) && void 0 !== d ? d : a.Wh[0]),
      (e[f] += ff[a.Pe[h]] << g),
      (g += 6),
      h++,
      32 <= g && ((g = 0), f++))
  }
  a.Pe.length = h
  ;(a.il === e[0] && a.jl === e[1]) ||
    ((a.il = e[0]), (a.jl = e[1]), (a.Bb[ef.rk] = e[0]), (a.Bb[ef.sk] = e[1]), (a.Pa = !0))
}
class kf {
  constructor(a) {
    this.ea = a
    this.Bb = Array(30)
    this.Pe = []
    this.disabled = !1
    this.rn = []
    this.reset()
  }
  reset() {
    this.Pa = !0
    this.rn.length = 0
    this.ld = 1
    this.od = 2
    0 !== this.Xk && ((this.Xk = 0), (this.Bb[ef.Dj] = 0), (this.Pa = !0))
    gf(this)
    gf(this)
    this.Wh = [L.fe]
    hf(this, L.fe)
    jf(this, [], [])
    255 !== this.zl && ((this.zl = 255), (this.Bb[ef.Ek] = 255), (this.Pa = !0))
    255 !== this.Al && ((this.Al = 255), (this.Bb[ef.Fk] = 255), (this.Pa = !0))
    0 !== this.Rh && ((this.Rh = 0), (this.Bb[ef.Hk] = this.Rh), (this.Pa = !0))
  }
}
class lf {
  constructor() {
    this.values = {}
  }
  count() {
    let a = 0,
      b = this.It ? 1 : 0
    for (let c in this.values) {
      let [d, e] = this.values[c].count()
      a += d
      b += e
      a++
    }
    return [a, b]
  }
}
class rf extends kf {
  constructor(a, b, c) {
    super(a, b, c)
    this.ll = []
    this.ll[0] = sf
  }
}
var sf = new lf()
class tf {
  constructor(a) {
    this.Nc = !1
    this.type = 16
    this.uf = a
    this.$ = wb++
  }
  get O() {
    return this.uf
  }
  M() {
    return this.uf.readyState >= this.uf.HAVE_CURRENT_DATA
  }
  B() {}
}
class uf {
  constructor() {
    this.$ = vf++
    this.reset()
  }
  reset() {
    this.Yd = {}
    this.$d = {}
    this.ia = !0
  }
  bb(a, b) {
    var c, d, e
    let f = this.$d[a],
      g = -1
    f
      ? (g = null !== (d = null === (c = f.V) || void 0 === c ? void 0 : c.$) && void 0 !== d ? d : -1)
      : (this.$d[a] = f = { V: b, Fi: !1, Ei: !1 })
    b ? ((f.Fi = 1 === b.type), (f.Ei = void 0 !== b.O)) : ((f.Fi = !1), (f.Ei = !1))
    f.V = b
    a = g !== (null !== (e = null == b ? void 0 : b.$) && void 0 !== e ? e : -1)
    this.ia || (this.ia = a)
  }
}
var vf = 0
class wf {
  constructor(a) {
    this.Mb = a
    this.$ = xf++
    this.reset()
  }
  ia(a) {
    return this.Pa || this.Dm !== a
  }
  reset() {
    this.Pa = !0
    this.Dm = 0
  }
  B() {
    this.Di && (this.Mb.Tm(this.Di), (this.Di = void 0))
  }
}
var xf = 0
class yf {
  constructor(a, b, c) {
    this.disabled = !1
    this.ea = a
    this.o = c
  }
}
class zf {
  constructor(a, b, c, d) {
    this.x = a
    this.y = b
    this.w = c
    this.Ya = d
  }
  fg(a) {
    a.Zm(this.x, this.y, this.w, this.Ya)
  }
  clone() {
    return new zf(this.x, this.y, this.w, this.Ya)
  }
}
class Af {
  constructor(a) {
    this.Xi = a
  }
  fg(a) {
    a.aj(this.Xi)
  }
  clone() {
    return new Af(this.Xi)
  }
}
function Bf(a, b) {
  return Bf(a.El, b)
}
class Cf {
  constructor() {
    this.El = null
  }
}
function Df(a, b) {
  a.Ug !== b.Dc && (a.Ug = b.Dc)
}
function Ef(a) {
  var b
  null !== a.F.U &&
    (a.zb.Hs(),
    a.ra || a.zb.play || (a.ad.fg(a.F.U), a.ad.reset()),
    a.F.U.km(),
    a.ga && (void 0 === a.m && (a.m = 0), (!a.m || a.m < a.ha) && console.log("frame #" + a.m + " - main end pass")),
    null === (b = a.Tk) || void 0 === b || b.call(a, 0),
    Ff(a, 0),
    Gf(a, 0),
    (a.Cd[0] = -1),
    Hf(a, 0),
    a.F.U === a.G && (a.G = null),
    a.F.reset(!1))
}
function Ff(a, b) {
  a.Hd[b].x = 0
  a.Hd[b].y = 0
  a.Hd[b].w = 0
  a.Hd[b].Ya = 0
  1 === b && ((a.N.x = 0), (a.N.y = 0), (a.N.z = 0), (a.N.w = 0))
}
function Gf(a, b) {
  a.Ad[b].x = 0
  a.Ad[b].y = 0
  a.Ad[b].w = 0
  a.Ad[b].Ya = 0
}
function If(a, b) {
  b.Zm(a.K.x, a.C ? a.K.y : a.Fc() - a.K.w - a.K.y, a.K.z, a.K.w)
  a.ga &&
    (void 0 === a.m && (a.m = 0),
    (!a.m || a.m < a.ha) &&
      console.log(
        "frame #" + a.m + " - scissor applied - (",
        a.K.x,
        a.K.y,
        a.K.z,
        a.K.w,
        ") current pass is main pass=" + (b === a.F.U)
      ))
}
function Hf(a, b) {
  a.Xc[b][0] = a.Xc[b][1] = a.Xc[b][2] = a.Xc[b][3] = null
}
function Jf(a, b, c, d, e, f) {
  var g, h, k
  let l = b.Ae
  var p = null == l ? void 0 : l.I
  let n = null == p ? void 0 : p.O
  var r = null == p ? void 0 : p.Wd
  p = null == n ? void 0 : X(n, a.J.Od)
  r = null == r ? void 0 : X(r, a.J.Od)
  let F = []
  a.fb && (a.P.depthFunc = 518)
  d = (c && d) || N.hb
  e = c && e ? (a.fb ? a.Og : a.qe) : N.hb
  c = c && f ? a.ic : N.hb
  if (b.Lk && b.ym) {
    ;(a.ub && 0 !== a.ub.length) || (a.ub = b.Lk)
    for (f = 0; f < a.ub.length; ++f) {
      var v = a.ub[f]
      if (0 !== v) {
        v = b.$d[v - 1]
        var q = null == v ? void 0 : v.I,
          u = null == q ? void 0 : q.O
        q &&
          u &&
          ((v = { ...a.J.Bc, format: q.format }),
          (q = q.Wd),
          (u = X(u, v)),
          (v = null == q ? void 0 : X(q, v)),
          F.push({ view: v || u, Zi: q ? u : void 0, Ud: d, jg: O.Fa }))
      }
    }
    jf(a.cd, a.ub, b.$d)
  } else
    (v = b.V.I),
      (f = v.Wd),
      (v = X(v.O, a.J.Bc)),
      (q = null == f ? void 0 : X(f, a.J.Bc)),
      F.push({ view: q || v, Zi: f ? v : void 0, Ud: d, jg: O.Fa })
  if (
    (null === (g = a.Uk) || void 0 === g || g.call(a, "render target pass", 1),
    (a.J.ca = {
      Ld: F,
      Hf: l && n ? { view: r || p, ri: e, dm: O.Fa, ej: b.Yk ? c : N.hb, dn: O.Fa } : void 0,
      Km: (null === (h = a.Re) || void 0 === h ? 0 : h.um) ? a.Re.Sm : void 0
    }),
    (a.J.U = a.yd.Ql(a.J.ca)),
    a.ga && (void 0 === a.m && (a.m = 0), !a.m || a.m < a.ha))
  )
    (b = b.V),
      console.log(
        "frame #" + a.m + " - render target begin pass - internalTexture.uniqueId=",
        b.$,
        "width=",
        b.width,
        "height=",
        b.height,
        a.J.ca
      )
  a.G = a.J.U
  null === (k = a.Sk) || void 0 === k || k.call(a)
  Ff(a, 1)
  Gf(a, 1)
  a.Cd[1] = -1
  Hf(a, 1)
}
function Kf(a, b, c, d) {
  var e, f, g
  let h = a.ra ? Lf(a) : null,
    k = 0 === (null === a.G ? -1 : a.G === a.F.U ? 0 : 1) ? a.ad : a.bd
  hf(a.Ng, a.ed)
  jf(a.Ng, null !== (e = a.cd.Gm) && void 0 !== e ? e : [], null !== (f = a.cd.Hm) && void 0 !== f ? f : [])
  a.ra ? h.aj(a.ic) : k.yf(new Af(a.ic))
  b = a.Ng.clear(h, b, c, d, a.Xl)
  if (a.ra) {
    var l
    h.aj(null !== (l = a.Sa.Xa) && void 0 !== l ? l : 0)
  } else k.cs(b), k.yf(new Af(null !== (g = a.Sa.Xa) && void 0 !== g ? g : 0)), a.Kh()
}
function Mf(a) {
  var b, c, d
  a.G &&
    (a.zb.Is(a.G, a.C.V.I) || a.ra || (a.bd.fg(a.G), a.bd.reset()),
    a.G.km(),
    a.ga &&
      (void 0 === a.m && (a.m = 0),
      (!a.m || a.m < a.ha) &&
        console.log(
          "frame #" + a.m + " - render target end pass - internalTexture.uniqueId=",
          null === (c = null === (b = a.C) || void 0 === b ? void 0 : b.V) || void 0 === c ? void 0 : c.$
        )),
    null === (d = a.Tk) || void 0 === d || d.call(a, 1),
    Ff(a, 1),
    Gf(a, 1),
    (a.Cd[1] = -1),
    Hf(a, 1),
    (a.G = null),
    a.J.reset())
}
function Nf(a, b, c, d, e) {
  var f, g, h
  a.F.U && Ef(a)
  a.fb && (a.P.depthFunc = 518)
  d = b && d ? (a.fb ? a.Og : a.qe) : N.hb
  e = b && e ? a.ic : N.hb
  a.F.ca.Ld[0].Ud = (b && c) || N.hb
  a.F.ca.Hf.ri = d
  a.F.ca.Hf.ej = e
  a.F.ca.Km = (null === (f = a.Re) || void 0 === f ? 0 : f.um) ? a.Re.Sm : void 0
  a.ff = a.kd.Xs()
  a.F.Wb[0].set(a.ff)
  a.wd.yc ? (a.F.ca.Ld[0].Zi = X(a.ff)) : (a.F.ca.Ld[0].view = X(a.ff))
  a.ga &&
    (void 0 === a.m && (a.m = 0),
    (!a.m || a.m < a.ha) &&
      console.log(
        "frame #" + a.m + " - main begin pass - texture width=" + a.td.width,
        " height=" + a.td.height,
        a.F.ca
      ))
  null === (g = a.Uk) || void 0 === g || g.call(a, "main pass", 0)
  a.G = a.Ze.Ql(a.F.ca)
  a.F.U = a.G
  null === (h = a.Sk) || void 0 === h || h.call(a)
  Ff(a, 0)
  Gf(a, 0)
  a.Cd[0] = -1
  Hf(a, 0)
}
function Lf(a) {
  return a.C && !a.G ? Jf(a, a.C, !1, null, !1, !1) : a.G || Nf(a, !1), a.G
}
function Of(a, b, c, d) {
  return (
    a.hf && d === D.S && ((b = Bf(a.hf, b)), (c = Bf(a.hf, c))),
    { cv: { module: a.ea.Wl({ code: b }), lm: "main" }, Rs: { module: a.ea.Wl({ code: c }), lm: "main" } }
  )
}
function Pf(a, b, c) {
  let d = b.I
  if (d) {
    c = null != c ? c : a.C && !a.G ? a.yd : a.G ? a.Cb : a.Ze
    var e = b.I.format,
      f = fa(Math.max(b.width, b.height)) + 1
    a.ga &&
      (void 0 === a.m && (a.m = 0),
      (!a.m || a.m < a.ha) &&
        console.log(
          "frame #" + a.m + " - generate mipmaps called - width=",
          b.width,
          "height=",
          b.height,
          "isCube=",
          b.X
        ))
    b.X ? a.Ub.Us(d, e, f, c) : a.Ub.Pf(d)
  }
}
function Qf(a, b, c, d) {
  if (((d = null != d ? d : b), a.lb)) {
    var e = a.lb.D.cb.Af[d]
    if ((a.Tg.bb(b, c), e && e.Ol)) {
      a = a.Tg
      e = d + "Sampler"
      d = a.Yd[e]
      b = -1
      d ? (b = d.Rd) : (a.Yd[e] = d = { Xd: c, Rd: 0 })
      if ((d.Xd = c)) {
        var f, g, h
        e = c.na && 1 < c.na ? 4 : 1
        c =
          af[c.ua] +
          bf[(c.Pg || 514) - 512 + 1] +
          cf[c.ua] +
          ((null !== (f = c.Ka) && void 0 !== f ? f : 1) << 8) +
          ((null !== (g = c.La) && void 0 !== g ? g : 1) << 10) +
          ((null !== (h = c.Ja) && void 0 !== h ? h : 1) << 12) +
          ((c.Nc ? 1 : 0) << 14) +
          (e << 15)
      } else c = 0
      d.Rd = c
      f = b !== d.Rd
      a.ia || (a.ia = f)
    }
  }
}
function Rf(a, b) {
  b = b.Wb[0].format
  hf(a.cd, b)
  a.ed !== b && (a.ed = b)
}
class Sf extends Q {
  constructor(a, b = {}) {
    var c, d, e, f
    if (
      (super(null),
      (this.Il = { label: "upload" }),
      (this.sl = { label: "render" }),
      (this.tl = { label: "renderTarget" }),
      (this.qe = 1),
      (this.Og = 0),
      (this.ic = 0),
      (this.Vk = 4),
      (this.pd = null),
      (this.hf = null),
      (this.hd = [null, null, null]),
      (this.G = null),
      (this.F = new $e()),
      (this.J = new $e()),
      (this.ml = new z()),
      (this.Zl = !1),
      (this.Yl = !0),
      (this.ga = !1),
      (this.ha = 10),
      (this.Hd = [
        { x: 0, y: 0, w: 0, Ya: 0 },
        { x: 0, y: 0, w: 0, Ya: 0 }
      ]),
      (this.Ad = [
        { x: 0, y: 0, w: 0, Ya: 0 },
        { x: 0, y: 0, w: 0, Ya: 0 }
      ]),
      (this.K = { x: 0, y: 0, z: 0, w: 0 }),
      (this.Cd = [-1, -1]),
      (this.Xc = [
        [null, null, null, null],
        [null, null, null, null]
      ]),
      (this.Uf = !0),
      (b.em = b.em || {}),
      (b.lg = b.lg || L.fe),
      (b.yc = void 0 === b.yc || b.yc),
      (b.stencil = null === (c = b.stencil) || void 0 === c || c),
      (b.im = null !== (d = b.im) && void 0 !== d && d),
      ua(`Babylon.js v${Q.Sc} - ${this.description} engine`),
      !navigator.$s)
    )
      return void B("WebGPU is not supported by your browser.")
    this.qh = !0
    this.vc = "WEBGPU"
    void 0 === b.If && (b.If = !1)
    void 0 === b.Xf && (b.Xf = 4)
    void 0 === b.Vb && (b.Vb = !0)
    this.Na = !!b.Jf
    this.oe = a
    this.wd = b
    this.premultipliedAlpha = null === (e = b.premultipliedAlpha) || void 0 === e || e
    c = (C() && window.devicePixelRatio) || 1
    d = b.Bm || c
    this.Ie = null !== (f = b.Ll) && void 0 !== f && f ? 1 / Math.min(d, c) : 1
    this.Le = b.yc ? this.Vk : 1
    this.ph = b.stencil
    this.Bd(a, !!b.gm, b.Vb)
    this.df = new Re()
    this.wl = new Ue()
  }
  get Zd() {
    return this.zb.mode
  }
  set Zd(a) {
    this.zb.mode = a
  }
  dj() {
    this.zb.reset()
  }
  get dc() {
    return this.zb.enabled
  }
  set dc(a) {
    this.zb.enabled = a
  }
  get Lc() {
    return !0
  }
  get name() {
    return "WebGPU"
  }
  get description() {
    return this.name + this.version
  }
  get version() {
    return 1
  }
  get ra() {
    return this.jd
  }
  set ra(a) {
    this.jd = a
  }
  get Xl() {
    return this.C ? this.C.Ym : this.Le
  }
  Kc(a, b, c = !1) {
    if ((c = !!super.Kc(a, b, c))) {
      this.ga &&
        (void 0 === this.m && (this.m = 0),
        (!this.m || this.m < this.ha) && console.log("frame #" + this.m + " - setSize called -", a, b))
      this.kd.rs({
        Cs: this.ea,
        format: this.wd.lg,
        usage: Hc.je | Hc.xg,
        qs: this.premultipliedAlpha ? fd.wk : fd.vk,
        size: { width: a, height: b, bm: 1 }
      })
      var d
      this.td = { width: this.Rf(), height: this.Fc(), bm: 1 }
      a = new Float32Array([this.Fc()])
      ;(this.Mb.$m(this.bs, 4, a), this.Mb.$m(this.$r, 4, a), this.wd.yc)
        ? ((a = { size: this.td, Vd: 1, Wm: this.Le, Pd: Gc.Lb, format: this.wd.lg, usage: Hc.je }),
          null === (d = this.Me) || void 0 === d || d.Fb(),
          (this.Me = this.ea.createTexture(a)),
          (d = [{ view: X(this.Me), Ud: new A(0, 0, 0, 1), jg: O.Fa }]))
        : (d = [{ view: void 0, Ud: new A(0, 0, 0, 1), jg: O.Fa }])
      this.F.Dc = this.zm ? L.yg : L.zg
      Df(this, this.F)
      a = { size: this.td, Vd: 1, Wm: this.Le, Pd: Gc.Lb, format: this.F.Dc, usage: Hc.je }
      this.md && this.md.Fb()
      this.md = this.ea.createTexture(a)
      a = { view: X(this.md), ri: this.qe, dm: O.Fa, ej: this.ic, dn: O.Fa }
      this.F.ca = { Ld: d, Hf: a }
      null !== this.F.U && Ef(this)
      c = (this.dc && this.dj(), !0)
    }
    return c
  }
  hh(a) {
    return a === D.Tc ? this.wl : this.df
  }
  gh(a) {
    return new Me(a)
  }
  Yh() {
    this.Sa.apply()
  }
  de(a) {
    ;(this.Vi && !a) || (a && (this.Sa.reset(), this.P.reset(), (this.P.depthFunc = 515), this.le.reset(), this.$i(!0)))
  }
  $i() {}
  Gd(a, b, c, d) {
    this.N.x = a
    this.N.y = b
    this.N.z = c
    this.N.w = d
  }
  clear(a, b, c, d = !1) {
    a && void 0 === a.a && (a.a = 1)
    let e = 0 !== this.K.x || 0 !== this.K.y || 0 !== this.K.z || 0 !== this.K.w
    this.ga &&
      (void 0 === this.m && (this.m = 0),
      (!this.m || this.m < this.ha) &&
        console.log(
          "frame #" + this.m + " - clear called - backBuffer=",
          b,
          " depth=",
          c,
          " stencil=",
          d,
          " scissor is active=",
          e
        ))
    this.C
      ? e
        ? (this.J.U || Jf(this, this.C, !1, b ? a : null, c, d),
          this.ra ? If(this, this.G) : this.bd.yf(new zf(this.K.x, this.K.y, this.K.z, this.K.w)),
          Kf(this, b ? a : null, c, d))
        : (this.G && Mf(this), Jf(this, this.C, !0, b ? a : null, c, d))
      : ((this.F.U && e) || Nf(this, !e, b ? a : null, c, d),
        e &&
          (this.ra ? If(this, this.G) : this.ad.yf(new zf(this.K.x, this.K.y, this.K.z, this.K.w)),
          Kf(this, b ? a : null, c, d)))
  }
  Nd(a) {
    a = a instanceof Array ? new Float32Array(a) : a instanceof ArrayBuffer ? new Uint8Array(a) : a
    return this.Mb.createBuffer(a, Ec.fc | Ec.wg)
  }
  li(a) {
    return this.Nd(a)
  }
  xd(a) {
    return this.Mb.Tm(a)
  }
  oi() {
    throw "Not available on WebGPU"
  }
  Md() {
    throw "Not available on WebGPU"
  }
  ni(a) {
    return new Le(a, this)
  }
  mi() {
    new uf()
  }
  ki() {
    return new wf(this.Mb)
  }
  Te(a, b, c, d, e, f, g, h) {
    g = a.cb.Ib
    this.Zl && (console.log(h), console.log(b), console.log(c))
    a.sources = { Mf: c, qg: b, Yt: e, Xt: f }
    d
      ? ((h = g === D.S ? this.pd.Ff(b, "vertex") : b),
        (c = g === D.S ? this.pd.Ff(c, "fragment") : c),
        (g = Of(this, h, c, g)))
      : (m(this.Ni, this),
        (b =
          g === D.S
            ? this.pd.Ff("#version 450\n" + (h ? h + "\n" : "") + b, "vertex")
            : (h ? "//" + h.split("\n").join("\n//") + "\n" : "") + b),
        (c =
          g === D.S
            ? this.pd.Ff("#version 450\n" + (h ? h + "\n" : "") + c, "fragment")
            : (h ? "//" + h.split("\n").join("\n//") + "\n" : "") + c),
        (g = Of(this, b, c, g)),
        (g = (m(this.Mi, this), g)))
    a.cn = g
  }
  Qf(a, b) {
    let c = Array(b.length)
    for (let d = 0; d < b.length; d++) {
      let e = a.cb.Pl[b[d]]
      void 0 !== e && (c[d] = e)
    }
    return c
  }
  Jh(a) {
    this.aa[a.qb] && (delete this.aa[a.qb], this.Ma(a.D))
  }
  Yi() {
    for (let a in this.aa) this.Ma(this.aa[a].D)
    this.aa = {}
  }
  Ma(a) {
    a && a.B()
  }
  get $f() {
    return !1
  }
  Qg() {
    return new Ve()
  }
  wb(a) {
    let b = this.mb.indexOf(a)
    ;-1 !== b && this.mb.splice(b, 1)
    this.Ub.$t(a)
  }
  eh() {
    return 5
  }
  createTexture(a, b, c, d, e = 3, f = null, g = null, h = null, k = null, l = null, p = null, n, r, F, v) {
    return ac(
      this,
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      (q, u, y, w, K, t, x, M) => {
        var G
        ;((q.Cf = w.width),
        (q.Bf = w.height),
        (q.width = w.width),
        (q.height = w.height),
        (q.format = null != l ? l : -1),
        M(q.width, q.height, w, u, q, () => {}),
        null === (G = q.I) || void 0 === G ? void 0 : G.O)
          ? t || x || Pf(this, q, this.Cb)
          : ((u = this.Ub.vs(q, w.width, w.height, void 0, F)),
            void 0 !== w.close &&
              (this.Ub.Wu(w, q, w.width, w.height, q.depth, u.format, 0, 0, K, !1, 0, 0, this.Cb),
              t || x || Pf(this, q, this.Cb)))
        y && y.Ye(q)
        q.M = !0
        m(q.Hb, q)
        q.Hb.clear()
      },
      () => !1,
      h,
      k,
      l,
      p,
      n,
      r,
      v
    )
  }
  bb(a, b, c, d) {
    this.cf(a, c, !1, !1, d, d)
  }
  cf(a, b, c, d = !1, e = "", f) {
    if (((f = null != f ? f : e), this.lb))
      if (b) {
        if (b.video) b.update()
        else if (4 === b.am) {
          b.$l()
          return
        }
        a = null
        if (((a = d ? b.cm : b.M() ? b.sm() : b.X ? this.xi : b.Hc ? this.Ai : b.Gc ? this.zi : this.yi), a && !a.Td))
          a.X && a.hc !== b.Eb && ((a.hc = b.Eb), (d = 3 !== b.Eb && 5 !== b.Eb ? 1 : 0), (b.Jb = d), (b.Kb = d)),
            (a.Ka = b.Jb),
            (a.La = b.Kb),
            a.Hc && (a.Ja = b.Pc),
            this.bf(0, a, b.zf)
        Qf(this, e, a, f)
      } else this.Tg.bb(e, null)
    else
      this.ga &&
        (void 0 === this.m && (this.m = 0),
        (!this.m || this.m < this.ha) &&
          console.log("frame #" + this.m + " - _setTexture called with a null _currentEffect! texture=", b))
  }
  bf(a, b, c) {
    b.na !== c && (b.na = Math.min(c, this.l.Yf))
  }
  Wc(a, b, c) {
    void 0 !== a && Qf(this, c, b)
  }
  Pf(a) {
    Pf(this, a, this.yd)
  }
  readPixels(a, b, c, d, e, f = !0) {
    var g = this.J.U ? this.J : this.F
    e = g.Wb[0].O
    g = g.Wb[0].format
    return e ? (f && this.Lf(), this.Ub.readPixels(e, a, b, c, d, g)) : Promise.resolve(new Uint8Array(0))
  }
  Lf() {
    let a = !this.G,
      b = 0
    this.G && this.C && ((b |= 1), Mf(this))
    this.F.U && ((b |= 2), Ef(this))
    this.hd[0] = this.Cb.finish()
    this.hd[1] = this.yd.finish()
    this.hd[2] = this.Ze.finish()
    this.ea.Nt.submit(this.hd)
    this.Cb = this.ea.ji(this.Il)
    this.Ze = this.ea.ji(this.sl)
    this.yd = this.ea.ji(this.tl)
    this.Zr.zu(this.Cb)
    this.Ub.uu(this.Cb)
    this.ad.reset()
    this.bd.reset()
    2 & b && Nf(this, !1)
    1 & b && Jf(this, this.C, !1, null, !1, !1)
    a && this.C && (this.G = null)
  }
  bindFramebuffer(a, b = 0, c, d, e, f = 0, g = 0) {
    var h, k
    let l = null === (h = a.V) || void 0 === h ? void 0 : h.I
    l
      ? (this.C && this.ae(this.C),
        (this.C = a),
        (l.Ur = a.X ? 6 * g + b : g),
        (this.J.Wb[0] = l),
        (this.J.Dc = this.C.Ae ? Ye(this.C.Ae.format) : void 0),
        Df(this, this.J),
        Rf(this, this.J),
        (this.J.Bc = { format: this.ed, Pd: Ic.Lb, Vd: 1, ci: a.X ? 6 * g + b : g, di: f, Zh: 1, $h: Jc.Qc }),
        (this.J.Od = { format: this.Ug, Pd: Ic.Lb, Vd: 1, ci: a.X ? 6 * g + b : g, di: 0, Zh: 1, $h: Jc.Qc }),
        this.ga &&
          (void 0 === this.m && (this.m = 0),
          (!this.m || this.m < this.ha) &&
            console.log(
              "frame #" + this.m + " - bindFramebuffer called - internalTexture.uniqueId=",
              null === (k = a.V) || void 0 === k ? void 0 : k.$,
              "face=",
              b,
              "lodLevel=",
              f,
              "layer=",
              g,
              this.J.Bc,
              this.J.Od
            )),
        (this.G = null),
        this.dc && 1 === this.Zd && Lf(this),
        this.dd && !e
          ? Tb(this, this.dd, c, d)
          : (c || ((c = a.width), f && (c /= Math.pow(2, f))),
            d || ((d = a.height), f && (d /= Math.pow(2, f))),
            this.Gd(0, 0, c, d)),
        this.de())
      : this.Yl &&
        console.error("bindFramebuffer: Trying to bind a texture that does not have a hardware texture!", a, l)
  }
  ae(a) {
    var b, c
    this.C = this.C
    this.G && this.G !== this.F.U && Mf(this)
    null === (b = a.V) || void 0 === b || !b.ta || a.X || Pf(this, a.V)
    this.C = null
    m(this.ml, this)
    this.ga &&
      (void 0 === this.m && (this.m = 0),
      (!this.m || this.m < this.ha) &&
        console.log(
          "frame #" + this.m + " - unBindFramebuffer called - internalTexture.uniqueId=",
          null === (c = a.V) || void 0 === c ? void 0 : c.$
        ))
    this.ub = []
    jf(this.cd, this.ub, [])
    this.G = this.F.U
    Df(this, this.F)
    Rf(this, this.F)
  }
  B() {
    var a, b, c
    null === (a = this.Me) || void 0 === a || a.Fb()
    null === (b = this.Wr) || void 0 === b || b.Fb()
    null === (c = this.md) || void 0 === c || c.Fb()
    super.B()
  }
  Rf() {
    return this.C ? this.C.width : this.oe.width
  }
  Fc() {
    return this.C ? this.C.height : this.oe.height
  }
  Qd() {
    return this.oe
  }
  getError() {
    return 0
  }
  ei() {}
  H() {}
  Yg(a, b) {
    b()
  }
  oh() {
    return !0
  }
  Uh() {}
  ne() {
    throw "_bindUnboundFramebuffer is not implementedin WebGPU! You probably want to use restoreDefaultFramebuffer or unBindFramebuffer instead"
  }
  fh() {
    throw "_getSamplingParameters is not available in WebGPU"
  }
  Bi() {
    return []
  }
}
var DecodeBase64ToString = (a) => atob(a)
var EndsWith = (a, b) => -1 !== a.indexOf(b, a.length - b.length)
function FromHalfFloat(a) {
  let b = (32768 & a) >> 15,
    c = (31744 & a) >> 10
  a &= 1023
  return 0 === c
    ? (a / Math.pow(2, 10)) * Math.pow(2, -14) * (b ? -1 : 1)
    : 31 == c
    ? a
      ? NaN
      : (1 / 0) * (b ? -1 : 1)
    : (b ? -1 : 1) * Math.pow(2, c - 15) * (1 + a / Math.pow(2, 10))
}
function GetClass(a) {
  return la[a]
}

function RegisterClass(a, b) {
  la[a] = b
}
var StartsWith = (a, b) => !!a && 0 === a.indexOf(b)
var ToLinearSpace = 2.2
export {
  Kc as AddressMode,
  tb as AlphaState,
  Xc as BlendFactor,
  Yc as BlendOperation,
  ud as Buffer,
  Oc as BufferBindingType,
  Ec as BufferUsage,
  fd as CanvasCompositingAlphaMode,
  qa as Color3,
  A as Color4,
  Wc as ColorWrite,
  Mc as CompareFunction,
  Sc as CompilationMessageType,
  cd as ComputePassTimestampLocation,
  aa as Constants,
  Vc as CullMode,
  Db as DataBuffer,
  Da as DecodeBase64ToBinary,
  DecodeBase64ToString,
  wc as DecodeBase64UrlToBinary,
  Ac as DecodeBase64UrlToString,
  Ea as DeepCopier,
  rb as DepthCullingState,
  gd as DeviceLostReason,
  Ma as DomManagement,
  Kb as DrawWrapper,
  nb as Effect,
  Ca as EncodeArrayBufferToBase64,
  EndsWith,
  Q as Engine,
  za as EngineStore,
  hd as ErrorFilter,
  ca as EventState,
  tf as ExternalTexture,
  Dc as FeatureName,
  nc as FileTools,
  J as FileToolsOptions,
  Oa as FilesInputStore,
  Lc as FilterMode,
  FromHalfFloat,
  Uc as FrontFace,
  GetClass,
  La as GetDOMTextContent,
  $c as IndexFormat,
  bd as InputStepMode,
  vb as InternalTexture,
  E as InternalTextureSource,
  zc as IsBase64DataUrl,
  Ka as IsDocumentAvailable,
  yc as IsFileURL,
  Ja as IsNavigatorAvailable,
  C as IsWindowObjectExist,
  tc as LoadFile,
  pc as LoadFileError,
  uc as LoadImage,
  N as LoadOp,
  xa as Logger,
  Fc as MapMode,
  z as Observable,
  da as Observer,
  Vd as PerfCounter,
  pa as PerformanceConfigurator,
  Wd as PerformanceMonitor,
  Cc as PowerPreference,
  Na as PrecisionDate,
  Tc as PrimitiveTopology,
  nd as PromisePolyfill,
  ed as QueryType,
  vc as ReadFile,
  rc as ReadFileError,
  RegisterClass,
  dd as RenderPassTimestampLocation,
  xc as RequestFile,
  qc as RequestFileError,
  Qa as RetryStrategy,
  Xd as RollingAverage,
  Pc as SamplerBindingType,
  ha as Scalar,
  sc as SetCorsBehavior,
  ae as ShaderCodeInliner,
  D as ShaderLanguage,
  Nc as ShaderStage,
  eb as ShaderStore,
  StartsWith,
  Zc as StencilOperation,
  sb as StencilState,
  Lb as StencilStateComposer,
  Rc as StorageTextureAccess,
  O as StoreOp,
  Jc as TextureAspect,
  Gc as TextureDimension,
  L as TextureFormat,
  Qc as TextureSampleType,
  ub as TextureSampler,
  Hc as TextureUsage,
  Ic as TextureViewDimension,
  kc as ThinEngine,
  ia as ToGammaSpace,
  ToLinearSpace,
  od as Tools,
  rd as UniformBuffer,
  vd as VertexBuffer,
  ad as VertexFormat,
  Cb as WebGL2ShaderProcessor,
  Hb as WebGLDataBuffer,
  Jb as WebGLHardwareTexture,
  Ib as WebGLPipelineContext,
  yf as WebGPUCacheBindGroups,
  kf as WebGPUCacheRenderPipeline,
  rf as WebGPUCacheRenderPipelineTree,
  df as WebGPUCacheSampler,
  Ze as WebGPUDataBuffer,
  wf as WebGPUDrawContext,
  Sf as WebGPUEngine,
  Cf as WebGPUTintWASM,
  Ga as WebRequest
}
