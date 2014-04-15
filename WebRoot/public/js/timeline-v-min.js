//! moment.js
//! version : 2.5.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a) {
	function b(a, b) {
		return function(c) {
			return i(a.call(this, c), b)
		}
	}

	function c(a, b) {
		return function(c) {
			return this.lang().ordinal(a.call(this, c), b)
		}
	}

	function d() {}

	function e(a) {
		u(a), g(this, a)
	}

	function f(a) {
		var b = o(a),
			c = b.year || 0,
			d = b.month || 0,
			e = b.week || 0,
			f = b.day || 0,
			g = b.hour || 0,
			h = b.minute || 0,
			i = b.second || 0,
			j = b.millisecond || 0;
		this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble()
	}

	function g(a, b) {
		for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
		return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
	}

	function h(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}

	function i(a, b, c) {
		for (var d = Math.abs(a) + "", e = a >= 0; d.length < b;) d = "0" + d;
		return (e ? c ? "+" : "" : "-") + d
	}

	function j(a, b, c, d) {
		var e, f, g = b._milliseconds,
			h = b._days,
			i = b._months;
		g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && cb.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
	}

	function k(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}

	function l(a) {
		return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
	}

	function m(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
		return g + f
	}

	function n(a) {
		if (a) {
			var b = a.toLowerCase().replace(/(.)s$/, "$1");
			a = Qb[a] || Rb[b] || b
		}
		return a
	}

	function o(a) {
		var b, c, d = {};
		for (c in a) a.hasOwnProperty(c) && (b = n(c), b && (d[b] = a[c]));
		return d
	}

	function p(b) {
		var c, d;
		if (0 === b.indexOf("week")) c = 7, d = "day";
		else {
			if (0 !== b.indexOf("month")) return;
			c = 12, d = "month"
		}
		cb[b] = function(e, f) {
			var g, h, i = cb.fn._lang[b],
				j = [];
			if ("number" == typeof e && (f = e, e = a), h = function(a) {
				var b = cb().utc().set(d, a);
				return i.call(cb.fn._lang, b, e || "")
			}, null != f) return h(f);
			for (g = 0; c > g; g++) j.push(h(g));
			return j
		}
	}

	function q(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
	}

	function r(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function s(a) {
		return t(a) ? 366 : 365
	}

	function t(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function u(a) {
		var b;
		a._a && -2 === a._pf.overflow && (b = a._a[ib] < 0 || a._a[ib] > 11 ? ib : a._a[jb] < 1 || a._a[jb] > r(a._a[hb], a._a[ib]) ? jb : a._a[kb] < 0 || a._a[kb] > 23 ? kb : a._a[lb] < 0 || a._a[lb] > 59 ? lb : a._a[mb] < 0 || a._a[mb] > 59 ? mb : a._a[nb] < 0 || a._a[nb] > 999 ? nb : -1, a._pf._overflowDayOfYear && (hb > b || b > jb) && (b = jb), a._pf.overflow = b)
	}

	function v(a) {
		a._pf = {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1
		}
	}

	function w(a) {
		return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
	}

	function x(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function y(a, b) {
		return b._isUTC ? cb(a).zone(b._offset || 0) : cb(a).local()
	}

	function z(a, b) {
		return b.abbr = a, ob[a] || (ob[a] = new d), ob[a].set(b), ob[a]
	}

	function A(a) {
		delete ob[a]
	}

	function B(a) {
		var b, c, d, e, f = 0,
			g = function(a) {
				if (!ob[a] && pb) try {
					require("./lang/" + a)
				} catch (b) {}
				return ob[a]
			};
		if (!a) return cb.fn._lang;
		if (!k(a)) {
			if (c = g(a)) return c;
			a = [a]
		}
		for (; f < a.length;) {
			for (e = x(a[f]).split("-"), b = e.length, d = x(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
				if (c = g(e.slice(0, b).join("-"))) return c;
				if (d && d.length >= b && m(e, d, !0) >= b - 1) break;
				b--
			}
			f++
		}
		return cb.fn._lang
	}

	function C(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function D(a) {
		var b, c, d = a.match(tb);
		for (b = 0, c = d.length; c > b; b++) d[b] = Vb[d[b]] ? Vb[d[b]] : C(d[b]);
		return function(e) {
			var f = "";
			for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
			return f
		}
	}

	function E(a, b) {
		return a.isValid() ? (b = F(b, a.lang()), Sb[b] || (Sb[b] = D(b)), Sb[b](a)) : a.lang().invalidDate()
	}

	function F(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (ub.lastIndex = 0; d >= 0 && ub.test(a);) a = a.replace(ub, c), ub.lastIndex = 0, d -= 1;
		return a
	}

	function G(a, b) {
		var c, d = b._strict;
		switch (a) {
			case "DDDD":
				return Gb;
			case "YYYY":
			case "GGGG":
			case "gggg":
				return d ? Hb : xb;
			case "YYYYYY":
			case "YYYYY":
			case "GGGGG":
			case "ggggg":
				return d ? Ib : yb;
			case "S":
				if (d) return Eb;
			case "SS":
				if (d) return Fb;
			case "SSS":
			case "DDD":
				return d ? Gb : wb;
			case "MMM":
			case "MMMM":
			case "dd":
			case "ddd":
			case "dddd":
				return Ab;
			case "a":
			case "A":
				return B(b._l)._meridiemParse;
			case "X":
				return Db;
			case "Z":
			case "ZZ":
				return Bb;
			case "T":
				return Cb;
			case "SSSS":
				return zb;
			case "MM":
			case "DD":
			case "YY":
			case "GG":
			case "gg":
			case "HH":
			case "hh":
			case "mm":
			case "ss":
			case "ww":
			case "WW":
				return d ? Fb : vb;
			case "M":
			case "D":
			case "d":
			case "H":
			case "h":
			case "m":
			case "s":
			case "w":
			case "W":
			case "e":
			case "E":
				return d ? Eb : vb;
			default:
				return c = new RegExp(O(N(a.replace("\\", "")), "i"))
		}
	}

	function H(a) {
		a = a || "";
		var b = a.match(Bb) || [],
			c = b[b.length - 1] || [],
			d = (c + "").match(Nb) || ["-", 0, 0],
			e = +(60 * d[1]) + q(d[2]);
		return "+" === d[0] ? -e : e
	}

	function I(a, b, c) {
		var d, e = c._a;
		switch (a) {
			case "M":
			case "MM":
				null != b && (e[ib] = q(b) - 1);
				break;
			case "MMM":
			case "MMMM":
				d = B(c._l).monthsParse(b), null != d ? e[ib] = d : c._pf.invalidMonth = b;
				break;
			case "D":
			case "DD":
				null != b && (e[jb] = q(b));
				break;
			case "DDD":
			case "DDDD":
				null != b && (c._dayOfYear = q(b));
				break;
			case "YY":
				e[hb] = q(b) + (q(b) > 68 ? 1900 : 2e3);
				break;
			case "YYYY":
			case "YYYYY":
			case "YYYYYY":
				e[hb] = q(b);
				break;
			case "a":
			case "A":
				c._isPm = B(c._l).isPM(b);
				break;
			case "H":
			case "HH":
			case "h":
			case "hh":
				e[kb] = q(b);
				break;
			case "m":
			case "mm":
				e[lb] = q(b);
				break;
			case "s":
			case "ss":
				e[mb] = q(b);
				break;
			case "S":
			case "SS":
			case "SSS":
			case "SSSS":
				e[nb] = q(1e3 * ("0." + b));
				break;
			case "X":
				c._d = new Date(1e3 * parseFloat(b));
				break;
			case "Z":
			case "ZZ":
				c._useUTC = !0, c._tzm = H(b);
				break;
			case "w":
			case "ww":
			case "W":
			case "WW":
			case "d":
			case "dd":
			case "ddd":
			case "dddd":
			case "e":
			case "E":
				a = a.substr(0, 1);
			case "gg":
			case "gggg":
			case "GG":
			case "GGGG":
			case "GGGGG":
				a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
		}
	}

	function J(a) {
		var b, c, d, e, f, g, h, i, j, k, l = [];
		if (!a._d) {
			for (d = L(a), a._w && null == a._a[jb] && null == a._a[ib] && (f = function(b) {
				var c = parseInt(b, 10);
				return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[hb] ? cb().weekYear() : a._a[hb]
			}, g = a._w, null != g.GG || null != g.W || null != g.E ? h = Y(f(g.GG), g.W || 1, g.E, 4, 1) : (i = B(a._l), j = null != g.d ? U(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = Y(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[hb] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[hb] ? d[hb] : a._a[hb], a._dayOfYear > s(e) && (a._pf._overflowDayOfYear = !0), c = T(e, 0, a._dayOfYear), a._a[ib] = c.getUTCMonth(), a._a[jb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
			for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			l[kb] += q((a._tzm || 0) / 60), l[lb] += q((a._tzm || 0) % 60), a._d = (a._useUTC ? T : S).apply(null, l)
		}
	}

	function K(a) {
		var b;
		a._d || (b = o(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], J(a))
	}

	function L(a) {
		var b = new Date;
		return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
	}

	function M(a) {
		a._a = [], a._pf.empty = !0;
		var b, c, d, e, f, g = B(a._l),
			h = "" + a._i,
			i = h.length,
			j = 0;
		for (d = F(a._f, g).match(tb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(G(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Vb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), I(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
		a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[kb] < 12 && (a._a[kb] += 12), a._isPm === !1 && 12 === a._a[kb] && (a._a[kb] = 0), J(a), u(a)
	}

	function N(a) {
		return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
			return b || c || d || e
		})
	}

	function O(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function P(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) return a._pf.invalidFormat = !0, a._d = new Date(0 / 0), void 0;
		for (e = 0; e < a._f.length; e++) f = 0, b = g({}, a), v(b), b._f = a._f[e], M(b), w(b) && (f += b._pf.charsLeftOver, f += 10 * b._pf.unusedTokens.length, b._pf.score = f, (null == d || d > f) && (d = f, c = b));
		g(a, c || b)
	}

	function Q(a) {
		var b, c = a._i,
			d = Jb.exec(c);
		if (d) {
			for (a._pf.iso = !0, b = 4; b > 0; b--)
				if (d[b]) {
					a._f = Lb[b - 1] + (d[6] || " ");
					break
				}
			for (b = 0; 4 > b; b++)
				if (Mb[b][1].exec(c)) {
					a._f += Mb[b][0];
					break
				}
			c.match(Bb) && (a._f += "Z"), M(a)
		} else a._d = new Date(c)
	}

	function R(b) {
		var c = b._i,
			d = qb.exec(c);
		c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? Q(b) : k(c) ? (b._a = c.slice(0), J(b)) : l(c) ? b._d = new Date(+c) : "object" == typeof c ? K(b) : b._d = new Date(c)
	}

	function S(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 1970 > a && h.setFullYear(a), h
	}

	function T(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 1970 > a && b.setUTCFullYear(a), b
	}

	function U(a, b) {
		if ("string" == typeof a)
			if (isNaN(a)) {
				if (a = b.weekdaysParse(a), "number" != typeof a) return null
			} else a = parseInt(a, 10);
		return a
	}

	function V(a, b, c, d, e) {
		return e.relativeTime(b || 1, !! c, a, d)
	}

	function W(a, b, c) {
		var d = gb(Math.abs(a) / 1e3),
			e = gb(d / 60),
			f = gb(e / 60),
			g = gb(f / 24),
			h = gb(g / 365),
			i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", gb(g / 30)] || 1 === h && ["y"] || ["yy", h];
		return i[2] = b, i[3] = a > 0, i[4] = c, V.apply({}, i)
	}

	function X(a, b, c) {
		var d, e = c - b,
			f = c - a.day();
		return f > e && (f -= 7), e - 7 > f && (f += 7), d = cb(a).add("d", f), {
			week: Math.ceil(d.dayOfYear() / 7),
			year: d.year()
		}
	}

	function Y(a, b, c, d, e) {
		var f, g, h = new Date(i(a, 6, !0) + "-01-01").getUTCDay();
		return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
			year: g > 0 ? a : a - 1,
			dayOfYear: g > 0 ? g : s(a - 1) + g
		}
	}

	function Z(a) {
		var b = a._i,
			c = a._f;
		return "undefined" == typeof a._pf && v(a), null === b ? cb.invalid({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = B().preparse(b)), cb.isMoment(b) ? (a = g({}, b), a._d = new Date(+b._d)) : c ? k(c) ? P(a) : M(a) : R(a), new e(a))
	}

	function $(a, b) {
		cb.fn[a] = cb.fn[a + "s"] = function(a) {
			var c = this._isUTC ? "UTC" : "";
			return null != a ? (this._d["set" + c + b](a), cb.updateOffset(this), this) : this._d["get" + c + b]()
		}
	}

	function _(a) {
		cb.duration.fn[a] = function() {
			return this._data[a]
		}
	}

	function ab(a, b) {
		cb.duration.fn["as" + a] = function() {
			return +this / b
		}
	}

	function bb(a) {
		var b = !1,
			c = cb;
		"undefined" == typeof ender && (a ? (fb.moment = function() {
			return !b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), c.apply(null, arguments)
		}, g(fb.moment, c)) : fb.moment = cb)
	}
	for (var cb, db, eb = "2.5.0", fb = this, gb = Math.round, hb = 0, ib = 1, jb = 2, kb = 3, lb = 4, mb = 5, nb = 6, ob = {}, pb = "undefined" != typeof module && module.exports && "undefined" != typeof require, qb = /^\/?Date\((\-?\d+)/i, rb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, sb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, tb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, ub = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, vb = /\d\d?/, wb = /\d{1,3}/, xb = /\d{1,4}/, yb = /[+\-]?\d{1,6}/, zb = /\d+/, Ab = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Bb = /Z|[\+\-]\d\d:?\d\d/gi, Cb = /T/i, Db = /[\+\-]?\d+(\.\d{1,3})?/, Eb = /\d/, Fb = /\d\d/, Gb = /\d{3}/, Hb = /\d{4}/, Ib = /[+\-]?\d{6}/, Jb = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Kb = "YYYY-MM-DDTHH:mm:ssZ", Lb = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], Mb = [
			["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
			["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
			["HH:mm", /(T| )\d\d:\d\d/],
			["HH", /(T| )\d\d/]
		], Nb = /([\+\-]|\d\d)/gi, Ob = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Pb = {
			Milliseconds: 1,
			Seconds: 1e3,
			Minutes: 6e4,
			Hours: 36e5,
			Days: 864e5,
			Months: 2592e6,
			Years: 31536e6
		}, Qb = {
			ms: "millisecond",
			s: "second",
			m: "minute",
			h: "hour",
			d: "day",
			D: "date",
			w: "week",
			W: "isoWeek",
			M: "month",
			y: "year",
			DDD: "dayOfYear",
			e: "weekday",
			E: "isoWeekday",
			gg: "weekYear",
			GG: "isoWeekYear"
		}, Rb = {
			dayofyear: "dayOfYear",
			isoweekday: "isoWeekday",
			isoweek: "isoWeek",
			weekyear: "weekYear",
			isoweekyear: "isoWeekYear"
		}, Sb = {}, Tb = "DDD w W M D d".split(" "), Ub = "M D H h m s w W".split(" "), Vb = {
			M: function() {
				return this.month() + 1
			},
			MMM: function(a) {
				return this.lang().monthsShort(this, a)
			},
			MMMM: function(a) {
				return this.lang().months(this, a)
			},
			D: function() {
				return this.date()
			},
			DDD: function() {
				return this.dayOfYear()
			},
			d: function() {
				return this.day()
			},
			dd: function(a) {
				return this.lang().weekdaysMin(this, a)
			},
			ddd: function(a) {
				return this.lang().weekdaysShort(this, a)
			},
			dddd: function(a) {
				return this.lang().weekdays(this, a)
			},
			w: function() {
				return this.week()
			},
			W: function() {
				return this.isoWeek()
			},
			YY: function() {
				return i(this.year() % 100, 2)
			},
			YYYY: function() {
				return i(this.year(), 4)
			},
			YYYYY: function() {
				return i(this.year(), 5)
			},
			YYYYYY: function() {
				var a = this.year(),
					b = a >= 0 ? "+" : "-";
				return b + i(Math.abs(a), 6)
			},
			gg: function() {
				return i(this.weekYear() % 100, 2)
			},
			gggg: function() {
				return this.weekYear()
			},
			ggggg: function() {
				return i(this.weekYear(), 5)
			},
			GG: function() {
				return i(this.isoWeekYear() % 100, 2)
			},
			GGGG: function() {
				return this.isoWeekYear()
			},
			GGGGG: function() {
				return i(this.isoWeekYear(), 5)
			},
			e: function() {
				return this.weekday()
			},
			E: function() {
				return this.isoWeekday()
			},
			a: function() {
				return this.lang().meridiem(this.hours(), this.minutes(), !0)
			},
			A: function() {
				return this.lang().meridiem(this.hours(), this.minutes(), !1)
			},
			H: function() {
				return this.hours()
			},
			h: function() {
				return this.hours() % 12 || 12
			},
			m: function() {
				return this.minutes()
			},
			s: function() {
				return this.seconds()
			},
			S: function() {
				return q(this.milliseconds() / 100)
			},
			SS: function() {
				return i(q(this.milliseconds() / 10), 2)
			},
			SSS: function() {
				return i(this.milliseconds(), 3)
			},
			SSSS: function() {
				return i(this.milliseconds(), 3)
			},
			Z: function() {
				var a = -this.zone(),
					b = "+";
				return 0 > a && (a = -a, b = "-"), b + i(q(a / 60), 2) + ":" + i(q(a) % 60, 2)
			},
			ZZ: function() {
				var a = -this.zone(),
					b = "+";
				return 0 > a && (a = -a, b = "-"), b + i(q(a / 60), 2) + i(q(a) % 60, 2)
			},
			z: function() {
				return this.zoneAbbr()
			},
			zz: function() {
				return this.zoneName()
			},
			X: function() {
				return this.unix()
			},
			Q: function() {
				return this.quarter()
			}
		}, Wb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Tb.length;) db = Tb.pop(), Vb[db + "o"] = c(Vb[db], db);
	for (; Ub.length;) db = Ub.pop(), Vb[db + db] = b(Vb[db], 2);
	for (Vb.DDDD = b(Vb.DDD, 3), g(d.prototype, {
		set: function(a) {
			var b, c;
			for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
		},
		_months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
		months: function(a) {
			return this._months[a.month()]
		},
		_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort: function(a) {
			return this._monthsShort[a.month()]
		},
		monthsParse: function(a) {
			var b, c, d;
			for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
				if (this._monthsParse[b] || (c = cb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
		},
		_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays: function(a) {
			return this._weekdays[a.day()]
		},
		_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort: function(a) {
			return this._weekdaysShort[a.day()]
		},
		_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin: function(a) {
			return this._weekdaysMin[a.day()]
		},
		weekdaysParse: function(a) {
			var b, c, d;
			for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
				if (this._weekdaysParse[b] || (c = cb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
		},
		_longDateFormat: {
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D YYYY",
			LLL: "MMMM D YYYY LT",
			LLLL: "dddd, MMMM D YYYY LT"
		},
		longDateFormat: function(a) {
			var b = this._longDateFormat[a];
			return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
				return a.slice(1)
			}), this._longDateFormat[a] = b), b
		},
		isPM: function(a) {
			return "p" === (a + "").toLowerCase().charAt(0)
		},
		_meridiemParse: /[ap]\.?m?\.?/i,
		meridiem: function(a, b, c) {
			return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
		},
		_calendar: {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		calendar: function(a, b) {
			var c = this._calendar[a];
			return "function" == typeof c ? c.apply(b) : c
		},
		_relativeTime: {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		relativeTime: function(a, b, c, d) {
			var e = this._relativeTime[c];
			return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
		},
		pastFuture: function(a, b) {
			var c = this._relativeTime[a > 0 ? "future" : "past"];
			return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
		},
		ordinal: function(a) {
			return this._ordinal.replace("%d", a)
		},
		_ordinal: "%d",
		preparse: function(a) {
			return a
		},
		postformat: function(a) {
			return a
		},
		week: function(a) {
			return X(a, this._week.dow, this._week.doy).week
		},
		_week: {
			dow: 0,
			doy: 6
		},
		_invalidDate: "Invalid date",
		invalidDate: function() {
			return this._invalidDate
		}
	}), cb = function(b, c, d, e) {
		return "boolean" == typeof d && (e = d, d = a), Z({
			_i: b,
			_f: c,
			_l: d,
			_strict: e,
			_isUTC: !1
		})
	}, cb.utc = function(b, c, d, e) {
		var f;
		return "boolean" == typeof d && (e = d, d = a), f = Z({
			_useUTC: !0,
			_isUTC: !0,
			_l: d,
			_i: b,
			_f: c,
			_strict: e
		}).utc()
	}, cb.unix = function(a) {
		return cb(1e3 * a)
	}, cb.duration = function(a, b) {
		var c, d, e, g = a,
			h = null;
		return cb.isDuration(a) ? g = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = rb.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: 0,
			d: q(h[jb]) * c,
			h: q(h[kb]) * c,
			m: q(h[lb]) * c,
			s: q(h[mb]) * c,
			ms: q(h[nb]) * c
		}) : (h = sb.exec(a)) && (c = "-" === h[1] ? -1 : 1, e = function(a) {
			var b = a && parseFloat(a.replace(",", "."));
			return (isNaN(b) ? 0 : b) * c
		}, g = {
			y: e(h[2]),
			M: e(h[3]),
			d: e(h[4]),
			h: e(h[5]),
			m: e(h[6]),
			s: e(h[7]),
			w: e(h[8])
		}), d = new f(g), cb.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
	}, cb.version = eb, cb.defaultFormat = Kb, cb.updateOffset = function() {}, cb.lang = function(a, b) {
		var c;
		return a ? (b ? z(x(a), b) : null === b ? (A(a), a = "en") : ob[a] || B(a), c = cb.duration.fn._lang = cb.fn._lang = B(a), c._abbr) : cb.fn._lang._abbr
	}, cb.langData = function(a) {
		return a && a._lang && a._lang._abbr && (a = a._lang._abbr), B(a)
	}, cb.isMoment = function(a) {
		return a instanceof e
	}, cb.isDuration = function(a) {
		return a instanceof f
	}, db = Wb.length - 1; db >= 0; --db) p(Wb[db]);
	for (cb.normalizeUnits = function(a) {
		return n(a)
	}, cb.invalid = function(a) {
		var b = cb.utc(0 / 0);
		return null != a ? g(b._pf, a) : b._pf.userInvalidated = !0, b
	}, cb.parseZone = function(a) {
		return cb(a).parseZone()
	}, g(cb.fn = e.prototype, {
		clone: function() {
			return cb(this)
		},
		valueOf: function() {
			return +this._d + 6e4 * (this._offset || 0)
		},
		unix: function() {
			return Math.floor(+this / 1e3)
		},
		toString: function() {
			return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		},
		toDate: function() {
			return this._offset ? new Date(+this) : this._d
		},
		toISOString: function() {
			var a = cb(this).utc();
			return 0 < a.year() && a.year() <= 9999 ? E(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : E(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		},
		toArray: function() {
			var a = this;
			return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
		},
		isValid: function() {
			return w(this)
		},
		isDSTShifted: function() {
			return this._a ? this.isValid() && m(this._a, (this._isUTC ? cb.utc(this._a) : cb(this._a)).toArray()) > 0 : !1
		},
		parsingFlags: function() {
			return g({}, this._pf)
		},
		invalidAt: function() {
			return this._pf.overflow
		},
		utc: function() {
			return this.zone(0)
		},
		local: function() {
			return this.zone(0), this._isUTC = !1, this
		},
		format: function(a) {
			var b = E(this, a || cb.defaultFormat);
			return this.lang().postformat(b)
		},
		add: function(a, b) {
			var c;
			return c = "string" == typeof a ? cb.duration(+b, a) : cb.duration(a, b), j(this, c, 1), this
		},
		subtract: function(a, b) {
			var c;
			return c = "string" == typeof a ? cb.duration(+b, a) : cb.duration(a, b), j(this, c, -1), this
		},
		diff: function(a, b, c) {
			var d, e, f = y(a, this),
				g = 6e4 * (this.zone() - f.zone());
			return b = n(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - cb(this).startOf("month") - (f - cb(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - cb(this).startOf("month").zone() - (f.zone() - cb(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : h(e)
		},
		from: function(a, b) {
			return cb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
		},
		fromNow: function(a) {
			return this.from(cb(), a)
		},
		calendar: function() {
			var a = y(cb(), this).startOf("day"),
				b = this.diff(a, "days", !0),
				c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
			return this.format(this.lang().calendar(c, this))
		},
		isLeapYear: function() {
			return t(this.year())
		},
		isDST: function() {
			return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
		},
		day: function(a) {
			var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != a ? (a = U(a, this.lang()), this.add({
				d: a - b
			})) : b
		},
		month: function(a) {
			var b, c = this._isUTC ? "UTC" : "";
			return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), cb.updateOffset(this), this) : this._d["get" + c + "Month"]()
		},
		startOf: function(a) {
			switch (a = n(a)) {
				case "year":
					this.month(0);
				case "month":
					this.date(1);
				case "week":
				case "isoWeek":
				case "day":
					this.hours(0);
				case "hour":
					this.minutes(0);
				case "minute":
					this.seconds(0);
				case "second":
					this.milliseconds(0)
			}
			return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this
		},
		endOf: function(a) {
			return a = n(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
		},
		isAfter: function(a, b) {
			return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +cb(a).startOf(b)
		},
		isBefore: function(a, b) {
			return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +cb(a).startOf(b)
		},
		isSame: function(a, b) {
			return b = b || "ms", +this.clone().startOf(b) === +y(a, this).startOf(b)
		},
		min: function(a) {
			return a = cb.apply(null, arguments), this > a ? this : a
		},
		max: function(a) {
			return a = cb.apply(null, arguments), a > this ? this : a
		},
		zone: function(a) {
			var b = this._offset || 0;
			return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = H(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && j(this, cb.duration(b - a, "m"), 1, !0), this)
		},
		zoneAbbr: function() {
			return this._isUTC ? "UTC" : ""
		},
		zoneName: function() {
			return this._isUTC ? "Coordinated Universal Time" : ""
		},
		parseZone: function() {
			return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
		},
		hasAlignedHourOffset: function(a) {
			return a = a ? cb(a).zone() : 0, (this.zone() - a) % 60 === 0
		},
		daysInMonth: function() {
			return r(this.year(), this.month())
		},
		dayOfYear: function(a) {
			var b = gb((cb(this).startOf("day") - cb(this).startOf("year")) / 864e5) + 1;
			return null == a ? b : this.add("d", a - b)
		},
		quarter: function() {
			return Math.ceil((this.month() + 1) / 3)
		},
		weekYear: function(a) {
			var b = X(this, this.lang()._week.dow, this.lang()._week.doy).year;
			return null == a ? b : this.add("y", a - b)
		},
		isoWeekYear: function(a) {
			var b = X(this, 1, 4).year;
			return null == a ? b : this.add("y", a - b)
		},
		week: function(a) {
			var b = this.lang().week(this);
			return null == a ? b : this.add("d", 7 * (a - b))
		},
		isoWeek: function(a) {
			var b = X(this, 1, 4).week;
			return null == a ? b : this.add("d", 7 * (a - b))
		},
		weekday: function(a) {
			var b = (this.day() + 7 - this.lang()._week.dow) % 7;
			return null == a ? b : this.add("d", a - b)
		},
		isoWeekday: function(a) {
			return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
		},
		get: function(a) {
			return a = n(a), this[a]()
		},
		set: function(a, b) {
			return a = n(a), "function" == typeof this[a] && this[a](b), this
		},
		lang: function(b) {
			return b === a ? this._lang : (this._lang = B(b), this)
		}
	}), db = 0; db < Ob.length; db++) $(Ob[db].toLowerCase().replace(/s$/, ""), Ob[db]);
	$("year", "FullYear"), cb.fn.days = cb.fn.day, cb.fn.months = cb.fn.month, cb.fn.weeks = cb.fn.week, cb.fn.isoWeeks = cb.fn.isoWeek, cb.fn.toJSON = cb.fn.toISOString, g(cb.duration.fn = f.prototype, {
		_bubble: function() {
			var a, b, c, d, e = this._milliseconds,
				f = this._days,
				g = this._months,
				i = this._data;
			i.milliseconds = e % 1e3, a = h(e / 1e3), i.seconds = a % 60, b = h(a / 60), i.minutes = b % 60, c = h(b / 60), i.hours = c % 24, f += h(c / 24), i.days = f % 30, g += h(f / 30), i.months = g % 12, d = h(g / 12), i.years = d
		},
		weeks: function() {
			return h(this.days() / 7)
		},
		valueOf: function() {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12)
		},
		humanize: function(a) {
			var b = +this,
				c = W(b, !a, this.lang());
			return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
		},
		add: function(a, b) {
			var c = cb.duration(a, b);
			return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
		},
		subtract: function(a, b) {
			var c = cb.duration(a, b);
			return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
		},
		get: function(a) {
			return a = n(a), this[a.toLowerCase() + "s"]()
		},
		as: function(a) {
			return a = n(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
		},
		lang: cb.fn.lang,
		toIsoString: function() {
			var a = Math.abs(this.years()),
				b = Math.abs(this.months()),
				c = Math.abs(this.days()),
				d = Math.abs(this.hours()),
				e = Math.abs(this.minutes()),
				f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
			return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
		}
	});
	for (db in Pb) Pb.hasOwnProperty(db) && (ab(db, Pb[db]), _(db.toLowerCase()));
	ab("Weeks", 6048e5), cb.duration.fn.asMonths = function() {
		return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
	}, cb.lang("en", {
		ordinal: function(a) {
			var b = a % 10,
				c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), pb ? (module.exports = cb, bb(!0)) : "function" == typeof define && define.amd ? define("moment", function(b, c, d) {
		return d.config && d.config() && d.config().noGlobal !== !0 && bb(d.config().noGlobal === a), cb
	}) : bb()
}).call(this);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
(function($) {
	var h = $.scrollTo = function(a, b, c) {
		$(window).scrollTo(a, b, c)
	};
	h.defaults = {
		axis: 'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
		limit: true
	};
	h.window = function(a) {
		return $(window)._scrollable()
	};
	$.fn._scrollable = function() {
		return this.map(function() {
			var a = this,
				isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
			if (!isWin) return a;
			var b = (a.contentWindow || a).document || a.ownerDocument || a;
			return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
		})
	};
	$.fn.scrollTo = function(e, f, g) {
		if (typeof f == 'object') {
			g = f;
			f = 0
		}
		if (typeof g == 'function') g = {
			onAfter: g
		};
		if (e == 'max') e = 9e9;
		g = $.extend({}, h.defaults, g);
		f = f || g.duration;
		g.queue = g.queue && g.axis.length > 1;
		if (g.queue) f /= 2;
		g.offset = both(g.offset);
		g.over = both(g.over);
		return this._scrollable().each(function() {
			if (e == null) return;
			var d = this,
				$elem = $(d),
				targ = e,
				toff, attr = {}, win = $elem.is('html,body');
			switch (typeof targ) {
				case 'number':
				case 'string':
					if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						break
					}
					targ = $(targ, this);
					if (!targ.length) return;
				case 'object':
					if (targ.is || targ.style) toff = (targ = $(targ)).offset()
			}
			$.each(g.axis.split(''), function(i, a) {
				var b = a == 'x' ? 'Left' : 'Top',
					pos = b.toLowerCase(),
					key = 'scroll' + b,
					old = d[key],
					max = h.max(d, a);
				if (toff) {
					attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
					if (g.margin) {
						attr[key] -= parseInt(targ.css('margin' + b)) || 0;
						attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
					}
					attr[key] += g.offset[pos] || 0;
					if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
				} else {
					var c = targ[pos];
					attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
				} if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				if (!i && g.queue) {
					if (old != attr[key]) animate(g.onAfterFirst);
					delete attr[key]
				}
			});
			animate(g.onAfter);

			function animate(a) {
				$elem.animate(attr, f, g.easing, a && function() {
					a.call(this, e, g)
				})
			}
		}).end()
	};
	h.max = function(a, b) {
		var c = b == 'x' ? 'Width' : 'Height',
			scroll = 'scroll' + c;
		if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
		var d = 'client' + c,
			html = a.ownerDocument.documentElement,
			body = a.ownerDocument.body;
		return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
	};

	function both(a) {
		return typeof a == 'object' ? a : {
			top: a,
			left: a
		}
	}
})(jQuery);

/**
|------------------------------------------|
| MelonHTML5 - Timeline                    |
|------------------------------------------|
| @author:  Lee Le (lee@melonhtml5.com)    |
| @version: 1.08 (25 Feb 2014)             |
| @website: www.melonhtml5.com             |
|------------------------------------------|
*/

String.prototype.parseURL = function() {
	return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(h) {
		return h.link(h)
	})
};
String.prototype.parseHashtag = function() {
	return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(h) {
		var p = h.replace("#", "%23");
		return h.link("//twitter.com/search?q=" + p)
	})
};

function Timeline(h, p, r) {
	var a = this,
		s = $(document.body);
	this._lightbox = this._overlay = this._spine = this._container = null;
	this._data = p;
	this._options = {
		separator: "year",
		columnMode: "dual",
		order: "desc",
		defaultElementWidth: 400,
		animation: !0,
		lightbox: !0,
		allowDelete: !1,
		max: null,
		facebookAccessToken: null,
		facebookPageId: null,
		twitterSearchKey: null,
		onSearchSuccess: null,
		onSearchError: null
	};
	this._years = [];
	this._months = [];
	this._readmore_text = "Read More";
	this._month_translation = "一月 二月 三月 四月 五月 六月 July August September October November December".split(" ");
	this._spine_margin = 100;
	this._max_element_width = 0;
	this._elements = [];
	this._separators = [];
	this._iframe_queue = [];
	this._use_css3 = function() {
		var a = document.body.style;
		if ("string" == typeof a.transition) return !0;
		for (var d = ["Webkit", "Moz", "Khtml", "O", "ms"], c = 0; c < d.length; c++)
			if ("string" == typeof a[d[c] + "Transition"]) return !0;
		return !1
	}();
	this._default_element_data = {
		type: "blog_post",
		date: "2000-01-01",
		dateFormat: "DD MMMM YYYY",
		width: 400,
		title: null,
		content: null,
		image: null,
		readmore: null,
		height: 300,
		images: [],
		speed: 5E3,
		url: null
	};
	this._createElement = function(b, d) {
		b.width || (b.width = a._options.defaultElementWidth);
		b = $.extend({}, a._default_element_data, b);
		var c = $("<div>").addClass("timeline_element " + b.type).width(b.width);
		a._options.animation || c.addClass("animated");
		null !== b.title ? $("<div>").addClass("title").html('<span class="label">' + b.title + '</span><span class="date">' + a._getDateString(b.date, b.dateFormat) + "</span>").appendTo(c) : c.addClass("notitle");
		switch (b.type) {
			case "iframe":
				var f = $("<div>").addClass("content loading").height(b.height).appendTo(c);
				a._iframe_queue.push({
					element: f,
					url: b.url
				});
				break;
			case "blog_post":
				null !== b.image && (f = $("<div>").addClass("img_container").append($("<img>").attr("src", b.image)).appendTo(c), a._options.lightbox && f.append($("<div>").addClass("img_overlay").html('<span class="magnifier" data-type="blog_post" data-img="' + b.image + '"></span>')));
				null !== b.content && $("<div>").addClass("content").html(b.content).appendTo(c);
				null !== b.readmore && $("<div>").addClass("readmore").html('<a href="' + b.readmore + '">' + a._readmore_text +
					"</a>").appendTo(c);
				break;
			case "gallery":
				if (b.images.length) {
					var f = $("<div>").addClass("scroll_container").appendTo(c),
						g = "";
					$(b.images).each(function(c, d) {
						g += '<div class="img_container"><img height="' + b.height + '" src="' + d + '" />';
						a._options.lightbox && (g += '<div class="img_overlay"><span class="magnifier" data-total="' + b.images.length + '" data-order="' + c + '" data-type="gallery" data-img="' + d + '"></span></div>');
						g += "</div>"
					});
					f.html(g)
				}
				break;
			case "slider":
				var e = "";
				$(b.images).each(function(c, d) {
					e += '<div data-total="' +
						b.images.length + '" data-order="' + c + '" class="img_container' + (0 === c ? " active" : "") + '" style="display:' + (0 === c ? "block" : "none") + ';"><img src="' + d + '" />';
					a._options.lightbox && (e += '<div class="img_overlay"><span class="magnifier" data-total="' + b.images.length + '" data-order="' + c + '" data-type="slider" data-img="' + d + '"></span></div>');
					e += "</div>"
				});
				1 < b.images.length && (e += '<span class="slider_prev"></span><span class="slider_next"></span>');
				$("<div>").addClass("content").width(b.width).height(b.height).html(e).appendTo(c);
				1 < b.images.length && (c.data("speed", b.speed), setTimeout(function() {
					a._updateSlider(c, "next")
				}, b.speed))
		}
		a._options.allowDelete && $("<div>").addClass("del").data("timeline_element", c).text("Delete").appendTo(c);
		c.appendTo(d);
		a._max_element_width = Math.max(a._max_element_width, b.width);
		a._elements.push(c);
		return c
	};
	this._deleteElement = function(a) {
		var d = a.parent();
		a.remove();
		d.children(".timeline_element").length || d.remove()
	};
	this._createSeparator = function(b) {
		b = $("<div>").addClass("date_separator").attr("id",
			"timeline_date_separator_" + b).html("<span>" + b + "</span>").appendTo(a._container);
		a._options.animation || b.addClass("animated");
		a._separators.push(b)
	};
	this._setContinerWidth = function() {
		a._max_element_width && ("dual" === a._options.columnMode ? a._container.width(2 * a._max_element_width + a._spine_margin) : a._container.width(a._max_element_width + a._spine_margin))
	};
	this._render = function(b, d) {
		a._sortData(b);
		var c = null,
			f = null,
			g = null,
			e = !0;
		$(b).each(function(b, m) {
			if (null !== a._options.max && a._options.max <= b) return !1;
			var n = parseInt(m.date.split("-")[0], 10),
				l = parseInt(m.date.split("-")[1], 10);
			10 > l && (l = "0" + l);
			var l = n + "-" + l,
				q = !1;
			if (-1 === $.inArray(n, a._years) && "year" === a._options.separator || null === a._options.separator) q = !0, a._years.push(n); - 1 !== $.inArray(l, a._months) || "month" !== a._options.separator && "month_year" !== a._options.separator || (q = !0, a._months.push(l));
			var k = "";
			if ("year" === a._options.separator) k = "year_" + n;
			else if ("month" === a._options.separator || "month_year" === a._options.separator) k = "month_" + l;
			if (q) {
				"year" ===
					a._options.separator ? 1 < a._years.length && a._createSeparator(n) : ("month" === a._options.separator || "month_year" === a._options.separator) && 1 < a._months.length && (l = a._month_translation[parseInt(l.split("-")[1], 10) - 1], "month_year" === a._options.separator && (l = l + " " + n), a._createSeparator(l));
				switch (a._options.columnMode) {
					case "dual":
						c = $("<div>").addClass("column column_left " + k).appendTo(a._container);
						f = $("<div>").addClass("column column_right " + k).appendTo(a._container);
						break;
					case "left":
						c = $("<div>").addClass("column column_left " +
							k).appendTo(a._container);
						break;
					case "right":
						f = $("<div>").addClass("column column_right " + k).appendTo(a._container);
						break;
					case "center":
						g = $("<div>").addClass("column column_center " + k).appendTo(a._container)
				}
				e = !0
			} else if (!0 === d) switch (a._options.columnMode) {
				case "dual":
					null === c && (c = a._container.find(".column_left." + k), e = 0 === a._container.find(k).children().length % 2 ? !0 : !1);
					null === f && (f = a._container.find(".column_right." + k), e = 0 === a._container.find(k).children().length % 2 ? !0 : !1);
					break;
				case "left":
					c = null !==
						c ? c : $(".column_left." + k);
					break;
				case "right":
					f = null !== f ? f : $(".column_right." + k);
					break;
				case "center":
					g = null !== g ? g : $(".column_center." + k)
			}
			switch (a._options.columnMode) {
				case "dual":
					a._createElement(m, e ? c : f);
					break;
				case "left":
					a._createElement(m, c);
					break;
				case "right":
					a._createElement(m, f);
					break;
				case "center":
					a._createElement(m, g)
			}
			e = e ? !1 : !0
		});
		a._setContinerWidth()
	};
	this._updateSlider = function(b, d) {
		b.data("timeout_id") && clearTimeout(b.data("timeout_id"));
		if (!a._overlay.hasClass("open")) {
			var c = b.find(".img_container.active").removeClass("active"),
				f = "next" === d ? c.data("order") === c.data("total") - 1 ? b.find(".img_container:first").addClass("active") : c.next().addClass("active") : 0 === c.data("order") ? b.find(".img_container:last").addClass("active") : c.prev().addClass("active");
			c.fadeOut();
			f.fadeIn()
		}
		c = setTimeout(function() {
			a._updateSlider(b, d)
		}, b.data("speed"));
		b.data("timeout_id", c)
	};
	this._startAnimation = function(b, d) {
		$(window).width();
		a._use_css3 ? a._spine.addClass("animated") : a._spine.animate({
			bottom: "0%"
		}, 500, function() {
			a._spine.addClass("animated")
		});
		"year" !== a._options.separator && "month" !== a._options.separator && "month_year" !== a._options.separator || setTimeout(function() {
			$(a._separators).each(function(b, c) {
				a._use_css3 ? c.addClass("animated") : c.children("span").animate({
					opacity: 1,
					top: "50%"
				}, 300, function() {
					c.addClass("animated")
				})
			})
		}, 500);
		var c = 0;
		$(a._elements).each(function(d, g) {
			g.hasClass("animated") || (c++, setTimeout(function(c) {
				a._use_css3 ? g.addClass("animated") : g.hide().addClass("animated").fadeIn();
				d === a._elements.length - 1 && setTimeout(b, 200)
			}, ("year" === a._options.separator || "month" === a._options.separator || "month_year" === a._options.separator ? 1E3 : 500) + 100 * c))
		});
		return !0
	};
	this._getDateString = function(a, d) {
		var c = a.split("-");
		if (3 <= c.length) var f = c[0],
		g = c[1], e = c[2];
		else 2 === c.length ? (f = c[0], g = c[1], e = "01") : 1 === c.length && (f = c[0], e = g = "01");
		return moment(f + "-" + g + "-" + e).format(d)
	};
	this._sortData = function(b) {
		b.sort(function(b, c) {
			return "desc" === a._options.order ? parseInt(c.date.replace(/-/g, ""), 10) - parseInt(b.date.replace(/-/g, ""), 10) : parseInt(b.date.replace(/-/g,
				""), 10) - parseInt(c.date.replace(/-/g, ""), 10)
		});
		return b
	};
	this._display = function() {
		!0 !== $(document).data("timeline_events_binded") && $(document).data("timeline_events_binded", !0).click(a._handleClick).keydown(a._handleKeyDown);
		a._options.lightbox && (a._overlay = $(".timeline_overlay"), a._overlay.length ? a._lightbox = a._overlay.children(".lightbox") : (a._overlay = $("<div>").addClass("timeline_overlay"), a._lightbox = $("<div>").addClass("lightbox").html('<span class="prev"></span><span class="next"></span>').appendTo(a._overlay),
			a._overlay.appendTo(s)));
		a._container = $("<div>").addClass("timeline " + a._options.columnMode);
		$.support.opacity || a._container.addClass("opacityFilter");
		a._use_css3 || a._container.addClass("noneCSS3");
		a._spine = $("<div>").addClass("spine").appendTo(a._container);
		a._options.animation || a._spine.addClass("animated");
		a._render(a._data);
		a._container.data("loaded", !0).appendTo(h);
		a._options.animation ? setTimeout(function() {
			a._startAnimation(a._processIframeQueue)
		}, 200) : a._processIframeQueue();
		return !0
	};
	this._openLightBox =
		function(b, d) {
			b.parent().addClass("loading");
			"gallery" === b.data("type") || "slider" === b.data("type") ? (a._lightbox.children("span").show(), a._lightbox.data("magnifier", b), a._toggleLightBoxControl(parseInt(b.data("total"), 10), parseInt(b.data("order"), 10))) : a._lightbox.children("span").hide();
			setTimeout(function() {
				var c = new Image;
				c.onload = function() {
					b.parent().removeClass("loading");
					a._overlay.addClass("open");
					$("<img>").attr("src", d).appendTo(a._lightbox);
					var f = a._getLightboxSize(c.width, c.height),
						f = {
							width: f.width,
							height: f.height,
							margin: "-" + f.height / 2 + "px 0px 0px -" + f.width / 2 + "px"
						};
					a._use_css3 ? a._lightbox.addClass("loaded").css(f) : a._lightbox.css(f).animate({
						top: "50%",
						opacity: 1
					}, 300, function() {
						a._lightbox.addClass("loaded")
					})
				};
				c.src = d
			}, 1E3);
			return d
	};
	this._closeLightBox = function(b) {
		a._use_css3 ? a._lightbox.removeClass("loaded") : a._lightbox.animate({
			top: 0,
			opacity: 0
		}, 300, function() {
			a._lightbox.removeClass("loaded")
		});
		setTimeout(function() {
				a._overlay.removeClass("open");
				a._lightbox.removeAttr("style").children("img").remove()
			},
			300)
	};
	this._getLightboxSize = function(a, d) {
		var c = 0.9 * $(window).width(),
			f = 0.9 * $(window).height(),
			g = a,
			e = d;
		if (a > c || d > f) a > c && d <= f ? (g = c, e = d / (a / g)) : d > f && a <= c ? (e = f, g = a / (d / e)) : (g = c, e = d / (a / g), e > f && (e = f, g = a / (d / e)));
		return {
			width: g,
			height: e
		}
	};
	this._navLightBox = function(b, d) {
		var c = "next" === d ? a._lightbox.data("magnifier").parents(".img_container:first").next().find("span.magnifier") : a._lightbox.data("magnifier").parents(".img_container:first").prev().find("span.magnifier"),
			f = c.data("img"),
			g = new Image;
		g.onload = function() {
			a._lightbox.data("magnifier",
				c).addClass("updating");
			a._lightbox.children("img").attr("src", f);
			var b = a._getLightboxSize(g.width, g.height),
				b = {
					width: b.width,
					height: b.height,
					margin: "-" + b.height / 2 + "px 0px 0px -" + b.width / 2 + "px"
				};
			a._use_css3 ? a._lightbox.css(b) : a._lightbox.animate(b, 500);
			a._toggleLightBoxControl(parseInt(c.data("total"), 10), parseInt(c.data("order"), 10));
			setTimeout(function() {
				a._lightbox.removeClass("updating")
			}, 500)
		};
		g.src = f
	};
	this._toggleLightBoxControl = function(b, d) {
		1 >= b ? a._lightbox.children("span").hide() : (0 === d ?
			a._lightbox.children("span.prev").hide() : a._lightbox.children("span.prev").show(), d === b - 1 ? a._lightbox.children("span.next").hide() : a._lightbox.children("span.next").show())
	};
	this._processIframeQueue = function() {
		$(a._iframe_queue).each(function(a, d) {
			d.element.removeClass("loading").html('<iframe frameborder="0" src="' + d.url + '"></iframe>')
		})
	};
	this._handleClick = function(b) {
		var d = $(b.target);
		d.hasClass("timeline_overlay") ? a._closeLightBox(b) : d.hasClass("magnifier") ? a._openLightBox(d, d.data("img")) : d.hasClass("prev") ?
			a._navLightBox(d, "prev") : d.hasClass("next") ? a._navLightBox(d, "next") : d.hasClass("slider_prev") ? a._updateSlider(d.parents(".timeline_element:first"), "prev") : d.hasClass("slider_next") ? a._updateSlider(d.parents(".timeline_element:first"), "next") : d.hasClass("del") && a._deleteElement(d.data("timeline_element"));
		return !0
	};
	this._handleKeyDown = function(b) {
		switch (parseInt(b.which, 10)) {
			case 27:
				a._overlay.hasClass("open") && a._closeLightBox(b);
				break;
			case 37:
				if (a._lightbox.hasClass("loaded") && a._lightbox.children("span.prev").is(":visible")) return a._lightbox.children("span.prev").click(), !1;
				break;
			case 39:
				if (a._lightbox.hasClass("loaded") && a._lightbox.children("span.next").is(":visible")) return a._lightbox.children("span.next").click(), !1
		}
	};
	this._loadFacebook = function(b) {
		var d = {
			access_token: a._options.facebookAccessToken
		}, c = [],
			f = 0,
			g = function() {
				a._data = c;
				b !== r && b();
				if (a._options.onSearchSuccess) a._options.onSearchSuccess(p)
			}, e = function(a) {
				var b = '<div class="facebook_type_' + a.type + '">',
					b = b + ('<div class="facebook_left_column"><img class="facebook_profile" src="https://graph.facebook.com/' +
						a.from.id + '/picture?type=square" /></div>'),
					b = b + '<div class="facebook_right_column">';
				a.message && (b += '<div class="facebook_content">' + a.message.substr(0, 300).parseURL() + "</div>");
				return b += '</div><div style="clear:both;"></div>'
			}, h = function(b, d) {
				var g = b.updated_time.split("-"),
					f = g[0],
					e = g[1],
					g = g[2].substr(0, 2);
				c.push({
					type: "blog_post",
					date: f + "-" + e + "-" + g,
					title: b.from.name,
					content: d,
					width: a._options.defaultElementWidth
				})
			};
		FB.api("/" + a._options.facebookPageId + "/feed", d, function(b) {
			if (b && b.data && b.data.length) $(b.data).each(function(a,
				b) {
				if (b.from.id)
					if ("photo" === b.type) f++, FB.api("/" + b.object_id, d, function(a) {
						var c = e(b);
						a.source && (c += '<div class="facebook_post"><a href="' + b.link + '" style="display:inline;"><img class="facebook_picture" align="left" src="' + a.source + '" /></a></div>');
						h(b, c + "</div>");
						f--;
						0 === f && g()
					});
					else
				if (b.message) {
					var c = e(b);
					b.picture && (c += '<div class="facebook_post"><a href="' + b.link + '" style="display:inline;"><img class="facebook_picture" align="left" src="' + b.picture + '" /></a><div class="description_container">' +
						(b.name ? '<a href="' + b.link + '">' + b.name + "</a>" : "") + (b.caption ? '<div class="facebook_caption">' + b.caption + "</div>" : "") + (b.description ? '<div class="facebook_description">' + b.description + "</div>" : "") + "</div></div>");
					h(b, c + "</div>")
				}
			}), 0 === f && g();
			else if (a._options.onSearchError) a._options.onSearchError(b)
		})
	};
	this._loadTwitter = function(b) {
		$.getJSON("http://api.melonhtml5.com/?action=twittersearch&q=" + a._options.twitterSearchKey + "&callback=?", function(d) {
			var c = [];
			if (d.statuses.length) {
				if ($(d.statuses).each(function(b,
					d) {
					var e = [];
					e.Jan = "01";
					e.Feb = "02";
					e.Mar = "03";
					e.Apr = "04";
					e.May = "05";
					e.Jun = "06";
					e.Jul = "07";
					e.Aug = "08";
					e.Sep = "09";
					e.Oct = "10";
					e.Nov = "11";
					e.Dec = "12";
					var h = d.created_at.split(" ");
					c.push({
						type: "blog_post",
						date: h[5] + "-" + e[h[1]] + "-" + h[2],
						title: '<a href="http://www.twitter.com/' + d.user.screen_name + '" target="_blank" style="text-decoration:none;color:#AAAAAA;">' + d.user.screen_name + "</a>",
						content: '<div><img style="margin:0px 5px 5px 0px;" align="left" src="' + d.user.profile_image_url + '" /></div>' + d.text.parseURL().parseHashtag(),
						width: a._options.defaultElementWidth
					})
				}), a._data = c, b !== r && b(), a._options.onSearchSuccess) a._options.onSearchSuccess(d)
			} else if (a._options.onSearchError) a._options.onSearchError(d)
		})
	};
	this.setOptions = function(b) {
		a._options = $.extend(a._options, b);
		return a._options
	};
	this.display = function() {
		a._data ? a._display() : a._options.twitterSearchKey ? a._loadTwitter(a._display) : a._options.facebookAccessToken && a._options.facebookPageId && FB && a._loadFacebook(a._display)
	};
	this.appendData = function(b) {
		var d = parseInt(a._data[a._data.length -
			1].date.replace(/-/g, ""), 10),
			c = [];
		"desc" === a._options.order ? $(b).each(function(a, b) {
			parseInt(b.date.replace(/-/g, ""), 10) <= d && c.push(b)
		}) : $(b).each(function(a, b) {
			parseInt(b.date.replace(/-/g, ""), 10) >= d && c.push(b)
		});
		a._data = a._data.concat(c);
		a._render(c, !0);
		a._options.animation ? a._startAnimation(a._processIframeQueue, !0) : a._processIframeQueue()
	}
};