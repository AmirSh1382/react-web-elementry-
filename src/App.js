import React, { Component } from 'react';

import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import { Navigate , Route , Routes } from 'react-router-dom';

import Header from "./Components/Header/header"
import Landing from './Landing';
import Cards from "./Components/Cards/cards"
import Search from "./Components/Search/search"
import Footer from './Components/Footer/footer';

import NotFound from './Components/NotFound/NotFound';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/contact" element={ <Search /> } />
                    <Route path="/products" element={ <Cards /> } />
                    <Route path="/notfound" element={ <NotFound /> } />
                    <Route path="/" element={ <Landing />} />
                    <Route path='/*' element={<Navigate to="/notfound" />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;