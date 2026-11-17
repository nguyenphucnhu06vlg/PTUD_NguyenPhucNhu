$(function () {

    // Khi di chuyển chuột vào panel
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })

        // Khi chuột rời khỏi panel
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })

        // Khi click vào panel
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");
        });

});