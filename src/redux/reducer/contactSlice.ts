import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactStateType } from "../../shared/type/contactStateType";

const initialState: contactStateType = {
  company: "",
  name: "",
  phone: "",
  email: "",
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    fillContact: (state, action: PayloadAction<contactStateType>) => {
      return {
        company: action.payload.company,
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      };
    },
  },
});
export const { fillContact } = contactSlice.actions;
export default contactSlice.reducer;
