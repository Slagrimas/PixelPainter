function PixelPainter(width, height) {
  let pixelPaintDiv = document.getElementById("pixelPainter")
  let screen = document.createElement('div');
  let currentColor = '#FFFFFF';
  screen.className = 'scream';
  pixelPaintDiv.appendChild(screen);
  let cells = document.getElementsByClassName('cells');
  let rdCol = 'rgb(' + random(253) + ',' + random(253) + ',' + random(253) + ')';
  //object that holds the color and screen name of the swatch[i]
  let colorsArr = [
    { name: 'red', colur: '#FF0000' },
    { name: 'green', colur: '#00FF00' },
    { name: 'blue', colur: '#0000FF' },
    { name: 'black', colur: '#000000' },
    { name: 'silver', colur: '#C0C0C0' },
    { name: 'maroon', colur: '#800000' },
    { name: 'yellow', colur: '#FFFF00' },
    { name: 'olive', colur: '#808000' },
    { name: 'lime', colur: '#00FF00' },
    { name: 'aqua', colur: '#00FFFF' },
    { name: 'teal', colur: '#008080' },
    { name: 'navy', colur: '#000080' },
    { name: 'fuchsia', colur: '#FF00FF' },
    { name: 'purple', colur: '#800080' },
    { name: 'royalBlue', colur: '#4169E1' },
    { name: 'turquoise', colur: '#40E0D0' },
    { name: 'gold', colur: '#FFD700' },
    { name: 'chocolate', colur: '#D2691E' },
    { name: 'smokeWhite', colur: '#DFDFDF' }
  ]
  //create main canvas
  function createCanvas(width, height) {
    for (let i = 0; i < height; i++) {
      let row = document.createElement('div');
      row.id = 'row';

      for (let j = 0; j < width; j++) {
        c = document.createElement("div");
        row.appendChild(c);
        c.className = "cells";

        c.addEventListener('mousedown', function (event) {
          event.target.style.backgroundColor = currentColor;
          if (isMouseDown === true) {
            return currentColor;
          } else {
            throw err;
          }
        })
      }

      pixelPaintDiv.appendChild(row);
    }
  }

  createCanvas(width, height);

  //create color pallet
  let colorDiv = document.createElement('div');
  colorDiv.className = 'color-container';
  pixelPaintDiv.appendChild(colorDiv);
  function createPallet(colorsArr) {
    for (let i = 0; i < colorsArr.length; i++) {
      let colorCell = document.createElement('div');
      colorCell.style.backgroundColor = colorsArr[i].colur;
      colorCell.className = 'colorcell';
      colorDiv.appendChild(colorCell);
      colorCell.addEventListener('click', function () {
        screen.innerHTML = colorsArr[i].name;
        screen.style.backgroundColor = colorsArr[i].colur;
        currentColor = colorsArr[i].colur;
      })
    }
  }
  createPallet(colorsArr);

  let buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';
  pixelPaintDiv.appendChild(buttonContainer);

  let clearButton = document.createElement('button')
  clearButton.className = 'clearButton';
  clearButton.innerHTML = 'clear';

  let eraseButton = document.createElement('button')
  eraseButton.className = 'eraseButton';
  eraseButton.innerHTML = 'erase';

  let randomColorButton = document.createElement('button');
  randomColorButton.className = 'randomColor';
  randomColorButton.innerHTML = 'randomColor';

  buttonContainer.appendChild(clearButton);
  buttonContainer.appendChild(eraseButton);
  buttonContainer.appendChild(randomColorButton);

  randomColorButton.addEventListener('click', function () {
    currentColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
  });
  clearButton.addEventListener('click', clearFunc);
  eraseButton.addEventListener('click', eraseFunc);

  function clearFunc() {
    c = document.getElementsByClassName('cells')
    for (let i = 0; i < c.length; i++) {
      screen.innerHTML = 'All Clear';
      c[i].style.backgroundColor = 'white';
    }
  }
  function eraseFunc() {
    screen.innerHTML = 'erase';
    currentColor = 'white';
  }
  function random(number) {
    return Math.floor(Math.random() * (number + 2));
  }

}

PixelPainter(13, 13);