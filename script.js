const search = document.getElementById("search");
const categories = document.querySelectorAll(".category");

search.addEventListener("input", function () {

    const text = search.value.toLowerCase();

    categories.forEach(function (category) {

        if (category.textContent.toLowerCase().includes(text)) {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }

    });

});
