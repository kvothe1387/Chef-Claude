# Chef Claude Recipe App

## Overview
Chef Claude Recipe App is a React application that allows users to input ingredients they have on hand and generate recipe suggestions using AI. The app connects to either Chef Claude or Mistral AI to generate customized recipes based on the user's available ingredients.

## Features
- Add ingredients to your inventory
- View a list of your available ingredients
- Generate AI-powered recipe suggestions
- View recipe details with proper markdown formatting

## Project Structure
```
chef-claude-recipe-app/
├── src/
│   ├── components/
│   │   ├── ClaudeRecipe.jsx
│   │   ├── IngredientsList.jsx
│   │   └── Header.jsx
│   ├── ai/
│   │   └── index.js
│   ├── App.jsx
│   ├── Main.jsx
│   └── index.jsx
├── public/
│   ├── index.html
│   └── images/
│       └── chef-claude-icon.png
└── package.json
```

## Components

### Main.jsx
The main container component that manages the application state, including:
- Ingredient list management
- Recipe generation
- Visibility toggling

### IngredientsList.jsx
Displays the list of available ingredients and provides the interface to generate recipes when enough ingredients are available.

### ClaudeRecipe.jsx
Renders the AI-generated recipe using react-markdown to properly format the markdown response into HTML elements.

## AI Integration

The application uses two possible AI services for recipe generation:
- `getRecipeFromChefClaude(ingredients)` - Uses Claude AI to generate recipes
- `getRecipeFromMistral(ingredients)` - Uses Mistral AI as an alternative

Both functions accept an array of ingredients and return a promise that resolves to markdown-formatted recipe text.

## Usage

### Adding Ingredients
1. Type an ingredient name in the input field
2. Click "Add ingredient" or press Enter

### Generating a Recipe
1. Add at least 4 ingredients to your list
2. Click "Get a recipe" when the button appears
3. Wait for the AI to generate your personalized recipe
4. View the formatted recipe with instructions

## Installation

1. Clone the repository
```
git clone https://github.com/yourusername/chef-claude-recipe-app.git
```

2. Install dependencies
```
cd chef-claude-recipe-app
npm install
```

3. Start the development server
```
npm start
```

## Dependencies
- React
- react-markdown - For rendering markdown content
- Other dependencies as needed for your specific implementation

## Future Enhancements
- Recipe saving functionality
- Multiple recipe suggestions
- Ingredient quantity management
- Dietary restrictions and preferences
- Recipe rating system

## License
[MIT License]

## Credits
- AI recipe generation powered by Claude and Mistral
