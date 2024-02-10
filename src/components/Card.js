import React from 'react';
import StatusDropDown from './StatusDropDown';

// Define the Card component
export default function Card({ userdata, deletefun, editfun, onSelect, onStatusChange }) {
  // Function to handle status selection
  const handleStatusSelect = (userId, newStatus) => {
    // Call the function passed from App.js to update status
    onStatusChange(userId, newStatus);
    // Call the onSelect function passed from App.js to update status filter
    onSelect(newStatus);
  };

  // Rendering the JSX
  return (
    <section>
      <div className="w-10/12 mx-auto flex mt-2">
        {/* Check if there is user data */}
        {userdata.length > 0 ? (
          // If there is data, map over it and render each card
          userdata.map((user) => (
            <div key={user.id} className="px-2 py-2 m-2 bg-card w-96 rounded-lg">             
              <p className="p-2">Name : {user.name}</p>
              <p className="p-2">Description : {user.description}</p>
              {/* Render StatusDropDown component and pass handleStatusSelect function */}
              <p className="p-2">Status <StatusDropDown onSelect={(newStatus) => handleStatusSelect(user.id, newStatus)} /></p>
              <div className="flex justify-end">
                {/* Button to edit user data */}
                <button
                  className="text-white bg-edit border px-9 py-2 m-2 rounded-md shadow-lg"
                  onClick={() => {
                    editfun(user);
                  }}
                >
                  Edit
                </button>
                {/* Button to delete user data */}
                <button
                  className="text-white bg-delete border px-7 py-2 m-2 rounded-md shadow-lg"
                  onClick={() => {
                    deletefun(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          // If there is no data, display a message
          <div className="col">
            <div className="bg-white shadow-md rounded-lg">
              <div className="p-4 text-center">
                No data here
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
