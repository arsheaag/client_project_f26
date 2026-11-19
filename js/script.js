// dynamic footer
let year = new Date().getFullYear();
document.querySelector(".current-year").textContent = year;

// back to top button
document.querySelector(".back-to-top").addEventListener("click", function() {
    window.scrollTo(0, 0);
});