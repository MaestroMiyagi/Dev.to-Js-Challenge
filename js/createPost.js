let newPost = document.querySelectorAll("#newpost input, textarea")
let post = {}



newPost.forEach((field) => {
    field.addEventListener("keyup", (event) => {
      let property = event.target.name;
      let value = event.target.value;
      post[property] = value;
      console.log(post); 
    });
  });

  const createPost = async (post) => {
    console.log(post)
    let response = await fetch(
      "https://kodemia-24js-default-rtdb.firebaseio.com/posts/.json",
      {
        method: "POST",
        body: JSON.stringify(post),
      }
    );
    let data = await response.json();
    console.log(data);
    return data;
  };
  
document.getElementById("savePost").addEventListener("click", () => {
    createPost(post)
})