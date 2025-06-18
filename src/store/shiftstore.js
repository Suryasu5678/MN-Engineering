import { create } from 'zustand'


const savedShifts = JSON.parse(localStorage.getItem('shifts') || '[]')

export const useShiftStore = create((set) => ({
    shifts: savedShifts,
    addShift: (shift) =>
        set((state) => {
            const updated = [...state.shifts, shift]
            localStorage.setItem('shifts', JSON.stringify(updated))
            return { shifts: updated }
        }),
    updateShift: (index, updatedShift) =>
        set((state) => {
            const updated = [...state.shifts]
            updated[index] = updatedShift
            localStorage.setItem('shifts', JSON.stringify(updated))
            return { shifts: updated }
        }),
    deleteShift: (index) =>
        set((state) => {
            const updated = state.shifts.filter((_, i) => i !== index)
            localStorage.setItem('shifts', JSON.stringify(updated))
            return { shifts: updated }
        }),
}))
