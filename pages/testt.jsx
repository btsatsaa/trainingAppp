import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const App = () => {
    const [commentsList, setCommentsList] = useState([])
    const [commentType, setCommentType] = useState('Active')
    const router = useRouter()

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/reqCom?type=${commentType}`
                )

                if (response.status !== 200) {
                    throw new Error('Failed to fetch comments')
                }

                setCommentsList(response.data)
            } catch (error) {
                console.error('Error fetching comments:', error)
            }
        }

        fetchComments()
    }, [commentType])

    const handleShowActive = () => {
        setCommentType('Active')
    }

    const handleShowPending = () => {
        setCommentType('Pending')
    }
    const handleShowInsert = () => {
        router.push('/addUser')
    }

    const handleUpdateStatus = async (email, status) => {
        try {
            await axios.put(`http://localhost:3000/api/reqCom`, {
                email: email,
                type: status,
            })

            // Update local state after successful update
            const updatedList = commentsList.map((comment) => {
                if (comment.com_email === email) {
                    return { ...comment, com_type: status }
                }
                return comment
            })
            setCommentsList(updatedList)
        } catch (error) {
            console.error('Error updating status:', error)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Comments List</h1>
            <div className="mb-4">
                <button
                    onClick={handleShowActive}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                    Active
                </button>
                <button
                    onClick={handleShowPending}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Pending
                </button>
                <button
                    onClick={handleShowInsert}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    AddLesson
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {commentsList.map((comment, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4"
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
                        {/* Render other fields */}
                        {comment.com_type === 'Pending' && (
                            <button
                                onClick={() =>
                                    handleUpdateStatus(
                                        comment.com_email,
                                        'Active'
                                    )
                                }
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Accept
                            </button>
                        )}
                        {comment.com_type === 'Active' && (
                            <button
                                onClick={() =>
                                    handleUpdateStatus(
                                        comment.com_email,
                                        'Pending'
                                    )
                                }
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Decline
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
