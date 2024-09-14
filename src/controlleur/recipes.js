const db = require('../config/db');

async function getRecipes(){
    try {
        const connection = await db.getConnection();

    const [result] = await connection.execute("SELECT * FROM recipes");
    return result;
    } catch (error) {
        throw error.message
    }

}

async  function getRecipesById(id){
   try {
    const connection = await db.getConnection();
    const [result] = await connection.execute("SELECT * FROM recipes WHERE id = ?",
        [id]
    );
    return result;
   } catch (error) {
    throw error.message;
   }
} 

async function editRecipes(id,titre,type,ingredient){
   try {
    const connection = await db.getConnection();
    const [result] = await connection.execute("UPDATE repices SET titre = ?,type = ?,ingredient : ? WHERE id = ?",
        [titre,type,ingredient,id]
    );
    return result
   } catch (error) {
    throw error.message
   }
}

async function destroyRecipes(id){
    try {
        const connection = await db.getConnection();
    } catch (error) {
        throw error.message;
    }
}

module.exports = {
    getRecipes,
    editRecipes,
    destroyRecipes,
    getRecipesById
}