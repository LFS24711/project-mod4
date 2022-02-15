import React from "react";

function UserDetailCard({selectedUser}) {

    console.log(selectedUser)
    return(
        <div>
            <p>{selectedUser.username}</p>
            <img src={selectedUser.image_url} />
            <p>{selectedUser.bio}</p>
        </div>
    )
}

export default UserDetailCard;