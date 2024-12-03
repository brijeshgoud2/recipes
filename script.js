// Function to fetch recipes based on search term and selected cuisine
async function getRecipes() {
    const searchQuery = document.getElementById("search").value;
    const cuisine = document.getElementById("cuisine").value;
  
    // Use this URL if the search term is 'lamb' or related to Indian cuisine
    if (searchQuery.toLowerCase().includes("lamb") || cuisine.toLowerCase() === "indian") {
      // Here, you could add an external link to a specific Indian recipe website
      const indianRecipeLink = `https://www.sanjeevkapoor.com/Search.aspx?search=lamb`;  // Example URL
      alert(`You can find Indian lamb recipes here: ${indianRecipeLink}`);
      return;
    }
  
    // Use TheMealDB API for other cuisines if not Indian or lamb
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}&c=${cuisine}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.meals) {
      displayRecipes(data.meals);
    } else {
      alert("No recipes found");
    }
  }
  
  // Function to display the fetched recipes on the page
  function displayRecipes(recipes) {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = '';  // Clear previous results
  
    recipes.forEach(recipe => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
  
      const img = document.createElement("img");
      img.src = recipe.strMealThumb;
      img.alt = recipe.strMeal;
  
      const title = document.createElement("h3");
      title.textContent = recipe.strMeal;
  
      const details = document.createElement("p");
      details.textContent = `Cuisine: ${recipe.strArea}`;
  
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(details);
  
      recipeContainer.appendChild(card);
    });
  }
  