import {useEffect, useState} from 'react';
import Carousel from './Carousel';
import {FcPrevious, FcNext} from 'react-icons/fc'

function Banner(){

    const [bannerMovies, setBannerMovies] = useState([ {
        "adult": false,
        "backdrop_path": "/kcHGf7yDJGrtCVMhqz0DVdvZg5A.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1030987,
        "original_language": "en",
        "original_title": "Sympathy for the Devil",
        "overview": "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems.",
        "popularity": 200.242,
        "poster_path": "/ozC9UaKaS0MXjMbCAHZJikszwV6.jpg",
        "release_date": "2023-07-20",
        "title": "Sympathy for the Devil",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/xsnpgM2Si1hG7daLP1XE7uAfKKH.jpg",
        "genre_ids": [
            80,
            28,
            53
        ],
        "id": 1152797,
        "original_language": "pl",
        "original_title": "Freestyle",
        "overview": "Trying to check out a recording from his debut album, a street rapper and his friend run into trouble when a major drug deal turns into a total disaster for them.",
        "popularity": 204.841,
        "poster_path": "/hNPJzlPlIVgTAjb2Mgqwl1QqydK.jpg",
        "release_date": "2023-09-13",
        "title": "Freestyle",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 16
    },
    {
        "adult": false,
        "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
        "genre_ids": [
            16,
            10751,
            28,
            14,
            10749
        ],
        "id": 496450,
        "original_language": "fr",
        "original_title": "Miraculous - le film",
        "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
        "popularity": 203.922,
        "poster_path": "/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
        "release_date": "2023-07-05",
        "title": "Miraculous: Ladybug & Cat Noir, The Movie",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 572
    },
    {
        "adult": false,
        "backdrop_path": "/wHytVsfAZsVDAcABd6iQGmE2j29.jpg",
        "genre_ids": [
            53,
            28,
            80
        ],
        "id": 156022,
        "original_language": "en",
        "original_title": "The Equalizer",
        "overview": "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
        "popularity": 202.797,
        "poster_path": "/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
        "release_date": "2014-09-24",
        "title": "The Equalizer",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 8116
    },
    {
        "adult": false,
        "backdrop_path": "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 423108,
        "original_language": "en",
        "original_title": "The Conjuring: The Devil Made Me Do It",
        "overview": "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
        "popularity": 200.764,
        "poster_path": "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
        "release_date": "2021-05-25",
        "title": "The Conjuring: The Devil Made Me Do It",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 5388
    }])

    const [currMovieNumber, setCurrMovieNumber] = useState(0);

    const handlePrev = () => {
        setCurrMovieNumber((currMovieNumber - 1 + bannerMovies.length) % bannerMovies.length);
    }
    const handleNext = () => {
        setCurrMovieNumber((currMovieNumber + 1) % bannerMovies.length );
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrMovieNumber((currMovieNumber + 1) % bannerMovies.length );
        }, 4000);
        return () => clearTimeout(timer);
      }, [currMovieNumber]);

    return(
        <div className='bg-gray-950 mt-16 text-white flex items-center justify-center'>    
            <div onClick={handlePrev} className='mr-2 text-3xl' >
                <FcPrevious/>
            </div>    
            <div >
                 <Carousel movie={bannerMovies[currMovieNumber]} />
            </div>
            <div onClick={handleNext} className='ml-2 text-3xl text-white' >
                <FcNext/> 
            </div>    
       </div>
    )
}

export default Banner;