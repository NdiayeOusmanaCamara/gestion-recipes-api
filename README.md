## API de Gestion des Recettes

## Description
Cette API facilite la gestion des recettes culinaires avec des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle est développée avec Express.js et repose sur MySQL pour la base de données. Le projet intègre des tests unitaires, des outils de validation et de formatage de code (ESLint, Prettier), et est containerisé avec Docker pour simplifier le déploiement.

## Objectif
- Développer et tester une API RESTful avec Express.js et MySQL.
- Intégrer des outils d'analyse et de formatage de code.
- Containeriser l'API avec Docker pour faciliter le déploiement.
- Déployer l'API dans un environnement conteneurisé via DockerHub.

## prérequis

Avant de démarrer, assurez-vous d'avoir installé les logiciels suivants :

- Node.js (version 14+)
- MySQL (version 5.7+)
- Postman (pour tester l'API)
- Docker (pour la containerisation)

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


## Configuration de la base de données:
1. Assurez-vous que MySQL est en cours d'exécution sur votre machine.
2. Créez une base de données pour le projet (par exemple, gestion-recipes).
3. Modifiez le fichier .env.example le nommant .env pour y insérer les informations de connexion à la base de données, ces modifications sont valables pour le fichier .env.test.exampl pour l'utilisation de l'image docker.

Exemple de fichier .env 
```
DB_HOST=localhost
DB_USER=USER
DB_PASSWORD=PASSWORD
DB_NAME=NAME_DB
DB_PORT=PORT
WFC=true
CL=10
QL=0

MYSQL_ROOT_USER=USER
MYSQL_ROOT_PASSWORD=PASSWORD
MYSQL_DATABASE=NAME_DB
```

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```
 npm start
```

L'API sera accessible à `http://localhost:3000`.
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

- **Lien vers l'image DockerHub:** [image Docker](https://hub.docker.com/r/ndiayecousmaneamara24/recipes)
- **Pour construire le conteneurs Docker:**
```
 docker-compose up --build 
```
- **Connexion au service MySQL:**
 ```
 docker exec -it recipes_mysql mysql -u root -p
```
- **Créer la base de données et les tables :**
```
 DROP DATABASE IF EXISTS gestion_recipes;
   CREATE DATABASE IF NOT EXISTS  `gestion_recipes`;
   USE gestion_recipes;

   CREATE TABLE IF NOT EXISTS recipes (
     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
     titre VARCHAR(100) NOT NULL UNIQUE,
     type VARCHAR (50) NOT NULL,
     ingredient text NOT NULL
   );
   ```
   ## Documentation et Collection Postman
- **Exporter la collection** :`recetteAPI.postman_collection`
- **Importer dans Postman** et exécuter les requêtes.

## Auteur

[N'Diaye Ousmane Camara](https://github.com/NdiayeOusmanaCamara)
