
import {Header} from "../components/Header";
import { Outlet } from "react-router";


export const MainFrame = ()=>{


    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
}