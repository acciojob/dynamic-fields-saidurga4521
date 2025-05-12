import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const [records, setRecords] = useState([
    {
      name: "",
      age: "",
    },
  ]);
  const handleClick = () => {
    setRecords([
      ...records,
      {
        name: "",
        age: "",
      },
    ]);
  };
  const rmvhandleClick = (removeIndex) => {
    const updatedRecords = records.filter((_, index) => index != removeIndex);
    setRecords(updatedRecords);
  };

  const handleChange = (e, index) => {
    const updatedRecords = [...records];
    const { name, value } = e.target;
    updatedRecords[index][name] = value;
    setRecords(updatedRecords);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      {records.map((record, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e, index)}
            value={record.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={(e) => handleChange(e, index)}
            value={record.age}
          />
          <button
            onClick={() => {
              rmvhandleClick(index);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={handleClick}>Add More..</button>
      <button
        onClick={() => {
          console.log(records);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
