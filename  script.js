// Display the current year dynamically in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in effect on scroll
$(document).ready(function() {
    $(window).on("scroll", function() {
        $(".fade-in").each(function() {
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollPosition = $(window).scrollTop();

            if (scrollPosition + windowHeight - 50 > position) {
                $(this).addClass("active");
            }
        });
    });

    // Trigger the effect on load
    $(window).trigger("scroll");
});
