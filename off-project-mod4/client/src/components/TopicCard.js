import React,{ useState, useEffect } from "react";
import AddReview from "./AddReview";

function TopicCard({ currentTopic, user }){
const [topic, setTopic] = useState([])


const ct = currentTopic

  useEffect(() => {
    // auto-login
    fetch(`/topics/${ct}`)
    .then((r) => r.json()
    .then((data) => setTopic(data))
      );
  }, [ct]);

console.log(topic)

const review_data = topic.reviews?.map((t) => {
    return (
    <div key={t.id}>
        <p>{t.title}</p>
        <p>{t.rating}</p>
        <p>{t.text_content}</p>
        <p>Posted by {t.user} at {t.created_at}</p>
    </div>
    )
});



    return (
        <div>
            <p>{topic.title}</p>
            <AddReview ct={ct} user={user}/>
            {/* {topic.reviews?.map((r) => <p key={r.id}> {r.title} </p>)} */}
            {review_data}
        </div>
    )
}
export default TopicCard;