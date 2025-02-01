import { createContext, useReducer,useRef, memo } from "react"
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
    category:React.MutableRefObject<string>
    dispatch: React.Dispatch<reducerActionType>
}

export type cartStateType={
    items:MealCartType[],
}

export type reducerActionType={
    type:string,
    payload:MealCartType
}

export const CartContext = createContext<contextType>({
    cartState:{items:[]},
    mealArr:[],
    category:{
        current:""
    },
    dispatch: () => {}
})

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------



export const MemoizedCartContext = memo(CartContextProvider);


function CartContextProvider({children}:{children:React.ReactNode}){

    const initialState:cartStateType = {items:[]};

    const [cartState,dispatch] =useReducer(reducerfn,initialState)
    const mealArr:MealObjType[]=[]
    const category = useRef("Chicken")

    
    const contextValue:contextType={
        cartState,
        mealArr,
        category,
        dispatch
    }

    return(<>
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    </>)

}

