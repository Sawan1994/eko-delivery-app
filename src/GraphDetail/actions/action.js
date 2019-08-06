import { ADD_NODE, ADD_EDGE } from "./actionTypes";

export const onAddNode = node => ({
  type: ADD_NODE,
  data: node
});

export const addEdge = edge => ({
  type: ADD_EDGE,
  data: edge
});
