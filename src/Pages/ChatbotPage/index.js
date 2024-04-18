import React, { useContext, useEffect } from "react";
import "./chatbotPage.css";
import ChatContext from "../../Components/ChatContext";
import Menu from "../../Components/Menu";
import ChatField from "../../Components/ChatField";
const ChatbotPage = () => {
    const {activeConversation, setActiveConversation, conversations, setConversations} = useContext(ChatContext);
    useEffect(()=>{
        const savedChats = JSON.parse(localStorage.getItem("savedChats"))||[];
        setConversations(savedChats);
        const savedActiveConversation = localStorage.getItem("activeConversation");
        if (savedActiveConversation) {
            setActiveConversation(parseInt(savedActiveConversation));
        }
    },[])
    useEffect(() => {

    },[])
    return(
        <div className="chatbot-page">
            <Menu/>
            <ChatField/>
        </div>
    )
}
export default ChatbotPage;