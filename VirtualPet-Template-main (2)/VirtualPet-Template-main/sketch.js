var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

Display();{
  var x=80,y=100;
imageMode(CENTER); 
image(this.image,720,220,70,70); 
if(this.foodStock!=0){
   for(var i=0;i<this.foodStock;i++){
      if(i%10==0){
         x=80;
         y=y+50;
         } 
         image(this.image,x,y,50,50);
          x=x+30; 
} 
feed.createButton("Feed the dog");
feed.position(700,95); 
feed.nousePressetl(feedDog); 

addFood=createBtton("add Food"); 
addFood.position(800,95); 
addFood.mousePressed(addFoods);

//function to update food stock 
function feedDog(){
  dog.addimage(happyDog);
if(foodobj.getFoodstock()<= 0){
  foodobj.updateFoodstock(foodobj.getFoodstock()*0); 
}else{
  foodObj.updatefoodStock(foodObj.getFoodStock()-1);
}
}
//function to add food in stock 
function addFoods(){
   foodS++;
    database.ref('/').update({ Food:foodS
    })

}
fedTime=database.ref('FeedTime');
 fedTime.on("value",function(data){
   lastFed=Data.val();
 }); 
 Fill(255,255,254); 
 textsize(15);
if(lastfed>=12){
  text( "last Feed :" + lastFed%12 +" PM ", 35,30); 
}else if(lastFed==0){
   text("Last Feed :  12 AM" ,350,30); 
}else{
     text("ast Fed : "+ lastFed + "AM", 350,30); 

     //function to update food stock and last tea time 
     function feedDog(){

   dog.addImage(happyDog); 
foodObj.updateFoodstock(foodObj.getFoodstock()-1); 
database.ref('/').update({
  Food:foodobjget.Foodstock(),
   FeedTime:hour() 

})
     }

