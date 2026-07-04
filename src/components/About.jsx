
import useScrollAnimation from '../hooks/useScrollAnimation'

const About = () => {
  const titleRef = useScrollAnimation()
  const descRef = useScrollAnimation()
  
  return (
    <section id="about" className="py-5 bg-light" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 
              id="about-heading" 
              className="display-4 mb-4 animate-on-scroll"
              ref={titleRef}
            >
              Our Mission
            </h2>
            <p 
              className="lead mb-5 animate-on-scroll"
              ref={descRef}
            >
              At Inscrutable, we believe that everyone deserves a voice and access to the resources 
              they need to thrive. We work tirelessly to bridge gaps in our communities and create 
              pathways to empowerment for those who need it most.
            </p>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm geometric-accent">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-people-fill" style={{fontSize: '3rem', color: '#12d2bc'}}></i>
                </div>
                <h5 className="card-title">Community Focused</h5>
                <p className="card-text">
                  We work directly with communities to understand their unique needs and challenges.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-lightbulb-fill" style={{fontSize: '3rem', color: '#41dac8'}}></i>
                </div>
                <h5 className="card-title">Innovative Solutions</h5>
                <p className="card-text">
                  We develop creative, sustainable approaches to address complex social issues.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-heart-fill" style={{fontSize: '3rem', color: '#70e3d6'}}></i>
                </div>
                <h5 className="card-title">Empowerment</h5>
                <p className="card-text">
                  We provide tools and resources that enable lasting, positive change from within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About