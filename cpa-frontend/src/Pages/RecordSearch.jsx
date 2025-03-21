import axios from "axios"
import { useState } from "react";
import { Record } from "../models/Record";
import "../App.css";
import { RecordCard } from "../components/RecordCard";


export const RecordSearch = () =>
    {

        var filter =""
        const [records, setRecords] = useState([]);

        // const filterInput =()=>
        // {
        //     console.log(filter)
        //     if(filter==""|| filter==null || filter== undefined)
        //     {
        //         return (()=>true)
        //     }
                
        //     console.log("filter="+filter)
        //     if(filter != undefined && filter!= null)
        //     {
        //         return (data)=>{
        //             console.log(data)
        //             return data.type==filter
        //         }
        //     }
        //     return (()=>true)
        // }

        const getRecords = async(fill)=>{
            await axios.get('http://localhost:8080/records')
            .then(data=>{
                try{
                    setRecords(data.data.filter((data)=>
                    {
                        console.log(fill)
                        if(fill==""|| fill==null || fill== undefined || fill == "All")
                            return true
                        else
                            return data.type==fill
                    }

                    ).map(input=>{
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
                }catch(e)
                {
                    //had trouble properly formatting a removal statement that would not crash. Catching the error is the best I could do at this time
                    console.log(e)

                       
                }
                
        })
        }

        const updateFile = async(record, newType)=>
        {
            // console.log("update?"+record.id +" "+newType)
            try{
                await axios.put("http://localhost:8080/records/"+record.id,{
                        id:record.id,
                        owner:record.owner,
                        type:newType,
                        total_revenue:record.total_revenue,
                        taxes_owed:record.taxes_owed,
                        taxes_paid:record.taxes_paid,
                        status:record.status
                    } ).then(async ()=>{
                    getRecords(filter);
             }
            )
            }catch(e)
            {
                console.log(e)
            }
             
        }
        const deleteFile =async(id)=>
        {
            console.log("delete?"+id)
            
             await axios.delete("http://localhost:8080/records/"+id ).then(async ()=>{
                    await getRecords(filter);
             }
            )
        }

        
        return(
        <> 
        <button type="button"
            onClick={()=>{return (getRecords(filter));}}>Get Records
        </button>
            <h1>Records</h1>

            <table>
                <thead>
                    <tr>
                    <th>Record Number</th>
                    <th>Owner</th>
                    <th>All Types
                        <select name="typeFilter" id="typeFilter"
                        defaultValue="All"
                        onChange={()=>{
                            filter = document.getElementById("typeFilter").value
                            getRecords(filter);
                            
                            }
                        }
                        >
                            <option value = "">All</option>
                            <option value="Military">Military</option>
                            <option value="Business">Business</option>
                            <option value="Personal">Personal</option>
                            <option value="International">International</option>
                        </select>
                    </th>
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
                                try{
                                    return (<RecordCard record = {record}
                                    deleteFile={deleteFile}
                                    updateFile={updateFile}
                                    key ={record.id}
                                    />
                                    )
                                }
                                catch(e)
                                {
                                    console.log(e)
                                    return<></>;
                                    
                                }
                               
                            } 
                        )
                    }
                </tbody>
            </table>
            
        </>
        
        )
    }
