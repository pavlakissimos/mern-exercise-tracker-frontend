import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <br />
        <div className="container mx-auto px-4 sm:px-0">
          <Route exact path="/" component={ExercisesList} />
          <Route exact path="/edit/:id" component={EditExercise} />
          <Route exact path="/create" component={CreateExercise} />
          <Route exact path="/user" component={CreateUser} />
        </div>
      </Router>
    </div>
  );
};

export default App;
