import React from 'react';
import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import SelectOption from '../Components/SelectOption';
import TextBox from '../Components/TextBox';
import '../App.css'

const Home = () => {
  return (
    <form  className="container">
      <SelectOption label="Category"/>
      <SelectOption label="Difficulty"/>
      <SelectOption label="Type"/>
      <TextBox />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Start Quiz
        </Button>
      </Box>
    </form>
  )
}

export default Home