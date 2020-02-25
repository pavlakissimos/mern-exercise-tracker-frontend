import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users/add", { username });
      setUsername("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container max-w-3xl mx-auto">
      <h3 className="w-full flex justify-center font-medium text-gray-800 text-lg mb-8 md:mb-10">
        Create New User
      </h3>
      <form data-testid="create-user-form" className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-baseline mb-4">
          <label htmlFor="username" className="w-2/6 md:w-1/6 mb-1 md:mb-0">
            Username:
          </label>
          <input
            data-testid="user-input"
            type="text"
            name="username"
            value={username}
            className="md:w-2/4 bg-gray-200 border-2 border-gray-200 rounded outline-none px-4 py-1 mb-4 md:ml-4"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <button
            data-testid="submit-user"
            type="submit"
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 md:ml-4 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
