/**
 * Created by bstojchevski on 5/30/2017.
 */
import * as types from "./actionTypes";
import authorApi  from "../api/mockAuthorApi";
import { beginAjaxCall } from "./ajaxStatusActions";

export function insertAuthor(author) {
  return { type: types.INSERT_AUTHOR, author };
}

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() { // THUNK
  return dispatch => {           // THUNK BODY
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then((authors) => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw("Loading authors error occurred... ", error);
    });
  };
}
