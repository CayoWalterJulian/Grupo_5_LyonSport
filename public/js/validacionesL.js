window.addEventListener("load", function(){
    let formulario = document.querySelector("form.login")
    let ulErrores = document.querySelector("div.errores ul")
    let botonSubmit = document.querySelector("#botons")
   
    formulario.addEventListener("submit", function(e){
        ulErrores.innerHTML = ""

               let errores = []

               let campoEmail = document.querySelector("input#usuario");
               if (campoEmail.value == ""){
                   errores.push ("Ingrese su email completo")
               }
       
               let campoPassword = document.querySelector("input#contraseña");
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