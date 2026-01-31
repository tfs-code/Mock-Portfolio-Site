var themeButton = document.getElementById("themeToggle");
var body = document.querySelector("body");
var header = document.querySelector("header");
var nav = document.querySelector("nav");
var aboutSkill = document.querySelector("#about-skill");
var skills = document.querySelector("#skills");
var contact = document.querySelector("#contact");
var navLinks = document.querySelectorAll("#navList li a");

//imgs
var htmlImg = document.getElementById("html-img");
var cssImg = document.getElementById("css-img");
var jsImg = document.getElementById("js-img");
var pyImg = document.getElementById("py-img");
var luaImg = document.getElementById("lua-img");
var linkedinImg = document.getElementById("linkedin-img");
var githubImg = document.getElementById("github-img");

function themeDark() {
    themeButton.setAttribute("src", "assets/icons/sun.svg");
    themeButton.setAttribute("data-mode", "dark");
    body.style.backgroundColor = "rgb(24, 41, 41)";
    body.style.color = "rgb(177, 233, 177)";
    header.style.borderBottom = "solid 1px white";
    nav.style.borderBottom = "solid 1px white";
    aboutSkill.style.borderBottom = "solid 1px white";
    skills.style.borderLeft = "solid 1px white";
    contact.style.borderTop = "solid 1px white";
    navLinks.forEach((link) => {
        link.style.color = "rgb(177, 233, 177)";
    });

    htmlImg.setAttribute("src", "assets/icons/html5x.svg");
    cssImg.setAttribute("src", "assets/icons/cssx.svg");
    jsImg.setAttribute("src", "assets/icons/jsx.svg");
    pyImg.setAttribute("src", "assets/icons/pyx.svg");
    luaImg.setAttribute("src", "assets/icons/luax.svg");
    linkedinImg.setAttribute("src", "assets/icons/linkedinx.svg");
    githubImg.setAttribute("src", "assets/icons/githubx.svg");
}

function themeLight() {
    themeButton.setAttribute("src", "assets/icons/moon.svg");
    themeButton.setAttribute("data-mode", "light");
    body.style.backgroundColor = "rgb(177, 233, 177)";
    body.style.color = "rgb(24, 41, 41)";
    header.style.borderBottom = "solid 1px black";
    nav.style.borderBottom = "solid 1px black";
    aboutSkill.style.borderBottom = "solid 1px black";
    skills.style.borderLeft = "solid 1px black";
    contact.style.borderTop = "solid 1px black";
    navLinks.forEach((link) => {
        link.style.color = "rgb(24, 41, 41)";
    });

    htmlImg.setAttribute("src", "assets/icons/html5.svg");
    cssImg.setAttribute("src", "assets/icons/css.svg");
    jsImg.setAttribute("src", "assets/icons/js.svg");
    pyImg.setAttribute("src", "assets/icons/py.svg");
    luaImg.setAttribute("src", "assets/icons/lua.svg");
    linkedinImg.setAttribute("src", "assets/icons/linkedin.svg");
    githubImg.setAttribute("src", "assets/icons/github.svg");
}

function themeCheck() {
    if (themeButton.getAttribute("data-mode") === "light") {
        themeDark();
    } else if (themeButton.getAttribute("data-mode") === "dark") {
        themeLight();
    }
}

themeButton.addEventListener("click", themeCheck);
