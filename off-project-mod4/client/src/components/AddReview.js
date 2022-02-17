import React, { useState } from "react";
import Modal from "./Modal";

function AddReview({ ct, user, addReview, reviews }) {
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState([]);
    const [topicTitle, setTopicTitle] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");
    const [rating, setRating] = useState("");
    const [textContent, setTextContent] = useState("");

    console.log("User: " + user);

    function closeModal() {
        setIsOpen(false)
    };

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "review": {
                    topic_id: ct,
                    user_id: user.id,
                    title: reviewTitle,
                    rating: rating,
                    text_content: textContent
                }
            }),
        })
         .then((r) => {
                if (r.ok) {
                    r.json().then((data) =>{ 
                        addReview([data, ...reviews]);
                        console.log("New Reviews:" + reviews)
                        closeModal()
                    });
                } else {
                    r.json().then((err) => {
                        setErrors(err.errors);
                        alert(err.errors);
                    })
                }
            });
    }

    return (
        <div>
            <Modal open={isOpen}>
                {errors.map((e)=><p key={e}>{e}</p>)}
                <form onSubmit={handleSubmit}>
                    <p>Review your topic!</p>
                    <label>Review Title: </label>
                    <input
                        type="text"
                        value={reviewTitle}
                        onChange={(e) => setReviewTitle(e.target.value)} />
                    <label>Review Rating: </label>
                    <input
                        type="text"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)} />
                    <label>Review Text: </label>
                    <input
                        type="textarea"
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)} />

                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => setIsOpen(false)}> Close </button>
            </Modal>
            <button onClick={() => setIsOpen(!isOpen)}> Create Review </button>
        </div>
    )
}
export default AddReview;