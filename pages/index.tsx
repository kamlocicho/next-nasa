import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <Image src="/background.jpg" layout="fill" className={styles.landing_image} alt="Background space image" />
      <div className={styles.input_container}>
        <h1 className={styles.input_title}>NASA Image API Browser</h1>
        <div>
          <label htmlFor="search">Search: </label>
          <input className={styles.landing_input} type="text" name="search" autoComplete='off' required />
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </div>
        <p>Created by: Kamil Orwat</p>
      </div>

    </>
  )
}

export default Home
