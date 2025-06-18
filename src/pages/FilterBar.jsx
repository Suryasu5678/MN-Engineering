import React from "react";

export default function FilterBar({ role, day, setRole, setDay }) {
  const roles = ["", "Developer", "Designer", "QA", "Manager"];
  const days = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-100 p-4 rounded-xl shadow-inner flex flex-wrap gap-4">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full sm:w-auto cursor-pointer"
      >
        {roles.map((r) => (
          <option key={r} value={r}>
            {r || "Select Roles"}
          </option>
        ))}
      </select>
      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full sm:w-auto cursor-pointer"
      >
        {days.map((d) => (
          <option key={d} value={d}>
            {d || "Select Days"}
          </option>
        ))}
      </select>
    </div>
  );
}
