import {FaShoppingCart} from "react-icons/fa";
import type { MealCartType, MealObjType} from "../Store/CartContext";
//import type { MealObjType } from "../Store/CartContext";
import {useContext,memo} from "react"
import { CartContext } from "../Store/CartContext";

type MealCardProps = {
    mealItem:MealObjType
}

//export const MemoizedMealCard = memo(

export default function MealCard({mealItem}:MealCardProps){ 
    const cart = useContext(CartContext)

    const addMealItem = (mealItem:MealObjType) : void=>{
        const selectedMealItem:MealCartType={
            idMeal:mealItem.idMeal,
            strMeal: mealItem.strMeal,
            strMealThumb:mealItem.strMealThumb,
            mealDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            mealPrice: Number("250"),
            quantity: 1,
            totalPrice:Number("250")
        }
        cart.dispatch({type:"add",payload:selectedMealItem});
    }
    /*252 */
    return(<>
        <article className="food-card bg-[#FFFFFF] min-w-32 max-w-56 flex flex-col justify-between rounded-lg overflow-hidden shadow-lg hover: cursor-pointer">
            <div className="img-container h-24 w-41 md:w-42 lg:w-46">
                <img className="w-full h-full" alt={mealItem.strMeal} src={mealItem.strMealThumb} loading="lazy"/>    
            </div>
            <span className="food-name block text-sm font-bold text-left text-ellipsis p-1">{mealItem.strMeal}</span>
            <span className="food-desc block text-xs text-left text-balance m-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
            <div className="flex p-1.5 justify-between p-1">
                <p className="price font-bold">250</p>
                <button onClick={()=>{addMealItem(mealItem)}} 
                        className="cart-btn hover:cursor-pointer">
                            <FaShoppingCart size={"1.5em"}/>
                </button>
            </div>
        </article>
    </>
    )
};