import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const getTokenFromCookies = (): string | null => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("x-token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

const storedAccessToken = getTokenFromCookies();

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: storedAccessToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      document.cookie = `x-token=${action.payload}; path=/; max-age=86400; Secure; SameSite=Strict`;
    },

    clearAccessToken: (state) => {
      state.accessToken = null;
      document.cookie = `x-token=; path=/; max-age=0`; 
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
