import { likeActionsTypes, likesState } from "../actions/like.model";
import { ADD_LIKE, REMOVE_LIKE } from "../actions/like.actions";

const initialLikeState: likesState = { likes: 0 };

const likesReducer = (state = initialLikeState, action: likeActionsTypes) => {
  switch (action.type) {
    case ADD_LIKE:
      return { ...state, likes: state.likes + 1 };
    case REMOVE_LIKE:
      return { ...state, likes: state.likes - 1 };
    default:
      return { ...state };
  }
};

export default likesReducer;
