import { useMutation, useQuery } from "@apollo/client"
import { SIGNUP } from "../mutations"
import AuthForm from "./AuthForm";
import { Navigate, useNavigate } from "react-router-dom";
import { GET_USER } from "../queries";

export default function Signup() {
  const [signup, {error, loading}] = useMutation(SIGNUP)
  const userData = useQuery(GET_USER)
  const navigate = useNavigate()

  if(userData?.data?.user) {
    return <Navigate to='/' />
  }

  function onSubmit({email, password}) {
    signup({
      variables: {email, password},
      refetchQueries: [GET_USER]
    }).then(() => {
      navigate('/')
    }).catch(() => {

    })
  }

  return <div>
    <AuthForm title='Signup' onSubmit={onSubmit} loading={loading} error={error?.message} />
  </div>
};
