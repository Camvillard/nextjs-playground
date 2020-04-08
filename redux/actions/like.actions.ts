export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const incrementLike = () => ({
  type: ADD_LIKE,
});

export const decrementLike = () => ({
  type: REMOVE_LIKE,
});
