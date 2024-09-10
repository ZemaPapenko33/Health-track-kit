import { Stack } from "@mui/material";
import { ModalWrapperStyled } from "../components/ModalStyled/ModalWrapperStyled";
import { Forms } from "../components/Forms/Forms";
import { useHomePage } from "../hooks/use-home-page.hook";

export const HomePage = () => {
  const { homeItems, isOpen, valueItem, itemOnClickHandler, itemHandleClose } =
    useHomePage();

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"0.5rem"}
      overflow={"hidden"}
      sx={{ boxSizing: "border-box" }}>
      {homeItems.map((item) => {
        return (
          <Stack
            key={item.id}
            data-value={item.value}
            border={0.1}
            borderRadius={"0.25rem"}
            padding={"0.25rem"}
            marginBottom={"0.25rem"}
            height={"20%"}
            width={"30%"}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={itemOnClickHandler}
            overflow={"hidden"}>
            {item.icon}
            {item.text}
          </Stack>
        );
      })}
      <ModalWrapperStyled open={isOpen} onClose={itemHandleClose}>
        <Forms value={valueItem!} />
      </ModalWrapperStyled>
    </Stack>
  );
};
