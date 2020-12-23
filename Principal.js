import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Principal.css'
import { Component } from 'react';
import {
    Link
   } from "react-router-dom";
export default class Principal extends React.Component{
    render(){
        return(
        <div>
            <Navbar>
                <Navbar className="navbar">
                    <Link to="./Principal">
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/db3alie-08fbd628-be15-490b-9999-3444b6a22a7e.png/v1/fill/w_991,h_806,strp/_loona__logo___png_by_tsukinofleur_db3alie-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04MzMiLCJwYXRoIjoiXC9mXC9kMDgyYTUzNy05YTQ1LTQ1MTItYWY1NC0wOGM4N2IzMzUyOThcL2RiM2FsaWUtMDhmYmQ2MjgtYmUxNS00OTBiLTk5OTktMzQ0NGI2YTIyYTdlLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aKXXgYGiropPACC1-0gQgzwXEKpR5sZccw0OSmm9u5s"
                        width="80"
                        height="60"
                        className="d-inline-block align-top"
                    />
                    </Link>
                </Navbar>
                <br />
                <Navbar className="navbar" expand="lg">
                    <Nav>
                        <Link className="link" to="/MiembrosAPI">Miembros</Link>
                        <Nav.Link href="#link">Subunidades</Nav.Link>
                        <Nav.Link href="#link">Álbums</Nav.Link>
                        <Nav.Link href="#link">Loonaverse</Nav.Link>
                    </Nav>
                </Navbar>
            </Navbar>
        </div>
        );
    }
}
