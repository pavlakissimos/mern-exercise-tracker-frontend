import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

interface User {
  _id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

const CreateExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState<User[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await axios.get("http://localhost:8000/users");
        setUsers(users.data);
        setUsername(users.data[0].username);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsers();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      axios.post("http://localhost:8000/exercises/add", { username, description, duration, date });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container max-w-3xl mx-auto">
      <h3 className="w-full flex justify-center font-medium text-gray-800 text-lg mb-8 md:mb-10">
        Create New Exercise Log
      </h3>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-baseline mb-4">
          <label htmlFor="username" className="w-2/6 md:w-1/6">
            Username:
          </label>
          <select
            name="username"
            id="username"
            className="bg-gray-200 border-2 border-gray-200 rounded outline-none px-5 py-1 ml-4"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUsername(e.target.value)}
            required
          >
            {users.map(user => (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-baseline mb-4">
          <label htmlFor="date" className="mb-1 w-2/6 md:mb-0 md:w-1/6">
            Date:
          </label>
          <DatePicker
            className="w-32 md:w-2/4 md:w-auto bg-gray-200 border-2 border-gray-200 rounded outline-none px-5 py-1 ml-4"
            selected={date}
            onChange={(date: Date) => setDate(date)}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <label htmlFor="duration" className="mb-1 md:mb-0 md:w-1/6">
            Duration:
          </label>
          <input
            type="number"
            name="duration"
            value={duration}
            className="md:w-2/4 bg-gray-200 border-2 border-gray-200 rounded outline-none px-4 py-1 md:ml-4"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDuration(+e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start mb-4">
          <label htmlFor="description" className="mb-1 md:mb-0 md:w-1/6">
            Description:
          </label>
          <textarea
            name="description"
            className="md:w-3/6 bg-gray-200 border-2 border-gray-200 rounded outline-none px-4 py-1 md:ml-4"
            rows={5}
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
