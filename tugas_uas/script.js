document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.body.classList.add("page-loaded");
    }, 50);
});

const links = document.querySelectorAll("a:not(.back-link)"); 
links.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetUrl = this.getAttribute("href");
        
        if (targetUrl && targetUrl !== "#" && targetUrl !== "register.html" && !this.classList.contains('btn-close-custom')) {
            e.preventDefault();
            document.body.classList.remove("page-loaded");
            setTimeout(function () {
                window.location.href = targetUrl;
            }, 400);
        }
    });
});