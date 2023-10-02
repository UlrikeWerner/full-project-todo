import {Navigate, Route, Routes} from "react-router-dom";
import Overview from "./pages/overview/Overview.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {ToDoType} from "./types/toDoType.ts";
import BasicPage from "./pages/basicPage/BasicPage.tsx";

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

    function setNextStatus(id: string, status: string): void {
        console.log(id + " " + status);
    }

  return (
    <>
      <Routes>
          <Route path={"/"} element={<Overview nextStatus={setNextStatus} toDoList={toDoData}/>}/>
          <Route path={"/backlog"} element={<BasicPage nextStatus={setNextStatus} pageName="Backlog" toDoList={toDoData} filterStatus="OPEN"/>}/>
          <Route path={"/working"} element={<BasicPage nextStatus={setNextStatus} pageName="Work in Progress" toDoList={toDoData} filterStatus="IN_PROGRESS"/>}/>
          <Route path={"/archive"} element={<BasicPage nextStatus={setNextStatus} pageName="Archive" toDoList={toDoData} filterStatus="DONE"/>}/>
          <Route path={"/*"} element={<Navigate to={"/"}/>}/>
      </Routes>
    </>
  )
}