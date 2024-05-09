import { gql } from "@apollo/client"

export const LOGIN = gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password) {
    email,
    id
  }
}
`

export const LOGOUT = gql`
mutation Logout {
  logout {
    email
  }
}
`

export const SIGNUP = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id,
      email
    }
  }
`