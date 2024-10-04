
import express from "express";
import recipeRoutes from "./src/routes/index.js";
import bodyParser from "body-parser";
import { config } from "dotenv";

config();

const app = express();
app.use(bodyParser.json());
app.use(recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`L'application est en ecoute sur port ${PORT}`);
});
