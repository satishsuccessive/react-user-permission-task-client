import { gql } from 'apollo-boost';

export const getData = gql`
query {
    getUser{
      traineeEmail
      reviewerEmail
    }
  }
  `


export const postData = gql`
mutation postData($data:UserDetails){
  postData(data:$data)
}`
