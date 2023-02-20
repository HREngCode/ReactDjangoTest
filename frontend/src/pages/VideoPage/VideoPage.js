//General Imports
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

//Util Imports
import axios from 'axios';
import { KEY } from '../../localKey';

const VideoPage = () => {
    const [user, token] = useAuth();
    const {vidId} = useParams();
    const [vidText, setVidText] = useState('')
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect (() => {
        fetchRelatedVideos();
        fetchCommentsByVideoId();
    }, [])

    const fetchCommentsByVideoId = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/number/${vidId}/`);
            setComments(response.data.items);
            console.log(comments)  
          } catch (error) {
            console.log(error.response.data)
          }
    };

    const fetchRelatedVideos = async () => {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${vidId}&type=video&key=${KEY}&part=snippet&type=video&maxResults=5`);
          setRelatedVideos(response.data.items);
          console.log(relatedVideos)  
        } catch (error) {
          console.log(error.response.data)
        }
      };
    
      const addNewComment = async (newComment) => {
        try 
        {
            let response = await axios.post('http://127.0.0.1:8000/api/comments/changes/', newComment, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
        } 
        catch (error) 
        {
            console.log(error.message)
        }
    }    

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {
            video_id: vidId,
            text: vidText,
            user_id: user.id,     
        };
    //     addNewComment(newComment)
    } 

    return ( 
        <div>
            <h1>Video Details {vidId}</h1>
            <h1>
                This is the VideoPage
            </h1>
            <iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${vidId}?autoplay=1`} frameborder="0"></iframe>
            <div>
                {comments && comments.map((comment) => (
                <p key={comment.id}>
                <li>
                {comment.id}
                {comment.user}
                {comment.video_id}
                {comment.text}
                </li>
                </p>
                ))}
                {/* {videos && videos.map((video) => (
                <p key={video.id.videoId}>
                <li>
                <Link to={`/video/${video.id.videoId}`}><img src={video.snippet.thumbnails.default.url} alt="dog video"></img></Link>
                {video.snippet.title}
                {video.id.videoId}
                </li>
                </p>
                ))} */}
                <div>
                    <label className="input-post">
                    ADD COMMENT:
                    </label>
                    <form onSubmit={handleSubmit}>
                    <div className='newEntry'>
                    <label>Comment: </label>
                    <input value={vidText} onChange={(event) => setVidText(event.target.value)}/>
                    </div>
                    <button type='submit'>Post</button>
                    </form>
                        <div>
                            {relatedVideos && relatedVideos.map((relatedVideo) => (
                            <p key={relatedVideo.id.videoId}>
                            <li>
                            <Link to={`/video/${relatedVideo.id.videoId}`}><img src={relatedVideo.snippet.thumbnails.default.url} alt="dog video"></img></Link>
                            {relatedVideo.snippet.title}
                            {relatedVideo.id.videoId}
                            </li>
                            </p>
                            ))}
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideoPage;

// `https://youtube.com/embed/${vidId}?autoplay=0'