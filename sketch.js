//images of animals
let array = [];

let endangered = [];
let names = [];
let pictures={
  {name: "bald eagle",
   picture: "pictures/endangered_baldeagle.jpg"},
  {name: "elephant",
  picture: "pictures/endangered_elephant.jpg"}
  {name: "koala",
  picture: "pictures/endangered_koala.jpg"},
  {name: "leopard",
  picture: "pictures/endangered_leopard.jpg"},
  {name: "monarch butterfly",
  picture: "pictures/endangered_monarchbutterfly.jpg"},
  {name: "oryx",
  picture: "pictures/endangered_oryx.jpg"},
  {name: "Pere David's deer",
  picture: "pictures/endangered_peredavidsdeer.jpg"},
  {name: "polar bear",
  picture: "pictures/endangered_polarbear.jpg"},
  {name: "sea otter",
  picture: "pictures/endangered_seaotter.jpg"},
  {name: "sea turtle",
  picture: "pictures/endangered_seaturtle.jpg"},
  {name: "snow leopard",
  picture: "pictures/endangered_snowleopard.jpg"}
}

let button;
let randomIndex;
let animating = false;
let img;
let imageCounter = 0;


function preload() {
  for (let i = 0; i <= pictures.length; i++) {
    endangered[i] = loadImage(`pictures/picture_${i}.jpg`)

  }
}

function setup() {
  createCanvas(500, 500);
  //background(140, 130, 80);
  strokeWeight(3);
  noFill();

  push();
  textSize(28);
  textStyle(BOLD);
  fill(0);
  pop();

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

    //images of endangered species
    imageCounter %= endangered.length;
    image(endangered[imageCounter], width / 2, height / 2);
    if (imageCounter < endangered.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }

  if (mouseIsPressed){
      array.push([mouseX, mouseY]);
      drawAnimal();
  }

}

function randomizer() {
  animating = false;
  if (endangered[0]) {

    clear();
    randomIndexEndangered = int(random(endangered.length));
    image(endangered[randomIndexEndangered], width * 0.5, height * 0.5);

    endangered.splice([randomIndexEndangered],1);


  } else {
    background(80, 180, 80);
    textSize(48);
    fill(0);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}

function keyTyped() {
  if (key === 'r') { //red stroke
    stroke(255, 0, 0);
  }
  if (key === 'g') { //green stroke
    stroke(0, 180, 0);
  }
  if (key === 'b') { //blue stroke
    stroke(0, 80, 235);
  }
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  }
}

function drawAnimal() {


  beginShape(); //draw image in curvilinear lines
  //fill(150);
  stroke(0, 0, 255);
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }
  endShape();

  //display the same image at a smaller scale
  push();
  translate(0.5 * width, 0.5 * height);
  beginShape();
  stroke(255, 0, 0);
  scale(0.5);
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }

  endShape();
  pop();
}

function mousePressed() {
  array = [];
}
