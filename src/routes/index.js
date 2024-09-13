const express = require('express');
const router = express.Router();
const recipesController = require('../controlleur/recipes');

router.get('/', async (req, res) => {
    try {
        const recipes = await recipesController.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await recipesController.getRecipesById(id);
        if (recipe.length === 0) {
            res.status(404).json({ error: "Recipe not found" });
        } else {
            res.status(200).json(recipe[0]);
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the recipe" });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { titre, type, ingredient } = req.body;
        const result = await recipesController.editRecipes(id, titre, type, ingredient);

        if (result.affectedRows === 0) {
            res.status(404).json({ error: "Recipe not found" });
        } else {
            res.status(200).json({ message: "Recipe updated successfully" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update the recipe" });
    }
});

module.exports = router;
