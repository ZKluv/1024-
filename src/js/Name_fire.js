var canvas = document.getElementById("ican");
var ctx = canvas.getContext("2d");

var balls = [];

function getRandomNumber(min, max) { //生成一定范围随机数
    return (min + Math.floor(Math.random() * (max - min + 1)))
}

function initBall() { //随机生成烟花颗粒
    for (var i = 0; i < 30; i++) {
        var ball = {
            positionx: 500,
            positiony: 500,
            r: getRandomNumber(3, 4),
            v: getRandomNumber(1, 2),
            direction: (getRandomNumber(0, 360) / 360) * 2 * Math.PI,
            color: "#FFF"
        };
        balls.push(ball);
    }
}
initBall();

function randomColor() { //随机生成烟花颜色
    var arrHex = ["#c08eaf", "#5698c3", "#8cc269", "#e77c8e", "#fba414", "#f8df72", "#F8DF72", "#894276", "#2177b8", "#63bbd0", "#1ba784", "#55bb8a", "#b2cf87", "#fed71a", "#f8c387", "#f4c7ba"];
    var index = Math.floor(Math.random() * 6);
    return arrHex[index];
}

var t = 0;
var x = 0;
var y = 0;
var bo = 0;

function move() { //移动烟花颗粒
    t += 1;
    ctx.globalAlpha = 0.01 * t;
    if (t >= 50) {
        t = 0;
        bo += 1;
    } else if (t == 1) {
        if (bo % 3 == 0) {
            var l = balls.length;
            for (var j = 1; j <= l; j++)
                balls.pop();
            initBall();
            x = getRandomNumber(100, 900);
            y = getRandomNumber(100, 200);
            for (i in balls) {
                balls[i].color = randomColor();
                balls[i].positionx = x;
                balls[i].positiony = y;
            }
        } else {
            for (i in balls) {
                console.log(bo % 2);
                balls[i].positionx = x;
                balls[i].positiony = y;
                balls[i].color = "#FFF";
                ctx.globalAlpha = 0.8;
            }
        }
    } else {
        for (i in balls) {
            ctx.beginPath();
            ctx.arc(balls[i].positionx, balls[i].positiony, balls[i].r, 0, Math.PI * 2);
            ctx.fillStyle = balls[i].color;
            ctx.fill();
            balls[i].positiony = balls[i].positiony + balls[i].v * Math.sin(balls[i].direction);
            balls[i].positionx = balls[i].positionx + balls[i].v * Math.cos(balls[i].direction);
        }
    }
}

setInterval(move, 1);
