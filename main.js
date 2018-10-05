// Vinny Destefano
//Making a simple filler content area
//simply sorts through an array and prints out what is in that position


$(document).ready(function() {
    
   let url = "https://via.placeholder.com/250x250";

   let nameSpaces = [
       "Test", "Bows", "Arrows",
       "Archery Goods", "this Might work", "boats",
       "Deer Mantales", "Guns", "Deer Gods",
       "Something Something Guns","im running out of ideas","LUL",
       "item - 25", "should this be here?", "item - 24", "this is item - 1", "test123", "hmm maybe i should get some lunch", "item - ID",
       "is this enough?", "this might be right","hahahah", "fishing with the boys", "would you like some lunch?","I've lost the will"
    ];
  
    for (let i = 0; i < 25; i++) {
   

        let randomNumber = Math.floor(Math.random() * 10000);


        let divs = $("<div>");
        divs.addClass("col-4");
        divs.attr("style","padding-left:5%; padding-bottom:2%;");

        let img = $("<img>");
        img.addClass("responsive");
        img.attr("src",url);

        let p = $("<p>");
        p.addClass("lead");
        p.attr("style","text-align:center;")
        p.html(nameSpaces[i])
       
        let itemTitle = $("<h5>");
        itemTitle.html("Item ID: " + randomNumber);


        divs.append(itemTitle);

        divs.append(img);

        divs.append(p);

        $("#selling-items").append(divs);

        }
        // end the loop for the appending items the ID area


 
});
