import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { settoggler, users, setusers } = useContext(UserContext);

  const submitHandler = (data) => {
    // Check if user with the same email already exists
    const userExists = users.some(user => user.email === data.email);

    if (userExists) {
      // Show error toast if user exists
      toast.error('User already exists!');
      return;
    }

    // Create a new user object with a unique ID
    const newUser = {
      id: Date.now().toString(), // Simple unique ID generation
      ...data
    };

    // Add the new user to the users array
    setusers([...users, newUser]);
    // Show success toast
    toast.success('User created successfully!');
    // Automatically switch to the Signin form after successful signup
    settoggler(true);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-7 text-center text-gray-800">
        Create Your Account
      </h1>

      {/* Name Input Field */}
      <div className="mb-4">
        <label htmlFor="name" className="sr-only">Name</label> {/* Screen reader only label for accessibility */}
        <input
          {...register("name", { required: "Name is required" })} // Register input with validation rules
          type="text"
          id="name" 
          autoComplete="name" 
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 
                      ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} 
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>} 
      </div>

      {/* Email Input Field */}
      <div className="mb-4">
        <label htmlFor="email" className="sr-only">Email</label> 
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
              message: "Invalid email address"
            }
          })}
          type="email"
          id="email" 
          autoComplete="email" 
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 
                      ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} 
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} {/* Display error message */}
      </div>

      {/* Password Input Field */}
      <div className="mb-6">
        <label htmlFor="password" className="sr-only">Password</label> 
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          type="password"
          id="password" 
          autoComplete="new-password" 
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 
                      ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} // Conditional styling for errors
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>} {/* Display error message */}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 
                   transition-colors duration-300 ease-in-out font-semibold text-lg shadow-md hover:shadow-lg" // Enhanced button styling
      >
        Sign Up
      </button>

      {/* Link to Sign In */}
      <p className="mt-6 text-center text-gray-700">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => settoggler(true)} // Toggle to Signin form
          className="text-blue-600 hover:underline focus:outline-none font-medium"
        >
          Sign In
        </button>
      </p>
    </form>
  );
};

export default Signup;
