import React from "react"

function MovieCard({item}) {
    return (
        <div className="results">
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
                alt={item.title + ' poster'}
            />
            <p className="movie-title">{item.title}</p>
            <p className="info">Release date: {item.release_date}</p>
            <p className="info">Rating: {item.vote_average}</p>
            <p className="overview">{item.overview}</p>
            <hr />
        </div>
    )
}

export default MovieCard