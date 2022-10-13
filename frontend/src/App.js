// General Imports
import { Routes, Route} from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {      

      return (
        <div className="App">
          <Navbar />
          <SearchBar/>
          <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><YouTubePage /></PrivateRoute>}/>
          <Route path="/search" element={<PrivateRoute><SearchResultsPage /></PrivateRoute>} />
          <Route path="/search/:videoId" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
          {/* <Route path="/search/:albumId" element={<PrivateRoute><VideoPage /></PrivateRoute>} /> */}
          </Routes>
          <Footer />
        </div>
      );
}

export default App;
