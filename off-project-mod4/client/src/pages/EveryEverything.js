import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { NavLink } from 'react-router-dom';
import TopicCard from "../components/TopicCard";


function EveryEverthing ({ user, setCurrentTopic }) {
const [isOpen, setIsOpen] = useState(false)
const [errors, setErrors] = useState([])
const [topicTitle, setTopicTitle] = useState("")
const [reviewTitle, setReviewTitle] = useState("")
const [rating, setRating] = useState("")
const [textContent, setTextContent] = useState("")
const [topics, setTopics] = useState([])

useEffect(() => {
    // auto-login
    fetch("/topics")
    .then((r) => r.json()
    .then((data) => setTopics(data))
      );
  }, []);

  

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
console.log(topics)

const topics_list = topics.map((t) => {
    return <NavLink key={t.id} to={`/every/${t.title}`}><button onClick={() => setCurrentTopic(t.id)}>{t.title}</button></NavLink>
})

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
                        <p>Review your topic!</p>
                        <label>Review Title: </label>
                        <input 
                        type="text"
                        value={reviewTitle}
                        onChange={(e) => setReviewTitle(e.target.value)}/>
                        <label>Review Rating: </label>
                        <input 
                        type="text"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}/>
                         <label>Review Text: </label>
                        <input 
                        type="textarea"
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}/>

                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => setIsOpen(false)}> Close </button>
                </Modal>
                <button onClick={() => setIsOpen(!isOpen)}> Create Topic </button>
                <ol>{topics_list}</ol>
        
                {/* <TopicCard topics={topics}/> */}
        </div>

    )
}

export default EveryEverthing;