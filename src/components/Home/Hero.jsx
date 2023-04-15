import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    // variableWidth: true,
    slidesToShow:5.2,
    slidesToScroll: 1,
    infinite: true,
    draggable:true,
    className: "center",
    centerMode: true,
    arrows: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: .5,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <h1>
              Welcome to mushroom World Group<span>.</span>
            </h1>
            <h2>
              We are a conglomerate of companies dedicated to serving our
              customers and communities. Our diverse portfolio includes
              subsidiaries focused on various industries such as Ayurveda,
              Foundation, Futuretech, Nutrition, Film Production, Wines, Gaming,
              and more
            </h2>
          </div>
        </div>
        <div className="row  mt-5 justify-content-center container">
          <Slider {...settings}>
            <div className="col-xl-2 col-md-4 ">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="icon-box">
                      <i className="ri-store-line" />
                      <h3>
                        <a href="">Lorem Ipsum</a>
                      </h3>
                    </div>
                  </div>
                  <div class="flip-card-back align-items-center d-flex justify-content-center">
                    <img
                      src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
                      className="object-fit-contain "
                      width={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
