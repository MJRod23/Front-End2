import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SearchResult({ image, title, onClick, id }) {
    const location = `/recipe/${id}`
    return (
        <section class="search-result-item">
            <Link className="image-link" to={location}><img class="image" src={image} />
            </Link>
            <div className="search-result-item-body">
                <div className="row">
                    <div className="col-sm-9">
                        <h4 className="search-result-item-heading"><Link to={location} style={{ textDecoration: 'none' }}>{title}</Link> </h4>
                    </div>
                    <div className="col-sm-3 text-align-center">
                        <p className="value3 mt-sm"></p>
                        <p className="fs-mini text-muted"></p><Link className="btn btn-primary btn-primary btn-sm" to={location}>Detail</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchResult