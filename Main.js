var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();

function Start1(){
    document.getElementById("SelfieInput").innerHTML = "";
    recog.start();
}
recog.onresult = function run(event){
    console.log(event)
    var events = event.results[0][0].transcript;
    document.getElementById("SelfieInput").innerHTML = events;
    if(events == 'Take my Selfie'){
        Speak()
    }
}
function Speak(){
var syn = window.speechSynthesis;
var tts = 'Taking Selfie in 5 seconds';
var ut = new SpeechSynthesisUtterance(tts);
syn.speak(ut);
Webcam.attach("#Camera");
}
function Cap_Pic(){
    Webcam.snap( function (data_uri) {
        document.getElementById("Webcam1").innerHTML = "<img src = "+data_uri+" id = 'img_data'>"
    })
}
setTimeout(function(){
    Cap_Pic();
    save();
},5000)

function save(){
    image = document.getElementById("img_data").src
    link1 = document.getElementById("link")
    link1.href = image
    link1.click()
}

Webcam.set({
    height : 250,
    width : 250,
    image_format: 'jpg',
    image_quality : 90
});

Camera = document.getElementById("Camera")