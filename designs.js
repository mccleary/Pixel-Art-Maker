// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let height, width, table, color, isColoring;
height = $('#input_height');
width = $('#input_width');
color = $('#color_picker');
table = $('#pixel_canvas');
isColoring = false;

function makeGrid() {
	$('#pixel_canvas').children().remove();
  // create rows
	for (var h = 0; h <= height.val(); h++){
    table.append("<tr></tr>");
    // create columns
		for (var w = 0; w <= width.val(); w++){
      $("tr").last().append("<td></td>");
		}
	}
}

// clears grid when submit is clicked
$('#sizePicker').submit(function(){
	event.preventDefault();
	makeGrid();
	dragColor();
});

// applies selected color in clicked grid cell
$('body').on('click', 'td',  function fillSquare(){
	$(this).css('background', $('#colorPicker').val());
});

// fills entire grid with selected color - not working
// $("#fill").click(function () {
// 	table.children().find("td").css("background-color", color);
// });


//mouse drag - currently not working
  $(table).on("mousedown", function() {
    mouseDown = true;
  });
  //mouse up
  $(table).on("mouseup", function() {
    mouseDown = false;
  });
  // mouse moving click
  $(table).on("mousemove","td", function(evt) {
    evt.preventDefault();
    if (mouseDown) {
      $(this).css("background-color", color);
    }
  });














// drag mouse ability: - not working
// function dragColor() {
// 	table.on("mousedown", "td", function() {
// 		isColoring = true;
// 	})
//
// 	$(document).mouseup(function() {
// 		isColoring = false;
// 	})
//
// 	table.on("mousemove", "td", function() {
// 		if (isColoring) {
// 		$(this).css("background-color", color);
// 		}
// 	})
// }
