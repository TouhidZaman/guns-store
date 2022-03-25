import React from 'react';
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';

const Cart = ({cart, deleteCartItemHandler}) => {
    return (
        <div className={styles.cart}>
            {
                cart.map(gun => <CartItem 
                    key={gun.id} 
                    gun={gun}
                    deleteCartItemHandler={deleteCartItemHandler}
                />)
            }
        </div>
    );
};

export default Cart;