// import React, { useState } from 'react';

// function MyForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (event:any) => {
//     event.preventDefault();
//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length > 0) {
//       // Form has errors, handle them
//       setErrors(validationErrors);
//     } else {
//       // Form is valid, submit the data
//       console.log('Submitting form:', { name, email });
//     }
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (name.trim() === '') {
//       errors.name = 'Name is required';
//     }

//     if (email.trim() === '') {
//       errors.email = 'Email is required';
//     } else if (!isValidEmail(email)) {
//       errors.email = 'Invalid email address';
//     }

//     return errors;
//   };

//   const isValidEmail = (value) => {
//     // Add your email validation logic here
//     // This is a simple example, you can use regex or other validation methods
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       {errors.name && <div className="error">{errors.name}</div>}

//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {errors.email && <div className="error">{errors.email}</div>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
export {}