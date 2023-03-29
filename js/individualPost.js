import { getIndividualPost } from "./api.js";
import { createCommentsCard } from "./createCommentDOM.js";

let urlParams = new URLSearchParams(window.location.search)
let postId = urlParams.get("postId")
console.log(postId)


// Datos del API
let postData = await getIndividualPost(postId)
let { postImage, userAvatar, userName, date, title, tags, text, userInfo, userImg, user, commentText } = postData

// Contenedor
let commentWrapper = document.getElementById("comment-wrapper");

const getSelectedPost = async () => {
    if (postImage != undefined) {
        document.getElementById("post-image").setAttribute("src", postData.postImage);
    }
    document.getElementById("user-name").textContent = postData.userName;
    document.getElementById("user-image").setAttribute("src", postData.userAvatar);
    document.getElementById("user-name-info").textContent = postData.userName;
    document.getElementById("user-image-info").setAttribute("src", postData.userAvatar);
    document.getElementById("post-date").textContent = postData.date;
    document.getElementById("post-title").textContent = postData.title;
    document.getElementById("post-tags").textContent = postData.tags;
    document.getElementById("post-text").textContent = postData.text;
    document.getElementById("user-info").textContent = postData.userInfo;
    // Iterar comentarios y crear elementos nuevos
    Object.values(postData.comments).forEach(comment => {
        console.log(comment)
        if (comment != undefined && comment.commentText != undefined) {
            commentWrapper.append(createCommentsCard(comment.userImg, comment.user, comment.commentText));
        }
    });
}

getSelectedPost()


