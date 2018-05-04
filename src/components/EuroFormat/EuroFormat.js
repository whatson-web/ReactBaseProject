import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class EuroFormat extends Component {
  render() {

    if(!this.props.value) return null;

    return (
        <NumberFormat value={this.props.value} displayType={'text'} thousandSeparator={true} prefix={'€'} />
    )
  }
}

export default EuroFormat;
