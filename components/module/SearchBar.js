import { useState } from 'react'
import { useRouter } from 'next/router';

import styles from './SearchBar.module.css'

function SearchBar() {
    const router = useRouter()

    const [min , setMin] = useState('');
    const [max , setMax] = useState('');

    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter/${min}/${max}`)
        } else {
            alert("lotfan vard konid")
        }
    }

  return (
    <div className={styles.container} >
        <div>
            <input placeholder="Enter min-price" value={min} onChange={e => setMin(e.target.value)} />
            <input placeholder="Enter max-price" value={max} onChange={e => setMax(e.target.value)} />
            <button onClick={searchHandler} >Search</button>
        </div>
    </div>
  )
}

export default SearchBar