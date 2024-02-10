// Importing useState hook from React
import { useState } from "react";
// Importing components
import Card from "./Card";
import Add from "./Add";
import Edit from "./Edit";
import StatusFilterDropDown from "./StatusFilterDropDown";

// Define the main App component
function App() { 
  // Initial data
  const datas = [{ id: 1, name: "HTML", description: "Learn HTML Today",status:'Not Complete' }];

  // State variables using useState hook
  const [userdata, setuserdata] = useState(datas);
  const initialformstate = { id: 1, name: "", description: "",status: "" };
  const [currentuserdata, setcurrentuserdata] = useState(initialformstate);
  const [editing, setediting] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [cardStatus, setCardStatus] = useState('Not Complete');
  
  // Function to set editing mode and populate form data for editing
  const editfun = (datas) => {
    setediting(true);
    setcurrentuserdata({
      id: datas.id,
      name: datas.name,
      description: datas.description,
      status: datas.status
    });
  };

  // Function to add a new user data
  const adduser = (dataval) => {
    dataval.id = userdata.length + 1;
    setuserdata([...userdata, dataval]);
  };

  // Function to update user data
  const updateUser = (id, updateUser) => {
    setediting(false);
    setuserdata(userdata.map((user) => (user.id === id ? updateUser : user)));
  };

  // Function to delete user data
  const deletefun = (userId) => {
    setuserdata(userdata.filter((user) => user.id !== userId));
    setediting(false);
  };

  // Function to handle status filter selection
  const handleFilterSelect = (filterselect) => {
    setSelectedStatus(filterselect); 
  };

  // Function to handle status filter
  const handleFilter = (filterstatus) => {
    setCardStatus(filterstatus); 
  };

  // Function to handle status change for a user
  const handleStatusChange = (userId, newStatus) => {
    setuserdata(userdata.map((user) => (user.id === userId ? { ...user, status: newStatus } : user)));
  };

  // Filtering data based on selected status
  const filteredData = selectedStatus === 'All' ? userdata : userdata.filter(todo => todo.status === selectedStatus);

  // Rendering the JSX
  return (
    <section>
      <div className="mt-32 w-9/12 mx-auto ">
        {/* Conditional rendering of either Edit or Add component based on editing state */}
        {editing ? (
          <Edit
            currentuserdata={currentuserdata}
            setediting={setediting}
            updateUser={updateUser}
          />
        ) : (
          <Add adduser={adduser} setuserdata={setuserdata} />
        )}
      </div>

      <div className="w-10/12 mx-auto flex justify-between my-7">
        {/* Header */}
        <h1 className="text-black  font-medium text-xl mx-10">My todos</h1>

        {/* Status filter dropdown */}
        <div className="flex justify-center">
          <h1 className="text-black  font-medium text-xl">
            Status Filter :{" "}
          </h1>
          <div className='mx-2'>
            <StatusFilterDropDown onSelect={handleFilterSelect}/>
          </div>
          
        </div>
      </div>
    

      <div className="w-10/12 mx-auto flex mt-5">
        {/* Card component to display user data */}
        <Card
          setediting={setediting}
          editfun={editfun}
          deletefun={deletefun}
          userdata={filteredData} 
          onSelect={handleFilter}
          onStatusChange={handleStatusChange}
        />
      </div>
    </section>
  );
}

// Exporting the App component as the default export
export default App;
