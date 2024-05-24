import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [commentsList, setCommentsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const storedPhone = localStorage.getItem('phone')
                if (!storedPhone)
                    throw new Error('Phone number not found in localStorage')

                const response = await axios.get(
                    `http://localhost:3000/api/userreq?type=${storedPhone}`
                )

                if (response.status !== 200) {
                    throw new Error('Failed to fetch comments')
                }

                setCommentsList(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching comments:', error)
                setError('Failed to fetch comments')
                setLoading(false)
            }
        }

        fetchComments()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Хүсэлтүүд</h1>
            <div className="mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {commentsList.map((comment, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg shadow-md p-4 ${
                            comment.com_type === 'Active'
                                ? 'border border-green-500'
                                : 'border border-yellow-500'
                        }`}
                    >
                        <p className="text-lg font-semibold">
                            {comment.com_name}
                        </p>
                        <p className="text-gray-600 mb-2">
                            {comment.com_email}
                        </p>
                        <p className="text-gray-600 mb-2">
                            {comment.com_phone}
                        </p>
                        <p className="text-gray-600 mb-2">{comment.com_type}</p>
                        {/* Render other fields */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
