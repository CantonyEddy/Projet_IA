const bcrypt = require("bcrypt");

// Admin temporaire (à remplacer par une base de données)
const adminUser = {
    username: "admin",
    passwordHash: bcrypt.hashSync("admin123", 10) // Mot de passe hashé
};

// Page de connexion
exports.getLoginPage = (req, res) => {
    res.render("login", { title: "Connexion Admin", error: null });
};

// Vérification des identifiants
exports.postLogin = (req, res) => {
    const { username, password } = req.body;

    if (username === adminUser.username && bcrypt.compareSync(password, adminUser.passwordHash)) {
        req.session.admin = true;
        return res.redirect("/admin");
    } else {
        return res.render("login", { title: "Connexion Admin", error: "Identifiants incorrects" });
    }
};

// Déconnexion
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
};
