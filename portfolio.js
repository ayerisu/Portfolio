const body = document.body;
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const themeToggle = document.getElementById("themeToggle");
const githubLogo = document.getElementById("githubLogo");

const homePage = document.querySelector("#homePage");

const switchContainer = document.createElement("div");
const switchToAbout = document.createElement("div");
const switchToProjects = document.createElement("div");
const switchToContact = document.createElement("div");

switchContainer.classList.add("switchContainer");
switchToAbout.classList.add("switchToAbout");
switchToProjects.classList.add("switchToProjects");
switchToContact.classList.add("switchToContact");

switchToAbout.innerText = "About Me";
switchToProjects.innerText = "Projects";
switchToContact.innerText = "Contact Me";

body.appendChild(switchContainer);
switchContainer.appendChild(switchToAbout);
switchContainer.appendChild(switchToProjects);
switchContainer.appendChild(switchToContact);

let activeSection = null;
let container = null;

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        body.classList.add("lightMode");
        footer.classList.add("lightMode");
        header.classList.add("lightMode");
        button1.classList.add("lightMode");
        button2.classList.add("lightMode");
        button3.classList.add("lightMode");
        switchToAbout.classList.add("lightMode");
        switchToContact.classList.add("lightMode");
        switchToProjects.classList.add("lightMode");
        homePage.classList.add("lightMode");
        githubLogo.classList.add("lightMode");
        container.classList.add("lightMode");
    } else {
        body.classList.remove("lightMode");
        footer.classList.remove("lightMode");
        header.classList.remove("lightMode");
        button1.classList.remove("lightMode");
        button2.classList.remove("lightMode");
        button3.classList.remove("lightMode");
        switchToAbout.classList.remove("lightMode");
        switchToContact.classList.remove("lightMode");
        switchToProjects.classList.remove("lightMode");
        homePage.classList.remove("lightMode");
        githubLogo.classList.remove("lightMode");
        container.classList.remove("lightMode");
    }

});

function handleSwitchContainerVisibility(show) {
    if (show) {
        switchContainer.classList.add("show");
    } else {
        switchContainer.classList.remove("show");
    }
}

function removeActiveSection(callback) {
    if (activeSection) {
        activeSection.classList.remove("show");
        activeSection.classList.add("hide");
        setTimeout(() => {
            activeSection.remove();
            activeSection = null;
            if (callback) callback();
        }, 800);
    } else if (callback) {
        callback();
    }
}

function handleSwitchButtonClick(targetSection) {
    removeActiveSection();
    setTimeout(() => {
        if (targetSection === "backToHome") {
            buttons.forEach(b => {
                b.style.display = "block";
                setTimeout(() => {
                    b.style.opacity = 1;
                    b.classList.remove("clicked");
                }, 900);
            })
        }
        else if (targetSection === "About Me") {
            switchToContact.classList.remove("clicked");
            switchToProjects.classList.remove("clicked");
            switchToAbout.classList.add("clicked");
            activeSection = createSection("About Me");

        } else if (targetSection === "Projects") {
            switchToContact.classList.remove("clicked");
            switchToProjects.classList.add("clicked");
            switchToAbout.classList.remove("clicked");
            activeSection = createSection("Projects");

        } else if (targetSection === "Contact Me") {
            switchToContact.classList.add("clicked");
            switchToProjects.classList.remove("clicked");
            switchToAbout.classList.remove("clicked");
            activeSection = createSection("Contact Me");
        }
    }, 800);
}

function createSection(content) {
    if (content === "Projects") {

        container = document.createElement("div");
        container.classList.add("projectsContainer");

        const cards = [
            { url: "https://i.pinimg.com/736x/1e/96/6a/1e966abb44d29eb4aedd80924d0f7b64.jpg", title: "Project 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { url: "https://i.pinimg.com/736x/1e/96/6a/1e966abb44d29eb4aedd80924d0f7b64.jpg", title: "Project 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { url: "https://i.pinimg.com/736x/1e/96/6a/1e966abb44d29eb4aedd80924d0f7b64.jpg", title: "Project 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { url: "https://i.pinimg.com/736x/1e/96/6a/1e966abb44d29eb4aedd80924d0f7b64.jpg", title: "Project 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
        ];

        cards.forEach((cards) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = cards.url;

            const title = document.createElement("h4");
            title.innerText = cards.title;

            const content = document.createElement("p");
            content.innerText = cards.content;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(content);

            container.appendChild(card);
            card.addEventListener("click", () => {
                window.open("https://kick.com/jahrein");
            })
        });

        body.appendChild(container);

        body.appendChild(container);
        if (themeToggle.checked) {
            setTimeout(() => container.classList.add("show", "lightMode"), 100);
            return container;
        } else {
            setTimeout(() => container.classList.add("show"), 100);
            return container;
        }

    } else if (content === "About Me") {

        container = document.createElement("div");
        container.classList.add("aboutContainer");

        let sectionTitle = document.createElement("h1");
        sectionTitle.innerText = "About Me";

        let sectionPar = document.createElement("p");
        sectionPar.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        container.appendChild(sectionTitle);
        container.appendChild(sectionPar);
        body.appendChild(container);

        if (themeToggle.checked) {
            setTimeout(() => container.classList.add("show", "lightMode"), 100);
            return container;
        } else {
            setTimeout(() => container.classList.add("show"), 100);
            return container;
        }
    }

    else if (content === "Contact Me") {
        container = document.createElement("div");
        container.classList.add("contactContainer");

        const links = [
            { url: "https://kick.com/jahrein", title: "link1" },
            { url: "https://kick.com/jahrein", title: "link2" },
            { url: "https://kick.com/jahrein", title: "link3" },
            { url: "https://kick.com/jahrein", title: "link4" },
            { url: "https://kick.com/jahrein", title: "link5" }
        ]

        links.forEach((links) => {
            const link = document.createElement("a");
            link.href = links.url;
            link.innerText = links.title;
            link.target = links.url;

            container.appendChild(link);
        })
        body.appendChild(container);

        if (themeToggle.checked) {
            setTimeout(() => container.classList.add("show", "lightMode"), 100);
            return container;
        } else {
            setTimeout(() => container.classList.add("show"), 100);
            return container;
        }
    }
}

switchToAbout.addEventListener("click", () => {
    handleSwitchButtonClick("About Me");
    switchContainer.classList.add("clicked");
    setTimeout(() => {
        switchContainer.classList.remove("clicked");
    }, 1100);
});

switchToProjects.addEventListener("click", () => {
    handleSwitchButtonClick("Projects");
    switchContainer.classList.add("clicked");
    setTimeout(() => {
        switchContainer.classList.remove("clicked");
    }, 1100);
});

switchToContact.addEventListener("click", () => {
    handleSwitchButtonClick("Contact Me");
    switchContainer.classList.add("clicked");
    setTimeout(() => {
        switchContainer.classList.remove("clicked");
    }, 1100);
});

let buttons = [button1, button2, button3];
let botTop = [footer, header];

const div1 = document.createElement("h1");
div1.innerText = "About Me";
button1.classList.add("hidden");
button1.appendChild(div1);

const div2 = document.createElement("h1");
div2.innerText = "Projects";
button2.classList.add("hidden");
button2.appendChild(div2);

const div3 = document.createElement("h1");
div3.innerText = "Contact Me";
button3.classList.add("hidden");
button3.appendChild(div3);

buttons.forEach(button => {
    button.classList.remove("hidden");
});

window.onload = () => {
    buttons.forEach(b => {
        b.style.display = "block";
        setTimeout(() => {
            b.style.opacity = 1;
        }, 340);
    });
    botTop.forEach(stuff => {
        stuff.style.display = "block";
        setTimeout(() => {
            footer.classList.add("show");
            header.classList.add("show");
        }, 1100);
    });
};

button1.addEventListener("click", () => {
    buttons.forEach(b => {
        b.classList.add("clicked");
        handleSwitchContainerVisibility(true);
        b.style.opacity = 0;
        setTimeout(() => {
            b.style.display = "none";
            homePage.classList.add("show");
        }, 600);
    });
    handleSwitchButtonClick("About Me");
});

button2.addEventListener("click", () => {
    buttons.forEach(b => {
        b.classList.add("clicked");
        handleSwitchContainerVisibility(true);
        b.style.opacity = 0;
        setTimeout(() => {
            b.style.display = "none";
            homePage.classList.add("show");
        }, 600);
    });
    handleSwitchButtonClick("Projects");
});

button3.addEventListener("click", () => {
    buttons.forEach(b => {
        b.classList.add("clicked");
        handleSwitchContainerVisibility(true);
        b.style.opacity = 0;
        setTimeout(() => {
            b.style.display = "none";
            homePage.classList.add("show");
        }, 600);
    });
    handleSwitchButtonClick("Contact Me");
});

homePage.addEventListener("click", () => {
    switchContainer.classList.add("clicked");
    switchContainer.classList.remove("show");
    handleSwitchButtonClick("backToHome");
    homePage.classList.remove("show");
    setTimeout(() => {
        switchContainer.classList.remove("clicked");
    }, 800);

});

githubLogo.addEventListener("click", () => {
    window.open("https://kick.com/jahrein");
});