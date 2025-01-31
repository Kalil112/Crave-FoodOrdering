import {createSlice} from "@reduxjs/toolkit";
import type { MealCartType, cartStateType } from "./CartContext";

const initialState:cartStateType = {items:[]};

export const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        add(state,action:{payload:MealCartType}){
            const mealToAdd = action.payload;
            const index = state.items.findIndex((item)=>{return item.idMeal === mealToAdd.idMeal});
            if(index === -1){
                state.items=[...state.items,mealToAdd]
            }
        },

        increment(state,action:{payload:MealCartType}){
            const mealToUpdate = action.payload;
            const index = state.items.findIndex((item)=>{return item.idMeal === mealToUpdate.idMeal});
            state.items[index].quantity = state.items[index].quantity + 1;
        },

        decrement(state,action:{payload:MealCartType}){
            const mealToUpdate = action.payload;
            const index = state.items.findIndex((item)=>{return item.idMeal === mealToUpdate.idMeal});
            state.items[index].quantity = state.items[index].quantity - 1;

            if(state.items[index].quantity < 1){
                state.items.splice(index,1)
            }
            
        }
        
    }
})


