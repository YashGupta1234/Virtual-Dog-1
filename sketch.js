//Create variables here
var dog, happyDog, database, FoodS, foodStock;

function preload()
{
  //load images here
  dog1 = loadImage("dogImg.png");
  happyDog1 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(1000, 800);
database = firebase.database();
 dog = createSprite(500,600,10,10);
  dog.addImage(dog1);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(happyDog1);
  }

  drawSprites();
  //add styles here
  fill ("white");

  text ("Note: Press UP Arrow to feed the dog", 350, 450);
}
function readStock(data){
  FoodS = data.val();
}

function writeStock(x){
  if(x<= 0) {
    x = 0
  }
  else {
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}
