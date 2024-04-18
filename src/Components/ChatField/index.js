import React from "react";
import "./chatField.css";
const ChatField = () => {
    return(
        <div className="chat-field">
            <div className="app-title">Bot AI</div>
            <div className="input-field">
                <input className="input-value" type="text" placeholder="Message BOT AI"/>
                <button className="action-button" type="submit">Ask</button>
                <button className="action-button" type="submit">Save</button>
            </div>
        </div>
    )
}
export default ChatField;