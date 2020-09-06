 var doggy; 
 var happyDog;
 var database;
 var foodS;
 var foodStock;

//Create variables here

function preload()
{
  dog = loadImage('images/dogImg.png');
  happydog = loadImage('images/dogImg1.png');
}	


function setup() {
  createCanvas(500,500);
  database = firebase.database();
  doggy = createSprite(245,200,50,50);
  doggy.addImage(dog);
  doggy.scale = 0.45;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background('GREEN');
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    doggy.addImage(happydog)
  }
  drawSprites();
  //add styles here
  fill('black');
  textSize(20)
  text("food : "+ foodS , 400 , 51 );
  
}

function readStock(data){
  foodS= data.val();
}
function writeStock(x){

  if(x === 0){
    x = 0
  }
  else{
    x = x-1
  }
  database.ref('/').update({
    Food:x
  })
}




