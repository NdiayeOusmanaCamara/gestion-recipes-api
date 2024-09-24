import Recipe from '../model/Recipe.js';

class RecipeController {
  static async getAllRecipes(req, res) {
    try {
      const [recipes] = await Recipe.getAllRecipes();
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).json();
    }
  }

  static async getRecipeById(req, res) {
    try {
      const { id } = req.params;
      const recipe = await Recipe.getRecipeById(id);
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: 'Recipe not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async createRecipe(req, res) {
    try {
      const {titre, type, ingredient } = req.body;
      const recipe = await Recipe.createRecipe(titre, type, ingredient);
      res.status(201).json(recipe);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateRecipe(req, res) {
    try {
      const { id } = req.params;
      const { titre, type, ingredient } = req.body;
      const updatedRecipe = await Recipe.updateRecipe(id,titre, type, ingredient);
      res.status(200).json(updatedRecipe);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteRecipe(req, res) {
    try {
      const { id } = req.params;
      await Recipe.deleteRecipe(id);
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default RecipeController;
