import { useState, useContext } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Users from './components/Users';
import { UserContext } from './context/UserContext';

const App = () => {
  const { toggler } = useContext(UserContext); 

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-sky-300 p-4 sm:p-8">
      <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-xl mb-6 md:mb-0 md:mr-6"> {/* Added shadow and rounded corners */}
        <Users />
      </div>
      <div className="w-full md:w-2/3 flex items-center justify-center p-4 bg-white rounded-lg shadow-xl"> {/* Added shadow and rounded corners */}
        {toggler ? <Signin /> : <Signup />}
      </div>
    </div>
  );
};

export default App;