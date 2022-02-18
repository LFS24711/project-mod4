import React,{ useState, useEffect } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";
import { useNavigate } from 'react-router-dom'

function TopicCard({ currentTopic, user }){
const [topic, setTopic] = useState([])
const [reviews, setReviews] = useState([]);

const navigate = useNavigate();
const ct = currentTopic

  useEffect(() => {
    // auto-login
    fetch(`/topics/${ct}`)
    .then((r) => r.json()
    .then((data) => {
        setTopic(data)
        setReviews(data.reviews)
    })
      );
  }, [ct]);

  console.log("ReviewsTest" , reviews)

    return (
        <div>
            <AddReview ct={ct} tt={topic.title} user={user} setReviews ={setReviews} reviews={reviews} />
            <p className="topic-title">{topic.title}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
            {reviews?.map((review) => <ReviewCard key={review.id} r={review} reviews={reviews} setReviews={setReviews} user={user}/> )}
            {/* {review_data} */}
        </div>
    )
}
export default TopicCard;