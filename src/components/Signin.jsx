import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { settoggler, users } = useContext(UserContext);

  const submitHandler = (data) => {
    // Find user by email and password
    const user = users.find(user => user.email === data.email && user.password === data.password);

    if (user) {
      // Show success toast if user found
      toast.success('User signed in successfully!');
      // In a real app, you would typically set a logged-in state or token here
    } else {
      // Show error toast if no user found or  incorrect credentials
      toast.error('No user found or incorrect credentials!');
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-7 text-center text-gray-800">
        Welcome Back!
      </h1>

      {/* Email Input Field */}
      <div className="mb-4">
        <label htmlFor="email" className="sr-only">Email</label> 
        <input
          {...register("email", { required: "Email is required" })} 
          type="email"
          id="email" 
          autoComplete="email" 
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 
                      ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} 
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>} 
      </div>

      {/* Password Input Field */}
      <div className="mb-6">
        <label htmlFor="password" className="sr-only">Password</label> 
        <input
          {...register("password", { required: "Password is required" })} // Register input with validation rules
          type="password"
          id="password" 
          autoComplete="current-password" 
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 
                      ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} 
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>} 
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 
                   transition-colors duration-300 ease-in-out font-semibold text-lg shadow-md hover:shadow-lg" 
      >
        Sign In
      </button>

      {/* Link to Sign Up */}
      <p className="mt-6 text-center text-gray-700">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={() => settoggler(false)} // Toggle to Signup form
          className="text-blue-600 hover:underline focus:outline-none font-medium"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
};

export default Signin;
