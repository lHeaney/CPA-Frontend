
import "./App.css";
import { BrowserRouter, Routes,  Route } from "react-router";
import { MainFrame } from "./Pages/MainFrame";
import {Login} from "./Pages/Login";
import {Records} from "./Pages/Records";
import {NewRecord} from "./Pages/NewRecord";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFrame/>}>
            <Route path="Login" element={<Login/>}/>
            <Route path="New Record" element={<NewRecord/>}/>
            <Route path="Record Search" element={<Records/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
