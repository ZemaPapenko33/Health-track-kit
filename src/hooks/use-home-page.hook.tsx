import { t } from "i18next";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import { useState } from "react";

interface HomeItem {
  id: number;
  text: string;
  icon?: React.ReactNode;
  value: string;
}

export const useHomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valueItem, setValueItem] = useState<string>("");
  const homeItems: Array<HomeItem> = [
    {
      id: 1,
      text: `${t("t-food")}`,
      icon: <RestaurantOutlinedIcon />,
      value: "food",
    },
    {
      id: 2,
      text: `${t("t-water")}`,
      icon: <LocalDrinkOutlinedIcon />,
      value: "water",
    },
    {
      id: 3,
      text: `${t("t-mood")}`,
      icon: <AddReactionOutlinedIcon />,
      value: "mood",
    },
    {
      id: 4,
      text: `${t("t-sleeps")}`,
      icon: <BedtimeOutlinedIcon />,
      value: "sleep",
    },
    {
      id: 5,
      text: `${t("t-calendar")}`,
      icon: <EditCalendarOutlinedIcon />,
      value: "calendar",
    },
  ];
  const itemOnClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const value: string = event.currentTarget.getAttribute("data-value")!;
    setValueItem(value);
    setIsOpen(true);
  };
  const itemHandleClose = () => setIsOpen(false);

  return {
    homeItems,
    isOpen,
    valueItem,
    itemOnClickHandler,
    itemHandleClose,
  };
};
