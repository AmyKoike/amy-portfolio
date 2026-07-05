"use client";

import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="nav-solid"
      expanded={expanded}
      style={{ width: "100%", zIndex: 50 }}
    >
      <div className="container d-flex flex-column align-items-center py-2 ">
        <Navbar.Brand href="/" className="fw-bold mb-2 text-center">amy koike</Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-4 justify-content-center">
            <Link href="/" className="text-muted" onClick={() => setExpanded(false)}>home</Link>
            <Link href="/research" className="text-muted" onClick={() => setExpanded(false)}>research</Link>
            <Link href="/art" className="text-muted" onClick={() => setExpanded(false)}>art work</Link>
            <a
              href="/CV_AmyKoike_July2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
              onClick={() => setExpanded(false)}
            >
              cv
            </a>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
