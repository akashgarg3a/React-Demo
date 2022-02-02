import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
    <div className='jumbotron'>
        <h1>PluralSight Adminstration</h1>
        <p>Using flux</p>
        <Link to='about' className='btn btn-primary'>About Page</Link>
    </div>
    );
}

export default HomePage;