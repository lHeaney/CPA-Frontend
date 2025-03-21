import { getValue } from "@testing-library/user-event/dist/utils"


export const RecordCard = (properties) =>{
    
    let myId = properties.record.id
    let myType = properties.record.type

    return (
                    <tr className="record">
                        <td>{properties.record.id}</td>
                        <td>{properties.record.owner}</td>
                        <td>
                                <select name={ "type"+ properties.record.id}id={ "type"+ properties.record.id} 
                                defaultValue={properties.record.type}
                                onChange={()=>{
                                    try{
                                      myType=document.getElementById("type"+myId).value 
                                    }catch(e)
                                    {
                                        console.log(e)
                                    }
                                    
                                }}
                                >
                                <option  value="Military">Military</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Business">Business</option>
                                    <option value="International">International</option>
                                </select>
                                <button name="UpdateType" 
                                 onClick={()=>properties.updateFile(properties.record, myType)}
                                >Update </button>
                        </td>
                        <td>{properties.record.total_revenue}</td>
                        <td>{properties.record.taxes_owed}</td>
                        <td>{properties.record.taxes_paid}</td>
                        <td>{properties.record.status}</td>
                        <td><button name="Delete" onClick={()=>properties.deleteFile(properties.record.id)}>Delete this file </button> </td>
                    </tr>
    )
            
}