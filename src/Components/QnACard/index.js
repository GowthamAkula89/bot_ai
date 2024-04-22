import React, { useState, useContext } from "react";
import "./qnaCard.css";
import UserIcon from "../../Assets/user-icon.png";
import AiIcon from "../../Assets/ai-icon.png";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import ChatContext from "../ChatContext";
import Modal from "react-modal";
const QnACard = ({ question, answer, isQuestion, index, ratingVal, handleRatingChange }) => {
    const [showModal, setShowModal] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [feedbackMessageIndex, setFeedbackMessageIndex] = useState(null);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [rating, setRating] = useState(ratingVal);
    const {activeConversation, setActiveConversation, conversations, setConversations} = useContext(ChatContext);
    const getTimeString = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    console.log("rating-val",ratingVal);
    const handleLikeDislike = (index, like) => {
        if (like) {
            setShowRatingModal(true);
            setFeedbackMessageIndex(index);
        } else {
            setShowModal(true);
            setFeedbackMessageIndex(index);
        }
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        handleRatingChange(index, selectedRating);
        setShowRatingModal(!showRatingModal);
    };
    const handleCancel = () => {
        setShowModal(false);
        
    };
    return (
        <div className="qna-card">
            <img src={isQuestion ? UserIcon : AiIcon} alt="" />
            <div className="qna-section">
                <div className="qna-user">{isQuestion ? "You" : "Bot AI"}</div>
                <div className="qna-res">{isQuestion ? question : answer}</div>
                {!isQuestion &&
                    <div className="qna-rate">
                        <div className="qna-date">{getTimeString()}</div>
                        <AiOutlineLike onClick={() => handleLikeDislike(index, true)} />
                        <AiOutlineDislike onClick={() => handleLikeDislike(index, false)} />
                    </div>
                }
                {rating > 0 && 
                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            onClick={() => handleStarClick(i + 1)}
                            color={i < rating ? "#ffc107" : "#e4e5e9"}
                            size={25}
                            style={{ marginRight: 5, cursor: "pointer" }}
                        />
                    ))}
                </div>
                }
                {showRatingModal && !isQuestion &&
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                onClick={() => handleStarClick(i + 1)}
                                color={i < rating ? "#ffc107" : "#e4e5e9"}
                                size={25}
                                style={{ marginRight: 5, cursor: "pointer" }}
                            />
                        ))}
                    </div>
                }
                
                <Modal
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                    contentLabel="Add Money Modal"
                    className="modal"
                    overlayClassName="modal-overlay"
                >
                    <div>
                        <h2 className="card-title">Feedback</h2>
                        <div className="add-balance">
                            <input  className="enter-value" placeholder="     Give me feedback"/>
                            <div className="add-cancel-btns">
                                <button className="close-btn" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
                
            </div>
        </div>
    );
};

export default QnACard;
