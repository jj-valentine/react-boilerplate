import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SampleContainer from './containers/SampleContainer.jsx';
import store from './store';


ReactDOM.render(
  <Provider store={ store }>
    <SampleContainer />
  </Provider>,
  document.getElementById('root')
);
