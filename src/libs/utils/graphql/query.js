import { gql } from 'apollo-boost';

export const getData = gql`
query {
    getUser{
      inputEmail
      selectRole
    }
  }
 `

export const getRoleData = gql`
query getRole($data:Role){
    getRole(data:$data)
    {
      read
      write
      delete
      error
      role
    }
}`


export const postData = gql`
mutation postData($data:UserDetails){
  postData(data:$data){
    inputMsg
    roleMsg
    error
  }
}`
