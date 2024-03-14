// // components/CustomNotification.js
// import { useState, useEffect } from 'react';

// const Notification = ({ message, type, onClose, triggerPosition }) => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     // Automatically close the notification after 5 seconds
//     const timeout = setTimeout(() => {
//       setVisible(false);
//       onClose();
//     }, 5000);

//     // Clear the timeout if the component unmounts or notification is closed manually
//     return () => clearTimeout(timeout);
//   }, [onClose]);

//   const handleClose = () => {
//     setVisible(false);
//     onClose();
//   };

//   return (
//     <div
//       className={`fixed ${
//         triggerPosition ? `top-${triggerPosition.top} left-${triggerPosition.left}` : 'bottom-4 right-4'
//       } bg-${type}-500 text-white p-4 rounded-md shadow-md transition duration-300 transform ${
//         visible ? 'translate-y-0' : 'translate-y-full'
//       }`}
//     >
//       <div className="flex items-center justify-between bg-gray-300 ">
//         <span className='text-red-400'>{message}</span>
//         <button onClick={handleClose} className="text-black text-4xl">
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Notification;
////////////
// components/CustomNotification.js
import { useState, useEffect } from 'react';

const Notification = ({ message, type, onClose, triggerPosition, notificationCount }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically close the notification after 5 seconds
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);

    // Clear the timeout if the component unmounts or notification is closed manually
    return () => clearTimeout(timeout);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div
      className={`fixed ${
        triggerPosition ? `top-${triggerPosition.top} left-${triggerPosition.left}` : 'bottom-4 right-4'
      } bg-${type}-500 text-white p-4 rounded-md shadow-md transition duration-300 transform ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between bg-gray-300 ">
        <span className='text-red-400'>{message}</span>
        <div className="flex items-center">
          <span className="text-black mr-2">{notificationCount}</span>
          <button onClick={handleClose} className="text-black text-4xl">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
