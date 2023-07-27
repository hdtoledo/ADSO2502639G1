document.addEventListener("DOMContentLoaded", function () {
    const cards = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let moves = 0;
    let timerInterval;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
  
    const memoryBoard = document.querySelector(".memory-board");
    const movesElement = document.getElementById("moves");
    const timerElement = document.getElementById("timer");
  
    function startGame() {
      moves = 0;
      movesElement.textContent = moves;
      resetTimer();
      createMemoryBoard();
    }
  
    function createMemoryBoard() {
      memoryBoard.innerHTML = "";
      const shuffledCards = shuffleArray(cards.concat(cards));
      shuffledCards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.value = card;
        cardElement.textContent = card;
        cardElement.addEventListener("click", flipCard);
        memoryBoard.appendChild(cardElement);
      });
    }
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add("flipped");
  
      if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
      } else {
        hasFlippedCard = false;
        secondCard = this;
  
        checkForMatch();
      }
    }
  
    function checkForMatch() {
      let isMatch = firstCard.dataset.value === secondCard.dataset.value;
  
      updateMoves();
  
      isMatch ? disableCards() : unflipCards();
    }
  
    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
  
      resetBoard();
  
      if (checkWin()) {
        setTimeout(() => {
          alert("¡Has ganado!");
          startGame();
        }, 500);
      }
    }
  
    function unflipCards() {
      lockBoard = true;
  
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
  
        resetBoard();
      }, 1000);
    }
  
    function resetBoard() {
      [hasFlippedCard, lockBoard] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      timerElement.textContent = "0 segundos";
    }
  
    function updateMoves() {
      moves++;
      movesElement.textContent = moves;
    }
  
    function checkWin() {
      return (
        document.querySelectorAll(".card:not(.flipped)").length === 0
      );
    }
  
    function shuffleArray(array) {
      const shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [
          shuffledArray[randomIndex],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    }
  
    startGame();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let flippedCard = null;
  
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        if (flippedCard === null) {
          flippedCard = card;
          card.classList.add('flipped', 'rotate');
        } else if (flippedCard !== card) {
          setTimeout(() => {
            card.classList.add('flipped', 'rotate');
            if (flippedCard.textContent === card.textContent) {
              flippedCard.classList.add('hidden');
              card.classList.add('hidden');
            } else {
              flippedCard.classList.remove('flipped', 'rotate');
              card.classList.remove('flipped', 'rotate');
            }
            flippedCard = null;
          }, 1000); // 1 segundo para que la animación termine antes de girar la carta
        }
      });
    });
  });
  