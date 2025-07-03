import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate()

    return(
      <div>
        <button type = "button" onClick={() => navigate('/ReviewInquiries')}>Review Inquiries</button>
        <button type = "button" onClick={() => navigate('/ViewFeedback')}>View Feedbacks</button>
        <button type = "button" onClick={() => navigate('/ViewShops')}>View Shops</button>
        <button type = "button" onClick={() => navigate('/ApproveDiscount')}>Approve Discounts</button>
        <button type = "button" onClick={() => navigate('/ServiceStatus')}>Change Service Status</button>
      </div>
    )
}

export default AdminDashboard