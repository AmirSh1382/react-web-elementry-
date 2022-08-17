import React, { Component } from 'react';

import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import Header from "./Components/Header/header"
import Banner from "./Components/Banner/banner"
import Cards from "./Components/Cards/cards"
import Search from "./Components/Search/search"
import Footer from './Components/Footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Cards />
                <Search />
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default App;