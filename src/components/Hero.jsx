
const Hero = () => {
  return (
    <section className="hero-section bg-primary text-white py-5" style={{minHeight: '60vh'}} aria-label="Hero section">
      {/* Floating background shapes - defer animation */}
      <div className="floating-shapes" style={{willChange: 'transform'}}>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      
      <div className="container h-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-2 fw-bold mb-4 animate-fade-in">Inscrutable</h1>
            <h2 className="h3 mb-4 animate-fade-in-delay-1">Empowering the Voiceless and Underserved</h2>
            <p className="lead mb-5 animate-fade-in-delay-2">
              We provide innovative solutions to pressing problems and empower people 
              in underserved and marginalized communities to create lasting change.
            </p>
            <nav className="d-flex gap-3 justify-content-center flex-wrap animate-fade-in-delay-3" aria-label="Primary navigation">
              <a href="#about" className="btn btn-light btn-lg btn-animated" aria-label="Learn more about our mission">
                <span>Learn More</span>
                <i className="bi bi-arrow-down ms-2"></i>
              </a>
              <a href="#donate" className="btn btn-outline-light btn-lg btn-animated" aria-label="Support our mission with a donation">
                <span>Support Our Mission</span>
                <i className="bi bi-heart ms-2"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero