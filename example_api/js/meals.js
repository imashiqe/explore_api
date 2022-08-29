const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const  mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        
        <div onclick="loadMealDetail(${meal.idMeal})"  class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        
        `;

        mealsContainer.appendChild(mealDiv);
    })
}

const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

const loadMealDetail = (idMeal) => {
    // console.log('displayMealDetail ', idMeal)
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

   fetch(url)
   .then(res => res.json())
   .then(data => displayMealDetail(data.meals[0]));

}

const displayMealDetail = meal => {
   const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = ``
   const mealDiv = document.createElement('div');
   mealDiv.classList.add('card');
   mealDiv.innerHTML = `
   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
     <p class="card-text"></p>
   </div>

   `;

   detailContainer.appendChild(mealDiv);
   
}


 loadMeals('')