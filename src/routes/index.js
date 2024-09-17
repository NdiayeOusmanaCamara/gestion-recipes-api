import express from 'express';
import RecipeController from '../controlleur/recipes.js';

const router = express.Router();

router.get('/recipes', RecipeController.getAllRecipes);
router.get('/recipes/:id', RecipeController.getRecipeById);
router.post('/recipes', RecipeController.createRecipe);
router.put('/recipes/:id', RecipeController.updateRecipe);
router.delete('/recipes/:id', RecipeController.deleteRecipe);

export default router;
