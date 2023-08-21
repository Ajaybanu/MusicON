'use client';

import './body.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';


// SwiperCore.use([Autoplay]);
function Body() {
  
  return (
    <>
    <div className='main'>
<h1 className='title-sub'>TRENDING</h1>
<div>
<Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 1000, // Set the delay for autoplay
            }}
            loop={true}
          >
            <SwiperSlide>
            <img style={{height:"473px",borderRadius:"76px",width:"88%",marginLeft:"6%"}}  src="/b.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img  style={{height:"473px",borderRadius:"76px",width:"88%",marginLeft:"6%"}}  src="/d.png" alt="" />
            </SwiperSlide>
            <SwiperSlide> 
            <img  style={{height:"473px",borderRadius:"76px",width:"88%",marginLeft:"6%"}}  src="/f.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img  style={{height:"473px",borderRadius:"76px",width:"88%",marginLeft:"6%"}}  src="/r.png" alt="" />
            </SwiperSlide>
           
          </Swiper>
    </div>
<h3 className='title-sub'>MIX</h3>
<div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div>
<img  className='char-body'  src="/f.png" alt="" />
 
  <h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
</Carousel>
</div>

<h3 className='title-sub'>UPLOADS</h3>

<div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div>
  <img className='char-body'  src="/f.png" alt="" />
  <h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
</Carousel>
</div>


<h3 className='title-sub'>ENGLISH</h3>

<div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div>
  <img className='char-body'  src="/f.png" alt="" />
  <h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
</Carousel>
</div>


<h3 className='title-sub'>MALAYALAM</h3>

<div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div>
  <img className='char-body'  src="/f.png" alt="" />
  <h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
</Carousel>
</div>


<h3 className='title-sub'>HINDI</h3>

<div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div>
  <img className='char-body'  src="/f.png" alt="" />
  <h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
</Carousel>
</div>


<h3 className='title-sub'>TAMIL</h3>

<div>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
<div>
  <img className='char-body'  src="/f.png" alt="" />
  <h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
<div>
<img  className='char-body'  src="/f.png" alt="" />
<h4>Song name</h4>
</div>
</Carousel>
</div>




</div>




  
    </>
  )
}

export default Body