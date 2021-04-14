//images of plastics
let endangered = [];

let button;
let randomIndex;
let animating = false;
let img;
let imageCounter = 0;

function preload() {
  for (let i = 0; i <= 15; i++) {
    endangered[i] = loadImage(`pictures/endangered_${i}.jpg`)
  }
}

function setup() {
  createCanvas(500, 500);
  background(140, 130, 80);
  textSize(28);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(12);
  text("Protect the animals!", 100, 300);

  //click the button
  button = createButton("Click to see");
  //button = select("#randButton");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
}

function draw() {
  if (animating == true) {
    clear();

    //images of plastics
    imageCounter %= endangered.length;
    image(endangered[imageCounter], width / 2, height / 2);
    if (imageCounter < endangered.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (endangered[0]) {

    clear();
    randomIndexEndangered = int(random(endangered.length));

    image(endangered[randomIndexEndangered], width * 0.5, height * 0.5);
    fill(random(80, 200), random(100, 220), random(80, 200));
    text(`${endangered[randomIndexEndangered]}`, width * 0.15, height * 0.82);

    endangered.splice(randomIndexEndangered, 1);

  } else {
    background(80, 180, 80);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}
