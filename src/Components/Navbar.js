import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Route, NavLink} from "react-router-dom";

function Navbar() {

    const [dropNotebooks,setDropNotebooks] = useState(false)
    const [dropNotes,setDropNotes] = useState(false)



    return (


<nav>
        <div className="flex fixed  h-full bg-black z-10 flex-col w-56  border border-black -2 rounded-r-3xl overflow-hidden">
            <div className="flex items-center  justify-center h-20 shadow-md">
                <h1 className="text-xl border-2 p-2 rounded text-gray-400">Make~my~Notes</h1>
            </div>
            <ul className="flex flex-col py-4">
                <li>
                    <NavLink className={"flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800" + (dropNotebooks ? " ml-4" : '')}  to= "/Notebooks">
<span className={"ml-2" } >


   <img className={'w-4 h-4 ' + (dropNotebooks ? " transform rotate-90 ..." : '') } onClick={ ()=>{setDropNotebooks(!dropNotebooks)}} src={'https://cdn-icons.flaticon.com/png/512/230/premium/230959.png?token=exp=1635526836~hmac=d3b0dc2a8cf5008709f3b72a8cdb2bd2'}/>
</span>
                        <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"className='ml-4'
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                            </span>
                        <span className="text-sm pl-2 font-medium">Notebooks</span>

                    </NavLink>
                </li>
                <li>
                    <NavLink  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800" to = "/Notes">
                   <span className={"ml-2" } >

   <img className={'w-4 h-4' + (dropNotes ? " ml-4 transform rotate-90 ..." : '') } onClick={ ()=>{setDropNotes(!dropNotes)}} src={'https://cdn-icons.flaticon.com/png/512/230/premium/230959.png?token=exp=1635526836~hmac=d3b0dc2a8cf5008709f3b72a8cdb2bd2'}/>
</span>
                         <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"className='ml-4'
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                            </span>
                        <span className="text-sm font-medium pl-2">Notes</span>

                    </NavLink>
                </li>
            </ul>
        </div>

</nav>


    );
}

export default Navbar;
