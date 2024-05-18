import React, { useState, useEffect } from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

function SaveButton() {
    const [isSaved, setIsSaved] = useState(false)

    const handleSave = async () => {
        // Toggle the saved state
        setIsSaved((prevIsSaved) => !prevIsSaved)

        try {
            // Get the id and number from localStorage
            const id = localStorage.getItem('id')
            const number = localStorage.getItem('phone')

            // Send a POST request with the id and number
            const response = await fetch(
                'http://localhost:3000/api/savedLesson',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id, number }),
                }
            )

            if (!response.ok) {
                throw new Error('Failed to save data')
            }

            // Handle successful response if needed
        } catch (error) {
            console.error('Error saving data:', error)
            // Handle error if needed
        }
    }

    return (
        <div>
            <button onClick={handleSave}>
                {isSaved ? <IoHeart /> : <IoHeartOutline />}
            </button>
        </div>
    )
}

export default SaveButton
