const input = document.querySelector('input');
const wordElement = document.querySelector('.word');
const definitionElement = document.querySelector('.denificion');
const synonymElement = document.querySelector('.sinonimoText');


input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
  }
});