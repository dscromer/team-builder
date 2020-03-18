import React, {useState} from 'react';
import './App.css';
import Team from './Team'
import TeamForm from './TeamForm'

function App() {
  const [team, setTeam] = useState([
    {
      id: Date.now(),
      name: 'John Doe',
      role: 'Web Dev',
      email: 'jdoe@me.me'
    }
  ]);

  const addMemberHandler = (newMember) => {
    setTeam([...team, newMember])
  }

  return (
    <div className='page'>
      <h1 className='title'>My Team Members</h1>
      <TeamForm addMember={addMemberHandler} />
      <Team team={team} />
    </div>
  );
}

export default App;
