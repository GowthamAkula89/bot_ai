import React,{useState} from "react";
import "./menu.css";
import AiIcon from "../../Assets/ai-icon.png"
import EditIcon from "../../Assets/edit.png"
const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <div>
            <div className="menu">
                <div className="new-chat-btn">
                    <img style={{width:"32px",height:"32px"}} src={AiIcon} alt="img"/>
                    <div className="new-chat-text">New Chat</div>
                    <img className="edit-icon" src={EditIcon} alt=""/>
                </div>
                <div className="conversation-list">
                    <div className="conversation-item">
                        Conversation 1
                    </div>
                    <div className="conversation-item">
                        Conversation 2
                    </div>
                    <div className="conversation-item">
                        Conversation 3
                    </div>
                    <div className="conversation-item">
                        Conversation 4
                    </div>
                    <div className="conversation-item">
                        Conversation 5
                    </div>
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
                {menuOpen && 
                     <div className="menu-mobile-view">
                     <div className="new-chat-btn">
                         <img style={{width:"32px",height:"32px"}} src={AiIcon} alt="img"/>
                         <div className="new-chat-text">New Chat</div>
                         <img className="edit-icon" src={EditIcon} alt=""/>
                     </div>
                     <div className="conversation-list">
                         <div className="conversation-item">
                             Conversation 1
                         </div>
                         <div className="conversation-item">
                             Conversation 2
                         </div>
                         <div className="conversation-item">
                             Conversation 3
                         </div>
                         <div className="conversation-item">
                             Conversation 4
                         </div>
                         <div className="conversation-item">
                             Conversation 5
                         </div>
                     </div>
                 </div>
                }
            </div>
        </div>
    )
}
export default Menu;