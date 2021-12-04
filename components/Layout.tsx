import type { NextPage } from 'next'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout: NextPage = (props: any) => {
    return (
        <motion.main variants={variants} initial='hidden' animate='enter' exit="exit" transition={{ type: 'linear' }}>
            {props.children}
        </motion.main>
    )
}

export default Layout