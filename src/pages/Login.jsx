import React, { useState } from "react";
import bgImage from "../assets/astronaut-destiny-walking-the-unknown-2r-3840x2160.jpg";


export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "admin123") {
      onLogin();
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 w-full max-w-md py-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex flex-col justify-center items-center"
      >
        <h2 className="text-xl text-center  text-amber-200 font-bold my-7">
          Login
        </h2>
        <div className="text-white">
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="p-2 w-full border rounded mb-5"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="mb-2 p-2 w-full border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-[70%] py-2 bg-[#2595d2] text-white rounded cursor-pointer hover:bg-blue-400 mt-8 "
        >
          <span className="">Sign In </span>
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </div>
  );
}
