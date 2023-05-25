function validar(){
    let logica=true
    let nombre=document.getElementById("nombre") .value
    let email=document.getElementById("email") .value

      if (nombre.length === 0){
        alert("Nombre Obligatorio")
        logica=false
      }

      if (email.length === 0){
        alert("Email Obligatorio")
        logica=false
      }

      if(logica){
        grabar()
      }
    }
    function grabar(){
        alert("Grabando...")
        document.getElementById("nombre") .value=""
        document.getElementById("email") .value=""

    }
