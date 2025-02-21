const sqlite3 = require("sqlite3").verbose();

// Connexion à la base de données
const db = new sqlite3.Database("./database/messages.db", (err) => {
    if (err) {
        console.error("❌ Erreur de connexion à SQLite :", err.message);
    } else {
        console.log("✅ Connecté à SQLite");
    }
});

// Création de la table "messages" si elle n'existe pas
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = db;
