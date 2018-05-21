var container = document.querySelector(".container");
container.addEventListener("click", redBorders);

function redBorders(event) {
    var clicked = event.target;
    if (clicked.tagName.toLowerCase() !== "img") {
        return;
    }

    clicked.classList.toggle("redBorder");
    if (clicked.width !== 300) {
        event.stopPropagation();
    }

}

document.addEventListener('click', function (event) {
    console.log(event.target);
})