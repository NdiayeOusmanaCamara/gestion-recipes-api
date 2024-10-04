
import express from "express";
import recipeRoutes from "./routes/index.js";
import bodyParser from "body-parser";
import { config } from "dotenv";

config();

const app = express();
app.use(bodyParser.json());
app.use(recipeRoutes);

const PORT = process.env.NODE_DOCKER_PORT || 3070;
app.listen(PORT, () => {
  console.log(`L'application est en ecoute sur port ${PORT}`);
});
