function setup() {
  createCanvas(1200,800);
  sun=createSprite(600, 400, 100,100);
  sun.shapeColor="orange";
  body1=createSprite(100,350,20,20);
  body2=createSprite(200,400,30,30);
  body3=createSprite(300,450,40,40);
  body4=createSprite(400,500,50,50);
  body5=createSprite(700,550,60,60);
  body6=createSprite(800,450,70,70);
  body7=createSprite(900,400,80,80);
  body8=createSprite(1000,350,90,90);
  body1.shapeColor="red";
  body2.shapeColor="green";
  body3.shapeColor="yellow";
  body4.shapeColor="blue";
  body5.shapeColor="brown";
  body6.shapeColor="violet";
  body7.shapeColor="indigo";
  body8.shapeColor="white";

  

}

function draw() {
  background(0,0,0); 
  sun.x=World.mouseX;
  sun.y=World.mouseY; 
  
 if( istouching()){
   sun.display=false;
   body1.display=false;
 }
 else{
   sun.display=true;
   body1.diplay=true;
 }
  drawSprites();
}
 
function istouching(object1,object2,){
  if(sun.x-body1.x<sun.width/2+body1.width/2
    && body1.x-sun.x<sun.width/2+body1.width/2/2
    &&sun.y-body1.y<sun.height/2+body1.height/2
    &&body1.y-sun.y<sun.height/2+body1.height){
    return true;
  }
  else{
    return false;
  }




}














