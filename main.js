var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}
function speak(){
    var synt=window.speechSynthesis;
    speak_document=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speak_document);
    synt.speak(utterthis);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360, height:250, image_format:'jpeg',jpeg_quality:90
});