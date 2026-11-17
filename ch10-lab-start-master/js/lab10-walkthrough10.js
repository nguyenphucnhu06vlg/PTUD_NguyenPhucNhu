$(function() {

    // Ẩn hình ảnh loading ban đầu
    $('.animLoading').hide();

    $("#consume").click(function() {

        // Hiển thị loading khi bắt đầu tải dữ liệu
        $('.animLoading').show();

        var url =
            "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url)

            // Xử lý khi yêu cầu thành công
            .done(function(data) {

                $.each(data, function(index, value) {

                    var li = $('<li/>').html(value.name);

                    li.appendTo("div#results ul");

                });

            })

            // Xử lý khi yêu cầu thất bại
            .fail(function(xhr, status, error) {

                alert("failed loading data - status=" + status +
                      " error=" + error);

            })

            // Luôn thực hiện sau khi yêu cầu kết thúc
            .always(function(data) {

                $('.animLoading').fadeOut("slow");

            });

    });

});