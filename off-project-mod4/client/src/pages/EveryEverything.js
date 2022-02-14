import React, { useState } from "react";
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';

function EveryEverthing () {
const [isOpen, setIsOpen] = useState(false)
const [title, setTitle] = useState("")



    return (
        <div> 
            <p>EveryEverthing</p>
                <Modal open={isOpen}>
                    <form>
                        <label>Topic:</label>
                        <input 
                        type="text"
                        value={title} //change title to topic title in backend?
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <p>Review your topic!</p>
                        <label>Review Title: </label>
                        <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    </form>
                    <button onClick={() => setIsOpen(false)}> Close </button>
                </Modal>
                <button onClick={() => setIsOpen(!isOpen)}> Create Topic </button>
        </div>

    )
}

export default EveryEverthing;