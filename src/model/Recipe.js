import db from '../config/db.js';

class Recipe {
  static async getAllRecipes() {
    const results = await db.query('SELECT * FROM recipes');
    return results;
  }

  static async getRecipeById(id) {
    const result = await db.query('SELECT * FROM recipes WHERE id = ?', [id]);
    return result;
  }

  static async createRecipe(name, ingredients) {
    const result = await db.query('INSERT INTO recipes (name, ingredients) VALUES (?, ?)', [name, ingredients]);
    return result.insertId;
  }

  static async updateRecipe(id, name, ingredients) {
    const result = await db.query('UPDATE recipes SET name = ?, ingredients = ? WHERE id = ?', [name, ingredients, id]);
    return result;
  }

  static async deleteRecipe(id) {
    await db.query('DELETE FROM recipes WHERE id = ?', [id]);
  }
}

export default Recipe;
