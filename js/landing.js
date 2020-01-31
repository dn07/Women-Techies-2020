
const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const navInner = document.querySelectorAll(".nav-inner a")
const lines = document.querySelectorAll(".ham div");
const navlinks = document.querySelectorAll(".nav-items a");
const body = document.querySelector("body");
const ids = ["#one", "#two", "#three", "#four", "#five", "#six"];
const colors = ["orange", "rgb(164,27,228)", "rgb(252,37,126)", "rgb(164,27,228)", "rgb(252,37,126)", "rgb(164,27,228)"]
const t1 = gsap.timeline();

let one = document.querySelector("#one").clientHeight;
let two = document.querySelector("#two").clientHeight;
let three = document.querySelector("#three").clientHeight;
let four = document.querySelector("#four").clientHeight;
let five = document.querySelector("#five").clientHeight;
let six = document.querySelector("#six").clientHeight;
let heights = [0, one, one + two, one + two + three, one + two + three + four, one + two + three + four + five, one + two + three + four + five + six];
console.log(heights)
let i = 0;
let a = -1;
function openclose() {
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
    body.classList.toggle("overflow");
    if (i == 9) {
        i = 0;
    }
    else {
        for (i = 0; i < 9; i++) {
            t1.fromTo(navlinks[i], {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.10
            })
        }
    }
}
button.addEventListener("click", () => {
    openclose();
});

let vh = window.innerHeight;
let width = window.innerWidth;
navlinks[0].addEventListener("click", () => { a = 0; });
navlinks[1].addEventListener("click", () => { a = 1; });
navlinks[4].addEventListener("click", () => { a = 4; });
navlinks[3].addEventListener("click", () => { a = 3; });
navlinks[2].addEventListener("click", () => { a = 2; });
navlinks[5].addEventListener("click", () => { a = 5; });
k = 0;
if (width > 850) {
    window.addEventListener("scroll", (e) => {
        let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        scrollpos += 0.5 * vh;
        if (scrollpos > (k + 1) * vh) {
            navInner[k].style.color = "black";
            k++;
            navInner[k].style.color = colors[k];
        }
        if (scrollpos < (k) * vh) {
            navInner[k].style.color = "black";
            k--;
            navInner[k].style.color = colors[k];
        }
    })
}
else {
    k = 1;
    let vh = window.innerHeight;

    window.addEventListener("scroll", (e) => {
        let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        scrollpos += 0.4 * vh;
        if (scrollpos > heights[k + 1]) {
            navlinks[k].style.color = "black";
            k++;
            navlinks[k].style.color = colors[k];
        }
        if (scrollpos < heights[k]) {
            navlinks[k].style.color = "black";
            k--;
            navlinks[k].style.color = colors[k];

        }
        if (scrollpos > heights[k] && scrollpos < heights[k + 1]) {
            if (a != -1) {
                if (scrollpos < (a + 0.8) * vh && scrollpos > a * vh) {
                    openclose();
                    a = -1;
                }
            }
        }
    })
}




