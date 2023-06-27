function guardar(){
    let n = document.getElementById("nombre").value
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("stock").value)
    let i = document.getElementById("imagen").value

    let paquete = {
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    }

    let url = "https://linamendieta.pythonanywhere.com/paquetes"
    var options = {
        body: JSON.stringify(paquete),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url,options)
    .then(function () {

        alert("Grabado")
        window.location.href = "producto_nuevo.html";

    })
    .catch(err => {
        alert("Error al grabar")
        console.error(err);
    })

    

}