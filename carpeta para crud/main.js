let cad=`
<div class="container">
    
      <section class="hero__container">
        <div class="hero__texts">
          <h1 class="hero__title">Viaja Ya</h1>
        <h2 class="hero__subtitle">
          Comienza hoy una nueva Aventura
        </h2>
        <a  href="#paque" class="hero__cta" target="_blank">Modificar Paquetes</a>
        </div>

      </section>
    </div>

    <div class="hero__wave" style=" overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.00,50.03 C150.00,150.13 349.20,-50.03 500.00,50.03 L500.00,150.13 L-0.00,150.13 Z" style="stroke: none; fill: #fff;"></path></svg></div>

`
document.querySelector("header").innerHTML=cad;

//api
const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      paquetes:[],
      url:"https://linamendieta.pythonanywhere.com/paquetes",
    }
  },
  methods:{
      fetchData(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.paquetes=data
        })
        .catch(error=>alert("ups" + error))
      },
  },

  created(){
    this.fetchData(this.url)
  }
}).mount('#app')