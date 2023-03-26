const BASE_URL = "https://kodemia-24js-default-rtdb.firebaseio.com";

const getPosts = async () => {
    let response = await fetch(`${BASE_URL}/POSTS/.json`);
    let data = await response.json();
    return data;
};

const getUsers = async () => {
    let response = await fetch(`${BASE_URL}/USERS/.json`);
    let data = await response.json();
    return data;
};

export { getPosts, getUsers };