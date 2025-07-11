import React from 'react'
import MovieNav from './MovieNav'

const SearchMovies = () => {
    return (
        <div>
            <br></br>
            <MovieNav/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Movie Name</label>
                                <input type="text" className="form-control" />
                                <br></br>
                                <button className="btn btn-success">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchMovies