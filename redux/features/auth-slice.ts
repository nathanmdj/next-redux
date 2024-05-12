import { createSlice, PayloadAction, nanoid} from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
}

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
}

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<string>)  => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: nanoid(),
          isModerator: false,
        },
      };
    },
    modToggle: (state) => {
      state.value.isModerator = !state.value.isModerator;
    }
  },
});

export const {login, logout, modToggle} = auth.actions;
export default  auth.reducer;