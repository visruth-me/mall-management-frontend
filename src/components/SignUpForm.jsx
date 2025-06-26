import { useState } from 'react'
import signupService from '../services/signupService'

const SignUpForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [accountType, setAccountType] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const handleSignUp = async (event) => {
        event.preventDefault()

        if(password !== repassword)
            console.log("passwords don't match")
        else {
            const userObject = {
                name: name,
                contact: contact,
                email: email,
                username: username,
                password: password,
                type: accountType
            }
            try {
                await signupService.create(userObject)
                console.log('created successfully')
            } catch (error) {
                console.error('Signup Failed', error)
            }
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>
                        Account Type
                        <select 
                            value={accountType}
                            onChange={({ target }) => setAccountType(target.value)}
                        >
                            <option value = "">--Select--</option>
                            <option value = "admin">Admin</option>
                            <option value = "employee">Employee</option>
                            <option value = "tenant">Tenant</option>
                        </select>
                    </label>
                    <label>
                        Name
                        <input
                            type="text"
                            value={name}
                            name="Name"
                            onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                    <label>
                        Contact number
                        <input
                            type="number"
                            value={contact}
                            name="Contact"
                            onChange={({ target }) => setContact(target.value)}
                        />
                    </label>
                    <label>
                        Email address
                        <input
                            type="text"
                            value={email}
                            name="Email"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                    <label>
                        Username
                        <input 
                            type="text"
                            value={username}
                            name="Username"
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type="password"
                            value={password}
                            name="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </label>
                    <label>
                        Re-enter password
                        <input
                            type='password'
                            value={repassword}
                            name="Repassword"
                            onChange={({ target }) => setRepassword(target.value)}
                        />
                    </label>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm