/**
* @description Creates a grid and hooks up event handlers
* @param {number} height - The number of rows in the grid
* @param {number} width - The number of columns in the grid
*/
function makeGrid(height, width) {
  // get canvas and colorPicker
  const canvas = $('#pixel_canvas');
  const colorPicker = $('#colorPicker');
  var table = document.getElementById("pixel_canvas");

  // remove previous picture.
  if (canvas.children().length > 0)
  {
    canvas.empty();
  }

  // Build up grid in canvas (used example from review feedback)
  for (let h = 0; h < height; h++) {
    var row = table.insertRow(h);
    for (let w = 0; w < width; w++) {
      row.insertCell(w);
    }
  }

  // Add an event listener to each cell
  canvas.children().find('td').each(function() {
    $(this).on('click', function() {
      // Apply the currently selected color to this cell.
      this.style.backgroundColor = colorPicker.val();
    });
  });
}

// Don't hook up the submit click event until the HTML is all loaded.
// This function will create the grid once the user has pressed the submit button.
$(document).ready(function() {
  $('#size-picker').submit(function(evt) {
    evt.preventDefault();
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    makeGrid(height, width);
  })
});