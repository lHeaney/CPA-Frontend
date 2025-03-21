
import {Header} from "../components/Header";
import { Outlet } from "react-router";

var username = ""
var password = ""


export const MainFrame = ()=>{


    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
}