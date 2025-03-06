import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe.jsx"
import IngredientsList from "./components/IngredientsList.jsx"

export default function Main() {

  const [ingredients, setIngredients] = React.useState(
    ["all the main spices", "pasta", "ground beef", "tomato paste"]
  )
  const [recipeShown, setRecipeShown] = React.useState(false)

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <>
          <IngredientsList ingredients={ingredients} />
          {ingredients.length > 3 && <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={toggleRecipeShown}>Get a recipe</button>
          </div>}
        </>
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  )
}