import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './../actions/actions';
import SampleComponent from './ExampleComponent';


const mapStateToProps = store => ({
  // add pertinent state here
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

class SampleContainer extends Component {
  render = () => {
    <SampleComponent />
  };

}


export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
