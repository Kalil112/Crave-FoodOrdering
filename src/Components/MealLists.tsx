import { MemoizedMealCard } from "./MealCard";
import { useState,useEffect,useContext, memo } from "react";
import { CartContext } from "../Store/CartContext";
import type { MealObjType } from "../Store/CartContext";

export const MemoizedMealList  = memo(MealList);
    
 function MealList() {
    const {category}= useContext(CartContext);
    const [mealArr,setMealArr]=useState<MealObjType[]>([]);
    useEffect(()=>{
        let data:any;
        async function getMealData (){
            
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.current}`,{})
            if(!response.ok){
                throw new Error("Failed to Fetch")
            }
            data = await response.json();
            setMealArr(data.meals);
        }
        try{
            getMealData();
        }
        catch(err){
            console.log(err);
        }
        
    },[category]);
    return (
        <div className="Meal-List my-16 mx-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {mealArr.map((item: MealObjType,index:number) => <MemoizedMealCard key={index} mealItem={item}/>)}
        </div>
    );
}
