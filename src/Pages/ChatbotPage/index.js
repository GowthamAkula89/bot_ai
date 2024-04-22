import React, {useContext, useEffect} from "react";
import "./chatbotPage.css";
import ChatContext from "../../Components/ChatContext";
import Menu from "../../Components/Menu";
import ChatField from "../../Components/ChatField";
const ChatbotPage = () => {
   const {activeConversation, setActiveConversation, setConversations} = useContext(ChatContext); 
   useEffect (() => {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setConversations(chatHistory);
   },[])
   const handleNewChat = () => {
    if(activeConversation.length > 0){
        const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
        chatHistory.push(activeConversation);
        localStorage.setItem("chatHistory",JSON.stringify(chatHistory));
        setConversations(chatHistory);
        setActiveConversation([]);
        localStorage.setItem("activeConversation",JSON.stringify([]));
    }
   }
    return(
        <div className="chatbot-page">
            <Menu handleNewChat={handleNewChat}/>
            <ChatField handleNewChat={handleNewChat}/>
        </div>
    )
}
export default ChatbotPage;