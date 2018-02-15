// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function() {

  let height, width, color, table, isColoring;
  isColoring = false;

  $('#submit').click(function(event) {
    event.preventDefault();
    height = $('#input_height').val();
    width = $('#input_width').val();
    color = $('#color_picker').val();
    table = $('#pixel_canvas');
    table.children().remove();
    makeGrid();
  });

  function makeGrid() {
    // create rows
    for(var h = 0; h <= height; h++){
      table.append('<tr></tr>');
      // create columns
      for(var w = 0; w <= width; w++) {
        $('tr').last().append('<td></td>');
      }
    }
    dragColor();
  }

  function dragColor(){
    table.on('mousedown', 'td', function() {
      mouseDown = true;
    });

    $(document).mouseup(function() {
      mouseDown = false;
    });

    table.on('mousemove', 'td', function() {
      if(mouseDown) {
        $(this).css('background-color', color);
      }
    });
  }

  $('#color_picker').change(function() {
    color = $('#color_picker').val();
  });

  $('#fill').click(function() {
    table.children().find('td').css('background-color', color);
  });

});
