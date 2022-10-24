import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

const ItemMapper = ({VideoPresenter}) => {
    const { videos } = useContext(VideoContext);

    return ( 
        <div>
            {videos.map(item => <VideoPresenter key={item.index} title={item.snippet.title} thumbnail={item.snippet.thumbnails.default} id={item.id.videoId}/>)}      
        </div> 
     );
}

export default ItemMapper;