const searchInput = document.querySelector(".search-box input");
const categories = document.querySelectorAll(".category");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    categories.forEach(function (category) {
        const text = category.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    });
});
