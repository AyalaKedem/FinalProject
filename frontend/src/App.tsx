import { Routes } from "react-router";
import { Route } from "react-router-dom";
import "./App.css";
import Categories from "./components/categories/Categories";
import SpecificCategory from "./components/specificCategory/SpecificCategory";
import AddCard from "./components/add-card/AddCard";
import LoginForm from "./components/login-form/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/home" element={<Categories />} />
        <Route path="/home/:endpoint" element={<SpecificCategory />} />
        <Route path="/add" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
