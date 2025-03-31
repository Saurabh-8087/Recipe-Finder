function recipeDetails(){

  const recipe =  (localStorage.getItem('selectRecipe'));


  if(recipe){
    document.getElementById('recipeDetails').innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}">
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
  } else {
    document.getElementById('recipeDetails').innerHTML = '<p>Recipe not found!</p>';
  }
  

}

function goBack(){
  window.location.href = 'index-recipe.html';
}

recipeDetails();