import React from 'react';
import { Grid } from '@material-ui/core';
import {VideoItem} from './VideoItem'

export const VideoList = ({vidsList, onVidSelect}) => {
   
  return (
    <Grid 
      container 
      spacing={1}>
      {vidsList.map((vid,id) => (<VideoItem key={id} video={vid} onVidSelect={onVidSelect}/>))}
    </Grid>
  )
}
