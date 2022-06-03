import React from 'react';
import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import SelectOption from '../Components/SelectOption';
import TextBox from '../Components/TextBox';
import {useNavigate} from 'react-router-dom';
import useAxios from '../Hooks/useAxios'
import '../App.css'

const Home = () => {

  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const questionOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };


  return (
    <form  className="container" onSubmit={handleSubmit}>
      <SelectOption label="Category" options={response.trivia_categories}/>
      <SelectOption label="Difficulty" options={questionOptions}/>
      <SelectOption label="Type"options={typeOptions}/>
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