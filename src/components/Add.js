import { useState } from "react";

// Define the Add component
export default function Add({ adduser }) {
  // Initial form state
  const initialformstate = { id: null, name: "", description: "",status: ""};
  // State variable for user data
  const [user, setuser] = useState(initialformstate);

  // Function to handle input change in the form fields
  const handleChage = (event) => {
    const { name, value } = event.target;
    // Update user state with new input values
    setuser({ ...user, [name]: value,status:"Not complete" });
  };

  // Rendering the JSX
  return (
    <div className="mt-20 w-9/12 mx-auto">
      {/* Header */}
      <div className="flex justify-center ">
        <h1 className="text-edit  font-medium text-xl">My Todo</h1>
      </div>

      {/* Form for adding new todo */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Check if name and description are not empty
          if (user.name !== "" && user.description !== "") {
            // Call adduser function to add new todo
            adduser(user);
            // Reset form state after submission
            setuser(initialformstate);
          }
        }}  className="mt-16 flex"
      >
        {/* Input field for TodoName */}
        <input
          className="border w-96 p-2 border-edit rounded-md shadow-lg"
          value={user.name}
          name="name"
          onChange={handleChage}
          type="text"
          id="Name"
          placeholder="TodoName"
        />
        {/* Input field for TodoDescription */}
        <input
          className="border w-96 p-2 border-edit rounded-md shadow-lg mx-12"
          value={user.description}
          name="description"
          onChange={handleChage}
          type="text"
          id="description"
          placeholder="TodoDescription"
        />
        {/* Submit button */}
        <button className="text-white bg-edit border w-52 p-2 rounded-md shadow-lg" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}
