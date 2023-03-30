const createCommentsCard = (userImg, user, commentText) => {
    let divCard = document.createElement("div");
    divCard.classList.add("d-flex");
    let commentUserImg = document.createElement("img");
    commentUserImg.classList.add("rounded-circle", "border", "object-fit-cover", "me-3", "commment-user-img");
    let divCommentCard = document.createElement("div");
    divCommentCard.classList.add("card", "w-100", "p-3");
    let commentUser = document.createElement("h5");
    commentUser.classList.add("fs-6", "fw-bold");
    let comment = document.createElement("p");
    comment.classList.add("card-text");

    //Create content
    commentUserImg.src = userImg;
    commentUser.innerText = user;
    comment.innerText = commentText;

    //Insert content
    divCard.append(commentUserImg, divCommentCard);
    divCommentCard.append(commentUser, commentText);
    return divCard;
};

export { createCommentsCard };