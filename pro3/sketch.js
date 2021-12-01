// this is a very simple sketch that demonstrates how to place a video cam image into a canvas 

let video;
let poseNet;
let pose;
let noseX = 0;

function setup(){

createCanvas(windowWidth, windowHeight);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
  
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        
    let nX =  poses[0].pose.keypoints[0].position.x;
 
    noseX = lerp(noseX, nX, 0.5);    
   
} 
    
} 

function draw(){
    
image(video, 0, 0, windowWidth, windowHeight);
    
    noStroke();
    fill(160,80,50);
    rect(0, 750, windowWidth, 10);
    
       noStroke();
    fill(160,80,50);
    rect(0, 880, windowWidth, 10);

 stroke(255, 240, 190, 32);
  noFill();
  for(let i = 0; i < 20; i++) {
    strokeWeight(i*i*0.1);
    rect(0, 880, windowWidth, 15, i*2);
  }
    
    noStroke();
    fill(160,80,50);
    rect(0, 900, windowWidth, 10);
    
    //1
    noStroke();
    fill(160,80,50);
    rect(65, 700, 10, 250);
    fill(60,60,30);
    ellipse(70, 700, 30);

    
    //2
    noStroke();
    fill(160,80,50);
    rect(295, 700, 10, 250);
    fill(60,60,30);
    ellipse(300, 700, 30);
    
    //3
    noStroke();
    fill(160,80,50);
    rect(525, 700, 10, 250);
    fill(60,60,30);
    ellipse(530, 700, 30);
    
    //4
    noStroke();
    fill(160,80,50);
    rect(755, 700, 10, 250);
    fill(60,60,30);
    ellipse(760, 700, 30);
    
    //5
    noStroke();
    fill(160,80,50);
    rect(985, 700, 10, 250);
    fill(60,60,30);
    ellipse(990, 700, 30);

    //6
    noStroke();
    fill(160,80,50);
    rect(1215, 700, 10, 250);
    fill(60,60,30);
    ellipse(1220, 700, 30);
    
    //7
    noStroke();
    fill(160,80,50);
    rect(1445, 700, 10, 250);
    fill(60,60,30);
    ellipse(1450, 700, 30);
    
    //8
    noStroke();
    fill(160,80,50);
    rect(1675, 700, 10, 250);
    fill(60,60,30);
    ellipse(1680, 700, 30);
////////////////////////////////////////    


    ///1
    
    if(noseX < 50 && noseX > 20) {
    noStroke();
    fill(250,250,220,4);    
    for(i = 0; i < 100; i++){
    ellipse(70, 700, i*2);}
      
    fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(300, 700, i*1);}
    }
    
    
    
   
    ///2
    if(noseX > 50 && noseX < 150) {
    noStroke();
    fill(250,250,220,4);
    for(i = 0; i < 100; i++){
    ellipse(300,700, i*2);}
        
        fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(70, 700, i*1);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(530, 700, i*1);}
 
    }
    
    ///3
    if(noseX < 200 && noseX > 150) {
    noStroke();
    fill(250,250,220,4);
    for(i = 0; i < 100; i++){
    ellipse(530,700, i*2);}
        
    fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(300, 700, i*1);} 
        
    fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(760, 700, i*1);}
    
    }
    ///4
    if(noseX > 200 && noseX < 250) {
    noStroke();
        
    fill(250,250,220,4);
    for(i = 0; i < 100; i++){
    ellipse(760,700, i*2);}
        
        fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(530, 700, i*1);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(990, 700, i*1);}
   
    }
    ///5
    if(noseX > 250 && noseX < 350) {
    noStroke();
        
    fill(250,250,220,4);
    for(i = 0; i < 100; i++){
    ellipse(990,700, i*2);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(760, 700, i*1);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(1220, 700, i*1);}
     
    }
    ///6
    if(noseX > 350 && noseX < 450) {
    noStroke();
        
    fill(250,250,220,4);
    for(i = 0; i < 100; i++){
    ellipse(1220,700, i*2);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(990, 700, i*1);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(1450, 700, i*1);}
     
    }
    ///7
    if(noseX > 450 && noseX < 550) {
    noStroke();
        
    fill(250,250,220, 4);
    for(i = 0; i < 100; i++){
    ellipse(1450,700, i*2);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(1220, 700, i*1);}
        
            fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(1680, 700, i*1);}
  
    }
    ///8
    if(noseX > 550 && noseX < 600) {
    noStroke();
        
    fill(250, 250, 220, 4);
    for(i = 0; i < 100; i++){
    ellipse(1680,700, i*2);}
        
    fill(250,250,220,3);    
    for(i = 0; i < 100; i++){
    ellipse(1450, 700, i*1);}
        
    }
    
   
}
    






