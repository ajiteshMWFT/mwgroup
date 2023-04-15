import React from 'react'
import Slider from 'react-slick'

const FeaturedIn = () => {
    const mags = [
        {
            img: "https://iili.io/HvaFIMx.md.png",
            url: ""

        },
        {
            img: "https://iili.io/HvaFXSI.md.png",
            url: ""
        },
        {
            img: "https://iili.io/HvaFvVf.md.png",
            url: ""
        },
        {
            img: "https://iili.io/HvaFQob.md.png",
            url: ""
        },
        {
            img: "https://iili.io/HvaFIMx.md.png",
            url: ""
        },
        {
            img: "https://iili.io/HvaKCUN.md.png",
            url: ""
        },
        {
            img: "https://iili.io/HvaKRsf.md.png",
            url: ""
        },
        {
            img: "https://iili.io/HvaK057.md.png",
            url: ""
        },
    ]

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
        <div className='container'>
            <div className="section-title">
                <h2>Featured in</h2>
                <p>In the Lime Light</p>
            </div>
            <Slider {...settings}>
                {mags?.map((mag, i) => (
                    <img
                    key={i}
                        src={mag.img}
                        className="gray img-fluid shadow-md"
                        alt=""
                        width={100}
                        height={100}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default FeaturedIn