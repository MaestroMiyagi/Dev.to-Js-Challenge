import { printRelevant, printLatest, printSearch } from "./post.js";


let log = document.createElement("a")
log.classList.add(..."btn btn-outline-primary me-2".split(" "))
log.setAttribute("href", "./views/login.html")
log.textContent = "Log In"
let account = document.createElement("a")
account.classList.add(..."btn btn-outline-primary".split(" "))
account.textContent = "Create Account"
let post = document.createElement("a")
post.setAttribute("href", "./views/newPost.html")
post.classList.add(..."btn btn-outline-primary".split(" "))
post.textContent = "Create Post"
let image = document.createElement("img")
image.classList.add("rounded-circle")
image.setAttribute("src", "./assets/profile-avatar.webp")
image.setAttribute("width", "40")
image.setAttribute("heigth", "40")
let collapse = document.createElement("a")
collapse.setAttribute("href", "#collapse-menu")
collapse.setAttribute("data-bs-toggle", "collapse")
collapse.setAttribute("role", "button")
collapse.appendChild(image)




const login = () => {
    let container = document.getElementById("rigthSide")
    let token = localStorage.getItem("token")
    token ? container.append(post, collapse) : container.append(log, account)
}

login()

// Pintar post relevantes al inicio
printRelevant();


const logoutLink = document.getElementById('logout-link');

logoutLink.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.replace('../index.html');
});


// Menus

let relevantMenu = document.getElementById("filter-relevant");
let latestMenu = document.getElementById("filter-latest");

relevantMenu.addEventListener('click', () => {
    relevantMenu.classList.add("text-blac");
    relevantMenu.classList.remove("text-black-50");

    latestMenu.classList.remove("text-black");
    latestMenu.classList.add("text-black-50");

    printRelevant();
});

latestMenu.addEventListener('click', () => {

    latestMenu.classList.add("text-black");
    latestMenu.classList.remove("text-black-50");

    relevantMenu.classList.remove("text-black");
    relevantMenu.classList.add("text-black-50");

    printLatest();
});

let btnSearch = document.getElementById("search-button");
let inputSearch = document.getElementById("search-input");

btnSearch.addEventListener('click', () => {
    let searchTerm = inputSearch.value;
    printSearch(searchTerm);
})