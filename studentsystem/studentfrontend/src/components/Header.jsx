import React from "react";
import "./Header.scss";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <header>
          <nav>
            <span style={{ padding: "10px 0 0 0" }}>
              <FitnessCenterIcon />
            </span>
            <span>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </span>
            <span>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Us
              </Link>
            </span>
            <span>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact Us
              </Link>
            </span>
            {/* <span>Careers</span> */}
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
}
