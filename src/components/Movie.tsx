import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiTwotoneStar } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";

function Movie({movie, currentMovie, setCurrentMovie} :{movie: any, currentMovie:any, setCurrentMovie:any }){

    const [favourites, setFavourites] = useState(localStorage.getItem('movies') || "[]");

    const handleFavouritesState = () => {
        let oldData = JSON.parse(localStorage.getItem('movies') || "[]");
        let temp = oldData.map((movie:any)=> movie.id);
        setFavourites(temp);
    }

    const handleFavourites = () => {
        let oldData:any = JSON.parse(localStorage.getItem('movies') || "[]");

        if(favourites.includes(movie.id)){
            oldData = oldData.filter((m:any) => 
                (movie.id !== m.id)
            );
        }
        else{
            oldData.push(movie);
        }

        localStorage.setItem("movies", JSON.stringify(oldData));
        handleFavouritesState();
    }

    return(

        <div onMouseEnter={()=> { setCurrentMovie(movie.id) }}
        onMouseLeave={()=> setCurrentMovie(0)}>

            {
                (currentMovie === movie.id) ? 
                (
            
                    <div className="m-3 w-80 scale-x-110 scale-y-110">
                        <div className="rounded-t-lg overflow-hidden" >
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt={movie.title} />
                        </div>

                        <div className="rounded-b-lg absolute bg-gray-950">
                            <div className="m-2">
                                <div className="text-white flex justify-between items-center">
                                    <div className="w-24 text-5xl"
                                    onClick={() => handleFavourites()}>
                                        {
                                            favourites.includes(movie.id) ? 
                                            (<CiCircleRemove className="text-red-600"/>) 
                                            : 
                                            (<IoIosAddCircleOutline className="text-green-600"/>)
                                        }
            
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-3xl bg-gray-950">
                                            <AiTwotoneStar />
                                        </div>
                                        <div>{movie.vote_average }</div>
                                        <div className="text-xs ml-1"> ({movie.vote_count})</div>
                                    </div>
                                </div>    
                                <h1 className="text-2xl font-bold text-white" >{movie.title}</h1>
                                <p className="text-white" >{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className=" m-3 w-80 rounded-lg overflow-hidden" >
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt={movie.title} />
                    </div>
                )
            }

        </div>
    )
}

export default Movie;