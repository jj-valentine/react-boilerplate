import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './../actions/actions';
import SampleComponent from '../components/SampleComponent.jsx';


const mapStateToProps = store => ({
  // add pertinent state here
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

class SampleContainer extends Component {
  render() {
    return (
      <SampleComponent />
    );
  };

}

// export default SampleContainer;
export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
