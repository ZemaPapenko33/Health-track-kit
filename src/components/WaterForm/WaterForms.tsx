import { Button, ButtonGroup, Stack, TextField } from "@mui/material";
import { t } from "i18next";

export const WaterForms = () => {
  return (
    <Stack
      width={"70%"}
      height={"20%"}
      padding={"0.5rem"}
      justifyContent={"center"}
      sx={{ backgroundColor: "white" }}>
      <TextField
        label='Water ml'
        variant='standard'
        type='number'
        margin='normal'
      />
      <ButtonGroup>
        <Button variant='contained'>{t("t-add")}</Button>
        <Button variant='outlined'>{t("t-clear")}</Button>
      </ButtonGroup>
    </Stack>
  );
};
