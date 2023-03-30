import { createPostCard } from "./createDOM.js";
import { getPosts } from "./api.js";

// Datos del API
let postData = await getPosts();
// Contenedor
let postsWrapper = document.getElementById("card-wrapper");

// Datos ordenados por fecha descendiente
const dataLatest = Object.values(postData).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
});


const printRelevant = async () => {
    postsWrapper.innerHTML = "";

    dataLatest.forEach(post => {
        post.relevant ? postsWrapper.append(createPostCard(post.postImage, post.date, post.title, post.tags, post.userName, post.userAvatar,post.id)) : null;
    });
};

const printLatest = async () => {
    postsWrapper.innerHTML = "";
    
    // Cargar en DOM
    dataLatest.forEach(post => {
        postsWrapper.append(createPostCard(post.postImage, post.date, post.title, post.tags, post.userName, post.userAvatar,post.id));
    });
}

const printSearch = async (searchTerm) => {
    postsWrapper.innerHTML = "";

    const dataSearch = Object.values(postData).filter(({ text, title, tags }) => text.includes(searchTerm) || title.includes(searchTerm) || tags.includes(searchTerm));

    // Cargar en DIM
    dataSearch.forEach(post => {
        postsWrapper.append(createPostCard(post.postImage, post.date, post.title, post.tags, post.userName, post.userAvatar,post.id));
    });

}

export { printRelevant, printLatest, printSearch }

