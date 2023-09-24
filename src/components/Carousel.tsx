

function Carousel({movie} : {movie:any}) {
  return (
    <div className=' w-[90vw] h-[65vh] h-5/6  rounded-lg bg-cover   ease-out duration-300'
    style={{ 
        backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, 
        // background:"linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))"
        }}>

        <div className='pt-20 pl-10 w-80'>   
            <div className='font-bold text-yellow-300 text-4xl'>{movie.title}</div>
        </div> 
    </div>
  )
}

export default Carousel