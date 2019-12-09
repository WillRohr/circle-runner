let w = 500;
let h = 500;
let bg;
let y = 0;
let circles = [];

function setup () {
    createCanvas(w, h);
    colorMode(HSB);
   

    //create init circle
    let circle = new Circle();
    circle.posX = w / 2;
    circle.posY = h / 2;
    circles.push(circle);
}

function draw () {
    background(255);

    //draw all circles
    for (let i = 0; i < circles.length; i++) {
        circles[i].drawCircle();
    }

    mouse();
}

function mouse() {
    for (let i = 0; i < circles.length; i++) {
        d = dist(mouseX, mouseY, circles[i].posX, circles[i].posY);
        if (d < circles[i].size / 2 &&
            d > circles[i].size / 2 - 0.5 * (circles[i].size / 2) &&
            circles[i].size >= 10) {
            circles[i].divide();
            circles.splice(i, 1);
        }
    }
}


function Circle () {
    this.size = w;
    this.posX = 0;
    this.posY = 0;
    this.cHUE = 0;
}

Circle.prototype.drawCircle = function () {
    noStroke();

    cHUE = map(dist(0, 0, this.posX, this.posY), 0, w * 2, 150, 250);
    fill(cHUE % 125, 255, 150);
    ellipse(this.posX, this.posY, this.size, this.size);
};

Circle.prototype.divide = function () {
    let rt = new Circle();
    rt.size = this.size / 2;
    rt.posX = this.posX + this.size / 4;
    rt.posY = this.posY - this.size / 4;
    circles.push(rt);

    let rb = new Circle();
    rb.size = this.size / 2;
    rb.posX = this.posX + this.size / 4;
    rb.posY = this.posY + this.size / 4;
    circles.push(rb);

    let ry = new Circle();
    ry.size = this.size / 2;
    ry.posX = this.posX - this.size / 4;
    ry.posY = this.posY - this.size / 4;
    circles.push(ry);

  let rx = new Circle();
    rx.size = this.size / 2;
    rx.posX = this.posX - this.size / 4;
    rx.posY = this.posY + this.size / 4;
    circles.push(rx);
}