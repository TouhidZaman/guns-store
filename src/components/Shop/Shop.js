import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import CartItem from './Cart/CartItem/CartItem';
import Gun from './Gun/Gun';
import styles from './Shop.module.css';

const Shop = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]); 
    const [chosenOne, setChosenOne] = useState(null); 

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
        // console.log(newCart);
    }

    //Getting chosen One from cart
    const findChosenOneHandler = () => {
        if(cart.length) {
            const chosenOnesIndex = Math.floor(Math.random() * cart.length);
            const chosenOne = cart[chosenOnesIndex];
            setChosenOne(chosenOne);
        }
    }

    //Removing chosen one
    const deleteChosenOneHandler = () => setChosenOne(null);

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
                <Cart 
                    cart={cart} 
                    deleteCartItem={deleteCartItemHandler}
                    findChosenOne={findChosenOneHandler}
                    chosenOne={chosenOne}
                    deleteChosenOne={deleteChosenOneHandler}
                />
            </div>
        </div>
    );
};

export default Shop;