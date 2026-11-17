var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.push("Sun");
document.write("<table border=1>");
// Hàng tiêu đề
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    document.write("<th>" + daysOfWeek[i] + "</th>");
}

document.write("</tr>");

// Các ngày trong tháng
var dayNumber = 1;

for (var row = 0; row < 5; row++) {

    document.write("<tr>");

    for (var col = 0; col < 7; col++) {

        if (dayNumber <= 30) {
            document.write("<td>" + dayNumber + "</td>");
            dayNumber++;
        } else {
            document.write("<td></td>");
        }

    }

    document.write("</tr>");
}

document.write("</table>");