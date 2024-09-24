## Gestion de Recettes - Application Node.js
## Description

Cette application est un gestionnaire de recettes de cuisine développé avec Node.js et Express pour le backend, ainsi que MySQL pour la gestion des données. Elle permet de créer, récupérer, mettre à jour et supprimer des recettes. L'application utilise Jasmine pour les tests unitaires afin de valider les différentes fonctionnalitésUD (Create, Read, Update, Delete). en utilisant expressjs et mysql pour la gestion de la base de données.

## prérequis

Avant de démarrer, assurez-vous d'avoir installé les logiciels suivants :

- Node.js (version 14+)
- MySQL (version 5.7+)
- npm (le gestionnaire de paquets Node.js)

## Technologies Utilisées
- **Node.js** : Plateforme JavaScript côté serveur.
- **Express** : Framework web pour Node.js.
- **MySQL** : Système de gestion de base de données relationnelle.
- **Jasmine** : Framework de tests pour JavaScript.
- **Postman** : Utilisé pour tester l'API.
## Installation

1. Clonez le dépôt sur votre machine locale :
```
git clone https://github.com/Mangassouba/gestion-recipes-api.git
```
2. Accédez au répertoire du projet :
```
cd gestion-recipes-api
```
3. Installez les dépendances du projet :
```
npm install
```
## Utilisation

1. Pour démarrer l'application, exécutez la commande suivante :
```
 npm start
```
2. Utilisez Postman pour tester les endpoints disponibles :
- **GET** ``/recipes`` : Récupérer toutes les recettes.
- **GET** ``/recipes/:id`` : Récupérer une recette spécifique par son ID.
- **POST** ``/recipes`` : Créer une nouvelle recette.
- **PUT** ``/recipes/:id`` : Mettre à jour une recette existante.
- **DELETE** ``/recipes/:id`` : Supprimer une recette.

Exemple

- GET
URL: localhost:3060/recipes

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

- PUT
  URL: localhost:3060/recipes/1

          {
          "titre": "Salade Césars",
          "type": "Entrée",
          "ingredient": "Laitue, Poulet, Parmesan, Croutons"
          }

-DELETE:

URL: localhost:3060/recipes/1

## Tests
L'application utilise Jasmine pour les tests unitaires. Pour exécuter les tests, utilisez la commande suivante :
```
npm test
```
Exemple:

![](/src/assets/images/img%20test.JPG)


Les tests incluent la vérification des fonctionnalités principales telles que la création, la récupération, la mise à jour, et la suppression des recettes.




## Auteur

[Hama Houllah Mangassouba](https://github.com/Mangassouba)

Contributeur

[N'Diaye Ousmane Camara](https://github.com/NdiayeOusmanaCamara)
