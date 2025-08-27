import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </main>
  )
}

export default App
