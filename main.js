function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifyer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/h-k-LCGK1/model.json",modelloaded)
}
function modelloaded(){
    classifyer.classify(gotresult)
}

dog = 0;
cat=0;
tiger=0;
hoarse=0;



function gotresult(error,result){
 console.log("got result")

 if(error){
     console.log(error);

 }
 else{
     console.log(result);

     red= Math.floor(Math.random()*255) +1;
     green= Math.floor(Math.random()*255)+1;
     blue = Math.floor(Math.random()*255)+1;
  
    document.getElementById("voice").innerHTML= "ANIMAL =" + result[0].label ;
    document.getElementById("times").innerHTML = "cat=" + cat +  " dog= "+ dog + " tiger= "+ tiger +" horse= "+ hoarse; 
    

    document.getElementById("voice").style.color="rgb("+red+","+green+","+blue+")";
    document.getElementById("times").style.color="rgb("+red+","+green+","+blue+")";

    if(result[0].label == "cat" ){
        document.getElementById("img1").src= "CAT.jpg"
        cat = cat +1 ;
        

    }
    else if(result[0].label == "dog" ){
        document.getElementById("img1").src= "DOG.jpg"
        dog= dog +1
    }
    else if(result[0].label == "tiger" ){
        document.getElementById("img1").src= "tiger.jpg"
        tiger = tiger +1;
    }
    else if(result[0].label == "hoarse" ){
        document.getElementById("img1").src= "horse.jpg"
        hoarse = hoarse + 1;
    }
    else if(result[0].label == "background noise" ){
        document.getElementById("img1").src= "img2"
        
    }
    

    



 }
 }
