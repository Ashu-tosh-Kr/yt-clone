import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {IndexSearch} from './IndexSearch'
import {Grid} from '@material-ui/core';
import {SearchBar} from './SearchBar';
import {VideoList} from './VideoList';
import {VideoDetail} from './VideoDetail'
import youtube from '../api/youtube'

function App() {
  const [vids, setVids] = useState({videos:[]});
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(searchTerm) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDmdWPLsTMGW3wGiuwywTxFL3VrR7gYBa0",
        q: searchTerm,
      }
    });
    console.log(response.data.items);
    setVids({videos: response.data.items, mainVideo: response.data.items[0]});
    setSubmitted(true);
  }

  const onVidSelect = (video) => {
    setVids({...vids,mainVideo:video});
  }

  return (
    <Router>
    <Route path='/' exact render={()=>(submitted ? <Redirect to='/main'/> : <IndexSearch submit={handleSubmit} />)} />
    <Route path='/main' render={()=>(
      <Grid container justify="center">
      <Grid item container xs={12} justify="center" spacing={5}>
        <Grid item xs={12}>
          <SearchBar submit={handleSubmit}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <VideoDetail mainVideo={vids.mainVideo}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <VideoList vidsList={vids.videos} onVidSelect={onVidSelect}/>
        </Grid>
      </Grid>
    </Grid>
    )} />
    </Router>
  );
}

export default App;
