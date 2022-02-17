import React from 'react';

function ReviewCard({ r, setReviews, reviews }) {

    function handleDelete(id) {
        fetch(`/reviews/${id}`,
            {
                method: "DELETE",
            })
            .then((r) => {
                if (r.ok) {
                    setReviews((reviews) =>
                        reviews.filter((r) =>
                            r.id !== id)
                    );
                }
            });
    }

    return (
        <div>
            <p>{r.title}</p>
            <p>{r.rating}</p>
            <p>{r.text_content}</p>
            <p>Posted by {r.user} at {r.created_at}</p>
            <button onClick={() => handleDelete(r.id)}>DELETE!</button>
        </div>
    )
}

export default ReviewCard;