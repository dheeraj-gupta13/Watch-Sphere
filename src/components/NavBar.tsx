import { useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import {RxCross1} from 'react-icons/rx'
import {useNavigate} from "react-router-dom" 

function NavBar({setSearched} : {setSearched:any}){

    let navigate = useNavigate() 
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        setIsSearchOpen(false);
        setSearched(searchText);
    }

    return(
        <div className="bg-gray-950 grid justify-items-center"> 

            <div className='z-50 mt-2 fixed bg-gray-950 w-4/6 h-12 rounded-md'>
                <div className="flex justify-between items-center ">

                    <div className="text-white text-2xl ml-5 cursor-pointer">
                        <div onClick ={()=>{ navigate("/"); setSearched('') }}>Watch Sphere</div>
                    </div>

                    <div className="flex h-12  text-white text-xl mr-20 items-center ">
                        <div className="ml-5 cursor-pointer" onClick ={()=>{ navigate("/");setSearched('') }}>Home</div>
                        <div className="ml-5 cursor-pointer" onClick ={()=>{ navigate("/favourites")}}>Favourites</div>
                        {/* <div className="ml-5 cursor-pointer">Genre</div> */}
                    </div>
                    <div className='text-white mr-8 text-3xl'>
                    {
                            isSearchOpen ? <RxCross1 onClick={()=>setIsSearchOpen(false)}/> : <BiSearch onClick={()=>setIsSearchOpen(true)}/>
                    } 
                    </div>
                </div>

                {
                    (isSearchOpen) &&
                    <div className='text-white pt-4'>
                        <div className="bg-gray-950 h-20 rounded-lg p-3">
                            <div className="flex items-center min-w-[200px]">
                                <input
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className="h-14  bg-gray-800 w-full rounded-[7px]  px-3 py-2.5 text-xl  placeholder-shown:border placeholder-shown:border-blue-gray-200  focus:border-2 focus:border-gray-100 focus:border-transparent "
                                    placeholder="Search"
                                />
                                <div onClick={handleSearch} className='ml-2 text-3xl'>
                                    <BiSearch/>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                }
            </div>
            
        </div>
    )
}

export default NavBar;