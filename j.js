pmx =0;
pmy =0;
cmx =0;
cmy =0;
tc =0;
timc="";
drawn="";
Answer="";
Score=0;



 var Arr= ["Butterfly","Book","Mug","Bottle","Lamp","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye"]
le = Arr.length;
console.log(le);
r= Math.floor((Math.random()*le)+1);
sketch =Arr[r];
document.getElementById('h').innerHTML = sketch ;

function preload(){
    classifer = ml5.imageClassifier("DoodleNet");
}

function setup(){
canvas = createCanvas(280,280);
canvas.center();
background("pink");
 canvas.mouseReleased(classifyCanvas);

}

function draw(){
    stroke(0);
    strokeWeight(8);
    if (mouseIsPressed){
        line(pmx, pmy , cmx ,cmy); 
    }

    checkSketch();
    if(drawn == sketch ){
        Answer="set";
        Score= Score+1;
        document.getElementById('score').innerHTML = Score;
    }

}

function checkSketch(){
    tc= tc+1;
    document.getElementById('timer').innerHTML = tc;
    if(tc > 600){
        tc = 0;
        timc = "Passed";
    }

    if(timc == "Passed" || Answer== "set"){
        timc = "";
        Answer = "";
        updateCanvas();
    }
}

function updateCanvas(){
    setup();
    r= Math.floor((Math.random()*le)+1);
document.getElementById('h').innerHTML = sketch =Arr[r];
}

function classifyCanvas(){
    classifer.classify(canvas, gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);
}else{
    document.getElementById("drawing").innerHTML = "Drawing is:" + results[0].label;
    p = results[0].confidence*100;
    document.getElementById("con").innerHTML = "Efficiency:" + p.toFixed(2);


    ss = window.speechSynthesis
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    ss.speak(utterThis);
}
}

        


