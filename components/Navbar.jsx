"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function CustomNavbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  }, [isHome]);

  const navbarClass = isHome
    ? (scrolled ? "nav-solid" : "nav-transparent")
    : "nav-solid";

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navbarClass}
      style={{ width: "100%", zIndex: 50 }}
    >
      <div className="container d-flex flex-column align-items-center py-2">
        <Navbar.Brand href="/" className="fw-bold mb-2 text-center">amy koike</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-4 justify-content-center">
            <Link href="/">home</Link>
            <Link href="/research">research</Link>
            <Link href="/art">art work</Link>
            <Link href="/blog">blog</Link>
            <Link href="/about">about me</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
