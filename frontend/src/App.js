// General Imports
import { Routes, Route} from "react-router-dom";
import "./App.css";
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";


// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import { VideoContext } from "./context/VideoContext";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPresenter from "./components/VideoPresenter";
import axios from 'axios';
import {KEY} from "./localKey"


function App() {      
  const {setVideos} = useContext(VideoContext);

  const fetchVideos = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`);
      console.log(response.data)  
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.response.data)
    }
  };
      return (
        <div className="App">
          <Navbar />
          <SearchBar fetchVideos={fetchVideos}/>
         
          <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><HomePage VideoPresenter={VideoPresenter} /></PrivateRoute>}/>
          <Route path="/search" element={<PrivateRoute><SearchResultsPage /></PrivateRoute>} />
          <Route path="/video" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
          </Routes>
          <Footer />
        </div>
      );
}

export default App;
