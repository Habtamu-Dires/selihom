import React,{useState} from "react";
import { Navbar, NavbarBrand, NavItem, Nav, Collapse, NavbarToggler, Dropdown, DropdownToggle, 
    DropdownMenu, DropdownItem, NavLink as Navlink} from "reactstrap";
import { Link, NavLink} from 'react-router-dom';
//import React,{useState} from "react";

function Header(){

    const[isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return(
        <>
        <div className="brand-name">
            <span id="title">ሰሊሆም </span> 
            <span className="subtitle"> የአዕምሮ ህሙማን መርጃ ማህበር</span> &nbsp;  &nbsp;
            <span style={{fontSize: "20px"}} className="subtitle">
                Selihom Mentally ill People Support Association</span>
        </div>
        <div className="header" >
            <Navbar  expand="md">
                <NavbarBrand>
                    <img src="img/selihom-logo.png" alt="SELIHOM" height={50} width={50}/>
                </NavbarBrand>
                <NavbarToggler  onClick={toggleNav}/>
                <Collapse  isOpen={isNavOpen} navbar>
                    <Nav navbar className="me-auto">
                        <NavItem>
                            <NavLink style={{color: 'black'}} className="nav-link" to="/home">Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black'}}  className="nav-link"  to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black'}}  className="nav-link"  to="/support">SupportUs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color: 'black'}}  className="nav-link"  to="/contactus">ContactUs</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    );
}

export default Header;