import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Users = () => {
  const { users, setusers } = useContext(UserContext);

  const deleteHandler = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setusers(filteredUsers);
    toast.success('User deleted successfully!');
  };

  return (
    <div className="w-full p-4"> 
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-gray-800"> 
          Registered Users
        </h2>

        {users.length !== 0 ? (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white rounded-lg p-4 shadow-md hover:shadow-lg hover:translate-y-[-2px] transition duration-200 ease-in-out" // Added hover effects
              >
                <div className="w-full sm:w-auto break-words">
                  <p className="font-semibold text-lg text-gray-900">{user.name}</p> {/* Slightly larger font */}
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={() => deleteHandler(user.id)}
                  className="self-end sm:self-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 ease-in-out" 
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-600 italic">
              No users registered yet. Sign up to add your first user!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;