import {useState} from 'react'
import Movie from './Movie';

function Favourites() {

    const [favourites] = useState(JSON.parse(localStorage.getItem('movies') || "[]"));
    const [currentMovie, setCurrentMovie] = useState(0);
    
    return (
        <div>

            {
                (favourites.length === 0) ? (
                    <div className="mt-24 flex  justify-center">
                        <div className='text-white'>Nothing Added to Favourites</div>
                    </div>
                )

                :    
                        
                <div className="mt-12 flex flex-wrap bg-gray-950 items-center justify-center" >
                    {
                        favourites.map((movie : any) => {
                            return (
                                <div >
                                    <Movie movie={movie} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} />
                                </div>
                            )
                        })
                    }
                </div>
            }           
        </div>
    )
}

export default Favourites