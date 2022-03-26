import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
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
        const newCart = [...cart];
        const productIndex = newCart.indexOf(gun)
        if(productIndex === -1) {
            if(newCart.length < 4) {
                newCart.push(gun)
                setCart(newCart);
            }
            else alert("You can add Maximum 4 item to the cart")
        }
        else alert("Already added to the cart")
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
    }

    //Deleting all Items from chart
    const clearCartHandler = () => setCart([]);

    //Removing chosen one based on cart data changes
    useEffect(() => {
        deleteChosenOneHandler()
    },[cart])

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
                    clearCart={clearCartHandler}
                />
            </div>
        </div>
    );
};

export default Shop;