import Link from 'next/link'
import { FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { useState } from 'react'

const VerticalNav = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null)

    return (
        <nav className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col space-y-4  p-4 bg-gray-100 shadow- w-24">
            <Link href="/" legacyBehavior>
                <a
                    className="group flex items-center justify-center text-gray-800 hover:text-indigo-500 relative"
                    onMouseEnter={() => setHoveredIcon('home')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <FaHome
                        className={`text-xl transition duration-300 ${
                            hoveredIcon !== 'home' ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                    <span
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
                            hoveredIcon === 'home' ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Нүүр
                    </span>
                </a>
            </Link>
            <Link href="/projects" legacyBehavior>
                <a
                    className="group flex items-center justify-center text-gray-800 hover:text-indigo-500 relative"
                    onMouseEnter={() => setHoveredIcon('lesson')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <FaLaptopCode
                        className={`text-xl transition duration-300 ${
                            hoveredIcon !== 'lesson'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                    <span
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
                            hoveredIcon === 'lesson'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    >
                        Сургалт
                    </span>
                </a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a
                    className="group flex items-center justify-center text-gray-800 hover:text-indigo-500 relative"
                    onMouseEnter={() => setHoveredIcon('about')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <FaInfoCircle
                        className={`text-xl transition duration-300 ${
                            hoveredIcon !== 'about'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                    <span
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
                            hoveredIcon === 'about'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    >
                        Бидний тухай
                    </span>
                </a>
            </Link>
            <Link href="/contact" legacyBehavior>
                <a
                    className="group flex items-center justify-center text-gray-800 hover:text-indigo-500 relative"
                    onMouseEnter={() => setHoveredIcon('contact')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <FaAddressBook
                        className={`text-xl transition duration-300 ${
                            hoveredIcon !== 'contact'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                    <span
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
                            hoveredIcon === 'contact'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    >
                        Түнш болох
                    </span>
                </a>
            </Link>
        </nav>
    )
}

export default VerticalNav
