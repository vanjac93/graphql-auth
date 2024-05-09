import { useMutation, useQuery } from "@apollo/client"
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { LOGIN } from "../mutations";
import { GET_USER } from "../queries";
import AuthForm from "./AuthForm";

export default function Login(props) {
  const navigate = useNavigate()
  const [login, {loading, error}] = useMutation(LOGIN)
  const userData = useQuery(GET_USER)

  if(userData.loading) {
    return null
  }
  
  if(userData?.data?.user) {
    return <Navigate to='/' />
  }

  function handleSubmit({email, password}) {
    login({variables: {
      email, password
    }, refetchQueries: [GET_USER] }).then(() => {
      navigate('/')
    })
  }


  return <div>
    <AuthForm title='Login' onSubmit={handleSubmit} loading={loading} error={error} />
  </div>

};
