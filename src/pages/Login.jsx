import React, { useState } from "react";
import bgImage from "../assets/astronaut-destiny-walking-the-unknown-2r-3840x2160.jpg";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUser = user.trim();
    const trimmedPass = pass.trim();

    if (!trimmedUser) {
      setError("Username is required.");
      return;
    }

    if (!trimmedPass) {
      setError("Password is required.");
      return;
    }

    if (trimmedUser === "admin" && trimmedPass === "admin123") {
      setError("");
      onLogin();
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
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
        <h2 className="text-xl text-center text-amber-200 font-bold my-7">
          Login
        </h2>

        <div className="text-white w-full">
          {/* Username (no space allowed) */}
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUser(e.target.value.replace(/\s/g, ""))}
            className="p-2 w-full border rounded mb-5"
          />

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="p-2 w-full border rounded pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2"
              tabIndex={-1}
            >
              {showPassword ? (
                // Eye Slash
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18M15.75 15.75A5.25 5.25 0 018.25 8.25M9.566 5.566A9.005 9.005 0 0112 3c4.97 0 9 7.5 9 7.5a15.977 15.977 0 01-2.796 3.908M6.714 6.714A15.977 15.977 0 003 10.5S7.03 18 12 18c1.273 0 2.49-.396 3.534-1.07"
                  />
                </svg>
              ) : (
                // Eye
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12S6.75 4.5 12 4.5 21.75 12 21.75 12 17.25 19.5 12 19.5 2.25 12 2.25 12z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-[70%] py-2 bg-[#2595d2] text-white rounded cursor-pointer hover:bg-blue-400 mt-8"
        >
          <span>Sign In</span>
        </button>

        {error && <p className="mt-2 text-red-500 font-bold">{error}</p>}
      </form>
    </div>
  );
}
