import { useState, useEffect } from 'react'
import discountService from '../../services/discount'

const ApproveDiscount = () => {
    const [discounts, setDiscount] = useState([])

    useEffect(() => {
        discountService
        .getForApproval()
        .then(initialFeedback => {
            setDiscount(initialFeedback)
        })
    }, [])

    const update = async (id, status) => {
        await discountService.update(id, status);
        setDiscount(discounts.filter(d => d.id !== id));
    }

    return (
        <div>
            <ul>
                {discounts.map((discount, i) => 
                    <li key = {i}>
                        Shop: {discount.shopName}
                        <br/>
                        Title: {discount.title}
                        <br/>
                        Description: {discount.description}
                        <br/>
                        Percentage: {discount.percentage}
                        <br/>
                        validFrom: {discount.validFrom}
                        <br/>
                        validTill: {discount.validTill}
                        <br/>
                        <button onClick={() => update(discount.id, 'Approved')}>Approve</button>
                        <button onClick={() => update(discount.id, 'Rejected')}>Reject</button>
                        <br/>
                        <br/>
                    </li>  
                )}
            </ul>
        </div>
    )
}

export default ApproveDiscount