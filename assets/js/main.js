//Cursor
// (function () {
//     document
//         .getElementsByTagName("body")[0]
//         .addEventListener("mousemove", function (n) {
//             (t.style.left = n.clientX + "px"),
//                 (t.style.top = n.clientY + "px"),
//                 (e.style.left = n.clientX + "px"),
//                 (e.style.top = n.clientY + "px"),
//                 (i.style.left = n.clientX + "px"),
//                 (i.style.top = n.clientY + "px");
//         });
//     var t = document.getElementById("cursor"),
//         e = document.getElementById("cursor2"),
//         i = document.getElementById("cursor3");
//     function n(t) {
//         e.classList.add("hover"), i.classList.add("hover");
//     }
//     function s(t) {
//         e.classList.remove("hover"), i.classList.remove("hover");
//     }
//     s();
//     for (
//         var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
//         a >= 0;
//         a--
//     ) {
//         o(r[a]);
//     }
//     function o(t) {
//         t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
//     }
// const clickable = document.querySelectorAll(".hover-effect");
// const cursor = document.querySelector(".cursor");

// const animateit = function (e) {
//     const span = this.querySelector(".hover-item");
//     // const { offsetX: x, offsetY: y } = e,
//     //     { offsetWidth: width, offsetHeight: height } = this,
//     //     move = 10,
//     //     xMove = (x / width) * (move) - move,
//     //     yMove = (y / height) * (move) - move;

//     span.style.transform = `scale(1.5)`;
//     cursor.style.padding = `1rem`;
//     cursor.style.background = `#fff`;
//     if (e.type === "mouseleave")
//         (span.style.transform = ""),
//             (cursor.style.padding = "0.5rem"),
//             (cursor.style.background = "");
// };

// const editCursor = (e) => {
//     // const { clientX: x, clientY: y } = e;
//     // cursor.style.left = x + "px";
//     // cursor.style.top = y + "px";
//     const mouseY = e.clientY;
//     const mouseX = e.clientX;
//     cursor.style.left = mouseX + "px";
//     cursor.style.top = mouseY + "px";
// };

// clickable.forEach((b) => b.addEventListener("mousemove", animateit));
// clickable.forEach((b) => b.addEventListener("mouseleave", animateit));
// window.addEventListener("mousemove", editCursor);
// })();

//Home Typing
var typed = new Typed("#typed", {
    strings: [
        "build web apps.",
        "design websites.",
        "build mobile apps.",
        "do travel.",
        "take photographs.",
    ],
    typeSpeed: 75,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    backDelay: 2000,
});

//Feather Icons
feather.replace();

//Experience Card
let old = $(".card").get(0);
$(".card").click(function () {
    if (old != null && $(old).hasClass("open")) $(old).toggleClass("open");
    $(this).toggleClass("open");
    old = this;
});

//Contact Form
const formsparkURL = "https://submit-form.com/3EsIaKSo";
function contactForm() {
    return {
        data: {
            name: "",
            email: "",
            message: "",
        },
        buttonText: "Send Message",
        loading: false,
        submit() {
            this.buttonText = "Sending...";
            this.loading = true;
            fetch(formsparkURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.data),
            })
                .then(() => {
                    swal(
                        "Thank you! I've received your message and will respond within 24 hour. In the meantime, make sure to follow me on social!"
                    );
                })
                .catch(() => {
                    swal("Something went wrong");
                })
                .finally(() => {
                    this.data.name = "";
                    this.data.email = "";
                    this.data.message = "";
                    this.buttonText = "Send Message";
                    this.loading = false;
                });
        },
    };
}

function getDataFromJson() {
    return {
        devMode: boolean = true,
        loading: boolean = true,
        openMenu: boolean = false,
        workExperiences: [],
        technologies: [],
        skills: [],
        services: [],
        clients: [],
        projects: [],
        project: [],
        openProjectModel: boolean = false,
        photos: [],
        photo: [],
        openPhotoModel: boolean = false,
        fetchMainData() {
            fetch('assets/json/main.json')
                .then(response => response.json())
                .then(data => {
                    this.projects = data.projects;
                    this.workExperiences = data.workExperiences;
                    this.technologies = data.technologies;
                    this.skills = data.skills;
                    this.clients = data.clients;
                    this.services = data.services;
                })
                .catch(error => console.error('Error fetching data:', error));
        },
        filterProject(id) {
            this.project = this.projects.find(project => project.id === id);
            console.log(this.project)
            this.openProjectModel = true;
        },
        fetchPhotos() {
            fetch('assets/json/images.json')
                .then(response => response.json())
                .then(data => {
                    this.photos = data;
                })
                .catch(error => console.error('Error fetching data:', error));
        },
        filterPhoto(id) {
            this.photo = this.photos.find(photo => photo.id === id);
            console.log(this.photo)
            this.openPhotoModel = true;
        },

        formatTech(name) {
            const parts = name.split(":"||"%");
            if (parts.length < 2) return name;
            return `<strong><i>${parts[0]}:</i></strong><span class=text-slate-200>${parts.slice(1).join(":")}<span>`;
        },

        init() {
            this.fetchMainData(),
                this.fetchPhotos(),
                setTimeout(() => this.loading = false, 3000)

        }
    };
}