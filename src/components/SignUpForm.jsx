import { useState } from 'react'
import signupService from '../services/signup'

const SignUpForm = ({ onSignupSuccess }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
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
                username: username,
                name: name,
                email: email,
                phone: phone,
                password: password,
                type: accountType
            }
            try {
                const createdUser = await signupService.create(userObject)
                window.localStorage.setItem(
                    'loggedNoteappUser', JSON.stringify(createdUser)
                )
                onSignupSuccess(createdUser)
            } catch (error) {
                console.error('Signup Failed', error)
            }
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>
                        Account Type
                        <select 
                            required
                            value={accountType}
                            onChange={({ target }) => setAccountType(target.value)}
                        >
                            <option value = "">--Select--</option>
                            <option value = "customer">Customer</option>
                            <option value = "employee">Employee</option>
                            <option value = "tenant">Tenant</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Name
                        <input
                            required
                            type="text"
                            value={name}
                            name="Name"
                            onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email address
                        <input
                            required
                            type="email"
                            value={email}
                            name="Email"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number
                        <input
                            required
                            type="number"
                            value={phone}
                            name="Phone"
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Username
                        <input 
                            required
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
                            required
                            type="password"
                            value={password}
                            name="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Re-enter password
                        <input
                            required
                            type='password'
                            value={repassword}
                            name="Repassword"
                            onChange={({ target }) => setRepassword(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm