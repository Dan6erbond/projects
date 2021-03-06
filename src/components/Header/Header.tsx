import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <React.Fragment>
      <Navbar bg="white">
        <Navbar.Brand>
          <a href="/">
            <img
              alt="logo"
              src="res/img/logo/logo - green.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>{" "}
          <Link to="/">Projects</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" />
      </Navbar>
    </React.Fragment>
  );
}
