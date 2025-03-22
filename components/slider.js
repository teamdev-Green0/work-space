function loadComponent(id, file) {
    fetch(file)
        .then(res => res.ok ? res.text() : Promise.reject(`Failed to load ${file}`))
        .then(html => document.getElementById(id).innerHTML = html)
        .catch(err => console.error(err));
}

const base = location.pathname.includes("/components/") ? "./" : "components/";

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", base + "header.html");
    loadComponent("cards", base + "cards.html");
    loadComponent("footer", base + "footer.html");
    loadComponent("slider", base + "Slider.html").then(() => {
        new bootstrap.Carousel(document.querySelector('#carouselExample'), { interval: 2000 });
    });
});
