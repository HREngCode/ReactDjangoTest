import React from 'react';
import VideoPresenter from '../../components/ItemMapper';

const SearchResultsPage = (videos) => {
  return (
    <VideoPresenter videos={videos} />
  );
};

export default SearchResultsPage;
