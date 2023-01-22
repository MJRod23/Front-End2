import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Home from '../components/Home';
import { useAuth } from '../auth';
import Welcome from '../components/Welcome';
import loading from '../images/loading.gif'


function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [ready, setReady] = useState(false);
    const [logged] = useAuth();

    const getAllRecipes = async () => {

        const BASE_URL = 'https://api.spoonacular.com'

        const API_KEY = '53da95f001ae4f26ad9e4b49d8e7de02'

        const response = await fetch(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}`);

        const data = await response.json();

        console.log(data.results)

        return data
    }

    useEffect(() => {
        getAllRecipes().then(data => {
            setRecipes(data.results)
            setReady(true)
        })
            .catch(error => console.log(error))
    }, [])

    if (ready == true) {
        return (
            <>
                {logged ? <Home recipes={recipes} /> : <Welcome />}
            </>
        )
    }
    else {
        return (
            <div className='loading'>
                <img src={loading} alt='Loading ...' style={{ width: 100 }} />
            </div>
        )
    }
}

export default HomePage