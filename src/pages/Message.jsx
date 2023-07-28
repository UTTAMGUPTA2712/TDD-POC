import { useState } from "react";

const Message = () => {
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setMessage(e.target.value);
    };
    const cleanData = () => {
        setMessage("");
    };
    return (
        <div>
            <input type="text" id="message" data-testid="messageText" placeholder="messageText" onChange={handleChange} value={message} />
            <button id="clean" data-testid="sendButton" onClick={cleanData}>
                CLEAN
            </button>
        </div>
    );
};

export default Message;
