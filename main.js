noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;




function setup(){
video=createCapture(VIDEO);
video.size(550,500);


    canvas=createCanvas(550,500);
    canvas.position(560,150);

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);

}

function modelloaded(){
    console.log('posenet model is loaded')
}


function gotposes(results){
    console.log(results);

    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    console.log("nosex=  "+noseX);
    console.log("nosey=   "+noseY);

    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.x;

console.log("rightwristx=  "+rightwristX);
console.log("leftwristx=   "+leftwristX);

difference=floor(leftwristX-rightwristX);


}



function draw(){

    background('#969A97');

    fill("#47ed73");
    stroke("#47ed73");
    square(noseX,noseY,difference);
}

