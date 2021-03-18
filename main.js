var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");


var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://raw.githubusercontent.com/Mohankandregula-pixel/AJAX---Quiz/main/mohan.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText)
        mohanHTML(ourData);
        };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function mohanHTML(data){
    var htmlString = "";

    for(i=0; i < data.length; i++) {
        htmlString += data[i];
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}