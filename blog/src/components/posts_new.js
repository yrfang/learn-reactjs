import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title for Posts"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="Categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  // if (values.title.length < 3) {
  //   erros.title = "Title must be at least 3 characters";
  // }
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, //validate: validate
  form: 'PostNewForm' //unique string
})(PostsNew);
