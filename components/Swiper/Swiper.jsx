import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowCircleRight } from 'react-icons/fa'

const ImageSlider = () => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    textAlign: 'center',
                    lineHeight: '50px',
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    cursor: 'pointer',
                    // fontSize: '2rem', // Increase font size for a bigger arrow
                }}
                onClick={onClick}
            >
                {'>'}
            </div>
        )
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    // background: 'green',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    textAlign: 'center',
                    lineHeight: '50px',
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                {'<'}
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        adaptiveHeight: true, // Adjust slide height dynamically
    }

    return (
        <Slider {...settings}>
            <div style={{ position: 'relative' }}>
                <img
                    src="/training/tra1.jpg"
                    alt="Image 1"
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ position: 'relative' }}>
                <img
                    src="/training/tra2.jpg"
                    alt="Image 2"
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ position: 'relative' }}>
                <img
                    src="/training/tra3.jpg"
                    alt="Image 3"
                    style={{ width: '100%' }}
                />
            </div>
        </Slider>
    )
}

export default ImageSlider
