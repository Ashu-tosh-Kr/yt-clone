import React, { useState } from 'react';
import { Paper,TextField } from '@material-ui/core';

export const SearchBar = (props) => {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    props.submit(text);
    e.preventDefault();
    setText('');
  }

  return (
    <div>
      <Paper elevation={3} style={{ padding:'25px' }}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label='Search...' onChange={(e)=>setText(e.target.value)} value={text} />
        </form>
      </Paper>
    </div>
  )
}
