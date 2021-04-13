//images of plastics
let plastics = [];

let animals = [{
    name: "cardinal",
    habitat: "meadows"
  },
  {
    name: "pelican",
    habitat: "shores"
  },
  {
    name: "kangaroo",
    habitat: "islands"
  },
  {
    name: "sea turtle",
    habitat: "oceans"
  },
  {
    name: "squirrel",
    habitat: "woodlands"
  },
  {
    name: "peacock",
    habitat: "forests"
  },
  {
    name: "sea lion",
    habitat: "oceans"
  },
  {
    name: "shark",
    habitat: "oceans"
  }
]

let button;
let randomIndex;
let animating = false;
let img;
let imageCounter = 0;

function preload() {
  for (let i = 0; i <= 15; i++) {
    plastics[i] = loadImage(`pictures/plastics_${i}.jpg`)
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
  text("Plastics harm animals!", 100, 300);
  text("Click to see.", 100, 350);

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
    imageCounter %= plastics.length;
    image(plastics[imageCounter], width / 2, height / 2);
    if (imageCounter < plastics.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;
  if (animals[0]) {

    clear();
    randomIndexAnimals = int(random(animals.length));
    randomIndexPlastics = int(random(plastics.length));

    image(plastics[randomIndexPlastics], width * 0.5, height * 0.5);
    fill(random(80, 200), random(100, 220), random(80, 200));
    text(`The ${animals[randomIndexAnimals].name} dislikes this.`, width * 0.15, height * 0.82);

    animals.splice(randomIndexAnimals, 1);

  } else {
    background(80, 180, 80);
    textSize(48);
    fill(0);
    text("Don't litter!", width * 0.25, height * 0.5);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}
