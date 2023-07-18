

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLocalMall, MdArrowDropDown } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BiHome} from 'react-icons/bi';
import {BsCollectionPlay} from 'react-icons/bs';
import {GrRestroomWomen} from 'react-icons/gr';
import {GrRestroomMen} from 'react-icons/gr';
import {FiLogOut} from 'react-icons/fi';
import { AdminContext } from '../components/userContext/Context';
import { useContext } from 'react';
import "./Navbar.css";



function Navbar() {

    const { admin, dispatch } = useContext(AdminContext);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [AdminDropdownOpen, setAdminDropdownOpen] = useState(false);

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  const toggleHelpDropdown = () => {
    setHelpDropdownOpen(!helpDropdownOpen);
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
  };
  const toggleAdminDropdown = () => {
    setAdminDropdownOpen(!AdminDropdownOpen);
    };

  const handleDropdownItemClick = () => {
    setAccountDropdownOpen(false);
    setHelpDropdownOpen(false);
    setLoginDropdownOpen(false);
    setAdminDropdownOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          NYAKUWA MALL<MdLocalMall style={{ color: "#f9004d", size: "1.5rem" }} />
        </div>

        <div className="nav-items">
          <div>
            <Link to="/" className="nav-item">
                <BiHome />
              Home
            </Link>
          </div>

          <div className="dropdown">
            <div className="nav-link" onClick={toggleAccountDropdown}>
              <Link to="/Collections" className="nav-item">
                <BsCollectionPlay />
                Collection
              </Link>
              <MdArrowDropDown style={{ color: "green" }} />
            </div>
            {accountDropdownOpen && (
              <div className="dropdown-menu">

                <Link
                  to="/Women"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                    <GrRestroomWomen />
                  Women Fashion
                </Link>
                <Link
                  to="/men"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                    <GrRestroomMen />
                  Men Fashion
                </Link>
                <Link
                  to="/kids"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                  Kids Fashion
                </Link>
              </div>
            )}
          </div>

          <div>
            <Link to="/Cart" className="nav-item">
                Cart
              <AiOutlineShoppingCart />
            </Link>
          </div>

          <div className="dropdown">
            <div className="nav-link" onClick={toggleHelpDropdown}>
              <Link to="/helpcenter" className="nav-item">
              
                Contact Us
              </Link>
              <MdArrowDropDown style={{ color: "green" }} />
            </div>
            {helpDropdownOpen && (
              <div className="dropdown-menu">
                <Link
                  to="/HelpCenter"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                  Help Center
                </Link>
                <Link
                  to="/place order"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                  Place Order
                </Link>
                <Link
                  to="/OrderCancellation"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                  Order Cancellation
                </Link>
              </div>
            )}
          </div>

          <div className="dropdown">
            <div className="nav-link" onClick={toggleLoginDropdown}>
               <div className="nav-item">
                Account
              <MdArrowDropDown style={{ color: "green" }} />
              </div>
            </div>
            {loginDropdownOpen && (
              <div className="dropdown-menu">

            <Link to="/login"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick} >
                    Login
                </Link>

                <Link
                  to="/register"
                  className="dropdown-item"
                  onClick={handleDropdownItemClick}
                >
                  Register
                </Link>
                <Link to="/adminlogin"
                    className="dropdown-item"
                    onClick={handleDropdownItemClick} >
                    Admin Login
                </Link>

                {
                    admin && (
                        <Link to="/admin"
                            className="dropdown-item"
                            onClick={handleDropdownItemClick} >
                            Admin
                        </Link>
                    )
                }
              
              </div>
            )}
          </div>
          <div className="nav-item">

                {
                    admin && (
                        <Link onClick={handleLogout} className="nav-item" to="/" style={{color:"purple"}}>
                        Admin Out
                      <FiLogOut style={{color:"red"}} />
                    </Link>
                    )
                }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


