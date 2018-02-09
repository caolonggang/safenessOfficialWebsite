/* @update: 2017-2-16 19:16:16 */
var settime, pageController = {
	init: function() {
		var e = this,
			n = window.localStorage ? window.localStorage.getItem("pageNum") : window.sessionStorage.getItem("pageNum");
		n || (n = e.getUrlString("pageNum")), n && 2 >= n ? (e.wrapPage = new PageSlider({
			pages: $(".page-wrap .page"),
			dev: parseInt(n)
		}), window.localStorage ? window.localStorage.removeItem("pageNum") : window.sessionStorage.removeItem("pageNum"), e.getUrlString("pageNum") && history.pushState({
			page: 1
		}, "title 1", "#")) : e.wrapPage = new PageSlider({
			pages: $(".page-wrap .page")
		});
		var i = $(".scroller a").length,
			a = Math.ceil(i / 3);
		$(".business .scroller").css("width", 50 * a + "%");
		
	},
	loadSource: function(e) {
		for (var n = this, i = 0, a = e.length, g = 0, t = function() {
				i++, g = i / a * 100 | 0, i == a && setTimeout(function() {
					$(".loading").hide(), n.init()
				}, 1e3)
			}, o = 0; a > o; o++) {
			var s = new Image;
			s.onload = function() {
				t(!0)
			}, s.onerror = function() {
				t(!0)
			}, s.src = e[o]
		}
	},
	getUrlString: function(e, n) {
		n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
		var i = new RegExp("[#&]" + e + "(=([^&#]*)|&|#|$)"),
			a = i.exec(n);
		return a ? a[2] ? a[2].replace(/\+/g, " ") : "" : null
	},
};  
!
function() {
	FastClick && FastClick.attach(document.body);
	var e = "",
		n = [e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + "", e + ""];
	pageController.loadSource(n)
}();