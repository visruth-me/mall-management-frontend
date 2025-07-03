import { useState, useEffect } from 'react'
import inquiryService from '../../services/inquiry'

const ReviewInquiries = () => {
    const [inquiries, setInquiries] = useState([])

    useEffect(() => {
        inquiryService
        .getForApproval()
        .then(initialInquiries => {
            setInquiries(initialInquiries)
        })
    }, [])

    const update = async (id, status) => {
        await inquiryService.update(id, status);
        setInquiries(inquiries.filter(d => d.id !== id));
    }

    return (
        <div>
            <ul>
                {inquiries.map((feedback, i) => 
                    <li key = {i}>
                        TenantID: {feedback.tenantID}
                        <br/>
                        Title: {feedback.title}
                        <br/>
                        Description: {feedback.description}
                        <br/>
                        <button onClick={() => update(feedback.id, 'Approved')}>Approve</button>
                        <button onClick={() => update(feedback.id, 'Rejected')}>Reject</button>
                        <br/>
                        <br/>
                    </li>  
                )}
            </ul>
        </div>
    )
}

export default ReviewInquiries