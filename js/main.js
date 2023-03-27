import { printPosts } from "./post.js";
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

const login = () => {
    let container = document.getElementById("rigthSide")
    let token = localStorage.getItem("token")
    token ? container.append(post, image) : container.append(log, account)
}

login()

/*document.querySelector("#filter-relevant").forEach((post) => {
    element.addEventListener("click", )
})*/

console.log("api call")
let dataApi = printPosts();

const logoutLink = document.getElementById('logout-link');

logoutLink.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.replace('../index.html');
});
