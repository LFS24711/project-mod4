import React from "react";

function UserDetailCard({selectedUser}) {

    console.log(selectedUser)
    return(
        <div className="card">
            <p>{selectedUser.username}</p>
            <div className="project-image">
              <img src={selectedUser.image_url} />
            </div>
            <p>{selectedUser.bio}</p>
        </div>
    )
}

export default UserDetailCard;