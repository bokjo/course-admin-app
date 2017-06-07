/**
 * Created by bstojchevski on 5/30/2017.
 */
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer                               from "../reducers";
import reduximmutableStateInvariant              from "redux-immutable-state-invariant";
import thunk                                     from "redux-thunk";

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store =  createStore(
    rootReducer,
    initialState,
    /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunk, reduximmutableStateInvariant())
    )
  );
  /* eslint-enable */

  return store;
}
