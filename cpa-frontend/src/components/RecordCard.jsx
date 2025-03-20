

export const RecordCard = (properties) =>{
    return (
        <table classname = "record">
                <tbody>
                    <tr>
                        <td>{properties.id}</td>
                        <td>{properties.owner}</td>
                        <td>{properties.type}</td>
                        <td>{properties.total_revenue}</td>
                        <td>{properties.taxes_owed}</td>
                        <td>{properties.taxes_paid}</td>
                        <td>{properties.status}</td>
                    </tr>
                </tbody>
                
            </table>
    )
            
}