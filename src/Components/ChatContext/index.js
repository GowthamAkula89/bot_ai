import React, { createContext, useState } from "react";
const ChatContext = createContext();
export const ChatProvider = ({children}) => {
    const [activeConversation, setActiveConversation] = useState([]);
    const [conversations, setConversations] = useState([]);
    return(
        <ChatContext.Provider value={{activeConversation, setActiveConversation, conversations, setConversations}}>
            {children}
        </ChatContext.Provider>
    )
}
export default ChatContext;