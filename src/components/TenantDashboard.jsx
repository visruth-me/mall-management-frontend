import { useNavigate } from 'react-router-dom'

const TenantDashboard = () => {
    const navigate = useNavigate()

    return(
      <div>
        <button type = "button" onClick={() => navigate('/ReviewInquiries')}>Review Inquiries</button>
        <button type = "button" onClick={() => navigate('/ViewFeedback')}>View Feedbacks</button>
        <button type = "button" onClick={() => navigate('/ViewShops')}>View Shops</button>
      </div>
    )
}

export default TenantDashboard