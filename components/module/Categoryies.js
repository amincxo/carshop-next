import React from 'react';
import {Link} from 'next/link';
import styles from './Categoryies.module.css';
import Sedan from '../icons/Sedan';
import SUV from '../icons/SUV';
import Hatchback from '../icons/Hatchback';
import Sport from '../icons/Sport';

function Categoryies() {
  return (
    <div className={styles.container} >
        <div>
            <p>Sedan</p>
            <Sedan />
        </div>
        <div>
            <p>SUV</p>
            <SUV />
        </div>
        <div>
            <p>Hatchback</p>
            <Hatchback />
        </div>
        <div>
            <p>Sport</p>
            <Sport />
        </div>
    </div>
    
  )
}

export default Categoryies