import {createSlice} from "@reduxjs/toolkit";
// import profileArray from "../data/profile.json";

const profile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: '../../images/react3.jpg',
    bannerPicture: '../../images/banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '07/07/1968',
    dateJoined: '04/2009',
    tuits: 6114,
    followingCount: 340,
    followersCount: 223
}

const convertDateBack = (dateString) => {
    const dateArray = dateString.split('-');
    const converted = dateArray[1] + '/' + dateArray[2] +'/' + dateArray[0];
    return converted;
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = convertDateBack(action.payload.dateOfBirth);
            // state = action.payload;
            // return state;
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;