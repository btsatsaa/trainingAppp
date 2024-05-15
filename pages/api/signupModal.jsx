// import { useState } from 'react';
// import { IoCloseOutline } from 'react-icons/io5';

// const SignupModal = ({ onClose }) => {
//   const [users_name, setName] = useState('');
//   const [users_phone, setPhone] = useState('');
//   const [users_email, setEmail] = useState('');
//   const [users_password, setPassword] = useState('');
//   const [agreementChecked, setAgreementChecked] = useState(false);

//   const handleSignup = async () => {
//     // Perform client-side validation
//     if (!users_name || !users_phone || !users_email || !users_password) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     if (!agreementChecked) {
//       alert('Please agree to the terms and conditions.');
//       return;
//     }

//     try {
//       const response = await fetch('/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           users_name,
//           users_phone,
//           users_email,
//           users_password,
//         }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         if (result.success) {
//           // Store token in local storage
//           localStorage.setItem('token', result.token);
//           alert('Signup successful!');
//           onClose();
//         } else {
//           alert('Signup failed. Please try again.');
//         }
//       } else {
//         alert('Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       alert('Internal Server Error. Please try again later.');
//     }
//   };

// };

// export default SignupModal;
