import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from "./Greeting";
import Root from "./Root";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <Root /> } />
      <Route path="/greeting" element={ <Greeting /> } />
    </Routes>
  </Router>
);

export default App;