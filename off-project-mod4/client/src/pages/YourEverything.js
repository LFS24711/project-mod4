import React, { useEffect, useState } from "react";
import UserDetailCard from "../components/UserDetailCard";
import ReviewCard from "../components/ReviewCard";

function YourEverthing({ user }) {

  const [allReviews, setReviews] = useState([]);


  useEffect(() => {
    // auto-login
    fetch("/reviews")
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setReviews(data));}
          else {
            r.json().then((err) => {
                alert(err.errors);
            })
        }
      });
  }, []);
  
  const usersReviews = user?allReviews.filter((r) => (r.user == user.username)):null;

  return (
    <div>
      {!user?<h1>You're a nobody! Go log in!</h1>:null}
      {user?<UserDetailCard selectedUser={user} />:null}
      {usersReviews?.map((r) => <ReviewCard key={r.id} r={r} reviews={allReviews} setReviews={setReviews} user={user}/>)}
    </div>
  )
}

export default YourEverthing;