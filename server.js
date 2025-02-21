const express = require('express');
const session = require('express-session'); // Déclare express-session après express
const path = require('path');

const app = express(); // Déclaration de app avant toute utilisation

// Configuration des sessions
app.use(session({
    secret: "super-secret-key", // Change cette clé en production !
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // ⚠️ Mettre `true` si HTTPS
}));

// Définition du moteur de template (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Définition du dossier public pour les fichiers statiques (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'client/public')));

// Middleware pour traiter les formulaires POST
app.use(express.urlencoded({ extended: true }));

// Importation des routes
const homeRoutes = require('./server/routes/homeRoutes');
const pollutionRoutes = require('./server/routes/pollutionRoutes');
const solutionsRoutes = require('./server/routes/solutionsRoutes');
const engagementRoutes = require('./server/routes/engagementRoutes');
const contactRoutes = require('./server/routes/contactRoutes');
const adminRoutes = require('./server/routes/adminRoutes');
const authRoutes = require('./server/routes/authRoutes');

// Utilisation des routes
app.use('/', homeRoutes);
app.use('/', pollutionRoutes);
app.use('/', solutionsRoutes);
app.use('/', engagementRoutes);
app.use('/', contactRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur en ligne sur http://localhost:${PORT}`);
});
