
function upDate(previewPic) {
    console.log("--> upDate event triggered successfully!");
    console.log("previewPic alt text: " + previewPic.alt);
    console.log("previewPic source URL: " + previewPic.src);
    var imageElement = document.getElementById("image");

    imageElement.innerHTML = previewPic.alt;
    imageElement.style.backgroundImage = "url('" + previewPic.src + "')";
}


function unDo() {
   
    console.log("--> unDo event triggered: Resetting display to original state.");
    var imageElement = document.getElementById("image");
    imageElement.style.backgroundImage = "url('')";
    imageElement.innerHTML = "Hover over an image below to display here.";
}
