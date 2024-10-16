const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const usuario = document.querySelector("#usuario").value;
    const pass = document.querySelector("#clave").value;
    
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = Users.find(user => user.usuario === usuario && user.clave === pass);
    
    if (!validUser) {
        return swal("¡Usuario o contraseña incorrectos!");
    }
    swal(`¡Bienvenido ${validUser.usuario}!`);
    
    window.location.href = '/index.html';
})