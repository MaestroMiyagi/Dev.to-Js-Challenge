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