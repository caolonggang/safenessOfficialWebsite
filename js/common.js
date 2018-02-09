!function () {
    var htmlEl = document.getElementsByTagName('html')[0];
    var fitPage = function () {
        /* The calculate of with from zepto  */
        var w = htmlEl.getBoundingClientRect().width;
        w = Math.round(w);
        w = w > 750 ? 750 : w;
        var newW = w / 750 * 100;
        htmlEl.style.fontSize = newW + 'px';
    }
    fitPage();

    var t;
    var func = function () {
        clearTimeout(t);
        t = setTimeout(fitPage, 25);
    }
    window.addEventListener('resize', func);
} ();

/* 自定义函数 */
window.onload = function () {
    /* 回退*/
    $('.business_goback').click(function () {
        history.go(-1);
    })
}
/* loading */
function queryHintCallback(loadingBox) {
    var loadingBox = document.getElementById(loadingBox);
    loadingBox.style.display = "none";
}
// tab切换
function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "active" : "";
        con.style.display = i == cursel ? "block" : "none";
    }
}
function setTab1(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "currentstyle" : "";
        con.style.display = i == cursel ? "block" : "none";
    }

}

//17/03/10
document.addEventListener("touchmove", function (e) {
    if (openidtk) {
        e.preventDefault();
    }
}, false);

var openidtk = false;
function upIdairk() {//弹层判断高度
    $(".id-tk").css({ "display": "block", "opacity": "0" });
    if (document.documentElement.clientHeight < ($(".bg-img").height() + $(".idrk-btn").height() * 3.8)) {//高度不够时
        window.open("idai_details.html", "_self");
        return false;
    }
    else {
        $(".id-tk").css({ "display": "none", "opacity": "1" });
        if (!openidtk) {
            $(".id-btmnav img").removeClass("close-jia").addClass("open-jia");
            $(".id-btmnav span").html("取消");
            $(".id-tk").fadeIn(500);
            $(".updiv").stop().animate({ top: '0rem', opacity: '1' }, 500);
            openidtk = true;
        }
        else {
            $(".id-btmnav img").removeClass("open-jia").addClass("close-jia");
            $(".id-btmnav span").html("借款");
            $(".updiv").stop().animate({ top: '100%', opacity: '0' }, 500);
            $(".id-tk").fadeOut(500);
            openidtk = false;
        }
    }
}