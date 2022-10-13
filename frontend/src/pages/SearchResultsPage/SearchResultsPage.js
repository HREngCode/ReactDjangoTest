import React from 'react';

const SearchResultsPage = (props) => {

    return ( 
        <div>
            {props.videos && props.videos.map((video) => {
              return <div>
                {video.snippet.title}
              </div>
            })}
        </div>
     );
}
 
export default SearchResultsPage;