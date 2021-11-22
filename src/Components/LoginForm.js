import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../pages/style.css';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
import AboutUs from './AboutUs/AboutUs';

const LoginForm = ({ setVisibleForm }) => {

    const [uname, setUname] = useState('');
    const [pword, setPword] = useState('');
    const history = useHistory();

    const handleChange = e => {
        switch (e.target.name) {
            case "uname":
                setUname(e.target.value);
                break;

            case "pword":
                setPword(e.target.value);
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios({
            url: 'https://whatever.com/api',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                key1: uname,
                key2: pword
            }
        })
            .then(res => handleResponse(res))
            .catch(err => console.log(err))
    }

    // 2398FY230H0Q92378FH237F270
    // {token: "23895239058235"}
    const handleResponse = res => {
        if (res.data.token) {
            window.sessionStorage.setItem("token", res.data.token);
            history.push('/products');
        } else {
            console.log("No token");
        }
    }

    return (
        <div className="login">
            <h1>Login Form</h1>
            <form>
                <div className="logIn">
                    <br />
                    <label htmlFor="uname">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        name="uname"
                        required
                        onChange={handleChange}
                        value={uname}
                    />
                    <br />
                    <label htmlFor="pword" >
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="pword"
                        required
                        onChange={handleChange}
                        value={pword}
                    />
                    <br />
                    <Button
                        mb={3}
                        onClick={() => history.push("/products")}
                    >
                        Login
                    </Button>
                    <br />
                    <Button
                        onClick={() => setVisibleForm(1)}
                    >
                        Create an Account
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;