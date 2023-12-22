window.addEventListener('vLogin', function() {
    const mistakes = document.querySelector("form.login")
    const bSubmit = document.querySelector("button")
    const vErrores = document.querySelector("errors")

            mistakes.addEventListener('submit', function(p) {
               evento.preventDefault();
               mistakes.innerHTML = ""
      
            let campoMail = document.querySelector('input.Email');
                if (campoMail.value = ""){
                mistakes.push("El campo no puede estar vacio")
                }
                    else if (campoMail.value){
                    mistakes.push("El campo debe contener @")
                    }
    
            let campoContraseña = document.querySelector('input.password')
                if (campoContraseña.value = ""){
                    mistakes.push("el campo no puede estar vacio")}
    
                    else if (campoContraseña.value.length < 4){
                    mistakes.push("el campo debe tener mas de 4 caracteres")
                }
            
                if (mistakes.length > 0){
                    error.preventDefault();
                    for (let i = 0; i < vErrores.length; i++) {
                        vErrores.innerHTML += <li>"Los campos no pueden estar vacios"</li>
                    }}

            })
    
            bSubmit.addEventListener("click", function () {
                mistakes.style.visibility = "visible";
    
            })
      })