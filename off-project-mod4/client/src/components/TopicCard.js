import React,{ useState, useEffect } from "react";

function TopicCard({ currentTopic }){
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
    </div>
    )
});



    return (
        <div>
            <p>{topic.title}</p>
            {/* {topic.reviews?.map((r) => <p key={r.id}> {r.title} </p>)} */}
            {review_data}
        </div>
    )
}
export default TopicCard;