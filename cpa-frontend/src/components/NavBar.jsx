
import "../App.css";
import { Link } from "react-router";
export const NavBar =()=>
    {
        const links =[
            {id:1, linkname: "NewRecord", linkDestination: "/NewRecord"},
            {id:2, linkname: "RecordSearch", linkDestination: "/RecordSearch"},
            {id:3, linkname: "Login", linkDestination: "/Login"},
        ]
        return (
        <nav>
                {links.filter(link=>{ return true/*(link.id ==3)*/})
                
                .map(link => {
                        return (<Link to={link.linkDestination}>{link.linkname}</Link>);
                        }
                    )
                    }
        </nav>
        )
    }