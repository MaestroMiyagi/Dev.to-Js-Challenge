const createPostCard = (postImage, date, title, tags, userName, userAvatar, id) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    let divUserInfo = document.createElement("div");
    divUserInfo.classList.add("d-flex", "mb-3", "align-items-center");
    let userImg = document.createElement("img");
    userImg.classList.add("rounded-circle", "border", "object-fit-cover", "me-3");
    userImg.src = userAvatar;
    let spanUser = document.createElement("span");
    spanUser.classList.add("d-flex", "flex-column");
    let user = document.createElement("h5");
    user.classList.add("fs-6", "fw-bold");
    let spanDate = document.createElement("span");
    spanDate.classList.add("fs-6", "fw-light");
    let divCardTitle = document.createElement("h2");
    divCardTitle.classList.add("card-title");
    let linkPost = document.createElement("a");
    linkPost.href = `views/postView.html?postId=${id}`;
    let spanTitle = document.createElement("span");
    spanTitle.classList.add("d-flex");
    let tagList = document.createElement("ul");
    tagList.classList.add("list-tag_main");
    let tagItem = document.createElement("li");
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"


    //Create content
    user.innerText = userName;
    spanDate.innerText = date;
    spanTitle.innerText = title;
    tagItem.innerText = tags;

    //Insert content
    tagList.append(tagItem);
    linkPost.appendChild(spanTitle);
    divCardTitle.append(linkPost);
    spanUser.append(user, spanDate);
    divUserInfo.append(userImg, spanUser);
    divCardBody.append(divUserInfo, divCardTitle, tagList, deleteBtn);
    if (postImage != undefined) {
        let imgCard = document.createElement("img");
        imgCard.classList.add("card-img-top");
        imgCard.src = postImage;
        divCard.appendChild(imgCard);
    }
    divCard.appendChild(divCardBody);
    return divCard;
};

export { createPostCard};


