import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/messages/messages";
import { useNavigate } from "react-router-dom";

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/')
    };

  const getRandomMessage = () => {
    dispatch(getMessage());
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Random Greeting</h1>
      <p className="message">
          Message:
          {' '}
          {message.length > 0 ? message : 'Loading...'}
      </p>
      <div>
        <p>Click the button below to see a different message</p>
        <div className="d-flex flex-column align-items-center">
          <button 
            className="btn btn-outline-primary mb-1" 
            type="button" 
            onClick={getRandomMessage}>
            Generate text
          </button>
          <button 
            className="btn btn-outline-success" 
            type="button" 
            onClick={handleNavigation}>Back to Home Page
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Greeting;