import React, { useState } from "react";
import ShiftForm from "./ShiftForm";

export default function ShiftTable({ shifts, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(null);

  return (
    <div className="overflow-x-auto mb-20">
      <table className="w-full text-left border-collapse bg-white rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {["Name", "Role", "Day", "Start", "End", "Actions"].map((h) => (
              <th key={h} className="border-b px-4 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shifts.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No shifts available. Please add a new shift.
              </td>
            </tr>
          ) : (
            shifts.map((s, i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >
                {editing === i ? (
                  <td colSpan="6">
                    <ShiftForm
                      existing={s}
                      index={i}
                      onSave={(data, idx) => {
                        onUpdate(idx, data);
                        setEditing(null);
                      }}
                      onCancel={() => setEditing(null)}
                    />
                  </td>
                ) : (
                  <>
                    <td className="px-4 py-2">{s.name}</td>
                    <td className="px-4 py-2">{s.role}</td>
                    <td className="px-4 py-2">{s.day}</td>
                    <td className="px-4 py-2">{s.start}</td>
                    <td className="px-4 py-2">{s.end}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => setEditing(i)}
                        className="px-3 py-1 my-3 bg-blue-100 text-blue-700 border border-blue-300 rounded-md hover:bg-blue-200 transition duration-150 text-sm  cursor-pointer"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(i)}
                        className="px-3 py-1 bg-red-100 text-red-700 border border-red-300 rounded-md hover:bg-red-200 transition duration-150 text-sm  cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
