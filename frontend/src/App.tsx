import {Navigate, Route, Routes} from "react-router-dom";
import Overview from "./pages/overview/Overview.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {ToDoType} from "./types/toDoType.ts";
import BasicPage from "./pages/basicPage/BasicPage.tsx";

export default function App() {
    const startList: ToDoType[] = [];
    //const startToDo: ToDoType = {id: "", description: "", status: ""};
    const [toDoData, setToDoData] = useState<ToDoType[]>(startList);
    //const [toDoById, setToDoById] = useState<ToDoType>(startToDo);

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

    /*function getDataById(id: string) :void {
        axios.get("/api/todo/" + id)
            .then((response) => {
                setToDoById(response.data);
            })
            .catch((error) => {
                console.log(error.status);
                console.log(error.message);
            })
    }*/

    function setNewStatus(id: string, toDo: ToDoType): void {
        axios.put("/api/todo/" + id + "/update", toDo)
            .then((response) => {
                console.log(response.status);
            })
            .then(loadData)
            .catch((error) => {
                console.log(error.status);
                console.log(error.message);
            })
    }

    function getNewStatus(status: string): string{
        let newStatus: string;
        if(status === "OPEN"){
            newStatus = "IN_PROGRESS";
        } else {
            newStatus = "DONE";
        }
        return newStatus;
    }

    function setNextStatus(id: string, toDo: ToDoType): void {
        const newToDo: ToDoType = {...toDo, status: getNewStatus(toDo.status)}
        setNewStatus(id, newToDo);
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