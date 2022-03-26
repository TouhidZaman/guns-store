import React from 'react';
import styles from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({gun, deleteHandler}) => {
    return (
        <div className={styles.cartItem}>
            <img src={gun.imgUrl} alt=""/>
            <h3>{gun.name}</h3>
            <button onClick={() => deleteHandler(gun.id)} className={styles.deleteCartItemButton}>
                <FontAwesomeIcon icon={faDeleteLeft}/>
            </button>
        </div>
    );
};

export default CartItem;