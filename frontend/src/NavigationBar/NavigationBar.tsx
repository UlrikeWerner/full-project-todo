import './navigationBar.css'
import {Link} from "react-router-dom";
export default function NavigationBar(props: {page: string}) {

    return (
        <section className="nav-container-background-color nav-container-margin">
            <nav className="nav-margin-button">
                {props.page !== "overview" &&
                    <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/"}>Overview</Link>}
                {props.page !== "backlog" &&
                    <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/backlog"}>Backlog</Link>}
                {props.page !== "working" &&
                    <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/working"}>Work In Progress</Link>}
                {props.page !== "archive" &&
                    <Link className="nav-link-margin-right nav-link-buttonStyle" to={"/archive"}>Archive</Link>}
            </nav>
        </section>
    )
}