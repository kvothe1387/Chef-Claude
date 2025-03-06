import React from "react"

export default function IngredientsList({ ingredients }) {
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section>
      <h2>Ingredients on hand: </h2>
      <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
    </section>
  )
}