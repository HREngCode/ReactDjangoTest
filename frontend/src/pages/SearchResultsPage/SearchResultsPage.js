import React from 'react';
import ItemMapper from '../../components/ItemMapper';

const SearchResultsPage = (videos) => {
  return (
    <ItemMapper videos={videos} />
  );
};

export default SearchResultsPage;
