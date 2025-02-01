export default function ViewPort(){
    return<>
            <div className="viewport w-screen h-vh fixed z-20 top-0 bg-[#5c5c5e6d] ">
                <div className="w-3/5 float-right bg-slate-50 h-dvh">
                    <div className="h-12 bg-teal-200">
                        <div className="img-container rounded-full bg-emerald-400 w-10 h-10 float-right mx-2">
                            <img alt="p" src=""/>
                        </div>
                    </div>
                    <ul className="text-center text-lg">
                        <li className="m-4 hover:text-green-800 cursor-pointer"><p>About</p></li>
                        <li className="m-4 hover:text-green-800 cursor-pointer"><p>Your Orders</p></li>
                        <li className="m-4 hover:text-green-800 cursor-pointer"><p>Order History</p></li>
                        <li className="m-4 hover:text-green-800 cursor-pointer"><p>Contact us</p></li>
                    </ul>
                </div>
            </div>
    </>
}