import React, { useState } from "react";

export default function ShiftForm({ onSave, existing, index, onCancel }) {
  const [data, setData] = useState(
    existing || { name: "", role: "", day: "", start: "", end: "" }
  );
  const [errors, setErrors] = useState({});

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
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!role) newErrors.role = "Role is required.";
    if (!day) newErrors.day = "Day is required.";
    if (!start) newErrors.start = "Start time is required.";
    if (!end) newErrors.end = "End time is required.";
    else if (start && end && end <= start)
      newErrors.end = "End time must be later than start time.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onSave(data, index);
    if (!existing) setData({ name: "", role: "", day: "", start: "", end: "" });
    setErrors({});
    if (onCancel) onCancel();
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl hover:shadow-2xl transition-all duration-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="flex flex-col">
          <input
            placeholder="Employee Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.name && (
            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col">
          <select
            value={data.role}
            onChange={(e) => setData({ ...data, role: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            <option value="">Select Role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && (
            <span className="text-red-500 text-xs mt-1">{errors.role}</span>
          )}
        </div>

        <div className="flex flex-col">
          <select
            value={data.day}
            onChange={(e) => setData({ ...data, day: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          >
            <option value="">Select Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.day && (
            <span className="text-red-500 text-xs mt-1">{errors.day}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="time"
            value={data.start}
            onChange={(e) => setData({ ...data, start: e.target.value })}
            onClick={(e) => e.target.showPicker()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          />

          {errors.start && (
            <span className="text-red-500 text-xs mt-1">{errors.start}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="time"
            value={data.end}
            onChange={(e) => setData({ ...data, end: e.target.value })}
            onClick={(e) => e.target.showPicker()}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
          />
          {errors.end && (
            <span className="text-red-500 text-xs mt-1">{errors.end}</span>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-3">
        <button className="px-5 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-500 transition duration-150 cursor-pointer">
          {existing ? "Save" : "Add Shift"}
        </button>
        {existing && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 transition duration-150 cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
