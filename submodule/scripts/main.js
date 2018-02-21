let button = document.querySelector(".mdl-layout__button");
let imgSection = document.querySelector(".mld-layout__imgs");
let baconImg = document.querySelector(".mld-layout__img");

function cloneBacon() {
    let baconImg = document.querySelector(".mld-layout__img");
    let moreBacon = baconImg.cloneNode(true);
    imgSection.appendChild(moreBacon);
    }

button.addEventListener("click", cloneBacon);


console.log("działa")