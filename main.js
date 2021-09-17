function startClassificaton(){
    navigator.mediaDevices.getUserMedia({ audio: true, video: false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/b89rxYoQR/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        

        img = document.getElementById('ear');
        
        if (results[0].label == "Barking") {
            img.src = 'dog.gif';
        }
        else if (results[0].label == "Meowing") {
            img.src = 'scary-kitten.gif';
        }
        else if (results[0].label == "Mooing") {
            img.src = 'cute-cow.gif';
        }
        else {
            img.src = 'https://s3-whjr-curriculum-uploads.whjr.online/dd5ed82b-b105-4b93-806f-1f9e718b56ec.png';
    }   
  }
}
