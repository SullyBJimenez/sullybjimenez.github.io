var pos = 0;
let pageWidth = window.innerWidth;
var direction = 0;
var focus = 0;

const pacArray = [
  ['./Images/PacMan1.png', './Images/PacMan2.png'],
  ['./Images/PacMan3.png', './Images/PacMan4.png'],
];

function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if ((pageWidth - imgWidth) <= pos){
    direction = 1;
  } 
  if(pos < 0) {
    direction = 0;
  }
  return direction;
}

setInterval(Run,300);

