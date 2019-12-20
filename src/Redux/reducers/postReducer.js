import {
  ADD_USER,
  REG_USER,
  LOGIN_USER,
  ADD_PROJECT,
  GET_PROJECTS,
  GET_USERS,
  UPDATE_PROJECT,
  UPDATE_USER,
  DELETE_PROJECT
} from "../actions/actionsTypes";

const initialState = {
  users: [],
  projects: []
};

export default function(state = initialState, action) {
  console.log("PostReducer");
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case REG_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case LOGIN_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id !== action.payload.id),
          action.payload
        ]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(item => item.id !== action.payload.id),
          action.payload
        ]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id === action.payload.id),
          action.payload
        ]
      };
    default:
      return state;
  }
}
