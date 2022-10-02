import axios from 'axios';
import React, { useState } from 'react';

const SearchBar = (props) => {

const [searchTerm, setSearchTerm] = useState('');


function searchVideos(event){
    event.preventDefault();

    props.setVideos()
}
    return ( 
        <form onSubmit={searchVideos}>
            <input placeholder='"Search Videos' type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit' >Search</button>
        </form>
     );


}
 
export default SearchBar;