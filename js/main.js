import {
    printRelevant,
    printLatest,
    printSearch
} from "./post.js";

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


let navbarOptions = document.getElementById("rigthSide");
let isLoggedIn = localStorage.getItem("token")
let htmlContent = ``

if (isLoggedIn) {
  htmlContent = `
<button class="crayons-header__menu__trigger position-absolute top-50 end-0 translate-middle-y me-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
  <span class="crayons-avatar crayons-avatar--l"><img alt="" id="avatarImage" class="crayons-avatar__image rounded-circle" src="./assets/profile-avatar.webp"></span>
</button>

<div class="crayons-header__menu__dropdown dropdown-menu position-absolute top-100 start-100 translate-middle" aria-labelledby="dropdownMenuButton" id="userMenu">
  <a class="dropdown-item" href="#">Dashboard</a>
  <a class="dropdown-item" href="#">Settings</a>
  <a class="dropdown-item" href="#">Reading list</a>
  <li><hr class="dropdown-divider"></li>
  <a class="dropdown-item" href="#" id="logout-link">Sign Out</a>
</div>`
} else {
  htmlContent = `<div class="row">
  <div class="col-4 position-absolute top-50 end-0 translate-middle-y">
    <a href="./views/login.html" class="btn btn-outline-none">Log in</a>
    <a class="btn btn-outline-none text-primary border border-primary">Create Account</a>
  </div>
  <div class="col-4">
    
  </div>
</div>`
}

// Asignar el HTML al elemento de la navbar
navbarOptions.innerHTML = htmlContent;

/* const navbarLogin = () => {
    let container = document.getElementById("rightSide")
    let token = localStorage.getItem("token")
    let tokenTrue = "<div class='dropdown'> <img src='avatar.png' alt='Avatar' class='dropdown-toggle' data-toggle='dropdown'> <div class='dropdown-menu'> <a class='dropdown-item' href='#'>Perfil</a> <a class='dropdown-item' href='#'>Configuración</a> <a class='dropdown-item' href='#'>Cerrar sesión</a> </div> </div> <span>Notificaciones</span> <span>Mensajes</span>"
    let tokenFalse ="<span>Crear cuenta</span> <span>Iniciar sesión</span>"
    let htmlContent
    token ? htmlContent = tokenTrue : htmlContent = tokenFalse
    container.innerHTML = htmlContent
}

navbarLogin() */

/* const login = () => {
    let container = document.getElementById("rigthSide")
    let token = localStorage.getItem("token")
    token ? container.append(post, image) : container.append(log, account)
}
 */
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