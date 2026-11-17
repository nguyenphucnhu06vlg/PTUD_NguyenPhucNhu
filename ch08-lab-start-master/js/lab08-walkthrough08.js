function outputBox(num) {
    var box = "<div class='movingDiv' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
// Biến toàn cục
var boxClass = 'movingDiv';

function outputBox(num) {

    var box = "<div class='" + boxClass + "' id='div" + num + "'>";

    box += "This is div " + num;

    box += "</div>";

    return box;
}