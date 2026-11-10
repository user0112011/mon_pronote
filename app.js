
const links = document.querySelectorAll(".sidebar nav a");
const pages = document.querySelectorAll(".page");

const titles = {
    accueil: "Bonjour ! 👋",
    emploi: "Mon emploi du temps 📅",
    notes: "Mes notes 📝",
    devoirs: "Mes devoirs 📚",
    profil: "Mon profil 👤"
};

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pageName = this.dataset.page;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        links.forEach(item => {
            item.classList.remove("active");
        });

        document.getElementById(pageName).classList.add("active");

        this.classList.add("active");

        document.getElementById("page-title").textContent =
            titles[pageName];
    });
});


// CONNEXION DE DÉMONSTRATION

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;
        const message = document.getElementById("login-message");

        if (username.trim() === "" || password.trim() === "") {
            message.textContent = "Remplis tous les champs !";
            return;
        }

        sessionStorage.setItem("userRole", role);
        sessionStorage.setItem("username", username);

        message.textContent = "Connexion de démonstration réussie !";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);
    });
}

// PERSONNALISATION DU COMPTE

const accountInfo = document.getElementById("account-info");

if (accountInfo) {
    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("userRole");

    if (username && role) {
        const roleName = role === "eleve" ? "Élève" : "Professeur";

        accountInfo.textContent =
            "Connecté en tant que " + username + " (" + roleName + ")";
    } else {
        accountInfo.textContent = "Mode démonstration";
    }
}

// DÉCONNEXION

const logout = document.getElementById("logout");

if (logout) {
    logout.addEventListener("click", function() {
        sessionStorage.clear();
    });
}
const notes = [15, 13, 17];

const moyenne =
    notes.reduce((total, note) => total + note, 0) / notes.length;

const affichageMoyenne = document.getElementById("moyenne");

if (affichageMoyenne) {
    affichageMoyenne.textContent = moyenne.toFixed(2) + "/20";
}
