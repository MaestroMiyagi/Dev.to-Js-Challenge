let form = document.querySelectorAll("#user input")
let user = {}


form.forEach((field) => {
    field.addEventListener("keyup", (event) => {
      let property = event.target.name;
      let value = event.target.value;
      user[property] = value;
      console.log(user); 
    });
  });

  const logUser = () => {
    let {email, password} = user
    email && password ? (localStorage.setItem("token", "userComplete"), window.open("../index.html", "self")) : alert("llenar formulario")
  }

  document.getElementById("login-button").addEventListener("click", (logUser))