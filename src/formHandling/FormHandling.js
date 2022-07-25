import React, { useState } from 'react'

export default function FormHandling() {
    const [input, setInput] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input.age)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Name:
                    <input
                        type="text"
                        name="username"
                        value={input.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter Age:
                    <input
                        type="text"
                        name="age"
                        value={input.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter Age:
                    <input
                        type="text"
                        name="email"
                        value={input.email || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter Age:
                    <input
                        type="text"
                        name="job"
                        value={input.job || ""}
                        onChange={handleChange}
                    />
                </label>

                <input type="submit" />
            </form>
        </div>
    )
}
