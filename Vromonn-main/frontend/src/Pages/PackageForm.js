import { useState } from "react";

const PackageForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Package = {title, description, price, type};

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(Package),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTitle('');
            setDescription('');
            setPrice('');
            setType('');
            setError(null);
            console.log('new package added', json);
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new package</h3>

            <label>Package Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Description:</label>
            <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <label>Price:</label>
            <input 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <label>type:</label>
            <input 
                type="text"
                onChange={(e) => setType(e.target.value)}
                value={type}
            />

            <button>Add Package</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
};

export default PackageForm;