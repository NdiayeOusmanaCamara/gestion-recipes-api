import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import Recipe from "../models/Recipe.js";

const addRequestValidator = [
  check("titre")
    .not()
    .isEmpty()
    .withMessage("Le titre ne peut pas être vide!")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("Le titre doit contenir entre 5 et 100 caractères.")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getRecipeByTitle(value);
      if (recipe) {
        throw new Error("Cette recette existe déjà!");
      }
      return true;
    }),

  check("ingredients")
    .not()
    .isEmpty()
    .withMessage("Les ingrédients sont obligatoires!")
    .bail()
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "Les ingrédients doivent contenir entre 10 et 500 caractères.",
    ),

  check("type")
    .not()
    .isEmpty()
    .withMessage("Le type est obligatoire!")
    .bail()
    .isIn(["entrée", "plat", "dessert"])
    .withMessage("Le type doit être soit 'entrée', 'plat', ou 'dessert'."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire!")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getRecipeById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

const getByIdValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire!")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getRecipeById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

const updateValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("L'ID est obligatoire!")
    .bail()
    .custom(async (value) => {
      const recipe = await Recipe.getRecipeById(value);
      if (!recipe) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),

  check("titre")
    .optional()
    .isLength({ min: 5, max: 100 })
    .withMessage("Le titre doit contenir entre 5 et 100 caractères."),

  check("type")
    .optional()
    .isIn(["entrée", "plat", "dessert"])
    .withMessage("Le type doit être soit 'entrée', 'plat', ou 'dessert'."),

  check("ingredients")
    .optional()
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "Les ingrédients doivent contenir entre 10 et 500 caractères.",
    ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    }
    next();
  },
];

export {
  addRequestValidator,
  deleteRequestValidator,
  updateValidator,
  getByIdValidator,
};
