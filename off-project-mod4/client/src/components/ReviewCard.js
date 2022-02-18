import React, { useState, useEffect } from 'react';
import AddAComment from './AddAComment';
import CommentCard from './CommentCard';

function ReviewCard({ r, setReviews, reviews, user }) {
    const [stars, setStars] = useState("");
    const [comments, setComments] = useState([]);


    function getStars(s) {
        switch (s) {
            case 1:
                setStars("⭐")
            case 2:
                setStars("⭐⭐")
                break;
            case 3:
                setStars("⭐⭐⭐")
                break;
            case 4:
                setStars("⭐⭐⭐⭐")
                break;
            case 5:
                setStars("⭐⭐⭐⭐⭐")
                break;
            default:
                setStars("⭐")
        }
    }

    useEffect(() => {
        // auto-login
        fetch(`/reviews/${r.id}`)
            .then((r) => r.json()
                .then((data) => {
                    setComments(data.comments)
                })
            );
        getStars(r.rating);
    }, []);

    console.log("Comments: ", comments)

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
        <div className="card">
            <p>{r.title}</p>
            <p>{stars}</p>
            <p>{r.text_content}</p>
            <p>Posted by {r.user} at {r.created_at}</p>
            {user.username == r.user ? <button onClick={() => handleDelete(r.id)}>DELETE!</button> : null}

            <AddAComment user={user} reviewId={r.id} comments={comments} setComments={setComments} />

            <details>
                <summary>Show comment</summary>
                {comments?.map((c) => <CommentCard key={c.id} c={c} user={user} setComments={setComments} />)}
            </details>

        </div>
    )
}



export default ReviewCard;