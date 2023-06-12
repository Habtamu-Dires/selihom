import React, { useState } from 'react';
import {
  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { CAROUSEL_ITEM } from '../data/carousel_items';

function Carousal() {
    const items = CAROUSEL_ITEM;

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex +1;
        setActiveIndex(nextIndex);
    }

    const previous = ()=>{
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex)=> {
        setActiveIndex(newIndex);
    }
    const[animating, setAnimating] = useState();
    
    const onExiting =()=>{
        setAnimating(true);
    }

    const onExited =() =>{
        setAnimating(false);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
              className="custom-tag"
              tag="div"
              key={item.id}
            >  
            <img  className='carouselBackgrund' src={item.image} alt={"selihom"} />
            <div className='carousel-center-text animate__animated animate__fadeInDown animate__slower'>
                    <h1>{item.title}</h1>
                    <p style={{fontSize: '30px'}}>{item.sub_title}</p>       
            </div>
        
          </CarouselItem>
        );
      });
    
      return (
          <Carousel
            style={{width: '80%'}}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            slide={false}
            fade={true}
            interval={6000}
          >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        
      );
}

export default Carousal;