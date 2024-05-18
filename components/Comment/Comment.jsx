import React, { useState, useEffect } from 'react'
import { FcLike, FcDislike } from 'react-icons/fc'
import { FaPaperPlane } from 'react-icons/fa'

const CommentForm = () => {
    const [comment, setComment] = useState('')
    const [commentsList, setCommentsList] = useState([])

    useEffect(() => {
        // Function to fetch comments data from the API
        const fetchComments = async () => {
            try {
                // Get the id from localStorage
                const id = localStorage.getItem('id')

                // Fetch comments data from the API with the id
                const response = await fetch(
                    `http://localhost:3000/api/comment?id=${id}`
                )

                if (!response.ok) {
                    throw new Error('Failed to fetch comments')
                }

                const commentsData = await response.json()
                setCommentsList(commentsData)
            } catch (error) {
                console.error('Error fetching comments:', error)
            }
        }

        // Call the fetchComments function when the component mounts
        fetchComments()
    }, [])
    const handleChangeComment = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Submit the comment to the API
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                commenta: comment,
                useremail: 'Asdasd', // Assuming fixed user email for now
                lessonname: 'skf', // Assuming fixed lesson name for now
                id: localStorage.getItem('id'),
            }),
        }

        try {
            const res = await fetch(
                `http://localhost:3000/api/comment`,
                postData
            )
            const response = await res.json()
            console.log(response)

            // Add the new comment to the comments list
            setCommentsList([
                ...commentsList,
                {
                    author: 'Author Name',
                    comment: comment,
                    likes: 0,
                    unlikes: 0,
                },
            ])

            // Clear the comment field
            setComment('')
        } catch (error) {
            console.error('Error adding comment:', error)
        }
    }

    return (
        <div className="my-8 p-4 border rounded-md shadow-md">
            <div>
                <h2 className="text-xl font-semibold mb-4">Сэтгэгдлүүд:</h2>
                <ul>
                    {commentsList.map((item, index) => (
                        <li key={index} className="mb-2 flex items-center">
                            {/* Replace with actual user profile image */}
                            <img
                                src="/profile.jpg"
                                alt="User profile"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <span className="font-semibold">
                                {item.author}:
                            </span>{' '}
                            {item.userEmail}
                            {item.comments}
                            <div className="ml-auto flex">
                                <button
                                    onClick={() => handleLike(index)}
                                    className="text-gray-500 hover:text-blue-500 focus:outline-none"
                                >
                                    <FcLike />
                                </button>
                                <span className="mx-1">{item.likes}</span>
                                <button
                                    onClick={() => handleUnlike(index)}
                                    className="text-gray-500 hover:text-red-500 focus:outline-none"
                                >
                                    <FcDislike />
                                </button>
                                <span className="mx-1">{item.unlikes}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
                <label htmlFor="comment" className="block mb-2">
                    Сэтгэгдэл:
                </label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={handleChangeComment}
                    placeholder="Та сэтгэгдлээ бидэнтэй хуваалцана уу.."
                    rows={4}
                    cols={50}
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                    type="submit"
                    className="mt-2 flex items-center justify-center px-4 py-2 bg-secondary-dark text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600"
                >
                    Илгээх{' '}
                    <FaPaperPlane className="ml-2 hover:animate-bounce" />
                </button>
            </form>
        </div>
    )
}

export default CommentForm
