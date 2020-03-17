import React, {useState} from 'react';
import './App.css';
import Team from './Team'
import TeamForm from './TeamForm'

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Clancy McDougal',
      role: 'Web Dev',
      favoriteColor: 'Red'
    }
  ]);

  const addMemberHandler = (newMember) => {
    setTeam([...team, newMember])
  }
  
  return (
    <div>
      <h1>My Team Members</h1>
      <TeamForm addMember={addMemberHandler} />
      <Team team={team} />
    </div>
  );
}

export default App;
