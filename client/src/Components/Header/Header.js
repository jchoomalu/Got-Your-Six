import {Carousel} from 'react-bootstrap'
import home1 from '../../assets/images/home1.png'
import home2 from '../../assets/images/home2.png'
import home3 from '../../assets/images/home3.png'
import './Header.css'

const Header = () => {
  //main header carousel showed on most pages 
  return (
  <header className="mx-auto" id="story-header">
      <Carousel>
        <Carousel.Item>
          <img
            className="stories-img"
            src={home1}
            alt="First slide various military and combat situations"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Encouraging and connecting</h3>
              <p>active duty service members, veterans, and their families.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="stories-img"
            src={home2}
            alt="Second slide various military and combat situations"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Building communities</h3>
              <p>while relying on one another to fill the gaps in goverment services.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="stories-img"
            src={home3}
            alt="Last slide various military and combat situations"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Sharing experiences</h3>
              <p>then and now, always together, always forward.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      </header>
  )
}

export default Header