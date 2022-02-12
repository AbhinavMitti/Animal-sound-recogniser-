//https://teachablemachine.withgoogle.com/models/3--50wBAp/

function startClassification() 
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3--50wBAp/model.json",modelready)

    
}

function modelready() 
{
    classifier.classify(gotResults);
}