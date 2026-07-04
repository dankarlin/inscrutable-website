import martinImg from '../assets/martin.webp'
import sarahImg from '../assets/sarah.webp'
import daveImg from '../assets/dave.webp'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5 bg-light" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 id="testimonials-heading" className="display-4 mb-4">What People Say</h2>
            <p className="lead">
              Hear from the people whose lives have been touched by our work.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <picture>
                    <source srcSet={martinImg} type="image/webp" />
                    <img src="/martin.png"
                         alt="Portrait of Martin McCandless, philanthropist and supporter of Inscrutable" 
                         className="rounded-circle mb-3" 
                         width="80" 
                         height="80"
                         loading="lazy"
                         style={{objectFit: 'cover'}} />
                  </picture>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    &ldquo;Inscrutable&rsquo;s innovative approach to community empowerment is exactly what 
                    our society needs. Their commitment to giving voice to the voiceless is inspiring 
                    and effective.&rdquo;
                  </p>
                </blockquote>
                <div className="blockquote-footer">
                  <strong>Martin McCandless</strong><br />
                  <small className="text-muted">Philanthropist</small>
                </div>
                <div className="mt-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <picture>
                    <source srcSet={sarahImg} type="image/webp" />
                    <img src="/sarah.png"
                         alt="Portrait of Sarah, community leader and service beneficiary" 
                         className="rounded-circle mb-3" 
                         width="80" 
                         height="80"
                         loading="lazy"
                         style={{objectFit: 'cover'}} />
                  </picture>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    &ldquo;Thanks to Inscrutable&rsquo;s programs, I found my voice and learned how to advocate 
                    for my community. They didn&rsquo;t just help me - they empowered me to help others.&rdquo;
                  </p>
                </blockquote>
                <div className="blockquote-footer">
                  <strong>Sarah</strong><br />
                  <small className="text-muted">Service Beneficiary & Community Leader</small>
                </div>
                <div className="mt-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <picture>
                    <source srcSet={daveImg} type="image/webp" />
                    <img src="/dave.png"
                         alt="Portrait of Dave, volunteer and community supporter" 
                         className="rounded-circle mb-3" 
                         width="80" 
                         height="80"
                         loading="lazy"
                         style={{objectFit: 'cover'}} />
                  </picture>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    &ldquo;Volunteering with Inscrutable has been one of the most rewarding experiences 
                    of my life. The organization&rsquo;s mission and the people they serve make every 
                    moment meaningful.&rdquo;
                  </p>
                </blockquote>
                <div className="blockquote-footer">
                  <strong>Dave</strong><br />
                  <small className="text-muted">Volunteer & Community Supporter</small>
                </div>
                <div className="mt-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials