import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { t } from "i18next";

const FoodForms = () => {
  return (
    <Stack
      width={"70%"}
      height={"20%"}
      padding={"0.5rem"}
      justifyContent={"center"}
      sx={{ backgroundColor: "white" }}>
      <TextField label={"Food"} variant='standard' type='text' />
      <FormControl variant='standard'>
        <InputLabel id='demo-simple-select-standard-label'>
          {t("t-type-of-meal")}
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          label='Age'>
          <MenuItem value={t("t-breakfast")}>{t("t-breakfast")}</MenuItem>
          <MenuItem value={t("t-lunch")}>{t("t-lunch")}</MenuItem>
          <MenuItem value={t("t-dinner")}>{t("t-dinner")}</MenuItem>
        </Select>
      </FormControl>
      <Stack flexDirection={"row"} padding={"0.5rem"} width={"80%"}>
        <ButtonGroup>
          <Button variant='contained'>{t("t-add")}</Button>
          <Button variant='outlined'>{t("t-clear")}</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default FoodForms;
