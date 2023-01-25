import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return ( <
        div className = "home container" >
        <
        h1 className = "" > Welcome to the MDDZ Team Recipes < /h1> <
        Link to = '/signup'
        className = "btn btn-primary btn-lg" > Let 's Get Started</Link> <
        /div>
    )
}

export default Welcome