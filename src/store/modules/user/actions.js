import { ADD_COMMENT } from "./actionsTypes.js";

export const addComment = (updatedUser) => ({
  type: ADD_COMMENT,
  updatedUser,
});
