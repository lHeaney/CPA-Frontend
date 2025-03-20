import axios from "axios"



//test
export const RecordSearch = () =>
    {

        const getRecords = async()=>{
            await axios.get('http://localhost:8080/records')
            .then(data=>console.log(data))
        }
       

        return(
        <> 
        <button type="button"
        onClick={()=>{
            return (getRecords());
        }}>Get Records
        </button>
            <h1>Records</h1>
            <table>
                <thead>
                    <tr>
                    <th>Record Number</th>
                    <th>Owner</th>
                    <th>Type</th>
                    <th>Total Revenue</th>
                    <th>Taxes Owed</th>
                    <th>Taxes Paid</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            
        </>
        )
    }