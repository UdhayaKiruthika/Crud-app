import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./CrudSlice";
import { useNavigate } from "react-router";

export default function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, age, city);
    dispatch(addUser({ name, age, city }));
    navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
