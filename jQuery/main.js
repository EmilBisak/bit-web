$(function(){
    console.log("Hello, World!!!");
    $("li:first").css("border-bottom", "1px solid black");
    $("li").css("text-transform", "uppercase");
    $("li:eq(3)").css("color", "red");
    var length = $("ul li").length;
    var middle = parseInt(length/2);
   $("li:eq("+middle+")").css("background-color", "blue");
})