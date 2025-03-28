export async function loadrecipe(){
 
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();

  return data.recipes;

}

// console.log(loadrecipe());