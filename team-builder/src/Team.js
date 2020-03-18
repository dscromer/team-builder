import React from 'react'
import styled from 'styled-components'

const Team = props => {
    const CardList = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    `
    const Card = styled.div`
        background-color: gray;
        width: 50%;
        padding: 20px;
        margin-bottom: 20px;
        border: 3px solid black;
    `
    return (
        <CardList className='team-list'>
            {props.team.map(member => (
                <Card key={member.id}>
                    <h2>{member.name}</h2>
                    <p>Role: {member.role}</p>
                    <p>Email: {member.email}</p>
                    <p>ID: {member.id}</p>
                </Card>
            ))}
        </CardList>
    )
}

export default Team;