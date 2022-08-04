import React from 'react';
import "./MovieResults.css"

const MovieResults = ({movie}) => {
    if (movie) {
        return (
            <div className='search-results'>
                {movie.data.results.slice(0, 10).map((item) => (
                    <div key={item.id}>
                        <div>

                        </div>
                        <h3>
                            {item.original_title}
                        </h3>
                    </div>
                ))}
            </div>
        );
    }
};

export default MovieResults;