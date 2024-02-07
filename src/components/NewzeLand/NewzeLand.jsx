import React from "react";
import './NewzeLand.css';
import NewzeLandImg from '../images/NewzeLandImg.png';
import NewzeLandtext from '../images/NewzeLandtext.png';


const NewzeLand=()=>{
    return(
        <div className="newzeland-section-for-services">
            <div className="newzeland-left-section">
                <img src={NewzeLandtext} alt="newzeland-and-offer-img" />
            </div>
            <div className="newzeland-right-section">
                <img src={NewzeLandImg} alt="newzeland-people-img" />
            </div>
        </div>
    )
}

export default NewzeLand;

