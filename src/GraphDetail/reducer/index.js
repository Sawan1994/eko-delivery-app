import { ADD_NODE, ADD_EDGE } from "../actions/actionTypes";

const initialState = {
  nodesList: ["A", "B", "C", "D"],
  edgesList: [
    { source: "A", destination: "B", weight: 1 },
    { source: "A", destination: "C", weight: 2 },
    { source: "A", destination: "D", weight: 2 },
    { source: "B", destination: "C", weight: 4 },
    { source: "B", destination: "D", weight: 1 },
    { source: "C", destination: "D", weight: 3 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE:
      return { ...state, nodesList: [...state.nodesList, action.data] };
    case ADD_EDGE:
      return { ...state, edgesList: [...state.edgesList, action.data] };
    default:
      return state;
  }
};
