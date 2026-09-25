/*
   Interactive Photo Gallery - JavaScript Implementation
   Course: Interactivity with JavaScript (University of Michigan / Coursera)
   Assignment: Week 2 - Interactive Photo Gallery
   Author: thntue
   Repository: https://github.com/thntue/coursera-ex-JavaScript
*/

/**
 * upDate(previewPic)
 * Triggered when the user hovers over a thumbnail image (onmouseover).
 * 
 * 1. Logs an event verification message.
 * 2. Logs the alt text and src URL of the hovered previewPic element.
 * 3. Changes the text of the element with id="image" to previewPic.alt.
 * 4. Changes the background-image of the element with id="image" to url('previewPic.src').
 * 
 * @param {HTMLImageElement} previewPic - The thumbnail image element triggering the event.
 */
function upDate(previewPic) {
    // 1. Verify that the event is firing
    console.log("--> upDate event triggered successfully!");

    // 2. Log previewPic details (alt text and source URL)
    console.log("previewPic alt text: " + previewPic.alt);
    console.log("previewPic source URL: " + previewPic.src);

    // 3. Find the element with id="image"
    var imageElement = document.getElementById("image");

    // 4. Update the text to match the alt attribute of the hovered preview image
    imageElement.innerHTML = previewPic.alt;

    // 5. Update the background image using the source URL of the hovered image
    imageElement.style.backgroundImage = "url('" + previewPic.src + "')";
}

/**
 * unDo()
 * Triggered when the user moves the mouse away from a thumbnail image (onmouseout).
 * 
 * 1. Logs an event verification message.
 * 2. Resets the background-image of the element with id="image" to url('').
 * 3. Restores the text of the element with id="image" to the original placeholder.
 */
function unDo() {
    // 1. Verify that the unDo event is firing
    console.log("--> unDo event triggered: Resetting display to original state.");

    // 2. Find the element with id="image"
    var imageElement = document.getElementById("image");

    // 3. Reset the background image back to the original value: url('')
    imageElement.style.backgroundImage = "url('')";

    // 4. Reset the text of the div back to the original text
    imageElement.innerHTML = "Hover over an image below to display here.";
}
