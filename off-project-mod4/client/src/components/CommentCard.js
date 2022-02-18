import React from 'react';
function CommentCard({ c, user, setComments }) {


    function handleDelete(id) {
        fetch(`/comments/${id}`,
            {
                method: "DELETE",
            })
            .then((r) => {
                if (r.ok) {
                    setComments((comments) =>
                        comments.filter((c) =>
                            c.id !== id)
                    );
                }
            });
    }

    return (
        <div>
            <p>{c.text_content}</p>
            <p>Posted by {c.user} at {c.created_at}</p>
            {user.username == c.user ? <button onClick={() => handleDelete(c.id)}>DELETE!</button> : null}
        </div>
    )

}
export default CommentCard;