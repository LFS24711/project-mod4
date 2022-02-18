import React, { useState } from "react";
import Modal from "./Modal";

function AddReview({ ct, user, setReviews, reviews, tt }) {
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState([]);
    const [topicTitle, setTopicTitle] = useState("");
    const [reviewTitle, setReviewTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [textContent, setTextContent] = useState("");

    console.log("rating: " , rating);

    function closeModal() {
        setIsOpen(false);
        setRating("1");
        setReviewTitle("");
        setTextContent("");
    };

    console.log("New Reviews:" , reviews);

    function handleSubmit(e) {
        e.preventDefault();
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
                        setReviews([data, ...reviews]);
                        closeModal()
                    });
                } else {
                    r.json().then((err) => {
                        setErrors(err.errors);
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
                    <p className="topic-title">{tt}</p>
                    <label>Review Title: </label>
                    <input
                        type="text"
                        value={reviewTitle}
                        onChange={(e) => setReviewTitle(e.target.value)}
                    />
                    <label>Review Rating: </label>
                    <select name="rating" onChange={(e) => setRating(e.target.value)}>
                        <option value={"1"}>⭐</option>
                        <option value={"2"}>⭐⭐</option>
                        <option value={"3"}>⭐⭐⭐</option>
                        <option value={"4"}>⭐⭐⭐⭐</option>
                        <option value={"5"}>⭐⭐⭐⭐⭐</option>
                    </select>
                    <label>Review Text: </label>
                    <textarea
                        type="textarea"
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                    />

                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => closeModal()}> Close </button>
            </Modal>
            <button onClick={() => user?setIsOpen(!isOpen):alert("You must be logged in to do this")}> Create Review </button>
        </div>
    )
}
export default AddReview;