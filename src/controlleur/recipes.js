
import { connPool } from '../config/db.js';

export default class Recipes{
 getRecipes(){
    try {
        const connection = connPool.getConnection();
        const [result] = connection.execute("SELECT * FROM recipes");
    } catch (error) {
        throw error.message;
    }finally{}
 }
}

// async function getRecipes(){
//     try {
//         const connection = await connPool.getConnection();

//     const [result] = await connection.execute("SELECT * FROM recipes");
//     return result;
//     } catch (error) {
//         throw error.message
//     }

// }

// async  function getRecipesById(id){
//    try {
//     const connection = await connPool.getConnection();
//     const [result] = await connection.execute("SELECT * FROM recipes WHERE id = ?",
//         [id]
//     );
//     return result;
//    } catch (error) {
//     throw error.message;
//    }
// } 

// async function editRecipes(id,titre,type,ingredient){
//    try {
//     const connection = await connPool.getConnection();
//     const [result] = await connection.execute("UPDATE repices SET titre = ?,type = ?,ingredient : ? WHERE id = ?",
//         [titre,type,ingredient,id]
//     );
//     return result
//    } catch (error) {
//     throw error.message
//    }
// }

// async function destroyRecipes(id){
//     try {
//         const connection = await connPool.getConnection();
//     } catch (error) {
//         throw error.message;
//     }
// }

// module.exports = {
//     getRecipes,
//     editRecipes,
//     destroyRecipes,
//     getRecipesById
// }