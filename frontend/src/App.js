// General Imports
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from './components/SearchBar/SearchBar';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([])
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []); //used when comoponent is first mounted

  const fetchUsers = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data)
    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <div>
      <Navbar />
      <div>
        <SearchBar videos={videos} setVideos={setVideos}/>
      </div>
      <Routes>
      <Route
          path="/"
          element={
            <PrivateRoute>
              <YouTubePage />
              {users && users.map(user => {
                return<li key={user.id}>{user.name}</li>
              })}
              {videos && videos.map(video => {
              return<li key={video.id}>{video.name}</li>
              })}
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
