import { useNavigate } from 'react-router-dom'

const TenantDashboard = () => {
    const navigate = useNavigate()

    return(
      <div>
        <button type = "button" onClick={() => navigate('/PlaceDiscountRequest')}>Review Inquiries</button>
        <button type = "button" onClick={() => navigate('/PlaceInquiry')}>View Feedbacks</button>
        <button type = "button" onClick={() => navigate('/ViewShopFeedback')}>View Shops</button>
      </div>
    )
}

export default TenantDashboard