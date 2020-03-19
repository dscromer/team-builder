import React, {useState} from 'react'

const TeamForm = props => {
    const [formState, setFormState] = useState({
        name: '',
        role: '',
        email: ''
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
            email: ''
        })
        
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='name'>Name: </label>
            <input
                type='text'
                name='name'
                value={formState.name}
                onChange={changeHandler}
                placeholder='Enter member name'
            />
            <label htmlFor='role'>Role: </label>
            <input
                type='text'
                name='role'
                value={formState.role}
                onChange={changeHandler}
                placeholder='Enter member role'
            />
            <label htmlFor='email'>Email: </label>
            <input
                type='text'
                name='email'
                value={formState.email}
                onChange={changeHandler}
                placeholder='Enter member favorite color'
            />
            <button className='add' type='submit'>Add Team Member!</button>
        </form>
    )
}

export default TeamForm;