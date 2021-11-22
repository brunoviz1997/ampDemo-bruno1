import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography, Button, MenuList, MenuItem } from "@material-ui/core";
import { Class, ShoppingCart, AccountCircle } from "@material-ui/icons"
import { ClassNames } from "@emotion/react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Logo from '../assets/Logo';
import useStyles from "./Styles/Navbar"
import { CartContext } from '../App';
import { AuthenticationContext } from '../App';
import Searchbar from "./SearchBar/SearchBar"

const ProjNavbar = ({ navBarRef, commerceCart, cart }) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const { setCartVisible } = useContext(CartContext);
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticationContext);

    const cartQuantity = () => {
        if (commerceCart !== null) {
            return commerceCart.line_items.reduce((prev, curr) => curr.quantity + prev, 0);
        }
        return 0;
    }

    return (
        <>
            <AppBar ref={navBarRef} position="fixed" className={classes.appBar} color="inherit">
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Searchbar />
                    {
                        location.pathname !== "/login" && (
                            <div className={classes.actionButtons}>
                                <IconButton onClick={() => setCartVisible(prev => !prev)} aria-label="Show cart items" color="inherit">
                                    <Badge badgeContent={cartQuantity()} color="secondary"> </Badge>
                                    <ShoppingCart />
                                </IconButton>
                                <div className="dropdown-select">
                                    <IconButton>
                                        <Badge badgeContent={isAuthenticated ? "Hi!" : null} color="secondary"></Badge>
                                        <AccountCircle />
                                    </IconButton>
                                    <div className="dropdown-select-menu">
                                        <Button
                                            onClick={() => isAuthenticated ? setIsAuthenticated(false) : history.push("/login")}
                                        >
                                            {isAuthenticated ? "Logout" : "Login"}
                                        </Button>
                                    </div>
                                </div>
                            </div>)
                    }

                </Toolbar>
            </AppBar>
        </>
    )
}

export default ProjNavbar;

// import {useContext} from 'react';
// import { Nav, Navbar, NavDropdown, Container, NavItem, } from "react-bootstrap";
// import {Image, Button, Box, Flex, Text} from '@chakra-ui/react';
// import "bootstrap/dist/css/bootstrap.css";
// import "./Styles/Navbar.css";
// import Searchbar from "./SearchBar";
// import {AuthenticationContext} from '../App';
// import {CartContext} from '../App';

// function ProjNavbar({navBarRef}) {

//     const {isAuthenticated} = useContext(AuthenticationContext);
//     const {setCartVisible} = useContext(CartContext);

//     return (
//         <div>
//             <Navbar ref={navBarRef} expand="sm" bg="myCol" variant="dark" sticky="top" collapseOnSelect>

//                     <Navbar.Brand>
//                         <img src={process.env.PUBLIC_URL + "/logo1.png"} width="40" /> {' '}
//                         CyberNoobs
//                     </Navbar.Brand>

//                     <Navbar.Toggle />
//                     <Navbar.Collapse>

//                         <Nav className="mx-lg-auto ">
//                             <Searchbar />
//                         </Nav>

//                         <Nav className="ms-auto">
//                             <Nav.Link className="float-right"> Home </Nav.Link>
//                             <button onClick={() => setCartVisible(prev => !prev)}>Cart</button>
//                             {isAuthenticated && <Nav.Link className="float-right"> Logout </Nav.Link>}
//                             {!isAuthenticated && <Nav.Link className="float-right"> Login </Nav.Link>}
//                         </Nav>


//                     </Navbar.Collapse>

//             </Navbar>
//         </div >
//     );
// }

// export default ProjNavbar;