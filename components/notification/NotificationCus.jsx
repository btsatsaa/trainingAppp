// pages/index.js or your component file
import Notification from './Notification';
import { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

const NotificationCus = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [triggerPosition, setTriggerPosition] = useState(null);

  const handleNotification = (event) => {
    setShowNotification(true);
    setTriggerPosition({
      top: event.clientY,
      left: event.clientX,
    });
    setNotificationCount((prevCount) => prevCount + 1);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="relative">
      <IoMdNotificationsOutline
        onClick={(e) => handleNotification(e)}
        className="text-4xl dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      />

      {notificationCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full ">
          {notificationCount}
        </div>
      )}

      {showNotification && (
        <Notification
          message="Танд энэ өдрийн мэндийг хүргэе"
          type="blue" // Change to 'red', 'blue', etc., based on your design
          onClose={closeNotification}
          triggerPosition={triggerPosition}
          notificationCount={notificationCount}
        />
      )}
    </div>
  );
};

export default NotificationCus;
