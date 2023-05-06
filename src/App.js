
import './App.css';
import Login from "./pages/auth";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import {AuthProvider} from "./context/AuthProvider";

function App() {
  return (
      <AuthProvider>
   <Router>
       <Routes>
       <Route exact path="/login" element={<Login/>} />
       <Route path="/" element={<Dashboard/>} />
       </Routes>
   </Router>
          </AuthProvider>
  );
}

export default App;
