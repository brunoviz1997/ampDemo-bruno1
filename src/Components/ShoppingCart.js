import { useState, useEffect, useContext } from "react";
import {
    Image, Button, Box, Flex, Heading, Text, Table, Thead, Tbody, Tr, Th, Td,
    NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { CartContext, commerce } from '../App';
import { useHistory } from "react-router-dom";

const ShoppingCart = ({ commerceCart, setCommerceCart, navBarRef, cart, setCart }) => {

    const { cartVisible } = useContext(CartContext);
    const [cartTopOffset, setCartTopOffset] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (navBarRef.current) {
            //console.log(navBarRef.current.getBoundingClientRect().height);
            setCartTopOffset(navBarRef.current.getBoundingClientRect().height);
        }
    }, [navBarRef])

    const incrementCartHandler = (value, id) => {
        value = parseInt(value)
        commerce.cart.update(id,{quantity: value})
        .then(response => {
            setCommerceCart(response.cart)
        })
        .catch(err => console.log(err))


        // setCart(prev => {
        //     const tempCart = [...prev];
        //     const foundIndex = tempCart.findIndex(current => current.id === id)
        //     if (value === 0) {
        //         tempCart.splice(foundIndex, 1);
        //     } else {
        //         tempCart[foundIndex].quantity = value;
        //     }

        //     return tempCart;
        // })
    }

    // const renderEmptyCart = () => {
    //     const { cart } = this.props;
    //     if (cart.total_unique_items > 0) {
    //       return;
    //     }
    
    //     return (
    //       <p className="cart__none">
    //         You have no items in your shopping cart, start adding some!
    //       </p>
    //     );
    //   }
    
      const renderCart = () => {
        //const { cart } = this.props;
        if (commerceCart !== null) {
            if (commerceCart.total_unique_items === 0) {
            return;
            }
    
            return (
                <>
                    {
                        commerceCart.line_items.map(currentProduct => {
                            return (
                                <Tr>
                                    <Td>{currentProduct.name}</Td>
                                    <Td>
                                        <NumberInput
                                            size="lg"
                                            width="5rem"
                                            min="0"
                                            max={30}
                                            onChange={(value) => incrementCartHandler(value, currentProduct.id)}
                                            value={currentProduct.quantity}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper >
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Td>
                                    <Td>${(currentProduct.price.raw * currentProduct.quantity).toFixed(2)}</Td>
                                    <Td>
                                        <Button
                                            onClick={() => incrementCartHandler(0, currentProduct.id)}>
                                            <DeleteIcon />
                                        </Button>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </>
            );
        }
        return;
      }

    return (
        <Box h="100%" w={550} bg="white" padding={`calc(4rem + ${cartTopOffset}px) 2rem 4rem 2rem`} zIndex="1000" boxShadow="0 4px 20px rgba(0,0,0,.2)" position="fixed" top="0" right="0" transform={cartVisible ? "" : "translateX(100%)"} transition="transform 0.2s ease-in">
            <Flex direction="column" height="100%">
                <Heading>Cart</Heading>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Product</Th>
                            <Th>Qty</Th>
                            <Th>Price</Th>
                            <Th>&nbsp;</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            renderCart()
                        }
                    </Tbody>
                </Table>
                <Flex direction="column" marginTop="auto">
                    <Flex justifyContent="space-between">
                        <Heading fontSize="md">Subtotal</Heading>
                        <Text>$
                            {
                                commerceCart !== null ? commerceCart.line_items.reduce((prevValue, currValue) => prevValue + (currValue.price.raw * currValue.quantity), 0).toFixed(2) : 0
                            }
                        </Text>
                    </Flex>
                    <Button
                        mt="2rem"
                        onClick={() => {
                            history.push("/checkout")
                        }}
                    >
                        Checkout
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}
export default ShoppingCart;
