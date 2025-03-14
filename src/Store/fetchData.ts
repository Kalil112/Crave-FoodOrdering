import {QueryClient} from "@tanstack/react-query";
import type { MealObjType } from "./CartContext";
export const query = new QueryClient();

export async function fetchData(category:string):Promise<MealObjType[]>{
    console.log(category);
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,{});

    if(!response.ok){
        throw new Error("Failed to fetch");
    }
    const { meals } = await response.json();
    return meals;  
}