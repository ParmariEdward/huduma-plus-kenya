const search = document.getElementById("search");

if (search) {
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
}

const governmentSearch = document.getElementById("governmentSearch");

if (governmentSearch) {
    const services = document.querySelectorAll(".category");

    governmentSearch.addEventListener("input", function () {
        const text = governmentSearch.value.toLowerCase();

        services.forEach(function (service) {
            if (service.textContent.toLowerCase().includes(text)) {
                service.style.display = "block";
            } else {
                service.style.display = "none";
            }
        });
    });
}
