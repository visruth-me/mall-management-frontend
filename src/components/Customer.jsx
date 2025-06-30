import { useState, useEffect} from 'react'
import axios from 'axios'
import customerService from '../services/customer'
import { jwtDecode } from 'jwt-decode'

const FeedbackForm = () => {
    const [shopName, setShop] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [shopOptions, setShopOptions] = useState([])
    const [message, setMessage] = useState('')

    useEffect(()=> {
        const fetchShops = async() => {
            try{
                const response = await axios.get('/api/shops/names?category=All')
                setShopOptions(response.data)
            } catch (error) {
                alert('Internal Server Error')
            }
        }
        fetchShops()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const feedback = { shopName, rating, description }
            await customerService.submitFeedback(feedback)
            setMessage('Feedback submitted successfully!')
            setShop('')
            setRating('')
            setDescription('')
        } catch(error) {
            console.error('Submmit failed:',error)
            setMessage('Failed to submit feedback')
        }
    }

    return(
        <div>
            <h1>Feedback Form</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <p>Shop Name</p>
                <select 
                    value={shopName}
                    onChange = {({target}) => setShop(target.value)}
                    required
                >
                    <option value="">Select Shop</option>
                    {shopOptions.map((shop,idx)=>(
                        <option key={idx} value={shop}>{shop}</option>
                    ))}
                </select>
                <p>Rating</p>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={({target})=> setRating(target.value)}
                    required
                />

                <p>Description</p>
                <textarea
                    value={description}
                    onChange={({target})=>setDescription(target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const Profile = () => {
    const [user, setUser] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            try {
                const decoded = jwtDecode(token)
                setUser(decoded.id)
            } catch{
                alert('Not logged in')
            }
        }
    },[])

    useEffect(()=> {
        const fetchUser = async() => {
            try{
                const response = await axios.get(`api/customers/${user}`)
                setUsername(response.data.username)
                setName(response.data.name)
                setEmail(response.data.email)
                setPhone(response.data.phone)
            } catch {
                alert('Failed to fetch user details')
            }
        }
        fetchUser()
    })
    if(!user) {
        return <p>No user info available</p>
    }
    return(
        <div>
            <h2>User Info</h2>
            <p><strong>Username: </strong>{username}</p>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Email: </strong>{email}</p>
            <p><strong>Phone: </strong>{phone}</p>
            <br /><br />
            <FeedbackForm />
        </div>
    )
}

export default Profile