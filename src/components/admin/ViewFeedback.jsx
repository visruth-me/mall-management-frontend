import { useState, useEffect } from 'react'
import feedbackService from '../../services/feedback'

const ViewFeedback = () => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        feedbackService
        .getAll()
        .then(initialFeedback => {
            setFeedback(initialFeedback)
        })
    }, [])


    return (
        <div>
            <ul>
                {feedback.map((f, i) => 
                    <li key = {i}>
                        User: {f.username}
                        <br/>
                        Shop: {f.shopName}
                        <br/>
                        Rating: {f.rating}
                        <br/>
                        Description: {f.description}
                        <br/>
                        <br/>
                        {/* <button onClick={}>{label}</button> */}
                    </li>   
                // <Note
                //     key={i}
                //     note={note} 
                //     toggleImportance={() => toggleImportanceOf(note.id)}
                // />
                )}
            </ul>
        </div>
    )
}

export default ViewFeedback