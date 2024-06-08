# E-Book

## Description
Ce projet est une bibliothèque en ligne moderne et intuitive, conçue pour offrir une expérience utilisateur immersive. Le design utilise des couleurs chaleureuses et des images de livres pour rappeler l'ambiance d'une bibliothèque traditionnelle.

## Structure du Projet
Le projet est divisé en deux parties principales :
- **BackEnd** : Utilise Django pour gérer la logique de backend et les interactions avec la base de données.
- **Book_Store** : Utilise ReactJS et Tailwind CSS pour le frontend, offrant une interface utilisateur réactive et élégante.

## Choix de Design
- **Couleurs** : Nuances de marron et beige pour une atmosphère accueillante.
- **Images** : Utilisation d'images de livres et de bibliothèques pour renforcer la familiarité.
- **Polices** : Polices lisibles avec des contrastes de couleurs suffisants pour garantir une lecture facile.

## Défis UX et leur Résolution
- **Accessibilité** : Polices lisibles et contrastes de couleurs suffisants.
- **Temps de Chargement** : Utilisation de Cloudinary pour stocker les images, optimisant ainsi les temps de chargement grâce à la livraison via CDN et l'optimisation automatique.

## Défis Techniques et Compromis
- **Compatibilité entre Navigateurs** : Utilisation de techniques de responsive design pour assurer la compatibilité sur différents appareils et navigateurs.
- **Performance** : Utilisation de ReactJS pour une gestion efficace de l'état et des mises à jour rapides du DOM.

## Technologies Utilisées
- **Frontend** : ReactJS et Tailwind CSS
- **Backend** : Django
- **Stockage des Images** : Cloudinary

## Instructions pour Visualiser et Exécuter le Projet

### Prérequis
- Node.js
- Python
- MySQL

### Configuration du Backend
1. Clonez le dépôt :
   git clone https://github.com/RajaaKacemi/E-Book.git
    \\ cd E-Book/BackEnd
2. Créez un environnement virtuel et activez-le :
   python -m venv env
   source env/bin/activate
3. Installez les dépendances :
   pip install -r requirements.txt
4. Configurez les variables d'environnement dans .env :
   SECRET_KEY=your-secret-key
   DEBUG=True
   ALLOWED_HOSTS=127.0.0.1,book-book-store.vercel.app
   MYSQL_DATABASE=e-library
   MYSQL_USER=root
   MYSQL_PASSWORD=your-password
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
5. Appliquez les migrations:
   python manage.py migrate
   6.Lancez le serveur de développement:
   python manage.py runserver

### Configuration du Frontend
1.Naviguez vers le répertoire frontend 
2.Installez les dépendances:
  npm install
3.Lancez le serveur de développement:
  npm start
  
### Fonctionnalités
1. Inscription et Connexion : Les fonctionnalités d'inscription et de connexion fonctionnent correctement.
2. Formulaire de Souscription : Les utilisateurs peuvent s'abonner à la newsletter.
3. Formulaire de Contact : Le formulaire de contact permet aux utilisateurs d'envoyer des messages.

### Déploiement
Assurez-vous que les variables d'environnement sont correctement définies dans Vercel pour le frontend et dans votre service de déploiement pour le backend.

### Observations
Performance : Utilisation de Cloudinary pour stocker les images et améliorer les temps de chargement.

Meilleures Pratiques : Respect des meilleures pratiques de l'UX pour une navigation intuitive et une accessibilité améliorée.



  


