import { combineReducers } from "redux";

import { subjectsReducer } from "./subjects/subjects.reducer";

export const rootReducer = combineReducers({
  subjects: subjectsReducer,
});