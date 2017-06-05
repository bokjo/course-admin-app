/**
 * Created by bstojchevski on 5/30/2017.
 */
import * as types   from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.INSERT_AUTHOR:
      return [...state, Object.assign({}, action.authorId)];
    // const newState =  [ {course: action.course}, ...state ];
    // return newState;

    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
