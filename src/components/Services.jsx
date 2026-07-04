
import AnimatedCounter from './AnimatedCounter'

const Services = () => {
  return (
    <section id="services" className="py-5 section-gradient-overlay" aria-labelledby="services-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 id="services-heading" className="display-4 mb-4">Our Services</h2>
            <p className="lead">
              We provide comprehensive support to help communities build strength, 
              advocate for justice, and create meaningful change.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 shadow">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-megaphone-fill" style={{fontSize: '1.5rem'}}></i>
                  </div>
                  <h4 className="card-title mb-0">Empowering the Voiceless</h4>
                </div>
                <p className="card-text">
                  We amplify the voices of those who have been marginalized or overlooked. 
                  Through advocacy training, community organizing, and platform building, 
                  we help individuals and groups speak up for their rights and needs.
                </p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Community organizing workshops</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Advocacy training programs</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Public speaking development</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Digital storytelling platforms</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card h-100 shadow">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-scales" style={{fontSize: '1.5rem'}}></i>
                  </div>
                  <h4 className="card-title mb-0">Promoting Social Justice</h4>
                </div>
                <p className="card-text">
                  We work to address systemic inequalities and create more just communities. 
                  Our initiatives focus on policy advocacy, legal support, and community 
                  education to drive lasting social change.
                </p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Policy research and advocacy</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Legal aid coordination</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Community education programs</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Coalition building initiatives</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-lg-12">
            <div className="card shadow">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-heart-hands" style={{fontSize: '1.5rem'}}></i>
                  </div>
                  <h4 className="card-title mb-0">Making a Difference</h4>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <p className="card-text">
                      Our comprehensive approach combines direct service, capacity building, 
                      and systemic change to create lasting impact. We believe in collaborative 
                      solutions that address root causes while providing immediate support.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="border-end">
                          <h5 className="text-primary mb-0 counter-number">
                            <AnimatedCounter end={500} suffix="+" />
                          </h5>
                          <small className="text-muted">People Served</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border-end">
                          <h5 className="text-primary mb-0 counter-number">
                            <AnimatedCounter end={25} suffix="+" />
                          </h5>
                          <small className="text-muted">Communities</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <h5 className="text-primary mb-0 counter-number">
                          <AnimatedCounter end={15} suffix="+" />
                        </h5>
                        <small className="text-muted">Programs</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services