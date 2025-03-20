import axios from "axios"
import { useState } from "react"

export const NewRecord = () =>
    {
        const [record, setRecord] = useState({
            id:0, type:"personal", total_revenue:0, taxes_owed:0, taxes_paid:0, status:"unfiled"
        }
        )
        const set=key=>{
            return ({target:{value}})=>{
                setRecord(oldValues => ({...oldValues, [key]:value}))
            }
        }
     
        return(
        <>
         
            <form method = "post" action = {(data)=>axios.post("http://localhost:8080/records",
                {
                    id:record.id,
                    owner:record.owner,
                    type:record.type,
                    total_revenue:record.total_revenue,
                    taxes_owed:record.taxes_owed,
                    taxes_paid:record.taxes_paid,
                    status:record.status
                })

            }>
                <table>
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Type</th>
                            <th>Total Revenue</th>
                            <th>Taxes Owed</th>
                            <th>Taxes Paid</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input name="owner" onChange={set('owner')}></input></td>
                            <td>
                                <select name="type" onChange={set('type')}>
                                <option value="Military">Military</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Business">Business</option>
                                    <option value="International">International</option>
                                </select>
                                
                                </td>
                            <td><input name="total_revenue" onChange={set('total_revenue')}type = "number"></input></td>
                            <td><input name="taxes_owed" onChange={set('taxes_owed')}type = "number"></input></td>
                            <td><input name="taxes_paid" onChange={set('taxes_paid')}type = "number"></input></td>
                            <td>
                                <select name="status" onChange={set('status')}>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Filed">Filed</option>
                                    <option value="Unfiled">Unfiled</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                 <button type="submit">Submit New Record</button>
            </form>
        </>
        )
    }
    const createRecord = async(record)=>{
        console.log("send record creation request");
        // await (await axios.post('http://localhost:8080/records',
        //     {
               
        //     }
        // )
    // )
    }