import {Navigate, Route, Routes} from "react-router-dom";
import Archive from "./pages/archive/Archive.tsx";
import Backlog from "./pages/backlog/Backlog.tsx";
import Overview from "./pages/overview/Overview.tsx";
import WIP from "./pages/wip/WIP.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {ToDoType} from "../types/toDoType.ts";

export default function App() {
    const startList: ToDoType[] = [];
    const [toDoData, setToDoData] = useState<ToDoType[]>(startList);

    useEffect(() => {
        loadData();
    }, [])

    function loadData() {
        axios.get("/api/todo")
            .then((response) => {
                console.log(response);
                setToDoData(response.data);
            })
            .catch((error) => {
                console.log(error.status);
                console.log(error.message);
            })
    }

  return (
    <>
      <Routes>
          <Route path={"/"} element={<Overview toDoList={toDoData}/>}/>
          <Route path={"/backlog"} element={<Backlog />}/>
          <Route path={"/working"} element={<WIP />}/>
          <Route path={"/archive"} element={<Archive />}/>
          <Route path={"/*"} element={<Navigate to={"/"}/>}/>
      </Routes>
    </>
  )
}