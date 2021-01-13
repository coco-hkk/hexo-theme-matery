var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '渡劫失败！！！';
        clearTimeout(titleTime);
    }
    else {
        document.title = '一起来修仙 （‐＾▽＾‐）' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
