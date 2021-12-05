import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          x: 0,
          y: '100%'
        },
        pageAnimate: {
          x: 0,
          y: 0
        },
        pageExit: {
          x: 0,
          y: '-100%'
        }
      }}>
        <Component {...pageProps} />
      </motion.div >
    </AnimatePresence>
  )
}

export default MyApp