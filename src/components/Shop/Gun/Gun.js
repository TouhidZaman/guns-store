import React from 'react';
import styles from './Gun.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Gun = ({gun, addToCartHandler}) => {
    const { imgUrl, name, price } = gun;
    return (
        <div className={styles.gun}>
            <div className={styles.gumImageContainer}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={styles.gunInfo}>
                <h3 className={styles.gunName}>{name}</h3>
                <h5 className={styles.gunPrice}>Price: ${price}</h5>
            </div>
            <div className={styles.action}>
                <button onClick={() => addToCartHandler(gun)} className={styles.addToCartButton}>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
            </div>
        </div>
    );
};

export default Gun;