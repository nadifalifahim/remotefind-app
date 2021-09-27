import React from 'react';
import "./TeamDetails.css"

const TeamDetails = (props) => {
    const {team} = props;
    let totalSalary = 0;
    for(let member of team){
        totalSalary = totalSalary + member.salary;
    }
    return (
        <div className="team-details-card">
            <h1>Team Details</h1>
            <p>Total Members: {team.length}</p>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default TeamDetails;