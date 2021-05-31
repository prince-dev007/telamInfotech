import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import team from "../../assets/team-meeting-office.jpg";
function Slider() {
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 600,
        smartSpeed: 1500,
        autoplayHoverPause: true,
      };
    return (
        <div>
            <div className="container-fluid" id="sliderSection1">
                <div className="container">
            <h1>Have A Quick Look Our Works & Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla perspiciatis minus accusantium sed sapiente eligendi? Quam vero excepturi laborum facilis incidunt omnis. Tempora cum eum illum recusandae adipisci quidem.</p>
                </div>
                </div>
            <OwlCarousel {...options} className="owl-crousel slider-items">

        <div className="slide slide-1">
          <div className="slide-content ">
            <div className="row">
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                    <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">E-token Management</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Healthy Store</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Guitar Store</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide-2">
          <div className="slide-content">
            <div className="row">
            <div className="col-lg-4 p-lg-5 col-12">
            <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">TelamInfotech Trainings</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Subopali</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Refrra</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide-3">
          <div className="slide-content">
            <div className="row">
            <div className="col-lg-4 p-lg-5 col-12">
                <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Fashion Store</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">ParksNParking</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
              <div className="col-lg-4 p-lg-5 col-12">
              <div class="card shadow">
                <img src={team} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Inventory</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#Start" class="btn">Exlore More</a>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
        </div>
    )
}

export default Slider;