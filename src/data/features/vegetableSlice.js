import { createSlice } from "@reduxjs/toolkit";
import { vegetables } from "../products.js";


export const vegetableSlice = createSlice({
	name: 'vegetable slice',
	initialState: vegetables,
	reducers: {
		deleteVegetable: (state, action) => {
			// state är vegetables (en slice av hela state)
			// Antingen ändrar vi i listan direkt (typ splice) - det fungerar eftersom Redux tollkit använder immer internt
			//  Eller så returnerar vi det nya värdet direkt
			return state.filter(v => v.id !== action.payload)
		}
	}
})
export const { deleteVegetable } = vegetableSlice.actions
export default vegetableSlice.reducer
