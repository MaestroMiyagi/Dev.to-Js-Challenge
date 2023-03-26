import { createPostCard } from "./createDOM.js";
import { getPosts, getUsers } from "./api.js";

const printPosts = async () => {
    let posts = await getPosts();
    let postsWrapper = document.getElementById("card-wrapper");
    Object.values(posts).forEach(post => {
        postsWrapper.append(createPostCard(post.postImage, post.date, post.title, post.tags,post.userName,post.userAvatar));
    });
};

export { printPosts }

