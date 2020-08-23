//Create variables here
var dog, happyDog,database,foods,foodStock, dogImage, happyDogImage, foodCount = 20;




function preload()
{
  //load images here
  dogImage = loadImage('images/dogImg.png');
  happyDogImage = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database ();
  
  foodStock = database.ref('Food');
  foodStock.on('value',readStock);
  dog = createSprite(200,250,20,20);
  dog.addImage("dog",dogImage);
  dog.scale = 0.25;
  happyDog = createSprite(200,250,20,20);
  
  

}


function draw() {  
  background(46,139,87)
  textSize(32);
  fill(256, 256, 256);
  text("Food: "+ foodCount, 350,50);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.remove()
    happyDog = createSprite(200,250,20,20);
    happyDog.addImage("happyDog",happyDogImage);
    happyDog.scale = 0.25;
    foodCount= foodCount-1
  }
  if(keyWentUp(UP_ARROW)){
    writeStock(foods);
    happyDog.remove()
    dog = createSprite(200,250,400,20);
    dog.addImage("dog",dogImage);
    dog.scale = 0.25;
  }
  drawSprites();

  
  //add styles here

}
function  readStock(data){
  foods = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

