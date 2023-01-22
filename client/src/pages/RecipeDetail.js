import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loading from '../images/loading.gif'

function RecipeDetail() {
    const { recipeId } = useParams();
    const [ready, setReady] = useState(false);
    const [detail, setDetail] = useState({});
    const [ingreds, setIngreds] = useState([]);
    const [dishTypes, setDishTypes] = useState([]);
    const [diets, setDiets] = useState([]);

    const getRecipeInfo = async () => {
        const BASE_URL = 'https://api.spoonacular.com'

        const API_KEY = '53da95f001ae4f26ad9e4b49d8e7de02'

        const response = await fetch(`${BASE_URL}/recipes/${recipeId}/information/?apiKey=${API_KEY}`);

        const data = await response.json();

        return data
    }


    const convertToHTML = (HTML) => {
        return <div dangerouslySetInnerHTML={{ __html: HTML }} />
    }

    useEffect(
        () => {
            getRecipeInfo().then(
                data => {
                    setDetail(data)
                    console.log(data)
                    setIngreds(data.extendedIngredients)
                    setDishTypes(data.dishTypes)
                    setDiets(data.diets)
                    setReady(true)
                }
            )
        }, []
    )

    if (ready !== true) {
        return (
            <div className='loading'>
                <img src={loading} alt='Loading ...' style={{ width: 100 }} />
            </div>
        )
    }
    else {
        return (
            <div className='container'>
                <div className="detail-img">
                    <img src={detail.image} alt="recipe image" />
                </div>
                <h1 className='title'>{detail.title}</h1>
                <div className="summary">
                    {convertToHTML(detail.summary)}
                </div>
                <div className="ingreds">
                    <h2>Ingredients</h2>
                    <ul className="list-group">
                        {ingreds.map((i) => <li className='list-item'>{i.name}</li>)}
                    </ul>
                </div>
                <div className="info">
                    <p className="info-text"><span className="attr">Dish Type:</span> {dishTypes.map(
                        dish => (<span className='bold'> {dish},</span>)
                    )}</p>

                    <p className="info-text"><span className="attr">Diets:</span> {diets.map(
                        dish => (<span className='bold'> {dish},</span>)
                    )}</p>
                    <p className="info-text"><span className="attr">Preparation Time:</span> <span>{detail.preparationMinutes} minutes</span></p>
                    <p className="info-text"><span className="attr">Price Per Serving:</span> <span>${detail.pricePerServing}</span></p>
                    <p className="info-text"><span className="attr">Servings:</span> <span>{detail.servings}</span></p>
                    <p className="info-text"><span className="attr">Vegetarian:</span> <span>{detail.vegetarian == true ? 'Yes' : 'no'}</span></p>
                    <p className="info-text"><span className="attr">Servings:</span> <span>{detail.servings}</span></p>
                    <p className="info-text"><span className="attr">Vegetarian:</span> <span>{detail.vegetarian == true ? 'Yes' : 'no'}</span></p>
                    <p className="info-text"><span className="attr">Very Healthy:</span> <span>{detail.veryHealthy == true ? 'Yes' : 'no'}</span></p>
                </div>
                <div className="instructions">
                    <h2>Instructions</h2>
                    {convertToHTML(detail.instructions)}
                </div>
            </div>
        )
    }
}

export default RecipeDetail