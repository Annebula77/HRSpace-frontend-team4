import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { POST_FILE } from "../../utils/variables";
import { fileSchema } from "../../models/fileSchema";

export const uploadFile = createAsyncThunk(
  "files/upload",
  async (file: File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(POST_FILE, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      //  NOTE: если работать с моковым сервером, надо отключить проверку 
      // (строгая проверка на соответствие cхемам)
      const safeResponse = fileSchema.safeParse(data);
      if (!safeResponse.success) {
        console.error("Parsing errors", safeResponse.error);
        return rejectWithValue("Parsing errors");
      }
      return safeResponse.data.file_url;
    } catch (error) {

      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue("An unknown error occurred");
    }
  },
);

interface FilesState {
  url: string;
  loading: boolean;
}

const initialState: FilesState = {
  url: "",
  loading: false,
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadFile.fulfilled, (state, action: PayloadAction<string | null>) => {
      state.url = action.payload ?? '';
      state.loading = false;
    });
    builder.addCase(uploadFile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadFile.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default filesSlice.reducer;
