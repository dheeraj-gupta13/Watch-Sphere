import  { useState, useEffect, useContext } from 'react'
import FilteredMovies from './FilteredMovies'
import Banner from './Banner'
import Movies from './Movies'
import MoviesContext from './MoviesContext'
import Pagination from './Pagination'


function Home({searched, pageNumber, setPageNumber }:{searched:string, pageNumber:any, setPageNumber:any}) {

  const movies = useContext(MoviesContext);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const temp = movies.filter((movie:any) => {
      return (
          movie.title.includes(searched)
      )
    })
    setFilteredMovies(temp);
  },[searched]);


  return (
    <div>
         {
            (searched) ? (
              <FilteredMovies filteredMovies={filteredMovies} searched={searched} />
            )
              :
              <div>
                <Banner/>
                <Movies/>
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
              </div>
          }
    </div>
  )
}

export default Home;