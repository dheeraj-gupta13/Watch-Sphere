import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.tsx'
import MoviesContext from './components/MoviesContext.tsx'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.tsx';
import Favourites from './components/Favourites.tsx';


function App() {

  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searched, setSearched] = useState('');
  const [, setFilteredMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=39b1c67964ebaa3ddd7c7fc24de1d4e6&language=en-US&page=${pageNumber}`);
    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, [pageNumber, setPageNumber])

  useEffect(() => {

    const temp = movies.filter((movie:any) => {
      return (
          movie.title.includes(searched)
      )
    })
    setFilteredMovies(temp);
  },[searched, searched]);


  return (

    <MoviesContext.Provider value={movies}>
      <BrowserRouter>
        <NavBar setSearched={setSearched} />
        <Routes> 
          <Route  path='/' element={< Home pageNumber={pageNumber} setPageNumber={setPageNumber} searched={searched} />}></Route>
          <Route  path='/favourites' element={< Favourites />}></Route>
        </Routes>
      </BrowserRouter> 
    </MoviesContext.Provider>
  )
}

export default App
