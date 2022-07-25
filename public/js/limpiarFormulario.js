window.addEventListener('load',function () {

    let liErrorDocumento1 = document.querySelector("#liErrorDocumento1")
    let liErrorDocumento2 = document.querySelector("#liErrorDocumento2")
          
    let liErrorNombre1 = document.querySelector("#liErrorNombre1")
    let liErrorNombre2 = document.querySelector("#liErrorNombre2")
    let liErrorNombre3 = document.querySelector("#liErrorNombre3")

    let liErrorApellido1 = document.querySelector("#liErrorApellido1")
    let liErrorApellido2 = document.querySelector("#liErrorApellido2")
    let liErrorApellido3 = document.querySelector("#liErrorApellido3")

    let liErrorEmail1 = document.querySelector("#liErrorEmail1")
    let liErrorEmail2 = document.querySelector("#liErrorEmail2")

    let liErrorFecha1 = document.querySelector("#liErrorFecha1")
    let liErrorFecha2 = document.querySelector("#liErrorFecha2")

    let liErrorDomicilio1 = document.querySelector("#liErrorDomicilio1")
    let liErrorDomicilio2 = document.querySelector("#liErrorDomicilio2")

    let liErrorPassword1 = document.querySelector("#liErrorPassword1")
    let liErrorPassword2 = document.querySelector("#liErrorPassword2")

    let liErrorFile1 = document.querySelector("#liErrorFile1")

    let boton_limpiar_form = document.querySelector("#boton-limpiar-form")
    let register_form = document.querySelector('.form-Reg')
    let preview = document.getElementById('preview')

    let documento = document.querySelector('#documento');
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let fecha = document.querySelector("#fecha")
    let domicilio = document.querySelector("#domicilio");
    let pass = document.querySelector("#pass");
    let file = document.querySelector("#file")
    

    boton_limpiar_form.addEventListener("click",function(event){
        event.preventDefault()
        preview.innerHTML = '' //oculta la foto de perfil
        register_form.reset() //limpia todos los campos del formulario  
        
      
        liErrorDocumento1.classList.remove("show")
        liErrorDocumento1.classList.add("none")  
        liErrorDocumento2.classList.remove("show")
        liErrorDocumento2.classList.add("none")  
        
        liErrorNombre1.classList.remove("show")
        liErrorNombre1.classList.add("none")
        liErrorNombre2.classList.remove("show")
        liErrorNombre2.classList.add("none")
        liErrorNombre3.classList.remove("show")
        liErrorNombre3.classList.add("none")

        liErrorApellido1.classList.remove("show")
        liErrorApellido1.classList.add("none")
        liErrorApellido2.classList.remove("show")
        liErrorApellido2.classList.add("none")
        liErrorApellido3.classList.remove("show")
        liErrorApellido3.classList.add("none")

        liErrorEmail1.classList.remove("show")
        liErrorEmail1.classList.add("none")
        liErrorEmail2.classList.remove("show")
        liErrorEmail2.classList.add("none")

        liErrorFecha1.classList.remove("show")
        liErrorFecha1.classList.add("none")
        liErrorFecha2.classList.remove("show")
        liErrorFecha2.classList.add("none")

        liErrorDomicilio1.classList.remove("show")
        liErrorDomicilio1.classList.add("none")
        liErrorDomicilio2.classList.remove("show")
        liErrorDomicilio2.classList.add("none")

        liErrorPassword1.classList.remove("show")
        liErrorPassword1.classList.add("none")
        liErrorPassword2.classList.remove("show")
        liErrorPassword2.classList.add("none")

        liErrorFile1.classList.remove("show")
        liErrorFile1.classList.add("none")

        documento.classList.remove("valid")                                               
        nombre.classList.remove("valid")                                              
        apellido.classList.remove("valid")                                              
        email.classList.remove("valid")                                              
        fecha.classList.remove("valid")                                              
        domicilio.classList.remove("valid")                                              
        pass.classList.remove("valid")                                                
        file.classList.remove("valid")                                              

        sub_button.style.visibility = "hidden"
        
        })


})