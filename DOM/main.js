function selector() {
    var ul = document.querySelector(".second");
    ul.className += " colorIt";
};

selector();

function selectAllLi() {
    var listItems = document.querySelectorAll("li");

    for (var li of listItems) {
        li.className += " colorBg";
    }

};

selectAllLi();

function selectLast() {
    var lastLi = document.querySelectorAll(".lastUl li");



    for (var i = 0; i < lastLi.length; i++) {
        lastLi[i].className += " colorLi";
    }
};

selectLast();

function traversing() {
    var active = document.querySelector(".active");
    active.className = "";
    active.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
};

traversing();

function addInnerHTML(array, elementOfDOM) {
    var elementHtml = '<select>'
    for(var i = 0; i<array.length; i++) {
        elementHtml += '<option'+' value="'+array[i]+'">'+array[i]+'</option>'
    }
    elementHtml += '</select>';

    elementOfDOM.innerHTML += elementHtml;
}

addInnerHTML(["volvo","saab","mercedes"], document.querySelector(".firstDiv"));
addInnerHTML(["volv23o","saawerb","mqwerercedes"], document.querySelector(".firstDiv"));
addInnerHTML(["volv3443o","saab","mercedes"], document.querySelector(".lastDiv"));

// addInnerHTML(['<select>','<option value="volvo">Volvo</option>','<option value="saab">Saab</option>','<option value="mercedes">Mercedes</option>','<optionvalue="audi">Audi</option>','</select>'],document.querySelector(".lastDiv"));