//import { MemoizedMealCard } from "./MealCard";
import {useContext, memo, lazy, Suspense } from "react";
import { CartContext } from "../Store/CartContext";
import type { MealObjType } from "../Store/CartContext";
import {useQuery} from "@tanstack/react-query";
import {fetchData} from "../Store/fetchData";

 const MemoizedMealCard = lazy(()=>import("./MealCard"))
    
 export const MemoizedMealList = memo(function MealList() {
    const {category}= useContext(CartContext);
    //const [mealArr,setMealArr]=useState<MealObjType[]>([]);
    /*useEffect(()=>{
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
        
    },[category]);*/

    const {data,isLoading,error}= useQuery<MealObjType[]>({
        queryKey:[`food-${category.current}`],
        queryFn: ()=>fetchData(category.current)
    })

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Errored Out</p>
    }



    return (
        <div className="Meal-List my-16 mx-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {data && data?.map((item: MealObjType,index:number) =>
                <Suspense key={index} fallback={<p></p>}>
                    <MemoizedMealCard key={index} mealItem={item}/>
                </Suspense>
             )}
        </div>
    );
});
