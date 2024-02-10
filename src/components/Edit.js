import { useEffect, useState } from "react";

// Define the Edit component
export default function Edit({ setediting, updateUser, currentuserdata }) {
  // State variable to store user data
  const [user, setuser] = useState(currentuserdata);

  // useEffect to update user data when currentuserdata changes
  useEffect(() => {
    setuser(currentuserdata);
  }, [currentuserdata]);

  // Function to handle input change in the form fields
  const handleChage = (event) => {
    const { name, value } = event.target;
    // Update user state with new input values
    setuser({ ...user, [name]: value });
  };

  // Rendering the JSX
  return (
    <div className="mt-32 w-9/12 mx-auto">
      {/* Header */}
      <div className="flex justify-center ">
        <h1 className="text-edit  font-medium text-xl">Edit Todo</h1>
      </div>

      {/* Form for editing todo */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Call updateUser function to update user data
          updateUser(user.id, user);
        }}
        className="mt-5 flex"
      >
        <div>
          <div className="my-2 ">
            {/* Input field for Name */}
            <input
              className="border w-96 p-2 border-edit rounded-md shadow-lg mx-12 my-5"
              value={user.name}
              name="name"
              onChange={handleChage}
              type="text"
              id="Name"
            />

            {/* Input field for Description */}
            <input
              className="border w-96 p-2 border-edit rounded-md shadow-lg mx-12 mb-5"
              value={user.description}
              name="description"
              onChange={handleChage}
              type="text"
              id="description"
            />
          </div>

          {/* Buttons for Save and Cancel */}
          <div className="flex mx-10">
            <button className="text-white bg-edit border px-7 py-2 m-2 rounded-md shadow-lg" type="submit">
              Save
            </button>
            <button className="text-white bg-red-700 border px-7 py-2 m-2 rounded-md shadow-lg" onClick={() => setediting(false)} type="button">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
