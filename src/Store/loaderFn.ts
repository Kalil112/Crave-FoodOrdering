import type { MealObjType } from "./CartContext";
export default async function loaderFn(){
    let data:any;
    let mealArr:MealObjType[]=[];
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`,{})
            if(!response.ok){
                throw new Error("Failed to Fetch")
            }
            data = await response.json();
            mealArr = data.meals;
    return mealArr
}