import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import '../bootstrap.css'
import Data from './data.js'
import { Link } from 'react-router';

class Items extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/Edit" className="btn btn-info">Add new</Link>
                <h1>Foods</h1>
                {Data.map((res, i) => {
                    return (
                        <div key={i} className="container items">
                            <img src={res.photoUrl} className="img-thumbnail" alt="sa" height="100" />
                            <h3>{res.name}</h3>
                            <p><strong>PRICE: </strong> <b>{res.price}$</b></p>
                            <p> <small>Type: {res.type}</small> </p>
                            <Link className="btn btn-outline-success" to={`/Details/${res.name}`}>Details</Link>
                        </div>
                    )
                }
                )}
            </div>
        );
    }
}

export default Items;
