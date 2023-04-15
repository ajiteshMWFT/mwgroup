import React from 'react'

const Features = () => {
  return (
    <section id="features" className="features">
  <div className="container" >
    <div className="row">
      <div
        className="image col-lg-6"
        style={{ backgroundImage: 'url("assets/img/features.jpg")' }}
       
      />
      <div className="col-lg-6"  >
        <div
          className="icon-box mt-5 mt-lg-0"
          
        >
          <i className="bx bx-receipt" />
          <h4>Est labore ad</h4>
          <p>
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
            nisi ut aliquip
          </p>
        </div>
        <div className="icon-box mt-5" >
          <i className="bx bx-cube-alt" />
          <h4>Harum esse qui</h4>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt
          </p>
        </div>
        <div className="icon-box mt-5" >
          <i className="bx bx-images" />
          <h4>Aut occaecati</h4>
          <p>
            Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores
            omnis facere
          </p>
        </div>
        <div className="icon-box mt-5" data-aos="zoom-in" >
          <i className="bx bx-shield" />
          <h4>Beatae veritatis</h4>
          <p>
            Expedita veritatis consequuntur nihil tempore laudantium vitae denat
            pacta
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Features