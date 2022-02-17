import React from 'react';

function ReviewCard({ r }) {

    return (
        <div>
            <p>{r.title}</p>
            <p>{r.rating}</p>
            <p>{r.text_content}</p>
            <p>Posted by {r.user} at {r.created_at}</p>
        </div>
    )
}

export default ReviewCard;