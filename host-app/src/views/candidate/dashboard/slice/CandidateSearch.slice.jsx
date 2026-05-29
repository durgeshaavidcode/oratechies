import { createSlice } from "@reduxjs/toolkit";

export const CandidateSearchSlice = createSlice({  
    name: "candidateSearch",
    initialState: {
        searchTerm: "",
        location: "",  
        jobType: "",
        experienceLevel: "",
    }, 
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setLocation(state, action) {
            state.location = action.payload;
        },
        setJobType(state, action) {
            state.jobType = action.payload;
        },
        setExperienceLevel(state, action) {
            state.experienceLevel = action.payload;
        },
    },
});

export const { setSearchTerm, setLocation, setJobType, setExperienceLevel } = CandidateSearchSlice.actions;
export default CandidateSearchSlice.reducer;