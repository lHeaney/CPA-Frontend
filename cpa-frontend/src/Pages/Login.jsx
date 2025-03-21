
import { RecordSearch } from "./RecordSearch"
import { userContext } from "../Context"

export const Login = () =>
{
    return(
    <>
    <form 
    name = "loginForm" 
      action="/RecordSearch"
    >
            <table>
            <tbody>
                <tr>
                    <th>
                       <label>Username</label> <input name = "username" id = "usernameField" 
                       ></input> 
                    </th>
                    
                </tr>
                <tr>
                   <td>
                        <label>Password</label> <input name = "password" type = "Password"  id = "passwordField"></input> 
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <button type="submit" onClick={()=>{

                        }}>login</button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </form>
    
        
        
    </>
    )
}