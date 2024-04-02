import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// CAROUSEL DATA
const teacherData = [
  {
    name: "Цацаа",
    profession: "Ахлах багш",
    imgSrc: "/profile.jpg",
  },
  {
    name: "Бөхөө",
    profession: "Багш",
    imgSrc: "/profile.jpg",
  },
  {
    name: "Буянаа",
    profession: " Зөвлөх Багш",
    imgSrc: "/woman.jpg",
  },
  // Add more teachers as needed
];

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
  };

  return (
    <div className="py-10 sm:py-24 bg-paleblue bg-gray-300 dark:bg-secondary-dark " id="mentor">
      <div className="mx-auto max-w-7xl sm:py-4 px-4 lg:px-8 relative ">
        <h2 className="text-midnightblue text-4xl md:text-5xl text-center md:text-start font-semibold">
          Манай сургалтын <br /> багш нар.
        </h2>

        <Slider {...settings}>
          {teacherData.map((teacher, index) => (
            <div key={index} className="m-3 py-10 md:py-14 md:my-10 text-center bg-white rounded-lg shadow-lg ">
              <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 text-ternary-dark dark:text-ternary-light">
                <Image
                  src={teacher.imgSrc}
                  alt={teacher.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-lightblack">{teacher.name}</h3>
                <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50">{teacher.profession}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeachersSlider;
