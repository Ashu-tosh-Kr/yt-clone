import React, {useState} from 'react';
import { Paper,TextField } from '@material-ui/core';

export const IndexSearch = (props) => {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(text);
    setText('');
    
  }

  return (
    
    <div style={{display:'flex', height:'100vh', justifyContent:'center', alignItems:'center'}}>
      <Paper elevation={3} style={{ padding:'25px'}}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label='Search...' onChange={(e)=>setText(e.target.value)} value={text} />
        </form>
      </Paper>
    </div>
  )
}
