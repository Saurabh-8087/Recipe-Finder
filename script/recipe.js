import { loadrecipe } from "./recipe-data.js";

let recipes = [];

function searchRecipes(){
  const searchInput = document.getElementById('ingredientSearch').value.toLowerCase(); 

  const filteredRecipes = recipes.filter(recipe =>
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
  );

  console.log(displayRecipe(filteredRecipes));
}

window.searchRecipes = searchRecipes;

function displayRecipe(recipeArray){
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML='';

  recipeArray.forEach((recipe)=>{

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML=`
    <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
      <button class="js-details-button  detalis-button">Details</button>
    `;

    
    recipeList.appendChild(recipeCard);

  });
}



async function  initialize(){
  recipes = await loadrecipe();
  displayRecipe(recipes);

}

initialize();