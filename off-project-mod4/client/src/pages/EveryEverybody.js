import React, { useEffect, useState } from "react";
import UsersCard from "../components/UsersCard";
import {NavLink} from 'react-router-dom';

function EveryEverybody({selectUser, setB }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users")
            .then((r) => r.json()
                .then((data) => {setUsers(data);
                setB(data)})
            );
    }, [])

    const allUsers = users.map((u) => {
        return (
            <div key={u.id} className="card">
                <p>Username: {u.username}</p>
                <div className="project-image">
                    <img src={u.image_url} />
                </div>
                <p>Bio: {u.bio}</p>
                <p>Number of Reviews: {u.review_length}</p>
                <p>Number of Topics: {u.topic_count}</p>
                {/* <UsersCard key={u.id} u={u}  selectUser={selectUser}/> */}
                <NavLink to={`/everbody/${u.id}`} onClick={()=>selectUser(u)} >
                    <button> See More</button>
                </NavLink>
            </div>
        )
    })

    return (
        <div>
            {allUsers}
        </div>
    )
}

export default EveryEverybody;