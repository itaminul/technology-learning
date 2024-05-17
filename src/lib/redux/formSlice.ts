import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  RegisterFormState,
  RegisterFormData,
} from "@/app/auth/signup/signupTypes";



const initialState: RegisterFormState = {
  status: "idle",
  error: null,
  forms: [],
};

export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData: RegisterFormData) => {
    const response = await axios.post("http://localhost:3000/forms", formData);
    return response.data;
  }
);

export const updateForm = createAsyncThunk(
  "form/updateForm",
  async (formData: FormData) => {
    const response = await axios.patch(
      `http://localhost:3000/forms/${formData.id}`,
      formData
    );
    return response.data;
  }
);

export const deleteForm = createAsyncThunk(
  "form/deleteForm",
  async (id: string) => {
    await axios.delete(`http://localhost:3000/forms/${id}`);
    return { id };
  }
);

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        submitForm.fulfilled,
        (state, action: PayloadAction<RegisterFormData>) => {
          state.status = "succeeded";
          state.forms.push(action.payload);
        }
      )
      .addCase(submitForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        //state.error = action.error.message;
      })
      .addCase(updateForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateForm.fulfilled,
        (state, action: PayloadAction<RegisterFormData>) => {
          state.status = "succeeded";
          const index = state.forms.findIndex(
            (form) => form.id === action.payload.id
          );
          if (index !== -1) {
            state.forms[index] = action.payload;
          }
        }
      )
      .addCase(updateForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
      //  state.error = action.error.message;
      })
      .addCase(deleteForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteForm.fulfilled,
        (state, action: PayloadAction<{ id: string }>) => {
          state.status = "succeeded";
          state.forms = state.forms.filter(
            (form) => form.id !== action.payload.id
          );
        }
      )
      .addCase(deleteForm.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
      //  state.error = action.error.message;
      });
  },
});

export default formSlice.reducer;
