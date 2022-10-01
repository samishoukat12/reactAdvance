import React from 'react'

export default function Button({ title, ctaHandler }) {
    return (
        <button onClick={ctaHandler}>{title}</button>
    )
}
