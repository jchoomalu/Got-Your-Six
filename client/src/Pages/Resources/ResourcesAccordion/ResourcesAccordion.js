import './ResourcesAccordion.css'

//accordion for displaying static resource information 
const ResourcesAccordion = ({resources}) => {
  if (resources) {
  return (
    <div className="container my-5">
      {resources.map((service, i) => (
        <div key={i}>
          <div className="accordion col-10 mx-auto accordion-flush">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target={`#${service.title.split(' ')[0] + i.toString()}`} aria-expanded="false">
                  {service.title}
                </button>
              </h2>
              <div id={`${service.title.split(' ')[0] + i.toString()}`} className="accordion-collapse collapse shadow" aria-labelledby="flush-headingOne">
                <div className="accordion-body">
                  <h4>{service.title}</h4>
                  <span><small>{service.type}</small></span>
                  <div>
                    <a href={`tel:${service.phone.replaceAll('-', '')}`}>{service.phone}</a>
                  </div>
                  <div>
                    <a target="_blank" href={`https://${service.online}`}>{service.online}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
      }
}

export default ResourcesAccordion
