window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
        displayMeal(meal);
      })
      .catch(error => console.error(error));
  });
  
  function displayMeal(meal) {
    const mealContainer = document.getElementById('meal-container');
  
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');
  
    const mealImage = document.createElement('img');
    mealImage.src = meal.strMealThumb;
    mealImage.alt = meal.strMeal;
    mealDiv.appendChild(mealImage);
  
    const mealName = document.createElement('h2');
    mealName.textContent = meal.strMeal;
    mealDiv.appendChild(mealName);
  
    const mealInstructions = document.createElement('p');
    mealInstructions.textContent = meal.strInstructions;
    mealDiv.appendChild(mealInstructions);
  
    mealContainer.appendChild(mealDiv);
  }