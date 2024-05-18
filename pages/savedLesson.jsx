import Link from 'next/link'
import PagesMetaHead from '../components/PagesMetaHead'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SavedLesson() {
    // Initialize state to store comments data
    const [commentsList, setCommentsList] = useState([])
    const [number, setNumber] = useState(0) // State variable to store phone number
    const handleClick = () => {
        // console.log("id:",{lesson_id})
        // localStorage.setItem('id', lesson_id)
        // alert(localStorage.getItem("id"))
    }

    useEffect(() => {
        // Check if running in the browser environment
        if (typeof window !== 'undefined') {
            // Retrieve phone number from localStorage
            const storedNumber = localStorage.getItem('phone')
            // Update the state with the retrieved number
            setNumber(storedNumber)
            console.log(storedNumber)

            // Function to fetch lesson data from the API
            const fetchLesson = async () => {
                try {
                    // Fetch lesson data from the API
                    const response = await fetch(
                        `http://localhost:3000/api/savedLesson?number=${storedNumber}`
                    )

                    if (!response.ok) {
                        throw new Error('Failed to fetch lesson')
                    }

                    // Parse JSON response directly
                    const lessonData = await response.json()
                    // Set the commentsList state with the lessonData
                    setCommentsList(lessonData)
                } catch (error) {
                    console.error('Error fetching lesson:', error)
                }
            }

            // Call the fetchLesson function when the component mounts or when the number changes
            fetchLesson()
        }
    }, [number]) // Run useEffect when 'number' changes

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 sm:gap-5">
                {commentsList &&
                    commentsList.map((comment, index) => (
                        <div key={index} className="">
                            {/* Render comment content */}
                            <Link href="/traDetail" passHref>
                                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                        <Image
                                            src="/test1.jpg"
                                            alt="Single Project"
                                            layout="responsive"
                                            width={100}
                                            height={90}
                                        />
                                    </div>

                                    <p className="text-blue-500 px-4 py-2 text-xl font-semibold text-primary-dark dark:text-primary-light">
                                        {comment.lesson_name}
                                    </p>

                                    <div className="flex justify-between border-2 text-primary-dark dark:text-primary-light rounded-md p-2 px-4">
                                        <p>{comment.lesson_id}</p>
                                        <div className="flex space-x-2">
                                            <img src={'/Star.svg'} alt="star" />
                                            <img src={'/Star.svg'} alt="star" />
                                            <img src={'/Star.svg'} alt="star" />
                                            <img src={'/Star.svg'} alt="star" />
                                        </div>
                                    </div>

                                    <div className="hover:bg-gray-200 rounded-xl bg-primary-light dark:bg-primary-dark text-center text-lg px-4 py-2 text-primary-dark dark:text-primary-light">
                                        <button onClick={handleClick}>
                                            Дэлгэрэнгүй харах
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}
