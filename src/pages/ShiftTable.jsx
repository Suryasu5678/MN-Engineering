import React, { useState } from "react";
import ShiftForm from "./ShiftForm";

export default function ShiftTable({ shifts, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(null);

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          {["Name", "Role", "Day", "Start", "End", "Actions"].map((h) => (
            <th key={h} className="border-b px-2 py-1">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {shifts.map((s, i) => (
          <tr key={i} className="border-b">
            {editing === i ? (
              <td colSpan="6">
                <ShiftForm
                  existing={s}
                  index={i}
                  onSave={(data, idx) => onUpdate(idx, data)}
                  onCancel={() => setEditing(null)}
                />
              </td>
            ) : (
              <>
                <td className="px-2 py-1">{s.name}</td>
                <td className="px-2 py-1">{s.role}</td>
                <td className="px-2 py-1">{s.day}</td>
                <td className="px-2 py-1">{s.start}</td>
                <td className="px-2 py-1">{s.end}</td>
                <td className="px-2 py-1 space-x-2">
                  <button
                    onClick={() => setEditing(i)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button onClick={() => onDelete(i)} className="text-red-600">
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
