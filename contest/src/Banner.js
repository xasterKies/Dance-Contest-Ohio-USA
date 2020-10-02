import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <section className="slider text-center">
                <div className="slider-overlay">
                    <div className="slider-content">
                        
                        <div className="text"></div>
                        <div className="cta-div">
                            <a href="" className="btn1"><span className="con-text">Contact Us</span></a>
                        </div>
                        <div className="social-network">
                            <a href="" class="fa fa-facebook"></a>
                            <a href="" class="fa fa-instagram"></a>
                            <a href="" class="fa fa-whatsapp"></a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
