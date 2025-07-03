import { useState, useEffect } from 'react'
import feedbackService from '../../services/feedback'

const ViewFeedback = ({ userID }) => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
    if (!userID) return;

    feedbackService
        .getUser(userID)
        .then(setFeedback)
        .catch((err) => {
        console.error('Failed to fetch feedback:', err);
        setFeedback([]); 
        });
    }, [userID]);


    return (
        <div>
            <ul>
                {feedback.map((f, i) => 
                    <li key = {i}>
                        User: {f.username}
                        <br/>
                        Rating: {f.rating}
                        <br/>
                        Description: {f.description}
                        <br/>
                        <br/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ViewFeedback