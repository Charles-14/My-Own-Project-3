var bg,bg2,form,system,code,security;
var score=0;

function preload(){
  bg = loadImage("Images/PirateShip.jpg");
  bg2 = loadImage("Images/cave-with-treasure-pile-gold-coins-jewelry-gem_107791-3742.jpg");
}

function setup() {
  createCanvas(1200,800);
  system = new System()
  security = new Security()
 
}

function draw() {
  background(bg);  
  clues();
  security.display();
  textSize(40);
  fill("white");
  text("Score: " + score, 500, 100);
  text("*Please write letters in captial*",350,150);

  if(score === 3) {
    clear();
    background(bg2);
  }
  drawSprites();
}