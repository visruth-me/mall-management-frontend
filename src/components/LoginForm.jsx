import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginService from '../services/login'

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (event) => {
    event.preventDefault()

    // try {
        const user = await loginService.login({
        type, username, password
        })

        window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
        )
        // noteService.setToken(user.token)
        onLogin(user)
        setPassword('')
        setUsername('')
    // } 
    }

    return (
    <div>
    <h1>LOGIN</h1>
    <form onSubmit={handleLogin}>
        <div>
        <label>
            Account Type
            <select 
            value={type}
            onChange={({ target }) => setType(target.value)}  
            >
            <option value = "">--Select--</option>
            <option value = "admin">Admin</option>
            <option value = "customer">Customer</option>
            <option value = "employee">Employee</option>
            <option value = "tenant">Tenant</option>
            </select>
        </label>
        </div>
        <div>
        <label>
            Username
            <input 
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            />
        </label>
        </div>
        <div>
        <label>
            Password
            <input 
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            />
        </label>
        </div>
        <button type = "submit">Login</button>
        <div>
            Don't have an account?
            <button type = "button" onClick={() => navigate('/signup')}>
                Sign Up
            </button>
            {/* <button type = "button" onClick={() => navigate('/forgotPassword')}>
                Forgot password
            </button> */}
        </div>
    </form>
    </div>
    )
}

export default LoginForm