"use client";
import { useState, useRef, useEffect } from "react";
import NavbarStyles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside the navbar to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll to toggle fixed-top class
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Menuitems = [
    { label: "HOME", url: "/" },
    {
      label: "EVENTS",
      items: [
        { label: "UPCOMING EVENTS", url: "#" },
        { label: "PAST EVENTS", url: "#" },
      ],
    },
    { label: "VIRTUAL WORKSHOP", url: "#" },
    { label: "GALLERY", url: "#" },
    { label: "FAQ", url: "#" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light bg-white shadow animate__animated  ${
        isFixed ? "fixed-top animate__fadeInDown" : ""
      }`}
    >
      <div className="container-lg d-flex justify-content-between align-items-center w-100">
        {/* Logo */}
        <div className={`d-flex align-items-center ${NavbarStyles["logo"]}`}>
          <img src="/icons/annex_logo.png" alt="Logo" className="img-fluid" />
          <div className="ms-2">
            <span className={NavbarStyles["main-title"]}>
              ANNEX GLOBAL CONFERENCE
            </span>
            <p className={NavbarStyles["sub-title"]}>
              Advancing Healthcare, Inspiring Minds
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggler border-0 ${NavbarStyles['navbar-noShadow']}  ms-auto`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          ref={menuRef}
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav mx-auto">
            {Menuitems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.items ? "dropdown" : ""}`}
              >
                {item.items ? (
                  <>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id={`dropdown${index}`}
                      role="button"
                    >
                      {item.label}
                    </a>
                    <ul className="dropdown-menu">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a className="dropdown-item" href={subItem.url}>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a className="nav-link" href={item.url}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Buy Tickets Button */}
        <div className="d-none d-md-block">
          <a href="#" className="btn brand-btn">
            Buy Tickets
          </a>
        </div>
      </div>

      {/* Mobile Buy Tickets Inside Dropdown */}
      {isOpen && (
        <div className="container d-md-none text-center mt-2">
          <a href="#" className="btn brand-btn w-100">
            Buy Tickets
          </a>
        </div>
      )}
    </nav>
  );
}
