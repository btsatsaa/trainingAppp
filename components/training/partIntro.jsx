import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

// CAROUSEL DATA
const teacherData = [
    {
        name: 'Наранцацралт',
        profession: 'Ахлах багш',
        imgSrc: '/profile.jpg',
    },
    {
        name: 'Бөхбат',
        profession: 'Багш',
        imgSrc: '/profile.jpg',
    },
    {
        name: 'Буянжаргал',
        profession: ' Зөвлөх Багш',
        imgSrc: '/woman.jpg',
    },
    // Add more teachers as needed
]

const TeachersSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div
            className="mt-4 border rounded-lg text-xl text-primary-dark dark:text-primary-light"
            id="mentor"
        >
            <div className="mx-auto max-w-7xl sm:py-4 py-4 px-4 lg:px-8 relative">
                <h2 className="text-midnightblue text-4xl md:text-5xl text-center md:text-start font-semibold">
                    Манай сургалтын <br /> Багш нар.
                </h2>

                <Slider
                    {...settings}
                    className="text-primary-dark dark:text-primary-light"
                >
                    {teacherData.map((teacher, index) => (
                        <div
                            key={index}
                            className="m-3 py-8 md:py-8 md:my-8 text-center bg-secondary-light dark:bg-secondary-dark  shadow-lg   text-xl text-primary-dark dark:text-primary-light"
                        >
                            <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 text-ternary-dark dark:text-ternary-light">
                                <Image
                                    src={teacher.imgSrc}
                                    alt={teacher.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-2xl font-semibold ">
                                    {teacher.name}
                                </h3>
                                <h4 className="text-lg font-normal  pt-2 opacity-50">
                                    {teacher.profession}
                                </h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TeachersSlider
