// $(function () {
//     console.log($("li"));

//     $("li:first").addClass("bottom-border");
//     var li = $("li a").addClass("uppercase");
//     $("li.active").attr("style", "color: red");
//     var duzina = parseInt($("li").length / 2);
//     $("li:eq(" + duzina + ")").attr("style", "background-color: red");

// });

$(function () {
    var links = [
        "./img/0.jpg", 
        "./img/1.jpg", 
        "./img/2.jpg", 
        "./img/3.jpg", 
        "./img/4.jpg"
    ];

    var $container = $("<div>");
    var applyBorder = true;
    links.forEach(function (element) {
        var $img = $("<img>").attr("src", element);
        var width = calculateWidth();
        $img.width(width);

        if (width > 200) {
            applyBorder = false;
        }

        if (applyBorder) {
            $img.css('border', '5px solid green');
        }

        $container.append($img);
    })
    $("body").append($container);

    $("body").prepend("<h1> Content </h1>");

})

function calculateWidth() {
    return Math.floor(Math.random() * 500) + 100;
}