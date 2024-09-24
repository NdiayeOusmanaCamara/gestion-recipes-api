## gestion-recipe-api

## Decription

j'ai developper une application de gestion de recettes sous vuejs,
pour assurer la continuiter du projet, il met demandé creé un API qui permet de gérer des recettes, en fournissant des fonctionnalités CRUD (Create, Read, Update, Delete). en utilisant expressjs et mysql pour la gestion de la base de données.

## prérequis

Avant de commencer, installé les éléments suivants :

node.js
Mysql
Postman (pour faite le test)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository** :

    git clone https://github.com/Mangassouba/gestion-recipes-api.git

Accédez au dossier du projet :

    cd gestion-recipes-api

Installez les dépendances :

    npm install

Utilisation

Pour démarrer l'application, exécutez la commande suivante :

    npm start

## Méthodes de requête

La méthode request est la façon dont nous distinguons le type d'action que notre point de terminaison est « invité » à effectuer.

- GET: Utilisé pour récupérer un seul élément ou une collection d'éléments.
- POST: Utilisé lors de la création de nouveaux éléments, par exemple un nouvel recettes.
- PATCH: Utilisé pour mettre à jour un ou plusieurs champs d'un élément.
- DELETE: Utilisé pour supprimer un élément.

Exemple

- GET

url: localhost:3060/recipes

        [
                {
                    "id": 2,
                    "titre": "Crêpes classiques",
                    "type": "Dessert",
                    "ingredient": "250g de farine, 3 ?ufs"
                },
                {
                    "id": 3,
                    "titre": "Soupe de légumes",
                    "type": "Entrée",
                    "ingredient": "3 carottes, 2 pommes de terre"
                }
            ]

- POST

URL: localhost:3060/recipes

        {
        "titre": "Salades Césars",
        "type": "Entrée",
        "ingredient": "Laitue, Poulet, Parmesan, Croutons"
        }

- PATCH
  URL: localhost:3060/recipes/1

          {
          "titre": "Salade Césars",
          "type": "Entrée",
          "ingredient": "Laitue, Poulet, Parmesan, Croutons"
          }

-DELETE:

URL: localhost:3060/recipes/1

Auteur

Hama Houllah Mangassouba

Contributeur

N'Diaye Ousmane Camara
