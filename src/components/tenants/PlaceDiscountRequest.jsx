import { useState } from 'react'
import discountService from '../../services/discount'

//title,description,percentage,validFrom,validTill,isActive
const PlaceDiscountRequest = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [percentage, setPercentage] = useState('')
    const [validFrom, setValidFrom] = useState('')
    const [validTill, setValidTill] = useState('')
    // const [isActive, setIsActive] = useState('')

    const handleClick = async (event) => {
        event.preventDefault()

        const discountObject = {
            title: title,
            description: description,
            percentage: percentage,
            validFrom: validFrom,
            validTill: validTill,
            isActive: false
        }
        try {
            await discountService.create(discountObject)
        } catch (error) {
            console.error('Failed to add discount', error)
        }
    }

    return (
        <div>
            <h1>Place Discount</h1>
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
                    <label>
                        Percentage
                        <input
                            required
                            type="number"
                            min="1"
                            max="100"
                            value={percentage}
                            name="Percentage"
                            onChange={({ target }) => setPercentage(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Valid From
                        <input 
                            required
                            type="date"
                            value={validFrom}
                            name="ValidFrom"
                            onChange={({ target }) => setValidFrom(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Valid Till
                        <input 
                            required
                            type="date"
                            value={validTill}
                            name="ValidTill"
                            onChange={({ target }) => setValidTill(target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Place Discount Request</button>
                </div>
            </form>
        </div>
    )
}

export default PlaceDiscountRequest