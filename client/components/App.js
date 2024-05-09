import { Navigate, Outlet } from "react-router-dom"
import Header from "./Header"
import { useQuery } from "@apollo/client"
import { GET_USER } from "../queries"

const App = () => {
  const {data} = useQuery(GET_USER)

  return <div style={{padding: '2rem'}}>
    <Header />
    <Outlet />
  </div>
}

export default App