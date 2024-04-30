import React, {useContext, useEffect} from "react";
import "./chatbotPage.css";
import ChatContext from "../../Components/ChatContext";
import Menu from "../../Components/Menu";
import ChatField from "../../Components/ChatField";
import { useState } from "react";
const ChatbotPage = () => {
   const {activeConversation, setActiveConversation, setConversations} = useContext(ChatContext); 
   const [chatIndex, setChatIndex] = useState(-1);
   useEffect (() => {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setConversations(chatHistory);
   },[setConversations])
   const handleNewChat = () => {
    if (chatIndex !== -1){
        setActiveConversation([]);
        localStorage.setItem("activeConversation",JSON.stringify([]));
        setChatIndex(-1)
    }
    else if(activeConversation.length > 0 ){
        const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
        chatHistory.push(activeConversation);
        localStorage.setItem("chatHistory",JSON.stringify(chatHistory));
        setConversations(chatHistory);
        setActiveConversation([]);
        localStorage.setItem("activeConversation",JSON.stringify([]));
    }
   }
   const handleChatSave = () => {
    console.log("chatindex",chatIndex)
    if(chatIndex !== -1){
        const chatHistory = JSON.parse(localStorage.getItem("chatHistory"))
        chatHistory[chatIndex] = activeConversation;
        console.log("chatHistory",chatHistory)
        localStorage.setItem("chatHistory",JSON.stringify(chatHistory));
        setConversations(chatHistory);
    }  
   }
    return(
        <div className="chatbot-page">
            <Menu handleNewChat={handleNewChat} setChatIndex={setChatIndex}/>
            <ChatField handleChatSave={handleChatSave}/>
        </div>
    )
}
export default ChatbotPage;