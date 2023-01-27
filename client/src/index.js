import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import RecipeDetail from './pages/RecipeDetail';
import Search from './pages/Search';
import Footer from './components/Footer';

const App = () => {


    return (
        <Router>
            <div className="">
                <NavBar />
                <Switch>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/recipe/:recipeId">
                        <RecipeDetail />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/signup">
                        <SignUpPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))