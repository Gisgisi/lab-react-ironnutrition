import { useState } from 'react';

const Form = ({ food, setfoods }) => {
    const [newName, setNewName] = useState('')
    const [newCalories, setNewCalories] = useState(0)
    const [newImage, setNewImage] = useState('')
    const [newServings, setNewServings] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        console.log({ newName, newCalories, setNewCalories, newServings })
        setfoods([
            ...food,
            {
                name: newName,
                calories: newCalories,
                image: newImage,
                servings: newServings,
            },
        ])
        setNewName('')
        setNewCalories(0)
        setNewImage('')
        setNewServings(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type='text'
                    value={newName}
                    onChange={event => setNewName(event.target.value)}
                />
            </label>
            <label>
                Calories
                <input
                    type='number'
                    value={newCalories}
                    onChange={event => setNewCalories(parseInt(event.target.value))}
                />
            </label>
            <label>
                Image
                <input
                    type='text'
                    value={newImage}
                    onChange={event => setNewImage(event.target.value)}
                />
            </label>
            <label>
                Servings
                <input
                    type='number'
                    value={newServings}
                    onChange={event => setNewServings(event.target.value)}
                />
            </label>
            <button type='submit'>Add New Food</button>
        </form>
    )
}

export default Form