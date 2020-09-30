var Dog,happyDog;
var Dog_img,happyDog_img;
var database;
var foodS,foodStock

function preload(){
Dog_img=loadImage("Dog.png")
happyDog_img=loadImage("happydog.png")
}

function setup(){

database = firebase.database();
foodStock = database.ref('Food')
foodStock.on("value",readStock)

createCanvas(500,500);

Dog = createSprite(250,250,25,25);
Dog.addImage(Dog_img);
Dog.scale = 0.5;
}


function draw(){
background(46,139,87);

textSize(20);
fill(255);
text("Press the UP ARROW key to feed Drago milk!",20,50);

textSize(20);
fill(255);
text("Milk bottles left: "+foodS,25,475);
  
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
Dog.addImage(happyDog_img)
}
drawSprites();
  
}

function readStock(data){
foodS = data.val(); 
}

function writeStock(x){
if(x<=0){
x=0;
}
else{
x=x-1;
}
database.ref('/').update({
Food:x
})
}



