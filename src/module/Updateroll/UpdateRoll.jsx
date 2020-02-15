import React, { Component } from 'react';
import { InputField, SubmitButton } from '../../component'
import { postData } from '../../libs/utils/graphql';
import FormContainer from './style';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { withApollo } from 'react-apollo';
import ReactSnackBar from "react-js-snackbar";


const schema = yup.object().shape({
  selectRole: yup.string().required().label('Role'),
  inputEmail: yup.string().email().required().label('Email'),
});

class UpdateRoll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      selectRole: '',
      errors: '',
      disabled: 'disabled',
      Show: false,
      Showing: false
    }
  }
  handleValidate = () => {

    const { inputEmail, selectRole } = this.state;
    schema.validate(
      { inputEmail, selectRole },
      { abortEarly: false },
    )
      .then(() => {
        this.handleErrors(null);
        this.setState({ disabled: '' })
      })
      .catch((errors) => {
        this.handleErrors(errors);
      });
  }
  handleErrors = (errors) => {
    const parsedErrors = {};
    if (errors) {
      errors.inner.forEach((error) => {
        parsedErrors[error.path] = error.message;
      });
    }
    this.setState({
      errors: parsedErrors,
    })
  }

  hadleTraineeEmail = (e) => {
    this.setState({ inputEmail: e.target.value },
    () => this.handleValidate());

  }
  handleChange = (e) => {
    this.setState({ selectRole: e.target.value },
      () => this.handleValidate());

  }
  handleSubmit = (post, data) => {
    post();
  }
  show = (data) => {
    if (data.postData.error !== null) {
      if (this.state.Showing) return;

      this.setState({ Show: true, Showing: true });
      setTimeout(() => {
        this.setState({ Show: false, Showing: false });
      }, 2000);
    }
  };


  postData = async () => {
    const { inputEmail, selectRole } = this.state;
    const { client } = this.props;
    const post = { inputEmail, selectRole };
    const { data, error, loading } = await client.mutate({
      mutation: postData,
      variables: {
        data: post
      }
    })
  if(data.postData.error !== null) {
  this.show(data);
}
this.setState({ data })
      }


render(){
  const { inputEmail, data, reviewerEmail, selectRole, errors, disabled } = this.state;
  return (
    <>
      <FormContainer>
        <p>Insert Data</p>
        <p className="text-input"><InputField type="text" placeholder="Enter Trainee Email" value={inputEmail} onChange={this.hadleTraineeEmail} /><label>Email Id </label>
          <span>{errors.inputEmail}</span>
          {data !== undefined && <span>{data.postData.inputMsg}</span>}</p>
        <p className="text-input"> <select value={this.state.selectRole} onChange={this.handleChange}>
          <option value="">Select Role</option>
          <option value="trainee">Trainee</option>
          <option value="trainer">Trainer</option>
          <option value="head_trainer">Head Trainee</option>
        </select><label>Role</label>
          <span>{errors.selectRole}</span>
          {data && data.postData && data.postData.error &&
            <ReactSnackBar Show={this.state.Show}>
              {data.postData.error}
            </ReactSnackBar>
          }
        </p>
        <SubmitButton onClick={this.postData} >Update Role</SubmitButton>
        {data !== undefined && data.postData.error === null &&  <Redirect to={{pathname:"/read",state:true}} />}
      </FormContainer>
    </>
  )
}
}

export default withApollo(UpdateRoll);
