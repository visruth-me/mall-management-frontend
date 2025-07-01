import { useState } from 'react'
import forgetService from '../services/forget'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordForm = () => {
    const [email, setEmail] = useState('')
    const [accountType, setAccountType] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const navigate = useNavigate();

    const handleReset = async (event) => {
        event.preventDefault()

        if(password !== repassword)
            console.log("passwords don't match")
        else {
            const resetObject = {
                email: email,
                password: password,
                type: accountType
            }
            try {
                await forgetService.reset(resetObject)
                alert("Password reset successful. Please log in again.")
                navigate('/login')
            } catch (error) {
                console.error('Reset Failed', error)
            }
        }
    }

    return (
        <div>
            <h1>Reset Your Password</h1>
            <form onSubmit={handleReset}>
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
                        New Password
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
                    <button type="submit">Reset Password</button>
                </div>
            </form>
        </div>
    )
}

export default ForgetPasswordForm