/**
 * Created by bstojchevski on 6/1/2017.
 */
import * as types   from "../actions/actionTypes";
import initialState from "./initialState";

function actoinTypeEndsInSuccess(actionType) {
  return actionType.substring(actionType.length - 8) == "_SUCCESS";
}

export default function ajaxStatusReducer( state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR || actoinTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
