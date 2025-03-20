
import "../App.css";
import { Link } from "react-router";
export const NavBar =()=>
    {
        const links =[
            {linkname: "NewRecord", linkDestination: "/NewRecord"},
            {linkname: "RecordSearch", linkDestination: "/RecordSearch"},
            {linkname: "Login", linkDestination: "/Login"},
        ]
        return (
        <nav>
                {links.map(link => {
                        return (<Link to={link.linkDestination}>{link.linkname}</Link>);
                        }
                    )
                    }
        </nav>
        )
    }