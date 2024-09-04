import { Stack, Typography } from "@mui/material";
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import SentimentNeutralOutlinedIcon from "@mui/icons-material/SentimentNeutralOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

const MoodForm = () => {
  return (
    <Stack
      width={"70%"}
      height={"20%"}
      padding={"0.5rem"}
      justifyContent={"center"}
      sx={{ backgroundColor: "white" }}>
      <Typography variant='h6'>How are you feeling today?</Typography>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        padding={"0.5rem"}
        height={"50%"}>
        <MoodOutlinedIcon fontSize='large' />
        <SentimentNeutralOutlinedIcon fontSize='large' />
        <SentimentDissatisfiedOutlinedIcon fontSize='large' />
      </Stack>
    </Stack>
  );
};

export default MoodForm;
