import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0">
                        <div>
                            <h1> <span style={{ color: '#e21e1e', fontWeight: 'bold' }}>Welcome!</span> Transforming Ideas into Digital Reality</h1>
                            <h2>Unlock the <span style={{ fontStyle: 'italic', color: '#df0a0a' }}>Power of Web and Mobile Solutions</span>  with Webify</h2>
                            <p>We craft exceptional websites and applications tailored to your needs, backed by expert consultation. Elevate your online presence and engage your audience effectively.</p>

                            <a href="#" className="download-btn"><i className="bx bxl-play-store"></i> Get Consultant</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-left">
                        <img src={process.env.PUBLIC_URL + '/sample1-removebg-preview.png'} className="img-fluid align-self-start" alt="" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
