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
        "build web applications.",
        "design websites.",
        "develop mobile applications.",
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
let old = $('.card').get(0);
$('.card').click(function () {
    if (old != null && $(old).hasClass('open'))
        $(old).toggleClass('open');
    $(this).toggleClass('open');
    old = this;

})