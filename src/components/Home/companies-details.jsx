import React from "react";
const CompanyDetails = [
  {
    name: "Mushroom World Ayurved",
    details: `At Mushroom World Ayurved, we believe that good health is the foundation of a happy and fulfilling life. That's why we provide Ayurvedic products and services that help you achieve optimal health and wellness. Our team of experts has extensive knowledge and experience in Ayurveda, and we are dedicated to providing our customers with the highest quality products and services.
  We offer a wide range of Ayurvedic products, including herbal supplements, oils, and skincare products, that are made from natural ingredients and are free from harmful chemicals. We also provide Ayurvedic consultations and therapies that are tailored to your individual needs and goals. Whether you are looking to improve your digestion, boost your immunity, or simply enhance your overall well-being, we are here to help.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_48a4c3fbbb0647529c07e3e9edb62004~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02.png"
  },

  {
    name: "Mushroom World Futuretech",
    details: `At Mushroom World Futuretech, we offer innovative technology solutions that enable businesses to grow and thrive. Our team of experts has extensive experience in developing and implementing cutting-edge technologies that help businesses stay ahead of the competition.
  We offer a wide range of services, including web and mobile app development, artificial intelligence and machine learning, blockchain technology, and digital marketing. Our solutions are tailored to your business needs and goals, and we are committed to providing you with the highest quality services that deliver measurable results.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_0ee473bbb8a14a0495d70d5c99d8711c~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/04.png"
  },
  {
    name: "Dt. Poonam Sagar",
    details: `At Dt. Poonam Sagar, we provide expert nutritional guidance and support to help you achieve your health goals. Our team of dietitians has extensive knowledge and experience in nutrition, and we are dedicated to providing you with personalized nutrition plans that are tailored to your individual needs and preferences.
  We offer a wide range of services, including weight management, sports nutrition, pregnancy and postnatal nutrition, and therapeutic diets. Our approach is based on evidence-based research, and we use the latest technologies to track your progress and ensure that you achieve your health goals.
  
  `,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_1fdc264f917a4041a782625c576ca7d5~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/06.png"
  },
  {
    name: "Mushroom World Films",
    details: `At Mushroom World Films, we create engaging and meaningful films that entertain, inspire, and educate audiences. Our team of filmmakers and producers has extensive experience in creating high-quality content that resonates with audiences and delivers a powerful message.
  We offer a wide range of film production services, including scriptwriting, casting, location scouting, production design, and post-production. Whether you are looking to create a corporate video, a documentary, or a feature film, we are here to help you bring your vision to life.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_383ac4437a9b42f99a536566beea8596~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/05.png"
  },
  {
    name: "Mushroom World Wines",
    details: `At Mushroom World Wines, we produce premium quality wines that are made from the finest grapes and crafted with care and precision. Our wines are a reflection of our commitment to excellence and our passion for winemaking.
  We offer a wide range of wines, including red, white, and sparkling wines, that are perfect for any occasion. Whether you are looking for a wine to pair with a romantic dinner or to celebrate a special occasion, we have the perfect wine for you.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_8ab57a0cbbdd4724aea8b27e4bd42a6e~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/08.png"
  },
  {
    name: "KHOJEE The Treasure Hunt",
    details: `At KHOJEE The Treasure Hunt, we offer a fun and exciting way to explore the world around you. Our treasure hunts are designed to challenge your mind and your creativity, as you solve puzzles, decode clues, and uncover hidden treasures.
  We offer a wide range of treasure hunts, including indoor and outdoor hunts, that are suitable for all ages and skill levels. Whether you are looking for a fun activity to do with your family, friends, or colleagues, or you want to test your problem-solving skills, KHOJEE The Treasure Hunt is the perfect adventure for you.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_ae6966b65d8e42b9809e90387ca8395a~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/010.png"
  },
  {
    name: "TEFUN Game",
    details: `At TEFUN Game, we offer a range of exciting and engaging games that are designed to stimulate your mind and challenge your skills. Our games are suitable for all ages and skill levels, and are perfect for family game night, parties, and events.
  We offer a wide range of games, including board games, card games, and puzzle games, that are designed to promote teamwork, creativity, and critical thinking. Our games are made from high-quality materials and are designed to provide hours of fun and entertainment.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_6ef13bc781b640f887b02eb677828aad~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/011.png"
  },
  {
    name: "MushroomeX Product Range",
    details: `At MushroomeX, we offer a range of innovative and high-quality products that are designed to enhance your health and wellbeing. Our products are made from the finest natural ingredients and are formulated to provide maximum benefits to your body and mind.
  Our product range includes a variety of supplements, herbal remedies, and health products that are suitable for all ages and lifestyles. Whether you are looking to improve your immunity, boost your energy, or enhance your overall wellbeing, our products are designed to help you achieve your health goals.`,
    url: ``,
    img:"https://static.wixstatic.com/media/63eac2_ab8affcb9e374ed2bd385b8cdf632a7f~mv2.png/v1/fill/w_249,h_249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/012.png"
  },

];
const CompaniesDetails = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Our Companies</h2>
        <p>Check our Our Companies</p>
      </div>

      {CompanyDetails?.map((company, i) => (
        <section className="about">
          <div className="container">
            <div className="row align-items-center">
              <div
                className={`col-lg-6  row ${
                  i % 2 !== 0 ? "order-1 order-lg-2" : "order-2 order-lg-1"
                }`}
              >
                <div className="d-flex justify-content-center">

                <img src={company.img} className="img-fluid" alt="" />
                </div>
              </div>
              <div
                className={`col-lg-6 pt-4 pt-lg-0  content ${
                  i % 2 !== 0 ? "order-2 order-lg-1" : "order-2 order-lg-2"
                }`}
              >
                <h3>{company.name}</h3>
                <p className="fst-italic">{company.details}</p>
                <a
                  href={company.url}
                  className="btn btn-warning "
                  target="_blank"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CompaniesDetails;
