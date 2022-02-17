import React, { useState, useEffect } from "react";
import {NavLink, useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'



function UsersCard({b, selectUser}) {
const [user, setUser] = useState([])

    
const { id } = useParams();

        useEffect(() => {
            fetch(`/users/${id}`)
            .then((r) => r.json())
            .then((data) => {
                setUser(data);
            });
        }, [id]);

console.log("LOOOKHERE", user)


    const navigate = useNavigate();

    console.log("User", b)
    
   

    return(
        <div className="card">
            <button onClick={() => navigate(-1)}>Go Back</button>
            <p>{user.username}</p>
            <div className="project-image">
              <img src={user.image_url} />
            </div>
            <p>{user.bio}</p>
        </div>
    )

}

export default UsersCard;