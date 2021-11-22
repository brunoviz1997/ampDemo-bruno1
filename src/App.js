// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component, useState, useRef, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProjNavbar from './Components/Navbar';
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from './pages/HomePage';
import theme from './Components/Styles/theme';
import Commerce from '@chec/commerce.js';
import AboutUs from "./Components/AboutUs/AboutUs"
import Payment from './Components/checkoutPayment/Payment';
import { Final } from './Components/checkoutPayment/Final';

export const AuthenticationContext = React.createContext();
export const CartContext = React.createContext();

export const commerce = new Commerce(process.env.REACT_APP_CHEC_API_KEY, true);

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [commerceCart, setCommerceCart] = useState(null);
  const navBarRef = useRef(null);

  useEffect(() => {
    commerce.cart.retrieve()
    .then((response) => {
      setCommerceCart(response);
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <CartContext.Provider value={{ cartVisible, setCartVisible }}>
            <ProjNavbar navBarRef={navBarRef} commerceCart={commerceCart} cart={cart} />
            <ChakraProvider theme={theme}>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/aboutus">
                  <AboutUs />
                </Route>
                <Route path="/payment">
                  <Payment />
                </Route>
                <Route path="/final">
                  <Final />
                </Route>
                <Route path="/">
                  <HomePage commerceCart={commerceCart} setCommerceCart={setCommerceCart} cart={cart} setCart={setCart} navBarRef={navBarRef} />
                </Route>
              </Switch>
            </ChakraProvider>
          </CartContext.Provider>
        </AuthenticationContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Router>
        <Switch>
          <Route exact path ="/" component={HomePage} />
          <Route exact path ="/Login" component={Login} />
          <Route exact path ="/signUp" component={signUp} />
        </Switch>
      </Router> */}