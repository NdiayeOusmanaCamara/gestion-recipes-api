import db from "../config/db.js";

class Recipe {
  static async getAllRecipes() {
    const results = await db.query("SELECT * FROM recipes");
    return results;
  }
 
  static async getRecipeById(id) {
    const [result] = await db.query("SELECT * FROM recipes WHERE id = ?", [id]);
    return result;
  }

  static async createRecipe(titre, type, ingredient) {
    const [result] = await db.query(
      "INSERT INTO recipes (titre, type, ingredient) VALUES (?, ?, ?)",
      [titre, type, ingredient],
    );
    return result;
  }

  static async updateRecipe(id, titre, type, ingredient) {
    const result = await db.query(
      "UPDATE recipes SET titre = ?, type = ?, ingredient = ? WHERE id = ?",
      [titre, type, ingredient, id],
    );
    return result;
  }

  static async deleteRecipe(id) {
    const [result] = await db.query("DELETE FROM recipes WHERE id = ?", [id]);
    return result;
  }
}

export default Recipe;
