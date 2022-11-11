var can = document.getElementById("ican");
var ctx = can.getContext("2d");
var gra = ctx.createLinearGradient(0, 0, 1000, 1000);

var a = [0, 0.2, 0.4, 0.6, 0.8, 1];

function chg() {
    var i = 0;
    for (i = 0; i <= 5; i++) {
        a[i] = a[i] + 0.01;
        if (a[i] >= 1) a[i] = 0;
    }
    gra.addColorStop(a[0], "#c08eaf");
    gra.addColorStop(a[1], "#5698c3");
    gra.addColorStop(a[2], "#8cc269");
    gra.addColorStop(a[3], "#e77c8e");
    gra.addColorStop(a[4], "#fba414");
    gra.addColorStop(a[5], "#f8df72");
    ctx.strokeStyle = gra;
    ctx.font = "Bold 80px 微软雅黑";
    ctx.strokeText("1 0 2 4    稀 土 掘 金", 150, 150);
}

setInterval(chg, 30);