document.addEventListener("DOMContentLoaded", () => {
    console.log("🌱 Site IA Écologique chargé !");
    
    // Animation au scroll
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const scrollAnimation = () => {
        scrollElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); // Vérifier au chargement si des éléments sont déjà visibles
});

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const animateNumbers = () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 50; // Vitesse de l'animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Lancer l'animation au scroll
const statSection = document.querySelector(".stats");
if (statSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(statSection); // Stopper l'animation après exécution
            }
        });
    }, { threshold: 0.6 });

    observer.observe(statSection);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("🌱 Site IA Écologique chargé !");
    
    // Animation au scroll
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const scrollAnimation = () => {
        scrollElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); // Vérifier au chargement si des éléments sont déjà visibles

    // Animation des messages de discussion
    const chatMessages = document.querySelectorAll(".chat-message");
    let delay = 500;

    chatMessages.forEach((msg, index) => {
        setTimeout(() => {
            msg.classList.add("visible");
        }, delay * (index + 1));
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("pollutionChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Formation d'un modèle IA", "Data Centers", "Émissions CO₂ annuelles"],
            datasets: [{
                label: "Consommation en kWh",
                data: [500000, 3000000, 15000000], // Valeurs fictives
                backgroundColor: ["#E57373", "#FFB74D", "#81C784"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
});
