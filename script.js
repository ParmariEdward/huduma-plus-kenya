const search = document.getElementById("search");

if (search) {
    const categories = document.querySelectorAll(".category");

    search.addEventListener("input", function () {
        const text = search.value.toLowerCase();

        categories.forEach(function (category) {
            category.style.display =
                category.textContent.toLowerCase().includes(text)
                ? "block"
                : "none";
        });
    });
}


const governmentSearch = document.getElementById("governmentSearch");

if (governmentSearch) {
    const services = document.querySelectorAll(".category");

    governmentSearch.addEventListener("input", function () {
        const text = governmentSearch.value.toLowerCase();

        services.forEach(function (service) {
            service.style.display =
                service.textContent.toLowerCase().includes(text)
                ? "block"
                : "none";
        });
    });
}


const educationSearch = document.getElementById("educationSearch");

if (educationSearch) {
    const services = document.querySelectorAll(".category");

    educationSearch.addEventListener("input", function () {
        const text = educationSearch.value.toLowerCase();

        services.forEach(function (service) {
            service.style.display =
                service.textContent.toLowerCase().includes(text)
                ? "block"
                : "none";
        });
    });
}
