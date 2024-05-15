import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaPaperPlane } from "react-icons/fa";

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [likedComments, setLikedComments] = useState([]);

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleLike = (index) => {
    if (!likedComments.includes(index)) {
      const updatedCommentsList = [...commentsList];
      updatedCommentsList[index].likes += 1;
      setCommentsList(updatedCommentsList);
      setLikedComments([...likedComments, index]);
    } else {
      const updatedCommentsList = [...commentsList];
      updatedCommentsList[index].likes -= 1;
      setCommentsList(updatedCommentsList);
      setLikedComments(likedComments.filter(item => item !== index));
    }
  };

  const handleUnlike = (index) => {
    if (likedComments.includes(index)) {
      const updatedCommentsList = [...commentsList];
      updatedCommentsList[index].unlikes += 1;
      setCommentsList(updatedCommentsList);
      setLikedComments(likedComments.filter(item => item !== index));
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentsList([...commentsList, { author, comment, likes: 0, unlikes: 0 }]);
    setComment('');
    setAuthor('');
  };

  return (
    <div className="my-8 p-4 border rounded-md shadow-md">
      <div>
        <h2 className="text-xl font-semibold mb-4">Сэтгэгдлүүд:</h2>
        <ul>
          {commentsList.map((item, index) => (
            <li key={index} className="mb-2 flex items-center">
              <img
                src="/profile.jpg" // Replace with the URL of your user avatar image
                alt="User profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              
              <span className="font-semibold">{item.author}:</span> {item.comment}
              <div className="ml-auto flex">
                <button onClick={() => handleLike(index)} className="text-gray-500 hover:text-blue-500 focus:outline-none">
                  <FcLike />
                </button>
                <span className="mx-1">{item.likes}</span>
                <button onClick={() => handleUnlike(index)} className="text-gray-500 hover:text-red-500 focus:outline-none">
                  <FcDislike />
                </button>
                <span className="mx-1">{item.unlikes}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="comment" className="block mb-2 ">Сэтгэгдэл:</label>
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
  Илгээх
  <FaPaperPlane className="ml-2 hover:animate-bounce" />
</button>
      </form>
    </div>
  );
};

export default CommentForm;
