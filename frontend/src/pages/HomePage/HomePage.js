import React, { useEffect, useContext } from "react";
import { VideoContext } from "../../context/VideoContext";


const HomePage = ({VideoPresenter}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  // TODO: Add an AddCars Page to add a car for a logged in user's garage
  const { videos } = useContext(VideoContext);
  // const { vidId, setVidId } = useContext(VideoContext);


  useEffect(() => {

  }, []);

  return ( 
      <div>
        {videos.map((video)=>{
             return(
              <VideoPresenter key={video.id.videoId} video={video}/>
              )  
        })}
      </div>
      

    );
  };
  
  export default HomePage;