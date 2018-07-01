const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Drag Functions
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => this.classList.add('invisible'), 0);
}


function dragEnter() {
  this.classList.add('hovered');
}

function dragOver(e) {
  e.preventDefault();
  // this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered')
}

function dragDrop() {
  this.appendChild(fill);
}

function dragEnd() {
  this.classList.remove('hold');
  this.classList.remove('invisible');
}

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Empties Listeners
empties.forEach((empty) => {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});
