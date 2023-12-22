window.addEventListener("load", function(){
    let formulario = document.querySelector("form.register")
    let ulErrores = document.querySelector("div.errores ul")
    let botonSubmit = document.querySelector(".botons")

    formulario.addEventListener("submit", function(e){
        ulErrores.innerHTML = ""
        let errores = []
        let campoName = document.querySelector("input#name");
        if (campoName.value == ""){
            errores.push ("el campo nombre no debe estar vacio")
        } else if (campoName.value.lengt < 3){
            errores.push ("Su nombre debe tener al menos 3 caracteres")
        }

        let campoEmail = document.querySelector("input#email");
        if (campoEmail.value == ""){
            errores.push ("No puede estar vacio su e-mail vacio")
        }

        let campoPassword = document.querySelector("input#password");
        if (campoPassword.value == ""){
            errores.push ("Su contraseña no debe estar vacia")
        } else if (campoPassword.value.length < 8){
            errores.push ("Su contraseña debe tener mas de 8 caracteres")
        }

        if (errores.length > 0){
            e.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+ errores[i] +"</li>"
            }
        }

})
    botonSubmit.addEventListener("click", function () {
        ulErrores.style.visibility = "visible";
    })
})