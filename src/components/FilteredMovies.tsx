import {useState} from 'react';
import Movie from './Movie';

function FilteredMovies({filteredMovies,searched} : {filteredMovies :any, searched:any}) {

    const [currentMovie, setCurrentMovie] = useState(0);

    return (
        <div className='bg-gray-950 mt-20'>
            <div className='text-white ml-32 text-3xl text-bold'>
                <div>Result for {searched}.</div>
            </div>

            <div className=" flex flex-wrap bg-gray-950 items-center justify-center" >
                {
                    filteredMovies.map((movie: any) => {
                        return(
                            <div >
                                <Movie movie={movie} currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilteredMovies