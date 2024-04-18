import React, { useState, useEffect, useContext } from "react";
import "./chatField.css";
import QnACard from "../QnACard";
import ChatContext from "../../Components/ChatContext";

const ChatField = () => {
    const { activeConversation, setActiveConversation } = useContext(ChatContext);
    const [question, setQuestion] = useState("");

    useEffect(() => {
        const savedActiveConversation = JSON.parse(localStorage.getItem("activeConversation")) || [];
        setActiveConversation(savedActiveConversation);
    }, [setActiveConversation]); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim() !== "") {
            const newConversation = { question: question, answer: "Your AI response" };
            setActiveConversation([...activeConversation, newConversation]);
            setQuestion("");
            localStorage.setItem("activeConversation", JSON.stringify([...activeConversation, newConversation]));
        }
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    return (
        <div className="chat-field">
            <div className="app-title">Bot AI</div>
            {activeConversation.map((conversation, index) => (
                <QnACard key={index} question={conversation.question} answer={conversation.answer} />
            ))}
            <form className="input-field" onSubmit={handleSubmit}>
                <input
                    className="input-value"
                    type="text"
                    placeholder="Message BOT AI"
                    value={question}
                    onChange={handleQuestionChange}
                />
                <button className="action-button" type="submit">Ask</button>
                <button className="action-button" type="button">Save</button>
            </form>
        </div>
    );
};

export default ChatField;
