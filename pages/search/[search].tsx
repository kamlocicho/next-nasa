import type { NextPage, GetServerSideProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import styles from '../../styles/Search.module.css'

const SearchPage: NextPage = (props: any) => {
    const { data } = props

    let linksList: any[] = []

    data.map(({ links }: any) => {
        links ? linksList.push(links[0]) : undefined
    })

    return (
        // GRID
        <div className={styles.image_grid}>
            {linksList && linksList.map((link: any) => (
                <Image key={uuidv4()} src={link.href} alt={'Image from NASA DB'} width={300} height={300} />
            ))}

        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const root = 'https://images-api.nasa.gov/search?q='

    const res = await fetch(root + context.params?.search)
    const data = await res.json()

    return {
        props: { data: data.collection.items }
    }
}

export default SearchPage

