import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';

function EveryEverthing ({ user }) {
const [isOpen, setIsOpen] = useState(false)
const [errors, setErrors] = useState([])
const [topicTitle, setTopicTitle] = useState("")
const [reviewTitle, setReviewTitle] = useState("")
const [rating, setRating] = useState("")
const [textContent, setTextContent] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    fetch("/topics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "topic": {
                title: topicTitle
            },
            "review": {
                user_id: user.id,
                title: reviewTitle,
                rating: rating,
                text_content: textContent
            }
        }),
    })
    .then((r) => {
        if (!r.ok) { 
            r.json().then((err) => setErrors(err.errors))
        }
    })
}

    return (
        <div> 
            <p>EveryEverthing</p>
                <Modal open={isOpen}>
                    <form onSubmit={handleSubmit}>
                        <label>Topic:</label>
                        <input 
                        type="text"
                        value={topicTitle} //change title to topic title in backend?
                        onChange={(e) => setTopicTitle(e.target.value)}
                        />
                        {/* <p>Review your topic!</p>
                        <label>Review Title: </label>
                        <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/> */}
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => setIsOpen(false)}> Close </button>
                </Modal>
                <button onClick={() => setIsOpen(!isOpen)}> Create Topic </button>
        </div>

    )
}

export default EveryEverthing;