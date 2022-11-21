var canvas = document.getElementById("ican");
var ctx = canvas.getContext("2d");

var balls = [];

function getRandomNumber(min, max) { //生成一定范围随机数
    return (min + Math.floor(Math.random() * (max - min + 1)))
}

var ball;

function initBall() {
    ball = {
        x: getRandomNumber(0, 700),
        y: getRandomNumber(100, 800),
        r: 4,
        v: 0.5,
        angle: (getRandomNumber(0, 180) * 2 * Math.PI) / 360,
        color: "#000"
    }
}

var t = 0;

function move() {
    ctx.globalAlpha = 0.01 * t;
    if (t == 0) initBall();
    if (t >= 50) {
        ctx.clearRect(0, 0, 1000, 1000);
        initBall();
        t = 0;
    } else {
        t++;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
    }
    ball.x = ball.x + ball.v * Math.cos(ball.angle);
    ball.y = ball.x + ball.v * Math.sin(ball.angle);
    ball.r = ball.r + 1;
    ball.v = ball.v + 0.5;
    console.log(ball.angle);
}

setInterval(move, 10);
