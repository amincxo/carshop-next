import React from 'react';
import Link from 'next/link';
import styles from './Categoryies.module.css';
import Sedan from '../icons/Sedan';
import SUV from '../icons/SUV';
import Hatchback from '../icons/Hatchback';
import Sport from '../icons/Sport';

function Categoryies() {
  return (
    <div className={styles.container} >
        <Link href='categories/sedan' >
            <div>
                <p>Sedan</p>
                <Sedan />
            </div>
        </Link>
        <Link href='categories/suv' >
            <div>
                <p>SUV</p>
                <SUV />
            </div>
        </Link>
        <Link href='categories/hatchback' >
            <div>
                <p>Hatchback</p>
                <Hatchback />
            </div>
        </Link>
        <Link href='categories/sport' >
            <div>
                <p>Sport</p>
                <Sport />
            </div>
        </Link>
    </div>
    
  )
}

export default Categoryies