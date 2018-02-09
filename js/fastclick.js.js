/* @update: 2015-3-3 16:3:3 */
var Zepto = function() {
		function t(t) {
			return null == t ? t + "" : V[Y.call(t)] || "object"
		}
		function e(e) {
			return "function" == t(e)
		}
		function n(t) {
			return null != t && t == t.window
		}
		function i(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}
		function r(e) {
			return "object" == t(e)
		}
		function o(t) {
			return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
		}
		function a(t) {
			return "number" == typeof t.length
		}
		function s(t) {
			return M.call(t, function(t) {
				return null != t
			})
		}
		function u(t) {
			return t.length > 0 ? j.fn.concat.apply([], t) : t
		}
		function c(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function l(t) {
			return t in D ? D[t] : D[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
		}
		function f(t, e) {
			return "number" != typeof e || Z[c(t)] ? e : e + "px"
		}
		function h(t) {
			var e, n;
			return $[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), $[t] = n), $[t]
		}
		function p(t) {
			return "children" in t ? L.call(t.children) : j.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : E
			})
		}
		function d(t, e) {
			var n, i = t ? t.length : 0;
			for (n = 0; i > n; n++) this[n] = t[n];
			this.length = i, this.selector = e || ""
		}
		function m(t, e, n) {
			for (T in e) n && (o(e[T]) || K(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), K(e[T]) && !K(t[T]) && (t[T] = []), m(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T])
		}
		function g(t, e) {
			return null == e ? j(t) : j(t).filter(e)
		}
		function v(t, n, i, r) {
			return e(n) ? n.call(t, i, r) : n
		}
		function x(t, e) {
			var n = t.className || "",
				i = n && n.baseVal !== E;
			return e === E ? i ? n.baseVal : n : (i ? n.baseVal = e : t.className = e, E)
		}
		function w(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? j.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}
		function b(t, e) {
			e(t);
			for (var n = 0, i = t.childNodes.length; i > n; n++) b(t.childNodes[n], e)
		}
		var E, T, j, C, S, N, P = [],
			O = P.concat,
			M = P.filter,
			L = P.slice,
			A = window.document,
			$ = {},
			D = {},
			$ = /^\s*<(\w+|!)[^>]*>/,
			R = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			k = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			q = /^(?:body|html)$/i,
			z = /([A-Z])/g,
			F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			_ = ["after", "prepend", "before", "append"],
			I = A.createElement("table"),
			H = A.createElement("tr"),
			U = {
				tr: A.createElement("tbody"),
				tbody: I,
				thead: I,
				tfoot: I,
				td: H,
				th: H,
				"*": A.createElement("div")
			},
			X = /complete|loaded|interactive/,
			B = /^[\w-]*$/,
			V = {},
			Y = V.toString,
			J = {},
			K = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return J.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var i, r = t.parentNode,
				o = !r;
			return o && (r = W).appendChild(t), i = ~J.qsa(r, e).indexOf(t), o && W.removeChild(t), i
		}, S = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, N = function(t) {
			return M.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, J.fragment = function(t, e, n) {
			var i, r, a;
			return R.test(t) && (i = j(A.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(k, "<$1></$2>")), e === E && (e = $.test(t) && RegExp.$1), e in U || (e = "*"), a = U[e], a.innerHTML = "" + t, i = j.each(L.call(a.childNodes), function() {
				a.removeChild(this)
			})), o(n) && (r = j(i), j.each(n, function(t, e) {
				F.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
			})), i
		}, J.Z = function(t, e) {
			return new d(t, e)
		}, J.isZ = function(t) {
			return t instanceof J.Z
		}, J.init = function(t, n) {
			var i;
			if (!t) return J.Z();
			if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && $.test(t)) i = J.fragment(t, RegExp.$1, n), t = null;
			else {
				if (n !== E) return j(n).find(t);
				i = J.qsa(A, t)
			} else {
				if (e(t)) return j(A).ready(t);
				if (J.isZ(t)) return t;
				if (K(t)) i = s(t);
				else if (r(t)) i = [t], t = null;
				else if ($.test(t)) i = J.fragment(t.trim(), RegExp.$1, n), t = null;
				else {
					if (n !== E) return j(n).find(t);
					i = J.qsa(A, t)
				}
			}
			return J.Z(i, t)
		}, j = function(t, e) {
			return J.init(t, e)
		}, j.extend = function(t) {
			var e, n = L.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				m(t, n, e)
			}), t
		}, J.qsa = function(t, e) {
			var n, i = "#" == e[0],
				r = !i && "." == e[0],
				o = i || r ? e.slice(1) : e,
				a = B.test(o);
			return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : L.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, j.contains = A.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, j.type = t, j.isFunction = e, j.isWindow = n, j.isArray = K, j.isPlainObject = o, j.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, j.inArray = function(t, e, n) {
			return P.indexOf.call(e, t, n)
		}, j.camelCase = S, j.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, j.uuid = 0, j.support = {}, j.expr = {}, j.noop = function() {}, j.map = function(t, e) {
			var n, i, r, o = [];
			if (a(t)) for (i = 0; t.length > i; i++) n = e(t[i], i), null != n && o.push(n);
			else for (r in t) n = e(t[r], r), null != n && o.push(n);
			return u(o)
		}, j.each = function(t, e) {
			var n, i;
			if (a(t)) {
				for (n = 0; t.length > n; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
			return t
		}, j.grep = function(t, e) {
			return M.call(t, e)
		}, window.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			V["[object " + e + "]"] = e.toLowerCase()
		}), j.fn = {
			constructor: J.Z,
			length: 0,
			forEach: P.forEach,
			reduce: P.reduce,
			push: P.push,
			sort: P.sort,
			splice: P.splice,
			indexOf: P.indexOf,
			concat: function() {
				var t, e, n = [];
				for (t = 0; arguments.length > t; t++) e = arguments[t], n[t] = J.isZ(e) ? e.toArray() : e;
				return O.apply(J.isZ(this) ? this.toArray() : this, n)
			},
			map: function(t) {
				return j(j.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return j(L.apply(this, arguments))
			},
			ready: function(t) {
				return X.test(A.readyState) && A.body ? t(j) : A.addEventListener("DOMContentLoaded", function() {
					t(j)
				}, !1), this
			},
			get: function(t) {
				return t === E ? L.call(this) : this[t >= 0 ? t : t + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return P.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return e(t) ? this.not(this.not(t)) : j(M.call(this, function(e) {
					return J.matches(e, t)
				}))
			},
			add: function(t, e) {
				return j(N(this.concat(j(t, e))))
			},
			is: function(t) {
				return this.length > 0 && J.matches(this[0], t)
			},
			has: function(t) {
				return this.filter(function() {
					return r(t) ? j.contains(this, t) : j(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !r(t) ? t : j(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !r(t) ? t : j(t)
			},
			find: function(t) {
				var e, n = this;
				return e = t ? "object" == typeof t ? j(t).filter(function() {
					var t = this;
					return P.some.call(n, function(e) {
						return j.contains(e, t)
					})
				}) : 1 == this.length ? j(J.qsa(this[0], t)) : this.map(function() {
					return J.qsa(this, t)
				}) : j()
			},
			closest: function(t, e) {
				var n = this[0],
					r = !1;
				for ("object" == typeof t && (r = j(t)); n && !(r ? r.indexOf(n) >= 0 : J.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
				return j(n)
			},
			parents: function(t) {
				for (var e = [], n = this; n.length > 0;) n = j.map(n, function(t) {
					return (t = t.parentNode) && !i(t) && 0 > e.indexOf(t) ? (e.push(t), t) : E
				});
				return g(e, t)
			},
			parent: function(t) {
				return g(N(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return g(this.map(function() {
					return p(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return L.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return g(this.map(function(t, e) {
					return M.call(p(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return j.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var n = e(t);
				if (this[0] && !n) var i = j(t).get(0),
					r = i.parentNode || this.length > 1;
				return this.each(function(e) {
					j(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					j(this[0]).before(t = j(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					j(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var n = e(t);
				return this.each(function(e) {
					var i = j(this),
						r = i.contents(),
						o = n ? t.call(this, e) : t;
					r.length ? r.wrapAll(o) : i.append(o)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					j(this).replaceWith(j(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(t) {
				return this.each(function() {
					var e = j(this);
					(t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
				})
			},
			//下面重点
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = v(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var n = j(this),
						i = v(this, t, e, n.offset()),
						r = n.offsetParent().offset(),
						o = {
							top: i.top - r.top,
							left: i.left - r.left
						};
					"static" == n.css("position") && (o.position = "relative"), n.css(o)
				});
				if (!this.length) return null;
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(e, n) {
				if (2 > arguments.length) {
					var i, r = this[0];
					if (!r) return;
					if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[S(e)] || i.getPropertyValue(e);
					if (K(e)) {
						var o = {};
						return j.each(e, function(t, e) {
							o[e] = r.style[S(e)] || i.getPropertyValue(e)
						}), o
					}
				}
				var a = "";
				if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function() {
					this.style.removeProperty(c(e))
				});
				else for (T in e) e[T] || 0 === e[T] ? a += c(T) + ":" + f(T, e[T]) + ";" : this.each(function() {
					this.style.removeProperty(c(T))
				});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return t ? P.some.call(this, function(t) {
					return this.test(x(t))
				}, l(t)) : !1
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						C = [];
						var n = x(this),
							i = v(this, t, e, n);
						i.split(/\s+/g).forEach(function(t) {
							j(this).hasClass(t) || C.push(t)
						}, this), C.length && x(this, n + (n ? " " : "") + C.join(" "))
					}
				}) : this
			},
			removeClass: function(t) {
				return this.each(function(e) {
					if ("className" in this) {
						if (t === E) return x(this, "");
						C = x(this), v(this, t, e, C).split(/\s+/g).forEach(function(t) {
							C = C.replace(l(t), " ")
						}), x(this, C.trim())
					}
				})
			},
			toggleClass: function(t, e) {
				return t ? this.each(function(n) {
					var i = j(this),
						r = v(this, t, n, x(this));
					r.split(/\s+/g).forEach(function(t) {
						(e === E ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
					})
				}) : this
			},
			scrollTop: function(t) {
				if (this.length) {
					var e = "scrollTop" in this[0];
					return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ?
					function() {
						this.scrollTop = t
					} : function() {
						this.scrollTo(this.scrollX, t)
					})
				}
			},
			scrollLeft: function(t) {
				if (this.length) {
					var e = "scrollLeft" in this[0];
					return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ?
					function() {
						this.scrollLeft = t
					} : function() {
						this.scrollTo(t, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						n = this.offset(),
						i = q.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return n.top -= parseFloat(j(t).css("margin-top")) || 0, n.left -= parseFloat(j(t).css("margin-left")) || 0, i.top += parseFloat(j(e[0]).css("border-top-width")) || 0, i.left += parseFloat(j(e[0]).css("border-left-width")) || 0, {
						top: n.top - i.top,
						left: n.left - i.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || A.body; t && !q.test(t.nodeName) && "static" == j(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function(t) {
			var e = t.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			j.fn[t] = function(r) {
				var o, a = this[0];
				return r === E ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
					a = j(this), a.css(t, v(this, r, e, a[t]()))
				})
			}
		}), _.forEach(function(e, n) {
			var i = n % 2;
			j.fn[e] = function() {
				var e, r, o = j.map(arguments, function(n) {
					return e = t(n), "object" == e || "array" == e || null == n ? n : J.fragment(n)
				}),
					a = this.length > 1;
				return 1 > o.length ? this : this.each(function(t, e) {
					r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
					var s = j.contains(A.documentElement, r);
					o.forEach(function(t) {
						if (a) t = t.cloneNode(!0);
						else if (!r) return j(t).remove();
						r.insertBefore(t, e), s && b(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, j.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
				return j(t)[e](this), this
			}
		}), J.Z.prototype = d.prototype = j.fn, J.uniq = N, J.deserializeValue = w, j.zepto = J, j
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function e(e, n, i) {
		var r = t.Event(n);
		return t(e).trigger(r, i), !r.isDefaultPrevented()
	}
	function n(t, n, i, r) {
		return t.global ? e(n || y, i, r) : void 0
	}
	function i(e) {
		e.global && 0 === t.active++ && n(e, null, "ajaxStart")
	}
	function r(e) {
		e.global && !--t.active && n(e, null, "ajaxStop")
	}
	function o(t, e) {
		var i = e.context;
		return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : (n(e, i, "ajaxSend", [t, e]), void 0)
	}
	function a(t, e, i, r) {
		var o = i.context,
			a = "success";
		i.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), n(i, o, "ajaxSuccess", [e, i, t]), u(a, e, i)
	}
	function s(t, e, i, r, o) {
		var a = r.context;
		r.error.call(a, i, e, t), o && o.rejectWith(a, [i, e, t]), n(r, a, "ajaxError", [i, r, t || e]), u(e, i, r)
	}
	function u(t, e, i) {
		var o = i.context;
		i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
	}
	function c() {}
	function l(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : w.test(t) ? "script" : b.test(t) && "xml") || "text"
	}
	function f(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function h(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
	}
	function p(e, n, i, r) {
		return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
			url: e,
			data: n,
			success: i,
			dataType: r
		}
	}
	function d(e, n, i, r) {
		var o, a = t.isArray(n),
			s = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u)
		})
	}
	var m, g, v = 0,
		y = window.document,
		x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		w = /^(?:text|application)\/javascript/i,
		b = /^(?:text|application)\/xml/i,
		E = "application/json",
		T = "text/html",
		j = /^\s*$/,
		C = y.createElement("a");
	C.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
		if (!("type" in e)) return t.ajax(e);
		var i, r, u = e.jsonpCallback,
			c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v,
			l = y.createElement("script"),
			f = window[c],
			h = function(e) {
				t(l).triggerHandler("error", e || "abort")
			},
			p = {
				abort: h
			};
		return n && n.promise(p), t(l).on("load error", function(o, u) {
			clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
		}), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function() {
			i = arguments
		}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
			h("timeout")
		}, e.timeout)), p)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: c,
		success: c,
		error: c,
		complete: c,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: E,
			xml: "application/xml, text/xml",
			html: T,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var n, r = t.extend({}, e || {}),
			u = t.Deferred && t.Deferred();
		for (m in t.ajaxSettings) void 0 === r[m] && (r[m] = t.ajaxSettings[m]);
		i(r), r.crossDomain || (n = y.createElement("a"), n.href = r.url, n.href = n.href, r.crossDomain = C.protocol + "//" + C.host != n.protocol + "//" + n.host), r.url || (r.url = "" + window.location), h(r);
		var p = r.dataType,
			d = /\?.+=\?/.test(r.url);
		if (d && (p = "jsonp"), r.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (r.url = f(r.url, "_=" + Date.now())), "jsonp" == p) return d || (r.url = f(r.url, r.jsonp ? r.jsonp + "=?" : r.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(r, u);
		var v, x = r.accepts[p],
			w = {},
			b = function(t, e) {
				w[t.toLowerCase()] = [t, e]
			},
			E = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1 : window.location.protocol,
			T = r.xhr(),

			S = T.setRequestHeader;
		if (u && u.promise(T), r.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", x || "*/*"), (x = r.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), T.overrideMimeType && T.overrideMimeType(x)), (r.contentType || r.contentType !== !1 && r.data && "GET" != r.type.toUpperCase()) && b("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers) for (g in r.headers) b(g, r.headers[g]);
		if (T.setRequestHeader = b, T.onreadystatechange = function() {
			if (4 == T.readyState) {
				T.onreadystatechange = c, clearTimeout(v);
				var e, n = !1;
				if (T.status >= 200 && 300 > T.status || 304 == T.status || 0 == T.status && "file:" == E) {
					p = p || l(r.mimeType || T.getResponseHeader("content-type")), e = T.responseText;
					try {
						"script" == p ? (1, eval)(e) : "xml" == p ? e = T.responseXML : "json" == p && (e = j.test(e) ? null : t.parseJSON(e))
					} catch (i) {
						n = i
					}
					n ? s(n, "parsererror", T, r, u) : a(e, T, r, u)
				} else s(T.statusText || null, T.status ? "error" : "abort", T, r, u)
			}
		}, o(T, r) === !1) return T.abort(), s(null, "abort", T, r, u), T;
		if (r.xhrFields) for (g in r.xhrFields) T[g] = r.xhrFields[g];
		var N = "async" in r ? r.async : !0;
		T.open(r.type, r.url, N, r.username, r.password);
		for (g in w) S.apply(T, w[g]);
		return r.timeout > 0 && (v = setTimeout(function() {
			T.onreadystatechange = c, T.abort(), s(null, "timeout", T, r, u)
		}, r.timeout)), T.send(r.data ? r.data : null), T
	}, t.get = function() {
		return t.ajax(p.apply(null, arguments))
	}, t.post = function() {
		var e = p.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = p.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, i) {
		if (!this.length) return this;
		var r, o = this,
			a = e.split(/\s/),
			s = p(e, n, i),
			u = s.success;
		return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(e) {
			o.html(r ? t("<div>").html(e.replace(x, "")).find(r) : e), u && u.apply(o, arguments)
		}, t.ajax(s), this
	};
	var S = encodeURIComponent;
	t.param = function(e, n) {
		var i = [];
		return i.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(S(e) + "=" + S(n))
		}, d(i, e, n), i.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	function e(t) {
		return t._zid || (t._zid = h++)
	}
	function n(t, n, o, a) {
		if (n = i(n), n.ns) var s = r(n.ns);
		return (g[e(t)] || []).filter(function(t) {
			return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
		})
	}
	function i(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function r(t) {
		return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function o(t, e) {
		return t.del && !y && t.e in x || !! e
	}
	function a(t) {
		return w[t] || y && x[t] || t
	}
	function s(n, r, s, u, l, h, p) {
		var d = e(n),
			m = g[d] || (g[d] = []);
		r.split(/\s/).forEach(function(e) {
			if ("ready" == e) return t(document).ready(s);
			var r = i(e);
			r.fn = s, r.sel = l, r.e in w && (s = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : f
			}), r.del = h;
			var d = h || s;
			r.proxy = function(t) {
				if (t = c(t), !t.isImmediatePropagationStopped()) {
					t.data = u;
					var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
					return e === !1 && (t.preventDefault(), t.stopPropagation()), e
				}
			}, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
		})
	}
	function u(t, i, r, s, u) {
		var c = e(t);
		(i || "").split(/\s/).forEach(function(e) {
			n(t, e, r, s).forEach(function(e) {
				delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))

			})
		})
	}
	function c(e, n) {
		return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(j, function(t, i) {
			var r = n[t];
			e[t] = function() {
				return this[i] = b, r && r.apply(n, arguments)
			}, e[i] = E
		}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
	}
	function l(t) {
		var e, n = {
			originalEvent: t
		};
		for (e in t) T.test(e) || t[e] === f || (n[e] = t[e]);
		return c(n, t)
	}
	var f, h = 1,
		p = Array.prototype.slice,
		d = t.isFunction,
		m = function(t) {
			return "string" == typeof t
		},
		g = {},
		v = {},
		y = "onfocusin" in window,
		x = {
			focus: "focusin",
			blur: "focusout"
		},
		w = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
		add: s,
		remove: u
	}, t.proxy = function(n, i) {
		var r = 2 in arguments && p.call(arguments, 2);
		if (d(n)) {
			var o = function() {
					return n.apply(i, r ? r.concat(p.call(arguments)) : arguments)
				};
			return o._zid = e(n), o
		}
		if (m(i)) return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, i) {
		return this.on(t, e, n, i, 1)
	};
	var b = function() {
			return !0
		},
		E = function() {
			return !1
		},
		T = /^([A-Z]|returnValue$|layer[XY]$)/,
		j = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, n, i, r, o) {
		var a, c, h = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			h.on(t, n, i, e, o)
		}), h) : (m(n) || d(r) || r === !1 || (r = i, i = n, n = f), (d(i) || i === !1) && (r = i, i = f), r === !1 && (r = E), h.each(function(h, d) {
			o && (a = function(t) {
				return u(d, t.type, r), r.apply(this, arguments)
			}), n && (c = function(e) {
				var i, o = t(e.target).closest(n, d).get(0);
				return o && o !== d ? (i = t.extend(l(e), {
					currentTarget: o,
					liveFired: d
				}), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : f
			}), s(d, e, r, i, n, c || a)
		}))
	}, t.fn.off = function(e, n, i) {
		var r = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			r.off(t, n, e)
		}), r) : (m(n) || d(i) || i === !1 || (i = n, n = f), i === !1 && (i = E), r.each(function() {
			u(this, e, i, n)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
			e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, i) {
		var r, o;
		return this.each(function(a, s) {
			r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function(t, e) {
				return o = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : f
			})
		}), o
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		m(t) || (e = t, t = e.type);
		var n = document.createEvent(v[t] || "Events"),
			i = !0;
		if (e) for (var r in e)"bubbles" == r ? i = !! e[r] : n[r] = e[r];
		return n.initEvent(t, i, !0), c(n)
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, i = [],
			r = function(t) {
				return t.forEach ? t.forEach(r) : (i.push({
					name: e,
					value: t
				}), void 0)
			};
		return this[0] && t.each(this[0].elements, function(i, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
		}), i
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t, e) {
	function n(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}
	function i(t) {
		return r ? r + t : t.toLowerCase()
	}
	var r, o, a, s, u, c, l, f, h, p, d = "",
		m = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		g = window.document,
		v = g.createElement("div"),
		y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		x = {};
	t.each(m, function(t, n) {
		return v.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", r = n, !1) : e
	}), o = d + "transform", x[a = d + "transition-property"] = x[s = d + "transition-duration"] = x[c = d + "transition-delay"] = x[u = d + "transition-timing-function"] = x[l = d + "animation-name"] = x[f = d + "animation-duration"] = x[p = d + "animation-delay"] = x[h = d + "animation-timing-function"] = "", t.fx = {
		off: r === e && v.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: d,
		transitionEnd: i("TransitionEnd"),
		animationEnd: i("AnimationEnd")
	}, t.fn.animate = function(n, i, r, o, a) {
		return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
	}, t.fn.anim = function(i, r, d, m, g) {
		var v, w, b, E = {},
			T = "",
			j = this,
			C = t.fx.transitionEnd,
			S = !1;
		if (r === e && (r = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (r = 0), "string" == typeof i) E[l] = i, E[f] = r + "s", E[p] = g + "s", E[h] = d || "linear", C = t.fx.animationEnd;
		else {
			w = [];
			for (v in i) y.test(v) ? T += v + "(" + i[v] + ") " : (E[v] = i[v], w.push(n(v)));
			T && (E[o] = T, w.push(o)), r > 0 && "object" == typeof i && (E[a] = w.join(", "), E[s] = r + "s", E[c] = g + "s", E[u] = d || "linear")
		}
		return b = function(n) {
			if (n !== e) {
				if (n.target !== n.currentTarget) return;
				t(n.target).unbind(C, b)
			} else t(this).unbind(C, b);
			S = !0, t(this).css(x), m && m.call(this)
		}, r > 0 && (this.bind(C, b), setTimeout(function() {
			S || b.call(j)
		}, 1e3 * (r + g) + 25)), this.size() && this.get(0).clientLeft, this.css(E), 0 >= r && setTimeout(function() {
			j.each(function() {
				b.call(this)
			})
		}, 0), this
	}, v = null
}(Zepto), function(t, e) {
	function n(n, i, r, o, a) {
		"function" != typeof i || a || (a = i, i = e);
		var s = {
			opacity: r
		};
		return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
	}
	function i(e, i, r, o) {
		return n(e, i, 0, r, function() {
			a.call(t(this)), o && o.call(this)
		})
	}
	var r = window.document,
		o = (r.documentElement, t.fn.show),
		a = t.fn.hide,
		s = t.fn.toggle;
	t.fn.show = function(t, i) {
		return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
	}, t.fn.hide = function(t, n) {
		return t === e ? a.call(this) : i(this, t, "0,0", n)
	}, t.fn.toggle = function(n, i) {
		return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
			var e = t(this);
			e["none" == e.css("display") ? "show" : "hide"](n, i)
		})
	}, t.fn.fadeTo = function(t, e, i) {
		return n(this, t, e, null, i)
	}, t.fn.fadeIn = function(t, e) {
		var n = this.css("opacity");
		return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
	}, t.fn.fadeOut = function(t, e) {
		return i(this, t, null, e)
	}, t.fn.fadeToggle = function(e, n) {
		return this.each(function() {
			var i = t(this);
			i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
		})
	}
}(Zepto), 
!
function() {
	"use strict";

	function t(e, o) {
		function i(t, e) {
			return function() {
			}
		}
		var r;
		if (o = o || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = o.touchBoundary || 10, this.layer = e, this.tapDelay = o.tapDelay || 200, this.tapTimeout = o.tapTimeout || 700, !t.notNeeded(e)) {
			for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], c = this, s = 0, u = a.length; u > s; s++) c[a[s]] = i(c[a[s]], c);
			n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, o) {
				var i = Node.prototype.removeEventListener;
				"click" === t ? i.call(e, t, n.hijacked || n, o) : i.call(e, t, n, o)
			}, e.addEventListener = function(t, n, o) {
				var i = Node.prototype.addEventListener;
				"click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(t) {
					t.propagationStopped || n(t)
				}), o) : i.call(e, t, n, o)
			}), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function(t) {
				r(t)
			}, !1), e.onclick = null)
		}
	}
	var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
		n = navigator.userAgent.indexOf("Android") > 0 && !e,
		o = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
		i = o && /OS 4_\d(_\d)?/.test(navigator.userAgent),
		r = o && /OS [6-7]_\d/.test(navigator.userAgent),
		a = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.sendClick = function(t, e) {
		var n, o;
		document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
	}, t.prototype.getTargetElementFromEventTarget = function(t) {
		return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
	}, t.prototype.onTouchStart = function(t) {
		var e, n, r;
		if (t.targetTouches.length > 1) return !0;
		e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0];
		var a = e.nodeName.toLowerCase(),
			c = e.getAttribute("type");
		return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
	}, t.notNeeded = function(t) {
		var e, o, i, r;
		return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
	}, t.attach = function(e, n) {
		return new t(e, n)
	}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		return t
	}) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}();