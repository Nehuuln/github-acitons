# CI/CD Project - Jest & Cypress

Un projet de démonstration d'intégration et déploiement continu (CI/CD) avec tests unitaires Jest et tests E2E Cypress.

## Description

Ce projet implémente un serveur Express simple avec une API REST, accompagné d'une suite complète de tests automatisés utilisant Jest pour les tests unitaires et Cypress pour les tests end-to-end. Le tout est intégré dans un pipeline CI/CD avec GitHub Actions.

## Fonctionnalités

- **API REST** : Serveur Express qui retourne un message de bienvenue en JSON
- **Tests unitaires** : Suite de tests Jest avec SuperTest
- **Tests E2E** : Tests Cypress pour valider le comportement de l'API
- **Pipeline CI/CD** : Automatisation avec GitHub Actions
- **Coverage** : Génération de rapports de couverture de code

## Prérequis

- [Node.js](https://nodejs.org/) version 18.x ou 20.x
- npm (inclus avec Node.js)

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/Nehuuln/github-acitons.git
cd github-actions/ci-cd-jest-cypress
```

2. Installez les dépendances :
```bash
npm install
```

## Démarrage

### Lancer le serveur

```bash
npm start
```

Le serveur démarre sur `http://localhost:3000`

### Tester l'API

```bash
curl http://localhost:3000
# Réponse attendue: {"message":"Bienvenue !"}
```

## Tests

### Tests unitaires (Jest)

Exécuter tous les tests :
```bash
npm test
```

Exécuter les tests en mode watch :
```bash
npm run test:watch
```

Générer un rapport de couverture :
```bash
npm run test:coverage
```

Le rapport de couverture sera disponible dans le dossier `coverage/`.

### Tests E2E (Cypress)

Ouvrir l'interface graphique Cypress :
```bash
npm run cypress:open
```

Exécuter les tests Cypress en mode headless :
```bash
npm run cypress:run
```

**Note** : Le serveur doit être démarré avant de lancer les tests Cypress.

## Structure du projet

```
ci-cd-jest-cypress/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Configuration du pipeline CI/CD
├── cypress/
│   ├── e2e/
│   │   └── server.cy.js       # Tests E2E Cypress
│   ├── fixtures/              # Données de test
│   └── support/               # Commandes et configuration Cypress
├── coverage/                  # Rapports de couverture (généré)
├── node_modules/              # Dépendances (généré)
├── cypress.config.js          # Configuration Cypress
├── package.json               # Dépendances et scripts npm
├── server.js                  # Code source du serveur Express
├── server.test.js             # Tests unitaires Jest
└── README.md                  # Documentation
```

## Pipeline CI/CD

Le pipeline GitHub Actions s'exécute automatiquement sur :
- Push sur la branche `main`
- Pull requests vers la branche `main`

### Étapes du pipeline

1. **Checkout** : Récupération du code source
2. **Setup Node.js** : Installation de Node.js (versions 18.x et 20.x)
3. **Install dependencies** : Installation des dépendances npm
4. **Run Jest tests** : Exécution des tests unitaires
5. **Run Cypress tests** : Exécution des tests E2E
6. **Upload artifacts** : Sauvegarde des screenshots, vidéos et rapports de couverture

### Matrix Strategy

Le pipeline teste le code sur plusieurs versions de Node.js :
- Node.js 18.x
- Node.js 20.x

## Rapports et Artefacts

En cas d'échec des tests, les artefacts suivants sont disponibles dans GitHub Actions :

- **cypress-screenshots** : Captures d'écran des tests en échec
- **cypress-videos** : Vidéos de l'exécution des tests
- **coverage-report** : Rapport de couverture de code (Node.js 20.x uniquement)

Les artefacts sont conservés pendant 7 jours.

## Détails des Tests

### Tests Unitaires (Jest + SuperTest)

Le fichier [`server.test.js`](server.test.js) contient les tests suivants :

- ✅ Vérification du statut HTTP 200
- ✅ Validation du message de bienvenue
- ✅ Vérification du type de contenu JSON
- ✅ Validation de la structure de la réponse
- ✅ Gestion des routes invalides (404)
- ✅ Gestion de requêtes multiples

### Tests E2E (Cypress)

Le fichier [`cypress/e2e/server.cy.js`](cypress/e2e/server.cy.js) contient les tests suivants :

- ✅ Chargement réussi de la homepage
- ✅ Affichage du message de bienvenue
- ✅ Vérification du Content-Type JSON
- ✅ Validation de la structure complète de la réponse
- ✅ Gestion de requêtes multiples
- ✅ Vérification des erreurs 404

## 📝 Scripts npm disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Démarre le serveur Express |
| `npm test` | Exécute les tests Jest |
| `npm run test:watch` | Exécute Jest en mode watch |
| `npm run test:coverage` | Génère le rapport de couverture |
| `npm run cypress:open` | Ouvre l'interface Cypress |
| `npm run cypress:run` | Exécute Cypress en mode headless |

## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript
- **Express** : Framework web minimaliste
- **Jest** : Framework de tests unitaires
- **SuperTest** : Bibliothèque pour tester les APIs HTTP
- **Cypress** : Framework de tests E2E
- **GitHub Actions** : Plateforme CI/CD