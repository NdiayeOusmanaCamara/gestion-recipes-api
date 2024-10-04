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
git clone https://github.com/NdiayeOusmanaCamara/gestion-recipes-api.git
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

Pour démarrer l'application, exécutez la commande suivante :

```
 npm start
```

## Endpoints de l'API

## GET /recipes

- Description : Récupère toutes les recettes.

- Réponse

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

## POST /recipes

- Description : Crée une nouvelle recette.

- Corps de la requête :

```
{

"titre": "Salades Césars",
"type": "Entrée",
"ingredient": "Laitue, Poulet, Parmesan, Croutons"

    }
```

- Reponse:

```
{
  "message": "Recette ajouter avec succès"
}
```

## PUT /recipes/id

- Description : Met à jour une recette existante.

- Corps de la requête :

          {
          "titre": "Salade Césars",
          "type": "Entrée",
          "ingredient": "Laitue, Poulet, Parmesan, Croutons"
          }

- Réponse :

```

{
  "message": "Recette mise à jour avec succès"
}
```

## DELETE /recipes/id

- Description : Supprime une recette par ID.
- Réponse :

```
{
  "message": "Recette supprimée avec succès"
}
```

## les tests unitaires

L'application utilise Jasmine pour les tests unitaires. Pour exécuter les tests, utilisez la commande suivante :

```
npm test
```

Exemple:

![](/src/assets/images/img%20test.JPG)

Les tests incluent la vérification des fonctionnalités principales telles que la création, la récupération, la mise à jour, et la suppression des recettes.

## fichier .env.example :

C'est un modèle du fichier .env. Il contient les noms des variables d'environnement que l'utilisateur doit configurer pour que l'application fonctionne correctement. Ce fichier est inclus dans le dépôt afin que les autres développeurs puissent savoir quelles variables sont nécessaires et les renseigner avec leurs propres valeurs locales.

Voici un exemple des variables présentes dans le fichier .env.example :

![](/src/assets/images/env.JPG)

- **DB_HOST** : L'hôte de la base de données (généralement localhost pour les environnements locaux).
- **DB_USER** : Le nom d'utilisateur MySQL (à définir par chaque utilisateur en fonction de leur configuration locale).
- **DB_PORT** : Le port utilisé par le serveur MySQL (par défaut, c'est 3306).
- **DB_PASSWORD** : Le mot de passe de l'utilisateur MySQL (chaque utilisateur doit entrer son mot de passe ici).
- **DB_NAME** : Le nom de la base de données utilisée par l'application (par défaut gestion-recipes dans cet exemple).
- **MYSQL_ROOT_PASSWORD**: Le mot de passe de l'utilisateur root de MySQL, nécessaire pour certaines configurations initiales.
- **MYSQL_DATABASE** : Le nom de la base de données MySQL que l'application va utiliser (ici, gestion-recipes).

## Analyse et formatage de code

L'analyse statique du code s'effectue à l'aide d'ESLint, tandis que le formatage est assuré par Prettier. Ces outils sont configurés pour être intégrés dans votre pipeline de développement afin de garantir un code propre et homogène

## Exécuter l'analyse du code :

```
npm run lint
```

## Exécuter le formatage automatique :

```
npm run format
```

## Containerisation avec Docker:
Ce projet utilise Docker pour la containerisation, ce qui permet de déployer facilement l'API dans n'importe quel environnement.

## Instructions pour Docker :

- **Lien vers l'image DockerHub:** [image Docker](https://hub.docker.com/r/ndiayecousmaneamara24/gestion-recipes-api-app)
- **Pour construire le conteneurs Docker:**
```
 docker-compose up --build 
```
- **Connexion au service MySQL:**
 ```
 docker exec -it gestion-recipes-api-app mysql -u root -p
```
- **Créer la base de données et les tables :**
```
 DROP DATABASE IF EXISTS `gestion-recipes`;
   CREATE DATABASE IF NOT EXISTS  `gestion-recipes`;
   USE gestion-recipes;

   CREATE TABLE IF NOT EXISTS recipes (
     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
     titre VARCHAR(100) NOT NULL UNIQUE,
     type VARCHAR (50) NOT NULL,
     ingredient text NOT NULL
   );
   ```

## Auteur

[N'Diaye Ousmane Camara](https://github.com/NdiayeOusmanaCamara)
