import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Store/CartContext";
import DessertImg from "../images/Dessert.jpg";
import ChickenImg from "../images/chicken.jpg";
import PastaImg from "../images/pasta.jpg";
import VeganImg from "../images/Vegan.jpg";
import SeafoodImg from "../images/seafood.jpg";

export default function Categories(){
    const {category} = useContext(CartContext);
    const navigate=useNavigate()
    function selectHandler(text:string){
        category.current=text;
        navigate('/');
    }
    return(<>
        <h1 className="mt-12 text-center">Categories</h1>
        <div className="mt-2 mb-8 flex flex-col justify-center md:grid grid-cols-3" >
                <div className="h-36 min-w-64 m-4 rounded-lg relative
                         shadow-lg shadow-grey-400 overflow-hidden hover:cursor-pointer"
                    onClick={()=>{selectHandler("Dessert")}}>
                    <img src={DessertImg} className="w-full h-full" alt="loading" loading="eager"/>
                    <h1 className="absolute top-0 left-0 m-2 text-white text-lg">Dessert</h1>
                </div>

                <div className="h-36 min-w-64 m-4 rounded-lg relative
                        object-fill shadow-lg shadow-grey-400 overflow-hidden hover:cursor-pointer"
                    onClick={()=>{selectHandler("Pasta")}}>
                    <img src={PastaImg} className="w-full h-full" alt="loading" loading="eager"/>
                    <h1 className="absolute top-0 right-0 m-2 text-white text-lg">Pasta</h1>
                </div>

                <div className="h-36 min-w-64 m-4 rounded-lg relative
                        object-fill shadow-lg shadow-grey-400 overflow-hidden hover:cursor-pointer"
                    onClick={()=>{selectHandler("Seafood")}}>
                    <img src={SeafoodImg} className="w-full h-full" alt="loading" loading="eager"/>
                    <h1 className="absolute top-0 left-0 m-2 text-white text-lg">Sea Food</h1>
                </div>

                <div className="h-36 min-w-64 m-4 rounded-lg relative
                        object-fill shadow-lg shadow-grey-400 overflow-hidden hover:cursor-pointer"
                    onClick={()=>{selectHandler("Chicken")}}>
                    <img src={ChickenImg} className="w-full h-full" alt="loading" loading="eager"/>
                    <h1 className="absolute top-0 right-0 m-2 text-white text-lg">Chicken</h1>
                </div>

                <div className="h-36 min-w-64 mx-4 mt-4 mb-6 rounded-lg relative
                        object-fill shadow-lg shadow-grey-400 overflow-hidden hover:cursor-pointer"
                    onClick={()=>{selectHandler("Vegan")}}>
                    <img src={VeganImg} className="w-full h-full" alt="loading" loading="eager"/>
                    <h1 className="absolute top-0 left-0 m-2 text-teal-700 text-lg">Vegan</h1>
                </div>
                
                
        </div>
        
    </>)
}
