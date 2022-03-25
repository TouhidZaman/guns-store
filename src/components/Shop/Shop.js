import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Gun from './Gun/Gun';
import styles from './Shop.module.css';

const Shop = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]); 

    //Getting data from guns json data
    useEffect(() => {
        fetch('guns-data.json')
            .then(response => response.json())
            .then(data => setGuns(data))
    },[])

    //Add to cart event handler
    const addToCartHandler = gun => {
        const productIndex = cart.indexOf(gun)
        const newCart = [...cart];
        if(productIndex === -1) {
            newCart.push(gun)
        }
        setCart(newCart);
    }

    //Delete Cart Item Handler
    const deleteCartItemHandler = id => {
        const newCart = [...cart];
        const itemToBeDeleted = newCart.find(gun => gun.id === id);
        if(itemToBeDeleted){
            const deletedItemIndex = newCart.indexOf(itemToBeDeleted);
            newCart.splice(deletedItemIndex, 1);
            setCart(newCart); //updating cart items
        } 
        console.log(newCart);
    }
    return (
        <div className={styles.shopContainer}>
            <div className={styles.gunsContainer}>
                {
                    guns.map(gun => <Gun 
                        key={gun.id} 
                        gun={gun}
                        addToCartHandler={addToCartHandler}
                    />)
                }
            </div>
            <div className={styles.cartContainer}>
                <h3>Selected Guns</h3>
                <Cart 
                    cart={cart} 
                    deleteCartItemHandler={deleteCartItemHandler}
                />
            </div>
        </div>
    );
};

export default Shop;