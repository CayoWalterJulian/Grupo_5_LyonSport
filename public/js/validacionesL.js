window.addEventListener("load", function(){
    var formulario = document.querySelector("form.login")
    var ulErrores = document.querySelector("div.errores ul")
    var botonSubmit = document.querySelector(".botonn")
    formulario.addEventListener("submit", function(z){

        const errores = []
        let campoName = document.querySelector("inputt#nombre");
        if (campoName.value == ""){
            errores.push ("el campo nombre no debe estar vacio")
        } else if (campoName.value.lengt < 3){
            errores.push ("Su nombre debe tener al menos 3 caracteres")
        }

        let campoEmail = document.querySelector("inputt#mail");
        if (campoEmail.value == ""){
            errores.push ("No puede estar vacio su Email vacio")
        }

        if (errores.length > 0){
            z.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+ errores[i] +"</li>"
            }
        }

})
    botonSubmit.addEventListener("click", function () {
        ulErrores.style.visibility = "visible";
    })
})