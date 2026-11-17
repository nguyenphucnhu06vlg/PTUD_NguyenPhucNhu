
$(function () {

    // Tạo ảnh Preview khi rê chuột vào ảnh nhỏ
    $('figure img').on('mouseover', function (e) {

        // Lấy nội dung alt và đường dẫn ảnh
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // Tạo phần tử div chứa ảnh xem trước
        var preview = $('<div id="preview"></div>');

        // Tạo hình ảnh lớn
        var image = $('<img src="' + newsrc + '">');

        // Tạo chú thích
        var caption = $('<p>' + alt + '</p>');

        // Đưa ảnh và chú thích vào preview
        preview.append(image);
        preview.append(caption);

        // Đưa preview vào cuối body
        $('body').append(preview);

        // Thêm hiệu ứng màu xám cho ảnh nhỏ
        $(this).addClass("gray");

        // Làm ảnh xem trước xuất hiện dần
        $("#preview").fadeIn(1000);

    });

    // Di chuyển ảnh Preview theo con trỏ chuột
    $('figure img').on('mousemove', movePreview);

    // Xóa ảnh Preview khi rời chuột
    $('figure img').on('mouseleave', removePreview);

});


// Hàm xóa ảnh Preview
function removePreview() {

    // Xóa class gray khỏi ảnh nhỏ
    $(this).removeClass("gray");

    // Xóa phần tử preview
    $("#preview").remove();

}


// Hàm di chuyển ảnh Preview
function movePreview(e) {

    // Cập nhật vị trí ảnh xem trước
    $("#preview")
        .css("top", (e.pageY - 10) + "px")
        .css("left", (e.pageX + 30) + "px");

}
