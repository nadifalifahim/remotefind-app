import React from 'react';
import AddedMembers from '../AddedMembers/AddedMembers';
import "./TeamDetails.css"

const TeamDetails = (props) => {
    const {team} = props;
    // Finding total Salary
    let totalSalary = 0;
    for(let member of team){
        totalSalary = totalSalary + member.salary;
    }
    return (
        <div>
            <div className="team-details-card">
                <h1>Team Details</h1>
                <p>Total Members: <span className="bold-text">{team.length}</span></p>
                <p>Total Yearly Salary: <span className="bold-text">$ {totalSalary}</span></p>
            </div>
            <div className="team-details-card">
                <h1>Members Added</h1>
                {
                    team.map(member => <AddedMembers key={member.id} member={member}></AddedMembers>)
                }
            </div>
        </div>
    );
};

export default TeamDetails;