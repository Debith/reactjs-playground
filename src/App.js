import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';

const Item = styled(ToggleButton)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  textTransform: 'none',
}));

const OPTIONS = [
  ['a', 'b', 'c'], 
  ['d', 'e',  'f'], 
  ['g', 'h', 'i'], 
];

class Choices {
  constructor() {
    this.selected = new Map();
  }

  choose(hand, newState) {
    this.selected[hand] = newState;
  }
}


function App() {
  // State of the clicked button
  // TODO: 
  const [selected, setSelected] = React.useState(false);
  // Storage for user's choices. This essentially holds the state of each button.
  let userChoices = new Choices();

  return (
    <div className="App">
      <Grid container spacing={0} width={850}>
          {OPTIONS.map((row, index) => (
            row.map((value, colIndex) => (
              <Grid item key={index} key={value}>
                <ToggleButton value={value} selected={selected} onChange={() => { 
                  setSelected(!selected);
                  userChoices.choose({value}, selected);
                  }}>
                  {value}
                </ToggleButton>
              </Grid>
            ))
          ))}       
      </Grid>
    </div>
  );
}

export default App;
