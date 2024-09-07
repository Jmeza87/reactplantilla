import React from 'react'

const Hero = () => {
    return (
  <section id="hero" className='py-5'>
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
        <h1>Conectamos destinos, construimos confianza.</h1>
        <h2>En Transporte Meza, creemos que cada viaje es más que solo un trayecto, es una oportunidad para conectar personas y lugares.</h2>
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
        <img src="src/assets/img/1.png" className="img-fluid" alt />
      </div>
    </div>
  </div>
</section>



  )
}

export default Hero