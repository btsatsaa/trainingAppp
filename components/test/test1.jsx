// Your React component
import { useState } from 'react';

export default function LessonForm() {
  const [lessonData, setLessonData] = useState({
    lesson_name: '',
    lesson_price: '',
    lesson_course: '',
    category: '',
    lesson_address: '',
    lesson_info: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/lessons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lessonData)
      });
      if (response.ok) {
        // Lesson inserted successfully
        console.log('Lesson inserted successfully');
      } else {
        // Error inserting lesson
        console.error('Error inserting lesson');
      }
    } catch (error) {
      console.error('Error inserting lesson:', error);
    }
  };

  const handleChange = (e) => {
    setLessonData({ ...lessonData, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-center px-4 py-6">
      <span className="text-lg text-ternary-dark dark:text-ternary-light">
        Category: {lessonData.category}<br />
        Address: {lessonData.lesson_address}
      </span>
    </div>
  );
}
