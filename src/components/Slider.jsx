import React from 'react'
import SliderContent from './SliderContent'
import carrusel from './carrusel'
import Flechas from './Flechas'
import Puntos from './Puntos'
import style from './slider.css'

const len = imageSlider - 1 

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="slider-container" style={style}>
      <SliderContent activeIndex={activeIndex} imageSlider={carrusel} />
      <Flechas prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex ===  len ? 0 : activeIndex + 1)} />
      <Puntos activeIndex={activeIndex} 
      imageSlider={imageSlider} 
      onclick={activeIndex => setActiveIndex(activeIndex)} />
    </div>
  )
}

export default Slider