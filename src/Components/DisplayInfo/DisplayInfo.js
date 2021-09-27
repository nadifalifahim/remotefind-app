import React, { useState } from "react";
import Card from "../Card/Card";
import TeamDetails from "../TeamDetails/TeamDetails";
import "./DisplayInfo.css"

const DisplayInfo = (props) => {
  const [team, setTeam] = useState([]);

  const updateTeam = (person) => {
    if(!team.includes(person)){
       setTeam([...team, person])
    }
  }
  return (
    <div>
      <div className="info-container">
        <div>
          <div className="display-heading">
            <h2>Available Members</h2>
          </div>
          <div className="card-container">
            {props.people.map(person => <Card key={person.id} personInfo={person} updateTeam={updateTeam}></Card>)}
          </div>
        </div>
        <div>
          <TeamDetails team={team}></TeamDetails>
        </div>
      </div>
    </div>
  )
};

export default DisplayInfo;
