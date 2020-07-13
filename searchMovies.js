import React, {useState, useEffect} from "react";
import MovieCard from "./movieCard"

function SearchMovies(){
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [clicked, setClicked] = useState(false)
    
    function handleChange(event) {
        const {value} = event.target
        setQuery(value)
    }
    
    function searchMovie(e) {
        e.preventDefault()
        setClicked(true)
        //console.log(query)
    }
    
    function clearFields(e) {
        e.preventDefault()
        setQuery("")
        setMovies([])
        setClicked(false)
    }
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7de083846468a9954610b067723e4a8a&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [clicked])
    
    console.log(movies)
        
    return (
        <>         
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={handleChange}/>
            <button className="button" type="submit" onClick={searchMovie}>Search</button>
            <button className="button-clear" onClick={clearFields}>Clear field</button>
        </form>
       {
       query.length > 0 
       ?
            <div className="card-list">   
                {movies && movies.filter(item => item.poster_path).map(item => (
                        <MovieCard item={item} key={item.id} />
                ))}
                
            </div>
        : 
            <p className="info-msg">Please enter a movie name on the search field.</p>
       }
        </>
    )
}

export default SearchMovies