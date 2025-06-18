import React, { useState } from "react";
import ShiftTable from "./ShiftTable";
import FilterBar from "./FilterBar";
import ShiftForm from "./ShiftForm";
import { useShiftStore } from "../store/shiftstore";

export default function Dashboard({ onLogout }) {
  const { shifts, addShift, updateShift, deleteShift } = useShiftStore();
  const [filterRole, setFilterRole] = useState("");
  const [filterDay, setFilterDay] = useState("");

  const filtered = shifts.filter(
    (s) =>
      (!filterRole || s.role === filterRole) &&
      (!filterDay || s.day === filterDay)
  );

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shift Scheduler</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-400"
        >
          Logout
        </button>
      </header>
      <ShiftForm onSave={addShift} />
      <FilterBar
        role={filterRole}
        day={filterDay}
        setRole={setFilterRole}
        setDay={setFilterDay}
      />
      <ShiftTable
        shifts={filtered}
        onUpdate={updateShift}
        onDelete={deleteShift}
      />
    </div>
  );
}
