import React from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";


const SingleProduct = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id);
    return (
        <>
        <Header />
        <div className="container single-product">
            <div className="row">
        </div>
        
            <div className="col-md-6">
                <div className="single-image">
                    <img src={product.image} alt={product.name} />
                
          
        </>
                
          

    )
}