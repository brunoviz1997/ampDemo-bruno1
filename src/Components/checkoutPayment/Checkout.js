import React, { useState, useEffect} from 'react'
import {Button, Heading, FormControl, FormLabel, Select, Input} from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Checkout = ({cartVisible, setCartVisible}) => {
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [shipping, setShipping] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const handleSubmit = event => {
        event.preventDefault();
    }

    useEffect(() => {
        if (!cartVisible){
            setCartVisible(true);
        }
    }, [])

    return (
        <form onSubmit = {handleSubmit}>
        <FormControl isRequired>
            <Heading>Contact Information</Heading>
            <br />
            <FormLabel>Email</FormLabel>
            <Input 
            type="email"
            onChange={event => setEmail(event.currentTarget.value)}
            />
            
            <FormLabel>Phone Number</FormLabel>
            <Input
            type="phoneNumber"
            onChange={event => setPhoneNumber(event.currentTarget.value)}
            />
            <br />
            <br />
            
            <Heading>Shipping Information</Heading>

            <br />
            
            <input type = "radio" name = "choice" value = "Express Shipping" id = "choice-Express" onClick={event => setShipping(event.currentTarget.value)}/>
            <label for = "choice-Express"> Express Shipping $6.99 </label>
            <input type = "radio" name = "choice" value = "Standard Shipping" id = "choice-Standard" onClick={event => setShipping(event.currentTarget.value)}/>
            <label for = "choice-Standard"> Standard Shipping FREE </label>
            
            <br />
            <br />
            <FormLabel>First Name</FormLabel>
            <Input 
            type="firstName"
            onChange={event => setFirstName(event.currentTarget.value)}
            /> 
            
            <FormLabel>Last Name</FormLabel>
            <Input
            type="lastName"
            onChange={event => setLastName(event.currentTarget.value)}
            />
            <FormLabel>Address</FormLabel>
            <Input 
            type="address"
            onChange={event => setAddress(event.currentTarget.value)}
            />
            <FormLabel>City</FormLabel>
            <Input 
            type="city"
            onChange={event => setCity(event.currentTarget.value)}
            />

            <FormLabel>State</FormLabel>
            <Select placeholder="Select State" onClick={event => setState(event.currentTarget.value)}>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
            </Select>

          

            <FormLabel>ZIP Code</FormLabel>
            <Input 
            type="zipCode"
            onChange={event => setZipCode(event.currentTarget.value)}
            />
            <br />
            <br />

            <Button>
            <Link 
                to={{
                    pathname: "/Payment",
                    state: {
                        email: email,
                        phoneNumber: phoneNumber,
                        shipping: shipping,
                        firstName: firstName,
                        lastName: lastName,
                        address: address,
                        city: city,
                        state: state,
                        zipCode: zipCode
                    }
                }}
            > 
            Continue to Payment
            </Link>
            </Button>
        </FormControl>
        


        </form>

        
    )
    
}

export default Checkout;
