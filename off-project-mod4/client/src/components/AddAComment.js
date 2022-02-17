import React, { useState } from "react";
import Modal from "./Modal";

function AddAComment({ reviewId, user, setComments, comments }) {
    const [textContent, setTextContent] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState([]);

    function closeModal() {
        setIsOpen(false)
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "comment": {
                    review_id: reviewId,
                    user_id: user.id,
                    text_content: textContent
                }
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => {
                        setComments([data, ...comments]);
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
                {errors.map((e) => <p key={e}>{e}</p>)}
                <form onSubmit={handleSubmit}>
                    <p>Leave a comment!</p>
                    <textarea
                        type="textarea"
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => setIsOpen(false)}> Close </button>
            </Modal>
            <button onClick={() => setIsOpen(!isOpen)}> Add a Comment! </button>
        </div>
    )
}

export default AddAComment;