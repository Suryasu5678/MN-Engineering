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

  const getSelectClasses = (value) =>
    `px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full sm:w-auto cursor-pointer ${
      value ? "bg-yellow-100" : "bg-white"
    }`;

  const isFilterActive = role || day;

  const handleClear = () => {
    setRole("");
    setDay("");
  };

  return (
    <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-100 p-4 rounded-xl shadow-inner flex flex-col sm:flex-row sm:items-center gap-4">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className={getSelectClasses(role)}
      >
        {roles.map((r) => (
          <option key={r} value={r}>
            {r || "Select Role"}
          </option>
        ))}
      </select>

      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className={getSelectClasses(day)}
      >
        {days.map((d) => (
          <option key={d} value={d}>
            {d || "Select Day"}
          </option>
        ))}
      </select>

      {isFilterActive && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-800 font-medium">
            Filters applied
          </span>
          <button
            onClick={handleClear}
            className="text-red-600 text-sm px-3 py-1 border border-red-300 rounded-md hover:bg-red-100 transition"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
