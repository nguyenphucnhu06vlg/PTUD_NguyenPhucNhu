$(function() {

    $("#consume").click(function() {

    var url =
        "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

    // Tạo danh sách ul
    $("#results").html("<ul></ul>");

    $.get(url, function(data, status) {

        if (status == "success") {

            $.each(data, function(index, value) {

                var li = $('<li/>').html(value.name);

                li.appendTo("div#results ul");

            });

        }

    });

});
});