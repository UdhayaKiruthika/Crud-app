import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteUser, searchByName } from "./CrudSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState();
  const users = useSelector((state) => state.users.data);
  console.log(users);
  function handleSearch() {
    console.log(searchName);
    console.log(users);
    // const searchBar = users.filter((user) => user.name === searchName);
    // console.log(searchBar);
    dispatch(searchByName(searchName));
  }

  return (
    <>
      <h1>Crud App</h1>
      <Link to="/add">Create USer</Link>
      <input
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>
                <Link to={`/edit/${user.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
