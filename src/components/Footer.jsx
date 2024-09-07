import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-lg-6">
          <h3>Bocor</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
        </div>
      </div>
      <div className="row footer-newsletter justify-content-center">
        <div className="col-lg-6">
          <form action method="post">
            <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
      <div className="social-links">
        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
      </div>
    </div>
  </div>
  <div className="container footer-bottom clearfix">
    <div className="copyright">
      © Copyright <strong><span>Bocor</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>

  )
}

export default Footer