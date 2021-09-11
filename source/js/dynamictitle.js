var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '(╯︵╰) | ' + OriginTitle;
        clearTimeout(titleTime);
    }
    else {
        document.title = '( • ̀ω•́ )✧ | ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
