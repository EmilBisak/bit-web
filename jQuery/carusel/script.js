$(window).on("click", moveBox);

function moveBox() {
    $(".box").animate({
        left: "+=50px",
        top: "+=30px",
        width: "+=100px",
        height: "+=100px"
    });
}