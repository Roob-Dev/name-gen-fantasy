import React, { useState } from "react";
import firstName from "../files/fname";
import middleName from "../files/mname";
import lastName from "../files/lname";
import "./generator.css";

const NameGenerator = () => {
  const [fName, setFName] = useState(
    firstName[Math.floor(Math.random() * firstName.length)]
  );
  const [mName, setMName] = useState(
    middleName[Math.floor(Math.random() * middleName.length)]
  );
  const [lName, setLName] = useState(
    lastName[Math.floor(Math.random() * lastName.length)]
  );

  const handleClick = () => {
    setFName(firstName[Math.floor(Math.random() * firstName.length)]);
    setMName(middleName[Math.floor(Math.random() * middleName.length)]);
    setLName(lastName[Math.floor(Math.random() * lastName.length)]);
  };
  return (
    <div className="mainGen">
      <h1>
        {fName} {mName} {lName}
      </h1>
      <button className="btn" onClick={handleClick}>
        Generate your name!
      </button>
    </div>
  );
};

export default NameGenerator;
