import { t } from "i18next";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useState } from "react";

interface HomeItem {
  id: number;
  text: string;
  icon?: React.ReactNode;
}

function useHomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [idItem, setIdItem] = useState<number | undefined>(undefined);
  const homeItems: Array<HomeItem> = [
    { id: 1, text: `${t("t-food")}`, icon: <RestaurantOutlinedIcon /> },
    { id: 2, text: `${t("t-water")}`, icon: <LocalDrinkOutlinedIcon /> },
    { id: 3, text: `${t("t-mood")}`, icon: <AddReactionOutlinedIcon /> },
    { id: 4, text: `${t("t-sleeps")}`, icon: <BedtimeOutlinedIcon /> },
  ];
  const itemOnClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.getAttribute("data-id");
    setIdItem(+id!);
    setIsOpen(true);
  };
  const itemHandleClose = () => setIsOpen(false);

  return {
    homeItems,
    isOpen,
    idItem,
    itemOnClickHandler,
    itemHandleClose,
  };
}

export default useHomePage;
