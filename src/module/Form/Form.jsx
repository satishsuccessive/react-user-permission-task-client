import React, { Component } from 'react';
import { InputField, SubmitButton } from '../../component'
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { getRoleData } from '../../libs/utils/graphql/query';
import {FormContainer,SnackBarCon} from './style';
import { Switch, Route, Router, Redirect, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { withApollo } from 'react-apollo';
import ReactSnackBar from "react-js-snackbar";

const schema = yup.object().shape({
  selectRole: yup.string().required().label('Role'),
  inputEmail: yup.string().email().required().label('Email'),
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      selectRole: '',
      errors: '',
      data: '',
      Show: false,
      Showing: false
    }
  }

  handleValidateEmail = () => {

    const { inputEmail, selectRole } = this.state;
    schema.validate(
      { 
        inputEmail,
        selectRole,
      },
      { abortEarly: false },
    )
      .then(() => {
        this.handleErrors(null);
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
  show = () => {
    if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 2000);
  };
  
  hadleTraineeEmail = (e) => {
    this.setState({ inputEmail: e.target.value },
    () => this.handleValidateEmail());

  }

  handleChange = (e) => {
    this.setState({ selectRole: e.target.value },
      () => this.handleValidateEmail());
  }

  postData = async () => {
    const { inputEmail, selectRole } = this.state;
    const { client } = this.props;

    const { data, error, loading } = await client.query({
      query: getRoleData,
      variables: {
        data: {
          inputEmail,
          selectRole
        }
      }
    })

    if(data.getRole.error !== null){
      this.show();
     }
    this.setState({data})
  }


  render() {
    const { inputEmail, reviewerEmail, selectRole, errors, data, } = this.state;
    return (
      <>
        <FormContainer>
          <p className="text-input"><InputField type="text" placeholder="Enter Trainee Email" value={inputEmail}
            onChange={this.hadleTraineeEmail} /><label>Email Id </label>
            <span>{errors.inputEmail}</span>
          </p>
          <p className="text-input"> <select value={this.state.selectRole} onChange={this.handleChange}>
            <option value="">Select Role</option>
            <option value="trainee">Trainee</option>
            <option value="trainer">Trainer</option>
            <option value="head_trainee">Head Trainee</option>
          </select><label>Role</label>
            <span>{errors.selectRole}</span>
            {data.getRole && data.getRole.error &&    
          <ReactSnackBar Show={this.state.Show}>
            {data.getRole.error}
          </ReactSnackBar>
        }
          </p>
          <SubmitButton onClick={this.postData}>Submit</SubmitButton>
          {data.getRole && data.getRole.error === null && <Redirect to={{ pathname: "/permission", state: {flag:true,permission:data.getRole} }} />}
        </FormContainer>
      </>
    )
  }
}

export default withApollo(Form);
