import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddCourse from "./components/Course/AddCourse";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello</h1>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/addCourse" component={AddCourse}></Route>
      </div>
    </Router>
  );
}

export default App;
