import React from 'react'
import Recipe from './Recipe'

function Home({ recipes }) {
    return (
        <div className='container recipes'>
            {recipes.map(
                (recipe) => (
                    <Recipe title={recipe.title} id={recipe.id} image={recipe.image} />
                )
            )}
        </div>
    )
}

export default Home