// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const btn = document.getElementById("btntoggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    console.log("toggle-hello");
    localStorage.setItem("theme", theme);
});