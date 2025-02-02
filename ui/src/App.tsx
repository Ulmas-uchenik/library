import Books from "./pages/BookPageComponent"
import Register from "./pages/RegisterPageComponent"
import Login from "./pages/LoginPageComponent"
import NotFound from "./pages/NotFoundComponent"
import User from "./pages/UserPageComponent"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState<string | null>("")

  function logout() {
    localStorage.removeItem("token")
  }

  useEffect(() => {
    setItem(localStorage.getItem("token"))
  }, [])

  return (
    <BrowserRouter>
      <div>
        <nav className="app-nav-bar">
          {
            item !== null ?
              <a href="/profile">User</a> : null
          }
        
          {
            item !== null ?
              <a href="/">Books</a> : null
          }
          {
            item !== null ?
              <a href="/signin" className="place-self-end" onClick={() => {
                logout()
                const navigate = useNavigate()
                navigate("/signin")
              }}>Logout</a> : null
          }
          {
            item == null ?
              <a href="/signin">Signin</a> : null
          }
          {
            item == null ?
              <a href="/signup">Signup</a> : null
          }
        </nav>

        <Routes>
          <Route path="/signup" element={<Register />} index />
          <Route path="/profile" element={<User />} />
          <Route path="/" element={<Books />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
