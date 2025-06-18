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
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center mb-10  bg-gradient-to-r from-blue-600 to-indigo-600 text-white  px-6 py-8 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">🗓️ Shift Scheduler</h1>
        <button
          onClick={onLogout}
          className="px-5 py-2 rounded-md bg-[#DC2626] hover:bg-[#B91C1C] border-white-500 border-1 text-white-700 font-semibold shadow cursor-pointer transition duration-200"
        >
          Logout
        </button>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <ShiftForm onSave={addShift} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <FilterBar
          role={filterRole}
          day={filterDay}
          setRole={setFilterRole}
          setDay={setFilterDay}
        />
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md">
        <ShiftTable
          shifts={filtered}
          onUpdate={updateShift}
          onDelete={deleteShift}
        />
      </div>
    </div>
  );
}
