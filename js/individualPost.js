import { getIndividualPost } from "./api.js";

let urlParams = new URLSearchParams(window.location.search)
let postId = urlParams.get("postId")

// Datos del API
let postData = await getIndividualPost(postId)
let { postImage, userAvatar, userName, date, title, tags, text, userInfo, userImg, user, commentText } = postData

// Contenedor
let commentWrapper = document.getElementById("comment-wrapper");

const createCommentsCard = (id, userImg, user, commentText) => {
    let divCard = document.createElement("div");
    divCard.classList.add("d-flex");
    let commentUserImg = document.createElement("img");
    commentUserImg.classList.add("rounded-circle", "border", "object-fit-cover", "me-3");
    let divCommentCard = document.createElement("div");
    divCommentCard.classList.add("card", "w-100", "p-3");
    let commentUser = document.createElement("h5");
    commentUser.classList.add("fs-6", "fw-bold");
    let comment = document.createElement("p");
    comment.classList.add("card-text");

    //Create content
    commentUserImg.src = postData.userImg;
    commentUser.innerText = postData.user;
    comment.innerText = postData.commentText;

    //Insert content
    divCommentCard.append(commentUser, commentText);
    divCard.append(commentUserImg, divCommentCard);
    return divCommentCard;
};

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
        if (postData.comments != undefined) {
            commentWrapper.append(createCommentsCard(postData.id, postData.userImg, postData.user, postData.commentText));
        }
    });
}

getSelectedPost()


