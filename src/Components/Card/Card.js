import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import "./Card.css"

const Card = (props) => {
    const [addToTeamStatus, setAddToTeamStatus] = useState("Add to team");
    const [addToTeamIconStatus, setAddToTeamIconStatus] = useState(faUserPlus);
    const { name, designation, location, age, salary, image} = props.personInfo;
    const addButtonHandler = () => {
        setAddToTeamStatus("Added");
        setAddToTeamIconStatus(faUserCheck);
    }
    return (
        <div className="card-item-container">
            <div className="card-image-container">
                <img src={image} alt="" className="card-image"/>
            </div>
            <h2>{name}</h2>
            <p className="designation-highlight">{designation}</p>
            <p>Age: <span className="bold-text">{age}</span></p>
            <p>Location: <span className="bold-text">{location}</span></p>
            <p>Salary: <span className="bold-text">${salary}</span></p>
            <button onClick={() => {props.updateTeam(props.personInfo); addButtonHandler(); }}> <FontAwesomeIcon icon={addToTeamIconStatus} /> {addToTeamStatus}</button>
        </div>
    );
};

export default Card;