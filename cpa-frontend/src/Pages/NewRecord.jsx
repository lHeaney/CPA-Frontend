


export const NewRecord = () =>
    {
        return(
        <>
            NewRecord

            <form name="NewRecordForm">

                <button type="button"
                onClick={()=>{
                    return (console.log("we made a record"));
                }}>Submit New Record
                </button>
            </form>
        </>
        )
    }