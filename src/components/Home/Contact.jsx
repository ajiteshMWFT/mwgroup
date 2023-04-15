import React, { useState } from 'react'

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    fetch("https://formsubmit.co/ajax/8e238981af63db802627085807879471 ", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: e?.target[0]?.value,
        email: e?.target[1]?.value,
        sub: e?.target[2]?.value,
        message: e?.target[3]?.value
      })
    })
      .then(response => response.json())
      .then(data => {
        alert("Form submitted")
        setLoading(false)
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""

      })
      .catch(error => console.log(error));
  }
  return (
    <section id="contact" className="contact">
      <div className="container" >
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div>
          <iframe
            style={{ border: 0, width: "100%", height: 270 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.02583428937!2d77.3713227752426!3d23.278510978995218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67debe6019e7%3A0xab270995284d8aff!2sMushroom%20World!5e0!3m2!1sen!2sin!4v1681382593591!5m2!1sen!2sin"

            allowFullScreen=""
          />
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              onSubmit={e => submitForm(e)}

              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required

                />
              </div>
              {/* <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>*/}
              <div className="text-center">
                <button type="submit" disabled={loading ? true : false}> {loading ? "Sending..." : "Send Message"} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact