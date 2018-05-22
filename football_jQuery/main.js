$(function () {
    var $stopButton = $("#btn")
    var $player = $(".player");
    $(document).on("click", movePlayer);


    function movePlayer(event) {
        $player.css({
            "top": event.offsetY - 50,
            "left": event.offsetX - 50,
        })
        console.log(event.offsetY);
    }

})