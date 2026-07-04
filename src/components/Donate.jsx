
const Donate = () => {
  return (
    <section id="donate" className="py-5 bg-primary text-white section-gradient-overlay" aria-labelledby="donate-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 id="donate-heading" className="display-4 mb-4">Support Our Mission</h2>
            <p className="lead">
              Your support helps us continue empowering communities and creating lasting change. 
              Every contribution makes a difference.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card bg-white text-dark h-100">
              <div className="card-body p-4">
                <h4 className="card-title text-primary mb-3">Make a Donation</h4>
                <p className="card-text mb-4">
                  Your financial support helps us expand our programs and reach more communities 
                  in need. Choose from one-time or recurring donations.
                </p>
                
                <div className="row g-2 mb-4">
                  <div className="col-3">
                    <button className="btn btn-outline-primary w-100">$25</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-primary w-100">$50</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-primary w-100">$100</button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-outline-primary w-100">$250</button>
                  </div>
                </div>
                
                <div className="mb-3">
                  <input type="number" className="form-control" placeholder="Custom amount" />
                </div>
                
                <button className="btn btn-primary btn-lg w-100 mb-3" aria-label="Donate now to support our mission">
                  <i className="bi bi-heart-fill me-2" aria-hidden="true"></i>Donate Now
                </button>
                
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="recurring" />
                  <label className="form-check-label" htmlFor="recurring">
                    Make this a monthly donation
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card bg-white text-dark h-100">
              <div className="card-body p-4">
                <h4 className="card-title text-primary mb-3">Other Ways to Help</h4>
                
                <div className="mb-4">
                  <h6><i className="bi bi-people-fill text-primary me-2"></i>Volunteer</h6>
                  <p className="small mb-3">
                    Join our team of dedicated volunteers and make a direct impact in your community.
                  </p>
                  <button className="btn btn-outline-primary btn-sm">Learn More</button>
                </div>
                
                <div className="mb-4">
                  <h6><i className="bi bi-share-fill text-primary me-2"></i>Spread the Word</h6>
                  <p className="small mb-3">
                    Share our mission with your network and help us reach more people who need support.
                  </p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-facebook"></i>
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-twitter"></i>
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-linkedin"></i>
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6><i className="bi bi-envelope-fill text-primary me-2"></i>Stay Connected</h6>
                  <p className="small mb-3">
                    Subscribe to our newsletter to stay updated on our latest programs and impact.
                  </p>
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your email" />
                    <button className="btn btn-primary">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="border-top border-light pt-4">
              <h5 className="mb-3">Your Impact</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h6>$25</h6>
                  <p className="small">Provides workshop materials for 5 community members</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h6>$100</h6>
                  <p className="small">Supports one person through our advocacy training program</p>
                </div>
                <div className="col-md-4 mb-3">
                  <h6>$250</h6>
                  <p className="small">Funds a complete community organizing workshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate