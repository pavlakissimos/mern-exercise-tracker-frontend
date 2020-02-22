import React from "react";

import { Exercise } from "./../utils/enum.utils";

interface ExerciseCardProps {
  exercise: Exercise;
  deleteExercise: () => void;
}

function ExerciseCard({ exercise, deleteExercise }: ExerciseCardProps) {
  return (
    <div className="max-w-md w-full lg:max-w-full lg:flex mx-auto">
      <div className="min-w-full border-r border-b border-l border-t border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal cursor-pointer">
        <div className="mb-8">
          <div className="text-gray-900 text-xl mb-2">
            {exercise.user.username} -{" "}
            <span className="font-semibold">{exercise.duration} minutes</span>
          </div>
          <p className="text-gray-700 text-base truncate">{exercise.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Created At:</p>
            <p className="text-gray-600">{new Date(exercise.createdAt).toLocaleDateString()}</p>
          </div>
          <button
            type="button"
            className="bg-red-600 text-sm text-gray-300 px-4 rounded"
            onClick={deleteExercise}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
