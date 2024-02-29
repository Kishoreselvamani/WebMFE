import React, {  useState,useRef,useContext } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import UserContext from './context/UserContext';


function Login() {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const inputOne = useRef();
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    


    const handleclick = (e) => {
        if (username !== '' && password !== '') {
            axios.post('http://localhost:3000/loginInformation', {
                name: username,
                password: password
            })
            .then((res) => console.log(res))
            .catch(err => console.log(err));
            e.preventDefault();
            setUser({ username, password })
            navigate('/welcome')

        }
        else {
            inputOne.current.placeholder = "please fill the field"
            console.log(inputOne.current)
        alert("Enter the required field respectly");
        }
    }
    return (
        <div id='logincomponent' >

            <div id='login'>
                <text id='txt' >Login Form </text>
                <input
                    placeholder='username'
                    type='text'
                    id='usename'
                    ref={inputOne}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <input
                    placeholder='password'
                    id='password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button id='btnsubmit' onClick={handleclick}  >Submit </button>
            </div>
        </div>
    )
}

export default Login




