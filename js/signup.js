const signupForm = document.querySelector("#signupForm")
signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const usuario = document.querySelector("#usuario").value
    const pass = document.querySelector("#clave").value

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistered = Users.find(u => u.usuario === usuario)
    
    if (isUserRegistered) {
        return swal("El usuario ya está registrado")
    }
    
    Users.push({ usuario: usuario, clave: pass })
    localStorage.setItem("users", JSON.stringify(Users))
    swal("Registro Exitoso")

    window.location.href = 'login.html';
})