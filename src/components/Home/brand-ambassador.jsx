import React from 'react'
import Slider from 'react-slick';

const BrandAmbassador = () => {
    const Ambassadors = [{
        img: "https://iili.io/HvalZKl.md.png"
    },
    {
        img: "https://iili.io/Hva0BHP.md.png"
    },
    {
        img: "https://iili.io/Hva05UN.md.png"
    },
    {
        img: "https://iili.io/Hva0vWb.md.png"
    },
    {
        img: "https://iili.io/Hva0rgV.md.png"
    },
    {
        img: "https://iili.io/Hva1Jet.md.png"
    },
    {
        img: "https://iili.io/Hva1B14.md.png"
    },
    {
        img: "https://iili.io/Hva1uIe.md.png"
    }
    ]

    const settings = {
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        // variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },

        ]
    };
    return (
        <div className='container'>
            <div className="section-title">
                <h2>Our Brand Presenter</h2>
                <p>Mushroom World among celebrities</p>
            </div>
            <Slider {...settings}>
                {Ambassadors?.map((e, i) => (
                    <img
                        src={e.img}
                        className=" img-fluid img-drop-shadow"
                        alt=""
                        key={i}

                    />
                ))}
            </Slider>
            <style jsx>{`
                .img-drop-shadow{
                    filter: drop-shadow(0 0 0.2rem #212121);
                }
            `}</style>
        </div>
    )
}

export default BrandAmbassador