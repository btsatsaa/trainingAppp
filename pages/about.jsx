import { motion } from 'framer-motion'
import AboutClients from '../components/about/AboutClients'
import AboutCounter from '../components/about/AboutCounter'
import AboutMeBio from '../components/about/AboutMeBio'
import PagesMetaHead from '../components/PagesMetaHead'

function about() {
    return (
        <div>
            <PagesMetaHead title="Бидний тухай" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto h-[550px] overflow-y-auto"
            >
                <AboutClients />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
            >
                <AboutCounter />
            </motion.div>
        </div>
    )
}

export default about
