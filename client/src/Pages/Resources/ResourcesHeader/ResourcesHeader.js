import {Carousel} from 'react-bootstrap'
import home1 from '../../../assets/images/home1.png'
import home2 from '../../../assets/images/home2.png'
import home3 from '../../../assets/images/home3.png'

const ResourcesHeader = () => {
  //resources header carousel
  return (
  <header className="mx-auto" id="story-header">
      <Carousel>
        <Carousel.Item>
          <img
            className="stories-img"
            src={home1}
            alt="First slide various military and combat photos"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">You are not alone</h3>
              <p>we care for one another, then and now.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="stories-img"
            src={home2}
            alt="Second slide various military and combat photos"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Ending stigma</h3>
              <p>and showing the strength to ask for help.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="stories-img"
            src={home3}
            alt="Third slide various military and combat photos"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Training to transition</h3>
              <p>return to society strong of mind, spirit and body.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      </header>
  )
}

export default ResourcesHeader