let cad = `
<div class="container">
      <nav class="nav">
        <a href="index.html" class="nav__items">Inicio</a>
        <a href="sobrenosotros.html"class="nav__items">Sobre nosotros</a>
        <a href="destinos.html"class="nav__items">Destinos</a>                                         
        <a href="paquetes.html"class="nav__items">Paquetes</a>
      
      </nav>
      <section class="hero__container">
        <div class="hero__texts">
          <h1 class="hero__title">Viaja Ya</h1>
        <h2 class="hero__subtitle">
          Comienza hoy una nueva Aventura
        </h2>
        <a  href="contactanos.html" class="hero__cta" target="_blank">Contactanos</a>
        </div>

      </section>
    </div>

    <div class="hero__wave" style=" overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.00,50.03 C150.00,150.13 349.20,-50.03 500.00,50.03 L500.00,150.13 L-0.00,150.13 Z" style="stroke: none; fill: #fff;"></path></svg></div>

`


document.getElementById("header").innerHTML = cad;
let cadfooter = `
<div class="footer-left">

<!-- <div class="logo">
          <img src="/visa.png" alt="logo" width="70px">

      </div> -->


      
<p class="footer-links">
  <a href="index.html" class="link-1">Inicio</a>

  <a href="destinos.html">Destinos</a>

  <a href="sobrenosotros.html">Sobre Nosotros</a>

  <a href="Sucursales.html">Sucursales</a>

  <a href="Contactanos.html">Contactanos</a>

  <a href="paquetes.html">Paquetes</a>
</p>

<!-- <p class="footer-company-name">Viajá ya Company © 2023</p> -->
</div>

<div class="footer-center">

<div>
<!--<i class="fa fa-map-marker"></i>-->
<i class="fa-solid fa-location-dot"></i>
  <p><span>Vedia 3600</span> CABA, Argentina</p>
</div>

<div>
  <i class="fa fa-phone"></i>
  <p>+1.555.555.5555</p>
</div>

<div>
  <i class="fa fa-envelope"></i>
  <p class="suport"><a href="mailto:support@viajaya.com">support@viajaya.com</a></p>
</div>

</div>

<div class="footer-right">

<p class="footer-company-about">
  <span>Sobre nosotros</span>
  Te ofrecemos las mejores experiencias de vida: paseos, excursiones y la mejor gastronomía.
</p>

<div class="footer-icons">

  <a href="https://api.whatsapp.com/send?phone=11111111" target="_blank"><img width="30"
      src="./imagenes/whatsapp.svg" alt="logo whatsapp"></a>
  <a href="https://www.facebook.com" target="_blank"><img width="30" src="./imagenes/facebook.svg" alt="log"></a>
  <a href="https://www.instagram.com" target="_blank"><img width="30" src="./imagenes/instagram.svg"
      alt="log"></a>

</div>

</div>

<p class="footer-company-name">Viajá ya Company © 2023</p>

`
document.querySelector("footer").innerHTML = cadfooter;
