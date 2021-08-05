import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";


function NavBarMenu(props){

    return (
        <div>
            <Navbar className="navbar sticky-top" bg="white" variant="white" expand="lg">
                <img
                    className="container d-flex"
                    src={props.src}
                    style={{ height: `${props.height}`, width: "auto" }}
                    alt="logo"
                />

                {props.state.isActive ? (
                    <Link className="fas fa-sign-out-alt fa-2x pr-4 me-3" style={{ color: "#cf40da" }} 
                    to="/"/>): null}
            </Navbar>
        </div>
    )
}

function NavBarLogado(props){

    return (
        <div>
            <Navbar className="navbar sticky-top" bg="white" variant="white" expand="lg">
                <img
                    className="d-flex justify-content-start"
                    src={props.src}
                    style={{ height: `${props.height}`, width: "auto" }}
                    alt="logo"
                />

                {props.state.isActive ? (
                    <Link className="fas fa-sign-out-alt fa-2x pr-4 me-3" style={{ color: "#cf40da" }} 
                    to="/"/>): null}
            </Navbar>
        </div>
    )
}
export { NavBarMenu, NavBarLogado}
