import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCartContext (){
    const context = useContext(CartContext)

    if (!context) throw new Error('using cartContext out side context Provider')

    return context
}