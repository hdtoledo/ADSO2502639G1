function countCharacters() {
    var textarea = document.getElementById('myTextarea');
    var count = textarea.value.length;
    var characterCount = document.getElementById('characterCount');
    characterCount.textContent = count;
  }
  