import React, { useEffect, useState } from 'react'

const API ='https://dummyjson.com/products'

const catalogo = () => {

  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);


  return (
   <section id="portfolio" className="portfolio section-bg">
  <div className="container">
    <div className="section-title">
      <h2 data-aos="fade-in">Portfolio</h2>
      <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>


    {/* renderizado de datos */}


    <div className="row portfolio-container" data-aos="fade-up">

    <div className="row">
                {datos && datos.map((item)=>(
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src={item.thumbnail} className="img-fluid" alt />
                    <div className="portfolio-links">
                      <a href={item.thumbnail} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                    </div>
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                    </div>
                  </div>
                </div>
                ))}
            </div>

    
      
      
    </div>
  </div>
</section>

  )
}

export default catalogo