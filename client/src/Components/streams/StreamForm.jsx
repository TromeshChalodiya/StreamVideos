import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderList = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderList} label='Title' />
        <Field
          name='description'
          component={this.renderList}
          label='Description'
        />
        <div>
          <button className='ui primary button'>Submit</button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = 'You must enter valid title';
  }
  if (!formValues.description) {
    error.description = 'You must enter valid description';
  }
  return error;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
