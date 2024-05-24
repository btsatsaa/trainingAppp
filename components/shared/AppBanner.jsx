import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowDownCircle } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import VideoPlayer from './video'

function AppBanner() {
    const [activeTheme] = useThemeSwitcher()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between sm:flex-row"
        >
            {' '}
            <VideoPlayer />
        </motion.section>
    )
}

export default AppBanner
