import {useContext, useState} from 'react';
import MoviesContext from './MoviesContext';
import Movie from './Movie.tsx';

function Movies(){

    const movies = useContext(MoviesContext);
    const [currentMovie, setCurrentMovie] = useState(0);
    
    return(
        <div className="mt-12 flex flex-wrap bg-gray-950 items-center justify-center" >
            {
                 movies.map((movie) => {
                    return(
                        <div >
                            <Movie movie={movie} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Movies;