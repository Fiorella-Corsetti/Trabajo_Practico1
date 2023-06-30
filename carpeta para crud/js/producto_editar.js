console.log(location.search)
 var id=location.search.substr(4)
 console.log(id)

const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            precio: 0,
            url: 'https://linamendieta.pythonanywhere.com/paquetes/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.imagen = data.imagen
                    this.stock = data.stock
                    this.precio = data.precio

                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let paquete = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(paquete),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./index.html";

                })
                .catch(err => {
                    console.error(err);
                    alert("Error al modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },

}).mount('#app')