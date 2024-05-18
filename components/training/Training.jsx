import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa'
import ImageSlider from '../Swiper/Swiper'
import State from '../state/State'
import PartiIntro from './partIntro'
import CommentForm from '../Comment/Comment'
import Navigation from '../nav/nav'

function ProjectSingle() {
    const [traDetails, setTraDetails] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function fetchData() {
            try {
                const id = localStorage.getItem('id') // Retrieve id from localStorage

                const response = await axios.get(`/api/traDetail?id=${id}`)
                setTraDetails(response.data)
            } catch (error) {
                console.error('Error fetching traDetail:', error)
            }
        }
        fetchData()
    }, [])

    const handlePrevClick = (e) => {
        e.preventDefault()
        console.log(localStorage.getItem('id'))
        router.back() // Navigate back to the previous page
    }

    return (
        <div>
            <div className="flex items-center py-4">
                <FaArrowLeft
                    onClick={handlePrevClick}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                />
                <h1 className="text-xl font-bold ml-4 text-xl text-primary-dark dark:text-primary-light">
                    Сургалтын нэр
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 space-x-4">
                <div className="col-span-8">
                    <ImageSlider />
                    {/* Render traDetails */}
                    {traDetails.map((traDetail) => (
                        <div className=" " key={traDetail.traDetail_id}>
                            <p className="text-xl font-semibold py-2 text-xl text-primary-dark dark:text-primary-light">
                                Танилцуулга
                            </p>{' '}
                            <div className="border  rounded-lg text-xl text-primary-dark dark:text-primary-light mb-8 sm:p-5">
                                {traDetail.traIntro}
                            </div>
                            <p className="text-xl font-semibold py-2 text-xl text-primary-dark dark:text-primary-light">
                                Хуваарь
                            </p>{' '}
                            <div className=" border rounded-lg text-xl text-primary-dark dark:text-primary-light mb-8 sm:p-5  ">
                                {' '}
                                {traDetail.traSchedule}
                            </div>
                            <p className="text-xl font-semibold py-2 text-xl text-primary-dark dark:text-primary-light">
                                Шаардлагатай зүйл
                            </p>{' '}
                            <div className=" border rounded-lg  text-xl text-primary-dark dark:text-primary-light mb-8 sm:p-5  ">
                                {' '}
                                {traDetail.traNecessary}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-4 ">
                    <State />
                </div>
            </div>

            <div className="text-xl font-semibold text-xl text-primary-dark dark:text-primary-light">
                Манай сурагч багш нар
                <PartiIntro />
            </div>

            <CommentForm />
        </div>
    )
}

export default ProjectSingle
