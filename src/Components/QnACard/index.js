import React from "react";
import "./qnaCard.css";
import UserIcon from "../../Assets/user-icon.png";
const QnACard = ({question}) => {
    const getTimeString = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    return(
        <div className="qna-card">
            <img src={UserIcon} alt=""/>
            <div className="qna-section">
                <div className="qna-user">You</div>
                <div className="qna-res">{question}</div>
                <div className="qna-date">{getTimeString()}</div>
            </div>
        </div>
    )
}
export default QnACard;