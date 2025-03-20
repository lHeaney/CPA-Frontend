
import {Header} from "../components/Header";
import { Outlet } from "react-router";

document.cookie={
    username:"",
    password:""
}

export const MainFrame = ()=>{


    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
}