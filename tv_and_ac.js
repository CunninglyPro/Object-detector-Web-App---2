img = "";
cocossd_status = "";

function back() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('tv_and_ac.jpg');
}

function setup() {
    canvas = createCanvas(500, 400);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is loaded!");
    cocossd_status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}