import { changePage } from "../model/model.js";

const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function initListeners() {
   
    $("nav").on("click", "a", function (e) {
        let id = e.currentTarget.id;
       
        $("#app").html(id);
        nav.classList.toggle("active");
    });

    $(".nav").on("click", function (e) {
        nav.classList.remove("active");
    });
}


function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("route", pageID); 
    changePage(pageID);
}


function initSite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initListeners();
    initSite();

    changePage("home");
});
