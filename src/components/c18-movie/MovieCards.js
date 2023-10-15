import React from 'react'

const MovieCards = (movie) => {
    let image_path="https://image.tmdb.org/t/p/w500"

  return (
    <div className='movie'>
        <img src={image_path+movie.poster_path} alt="" className='poster' />
        <div className='movie-details'>
            <div className='box'>
                <h4 className='title'>{movie.title}</h4>
                <p className='rating'>{movie.vote_average}</p>

            </div>

            <div className="overview">
                <h1>Overview</h1>
                {movie.overview}

            </div>

        </div>



    </div>
  )
}

export default MovieCards