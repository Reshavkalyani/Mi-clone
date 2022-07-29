import React from 'react'
import Carousel from 'react-bootstrap-v5/lib/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/slider.css'


const Slider = ({start}) => {
    return (
        <Carousel fade >
       {start.map((item)=>(
            <Carousel.Item>
            <img
              
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
    )
}

export default Slider