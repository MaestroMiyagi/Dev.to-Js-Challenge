import { createPostCard } from "./createDOM.js";
import { getPosts, getUsers } from "./api.js";

const printPosts = async () => {
    let posts = await getPosts();
    let user = await getUsers();
    let postsWrapper = document.getElementById("card-wrapper");
    document.querySelectorAll("#card-wrapper card").forEach((element) => element.remove());
    posts.forEach((post) => {
        let {image, userId, userName, avatar, date, title, hashtags, relevant} = post;
        postsWrapper.append(createPostCard(image, userName, avatar, date, title, hashtags, relevant));
    });
};

export {printPosts}