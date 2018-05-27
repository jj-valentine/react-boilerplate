import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import sampleReducer from './reducers/sampleReducer';

// here we combine all the reducers we wish to use in our app
const reducers = combineReducers({
  sample: sampleReducer
});

export const store = createStore(
  reducers,
  // composeWithDevTools()
);
