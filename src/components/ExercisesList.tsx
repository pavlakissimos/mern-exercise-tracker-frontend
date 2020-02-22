import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import ExerciseCard from "./ExerciseCard";

import { Exercise } from "../utils/enum.utils";

const ExercisesList = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchExercises() {
      try {
        const fetchedExercises = await axios.get("http://localhost:8000/exercises");
        setExercises(fetchedExercises.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchExercises();
  }, [history.location.pathname]);

  async function deleteExercise(id: string) {
    try {
      const newExercises = exercises.filter((exercise: Exercise) => exercise._id !== id);

      await axios.delete(`http://localhost:8000/exercises/delete/${id}`);
      setExercises(newExercises);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
      {exercises.map((exercise: Exercise) => (
        <div key={exercise._id} className="col-span-1">
          <ExerciseCard exercise={exercise} deleteExercise={() => deleteExercise(exercise._id)} />
        </div>
      ))}
    </div>
  );
};

export default ExercisesList;
