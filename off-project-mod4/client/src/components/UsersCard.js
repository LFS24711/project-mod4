import React from "react";
import {NavLink} from 'react-router-dom';

function UsersCard({u, selectUser}) {

    return(
        <div className="card">
            <NavLink to={`/everbody/${u.username}`} onClick={()=>selectUser(u)} >
            <p>{u.username}</p>
            <div className="project-image">
              <img src={u.image_url} />
            </div>
            <p>{u.bio}</p>
            </NavLink>
        </div>
    )

}

export default UsersCard;