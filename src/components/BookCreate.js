import React from 'react'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBook } from '../actions';

class BookCreate extends React.Component {
  onSubmit = async formValues => {
    await this.props.createBook(formValues);

    this.props.history.push('/');
  }

  renderInput = ({input, label, meta}) => {
    const isValid = meta.error && meta.touched ? 'is-invalid' : '';

    return (
      <div className='form-group'>
        <label>{label}</label>
        <input {...input} type='text' className={`form-control ${isValid}`} />
        <div className="invalid-feedback">
          {meta.error}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to='/' className='btn btn-outline-secondary mb-4'>Back</Link>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='title' label='Title' component={this.renderInput} />
          <Field name='desc' label='Description' component={this.renderInput} />
          <button className='btn btn-primary'>
            Create
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.desc) {
    errors.desc = 'You must enter a description';
  }

  return errors;
};

export default connect(
  null,
  { createBook }
)(reduxForm({
  form: 'bookCreate',
  validate
})(BookCreate));
