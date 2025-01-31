import type {cartStateType,reducerActionType } from "./CartContext";

const initialState:cartStateType = {items:[]};

export const reducerfn = (state:cartStateType = initialState,action:reducerActionType):cartStateType=>{

    switch(action.type){
        case "add":{
            /*const mealToAdd = action.payload;
            const cartItems=[...state.items]
            const index = cartItems.findIndex((item)=>{return item.idMeal === mealToAdd.idMeal});
            if(index === -1){
                cartItems.push(mealToAdd);
            }
            /*const updatedCart:cartStateType={
                items:cartItems
            }
            return {
                items:cartItems
            }*/
            const mealToAdd = action.payload;
            const stateCopy = {items:[...state.items]}
            const index = stateCopy.items.findIndex((item)=>{return item.idMeal === mealToAdd.idMeal});
            mealToAdd.totalPrice = mealToAdd.mealPrice * mealToAdd.quantity;
            if(index === -1){
                stateCopy.items=[...stateCopy.items,mealToAdd]
            }
            return stateCopy;
        }
        case "increment":{
            const mealToUpdate = action.payload;
            const stateCopy={items:[...state.items]}
            const index = stateCopy.items.findIndex((item)=>{return item.idMeal === mealToUpdate.idMeal});

            stateCopy.items[index].quantity = stateCopy.items[index].quantity + 1;
            stateCopy.items[index].totalPrice = stateCopy.items[index].quantity * stateCopy.items[index].mealPrice
            //cartItems[index].mealPrice = cartItems[index].quantity * mealToUpdate.mealPrice;

            /*const updatedCart:cartStateType={
                items:cartItems
            }*/ 

            return stateCopy
        }

        case "decrement":{
            const mealToUpdate = action.payload;
            const stateCopy={items:[...state.items]}
            const index = stateCopy.items.findIndex((item)=>{return item.idMeal === mealToUpdate.idMeal});

            stateCopy.items[index].quantity = stateCopy.items[index].quantity - 1;
            stateCopy.items[index].totalPrice = stateCopy.items[index].quantity * stateCopy.items[index].mealPrice

            if(stateCopy.items[index].quantity < 1){
                stateCopy.items.splice(index,1)
            }
            //cartItems[index].mealPrice = cartItems[index].quantity * mealToUpdate.mealPrice;

            /*const updatedCart:cartStateType={
                items:cartItems
            }*/
            return stateCopy
        } 
        default : return state
    }

}