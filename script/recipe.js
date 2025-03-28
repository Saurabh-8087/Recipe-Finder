import { loadrecipe } from "./recipe-data.js";

let recipes = [];

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