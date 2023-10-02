import {Navigate, Route, Routes} from "react-router-dom";
import Archive from "./pages/archive/Archive.tsx";
import Backlog from "./pages/backlog/Backlog.tsx";
import Overview from "./pages/overview/Overview.tsx";
import WIP from "./pages/wip/WIP.tsx";

export default function App() {

  return (
    <>
      <Routes>
          <Route path={"/"} element={<Overview />}/>
          <Route path={"/backlog"} element={<Backlog />}/>
          <Route path={"/working"} element={<WIP />}/>
          <Route path={"/archive"} element={<Archive />}/>
          <Route path={"/*"} element={<Navigate to={"/"}/>}/>
      </Routes>
    </>
  )
}