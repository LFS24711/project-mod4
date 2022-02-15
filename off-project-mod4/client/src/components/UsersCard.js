import React from "react";
import {NavLink} from 'react-router-dom';

function UsersCard({u, selectUser}) {

    return(
        <div>
            <NavLink to={`/everbody/${u.username}`} onClick={()=>selectUser(u)} >
            <p>{u.username}</p>
            <img src={u.image_url} />
            <p>{u.bio}</p>
            </NavLink>
        </div>
    )

}

export default UsersCard;