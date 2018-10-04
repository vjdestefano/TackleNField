// Vinny Destefano

$(document).ready(function() {
    
   let url = "https://via.placeholder.com/250x250"
  
for (let i = 0; i < 25; i++) {
   
    let divs = $("<div>");
    divs.addClass("col-4");
    divs.attr("style","padding-left:5%; padding-bottom:2%;");

    let img = $("<img>");
    img.addClass("responsive");
    img.attr("src",url);

    divs.append(img);

    $("#selling-items").append(divs);

    }

 
});
