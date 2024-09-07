import React from 'react'
import Hero from '../components/Hero'

const Inicio = () => {
    return (
        <>
         


            {/* Contactos */}
            <section id="clients" className="clients section-bg">
                <div className="container">
                    <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src="src/assets/img/clients/client-1.png" className="img-fluid" alt data-aos="flip-right" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src="src/assets/img/clients/client-2.png" className="img-fluid" alt data-aos="flip-right" data-aos-delay={100} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src="src/assets/img/clients/client-3.png" className="img-fluid" alt data-aos="flip-right" data-aos-delay={200} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src="src/assets/img/clients/client-4.png" className="img-fluid" alt data-aos="flip-right" data-aos-delay={300} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src="src/assets/img/clients/client-5.png" className="img-fluid" alt data-aos="flip-right" data-aos-delay={400} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="client-logo">
                                <img src="src/assets/img/clients/client-6.png" className="img-fluid" alt data-aos="flip-right" data-aos-delay={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* about section */}
            <section id="about" className="about section-bg">
                <div className="container">
                    <div className="row gy-4">
                        <div className="image col-xl-5" />
                        <div className="col-xl-7">
                            <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                                <h3 data-aos="fade-in" data-aos-delay={100}>Mision de transporte Meza</h3>
                                <p data-aos="fade-in">
                                En Transporte Meza, nuestra misión es proporcionar soluciones de transporte eficientes, seguras y confiables que superen las expectativas de nuestros clientes. Nos comprometemos a conectar destinos de manera efectiva, facilitando el movimiento de personas y mercancías con la más alta calidad de servicio.
                                </p>
                                <div className="row gy-4 mt-3">
                                    <div className="col-md-6 icon-box" data-aos="fade-up">
                                        <i className="bx bx-receipt" />
                                        <h4><a href="#">Transporte de Carga General</a></h4>
                                        <p>Nos especializamos en el transporte de carga general a nivel nacional, asegurando que tus mercancías lleguen a su destino de manera segura y puntual. Contamos con una flota moderna y bien mantenida para manejar diferentes tipos de carga.</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-cube-alt" />
                                        <h4><a href="#">Ullamco laboris nisi</a></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <i className="bx bx-images" />
                                        <h4><a href="#">Labore consequatur</a></h4>
                                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <i className="bx bx-shield" />
                                        <h4><a href="#">Beatae veritatis</a></h4>
                                        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* services section */}

            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Services</h2>
                        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex" data-aos="fade-right">
                            <div className="card">
                                <div className="card-img">
                                    <img src="src/assets/img/services-1.jpg" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Temporibus laudantium</a></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex" data-aos="fade-left">
                            <div className="card">
                                <div className="card-img">
                                    <img src="src/assets/img/services-2.jpg" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Aperiores voluptates</a></h5>
                                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex" data-aos="fade-right">
                            <div className="card">
                                <div className="card-img">
                                    <img src="src/assets/img/services-3.jpg" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Veritatis natus nisi</a></h5>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex" data-aos="fade-left">
                            <div className="card">
                                <div className="card-img">
                                    <img src="src/assets/img/services-4.jpg" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href>Aliquam veritatis</a></h5>
                                    <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
                                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Fecture section */}

            <section id="features" className="features section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Features</h2>
                        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right">
                            <img src="src/assets/img/features-1.svg" className="img-fluid" alt />
                        </div>
                        <div className="col-md-7 pt-4" data-aos="fade-left">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <img src="src/assets/img/features-2.svg" className="img-fluid" alt />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5" data-aos="fade-right">
                            <img src="src/assets/img/features-3.svg" className="img-fluid" alt />
                        </div>
                        <div className="col-md-7 pt-5" data-aos="fade-left">
                            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                            <ul>
                                <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                            <img src="src/assets/img/features-4.svg" className="img-fluid" alt />
                        </div>
                        <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* portafolio section */}

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
                    <div className="row portfolio-container" data-aos="fade-up">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="src/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="src/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="src/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="src/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="src/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link" /></a>
                                </div>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* team section */}

            <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2 data-aos="fade-in">Team</h2>
                        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member" data-aos="fade-up">
                                <div className="pic"><img src="src/assets/img/team/team-1.jpg" alt /></div>
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <div className="social">
                                    <a href><i className="bi bi-twitter" /></a>
                                    <a href><i className="bi bi-facebook" /></a>
                                    <a href><i className="bi bi-instagram" /></a>
                                    <a href><i className="bi bi-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                <div className="pic"><img src="src/assets/img/team/team-2.jpg" alt /></div>
                                <h4>Sarah Jhinson</h4>
                                <span>Product Manager</span>
                                <div className="social">
                                    <a href><i className="bi bi-twitter" /></a>
                                    <a href><i className="bi bi-facebook" /></a>
                                    <a href><i className="bi bi-instagram" /></a>
                                    <a href><i className="bi bi-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                <div className="pic"><img src="src/assets/img/team/team-3.jpg" alt /></div>
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <div className="social">
                                    <a href><i className="bi bi-twitter" /></a>
                                    <a href><i className="bi bi-facebook" /></a>
                                    <a href><i className="bi bi-instagram" /></a>
                                    <a href><i className="bi bi-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                <div className="pic"><img src="src/assets/img/team/team-4.jpg" alt /></div>
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <div className="social">
                                    <a href><i className="bi bi-twitter" /></a>
                                    <a href><i className="bi bi-facebook" /></a>
                                    <a href><i className="bi bi-instagram" /></a>
                                    <a href><i className="bi bi-linkedin" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* pricing section */}

            <section id="pricing" class="pricing section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2 data-aos="fade-in">Pricing</h2>
                        <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row no-gutters">

                        <div class="col-lg-4 box" data-aos="zoom-in">
                            <h3>Free</h3>
                            <h4>$0<span>per month</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li class="na"><i class="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                <li class="na"><i class="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                            </ul>
                            <a href="#" class="get-started-btn">Get Started</a>
                        </div>

                        <div class="col-lg-4 box featured" data-aos="zoom-in">
                            <span class="featured-badge">Featured</span>
                            <h3>Business</h3>
                            <h4>$29<span>per month</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" class="get-started-btn">Get Started</a>
                        </div>

                        <div class="col-lg-4 box" data-aos="zoom-in">
                            <h3>Developer</h3>
                            <h4>$49<span>per month</span></h4>
                            <ul>
                                <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" class="get-started-btn">Get Started</a>
                        </div>

                    </div>

                </div>
            </section>






        </>
    )
}

export default Inicio