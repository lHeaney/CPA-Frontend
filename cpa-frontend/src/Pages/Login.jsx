

export const Login = () =>
{
    return(
    <>
    <form name = "loginForm" method="RecordSearch" action={console.log()

    }>
            <table>
            <tbody>
                <tr>
                    <th>
                       <label>Username</label> <input name = "username"></input> 
                    </th>
                    
                </tr>
                <tr>
                   <td>
                        <label>Password</label> <input name = "password" type = "Password"></input> 
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <button type="submit">login</button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </form>
    
        
        
    </>
    )
}