import React from 'react'
function UserReviews(reviews) {

    const allReviews = reviews.map((r) => {
        return (
            <li>{r.title}</li>
        )
    })

    return(
        <div>
           {allReviews}
        </div>
    )

}
export default UserReviews;