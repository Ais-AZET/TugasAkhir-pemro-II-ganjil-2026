$(document).ready(function() {
    setTimeout(function() {
        $("body").addClass("page-loaded");
    }, 50);

    function keluarHalaman(targetUrl) {
        $("body").removeClass("page-loaded");
        $("body").css("transform", "translateX(100px)");
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 400);
    }

    $("#submit-reg").on("click", function() {
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        if (username === "" || password === "") {
            alert("Harap isi Username dan Password terlebih dahulu!");
            return false;
        }

        keluarHalaman("home.html");
    });

    $(".back-link").on("click", function(e) {
        e.preventDefault();
        var urlTujuan = $(this).attr("href");
        keluarHalaman(urlTujuan);
    });
});