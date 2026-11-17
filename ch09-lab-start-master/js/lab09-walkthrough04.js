function simpleHandler(event) {
    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";

        // change display mode after 1000 milliseconds
        setTimeout(function() {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // change class after 500 milliseconds
        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}
var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);
var img = document.getElementById("mainImage");

/* changes the style of the image when it is moused over */
img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});
/* remove the styling when mouse leaves image */
img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});