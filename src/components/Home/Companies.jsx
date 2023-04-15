import React from 'react'
import Slider from 'react-slick'

const Companies = () => {
    const settings = {
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        // variableWidth: true,
        slidesToShow:5,
        slidesToScroll: 1,
        infinite: true,
    
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
        
          ]
      };
  return (
    <section id="clients" className="clients">
    <div className="container" >
      <div className="clients-slider swiper">
        <Slider {...settings}>
          <>
            <img
              src="https://static.wixstatic.com/media/63eac2_2daffdd1e94e48a19b7937eab93e481c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01.png"
              className="gray img-fluid"
              alt=""
              width={100}
              height={100}
            />
          </>

          <>
            <img
              src="https://static.wixstatic.com/media/63eac2_48a4c3fbbb0647529c07e3e9edb62004~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02.png"
              className="gray img-fluid"
              alt=""
              width={100}
              height={100}
            />
          </>

          <>
            <img
              src="https://static.wixstatic.com/media/63eac2_925760d910ff45b7bf639d8f133016d8~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/03.png"
              className="gray img-fluid"
              alt=""
              width={100}
              height={100}
            />
          </>

          <>
            <img
              src="https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
              className="gray img-fluid"
              alt=""
              width={100}
              height={100}
            />
          </>

          <>
            <img
              src="https://static.wixstatic.com/media/63eac2_1fdc264f917a4041a782625c576ca7d5~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/06.png"
              className="gray img-fluid"
              alt=""
              width={100}
              height={100}
            />
          </>

          <>
            <img
              src="https://static.wixstatic.com/media/63eac2_383ac4437a9b42f99a536566beea8596~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/05.png"
              className="gray img-fluid"
              alt=""
              width={100}
              height={100}
            />
          </>
        
        </Slider>
        <div className="swiper-pagination" />
      </div>
    </div>

    <style jsx>{`
    .gray{
        filter: grayscale(100%);
        transition-duration: 1s;
    }
    .gray:hover{
        filter: grayscale(00%);
        transition-duration: 1s;
    }

    `}</style>
  </section>
  
  )
}

export default Companies