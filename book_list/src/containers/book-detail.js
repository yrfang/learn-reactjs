import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail!</div>
    );
  }
}

function mapDispatchToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapDispatchToProps)(BBookDetail);
