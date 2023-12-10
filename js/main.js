let searcBox = document.querySelector(".searchBox");
let searchOpen = document.querySelector(".search_openBtn");
let searchClose = document.querySelector(".search_closeBtn");
let searchInput = document.querySelector(".searchBox input");
let searchData = document.querySelector(".searchData");

$(document).ready(function () {
    searchOpen.onclick = function () {
        searcBox.classList.add("active");
        searchInput.classList.add("active");
        searchOpen.classList.add("active");
        searchClose.classList.add("active");
        if (searchInput.value != "") {
            searchData.innerHTML = 'You Searching for ' + searchInput.value;
            searchData.classList.add("active");
        } else {
            searchData.innerHTML = '';
        }
    }
    searchClose.onclick = function () {
        searcBox.classList.remove("active");
        searchInput.classList.remove("active");
        searchOpen.classList.remove("active");
        searchClose.classList.remove("active");
        searchData.classList.remove("active");
        searchInput.value = ""
    }
});