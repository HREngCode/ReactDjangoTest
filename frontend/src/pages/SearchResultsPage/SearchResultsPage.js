import React from 'react';

const SearchResultsPage = (props) => {
  return (
    <div>
      {props.videos &&
        props.videos.map((video) => {
          return <p key={video.id}>{video.snippet.title}</p>;
        })}
    </div>
  );
};

export default SearchResultsPage;
