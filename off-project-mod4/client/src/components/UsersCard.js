import React from "react";

function UsersCard({u}) {

    return(
        <div>
            <img src={u.image_url} />
            <p>{u.username}</p>
            <p>{u.bio}</p>
        </div>
    )



}

export default UsersCard;