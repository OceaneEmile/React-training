"use client";

import { Mail, User2 } from "lucide-react";
import { useState } from "react";

export const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    onSubmit(values);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
      <label className="input input-bordered flex items-center gap-2">
        <Mail size={16} />
        <input name="email" type="email" className="grow" placeholder="email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <User2 size={16} />
        <input
          name="name"
          minLength={3}
          type="text"
          className="grow"
          placeholder="user"
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Logged in !</h2>
          <p>Email : {user.email}</p>
          <p>Name : {user.name}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => {
                setUser(null);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <LoginForm
        onSubmit={(values) => {
          setUser(values);
        }}
      />
    </div>
  );
}
