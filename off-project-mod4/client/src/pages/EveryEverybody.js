import React, { useEffect, useState } from "react";
import UsersCard from "../components/UsersCard";

function EveryEverybody({selectUser}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users")
            .then((r) => r.json()
                .then((data) => setUsers(data))
            );
    }, [])

    console.log("Users: " + users)

    const allUsers = users.map((u) => {
        return (
            <UsersCard key={u.id} u={u}  selectUser={selectUser}/>
        )
    })

    return (
        <div>
            {allUsers}
        </div>
    )
}

export default EveryEverybody;