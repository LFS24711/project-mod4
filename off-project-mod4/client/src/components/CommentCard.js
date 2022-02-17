import React from 'react';
function CommentCard({c, user}) {
    return(
        <div>
           <p>{c.text_content}</p>
            <p>Posted by {c.user} at {c.created_at}</p>
        </div>
    )

}
export default CommentCard;