import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const Login = () => {
    const { push } = useHistory();
    const [ user, setUser ] = useState({
        credentials: {
            username:"",
            password:""
        }
    });

const [ error, setError ] = useState(null);

const handleChange = (e) => {
    setUser({
        ...user,
        credentials: {
            ...user.credentials,
            [e.target.name]:e.target.value
        }
    })
}

const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth().post('/login', user.credentials)
    .then(res=> {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        push('/plantslist');
    })
    .catch(err=> {
        setError("Invalid Login");
    });
}

return(<ComponentContainer>
    <ModalContainer>
        <h1>Welcome Plant Enthusiast</h1>
        <h2>Please enter your account information.</h2>
    <FormGroup onSubmit={handleLogin}>
        <div>
            <Label htmlFor="username">Username:
            <Input onChange={handleChange} type="text" name="username" id="username" value={user.credentials.username}/>
            </Label>
        </div>    
        <div>
            <Label htmlFor="password">Password:
            <Input onChange={handleChange} type="password" name="password" id="password" value={user.credentials.password}/>
            </Label>    
        </div>
        <Button id="submit">Submit</Button>
    </FormGroup>
        {
            error && <p id="error">{error}</p>
        }
    </ModalContainer>
</ComponentContainer>);

}
export default Login;

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`