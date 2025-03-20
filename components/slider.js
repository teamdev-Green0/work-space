function loadComponent(id, file) {
    return fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}
//スライダーとそれ以外のJSを一緒にしてもうたあ//
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "components/header.html");
    loadComponent("cards", "components/cards.html");
    loadComponent("footer", "components/footer.html");
    loadComponent("slider", "components/Slider.html").then(() => {
        console.log("Slider loaded!");

        
        var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExample'), {
            interval: 2000
        });
    });
});
