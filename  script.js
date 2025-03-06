// Display the current year dynamically in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for better UX (Optional)
$(document).ready(function(){
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
