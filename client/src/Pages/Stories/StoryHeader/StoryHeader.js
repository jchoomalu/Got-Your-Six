import { Carousel } from 'react-bootstrap'
import slide1 from '../../../assets/images/stories1.png'
import slide2 from '../../../assets/images/stories2.png'
import slide3 from '../../../assets/images/stories3.png'
import './StoryHeader.css'

//story carousel differs from normal header with pics and headings
const StoryHeader = () => {
  return (
    <header id="story-header" className="mx-auto">
      <Carousel>
        <Carousel.Item>
          <img
            className="stories-img"
            src={slide1}
            alt="First slide combat and book photos"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Stories Of War</h3>
              <p>Share Your Experiences</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="stories-img"
            src={slide2}
            alt="second slide combat and book photos"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Stories Of Hope</h3>
              <p>Inspire Others</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="stories-img"
            src={slide3}
            alt="Third slide combat and book photos"
          />
          <div className="overlay-carousel">
            <Carousel.Caption className="text-end">
              <h3 className="d-none d-md-block">Stories Of Compassion</h3>
              <p>Always Together, Always Forward</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </header>
  )
}

export default StoryHeader