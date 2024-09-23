//创建游戏引擎类 创建飞机类  分为我方飞机类和敌方飞机类 创建子弹类
//我方飞机类  位置，外观，移动方法
//敌方飞机类 位置，外观，移动方法，血量，分数，爆炸外观
//子弹类  位置，外观，移动方法，攻击力
//我方飞机 跟着鼠标移动，敌方飞机从上往下运动（出现的水平方向的位置随机），子弹跟随飞机运动，从下往上运动
//碰撞检测 当子弹和敌机碰撞，敌机掉血，当敌机和我机碰撞，游戏结束
function getById(id) {
    return document.getElementById(id);
}

function inherit(SuperType, SubType) {
    SubType.prototype = Object.create(SuperType.prototype);
    SubType.prototype.constructor = SubType;
}

function Engine() {
    this.content = getById("content");
    this.startArea = getById("start");
    this.startBtn = getById("begin");
    this.mainArea = getById("main");
    this.scoreArea = getById("score");
    this.score = getById("label");
    this.endArea = getById("end");
    this.scores = getById("planeScore");
    this.reloadBtn = getById("reload");
    this.game_over = getById('game_over'); // 游戏结束
    this.lastGrad = getById('grad');
    this.restartBtn = getById("over");

    this.grad = 0 // 分数
    this.init = function () {
        this.startBtn.onclick = () => {
            this.startArea.style.display = "none";
            this.mainArea.style.display = "block";
            this.scoreArea.style.display = "block";
            this.start();
        }
        this.restartBtn.onclick = () => {
            history.go()
        }
    }
    this.init();
}

Engine.prototype.start = function () {
    var count = 0;
    var num1 = 0;
    var num2 = 0;
    var arrEnemy = [];
    var arrBullet = [];
    this.timer = setInterval(() => {
        count++;
        num1++;//什么时候出现敌机
        //设置背景位置
        this.mainArea.style.backgroundPositionY = count + "px";
        //考虑敌方飞机出来的时机

        if (num1 % 20 == 0) {
            num2++;
            if (num2 % 5 == 0) {
                arrEnemy.push(new Enemy(Math.floor(Math.random() * 274), -60, "image/enemy3_fly_1.png", "image/中飞机爆炸.gif", 2, 10, 200));
            }
            if (num2 % 10 == 0) {
                arrEnemy.push(new Enemy(Math.floor(Math.random() * 210), -164, "image/enemy2_fly_1.png", "image/大飞机爆炸.gif", 1, 20, 500));

            }
            if (num2 % 2 == 0) {
                arrEnemy.push(new Enemy(Math.floor(Math.random() * 286), -34, "image/enemy1_fly_1.png", "image/小飞机爆炸.gif", 3, 5, 100));
            }
        }

        if (num1 % 5 == 0) {
            arrBullet.push(new Bullet(myPlane.node.offsetLeft + 30, myPlane.node.offsetTop - 17, "image/bullet1.png"));
        }


        for (var i = 0; i < arrEnemy.length; i++) {
            arrEnemy[i].move();
            if (arrEnemy[i].node.offsetTop >= 568 - arrEnemy[i].node.offsetHeight) {
                engine.mainArea.removeChild(arrEnemy[i].node);
                arrEnemy.splice(i, 1);
            }
        }

        for (var j = 0; j < arrBullet.length; j++) {
            arrBullet[j].move();
            if (arrBullet[j].node.offsetTop <= 0) {
                engine.mainArea.removeChild(arrBullet[j].node);
                arrBullet.splice(j, 1);
            }
        }

        //子弹和敌机的碰撞
        for (var m = 0; m < arrBullet.length; m++) {
            for (var n = 0; n < arrEnemy.length; n++) {
                if (arrBullet[m].node.offsetLeft + arrBullet[m].node.offsetWidth >= arrEnemy[n].node.offsetLeft && arrEnemy[n].node.offsetLeft + arrEnemy[n].node.offsetWidth >= arrBullet[m].node.offsetLeft) {
                    if (arrBullet[m].node.offsetTop <= arrEnemy[n].node.offsetHeight + arrEnemy[n].node.offsetTop && arrBullet[m].node.offsetTop + arrBullet[m].node.offsetHeight >= arrEnemy[n].node.offsetTop) {
                        arrEnemy[n].health--;
                        if (arrEnemy[n].health <= 0) {
                            this.grad += arrEnemy[n].score
                            this.score.innerHTML = this.grad

                            const boom = new BoomImg(arrEnemy[n])
                            setTimeout((i) => {
                                engine.mainArea.removeChild(boom.node);
                            }, 250)
                            engine.mainArea.removeChild(arrEnemy[n].node);
                            arrEnemy.splice(n, 1)
                        }
                        engine.mainArea.removeChild(arrBullet[m].node);
                        arrBullet.splice(m, 1);
                        break;
                    }
                }
            }
        }

        // 我的飞机与敌机碰撞  游戏结束
        for (var m = 0; m < arrEnemy.length; m++) {
            // console.log(myPlane.node.offsetTop, arrBullet[m].node.offsetTop)
            if (arrEnemy[m].node.offsetTop >= myPlane.node.offsetTop && arrEnemy[m].node.offsetLeft >= myPlane.node.offsetLeft) {
                if (arrEnemy[m].node.offsetTop <= myPlane.node.offsetTop + myPlane.node.offsetHeight && arrEnemy[m].node.offsetLeft <= myPlane.node.offsetLeft + myPlane.node.offsetWidth) {
                    clearInterval(this.timer)

                    myPlane.node.style.display = 'none'
                    this.lastGrad.innerHTML = `您的最终分数为：${this.grad}`
                    this.game_over.style.display = 'block'
                }
            }
        }


    }, 20);
}


var engine = new Engine();

function Plane(x, y, imgSrc) {
    this.posX = x;
    this.posY = y;
    this.imgSrc = imgSrc;
    this.init = function () {
        this.node = document.createElement("img");
        this.node.style.left = this.posX + "px";
        this.node.style.top = this.posY + "px";
        this.node.src = this.imgSrc;
        engine.mainArea.appendChild(this.node);
    }
    this.init();
}

Plane.prototype.move = function () {
    throw new Error("请重写该方法");
}

function MyPlane(x, y, imgSrc) {
    Plane.call(this, x, y, imgSrc);
}

inherit(Plane, MyPlane);

MyPlane.prototype.move = function () {
    var _this = this;
    engine.content.onmousemove = function (e) {
        var evt = e || event;
        var x = evt.pageX - this.offsetLeft - 33;
        var y = evt.pageY - this.offsetTop - 40;
        var mw = this.offsetWidth - 66;
        var mh = this.offsetHeight - 80;

        x = x <= 0 ? 0 : x >= mw ? mw : x;
        y = y <= 0 ? 0 : y >= mh ? mh : y;

        _this.node.style.left = x + "px";
        _this.node.style.top = y + "px";
    }
}

var myPlane = new MyPlane(468, 127, "image/我的飞机.gif");
myPlane.move();

function Enemy(x, y, imgSrc, boomImgSrc, speed, health, score) {
    Plane.call(this, x, y, imgSrc);
    this.boomImgSrc = boomImgSrc;
    this.speed = speed;
    this.health = health;
    this.score = score;
    this.init = function () {
        this.node = document.createElement("img");
        this.node.style.left = this.posX + "px";
        this.node.style.top = this.posY + "px";
        this.node.src = this.imgSrc;
        engine.mainArea.appendChild(this.node);
    }
    this.init();
}

// 创建爆炸
class BoomImg {
    constructor(overEnemy) {
        this.x = overEnemy.node.offsetLeft;
        this.y = overEnemy.node.offsetTop;
        this.boomImgSrc = overEnemy.boomImgSrc;
        this.overEnemy = overEnemy;

        this.init();
    }

    init() {
        this.node = document.createElement('img')
        this.node.style.position = 'absolute'
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        this.node.src = this.boomImgSrc
        engine.mainArea.appendChild(this.node);
    }
}

inherit(Plane, Enemy);

Enemy.prototype.move = function () {
    this.node.style.top = parseInt(this.node.style.top) + this.speed + "px";
}

function Bullet(x, y, imgSrc, fight) {
    this.posX = x;
    this.posY = y;
    this.imgSrc = imgSrc;
    this.fight = fight;

    this.init = function () {
        this.node = document.createElement("img");
        this.node.style.left = this.posX + "px";
        this.node.style.top = this.posY + "px";
        this.node.src = this.imgSrc;
        engine.mainArea.appendChild(this.node);
    };
    this.init();

}

Bullet.prototype.move = function () {
    this.node.style.top = parseInt(this.node.style.top) - 5 + "px";
}
