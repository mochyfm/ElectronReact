import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageA from '../assets/Carousel/carousel-1.jpg';
import imageB from '../assets/Carousel/carousel-2.jpg';
import imageC from '../assets/Carousel/carousel-3.jpg';

const MainCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        animationHandler={'fade'}
        // Fuente: https://yarnpkg.com/package/react-responsive-carousel
      >
        <div>
          <img src={imageA} alt="first" />
        </div>
        <div>
          <img src={imageB} alt="first" />
        </div>
        <div>
          <img src={imageC} alt="first" />
        </div>
      </Carousel>
    </>
  );
};

export default MainCarousel;
