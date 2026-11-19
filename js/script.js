// dynamic footer
let year = new Date().getFullYear();
document.querySelector(".current-year").textContent = year;

// back to top button
document.querySelector(".back-to-top").addEventListener("click", function() {
    window.scrollTo(0, 0);
});

// search function
const pages = [
    { title: "Home", url: "index.html", keywords: "engaged learning opportunities students" },
    { title: "Preparing for Your Experience", url: "prep.html", keywords: "preparation goals planning resources" },
    { title: "Starting Your Experience", url: "starting.html", keywords: "starting projects teamwork communication" },
    { title: "During Your Experience", url: "during.html", keywords: "reflection progress challenges collaboration" }
]; // scope

const searchInput = document.querySelector(".site-search");
const searchResults = document.querySelector(".search-results");

if (searchInput && searchResults) {
    searchInput.addEventListener("input", function() {
        const keyword = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";

        if (keyword.trim() === "") { // extra spaces handling
            return;
        }

        pages.forEach(function(page) {
            if ((page.title + " " + page.keywords).toLowerCase().includes(keyword)) {
                const link = document.createElement("a");
                link.href = page.url;
                link.textContent = page.title;
                link.style.display = "block";
                searchResults.appendChild(link);
            }
        });

        if (searchResults.children.length === 0) { // null check
            searchResults.textContent = "No matching pages found.";
        }
    });
}

// Text size controls
const smaller = document.querySelector(".text-smaller");
const larger = document.querySelector(".text-larger");

let textSize = 16;

if (smaller && larger) {
    smaller.addEventListener("click", function() {
        if (textSize > 14) {
            textSize -= 2;
            document.querySelector("main").style.fontSize = textSize + "px";
        }
    });

    larger.addEventListener("click", function() {
        if (textSize < 24) {
            textSize += 2;
            document.querySelector("main").style.fontSize = textSize + "px";
        }
    });
}