import axios from "axios"
import { useState } from "react";
import { Record } from "../models/Record";
import "../App.css";

export const RecordSearch = () =>
    {


        const [records, setRecords] = useState([]);

        const getRecords = async()=>{
            await axios.get('http://localhost:8080/records')
            .then(data=>{
                setRecords(data.data.map(input=>{
                    return {
                        record: new Record(input.id, input.owner, input.type, input.total_revenue, input.taxes_paid, input.taxes_owed, input.status),
                        id:input?.id,
                        owner: input?.owner,
                        type: input?.type,
                        total_revenue: input?.revenue,
                        taxes_owed: input?.taxes_owed,
                        taxes_paid: input?.taxes_paid,
                        status: input?.status
                    }
                }
                )
                ) 
        }).finally(console.log(records))
        }
       
        

        return(
        <> 
        <button type="button"
            onClick={()=>{return (getRecords());}}>Get Records
        </button>
            <h1>Records</h1>

            <table>
                <thead>
                    <tr>
                    <th>Record Number</th>
                    <th>Owner</th>
                    <th>All Types</th>
                    <th>Total Revenue</th>
                    <th>Taxes Owed</th>
                    <th>Taxes Paid</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(record=>
                            {
                                return (

                                    <tr key={record.id} >
                                        <td>{record.id}</td>
                                        <td>{record.owner}</td>
                                        <td>{record.type}</td>
                                        <td>{record.total_revenue}</td>
                                        <td>{record.taxes_owed}</td>
                                        <td>{record.taxes_paid}</td>
                                        <td>{record.status}</td>
                                        <td>
                                            <button name="Delete" 
                                            
                                            onClick={()=>{
                                               deleteFile(record.id).then(data=>{console.log(data)})
                                            }
                                            
                                            }
                                            >Delete this file
                                                </button>
                                        </td>
                                    </tr>
                                )
                            } 
                        )
                    }
                </tbody>
            </table>
            
        </>
        )
    }
 async function deleteFile(id)
        {
             await axios.delete("http://localhost:8080/records/"+id )
        }