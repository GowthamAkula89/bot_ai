import React, { useState, useEffect, useContext } from "react";
import "./chatField.css";
import QnACard from "../QnACard";
import ChatContext from "../../Components/ChatContext";
import AiIcon from "../../Assets/ai-icon.png";
const ChatField = () => {
    const { activeConversation, setActiveConversation } = useContext(ChatContext);
    const [question, setQuestion] = useState("");
    const conversationData = require("../../Data/chatConversations.json");
    useEffect(() => {
        const savedActiveConversation = JSON.parse(localStorage.getItem("activeConversation")) || [];
        setActiveConversation(savedActiveConversation);
    }, [setActiveConversation]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim() !== "") {
            const answer = conversationData.find((que) => que.question === question) || "Add some more details to understand";
            console.log("Answer", answer)
            const newConversation = { question: question, answer: answer.response };
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
            <div className="app-hero-section">
                <div className="hero-section-text">How Can I Help You Today?</div>
                <img src={AiIcon} alt="logo-ai"/>
            </div>
            
            {activeConversation.map((conversation, index) => (
                <div key={index}>
                    <QnACard key={index+1} question={conversation.question} isQuestion={true} />
                    <QnACard key={index+2} answer={conversation.answer}  isAnswer={true}/>
                </div>
                
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
