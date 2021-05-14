let arrJob = ["Graphic Design", "Web Design", "Front End", "Back End", "Full Stack"];
let arrName = ["Fady", "Abdo", "Ahmad", "Zein", "Safi"];
let about3__h3 = document.querySelector("#about__3__h3");
let about3__h5 = document.querySelector("#about__3__h5");
let about3 = document.querySelector(".about__3__wrapper__heading");
let arrowLeft = document.querySelector(".about__3__wrapper__arrow__right");
let arrowRight = document.querySelector(".about__3__wrapper__arrow__left");
let stopPlayBtn = document.querySelector(".about__3__wrapper__shape");
stopPlayBtn.addEventListener("click", () => {
    about3.classList.toggle("open");
});
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
arrowRight.addEventListener("click", () => {
    about3__h3.innerHTML = random_item(arrJob);
    about3__h5.innerHTML = random_item(arrName);
});
arrowLeft.addEventListener("click", () => {
    about3__h3.innerHTML = random_item(arrJob);
    about3__h5.innerHTML = random_item(arrName);
});
