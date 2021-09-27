import React from 'react';
import "./AddedMembers.css"

const AddedMembers = (props) => {
    const {name, image} = props.member;

    return (
        <div className="added-members-card">
            <div className="added-members-card-image-container">
                <img src={image} alt=""/>
            </div>
            <p>{name}</p>
        </div>
    );
};

export default AddedMembers;