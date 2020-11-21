var Isha, BTS;
var jk, jm,v,jh


function setup() {
  createCanvas(800,400);
  BTS=createSprite(400, 200, 50, 50);
  BTS.shapeColor="green";
  BTS.debug=true;

  Isha=createSprite(400,100,30,40);
  Isha.shapeColor="blue";
  Isha.debug=true;

  jk=createSprite(200,200,30,40);
  jk.shapeColor="purple";
  jk.debug=true;

  jm=createSprite(300,200,30,40);
  jm.shapeColor="crimson";
  jm.debug=true;

  v=createSprite(100,200,30,40);
  v.shapeColor="maroon";
  v.debug=true;

  jh=createSprite(500,200,30,40);
  jh.shapeColor="black";
  jh.debug=true;


 
}

function draw() {
  background("white");  
  Isha.y=mouseY;
  Isha.x=mouseX;

  if(touch(Isha,jk)){
    jk.shapeColor="yellow";
   Isha.shapeColor="yellow";
  }


  else{
    jk.shapeColor="green";
    Isha.shapeColor="blue";   
  }

 drawSprites(); 
}






function touch(o1,o2){
  if(o1.x-o2.x<o1.width/2+ o2.width/2 && 
   o2.x-o1.x<o1.width/2+o2.width/2&&
    o1.y-o2.y<o1.height/2+ o2.height/2 && 
    o2.y-o1.y<o1.height/2+o2.height/2){
   return true
  }
  else{
    return false
  }

}