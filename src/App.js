import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Login from "./components/UserManagement/Login";
import Dashboard from "./components/Dashboard";
import AddCourse from "./components/Course/AddCourse";
import UpdateCourse from "./components/Course/UpdateCourse";
import SingleCourse from "./components/Course/SingleCourse";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/addCourse" component={AddCourse}></Route>
        <Route exact path="/course/:id" component={SingleCourse}></Route>
        <Route exact path="/updateCourse/:id" component={UpdateCourse}></Route>
      </div>
    </Router>
  );
}

export default App;
