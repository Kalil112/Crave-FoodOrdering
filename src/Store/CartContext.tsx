import { createContext, useReducer, memo, useState,useEffect } from "react"
import { reducerfn} from "./reducerFn";

export type MealObjType = {
    idMeal:string
    strMeal:string,
    strMealThumb:string
}

export type MealCartType = {
    idMeal:string
    strMeal:string,
    strMealThumb:string,
    mealDesc:string,
    mealPrice:number,
    quantity:number;
    totalPrice:number
}

export type contextType = {
    cartState: cartStateType,
    mealArr:MealObjType[],
    dispatch: React.Dispatch<reducerActionType>
}

export type cartStateType={
    items:MealCartType[]
}

export type reducerActionType={
    type:string,
    payload:MealCartType
}

export const CartContext = createContext<contextType>({
    cartState:{items:[]},
    mealArr:[],
    dispatch: () => {}
})

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------



export const MemoizedCartContext = memo(CartContextProvider);


function CartContextProvider({children}:{children:React.ReactNode}){

    const initialState:cartStateType = {items:[]};

    const [cartState,dispatch] =useReducer(reducerfn,initialState)
    //const [category,setCategory]=useState<String>("Dessert")

    const [mealArr,setMealArr]=useState<MealObjType[]>([])

    useEffect(()=>{
        let data:any;
        async function getMealData (){
            
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`,{})
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
        
    },[])

    
    const contextValue:contextType={
        cartState,
        mealArr,
        dispatch
    }

    return(<>
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    </>)

}

