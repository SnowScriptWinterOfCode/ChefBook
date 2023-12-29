import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import { RecipeProvider } from "./context/recipeContext";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="tasty-tips" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
