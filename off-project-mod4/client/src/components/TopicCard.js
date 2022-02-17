import React,{ useState, useEffect } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

function TopicCard({ currentTopic, user }){
const [topic, setTopic] = useState([])
const [reviews, setReviews] = useState([]);


const ct = currentTopic

  useEffect(() => {
    // auto-login
    fetch(`/topics/${ct}`)
    .then((r) => r.json()
    .then((data) => {
        setTopic(data);
        setReviews(data)
    })
      );
  }, [ct]);

console.log(topic)
console.log(reviews)


    return (
        <div>
            <AddReview ct={ct} user={user} addReview ={setReviews} reviews={reviews} />
            <p>{topic.title}</p>
            {topic.reviews?.map((review) => <ReviewCard key={review.id} r={review} reviews={reviews} setReviews={setReviews}/> )}
            {/* {review_data} */}
        </div>
    )
}
export default TopicCard;