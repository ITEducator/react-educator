import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Login from "./components/UserManagement/Login";
import Registration from "./components/UserManagement/Registration"
import Dashboard from "./components/Dashboard";
import AddCourse from "./components/Course/AddCourse";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Hello</h1>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/addCourse" component={AddCourse}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/registration" component={Registration}></Route>
      </div>
    </Router>
  );
}

export default App;
