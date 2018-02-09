/* @update: 2016-9-27 18:35:35 */
!
function($, t) {
	function i(t) {
		if ($.extend(this, c, t), this.pages.length <= 0) throw new Error("target para not pass");
		this.target = this.pages.eq(0).parent(), this.length = this.pages.length, this.moveTo = i.prototype.moveTo, this.index = 0, this.curPage = this.pages.eq(this.index), this.timer = null, o = this.gestureFollowing, "vertical" !== this.direction && "v" !== this.direction || (this.direction = "v"), "horizontal" !== this.direction && "h" !== this.direction || (this.direction = "h"), this.length <= 1 || this._init()
	}

	var e, n, s, a, o, r, h, c = {
		direction: "vertical",
		currentClass: "current",
		gestureFollowing: !1,
		hasDot: !1,
		rememberLastVisited: !1,
		preventDefault: !0,
		animationPlayOnce: !1,
		dev: !1,
		onSwipeUp: function() {},
		onSwipeDown: function() {},
		onSwipeLeft: function() {},
		onSwipeRight: function() {},
		oninit: function() {},
		onbeforechange: function() {},
		onchange: function() {}
	},
		l = document.documentElement.clientWidth,
		d = document.documentElementclientHeight;
	i.prototype = {
		_init: function() {
			var t = this;
			this.target.css("-webkit-transition", "-webkit-transform 0.3s ease"), this.pages.each(function() {
				var t = $(this),
					i = t.wrapInner('<div class="PageSlider__wraper"></div>').find(".PageSlider__wraper"),
					e = i.height();
				e > d && (t.data("height", e), t.css("overflow", "auto")), i.children().unwrap()
			}), "h" === this.direction && (this.target.css("position", "relative"), this.pages.each(function(t) {
				$(this).css({
					position: "absolute",
					left: 100 * t + "%",
					top: 0
				})
			})), this.hasDot && this._createDot(), t._bindAnimation(), this.target.on("touchstart", function(i) {
				t._startHandle(i)
			}), this.target.on("touchmove", function(i) {
				
			}), this.target.on("touchend", function(i) {
				t._endHandle(i)
			}), this.rememberLastVisited && (this.lastVisitedIndex = this._getLastVisited()), this.target.css("-webkit-transform", "translate(0, 0)"), this.pages.eq(0).addClass(this.currentClass), this.oninit.call(this), this._dev()
		},
		_startHandle: function(t) {
			var i = t.touches[0];
			return "running" === s ? void t.preventDefault() : (a = "v" === this.direction ? i.clientY : i.clientX)
		},
		_endHandle: function(t) {
			var i, o, r = t.changedTouches[0];
			return "running" === s ? void t.preventDefault() : (o = "v" === this.direction ? r.clientY : r.clientX, i = o - a, this._setTransition(), i > 100 && ("v" === this.direction ? this.onSwipeDown.call(this) : this.onSwipeRight.call(this), n || (i > 20 ? this.prev() : this.moveTo(this.index))), void(-100 > i && ("v" === this.direction ? this.onSwipeUp.call(this) : this.onSwipeLeft.call(this), e || (-20 > i ? this.next() : this.moveTo(this.index)))))
		},
		moveTo: function(t, i) {
			var e, n = this;
			return s = "running", i = i || !1, t >= this.length || 0 > t ? void(s = "end") : (i && this._removeTransition(), this.onbeforechange.call(this), "v" === this.direction && (e = 100 * -t + "%", this.target.css("-webkit-transform", "translate(0, " + e + ")")), "h" === this.direction && (e = 100 * -t + "%", this.target.css("-webkit-transform", "translate(" + e + ", 0)")), clearTimeout(this.timer), void(this.timer = setTimeout(function() {
				n._currentClass(t), n.prevIndex = n.index, n.index = t, n.onchange.call(n), i && n._setTransition(), n.curPage && n.curPage[0].pageScrollHeight && (o && (n.gestureFollowing = !0), n.preventDefault = !0, n.curPage.scrollTop(0)), n.curPage = n.pages.eq(n.index), n.rememberLastVisited && n._saveLastVisited(), s = "end", clearTimeout(this.timer)
			}, 300)))
		},
		prev: function() {
			this.moveTo(this.index - 1)
		},
		next: function() {
			this.moveTo(this.index + 1)
		},
		_setTransition: function() {
			this.target.css("-webkit-transition", "-webkit-transform 0.3s ease")
		},
		_removeTransition: function() {
			this.target.css("-webkit-transition", "none")
		},
		_currentClass: function(t) {
			var i = this.currentClass;
			this.pages.eq(t).addClass(i), t === this.index || this.animationPlayOnce || this.pages.eq(this.index).removeClass(i)
		},
		_createDot: function() {
			for (var t = "", i = 0; i < this.length; i++) t += "<li>" + (i + 1) + "</li>";
			$(t).appendTo(this.target).wrapAll('<ul class="dot-list">')
		},
		_saveLastVisited: function() {
			var i = t.localStorage;
			i && i.setItem("pageSliderIndex", this.index)
		},
		_getLastVisited: function() {
			var i = t.localStorage;
			return i ? (this.cacheIndex = i.getItem("pageSliderIndex"), parseInt(this.cacheIndex)) : void 0
		},
		_bindAnimation: function() {
			var t = this,
				i = "<style>";
			$("[data-animation]").each(function(e) {
				var n = $(this),
					s = n.data("animation"),
					a = s.name,
					o = s.duration || 300,
					r = s.delay || 0,
					h = s["timing-function"] || "ease",
					c = s["fill-mode"] || "both",
					l = s["iteration-count"] || 1;
				n.data("animationid", ++e), i += "." + t.currentClass + ' [data-animationid="' + e + '"]{-webkit-animation-name: ' + a + ";-webkit-animation-duration: " + o + "ms;-webkit-animation-delay: " + r + "ms;-webkit-animation-timing-function: " + h + ";-webkit-animation-fill-mode: " + c + ";-webkit-animation-iteration-count: " + l + ";}"
			}), $("head").eq(0).append(i)
		},
		_preventDefault: function(t) {
			this.preventDefault && t.preventDefault()
		},
		_dev: function() {
			this.dev !== !1 && this.moveTo(this.dev, !0)
		}
	}, t.PageSlider = i
}(Zepto, window);