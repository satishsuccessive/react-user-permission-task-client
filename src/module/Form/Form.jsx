import React, { Component } from 'react';
import {InputField, SubmitButton } from '../../component'
import {postData} from '../../libs/utils/graphql';
import { Mutation } from 'react-apollo';
import FormContainer from './style';
import { Switch, Route, Router, Redirect, useLocation } from 'react-router-dom';





class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            inputEmail: '',
            selectRole: '',
        //    redirectToReferrer: false,
        }
    }
    hadleTraineeEmail = (e) => {
        this.setState({inputEmail: e.target.value})
 
    }
    // hadleReviewerEmail = (e) => {
    //     this.setState({reviewerEmail: e.target.value})
 
    // }
    handleChange = (e) => {
        this.setState({selectRole: e.target.value})
 
    }

    // handleSubmit = (post,data) => {
    //   post();
    //   console.log(data,'yo yo ');

    // if (data !== undefined){
    //     console.log(data.postData,'validdddddd')

    // if (data.postData === true) {
    // this.props.history.push('/permission');
    // }
    // }
    // }
    render(){
        const {inputEmail, reviewerEmail, selectRole} = this.state;
        console.log(inputEmail);
        console.log(selectRole);
    return (
        <>
        <FormContainer>
        <Mutation mutation={postData} variables={{data: this.state}}>
            {(post, { data }) => {
                console.log(data,"/,<<<<<")
                return (
                    <>
                <p className="text-input"><InputField type="text" placeholder="Enter Trainee Email" value={inputEmail} onChange={this.hadleTraineeEmail} /><label>Email Id </label>
                {data !== undefined && <span>{data.postData.inputMsg}</span>}</p>
                <p className="text-input"> <select value={this.state.selectRole} onChange={this.handleChange}>
                <option value="">Select Role</option>
            <option value="trainee">Trainee</option>
            <option value="trainer">Trainer</option>
            <option value="head_trainee">Head Trainee</option>
          </select><label>Role</label> 
          {data !== undefined && <span>{data.postData.roleMsg}</span>}
          </p>
          {/* onClick={(e) => this.handleSubmit(post,data)} */}
                <SubmitButton onClick={post}>Submit</SubmitButton>
                {data !== undefined && data.postData.inputMsg === null && data.postData.roleMsg === null &&  <Redirect to={{pathname:"/permission",state:true}} />}
                </>
                )
            }}
        </Mutation>
        </FormContainer>
        </>
    )
}
}

export default Form;
