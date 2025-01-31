import MealCartItem from "./MealCartItem"
import {useContext,useState,useEffect} from "react";
import { CartContext } from "../Store/CartContext";

export default function MealCart(){
    const {cartState, dispatch} = useContext(CartContext);
    const [totalPrice,setTotalPrice]=useState(0);
    
    //

    useEffect(()=>{
        let price = 0;
        for(let i=0;i<cartState.items.length;i++){
                price = price + (cartState.items[i].quantity * cartState.items[i].mealPrice)
                setTotalPrice(price);
        }
    },[cartState])


    return(<div>
            <h1 className="mt-12 text-center text-lg">My Cart</h1>
            
            {cartState.items.length !==0 ? cartState.items.map(
                    (item,index)=>{return <MealCartItem key={index} cartItem={item} dispatchfn={dispatch}/>}
                    ):<p className="text-center text-lg m-4">No Items selected</p>}

        {cartState.items.length > 0 && <p className="text-lg text-right m-4">Total Amount: <span className="text-lg font-bold">{totalPrice}</span></p>}

        {cartState.items.length > 0 && <div className="flex items-center justify-center mb-10">
            <button className="text-md p-4 m-4 bg-teal-600 text-slate-50 rounded-md hover:bg-teal-400">Proceed to Checkout</button>
        </div>}
            
    </div>)
}