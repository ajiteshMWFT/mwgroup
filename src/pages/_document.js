import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
     
  <link href="/assets/vendor/aos/aos.css" rel="stylesheet"/>
  <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="/assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
  <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>


  <link defer href="/assets/css/style.css" rel="stylesheet"/>

  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
