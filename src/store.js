import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import sampleReducer from './reducers/sampleReducer';

// here we combine all reducers we wish to use in our app by mapping them to a given key
const reducers = combineReducers({
  sample: sampleReducer
});

export const store = createStore(
  reducers,
  // composeWithDevTools()
);
