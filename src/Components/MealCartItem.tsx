import { MealCartType } from "../Store/CartContext"
import {FaPlus,FaMinus} from "react-icons/fa"
import type { reducerActionType } from "../Store/CartContext"

type propsType = {
    cartItem:MealCartType
    dispatchfn:React.Dispatch<reducerActionType>
}
export default function MealCartItem({cartItem,dispatchfn}:propsType){

    function quantityHandler(type:string,item:MealCartType):void{
        if(type==="decrement"){
            dispatchfn({type:"decrement",payload:item})
        }
        if(type==="increment"){
            dispatchfn({type:"increment",payload:item})
        }
    }

    return(
        <article className="flex items-stretch rounded-lg m-4 max-h-28 h-full overflow-hidden shadow-md hover:shawdow-lg cursor-pointer " >
                <div className="img-container h-24.25 w-40 rounded-lg">
                    <img className="w-full h-full" src={cartItem.strMealThumb} alt="cart-item"/>
                </div>
                <div>
                    <div className="flex justify-between align-center px-2 py-1 font-bold">
                        <p className="w-40 truncate">{cartItem.strMeal}</p>
                        <p>{cartItem.totalPrice}</p>
                    </div>
                    <p className="text-left px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="m-1 float-right">
                        <button className="mx-1.5" onClick={()=>{quantityHandler("decrement",cartItem)}}><FaMinus/></button>
                            <p className="inline">{cartItem.quantity}</p>
                        <button className="mx-1.5" onClick={()=>{quantityHandler("increment",cartItem)}}><FaPlus/></button>
                    </div>
                </div>
            </article>
    )
}