import React from 'react';
import {useNavigate} from "react-router-dom";

const Root = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/greeting')
    };

    return (
        <section className="d-flex flex-column align-items-center">
            <h1>React on Rails App</h1>
            <p>Want to see some cool random greeting? Click the link below.</p>
            <button 
                className="btn btn-outline-primary mb-3" 
                type="button" 
                onClick={handleNavigation}>View Greeting
            </button>
        </section>
    );
};

export default Root;