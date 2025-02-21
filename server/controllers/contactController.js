const db = require("../../database/db");

exports.getContactPage = (req, res) => {
    res.render('contact', { title: "Contactez-nous", error: null, success: null });
};

exports.postContactForm = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.render('contact', { title: "Contactez-nous", error: "Tous les champs sont obligatoires !", success: null });
    }

    // Insérer le message dans la base de données
    const query = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
    db.run(query, [name, email, message], function (err) {
        if (err) {
            console.error("❌ Erreur lors de l'insertion :", err.message);
            return res.render('contact', { title: "Contactez-nous", error: "Erreur lors de l'envoi du message.", success: null });
        }

        console.log(`📩 Nouveau message enregistré avec l'ID ${this.lastID}`);
        res.render('contact', { title: "Contactez-nous", error: null, success: "Votre message a bien été envoyé !" });
    });
};
