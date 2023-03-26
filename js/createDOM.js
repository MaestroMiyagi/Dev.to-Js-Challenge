const createPostCard = (image, date, title, hashtags, userID, userName, avatar) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = image;
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    let divUserInfo = document.createElement("div");
    divUserInfo.classList.add("d-flex", "mb-3", "align-items-center");
    let userImg = document.createElement("img");
    userImg.classList.add("rounded-circle", "border", "object-fit-cover", "me-3");
    userImg.src = avatar;
    let spanUser = document.createElement("span");
    spanUser.classList.add("d-flex", "flex-column");
    let user = document.createElement("h5");
    user.classList.add("fs-6", "fw-bold");
    let spanDate = document.createElement("span");
    spanDate.classList.add("fs-6", "fw-light");
    let divCardTitle = document.createElement("h2");
    divCardTitle.classList.add("card-title");
    let linkPost = document.createElement("a");
    let hashtagList = document.createElement("ul");
    hashtagList.classList.add("list-tag_main");
    let hashtagsItem = document.createElement("li");


    //Create content
    user.innerText = userName;
    spanDate.innerText = date;
    divCardTitle.innerText = title;
    linkPost.setAttribute("href", link);

    //Insert content
    hashtagList.append(hashtags);
    divCardTitle.appendChild(linkPost);
    spanUser.append(user, spanDate);
    divUserInfo.append(userImg, spanUser);
    divCardBody.appendChild(divUserInfo);
    divCard.append(imgCard, divCardBody);
    return divCard;
};

export { createPostCard };


/*<div class="card shadow mb-2">
                        <img src="https://picsum.photos/200/100" class="card-img-top" alt="...">
                        <div class="card-body">
                            <div class="d-flex mb-3 align-items-center ">
                                <img class="rounded-circle border object-fit-cover me-3" src="https://i.pravatar.cc/"
                                    style="width:40px;">
                                <span class="d-flex  flex-column">
                                    <h5 class="fs-6 fw-bold">Jonathan Walters</h5>
                                    <span class="fs-6 fw-light">Feb 1 (13 hours ago)</span>
                                </span>
                            </div>
                            <div>
                                <h1 class="card-title"><a href="./views/postView.html">Netlify Acquires GatsbyJS</a>
                                </h1>
                                <ul class="list-tag__main">
                                    <li class="">#news</li>
                                    <li class="">#javascript</li>
                                    <li class="">#webdev</li>
                                    <li class="">#gatsby</li>
                                </ul>
                            </div>
                            <div class="d-flex justify-content-between w-100">
                                <div class="d-flex align-items-center">
                                    <span class="d-flex align-items-center me-3">
                                        <img src="./assets/heart-icon.svg" alt="">
                                        8 Reactions
                                    </span>
                                    <span class="d-flex align-items-center">
                                        <img src="./assets/comment-icon.svg" alt="">
                                        2 Comments
                                    </span>
                                </div>
                                <div>
                                    <span class="d-flex align-items-center">1 min <img src="./assets/save-icon.svg"
                                            alt=""></span>
                                </div>
                            </div>

                        </div>
                    </div>*/