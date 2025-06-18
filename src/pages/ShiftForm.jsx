import React, { useState } from "react";

export default function ShiftForm({ onSave, existing, index, onCancel }) {
  const [data, setData] = useState(
    existing || { name: "", role: "", day: "", start: "", end: "" }
  );
  const [error, setError] = useState("");

  const roles = ["Developer", "Designer", "QA", "Manager"];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, role, day, start, end } = data;
    if (!name || !role || !day || !start || !end)
      return setError("All fields are required.");
    if (end <= start)
      return setError("End time must be later than start time.");
    onSave(data, index);
    if (!existing) setData({ name: "", role: "", day: "", start: "", end: "" });
    if (onCancel) onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <input
          placeholder="Employee Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="p-2 border rounded"
        />
        <select
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
          className="p-2 border rounded cursor-pointer"
        >
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <select
          value={data.day}
          onChange={(e) => setData({ ...data, day: e.target.value })}
          className="p-2 border rounded  cursor-pointer"
        >
          <option value="">Select Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <input
          type="time"
          value={data.start}
          onChange={(e) => setData({ ...data, start: e.target.value })}
          className="p-2 border rounded "
        />
        <input
          type="time"
          value={data.end}
          onChange={(e) => setData({ ...data, end: e.target.value })}
          className="p-2 border rounded "
        />
      </div>
      <div className="mt-2 flex space-x-2">
        <button className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-400 hover:scale-103">
          {existing ? "Save" : "Add Shift"}
        </button>
        {existing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded "
          >
            Cancel
          </button>
        )}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
