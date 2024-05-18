import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi'
import HireMeModal from '../HireMeModal'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown'
import NotificationCus from '../notification/NotificationCus'
import LoginModal from '../LoginModal'
import SignupModal from '../SignUp'

function AppHeader() {
    const [showMenu, setShowMenu] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false)
    const [activeTheme, setTheme] = useThemeSwitcher()
    const [isLoggedIn, setLoggedIn] = useState(true) // Add state for tracking login status
    useEffect(() => {
        // Check localStorage for login status when component mounts
        if (localStorage.getItem('Login') === 'true') {
            setLoggedIn(true) // Set the login status to true on successful login
        }
        if (localStorage.getItem('Login') === 'false') {
            setLoggedIn(false)
        }
    }, [])
    function toggleMenu() {
        setShowMenu((prev) => !prev)
    }

    function showHireMeModal() {
        setShowModal((prev) => !prev)
        document
            .getElementsByTagName('html')[0]
            .classList.toggle('overflow-y-hidden')
    }

    const openLoginModal = () => {
        setShowLoginModal(true)
        setShowSignupModal(false) // Close signup modal if open
    }

    const closeLoginModal = () => {
        setShowLoginModal(false)
        if (localStorage.getItem('Login') === 'true') setLoggedIn(true) // Set the login status to true on successful login
        if (localStorage.getItem('Login') === 'false') setLoggedIn(false)
    }

    const openSignupModal = () => {
        setShowSignupModal(true)
        setShowLoginModal(false) // Close login modal if open
    }

    const closeSignupModal = () => {
        setShowSignupModal(false)
        // setLoggedIn(true); // Set the login status to true on successful signup
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container block sm:mx-auto dark:bg-ternary-dark bg-primary-light hover:bg-ternary-light dark:hover:bg-gray-500"
        >
            {/* Header */}
            <div className="z-10 max-w-screen-lg xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center py-2 ">
                {/* Header menu links and small screen hamburger menu */}
                <div className="flex justify-between items-center px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {activeTheme === 'dark' ? (
                                <Image
                                    src="/COURSE_LOGO_Dark.png"
                                    className="w-20 cursor-pointer "
                                    alt="Dark Logo"
                                    width={80}
                                    height={80}
                                />
                            ) : (
                                <Image
                                    src="/COURSE_LOGO_Light.png"
                                    className="w-20 cursor-pointer "
                                    alt="Light Logo"
                                    width={80}
                                    height={80}
                                />
                            )}
                        </Link>
                    </div>
                    {/* small screen profile show */}
                    <div className="sm:hidden">
                        {isLoggedIn ? (
                            <>
                                <ProfileDropdown />
                                <NotificationCus />
                            </>
                        ) : null}
                    </div>
                    {/* Theme switcher small screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                        )}
                    </div>
                    {/* Small screen hamburger menu */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="focus:outline-none"
                            aria-label="Hamburger Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                            >
                                {showMenu ? (
                                    <FiX className="text-3xl" />
                                ) : (
                                    <FiMenu className="text-3xl" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Header links small screen */}
                <div
                    className={
                        showMenu
                            ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
                            : 'hidden'
                    }
                >
                    <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
                        <Link href="/projects" aria-label="Training">
                            Сургалт
                        </Link>
                    </div>
                    <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="/about" aria-label="About Me">
                            Бидний тухай
                        </Link>
                    </div>
                    <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="/contact" aria-label="Contact">
                            Түнш болох
                        </Link>
                    </div>
                </div>

                {/* Header links large screen */}
                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        <Link href="/projects">Сургалт</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        <Link href="/about">Бидний тухай</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Contact"
                    >
                        <Link href="/contact">Түнш болох</Link>
                    </div>
                    {/* <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        <Link href="/duud">test</Link>
                    </div> */}
                </div>

                {/* Header right section buttons */}
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
                    {isLoggedIn ? (
                        <>
                            <div
                                className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                                aria-label="Profile"
                            >
                                <ProfileDropdown />
                            </div>
                            <div
                                className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                                aria-label="Notifications"
                            >
                                <NotificationCus />
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                                aria-label="Log In"
                                onClick={openLoginModal}
                            >
                                <button>Нэвтрэх</button>
                            </div>
                            {showLoginModal && (
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                                    <LoginModal onClose={closeLoginModal} />
                                </div>
                            )}
                            <div
                                className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                                aria-label="Sign Up"
                                onClick={openSignupModal}
                            >
                                <button>Бүртгүүлэх</button>
                            </div>
                            {showSignupModal && (
                                <SignupModal onClose={closeSignupModal} />
                            )}
                        </>
                    )}

                    {/* Theme switcher large screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                        )}
                    </div>
                </div>
            </div>
            <div>
                {showModal ? (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                ) : null}
            </div>
        </motion.nav>
    )
}

export default AppHeader
