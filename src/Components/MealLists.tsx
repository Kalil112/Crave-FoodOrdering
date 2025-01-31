import { MemoizedMealCard } from "./MealCard";
import { useContext, memo } from "react";
import { CartContext } from "../Store/CartContext";
import type { MealObjType } from "../Store/CartContext";

export const MemoizedMealList  = memo(MealList);
 function MealList() {
    const {mealArr} = useContext(CartContext)
    return (
        <div className="Meal-List my-16 mx-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {mealArr.map((item: MealObjType,index:number) => <MemoizedMealCard key={index} mealItem={item}/>)}
        </div>
    );
}
