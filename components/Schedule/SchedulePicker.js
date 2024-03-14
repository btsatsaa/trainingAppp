// components/SchedulePicker.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SchedulePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className="box-widget fl-wrap">
      <div className="box-widget-content">
        <h2>Schedule Picker</h2>
        <DatePicker selected={selectedDate} onChange={onDateChange} />
        {/* Add your scheduling logic and content here */}
        <div className="schedule-item">8:00 AM - Meeting</div>
        <div className="schedule-item">12:00 PM - Lunch</div>
        <div className="schedule-item">3:00 PM - Presentation</div>
        {/* Add more schedule items as needed */}
      </div>
    </div>
  );
};

export default SchedulePicker;
