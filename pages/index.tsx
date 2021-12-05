import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const [search, setSearch] = useState('')

  const router = useRouter()

  function inputChangeHandler(event: any) {
    setSearch(event.target.value)
  }

  function submitHandler(event: any) {
    event.preventDefault()
    console.log(search)
    router.push(`/search/${ search }`)
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Image priority={true} src="/background.jpg" layout="fill" alt="Background space image" />
      <div className={styles.input_container}>
        <h1 className={styles.input_title}>NASA Image API Browser</h1>
        <form onSubmit={event => submitHandler(event)}>
          <label htmlFor="search">Search: </label>
          <input className={styles.landing_input} type="text" name="search" autoComplete='off' required onInput={(event) => inputChangeHandler(event)} />
          <button type='submit' style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
        </form>
        <p>Created by: Kamil Orwat</p>
      </div>

    </div>
  )
}

export default Home
