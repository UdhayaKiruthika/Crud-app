import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./Header";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/add" element={<CreateUser />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
