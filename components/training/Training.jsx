import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa'
import ImageSlider from '../Swiper/Swiper'
import State from '../state/State'
import PartiIntro from './partIntro'
import CommentForm from '../Comment/Comment'
import Navigation from '../nav/nav'
import { motion } from 'framer-motion'

import { FiArrowDownCircle } from 'react-icons/fi'

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
                    <a
                        download="material.pdf"
                        href="/files/material.pdf"
                        className="font-general-medium flex justify-center items-center  mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                        aria-label="Download Resume"
                    >
                        <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                        <span className="text-sm sm:text-lg duration-100">
                            Хичээлийн материал татах
                        </span>
                    </a>
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
