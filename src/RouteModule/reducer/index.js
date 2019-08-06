import { SET_ROUTE } from "../actions/actionTypes";

const initialState = {
  route: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, route: action.data };
    default:
      return state;
  }
};
