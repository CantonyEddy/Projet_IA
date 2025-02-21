exports.getHomePage = (req, res) => {
    res.render('home', { title: "Accueil - IA Écologique" }); // Assurez-vous que title est bien défini
};
