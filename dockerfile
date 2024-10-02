# Utilisez l'image officielle Node.js comme base
FROM node:16

# Créez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez tout le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Exposez le port que votre application utilise
EXPOSE 3002

# Commande pour démarrer l'application
CMD ["npm", "start"]
