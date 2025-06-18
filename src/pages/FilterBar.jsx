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
    <div className="mb-4 flex space-x-4">
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border rounded cursor-pointer"
      >
        {roles.map((r) => (
          <option key={r} value={r}>
            {r || "All Roles"}
          </option>
        ))}
      </select>
      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="p-2 border rounded  cursor-pointer"
      >
        {days.map((d) => (
          <option key={d} value={d}>
            {d || "All Days"}
          </option>
        ))}
      </select>
    </div>
  );
}
