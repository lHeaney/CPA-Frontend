
import "../App.css";
import { Link } from "react-router";
export const NavBar =()=>
    {
        const links =[
            {linkname: "Create new Record", linkDestination: "/CreateRecord"},
            {linkname: "Record Search", linkDestination: "/Records"},
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