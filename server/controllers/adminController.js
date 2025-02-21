const db = require("../../database/db");

exports.getMessages = (req, res) => {
    if (!req.session.admin) {
        return res.redirect("/login");
    }

    db.all("SELECT * FROM messages ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            console.error("❌ Erreur de récupération des messages :", err.message);
            return res.render("admin", { title: "Admin - Messages", error: "Impossible de récupérer les messages", messages: [] });
        }
        res.render("admin", { title: "Admin - Messages", error: null, messages: rows });
    });
};
