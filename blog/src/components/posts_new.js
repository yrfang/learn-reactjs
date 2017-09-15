import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <Field
          name="title"
          component={}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostNewForm' //unique string
})(PostsNew);
