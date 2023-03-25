const BASE_URL = "https://kodemia-24js-default-rtdb.firebaseio.com/.json";

const getPosts = async () => {
    let response = await fetch(`${BASE_URL}/POSTS/.json`);
    let data = await response.json();
    return data;
};

const getUsers = async () => {
    let response = await fetch(`${BASE_URL}USERS/.json`);
    let data = await response.json();
    return data;
};

const deletePost = async (postKey) => {
    console.log(`Eliminando ${postKey}...`)
    let response = await fetch(
        `${BASE_URL}${postKey}/${REST}`,
        {method:"DELETE"
    })
    let data = await response.json()
    console.log("Post eliminado")
    return data
}

const createPost = async (postObject) => {
    let response = await fetch(
        `${BASE_URL}${REST}`,{
            method: "POST",
            body: JSON.stringify(postObject)
        })
    let data = await response.json()
    return data
}

export { getPosts, getUsers, deletePost, createPost };
