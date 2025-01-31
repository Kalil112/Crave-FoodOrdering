import {FaHome, FaSearch, FaShoppingCart} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";
import {useContext, useState} from "react";
import { CartContext } from "../Store/CartContext";

import ViewPort from "./ViewPort";

// type FooterProps = {
//     cartViewFn:()=>void
// }
export default function Footer(){
    const [viewPort, setViewPort]=useState(false);
    
    const { cartState }= useContext(CartContext);
  
    function viewPortHandler(){
        if(viewPort===false){
            setViewPort(true);
        }
        else{
            setViewPort(false);
        }
    }
    
    return(<>
        {viewPort && <ViewPort/>}
        <div className="main-footer fixed px-2 bottom-0 left-0 w-screen bg-teal-100 z-30">
            <ul className="main-list flex justify-between p-1.5">
                <li className="list-item hover:cursor-pointer">
                    <NavLink to="/">
                        <FaHome size={"1.5em"} color="#047857"/>
                    </NavLink>
                </li>
                <li className="list-item hover:cursor-pointer">
                    <NavLink to="/categories">
                        <FaSearch size={"1.5em"} color="#047857"/>
                    </NavLink>
                </li>
                <li className="list-item hover:cursor-pointer">
                        <NavLink to="/cart">
                            <div className="relative">
                                {cartState.items.length !==0 && <div className="absolute h-2.5 w-2.5 top-0 right-0 bg-green-500 rounded-lg"></div> }
                                
                                <FaShoppingCart size={"1.5em"} color="#047857"/>
                            </div>
                        </NavLink>
                </li>
                <li className="list-item hover:cursor-pointer"><button onClick={viewPortHandler}><GiHamburgerMenu size={"1.5em"} color="#047857"/></button></li>
            </ul>
        </div>   
        </>);
}