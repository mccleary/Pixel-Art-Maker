// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {

	let height, width, table, color, isColoring, size;
	height = $('#input_height');
	width = $('#input_width');
	color = $('#color_picker');
	size = $('#sizePicker');
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


    $("#color-picker").change(function() {
        color = $("#color-picker").val();
    });

		// fills entire grid with selected color - not working
		$("#fill").click(function () {
			table.children().find("td").css("background-color", color);
		});

		// drag mouse ability: - not working
		function dragColor() {
			table.on("mousedown", "td", function() {
				isColoring = true;
			})

			$(document).mouseup(function() {
				isColoring = false;
			})

			table.on("mousemove", "td", function() {
				if (isColoring) {
				$(this).css("background-color", color);
				}
			})
		}

});
