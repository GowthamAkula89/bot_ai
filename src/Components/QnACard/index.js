import React, { useState, useEffect } from "react";
import "./qnaCard.css";
import UserIcon from "../../Assets/user-icon.png";
import AiIcon from "../../Assets/ai-icon.png";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FeedbackIcon from "../../Assets/feedback.png";
const QnACard = ({ question, answer, isQuestion, index, ratingVal, feedbackVal, handleRatingChange, handleFeedbackData }) => {
    const [feedback, setFeedback] = useState(feedbackVal);
    const [feedbackValue, setFeedbackValue] = useState("");
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [rating, setRating] = useState(ratingVal);
    //console.log("rating", index+" "+ratingVal+" "+rating)
    useEffect(() => {
        setRating(ratingVal);
        setFeedback(feedbackVal)
    }, [ratingVal,feedbackVal]);
    const getTimeString = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    const handleLikeDislike = (index, like) => {
        if (like) {
            setShowRatingModal(true);
        }
    };
    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        handleRatingChange(index, selectedRating);
        setShowRatingModal(!showRatingModal);
    };
    const handleFeedback = (e) => {
        e.preventDefault();
        setFeedbackValue(e.target.value);
        
    }
    const handleFeedbackSubmit = (close) => {
        
        const currentFeedbackValue = feedbackValue;
        setFeedback(currentFeedbackValue);
        console.log("feedback", currentFeedbackValue);
        handleFeedbackData(index, currentFeedbackValue);
        close();
    }
    return (
        <div className="qna-card">
            <img src={isQuestion ? UserIcon : AiIcon} alt="" />
            <div className="qna-section">
                <div className="qna-user">{isQuestion ? "You" : "Bot AI"}</div>
                <div className="qna-res">{isQuestion ? question : answer}</div>
                {!isQuestion &&
                    <div className="qna-rate">
                        <div className="qna-date">{getTimeString()}</div>
                        <div onClick={() => handleLikeDislike(index, true)}>
                            <AiOutlineLike />
                        </div>
                        <Popup  trigger=
                            {<div onClick={() => handleLikeDislike(index, false)}>
                            <AiOutlineDislike />
                          </div>} 
                            modal nested>
                            {
                                close => (
                                    <div className="feetback-model">
                                        <div className="card-title">
                                            <img style={{width:"40px", height : "42px"}} src={FeedbackIcon} alt=""/> 
                                            <div className="card-title-text">Provide Additional Feedback</div>
                                        </div>
                                        
                                        <div className="card-content">
                                            <input  
                                                className="enter-value" 
                                                onChange={handleFeedback} 
                                                placeholder="     Give me feedback"/>

                                            <button className="submit-btn" onClick={() => handleFeedbackSubmit(close)}>Submit</button>

                                        </div>
                                    </div>
                                )
                            }
                        </Popup>
                        
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
                {feedback !== "" &&
                    <div>{feedback}</div>
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
                
                
                
            </div>
        </div>
    );
};

export default QnACard;
