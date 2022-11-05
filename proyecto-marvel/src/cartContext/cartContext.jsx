import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    const [cartlist, setCarList] = useState([])

    const addItem = (productos) =>{
        setCarList([...cartlist, productos])
    }
    const priceTotaly = () => {
        return cartlist.reduce((acum, productos) => acum + (productos.amount * productos.price) , 0)
    }
    const amountTotaly = () => {
        return cartlist.reduce((acum, productos) => acum += productos.amount , 0)
    }

    const removeItem= (id) => {
        setCarList( cartlist.filter(productos => productos.id !== id) )
    }


    const emptyCart = ()=>{
        setCarList([])
    }


    return(
        <CartContext.Provider value = {{
            cartlist,
            addItem,
            priceTotaly,
            amountTotaly,
            removeItem,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider