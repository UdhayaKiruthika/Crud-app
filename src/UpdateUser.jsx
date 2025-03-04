import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { updateUser } from "./CrudSlice";

export default function UpdateUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id == id);

  const { uname, uage, ucity } = user;
  const [name, setName] = useState(uname);
  const [age, setAge] = useState(uage);
  const [city, setCity] = useState(ucity);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleEdit(e) {
    e.preventDefault();
    // console.log(name, age, city);
    dispatch(updateUser({ id: id, name: name, age: age, city: city }));
    navigate("/");
  }
  return (
    <>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Age</label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <label htmlFor="">City</label>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </>
  );
}
