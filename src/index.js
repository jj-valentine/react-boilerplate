import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import SampleContainer from './containers/SampleContainer';
import store from './store';


render(
  <Provider store={ store }>
    <SampleContainer />
  </Provider>,
  document.getElementById('root')
);
