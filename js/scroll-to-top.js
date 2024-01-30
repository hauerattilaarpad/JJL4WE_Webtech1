document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", handleScroll);
});

function handleScroll() {
    var scrollButton = document.querySelector(".scroll-to-top");
    var scrollPosition = window.innerHeight + window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight - 100) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}