import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { isExpired } from "react-jwt";

const token = Cookies.get("x-token") || null;

if (isExpired(token)) Cookies.remove("x-token");

const storedAccessToken = Cookies.get("x-token") || null;

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

      Cookies.set("x-token", action.payload, {
        expires: 1,
        sameSite: "Strict",
      });
      // document.cookie = `x-token=${action.payload}; path=/; max-age=86400; Secure; SameSite=Strict`;
    },

    clearAccessToken: (state) => {
      state.accessToken = null;
      Cookies.remove("x-token");
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
