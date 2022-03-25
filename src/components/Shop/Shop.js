import React, { useEffect, useState } from 'react';
import Gun from './Gun/Gun';
import styles from './Shop.module.css';

const Shop = () => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('guns-data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    },[])
    return (
        <div className={styles.shopContainer}>
            <div className={styles.gunsContainer}>
                {
                    guns.map(gun => <Gun key={gun.id} gun={gun}/>)
                }
            </div>
            <div className={styles.orderSummeryContainer}>
                <h3>Selected Guns</h3>
            </div>
        </div>
    );
};

export default Shop;