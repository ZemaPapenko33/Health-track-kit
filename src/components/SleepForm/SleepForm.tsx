import { Button, ButtonGroup, Stack, TextField } from "@mui/material";
import { t } from "i18next";

export const SleepForm = () => {
  return (
    <Stack
      width={"70%"}
      height={"20%"}
      padding={"0.5rem"}
      justifyContent={"center"}
      sx={{ backgroundColor: "white" }}>
      <TextField label={"Sleep"} variant='standard' type='text' />
      <TextField label={"Get up"} variant='standard' type='text' />
      <ButtonGroup>
        <Button variant='contained'>{t("t-add")}</Button>
        <Button variant='outlined'>{t("t-clear")}</Button>
      </ButtonGroup>
    </Stack>
  );
};
