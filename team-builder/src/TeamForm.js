import React, {useState} from 'react'

const TeamForm = props => {
    const [formState, setFormState] = useState({
        name: '',
        role: '',
        favoriteColor: ''
    })

    const changeHandler = event => {
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        props.addMember({
            ...formState,
            id: Date.now()
        });
        setFormState({
            name: '',
            role: '',
            favoriteColor: ''
        })
        
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                name='name'
                value={formState.name}
                onChange={changeHandler}
                placeholder='Enter member name'
            />
            <label htmlFor='role'>Role:</label>
            <input
                type='text'
                name='role'
                value={formState.role}
                onChange={changeHandler}
                placeholder='Enter member role'
            />
            <label htmlFor='favorite-color'>Favorite Color:</label>
            <input
                type='text'
                name='favoriteColor'
                value={formState.favoriteColor}
                onChange={changeHandler}
                placeholder='Enter member favorite color'
            />
            <button type='submit'>Add Team Member!</button>
        </form>
    )
}

export default TeamForm;