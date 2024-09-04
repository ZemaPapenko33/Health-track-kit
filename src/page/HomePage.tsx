import { Stack } from "@mui/material";
import useHomePage from "../hooks/use-home-page.hook";
import { ModalWrapperStyled } from "../components/ModalStyled/ModalWrapperStyled";
import Forms from "../components/Forms/Forms";

const HomePage = () => {
  const { homeItems, isOpen, idItem, itemOnClickHandler, itemHandleClose } =
    useHomePage();

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"0.5rem"}>
      {homeItems.map((item) => {
        return (
          <Stack
            key={item.id}
            data-id={item.id}
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
        <Forms id={idItem!} />
      </ModalWrapperStyled>
    </Stack>
  );
};

export default HomePage;
