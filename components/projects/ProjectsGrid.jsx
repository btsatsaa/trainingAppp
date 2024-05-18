import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProjectSingle from './ProjectSingle'
import ProjectsFilter from './ProjectsFilter'

const projectsData = [
    {
        id: 1,
        title: 'Google Health Platform',
        img: '/images/ui-project-1.jpg',
    },
    {
        id: 2,
        title: 'Google Health Platform',
        img: '/images/web-project-2.jpg',
    },
    {
        id: 3,
        title: 'Google Health Platform',
        img: '/images/mobile-project-2.jpg',
    },
    {
        id: 4,
        title: 'Google Health Platform',
        img: '/images/mobile-project-2.jpg',
    },
    {
        id: 5,
        title: 'Google Health Platform',
        img: '/images/mobile-project-2.jpg',
    },
    {
        id: 6,
        title: 'Google Health Platform',
        img: '/images/mobile-project-2.jpg',
    },
]

function ProjectsGrid() {
    const [searchQuery, setSearchQuery] = useState('')
    const [lessons, setLessons] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedDistrict, setSelectedDistrict] = useState('')
    const [filteredLessons, setFilteredLessons] = useState([])

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await fetch('/api/trainingData')
                if (!response.ok) {
                    throw new Error('Failed to fetch lessons')
                }
                const data = await response.json()
                setLessons(data)
            } catch (error) {
                console.error('Error fetching lessons:', error)
            }
        }

        fetchLessons()
    }, [])

    useEffect(() => {
        const filtered = lessons.filter((lesson) => {
            const categoryMatch =
                lesson.category &&
                lesson.category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            const nameMatch =
                lesson.lesson_name &&
                lesson.lesson_name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            const addressMatch =
                lesson.lesson_address &&
                lesson.lesson_address
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            const categoryFilterMatch =
                selectedCategory === '' || lesson.category === selectedCategory
            const districtFilterMatch =
                selectedDistrict === '' ||
                lesson.lesson_address
                    .toLowerCase()
                    .includes(selectedDistrict.toLowerCase())
            return (
                (categoryMatch || nameMatch || addressMatch) &&
                categoryFilterMatch &&
                districtFilterMatch
            )
        })

        setFilteredLessons(filtered)
    }, [lessons, searchQuery, selectedCategory, selectedDistrict])

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <section className="py-5 sm:py-5 mt-5 sm:mt-5">
            <div className="text-center">
                <p className="font-general-medium text-4xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                    Манай сургалтууд
                </p>
            </div>

            <div className="mt-10 sm:mt-16">
                <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
                    <ProjectsFilter
                        setSelectedCategory={setSelectedCategory}
                        setSelectedDistrict={setSelectedDistrict}
                    />
                    <div className="flex justify-between gap-1">
                        <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
                        </span>
                        <input
                            onChange={handleSearchInputChange}
                            value={searchQuery}
                            className="font-general-medium pl-3 pr-1 sm:px-6 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                            id="search"
                            name="search"
                            type="search"
                            placeholder="Сургалтаа хайна уу?"
                            aria-label="Search"
                        />
                    </div>
                </div>
            </div>

            <div className="h-[850px] overflow-y-auto">
                {filteredLessons.length === 0 ? (
                    <p className="text-center border bg-secondary-dark border-4 text-primary-dark dark:text-primary-light font-bold text-green-500">
                        Уучлаарай таны хайсан сургалт одоогоор байхгүй байна!
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 sm:gap-5">
                        {filteredLessons.map((lesson) => (
                            <ProjectSingle
                                key={lesson.id}
                                lesson_id={lesson.id}
                                {...lesson}
                                img_id={lesson.id}
                                img_title={
                                    projectsData.find(
                                        (project) => project.id === lesson.id
                                    )?.title
                                }
                                img_img={
                                    projectsData.find(
                                        (project) => project.id === lesson.id
                                    )?.img
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectsGrid
