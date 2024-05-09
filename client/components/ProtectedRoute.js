import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const {loading, data} = useQuery(GET_USER)

  if(loading) {
    return null
  }

  if(!data?.user) {
    return <Navigate to='/login' />
  }

  return props.children
};
