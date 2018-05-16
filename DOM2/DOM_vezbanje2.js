// var firstDiv = document.querySelector(".first");
// var secondDiv = document.querySelector(".second");

// function makeDropdown(array, node) {

//     var select = document.createElement("select");

//     for (var i = 0; i < array.length; i++) {
//         var option = document.createElement("option");
//         option.textContent = array[i];
//         select.appendChild(option);
//     }

//         node.appendChild(select);

// }

// makeDropdown(['volvo','audi','bmw'],firstDiv);
// makeDropdown(['bmx','ponika','capriolo'],secondDiv);


function validateForm () {
    var inputList = document.querySelectorAll("input");
     inputList.forEach(function(input) {
         if (input.hasAttribute("required") && input.value === "") {
             input.classList.add("required");
         }else {
            input.classList.remove("required");
         }
     })
}

validateForm();