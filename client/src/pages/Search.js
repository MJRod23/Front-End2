import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import SearchResult from '../components/SearchResult';
import { useHistory } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState('');
    const [ready, setReady] = useState(false);
    const [results, setResults] = useState([]);
    const history = useHistory();

    const searchForRecipes = async (searchTerm) => {
        const BASE_URL = 'https://api.spoonacular.com'

        const API_KEY = '53da95f001ae4f26ad9e4b49d8e7de02'

        const response = await fetch(`${BASE_URL}/recipes/complexSearch/?titleMatch=${searchTerm}&apiKey=${API_KEY}`);

        console.log(`${BASE_URL}/recipes/complexSearch/?titleMatch=${searchTerm}&apiKey=${API_KEY}`)

        const data = await response.json();

        console.log(data)

        return data
    }


    const submitForm = (e) => {
        console.log(search)

        searchForRecipes(search).then(
            data => {
                setResults(data.results)
                setSearch('')
            }
        ).catch(error => console.log(error))



        e.preventDefault();
    }


    const goToDetail = (recipeID) => {
        history.push(`/recipe/${recipeID}`)
    }


    return (
        <div className="container">
            <h1>Search Recipes</h1>
            <div className="form-group">
                <form action="" onSubmit={submitForm}>
                    <input
                        type="text"
                        name="search"
                        id=""
                        className="form-control"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a keyword"
                    />
                    <input type="submit" value="Search" className="btn btn-primary" />
                </form>
            </div>
            <div className="container">
                <div className="row ng-scope">
                    <div className="col-md-3 col-md-push-9">
                        <h4>Results </h4>
                    </div>
                    <div className="col-md-9 col-md-pull-3">
                        <p className="search-results-count">{results.length} results</p>
                        {results.map(
                            (result) => (
                                <SearchResult
                                    title={result.title}
                                    image={result.image}
                                    onClick={() => goToDetail(result.id)}
                                    id={result.id}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search