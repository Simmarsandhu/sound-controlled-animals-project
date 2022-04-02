function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifyer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/h-k-LCGK1/model.json",modelloaded)
}
function modelloaded(){
    classiyer.classify(gotresult)
}

function gotresult(error,results){
 console.log("got result")
}