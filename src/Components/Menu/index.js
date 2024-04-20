import React, { useState, useContext } from "react";
import "./menu.css";
import AiIcon from "../../Assets/ai-icon.png";
import EditIcon from "../../Assets/edit.png";
import ChatContext from "../ChatContext";
const Menu = ({ handleNewChat }) => {
    const { setActiveConversation, conversations } = useContext(ChatContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleChat = (index) => {
        return () => {
            console.log("conversationlist", conversations[index]);
            setActiveConversation(conversations[index]);
            setMenuOpen(!menuOpen);
        };
    };
    const handleNewChatAction = () => {
        toggleMenu()
        handleNewChat()
    }
    return (
        <div>
            <div className="menu">
                <div className="new-chat-btn" onClick={handleNewChatAction}>
                    <img style={{ width: "32px", height: "32px" }} src={AiIcon} alt="img" />
                    <div className="new-chat-text">New Chat</div>
                    <img className="edit-icon" src={EditIcon} alt="" />
                </div>
                <div className="conversation-list">
                    {conversations.map((conversation, index) => (
                        <div className="conversation-item" key={index} onClick={handleChat(index)}>
                            Conversation {index + 1}
                        </div>
                    ))}
                </div>
            </div>
            <div className="menu-mobile-screen">
                <div className="menu-navbar">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="app-title">Bot AI</div>
                </div>
                {menuOpen && (
                    <div className="menu-mobile-view">
                        <div className="new-chat-btn" onClick={handleNewChat}>
                            <img style={{ width: "32px", height: "32px" }} src={AiIcon} alt="img" />
                            <div className="new-chat-text">New Chat</div>
                            <img className="edit-icon" src={EditIcon} alt="" />
                        </div>
                        <div className="conversation-list">
                            {conversations.map((conversation, index) => (
                                <div className="conversation-item" key={index} onClick={handleChat(index)}>
                                    Conversation {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
