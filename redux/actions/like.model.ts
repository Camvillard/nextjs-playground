import { ADD_LIKE, REMOVE_LIKE } from "./like.actions";

type AddLikeAction = {
  type: typeof ADD_LIKE;
  payload: number;
};

type RemoveLikeAction = {
  type: typeof REMOVE_LIKE;
};

export type likeActionsTypes = AddLikeAction | RemoveLikeAction;

export type likesState = {
  likes: number;
};
