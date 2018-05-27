import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import sampleReducer from './reducers/sampleReducer';


const reducers = combineReducers({
  sample: sampleReducer
});

export const store = createStore(
  reducers,
  composeWithDevTools()
);
