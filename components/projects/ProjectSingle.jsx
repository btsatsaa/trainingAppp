import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

function ProjectSingle({
    lesson_id,
    lesson_course,
    lesson_price,
    lesson_name,
    lesson_address,
    img_id,
    img_title,
    img_img,
}) {
    const [imageData, setImageData] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        // console.log("id:",{lesson_id})
        localStorage.setItem('id', lesson_id)
        // alert(localStorage.getItem("id"))
    }

    // You can use useEffect hook here if you need to fetch image data or perform any other side effects

    return (
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondory-light dark:bg-ternary-dark">
            <Link href="/traDetail" passHref>
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark">
                    {/* <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                        <Image
                            src="/training.jpg"
                            alt="Single Project"
                            layout="responsive"
                            width={100}
                            height={90}
                        />
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                        <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                            <Image
                                src={img_img} // Fix to project.img
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={img_title} // Fix to project.title
                                key={img_id}
                                layout="responsive"
                                width={100}
                                height={90}
                            />
                        </div>
                    </div>

                    {/* //////////// */}
                    <div>
                        <div className="flex justify-between items-center px-4 py-2">
                            <div className="font-medium text-primary-dark dark:text-primary-light">
                                {lesson_course}
                            </div>
                            <div className="text-lg font-semibold text-green border-solid border-2 border-green text-primary-dark dark:text-primary-light rounded-md px-3 py-1">
                                {lesson_price}
                            </div>
                        </div>

                        <p className="text-blue-500 px-4 py-2 text-xl font-semibold text-primary-dark dark:text-primary-light">
                            {lesson_name}
                        </p>

                        <div className="flex justify-between border-2 text-primary-dark dark:text-primary-light rounded-md p-2 px-4">
                            <p>{lesson_address}</p>
                            <div className="flex space-x-2">
                                <img src={'/Star.svg'} alt="star" />
                                <img src={'/Star.svg'} alt="star" />
                                <img src={'/Star.svg'} alt="star" />
                                <img src={'/Star.svg'} alt="star" />
                            </div>
                        </div>

                        <div className="text-center px-4 py-2">
                            <span className="text-lg text-ternary-dark dark:text-ternary-light"></span>
                        </div>
                    </div>
                    <div className="hover:bg-gray-200 rounded-xl bg-primary-light dark:bg-primary-dark text-center text-lg px-4 py-2 text-primary-dark dark:text-primary-light">
                        <button onClick={handleClick}>Дэлгэрэнгүй харах</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectSingle
