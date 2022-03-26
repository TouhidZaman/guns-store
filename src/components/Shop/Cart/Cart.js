import React from 'react';
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, deleteCartItem, findChosenOne, deleteChosenOne, chosenOne}) => {
    return (
        <div className={styles.cart}>
            <h3>Selected Guns</h3>
            {
                cart.map(gun => <CartItem 
                    key={gun.id} 
                    gun={gun}
                    deleteHandler={deleteCartItem}
                />)
            }
            <div className={styles.cartActions}>
                <button onClick={findChosenOne} className={styles.chooseButton}>
                    <p>Choose one</p>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
                <button className={styles.chooseAgainButton}>
                    Choose again
                </button>
            </div>
           
            {
                chosenOne && <div className={styles.chosenOne}>
                    <h3>Chosen One For You</h3>
                    <CartItem 
                        gun={chosenOne} 
                        deleteHandler={deleteChosenOne}
                    />
                </div>
            }
    
        </div>
    );
};

export default Cart;