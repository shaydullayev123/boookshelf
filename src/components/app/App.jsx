import Signup from "../signup/Signup.jsx";
import { Routes, Route } from "react-router-dom";
import Signin from "../signin/Signin.jsx";
import Home from "../homePage/Home.jsx";
import Error404 from "../404/Error404.jsx";
import Books from "../books/Books.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
