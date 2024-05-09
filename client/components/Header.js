import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT } from "../mutations";
import { GET_USER } from "../queries";

export default function Header(props) {
    const {loading, data, refetch} = useQuery(GET_USER)
    const [logout, logoutData] = useMutation(LOGOUT)
    const navigate = useNavigate()

    function onLogout() {
      logout({
        refetchQueries: [{
          query: GET_USER
        }]
      }).then(() => {
        navigate('/login')
      })
    }

    if(loading) {
      return null
    }

    return <div style={{padding: 10, display: 'flex', gap: 20, justifyContent: 'end'}}>
      {
        data?.user ? <button disabled={logoutData.loading}  onClick={onLogout} className="btn">{
          logoutData.loading ? 'Signing out...' : 'Sign out'}</button>
        :
        <>
        <Link to='/login'>
        <button className="btn">Sign in</button>
        </Link>
        <Link to='/signup'>
        <button className="btn">Sign up</button>
        </Link>
        
        </>
      }
    </div>
};
