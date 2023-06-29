const{ createApp } = Vue
    createApp({
        data() {
            return {
                paquetes: [],
                url:'https://linamendieta.pythonanywhere.com/paquetes',
                error:false,
                cargando:true,
                id:0,
                nombre:"",
                imagen:"",
                stock:0,
                precio:0,
            }
            },
            methods: {
                fetchData(url) {
                    fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.paquetes = data;
                        this.cargando=false
                    })
                    .catch(err => {
                        console.error(err);
                        this.error=true
                    })
                },
                eliminar(id) {
                    const url = this.url+'/' + id;
                    var options = {
                        method: 'DELETE',
                    }
                    fetch(url, options)
                         .then(res => res.text())
                         .then(res => {
                            alert('Registro Eliminado')
                            location.reload();
                         })
                
                },
                grabar(){
                    let paquete = {
                        nombre:this.nombre,
                        precio:this.precio,
                        stock:this.stock,
                        imagen:this.imagen
                    }
                    var options = {
                        body: JSON.stringify(paquete),
                        method: 'POST',
                        headers: { 'Content-type': 'application/json' },
                        redirect: 'follow'
                    }
                    fetch(this.url, options)
                         .then(function () {
                            alert("Registro grabado")
                            window.location.href = "./index.html";
                         })
                         .catch(err => {
                            console.error(err);
                            alert("Error al grabar")
                         })
                }

            },
            created(){
                this.fetchData(this.url)
            },
        }).mount('#app')