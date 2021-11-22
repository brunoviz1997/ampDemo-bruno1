import { useState, useContext, useEffect } from 'react';
import Products from "./Products"
import ShoppingCart from "../Components/ShoppingCart";
import { Switch, Route } from "react-router-dom"
import { Box } from '@chakra-ui/react';
import { CartContext } from '../App';
import Checkout from "../Components/checkoutPayment/Checkout"

const HomePage = ({commerceCart, setCommerceCart, cart, setCart, navBarRef}) => {

    const {cartVisible, setCartVisible} = useContext(CartContext);
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        if (navBarRef.current) {
            setMarginTop(navBarRef.current.getBoundingClientRect().height);
        }
    }, [navBarRef])

    return (
        <Box marginTop={marginTop} padding="4rem" position="relative" marginRight={cartVisible ? "550px" : "0px"} transition="margin 0.2s ease-in">
            <Switch>
                <Route path="/" exact> 
                    <Products setCommerceCart={setCommerceCart} setCart={setCart} setCartVisible={setCartVisible}/>
                    
                </Route>
                <Route path="/checkout"> 
                    <Checkout cartVisible={cartVisible} setCartVisible={setCartVisible} />
                </Route>
            </Switch>
            <ShoppingCart commerceCart={commerceCart} setCommerceCart={setCommerceCart} navBarRef={navBarRef} cart={cart} setCart={setCart}/>
        </Box>
    )

}
export default HomePage