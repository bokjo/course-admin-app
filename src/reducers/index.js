/**
 * Created by bstojchevski on 5/30/2017.
 */
import { combineReducers } from "redux";
import courses             from "./courseReducer";
import authors             from "./authorReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
