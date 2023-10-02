import './navigationBar.css'
import {Link} from "react-router-dom";
export default function NavigationBar() {

    return (
        <section className="nav-container-background-color nav-container-margin">
            <nav className="nav-margin-button">
                <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/"}>Overview</Link>
                <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/backlog"}>Backlog</Link>
                <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/working"}>Work In Progress</Link>
                <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/archive"}>Archive</Link>
            </nav>
        </section>
    )
}