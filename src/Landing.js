import React, { Component } from 'react';

import Banner from "./Components/Banner/banner"
import Cards from "./Components/Cards/cards"
import Search from "./Components/Search/search"

class landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Cards />         
            </div>
        );
    }
}

export default landing;