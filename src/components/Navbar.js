// Example using Bootstrap Navbar component
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Model from "../Model";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function NavBar() {
const [cartView,setCartView]=useState(false);

let data=useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const [expanded, setExpanded] = useState(false);

 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic " to="/">
          Foody
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link active fs-6" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link active fs-6" to="/myOrder">
                  My Orders
                </Link>
              </li>
            )}
          </ul>
          {localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <div className="btn bg-white text-success mx-2" onClick={()=>setCartView(true)}>
                My Cart{" "}
                <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView? <Model onClose={()=>setCartView(false)}><Cart/></Model>:null}
              <div
                className="btn bg-white text-danger mx-1"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
