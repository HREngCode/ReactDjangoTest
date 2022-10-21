// General Imports
import { Routes, Route} from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import ItemMapper from "./components/ItemMapper";
import VideoPresenter from "./components/VideoPresenter";
import axios from "axios";
import { KEY } from "./localKey";


function App() {      
  const [searchTerm, setSearchTerm] = useState(''); //variable in usestate to store search term typed in
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const fetchVideos = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`);
      console.log(response.data)  
      setVideos(response.data.items);
      navigate('/search');
    } catch (error) {
      console.log(error.response.data)
    }
  };
      return (
        <div className="App">
          <Navbar />
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} fetchVideos={fetchVideos}/>
          <ItemMapper videos={videos} itemComponent={VideoPresenter} itemName={"video"}/>
          <VideoPresenter videos={videos} />
          <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><YouTubePage fetchVideos={fetchVideos} videos={videos} searchTerm={searchTerm}/></PrivateRoute>}/>
          <Route path="/search" element={<PrivateRoute><SearchResultsPage VideoPresenter={VideoPresenter} /></PrivateRoute>} />
          <Route path="/video" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
          </Routes>
          <Footer />
        </div>
      );
}

export default App;
