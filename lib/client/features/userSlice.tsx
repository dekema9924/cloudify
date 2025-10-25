import { UserProfile } from "@/app/dashboard/profile/page";
import { createSlice } from "@reduxjs/toolkit";



const initialState: UserProfile = {
    email: null,
    username: null,
    profileImage: null,
    _id: null,

};

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialState },
    reducers: {
        setUserProfile: (state, action) => {
            state.value = action.payload;
        },
        clearUserProfile: () => {
            return { value: initialState };
        },
    },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;