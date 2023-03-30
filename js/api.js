const BASE_URL = "https://kodemia-24js-default-rtdb.firebaseio.com/";

const getPosts = async () => {
    let response = await fetch(`${BASE_URL}/posts.json`);   
    let data = await response.json();
    return data;
};

const createPost = async (postObject) => {
    let response = await fetch(
        `${BASE_URL}${REST}`,{
            method: "POST",
            body: JSON.stringify(postObject)
        })
    let data = await response.json()
    return data
}

const getIndividualPost = async(postId)=>{
    let response = await fetch(`${BASE_URL}/posts/${postId}.json`)
    let data = await response.json()
    return data
}

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

export { getPosts, createPost, getIndividualPost, deletePost };
