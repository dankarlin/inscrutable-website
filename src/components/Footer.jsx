
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5" role="contentinfo">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="mb-3">Inscrutable</h5>
            <p className="mb-3">
              Empowering the voiceless and underserved through innovative solutions 
              and community-driven change.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin" style={{fontSize: '1.5rem'}}></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-envelope" style={{fontSize: '1.5rem'}}></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-white-50 text-decoration-none">About</a></li>
              <li><a href="#services" className="text-white-50 text-decoration-none">Services</a></li>
              <li><a href="#testimonials" className="text-white-50 text-decoration-none">Testimonials</a></li>
              <li><a href="#donate" className="text-white-50 text-decoration-none">Donate</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="mb-3">Our Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Community Organizing</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Advocacy Training</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Social Justice</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Policy Research</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:info@inscrutable.org" className="text-white-50 text-decoration-none">
                  info@inscrutable.org
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                <span className="text-white-50">(555) 123-4567</span>
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                <span className="text-white-50">Community-Based Organization</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-white-50">
              &copy; 2024 Inscrutable. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white-50 text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-white-50 text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-white-50 text-decoration-none">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer