import React from 'react'
import { useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Image, Button, Box, Flex, Heading, Text, Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react';
import { FormControl, FormLabel, Select, Input} from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Payment = () => {
    const location = useLocation();
    const email = location.state.email;
    const phoneNumber = location.state.phoneNumber;
    const shipping = location.state.shipping;
    const firstName = location.state.firstName;
    const lastName = location.state.lastName;
    const address = location.state.address;
    const city = location.state.city;
    const state = location.state.state;
    const zipCode = location.state.zipCode;
    const [creditCard, setCreditCard] = useState("")
    const [expiration, setExpiration] = useState("")
    const [cvv, setCvv] = useState("")


    return (
        <div>
        <br />
        <br />
        <br />
        <br />
        <br />
    
        <Heading>Delivery Details</Heading>
        <br />
        <p><b>Delivery For: </b></p>
        <p>{firstName} {lastName}</p>
        <p>{phoneNumber}</p>
        <br />
        <p><b>Address:</b></p>
        <p>{address}</p>
        <p>{city}, {state}, {zipCode}</p>
        <br />
        <p><b>Delivery Method:</b></p>
        <p>{shipping}</p>

        <br />

        <form>
            <FormControl isRequired>
                <Heading>Payment Method</Heading>
                <br />
                    <FormLabel>Credit Card</FormLabel>
                        <Input type="creditCard" onChange={event => setCreditCard(event.currentTarget.value)} />
                    <FormLabel>Expiration Date</FormLabel>
                        <Input type="expiration" onChange={event => setExpiration(event.currentTarget.value)} />
                    <FormLabel>CVV</FormLabel>
                        <Input type="cvv" onChange={event => setCvv(event.currentTarget.value)} />
            </FormControl>
        </form>

        <br />
    
        <Button> 
        <Link 
            to={{
                pathname: "/Final",
                state: {
                        
                }
            }}> Place Order
        </Link>
        </Button>

        </div>
    )
}

export default Payment
