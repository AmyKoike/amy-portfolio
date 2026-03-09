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
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  }, [isHome]);

  // useEffect(() => {
  // setExpanded(false);
  // }, [pathname]);

  const navbarClass = isHome
    ? (scrolled ? "nav-transparent" : "nav-transparent")
    : "nav-solid";

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navbarClass}
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
            <Link href="/"　className="text-muted" onClick={() => setExpanded(false)}>home</Link>
            <Link href="/research"　className="text-muted" onClick={() => setExpanded(false)}>research</Link>
            <Link href="/art"　className="text-muted" onClick={() => setExpanded(false)}>art work</Link>
            <Link href="/blog"　className="text-muted" onClick={() => setExpanded(false)}>photo essay</Link>
            <Link href="/about"　className="text-muted" onClick={() => setExpanded(false)}>about me</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
