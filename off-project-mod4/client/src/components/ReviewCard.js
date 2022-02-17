import React, {useState, useEffect} from 'react';

function ReviewCard({ r, setReviews, reviews }) {
    const [stars, setStars] = useState("")

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
     }}

     useEffect(() => {
        getStars(r.rating)
        }, []);
     

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
            <button onClick={() => handleDelete(r.id)}>DELETE!</button>
        </div>
    )
}

export default ReviewCard;