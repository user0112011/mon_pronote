
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
