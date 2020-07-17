import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

export const VideoItem = ({ video, onVidSelect }) => {
  return (
      <Grid item xs={12}>
        <Paper 
          style={{display:'flex', alignItems:'center', cursor:'pointer'}} 
          elevation={0}
          onClick={()=>onVidSelect(video)}> 
          <img src={video.snippet.thumbnails.medium.url} style={{marginRight:'20px', width:'100%', flex:'1'}} alt='Thumbnail'/>
          <Typography style={{padding:'1rem', flex:'1'}} variant='subtitle1'>{video.snippet.title} | {video.snippet.channelTitle}</Typography>
        </Paper>
      </Grid>
  )
}
