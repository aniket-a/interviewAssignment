import React,{useState} from 'react'
import "./carousel.css"

const Carousel = ({data}) => {
  const [slide, setslide] = useState(0)

  const nextSlide = ()=>{
    slide < 2 && setslide(slide + 1)
  }

  const prevSlide = ()=>{
    slide > 0 && setslide(slide - 1)
  }

  return (
    <div className='carousel'>
        {
          data.slides.map((item, index)=>{
            return(
              <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide":"slide slide-hidden"}/>
            )
          })
        }

        <span className='indecators'>
        {
          data.slides.map((_, index)=>{
            return <button key={index} onClick={()=> setslide(index)} className={slide === index ? "indecator" : "indecator indecator-inactive"}></button>
          })
        }
        </span>

    </div>
  )
}

export default Carousel;
