import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




const Slider_2 = ({ end }) => {
    return (
        <Carousel fade style={{marginBottom:'80px'}}>


            {end.map((item) => {
                return (
                    <Carousel.Item >
                        <img
                            className="d-block w-100 "
                            src={item.image}
                        />

                        <Carousel.Caption>
                            <h2>{item.name}</h2>
                            <p style={{fontSize:'17px'}}>{item.description}</p>
                            <p style={{marginTop:'20px'}}>{item.source}</p>
                            <a href='' style={{marginTop:'20px' ,fontSize:'17px', color:'white', textDecoration:'underline'}}>Read more</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}


        </Carousel>
    )
}

export default Slider_2
