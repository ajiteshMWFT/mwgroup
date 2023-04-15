import React, { useState } from 'react'
import Slider from 'react-slick'

const ImgSlider = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const settings = {
        // speed: 10000,
        // autoplay: true,
        // autoplaySpeed: 0,
        // cssEase: "linear",
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: "0",
                    centerMode: false,
                    // dots: true
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

    const settings2 = {
        slidesToShow: 4,
        swipeToSlide: true,

        vertical: true,
        verticalSwiping: true,
        arrows: false,
        draggable: true,
        mobileFirst: true,
        slidesToScroll: 1,
        focusOnSelect:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    vertical:false,
                    verticalSwiping: false,
                },
               
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    }

    const Images = [
        "https://iili.io/Hv06kp2.md.jpg",
        "https://iili.io/Hv06DhP.md.jpg",
        "https://iili.io/Hv0PfjI.md.jpg",
        "https://iili.io/Hv0P5jS.md.jpg",
        "https://iili.io/Hv0P13b.md.jpg",

    ]
    return (
        <div className='container mt-5'>
            <div className="section-title">
                <h2>Gallery</h2>
                <p>Life At Mushroom World</p>
            </div>
            {/* <Slider className='container'  >
                {Images?.map((img, i) => (
                    <>
                        <img src={img} alt="" className='w-full' style={{objectFit:"contain"}}/>
                    </>
                ))}
            </Slider> */}

            {/* <Slider 
        style={{ maxWidth: 600}}
        >
            
   {Images?.map((img, i) => (
                    <>
                        <img src={img} alt="" width={100}/>
                    </>
                ))}
            </Slider> */}



            <div className="container">
                <div className="synch-carousels container" style={{ maxWidth: "1100px" }}>
                    <div className="left child">
                        <Slider asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            {...settings2}
                            className="gallery">


                            {Images?.map((img, i) => (
                                <div className="item" key={i}>
                                    <img
                                        src={img}
                                        alt=""
                                    />
                                </div>
                            ))}

                        </Slider>
                    </div>
                    <div className="right child">
                        <Slider
                            {...settings}
                            asNavFor={nav2} ref={(slider1) => setNav1(slider1)}

                            className="gallery2">


                            {Images?.map((img, i) => (
                                <div className="item" key={i}>
                                    <img
                                        src={img}
                                        alt=""
                                        className='w-full'
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            ))}

                        </Slider>

                    </div>
                </div>
            </div>
            <style jsx>{`

  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  body {
    font: normal 18px/1.5 monospace;
    overflow: hidden;
    background: #424242;
  }
  
  .over-visible {
    overflow: visible;
  }
  
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: white;
  }
  

  
  .synch-carousels {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .synch-carousels > * {
    width: 100%;
  }
  
  .synch-carousels .right {
    order: -1;
  }
  
  .synch-carousels .left {
    overflow: hidden;
  }
  
  .synch-carousels .gallery {
    display: none;
  }
  
  .synch-carousels .slick-slide {
    outline: none;
  }
  
  .synch-carousels .slick-vertical .slick-slide {
    border: none;
  }
  
  .synch-carousels .gallery .slick-list {
    height: auto !important;
    margin: 0 -20px;
  }
  
  .synch-carousels .gallery .slick-slide {
    cursor: pointer;
  }
  
  .synch-carousels .gallery .slick-slide {
    margin: 0 20px;
  }
  
  .synch-carousels .nav-arrows {
    display: flex;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .synch-carousels .nav-arrows svg {
    fill: white;
  }
  
  .synch-carousels .arrow-left {
    margin-right: 35px;
  }
  
  .synch-carousels .photos-counter {
    position: absolute;
    top: 10px;
    right: 0;
    padding: 0 20px;
    color: white;
    background: #292929;
  }
  
  @media screen and (min-width: 480px) {
    .synch-carousels .right {
      margin-bottom: 20px;
    }
  
    .synch-carousels .gallery {
      display: block;
    }
  }
  
  @media screen and (min-width: 1024px) {
    .synch-carousels .right {
      position: relative;
      width: calc(100% - 230px);
      margin-bottom: 0;
      order: 2;
    }
  
    .synch-carousels .left {
      width: 210px;
    }
  
    .synch-carousels .gallery .slick-slide {
      margin: 0 0 20px 0;
    }
  
    .synch-carousels .gallery .slick-list {
      margin: 0;
    }
  }
`}</style>
        </div>



    )
}

export default ImgSlider