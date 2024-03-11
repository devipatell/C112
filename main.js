Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3rE0mC94c/model.json',modelLoaded);
 
function modelLoaded(){
    console.log('Model Loaded!');
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    
    } else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label
        prediction_1 = results[0].label;
        speak();
        if(results[0].label == "thumbs up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "victory")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "nice")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
    }
}


