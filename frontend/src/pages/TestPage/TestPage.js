// import React, { useEffect, useContext } from "react";
// import useAuth from "../../hooks/useAuth";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { KEY } from "../../localKey";
// import { VideoContext } from "../../context/VideoContext";

// const TestPage = () => {
//   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
//   // The "token" value is the JWT token that you will send in the header of any request requiring authentication
//   //TODO: Add an AddCars Page to add a car for a logged in user's garage
//   const [user, token] = useAuth();
//   const {videos, setVideos} = useContext(VideoContext);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=duckhunting&key${KEY}&part=snippet&type=video&maxResults=5`, {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setVideos(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchVideos();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       <Link to="/searchresults">Search Videos</Link>

//       {videos &&
//         videos.map((video) => (
//           <p key={video.id}>
//             {video.snippet.title}
//           </p>
//         ))}
//     </div>
//   );
// };

// export default TestPage;
