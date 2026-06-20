const hireme = document.querySelector("#hireme");
const view = document.querySelector("#viewproject");

hireme.addEventListener("click", function () {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
});

view.addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});