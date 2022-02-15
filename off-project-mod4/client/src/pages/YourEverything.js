import React, {useEffect,useState} from "react";

function YourEverthing ({you}) {

    const [yourTopics,setYourTopics] = useState([])

    useEffect(() => {
        // auto-login
        fetch("/your_every")
          .then((r) => {
            if (r.ok) {
              r.json().then((data) => setYourTopics(data));
            }
          });
      }, []);

      const topics = yourTopics.map


    return (
        <div> {you.username}
        

        </div>

    )
}

export default YourEverthing;