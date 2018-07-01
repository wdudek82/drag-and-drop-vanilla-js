const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Drag Functions
function dragStart() {
  console.log('start');
  this.classList.add('hold');

  setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEvent() {
  console.log('dragged');
}

function dragEnd() {
  console.log('end');
  this.classList.remove('hold');
  this.classList.remove('invisible');
}

function dragEnter() {
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered')
}

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('dragged', dragEvent);

// Empties Listeners
console.log(empties);
empties.forEach((empty) => {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
});
