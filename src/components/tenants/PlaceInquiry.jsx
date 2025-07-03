import { useState } from 'react'
import inquiryService from '../../services/inquiry'

//title,description,percentage,validFrom,validTill,isActive
const PlaceInquiry = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleClick = async (event) => {
        event.preventDefault()

        const inquiryObject = {
            title: title,
            description: description,
        }
        try {
            await inquiryService.create(inquiryObject)
        } catch (error) {
            console.error('Failed to add inquiry', error)
        }
    }

    return (
        <div>
            <h1>Place Inquiry</h1>
            <form onSubmit={handleClick}>
                <div>
                    <label>
                        Title
                        <input
                            required
                            type="text"
                            value={title}
                            name="Title"
                            onChange={({ target }) => setTitle(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description
                        <input
                            required
                            type="text"
                            value={description}
                            name="Description"
                            onChange={({ target }) => setDescription(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Place Inquiry</button>
                </div>
            </form>
        </div>
    )
}

export default PlaceInquiry